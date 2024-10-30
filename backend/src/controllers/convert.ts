import { ConversionResponse } from '@shared/types';
import { Currency } from '@shared/types';
import { getCurrencyData } from '../services/currency';

// Converts the given amount from the base currency to the target currency
export const convertCurrency = async (
  base: Currency,
  target: Currency,
  amount: number,
): Promise<ConversionResponse> => {
  try {
    if (!base) throw new Error('Invalid base currency.');
    if (!target) throw new Error('Invalid target currency.');
    if (amount <= 0) throw new Error('Invalid amount.');

    const baseData = await getCurrencyData(base);
    const targetData = await getCurrencyData(target);

    if (!baseData || !targetData) throw new Error('Currency data not found.');

    const rate = targetData.rate / baseData.rate;
    const result = amount * rate;

    const chartData = targetData.chartData
      .map(([targetX, targetY]) => {
        const baseChartData = baseData.chartData.find(([baseX]) => baseX === targetX);
        if (!baseChartData) throw new Error('Base currency data not found.');
        const convertedY = targetY / baseChartData[1];
        return [targetX, Number(convertedY.toFixed(5))];
      })
      .reverse() as [x: number, y: number][]; // Reverse the array to ascending order

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
  } catch (error) {
    let errorMessage = 'Failed to convert currency.';
    if (error instanceof Error && error.message) errorMessage = `Failed to convert currency: ${error.message}`;
    throw new Error(errorMessage);
  }
};
