import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServerComponent } from './server.component';
import { ServerComponentAdd } from './add/server-add.component';

const routes: Routes = [
  { path: 'servers', redirectTo: '', pathMatch: 'full' },
  {
    path: '', // rota/:param
    component: ServerComponent,
  },
  {
    path: 'detail/:id', // rota/:param
    component: ServerComponent,
  },
  {
    path: 'new', // rota/:param
    component: ServerComponentAdd,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    // resolvers
  ],
})
export class ServerRoutingModule {}
