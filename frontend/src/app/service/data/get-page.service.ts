import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../../page/page.component';
import { Observable, map } from 'rxjs';
import { TODO_JPA_API_URL } from '../../data.constants';

export class PageBean {
  constructor(
    public id: number,
    public owner: number,
    public text: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class GetPageService {

  private apiUrl: string = 'http://localhost:8080'
  // private apiUrl: string = 'http://localhost:8080/users/1/pages/1'
  
  constructor(
    private http:HttpClient
  ) { }

  // executeGetPageService(owner: number, id: number) {
  //   console.log("Printing from the service");
  //   // return this.http.get('http://localhost:8080/users/${owner}/pages');
  //   return this.http.get<PageBean>(`http://localhost:8080/users/${owner}/pages/${id}`);
  // }

  retrieveAllPages(owner: number) {
    return this.http.get<Page[]>(`http://localhost:8080/users/${owner}/pages`);
  }

  deletePage(owner: number, id:number) {
    return this.http.delete(`${TODO_JPA_API_URL}users/${owner}/pages/${id}`)
  }

  retrievePage(owner: number, id:number) {
    console.log("--retrieve in service")
    return this.http.get<Page>(`${TODO_JPA_API_URL}users/${owner}/pages/${id}`)
  }

  updatePage(owner: number, id:number, page:Page) {
    console.log("--update in service")
    console.log("page text is", page.text)
    return this.http.put(`${TODO_JPA_API_URL}users/${owner}/pages/${id}`, page)
  }
  
  createPage(owner: number, page:Page) {
    console.log("--create in service")
    return this.http.post(`${TODO_JPA_API_URL}users/${owner}/pages`, page)
  }



  // getText(): Observable<string> {
  //   return this.http.get<{ id: number, text: string, owner: number }>(this.apiUrl)
  //     .pipe(
  //       map(response => response.text)
  //     );
  // }
}
