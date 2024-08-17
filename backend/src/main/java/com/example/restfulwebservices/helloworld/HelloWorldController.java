package com.example.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.*;

//Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    @GetMapping(path = "/hello-world")
    public String HelloWorld(){
        return "Hello World";
    }

    //hello-world-bean
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean HelloWorldBean(){
//        throw new RuntimeException("Some Error has Happened! Contact Support.");
        return new HelloWorldBean("Hello World");
    }

    //hello-world/path-variable/username
    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }

}
