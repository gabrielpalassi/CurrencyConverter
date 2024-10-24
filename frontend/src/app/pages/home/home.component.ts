import { Component, inject, signal } from '@angular/core';
import { CurrencyInputComponent } from '../../shared/components/currency-input/currency-input.component';
import { CurrencySelectComponent } from '../../shared/components/currency-select/currency-select.component';
import Currency from '../../../../../shared/interfaces/currency';
import { CurrencyService } from '../../shared/services/currency.service';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { mainChartConfig } from './utlils/main-chart.config';
import { tableChartConfig } from './utlils/table-chart.config';
import { DecimalPipe } from '@angular/common';
import fadeIn from '../../shared/animations/fade-in';
import expand from '../../shared/animations/expand';
import ConversionData from '../../shared/interfaces/conversion-data';
import ConversionTableResult from '../../shared/interfaces/conversion-table-result';
import ConversionTableResponse from '../../../../../shared/interfaces/conversion-table-response';
import ConversionTableData from '../../shared/interfaces/conversion-table-data';
import ConversionResponse from '../../../../../shared/interfaces/conversion-response';
import { ErrorModalService } from '../../shared/services/error-modal.service';
import { getChartOptions } from './utlils/chart-utils';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyInputComponent, CurrencySelectComponent, HighchartsChartModule, DecimalPipe],
  animations: [expand, fadeIn],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  // Inject services
  private readonly currencyService = inject(CurrencyService);
  private readonly errorModalService = inject(ErrorModalService);

  // Properties
  readonly Highcharts: typeof Highcharts = Highcharts;
  currencyList = signal<Currency[] | undefined>(undefined);

  inputError = signal<boolean>(false);
  conversionIsLoading = signal<boolean>(true);
  conversionData = signal<ConversionData>({
    base: undefined,
    target: undefined,
    amount: undefined,
    response: undefined,
  });
  mainChartOptions = signal<Highcharts.Options>(mainChartConfig);

  tableIsLoading = signal<boolean>(true);
  conversionTableData = signal<ConversionTableData>({
    base: undefined,
    result: [],
  });
  tableChartOptions = signal<Highcharts.Options>(tableChartConfig);

  // Fetches the currency list and sets the default conversion data
  ngOnInit(): void {
    this.currencyService.getCurrencyList().subscribe({
      next: (currencyList: Currency[]) => {
        if (currencyList.length < 2) {
          this.errorModalService.open('Oops! Failed to fetch currency list. Please try again later.');
          return;
        }

        this.currencyList.set(currencyList);
        this.conversionData.update((conversionData) => ({ ...conversionData, base: currencyList[0] }));
        this.conversionData.update((conversionData) => ({ ...conversionData, target: currencyList[1] }));
        this.conversionIsLoading.set(false);

        this.getConversionTable(this.conversionData().base!);
      },
      error: (error) => {
        console.error(error);
        this.errorModalService.open('Oops! Failed to fetch currency list. Please try again later.');
      },
    });
  }

  // Fetches the conversion
  getConvertion(): void {
    if (!this.conversionData().amount) {
      this.inputError.set(true);
      return;
    }

    if (!this.conversionData().base || !this.conversionData().target) {
      this.errorModalService.open('Please select a base and target currency.');
      return;
    }

    if (this.inputError) this.inputError.set(false);
    this.conversionIsLoading.set(true);

    this.currencyService
      .convert(this.conversionData().base!, this.conversionData().target!, this.conversionData().amount!)
      .subscribe({
        next: (conversionResponse: ConversionResponse) => {
          this.conversionData.update((conversionData) => ({ ...conversionData, response: conversionResponse }));
          this.mainChartOptions.set(
            getChartOptions(
              mainChartConfig,
              conversionResponse.base.currency.code,
              conversionResponse.result.currency.code,
              conversionResponse.result.chartData,
              window.innerWidth,
            ),
          );
          this.conversionIsLoading.set(false);
        },
        error: (error) => {
          console.error(error);
          this.errorModalService.open('Oops! Failed to convert currency. Please try again later.');
        },
      });
  }

  // Fetches the conversion table
  getConversionTable(base: Currency): void {
    this.tableIsLoading.set(true);

    this.currencyService.getConversionTable(base).subscribe({
      next: (conversionTableResponse: ConversionTableResponse) => {
        if (
          !conversionTableResponse.base ||
          !conversionTableResponse.result ||
          conversionTableResponse.result.length === 0
        ) {
          this.errorModalService.open('Oops! Failed to fetch conversion table. Please try again later.');
          return;
        }

        conversionTableResponse.result.forEach((entry: ConversionTableResult) => {
          entry.dailyChange = (entry.chartData.at(-1)![1] * 100) / entry.chartData[0][1] - 100;
          entry.chartOptions = getChartOptions(
            tableChartConfig,
            conversionTableResponse.base!.code,
            entry.currency.code,
            entry.chartData,
            window.innerWidth,
          );
        });
        this.conversionTableData.set(conversionTableResponse);
        this.tableIsLoading.set(false);
      },
      error: (error) => {
        console.error(error);
        this.errorModalService.open('Oops! Failed to fetch conversion table. Please try again later.');
      },
    });
  }

  // Switches the conversion currencies
  switchConversionCurrencies(): void {
    const temp = this.conversionData().base;
    this.conversionData.update((conversionData) => ({ ...conversionData, base: conversionData.target }));
    this.conversionData.update((conversionData) => ({ ...conversionData, target: temp }));
    if (this.conversionData().response) this.getConvertion();
  }
}
