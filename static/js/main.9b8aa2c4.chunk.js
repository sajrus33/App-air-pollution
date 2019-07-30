(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(85),a(25)),l=a.n(i),s=a(40),u=a(60),m=a(26),p=a(73),f=a(61),h=a(71),d=a(68),b=a.n(d),g=a(150),v=a(151),y=a(148),E=a(103),w=a(65),k=a.n(w),S=a(146),x=a(70),O=a(48),A=a(72),N=a(69),j=a(36),P=a(149),C=a(161),I=a(102),W=a(163),M=[{label:"France"},{label:"Germany"},{label:"Spain"},{label:"Poland"}].map(function(e){return{value:e.label,label:e.label}}),D=Object(S.a)(function(e){return{root:{flexGrow:1,marginTop:15,backgroundColor:"white"},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden"},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:18},placeholder:{position:"absolute",left:2,bottom:6,fontSize:16},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0}}});function R(e){var t=e.inputRef,a=Object(A.a)(e,["inputRef"]);return r.a.createElement("div",Object.assign({ref:t},a))}var T={Control:function(e){var t=e.children,a=e.innerProps,n=e.innerRef,o=e.selectProps,c=o.classes,i=o.TextFieldProps;return r.a.createElement(C.a,Object.assign({fullWidth:!0,InputProps:{inputComponent:R,inputProps:Object(O.a)({className:c.input,ref:n,children:t},a)}},i))},Menu:function(e){return r.a.createElement(I.a,Object.assign({square:!0,className:e.selectProps.classes.paper},e.innerProps),e.children)},NoOptionsMessage:function(e){return r.a.createElement(y.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return r.a.createElement(W.a,Object.assign({ref:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?500:400}},e.innerProps),e.children)},Placeholder:function(e){return r.a.createElement(y.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.placeholder},e.innerProps),e.children)},SingleValue:function(e){return r.a.createElement(y.a,Object.assign({className:e.selectProps.classes.singleValue},e.innerProps),e.children)},ValueContainer:function(e){return r.a.createElement("div",{className:e.selectProps.classes.valueContainer},e.children)}};function F(e){var t=D(),a=Object(j.a)(),n=r.a.useState(null),o=Object(x.a)(n,2),c=o[0],i=o[1];var l={input:function(e){return Object(O.a)({},e,{color:a.palette.text.primary,"& input":{font:"inherit"}})}};return r.a.createElement("div",{className:t.root},r.a.createElement(P.a,null,r.a.createElement(N.a,{isClearable:!0,backspaceRemoves:!0,deleteRemoves:!0,searchable:!0,classes:t,styles:l,inputId:"react-select-single",TextFieldProps:{label:"Country",InputLabelProps:{htmlFor:"react-select-single",shrink:!0}},placeholder:"Search a country",options:M,components:T,value:c,onChange:function(t){i(t),e.onChangeSearch(t)}})))}var B=Object(S.a)(function(e){return{bar:{backgroundColor:"#4caf50",paddingTop:15,marginBottom:15,position:"sticky"},h1:{fontSize:"2.5em",fontWeight:600,color:"#000",marginRight:"auto"},barBtn:{fontSize:"26"},barIco:{color:"#4caf50",fontSize:32}}}),z=function(e){var t=B();return r.a.createElement(g.a,{className:t.bar},r.a.createElement(v.a,null,r.a.createElement(y.a,{variant:"h1",className:t.h1},"High air pollution !"),r.a.createElement(E.a,{"aria-label":"Scroll up",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:t.barBtn,style:{backgroundColor:"black"}},r.a.createElement(k.a,{className:t.barIco}))),r.a.createElement(F,{onChangeSearch:e.onChangeSearch}))},L=function(e){var t=[],a=[],n=e[0].city;e.forEach(function(r,o){var c=[];if(r.measurements.forEach(function(e){var t={};t[e.parameter]=e.value,c.push(t)}),r.city===n)a.push(c);else{var i={};i.name=n,i.locations=a,t.push(i),(a=[]).push(c),n=r.city}if(o===e.length-1){var l={};l.name=r.city,l.locations=a,t.push(l)}});var r=[];t.forEach(function(e,t){var a={pm25:0,pm25Amount:0,pm10:0,pm10Amount:0,co:0,coAmount:0,o3:0,o3Amount:0,bc:0,bcAmount:0,so2:0,so2Amount:0,no2:0,no2Amount:0};e.locations.forEach(function(e){e.forEach(function(e){switch(Object.getOwnPropertyNames(e)[0]){case"pm25":a.pm25+=e.pm25,a.pm25Amount+=1;break;case"pm10":a.pm10+=e.pm10,a.pm10Amount+=1;break;case"co":a.co+=e.co,a.coAmount+=1;break;case"o3":a.o3+=e.o3,a.o3Amount+=1;break;case"bc":a.bc+=e.bc,a.bcAmount+=1;break;case"so2":a.so2+=e.so2,a.so2Amount+=1;break;case"no2":a.no2+=e.no2,a.no2Amount+=1}})}),Object.keys(a).forEach(function(e){e.includes("Amount")&&(a[e]=a[e]||1)}),r[t]=[Math.floor(a.pm25/a.pm25Amount),Math.floor(a.pm10/a.pm10Amount),Math.floor(a.co/a.coAmount),Math.floor(a.o3/a.o3Amount),Math.floor(a.bc/a.bcAmount),Math.floor(a.so2/a.so2Amount),Math.floor(a.no2/a.no2Amount),e.name]});var o=[];r.forEach(function(e,t){o[t]={value:0},o[t].index=t;for(var a=0;a<6;a++)o[t].value+=e[a]}),o.sort(function(e,t){return t.value-e.value}),o.splice(10);var c=[];return o.forEach(function(e){c.push(r[e.index])}),c},q=a(164),J=a(153),G=a(154),U=a(162),V=a(155),X=a(159),H=a(158),$=a(156),_=a(157),K=a(152),Q=a(67),Y=a.n(Q),Z=Object(S.a)(function(e){return{root:{width:"100%",overflowX:"hidden"},panelSummary:{fontWeight:700},heading:{fontSize:e.typography.pxToRem(17),fontWeight:600},table:{minWidth:"650",overflowX:"auto"}}}),ee=function(e){var t=Z();return r.a.createElement(K.a,{in:e.showed,timeout:400},r.a.createElement(I.a,{className:t.root},r.a.createElement(q.a,{className:t.panelExpansion},r.a.createElement(J.a,{className:t.panelSummary,expandIcon:r.a.createElement(Y.a,null),"aria-controls":"panel"+e.index+"a-content",id:"panel"+e.index+"a-header"},r.a.createElement(y.a,{variant:"h2",className:t.heading}," ",e.cityName)),r.a.createElement(G.a,null,r.a.createElement(U.a,{display:"flex",flexDirection:"column",style:{overflowX:"auto"}},r.a.createElement(y.a,{style:{marginBottom:"15px"}},e.cityDescribe),r.a.createElement(U.a,{display:"flex",flexDirection:"column",style:{overflowX:"auto"}},r.a.createElement(V.a,{className:t.table},r.a.createElement($.a,null,r.a.createElement(_.a,null,r.a.createElement(H.a,{align:"left"},"PM25"),r.a.createElement(H.a,{align:"left"},"PM10"),r.a.createElement(H.a,{align:"left"},"CO"),r.a.createElement(H.a,{align:"left"},"O3"),r.a.createElement(H.a,{align:"left"},"BC"),r.a.createElement(H.a,{align:"left"},"SO2"),r.a.createElement(H.a,{align:"left"},"NO2"))),r.a.createElement(X.a,null,r.a.createElement(_.a,{key:"row"},r.a.createElement(H.a,{align:"left"},e.pm25," \xb5g/m\xb3"),r.a.createElement(H.a,{align:"left"},e.pm10," \xb5g/m\xb3"),r.a.createElement(H.a,{align:"left"},e.co," \xb5g/m\xb3"),r.a.createElement(H.a,{align:"left"},e.o3," \xb5g/m\xb3"),r.a.createElement(H.a,{align:"left"},e.bc," \xb5g/m\xb3"),r.a.createElement(H.a,{align:"left"},e.so2," \xb5g/m\xb3"),r.a.createElement(H.a,{align:"left"},e.no2," \xb5g/m\xb3"))))))))))},te=a(160),ae=Object(S.a)(function(e){return{progress:{position:"fixed",left:"calc(50% - 20px)",top:"calc(50% + 80px)",color:"#4caf50"}}}),ne=function(e){var t,a=ae(),n=[];t=e.showed?"none":"block";return e.cities.forEach(function(t,o){var c=e.cities[o][0],i=e.cities[o][1],l=e.cities[o][2],s=e.cities[o][3],u=e.cities[o][4],m=e.cities[o][5],p=e.cities[o][6],f=e.cities[o][7];n.push(r.a.createElement(ee,{classes:a,showed:e.showed,key:o,index:o,cityName:f,cityDescribe:"  \n                        Latest air pollution measurement in ".concat(e.country,".\n                     "),pm25:c,pm10:i,co:l,o3:s,bc:u,so2:m,no2:p}))}),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h4",align:"center",paragraph:!0},e.country?e.country:e.error),r.a.createElement("div",null,r.a.createElement(te.a,{style:{display:t},className:a.progress}),n))},re=(a(97),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={cities:[],countryInput:null,countryName:null,error:null,AccordionShowed:!0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"getData",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t,a,n,r,o,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=L,a=this.state.countryInput,n="https://api.openaq.org/v1/latest?country=".concat(a,"&order_by=city&limit=10000"),e.next=5,fetch(n);case 5:if(!(r=e.sent).ok){e.next=19;break}return localStorage.setItem("localDataCountry",JSON.stringify(this.state.countryInput)),e.next=10,r.json();case 10:if(!(o=e.sent).results){e.next=17;break}return e.next=14,t(o.results);case 14:c=e.sent,this.setState({cities:c,error:null}),localStorage.setItem("localData",JSON.stringify(c));case 17:e.next=20;break;case 19:this.setState({error:r.statusText});case 20:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t,a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("localData")),a=JSON.parse(localStorage.getItem("localDataCountry")),!t){e.next=17;break}n=a,e.t0=n,e.next="FR"===e.t0?7:"DE"===e.t0?9:"PL"===e.t0?11:"ES"===e.t0?13:15;break;case 7:return n="France",e.abrupt("break",16);case 9:return n="Germany",e.abrupt("break",16);case 11:return n="Poland",e.abrupt("break",16);case 13:return n="Spain",e.abrupt("break",16);case 15:return e.abrupt("break",16);case 16:this.setState({countryName:n,cities:t});case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onChangeSearch",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=21;break}a=t.value,n=this.state.countryInput,e.t0=a,e.next="France"===e.t0?6:"Germany"===e.t0?8:"Poland"===e.t0?10:"Spain"===e.t0?12:14;break;case 6:return n="FR",e.abrupt("break",15);case 8:return n="DE",e.abrupt("break",15);case 10:return n="PL",e.abrupt("break",15);case 12:return n="ES",e.abrupt("break",15);case 14:return e.abrupt("break",15);case 15:if(n===this.state.countryInput){e.next=21;break}return e.next=18,this.setState({countryInput:n,AccordionShowed:!1,countryName:a});case 18:return e.next=20,this.getData();case 20:this.setState({AccordionShowed:!0});case 21:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Top 10 air pollution city"),r.a.createElement("meta",{name:"description",content:"Top 10 air-polluted cities in Europe. Latest air quality\r measure in European Union. App show true quality of European country."}),r.a.createElement("meta",{name:"keywords",content:"air, quality, pollution, latest, tests"}),r.a.createElement("meta",{property:"og:title",content:"Air quality"}),r.a.createElement("meta",{name:"author",content:"Brian Wala"})),r.a.createElement(z,{onChangeSearch:this.onChangeSearch.bind(this)}),r.a.createElement(ne,{country:this.state.countryName,cities:this.state.cities,showed:this.state.AccordionShowed,error:this.state.error}))}}]),t}(n.Component)),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(re,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/App-air-pollution",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/App-air-pollution","/service-worker.js");oe?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ce(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ce(t,e)})}}()},80:function(e,t,a){e.exports=a(101)},85:function(e,t,a){},97:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.9b8aa2c4.chunk.js.map