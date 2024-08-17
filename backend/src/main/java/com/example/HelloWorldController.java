package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/*
* This class is responsible for directing incoming urls to methods that do something
* when called. Probably only get things at the moment.
*/
@RestController
public class HelloWorldController {
    @GetMapping(path = "/hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping(path = "/error")
    public String errorPage() {
        return "Error!";
    }

}
