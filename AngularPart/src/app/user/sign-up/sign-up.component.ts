import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../shared/user.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [ApiService]
})
export class SignUpComponent implements OnInit {

  public user:User = {Fullname:'',
    Email : '',
    Password:''};

  constructor (private userService: ApiService, private http:HttpClient){}

  ngOnInit() {
  }

  public onSubmitHit(form : NgForm, user: User){
    this.userService.postUser(user);
    console.log(form.value + "successfully submitted");
    console.log("userName: "+user.Fullname);
    this.resetForm();
    
  }

  public getUser(){
this.http.get("http://localhost:3000/api/test").subscribe(res => {console.log(res)});
  }

  public resetForm(){
    this.user.Fullname='';
    this.user.Email='';
    this.user.Password='';
  }

}
