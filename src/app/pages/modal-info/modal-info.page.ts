import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() firstName;
  @Input() lastName;

  constructor(public modalCtrl: ModalController){ 
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  save(string){
this.firstName=string;
    console.log(this.firstName);
    this.modalCtrl.dismiss();
  }
  

}
