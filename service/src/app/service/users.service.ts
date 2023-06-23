import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private ht:HttpClient) { }
  getAllUsers(){
    // return[
    //   {id:101,name:'sathya',city:'DElhi',salary:'230',dob:new Date("05/10/1989")},
    //   {id:102,name:'sathya',city:'Elhi',salary:'30',dob:new Date("05/10/1989")},
    //   {id:103,name:'sathya',city:'DEli',salary:'30',dob:new Date("05/10/1989")},
    //   {id:104,name:'sathya',city:'lhi',salary:'0',dob:new Date("05/10/1989")},
    // ];


    return this.ht.get("https://jsonplaceholder.typicode.com/users");

  }
  getAllUser(){
    return[
      {id:101,name:'sathya',city:'DElhi',salary:'230',dob:new Date("05/10/1989")},
      {id:102,name:'sathya',city:'Elhi',salary:'30',dob:new Date("05/10/1989")},
      {id:103,name:'sathya',city:'DEli',salary:'30',dob:new Date("05/10/1989")},
      {id:104,name:'sathya',city:'lhi',salary:'0',dob:new Date("05/10/1989")},
    ];

  }
}
