import { Hono } from 'hono';
import { convertCurrency } from '../controllers/convert.controller';
import ConversionResponse from '../../../shared/interfaces/conversion-response.interface';
import Currency from '../../../shared/interfaces/currency.interface';

const convertRoutes = new Hono();

convertRoutes.post('/', async (context) => {
  try {
    const { base, destiny, value }: { base: Currency; destiny: Currency; value: number } = await context.req.json();
    const result: ConversionResponse = await convertCurrency(base, destiny, value);
    return context.json(result);
  } catch (error) {
    return context.json({ error: 'Failed to convert currency' }, 500);
  }
});

export default convertRoutes;
