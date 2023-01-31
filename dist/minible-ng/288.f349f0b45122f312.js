"use strict";(self.webpackChunkminible_ng=self.webpackChunkminible_ng||[]).push([[288],{75288:(oe,u,s)=>{s.r(u),s.d(u,{ContactsModule:()=>te});var Z=s(86019),l=s(49133),h=s(75396),o=s(72344),v=s(63091),p=s(56225),d=s(34099),_=s(23405),b=s(22411);const U=[{id:"#MN0132",name:"Simon Ryles",image:"assets/images/users/avatar-2.jpg",position:"Full Stack Developer",email:"SimonRyles@minible.com",index:1},{id:"#MN0131",name:"Marion Walker",image:"assets/images/users/avatar-3.jpg",position:"Frontend Developer",email:"MarionWalker@minible.com",index:2},{id:"#MN0130",name:"Frederick White",position:"UI/UX Designer",email:"FrederickWhite@minible.com",index:3},{id:"#MN0129",name:"Shanon Marvin",image:"assets/images/users/avatar-4.jpg",position:"Backend Developer",email:"ShanonMarvin@minible.com",index:4},{id:"#MN0128",name:"Mark Jones",position:"Frontend Developer",email:"MarkJones@minible.com",index:5},{id:"#MN0127",name:"Janice Morgan",image:"assets/images/users/avatar-5.jpg",position:"Backend Developer",email:"JaniceMorgan@minible.com",index:6},{id:"#MN0126",name:"Patrick Petty",image:"assets/images/users/avatar-7.jpg",position:"UI/UX Designer",email:"PatrickPetty@minible.com",index:7},{id:"#MN0125",name:"Marilyn Horton",image:"assets/images/users/avatar-8.jpg",position:"Backend Developer",email:"MarilynHorton@minible.com",index:8},{id:"#MN0124",name:"Neal Womack",image:"assets/images/users/avatar-2.jpg",position:"Full Stack Developer",email:"NealWomack@minible.com",index:9},{id:"#MN0123",name:"Steven Williams",position:"Frontend Developer",email:"StevenWilliams@minible.com",index:10},{id:"#MN0122",name:"Connie Franco",image:"assets/images/users/avatar-2.jpg",position:"Full Stack Developer",email:"ConnieFranco@minible.com",index:11},{id:"#MN0121",name:"Lara Casillas",image:"assets/images/users/avatar-2.jpg",position:"Full Stack Developer",email:"LaraCasillas@minible.com",index:12}];var T=s(81366),f=s(65686),x=s(79204),C=s(5250),e=s(83668);let A=(()=>{class t{constructor(i){this.pipe=i,this._loading$=new d.X(!0),this._search$=new _.xQ,this._users$=new d.X([]),this._total$=new d.X(0),this._state={page:1,pageSize:10,searchTerm:"",sortColumn:"",sortDirection:""},this._search$.pipe((0,T.b)(()=>this._loading$.next(!0)),(0,f.b)(200),(0,x.w)(()=>this._search()),(0,C.g)(200),(0,T.b)(()=>this._loading$.next(!1))).subscribe(n=>{this._users$.next(n.users),this._total$.next(n.total)}),this._search$.next()}get users$(){return this._users$.asObservable()}get total$(){return this._total$.asObservable()}get loading$(){return this._loading$.asObservable()}get page(){return this._state.page}get pageSize(){return this._state.pageSize}get searchTerm(){return this._state.searchTerm}set page(i){this._set({page:i})}set pageSize(i){this._set({pageSize:i})}set searchTerm(i){this._set({searchTerm:i})}set sortColumn(i){this._set({sortColumn:i})}set sortDirection(i){this._set({sortDirection:i})}_set(i){Object.assign(this._state,i),this._search$.next()}_search(){const{sortColumn:i,sortDirection:n,pageSize:r,page:g,searchTerm:ie}=this._state;let c=function(t,a,i){return""===i||""===a?t:[...t].sort((n,r)=>{const g=((t,a)=>t<a?-1:t>a?1:0)(n[a],r[a]);return"asc"===i?g:-g})}(U,i,n);c=c.filter(ne=>function(t,a,i){return t.name.toLowerCase().includes(a.toLowerCase())||i.transform(t.position).includes(a)||i.transform(t.email).includes(a)}(ne,ie,this.pipe));const ae=c.length;return c=c.slice((g-1)*r,(g-1)*r+r),(0,b.of)({users:c,total:ae})}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(Z.JJ))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const w={asc:"desc",desc:"","":"asc"};let D=(()=>{class t{constructor(){this.sortable="",this.direction="",this.sort=new e.vpe}rotate(){this.direction=w[this.direction],this.sort.emit({column:this.sortable,direction:this.direction})}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=e.lG2({type:t,selectors:[["th","sortable",""]],hostVars:4,hostBindings:function(i,n){1&i&&e.NdJ("click",function(){return n.rotate()}),2&i&&e.ekj("asc","asc"===n.direction)("desc","desc"===n.direction)},inputs:{sortable:"sortable",direction:"direction"},outputs:{sort:"sort"}}),t})();var m=s(11950);function j(t,a){if(1&t&&(e.TgZ(0,"td"),e._UZ(1,"img",44),e.TgZ(2,"a",45),e._uU(3),e.qZA(),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.s9C("src",i.image,e.LSH),e.xp6(2),e.Oqu(i.name)}}function N(t,a){if(1&t&&(e.TgZ(0,"td"),e.TgZ(1,"div",46),e.TgZ(2,"div",47),e._UZ(3,"i",48),e.qZA(),e.qZA(),e.TgZ(4,"a",45),e._UZ(5,"ngb-highlight",32),e.qZA(),e.qZA()),2&t){const i=e.oxw().$implicit,n=e.oxw();e.xp6(5),e.Q6J("result",i.name)("term",n.service.searchTerm)}}function S(t,a){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"div",19),e._UZ(3,"input",29),e.TgZ(4,"label",30),e._uU(5,"\xa0"),e.qZA(),e.qZA(),e.qZA(),e.YNc(6,j,4,2,"td",31),e.YNc(7,N,6,2,"td",31),e.TgZ(8,"td"),e._UZ(9,"ngb-highlight",32),e.qZA(),e.TgZ(10,"td"),e._UZ(11,"ngb-highlight",32),e.qZA(),e.TgZ(12,"td"),e.TgZ(13,"ul",33),e.TgZ(14,"li",34),e.TgZ(15,"a",35),e._UZ(16,"i",36),e.qZA(),e.qZA(),e.TgZ(17,"li",34),e.TgZ(18,"a",37),e._UZ(19,"i",38),e.qZA(),e.qZA(),e.TgZ(20,"li",39),e.TgZ(21,"a",40),e._UZ(22,"i",41),e.qZA(),e.TgZ(23,"div",42),e.TgZ(24,"a",43),e._uU(25,"Action"),e.qZA(),e.TgZ(26,"a",43),e._uU(27,"Another action"),e.qZA(),e.TgZ(28,"a",43),e._uU(29,"Something else here"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const i=a.$implicit,n=e.oxw();e.xp6(3),e.MGl("id","contacusercheck",i.index,""),e.xp6(1),e.MGl("for","contacusercheck",i.index,""),e.xp6(2),e.Q6J("ngIf",i.image),e.xp6(1),e.Q6J("ngIf",!i.image),e.xp6(2),e.Q6J("result",i.position)("term",n.service.searchTerm),e.xp6(2),e.Q6J("result",i.email)("term",n.service.searchTerm)}}let J=(()=>{class t{constructor(i){this.service=i,this.users$=i.users$,this.total$=i.total$}ngOnInit(){this.breadCrumbItems=[{label:"Contacts"},{label:"User List",active:!0}]}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(A))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-userlist"]],viewQuery:function(i,n){if(1&i&&e.Gf(D,5),2&i){let r;e.iGM(r=e.CRH())&&(n.headers=r)}},features:[e._Bn([A,Z.JJ])],decls:42,vars:10,consts:[[1,"container-fluid"],["title","User List",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2"],[1,"col-md-6"],[1,"mb-3"],["href","javascript:void(0);",1,"btn","btn-success","waves-effect","waves-light"],[1,"mdi","mdi-plus","me-2"],[1,"form-inline","float-md-end","mb-3"],[1,"search-box","ms-2"],[1,"position-relative"],["type","text","name","searchTerm","placeholder","Search...",1,"form-control","rounded","bg-light","border-0",3,"ngModel","ngModelChange"],[1,"mdi","mdi-magnify","search-icon"],[1,"table-responsive","mb-4"],[1,"table","table-centered","table-nowrap","mb-0","align-middle"],["scope","col",2,"width","50px"],[1,"form-check","font-size-16"],["type","checkbox","id","contacusercheck",1,"form-check-input"],["for","contacusercheck",1,"form-check-label"],["scope","col"],["scope","col",2,"width","200px"],[4,"ngFor","ngForOf"],[1,"row","mt-4"],[1,"col-sm-12"],[1,"float-sm-end"],[3,"collectionSize","page","pageSize","pageChange"],["type","checkbox",1,"form-check-input",3,"id"],[1,"form-check-label",3,"for"],[4,"ngIf"],[3,"result","term"],[1,"list-inline","mb-0"],[1,"list-inline-item"],["href","javascript:void(0);","ngbTooltip","Edit",1,"px-2","text-primary"],[1,"uil","uil-pen","font-size-18"],["href","javascript:void(0);","ngbTooltip","Delete",1,"px-2","text-danger"],[1,"uil","uil-trash-alt","font-size-18"],["ngbDropdown","",1,"list-inline-item","dropdown"],["href","javascript:void(0);","role","button","ngbDropdownToggle","",1,"text-muted","dropdown-toggle","font-size-18","px-2"],[1,"uil","uil-ellipsis-v"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-right"],["href","javascript:void(0);",1,"dropdown-item"],["alt","",1,"avatar-xs","rounded-circle","me-3",3,"src"],["href","javascript:void(0);",1,"text-body"],[1,"avatar-xs","d-inline-block","me-3"],[1,"avatar-title","bg-soft-primary","rounded-circle","text-primary"],[1,"mdi","mdi-account-circle","m-0"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"app-page-title",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"div",8),e.TgZ(9,"a",9),e._UZ(10,"i",10),e._uU(11," Add New"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"div",7),e.TgZ(13,"div",11),e.TgZ(14,"div",12),e.TgZ(15,"div",13),e.TgZ(16,"input",14),e.NdJ("ngModelChange",function(g){return n.service.searchTerm=g}),e.qZA(),e._UZ(17,"i",15),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",16),e.TgZ(19,"table",17),e.TgZ(20,"thead"),e.TgZ(21,"tr"),e.TgZ(22,"th",18),e.TgZ(23,"div",19),e._UZ(24,"input",20),e._UZ(25,"label",21),e.qZA(),e.qZA(),e.TgZ(26,"th",22),e._uU(27,"Name"),e.qZA(),e.TgZ(28,"th",22),e._uU(29,"Position"),e.qZA(),e.TgZ(30,"th",22),e._uU(31,"Email"),e.qZA(),e.TgZ(32,"th",23),e._uU(33,"Action"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"tbody"),e.YNc(35,S,30,8,"tr",24),e.ALo(36,"async"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(37,"div",25),e.TgZ(38,"div",26),e.TgZ(39,"div",27),e.TgZ(40,"ngb-pagination",28),e.NdJ("pageChange",function(g){return n.service.page=g}),e.ALo(41,"async"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(1),e.Q6J("breadcrumbItems",n.breadCrumbItems),e.xp6(15),e.Q6J("ngModel",n.service.searchTerm),e.xp6(19),e.Q6J("ngForOf",e.lcZ(36,6,n.users$)),e.xp6(5),e.Q6J("collectionSize",e.lcZ(41,8,n.total$))("page",n.service.page)("pageSize",n.service.pageSize))},directives:[m.V,l.Fj,l.JJ,l.On,Z.sg,o.N9,Z.O5,o._h,o._L,o.jt,o.iD,o.Vi],pipes:[Z.Ov],styles:[""]}),t})();const I=[{id:1,image:"assets/images/users/avatar-2.jpg",name:"Simon Ryles",text:"Full Stack Developer"},{id:2,image:"assets/images/users/avatar-3.jpg",name:"Marion Walker",text:"Frontend Developer"},{id:3,image:"",name:"Frederick White",text:"UI/UX Designer"},{id:4,image:"assets/images/users/avatar-4.jpg",name:"Shanon Marvi",text:"Backend Developer"},{id:5,name:"Mark Jones",text:"Frontend Developer"},{id:6,image:"assets/images/users/avatar-5.jpg",name:"Janice Morgan",text:"Backend Developer"},{id:7,image:"assets/images/users/avatar-7.jpg",name:"Patrick Petty",text:"UI/UX Designer"},{id:8,image:"assets/images/users/avatar-8.jpg",name:"Marilyn Horton",text:"Frontend Developer"}];function P(t,a){if(1&t&&(e.TgZ(0,"div",27),e._UZ(1,"img",28),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.s9C("src",i.image,e.LSH)}}function z(t,a){1&t&&(e.TgZ(0,"div",29),e.TgZ(1,"div",30),e._UZ(2,"i",31),e.qZA(),e.qZA())}function O(t,a){if(1&t&&(e.TgZ(0,"div",9),e.TgZ(1,"div",10),e.TgZ(2,"div",11),e.TgZ(3,"div",12),e.TgZ(4,"a",13),e._UZ(5,"i",14),e.qZA(),e.TgZ(6,"div",15),e.TgZ(7,"a",16),e._uU(8,"Edit"),e.qZA(),e.TgZ(9,"a",16),e._uU(10,"Action"),e.qZA(),e.TgZ(11,"a",16),e._uU(12,"Remove"),e.qZA(),e.qZA(),e.qZA(),e._UZ(13,"div",17),e.YNc(14,P,2,1,"div",18),e.YNc(15,z,3,0,"ng-template",null,19,e.W1O),e.TgZ(17,"h5",20),e.TgZ(18,"a",21),e._uU(19),e.qZA(),e.qZA(),e.TgZ(20,"p",22),e._uU(21),e.qZA(),e.qZA(),e.TgZ(22,"div",23),e.TgZ(23,"button",24),e._UZ(24,"i",25),e._uU(25," Profile"),e.qZA(),e.TgZ(26,"button",24),e._UZ(27,"i",26),e._uU(28," Message"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const i=a.$implicit,n=e.MAs(16);e.xp6(14),e.Q6J("ngIf",i.image)("ngIfElse",n),e.xp6(5),e.Oqu(i.name),e.xp6(2),e.Oqu(i.text)}}let F=(()=>{class t{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Contacts"},{label:"Users Grid",active:!0}],this._fetchData()}_fetchData(){this.userGridData=I}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-usergrid"]],decls:10,vars:2,consts:[[1,"container-fluid"],["title","User Grid",3,"breadcrumbItems"],[1,"row"],["class","col-xl-3 col-sm-6",4,"ngFor","ngForOf"],[1,"row","mt-3"],[1,"col-xl-12"],[1,"text-center","my-3"],["href","javascript:void(0);",1,"text-primary"],[1,"mdi","mdi-loading","mdi-spin","font-size-20","align-middle","me-2"],[1,"col-xl-3","col-sm-6"],[1,"card","text-center"],[1,"card-body"],["ngbDropdown","",1,"dropdown","float-end"],["href","javascript:void(0)","role","button","ngbDropdownToggle","",1,"text-body","dropdown-toggle","font-size-16"],[1,"uil","uil-ellipsis-h"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-end"],["href","javascript:void(0)",1,"dropdown-item"],[1,"clearfix"],["class","mb-4",4,"ngIf","ngIfElse"],["useravatar",""],[1,"font-size-16","mb-1"],["href","javascript:void(0);",1,"text-dark"],[1,"text-muted","mb-2"],["role","group",1,"btn-group"],["type","button",1,"btn","btn-outline-light","text-truncate"],[1,"uil","uil-user","me-1"],[1,"uil","uil-envelope-alt","me-1"],[1,"mb-4"],["alt","",1,"avatar-lg","rounded-circle","img-thumbnail",3,"src"],[1,"avatar-lg","mx-auto","mb-4"],[1,"avatar-title","bg-soft-primary","rounded-circle","text-primary"],[1,"mdi","mdi-account-circle","display-4","m-0","text-primary"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"app-page-title",1),e.TgZ(2,"div",2),e.YNc(3,O,29,4,"div",3),e.qZA(),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"a",7),e._UZ(8,"i",8),e._uU(9," Load more "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(1),e.Q6J("breadcrumbItems",n.breadCrumbItems),e.xp6(2),e.Q6J("ngForOf",n.userGridData))},directives:[m.V,Z.sg,o.jt,o.iD,o.Vi,Z.O5],styles:[""]}),t})();const $={chart:{height:300,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"14%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},series:[{name:"Revenue",data:[42,85,101,56,37,105,38,58,92,82,72,32]}],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},colors:["#556ee6"]},Q=[{icon:"bx bx-check-circle",title:"Completed Projects",value:"125"},{icon:"bx bx-hourglass",title:"Pending Projects",value:"12"},{icon:"bx bx-package",title:"Total Revenue",value:"$36,524"}];var q=s(50194);function L(t,a){}function Y(t,a){if(1&t&&e.YNc(0,L,0,0,"ng-template",38),2&t){e.oxw();const i=e.MAs(79);e.Q6J("ngTemplateOutlet",i)}}function W(t,a){}function B(t,a){if(1&t&&e.YNc(0,W,0,0,"ng-template",38),2&t){e.oxw();const i=e.MAs(81);e.Q6J("ngTemplateOutlet",i)}}function E(t,a){}function H(t,a){if(1&t&&e.YNc(0,E,0,0,"ng-template",38),2&t){e.oxw();const i=e.MAs(83);e.Q6J("ngTemplateOutlet",i)}}function R(t,a){1&t&&(e.TgZ(0,"div",39),e.TgZ(1,"div",40),e.TgZ(2,"div"),e.TgZ(3,"div"),e.TgZ(4,"h5",41),e._uU(5,"Experience"),e.qZA(),e.TgZ(6,"ul",42),e.TgZ(7,"li",43),e.TgZ(8,"div",44),e.TgZ(9,"p",45),e._uU(10,"2019 - 2020"),e.qZA(),e.TgZ(11,"h5",20),e._uU(12,"UI/UX Designer"),e.qZA(),e.TgZ(13,"p"),e._uU(14,"Abc Company"),e.qZA(),e.TgZ(15,"p",15),e._uU(16," To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"li",43),e.TgZ(18,"div",44),e.TgZ(19,"p",45),e._uU(20,"2017 - 2019"),e.qZA(),e.TgZ(21,"h5",20),e._uU(22,"Graphic Designer"),e.qZA(),e.TgZ(23,"p"),e._uU(24,"xyz Company"),e.qZA(),e.TgZ(25,"p",15),e._uU(26," It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"div"),e.TgZ(28,"h5",41),e._uU(29,"Projects"),e.qZA(),e.TgZ(30,"div",46),e.TgZ(31,"table",47),e.TgZ(32,"thead"),e.TgZ(33,"tr"),e.TgZ(34,"th",48),e._uU(35,"#"),e.qZA(),e.TgZ(36,"th",48),e._uU(37,"Projects"),e.qZA(),e.TgZ(38,"th",48),e._uU(39,"Date"),e.qZA(),e.TgZ(40,"th",48),e._uU(41,"Status"),e.qZA(),e.TgZ(42,"th",49),e._uU(43,"Action"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(44,"tbody"),e.TgZ(45,"tr"),e.TgZ(46,"th",50),e._uU(47,"01"),e.qZA(),e.TgZ(48,"td"),e.TgZ(49,"a",51),e._uU(50,"Brand Logo Design"),e.qZA(),e.qZA(),e.TgZ(51,"td"),e._uU(52,"18 Jun, 2020"),e.qZA(),e.TgZ(53,"td"),e.TgZ(54,"span",52),e._uU(55,"Open"),e.qZA(),e.qZA(),e.TgZ(56,"td"),e.TgZ(57,"div",53),e.TgZ(58,"a",54),e._UZ(59,"i",9),e.qZA(),e.TgZ(60,"div",10),e.TgZ(61,"a",11),e._uU(62,"Action"),e.qZA(),e.TgZ(63,"a",11),e._uU(64,"Another action"),e.qZA(),e.TgZ(65,"a",11),e._uU(66,"Something else here"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(67,"tr"),e.TgZ(68,"th",50),e._uU(69,"02"),e.qZA(),e.TgZ(70,"td"),e.TgZ(71,"a",51),e._uU(72,"Minible Admin"),e.qZA(),e.qZA(),e.TgZ(73,"td"),e._uU(74,"06 Jun, 2020"),e.qZA(),e.TgZ(75,"td"),e.TgZ(76,"span",52),e._uU(77,"Open"),e.qZA(),e.qZA(),e.TgZ(78,"td"),e.TgZ(79,"div",53),e.TgZ(80,"a",54),e._UZ(81,"i",9),e.qZA(),e.TgZ(82,"div",10),e.TgZ(83,"a",11),e._uU(84,"Action"),e.qZA(),e.TgZ(85,"a",11),e._uU(86,"Another action"),e.qZA(),e.TgZ(87,"a",11),e._uU(88,"Something else here"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(89,"tr"),e.TgZ(90,"th",50),e._uU(91,"03"),e.qZA(),e.TgZ(92,"td"),e.TgZ(93,"a",51),e._uU(94,"Chat app Design"),e.qZA(),e.qZA(),e.TgZ(95,"td"),e._uU(96,"28 May, 2020"),e.qZA(),e.TgZ(97,"td"),e.TgZ(98,"span",55),e._uU(99,"Complete"),e.qZA(),e.qZA(),e.TgZ(100,"td"),e.TgZ(101,"div",53),e.TgZ(102,"a",54),e._UZ(103,"i",9),e.qZA(),e.TgZ(104,"div",10),e.TgZ(105,"a",11),e._uU(106,"Action"),e.qZA(),e.TgZ(107,"a",11),e._uU(108,"Another action"),e.qZA(),e.TgZ(109,"a",11),e._uU(110,"Something else here"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(111,"tr"),e.TgZ(112,"th",50),e._uU(113,"04"),e.qZA(),e.TgZ(114,"td"),e.TgZ(115,"a",51),e._uU(116,"Minible Landing"),e.qZA(),e.qZA(),e.TgZ(117,"td"),e._uU(118,"13 May, 2020"),e.qZA(),e.TgZ(119,"td"),e.TgZ(120,"span",55),e._uU(121,"Complete"),e.qZA(),e.qZA(),e.TgZ(122,"td"),e.TgZ(123,"div",53),e.TgZ(124,"a",54),e._UZ(125,"i",9),e.qZA(),e.TgZ(126,"div",10),e.TgZ(127,"a",11),e._uU(128,"Action"),e.qZA(),e.TgZ(129,"a",11),e._uU(130,"Another action"),e.qZA(),e.TgZ(131,"a",11),e._uU(132,"Something else here"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(133,"tr"),e.TgZ(134,"th",50),e._uU(135,"05"),e.qZA(),e.TgZ(136,"td"),e.TgZ(137,"a",51),e._uU(138,"Authentication Pages"),e.qZA(),e.qZA(),e.TgZ(139,"td"),e._uU(140,"06 May, 2020"),e.qZA(),e.TgZ(141,"td"),e.TgZ(142,"span",55),e._uU(143,"Complete"),e.qZA(),e.qZA(),e.TgZ(144,"td"),e.TgZ(145,"div",53),e.TgZ(146,"a",54),e._UZ(147,"i",9),e.qZA(),e.TgZ(148,"div",10),e.TgZ(149,"a",11),e._uU(150,"Action"),e.qZA(),e.TgZ(151,"a",11),e._uU(152,"Another action"),e.qZA(),e.TgZ(153,"a",11),e._uU(154,"Something else here"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA())}function X(t,a){1&t&&(e.TgZ(0,"div",39),e.TgZ(1,"div",40),e.TgZ(2,"div"),e.TgZ(3,"h5",56),e._uU(4,"Active"),e.qZA(),e.TgZ(5,"div",46),e.TgZ(6,"table",57),e.TgZ(7,"tbody"),e.TgZ(8,"tr"),e.TgZ(9,"td",58),e.TgZ(10,"div",59),e._UZ(11,"input",60),e._UZ(12,"label",61),e.qZA(),e.qZA(),e.TgZ(13,"td"),e.TgZ(14,"a",62),e._uU(15,"Ecommerce Product Detail"),e.qZA(),e.qZA(),e.TgZ(16,"td"),e._uU(17,"27 May, 2020"),e.qZA(),e.TgZ(18,"td",63),e.TgZ(19,"span",52),e._uU(20,"Active"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"tr"),e.TgZ(22,"td"),e.TgZ(23,"div",59),e._UZ(24,"input",64),e._UZ(25,"label",65),e.qZA(),e.qZA(),e.TgZ(26,"td"),e.TgZ(27,"a",62),e._uU(28,"Ecommerce Product"),e.qZA(),e.qZA(),e.TgZ(29,"td"),e._uU(30,"26 May, 2020"),e.qZA(),e.TgZ(31,"td"),e.TgZ(32,"span",52),e._uU(33,"Active"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"h5",66),e._uU(35,"Upcoming"),e.qZA(),e.TgZ(36,"div",46),e.TgZ(37,"table",57),e.TgZ(38,"tbody"),e.TgZ(39,"tr"),e.TgZ(40,"td",58),e.TgZ(41,"div",59),e._UZ(42,"input",67),e._UZ(43,"label",68),e.qZA(),e.qZA(),e.TgZ(44,"td"),e.TgZ(45,"a",62),e._uU(46,"Chat app Page"),e.qZA(),e.qZA(),e.TgZ(47,"td"),e._uU(48,"-"),e.qZA(),e.TgZ(49,"td",63),e.TgZ(50,"span",69),e._uU(51,"Waiting"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(52,"tr"),e.TgZ(53,"td"),e.TgZ(54,"div",59),e._UZ(55,"input",70),e._UZ(56,"label",71),e.qZA(),e.qZA(),e.TgZ(57,"td"),e.TgZ(58,"a",62),e._uU(59,"Email Pages"),e.qZA(),e.qZA(),e.TgZ(60,"td"),e._uU(61,"04 June, 2020"),e.qZA(),e.TgZ(62,"td"),e.TgZ(63,"span",52),e._uU(64,"Approved"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(65,"tr"),e.TgZ(66,"td"),e.TgZ(67,"div",59),e._UZ(68,"input",72),e._UZ(69,"label",73),e.qZA(),e.qZA(),e.TgZ(70,"td"),e.TgZ(71,"a",62),e._uU(72,"Contacts Profile Page"),e.qZA(),e.qZA(),e.TgZ(73,"td"),e._uU(74,"-"),e.qZA(),e.TgZ(75,"td"),e.TgZ(76,"span",69),e._uU(77,"Waiting"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(78,"h5",66),e._uU(79,"Complete"),e.qZA(),e.TgZ(80,"div",46),e.TgZ(81,"table",57),e.TgZ(82,"tbody"),e.TgZ(83,"tr"),e.TgZ(84,"td",58),e.TgZ(85,"div",59),e._UZ(86,"input",74),e._UZ(87,"label",75),e.qZA(),e.qZA(),e.TgZ(88,"td"),e.TgZ(89,"a",62),e._uU(90,"UI Elements"),e.qZA(),e.qZA(),e.TgZ(91,"td"),e._uU(92,"27 May, 2020"),e.qZA(),e.TgZ(93,"td",63),e.TgZ(94,"span",55),e._uU(95,"Complete"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(96,"tr"),e.TgZ(97,"td"),e.TgZ(98,"div",59),e._UZ(99,"input",76),e._UZ(100,"label",77),e.qZA(),e.qZA(),e.TgZ(101,"td"),e.TgZ(102,"a",62),e._uU(103,"Authentication Pages"),e.qZA(),e.qZA(),e.TgZ(104,"td"),e._uU(105,"27 May, 2020"),e.qZA(),e.TgZ(106,"td"),e.TgZ(107,"span",55),e._uU(108,"Complete"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(109,"tr"),e.TgZ(110,"td"),e.TgZ(111,"div",59),e._UZ(112,"input",78),e._UZ(113,"label",79),e.qZA(),e.qZA(),e.TgZ(114,"td"),e.TgZ(115,"a",62),e._uU(116,"Admin Layout"),e.qZA(),e.qZA(),e.TgZ(117,"td"),e._uU(118,"26 May, 2020"),e.qZA(),e.TgZ(119,"td"),e.TgZ(120,"span",55),e._uU(121,"Complete"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA())}function G(t,a){1&t&&(e.TgZ(0,"div",39),e.TgZ(1,"div",40),e.TgZ(2,"div"),e.TgZ(3,"ngx-simplebar",80),e.TgZ(4,"div",81),e._UZ(5,"img",82),e.TgZ(6,"div",83),e.TgZ(7,"h5",84),e._uU(8," Marion Walker "),e.TgZ(9,"small",85),e._uU(10,"1 hr ago"),e.qZA(),e.qZA(),e.TgZ(11,"p",15),e._uU(12," If several languages coalesce, the grammar of the resulting . "),e.qZA(),e.TgZ(13,"a",86),e._UZ(14,"i",87),e._uU(15," Reply"),e.qZA(),e.TgZ(16,"div",88),e._UZ(17,"img",89),e.TgZ(18,"div",83),e.TgZ(19,"h5",84),e._uU(20," Shanon Marvin "),e.TgZ(21,"small",85),e._uU(22,"1 hr ago"),e.qZA(),e.qZA(),e.TgZ(23,"p",15),e._uU(24," It will be as simple as in fact, it will be Occidental. To it will seem like simplified . "),e.qZA(),e.TgZ(25,"a",86),e._UZ(26,"i",87),e._uU(27," Reply "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(28,"div",81),e._UZ(29,"img",90),e.TgZ(30,"div",83),e.TgZ(31,"h5",84),e._uU(32," Janice Morgan "),e.TgZ(33,"small",85),e._uU(34,"2 hrs ago"),e.qZA(),e.qZA(),e.TgZ(35,"p",15),e._uU(36," To achieve this, it would be necessary to have uniform pronunciation. "),e.qZA(),e.TgZ(37,"a",86),e._UZ(38,"i",87),e._uU(39," Reply"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(40,"div",81),e._UZ(41,"img",91),e.TgZ(42,"div",83),e.TgZ(43,"h5",84),e._uU(44," Patrick Petty "),e.TgZ(45,"small",85),e._uU(46,"3 hrs ago"),e.qZA(),e.qZA(),e.TgZ(47,"p",15),e._uU(48," Sed ut perspiciatis unde omnis iste natus error sit "),e.qZA(),e.TgZ(49,"a",86),e._UZ(50,"i",87),e._uU(51," Reply"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(52,"div",92),e.TgZ(53,"form",93),e.TgZ(54,"div",94),e.TgZ(55,"div",95),e.TgZ(56,"button",96),e._UZ(57,"i",97),e.qZA(),e.TgZ(58,"button",96),e._UZ(59,"i",98),e.qZA(),e.TgZ(60,"button",96),e._UZ(61,"i",99),e.qZA(),e.qZA(),e.qZA(),e._UZ(62,"textarea",100),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA())}const V=[{path:"list",component:J},{path:"grid",component:F},{path:"profile",component:(()=>{class t{constructor(){}ngOnInit(){this.breadCrumbItems=[{label:"Contacts"},{label:"Profile",active:!0}],this._fetchData()}_fetchData(){this.revenueBarChart=$,this.statData=Q}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile"]],decls:84,vars:6,consts:[[1,"container-fluid"],["title","Profile",3,"breadcrumbItems"],[1,"row","mb-4"],[1,"col-xl-4"],[1,"card","h-100"],[1,"card-body"],[1,"text-center"],["ngbDropdown","",1,"dropdown","float-end"],["href","javascript:void(0)","role","button","ngbDropdownToggle","",1,"text-body","dropdown-toggle","font-size-18"],[1,"uil","uil-ellipsis-v"],["ngbDropdownMenu","",1,"dropdown-menu","dropdown-menu-end"],["href","javascript:void(0)",1,"dropdown-item"],[1,"clearfix"],["src","assets/images/users/avatar-4.jpg","alt","",1,"avatar-lg","rounded-circle","img-thumbnail"],[1,"mt-3","mb-1"],[1,"text-muted"],[1,"mt-4"],["type","button",1,"btn","btn-light","btn-sm"],[1,"uil","uil-envelope-alt","me-2"],[1,"my-4"],[1,"font-size-16"],[1,"table-responsive","mt-4"],[1,"mb-1"],[1,"col-xl-8"],[1,"card","mb-0"],["ngbNav","",1,"nav","nav-tabs","nav-justified","nav-tabs-custom",3,"activeId"],["justifiednav","ngbNav"],[1,"nav-item",3,"ngbNavItem"],["ngbNavLink","",1,"nav-link"],[1,"uil","uil-user-circle","font-size-20"],[1,"d-none","d-sm-block"],["ngbNavContent",""],[1,"uil","uil-clipboard-notes","font-size-20"],[1,"uil","uil-envelope-alt","font-size-20"],[3,"ngbNavOutlet"],["TabContentAbout",""],["TabContentTasks",""],["TabContentMessages",""],[3,"ngTemplateOutlet"],[1,"tab-content","p-4"],[1,"tab-pane","active"],[1,"font-size-16","mb-4"],[1,"activity-feed","mb-0","ps-2"],[1,"feed-item"],[1,"feed-item-list"],[1,"text-muted","mb-1"],[1,"table-responsive"],[1,"table","table-nowrap","table-hover","mb-0"],["scope","col"],["scope","col",2,"width","120px"],["scope","row"],["href","javascript:void(0)",1,"text-dark"],[1,"badge","bg-soft-primary","font-size-12"],["ngbDropdown","",1,"dropdown"],["href","javascript:void(0);","role","button","ngbDropdownToggle","",1,"text-muted","dropdown-toggle","font-size-18","px-2"],[1,"badge","bg-soft-success","font-size-12"],[1,"font-size-16","mb-3"],[1,"table","table-nowrap","table-centered"],[2,"width","60px"],[1,"form-check","font-size-16","text-center"],["type","checkbox","id","tasks-activeCheck2",1,"form-check-input"],["for","tasks-activeCheck2",1,"form-check-label"],["href","javascript:void(0)",1,"fw-bold","text-dark"],[2,"width","160px"],["type","checkbox","id","tasks-activeCheck1",1,"form-check-input"],["for","tasks-activeCheck1",1,"form-check-label"],[1,"font-size-16","my-3"],["type","checkbox","id","tasks-upcomingCheck3",1,"form-check-input"],["for","tasks-upcomingCheck3",1,"form-check-label"],[1,"badge","bg-soft-secondary","font-size-12"],["type","checkbox","id","tasks-upcomingCheck2",1,"form-check-input"],["for","tasks-upcomingCheck2",1,"form-check-label"],["type","checkbox","id","tasks-upcomingCheck1",1,"form-check-input"],["for","tasks-upcomingCheck1",1,"form-check-label"],["type","checkbox","id","tasks-completeCheck3",1,"form-check-input"],["for","tasks-completeCheck3",1,"form-check-label"],["type","checkbox","id","tasks-completeCheck2",1,"form-check-input"],["for","tasks-completeCheck2",1,"form-check-label"],["type","checkbox","id","tasks-completeCheck1",1,"form-check-input"],["for","tasks-completeCheck1",1,"form-check-label"],[2,"max-height","430px"],[1,"d-flex","align-items-start","border-bottom","py-4"],["src","assets/images/users/avatar-3.jpg","alt","",1,"me-2","rounded-circle","avatar-xs"],[1,"flex-1"],[1,"font-size-15","mt-0","mb-1"],[1,"text-muted","float-end"],["href","javascript: void(0);",1,"text-muted","font-13","d-inline-block"],[1,"mdi","mdi-reply"],[1,"d-flex","align-items-start","mt-4"],["src","assets/images/users/avatar-4.jpg","alt","",1,"me-2","rounded-circle","avatar-xs"],["src","assets/images/users/avatar-5.jpg","alt","",1,"me-2","rounded-circle","avatar-xs"],["src","assets/images/users/avatar-7.jpg","alt","",1,"me-2","rounded-circle","avatar-xs"],[1,"border","rounded","mt-4"],["action","#"],[1,"px-2","py-1","bg-light"],["role","group",1,"btn-group"],["type","button",1,"btn","btn-sm","btn-link","text-dark","text-decoration-none"],[1,"uil","uil-link"],[1,"uil","uil-smile"],[1,"uil","uil-at"],["rows","3","placeholder","Your Message...",1,"form-control","border-0","resize-none"]],template:function(i,n){if(1&i&&(e.TgZ(0,"div",0),e._UZ(1,"app-page-title",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"a",8),e._UZ(9,"i",9),e.qZA(),e.TgZ(10,"div",10),e.TgZ(11,"a",11),e._uU(12,"Edit"),e.qZA(),e.TgZ(13,"a",11),e._uU(14,"Action"),e.qZA(),e.TgZ(15,"a",11),e._uU(16,"Remove"),e.qZA(),e.qZA(),e.qZA(),e._UZ(17,"div",12),e.TgZ(18,"div"),e._UZ(19,"img",13),e.qZA(),e.TgZ(20,"h5",14),e._uU(21,"Marcus"),e.qZA(),e.TgZ(22,"p",15),e._uU(23,"UI/UX Designer"),e.qZA(),e.TgZ(24,"div",16),e.TgZ(25,"button",17),e._UZ(26,"i",18),e._uU(27," Message "),e.qZA(),e.qZA(),e.qZA(),e._UZ(28,"hr",19),e.TgZ(29,"div",15),e.TgZ(30,"h5",20),e._uU(31,"About"),e.qZA(),e.TgZ(32,"p"),e._uU(33," Hi I'm Marcus,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge. "),e.qZA(),e.TgZ(34,"div",21),e.TgZ(35,"div"),e.TgZ(36,"p",22),e._uU(37,"Name :"),e.qZA(),e.TgZ(38,"h5",20),e._uU(39,"Marcus"),e.qZA(),e.qZA(),e.TgZ(40,"div",16),e.TgZ(41,"p",22),e._uU(42,"Mobile :"),e.qZA(),e.TgZ(43,"h5",20),e._uU(44,"012-234-5678"),e.qZA(),e.qZA(),e.TgZ(45,"div",16),e.TgZ(46,"p",22),e._uU(47,"E-mail :"),e.qZA(),e.TgZ(48,"h5",20),e._uU(49,"marcus@minible.com"),e.qZA(),e.qZA(),e.TgZ(50,"div",16),e.TgZ(51,"p",22),e._uU(52,"Location :"),e.qZA(),e.TgZ(53,"h5",20),e._uU(54,"California, United States"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(55,"div",23),e.TgZ(56,"div",24),e.TgZ(57,"ul",25,26),e.TgZ(59,"li",27),e.TgZ(60,"a",28),e._UZ(61,"i",29),e.TgZ(62,"span",30),e._uU(63,"About"),e.qZA(),e.qZA(),e.YNc(64,Y,1,1,"ng-template",31),e.qZA(),e.TgZ(65,"li",27),e.TgZ(66,"a",28),e._UZ(67,"i",32),e.TgZ(68,"span",30),e._uU(69,"Tasks"),e.qZA(),e.qZA(),e.YNc(70,B,1,1,"ng-template",31),e.qZA(),e.TgZ(71,"li",27),e.TgZ(72,"a",28),e._UZ(73,"i",33),e.TgZ(74,"span",30),e._uU(75,"Messages"),e.qZA(),e.qZA(),e.YNc(76,H,1,1,"ng-template",31),e.qZA(),e.qZA(),e._UZ(77,"div",34),e.qZA(),e.YNc(78,R,155,0,"ng-template",null,35,e.W1O),e.YNc(80,X,122,0,"ng-template",null,36,e.W1O),e.YNc(82,G,63,0,"ng-template",null,37,e.W1O),e.qZA(),e.qZA(),e.qZA()),2&i){const r=e.MAs(58);e.xp6(1),e.Q6J("breadcrumbItems",n.breadCrumbItems),e.xp6(56),e.Q6J("activeId",1),e.xp6(2),e.Q6J("ngbNavItem",1),e.xp6(6),e.Q6J("ngbNavItem",2),e.xp6(6),e.Q6J("ngbNavItem",3),e.xp6(6),e.Q6J("ngbNavOutlet",r)}},directives:[m.V,o.jt,o.iD,o.Vi,o.Pz,o.nv,o.Vx,o.uN,o.tO,Z.tP,q.M,l._Y,l.JL,l.F],styles:[""]}),t})()}];let K=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(V)],p.Bz]}),t})();var ee=s(98816);let te=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[Z.ez,l.u5,K,v.v,h.X,o.HK,o.XC,o.Oz,o.Gs,o.jF,ee.h,q.t,o.ZS,o.IJ]]}),t})()}}]);