import { Component } from '@angular/core';
import { ServerService } from './server.service';
import { Server } from './server.interface';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  currentDetails!: Server
  idParam!: any;

  servers: any;

  hasShowDetails = false;
  constructor(public sService: ServerService, private route: ActivatedRoute) {
   
  }

  ngOnInit() {
    this.route.queryParamMap.pipe()
    .subscribe(val => {
      this.checkIdParam();
    })
  }

  checkIdParam() {
    if(this.route.snapshot.paramMap.get('id')) {
      this.idParam = this.route.snapshot.paramMap.get('id');;
      const currentData = this.sService.findByKey(this.idParam);
      if(currentData) {
        this.currentDetails = JSON.parse(JSON.stringify(currentData));
        this.hasShowDetails = true;
      } 
    }

  }

  showDetails(server: any) {
    this.hasShowDetails = true;
    this.currentDetails = JSON.parse(JSON.stringify(server));
  }
}
