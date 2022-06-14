"use strict";(self.webpackChunkexam=self.webpackChunkexam||[]).push([[969],{969:(_,p,c)=>{c.r(p),c.d(p,{ServerModule:()=>y});var a=c(808),l=c(882),e=c(223),h=c(135);let d=(()=>{class r{constructor(){this.servers=new h.X(new Array)}insert(t){const o=[...this.servers.getValue(),t];this.servers.next(o)}edit(t){const n=this.servers.getValue(),o=n.findIndex(i=>i.key===t.key);n[o]=t,this.servers.next(n)}delete(t){const n=this.servers.getValue(),o=n.indexOf(t);n.splice(o,1),this.servers.next(n)}findByKey(t){return this.servers.getValue().find(i=>i.key==t)}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function m(r,s){if(1&r){const t=e.EpF();e.TgZ(0,"div",4)(1,"button",5),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw().showDetails(i)}),e._uU(2),e.qZA()()}if(2&r){const t=s.$implicit;e.xp6(2),e.hij(" ",t.name," ")}}function S(r,s){if(1&r&&(e.TgZ(0,"div",6)(1,"strong"),e._uU(2,"Server Details"),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"span"),e._uU(5),e.qZA(),e.TgZ(6,"span"),e._uU(7),e.qZA(),e.TgZ(8,"span"),e._uU(9),e.qZA()()),2&r){const t=e.oxw();e.xp6(5),e.hij("Server Name:",null==t.currentDetails?null:t.currentDetails.name,""),e.xp6(2),e.hij("Host: ",null==t.currentDetails?null:t.currentDetails.host,""),e.xp6(2),e.hij("Port: ",null==t.currentDetails?null:t.currentDetails.port,"")}}let v=(()=>{class r{constructor(t,n){this.sService=t,this.route=n,this.hasShowDetails=!1}ngOnInit(){this.route.queryParamMap.pipe().subscribe(t=>{this.checkIdParam()})}checkIdParam(){if(this.route.snapshot.paramMap.get("id")){this.idParam=this.route.snapshot.paramMap.get("id");const t=this.sService.findByKey(this.idParam);t&&(this.currentDetails=JSON.parse(JSON.stringify(t)),this.hasShowDetails=!0)}}showDetails(t){this.hasShowDetails=!0,this.currentDetails=JSON.parse(JSON.stringify(t))}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(d),e.Y36(l.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-server"]],decls:5,vars:4,consts:[[1,"out"],[1,"content"],["class","loop",4,"ngFor","ngForOf"],["class","details",4,"ngIf"],[1,"loop"],[3,"click"],[1,"details"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,m,3,1,"div",2),e.ALo(3,"async"),e.qZA(),e.YNc(4,S,10,3,"div",3),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,2,null==n.sService?null:n.sService.servers)),e.xp6(2),e.Q6J("ngIf",n.hasShowDetails))},directives:[a.sg,a.O5],pipes:[a.Ov],styles:[".out[_ngcontent-%COMP%]{display:flex}.out[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;padding:10px;flex-direction:column;width:20%}.out[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loop[_ngcontent-%COMP%], .out[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),r})();const f=[{path:"servers",redirectTo:"",pathMatch:"full"},{path:"",component:v},{path:"detail/:id",component:v},{path:"new",component:(()=>{class r{constructor(t,n){this.sService=t,this.router=n}submit(t,n,o){const i=JSON.parse(localStorage.getItem("key"))+1;localStorage.setItem("key",JSON.stringify(i)),this.sService.insert({host:n,name:t,port:o,key:i}),this.router.navigateByUrl("/home")}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(d),e.Y36(l.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-server-add"]],decls:11,vars:0,consts:[[2,"display","flex","flex-direction","column","width","fit-content"],["type","text","placeholder","Server Name"],["inputName",""],["type","text","placeholder","Host"],["inputHost",""],["type","text","placeholder","Port"],["inputPort",""],["type","submit",3,"click"]],template:function(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"h3"),e._uU(1,"New Server"),e.qZA(),e.TgZ(2,"div",0),e._UZ(3,"input",1,2)(5,"input",3,4)(7,"input",5,6),e.qZA(),e.TgZ(9,"button",7),e.NdJ("click",function(){e.CHM(o);const u=e.MAs(4),x=e.MAs(6),C=e.MAs(8);return n.submit(u.value,x.value,C.value)}),e._uU(10,"Add Server"),e.qZA()}},styles:[""]}),r})()}];let g=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[],imports:[[l.Bz.forChild(f)],l.Bz]}),r})(),y=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[],imports:[[a.ez,g]]}),r})()}}]);