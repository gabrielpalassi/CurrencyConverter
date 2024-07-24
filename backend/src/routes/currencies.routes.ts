import { Hono } from 'hono';
import { getCurrencies } from '../controllers/currencies.controller';
import Currency from '../../../shared/interfaces/currency.interface';

const currenciesRoutes = new Hono();

currenciesRoutes.get('/', async (context) => {
  try {
    const currencies: Currency[] = await getCurrencies();
    return context.json(currencies);
  } catch (error: any) {
    const errorMessage = error.message ? `${error.message}` : 'Failed to fetch currencies.';
    return context.json({ error: errorMessage }, 500);
  }
});

export default currenciesRoutes;
