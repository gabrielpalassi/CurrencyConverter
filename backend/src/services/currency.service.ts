import Currency from '../../../shared/interfaces/currency.interface';
import { CacheManager, CacheEntry } from './cache-manager.service';
import { fetch, fetchHistoric90d } from 'ecb-euro-exchange-rates';

const cacheManager = new CacheManager();

// Returns the data for the given currency code
export const getCurrencyData = async (currency: Currency): Promise<CacheEntry | undefined> => {
  try {
    if (!currency) throw new Error('Invalid currency.');

    if (
      Date.now() - cacheManager.getTimeStamp() > cacheManager.getCacheDuration() ||
      !cacheManager.hasCacheEntry(currency.code)
    ) {
      await updateCache();
      return cacheManager.getCacheEntry(currency.code);
    }

    return cacheManager.getCacheEntry(currency.code);
  } catch (error: any) {
    const errorMessage = error.message
      ? `Failed to get currency data: ${error.message}`
      : 'Failed to get currency data.';
    throw new Error(errorMessage);
  }
};

// Returns all currencies' data
export const getAllCurrenciesData = async (): Promise<CacheEntry[]> => {
  try {
    if (
      Date.now() - cacheManager.getTimeStamp() > cacheManager.getCacheDuration() ||
      !cacheManager.hasAnyCacheEntries()
    ) {
      await updateCache();
      return cacheManager.getAllCacheEntries();
    }

    return cacheManager.getAllCacheEntries();
  } catch (error: any) {
    const errorMessage = error.message
      ? `Failed to get all currencies data: ${error.message}`
      : 'Failed to get all currencies data.';
    throw new Error(errorMessage);
  }
};

// Updates the cache by fetching the latest data from the ECB API
const updateCache = async (): Promise<void> => {
  try {
    cacheManager.clearCache();

    const [fetchResults, fetchHistoric90dResults] = await Promise.all([fetch(), fetchHistoric90d()]);

    if (!fetchResults || !fetchHistoric90dResults) {
      throw new Error('Failed to fetch data from the ECB API.');
    }

    // Process historical data
    const chartData = new Map<string, [x: number, y: number][]>();
    fetchHistoric90dResults.forEach(({ rates, time }) => {
      const timestamp = new Date(time).getTime();

      Object.entries(rates).forEach(([currencyCode, rate]) => {
        if (!chartData.has(currencyCode)) {
          chartData.set(currencyCode, []);
        }
        chartData.get(currencyCode)!.push([timestamp, rate]);
      });

      // Ensure EUR data is present
      if (!chartData.has('EUR')) {
        chartData.set('EUR', []);
      }
      chartData.get('EUR')!.push([timestamp, 1]);
    });

    // Update cache entries
    cacheManager.setCacheEntry('EUR', 1, chartData.get('EUR')!);

    Object.entries(fetchResults.rates).forEach(([currencyCode, rate]) => {
      cacheManager.setCacheEntry(currencyCode, rate, chartData.get(currencyCode) || []);
    });

    cacheManager.setTimeStamp(Date.now());
  } catch (error: any) {
    const errorMessage = error.message ? `Failed to update cache: ${error.message}` : 'Failed to update cache.';
    console.error(errorMessage);
  }
};
