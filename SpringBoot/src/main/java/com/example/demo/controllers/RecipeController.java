package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Recipe;
import com.example.demo.services.RecipeService;


@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping({"/recipes"})
public class RecipeController {
	
	@Autowired
	RecipeService recipeService;
	
	@GetMapping(produces = "application/json")
	public List<Recipe>getAll()
	{
		return this.recipeService.getAll();
	}
	
	@PutMapping(path="/{id}/update")
	public Recipe update(@PathVariable("id")int id,@RequestBody Recipe rcp)
	{
		this.recipeService.update(rcp);
		return rcp;
	}
	
	@DeleteMapping(path="/{id}/delete")
	public Recipe delete(@PathVariable("id")int id)
	{
		System.out.println("in delete");
		return this.recipeService.delete(id);
	}
	
	@PostMapping(path="/add")
	public Recipe create(@RequestBody Recipe rcp)
	{
		return this.recipeService.create(rcp);
	}

}
