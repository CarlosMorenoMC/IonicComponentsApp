import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  searchInput= '';
  albums: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(
      res =>{
        Object.values(res).map(item => {
          this.albums.push(item)
        })
      }
    );
    
  }

  search(e){
    this.searchInput = e.target.value;
  }

}
