(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[12],{298:function(e,t,a){"use strict";a.r(t);var r=a(18),n=a(35),i=a(0),s=a(263),c=a(264),o=a(262),u=a(26),l=a(43),d=a(57),p=a(6);t.default=function(){var e=Object(i.useState)({current:1,pageSize:10}),t=Object(n.a)(e,2),a=t[0],f=t[1],m=Object(l.a)("/planets",a);var j=[{title:"Name",dataIndex:"name",key:"name",sorter:{compare:function(e,t){return e.name-t.name}},defaultSortOrder:"ascend"},{title:"Diameter",dataIndex:"diameter",key:"diameter",sorter:function(e,t){return e.diameter.localeCompare(t.diameter)},render:function(e){return"unknown"===e?e:Object(p.jsx)(d.a,{value:e,displayType:"text",suffix:"Km"})}},{title:"Population",dataIndex:"population",key:"population",sorter:function(e,t){return e.diameter.localeCompare(t.diameter)},render:function(e){return"unknown"===e?e:Object(p.jsx)(d.a,{value:e,defaultChecked:!0,displayType:"text",thousandSeparator:!0})}},{title:"Terrain",dataIndex:"terrain",key:"terrain"},{title:"Climate",dataIndex:"climate",key:"climate"},{title:"Surface Water",dataIndex:"surface_water",key:"surface_water",render:function(e){return"unknown"===e?e:Object(p.jsx)(d.a,{value:e,defaultChecked:!0,displayType:"text",thousandSeparator:!0,suffix:"%"})}},{title:"Action",key:"operation",fixed:"right",render:function(e,t){var a=t.url.match(/(\d+)/gm)[0].replaceAll("/",""),r="/planets/".concat(a);return Object(p.jsx)(u.A,{href:r,children:"details"})}}];return m.isError?Object(p.jsx)(s.a,{message:"Error Text",type:"error"}):Object(p.jsxs)("div",{children:[Object(p.jsx)(c.a,{className:"site-page-header",title:"Planets",subTitle:"List of Star Wars planets"}),Object(p.jsx)(o.a,{dataSource:m.data.results,columns:j,pagination:Object(r.a)(Object(r.a)({},a),{},{total:m.data.count,pageSizeOptions:[10]}),onChange:function(e,t,a,n){"paginate"===n.action&&f(Object(r.a)({},e))},rowKey:function(e){return e.url},loading:{spinning:m.isFetching,size:"large"}})]})}}}]);
//# sourceMappingURL=12.89e4e78f.chunk.js.map