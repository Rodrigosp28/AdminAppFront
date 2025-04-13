import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/notFound/notFound.component';
import { IndexComponent } from './layouts/index/index.component';
import { OutsitesComponent } from './layouts/outsites/outsites.component';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'index/dashboard'
  },
  {
    path:'index',
    loadComponent: ()=>import('../app/layouts/index/index.component').then(m=>m.IndexComponent),
    loadChildren: ()=> import('../app/layouts/index/index.routes').then(m=>m.Indexroutes)
  },
  {
    path:'',
    component:OutsitesComponent,
    loadChildren: ()=> import('../app/layouts/outsites/outsite.routes').then(m=>m.OutSiteroutes)
  }
];
