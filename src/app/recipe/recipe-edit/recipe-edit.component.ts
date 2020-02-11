import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router,private httpService:HttpService) { }
  editMode=false;
  editIndex:number;
  editRecipe:Recipe;
  recipeEditForm:FormGroup;
  imagePath:string;

  ngOnInit() {

    this.route.params.subscribe((params:Params)=>
      {
        this.editIndex=+ params["id"];
        this.editRecipe=this.recipeService.getRecipe(this.editIndex);
        if(this.editRecipe)
        {
          this.editMode=true;
        }
      })
      this.initForm();

  }

  initForm()
  {

    let id:number;
    let title:string="";
    let description:string="";
    let imagePath:string="";

    if(this.editRecipe)
    {
      id=this.editRecipe.id;
      title=this.editRecipe.title;
      description=this.editRecipe.description;
      imagePath=this.editRecipe.imagePath;
      this.imagePath=this.editRecipe.imagePath;
    }


    this.recipeEditForm=new FormGroup(
      {
        'id':new FormControl(id),
        'title':new FormControl(title),
        'description':new FormControl(description),
        'imagePath':new FormControl(imagePath)
      }
    )
  }


  onSubmit()
  {
    if(this.editMode)
    {
    this.recipeService.updateRecipe(this.recipeEditForm.value.id,this.recipeEditForm.value);
    console.log(this.recipeEditForm.value);
    this.httpService.updateRecipe(this.recipeEditForm.value.id,this.recipeEditForm.value).subscribe(
      response=>
      {
        console.log(response);
      }
    );
    }
    else
    {
      this.httpService.createRecipe(this.recipeEditForm.value).subscribe(Response=>
        {
          console.log(Response);
        });

    }
    this.router.navigate(['']);
    
  }

}
