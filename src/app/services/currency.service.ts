import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency';

// http headers with the json option
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  // currencyconverter api url
  currencyConverterURL: string = "http://currencyconverterapi-env.eba-vs7tjmfv.eu-central-1.elasticbeanstalk.com/";
  currencyConvertionRef: string = "api/v1/currency";

  constructor(private http: HttpClient) {}

  // getCurrencies() {
  //   return [
  //     new Currency(1, 'GHS', '₵', {
  //       USD: 0.17,
  //       EUR: 0.15,
  //     }),
  //     new Currency(2, 'USD', '$', {
  //       GHS: 5.4,
  //       EUR: 0.85,
  //     }),
  //     new Currency(3, 'EUR', '€', {
  //       GHS: 6.8,
  //       USD: 1.17,
  //     }),
  //   ];
  // }

  // method to fetch the data from api
  // since it is fetching data we would make it of type observable which makes
  // it a stream which can be subscribed to
  getCurrencies(): Observable<Currency[]> {
    // return this.http.get<[]>(`${this.currencyConverterURL}${this.currencyConvertionRef}`);
    return this.http.get<Currency[]>(`${this.currencyConverterURL}${this.currencyConvertionRef}`);
  }
}
