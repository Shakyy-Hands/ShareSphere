package com.example.restfulwebservices.page.springdatajpa;

import com.example.restfulwebservices.page.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PageSpringDataJpaRepository extends JpaRepository<Page, Long> {
// was id, name, author
//  is id, text, owner
    List<Page> findByText(String text);
    List<Page> findByOwner(long ownerId);


}
