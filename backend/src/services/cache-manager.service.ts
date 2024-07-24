import Currency from '../../../shared/interfaces/currency.interface';
import { getCurrencySymbol, getCurrencyName, TCurrencyCode } from '@gaignoux/currency';

type CurrencyCode = string;

export interface CacheEntry {
  currency: Currency;
  rate: number;
  chartData: [x: number, y: number][];
}

export class CacheManager {
  private data: Map<CurrencyCode, CacheEntry>;
  private timestamp: number;
  private cacheDuration: number;

  constructor() {
    this.data = new Map<CurrencyCode, CacheEntry>();
    this.timestamp = Date.now();
    this.cacheDuration = 1000 * 60 * 60; // 1 hour
  }

  public hasCacheEntry(currencyCode: string): boolean {
    try {
      if (!currencyCode) throw new Error('Invalid currency code.');

      return this.data.has(currencyCode);
    } catch (error: any) {
      const errorMessage = error.message
        ? `Failed to check cache entry: ${error.message}`
        : 'Failed to check cache entry.';
      throw new Error(errorMessage);
    }
  }

  public hasAnyCacheEntries(): boolean {
    return this.data.size > 0;
  }

  public getCacheEntry(currencyCode: string): CacheEntry | undefined {
    try {
      if (!currencyCode) throw new Error('Invalid currency code.');

      return this.data.get(currencyCode);
    } catch (error: any) {
      const errorMessage = error.message ? `Failed to get cache entry: ${error.message}` : 'Failed to get cache entry.';
      throw new Error(errorMessage);
    }
  }

  public getAllCacheEntries(): CacheEntry[] {
    return Array.from(this.data.values());
  }

  public setCacheEntry(currencyCode: string, rate: number, chartData: [number, number][]): void {
    try {
      if (!currencyCode) throw new Error('Invalid currency code.');
      if (!rate) throw new Error('Invalid rate.');
      if (!chartData) throw new Error('Invalid chart data.');

      this.data.set(currencyCode, {
        currency: {
          code: currencyCode,
          name: getCurrencyName(currencyCode as TCurrencyCode),
          symbol: getCurrencySymbol(currencyCode as TCurrencyCode),
        },
        rate: rate,
        chartData,
      });
    } catch (error: any) {
      const errorMessage = error.message ? `Failed to set cache entry: ${error.message}` : 'Failed to set cache entry.';
      throw new Error(errorMessage);
    }
  }

  public clearCache(): void {
    this.data.clear();
  }

  public getTimeStamp(): number {
    return this.timestamp;
  }

  public setTimeStamp(timestamp: number): void {
    try {
      if (!timestamp) throw new Error('Invalid timestamp.');

      this.timestamp = timestamp;
    } catch (error: any) {
      const errorMessage = error.message
        ? `Failed to set cache timestamp: ${error.message}`
        : 'Failed to set timestamp.';
      throw new Error(errorMessage);
    }
  }

  public getCacheDuration(): number {
    return this.cacheDuration;
  }

  public setCacheDuration(cacheDuration: number): void {
    try {
      if (!cacheDuration) throw new Error('Invalid cache duration.');

      this.cacheDuration = cacheDuration;
    } catch (error: any) {
      const errorMessage = error.message
        ? `Failed to set cache duration: ${error.message}`
        : 'Failed to set cache duration.';
      throw new Error(errorMessage);
    }
  }
}
