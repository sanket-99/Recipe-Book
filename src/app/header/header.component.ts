import { Component, OnInit, OnChanges } from '@angular/core';
import { FirebaseService } from '../services/firebase-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {

  isAuthenticated:boolean;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {

    this.firebaseService.isAuthenticated.subscribe(Response=>
      {
        this.isAuthenticated=Response;
        console.log(this.isAuthenticated);
      })
  }


  ngOnChanges()
  {
    this.firebaseService.isAuthenticated.subscribe(Response=>
      {
        this.isAuthenticated=Response;
        console.log(this.isAuthenticated);
      })
  }

  onStore()
  {
    this.firebaseService.storeRecipes();
  }

  onFetch()
  {
    this.firebaseService.fetchRecipes();
  }

}
