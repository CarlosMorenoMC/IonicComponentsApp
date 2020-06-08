import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list') list: IonList;

  users: Observable <any>;
  loading: any;
  error: any;

  constructor(private dataService: DataService, 
              public loadingController: LoadingController,
              public toastCtrl: ToastController) { 
    this.loading = this.loadingController.create();
  }

  
  async presentLoading() {
    this.loading = await this.loadingController.create({
        message: 'Loading...'
    });
  await this.loading.present();
  }

async ionViewWillEnter(){
  await this.presentLoading();
  this.dataService.getUsers().subscribe( 
    res=>{
    this.loading.dismiss();
    },
    err => {
      this.loading.dismiss();
      this.error=err;
      console.log('oops', err)
      console.log('error', this.error)
    }
  );
  this.users=this.dataService.getUsers();
}

  ngOnInit() {
  }

  favorite(user){ 
    let msg = 'Favorite ' + user.name;
    this.presentToast(msg)
    this.list.closeSlidingItems;
  }

  call(user){ 
    let msg = 'Call ' + user.name;
    this.presentToast(msg)
    this.list.closeSlidingItems;
  }

  remove(user){ 
    let msg = 'Remove ' + user.name;
    this.presentToast(msg)
    this.list.closeSlidingItems;
  }

  async presentToast (message : string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    })
    toast.present();
  }


}
