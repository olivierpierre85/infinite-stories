(function(t){function e(e){for(var r,o,a=e[0],s=e[1],d=e[2],l=0,b=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(b.length)b.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"14d5":function(t,e,n){},2878:function(t,e,n){t.exports=n.p+"../../static/img/melipixel.61b29f93.png"},"398c":function(t,e,n){"use strict";n("14d5")},"3ed9":function(t,e,n){"use strict";n("9546")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(t,e,n,c,i,o){var a=Object(r["i"])("Header"),s=Object(r["i"])("Content"),d=Object(r["i"])("Footer");return Object(r["e"])(),Object(r["c"])("div",null,[Object(r["d"])(a),Object(r["d"])(s),Object(r["d"])(d)])}var i={class:"nes-container nes-container-top header"},o=Object(r["d"])("strong",null,"Preserving History",-1);function a(t,e,n,c,a,s){return Object(r["e"])(),Object(r["c"])("div",i,[o])}var s={name:"Header"};n("6081");s.render=a;var d=s,u={class:"nes-container footer"},l=Object(r["d"])("strong",null,"Tool Bar to add",-1);function b(t,e,n,c,i,o){return Object(r["m"])((Object(r["e"])(),Object(r["c"])("div",u,[l],512)),[[r["l"],!1]])}var f={name:"Footer",setup:function(){}};n("398c");f.render=b;var p=f,O=Object(r["o"])("data-v-4a94ddc8");Object(r["g"])("data-v-4a94ddc8");var j={class:"nes-container infinite-main"},v={class:"nes-container with-title "},m=Object(r["d"])("p",{class:"title"},"Your Answer",-1);Object(r["f"])();var h=O((function(t,e,n,c,i,o){var a=Object(r["i"])("Storyline");return Object(r["e"])(),Object(r["c"])("div",j,[Object(r["d"])(a,{ref:"storyline"},null,512),Object(r["d"])("div",null,[Object(r["d"])("div",v,[m,Object(r["d"])("form",null,[Object(r["m"])(Object(r["d"])("textarea",{id:"textarea_field",class:"nes-textarea",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.newContent=t})},null,512),[[r["k"],i.newContent]]),Object(r["d"])("button",{type:"button",class:"nes-btn",onClick:e[2]||(e[2]=function(){return o.sendResponse&&o.sendResponse.apply(o,arguments)})},"Send"),Object(r["d"])("button",{type:"button",class:["nes-btn",{"is-primary":i.isAdmin}],onClick:e[3]||(e[3]=Object(r["n"])((function(){return o.switchAdmin&&o.switchAdmin.apply(o,arguments)}),["alt"]))},"Admin",2)])])])])})),y=(n("d3b7"),n("b493")),g=n.n(y),w=n("2878"),S=n.n(w),x=Object(r["o"])("data-v-d8584434");Object(r["g"])("data-v-d8584434");var _={class:"nes-container is-dark"},k={class:"message"},A={class:"message-img"},C={key:0,src:g.a},P={key:1,src:S.a},H={class:"nes-container is-rounded is-dark is-message"};Object(r["f"])();var M=x((function(t,e,n,c,i,o){return Object(r["e"])(),Object(r["c"])("div",_,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(i.data,(function(t,e){return Object(r["e"])(),Object(r["c"])("div",{class:"message-list",key:e},[Object(r["d"])("div",k,[Object(r["d"])("div",A,[t.is_author?(Object(r["e"])(),Object(r["c"])("img",C)):(Object(r["e"])(),Object(r["c"])("img",P))]),Object(r["d"])("div",H,[Object(r["d"])("p",null,Object(r["j"])(t.content),1)])])])})),128))])})),T={name:"Storyline",data:function(){return{data:null}},created:function(){this.updateStoryline(),this.timer=setInterval(this.updateStoryline,1e3)},methods:{updateStoryline:function(){var t=this,e="http://127.0.0.1:8000";fetch(e+"/api/").then((function(t){return t.json()})).then((function(e){t.data=e}))}}};n("d9a1");T.render=M,T.__scopeId="data-v-d8584434";var F=T,I={name:"Content",components:{Storyline:F},data:function(){return{newContent:"",isAdmin:!1}},methods:{sendResponse:function(){var t=this,e="http://127.0.0.1:8000";fetch(e+"/api/",{method:"POST",body:JSON.stringify({is_author:this.isAdmin,content:this.newContent})}).then((function(e){console.log(e),t.newContent="",t.$refs.storyline.updateStoryline()}))},switchAdmin:function(){this.isAdmin=!this.isAdmin}}};n("dfb1");I.render=h,I.__scopeId="data-v-4a94ddc8";var J=I,R={name:"App",components:{Header:d,Footer:p,Content:J}};n("3ed9");R.render=c;var q=R;Object(r["b"])(q).mount("#app")},6081:function(t,e,n){"use strict";n("ba15")},9546:function(t,e,n){},b174:function(t,e,n){},b493:function(t,e,n){t.exports=n.p+"../../static/img/mcpixel.26f46e38.png"},ba15:function(t,e,n){},d9a1:function(t,e,n){"use strict";n("b174")},dfb1:function(t,e,n){"use strict";n("f111")},f111:function(t,e,n){}});
//# sourceMappingURL=app.b4b10573.js.map