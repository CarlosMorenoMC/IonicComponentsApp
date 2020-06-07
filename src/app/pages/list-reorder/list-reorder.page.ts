import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  
  isReorder : any = true;

  heroes = ["Batman","Flask","Lobezno","Capitana Marvel","Antman","Torrente","Wonderwoman"]

  constructor() { }

  ngOnInit() {
  }

  doReorder(ev: any) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    this.heroes = ev.detail.complete(this.heroes);
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
    this.isReorder=this.reorderGroup.disabled; 
  }

}
