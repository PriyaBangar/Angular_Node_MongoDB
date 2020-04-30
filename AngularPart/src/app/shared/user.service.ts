import { Injectable } from '@angular/core';
import { User } from './user.model';

import { HttpClient } from '@angular/common/http';
import { log } from 'util';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://localhost:3000/api/';

  constructor(private httpClient: HttpClient) {}

  postUser(user: User){
    console.log("in Service.ts");
    return this.httpClient.post('http://localhost:3000/api/', user,{responseType: 'text'}).subscribe(req => {console.log(req)});
}
}