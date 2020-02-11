import { NgModule } from '@angular/core';
import {RouterModule, Routes}from '@angular/router'
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const appRoutes:Routes=[
    {path:"",component:RecipeComponent},
    {path:"new",component:RecipeEditComponent},
    {path:"shopping-list",component:ShoppingListComponent},
    {path:"authentication",component:AuthenticationComponent},
    {path:":id",component:RecipeDetailComponent},
    {path:":id/edit",component:RecipeEditComponent}
]

@NgModule(
    {
        imports:[RouterModule.forRoot(appRoutes)],
        exports:[RouterModule]
    }
)
export class AppRoutingModule
{

}