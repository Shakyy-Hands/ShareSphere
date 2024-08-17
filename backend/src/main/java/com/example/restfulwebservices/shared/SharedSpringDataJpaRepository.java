package com.example.restfulwebservices.shared;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SharedSpringDataJpaRepository extends JpaRepository<Shared, Long>{
    // was id, name, author
//  is id, text, owner
    List<Shared> findByTextId(long textId);
    List<Shared> findByNameId(long nameId);


}
