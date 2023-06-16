(function(){"use strict";var e={4993:function(e,n,t){var r=t(9242),u=t(3396);function a(e,n,t,r,a,l){const o=(0,u.up)("FanLevelCard"),i=(0,u.up)("TargetLevelCard");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(o,{member:"kaho"}),(0,u.Wm)(o,{member:"sayaka"}),(0,u.Wm)(o,{member:"kozue"}),(0,u.Wm)(o,{member:"tsuzuri"}),(0,u.Wm)(i,{member:"kaho"}),(0,u.Wm)(i,{member:"sayaka"}),(0,u.Wm)(i,{member:"kozue"}),(0,u.Wm)(i,{member:"tsuzuri"})],64)}var l=t(7139);const o={class:"box-fanlevel"},i=["value"],v=["value"];function s(e,n,t,r,a,s){return(0,u.wg)(),(0,u.iD)("div",o,[(0,u._)("div",null,(0,l.zw)(e.member),1),(0,u._)("div",null,[(0,u.Uk)(" Season fan Lv."),(0,u._)("input",{class:"input-fanlv",type:"number",value:e.getLv,onChange:n[0]||(n[0]=(...n)=>e.setLv&&e.setLv(...n))},null,40,i)]),(0,u._)("div",null,[(0,u.Uk)(" EXP "),(0,u._)("input",{class:"input-exp",type:"number",value:e.getExp,onChange:n[1]||(n[1]=(...n)=>e.setExp&&e.setExp(...n))},null,40,v)])])}var m=t(65);const p=Symbol(),c=(0,m.MT)({state(){const e={kaho:{lv:0,exp:0},sayaka:{lv:0,exp:0},kozue:{lv:0,exp:0},tsuzuri:{lv:0,exp:0}};return{fanLevelsCurrent:e}},getters:{getLv:e=>n=>e.fanLevelsCurrent[n].lv,getExp:e=>n=>e.fanLevelsCurrent[n].exp,getRequiredExp:e=>e=>{const n=e-1;return n/2*(400+120*(n-1))}},mutations:{setLv(e,{member:n,lv:t}){e.fanLevelsCurrent[n].lv=t},setExp(e,{member:n,exp:t}){e.fanLevelsCurrent[n].exp=t}}});function f(){return(0,m.oR)(p)}var b=(0,u.aZ)({name:"FanLevelCard",props:{member:String,lv:Number,exp:Number},setup(e){const n=f(),t=(0,u.Fl)((()=>n.getters.getLv(e.member))),r=(0,u.Fl)((()=>n.getters.getExp(e.member))),a=t=>{n.commit("setLv",{member:e.member,lv:Number(t.target.value)})},l=t=>{n.commit("setExp",{member:e.member,exp:Number(t.target.value)})};return{getLv:t,getExp:r,setLv:a,setExp:l}}}),g=t(89);const d=(0,g.Z)(b,[["render",s]]);var x=d;const L={class:"box-fanlevel"},k=["value"];function h(e,n,t,a,o,i){return(0,u.wg)(),(0,u.iD)("div",L,[(0,u._)("div",null,(0,l.zw)(e.member),1),(0,u._)("div",null,[(0,u.Uk)(" Target fan Lv."),(0,u.wy)((0,u._)("input",{class:"input-fanlv",type:"number","onUpdate:modelValue":n[0]||(n[0]=n=>e.targetLv=n)},null,512),[[r.nr,e.targetLv]])]),(0,u.Uk)(" 残り "),(0,u._)("input",{class:"input-exp",readonly:"",type:"number",value:e.getRemainedExp},null,8,k),(0,u.Uk)(" exp → ★"+(0,l.zw)(Math.ceil(e.getRemainedExp/700))+"個 ",1)])}var y=t(4870),E=(0,u.aZ)({name:"TargetLevelCard",props:{member:String,lv:Number},setup(e){const n=(0,y.iH)(1),t=f(),r=(0,u.Fl)((()=>t.getters.getExp(e.member))),a=(0,u.Fl)((()=>t.getters.getRequiredExp(n.value))),l=(0,u.Fl)((()=>Math.max(a.value-r.value,0)));return{getRequiredExps:a,getRemainedExp:l,targetLv:n}}});const C=(0,g.Z)(E,[["render",h]]);var w=C,_=(0,u.aZ)({name:"App",components:{FanLevelCard:x,TargetLevelCard:w},setup(){const e=f();console.log(e?.state?.fanLevelsCurrent)}});const O=(0,g.Z)(_,[["render",a]]);var z=O;(0,r.ri)(z).use(c,p).mount("#app")}},n={};function t(r){var u=n[r];if(void 0!==u)return u.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,u,a){if(!r){var l=1/0;for(s=0;s<e.length;s++){r=e[s][0],u=e[s][1],a=e[s][2];for(var o=!0,i=0;i<r.length;i++)(!1&a||l>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[i])}))?r.splice(i--,1):(o=!1,a<l&&(l=a));if(o){e.splice(s--,1);var v=u();void 0!==v&&(n=v)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,u,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var u,a,l=r[0],o=r[1],i=r[2],v=0;if(l.some((function(n){return 0!==e[n]}))){for(u in o)t.o(o,u)&&(t.m[u]=o[u]);if(i)var s=i(t)}for(n&&n(r);v<l.length;v++)a=l[v],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},r=self["webpackChunklink_like_fanlevel"]=self["webpackChunklink_like_fanlevel"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(4993)}));r=t.O(r)})();
//# sourceMappingURL=app.11d6353e.js.map