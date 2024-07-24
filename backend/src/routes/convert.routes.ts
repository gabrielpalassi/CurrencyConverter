import { Hono } from 'hono';
import { convertCurrency } from '../controllers/convert.controller';
import ConversionResponse from '../../../shared/interfaces/conversion-response.interface';
import Currency from '../../../shared/interfaces/currency.interface';

const convertRoutes = new Hono();

convertRoutes.post('/', async (context) => {
  try {
    const { base, target, amount }: { base: Currency; target: Currency; amount: number } = await context.req.json();
    const result: ConversionResponse = await convertCurrency(base, target, amount);
    return context.json(result);
  } catch (error: any) {
    const errorMessage = error.message ? `${error.message}` : 'Failed to convert currency.';
    return context.json({ error: errorMessage }, 500);
  }
});

export default convertRoutes;
