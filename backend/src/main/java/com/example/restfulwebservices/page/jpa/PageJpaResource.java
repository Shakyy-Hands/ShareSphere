package com.example.restfulwebservices.page.jpa;

import com.example.restfulwebservices.page.Page;
import com.example.restfulwebservices.page.springdatajpa.PageSpringDataJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PageJpaResource {

//    @Autowired
//    private TodoHardCodedService todoService;

    @Autowired
    private PageSpringDataJpaRepository pageJpaRepository;

    @GetMapping("/users/{owner}/pages")
    public List<Page> getAllPages(@PathVariable long owner) {
        return pageJpaRepository.findByOwner(owner);
    }



    @GetMapping("/users/{owner}/pages/{id}")
    public Page getPage(@PathVariable long owner, @PathVariable long id) {
        return pageJpaRepository.findById(id).get();
    }



    @DeleteMapping("/users/{owner}/pages/{id}")
    public ResponseEntity<Void> deletePage(@PathVariable long owner, @PathVariable long id) {
        pageJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }



    @PutMapping("/users/{owner}/pages/{id}")
    public ResponseEntity<Page> updatePage(@PathVariable long owner, @PathVariable long id, @RequestBody Page page) {
        Page pageUpdated = pageJpaRepository.save(page);
        return new ResponseEntity<Page>(page, HttpStatus.OK);
    }



    @PostMapping("/users/{owner}/pages")
    public ResponseEntity<Void> createPage(@PathVariable long owner, @RequestBody Page page) {
//        page.setOwner(owner);
        page.setId(null);
        Page createdPage = pageJpaRepository.save(page);
        System.out.println("id is " + createdPage.getId());

        // return location of the created entity
        // via id
        // /users/{username}/todos/ {id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdPage.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }


    /*
    SELECT - extracts data from a database
    UPDATE - updates data in a database
    DELETE - deletes data from a database
    INSERT INTO - inserts new data into a database
    CREATE DATABASE - creates a new database
    ALTER DATABASE - modifies a database
    CREATE TABLE - creates a new table
    ALTER TABLE - modifies a table
    DROP TABLE - deletes a table
    CREATE INDEX - creates an index (search key)
    DROP INDEX - deletes an index
    */
}