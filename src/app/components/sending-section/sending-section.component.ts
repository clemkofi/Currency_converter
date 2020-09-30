import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-sending-section',
  templateUrl: './sending-section.component.html',
  styleUrls: ['./sending-section.component.css']
})
export class SendingSectionComponent implements OnInit {
  @Input() currencies:Currency[];
  @Input() selectedReceivingCurrency: any;
  @Output() updateReceivingAmount: EventEmitter<string> = new EventEmitter();
  @Output() updateSelectedValueSending: EventEmitter<any> = new EventEmitter();
  
  sendingAmount = '';
  receivingAmount = '';
  selectedValueSending: string;

  constructor() { }

  ngOnInit(): void {
  }

  // method to track changes in currency
  onChangeSendingCurrency(newValue) {
    console.log(newValue);
    this.selectedValueSending = newValue;
    this.sendingAmount = this.sendingAmount
    console.log(this.selectedValueSending);
    this.updateSelectedValue();
  }

  // method to track in amount
  onChangeAmount(newAmount) {
    console.log(newAmount);
    console.log("onchnage amount: ", this.sendingAmount);
    this.updateReceiving();
  }

  // method to update selected sending currency
  updateSelectedValue(){
    this.updateSelectedValueSending.emit(this.selectedValueSending);
  }

  updateReceiving() {
    this.updateReceivingAmount.emit(this.sendingAmount);
  }

  // clear sending and receiving amounts
  clearAmounts() {
    this.sendingAmount = '';
    this.receivingAmount = '';
  }

}
