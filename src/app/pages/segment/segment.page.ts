import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheros: any[] = [];

  option= '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getHeros().subscribe(
      res => {
        Object.values(res).map( item => {
          this.superheros.push(item)
        })
      }
    )
  }


  segmentChanged(e){
    if ( e.target.value === 'all'){
      this.option = ''
    } else {
      this.option = e.target.value
    }
  }
}
