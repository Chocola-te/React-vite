package com.reactapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.filter.HiddenHttpMethodFilter;

@SpringBootApplication
public class ReactappApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactappApplication.class, args);
	}

  @Bean
  HiddenHttpMethodFilter hiddenHttpMethodFilter() {
    return new HiddenHttpMethodFilter();
  }

  @Bean
  RestTemplate restTemplate() {
    return new RestTemplate();
  }


}
