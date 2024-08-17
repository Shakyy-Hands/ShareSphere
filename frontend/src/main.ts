import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Router } from '@angular/router';
import { MenuComponent } from './app/menu/menu.component';
import { HomeComponent } from './app/home/home.component';
import { AComponent } from './app/a/a.component'; //'./app/a/a.component';
import { routes } from './app/app.routes'; //import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// import { provideAnimations } from '@angular/platform-browser/animations';


// const routes: Routes = [
//   { path: 'a', component: AComponent },
//   // other routes
// ];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));


// // for the menu mat-menu element
// bootstrapApplication(AppComponent, {
//   providers: [
//     provideAnimations()
//   ]
// })

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
