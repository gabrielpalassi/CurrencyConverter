import { Component, inject, signal } from '@angular/core';
import { CurrencyInputComponent } from '@/app/shared/components/currency-input/currency-input.component';
import { CurrencySelectComponent } from '@/app/shared/components/currency-select/currency-select.component';
import { Currency } from '@shared/types';
import { CurrencyService } from '@/app/shared/services/currency.service';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { mainChartConfig } from '@/app/pages/home/utils/main-chart.config';
import { tableChartConfig } from '@/app/pages/home/utils/table-chart.config';
import { DecimalPipe } from '@angular/common';
import { fadeIn } from '@/app/shared/animations/fade-in';
import { expand } from '@/app/shared/animations/expand';
import { ConversionData } from '@/app/shared/types/conversion-data';
import { ConversionTableResult } from '@/app/shared/types/conversion-table-result';
import { ConversionTableResponse } from '@shared/types';
import { ConversionTableData } from '@/app/shared/types/conversion-table-data';
import { ConversionResponse } from '@shared/types';
import { ErrorModalService } from '@/app/shared/services/error-modal.service';
import { getChartOptions } from '@/app/pages/home/utils/chart-utils';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyInputComponent, CurrencySelectComponent, HighchartsChartModule, DecimalPipe],
  animations: [expand, fadeIn],
  templateUrl: 'home.component.html',
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
  mainChartIsLoading = signal<boolean>(true);

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
        this.conversionData.update((conversionData) => ({
          ...conversionData,
          base: currencyList[0],
          target: currencyList[1],
        }));
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
    const timerStart = Date.now();
    this.conversionIsLoading.set(true);
    this.mainChartIsLoading.set(true);

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
          const timerEnd = Date.now();
          if (timerEnd - timerStart <= 2) {
            setTimeout(() => {
              this.mainChartIsLoading.set(false);
            });
          } else {
            this.mainChartIsLoading.set(false);
          }
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

  // Set currencies for conversion
  setConversionCurrencies(currency: Currency, type: 'base' | 'target'): void {
    if (currency !== this.conversionData()[type]) {
      this.conversionData.update((conversionData) => ({
        ...conversionData,
        [type]: currency,
      }));
      if (this.conversionData().amount) this.getConvertion();
    }
  }

  // Switches the conversion currencies
  switchConversionCurrencies(): void {
    this.conversionData.update((conversionData) => ({
      ...conversionData,
      base: conversionData.target,
      target: conversionData.base,
    }));
    if (this.conversionData().response) this.getConvertion();
  }
}
