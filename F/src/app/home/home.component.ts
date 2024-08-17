import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HttpClientModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  message: string = 'a message'
  welcomeMessage: string = ''
  name: string = ''

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService,
    private http: HttpClient
    ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // console.log('getWelcomMessage')
    // this.service.executeHelloWorldBeanService();
    // console.log(this.service.executeHelloWorldBeanService());
    // this.service.executeHelloWorldBeanService().subscribe(
    //   response => this.handleSuccessfulResponce(response),
    //   error => this.handleErrorResponse(error)
    // );
    // console.log('last line of getWelcomMessage')
    // console.log(this.service.executeHelloWorldBeanService());
    // this.service.executeHelloWorldBeanService().subscribe();
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessage = response.message
    console.log(response)
    console.log(response.message)
  }

  handleErrorResponse(error: any) {
    this.welcomeMessage = error.error.message
  }

}
