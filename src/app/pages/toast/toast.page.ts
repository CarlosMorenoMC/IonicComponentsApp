import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async presentToast () {
    const toast = await this.toastCtrl.create({
      message: 'Hi! I\'m a toast msg!',
      duration: 2000
    })
    toast.present();
  }

  onClick() {
    this.presentToast();
  }

}
