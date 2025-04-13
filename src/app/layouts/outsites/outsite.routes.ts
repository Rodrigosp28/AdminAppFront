import { Routes } from '@angular/router';
import { NotFoundComponent } from '../../pages/notFound/notFound.component';

export const OutSiteroutes: Routes = [
  {
    path:'login',
    loadComponent: () => import('../../pages/login/login.component').then(m=>m.LoginComponent)
  },
  {
    path:'notfound',
    component:NotFoundComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'notfound'
  }
];
