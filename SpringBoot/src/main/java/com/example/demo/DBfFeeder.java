package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.interfaces.RecipeDAO;
import com.example.demo.models.Ingredient;
import com.example.demo.models.Recipe;

@Component
public class DBfFeeder implements CommandLineRunner{

	@Autowired
	RecipeDAO recipeDAO;
	
	@Override
	public void run(String... args) throws Exception {
		
		Ingredient ing1=new Ingredient("milk",2);
		Ingredient ing2=new Ingredient("water",2);
		Ingredient[] ingredients=new Ingredient[] {ing1,ing2};
		
		Recipe rcp1=new Recipe(11,"Chocolate Cake","Dark Chocolate Cake","https://cdn.pixabay.com/photo/2019/03/08/23/35/cake-4043441_960_720.jpg",ingredients);
		Recipe rcp2=new Recipe(12,"Vegetable Soup","Plain Vegetable Soup","https://cdn.pixabay.com/photo/2017/06/17/14/32/vegetable-soup-2412406_960_720.jpg",ingredients);
		
		this.recipeDAO.save(rcp1);
		this.recipeDAO.save(rcp2);
		
	}

}
