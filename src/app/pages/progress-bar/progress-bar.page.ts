import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  percent = 0;

  constructor() { }

  ngOnInit() {
  }

  onChange(e){
    console.log(e.detail)
    this.percent = e.detail.value / 100;
  }

}
