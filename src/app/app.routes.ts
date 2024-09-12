import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookFormComponent } from './book-form/book-form.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Página de Inicio'
    },
    {
        path: 'book-form/:id',
        component: BookFormComponent,
        title: 'Formulario de Libros'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
