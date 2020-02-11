import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';


@Component(
    {
        selector:"app-recipe-list",
        templateUrl:"./recipe-list.component.html"
    }
)
export class RecipeListComponent
{

    Recipes:Recipe[]=[];

    constructor(private httpService:HttpService,private recipeService:RecipeService){}

    ngOnInit()
    {
        this.recipeService.recipeChanged.subscribe(recipes=>
            {
                this.Recipes=recipes;
            })

    }
}