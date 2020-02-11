import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/Ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[];
  updateIndex:number;
  editMode=false;
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.editMode=false;
    this.ingredients=this.slService.getIngredients();
    console.log(this.ingredients);
    this.slService.updateIndex.subscribe(response=>{this.updateIndex=response; console.log(response);
    this.editMode=true;})
    this.slService.ingredientChanged.subscribe(ingredients=>
      {
        this.ingredients=ingredients;
        console.log(this.ingredients);
      })
   
  }

  onSubmit(form:NgForm)
  {
    if(this.editMode)
    {
      this.slService.updateIngredient(this.updateIndex,form.value);
    }
    else
    {
    this.slService.addIngredient(form.value);
    }
    form.reset();
  }

  onDelete(index:number)
  {
    this.slService.deleteIngredient(index);

  }

  onUpdate(index:number)
  {
    this.slService.updateIndex.next(index);
  }

}
