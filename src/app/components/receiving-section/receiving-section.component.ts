import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-receiving-section',
  templateUrl: './receiving-section.component.html',
  styleUrls: ['./receiving-section.component.css']
})
export class ReceivingSectionComponent implements OnInit {
  @Input() currencies:Currency[];
  @Input() receivingAmount: string;
  @Output() updateSelectedValueReceiving: EventEmitter<string> = new EventEmitter();

  selectedValueReceiving:string;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeReceivingCurrency(newValue) {
    console.log(newValue);
    this.selectedValueReceiving = newValue;
    console.log(this.selectedValueReceiving);
    
    this.updateSelectedValueReceiving.emit(this.selectedValueReceiving);
  }

}
