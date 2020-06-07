import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, LoadingController } from '@ionic/angular';

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

  constructor(private dataService: DataService, public loadingController: LoadingController) { 
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
    
    console.log(this.users)
  }

  favorite(user){ 
    alert("Fav " + user.name) 
    console.log(this.users)
    this.list.closeSlidingItems;
  }

  call(user){ 
    alert("Call " + user.name)
    this.list.closeSlidingItems;
  }

  remove(user){ 
    alert("Remove " + user.name)  
    this.list.closeSlidingItems;
  }

}
