import { Ingredient } from '../models/Ingredient.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable(
    {
        providedIn:'root'
    }
)
export class ShoppingListService
{

    updateIndex=new Subject<number>();

    constructor(private router:Router){}

    ingredients:Ingredient[]=[
        
    ];
    ingredientChanged=new Subject<Ingredient[]>();


    getIngredients()
    {
        if(this.ingredients)
        return this.ingredients.slice();

    }

    addIngredient(ingredient:Ingredient)
    {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[])
    {
        console.log(ingredients);
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
        this.router.navigate(['shopping-list']);
    }

    deleteIngredient(index:number)
    {
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.ingredients.slice());

    }
    updateIngredient(index:number,ingredient:Ingredient)
    {
        this.ingredients[index]=ingredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }
}