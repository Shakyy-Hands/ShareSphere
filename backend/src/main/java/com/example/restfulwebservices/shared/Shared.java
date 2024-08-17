package com.example.restfulwebservices.shared;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
//@Table(name = "Shared")
public class Shared {

    @Id
    private long id;
    @Column(name="textId")
    private long textId;
    @Column(name="shared_with")
    private long nameId;

    public Shared() {}

    public Shared(long id, long textId, long nameId) {
        this.id = id;
        this.textId = textId;
        this.nameId = nameId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getTextId() {
        return textId;
    }

    public void setTextId(long textId) {
        this.textId = textId;
    }

    public long getNameId() {
        return nameId;
    }

    public void setNameId(long nameId) {
        this.nameId = nameId;
    }
}
