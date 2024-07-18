import ConversionTableResponse from '../../../shared/interfaces/conversion-table-response.interface';
import Currency from '../../../shared/interfaces/currency.interface';
import { fetchConversionTable } from '../services/conversion-table.service';

export const getConversionTable = async (base: Currency): Promise<ConversionTableResponse> => {
  const conversionTable: ConversionTableResponse = await fetchConversionTable(base);
  return conversionTable;
};
