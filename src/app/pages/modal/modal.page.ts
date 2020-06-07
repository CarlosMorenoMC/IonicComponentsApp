import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {
  }

  async presentModal(){
    const modal = await this.modalCtrl.create(
      {
        component: ModalInfoPage,
        componentProps: {
          firstName: 'Carlos',
          lastName: 'Moreno'
        }
      }
    )

    await modal.present();

    const {data} = await modal.onWillDismiss();

    console.log(data)
  }

  showModal(){
    this.presentModal();
  }
    
}
