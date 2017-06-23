import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Time } from 'domain/timesheet';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})

export class TimeSheetComponent {
    @Input() time: Time;
    @Input() requirements: any[];

    // @Output('addNumberEvent') 
	  // addNumEvent = new EventEmitter<number>();
    num1 : '';
	  num2 : ''; 
    num3 : '';
	  num4 : '';
    num5 : '';
	  num6 : '';
    num7 : '';

    total: Number;
	
	addNumber(number) {
    var c = 0;
    c = parseInt(this.num1) + parseInt(this.num2) +parseInt(this.num3)+parseInt(this.num4)+parseInt(this.num5)+parseInt(this.num6)+parseInt(this.num7);
    console.log(c);
    this.total = c;
  }	
}