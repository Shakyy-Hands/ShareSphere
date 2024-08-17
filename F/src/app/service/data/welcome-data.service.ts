import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  private welcomeMessage: string = ''
  
  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService() {
    console.log("Printing from the service");
    return this.http.get('http://localhost:8080/hello-world-bean');
  }

}
