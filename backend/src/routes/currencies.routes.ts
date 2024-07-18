import { Hono } from 'hono';
import { getCurrencies } from '../controllers/currencies.controller';
import Currency from '../../../shared/interfaces/currency.interface';

const currenciesRoutes = new Hono();

currenciesRoutes.get('/', async (context) => {
  try {
    const currencies: Currency[] = await getCurrencies();
    return context.json(currencies);
  } catch (error) {
    return context.json({ error: 'Failed to fetch currencies' }, 500);
  }
});

export default currenciesRoutes;
