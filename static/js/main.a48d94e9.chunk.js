(this["webpackJsonpnasa-app"]=this["webpackJsonpnasa-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(48)},28:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),o=a.n(r),s=(a(28),a(7)),l=a.n(s),i=a(10),u=a(3),m=a(8),b=a(1);var p=Object(b.f)((function(){var e,t=Object(n.useState)("https://apod.nasa.gov/apod/image/1209/airglow120824_ladanyi_600h.jpg"),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)("https://apod.nasa.gov/apod/image/1209/airglow120824_ladanyi_600h.jpg"),b=Object(u.a)(s,2),p=b[0],h=b[1],f=Object(n.useState)("2012-9-6"),d=Object(u.a)(f,2),g=d[0],v=d[1],E=Object(n.useState)("NASA Image Generator"),j=Object(u.a)(E,2),O=j[0],N=j[1],k=Object(n.useState)("Click new image"),w=Object(u.a)(k,2),y=w[0],S=w[1],x=Object(n.useState)(!1),I=Object(u.a)(x,2),_=I[0],C=I[1],q=Object(n.useState)(!1),A=Object(u.a)(q,2),B=A[0],z=A[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?date=".concat(g,"&hd=True&api_key=VFhPnUcWVCwhPloguYc3zsrYpH9dVJhgPdcEuz1A")).then((function(e){return e.json()})).then((function(e){"video"!==e.media_type&&(o(e.url),N(e.title),S(e.explanation),h(e.hdurl),console.log(e.url))}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g]),e=!1===B?{backgroundImage:"url(".concat(r,")")}:{backgroundImage:"url(".concat(p,")")},c.a.createElement("div",{className:"random-img",style:e},c.a.createElement("div",{className:"custom-control custom-switch hd-switch"},c.a.createElement(m.b,{to:"/search?query=supernova"},c.a.createElement("button",{type:"button",className:"home-btn btn btn-dark btn-sm "},"Search Image")),c.a.createElement("input",{onClick:function(){z(!B)},type:"checkbox",class:"custom-control-input",id:"customSwitch1"}),c.a.createElement("label",{class:"custom-control-label",for:"customSwitch1"},"Toggle HD")),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"buttons home-buttons"},c.a.createElement("button",{onClick:function(){C(!_)},className:"btn btn-info btn-sm home-btn"},"About Image"),c.a.createElement("button",{onClick:function(){return function(){function e(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var t=e(2012,2019),a=e(1,12),n=e(5,28);v(t+"-"+a+"-"+n)}()},className:"btn btn-light btn-sm home-btn"},"New Image")),!0===_?c.a.createElement("div",{className:"info"},c.a.createElement("h1",{className:"image-title"},O),c.a.createElement("p",{className:"image-paragraph"},y)):null))})),h=a(17),f=a.n(h);var d=Object(b.f)((function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(null),b=Object(u.a)(s,2),p=b[0],h=b[1],d=Object(n.useState)(""),g=Object(u.a)(d,2),v=g[0],E=g[1],j=function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://images-api.nasa.gov/search?page=1&media_type=image&q=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:a=e.sent,console.log(a.collection.items),h(a.collection.items);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var t=f.a.parse(e.location.search).query;j(t)}),[]),Object(n.useEffect)((function(){if(""!==r){var t=f.a.parse(e.location.search).query;j(t)}}),[r]),c.a.createElement("div",null,c.a.createElement("div",{className:"navbar"},c.a.createElement(m.b,{to:"/"},c.a.createElement("button",{type:"button",className:"random-btn btn btn-dark btn-sm "},"Random Image")),c.a.createElement("img",{className:"icon",alt:"nasa icon",src:"https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"})),c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),o(v),e.history.push("/search?query=".concat(v))}(t)},className:"form-group input-form"},c.a.createElement("input",{size:"50",type:"text",className:"form-control task-input",placeholder:"Space",value:v,onChange:function(e){return E("".concat(e.target.value))},required:!0}),c.a.createElement("button",{className:"srch-btn btn btn-primary"},"Search"))),c.a.createElement("div",{className:"search-images"},null!==p?p.map((function(e){return c.a.createElement(m.b,{to:{pathname:"/".concat(e.data[0].nasa_id),state:{id:e.data[0].nasa_id}}},c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{className:"search-result",alt:"",src:"".concat(e.links[0].href)})))})):null))}));var g=function(e){var t,a=Object(n.useState)(e.location.state.id),r=Object(u.a)(a,1)[0],o=Object(n.useState)(null),s=Object(u.a)(o,2),m=(s[0],s[1]),b=Object(n.useState)(null),p=Object(u.a)(b,2),h=p[0],f=p[1],d=Object(n.useState)(null),g=Object(u.a)(d,2),v=g[0],E=g[1],j=Object(n.useState)(null),O=Object(u.a)(j,2),N=O[0],k=O[1],w=Object(n.useState)(!1),y=Object(u.a)(w,2),S=y[0],x=y[1];if(Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://images-api.nasa.gov/search?nasa_id=".concat(r)).then((function(e){return e.json()})).then((function(e){m(e.collection.items),f(e.collection.items[0].links[0].href),E(e.collection.items[0].data[0].description),k(e.collection.items[0].data[0].title),console.log(e.collection.items[0].links[0].href)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),t=null!==h?{backgroundImage:"url(".concat(h,")")}:{backgroundColor:"blue"},null!==v)if(v.includes("<a"))var I=v.substr(0,v.indexOf("<a"));else I=v;return c.a.createElement("div",null,N&&v&&h?c.a.createElement("div",{style:t,className:"image-info"},c.a.createElement("button",{type:"button",className:"back-btn btn btn-dark btn-sm",onClick:function(){return e.history.goBack()}},"Back"),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){x(!S)},className:"btn btn-info btn-sm about-btn"},"About Image")),!0===S?c.a.createElement("div",{className:"info"},c.a.createElement("h1",{className:"image-title"},N),c.a.createElement("p",{className:"image-paragraph"},I)):null)):null)};a(47);var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/",component:p}),c.a.createElement(b.a,{path:"/search/",component:d}),c.a.createElement(b.a,{path:"/search/:query",component:d}),c.a.createElement(b.a,{path:"/:imageid",component:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,null,c.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.a48d94e9.chunk.js.map