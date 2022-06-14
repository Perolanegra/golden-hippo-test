import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server.component';
import { ServerRoutingModule } from './server-routing.module';

@NgModule({
  imports: [CommonModule, ServerRoutingModule],
  declarations: [ServerComponent],
  exports: [ServerComponent],
  providers: [],
})
export class ServerModule {}
