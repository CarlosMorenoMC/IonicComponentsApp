import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  birthdate: Date = new Date();

  customPickerOptions: any;
  customPickerDate: Date = new Date


  constructor() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) => {
          console.log('Clicked Save!')
          console.log(event)
          this.customPickerDate.setDate(event.day.value)
          this.customPickerDate.setUTCFullYear(event.year.value);
          this.customPickerDate.setMonth(event.month.value);
          console.log(this.customPickerDate.toISOString())
        }
      }, {
        text: 'Cancel',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
        }
      }]
    }
   }

  ngOnInit() {
  }

  setDate(e){
    console.log(e)
    console.log(e.detail.value)
    console.log(new Date(e.detail.value))
  }

}
