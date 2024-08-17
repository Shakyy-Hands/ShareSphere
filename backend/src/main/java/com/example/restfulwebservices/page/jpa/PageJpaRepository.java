package com.example.restfulwebservices.page.jpa;

import com.example.restfulwebservices.page.Page;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class PageJpaRepository {

    //    @Autowired
    @PersistenceContext
    private EntityManager entityManager;

    public void insert(Page page){
        entityManager.merge(page);
    }

    public Page findById(long id){
        return entityManager.find(Page.class, id);
    }

    public void deleteById(long id){
        Page page = entityManager.find(Page.class, id);
        entityManager.remove(page);
    }

}
