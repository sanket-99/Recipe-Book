import { Ingredient } from './Ingredient.model';


export class Recipe
{
    public id:number;
    public title:string;
    public description:string;
    public imagePath:string;
    public ingredients:Ingredient[];


    constructor(id:number,title:string,description:string,imagePath:string,ingredients:Ingredient[])
    {
        this.id=id;
        this.title=title;
        this.description=description;
        this.imagePath=imagePath
        this.ingredients=ingredients;
    }
}