import { Routes } from '@angular/router';
import { EmptyPageComponent } from './pages/empty-page/empty-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**', 
        pathMatch: 'full',
        component: EmptyPageComponent
    }
];
