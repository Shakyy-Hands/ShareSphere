package com.example.restfulwebservices.page;
import jakarta.persistence.*;

@Entity
@Table(name = "pages")
public class Page {

    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="pages_seq_gen")
    @SequenceGenerator(name="pages_seq_gen", sequenceName="PAGES_SEQ", allocationSize = 1)
    private Long id;
    @Column(name="text")
    private String text;
    @Column(name="owner")
    private long owner;

    protected Page() {}

    public Page(long id, String text, long owner) {
        this.id = id;
        this.text = text;
        this.owner = owner;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public long getOwner() {
        return owner;
    }

    public void setOwner(long owner) {
        this.owner = owner;
    }

    @Override
    public String toString() {
        return "Page{" + "id=" + id + ", text='" + text + '\'' + ", owner=" + owner + '}';
    }
}
