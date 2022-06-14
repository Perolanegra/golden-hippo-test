import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'servers',
    loadChildren: () =>
      import('./modules/server/server.module').then((m) => m.ServerModule),
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  useHash: true,
  onSameUrlNavigation: 'reload',
});