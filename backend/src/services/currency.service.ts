import Currency from '../../../shared/interfaces/currency.interface';
import { Cache, CacheEntry } from '../cache/cache';
import { fetch, fetchHistoric90d } from 'ecb-euro-exchange-rates';

const cache = Cache.getInstance();

// Returns the data for the given currency code
export const getCurrencyData = async (currency: Currency): Promise<CacheEntry | undefined> => {
  try {
    if (!currency) throw new Error('Invalid currency.');

    if (Date.now() - cache.getTimeStamp() > cache.getDuration() || !cache.hasEntry(currency.code)) {
      await updateCache();
      return cache.getEntry(currency.code);
    }

    return cache.getEntry(currency.code);
  } catch (error) {
    let errorMessage = 'Failed to get currency data.';
    if (error instanceof Error && error.message) errorMessage = `Failed to get currency data: ${error.message}`;
    throw new Error(errorMessage);
  }
};

// Returns all currencies' data
export const getAllCurrenciesData = async (): Promise<CacheEntry[]> => {
  try {
    if (Date.now() - cache.getTimeStamp() > cache.getDuration() || !cache.hasAnyEntries()) {
      await updateCache();
      return cache.getAllEntries();
    }

    return cache.getAllEntries();
  } catch (error) {
    let errorMessage = 'Failed to get all currencies data.';
    if (error instanceof Error && error.message) errorMessage = `Failed to get all currencies data: ${error.message}`;
    throw new Error(errorMessage);
  }
};

// Updates the cache by fetching the latest data from the ECB API
const updateCache = async (): Promise<void> => {
  try {
    cache.clear();

    const [fetchResults, fetchHistoric90dResults] = await Promise.all([fetch(), fetchHistoric90d()]);

    if (!fetchResults || !fetchHistoric90dResults) throw new Error('Failed to fetch data from the ECB API.');

    // Process historical data
    const chartData = new Map<string, [x: number, y: number][]>();
    fetchHistoric90dResults.forEach(({ rates, time }) => {
      const timestamp = new Date(time).getTime();

      Object.entries(rates).forEach(([currencyCode, rate]) => {
        if (!chartData.has(currencyCode)) chartData.set(currencyCode, []);
        chartData.get(currencyCode)!.push([timestamp, rate]);
      });

      // Ensure EUR data is present
      if (!chartData.has('EUR')) {
        chartData.set('EUR', []);
      }
      chartData.get('EUR')!.push([timestamp, 1]);
    });

    // Update cache entries
    cache.setEntry('EUR', 1, chartData.get('EUR')!);

    Object.entries(fetchResults.rates).forEach(([currencyCode, rate]) => {
      cache.setEntry(currencyCode, rate, chartData.get(currencyCode) || []);
    });

    cache.setTimeStamp(Date.now());
  } catch (error) {
    let errorMessage = 'Failed to update cache.';
    if (error instanceof Error && error.message) errorMessage = `Failed to update cache: ${error.message}`;
    throw new Error(errorMessage);
  }
};
