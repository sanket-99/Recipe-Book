import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { HttpService } from 'src/app/services/http.service';
import { FirebaseService } from 'src/app/services/firebase-service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router,private httpService:HttpService,private firebaseService:FirebaseService) { }

  index:number;
  recipe:Recipe;
 

  ngOnInit() {

    this.route.params.subscribe((param:Params)=>
    {
      this.index=+ param['id'];
      this.recipe=this.recipeService.getRecipe(this.index);
      console.log(this.recipe);
 
    })

  }

  updateRecipe()
  {
    this.recipeService.recipeEditIndex.next(this.index);
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

   deleteRecipe()
   {
    this.httpService.deleteRecipe(this.recipe.id).subscribe(response=>
      {
        console.log(response);
        this.recipeService.deleteRecipe(this.recipe.id);
      });
    this.router.navigate(['']);
   }

   addIngredientToShoppingList()
   {
     const recipe=this.recipe;
     this.recipeService.addIngredientToShoppingList(recipe['ing']);
   }
}
