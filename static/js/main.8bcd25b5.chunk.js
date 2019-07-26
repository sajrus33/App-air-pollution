(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{78:function(e,t,a){e.exports=a(96)},83:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=(a(83),a(25)),s=a.n(l),i=a(38),u=a(59),m=a(26),p=a(71),f=a(60),h=a(69),b=a(145),d=a(146),g=a(143),y=a(98),E=a(64),v=a.n(E),S=a(141),x=a(68),A=a(48),k=a(70),w=a(67),O=a(34),N=a(144),P=a(156),j=a(97),C=a(158),I=[{label:"France"},{label:"Germany"},{label:"Spain"},{label:"Poland"}].map(function(e){return{value:e.label,label:e.label}}),D=Object(S.a)(function(e){return{root:{flexGrow:1,marginTop:15,backgroundColor:"white"},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden"},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:18},placeholder:{position:"absolute",left:2,bottom:6,fontSize:16},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0}}});function F(e){var t=e.inputRef,a=Object(k.a)(e,["inputRef"]);return r.a.createElement("div",Object.assign({ref:t},a))}var R={Control:function(e){var t=e.children,a=e.innerProps,n=e.innerRef,o=e.selectProps,c=o.classes,l=o.TextFieldProps;return r.a.createElement(P.a,Object.assign({fullWidth:!0,InputProps:{inputComponent:F,inputProps:Object(A.a)({className:c.input,ref:n,children:t},a)}},l))},Menu:function(e){return r.a.createElement(j.a,Object.assign({square:!0,className:e.selectProps.classes.paper},e.innerProps),e.children)},NoOptionsMessage:function(e){return r.a.createElement(g.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return r.a.createElement(C.a,Object.assign({ref:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?500:400}},e.innerProps),e.children)},Placeholder:function(e){return r.a.createElement(g.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.placeholder},e.innerProps),e.children)},SingleValue:function(e){return r.a.createElement(g.a,Object.assign({className:e.selectProps.classes.singleValue},e.innerProps),e.children)},ValueContainer:function(e){return r.a.createElement("div",{className:e.selectProps.classes.valueContainer},e.children)}};function T(e){var t=D(),a=Object(O.a)(),n=r.a.useState(null),o=Object(x.a)(n,2),c=o[0],l=o[1];var s={input:function(e){return Object(A.a)({},e,{color:a.palette.text.primary,"& input":{font:"inherit"}})}};return r.a.createElement("div",{className:t.root},r.a.createElement(N.a,null,r.a.createElement(w.a,{classes:t,styles:s,inputId:"react-select-single",TextFieldProps:{label:"Country",InputLabelProps:{htmlFor:"react-select-single",shrink:!0}},placeholder:"Search a country",options:I,components:R,value:c,onChange:function(t){l(t),e.onChangeSearch(t)}})))}var W=Object(S.a)(function(e){return{bar:{backgroundColor:"#4caf50",paddingTop:15,marginBottom:15,position:"sticky"},h1:{fontSize:"2.5em",fontWeight:600,color:"#000",marginRight:"auto"},barBtn:{fontSize:"26"},barIco:{color:"#4caf50",fontSize:32}}}),z=function(e){var t=W();return r.a.createElement(b.a,{className:t.bar},r.a.createElement(d.a,null,r.a.createElement(g.a,{variant:"h1",className:t.h1},"High air pollution !"),r.a.createElement(y.a,{"aria-label":"Scroll up",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:t.barBtn,style:{backgroundColor:"black"}},r.a.createElement(v.a,{className:t.barIco}))),r.a.createElement(T,{onChangeSearch:e.onChangeSearch}))},B=function(e){var t=[],a=[],n=e[0].city;e.forEach(function(r,o){var c=[];if(r.measurements.forEach(function(e){var t={};t[e.parameter]=e.value,c.push(t)}),r.city===n)a.push(c);else{var l={};l.name=n,l.locations=a,t.push(l),(a=[]).push(c),n=r.city}if(o===e.length-1){var s={};s.name=r.city,s.locations=a,t.push(s)}});var r=[];return t.forEach(function(e,t){var a;e.locations.forEach(function(e,t){a={pm25:0,pm25Amount:0,pm10:0,pm10Amount:0,co:0,coAmount:0,o3:0,o3Amount:0,bc:0,bcAmount:0,so2:0,so2Amount:0,no2:0,no2Amount:0},e[t]&&e[t].pm25&&(a.pm25+=e[t].pm25,a.pm25Amount+=1),e[t]&&e[t].pm10&&(a.pm10+=e[t].pm10,a.pm10Amount+=1),e[t]&&e[t].co&&(a.co+=e[t].co,a.coAmount+=1),e[t]&&e[t].o3&&(a.o3+=e[t].o3,a.o3Amount+=1),e[t]&&e[t].bc&&(a.bc+=e[t].bc,a.bcAmount+=1),e[t]&&e[t].so2&&(a.so2+=e[t].so2,a.so2Amount+=1),e[t]&&e[t].no2&&(a.no2+=e[t].no2,a.no2Amount+=1)});var n=function(e){return e||1};a.pm25Amount=n(a.pm25Amount),a.pm10Amount=n(a.pm10Amount),a.coAmount=n(a.coAmount),a.o3Amount=n(a.o3Amount),a.bcAmount=n(a.bcAmount),a.so2Amount=n(a.so2Amount),a.no2Amount=n(a.no2Amount),r[t]=[a.pm25/a.pm25Amount,a.pm10/a.pm10Amount,a.co/a.coAmount,a.o3/a.o3Amount,a.bc/a.bcAmount,a.so2/a.so2Amount,a.no2/a.no2Amount,e.name]}),r.sort(function(e,t){for(var a=0;a<7;a++){if(e[a]>t[a])return-1;if(e[a]<t[a])return 1}}),r.splice(10),r},M=a(159),J=a(148),G=a(149),L=a(157),V=a(150),q=a(154),H=a(153),$=a(151),_=a(152),K=a(147),Q=a(66),U=a.n(Q),X=function(e){return r.a.createElement(K.a,{in:e.showed,timeout:400},r.a.createElement(M.a,{className:e.classes.panelExpansion},r.a.createElement(J.a,{className:e.classes.panelSummary,expandIcon:r.a.createElement(U.a,null),"aria-controls":"panel"+e.index+"a-content",id:"panel"+e.index+"a-header"},r.a.createElement(g.a,{variant:"h2",className:e.classes.heading}," ",e.cityName)),r.a.createElement(G.a,null,r.a.createElement(L.a,{display:"flex",flexDirection:"column"},r.a.createElement(g.a,{style:{marginBottom:"15px"}},e.cityDescribe),r.a.createElement(V.a,null,r.a.createElement($.a,null,r.a.createElement(_.a,null,r.a.createElement(H.a,{align:"left"},"PM25"),r.a.createElement(H.a,{align:"left"},"PM10"),r.a.createElement(H.a,{align:"left"},"CO"),r.a.createElement(H.a,{align:"left"},"O3"),r.a.createElement(H.a,{align:"left"},"BC"),r.a.createElement(H.a,{align:"left"},"SO2"),r.a.createElement(H.a,{align:"left"},"NO2"))),r.a.createElement(q.a,null,r.a.createElement(_.a,{key:"row"},r.a.createElement(H.a,{align:"left"},e.pm25," "),r.a.createElement(H.a,{align:"left"},e.pm10," "),r.a.createElement(H.a,{align:"left"},e.co," "),r.a.createElement(H.a,{align:"left"},e.o3," "),r.a.createElement(H.a,{align:"left"},e.bc," "),r.a.createElement(H.a,{align:"left"},e.so2," "),r.a.createElement(H.a,{align:"left"},e.no2," "))))))))},Y=a(155),Z=Object(S.a)(function(e){return{panelSummary:{fontWeight:700},heading:{fontSize:e.typography.pxToRem(17),fontWeight:600},progress:{position:"fixed",left:"calc(50% - 20px)",top:"calc(50% + 80px)",color:"#4caf50"}}}),ee=function(e){var t,a=Z(),n=[];t=e.showed?"none":"block";return e.cities.forEach(function(t,o){var c=e.cities[o][0],l=e.cities[o][1],s=e.cities[o][2],i=e.cities[o][3],u=e.cities[o][4],m=e.cities[o][5],p=e.cities[o][6],f=e.cities[o][7];n.push(r.a.createElement(X,{classes:a,showed:e.showed,key:o,index:o,cityName:f,cityDescribe:"Country: ".concat(e.country,". \n                        Latest air pollution measurement.\n                     "),pm25:c,pm10:l,co:s,o3:i,bc:u,so2:m,no2:p}))}),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"h4",align:"center",paragraph:!0},e.country?e.country:e.error),r.a.createElement("div",null,r.a.createElement(Y.a,{style:{display:t},className:a.progress}),n))},te=(a(95),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={cities:[],countryInput:null,countryName:null,error:null,AccordionShowed:!0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"getData",value:function(){var e=Object(i.a)(s.a.mark(function e(){var t,a,n,r,o,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=B,a=this.state.countryInput,n="https://api.openaq.org/v1/latest?country=".concat(a,"&order_by=city&limit=10000"),e.next=5,fetch(n);case 5:if(!(r=e.sent).ok){e.next=19;break}return localStorage.setItem("localDataCountry",JSON.stringify(this.state.countryInput)),e.next=10,r.json();case 10:if(!(o=e.sent).results){e.next=17;break}return e.next=14,t(o.results);case 14:c=e.sent,this.setState({cities:c,error:null}),localStorage.setItem("localData",JSON.stringify(c));case 17:e.next=20;break;case 19:this.setState({error:r.statusText});case 20:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark(function e(){var t,a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("localData")),a=JSON.parse(localStorage.getItem("localDataCountry")),!t){e.next=17;break}n=a,e.t0=n,e.next="FR"===e.t0?7:"DE"===e.t0?9:"PL"===e.t0?11:"SP"===e.t0?13:15;break;case 7:return n="France",e.abrupt("break",16);case 9:return n="Germany",e.abrupt("break",16);case 11:return n="Poland",e.abrupt("break",16);case 13:return n="Spain",e.abrupt("break",16);case 15:return e.abrupt("break",16);case 16:this.setState({countryName:n,cities:t});case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onChangeSearch",value:function(){var e=Object(i.a)(s.a.mark(function e(t){var a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.value,n=this.state.countryInput,e.t0=a,e.next="France"===e.t0?5:"Germany"===e.t0?7:"Poland"===e.t0?9:"Spain"===e.t0?11:13;break;case 5:return n="FR",e.abrupt("break",14);case 7:return n="DE",e.abrupt("break",14);case 9:return n="PL",e.abrupt("break",14);case 11:return n="ES",e.abrupt("break",14);case 13:return e.abrupt("break",14);case 14:if(n===this.state.countryInput){e.next=20;break}return e.next=17,this.setState({countryInput:n,AccordionShowed:!1,countryName:a});case 17:return e.next=19,this.getData();case 19:this.setState({AccordionShowed:!0});case 20:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{onChangeSearch:this.onChangeSearch.bind(this)}),r.a.createElement(ee,{country:this.state.countryName,cities:this.state.cities,showed:this.state.AccordionShowed,error:this.state.error}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[78,1,2]]]);
//# sourceMappingURL=main.8bcd25b5.chunk.js.map