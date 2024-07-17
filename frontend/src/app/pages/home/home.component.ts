import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CurrencyInputComponent } from '../../shared/components/currency-input/currency-input.component';
import { CurrencySelectComponent } from '../../shared/components/currency-select/currency-select.component';
import { Currency } from '../../shared/interfaces/currency.interface';
import { CurrencyService } from '../../shared/services/currency.service';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { mainChartConfig } from './main-chart.config';
import { tableChartConfig } from './table-chart.config';
import { DecimalPipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { fadeIn } from '../../shared/animations/fade-in.animation';
import { expand } from '../../shared/animations/expand.animation';

interface ConversionResult {
  currency: Currency;
  value: number;
  chartData: [x: number, y: number][];
}

interface ConversionTableResult extends ConversionResult {
  dailyChange: number;
  chartOptions: Highcharts.Options;
}

interface ConversionResponse {
  base: {
    currency: Currency;
    value: number;
  };
  result: ConversionResult;
}

interface ConversionData {
  base: Currency;
  destiny: Currency;
  value: number | undefined;
  response: ConversionResponse | undefined;
}

interface ConversionTableResponse {
  base: Currency;
  result: ConversionTableResult[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyInputComponent, CurrencySelectComponent, HighchartsChartModule, DecimalPipe, NgClass],
  animations: [expand, fadeIn],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Highcharts: typeof Highcharts = Highcharts;
  mainChartOptions: Highcharts.Options = mainChartConfig;
  tableChartOptions: Highcharts.Options = tableChartConfig;
  inputError: boolean = false;
  conversionIsLoading: boolean = true;
  currencyList: Currency[] | undefined;
  conversionData: ConversionData = {
    base: { shortName: '', fullName: '', flag: '', prefix: '' },
    destiny: { shortName: '', fullName: '', flag: '', prefix: '' },
    value: undefined,
    response: undefined,
  };
  tableIsLoading: boolean = true;
  conversionTableResponse: ConversionTableResponse = {
    base: { shortName: '', fullName: '', flag: '', prefix: '' },
    result: [],
  };

  // References the full-width white container
  @ViewChild('whiteFullWidthContainer') whiteFullWidthContainer!: ElementRef;

  // Injects the currency service
  constructor(private readonly currencyService: CurrencyService) {}

  // Fetches the currency list and sets the default conversion data
  ngOnInit(): void {
    this.currencyService.getCurrencyList().then((currencyList) => {
      this.currencyList = currencyList;
      this.conversionData.base = currencyList[0];
      this.conversionData.destiny = currencyList[1];
      this.conversionIsLoading = false;
      this.currencyService.getConversionTable(this.conversionData.base).then((conversionTableData) => {
        this.setTableData(conversionTableData);
        this.tableIsLoading = false;
      });
    });
  }

  // Adjusts the full-width white container height after the view has been initialized
  ngAfterViewChecked() {
    this.setContainerHeight();
  }

  // Adjusts the fullwidth white container height on window resize
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setContainerHeight();
  }

  // Check if body height is less than viewport height and adjust the fullwidth white container height to fill the screen
  private setContainerHeight() {
    this.whiteFullWidthContainer.nativeElement.style.height = 'auto';
    const bodyHeight = document.body.clientHeight;
    const viewportHeight = window.innerHeight;
    if (bodyHeight < viewportHeight) {
      const offsetTop = this.whiteFullWidthContainer.nativeElement.offsetTop;
      const height = viewportHeight - offsetTop;
      this.whiteFullWidthContainer.nativeElement.style.height = `${height}px`;
    } else {
      this.whiteFullWidthContainer.nativeElement.style.height = 'auto';
    }
  }

  // Switches the currencies
  switchConversionCurrencies(): void {
    const temp = this.conversionData.base;
    this.conversionData.base = this.conversionData.destiny;
    this.conversionData.destiny = temp;
    if (this.conversionData.response) this.convertCurrency();
  }

  // Handles the conversion
  convertCurrency(): void {
    if (!this.conversionData.value) {
      this.inputError = true;
      return;
    }
    if (this.inputError) this.inputError = false;
    this.conversionIsLoading = true;
    this.currencyService
      .convert(this.conversionData.base, this.conversionData.destiny, this.conversionData.value)
      .then((response) => {
        this.mainChartOptions = {
          ...this.mainChartOptions,
          series: [
            {
              ...this.mainChartOptions.series![0],
              name: `${response.base.currency.shortName} to ${response.result.currency.shortName}`,
              data: response.result.chartData,
            },
          ],
        };
        this.conversionData.response = response;
        this.conversionIsLoading = false;
      });
  }

  // Handles the base currency change for the table
  setBaseCurrencyOfTable(base: Currency): void {
    this.tableIsLoading = true;
    this.currencyService.getConversionTable(base).then((conversionTableData) => {
      this.setTableData(conversionTableData);
      this.tableIsLoading = false;
    });
  }

  // Sets the data for the table
  private setTableData(conversionTableData: ConversionTableResponse): void {
    this.conversionTableResponse = conversionTableData;
    this.conversionTableResponse.result.forEach((entry: ConversionTableResult) => {
      entry.dailyChange = (entry.chartData.at(-1)![1] * 100) / entry.chartData[0][1] - 100;
      entry.chartOptions = {
        ...this.tableChartOptions,
        series: [
          {
            ...this.tableChartOptions.series![0],
            name: `${conversionTableData.base.shortName} to ${entry.currency.shortName}`,
            data: entry.chartData as any,
          },
        ],
      };
    });
  }
}
