import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CurrencyInputComponent } from '../../shared/components/currency-input/currency-input.component';
import { CurrencySelectComponent } from '../../shared/components/currency-select/currency-select.component';
import Currency from '../../../../../shared/interfaces/currency.interface';
import { CurrencyService } from '../../shared/services/currency.service';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { mainChartConfig } from './configs/main-chart.config';
import { tableChartConfig } from './configs/table-chart.config';
import { DecimalPipe } from '@angular/common';
import { NgClass } from '@angular/common';
import fadeIn from '../../shared/animations/fade-in.animation';
import expand from '../../shared/animations/expand.animation';
import ConversionData from '../../shared/interfaces/conversion-data.interface';
import ConversionTableResult from '../../shared/interfaces/conversion-table-result.interface';
import ConversionTableResponse from '../../../../../shared/interfaces/conversion-table-response.interface';
import ConversionTableData from '../../shared/interfaces/conversion-table-data.interface';
import ConversionResponse from '../../../../../shared/interfaces/conversion-response.interface';
import { ErrorModalService } from '../../shared/services/error-modal.service';

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
    base: { code: '', name: '', symbol: '' },
    target: { code: '', name: '', symbol: '' },
    amount: undefined,
    response: undefined,
  };
  tableIsLoading: boolean = true;
  conversionTableData: ConversionTableData = {
    base: { code: '', name: '', symbol: '' },
    result: [],
  };

  // References the full-width white container
  @ViewChild('whiteFullWidthContainer') whiteFullWidthContainer!: ElementRef;

  // Injects the currency and error modal services
  constructor(
    private readonly currencyService: CurrencyService,
    private readonly errorModalService: ErrorModalService,
  ) {}

  // Fetches the currency list and sets the default conversion data
  ngOnInit(): void {
    this.currencyService.getCurrencyList().subscribe({
      next: (currencyList: Currency[]) => {
        this.currencyList = currencyList;
        this.conversionData.base = currencyList[0];
        this.conversionData.target = currencyList[1];
        this.conversionIsLoading = false;
        this.getConversionTable(this.conversionData.base);
      },
      error: (error) => {
        console.error(error);
        this.errorModalService.open('Oops! Failed to fetch currency list. Please try again later.');
      },
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
    this.conversionData.base = this.conversionData.target;
    this.conversionData.target = temp;
    if (this.conversionData.response) this.convertCurrency();
  }

  // Handles the conversion
  convertCurrency(): void {
    if (!this.conversionData.amount) {
      this.inputError = true;
      return;
    }
    if (this.inputError) this.inputError = false;
    this.conversionIsLoading = true;
    this.currencyService
      .convert(this.conversionData.base, this.conversionData.target, this.conversionData.amount)
      .subscribe({
        next: (conversionResponse: ConversionResponse) => {
          this.mainChartOptions = {
            ...mainChartConfig,
            series: [
              {
                ...mainChartConfig.series![0],
                name: `${conversionResponse.base.currency.code} to ${conversionResponse.result.currency.code}`,
                data: conversionResponse.result.chartData as any, // eslint-disable-line @typescript-eslint/no-explicit-any
              },
            ],
          };
          if (window.innerWidth < 640) {
            this.mainChartOptions.plotOptions!.areaspline = {
              ...mainChartConfig.plotOptions!.areaspline,
              states: {
                hover: {
                  enabled: false,
                },
              },
            };
            this.mainChartOptions.tooltip = {
              enabled: false,
            };
          }
          this.conversionData.response = conversionResponse;
          this.conversionIsLoading = false;
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  // Fetches the conversion table
  private getConversionTable(base: Currency): void {
    this.currencyService.getConversionTable(base).subscribe({
      next: (conversionTableResponse: ConversionTableResponse) => {
        this.setTableData(conversionTableResponse);
        this.tableIsLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.errorModalService.open('Oops! Failed to fetch conversion table. Please try again later.');
      },
    });
  }

  // Handles the base currency change for the table
  setBaseCurrencyOfTable(base: Currency): void {
    this.tableIsLoading = true;
    this.getConversionTable(base);
  }

  // Sets the data for the table
  private setTableData(conversionTableResponse: ConversionTableResponse): void {
    this.conversionTableData = conversionTableResponse;
    this.conversionTableData.result.forEach((entry: ConversionTableResult) => {
      entry.dailyChange = (entry.chartData.at(-1)![1] * 100) / entry.chartData[0][1] - 100;
      entry.chartOptions = {
        ...tableChartConfig,
        series: [
          {
            ...tableChartConfig.series![0],
            name: `${conversionTableResponse.base.code} to ${entry.currency.code}`,
            data: entry.chartData as any, // eslint-disable-line @typescript-eslint/no-explicit-any
          },
        ],
      };
      if (window.innerWidth < 640) {
        entry.chartOptions.plotOptions!.spline = {
          ...tableChartConfig.plotOptions!.spline,
          states: {
            hover: {
              enabled: false,
            },
          },
        };
        entry.chartOptions.tooltip = {
          enabled: false,
        };
      }
    });
  }
}
