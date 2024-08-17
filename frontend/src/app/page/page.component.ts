import { Component } from '@angular/core';

export class Page {
  constructor(
    public id: number,
    public text: string,
    public owner: number
  ) { }
}

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
