import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Currency from '../../../../../shared/interfaces/currency.interface';
import ConversionResponse from '../../../../../shared/interfaces/conversion-response.interface';
import ConversionTableResponse from '../../../../../shared/interfaces/conversion-table-response.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  // Injects the HttpClient
  constructor(private http: HttpClient) {}

  // Fetches the available currencies
  getCurrencyList(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${environment.apiUrl}/currencies`);
  }

  // Fetch the conversion table for a given currency
  getConversionTable(base: Currency): Observable<ConversionTableResponse> {
    return this.http.post<ConversionTableResponse>(`${environment.apiUrl}/conversion-table`, { base });
  }

  // Convert a currency value from one currency to another
  convert(base: Currency, destiny: Currency, value: number): Observable<ConversionResponse> {
    return this.http.post<ConversionResponse>(`${environment.apiUrl}/convert`, { base, destiny, value });
  }
}
