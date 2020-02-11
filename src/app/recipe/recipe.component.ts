import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component(
    {
        selector:"app-recipe",
        templateUrl:"./recipe.component.html"
    }
)
export class RecipeComponent
{

    constructor(private httpService:HttpService,private recipeService:RecipeService,private router:Router){}

    ngOnInit()
    {
        this.httpService.getRecipes().subscribe(recipes=>
            {
                this.recipeService.setRecipes(recipes);
                console.log(recipes);
            });

    }

    onNavigate()
    {
        this.router.navigate(["new"]);
    }

    
   
}