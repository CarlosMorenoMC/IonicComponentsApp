import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ListComponent } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  components: Observable <any>;

  constructor( private menuCtrl: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOptions();
  }

  toggleMenu(){
    this.menuCtrl.toggle()
  }

}


