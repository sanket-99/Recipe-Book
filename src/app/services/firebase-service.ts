import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from '../models/user.model';

export interface AuthResponseData
{
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
}

@Injectable(
    {
        providedIn:'root'
    }
)
export class FirebaseService
{

    isAuthenticated=new Subject<boolean>();
    User=new Subject<User>();

    constructor(private http:HttpClient,private recipeService:RecipeService){}


    storeRecipes()
    {
        const recipes:Recipe[]=this.recipeService.getRecipes();
        this.http.post<Recipe[]>("https://recipe-app-f03d0.firebaseio.com/recipes.json",recipes).subscribe(response=>
        {
            console.log("response from firebase",response);
        })

    }

    fetchRecipes()
    {
        let recipes:Recipe[];
        this.http.get<Recipe[]>("https://recipe-app-f03d0.firebaseio.com/recipes.json").subscribe(response=>
        {
            recipes=response;
            console.log(recipes);
        })
    }


    signUp(email:string,password:string)
    {
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB-yydzOiue4Rk70905VwCvSCprcLqYoh0",{
            'email':email,
            'password':password,
            'returnSecureToken':true
        }).pipe(catchError(this.handleError),tap(resData=>
            {
                this.handleAuthentication(resData.email,resData.localId,resData.idToken,+ resData.expiresIn);
            }))
    }

    signIn(email:string,password:string)
    {
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB-yydzOiue4Rk70905VwCvSCprcLqYoh0",{
            'email':email,
            'password':password,
            'returnSecureToken':true
        }).pipe(catchError(this.handleError),tap(resData=>
            {
                this.handleAuthentication(resData.email,resData.localId,resData.idToken,+ resData.expiresIn);

            }))
    }


    private handleError(response:HttpErrorResponse)
    {

        let errorMessage=""

        switch(response.error.error.message)
        {
            case 'EMAIL_EXISTS':errorMessage="Email Already Exists";
                                 break;
            case 'INVALID_PASSWORD':errorMessage="Password Error";
                                    break;
        }

        return throwError(errorMessage);
    }


    private handleAuthentication(email:string,localId:string,token:string,expirationDate:number)
    {
        const expirationDate1:Date=new Date(new Date().getTime()+expirationDate)
        const user:User=new User(email,localId,token,expirationDate1);
        this.User.next(user);
        localStorage.setItem('User',JSON.stringify(user));

    }

}