(function(e){function t(t){for(var i,o,a=t[0],s=t[1],u=t[2],l=0,b=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(i=!1)}i&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},c=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://static.olpiweb.be/infinite/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"14d5":function(e,t,n){},3966:function(e,t,n){"use strict";n("e362")},"398c":function(e,t,n){"use strict";n("14d5")},"3ed9":function(e,t,n){"use strict";n("9546")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function r(e,t,n,r,c,o){var a=Object(i["i"])("Header"),s=Object(i["i"])("Content"),u=Object(i["i"])("Footer");return Object(i["e"])(),Object(i["c"])("div",null,[Object(i["d"])(a),Object(i["d"])(s),Object(i["d"])(u)])}var c={class:"nes-container nes-container-top header"},o=Object(i["d"])("strong",null,"Preserving History",-1);function a(e,t,n,r,a,s){return Object(i["e"])(),Object(i["c"])("div",c,[o])}var s={name:"Header"};n("6081");s.render=a;var u=s,d={class:"nes-container footer"},l=Object(i["d"])("strong",null,"Tool Bar to add",-1);function b(e,t,n,r,c,o){return Object(i["m"])((Object(i["e"])(),Object(i["c"])("div",d,[l],512)),[[i["l"],!1]])}var f={name:"Footer",setup:function(){}};n("398c");f.render=b;var p=f,O=Object(i["o"])("data-v-d2f17db0");Object(i["g"])("data-v-d2f17db0");var j={class:"nes-container infinite-main"},v={class:"nes-container with-title "},h=Object(i["d"])("p",{class:"title"},"Your Answer",-1);Object(i["f"])();var m=O((function(e,t,n,r,c,o){var a=Object(i["i"])("Storyline");return Object(i["e"])(),Object(i["c"])("div",j,[Object(i["d"])(a,{ref:"storyline"},null,512),Object(i["d"])("div",null,[Object(i["d"])("div",v,[h,Object(i["d"])("form",null,[Object(i["m"])(Object(i["d"])("textarea",{id:"textarea_field",class:"nes-textarea",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.newContent=e})},null,512),[[i["k"],c.newContent]]),Object(i["d"])("button",{type:"button",class:"nes-btn",onClick:t[2]||(t[2]=function(){return o.sendResponse&&o.sendResponse.apply(o,arguments)})},"Send"),Object(i["d"])("button",{type:"button",class:["nes-btn",{"is-primary":c.isAdmin}],onClick:t[3]||(t[3]=Object(i["n"])((function(){return o.switchAdmin&&o.switchAdmin.apply(o,arguments)}),["alt"]))},"Admin",2)])])])])})),y=(n("d3b7"),Object(i["o"])("data-v-99fe82ac"));Object(i["g"])("data-v-99fe82ac");var g={class:"nes-container is-dark"},w={class:"message"},S={class:"message-img"},_={key:0,src:"https://static.olpiweb.be/infinite/mcpixel.png"},k={key:1,src:"https://static.olpiweb.be/infinite/melipixel.png"},x={class:"nes-container is-rounded is-dark is-message"};Object(i["f"])();var A=y((function(e,t,n,r,c,o){return Object(i["e"])(),Object(i["c"])("div",g,[(Object(i["e"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(c.data,(function(e,t){return Object(i["e"])(),Object(i["c"])("div",{class:"message-list",key:t},[Object(i["d"])("div",w,[Object(i["d"])("div",S,[e.is_author?(Object(i["e"])(),Object(i["c"])("img",_)):(Object(i["e"])(),Object(i["c"])("img",k))]),Object(i["d"])("div",x,[Object(i["d"])("p",null,Object(i["j"])(e.content),1)])])])})),128))])})),C={name:"Storyline",data:function(){return{data:null}},created:function(){this.updateStoryline(),this.timer=setInterval(this.updateStoryline,1e3)},methods:{updateStoryline:function(){var e=this;fetch("https://infinite.olpiweb.be/api/").then((function(e){return e.json()})).then((function(t){e.data=t}))}}};n("3966");C.render=A,C.__scopeId="data-v-99fe82ac";var P=C,H={name:"Content",components:{Storyline:P},data:function(){return{newContent:"",isAdmin:!1}},methods:{sendResponse:function(){var e=this;fetch("https://infinite.olpiweb.be/api/",{method:"POST",body:JSON.stringify({is_author:this.isAdmin,content:this.newContent})}).then((function(t){console.log(t),e.newContent="",e.$refs.storyline.updateStoryline()}))},switchAdmin:function(){this.isAdmin=!this.isAdmin}}};n("8be5");H.render=m,H.__scopeId="data-v-d2f17db0";var M=H,T={name:"App",components:{Header:u,Footer:p,Content:M}};n("3ed9");T.render=r;var F=T;Object(i["b"])(F).mount("#app")},6081:function(e,t,n){"use strict";n("ba15")},"6a33":function(e,t,n){},"8be5":function(e,t,n){"use strict";n("6a33")},9546:function(e,t,n){},ba15:function(e,t,n){},e362:function(e,t,n){}});
//# sourceMappingURL=app.88b02f28.js.map