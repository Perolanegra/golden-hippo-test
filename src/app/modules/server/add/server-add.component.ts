import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from '../server.interface';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server-add',
  template: `
    <h3>New Server</h3>
<div style="display: flex; flex-direction: column; width: fit-content;">

  <input #inputName type="text" placeholder="Server Name">
  <input #inputHost type="text" placeholder="Host">
  <input #inputPort type="text" placeholder="Port">
</div>

    <button type="submit" (click)="submit(inputName.value, inputHost.value, inputPort.value)">Add Server</button>
  `,
  styleUrls: ['./server-add.component.scss']
})
export class ServerComponentAdd {
  constructor(private sService: ServerService, private router: Router) {

  }


  submit(name: string, host: string, port: string): void {
    const key = JSON.parse((localStorage as any).getItem('key')) + 1;
    (localStorage as any).setItem('key', JSON.stringify(key))
    const server: Server = {
      host, name, port, key
    };

    this.sService.insert(server);
    this.router.navigateByUrl('/home');
  }
}
