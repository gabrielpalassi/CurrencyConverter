import { Component } from '@angular/core';
import { CurrencyInputComponent } from '../../shared/components/currency-input/currency-input.component';
import { CurrencySelectComponent } from '../../shared/components/currency-select/currency-select.component';
import { Currency } from '../../shared/interfaces/currency.interface';
import { CurrencyService } from '../../shared/services/currency.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { mainChartConfig } from './main-chart.config';
import { tableChartConfig } from './table-chart.config';
import { DecimalPipe } from '@angular/common';
import { NgClass } from '@angular/common';

interface ConversionData {
  from: Currency;
  to: Currency;
  value: number | undefined;
}

interface ConversionResponse {
  from: {
    currency: Currency;
    value: number;
  };
  to: {
    currency: Currency;
    value: number;
    chartData: any;
  };
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CurrencyInputComponent,
    CurrencySelectComponent,
    HighchartsChartModule,
    DecimalPipe,
    NgClass
  ],
  animations: [
    trigger('expand', [
      transition(':enter', [
        style({ height: 0, overflow: 'hidden' }),
        animate('500ms ease', style({ height: '124px', overflow: 'hidden' })),
      ]),
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease', style({ opacity: 0 })),
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Highcharts: typeof Highcharts = Highcharts;
  mainChartOptions: Highcharts.Options = mainChartConfig;
  tableChartOptions: Highcharts.Options = tableChartConfig;
  conversionData: ConversionData = {
    from: { shortName: '', fullName: '', flag: '', prefix: '' },
    to: { shortName: '', fullName: '', flag: '', prefix: '' },
    value: undefined,
  };
  conversionTableData: any;
  currencyList: Currency[] | undefined;
  conversionResponse: ConversionResponse | undefined;
  inputError: boolean = false;
  pageIsLoading: boolean = false;
  conversionIsLoading: boolean = false;

  // Injects the currency service
  constructor(private readonly currencyService: CurrencyService) { }

  // Fetches the currency list and sets the default conversion data
  ngOnInit(): void {
    this.pageIsLoading = true;
    Promise.all([
      this.currencyService.getCurrencyList(),
      this.currencyService.getConversionTable(this.conversionData.from),
    ]).then(([currencyList, conversionTable]) => {
      this.currencyList = currencyList;
      this.conversionData.from = currencyList[0];
      this.conversionData.to = currencyList[1];
      this.conversionTableData = conversionTable;
      this.conversionTableData.to.forEach((entry: any) => {
        entry.dailyChange = ((entry.chartData.at(-1)[1] * 100) / entry.chartData[0][1]) - 100
        entry.chartOptions = {
          ...this.tableChartOptions,
          series: [
            {
              ...this.tableChartOptions.series![0],
              name: `${conversionTable.from.currency.shortName} to ${entry.currency.shortName}`,
              data: entry.chartData,
            }
          ]
        };
      });
      this.pageIsLoading = false;
    });
  }

  // Switches the currencies
  switchConversionCurrencies(): void {
    const temp = this.conversionData.from;
    this.conversionData.from = this.conversionData.to;
    this.conversionData.to = temp;
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
      .convert(
        this.conversionData.from,
        this.conversionData.to,
        this.conversionData.value,
      )
      .then((response) => {
        this.mainChartOptions = {
          ...this.mainChartOptions,
          series: [
            {
              ...this.mainChartOptions.series![0],
              name: `${response.from.currency.shortName} to ${response.to.currency.shortName}`,
              data: response.to.chartData,
            }
          ]
        };
        this.conversionResponse = response;
        this.conversionIsLoading = false;
      });
  }
}
