import { Currency } from '@shared/types';
import { ConversionResponse } from '@shared/types';

export interface ConversionData {
  base: Currency | undefined;
  target: Currency | undefined;
  amount: number | undefined;
  response: ConversionResponse | undefined;
}
