import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  
  getAlbums(){
    return this.http.get("http://jsonplaceholder.typicode.com/albums");
  }

  getMenuOptions(){
    return this.http.get('./assets/data/menu.json')
  }
  
  
  getHeros(){
    return this.http.get('./assets/data/superheroes.json')
  }

}
