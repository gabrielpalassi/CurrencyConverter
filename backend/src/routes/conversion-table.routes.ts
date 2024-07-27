import { Hono } from 'hono';
import { getConversionTable } from '../controllers/conversion-table.controller';
import ConversionTableResponse from '../../../shared/interfaces/conversion-table-response.interface';
import Currency from '../../../shared/interfaces/currency.interface';

const conversionTableRoutes = new Hono();

conversionTableRoutes.post('/', async (context) => {
  try {
    const { base }: { base: Currency } = await context.req.json();
    const conversionTable: ConversionTableResponse = await getConversionTable(base);
    return context.json(conversionTable);
  } catch (error) {
    let errorMessage = 'Failed to get conversion table.';
    if (error instanceof Error && error.message) errorMessage = error.message;
    return context.json({ error: errorMessage }, 500);
  }
});

export default conversionTableRoutes;
