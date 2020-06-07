import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skeleton-text',
  templateUrl: './skeleton-text.page.html',
  styleUrls: ['./skeleton-text.page.scss'],
})
export class SkeletonTextPage implements OnInit {

  superheros: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    console.log(this.superheros)

    this.dataService.getHeros().subscribe(
      res => {
        setTimeout(() => {
          Object.values(res).map( item => {
            this.superheros.push(item)
          })
        },3500)
      }
    )

  }

}
