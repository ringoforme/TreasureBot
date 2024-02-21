package com.siwPresent.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.mybatis.spring.annotation.MapperScan;



@SpringBootApplication
@MapperScan("com.siwPresent.demo.mapper") 
public class TreasureBotApplication {

	public static void main(String[] args) {
		SpringApplication.run(TreasureBotApplication.class, args);
	}

}
