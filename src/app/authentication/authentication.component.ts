import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../services/firebase-service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loginMode=false;
  errorMessage:string;
  user:User;
  constructor(private firebaseService:FirebaseService,private router:Router) { }

  ngOnInit() {
  }



  onSubmit(form:NgForm)
  {
    if(this.loginMode)
    {
      this.firebaseService.signIn(form.value.email,form.value.password).subscribe(response=>
        {
          console.log("sign in response",response);
          this.firebaseService.isAuthenticated.next(true);
          this.firebaseService.User.subscribe(user=>
            {
              this.user=user;
              console.log("USER ",this.user);
            })
           this.router.navigate(['']);

        },
        error=>
        {
          this.errorMessage=error;
        });

    }
    else{
      this.firebaseService.signUp(form.value.email,form.value.password).subscribe(response=>
        {
          console.log("sign up response",response);
          this.firebaseService.isAuthenticated.next(true);
          
          this.firebaseService.User.subscribe(user=>
            {
              this.user=user;
              console.log("USER ",user);
            })
           this.router.navigate(['']);
        },error=>
        {
          this.errorMessage=error;
        });

    }
  }
}