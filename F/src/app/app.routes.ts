import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListOfComponent } from './list-of/list-of.component';
import { AllPagesComponent } from './all-pages/all-pages.component';
import { SharedPagesComponent } from './shared-pages/shared-pages.component';
import { PersonComponent } from './person/person.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'list/:name', component: ListOfComponent},
    { path: 'a/:id', component: AComponent},
    { path: 'shared', component: SharedPagesComponent },
    { path: 'b', component: BComponent},
    { path: 'login', component: LoginComponent},
    { path: 'allPages', component: AllPagesComponent},
    { path: 'person', component: PersonComponent},
    { path: '**', component: ErrorComponent}
    
    // { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
];
