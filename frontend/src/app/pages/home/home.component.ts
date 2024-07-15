import { Component } from '@angular/core';
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
  origin: {
    currency: Currency;
    value: number;
  };
  to: ConversionResult;
}

interface ConversionData {
  origin: Currency;
  to: Currency;
  value: number | undefined;
  response: ConversionResponse | undefined;
}

interface ConversionTableData {
  origin: Currency;
  to: ConversionTableResult[];
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
    origin: { shortName: '', fullName: '', flag: '', prefix: '' },
    to: { shortName: '', fullName: '', flag: '', prefix: '' },
    value: undefined,
    response: undefined,
  };
  tableIsLoading: boolean = true;
  conversionTableData: ConversionTableData = {
    origin: { shortName: '', fullName: '', flag: '', prefix: '' },
    to: [],
  };

  // Injects the currency service
  constructor(private readonly currencyService: CurrencyService) {}

  // Fetches the currency list and sets the default conversion data
  ngOnInit(): void {
    this.currencyService.getCurrencyList().then((currencyList) => {
      this.currencyList = currencyList;
      this.conversionData.origin = currencyList[0];
      this.conversionData.to = currencyList[1];
      this.conversionIsLoading = false;
      this.currencyService.getConversionTable(this.conversionData.origin).then((conversionTable) => {
        this.setTableData(conversionTable);
        this.tableIsLoading = false;
      });
    });
  }

  // Switches the currencies
  switchConversionCurrencies(): void {
    const temp = this.conversionData.origin;
    this.conversionData.origin = this.conversionData.to;
    this.conversionData.to = temp;
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
      .convert(this.conversionData.origin, this.conversionData.to, this.conversionData.value)
      .then((response) => {
        this.mainChartOptions = {
          ...this.mainChartOptions,
          series: [
            {
              ...this.mainChartOptions.series![0],
              name: `${response.origin.currency.shortName} to ${response.to.currency.shortName}`,
              data: response.to.chartData,
            },
          ],
        };
        this.conversionData.response = response;
        this.conversionIsLoading = false;
      });
  }

  // Handles the origin currency change for the table
  setOriginCurrencyOfTable(origin: Currency): void {
    this.tableIsLoading = true;
    this.currencyService.getConversionTable(origin).then((conversionTable) => {
      this.setTableData(conversionTable);
      this.tableIsLoading = false;
    });
  }

  // Sets the data for the table
  setTableData(conversionTable: ConversionTableData): void {
    this.conversionTableData = conversionTable;
    this.conversionTableData.to.forEach((entry: ConversionTableResult) => {
      entry.dailyChange = (entry.chartData.at(-1)![1] * 100) / entry.chartData[0][1] - 100;
      entry.chartOptions = {
        ...this.tableChartOptions,
        series: [
          {
            ...this.tableChartOptions.series![0],
            name: `${conversionTable.origin.shortName} to ${entry.currency.shortName}`,
            data: entry.chartData as any,
          },
        ],
      };
    });
  }
}
