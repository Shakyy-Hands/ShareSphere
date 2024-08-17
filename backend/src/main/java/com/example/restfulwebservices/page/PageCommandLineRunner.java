package com.example.restfulwebservices.page;

import com.example.restfulwebservices.page.springdatajpa.PageSpringDataJpaRepository;
import com.example.restfulwebservices.shared.Shared;
import com.example.restfulwebservices.shared.SharedSpringDataJpaRepository;
import com.example.restfulwebservices.users.User;
import com.example.restfulwebservices.users.UserSpringDataJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class PageCommandLineRunner implements CommandLineRunner {


//    @Autowired
//    private CourseJdbcRepository repository;

//    @Autowired
//    private CourseJpaRepository repository;

    @Autowired
    private PageSpringDataJpaRepository repository2;
    @Autowired
    private UserSpringDataJpaRepository userRep;
    @Autowired
    private SharedSpringDataJpaRepository shareRep;

    @Override
    public void run(String... args) throws Exception {
//        Used for the CourseJdbcRepository & CourseJpaRepository use cases(above)
//        repository.insert(new Course(1, "Learn AWS Now!", "in28"));
//        repository.insert(new Course(2, "Learn Angular Now!", "in28"));
//        repository.insert(new Course(3, "Learn Agile Now!", "in28"));

//        repository2.save(new Page(1, "Learn AWS Now!", 1));
//        repository2.save(new Page(2, "Learn Angular Now!", 1));
//        repository2.save(new Page(3, "Learn Agile Now!", 2));

//        userRep.save(new User(1, "Anna", "hehe"));
//        userRep.save(new User(2, "Bob", "fdsa"));
//        userRep.save(new User(3, "Connie", "cici"));

//        shareRep.deleteAll();
//        shareRep.save(new Shared(1, 3, 3));
//        shareRep.save(new Shared(2, 1, 3));
//        shareRep.save(new Shared(3, 2, 3 ));


        // Spring data jpa needs the l at the end of the (long) id passed to it.
//        repository.deleteById(1l);
//
//        System.out.println(repository.findById(2l));
//        System.out.println(repository.findById(3l));

//        System.out.println(repository.findAll());
//        System.out.println(repository.count());
//        System.out.println(repository.findByAuthor("in28"));
//        System.out.println(repository.findByAuthor(""));
//        System.out.println(repository.findByName("Learn Agile Now!"));
//        System.out.println(repository.findByName(""));




    }

}
