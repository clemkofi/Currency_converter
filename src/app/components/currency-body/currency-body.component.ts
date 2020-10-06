import { Component } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-body',
  templateUrl: './currency-body.component.html',
  styleUrls: ['./currency-body.component.css'],
})
export class CurrencyBodyComponent {
  sendingAmount = '';
  receivingAmount = '';
  selectedValueSending: string;
  selectedValueReceiving: string;
  currencies: Currency[];

  // injecting currency service into th currency body
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe((currencies) => {
      this.currencies = currencies;
    });
  }

  updateSelectedValueReceiving(selectedValue: string) {
    this.selectedValueReceiving = selectedValue;
    this.updateReceivingAmount();
  }

  updateSelectedValueSending(selectedValue: string) {
    this.selectedValueSending = selectedValue;
    this.updateReceivingAmount();
  }

  updateReceivingAmount(amount: string = this.sendingAmount) {
    // set amount to sending amount in currency body component
    this.sendingAmount = amount;

    // check if no value has been entered or no currency has been selected
    if (
      this.sendingAmount === '' ||
      this.selectedValueSending == null ||
      this.selectedValueReceiving == null
    ) {
      this.receivingAmount = '0.00';
      return;
    }

    // check if the sending currency is the same as the receiving one
    if (this.selectedValueSending === this.selectedValueReceiving) {
      console.log('amount in if: ', this.sendingAmount);
      this.receivingAmount = amount;
      return;
    }

    // get the currency being used for sending
    var currency: Currency[] = this.currencies.filter(
      (c) => c.name === this.selectedValueSending
    );

    // get exchage rate for receiving amount
    var exchangeRate = currency[0].values[this.selectedValueReceiving];

    // update receiving amount with calculated amount
    this.receivingAmount =
      isNaN(parseFloat(this.sendingAmount)) || this.sendingAmount === ''
        ? '0.00'
        : (exchangeRate * parseInt(this.sendingAmount)).toFixed(2).toString();
  }

  // clear sending and receiving amounts
  clearAmounts() {
    this.sendingAmount = '';
    this.receivingAmount = '';
  }
}
