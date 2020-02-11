import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from './recipe.service';





@Injectable(
    {
        providedIn:'root'
    }
)
export class HttpService
{

    constructor(private http:HttpClient,private recipeService:RecipeService){}


    getRecipes()
    {
      return this.http.get<Recipe[]>("http://localhost:8080/recipes")
     
    }

    updateRecipe(index:number,recipe:Recipe)
    {
        return this.http.put<Recipe>("http://localhost:8080/recipes"+"/"+(index)+"/update",recipe);
        
    }

    deleteRecipe(index:number)
    {
        return this.http.delete<Recipe>("http://localhost:8080/recipes"+"/"+index+"/delete");
    }

    createRecipe(recipe:Recipe)
    {
        return this.http.post<Recipe>("http://localhost:8080/recipes/add",recipe);
    }
}