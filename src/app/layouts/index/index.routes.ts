import { Routes } from '@angular/router';
import { NotFoundComponent } from '../../pages/notFound/notFound.component';

export const Indexroutes: Routes = [
  {
    path:'dashboard',
    loadComponent: () => import('../../pages/dashboard/dashboard.component').then(m=>m.DashboardComponent)
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
