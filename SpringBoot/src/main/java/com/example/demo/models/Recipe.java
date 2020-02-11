package com.example.demo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Recipe1")
public class Recipe {
	
	@Id
	private int id;
	private String title;
	private String description;
	private String imagePath;
	private Ingredient[] ingredients;
	
	
	public Recipe()
	{
		
	}
	
	
	
	public Recipe(int id, String title, String description, String imagePath,Ingredient[] ing) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.imagePath = imagePath;
		this.ingredients=ing;
	}
	
	public Ingredient[] getIng() {
		return ingredients;
	}



	public void setIng(Ingredient[] ing) {
		this.ingredients = ing;
	}



	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImagePath() {
		return imagePath;
	}
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	
	
	
	

}
