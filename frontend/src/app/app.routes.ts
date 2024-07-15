import { Routes } from '@angular/router';
import { EmptyPageComponent } from './pages/empty-page/empty-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: EmptyPageComponent,
  },
];
