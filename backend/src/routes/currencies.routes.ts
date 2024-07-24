import { Hono } from 'hono';
import { getCurrencies } from '../controllers/currencies.controller';
import Currency from '../../../shared/interfaces/currency.interface';

const currenciesRoutes = new Hono();

currenciesRoutes.get('/', async (context) => {
  try {
    const currencies: Currency[] = await getCurrencies();
    return context.json(currencies);
  } catch (error) {
    let errorMessage = 'Failed to fetch currencies.';
    if (error instanceof Error && error.message) errorMessage = `Failed to fetch currencies: ${error.message}`;
    return context.json({ error: errorMessage }, 500);
  }
});

export default currenciesRoutes;
