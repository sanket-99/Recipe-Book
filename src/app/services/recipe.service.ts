import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Subject } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../models/Ingredient.model';


@Injectable(
    {
        providedIn:'root'
    }
)
export class RecipeService
{
    Recipes:Recipe[]=[];
    recipeChanged=new Subject<Recipe[]>();
    recipeEditIndex=new Subject<number>();

    constructor(private slService:ShoppingListService){}

    setRecipes(recipes:Recipe[])
    {
        this.Recipes=recipes;
        this.recipeChanged.next(this.Recipes.slice());
        
    }

    updateRecipe(index:number,recipe:Recipe)
    {
        this.Recipes[index]=recipe;
        this.recipeChanged.next(this.Recipes.slice());
    }

    getRecipes()
    {
        return this.Recipes;
    }

    deleteRecipe(index:number)
    {
        this.Recipes.splice(index,1);
        this.recipeChanged.next(this.Recipes.slice());
    }


    getRecipe(index:number)
    {
        return this.Recipes[index];
    }

    addIngredientToShoppingList(ingredients:Ingredient[])
    {
        console.log(ingredients);
        this.slService.addIngredients(ingredients)
    }

}