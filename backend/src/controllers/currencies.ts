import { CurrencyData } from "@shared/types";
import { getAllCurrenciesData } from "@/services/currency";

// Returns all currencies with their data (rate and chart)
export const getCurrencies = async (): Promise<CurrencyData[]> => {
  try {
    const currenciesData = await getAllCurrenciesData();
    return currenciesData;
  } catch (error) {
    let errorMessage = "Failed to fetch currencies.";
    if (error instanceof Error && error.message) errorMessage = `Failed to fetch currencies: ${error.message}`;
    throw new Error(errorMessage);
  }
};
