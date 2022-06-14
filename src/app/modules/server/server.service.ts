import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Server } from './server.interface';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor() {}
  public servers: BehaviorSubject<Array<Server>> =
    new BehaviorSubject(new Array<any>());

  insert(user: Server) {
    const arr = this.servers.getValue();
    const data = [...arr, user];
    this.servers.next(data);
  }

  edit(user: Server) {
    const arr = this.servers.getValue();
    const index = arr.findIndex((us) => us.key === user.key);
    arr[index] = user;
    this.servers.next(arr);
  }

  delete(user: any) {
    const arr = this.servers.getValue();
    const index = arr.indexOf(user);
    arr.splice(index, 1);
    this.servers.next(arr);
  }

  findByKey(id: string): Server | undefined {
    const arr = this.servers.getValue();
    const result = arr.find(server => server.key == id);
    return result;
  }
}
