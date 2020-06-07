import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  data = Array(100)

  constructor() {
    this.data.fill(0);
   }

  ngOnInit() {
    for(let i in this.data){
      this.data[i]=Number(i)+1;
    }
  }

}
