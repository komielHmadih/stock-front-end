(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{158:function(e,t,n){},183:function(e,t){},202:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(33),i=n.n(r),o=(n(96),n(222)),l=n(18),s=n.n(l),d=n(25),b=n(10),u=n(26),j=n.n(u),h=(n(79),n(30)),g=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},p=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t)},x=n(2),f=Object(a.createContext)(),O=function(e){var t=e.children,n=Object(a.useState)("AED"),c=Object(b.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)("\u262b"),l=Object(b.a)(o,2),s=l[0],d=l[1];return Object(a.useEffect)((function(){"AED"===r?d("\u262b"):"USD"===r&&d("$")}),[r]),Object(x.jsx)(f.Provider,{value:{currency:r,setCurrency:i,symbol:s},children:t})},y=function(){return Object(a.useContext)(f)},v=n(238),k=n(85),F=n(224),w=n(225),C=n(226),S=n(227),_=n(203),E=n(228),A=n(229),W=n(230),N=n(231),D=n(232),L=n(233),I=n(12);function T(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function P(e){var t,n=Object(a.useState)([]),c=Object(b.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(!1),u=Object(b.a)(l,2),h=u[0],p=u[1],m=Object(a.useState)(""),f=Object(b.a)(m,2),O=f[0],P=(f[1],Object(a.useState)(1)),M=Object(b.a)(P,2),B=M[0],R=M[1],H=y(),J=H.currency,z=H.symbol,U=Object(o.a)({row_white:{backgroundColor:"white",cursor:"pointer",fontFamily:"Shabnam"},row_grey:{backgroundColor:"ghostwhite",cursor:"pointer",fontFamily:"Shabnam"},pagination:{"& .MuiPaginationItem-root":{color:"black"}}})(),Y=Object(I.e)(),$=Object(k.a)({palette:{primary:{main:"#000"},type:"dark"}}),q=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,j.a.get(g(J));case 3:t=e.sent,n=t.data,console.log(n),i(n),p(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){q()}),[J]);var G=function(){return r.filter((function(e){return e.name.toLowerCase().includes(O)||e.symbol.toLowerCase().includes(O)}))};return String.prototype.EntoFa=function(){return this.replace(/\d/g,(function(e){return"\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9"[e]}))},Object(x.jsx)(F.a,{theme:$,children:Object(x.jsxs)(w.a,{style:{textAlign:"center"},maxWidth:!0,children:[Object(x.jsx)(C.a,{variant:"h4",style:{margin:18,fontFamily:"Shabnam"},children:e.title}),Object(x.jsx)(S.a,{component:_.a,style:{maxWidth:"100%"},children:h?Object(x.jsx)(E.a,{style:{backgroundColor:"grey"}}):Object(x.jsxs)(A.a,{"aria-label":"simple table",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)",width:"100%"},children:[Object(x.jsx)(W.a,{style:{backgroundColor:"white"},children:Object(x.jsx)(N.a,{children:["\u0633\u0647\u0645","\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0647\u06cc\u0626\u062a \u0645\u062f\u06cc\u0631\u0647","\u0627\u0638\u0647\u0627\u0631 \u0646\u0638\u0631 \u062d\u0633\u0627\u0628\u0631\u0633","\u0645\u062f\u0627\u0631\u06a9","\u0622\u06af\u0647\u06cc \u062f\u0639\u0648\u062a \u0628\u0647 \u0645\u062c\u0645\u0639","\u0628\u0633\u062a\u0647 \u0634\u062f\u0646 \u0633\u0647\u0645","\u0645\u062c\u0645\u0639","\u0628\u0627\u0632 \u0634\u062f\u0646 \u0646\u0645\u0627\u062f","\u0634\u0631\u0648\u0639 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062d\u0642 \u062a\u0642\u062f\u0645","\u067e\u0627\u06cc\u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062d\u0642 \u062a\u0642\u062f\u0645","\u0634\u0631\u0648\u0639 \u067e\u0630\u06cc\u0631\u0647 \u0646\u0648\u06cc\u0633\u06cc","\u067e\u0627\u06cc\u0627\u0646 \u067e\u0630\u06cc\u0631\u0647 \u0646\u0648\u06cc\u0633\u06cc","\u0646\u062a\u0627\u06cc\u062c \u062d\u0642 \u062a\u0642\u062f\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0646\u0634\u062f\u0647","\u062b\u0628\u062a \u0627\u0641\u0632\u0627\u06cc\u0634 \u0633\u0631\u0645\u0627\u06cc\u0647"].map((function(e){return Object(x.jsx)(D.a,{style:{color:"black",fontWeight:"600",fontFamily:"Shabnam",border:"none",paddingRight:20,paddingLeft:20,alignContent:"space-evenly",textAlign:"center"},align:"Coin"===e?"":"right",children:e},e)}))})}),Object(x.jsx)(L.a,{children:G().slice(10*(B-1),10*(B-1)+10).map((function(e,t){var n=e.price_change_percentage_24h>0;return Object(x.jsxs)(N.a,{onClick:function(){return Y.push("/coins/".concat(e.id))},className:t%2?U.row_white:U.row_grey,style:{paddingRight:20,paddingLeft:20,alignContent:"space-evenly",textAlign:"center"},children:[Object(x.jsxs)(D.a,{component:"th",scope:"row",style:{gap:15,border:"none",textAlign:"center",color:"black"},children:[e.name,"(",e.symbol,")"]}),Object(x.jsxs)(D.a,{align:"right",style:{color:"black",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[z," ",T(e.current_price.toFixed(2)).EntoFa()]}),Object(x.jsxs)(D.a,{align:"right",style:{color:n>0?"rgb(14, 203, 129)":"red",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[n&&"+",e.price_change_percentage_24h.toFixed(2).EntoFa(),"%"]}),Object(x.jsxs)(D.a,{align:"right",style:{color:"black",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[z," ",T(e.market_cap.toString().slice(0,-6).EntoFa()),"M"]}),Object(x.jsxs)(D.a,{align:"right",style:{color:"black",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[z," ",T(e.current_price.toFixed(2)).EntoFa()]}),Object(x.jsxs)(D.a,{align:"right",style:{color:"black",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[z," ",T(e.current_price.toFixed(2)).EntoFa()]}),Object(x.jsxs)(D.a,{align:"right",style:{color:"black",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[z," ",T(e.current_price.toFixed(2)).EntoFa()]}),Object(x.jsxs)(D.a,{align:"right",style:{color:"black",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[z," ",T(e.current_price.toFixed(2)).EntoFa()]}),Object(x.jsxs)(D.a,{align:"right",style:{color:"black",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[z," ",T(e.current_price.toFixed(2)).EntoFa()]}),Object(x.jsxs)(D.a,{align:"right",style:{color:"black",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[z," ",T(e.current_price.toFixed(2)).EntoFa()]}),Object(x.jsxs)(D.a,{align:"right",style:{color:"black",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[z," ",T(e.current_price.toFixed(2)).EntoFa()]}),Object(x.jsxs)(D.a,{align:"right",style:{color:"black",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[z," ",T(e.current_price.toFixed(2)).EntoFa()]}),Object(x.jsxs)(D.a,{align:"right",style:{color:"black",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[z," ",T(e.current_price.toFixed(2)).EntoFa()]}),Object(x.jsxs)(D.a,{align:"right",style:{color:"black",fontWeight:500,border:"none",fontFamily:"Shabnam",alignContent:"space-evenly",textAlign:"center"},children:[z," ",T(e.current_price.toFixed(2)).EntoFa()]})]},e.name)}))})]})}),Object(x.jsx)(v.a,{count:((null===(t=G())||void 0===t?void 0:t.length)/10).toFixed(0),style:{padding:20,width:"100%",display:"flex",justifyContent:"center",direction:"ltr !important"},classes:{ul:U.pagination},onChange:function(e,t){R(t)}})]})})}var M=Object(o.a)((function(e){return{banner:{backgroundImage:"url(./banner2.jpg)"},bannerContent:{height:400,display:"flex",flexDirection:"column",paddingTop:25,justifyContent:"space-around"},tagline:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"},carousel:{height:"50%",display:"flex",alignItems:"center"}}}));var B=function(){var e=M();return Object(x.jsx)("div",{className:e.banner})},R=Object(o.a)((function(){return{Padding:{Padding:20}}})),H=function(){var e=R();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(B,{}),Object(x.jsx)("div",{className:e.Padding,children:Object(x.jsx)(P,{title:"\u0627\u0641\u0632\u0627\u06cc\u0634 \u0633\u0631\u0645\u0627\u06cc\u0647 \u0628\u0647 \u0631\u0648\u0634 \u062d\u0642 \u062a\u0642\u062f\u0645"})}),Object(x.jsx)(P,{title:"\u0627\u0641\u0632\u0627\u06cc\u0634 \u0633\u0631\u0645\u0627\u06cc\u0647 \u0628\u0647 \u0631\u0648\u0634 \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631"})]})},J=(n(158),n(6)),z=n(83),U=n.n(z),Y=n(86),$=n(234),q=function(e){var t=e.children,n=e.selected,a=e.onClick,c=Object(o.a)({selectbutton:{border:"1px solid black",borderRadius:5,padding:10,paddingLeft:20,paddingRight:20,fontFamily:"Shabnam",cursor:"pointer",backgroundColor:n?"black":"",color:n?"whitesmoke":"",fontWeight:n?700:500,"&:hover":{backgroundColor:"black",color:"whitesmoke"},width:"22%"}})();return Object(x.jsx)("span",{onClick:a,className:c.selectbutton,children:t})},G=[{label:"\u06f2\u06f4 \u0633\u0627\u0639\u062a",value:1},{label:"\u06f3\u06f0 \u0631\u0648\u0632",value:30},{label:"\u06f3 \u0645\u0627\u0647",value:90},{label:"\u06cc\u06a9 \u0633\u0627\u0644",value:365}],K=function(e){var t=e.coin,n=Object(a.useState)(),c=Object(b.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(1),u=Object(b.a)(l,2),h=u[0],g=u[1],p=y().currency,f=Object(o.a)((function(e){return{container:Object(J.a)({width:"75%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}}))(),O=function(){var e=Object(d.a)(s.a.mark((function e(){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(m(t.id,h,p));case 2:n=e.sent,a=n.data,i(a.prices);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(t),Object(a.useEffect)((function(){O()}),[h]);var v=Object(k.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(x.jsx)(F.a,{theme:v,children:Object(x.jsx)("div",{className:f.container,children:r?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Y.a,{data:{labels:r.map((function(e){var t=new Date(e[0]),n=t.getHours()>12?"".concat(t.getHours()-12,":").concat(t.getMinutes()," PM"):"".concat(t.getHours(),":").concat(t.getMinutes()," AM");return 1===h?n:t.toLocaleDateString()})),datasets:[{data:r.map((function(e){return e[1]})),label:"Price ( Past ".concat(h," Days ) in ").concat(p),borderColor:"black"}]},options:{elements:{point:{radius:1}}}}),Object(x.jsx)("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"},children:G.map((function(e){return Object(x.jsx)(q,{onClick:function(){return g(e.value)},selected:e.value===h,children:e.label},e.value)}))})]}):Object(x.jsx)($.a,{style:{color:"black"},size:250,thickness:1})})})},Q=function(){var e=Object(I.f)().id,t=Object(a.useState)(),n=Object(b.a)(t,2),c=n[0],r=n[1],i=y(),l=i.currency,u=i.symbol,h=function(){var t=Object(d.a)(s.a.mark((function t(){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get(p(e));case 2:n=t.sent,a=n.data,r(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){h()}),[]);var g=Object(o.a)((function(e){var t,n;return{container:Object(J.a)({display:"flex"},e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),sidebar:(t={width:"30%"},Object(J.a)(t,e.breakpoints.down("md"),{width:"100%"}),Object(J.a)(t,"display","flex"),Object(J.a)(t,"flexDirection","column"),Object(J.a)(t,"alignItems","center"),Object(J.a)(t,"marginTop",25),Object(J.a)(t,"borderRight","2px solid grey"),t),heading:{fontWeight:"bold",marginBottom:20,fontFamily:"Shabnam"},description:{width:"100%",fontFamily:"Shabnam",padding:25,paddingBottom:15,paddingTop:0,textAlign:"justify"},marketData:(n={alignSelf:"start",padding:25,paddingTop:10,width:"100%"},Object(J.a)(n,e.breakpoints.down("md"),{display:"flex",justifyContent:"space-around"}),Object(J.a)(n,e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center"}),Object(J.a)(n,e.breakpoints.down("xs"),{alignItems:"start"}),n)}}))();return c?Object(x.jsxs)("div",{className:g.container,children:[Object(x.jsxs)("div",{className:g.sidebar,children:[Object(x.jsx)("img",{src:null===c||void 0===c?void 0:c.image.large,alt:null===c||void 0===c?void 0:c.name,height:"200",style:{marginBottom:20}}),Object(x.jsx)(C.a,{variant:"h3",className:g.heading,children:null===c||void 0===c?void 0:c.name}),Object(x.jsxs)(C.a,{variant:"subtitle1",className:g.description,children:[U()(null===c||void 0===c?void 0:c.description.en.split(". ")[0]),"."]}),Object(x.jsxs)("div",{className:g.marketData,children:[Object(x.jsxs)("span",{style:{display:"flex"},children:[Object(x.jsx)(C.a,{variant:"h5",className:g.heading,children:"\u0631\u062a\u0628\u0647 :"}),"\xa0 \xa0",Object(x.jsx)(C.a,{variant:"h5",style:{fontFamily:"Shabnam"},children:T(null===c||void 0===c?void 0:c.market_cap_rank).EntoFa()})]}),Object(x.jsxs)("span",{style:{display:"flex"},children:[Object(x.jsx)(C.a,{variant:"h5",className:g.heading,children:"\u0642\u06cc\u0645\u062a \u0641\u0639\u0644\u06cc :"}),"\xa0 \xa0",Object(x.jsxs)(C.a,{variant:"h5",style:{fontFamily:"Shabnam"},children:[u," ",T(null===c||void 0===c?void 0:c.market_data.current_price[l.toLowerCase()]).EntoFa()]})]}),Object(x.jsxs)("span",{style:{display:"flex"},children:[Object(x.jsx)(C.a,{variant:"h5",className:g.heading,children:"\u0627\u0631\u0632\u0634 \u0628\u0627\u0632\u0627\u0631 :"}),"\xa0 \xa0",Object(x.jsxs)(C.a,{variant:"h5",style:{fontFamily:"Shabnam"},children:[u," ",T((null===c||void 0===c?void 0:c.market_data.market_cap[l.toLowerCase()].toString().slice(0,-6)).EntoFa()),"M"]})]})]})]}),Object(x.jsx)(K,{coin:c})]}):Object(x.jsx)(E.a,{style:{backgroundColor:"grey"}})},V=n(236),X=n(237),Z=n(239),ee=n(235),te=n(87),ne=n(84),ae=Object(o.a)((function(e){return{root:{backgroundColor:"white",padding:"2px 4px",display:"flex",alignItems:"end",width:400},input:{marginRight:e.spacing(1),flex:1,fontFamily:"Shabnam"},iconButton:{padding:10},divider:{height:28,margin:4}}}));function ce(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),n=t[0],c=t[1];var r=ae();return Object(x.jsx)("div",{children:Object(x.jsxs)(_.a,{component:"text",className:r.root,children:[Object(x.jsx)(Z.a,{onChange:function(e){var t;t=e.target.value,n&&(clearTimeout(n),c(null)),c(setTimeout((function(){console.log(t)}),700))},className:r.input,placeholder:"\u062c\u0633\u062a\u062c\u0648",inputProps:{"aria-label":"search google maps"},color:"primary"}),Object(x.jsx)(ee.a,{className:r.divider,orientation:"vertical"}),Object(x.jsx)(te.a,{style:{marginBottom:10,marginLeft:10},color:"grey",icon:ne.a})]})})}var re=Object(o.a)((function(e){return{title:{flex:1,color:"black",fontFamily:"Shabnam",fontWeight:"bold",cursor:"pointer"},shadow:{boxShadow:"0 2px 2px -2px gray !important"},shadow_0:{boxShadow:"none !important"},search:{borderColor:"black !important",position:"relative",color:"black !important"}}})),ie=Object(k.a)({palette:{primary:{main:"rgb(243,244,248)"},type:"dark"}});var oe=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){c(window.scrollY>100)}))}),[]);var r=re(),i=y(),o=(i.currency,i.setCurrency,Object(I.e)());return Object(x.jsx)(F.a,{theme:ie,children:Object(x.jsx)(V.a,{position:"sticky",className:n?"shadow_0":"shadow",children:Object(x.jsx)(w.a,{maxWidth:!0,children:Object(x.jsxs)(X.a,{children:[Object(x.jsx)(C.a,{onClick:function(){return o.push("/")},className:r.title,style:{flex:1,width:"150px",height:"auto",alignContent:"start",marginLeft:15,color:"black",borderColor:"black",textAlign:"right"},children:"\u0627\u0641\u0632\u0627\u06cc\u0634 \u0633\u0631\u0645\u0627\u06cc\u0647"}),Object(x.jsx)(ce,{})]})})})})},le=Object(o.a)((function(){return{App:{backgroundColor:"#f3f4f8",color:"black",minHeight:"100vh",maxWidth:"100vw"}}}));var se=function(){var e=le();return Object(x.jsx)(h.a,{children:Object(x.jsxs)("div",{className:e.App,children:[Object(x.jsx)(oe,{}),Object(x.jsx)(I.a,{path:"/",component:H,exact:!0}),Object(x.jsx)(I.a,{path:"/coins/:id",component:Q,exact:!0})]})})};n(201);i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(O,{children:Object(x.jsx)(se,{})})}),document.getElementById("root"))},96:function(e,t,n){}},[[202,1,2]]]);
//# sourceMappingURL=main.4c2c1ce3.chunk.js.map