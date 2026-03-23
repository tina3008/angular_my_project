import { Routes } from '@angular/router';
import { Category } from './components/category/category';
import { Preparation } from './components/preparation/preparation';
import { PageNotFound } from './components/page-not-found/page-not-found';

export const routes: Routes = [
  { path: 'categories/:categoryId', component: Category },
  { path: 'preparation', component: Preparation },

  { path: '', redirectTo: '/categories/angular', pathMatch: 'full' },
  { path: '**', component: PageNotFound },
];
