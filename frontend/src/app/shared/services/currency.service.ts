import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map } from 'rxjs';
import { Currency, CurrencyData } from '@shared/types';
import { ConversionResponse } from '@shared/types';
import { ConversionTableResponse } from '@shared/types';
import { environment } from '@/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  // Inject the HttpClient service
  private http = inject(HttpClient);

  // Cache for currencies data with time-based expiration
  private cachedData: CurrencyData[] | null = null;
  private lastFetchTime = 0;
  private cacheTimeout = 30 * 60 * 1000; // 30 minutes in milliseconds

  // Fetches all currencies data from backend
  private getAllCurrenciesData(): Observable<CurrencyData[]> {
    const now = Date.now();

    // Check if we have valid cached data
    if (this.cachedData && now - this.lastFetchTime <= this.cacheTimeout) {
      return of(this.cachedData);
    }

    // Cache is empty or expired, fetch new data
    return this.http.get<CurrencyData[]>(`${environment.apiUrl}/currencies`).pipe(
      map((data) => {
        this.cachedData = data;
        this.lastFetchTime = now;
        return data;
      }),
    );
  }

  // Fetches the available currencies (maintains original interface)
  getCurrencyList(): Observable<Currency[]> {
    return this.getAllCurrenciesData().pipe(map((currenciesData) => currenciesData.map(({ currency }) => currency)));
  }

  // Fetch the conversion table for a given currency (maintains original interface)
  getConversionTable(base: Currency): Observable<ConversionTableResponse> {
    return this.getAllCurrenciesData().pipe(
      map((currenciesData) => {
        if (!base) throw new Error('Invalid base currency');

        // Extract currencies and find base currency data
        const allCurrencies = currenciesData.map(({ currency }) => currency);
        const baseData = currenciesData.find(({ currency }) => currency.code === base.code);

        if (!baseData) throw new Error('Base currency data not found');

        // Define target currencies for the conversion table
        const targetCurrencyCodes = ['EUR', 'USD', 'JPY', 'GBP', 'CNY', 'AUD', 'CAD', 'CHF', 'HKD', 'SGD'].filter(
          (currencyCode) => currencyCode !== base.code,
        );

        // Calculate conversion rates and chart data for each target
        const result = targetCurrencyCodes.map((targetCurrencyCode) => {
          const target = allCurrencies.find(({ code }) => code === targetCurrencyCode);
          const targetData = currenciesData.find(({ currency }) => currency.code === targetCurrencyCode);

          if (!target || !targetData) throw new Error(`Currency ${targetCurrencyCode} not found`);

          // Calculate conversion rate: target_rate / base_rate
          const rate = targetData.rate / baseData.rate;
          const convertedAmount = Number(rate.toFixed(5));

          // Generate historical chart data
          const chartData = targetData.chartData
            .map(([targetX, targetY]) => {
              const baseChartPoint = baseData.chartData.find(([baseX]) => baseX === targetX);
              if (!baseChartPoint) return null;
              const convertedY = targetY / baseChartPoint[1];
              return [targetX, Number(convertedY.toFixed(5))] as [number, number];
            })
            .filter((point) => point !== null)
            .reverse(); // Reverse to ascending order

          return {
            currency: target,
            convertedAmount,
            chartData,
          };
        });

        return {
          base,
          result,
        };
      }),
    );
  }

  // Convert a currency amount from one currency to another (maintains original interface)
  convert(base: Currency, target: Currency, amount: number): Observable<ConversionResponse> {
    return this.getAllCurrenciesData().pipe(
      map((currenciesData) => {
        if (!base) throw new Error('Invalid base currency.');
        if (!target) throw new Error('Invalid target currency.');
        if (amount <= 0) throw new Error('Invalid amount.');

        // Find currency data for both base and target
        const baseData = currenciesData.find(({ currency }) => currency.code === base.code);
        const targetData = currenciesData.find(({ currency }) => currency.code === target.code);

        if (!baseData || !targetData) throw new Error('Currency data not found.');

        // Calculate conversion rate and result
        const rate = targetData.rate / baseData.rate;
        const result = amount * rate;

        // Generate historical chart data for the conversion
        const chartData = targetData.chartData
          .map(([targetX, targetY]) => {
            const baseChartPoint = baseData.chartData.find(([baseX]) => baseX === targetX);
            if (!baseChartPoint) return null;
            const convertedY = targetY / baseChartPoint[1];
            return [targetX, Number(convertedY.toFixed(5))] as [number, number];
          })
          .filter((point) => point !== null)
          .reverse(); // Reverse to ascending order

        return {
          base: {
            currency: base,
            amount,
          },
          result: {
            currency: target,
            convertedAmount: Number(result.toFixed(5)),
            chartData,
          },
        };
      }),
    );
  }
}
