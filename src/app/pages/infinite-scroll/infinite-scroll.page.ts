import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: any = Array(50)

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log(event)
    setTimeout(()=>{

      if (this.data.length > 1556){
        event.target.complete();
        this.infiniteScroll.disabled;
        return;
      }

      const newData = Array(50);
      this.data.push(...newData);
      event.target.complete();
    }, 1000)
  }

}
