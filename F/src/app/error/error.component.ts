import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  errorMessage = 'An Error Occured. There is not phone # for you to call, good luck.'

  constructor() {

  }

  ngOnInit() {
    
  }

}
