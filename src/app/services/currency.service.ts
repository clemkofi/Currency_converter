import { Injectable } from '@angular/core';
import { Currency } from '../models/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor() {}

  getCurrencies() {
    return [
      new Currency(1, 'GHS', '₵', {
        USD: 0.17,
        EUR: 0.15,
      }),
      new Currency(2, 'USD', '$', {
        GHS: 5.4,
        EUR: 0.85,
      }),
      new Currency(3, 'EUR', '€', {
        GHS: 6.8,
        USD: 1.17,
      }),
    ];
  }
}
