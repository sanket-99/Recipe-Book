import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase-service';
import { Router } from '@angular/router';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';
  isAuthenticated:boolean;
  user:User;

  constructor(private firebaseService:FirebaseService,private router:Router){}

  ngOnInit()
  {
    
    
    this.firebaseService.isAuthenticated.subscribe(response=>
      {
        this.isAuthenticated=response;
        console.log("Authentication",this.isAuthenticated);
      })

    this.user=JSON.parse(localStorage.getItem("User"));
    if(this.user)
    {
      this.firebaseService.User.next(this.user);
      this.firebaseService.isAuthenticated.next(true);
      this.isAuthenticated=true;
      
    }
    this.firebaseService.isAuthenticated.subscribe(response=>
      {
        this.isAuthenticated=response;
        console.log("Authentication",this.isAuthenticated);
      })
   
      

  
    if(this.isAuthenticated===false)
    {
      this.router.navigate(['authentication'])
    }
  }

}
