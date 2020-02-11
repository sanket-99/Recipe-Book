package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(scanBasePackages= {"com.example.demo","com.example.demo.interfaces","com.example.demo.controllers","com.example.demo.services"})
@ComponentScan(basePackages= {"com.example.demo","com.example.demo.interfaces","com.example.demo.controllers","com.example.demo.services"})
public class DemoAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoAppApplication.class, args);
	}

}
