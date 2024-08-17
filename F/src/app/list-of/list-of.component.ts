import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-of',
  standalone: true,
  imports: [],
  templateUrl: './list-of.component.html',
  styleUrl: './list-of.component.css'
})
export class ListOfComponent {

  message = 'Some Message'
  name = ''

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.message)
    // this.route.snapshot.params['name']
    this.name = this.route.snapshot.params['name'];
  }
}
