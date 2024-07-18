import { Hono } from 'hono';
import { cors } from 'hono/cors';
import currenciesRoutes from './routes/currencies.routes';
import conversionTableRoutes from './routes/conversion-table.routes';
import convertRoutes from './routes/convert.routes';

const app = new Hono();

// Middlewares
app.use('*', cors());

// Error handler
app.onError((error, context) => {
  console.error(error);
  return context.json({ error: 'An unexpected error occurred' }, 500);
});

// Routes
app.route('/currencies', currenciesRoutes);
app.route('/conversion-table', conversionTableRoutes);
app.route('/convert', convertRoutes);

// Export the app
export default {
  port: Number(process.env.PORT) || 3000,
  fetch: app.fetch,
};
