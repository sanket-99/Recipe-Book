package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.demo.interfaces.RecipeDAO;
import com.example.demo.models.Recipe;

@Service
public class RecipeService {
	
	@Autowired
	RecipeDAO recipeDAO;
	
	public List<Recipe>getAll()
	{
		List recipes=this.recipeDAO.findAll();
		return recipes;
	}
	
	
	public Recipe update(Recipe rcp)
	{
		this.recipeDAO.save(rcp);
		return rcp;
	}
	
	public Recipe delete(int index)
	{
		Recipe deletedRecipe=this.recipeDAO.findById(index);
		this.recipeDAO.deleteById(index);
		 return deletedRecipe;
	}
	
	public Recipe create(Recipe rcp)
	{
		this.recipeDAO.save(rcp);
		return rcp;
	}

}
