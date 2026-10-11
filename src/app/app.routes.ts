import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Clientes } from './clientes/clientes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'clientes', component: Clientes },
];
