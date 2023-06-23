import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'service';
  users: any;
  constructor(private userServi:UsersService){
    // this.users=this.userServi.getAllUser();

  }
  ngOnInit()  {
     

    this.userServi.getAllUsers().subscribe((dataaa)=>{
      this.users=dataaa;
    })
  }
}


