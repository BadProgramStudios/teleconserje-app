"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5603],{5603:(H,C,c)=>{c.r(C),c.d(C,{InvitacionPageModule:()=>V});var m=c(177),l=c(4341),i=c(4742),g=c(8986),e=c(4438),v=c(3656),h=c(8288);const k=["popover"],b=["content"];function M(n,a){1&n&&(e.qSk(),e.j41(0,"svg",36),e.nrm(1,"path",37),e.k0s())}function F(n,a){1&n&&(e.qSk(),e.j41(0,"svg",36),e.nrm(1,"path",38),e.k0s())}function I(n,a){1&n&&(e.j41(0,"ion-text",39),e.EFF(1," RUT inv\xe1lido, por favor ingrese un RUT v\xe1lido. "),e.k0s())}function x(n,a){if(1&n&&(e.j41(0,"ion-select-option",40),e.EFF(1),e.k0s()),2&n){const s=a.$implicit;e.Y8G("value",s),e.R7$(),e.JRh(s)}}let w=(()=>{var n;class a{constructor(t,o,r,d,p,f){this.nav=t,this.fb=o,this.el=r,this.loadingController=d,this.platform=p,this.renderer=f,this.activatedRoute=(0,e.WQX)(g.nX),this.segment="misDatos",this.miQr="0000",this.horas=Array.from({length:24},(u,E)=>E+1),this.isOpen=!1,this.contador=30,this.today=new Date,this.formVisita=[],this.buffer=.06,this.progress=0,this.form=this.fb.group({documento:["",[l.k0.required,j]],nombreCompleto:["",l.k0.required],estacionamiento:[""],patente:[""],cantidadHoras:[1],comentario:[""]}),setInterval(()=>{this.buffer+=.06,this.progress+=.06,this.progress>1&&setTimeout(()=>{this.buffer=.06,this.progress=0},1e3)},1e3)}ngAfterViewInit(){const t=this.el.nativeElement.querySelector("canvas");t&&(this.renderer.setStyle(t,"border-radius","20px"),this.renderer.setStyle(t,"overflow","hidden"),this.renderer.setStyle(t,"-webkit-box-shadow","0px 4px 5px 0px rgba(0,0,0,0.75)"),this.renderer.setStyle(t,"-moz-box-shadow","0px 4px 5px 0px rgba(0,0,0,0.75)"),this.renderer.setStyle(t,"box-shadow","0px 7px 20px 0px rgba(0,0,0,0.75)"),this.renderer.setStyle(t,"transition","transform 0.5s ease-in-out"))}animacion(){const t=this.el.nativeElement.querySelector("canvas");this.renderer.setStyle(t,"display","inline-block"),this.renderer.setStyle(t,"transform","rotate(90deg)"),setTimeout(()=>{this.renderer.setStyle(t,"transform","rotate(-90deg)")},500)}atras(){this.nav.pop()}jsonValue(t){return JSON.stringify(t)}downloadImage(t){const o=document.createElement("a");o.href=t.toDataURL(),o.download="qrTeleconserje.png",o.click()}ngOnInit(){this.folder=this.activatedRoute.snapshot.paramMap.get("id")}onSubmit(){if(this.form.valid){var t;const o=this.generarCodigoUnico();null===(t=this.form.get("codigoUnico"))||void 0===t||t.setValue(o),console.log("Formulario enviado:",this.form.value),this.formVisita.push(this.form.value),console.log("Formulario guardado:",this.formVisita),this.segment="qr",this.content.scrollToTop()}else console.log("Formulario inv\xe1lido")}generarCodigoUnico(){return Math.floor(1e3+9e3*Math.random())}}return(n=a).\u0275fac=function(t){return new(t||n)(e.rXU(v.q9),e.rXU(l.ok),e.rXU(e.aKT),e.rXU(i.Xi),e.rXU(v.OD),e.rXU(e.sFG))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-invitacion"]],viewQuery:function(t,o){if(1&t&&(e.GBs(k,5),e.GBs(b,5)),2&t){let r;e.mGM(r=e.lsd())&&(o.popover=r.first),e.mGM(r=e.lsd())&&(o.content=r.first)}},decls:69,vars:12,consts:[[1,"ion-no-border",3,"translucent"],["mode","md"],["slot","end",3,"click"],[1,"ion-padding"],["slot","start"],[2,"position","relative","top","4px"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",4,"ngIf"],[3,"fullscreen"],[1,"ion-padding",3,"ngSubmit","formGroup"],["position","stacked"],["formControlName","documento","placeholder","Carnet De Identidad / Pasaporte"],["color","danger",4,"ngIf"],["formControlName","nombreCompleto","placeholder","Nombre"],["formControlName","estacionamiento","placeholder","Estacionamiento"],["formControlName","patente","placeholder","Patente"],["formControlName","cantidadHoras","placeholder","1"],[3,"value",4,"ngFor","ngForOf"],["formControlName","comentario","placeholder","Ingrese un comentario"],["shape","round","mode","ios","color","primary","expand","block","type","submit",3,"disabled"],["type","indeterminate"],[1,"ion-text-center"],[2,"font-size","12px","padding-left","7px","color","#868686"],["src","../../assets/divider.svg","alt","",2,"width","100%"],["lines","none"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",2,"position","relative","top","5px"],["d","M7 17.9999C5.33333 17.9999 3.91667 17.4166 2.75 16.2499C1.58333 15.0833 1 13.6666 1 11.9999C1 10.3333 1.58333 8.91661 2.75 7.74994C3.91667 6.58327 5.33333 5.99994 7 5.99994C8.1 5.99994 9.10833 6.27494 10.025 6.82494C10.9417 7.37494 11.6667 8.09994 12.2 8.99994H21C21.55 8.99994 22.0208 9.19577 22.4125 9.58744C22.8042 9.97911 23 10.4499 23 10.9999V12.9999C23 13.5499 22.8042 14.0208 22.4125 14.4124C22.0208 14.8041 21.55 14.9999 21 14.9999V15.9999C21 16.5499 20.8042 17.0208 20.4125 17.4124C20.0208 17.8041 19.55 17.9999 19 17.9999H17C16.45 17.9999 15.9792 17.8041 15.5875 17.4124C15.1958 17.0208 15 16.5499 15 15.9999V14.9999H12.2C11.6667 15.8999 10.9417 16.6249 10.025 17.1749C9.10833 17.7249 8.1 17.9999 7 17.9999ZM7 15.9999C8.1 15.9999 8.98333 15.6624 9.65 14.9874C10.3167 14.3124 10.7167 13.6499 10.85 12.9999H17V15.9999H19V12.9999H21V10.9999H10.85C10.7167 10.3499 10.3167 9.68744 9.65 9.01244C8.98333 8.33744 8.1 7.99994 7 7.99994C5.9 7.99994 4.95833 8.39161 4.175 9.17494C3.39167 9.95827 3 10.8999 3 11.9999C3 13.0999 3.39167 14.0416 4.175 14.8249C4.95833 15.6083 5.9 15.9999 7 15.9999ZM7 13.9999C7.55 13.9999 8.02083 13.8041 8.4125 13.4124C8.80417 13.0208 9 12.5499 9 11.9999C9 11.4499 8.80417 10.9791 8.4125 10.5874C8.02083 10.1958 7.55 9.99994 7 9.99994C6.45 9.99994 5.97917 10.1958 5.5875 10.5874C5.19583 10.9791 5 11.4499 5 11.9999C5 12.5499 5.19583 13.0208 5.5875 13.4124C5.97917 13.8041 6.45 13.9999 7 13.9999Z","fill","#455054"],[2,"font-weight","900"],["slot","end"],["d","M8.68402 13.342C8.88602 12.938 9.00002 12.482 9.00002 12C9.00002 11.518 8.88602 11.062 8.68402 10.658M8.68402 13.342C8.38172 13.9464 7.88422 14.431 7.27211 14.7174C6.66001 15.0037 5.96915 15.075 5.31146 14.9197C4.65378 14.7644 4.06779 14.3916 3.64843 13.8617C3.22907 13.3317 3.00092 12.6758 3.00092 12C3.00092 11.3242 3.22907 10.6682 3.64843 10.1383C4.06779 9.60841 4.65378 9.2356 5.31146 9.08029C5.96915 8.92499 6.66001 8.99628 7.27211 9.28263C7.88422 9.56898 8.38172 10.0536 8.68402 10.658M8.68402 13.342L15.316 16.658M8.68402 10.658L15.316 7.34199M15.316 16.658C14.9601 17.3698 14.9015 18.1939 15.1532 18.9489C15.4049 19.704 15.9462 20.3281 16.658 20.684C17.3699 21.0399 18.1939 21.0985 18.949 20.8468C19.704 20.5951 20.3281 20.0538 20.684 19.342C21.0399 18.6302 21.0985 17.8061 20.8468 17.0511C20.5952 16.296 20.0539 15.6719 19.342 15.316C18.9895 15.1398 18.6058 15.0347 18.2127 15.0067C17.8197 14.9788 17.4249 15.0286 17.0511 15.1532C16.2961 15.4049 15.6719 15.9462 15.316 16.658ZM15.316 7.34199C15.4923 7.69439 15.7362 8.00863 16.0338 8.26677C16.3315 8.5249 16.6771 8.72188 17.0509 8.84645C17.4247 8.97102 17.8194 9.02074 18.2124 8.99278C18.6055 8.96482 18.9891 8.85973 19.3415 8.68349C19.6939 8.50726 20.0082 8.26334 20.2663 7.96566C20.5244 7.66798 20.7214 7.32238 20.846 6.94858C20.9705 6.57477 21.0203 6.1801 20.9923 5.78708C20.9643 5.39406 20.8593 5.01039 20.683 4.65799C20.3271 3.94628 19.703 3.40511 18.9481 3.15353C18.1932 2.90195 17.3692 2.96057 16.6575 3.31649C15.9458 3.67241 15.4046 4.29648 15.1531 5.05141C14.9015 5.80634 14.9601 6.63028 15.316 7.34199Z","stroke","#3F3F46","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"ion-padding",2,"position","relative","top","3px",3,"click"],[1,"segment-content","ion-padding-bottom",2,"background","linear-gradient(to bottom, white, #e1e1e1)","padding-top","30px"],["id","qrImage"],[1,"d-flex-center",2,"position","relative","right","35px"],[2,"writing-mode","vertical-rl","/* orienta el texto en vertical */\n            transform","rotate(180deg)","/* asegura que est\xe9 de abajo hacia arriba */\n            text-align","center","font-size","25px","margin-bottom","-60px","/* espacio entre el texto y el qr */\n            margin-right","5px","color","#000"],[1,"d-flex-center","qr-wrapper"],["value","1982378","size","190","errorCorrectionLevel","M"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12 4V5M18 16H20M14 16H12V20M12 9V12M12 12H12.01M12 12H16.01M16 20H20M4 12H8M20 12H20.01M5 8H7C7.26522 8 7.51957 7.89464 7.70711 7.70711C7.89464 7.51957 8 7.26522 8 7V5C8 4.73478 7.89464 4.48043 7.70711 4.29289C7.51957 4.10536 7.26522 4 7 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8ZM17 8H19C19.2652 8 19.5196 7.89464 19.7071 7.70711C19.8946 7.51957 20 7.26522 20 7V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4H17C16.7348 4 16.4804 4.10536 16.2929 4.29289C16.1054 4.48043 16 4.73478 16 5V7C16 7.26522 16.1054 7.51957 16.2929 7.70711C16.4804 7.89464 16.7348 8 17 8ZM5 20H7C7.26522 20 7.51957 19.8946 7.70711 19.7071C7.89464 19.5196 8 19.2652 8 19V17C8 16.7348 7.89464 16.4804 7.70711 16.2929C7.51957 16.1054 7.26522 16 7 16H5C4.73478 16 4.48043 16.1054 4.29289 16.2929C4.10536 16.4804 4 16.7348 4 17V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20Z","stroke","#3F3F46","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M15 5V7M15 11V13M15 17V19M5 5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V10C3.53043 10 4.03914 10.2107 4.41421 10.5858C4.78929 10.9609 5 11.4696 5 12C5 12.5304 4.78929 13.0391 4.41421 13.4142C4.03914 13.7893 3.53043 14 3 14V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V14C20.4696 14 19.9609 13.7893 19.5858 13.4142C19.2107 13.0391 19 12.5304 19 12C19 11.4696 19.2107 10.9609 19.5858 10.5858C19.9609 10.2107 20.4696 10 21 10V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5Z","stroke","#3F3F46","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["color","danger"],[3,"value"]],template:function(t,o){if(1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.bIt("click",function(){return o.atras()}),e.j41(3,"p",3),e.EFF(4,"Volver \xa0"),e.k0s()(),e.j41(5,"ion-buttons",4)(6,"ion-title")(7,"span",5),e.DNE(8,M,2,0,"svg",6)(9,F,2,0,"svg",6),e.k0s(),e.EFF(10," Invitaci\xf3n "),e.k0s()()()(),e.j41(11,"ion-content",7)(12,"form",8),e.bIt("ngSubmit",function(){return o.onSubmit()}),e.j41(13,"ion-item")(14,"ion-label",9),e.EFF(15,"Documento *"),e.k0s(),e.nrm(16,"ion-input",10),e.k0s(),e.DNE(17,I,2,0,"ion-text",11),e.j41(18,"ion-item")(19,"ion-label",9),e.EFF(20,"Nombre completo *"),e.k0s(),e.nrm(21,"ion-input",12),e.k0s(),e.j41(22,"ion-item")(23,"ion-label",9),e.EFF(24,"Estacionamiento"),e.k0s(),e.nrm(25,"ion-input",13),e.k0s(),e.j41(26,"ion-item")(27,"ion-label",9),e.EFF(28,"Patente"),e.k0s(),e.nrm(29,"ion-input",14),e.k0s(),e.j41(30,"ion-item")(31,"ion-label",9),e.EFF(32,"Cantidad de horas"),e.k0s(),e.j41(33,"ion-select",15),e.DNE(34,x,2,2,"ion-select-option",16),e.k0s()(),e.j41(35,"ion-item")(36,"ion-label",9),e.EFF(37,"Comentario"),e.k0s(),e.nrm(38,"ion-textarea",17),e.k0s(),e.nrm(39,"br"),e.j41(40,"ion-button",18),e.EFF(41,"Crear Acceso"),e.k0s()(),e.nrm(42,"br")(43,"ion-progress-bar",19),e.j41(44,"div",20)(45,"span",21),e.EFF(46),e.nI1(47,"date"),e.k0s()(),e.nrm(48,"img",22),e.j41(49,"ion-list")(50,"ion-item",23),e.qSk(),e.j41(51,"svg",24),e.nrm(52,"path",25),e.k0s(),e.joV(),e.j41(53,"h5"),e.EFF(54," \xa0 "),e.j41(55,"span",26),e.EFF(56,"Invitaci\xf3n"),e.k0s()(),e.j41(57,"ion-buttons",27),e.qSk(),e.j41(58,"svg",24),e.nrm(59,"path",28),e.k0s(),e.joV(),e.j41(60,"p",29),e.bIt("click",function(){return o.animacion()}),e.EFF(61," \xa0COMPARTIR"),e.k0s()()()(),e.j41(62,"div",30)(63,"div",31)(64,"div",32)(65,"p",33),e.EFF(66,"Bienvenido"),e.k0s(),e.j41(67,"div",34),e.nrm(68,"qr-code",35),e.k0s()()()()()),2&t){let r;e.Y8G("translucent",!0),e.R7$(8),e.Y8G("ngIf",o.form.valid),e.R7$(),e.Y8G("ngIf",!o.form.valid),e.R7$(2),e.Y8G("fullscreen",!0),e.R7$(),e.Y8G("formGroup",o.form),e.R7$(5),e.Y8G("ngIf",(null==(r=o.form.get("documento"))?null:r.hasError("rutInvalido"))&&(null==(r=o.form.get("documento"))?null:r.touched)&&"carnet"===(null==(r=o.form.get("tipoDocumento"))?null:r.value)),e.R7$(17),e.Y8G("ngForOf",o.horas),e.R7$(6),e.Y8G("disabled",!o.form.valid),e.R7$(6),e.SpI("Esta llave es v\xe1lida solo por el d\xeda - ",e.i5U(47,9,o.today,"dd/MM/yyyy"),"")}},dependencies:[m.Sq,m.bT,l.qT,l.BC,l.cb,i.Jm,i.QW,i.W9,i.eU,i.$w,i.uz,i.he,i.nf,i.FH,i.Nm,i.Ip,i.IO,i.nc,i.BC,i.ai,i.Je,i.Gw,l.j4,l.JD,h.Um,m.vh],styles:["ion-progress-bar[_ngcontent-%COMP%]::part(track){background:#c3c3c3}ion-progress-bar[_ngcontent-%COMP%]::part(progress){background:#09c567}ion-progress-bar[_ngcontent-%COMP%]::part(stream){background-image:radial-gradient(ellipse at center,#c2c2c2 0%,#6d6d6d 30%,transparent 30%)}#qrImage[_ngcontent-%COMP%]{padding:10px 0 30px;position:relative;bottom:0}.no-padding-element[_ngcontent-%COMP%]{margin:-16px!important}.qr-wrapper[_ngcontent-%COMP%]{width:250px;min-height:250px;background:#979797;border-radius:50px;overflow:hidden}.qr-placeholder[_ngcontent-%COMP%]{width:60px}.d-flex-center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),a})();const j=n=>{const a=n.value;if(!a)return null;const s=a.replace(/^0+|[^0-9kK]+/g,"").toUpperCase();if(s.length<8)return{rutInvalido:!0};const t=s.slice(0,-1),o=s.slice(-1);let r=0,d=2;for(let u=t.length-1;u>=0;u--)r+=+t[u]*d,d=d<7?d+1:2;const p=11-r%11;return(11===p?"0":10===p?"K":p.toString())===o?null:{rutInvalido:!0}},y=[{path:"",component:w}];let P=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[g.iI.forChild(y),g.iI]}),a})(),V=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[m.MD,l.YN,i.bv,P,l.X1,h.XK]}),a})()}}]);