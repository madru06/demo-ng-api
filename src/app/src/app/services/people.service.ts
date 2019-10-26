import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(protected http : HttpClient) { }


  getPeople(){
    return this.http.get('https://randomuser.me/api/?results=20');
  }

}
