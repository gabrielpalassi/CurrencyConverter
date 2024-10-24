import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Currency from '../../../../../shared/interfaces/currency';
import ConversionResponse from '../../../../../shared/interfaces/conversion-response';
import ConversionTableResponse from '../../../../../shared/interfaces/conversion-table-response';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private http = inject(HttpClient);

  // Fetches the available currencies
  getCurrencyList(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${environment.apiUrl}/currencies`);
  }

  // Fetch the conversion table for a given currency
  getConversionTable(base: Currency): Observable<ConversionTableResponse> {
    return this.http.post<ConversionTableResponse>(`${environment.apiUrl}/conversion-table`, { base });
  }

  // Convert a currency amount from one currency to another
  convert(base: Currency, target: Currency, amount: number): Observable<ConversionResponse> {
    return this.http.post<ConversionResponse>(`${environment.apiUrl}/convert`, { base, target, amount });
  }
}
