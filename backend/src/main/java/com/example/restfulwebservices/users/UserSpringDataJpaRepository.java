package com.example.restfulwebservices.users;

import com.example.restfulwebservices.page.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserSpringDataJpaRepository extends JpaRepository<User, Long>{
    // was id, name, author
//  is id, text, owner
    List<User> findByName(String name);
    List<User> findById(long id);
    Optional<User> findByNameAndPassword(String name, String password);


}
