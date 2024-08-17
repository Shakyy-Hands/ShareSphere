import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MenuComponent,
    AComponent,
    BComponent,
    FooterComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
