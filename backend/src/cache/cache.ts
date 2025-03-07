import { Currency } from '@shared/types';
import { getCurrencySymbol, getCurrencyName, TCurrencyCode, getAllCodes } from '@gaignoux/currency';

type CurrencyCode = string;

export interface CacheEntry {
  currency: Currency;
  rate: number;
  chartData: [x: number, y: number][];
}

export class Cache {
  private static instance: Cache;
  private data: Map<CurrencyCode, CacheEntry>;
  private timestamp: number;
  private duration: number;

  private constructor() {
    if (Cache.instance) throw new Error('Use Cache.getInstance() instead of new Cache().');

    this.data = new Map<CurrencyCode, CacheEntry>();
    this.timestamp = Date.now();
    this.duration = 60 * 60 * 1000; // 1 hour (60 minutes * 60 seconds * 1000 milliseconds)
  }

  public static getInstance(): Cache {
    if (!Cache.instance) Cache.instance = new Cache();
    return Cache.instance;
  }

  public hasEntry(currencyCode: string): boolean {
    try {
      if (!currencyCode) throw new Error('Invalid currency code.');

      return this.data.has(currencyCode);
    } catch (error) {
      let errorMessage = 'Failed to check cache entry.';
      if (error instanceof Error && error.message) errorMessage = `Failed to check cache entry: ${error.message}`;
      throw new Error(errorMessage);
    }
  }

  public hasAnyEntries(): boolean {
    return this.data.size > 0;
  }

  public getEntry(currencyCode: string): CacheEntry | undefined {
    try {
      if (!currencyCode) throw new Error('Invalid currency code.');

      return this.data.get(currencyCode);
    } catch (error) {
      let errorMessage = 'Failed to get cache entry.';
      if (error instanceof Error && error.message) errorMessage = `Failed to get cache entry: ${error.message}`;
      throw new Error(errorMessage);
    }
  }

  public getAllEntries(): CacheEntry[] {
    return Array.from(this.data.values());
  }

  public setEntry(currencyCode: string, rate: number, chartData: [number, number][]): void {
    try {
      if (!currencyCode || !getAllCodes().includes(currencyCode)) throw new Error('Invalid currency code.');
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
    } catch (error) {
      let errorMessage = 'Failed to set cache entry.';
      if (error instanceof Error && error.message) errorMessage = `Failed to set cache entry: ${error.message}`;
      throw new Error(errorMessage);
    }
  }

  public clear(): void {
    this.data.clear();
  }

  public getTimeStamp(): number {
    return this.timestamp;
  }

  public setTimeStamp(timestamp: number): void {
    try {
      if (!timestamp) throw new Error('Invalid timestamp.');

      this.timestamp = timestamp;
    } catch (error) {
      let errorMessage = 'Failed to set cache timestamp.';
      if (error instanceof Error && error.message) errorMessage = `Failed to set cache timestamp: ${error.message}`;
      throw new Error(errorMessage);
    }
  }

  public getDuration(): number {
    return this.duration;
  }

  public setDuration(duration: number): void {
    try {
      if (!duration) throw new Error('Invalid cache duration.');

      this.duration = duration;
    } catch (error) {
      let errorMessage = 'Failed to set cache duration.';
      if (error instanceof Error && error.message) errorMessage = `Failed to set cache duration: ${error.message}`;
      throw new Error(errorMessage);
    }
  }
}
