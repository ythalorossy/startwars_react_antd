(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[1],{112:function(e,t,n){"use strict";var a=n(39),c=n(0),r=n(48),i=n(269),s=n(270),l=n(26),j=n(6);t.a=function(e){var t=e.id,n=Object(c.useState)({current:1,pageSize:10}),o=Object(a.a)(n,1)[0],u=Object(r.a)("/people/".concat(t),o),b=u.data;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(i.a,{loading:u.isFetching,active:!0,children:[Object(j.jsx)(l.A,{href:"/people/".concat(t),children:Object(j.jsx)(s.a,{status:"default",size:"small",text:"".concat(b.name)})}),Object(j.jsx)("br",{})]})})}},145:function(e,t,n){"use strict";n.r(t);var a=n(268),c=n(266),r=n(57),i=n(36),s=n(267),l=n(271),j=n(272),o=n(273),u=n(274),b=n(275),d=n(276),h=n(277),O=n(26),p=(n(264),n(6));t.default=function(){var e=[{icon:Object(p.jsx)(l.a,{}),title:"Films",navigateTo:"/films",details:"Details about the Episodes"},{icon:Object(p.jsx)(j.a,{}),title:"Characters",navigateTo:"/people",details:"Details about the Chracters"},{icon:Object(p.jsx)(o.a,{}),title:"Species",navigateTo:"/species",details:"Details about the Species"},{icon:Object(p.jsx)(u.a,{}),title:"Planets",navigateTo:"/planets",details:"Details about the Planets"},{icon:Object(p.jsx)(b.a,{}),title:"Starships",navigateTo:"/starships",details:"Details about the Starships"},{icon:Object(p.jsx)(d.a,{}),title:"Vehicles",navigateTo:"/vehicles",details:"Details about the Vehicles"}];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(a.a,{title:"Star Wars Information",subTitle:"Details about Films, Characters, Species, Planets, Starships and Vehicles"}),Object(p.jsx)(c.a,{orientation:"left"}),Object(p.jsx)(r.a,{gutter:16,children:e.map((function(e){return Object(p.jsx)(i.a,{span:8,children:Object(p.jsx)(s.a,{title:Object(p.jsxs)("div",{style:{alignItems:"flex-start",fontSize:"32px"},children:[e.icon,e.title]}),actions:[Object(p.jsx)(h.a,{onClick:function(){return Object(O.navigate)("".concat(e.navigateTo))}},"arrow")],children:e.details})})}))})]})}},156:function(e,t,n){},166:function(e,t,n){},186:function(e,t,n){},263:function(e,t,n){},264:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(32),r=n.n(c),i=(n(156),n(26)),s=n(279),l=n(43),j=(n(166),n(19)),o=n(6),u=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,309))})),b=function(e){return Object(o.jsx)(a.Suspense,{fallback:null,children:Object(o.jsx)(u,Object(j.a)({},e))})},d=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,310))})),h=function(e){return Object(o.jsx)(a.Suspense,{fallback:null,children:Object(o.jsx)(d,Object(j.a)({},e))})},O=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,311))})),p=function(e){return Object(o.jsx)(a.Suspense,{fallback:null,children:Object(o.jsx)(O,Object(j.a)({},e))})},x=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,312))})),f=function(e){return Object(o.jsx)(a.Suspense,{fallback:null,children:Object(o.jsx)(x,Object(j.a)({},e))})},m=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,313))})),g=function(e){return Object(o.jsx)(a.Suspense,{fallback:null,children:Object(o.jsx)(m,Object(j.a)({},e))})},y=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,314))})),v=function(e){return Object(o.jsx)(a.Suspense,{fallback:null,children:Object(o.jsx)(y,Object(j.a)({},e))})},S=Object(a.lazy)((function(){return n.e(12).then(n.bind(null,315))})),T=function(e){return Object(o.jsx)(a.Suspense,{fallback:null,children:Object(o.jsx)(S,Object(j.a)({},e))})},C=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,316))})),I=function(e){return Object(o.jsx)(a.Suspense,{fallback:null,children:Object(o.jsx)(C,Object(j.a)({},e))})},k=n(39),A=n(281),_=n(268),F=n(280),w=n(48),z=(n(186),n(59)),D=function(){var e=Object(a.useState)({current:1,pageSize:10}),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(w.a)("/starships",n);var s=[{title:"Name",dataIndex:"name",key:"name",sorter:{compare:function(e,t){return e.name-t.name}},defaultSortOrder:"ascend",fixed:"left"},{title:"Model",dataIndex:"model",key:"model",sorter:function(e,t){return e.model.localeCompare(t.model)}},{title:"Starship Class",dataIndex:"starship_class",key:"starship_class"},{title:"Cargo Capacity",dataIndex:"cargo_capacity",key:"cargo_capacity",render:function(e){return"unknown"===e?e:Object(o.jsx)(z.a,{value:e,displayType:"text",thousandSeparator:!0,suffix:"Kg"})}},{title:"Crew",dataIndex:"crew",key:"crew"},{title:"Action",key:"operation",fixed:"right",render:function(e,t){var n=t.url.match(/(\d+)/gm)[0],a="/starships/".concat(n);return Object(o.jsx)(i.A,{href:a,children:"details"})}}];return r.error?Object(o.jsx)(A.a,{message:"Error Text",type:"error"}):Object(o.jsxs)("div",{children:[Object(o.jsx)(_.a,{className:"site-page-header",title:"Starships",subTitle:"List of Star Wars Starship"}),Object(o.jsx)(F.a,{dataSource:r.data.results,columns:s,pagination:Object(j.a)(Object(j.a)({},n),{},{total:r.data.count,pageSizeOptions:[10]}),onChange:function(e,t,n,a){"paginate"===a.action&&c(Object(j.a)({},e))},rowKey:function(e){return e.url},loading:{spinning:r.isFetching,size:"large"}})]})},E=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,317))})),P=function(e){return Object(o.jsx)(a.Suspense,{fallback:null,children:Object(o.jsx)(E,Object(j.a)({},e))})},H=function(){var e=Object(a.useState)({current:1,pageSize:10}),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(w.a)("/vehicles",n);var s=[{title:"Name",dataIndex:"name",key:"name",sorter:{compare:function(e,t){return e.name-t.name}},defaultSortOrder:"ascend"},{title:"Model",dataIndex:"model",key:"model",sorter:function(e,t){return e.model.localeCompare(t.model)}},{title:"Class",dataIndex:"vehicle_class",key:"vehicle_class"},{title:"Manufacturer",dataIndex:"manufacturer",key:"manufacturer"},{title:"Action",key:"operation",fixed:"right",render:function(e,t){var n=t.url.match(/(\d+)/gm)[0].replaceAll("/",""),a="/vehicles/".concat(n);return Object(o.jsx)(i.A,{href:a,children:"details"})}}];if(r.error)return Object(o.jsx)(A.a,{message:"Error Text",type:"error"});var l=r.data.results;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(_.a,{className:"site-page-header",title:"Vehicles",subTitle:"List of Star Wars Vehicles"}),Object(o.jsx)(F.a,{dataSource:l,columns:s,pagination:Object(j.a)(Object(j.a)({},n),{},{total:r.data.count,pageSizeOptions:[10]}),onChange:function(e,t,n,a){"paginate"===a.action&&c(Object(j.a)({},e))},rowKey:function(e){return e.url},loading:{spinning:r.isFetching,size:"large"}})]})},N=n(143),L=n(282),R=(n(263),n(112)),V=function(e){var t=e.id,n=Object(a.useState)({current:1,pageSize:10}),c=Object(k.a)(n,1)[0],r=Object(w.a)("/vehicles/".concat(t),c);if(r.isFetching)return Object(o.jsx)(N.a,{});if(r.error)return Object(o.jsx)(A.a,{message:r.error,type:"error"});var i=r.data;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(_.a,{className:"site-page-header",title:"".concat(i.name),subTitle:"Details about the Vehicle",onBack:function(){return window.history.back()}}),Object(o.jsxs)(L.b,{layout:"vertical",column:4,bordered:!0,children:[Object(o.jsx)(L.b.Item,{label:"Model",children:i.model}),Object(o.jsx)(L.b.Item,{label:"Class",children:i.vehicle_class}),Object(o.jsx)(L.b.Item,{label:"Manufacturer",children:i.manufacturer}),Object(o.jsx)(L.b.Item,{label:"Length",children:"unknown"===i.length?i.length:Object(o.jsx)(z.a,{value:i.length,displayType:"text",thousandSeparator:!0,suffix:"m"})}),Object(o.jsx)(L.b.Item,{label:"Cost in Credits",children:"unknown"===i.cost_in_credits?i.cost_in_credits:Object(o.jsx)(z.a,{value:i.cost_in_credits,displayType:"text",thousandSeparator:!0})}),Object(o.jsx)(L.b.Item,{label:"Crew",children:i.crew}),Object(o.jsx)(L.b.Item,{label:"Passengers",children:i.passengers}),Object(o.jsx)(L.b.Item,{label:"Max. Atmospering speed",children:i.max_atmosphering_speed}),Object(o.jsx)(L.b.Item,{label:"Cargo capacity",children:"unknown"===i.cargo_capacity?i.cargo_capacity:Object(o.jsx)(z.a,{value:i.cargo_capacity,displayType:"text",thousandSeparator:!0,suffix:"Kg"})}),Object(o.jsx)(L.b.Item,{label:"Consumables",children:i.consumables}),Object(o.jsx)(L.b.Item,{label:"Pilots",span:1,children:i.pilots.map((function(e){var t=e.match(/(\d+)/gm)[0];return Object(o.jsx)(R.a,{id:t},"people_".concat(t))}))})]})]})},M=Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,145))})),K=function(e){return Object(o.jsx)(a.Suspense,{fallback:null,children:Object(o.jsx)(M,Object(j.a)({},e))})},U={"/films":function(){return Object(o.jsx)(b,{})},"/films/:id":function(e){var t=e.id;return Object(o.jsx)(h,{id:t})},"/people":function(){return Object(o.jsx)(p,{})},"/people/:id":function(e){var t=e.id;return Object(o.jsx)(f,{id:t})},"/species":function(){return Object(o.jsx)(g,{})},"/species/:id":function(e){var t=e.id;return Object(o.jsx)(v,{id:t})},"/planets":function(){return Object(o.jsx)(T,{})},"/planets/:id":function(e){var t=e.id;return Object(o.jsx)(I,{id:t})},"/starships":function(){return Object(o.jsx)(D,{})},"/starships/:id":function(e){var t=e.id;return Object(o.jsx)(P,{id:t})},"/vehicles":function(){return Object(o.jsx)(H,{})},"/vehicles/:id":function(e){var t=e.id;return Object(o.jsx)(V,{id:t})},"/":function(){return Object(o.jsx)(K,{})}},W=n(145);var B=function(){var e=Object(i.useRoutes)(U),t=s.a.Header,n=s.a.Content,c=s.a.Sider;return Object(o.jsxs)(s.a,{children:[Object(o.jsx)(t,{className:"header",children:Object(o.jsx)("div",{className:"App-logo",children:"Star Wars Information"})}),Object(o.jsxs)(s.a,{children:[Object(o.jsx)(c,{width:200,className:"site-layout-background",children:Object(o.jsxs)(l.a,{mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%",borderRight:0},children:[Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(i.A,{href:"/",children:"Home"})},"1"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(i.A,{href:"/films",children:"Films"})},"2"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(i.A,{href:"/people",children:"Characters"})},"3"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(i.A,{href:"/species",children:"Species"})},"4"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(i.A,{href:"/planets",children:"Planets"})},"5"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(i.A,{href:"/starships",children:"Starship"})},"6"),Object(o.jsx)(l.a.Item,{children:Object(o.jsx)(i.A,{href:"/vehicles",children:"Vehicles"})},"7")]})}),Object(o.jsx)(s.a,{children:Object(o.jsx)(n,{className:"site-layout-background",style:{padding:12,margin:0,minHeight:280},children:Object(o.jsx)(a.Suspense,{fallback:"<p>loading ....</p>",children:e||Object(o.jsx)(W.default,{})})})})]})]})},J=function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,318)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};r.a.render(Object(o.jsx)(B,{}),document.getElementById("root")),J()},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(39),c=n(19),r=n(0),i=n(133),s=n.n(i),l="https://swapi.dev/api",j={isFetching:!0,error:"",data:[]};function o(e,t){switch(t.type){case"DATA_FETCH_START":return Object(c.a)(Object(c.a)({},e),{},{isFetching:!0});case"DATA_FETCH_FAILURE":return Object(c.a)(Object(c.a)({},e),{},{isFetching:!1,error:t.payload.response.data.detail});case"DATA_FETCH_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{isFetching:!1,data:t.payload});default:return e}}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{current:1,pageSize:10},n=Object(r.useReducer)(o,Object(c.a)(Object(c.a)({},j),{},{pagination:t})),i=Object(a.a)(n,2),u=i[0],b=i[1];return Object(r.useEffect)((function(){b({type:"DATA_FETCH_START"}),s.a.get("".concat(l).concat(e,"/?page=").concat(t.current)).then((function(e){b({type:"DATA_FETCH_SUCCESS",payload:e.data})})).catch((function(e){b({type:"DATA_FETCH_FAILURE",payload:e})}))}),[e,t]),u}}},[[265,2,3]]]);
//# sourceMappingURL=main.2b078072.chunk.js.map