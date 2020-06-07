import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.page.html',
  styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  items = Array();

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false
    });
    await popover.present();

    await popover.onWillDismiss().then(
      res => {
        this.createItem(res.data.item)
      }
    );
  }

  createItem(n: number){
    console.log(this.items)
    this.items.push(n)
  }

  onClick(e){
    this.presentPopover(e);
  }

}
