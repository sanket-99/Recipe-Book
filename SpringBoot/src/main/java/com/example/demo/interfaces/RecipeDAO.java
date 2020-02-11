package com.example.demo.interfaces;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.models.Recipe;

public interface RecipeDAO extends MongoRepository<Recipe,Integer>{

	Recipe findById(int id);
}
