(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const vt={},Ir=[],Hn=()=>{},kf=()=>!1,ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pc=t=>t.startsWith("onUpdate:"),Vt=Object.assign,Dc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lm=Object.prototype.hasOwnProperty,pt=(t,e)=>lm.call(t,e),Ye=Array.isArray,Lr=t=>Ls(t)==="[object Map]",ra=t=>Ls(t)==="[object Set]",xu=t=>Ls(t)==="[object Date]",Je=t=>typeof t=="function",Lt=t=>typeof t=="string",Gn=t=>typeof t=="symbol",gt=t=>t!==null&&typeof t=="object",Uf=t=>(gt(t)||Je(t))&&Je(t.then)&&Je(t.catch),Nf=Object.prototype.toString,Ls=t=>Nf.call(t),cm=t=>Ls(t).slice(8,-1),Ff=t=>Ls(t)==="[object Object]",sa=t=>Lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ds=Cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},um=/-\w/g,Mn=oa(t=>t.replace(um,e=>e.slice(1).toUpperCase())),dm=/\B([A-Z])/g,ar=oa(t=>t.replace(dm,"-$1").toLowerCase()),aa=oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ca=oa(t=>t?`on${aa(t)}`:""),Ci=(t,e)=>!Object.is(t,e),To=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Of=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Ic=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yu;const la=()=>yu||(yu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ks(t){if(Ye(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Lt(i)?mm(i):ks(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Lt(t)||gt(t))return t}const fm=/;(?![^(]*\))/g,hm=/:([^]+)/,pm=/\/\*[^]*?\*\//g;function mm(t){const e={};return t.replace(pm,"").split(fm).forEach(n=>{if(n){const i=n.split(hm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function an(t){let e="";if(Lt(t))e=t;else if(Ye(t))for(let n=0;n<t.length;n++){const i=an(t[n]);i&&(e+=i+" ")}else if(gt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_m=Cc(gm);function zf(t){return!!t||t===""}function vm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Us(t[i],e[i]);return n}function Us(t,e){if(t===e)return!0;let n=xu(t),i=xu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Gn(t),i=Gn(e),n||i)return t===e;if(n=Ye(t),i=Ye(e),n||i)return n&&i?vm(t,e):!1;if(n=gt(t),i=gt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Us(t[o],e[o]))return!1}}return String(t)===String(e)}function Bf(t,e){return t.findIndex(n=>Us(n,e))}const Hf=t=>!!(t&&t.__v_isRef===!0),ue=t=>Lt(t)?t:t==null?"":Ye(t)||gt(t)&&(t.toString===Nf||!Je(t.toString))?Hf(t)?ue(t.value):JSON.stringify(t,Vf,2):String(t),Vf=(t,e)=>Hf(e)?Vf(t,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Pa(i,s)+" =>"]=r,n),{})}:ra(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pa(n))}:Gn(e)?Pa(e):gt(e)&&!Ye(e)&&!Ff(e)?String(e):e,Pa=(t,e="")=>{var n;return Gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class xm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){++this._on===1&&(this.prevScope=jt,jt=this)}off(){this._on>0&&--this._on===0&&(jt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Gf(){return jt}function ym(t,e=!1){jt&&jt.cleanups.push(t)}let xt;const Da=new WeakSet;class Wf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Da.has(this)&&(Da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bu(this),$f(this);const e=xt,n=Pn;xt=this,Pn=!0;try{return this.fn()}finally{qf(this),xt=e,Pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Uc(e);this.deps=this.depsTail=void 0,bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){El(this)&&this.run()}get dirty(){return El(this)}}let jf=0,fs,hs;function Xf(t,e=!1){if(t.flags|=8,e){t.next=hs,hs=t;return}t.next=fs,fs=t}function Lc(){jf++}function kc(){if(--jf>0)return;if(hs){let e=hs;for(hs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;fs;){let e=fs;for(fs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function $f(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qf(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Uc(i),bm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function El(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Yf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ys)||(t.globalVersion=ys,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!El(t))))return;t.flags|=2;const e=t.dep,n=xt,i=Pn;xt=t,Pn=!0;try{$f(t);const r=t.fn(t._value);(e.version===0||Ci(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{xt=n,Pn=i,qf(t),t.flags&=-3}}function Uc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Uc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function bm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pn=!0;const Kf=[];function fi(){Kf.push(Pn),Pn=!1}function hi(){const t=Kf.pop();Pn=t===void 0?!0:t}function bu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xt;xt=void 0;try{e()}finally{xt=n}}}let ys=0;class Sm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ca{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xt||!Pn||xt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xt)n=this.activeLink=new Sm(xt,this),xt.deps?(n.prevDep=xt.depsTail,xt.depsTail.nextDep=n,xt.depsTail=n):xt.deps=xt.depsTail=n,Zf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=xt.depsTail,n.nextDep=void 0,xt.depsTail.nextDep=n,xt.depsTail=n,xt.deps===n&&(xt.deps=i)}return n}trigger(e){this.version++,ys++,this.notify(e)}notify(e){Lc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{kc()}}}function Zf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Zf(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ho=new WeakMap,er=Symbol(""),Tl=Symbol(""),bs=Symbol("");function Xt(t,e,n){if(Pn&&xt){let i=Ho.get(t);i||Ho.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new ca),r.map=i,r.key=n),r.track()}}function si(t,e,n,i,r,s){const o=Ho.get(t);if(!o){ys++;return}const a=l=>{l&&l.trigger()};if(Lc(),e==="clear")o.forEach(a);else{const l=Ye(t),c=l&&sa(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===bs||!Gn(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(bs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(er)),Lr(t)&&a(o.get(Tl)));break;case"delete":l||(a(o.get(er)),Lr(t)&&a(o.get(Tl)));break;case"set":Lr(t)&&a(o.get(er));break}}kc()}function Mm(t,e){const n=Ho.get(t);return n&&n.get(e)}function cr(t){const e=ut(t);return e===t?e:(Xt(e,"iterate",bs),mn(t)?e:e.map(In))}function ua(t){return Xt(t=ut(t),"iterate",bs),t}function Ei(t,e){return pi(t)?Or(tr(t)?In(e):e):In(e)}const Em={__proto__:null,[Symbol.iterator](){return Ia(this,Symbol.iterator,t=>Ei(this,t))},concat(...t){return cr(this).concat(...t.map(e=>Ye(e)?cr(e):e))},entries(){return Ia(this,"entries",t=>(t[1]=Ei(this,t[1]),t))},every(t,e){return qn(this,"every",t,e,void 0,arguments)},filter(t,e){return qn(this,"filter",t,e,n=>n.map(i=>Ei(this,i)),arguments)},find(t,e){return qn(this,"find",t,e,n=>Ei(this,n),arguments)},findIndex(t,e){return qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return qn(this,"findLast",t,e,n=>Ei(this,n),arguments)},findLastIndex(t,e){return qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return La(this,"includes",t)},indexOf(...t){return La(this,"indexOf",t)},join(t){return cr(this).join(t)},lastIndexOf(...t){return La(this,"lastIndexOf",t)},map(t,e){return qn(this,"map",t,e,void 0,arguments)},pop(){return Zr(this,"pop")},push(...t){return Zr(this,"push",t)},reduce(t,...e){return Su(this,"reduce",t,e)},reduceRight(t,...e){return Su(this,"reduceRight",t,e)},shift(){return Zr(this,"shift")},some(t,e){return qn(this,"some",t,e,void 0,arguments)},splice(...t){return Zr(this,"splice",t)},toReversed(){return cr(this).toReversed()},toSorted(t){return cr(this).toSorted(t)},toSpliced(...t){return cr(this).toSpliced(...t)},unshift(...t){return Zr(this,"unshift",t)},values(){return Ia(this,"values",t=>Ei(this,t))}};function Ia(t,e,n){const i=ua(t),r=i[e]();return i!==t&&!mn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const Tm=Array.prototype;function qn(t,e,n,i,r,s){const o=ua(t),a=o!==t&&!mn(t),l=o[e];if(l!==Tm[e]){const d=l.apply(t,s);return a?In(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,Ei(t,d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Su(t,e,n,i){const r=ua(t);let s=n;return r!==t&&(mn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Ei(t,a),l,t)}),r[e](s,...i)}function La(t,e,n){const i=ut(t);Xt(i,"iterate",bs);const r=i[e](...n);return(r===-1||r===!1)&&fa(n[0])?(n[0]=ut(n[0]),i[e](...n)):r}function Zr(t,e,n=[]){fi(),Lc();const i=ut(t)[e].apply(t,n);return kc(),hi(),i}const wm=Cc("__proto__,__v_isRef,__isVue"),Jf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gn));function Am(t){Gn(t)||(t=String(t));const e=ut(this);return Xt(e,"has",t),e.hasOwnProperty(t)}class Qf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Fm:ih:s?nh:th).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!r){let l;if(o&&(l=Em[n]))return l;if(n==="hasOwnProperty")return Am}const a=Reflect.get(e,n,It(e)?e:i);if((Gn(n)?Jf.has(n):wm(n))||(r||Xt(e,"get",n),s))return a;if(It(a)){const l=o&&sa(n)?a:a.value;return r&&gt(l)?Ss(l):l}return gt(a)?r?Ss(a):da(a):a}}class eh extends Qf{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=Ye(e)&&sa(n);if(!this._isShallow){const c=pi(s);if(!mn(i)&&!pi(i)&&(s=ut(s),i=ut(i)),!o&&It(s)&&!It(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:pt(e,n),l=Reflect.set(e,n,i,It(e)?e:r);return e===ut(r)&&(a?Ci(i,s)&&si(e,"set",n,i):si(e,"add",n,i)),l}deleteProperty(e,n){const i=pt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&si(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Gn(n)||!Jf.has(n))&&Xt(e,"has",n),i}ownKeys(e){return Xt(e,"iterate",Ye(e)?"length":er),Reflect.ownKeys(e)}}class Rm extends Qf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Cm=new eh,Pm=new Rm,Dm=new eh(!0);const wl=t=>t,Ys=t=>Reflect.getPrototypeOf(t);function Im(t,e,n){return function(...i){const r=this.__v_raw,s=ut(r),o=Lr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?wl:e?Or:In;return!e&&Xt(s,"iterate",l?Tl:er),Vt(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Ks(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Lm(t,e){const n={get(r){const s=this.__v_raw,o=ut(s),a=ut(r);t||(Ci(r,a)&&Xt(o,"get",r),Xt(o,"get",a));const{has:l}=Ys(o),c=e?wl:t?Or:In;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Xt(ut(r),"iterate",er),r.size},has(r){const s=this.__v_raw,o=ut(s),a=ut(r);return t||(Ci(r,a)&&Xt(o,"has",r),Xt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ut(a),c=e?wl:t?Or:In;return!t&&Xt(l,"iterate",er),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return Vt(n,t?{add:Ks("add"),set:Ks("set"),delete:Ks("delete"),clear:Ks("clear")}:{add(r){!e&&!mn(r)&&!pi(r)&&(r=ut(r));const s=ut(this);return Ys(s).has.call(s,r)||(s.add(r),si(s,"add",r,r)),this},set(r,s){!e&&!mn(s)&&!pi(s)&&(s=ut(s));const o=ut(this),{has:a,get:l}=Ys(o);let c=a.call(o,r);c||(r=ut(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ci(s,u)&&si(o,"set",r,s):si(o,"add",r,s),this},delete(r){const s=ut(this),{has:o,get:a}=Ys(s);let l=o.call(s,r);l||(r=ut(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&si(s,"delete",r,void 0),c},clear(){const r=ut(this),s=r.size!==0,o=r.clear();return s&&si(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Im(r,t,e)}),n}function Nc(t,e){const n=Lm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(pt(n,r)&&r in i?n:i,r,s)}const km={get:Nc(!1,!1)},Um={get:Nc(!1,!0)},Nm={get:Nc(!0,!1)};const th=new WeakMap,nh=new WeakMap,ih=new WeakMap,Fm=new WeakMap;function Om(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zm(t){return t.__v_skip||!Object.isExtensible(t)?0:Om(cm(t))}function da(t){return pi(t)?t:Fc(t,!1,Cm,km,th)}function rh(t){return Fc(t,!1,Dm,Um,nh)}function Ss(t){return Fc(t,!0,Pm,Nm,ih)}function Fc(t,e,n,i,r){if(!gt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=zm(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function tr(t){return pi(t)?tr(t.__v_raw):!!(t&&t.__v_isReactive)}function pi(t){return!!(t&&t.__v_isReadonly)}function mn(t){return!!(t&&t.__v_isShallow)}function fa(t){return t?!!t.__v_raw:!1}function ut(t){const e=t&&t.__v_raw;return e?ut(e):t}function Bm(t){return!pt(t,"__v_skip")&&Object.isExtensible(t)&&Of(t,"__v_skip",!0),t}const In=t=>gt(t)?da(t):t,Or=t=>gt(t)?Ss(t):t;function It(t){return t?t.__v_isRef===!0:!1}function Tt(t){return sh(t,!1)}function nr(t){return sh(t,!0)}function sh(t,e){return It(t)?t:new Hm(t,e)}class Hm{constructor(e,n){this.dep=new ca,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ut(e),this._value=n?e:In(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||mn(e)||pi(e);e=i?e:ut(e),Ci(e,n)&&(this._rawValue=e,this._value=i?e:In(e),this.dep.trigger())}}function q(t){return It(t)?t.value:t}function Vn(t){return Je(t)?t():q(t)}const Vm={get:(t,e,n)=>e==="__v_raw"?t:q(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return It(r)&&!It(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function oh(t){return tr(t)?t:new Proxy(t,Vm)}class Gm{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new ca,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Wm(t){return new Gm(t)}class jm{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=ut(e);let r=!0,s=e;if(!Ye(e)||!sa(String(n)))do r=!fa(s)||mn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=q(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&It(this._raw[this._key])){const n=this._object[this._key];if(It(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Mm(this._raw,this._key)}}class Xm{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function $m(t,e,n){return It(t)?t:Je(t)?new Xm(t):gt(t)&&arguments.length>1?qm(t,e,n):Tt(t)}function qm(t,e,n){return new jm(t,e,n)}class Ym{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ca(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return Xf(this,!0),!0}get value(){const e=this.dep.track();return Yf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Km(t,e,n=!1){let i,r;return Je(t)?i=t:(i=t.get,r=t.set),new Ym(i,r,n)}const Zs={},Vo=new WeakMap;let Xi;function Zm(t,e=!1,n=Xi){if(n){let i=Vo.get(n);i||Vo.set(n,i=[]),i.push(t)}}function Jm(t,e,n=vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=x=>r?x:mn(x)||r===!1||r===0?oi(x,1):oi(x);let u,d,f,p,g=!1,_=!1;if(It(t)?(d=()=>t.value,g=mn(t)):tr(t)?(d=()=>c(t),g=!0):Ye(t)?(_=!0,g=t.some(x=>tr(x)||mn(x)),d=()=>t.map(x=>{if(It(x))return x.value;if(tr(x))return c(x);if(Je(x))return l?l(x,2):x()})):Je(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){fi();try{f()}finally{hi()}}const x=Xi;Xi=u;try{return l?l(t,3,[p]):t(p)}finally{Xi=x}}:d=Hn,e&&r){const x=d,k=r===!0?1/0:r;d=()=>oi(x(),k)}const m=Gf(),h=()=>{u.stop(),m&&m.active&&Dc(m.effects,u)};if(s&&e){const x=e;e=(...k)=>{x(...k),h()}}let M=_?new Array(t.length).fill(Zs):Zs;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const k=u.run();if(r||g||(_?k.some((D,C)=>Ci(D,M[C])):Ci(k,M))){f&&f();const D=Xi;Xi=u;try{const C=[k,M===Zs?void 0:_&&M[0]===Zs?[]:M,p];M=k,l?l(e,3,C):e(...C)}finally{Xi=D}}}else u.run()};return a&&a(E),u=new Wf(d),u.scheduler=o?()=>o(E,!1):E,p=x=>Zm(x,!1,u),f=u.onStop=()=>{const x=Vo.get(u);if(x){if(l)l(x,4);else for(const k of x)k();Vo.delete(u)}},e?i?E(!0):M=u.run():o?o(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function oi(t,e=1/0,n){if(e<=0||!gt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,It(t))oi(t.value,e,n);else if(Ye(t))for(let i=0;i<t.length;i++)oi(t[i],e,n);else if(ra(t)||Lr(t))t.forEach(i=>{oi(i,e,n)});else if(Ff(t)){for(const i in t)oi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&oi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ns(t,e,n,i){try{return i?t(...i):t()}catch(r){ha(r,e,n)}}function Wn(t,e,n,i){if(Je(t)){const r=Ns(t,e,n,i);return r&&Uf(r)&&r.catch(s=>{ha(s,e,n)}),r}if(Ye(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Wn(t[s],e,n,i));return r}}function ha(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(s){fi(),Ns(s,null,10,[t,l,c]),hi();return}}Qm(t,n,r,i,o)}function Qm(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const en=[];let Nn=-1;const kr=[];let Ti=null,wr=0;const ah=Promise.resolve();let Go=null;function pa(t){const e=Go||ah;return t?e.then(this?t.bind(this):t):e}function eg(t){let e=Nn+1,n=en.length;for(;e<n;){const i=e+n>>>1,r=en[i],s=Ms(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Oc(t){if(!(t.flags&1)){const e=Ms(t),n=en[en.length-1];!n||!(t.flags&2)&&e>=Ms(n)?en.push(t):en.splice(eg(e),0,t),t.flags|=1,lh()}}function lh(){Go||(Go=ah.then(uh))}function tg(t){Ye(t)?kr.push(...t):Ti&&t.id===-1?Ti.splice(wr+1,0,t):t.flags&1||(kr.push(t),t.flags|=1),lh()}function Mu(t,e,n=Nn+1){for(;n<en.length;n++){const i=en[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;en.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ch(t){if(kr.length){const e=[...new Set(kr)].sort((n,i)=>Ms(n)-Ms(i));if(kr.length=0,Ti){Ti.push(...e);return}for(Ti=e,wr=0;wr<Ti.length;wr++){const n=Ti[wr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ti=null,wr=0}}const Ms=t=>t.id==null?t.flags&2?-1:1/0:t.id;function uh(t){try{for(Nn=0;Nn<en.length;Nn++){const e=en[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ns(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<en.length;Nn++){const e=en[Nn];e&&(e.flags&=-2)}Nn=-1,en.length=0,ch(),Go=null,(en.length||kr.length)&&uh()}}let hn=null,dh=null;function Wo(t){const e=hn;return hn=t,dh=t&&t.type.__scopeId||null,e}function Pi(t,e=hn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&$o(-1);const s=Wo(e);let o;try{o=t(...r)}finally{Wo(s),i._d&&$o(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Cr(t,e){if(hn===null)return t;const n=xa(hn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=vt]=e[r];s&&(Je(s)&&(s={mounted:s,updated:s}),s.deep&&oi(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Oi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(fi(),Wn(l,n,8,[t.el,a,t,e]),hi())}}function wo(t,e){if(qt){let n=qt.provides;const i=qt.parent&&qt.parent.provides;i===n&&(n=qt.provides=Object.create(i)),n[t]=e}}function gn(t,e,n=!1){const i=Os();if(i||ir){let r=ir?ir._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Je(e)?e.call(i&&i.proxy):e}}function fh(){return!!(Os()||ir)}const ng=Symbol.for("v-scx"),ig=()=>gn(ng);function rg(t,e){return zc(t,null,e)}function _n(t,e,n){return zc(t,e,n)}function zc(t,e,n=vt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Vt({},n),l=e&&i||!e&&s!=="post";let c;if(Ts){if(s==="sync"){const p=ig();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Hn,p.resume=Hn,p.pause=Hn,p}}const u=qt;a.call=(p,g,_)=>Wn(p,u,g,_);let d=!1;s==="post"?a.scheduler=p=>{on(p,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(p,g)=>{g?p():Oc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Jm(t,e,a);return Ts&&(c?c.push(f):l&&f()),f}function sg(t,e,n){const i=this.proxy,r=Lt(t)?t.includes(".")?hh(i,t):()=>i[t]:t.bind(i,i);let s;Je(e)?s=e:(s=e.handler,n=e);const o=zs(this),a=zc(r,s.bind(i),n);return o(),a}function hh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const og=Symbol("_vte"),ag=t=>t.__isTeleport,lg=Symbol("_leaveCb");function Bc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Bc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ft(t,e){return Je(t)?Vt({name:t.name},e,{setup:t}):t}function ph(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Eu(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const jo=new WeakMap;function ps(t,e,n,i,r=!1){if(Ye(t)){t.forEach((_,m)=>ps(_,e&&(Ye(e)?e[m]:e),n,i,r));return}if(ms(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ps(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?xa(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,d=a.setupState,f=ut(d),p=d===vt?kf:_=>Eu(u,_)?!1:pt(f,_),g=(_,m)=>!(m&&Eu(u,m));if(c!=null&&c!==l){if(Tu(e),Lt(c))u[c]=null,p(c)&&(d[c]=null);else if(It(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Je(l))Ns(l,a,12,[o,u]);else{const _=Lt(l),m=It(l);if(_||m){const h=()=>{if(t.f){const M=_?p(l)?d[l]:u[l]:g()||!t.k?l.value:u[t.k];if(r)Ye(M)&&Dc(M,s);else if(Ye(M))M.includes(s)||M.push(s);else if(_)u[l]=[s],p(l)&&(d[l]=u[l]);else{const E=[s];g(l,t.k)&&(l.value=E),t.k&&(u[t.k]=E)}}else _?(u[l]=o,p(l)&&(d[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const M=()=>{h(),jo.delete(t)};M.id=-1,jo.set(t,M),on(M,n)}else Tu(t),h()}}}function Tu(t){const e=jo.get(t);e&&(e.flags|=8,jo.delete(t))}la().requestIdleCallback;la().cancelIdleCallback;const ms=t=>!!t.type.__asyncLoader,mh=t=>t.type.__isKeepAlive;function cg(t,e){gh(t,"a",e)}function ug(t,e){gh(t,"da",e)}function gh(t,e,n=qt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ma(e,i,n),n){let r=n.parent;for(;r&&r.parent;)mh(r.parent.vnode)&&dg(i,e,n,r),r=r.parent}}function dg(t,e,n,i){const r=ma(e,t,i,!0);ga(()=>{Dc(i[e],r)},n)}function ma(t,e,n=qt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{fi();const a=zs(n),l=Wn(e,n,t,o);return a(),hi(),l});return i?r.unshift(s):r.push(s),s}}const gi=t=>(e,n=qt)=>{(!Ts||t==="sp")&&ma(t,(...i)=>e(...i),n)},fg=gi("bm"),kn=gi("m"),hg=gi("bu"),pg=gi("u"),mg=gi("bum"),ga=gi("um"),gg=gi("sp"),_g=gi("rtg"),vg=gi("rtc");function xg(t,e=qt){ma("ec",t,e)}const yg="components";function Fs(t,e){return Sg(yg,t,!0,e)||t}const bg=Symbol.for("v-ndc");function Sg(t,e,n=!0,i=!1){const r=hn||qt;if(r){const s=r.type;{const a=a_(s,!1);if(a&&(a===e||a===Mn(e)||a===aa(Mn(e))))return s}const o=wu(r[t]||s[t],e)||wu(r.appContext[t],e);return!o&&i?s:o}}function wu(t,e){return t&&(t[e]||t[Mn(e)]||t[aa(Mn(e))])}function Ct(t,e,n,i){let r;const s=n,o=Ye(t);if(o||Lt(t)){const a=o&&tr(t);let l=!1,c=!1;a&&(l=!mn(t),c=pi(t),t=ua(t)),r=new Array(t.length);for(let u=0,d=t.length;u<d;u++)r[u]=e(l?c?Or(In(t[u])):In(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(gt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Al=t=>t?Nh(t)?xa(t):Al(t.parent):null,gs=Vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Al(t.parent),$root:t=>Al(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>vh(t),$forceUpdate:t=>t.f||(t.f=()=>{Oc(t.update)}),$nextTick:t=>t.n||(t.n=pa.bind(t.proxy)),$watch:t=>sg.bind(t)}),ka=(t,e)=>t!==vt&&!t.__isScriptSetup&&pt(t,e),Mg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(ka(i,e))return o[e]=1,i[e];if(r!==vt&&pt(r,e))return o[e]=2,r[e];if(pt(s,e))return o[e]=3,s[e];if(n!==vt&&pt(n,e))return o[e]=4,n[e];Rl&&(o[e]=0)}}const c=gs[e];let u,d;if(c)return e==="$attrs"&&Xt(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==vt&&pt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,pt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return ka(r,e)?(r[e]=n,!0):i!==vt&&pt(i,e)?(i[e]=n,!0):pt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==vt&&a[0]!=="$"&&pt(t,a)||ka(e,a)||pt(s,a)||pt(i,a)||pt(gs,a)||pt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Au(t){return Ye(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rl=!0;function Eg(t){const e=vh(t),n=t.proxy,i=t.ctx;Rl=!1,e.beforeCreate&&Ru(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:h,beforeUnmount:M,destroyed:E,unmounted:x,render:k,renderTracked:D,renderTriggered:C,errorCaptured:F,serverPrefetch:w,expose:b,inheritAttrs:I,components:W,directives:V,filters:de}=e;if(c&&Tg(c,i,null),o)for(const j in o){const O=o[j];Je(O)&&(i[j]=O.bind(n))}if(r){const j=r.call(n,n);gt(j)&&(t.data=da(j))}if(Rl=!0,s)for(const j in s){const O=s[j],be=Je(O)?O.bind(n,n):Je(O.get)?O.get.bind(n,n):Hn,z=!Je(O)&&Je(O.set)?O.set.bind(n):Hn,Le=ct({get:be,set:z});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>Le.value,set:pe=>Le.value=pe})}if(a)for(const j in a)_h(a[j],i,n,j);if(l){const j=Je(l)?l.call(n):l;Reflect.ownKeys(j).forEach(O=>{wo(O,j[O])})}u&&Ru(u,t,"c");function H(j,O){Ye(O)?O.forEach(be=>j(be.bind(n))):O&&j(O.bind(n))}if(H(fg,d),H(kn,f),H(hg,p),H(pg,g),H(cg,_),H(ug,m),H(xg,F),H(vg,D),H(_g,C),H(mg,M),H(ga,x),H(gg,w),Ye(b))if(b.length){const j=t.exposed||(t.exposed={});b.forEach(O=>{Object.defineProperty(j,O,{get:()=>n[O],set:be=>n[O]=be,enumerable:!0})})}else t.exposed||(t.exposed={});k&&t.render===Hn&&(t.render=k),I!=null&&(t.inheritAttrs=I),W&&(t.components=W),V&&(t.directives=V),w&&ph(t)}function Tg(t,e,n=Hn){Ye(t)&&(t=Cl(t));for(const i in t){const r=t[i];let s;gt(r)?"default"in r?s=gn(r.from||i,r.default,!0):s=gn(r.from||i):s=gn(r),It(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Ru(t,e,n){Wn(Ye(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function _h(t,e,n,i){let r=i.includes(".")?hh(n,i):()=>n[i];if(Lt(t)){const s=e[t];Je(s)&&_n(r,s)}else if(Je(t))_n(r,t.bind(n));else if(gt(t))if(Ye(t))t.forEach(s=>_h(s,e,n,i));else{const s=Je(t.handler)?t.handler.bind(n):e[t.handler];Je(s)&&_n(r,s,t)}}function vh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Xo(l,c,o,!0)),Xo(l,e,o)),gt(e)&&s.set(e,l),l}function Xo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Xo(t,s,n,!0),r&&r.forEach(o=>Xo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=wg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const wg={data:Cu,props:Pu,emits:Pu,methods:ls,computed:ls,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:ls,directives:ls,watch:Rg,provide:Cu,inject:Ag};function Cu(t,e){return e?t?function(){return Vt(Je(t)?t.call(this,this):t,Je(e)?e.call(this,this):e)}:e:t}function Ag(t,e){return ls(Cl(t),Cl(e))}function Cl(t){if(Ye(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Zt(t,e){return t?[...new Set([].concat(t,e))]:e}function ls(t,e){return t?Vt(Object.create(null),t,e):e}function Pu(t,e){return t?Ye(t)&&Ye(e)?[...new Set([...t,...e])]:Vt(Object.create(null),Au(t),Au(e??{})):e}function Rg(t,e){if(!t)return e;if(!e)return t;const n=Vt(Object.create(null),t);for(const i in e)n[i]=Zt(t[i],e[i]);return n}function xh(){return{app:null,config:{isNativeTag:kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cg=0;function Pg(t,e){return function(i,r=null){Je(i)||(i=Vt({},i)),r!=null&&!gt(r)&&(r=null);const s=xh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Cg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:c_,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&Je(u.install)?(o.add(u),u.install(c,...d)):Je(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||we(i,r);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),t(p,u,f),l=!0,c._container=u,u.__vue_app__=c,xa(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Wn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=ir;ir=c;try{return u()}finally{ir=d}}};return c}}let ir=null;const Dg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Mn(e)}Modifiers`]||t[`${ar(e)}Modifiers`];function Ig(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||vt;let r=n;const s=e.startsWith("update:"),o=s&&Dg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Lt(u)?u.trim():u)),o.number&&(r=n.map(Ic)));let a,l=i[a=Ca(e)]||i[a=Ca(Mn(e))];!l&&s&&(l=i[a=Ca(ar(e))]),l&&Wn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wn(c,t,6,r)}}const Lg=new WeakMap;function yh(t,e,n=!1){const i=n?Lg:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Je(t)){const l=c=>{const u=yh(c,e,!0);u&&(a=!0,Vt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(gt(t)&&i.set(t,null),null):(Ye(s)?s.forEach(l=>o[l]=null):Vt(o,s),gt(t)&&i.set(t,o),o)}function _a(t,e){return!t||!ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(t,e[0].toLowerCase()+e.slice(1))||pt(t,ar(e))||pt(t,e))}function Du(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:g,inheritAttrs:_}=t,m=Wo(t);let h,M;try{if(n.shapeFlag&4){const x=r||i,k=x;h=Fn(c.call(k,x,u,d,p,f,g)),M=a}else{const x=e;h=Fn(x.length>1?x(d,{attrs:a,slots:o,emit:l}):x(d,null)),M=e.props?a:kg(a)}}catch(x){_s.length=0,ha(x,t,1),h=we(Li)}let E=h;if(M&&_!==!1){const x=Object.keys(M),{shapeFlag:k}=E;x.length&&k&7&&(s&&x.some(Pc)&&(M=Ug(M,s)),E=zr(E,M,!1,!0))}return n.dirs&&(E=zr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Bc(E,n.transition),h=E,Wo(m),h}const kg=t=>{let e;for(const n in t)(n==="class"||n==="style"||ia(n))&&((e||(e={}))[n]=t[n]);return e},Ug=(t,e)=>{const n={};for(const i in t)(!Pc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Ng(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Iu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(bh(o,i,f)&&!_a(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Iu(i,o,c):!0:!!o;return!1}function Iu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(bh(e,t,s)&&!_a(n,s))return!0}return!1}function bh(t,e,n){const i=t[n],r=e[n];return n==="style"&&gt(i)&&gt(r)?!Us(i,r):i!==r}function Fg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Sh={},Mh=()=>Object.create(Sh),Eh=t=>Object.getPrototypeOf(t)===Sh;function Og(t,e,n,i=!1){const r={},s=Mh();t.propsDefaults=Object.create(null),Th(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:rh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function zg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ut(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(_a(t.emitsOptions,f))continue;const p=e[f];if(l)if(pt(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=Mn(f);r[g]=Pl(l,a,g,p,t,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Th(t,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!pt(e,d)&&((u=ar(d))===d||!pt(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Pl(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!pt(e,d))&&(delete s[d],c=!0)}c&&si(t.attrs,"set","")}function Th(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ds(l))continue;const c=e[l];let u;r&&pt(r,u=Mn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:_a(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ut(n),c=a||vt;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Pl(r,l,d,c[d],t,!pt(c,d))}}return o}function Pl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=zs(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ar(n))&&(i=!0))}return i}const Bg=new WeakMap;function wh(t,e,n=!1){const i=n?Bg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Je(t)){const u=d=>{l=!0;const[f,p]=wh(d,e,!0);Vt(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return gt(t)&&i.set(t,Ir),Ir;if(Ye(s))for(let u=0;u<s.length;u++){const d=Mn(s[u]);Lu(d)&&(o[d]=vt)}else if(s)for(const u in s){const d=Mn(u);if(Lu(d)){const f=s[u],p=o[d]=Ye(f)||Je(f)?{type:f}:Vt({},f),g=p.type;let _=!1,m=!0;if(Ye(g))for(let h=0;h<g.length;++h){const M=g[h],E=Je(M)&&M.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=Je(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||pt(p,"default"))&&a.push(d)}}const c=[o,a];return gt(t)&&i.set(t,c),c}function Lu(t){return t[0]!=="$"&&!ds(t)}const Hc=t=>t==="_"||t==="_ctx"||t==="$stable",Vc=t=>Ye(t)?t.map(Fn):[Fn(t)],Hg=(t,e,n)=>{if(e._n)return e;const i=Pi((...r)=>Vc(e(...r)),n);return i._c=!1,i},Ah=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Hc(r))continue;const s=t[r];if(Je(s))e[r]=Hg(r,s,i);else if(s!=null){const o=Vc(s);e[r]=()=>o}}},Rh=(t,e)=>{const n=Vc(e);t.slots.default=()=>n},Ch=(t,e,n)=>{for(const i in e)(n||!Hc(i))&&(t[i]=e[i])},Vg=(t,e,n)=>{const i=t.slots=Mh();if(t.vnode.shapeFlag&32){const r=e._;r?(Ch(i,e,n),n&&Of(i,"_",r,!0)):Ah(e,i)}else e&&Rh(t,e)},Gg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Ch(r,e,n):(s=!e.$stable,Ah(e,r)),o=e}else e&&(Rh(t,e),o={default:1});if(s)for(const a in r)!Hc(a)&&o[a]==null&&delete r[a]},on=qg;function Wg(t){return jg(t)}function jg(t,e){const n=la();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Hn,insertStaticContent:g}=t,_=(A,P,y,ae=null,ee=null,Z=null,oe=void 0,me=null,ne=!!P.dynamicChildren)=>{if(A===P)return;A&&!Jr(A,P)&&(ae=B(A),pe(A,ee,Z,!0),A=null),P.patchFlag===-2&&(ne=!1,P.dynamicChildren=null);const{type:S,ref:v,shapeFlag:L}=P;switch(S){case va:m(A,P,y,ae);break;case Li:h(A,P,y,ae);break;case Ao:A==null&&M(P,y,ae,oe);break;case mt:W(A,P,y,ae,ee,Z,oe,me,ne);break;default:L&1?k(A,P,y,ae,ee,Z,oe,me,ne):L&6?V(A,P,y,ae,ee,Z,oe,me,ne):(L&64||L&128)&&S.process(A,P,y,ae,ee,Z,oe,me,ne,_e)}v!=null&&ee?ps(v,A&&A.ref,Z,P||A,!P):v==null&&A&&A.ref!=null&&ps(A.ref,null,Z,A,!0)},m=(A,P,y,ae)=>{if(A==null)i(P.el=a(P.children),y,ae);else{const ee=P.el=A.el;P.children!==A.children&&c(ee,P.children)}},h=(A,P,y,ae)=>{A==null?i(P.el=l(P.children||""),y,ae):P.el=A.el},M=(A,P,y,ae)=>{[A.el,A.anchor]=g(A.children,P,y,ae,A.el,A.anchor)},E=({el:A,anchor:P},y,ae)=>{let ee;for(;A&&A!==P;)ee=f(A),i(A,y,ae),A=ee;i(P,y,ae)},x=({el:A,anchor:P})=>{let y;for(;A&&A!==P;)y=f(A),r(A),A=y;r(P)},k=(A,P,y,ae,ee,Z,oe,me,ne)=>{if(P.type==="svg"?oe="svg":P.type==="math"&&(oe="mathml"),A==null)D(P,y,ae,ee,Z,oe,me,ne);else{const S=A.el&&A.el._isVueCE?A.el:null;try{S&&S._beginPatch(),w(A,P,ee,Z,oe,me,ne)}finally{S&&S._endPatch()}}},D=(A,P,y,ae,ee,Z,oe,me)=>{let ne,S;const{props:v,shapeFlag:L,transition:X,dirs:Q}=A;if(ne=A.el=o(A.type,Z,v&&v.is,v),L&8?u(ne,A.children):L&16&&F(A.children,ne,null,ae,ee,Ua(A,Z),oe,me),Q&&Oi(A,null,ae,"created"),C(ne,A,A.scopeId,oe,ae),v){for(const Ee in v)Ee!=="value"&&!ds(Ee)&&s(ne,Ee,null,v[Ee],Z,ae);"value"in v&&s(ne,"value",null,v.value,Z),(S=v.onVnodeBeforeMount)&&Un(S,ae,A)}Q&&Oi(A,null,ae,"beforeMount");const K=Xg(ee,X);K&&X.beforeEnter(ne),i(ne,P,y),((S=v&&v.onVnodeMounted)||K||Q)&&on(()=>{S&&Un(S,ae,A),K&&X.enter(ne),Q&&Oi(A,null,ae,"mounted")},ee)},C=(A,P,y,ae,ee)=>{if(y&&p(A,y),ae)for(let Z=0;Z<ae.length;Z++)p(A,ae[Z]);if(ee){let Z=ee.subTree;if(P===Z||Lh(Z.type)&&(Z.ssContent===P||Z.ssFallback===P)){const oe=ee.vnode;C(A,oe,oe.scopeId,oe.slotScopeIds,ee.parent)}}},F=(A,P,y,ae,ee,Z,oe,me,ne=0)=>{for(let S=ne;S<A.length;S++){const v=A[S]=me?ri(A[S]):Fn(A[S]);_(null,v,P,y,ae,ee,Z,oe,me)}},w=(A,P,y,ae,ee,Z,oe)=>{const me=P.el=A.el;let{patchFlag:ne,dynamicChildren:S,dirs:v}=P;ne|=A.patchFlag&16;const L=A.props||vt,X=P.props||vt;let Q;if(y&&zi(y,!1),(Q=X.onVnodeBeforeUpdate)&&Un(Q,y,P,A),v&&Oi(P,A,y,"beforeUpdate"),y&&zi(y,!0),(L.innerHTML&&X.innerHTML==null||L.textContent&&X.textContent==null)&&u(me,""),S?b(A.dynamicChildren,S,me,y,ae,Ua(P,ee),Z):oe||O(A,P,me,null,y,ae,Ua(P,ee),Z,!1),ne>0){if(ne&16)I(me,L,X,y,ee);else if(ne&2&&L.class!==X.class&&s(me,"class",null,X.class,ee),ne&4&&s(me,"style",L.style,X.style,ee),ne&8){const K=P.dynamicProps;for(let Ee=0;Ee<K.length;Ee++){const ge=K[Ee],Ne=L[ge],ze=X[ge];(ze!==Ne||ge==="value")&&s(me,ge,Ne,ze,ee,y)}}ne&1&&A.children!==P.children&&u(me,P.children)}else!oe&&S==null&&I(me,L,X,y,ee);((Q=X.onVnodeUpdated)||v)&&on(()=>{Q&&Un(Q,y,P,A),v&&Oi(P,A,y,"updated")},ae)},b=(A,P,y,ae,ee,Z,oe)=>{for(let me=0;me<P.length;me++){const ne=A[me],S=P[me],v=ne.el&&(ne.type===mt||!Jr(ne,S)||ne.shapeFlag&198)?d(ne.el):y;_(ne,S,v,null,ae,ee,Z,oe,!0)}},I=(A,P,y,ae,ee)=>{if(P!==y){if(P!==vt)for(const Z in P)!ds(Z)&&!(Z in y)&&s(A,Z,P[Z],null,ee,ae);for(const Z in y){if(ds(Z))continue;const oe=y[Z],me=P[Z];oe!==me&&Z!=="value"&&s(A,Z,me,oe,ee,ae)}"value"in y&&s(A,"value",P.value,y.value,ee)}},W=(A,P,y,ae,ee,Z,oe,me,ne)=>{const S=P.el=A?A.el:a(""),v=P.anchor=A?A.anchor:a("");let{patchFlag:L,dynamicChildren:X,slotScopeIds:Q}=P;Q&&(me=me?me.concat(Q):Q),A==null?(i(S,y,ae),i(v,y,ae),F(P.children||[],y,v,ee,Z,oe,me,ne)):L>0&&L&64&&X&&A.dynamicChildren&&A.dynamicChildren.length===X.length?(b(A.dynamicChildren,X,y,ee,Z,oe,me),(P.key!=null||ee&&P===ee.subTree)&&Ph(A,P,!0)):O(A,P,y,v,ee,Z,oe,me,ne)},V=(A,P,y,ae,ee,Z,oe,me,ne)=>{P.slotScopeIds=me,A==null?P.shapeFlag&512?ee.ctx.activate(P,y,ae,oe,ne):de(P,y,ae,ee,Z,oe,ne):Y(A,P,ne)},de=(A,P,y,ae,ee,Z,oe)=>{const me=A.component=n_(A,ae,ee);if(mh(A)&&(me.ctx.renderer=_e),i_(me,!1,oe),me.asyncDep){if(ee&&ee.registerDep(me,H,oe),!A.el){const ne=me.subTree=we(Li);h(null,ne,P,y),A.placeholder=ne.el}}else H(me,A,P,y,ee,Z,oe)},Y=(A,P,y)=>{const ae=P.component=A.component;if(Ng(A,P,y))if(ae.asyncDep&&!ae.asyncResolved){j(ae,P,y);return}else ae.next=P,ae.update();else P.el=A.el,ae.vnode=P},H=(A,P,y,ae,ee,Z,oe)=>{const me=()=>{if(A.isMounted){let{next:L,bu:X,u:Q,parent:K,vnode:Ee}=A;{const Re=Dh(A);if(Re){L&&(L.el=Ee.el,j(A,L,oe)),Re.asyncDep.then(()=>{on(()=>{A.isUnmounted||S()},ee)});return}}let ge=L,Ne;zi(A,!1),L?(L.el=Ee.el,j(A,L,oe)):L=Ee,X&&To(X),(Ne=L.props&&L.props.onVnodeBeforeUpdate)&&Un(Ne,K,L,Ee),zi(A,!0);const ze=Du(A),xe=A.subTree;A.subTree=ze,_(xe,ze,d(xe.el),B(xe),A,ee,Z),L.el=ze.el,ge===null&&Fg(A,ze.el),Q&&on(Q,ee),(Ne=L.props&&L.props.onVnodeUpdated)&&on(()=>Un(Ne,K,L,Ee),ee)}else{let L;const{el:X,props:Q}=P,{bm:K,m:Ee,parent:ge,root:Ne,type:ze}=A,xe=ms(P);zi(A,!1),K&&To(K),!xe&&(L=Q&&Q.onVnodeBeforeMount)&&Un(L,ge,P),zi(A,!0);{Ne.ce&&Ne.ce._hasShadowRoot()&&Ne.ce._injectChildStyle(ze);const Re=A.subTree=Du(A);_(null,Re,y,ae,A,ee,Z),P.el=Re.el}if(Ee&&on(Ee,ee),!xe&&(L=Q&&Q.onVnodeMounted)){const Re=P;on(()=>Un(L,ge,Re),ee)}(P.shapeFlag&256||ge&&ms(ge.vnode)&&ge.vnode.shapeFlag&256)&&A.a&&on(A.a,ee),A.isMounted=!0,P=y=ae=null}};A.scope.on();const ne=A.effect=new Wf(me);A.scope.off();const S=A.update=ne.run.bind(ne),v=A.job=ne.runIfDirty.bind(ne);v.i=A,v.id=A.uid,ne.scheduler=()=>Oc(v),zi(A,!0),S()},j=(A,P,y)=>{P.component=A;const ae=A.vnode.props;A.vnode=P,A.next=null,zg(A,P.props,ae,y),Gg(A,P.children,y),fi(),Mu(A),hi()},O=(A,P,y,ae,ee,Z,oe,me,ne=!1)=>{const S=A&&A.children,v=A?A.shapeFlag:0,L=P.children,{patchFlag:X,shapeFlag:Q}=P;if(X>0){if(X&128){z(S,L,y,ae,ee,Z,oe,me,ne);return}else if(X&256){be(S,L,y,ae,ee,Z,oe,me,ne);return}}Q&8?(v&16&&ye(S,ee,Z),L!==S&&u(y,L)):v&16?Q&16?z(S,L,y,ae,ee,Z,oe,me,ne):ye(S,ee,Z,!0):(v&8&&u(y,""),Q&16&&F(L,y,ae,ee,Z,oe,me,ne))},be=(A,P,y,ae,ee,Z,oe,me,ne)=>{A=A||Ir,P=P||Ir;const S=A.length,v=P.length,L=Math.min(S,v);let X;for(X=0;X<L;X++){const Q=P[X]=ne?ri(P[X]):Fn(P[X]);_(A[X],Q,y,null,ee,Z,oe,me,ne)}S>v?ye(A,ee,Z,!0,!1,L):F(P,y,ae,ee,Z,oe,me,ne,L)},z=(A,P,y,ae,ee,Z,oe,me,ne)=>{let S=0;const v=P.length;let L=A.length-1,X=v-1;for(;S<=L&&S<=X;){const Q=A[S],K=P[S]=ne?ri(P[S]):Fn(P[S]);if(Jr(Q,K))_(Q,K,y,null,ee,Z,oe,me,ne);else break;S++}for(;S<=L&&S<=X;){const Q=A[L],K=P[X]=ne?ri(P[X]):Fn(P[X]);if(Jr(Q,K))_(Q,K,y,null,ee,Z,oe,me,ne);else break;L--,X--}if(S>L){if(S<=X){const Q=X+1,K=Q<v?P[Q].el:ae;for(;S<=X;)_(null,P[S]=ne?ri(P[S]):Fn(P[S]),y,K,ee,Z,oe,me,ne),S++}}else if(S>X)for(;S<=L;)pe(A[S],ee,Z,!0),S++;else{const Q=S,K=S,Ee=new Map;for(S=K;S<=X;S++){const Ae=P[S]=ne?ri(P[S]):Fn(P[S]);Ae.key!=null&&Ee.set(Ae.key,S)}let ge,Ne=0;const ze=X-K+1;let xe=!1,Re=0;const Ge=new Array(ze);for(S=0;S<ze;S++)Ge[S]=0;for(S=Q;S<=L;S++){const Ae=A[S];if(Ne>=ze){pe(Ae,ee,Z,!0);continue}let U;if(Ae.key!=null)U=Ee.get(Ae.key);else for(ge=K;ge<=X;ge++)if(Ge[ge-K]===0&&Jr(Ae,P[ge])){U=ge;break}U===void 0?pe(Ae,ee,Z,!0):(Ge[U-K]=S+1,U>=Re?Re=U:xe=!0,_(Ae,P[U],y,null,ee,Z,oe,me,ne),Ne++)}const Xe=xe?$g(Ge):Ir;for(ge=Xe.length-1,S=ze-1;S>=0;S--){const Ae=K+S,U=P[Ae],ce=P[Ae+1],Ce=Ae+1<v?ce.el||Ih(ce):ae;Ge[S]===0?_(null,U,y,Ce,ee,Z,oe,me,ne):xe&&(ge<0||S!==Xe[ge]?Le(U,y,Ce,2):ge--)}}},Le=(A,P,y,ae,ee=null)=>{const{el:Z,type:oe,transition:me,children:ne,shapeFlag:S}=A;if(S&6){Le(A.component.subTree,P,y,ae);return}if(S&128){A.suspense.move(P,y,ae);return}if(S&64){oe.move(A,P,y,_e);return}if(oe===mt){i(Z,P,y);for(let L=0;L<ne.length;L++)Le(ne[L],P,y,ae);i(A.anchor,P,y);return}if(oe===Ao){E(A,P,y);return}if(ae!==2&&S&1&&me)if(ae===0)me.beforeEnter(Z),i(Z,P,y),on(()=>me.enter(Z),ee);else{const{leave:L,delayLeave:X,afterLeave:Q}=me,K=()=>{A.ctx.isUnmounted?r(Z):i(Z,P,y)},Ee=()=>{Z._isLeaving&&Z[lg](!0),L(Z,()=>{K(),Q&&Q()})};X?X(Z,K,Ee):Ee()}else i(Z,P,y)},pe=(A,P,y,ae=!1,ee=!1)=>{const{type:Z,props:oe,ref:me,children:ne,dynamicChildren:S,shapeFlag:v,patchFlag:L,dirs:X,cacheIndex:Q}=A;if(L===-2&&(ee=!1),me!=null&&(fi(),ps(me,null,y,A,!0),hi()),Q!=null&&(P.renderCache[Q]=void 0),v&256){P.ctx.deactivate(A);return}const K=v&1&&X,Ee=!ms(A);let ge;if(Ee&&(ge=oe&&oe.onVnodeBeforeUnmount)&&Un(ge,P,A),v&6)ve(A.component,y,ae);else{if(v&128){A.suspense.unmount(y,ae);return}K&&Oi(A,null,P,"beforeUnmount"),v&64?A.type.remove(A,P,y,_e,ae):S&&!S.hasOnce&&(Z!==mt||L>0&&L&64)?ye(S,P,y,!1,!0):(Z===mt&&L&384||!ee&&v&16)&&ye(ne,P,y),ae&&Fe(A)}(Ee&&(ge=oe&&oe.onVnodeUnmounted)||K)&&on(()=>{ge&&Un(ge,P,A),K&&Oi(A,null,P,"unmounted")},y)},Fe=A=>{const{type:P,el:y,anchor:ae,transition:ee}=A;if(P===mt){re(y,ae);return}if(P===Ao){x(A);return}const Z=()=>{r(y),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(A.shapeFlag&1&&ee&&!ee.persisted){const{leave:oe,delayLeave:me}=ee,ne=()=>oe(y,Z);me?me(A.el,Z,ne):ne()}else Z()},re=(A,P)=>{let y;for(;A!==P;)y=f(A),r(A),A=y;r(P)},ve=(A,P,y)=>{const{bum:ae,scope:ee,job:Z,subTree:oe,um:me,m:ne,a:S}=A;ku(ne),ku(S),ae&&To(ae),ee.stop(),Z&&(Z.flags|=8,pe(oe,A,P,y)),me&&on(me,P),on(()=>{A.isUnmounted=!0},P)},ye=(A,P,y,ae=!1,ee=!1,Z=0)=>{for(let oe=Z;oe<A.length;oe++)pe(A[oe],P,y,ae,ee)},B=A=>{if(A.shapeFlag&6)return B(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const P=f(A.anchor||A.el),y=P&&P[og];return y?f(y):P};let le=!1;const he=(A,P,y)=>{let ae;A==null?P._vnode&&(pe(P._vnode,null,null,!0),ae=P._vnode.component):_(P._vnode||null,A,P,null,null,null,y),P._vnode=A,le||(le=!0,Mu(ae),ch(),le=!1)},_e={p:_,um:pe,m:Le,r:Fe,mt:de,mc:F,pc:O,pbc:b,n:B,o:t};return{render:he,hydrate:void 0,createApp:Pg(he)}}function Ua({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ph(t,e,n=!1){const i=t.children,r=e.children;if(Ye(i)&&Ye(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ri(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Ph(o,a)),a.type===va&&(a.patchFlag===-1&&(a=r[s]=ri(a)),a.el=o.el),a.type===Li&&!a.el&&(a.el=o.el)}}function $g(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Dh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dh(e)}function ku(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Ih(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Ih(e.subTree):null}const Lh=t=>t.__isSuspense;function qg(t,e){e&&e.pendingBranch?Ye(t)?e.effects.push(...t):e.effects.push(t):tg(t)}const mt=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),Li=Symbol.for("v-cmt"),Ao=Symbol.for("v-stc"),_s=[];let pn=null;function Te(t=!1){_s.push(pn=t?null:[])}function Yg(){_s.pop(),pn=_s[_s.length-1]||null}let Es=1;function $o(t,e=!1){Es+=t,t<0&&pn&&e&&(pn.hasOnce=!0)}function kh(t){return t.dynamicChildren=Es>0?pn||Ir:null,Yg(),Es>0&&pn&&pn.push(t),t}function ke(t,e,n,i,r,s){return kh(R(t,e,n,i,r,s,!0))}function $t(t,e,n,i,r){return kh(we(t,e,n,i,r,!0))}function qo(t){return t?t.__v_isVNode===!0:!1}function Jr(t,e){return t.type===e.type&&t.key===e.key}const Uh=({key:t})=>t??null,Ro=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Lt(t)||It(t)||Je(t)?{i:hn,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,i=0,r=null,s=t===mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Uh(e),ref:e&&Ro(e),scopeId:dh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:hn};return a?(Gc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Lt(n)?8:16),Es>0&&!o&&pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&pn.push(l),l}const we=Kg;function Kg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===bg)&&(t=Li),qo(t)){const a=zr(t,e,!0);return n&&Gc(a,n),Es>0&&!s&&pn&&(a.shapeFlag&6?pn[pn.indexOf(t)]=a:pn.push(a)),a.patchFlag=-2,a}if(l_(t)&&(t=t.__vccOpts),e){e=Zg(e);let{class:a,style:l}=e;a&&!Lt(a)&&(e.class=an(a)),gt(l)&&(fa(l)&&!Ye(l)&&(l=Vt({},l)),e.style=ks(l))}const o=Lt(t)?1:Lh(t)?128:ag(t)?64:gt(t)?4:Je(t)?2:0;return R(t,e,n,i,r,o,s,!0)}function Zg(t){return t?fa(t)||Eh(t)?Vt({},t):t:null}function zr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Qg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Uh(c),ref:e&&e.ref?n&&s?Ye(s)?s.concat(Ro(e)):[s,Ro(e)]:Ro(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Bc(u,l.clone(u)),u}function bt(t=" ",e=0){return we(va,null,t,e)}function Jg(t,e){const n=we(Ao,null,t);return n.staticCount=e,n}function wt(t="",e=!1){return e?(Te(),$t(Li,null,t)):we(Li,null,t)}function Fn(t){return t==null||typeof t=="boolean"?we(Li):Ye(t)?we(mt,null,t.slice()):qo(t)?ri(t):we(va,null,String(t))}function ri(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function Gc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ye(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Gc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Eh(e)?e._ctx=hn:r===3&&hn&&(hn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:hn},n=32):(e=String(e),i&64?(n=16,e=[bt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=an([e.class,i.class]));else if(r==="style")e.style=ks([e.style,i.style]);else if(ia(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ye(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Un(t,e,n,i=null){Wn(t,e,7,[n,i])}const e_=xh();let t_=0;function n_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||e_,s={uid:t_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wh(i,r),emitsOptions:yh(i,r),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ig.bind(null,s),t.ce&&t.ce(s),s}let qt=null;const Os=()=>qt||hn;let Yo,Dl;{const t=la(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Yo=e("__VUE_INSTANCE_SETTERS__",n=>qt=n),Dl=e("__VUE_SSR_SETTERS__",n=>Ts=n)}const zs=t=>{const e=qt;return Yo(t),t.scope.on(),()=>{t.scope.off(),Yo(e)}},Uu=()=>{qt&&qt.scope.off(),Yo(null)};function Nh(t){return t.vnode.shapeFlag&4}let Ts=!1;function i_(t,e=!1,n=!1){e&&Dl(e);const{props:i,children:r}=t.vnode,s=Nh(t);Og(t,i,s,e),Vg(t,r,n||e);const o=s?r_(t,e):void 0;return e&&Dl(!1),o}function r_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Mg);const{setup:i}=n;if(i){fi();const r=t.setupContext=i.length>1?o_(t):null,s=zs(t),o=Ns(i,t,0,[t.props,r]),a=Uf(o);if(hi(),s(),(a||t.sp)&&!ms(t)&&ph(t),a){if(o.then(Uu,Uu),e)return o.then(l=>{Nu(t,l)}).catch(l=>{ha(l,t,0)});t.asyncDep=o}else Nu(t,o)}else Fh(t)}function Nu(t,e,n){Je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:gt(e)&&(t.setupState=oh(e)),Fh(t)}function Fh(t,e,n){const i=t.type;t.render||(t.render=i.render||Hn);{const r=zs(t);fi();try{Eg(t)}finally{hi(),r()}}}const s_={get(t,e){return Xt(t,"get",""),t[e]}};function o_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,s_),slots:t.slots,emit:t.emit,expose:e}}function xa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(oh(Bm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)},has(e,n){return n in e||n in gs}})):t.proxy}function a_(t,e=!0){return Je(t)?t.displayName||t.name:t.name||e&&t.__name}function l_(t){return Je(t)&&"__vccOpts"in t}const ct=(t,e)=>Km(t,e,Ts);function Ko(t,e,n){try{$o(-1);const i=arguments.length;return i===2?gt(e)&&!Ye(e)?qo(e)?we(t,null,[e]):we(t,e):we(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&qo(n)&&(n=[n]),we(t,e,n))}finally{$o(1)}}const c_="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Il;const Fu=typeof window<"u"&&window.trustedTypes;if(Fu)try{Il=Fu.createPolicy("vue",{createHTML:t=>t})}catch{}const Oh=Il?t=>Il.createHTML(t):t=>t,u_="http://www.w3.org/2000/svg",d_="http://www.w3.org/1998/Math/MathML",ii=typeof document<"u"?document:null,Ou=ii&&ii.createElement("template"),f_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ii.createElementNS(u_,t):e==="mathml"?ii.createElementNS(d_,t):n?ii.createElement(t,{is:n}):ii.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ii.createTextNode(t),createComment:t=>ii.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ii.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Ou.innerHTML=Oh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Ou.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},h_=Symbol("_vtc");function p_(t,e,n){const i=t[h_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Zo=Symbol("_vod"),zh=Symbol("_vsh"),zu={name:"show",beforeMount(t,{value:e},{transition:n}){t[Zo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Qr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Qr(t,!0),i.enter(t)):i.leave(t,()=>{Qr(t,!1)}):Qr(t,e))},beforeUnmount(t,{value:e}){Qr(t,e)}};function Qr(t,e){t.style.display=e?t[Zo]:"none",t[zh]=!e}const m_=Symbol(""),g_=/(?:^|;)\s*display\s*:/;function __(t,e,n){const i=t.style,r=Lt(n);let s=!1;if(n&&!r){if(e)if(Lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Co(i,a,"")}else for(const o in e)n[o]==null&&Co(i,o,"");for(const o in n)o==="display"&&(s=!0),Co(i,o,n[o])}else if(r){if(e!==n){const o=i[m_];o&&(n+=";"+o),i.cssText=n,s=g_.test(n)}}else e&&t.removeAttribute("style");Zo in t&&(t[Zo]=s?i.display:"",t[zh]&&(i.display="none"))}const Bu=/\s*!important$/;function Co(t,e,n){if(Ye(n))n.forEach(i=>Co(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=v_(t,e);Bu.test(n)?t.setProperty(ar(i),n.replace(Bu,""),"important"):t[i]=n}}const Hu=["Webkit","Moz","ms"],Na={};function v_(t,e){const n=Na[e];if(n)return n;let i=Mn(e);if(i!=="filter"&&i in t)return Na[e]=i;i=aa(i);for(let r=0;r<Hu.length;r++){const s=Hu[r]+i;if(s in t)return Na[e]=s}return e}const Vu="http://www.w3.org/1999/xlink";function Gu(t,e,n,i,r,s=_m(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Vu,e.slice(6,e.length)):t.setAttributeNS(Vu,e,n):n==null||s&&!zf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Gn(n)?String(n):n)}function Wu(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Oh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=zf(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function qi(t,e,n,i){t.addEventListener(e,n,i)}function x_(t,e,n,i){t.removeEventListener(e,n,i)}const ju=Symbol("_vei");function y_(t,e,n,i,r=null){const s=t[ju]||(t[ju]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=b_(e);if(i){const c=s[e]=E_(i,r);qi(t,a,c,l)}else o&&(x_(t,a,o,l),s[e]=void 0)}}const Xu=/(?:Once|Passive|Capture)$/;function b_(t){let e;if(Xu.test(t)){e={};let i;for(;i=t.match(Xu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ar(t.slice(2)),e]}let Fa=0;const S_=Promise.resolve(),M_=()=>Fa||(S_.then(()=>Fa=0),Fa=Date.now());function E_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Wn(T_(i,n.value),e,5,[i])};return n.value=t,n.attached=M_(),n}function T_(t,e){if(Ye(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const $u=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,w_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?p_(t,i,o):e==="style"?__(t,n,i):ia(e)?Pc(e)||y_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):A_(t,e,i,o))?(Wu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gu(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Lt(i))?Wu(t,Mn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Gu(t,e,i,o))};function A_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&$u(e)&&Je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $u(e)&&Lt(n)?!1:e in t}const Jo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ye(e)?n=>To(e,n):e};function R_(t){t.target.composing=!0}function qu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ur=Symbol("_assign");function Yu(t,e,n){return e&&(t=t.trim()),n&&(t=Ic(t)),t}const Oa={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Ur]=Jo(r);const s=i||r.props&&r.props.type==="number";qi(t,e?"change":"input",o=>{o.target.composing||t[Ur](Yu(t.value,n,s))}),(n||s)&&qi(t,"change",()=>{t.value=Yu(t.value,n,s)}),e||(qi(t,"compositionstart",R_),qi(t,"compositionend",qu),qi(t,"change",qu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Ur]=Jo(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Ic(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},C_={deep:!0,created(t,e,n){t[Ur]=Jo(n),qi(t,"change",()=>{const i=t._modelValue,r=P_(t),s=t.checked,o=t[Ur];if(Ye(i)){const a=Bf(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(ra(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(Bh(t,s))})},mounted:Ku,beforeUpdate(t,e,n){t[Ur]=Jo(n),Ku(t,e,n)}};function Ku(t,{value:e,oldValue:n},i){t._modelValue=e;let r;if(Ye(e))r=Bf(e,i.props.value)>-1;else if(ra(e))r=e.has(i.props.value);else{if(e===n)return;r=Us(e,Bh(t,!0))}t.checked!==r&&(t.checked=r)}function P_(t){return"_value"in t?t._value:t.value}function Bh(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const D_=["ctrl","shift","alt","meta"],I_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>D_.some(n=>t[`${n}Key`]&&!e.includes(n))},L_=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=I_[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},k_=Vt({patchProp:w_},f_);let Zu;function U_(){return Zu||(Zu=Wg(k_))}const N_=((...t)=>{const e=U_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=O_(i);if(!r)return;const s=e._component;!Je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,F_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function F_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function O_(t){return Lt(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ar=typeof document<"u";function Hh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function z_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Hh(t.default)}const ht=Object.assign;function za(t,e){const n={};for(const i in e){const r=e[i];n[i]=Ln(r)?r.map(t):t(r)}return n}const vs=()=>{},Ln=Array.isArray;function Ju(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const Vh=/#/g,B_=/&/g,H_=/\//g,V_=/=/g,G_=/\?/g,Gh=/\+/g,W_=/%5B/g,j_=/%5D/g,Wh=/%5E/g,X_=/%60/g,jh=/%7B/g,$_=/%7C/g,Xh=/%7D/g,q_=/%20/g;function Wc(t){return t==null?"":encodeURI(""+t).replace($_,"|").replace(W_,"[").replace(j_,"]")}function Y_(t){return Wc(t).replace(jh,"{").replace(Xh,"}").replace(Wh,"^")}function Ll(t){return Wc(t).replace(Gh,"%2B").replace(q_,"+").replace(Vh,"%23").replace(B_,"%26").replace(X_,"`").replace(jh,"{").replace(Xh,"}").replace(Wh,"^")}function K_(t){return Ll(t).replace(V_,"%3D")}function Z_(t){return Wc(t).replace(Vh,"%23").replace(G_,"%3F")}function J_(t){return Z_(t).replace(H_,"%2F")}function ws(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Q_=/\/$/,ev=t=>t.replace(Q_,"");function Ba(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=t(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=rv(i??e,n),{fullPath:i+s+o,path:i,query:r,hash:ws(o)}}function tv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nv(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Br(e.matched[i],n.matched[r])&&$h(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Br(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $h(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!iv(t[n],e[n]))return!1;return!0}function iv(t,e){return Ln(t)?ed(t,e):Ln(e)?ed(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function ed(t,e){return Ln(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function rv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const _i={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let kl=(function(t){return t.pop="pop",t.push="push",t})({}),Ha=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function sv(t){if(!t)if(Ar){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ev(t)}const ov=/^[^#]+#/;function av(t,e){return t.replace(ov,"#")+e}function lv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ya=()=>({left:window.scrollX,top:window.scrollY});function cv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=lv(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function td(t,e){return(history.state?history.state.position-e:-1)+t}const Ul=new Map;function uv(t,e){Ul.set(t,e)}function dv(t){const e=Ul.get(t);return Ul.delete(t),e}function fv(t){return typeof t=="string"||t&&typeof t=="object"}function qh(t){return typeof t=="string"||typeof t=="symbol"}let Et=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Yh=Symbol("");Et.MATCHER_NOT_FOUND+"",Et.NAVIGATION_GUARD_REDIRECT+"",Et.NAVIGATION_ABORTED+"",Et.NAVIGATION_CANCELLED+"",Et.NAVIGATION_DUPLICATED+"";function Hr(t,e){return ht(new Error,{type:t,[Yh]:!0},e)}function Yn(t,e){return t instanceof Error&&Yh in t&&(e==null||!!(t.type&e))}const hv=["params","query","hash"];function pv(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of hv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function mv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(Gh," "),s=r.indexOf("="),o=ws(s<0?r:r.slice(0,s)),a=s<0?null:ws(r.slice(s+1));if(o in e){let l=e[o];Ln(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function nd(t){let e="";for(let n in t){const i=t[n];if(n=K_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ln(i)?i.map(r=>r&&Ll(r)):[i&&Ll(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function gv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Ln(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const _v=Symbol(""),id=Symbol(""),ba=Symbol(""),jc=Symbol(""),Nl=Symbol("");function es(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Hr(Et.NAVIGATION_ABORTED,{from:n,to:e})):f instanceof Error?l(f):fv(f)?l(Hr(Et.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Va(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Hh(l)){const c=(l.__vccOpts||l)[e];c&&s.push(wi(c,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=z_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&wi(f,n,i,o,a,r)()}))}}return s}function vv(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Br(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Br(c,l))||r.push(l))}return[n,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let xv=()=>location.protocol+"//"+location.host;function Kh(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Qu(a,"")}return Qu(n,t)+i+r}function yv(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const p=Kh(t,location),g=n.value,_=e.value;let m=0;if(f){if(n.value=p,e.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else i(p);r.forEach(h=>{h(n.value,g,{delta:m,type:kl.pop,direction:m?m>0?Ha.forward:Ha.back:Ha.unknown})})};function l(){o=n.value}function c(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(ht({},f.state,{scroll:ya()}),"")}}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function rd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ya():null}}function bv(t){const{history:e,location:n}=window,i={value:Kh(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:xv()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){s(l,ht({},e.state,rd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=ht({},r.value,e.state,{forward:l,scroll:ya()});s(u.current,u,!0),s(l,ht({},rd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Sv(t){t=sv(t);const e=bv(t),n=yv(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ht({location:"",base:t,go:i,createHref:av.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Zi=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var kt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(kt||{});const Mv={type:Zi.Static,value:""},Ev=/[a-zA-Z0-9_]/;function Tv(t){if(!t)return[[]];if(t==="/")return[[Mv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=kt.Static,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){c&&(n===kt.Static?s.push({type:Zi.Static,value:c}):n===kt.Param||n===kt.ParamRegExp||n===kt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Zi.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==kt.ParamRegExp){i=n,n=kt.EscapeNext;continue}switch(n){case kt.Static:l==="/"?(c&&d(),o()):l===":"?(d(),n=kt.Param):f();break;case kt.EscapeNext:f(),n=i;break;case kt.Param:l==="("?n=kt.ParamRegExp:Ev.test(l)?f():(d(),n=kt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case kt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=kt.ParamRegExpEnd:u+=l;break;case kt.ParamRegExpEnd:d(),n=kt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===kt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}const sd="[^/]+?",wv={sensitive:!1,strict:!1,start:!0,end:!0};var Qt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Qt||{});const Av=/[.+*?^${}()[\]/\\]/g;function Rv(t,e){const n=ht({},wv,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[Qt.Root];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=Qt.Segment+(n.sensitive?Qt.BonusCaseSensitive:0);if(f.type===Zi.Static)d||(r+="/"),r+=f.value.replace(Av,"\\$&"),p+=Qt.Static;else if(f.type===Zi.Param){const{value:g,repeatable:_,optional:m,regexp:h}=f;s.push({name:g,repeatable:_,optional:m});const M=h||sd;if(M!==sd){p+=Qt.BonusCustomRegExp;try{`${M}`}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+x.message)}}let E=_?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,p+=Qt.Dynamic,m&&(p+=Qt.BonusOptional),_&&(p+=Qt.BonusRepeatable),M===".*"&&(p+=Qt.BonusWildcard)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Qt.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=s[f-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===Zi.Static)u+=p.value;else if(p.type===Zi.Param){const{value:g,repeatable:_,optional:m}=p,h=g in c?c[g]:"";if(Ln(h)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=Ln(h)?h.join("/"):h;if(!M)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Cv(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Qt.Static+Qt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Qt.Static+Qt.Segment?1:-1:0}function Zh(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=Cv(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(od(i))return 1;if(od(r))return-1}return r.length-i.length}function od(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pv={strict:!1,end:!0,sensitive:!1};function Dv(t,e,n){const i=Rv(Tv(t.path),n),r=ht(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Iv(t,e){const n=[],i=new Map;e=Ju(Pv,e);function r(d){return i.get(d)}function s(d,f,p){const g=!p,_=ld(d);_.aliasOf=p&&p.record;const m=Ju(e,d),h=[_];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const k of x)h.push(ld(ht({},_,{components:p?p.record.components:_.components,path:k,aliasOf:p?p.record:_})))}let M,E;for(const x of h){const{path:k}=x;if(f&&k[0]!=="/"){const D=f.record.path,C=D[D.length-1]==="/"?"":"/";x.path=f.record.path+(k&&C+k)}if(M=Dv(x,f,m),p?p.alias.push(M):(E=E||M,E!==M&&E.alias.push(M),g&&d.name&&!cd(M)&&o(d.name)),Jh(M)&&l(M),_.children){const D=_.children;for(let C=0;C<D.length;C++)s(D[C],M,p&&p.children[C])}p=p||M}return E?()=>{o(E)}:vs}function o(d){if(qh(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=Uv(d,n);n.splice(f,0,d),d.record.name&&!cd(d)&&i.set(d.record.name,d)}function c(d,f){let p,g={},_,m;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw Hr(Et.MATCHER_NOT_FOUND,{location:d});m=p.record.name,g=ht(ad(f.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&ad(d.params,p.keys.map(E=>E.name))),_=p.stringify(g)}else if(d.path!=null)_=d.path,p=n.find(E=>E.re.test(_)),p&&(g=p.parse(_),m=p.record.name);else{if(p=f.name?i.get(f.name):n.find(E=>E.re.test(f.path)),!p)throw Hr(Et.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=p.record.name,g=ht({},f.params,d.params),_=p.stringify(g)}const h=[];let M=p;for(;M;)h.unshift(M.record),M=M.parent;return{name:m,path:_,params:g,matched:h,meta:kv(h)}}t.forEach(d=>s(d));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function ad(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function ld(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Lv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Lv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function cd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function kv(t){return t.reduce((e,n)=>ht(e,n.meta),{})}function Uv(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Zh(t,e[s])<0?i=s:n=s+1}const r=Nv(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function Nv(t){let e=t;for(;e=e.parent;)if(Jh(e)&&Zh(t,e)===0)return e}function Jh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ud(t){const e=gn(ba),n=gn(jc),i=ct(()=>{const l=q(t.to);return e.resolve(l)}),r=ct(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Br.bind(null,u));if(f>-1)return f;const p=dd(l[c-2]);return c>1&&dd(u)===p&&d[d.length-1].path!==p?d.findIndex(Br.bind(null,l[c-2])):f}),s=ct(()=>r.value>-1&&Hv(n.params,i.value.params)),o=ct(()=>r.value>-1&&r.value===n.matched.length-1&&$h(n.params,i.value.params));function a(l={}){if(Bv(l)){const c=e[q(t.replace)?"replace":"push"](q(t.to)).catch(vs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ct(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function Fv(t){return t.length===1?t[0]:t}const Ov=Ft({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ud,setup(t,{slots:e}){const n=da(ud(t)),{options:i}=gn(ba),r=ct(()=>({[fd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[fd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&Fv(e.default(n));return t.custom?s:Ko("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),zv=Ov;function Bv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Hv(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Ln(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function dd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fd=(t,e,n)=>t??e??n,Vv=Ft({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=gn(Nl),r=ct(()=>t.route||i.value),s=gn(id,0),o=ct(()=>{let c=q(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=ct(()=>r.value.matched[o.value]);wo(id,ct(()=>o.value+1)),wo(_v,a),wo(Nl,r);const l=Tt();return _n(()=>[l.value,a.value,t.name],([c,u,d],[f,p,g])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Br(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return hd(n.default,{Component:f,route:c});const p=d.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Ko(f,ht({},g,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return hd(n.default,{Component:m,route:c})||m}}});function hd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gv=Vv;function Wv(t){const e=Iv(t.routes,t),n=t.parseQuery||mv,i=t.stringifyQuery||nd,r=t.history,s=es(),o=es(),a=es(),l=nr(_i);let c=_i;Ar&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=za.bind(null,B=>""+B),d=za.bind(null,J_),f=za.bind(null,ws);function p(B,le){let he,_e;return qh(B)?(he=e.getRecordMatcher(B),_e=le):_e=B,e.addRoute(_e,he)}function g(B){const le=e.getRecordMatcher(B);le&&e.removeRoute(le)}function _(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function h(B,le){if(le=ht({},le||l.value),typeof B=="string"){const y=Ba(n,B,le.path),ae=e.resolve({path:y.path},le),ee=r.createHref(y.fullPath);return ht(y,ae,{params:f(ae.params),hash:ws(y.hash),redirectedFrom:void 0,href:ee})}let he;if(B.path!=null)he=ht({},B,{path:Ba(n,B.path,le.path).path});else{const y=ht({},B.params);for(const ae in y)y[ae]==null&&delete y[ae];he=ht({},B,{params:d(y)}),le.params=d(le.params)}const _e=e.resolve(he,le),He=B.hash||"";_e.params=u(f(_e.params));const A=tv(i,ht({},B,{hash:Y_(He),path:_e.path})),P=r.createHref(A);return ht({fullPath:A,hash:He,query:i===nd?gv(B.query):B.query||{}},_e,{redirectedFrom:void 0,href:P})}function M(B){return typeof B=="string"?Ba(n,B,l.value.path):ht({},B)}function E(B,le){if(c!==B)return Hr(Et.NAVIGATION_CANCELLED,{from:le,to:B})}function x(B){return C(B)}function k(B){return x(ht(M(B),{replace:!0}))}function D(B,le){const he=B.matched[B.matched.length-1];if(he&&he.redirect){const{redirect:_e}=he;let He=typeof _e=="function"?_e(B,le):_e;return typeof He=="string"&&(He=He.includes("?")||He.includes("#")?He=M(He):{path:He},He.params={}),ht({query:B.query,hash:B.hash,params:He.path!=null?{}:B.params},He)}}function C(B,le){const he=c=h(B),_e=l.value,He=B.state,A=B.force,P=B.replace===!0,y=D(he,_e);if(y)return C(ht(M(y),{state:typeof y=="object"?ht({},He,y.state):He,force:A,replace:P}),le||he);const ae=he;ae.redirectedFrom=le;let ee;return!A&&nv(i,_e,he)&&(ee=Hr(Et.NAVIGATION_DUPLICATED,{to:ae,from:_e}),Le(_e,_e,!0,!1)),(ee?Promise.resolve(ee):b(ae,_e)).catch(Z=>Yn(Z)?Yn(Z,Et.NAVIGATION_GUARD_REDIRECT)?Z:z(Z):O(Z,ae,_e)).then(Z=>{if(Z){if(Yn(Z,Et.NAVIGATION_GUARD_REDIRECT))return C(ht({replace:P},M(Z.to),{state:typeof Z.to=="object"?ht({},He,Z.to.state):He,force:A}),le||ae)}else Z=W(ae,_e,!0,P,He);return I(ae,_e,Z),Z})}function F(B,le){const he=E(B,le);return he?Promise.reject(he):Promise.resolve()}function w(B){const le=re.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(B):B()}function b(B,le){let he;const[_e,He,A]=vv(B,le);he=Va(_e.reverse(),"beforeRouteLeave",B,le);for(const y of _e)y.leaveGuards.forEach(ae=>{he.push(wi(ae,B,le))});const P=F.bind(null,B,le);return he.push(P),ye(he).then(()=>{he=[];for(const y of s.list())he.push(wi(y,B,le));return he.push(P),ye(he)}).then(()=>{he=Va(He,"beforeRouteUpdate",B,le);for(const y of He)y.updateGuards.forEach(ae=>{he.push(wi(ae,B,le))});return he.push(P),ye(he)}).then(()=>{he=[];for(const y of A)if(y.beforeEnter)if(Ln(y.beforeEnter))for(const ae of y.beforeEnter)he.push(wi(ae,B,le));else he.push(wi(y.beforeEnter,B,le));return he.push(P),ye(he)}).then(()=>(B.matched.forEach(y=>y.enterCallbacks={}),he=Va(A,"beforeRouteEnter",B,le,w),he.push(P),ye(he))).then(()=>{he=[];for(const y of o.list())he.push(wi(y,B,le));return he.push(P),ye(he)}).catch(y=>Yn(y,Et.NAVIGATION_CANCELLED)?y:Promise.reject(y))}function I(B,le,he){a.list().forEach(_e=>w(()=>_e(B,le,he)))}function W(B,le,he,_e,He){const A=E(B,le);if(A)return A;const P=le===_i,y=Ar?history.state:{};he&&(_e||P?r.replace(B.fullPath,ht({scroll:P&&y&&y.scroll},He)):r.push(B.fullPath,He)),l.value=B,Le(B,le,he,P),z()}let V;function de(){V||(V=r.listen((B,le,he)=>{if(!ve.listening)return;const _e=h(B),He=D(_e,ve.currentRoute.value);if(He){C(ht(He,{replace:!0,force:!0}),_e).catch(vs);return}c=_e;const A=l.value;Ar&&uv(td(A.fullPath,he.delta),ya()),b(_e,A).catch(P=>Yn(P,Et.NAVIGATION_ABORTED|Et.NAVIGATION_CANCELLED)?P:Yn(P,Et.NAVIGATION_GUARD_REDIRECT)?(C(ht(M(P.to),{force:!0}),_e).then(y=>{Yn(y,Et.NAVIGATION_ABORTED|Et.NAVIGATION_DUPLICATED)&&!he.delta&&he.type===kl.pop&&r.go(-1,!1)}).catch(vs),Promise.reject()):(he.delta&&r.go(-he.delta,!1),O(P,_e,A))).then(P=>{P=P||W(_e,A,!1),P&&(he.delta&&!Yn(P,Et.NAVIGATION_CANCELLED)?r.go(-he.delta,!1):he.type===kl.pop&&Yn(P,Et.NAVIGATION_ABORTED|Et.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),I(_e,A,P)}).catch(vs)}))}let Y=es(),H=es(),j;function O(B,le,he){z(B);const _e=H.list();return _e.length?_e.forEach(He=>He(B,le,he)):console.error(B),Promise.reject(B)}function be(){return j&&l.value!==_i?Promise.resolve():new Promise((B,le)=>{Y.add([B,le])})}function z(B){return j||(j=!B,de(),Y.list().forEach(([le,he])=>B?he(B):le()),Y.reset()),B}function Le(B,le,he,_e){const{scrollBehavior:He}=t;if(!Ar||!He)return Promise.resolve();const A=!he&&dv(td(B.fullPath,0))||(_e||!he)&&history.state&&history.state.scroll||null;return pa().then(()=>He(B,le,A)).then(P=>P&&cv(P)).catch(P=>O(P,B,le))}const pe=B=>r.go(B);let Fe;const re=new Set,ve={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:h,options:t,push:x,replace:k,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:be,install(B){B.component("RouterLink",zv),B.component("RouterView",Gv),B.config.globalProperties.$router=ve,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>q(l)}),Ar&&!Fe&&l.value===_i&&(Fe=!0,x(r.location).catch(_e=>{}));const le={};for(const _e in _i)Object.defineProperty(le,_e,{get:()=>l.value[_e],enumerable:!0});B.provide(ba,ve),B.provide(jc,rh(le)),B.provide(Nl,l);const he=B.unmount;re.add(B),B.unmount=function(){re.delete(B),re.size<1&&(c=_i,V&&V(),V=null,l.value=_i,Fe=!1,j=!1),he()}}};function ye(B){return B.reduce((le,he)=>le.then(()=>w(he)),Promise.resolve())}return ve}function Xc(){return gn(ba)}function Bs(t){return gn(jc)}function jv(t){return Gf()?(ym(t),!0):!1}const Ga=new WeakMap,Xv=(...t)=>{var e;const n=t[0],i=(e=Os())==null?void 0:e.proxy;if(i==null&&!fh())throw new Error("injectLocal must be called in setup");return i&&Ga.has(i)&&n in Ga.get(i)?Ga.get(i)[n]:gn(...t)},$v=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const qv=Object.prototype.toString,Yv=t=>qv.call(t)==="[object Object]",Kv=()=>{};function Zv(t,e){function n(...i){return new Promise((r,s)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return n}const Qh=t=>t();function Jv(t=Qh,e={}){const{initialState:n="active"}=e,i=ep(n==="active");function r(){i.value=!1}function s(){i.value=!0}return{isActive:Ss(i),pause:r,resume:s,eventFilter:(...a)=>{i.value&&t(...a)}}}function pd(t){return t.endsWith("rem")?Number.parseFloat(t)*16:Number.parseFloat(t)}function Qv(t){return Os()}function Wa(t){return Array.isArray(t)?t:[t]}function ep(...t){if(t.length!==1)return $m(...t);const e=t[0];return typeof e=="function"?Ss(Wm(()=>({get:e,set:Kv}))):Tt(e)}function e0(t,e,n={}){const{eventFilter:i=Qh,...r}=n;return _n(t,Zv(i,e),r)}function t0(t,e,n={}){const{eventFilter:i,initialState:r="active",...s}=n,{eventFilter:o,pause:a,resume:l,isActive:c}=Jv(i,{initialState:r});return{stop:e0(t,e,{...s,eventFilter:o}),pause:a,resume:l,isActive:c}}function tp(t,e=!0,n){Qv()?kn(t,n):e?t():pa(t)}function n0(t=!1,e={}){const{truthyValue:n=!0,falsyValue:i=!1}=e,r=It(t),s=nr(t);function o(a){if(arguments.length)return s.value=a,s.value;{const l=Vn(n);return s.value=s.value===l?Vn(i):l,s.value}}return r?o:[s,o]}function i0(t,e,n){return _n(t,e,{...n,immediate:!0})}const As=$v?window:void 0;function np(t){var e;const n=Vn(t);return(e=n==null?void 0:n.$el)!=null?e:n}function Fl(...t){const e=[],n=()=>{e.forEach(a=>a()),e.length=0},i=(a,l,c,u)=>(a.addEventListener(l,c,u),()=>a.removeEventListener(l,c,u)),r=ct(()=>{const a=Wa(Vn(t[0])).filter(l=>l!=null);return a.every(l=>typeof l!="string")?a:void 0}),s=i0(()=>{var a,l;return[(l=(a=r.value)==null?void 0:a.map(c=>np(c)))!=null?l:[As].filter(c=>c!=null),Wa(Vn(r.value?t[1]:t[0])),Wa(q(r.value?t[2]:t[1])),Vn(r.value?t[3]:t[2])]},([a,l,c,u])=>{if(n(),!(a!=null&&a.length)||!(l!=null&&l.length)||!(c!=null&&c.length))return;const d=Yv(u)?{...u}:u;e.push(...a.flatMap(f=>l.flatMap(p=>c.map(g=>i(f,p,g,d)))))},{flush:"post"}),o=()=>{s(),n()};return jv(n),o}function r0(){const t=nr(!1),e=Os();return e&&kn(()=>{t.value=!0},e),t}function s0(t){const e=r0();return ct(()=>(e.value,!!t()))}const o0=Symbol("vueuse-ssr-width");function a0(){const t=fh()?Xv(o0,null):null;return typeof t=="number"?t:void 0}function l0(t,e={}){const{window:n=As,ssrWidth:i=a0()}=e,r=s0(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),s=nr(typeof i=="number"),o=nr(),a=nr(!1),l=c=>{a.value=c.matches};return rg(()=>{if(s.value){s.value=!r.value;const c=Vn(t).split(",");a.value=c.some(u=>{const d=u.includes("not all"),f=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),p=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let g=!!(f||p);return f&&g&&(g=i>=pd(f[1])),p&&g&&(g=i<=pd(p[1])),d?!g:g});return}r.value&&(o.value=n.matchMedia(Vn(t)),a.value=o.value.matches)}),Fl(o,"change",l,{passive:!0}),ct(()=>a.value)}const Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qs="__vueuse_ssr_handlers__",c0=u0();function u0(){return Qs in Js||(Js[Qs]=Js[Qs]||{}),Js[Qs]}function ip(t,e){return c0[t]||e}function d0(t){return l0("(prefers-color-scheme: dark)",t)}function f0(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const h0={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},md="vueuse-storage";function p0(t,e,n,i={}){var r;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=As,eventFilter:f,onError:p=I=>{console.error(I)},initOnMounted:g}=i,_=(u?nr:Tt)(typeof e=="function"?e():e),m=ct(()=>Vn(t));if(!n)try{n=ip("getDefaultStorage",()=>{var I;return(I=As)==null?void 0:I.localStorage})()}catch(I){p(I)}if(!n)return _;const h=Vn(e),M=f0(h),E=(r=i.serializer)!=null?r:h0[M],{pause:x,resume:k}=t0(_,()=>C(_.value),{flush:s,deep:o,eventFilter:f});_n(m,()=>w(),{flush:s}),d&&a&&tp(()=>{n instanceof Storage?Fl(d,"storage",w,{passive:!0}):Fl(d,md,b),g&&w()}),g||w();function D(I,W){if(d){const V={key:m.value,oldValue:I,newValue:W,storageArea:n};d.dispatchEvent(n instanceof Storage?new StorageEvent("storage",V):new CustomEvent(md,{detail:V}))}}function C(I){try{const W=n.getItem(m.value);if(I==null)D(W,null),n.removeItem(m.value);else{const V=E.write(I);W!==V&&(n.setItem(m.value,V),D(W,V))}}catch(W){p(W)}}function F(I){const W=I?I.newValue:n.getItem(m.value);if(W==null)return l&&h!=null&&n.setItem(m.value,E.write(h)),h;if(!I&&c){const V=E.read(W);return typeof c=="function"?c(V,h):M==="object"&&!Array.isArray(V)?{...h,...V}:V}else return typeof W!="string"?W:E.read(W)}function w(I){if(!(I&&I.storageArea!==n)){if(I&&I.key==null){_.value=h;return}if(!(I&&I.key!==m.value)){x();try{(I==null?void 0:I.newValue)!==E.write(_.value)&&(_.value=F(I))}catch(W){p(W)}finally{I?pa(k):k()}}}}function b(I){w(I.detail)}return _}const m0="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function g0(t={}){const{selector:e="html",attribute:n="class",initialValue:i="auto",window:r=As,storage:s,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},f=d0({window:r}),p=ct(()=>f.value?"dark":"light"),g=l||(o==null?ep(i):p0(o,i,s,{window:r,listenToStorageChanges:a})),_=ct(()=>g.value==="auto"?p.value:g.value),m=ip("updateHTMLAttrs",(x,k,D)=>{const C=typeof x=="string"?r==null?void 0:r.document.querySelector(x):np(x);if(!C)return;const F=new Set,w=new Set;let b=null;if(k==="class"){const W=D.split(/\s/g);Object.values(d).flatMap(V=>(V||"").split(/\s/g)).filter(Boolean).forEach(V=>{W.includes(V)?F.add(V):w.add(V)})}else b={key:k,value:D};if(F.size===0&&w.size===0&&b===null)return;let I;u&&(I=r.document.createElement("style"),I.appendChild(document.createTextNode(m0)),r.document.head.appendChild(I));for(const W of F)C.classList.add(W);for(const W of w)C.classList.remove(W);b&&C.setAttribute(b.key,b.value),u&&(r.getComputedStyle(I).opacity,document.head.removeChild(I))});function h(x){var k;m(e,n,(k=d[x])!=null?k:x)}function M(x){t.onChanged?t.onChanged(x,h):h(x)}_n(_,M,{flush:"post",immediate:!0}),tp(()=>M(_.value));const E=ct({get(){return c?g.value:_.value},set(x){g.value=x}});return Object.assign(E,{store:g,system:p,state:_})}function rp(t={}){const{valueDark:e="dark",valueLight:n=""}=t,i=g0({...t,onChanged:(o,a)=>{var l;t.onChanged?(l=t.onChanged)==null||l.call(t,o==="dark",a,o):a(o)},modes:{dark:e,light:n}}),r=ct(()=>i.system.value);return ct({get(){return i.value==="dark"},set(o){const a=o?"dark":"light";r.value===a?i.value="auto":i.value=a}})}const _0="David | Portfolio",v0={greeting:"Hi, I'm",name:"David",role:["Software Developer","System Administrator"],learnMore:"Learn More",contactMe:"Contact Me"},x0={title:"About Me",content:`I have always been attracted to technology and the freedom to create, so development has become my main focus. Whether it's backend systems, databases or full applications, I always strive to create clean, efficient and scalable solutions.

I am currently studying Computer Science at University of Debrecen to further my knowledge in software development. Previously, I obtained a qualification in IT systems management at DSZC Mechwart, where I also gained insight into the world of networking and server management. This background allows me to think not only at the code level, but also to focus on the efficient operation of the infrastructure and systems.

I am motivated by continuous development and new challenges, so I am always looking for projects where creativity, precision and deep technical knowledge are required. If you'd like to collaborate, feel free to contact me!`,cv:"Check my CV"},y0={title:"Education",items:[{institution:"DSZC Mechwart",degree:"High School Diploma",startYear:2019,endYear:2023,description:"Vocational high school training where I obtained a high school diploma. During the training, I learned about the operation of computers and networks, as well as the basics of system administration."},{institution:"DSZC Mechwart",degree:"IT System Administrator (54 481 06)",startYear:2023,endYear:2024,description:"Specialized in Windows/Linux server configuration, Cisco networking and system administration."},{institution:"University of Debrecen, Faculty of Informatics",degree:"Bsc Computer Science",startYear:2024,endYear:null,description:"Currently pursuing a degree in Computer Science."}],present:"Present"},b0={title:"Skills",certifications:"Certifications",certInfo:"Click on the certificate name to open it.",certCategories:["All","Networking","Development","IT"]},S0={title:"Featured Projects",description:"Here are some of my recent projects. Visit the projects page to see my complete portfolio.",viewProject:"View Project",viewAll:"View All Projects",page:{title:"Projects",subtitle:"Here are some of the projects I've worked on. You can filter them by type, technology or click on a project to see more details.",noProjects:"No projects found",noItemsFound:"No projects match the selected filter. Try selecting a different technology.",all:"All",projectTypes:["Development","3D Modeling"],links:"Links"},card:"View Details",details:{backTo:{projects:"Back to Projects",models:"Back to Models"},projectOverview:"Project Overview",features:"Features",demo:"Live Demo"},viewSource:"View Source Code",viewDemo:"View Live Demo",modelDetails:{specifications:{title:"Specifications",dimensions:"Dimensions",volume:"Volume"},printSettings:{title:"Recommended Print Settings",layerHeight:"Layer Height",infill:"Infill",printTime:"Estimated Print Time"},download:"Download STL",controls:{title:"3D Controls",rotate:"Left click + drag to rotate",move:"Right click + drag to move",zoom:"Scroll to zoom in/out"},touchControls:{title:"3D Touch Controls",rotate:"Touch and drag to rotate",move:"Two-finger drag to move",zoom:"Pinch to zoom in/out"},viewIn3D:"View in 3D",mobileNav:["Info","3D View"]}},M0={title:"Get In Touch",info:"Contact Information",email:"Email",github:"GitHub",linkedin:"LinkedIn",facebook:"Facebook"},E0=[{text:"About",link:"/#about"},{text:"Education",link:"/#education"},{text:"Skills",link:"/#skills"},{text:"Projects",link:"/projects"},{text:"Contact",link:"/#contact"}],T0={text:"Made with lots of 💖 and some ☕."},w0={title:"Send a Message",name:"Name",email:"Email",message:"Message",success:"Your message has been sent successfully!",sending:"Sending...",send:"Send Message",privacyConsent:"I consent to the processing of my data for the purpose of contacting you.",privacyError:"Please accept the data processing."},A0={title:_0,hero:v0,about:x0,education:y0,skills:b0,projects:S0,contact:M0,navItems:E0,footer:T0,contactForm:w0},R0="David | Portfolio",C0={greeting:"Hallo, ich bin",name:"David",role:["Softwareentwickler","Systemadministrator"],learnMore:"Mehr erfahren",contactMe:"Kontaktiere mich"},P0={title:"Über mich",content:`Ich war schon immer von Technologie und der Freiheit, etwas zu erschaffen, angezogen, weshalb die Entwicklung zu meinem Hauptschwerpunkt geworden ist. Egal, ob es sich um Backend-Systeme, Datenbanken oder vollständige Anwendungen handelt, ich bin immer bestrebt, saubere, effiziente und skalierbare Lösungen zu schaffen.

Ich studiere derzeit Informatik an der Universität Debrecen, um meine Kenntnisse in der Softwareentwicklung zu vertiefen. Zuvor habe ich am DSZC Mechwart eine Qualifikation in IT-Systemmanagement erworben, wo ich auch Einblicke in die Welt der Netzwerke und des Servermanagements erhielt. Dieser Hintergrund ermöglicht es mir, nicht nur auf der Code-Ebene zu denken, sondern mich auch auf den effizienten Betrieb der Infrastruktur und der Systeme zu konzentrieren.

Ich bin motiviert durch kontinuierliche Entwicklung und neue Herausforderungen, daher bin ich immer auf der Suche nach Projekten, bei denen Kreativität, Präzision und tiefes technisches Wissen gefragt sind. Wenn Sie mit mir zusammenarbeiten möchten, kontaktieren Sie mich!`,cv:"Mein Lebenslauf"},D0={title:"Ausbildung",items:[{institution:"DSZC Mechwart",degree:"Abitur",startYear:2019,endYear:2023,description:"Berufliches Gymnasium, in dem ich das Abitur erworben habe. Während der Ausbildung habe ich die Funktionsweise von Computern und Netzwerken sowie die Grundlagen der Systemadministration kennengelernt."},{institution:"DSZC Mechwart",degree:"IT-Systemadministrator (54 481 06)",startYear:2023,endYear:2024,description:"Spezialisiert auf Windows/Linux-Serverkonfiguration, Cisco-Netzwerke und Systemadministration."},{institution:"Universität Debrecen, Fakultät für Informatik",degree:"Bsc Informatik",startYear:2024,endYear:null,description:"Derzeit studiere ich Informatik."}],present:"Derzeit"},I0={title:"Kompetenzen",certifications:"Zertifikate",certInfo:"Klicken Sie auf den Namen des Zertifikats, um es zu öffnen.",certCategories:["Alle","Netzwerke","Entwicklung","IT"]},L0={title:"Ausgewählte Projekte",description:"Hier sind einige meiner neuesten Projekte. Besuchen Sie die Projektseite, um mein vollständiges Portfolio zu sehen.",viewProject:"Projekt ansehen",viewAll:"Alle Projekte ansehen",page:{title:"Projekte",subtitle:"Hier sind einige der Projekte, an denen ich gearbeitet habe. Sie können sie nach Typ, Technologie filtern oder auf ein Projekt klicken, um weitere Details zu sehen.",noProjects:"Keine Projekte gefunden",noItemsFound:"Keine Projekte entsprechen dem ausgewählten Filter. Versuchen Sie, eine andere Technologie auszuwählen.",all:"Alle",projectTypes:["Entwicklung","3D Modellierung"],links:"Verweise"},card:"Details anzeigen",details:{backTo:{projects:"Zurück zu den Projekten",models:"Zurück zu den Modellen"},projectOverview:"Projektübersicht",features:"Funktionen",demo:"Live-Demo"},viewSource:"Quellcode ansehen",viewDemo:"Live-Demo ansehen",modelDetails:{specifications:{title:"Spezifikationen",dimensions:"Abmessungen",volume:"Volumen"},printSettings:{title:"Empfohlene Druckeinstellungen",layerHeight:"Schichthöhe",infill:"Füllung",printTime:"Geschätzte Druckzeit"},download:"STL herunterladen",controls:{title:"3D-Steuerungen",rotate:"Linksklick + ziehen zum Drehen",move:"Rechtsklick + ziehen zum Bewegen",zoom:"Scrollen zum Vergrößern/Verkleinern"},touchControls:{title:"Touch-Steuerungen",rotate:"Tippen und ziehen zum Drehen",move:"Zwei Finger tippen und ziehen zum Bewegen",zoom:"Zwei Finger zusammenziehen/auseinanderziehen zum Zoomen"},viewIn3D:"In 3D ansehen",mobileNav:["Info","3D Ansicht"]}},k0={title:"Kontakt",info:"Kontaktinformationen",email:"E-Mail",github:"GitHub",linkedin:"LinkedIn",facebook:"Facebook"},U0=[{text:"Über mich",link:"/#about"},{text:"Ausbildung",link:"/#education"},{text:"Kompetenzen",link:"/#skills"},{text:"Projekte",link:"/projects"},{text:"Kontakt",link:"/#contact"}],N0={text:"Hergestellt mit viel 💖 und etwas ☕."},F0={title:"Nachricht senden",name:"Name",email:"E-Mail",message:"Nachricht",success:"Ihre Nachricht wurde erfolgreich gesendet!",sending:"Senden...",send:"Nachricht senden",privacyConsent:"Ich bin mit der Verarbeitung meiner Daten zum Zwecke der Kontaktaufnahme einverstanden.",privacyError:"Bitte akzeptieren Sie die Datenverarbeitung."},O0={title:R0,hero:C0,about:P0,education:D0,skills:I0,projects:L0,contact:k0,navItems:U0,footer:N0,contactForm:F0},z0="Dávid | Portfólió",B0={greeting:"Szia, a nevem",name:"Dávid",role:["Szoftverfejlesztő","Rendszerüzemeltető"],learnMore:"Tudj meg többet",contactMe:"Kapcsolat"},H0={title:"Rólam",content:`Mindig is vonzott a technológia és az alkotás szabadsága, ezért a fejlesztés vált a fő területemmé. Legyen szó backend rendszerekről, adatbázisokról vagy teljes alkalmazásokról, mindig arra törekszem, hogy tiszta, hatékony és skálázható megoldásokat hozzak létre.

Jelenleg a Debreceni Egyetemen tanulok programtervező informatikus szakon, hogy tovább mélyítsem tudásomat a szoftverfejlesztés területén. Korábban a DSZC Mechwart intézményben szereztem informatikai rendszerüzemeltető képesítést, amely során a hálózatok és a szerverüzemeltetés világába is betekintést nyertem. Ez a háttér lehetővé teszi, hogy ne csak a kód szintjén gondolkodjak, hanem az infrastruktúra és a rendszerek hatékony működésére is odafigyeljek.

A folyamatos fejlődés és az új kihívások motiválnak, ezért mindig keresem azokat a projekteket, ahol kreativitásra, precizitásra és mély technikai tudásra van szükség. Ha szeretnél velem dolgozni, vedd fel velem a kapcsolatot!`,cv:"Önéletrajzom"},V0={title:"Tanulmányok",items:[{institution:"DSZC Mechwart",degree:"Érettségi bizonyítvány",startYear:2019,endYear:2023,description:"Szakgimnáziumi képzés, amely során érettségi bizonyítványt szereztem. A képzés során a számítógépek és hálózatok működését, valamint a rendszerüzemeltetés alapjait tanultam meg."},{institution:"DSZC Mechwart",degree:"Informatikai rendszerüzemeltető (54 481 06)",startYear:2023,endYear:2024,description:"Szakosodás Windows/Linux szerverkonfigurációra, Cisco hálózatok menedzselésére és rendszeradminisztrációra."},{institution:"Debreceni Egyetem, Informatikai Kar",degree:"Bsc Programtervező Informatikus",startYear:2024,endYear:null,description:"Jelenleg Programtervező Informatikus szakon tanulok."}],present:"Napjainkig"},G0={title:"Ismeretek",certifications:"Tanúsítványok",certInfo:"Kattints a tanúsítvány nevére a megnyitáshoz.",certCategories:["Összes","Hálózatok","Fejlesztés","IT"]},W0={title:"Kiemelt Projektek",description:"Íme néhány a legutóbbi projektjeim közül. Látogasd meg a projektek oldalt a teljes portfólióm megtekintéséhez.",viewProject:"Projekt megtekintése",viewAll:"Összes projekt megtekintése",page:{title:"Projektek",subtitle:"Itt van néhány projekt, amin dolgoztam. Szűrheted őket típus, technológia szerint, vagy kattinthatsz egy projektre további részletekért.",noProjects:"Nem található projekt",noItemsFound:"Egyetlen projekt sem felel meg a kiválasztott szűrőnek. Próbálj meg másik technológiát választani.",all:"Összes",projectTypes:["Fejlesztés","3D Modellezés"],links:"Hivatkozások"},card:"Részletek megtekintése",details:{backTo:{projects:"Vissza a projektekhez",models:"Vissza a modellekhez"},projectOverview:"Projektáttekintés",features:"Funkciók",demo:"Bemutató"},viewSource:"Forráskód megtekintése",viewDemo:"Demó megtekintése",modelDetails:{specifications:{title:"Specifikációk",dimensions:"Méretek",volume:"Térfogat"},printSettings:{title:"Ajánlott nyomtatási beállítások",layerHeight:"Rétegmagasság",infill:"Kitöltés",printTime:"Becsült nyomtatási idő"},download:"STL letöltése",controls:{title:"3D irányítások",rotate:"Bal egérgomb + húzás a forgatáshoz",move:"Jobb egérgomb + húzás a mozgatáshoz",zoom:"Görgetés a nagyításhoz/kicsinyítéshez"},touchControls:{title:"Érintőképernyős irányítások",rotate:"Két ujjal húzva a forgatáshoz",move:"Két ujjal húzva mozgatás",zoom:"Összehúzás vagy széthúzás a nagyításhoz/kicsinyítéshez"},viewIn3D:"Megtekintés 3D-ben",mobileNav:["Információ","3D Nézet"]}},j0={title:"Kapcsolat",info:"Elérhetőségek",email:"Email",github:"GitHub",linkedin:"LinkedIn",facebook:"Facebook"},X0=[{text:"Rólam",link:"/#about"},{text:"Tanulmányok",link:"/#education"},{text:"Ismeretek",link:"/#skills"},{text:"Projektek",link:"/projects"},{text:"Kapcsolat",link:"/#contact"}],$0={text:"Készült sok 💖-tel, és némi ☕-val."},q0={title:"Üzenet küldése",name:"Név",email:"Email",message:"Üzenet",success:"Az üzeneted sikeresen elküldve!",sending:"Küldés...",send:"Üzenet küldése",privacyConsent:"Hozzájárulok az adataim kapcsolatfelvétel céljából történő kezeléséhez.",privacyError:"Kérlek, fogadd el az adatkezelést."},Y0={title:z0,hero:B0,about:H0,education:V0,skills:G0,projects:W0,contact:j0,navItems:X0,footer:$0,contactForm:q0},K0={en:A0,de:O0,hu:Y0};function $n(){const t=gn("language",Tt("en")),e=ct(()=>K0[t.value]);return{t:e,currentLanguage:t,setLanguage:n=>{t.value=n,localStorage.setItem("language",n),document.title=e.value.title,document.documentElement.lang=n}}}const Z0="/abstract-shape.png",sp=/^[a-z0-9]+(-[a-z0-9]+)*$/,Sa=(t,e,n,i="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),c={provider:r.length>0?r[0]:i,prefix:l,name:a};return e&&!Po(c)?null:c}const s=r[0],o=s.split("-");if(o.length>1){const a={provider:i,prefix:o.shift(),name:o.join("-")};return e&&!Po(a)?null:a}if(n&&i===""){const a={provider:i,prefix:"",name:s};return e&&!Po(a,n)?null:a}return null},Po=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,op=Object.freeze({left:0,top:0,width:16,height:16}),Qo=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Ma=Object.freeze({...op,...Qo}),Ol=Object.freeze({...Ma,body:"",hidden:!1});function J0(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(e.rotate||0))%4;return i&&(n.rotate=i),n}function gd(t,e){const n=J0(t,e);for(const i in Ol)i in Qo?i in t&&!(i in n)&&(n[i]=Qo[i]):i in e?n[i]=e[i]:i in t&&(n[i]=t[i]);return n}function Q0(t,e){const n=t.icons,i=t.aliases||Object.create(null),r=Object.create(null);function s(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=i[o]&&i[o].parent,l=a&&s(a);l&&(r[o]=[a].concat(l))}return r[o]}return Object.keys(n).concat(Object.keys(i)).forEach(s),r}function ex(t,e,n){const i=t.icons,r=t.aliases||Object.create(null);let s={};function o(a){s=gd(i[a]||r[a],s)}return o(e),n.forEach(o),gd(t,s)}function ap(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const i=Q0(t);for(const r in i){const s=i[r];s&&(e(r,ex(t,r,s)),n.push(r))}return n}const tx={provider:"",aliases:{},not_found:{},...op};function ja(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function lp(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!ja(t,tx))return null;const n=e.icons;for(const r in n){const s=n[r];if(!r||typeof s.body!="string"||!ja(s,Ol))return null}const i=e.aliases||Object.create(null);for(const r in i){const s=i[r],o=s.parent;if(!r||typeof o!="string"||!n[o]&&!i[o]||!ja(s,Ol))return null}return e}const _d=Object.create(null);function nx(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Vr(t,e){const n=_d[t]||(_d[t]=Object.create(null));return n[e]||(n[e]=nx(t,e))}function cp(t,e){return lp(e)?ap(e,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function ix(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Rs=!1;function up(t){return typeof t=="boolean"&&(Rs=t),Rs}function rx(t){const e=typeof t=="string"?Sa(t,!0,Rs):t;if(e){const n=Vr(e.provider,e.prefix),i=e.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function sx(t,e){const n=Sa(t,!0,Rs);if(!n)return!1;const i=Vr(n.provider,n.prefix);return e?ix(i,n.name,e):(i.missing.add(n.name),!0)}function ox(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Rs&&!e&&!t.prefix){let r=!1;return lp(t)&&(t.prefix="",ap(t,(s,o)=>{sx(s,o)&&(r=!0)})),r}const n=t.prefix;if(!Po({prefix:n,name:"a"}))return!1;const i=Vr(e,n);return!!cp(i,t)}const dp=Object.freeze({width:null,height:null}),fp=Object.freeze({...dp,...Qo}),ax=/(-?[0-9.]*[0-9]+[0-9.]*)/g,lx=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function vd(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const i=t.split(ax);if(i===null||!i.length)return t;const r=[];let s=i.shift(),o=lx.test(s);for(;;){if(o){const a=parseFloat(s);isNaN(a)?r.push(s):r.push(Math.ceil(a*e*n)/n)}else r.push(s);if(s=i.shift(),s===void 0)return r.join("");o=!o}}function cx(t,e="defs"){let n="";const i=t.indexOf("<"+e);for(;i>=0;){const r=t.indexOf(">",i),s=t.indexOf("</"+e);if(r===-1||s===-1)break;const o=t.indexOf(">",s);if(o===-1)break;n+=t.slice(r+1,s).trim(),t=t.slice(0,i).trim()+t.slice(o+1)}return{defs:n,content:t}}function ux(t,e){return t?"<defs>"+t+"</defs>"+e:e}function dx(t,e,n){const i=cx(t);return ux(i.defs,e+i.content+n)}const fx=t=>t==="unset"||t==="undefined"||t==="none";function hx(t,e){const n={...Ma,...t},i={...fp,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,i].forEach(_=>{const m=[],h=_.hFlip,M=_.vFlip;let E=_.rotate;h?M?E+=2:(m.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),m.push("scale(-1 1)"),r.top=r.left=0):M&&(m.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),m.push("scale(1 -1)"),r.top=r.left=0);let x;switch(E<0&&(E-=Math.floor(E/4)*4),E=E%4,E){case 1:x=r.height/2+r.top,m.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:m.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:x=r.width/2+r.left,m.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}E%2===1&&(r.left!==r.top&&(x=r.left,r.left=r.top,r.top=x),r.width!==r.height&&(x=r.width,r.width=r.height,r.height=x)),m.length&&(s=dx(s,'<g transform="'+m.join(" ")+'">',"</g>"))});const o=i.width,a=i.height,l=r.width,c=r.height;let u,d;o===null?(d=a===null?"1em":a==="auto"?c:a,u=vd(d,l/c)):(u=o==="auto"?l:o,d=a===null?vd(u,c/l):a==="auto"?c:a);const f={},p=(_,m)=>{fx(m)||(f[_]=m.toString())};p("width",u),p("height",d);const g=[r.left,r.top,l,c];return f.viewBox=g.join(" "),{attributes:f,viewBox:g,body:s}}const px=/\sid="(\S+)"/g,mx="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let gx=0;function _x(t,e=mx){const n=[];let i;for(;i=px.exec(t);)n.push(i[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const o=typeof e=="function"?e(s):e+(gx++).toString(),a=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const zl=Object.create(null);function vx(t,e){zl[t]=e}function Bl(t){return zl[t]||zl[""]}function $c(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const qc=Object.create(null),ts=["https://api.simplesvg.com","https://api.unisvg.com"],Do=[];for(;ts.length>0;)ts.length===1||Math.random()>.5?Do.push(ts.shift()):Do.push(ts.pop());qc[""]=$c({resources:["https://api.iconify.design"].concat(Do)});function xx(t,e){const n=$c(e);return n===null?!1:(qc[t]=n,!0)}function Yc(t){return qc[t]}const yx=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let xd=yx();function bx(t,e){const n=Yc(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const s=e+".json?icons=";i=n.maxURL-r-n.path.length-s.length}return i}function Sx(t){return t===404}const Mx=(t,e,n)=>{const i=[],r=bx(t,e),s="icons";let o={type:s,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=r&&c>0&&(i.push(o),o={type:s,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),i.push(o),i};function Ex(t){if(typeof t=="string"){const e=Yc(t);if(e)return e.path}return"/"}const Tx=(t,e,n)=>{if(!xd){n("abort",424);return}let i=Ex(e.provider);switch(e.type){case"icons":{const s=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});i+=s+".json?"+l.toString();break}case"custom":{const s=e.uri;i+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;xd(t+i).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{n(Sx(o)?"abort":"next",o)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},wx={prepare:Mx,send:Tx};function Ax(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let i={provider:"",prefix:"",name:""};return t.forEach(r=>{if(i.name===r.name&&i.prefix===r.prefix&&i.provider===r.provider)return;i=r;const s=r.provider,o=r.prefix,a=r.name,l=n[s]||(n[s]=Object.create(null)),c=l[o]||(l[o]=Vr(s,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const d={provider:s,prefix:o,name:a};u.push(d)}),e}function hp(t,e){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(r=>r.id!==e))})}function Rx(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const i=t.provider,r=t.prefix;e.forEach(s=>{const o=s.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:i,prefix:r,name:c});else if(t.missing.has(c))o.missing.push({provider:i,prefix:r,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||hp([t],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let Cx=0;function Px(t,e,n){const i=Cx++,r=hp.bind(null,n,i);if(!e.pending.length)return r;const s={id:i,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),r}function Dx(t,e=!0,n=!1){const i=[];return t.forEach(r=>{const s=typeof r=="string"?Sa(r,e,n):r;s&&i.push(s)}),i}var Ix={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Lx(t,e,n,i){const r=t.resources.length,s=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let D=t.resources.slice(0);for(o=[];D.length>1;){const C=Math.floor(Math.random()*D.length);o.push(D[C]),D=D.slice(0,C).concat(D.slice(C+1))}o=o.concat(D)}else o=t.resources.slice(s).concat(t.resources.slice(0,s));const a=Date.now();let l="pending",c=0,u,d=null,f=[],p=[];typeof i=="function"&&p.push(i);function g(){d&&(clearTimeout(d),d=null)}function _(){l==="pending"&&(l="aborted"),g(),f.forEach(D=>{D.status==="pending"&&(D.status="aborted")}),f=[]}function m(D,C){C&&(p=[]),typeof D=="function"&&p.push(D)}function h(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:m,abort:_}}function M(){l="failed",p.forEach(D=>{D(void 0,u)})}function E(){f.forEach(D=>{D.status==="pending"&&(D.status="aborted")}),f=[]}function x(D,C,F){const w=C!=="success";switch(f=f.filter(b=>b!==D),l){case"pending":break;case"failed":if(w||!t.dataAfterTimeout)return;break;default:return}if(C==="abort"){u=F,M();return}if(w){u=F,f.length||(o.length?k():M());return}if(g(),E(),!t.random){const b=t.resources.indexOf(D.resource);b!==-1&&b!==t.index&&(t.index=b)}l="completed",p.forEach(b=>{b(F)})}function k(){if(l!=="pending")return;g();const D=o.shift();if(D===void 0){if(f.length){d=setTimeout(()=>{g(),l==="pending"&&(E(),M())},t.timeout);return}M();return}const C={status:"pending",resource:D,callback:(F,w)=>{x(C,F,w)}};f.push(C),c++,d=setTimeout(k,t.rotate),n(D,e,C.callback)}return setTimeout(k),h}function pp(t){const e={...Ix,...t};let n=[];function i(){n=n.filter(a=>a().status==="pending")}function r(a,l,c){const u=Lx(e,a,l,(d,f)=>{i(),c&&c(d,f)});return n.push(u),u}function s(a){return n.find(l=>a(l))||null}return{query:r,find:s,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:i}}function yd(){}const Xa=Object.create(null);function kx(t){if(!Xa[t]){const e=Yc(t);if(!e)return;const n=pp(e),i={config:e,redundancy:n};Xa[t]=i}return Xa[t]}function Ux(t,e,n){let i,r;if(typeof t=="string"){const s=Bl(t);if(!s)return n(void 0,424),yd;r=s.send;const o=kx(t);o&&(i=o.redundancy)}else{const s=$c(t);if(s){i=pp(s);const o=t.resources?t.resources[0]:"",a=Bl(o);a&&(r=a.send)}}return!i||!r?(n(void 0,424),yd):i.query(e,r,n)().abort}function bd(){}function Nx(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Rx(t)}))}function Fx(t){const e=[],n=[];return t.forEach(i=>{(i.match(sp)?e:n).push(i)}),{valid:e,invalid:n}}function ns(t,e,n){function i(){const r=t.pendingIcons;e.forEach(s=>{r&&r.delete(s),t.icons[s]||t.missing.add(s)})}if(n&&typeof n=="object")try{if(!cp(t,n).length){i();return}}catch(r){console.error(r)}i(),Nx(t)}function Sd(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function Ox(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,r=t.iconsToLoad;if(delete t.iconsToLoad,!r||!r.length)return;const s=t.loadIcon;if(t.loadIcons&&(r.length>1||!s)){Sd(t.loadIcons(r,i,n),u=>{ns(t,r,u)});return}if(s){r.forEach(u=>{const d=s(u,i,n);Sd(d,f=>{const p=f?{prefix:i,icons:{[u]:f}}:null;ns(t,[u],p)})});return}const{valid:o,invalid:a}=Fx(r);if(a.length&&ns(t,a,null),!o.length)return;const l=i.match(sp)?Bl(n):null;if(!l){ns(t,o,null);return}l.prepare(n,i,o).forEach(u=>{Ux(n,u,d=>{ns(t,u.icons,d)})})}))}const zx=(t,e)=>{const n=Dx(t,!0,up()),i=Ax(n);if(!i.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(i.loaded,i.missing,i.pending,bd)}),()=>{l=!1}}const r=Object.create(null),s=[];let o,a;return i.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,s.push(Vr(c,u));const d=r[c]||(r[c]=Object.create(null));d[u]||(d[u]=[])}),i.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=Vr(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(d)||(p.add(d),r[c][u].push(d))}),s.forEach(l=>{const c=r[l.provider][l.prefix];c.length&&Ox(l,c)}),e?Px(e,i,s):bd};function Bx(t,e){const n={...t};for(const i in e){const r=e[i],s=typeof r;i in dp?(r===null||r&&(s==="string"||s==="number"))&&(n[i]=r):s===typeof n[i]&&(n[i]=i==="rotate"?r%4:r)}return n}const Hx=/[\s,]+/;function Vx(t,e){e.split(Hx).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Gx(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function i(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:i(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/r,s%1===0?i(s):0)}}return e}function Wx(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in e)n+=" "+i+'="'+e[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function jx(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Xx(t){return"data:image/svg+xml,"+jx(t)}function $x(t){return'url("'+Xx(t)+'")'}const Md={...fp,inline:!1},qx={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Yx={display:"inline-block"},Hl={backgroundColor:"currentColor"},mp={backgroundColor:"transparent"},Ed={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Td={webkitMask:Hl,mask:Hl,background:mp};for(const t in Td){const e=Td[t];for(const n in Ed)e[t+n]=Ed[n]}const Io={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Io[t+"-flip"]=e,Io[t.slice(0,1)+"-flip"]=e,Io[t+"Flip"]=e});function wd(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Ad=(t,e)=>{const n=Bx(Md,e),i={...qx},r=e.mode||"svg",s={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const m=e[_];if(m!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[_]=m===!0||m==="true"||m===1;break;case"flip":typeof m=="string"&&Vx(n,m);break;case"color":s.color=m;break;case"rotate":typeof m=="string"?n[_]=Gx(m):typeof m=="number"&&(n[_]=m);break;case"ariaHidden":case"aria-hidden":m!==!0&&m!=="true"&&delete i["aria-hidden"];break;default:{const h=Io[_];h?(m===!0||m==="true"||m===1)&&(n[h]=!0):Md[_]===void 0&&(i[_]=m)}}}const l=hx(t,n),c=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),r==="svg"){i.style={...s,...a},Object.assign(i,c);let _=0,m=e.id;return typeof m=="string"&&(m=m.replace(/-/g,"_")),i.innerHTML=_x(l.body,m?()=>m+"ID"+_++:"iconifyVue"),Ko("svg",i)}const{body:u,width:d,height:f}=t,p=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),g=Wx(u,{...c,width:d+"",height:f+""});return i.style={...s,"--svg":$x(g),width:wd(c.width),height:wd(c.height),...Yx,...p?Hl:mp,...a},Ko("span",i)};up(!0);vx("",wx);if(typeof document<"u"&&typeof window<"u"){const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!ox(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const i="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;xx(n,r)||console.error(i)}catch{console.error(i)}}}}const Kx={...Ma,body:""},Ve=Ft({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let i;if(typeof t!="string"||(i=Sa(t,!1,!0))===null)return this.abortLoading(),null;let r=rx(i);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:zx([i],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){r=Object.assign({},r);const o=n(r.body,i.name,i.prefix,i.provider);typeof o=="string"&&(r.body=o)}const s=["iconify"];return i.prefix!==""&&s.push("iconify--"+i.prefix),i.provider!==""&&s.push("iconify--"+i.provider),{data:r,classes:s}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return Ad(Kx,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Ad({...Ma,...e.data},n)}}),Zx={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Jx={class:"flex justify-between items-center py-3"},Qx={class:"hidden md:flex items-center space-x-4"},ey={class:"flex items-center space-x-2"},ty={class:"relative"},ny={key:0,class:"absolute right-0 mt-2 w-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-md shadow-lg py-1 z-50"},iy=["onClick"],ry={key:0,class:"md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"},sy={class:"px-2 pt-2 pb-3 space-y-1 flex flex-col"},oy=Ft({__name:"Navbar",props:{isDarkMode:{type:Boolean}},emits:["toggle-dark-mode"],setup(t,{emit:e}){const n=e,i=Tt(!1),r=Tt(!1),s=Tt(!1),{t:o,currentLanguage:a,setLanguage:l}=$n(),c=[{code:"en",name:"English",icon:"twemoji:flag-united-kingdom"},{code:"hu",name:"Magyar",icon:"twemoji:flag-hungary"},{code:"de",name:"Deutsch",icon:"twemoji:flag-germany"}],u=ct(()=>c.find(_=>_.code===a.value)||c[0]),d=()=>{i.value=!i.value,i.value&&(s.value=!1)},f=()=>{s.value=!s.value},p=_=>{l(_),s.value=!1},g=()=>{r.value=window.scrollY>20};return kn(()=>{window.addEventListener("scroll",g)}),ga(()=>{window.removeEventListener("scroll",g)}),(_,m)=>{const h=Fs("router-link");return Te(),ke("header",{class:an(["w-full fixed top-0 z-50 transition-all duration-300 rounded-md",r.value?"bg-white/25 dark:bg-gray-950/80 backdrop-blur-md":"bg-transparent"])},[R("div",Zx,[R("div",Jx,[we(h,{to:"/",class:"text-xl font-bold text-sky-500"},{default:Pi(()=>[...m[2]||(m[2]=[R("img",{src:Z0,alt:"icon",class:"w-8 h-8"},null,-1)])]),_:1}),R("nav",Qx,[(Te(!0),ke(mt,null,Ct(q(o).navItems,M=>(Te(),$t(h,{key:M.link,to:M.link,class:"nav-link"},{default:Pi(()=>[bt(ue(M.text),1)]),_:2},1032,["to"]))),128))]),R("div",ey,[R("div",ty,[R("button",{onClick:f,class:"p-2 text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500 transition-colors duration-200 bg-gray-200/50 dark:bg-gray-800/50 rounded-md flex items-center cursor-pointer","aria-label":"Change language"},[we(q(Ve),{icon:u.value.icon,class:"w-5 h-5"},null,8,["icon"]),s.value?(Te(),$t(q(Ve),{key:1,icon:"ph:caret-up",class:"w-4 h-4 ml-1 md:block hidden"})):(Te(),$t(q(Ve),{key:0,icon:"ph:caret-down",class:"w-4 h-4 ml-1 md:block hidden"}))]),s.value?(Te(),ke("div",ny,[(Te(),ke(mt,null,Ct(c,M=>R("button",{key:M.code,onClick:E=>p(M.code),class:an(["flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80",{"bg-gray-100/80 dark:bg-gray-700/80":q(a)===M.code}])},[we(q(Ve),{icon:M.icon,class:"w-5 h-5 mr-2"},null,8,["icon"]),bt(" "+ue(M.name),1)],10,iy)),64))])):wt("",!0)]),R("button",{onClick:m[0]||(m[0]=M=>n("toggle-dark-mode")),class:"p-2 text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500 transition-colors duration-200 bg-gray-200/50 dark:bg-gray-800/50 rounded-md cursor-pointer","aria-label":"Toggle dark mode"},[we(q(Ve),{icon:t.isDarkMode?"ph:moon":"ph:sun",class:"w-5 h-5"},null,8,["icon"])]),R("button",{onClick:d,class:"p-2 text-gray-700 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-800/50 rounded-md md:hidden","aria-label":"Toggle menu"},[we(q(Ve),{icon:i.value?"ph:x":"ph:list",class:"w-6 h-6"},null,8,["icon"])])])])]),i.value?(Te(),ke("div",ry,[R("div",sy,[(Te(!0),ke(mt,null,Ct(q(o).navItems,M=>(Te(),$t(h,{key:M.link,to:M.link,class:"nav-link block",onClick:m[1]||(m[1]=E=>i.value=!1)},{default:Pi(()=>[bt(ue(M.text),1)]),_:2},1032,["to"]))),128))])])):wt("",!0)],2)}}}),gp=[{icon:"ph:envelope",title:"Email",link:"cseresznyesdavid1@outlook.com",external:!1,type:"email"},{icon:"ph:github-logo",title:"Github",link:"https://github.com/cseri502",external:!0,type:"url"},{icon:"ph:linkedin-logo",title:"LinkedIn",link:"https://www.linkedin.com/in/d%C3%A1vid-csereszny%C3%A9s-623085287/",external:!0,type:"url"},{icon:"ph:facebook-logo",title:"Facebook",link:"https://www.facebook.com/davidcseresznyes05",external:!0,type:"url"}],ay={class:"bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm py-8 relative z-10"},ly={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},cy={class:"flex flex-col md:flex-row justify-between items-center"},uy={class:"mb-4 md:mb-0"},dy={class:"text-gray-600 dark:text-gray-400"},fy={class:"flex space-x-4"},hy=["href","target","rel"],py=Ft({__name:"Footer",setup(t){const{t:e}=$n();return(n,i)=>(Te(),ke("footer",ay,[R("div",ly,[R("div",cy,[R("div",uy,[R("p",dy,ue(q(e).footer.text),1)]),R("div",fy,[(Te(!0),ke(mt,null,Ct(q(gp),(r,s)=>(Te(),ke("a",{key:s,href:r.link,target:r.external?"_blank":"",rel:r.external?"noopener noreferrer":"",class:"text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500"},[we(q(Ve),{icon:r.icon,class:"w-6 h-6"},null,8,["icon"])],8,hy))),128))])])])]))}}),my={class:"min-h-screen flex flex-col transition-colors duration-300 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden"},gy={class:"flex-grow relative z-10 font-inter"},_y=Ft({__name:"App",setup(t){const e=rp({selector:"html",attribute:"data-theme",valueDark:"dark",valueLight:"light"}),n=n0(e),i=Bs(),{setLanguage:r}=$n();async function s(){const o=navigator.language.split("-")[0]||"en";r(o)}return kn(()=>{const o=localStorage.getItem("language");o?r(o):s()}),_n(()=>i.path,()=>{window.scrollTo(0,0)}),(o,a)=>{const l=Fs("router-view");return Te(),ke("div",my,[we(oy,{isDarkMode:q(e),onToggleDarkMode:a[0]||(a[0]=()=>q(n)())},null,8,["isDarkMode"]),R("main",gy,[we(l)]),we(py)])}}});function vy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lo={exports:{}},xy=Lo.exports,Rd;function yy(){return Rd||(Rd=1,(function(t,e){(function(n,i){t.exports=i()})(typeof self<"u"?self:xy,(()=>(()=>{var n={3146:(o,a,l)=>{for(var c=l(3491),u=typeof window>"u"?l.g:window,d=["moz","webkit"],f="AnimationFrame",p=u["request"+f],g=u["cancel"+f]||u["cancelRequest"+f],_=0;!p&&_<d.length;_++)p=u[d[_]+"Request"+f],g=u[d[_]+"Cancel"+f]||u[d[_]+"CancelRequest"+f];if(!p||!g){var m=0,h=0,M=[],E=1e3/60;p=function(x){if(M.length===0){var k=c(),D=Math.max(0,E-(k-m));m=D+k,setTimeout((function(){var C=M.slice(0);M.length=0;for(var F=0;F<C.length;F++)if(!C[F].cancelled)try{C[F].callback(m)}catch(w){setTimeout((function(){throw w}),0)}}),Math.round(D))}return M.push({handle:++h,callback:x,cancelled:!1}),h},g=function(x){for(var k=0;k<M.length;k++)M[k].handle===x&&(M[k].cancelled=!0)}}o.exports=function(x){return p.call(u,x)},o.exports.cancel=function(){g.apply(u,arguments)},o.exports.polyfill=function(x){x||(x=u),x.requestAnimationFrame=p,x.cancelAnimationFrame=g}},3491:function(o){(function(){var a,l,c,u,d,f;typeof performance<"u"&&performance!==null&&performance.now?o.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(o.exports=function(){return(a()-d)/1e6},l=process.hrtime,u=(a=function(){var p;return 1e9*(p=l())[0]+p[1]})(),f=1e9*process.uptime(),d=u-f):Date.now?(o.exports=function(){return Date.now()-c},c=Date.now()):(o.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)}},i={};function r(o){var a=i[o];if(a!==void 0)return a.exports;var l=i[o]={exports:{}};return n[o].call(l.exports,l,l.exports,r),l.exports}r.n=o=>{var a=o&&o.__esModule?()=>o.default:()=>o;return r.d(a,{a}),a},r.d=(o,a)=>{for(var l in a)r.o(a,l)&&!r.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:a[l]})},r.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),r.o=(o,a)=>Object.prototype.hasOwnProperty.call(o,a);var s={};return(()=>{r.d(s,{default:()=>de});var o=r(3146),a=r.n(o);const l=function(Y){return new RegExp(/<[a-z][\s\S]*>/i).test(Y)},c=function(Y,H){return Math.floor(Math.random()*(H-Y+1))+Y};var u="TYPE_CHARACTER",d="REMOVE_CHARACTER",f="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",g="PAUSE_FOR",_="CALL_FUNCTION",m="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",M="CHANGE_DELAY",E="CHANGE_CURSOR",x="PASTE_STRING",k="HTML_TAG";function D(Y){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(H){return typeof H}:function(H){return H&&typeof Symbol=="function"&&H.constructor===Symbol&&H!==Symbol.prototype?"symbol":typeof H},D(Y)}function C(Y,H){var j=Object.keys(Y);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(Y);H&&(O=O.filter((function(be){return Object.getOwnPropertyDescriptor(Y,be).enumerable}))),j.push.apply(j,O)}return j}function F(Y){for(var H=1;H<arguments.length;H++){var j=arguments[H]!=null?arguments[H]:{};H%2?C(Object(j),!0).forEach((function(O){W(Y,O,j[O])})):Object.getOwnPropertyDescriptors?Object.defineProperties(Y,Object.getOwnPropertyDescriptors(j)):C(Object(j)).forEach((function(O){Object.defineProperty(Y,O,Object.getOwnPropertyDescriptor(j,O))}))}return Y}function w(Y){return(function(H){if(Array.isArray(H))return b(H)})(Y)||(function(H){if(typeof Symbol<"u"&&H[Symbol.iterator]!=null||H["@@iterator"]!=null)return Array.from(H)})(Y)||(function(H,j){if(H){if(typeof H=="string")return b(H,j);var O={}.toString.call(H).slice(8,-1);return O==="Object"&&H.constructor&&(O=H.constructor.name),O==="Map"||O==="Set"?Array.from(H):O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)?b(H,j):void 0}})(Y)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function b(Y,H){(H==null||H>Y.length)&&(H=Y.length);for(var j=0,O=Array(H);j<H;j++)O[j]=Y[j];return O}function I(Y,H){for(var j=0;j<H.length;j++){var O=H[j];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(Y,V(O.key),O)}}function W(Y,H,j){return(H=V(H))in Y?Object.defineProperty(Y,H,{value:j,enumerable:!0,configurable:!0,writable:!0}):Y[H]=j,Y}function V(Y){var H=(function(j){if(D(j)!="object"||!j)return j;var O=j[Symbol.toPrimitive];if(O!==void 0){var be=O.call(j,"string");if(D(be)!="object")return be;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(j)})(Y);return D(H)=="symbol"?H:H+""}const de=(function(){function Y(O,be){var z=this;if((function(pe,Fe){if(!(pe instanceof Fe))throw new TypeError("Cannot call a class as a function")})(this,Y),W(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),W(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),W(this,"setupWrapperElement",(function(){z.state.elements.container&&(z.state.elements.wrapper.className=z.options.wrapperClassName,z.state.elements.cursor.className=z.options.cursorClassName,z.state.elements.cursor.innerHTML=z.options.cursor,z.state.elements.container.innerHTML="",z.state.elements.container.appendChild(z.state.elements.wrapper),z.state.elements.container.appendChild(z.state.elements.cursor))})),W(this,"start",(function(){return z.state.eventLoopPaused=!1,z.runEventLoop(),z})),W(this,"pause",(function(){return z.state.eventLoopPaused=!0,z})),W(this,"stop",(function(){return z.state.eventLoop&&((0,o.cancel)(z.state.eventLoop),z.state.eventLoop=null),z})),W(this,"pauseFor",(function(pe){return z.addEventToQueue(g,{ms:pe}),z})),W(this,"typeOutAllStrings",(function(){return typeof z.options.strings=="string"?(z.typeString(z.options.strings).pauseFor(z.options.pauseFor),z):(z.options.strings.forEach((function(pe){z.typeString(pe).pauseFor(z.options.pauseFor).deleteAll(z.options.deleteSpeed)})),z)})),W(this,"typeString",(function(pe){var Fe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(l(pe))return z.typeOutHTMLString(pe,Fe);if(pe){var re=(z.options||{}).stringSplitter,ve=typeof re=="function"?re(pe):pe.split("");z.typeCharacters(ve,Fe)}return z})),W(this,"pasteString",(function(pe){var Fe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return l(pe)?z.typeOutHTMLString(pe,Fe,!0):(pe&&z.addEventToQueue(x,{character:pe,node:Fe}),z)})),W(this,"typeOutHTMLString",(function(pe){var Fe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,re=arguments.length>2?arguments[2]:void 0,ve=(function(he){var _e=document.createElement("div");return _e.innerHTML=he,_e.childNodes})(pe);if(ve.length>0)for(var ye=0;ye<ve.length;ye++){var B=ve[ye],le=B.innerHTML;B&&B.nodeType!==3?(B.innerHTML="",z.addEventToQueue(m,{node:B,parentNode:Fe}),re?z.pasteString(le,B):z.typeString(le,B)):B.textContent&&(re?z.pasteString(B.textContent,Fe):z.typeString(B.textContent,Fe))}return z})),W(this,"deleteAll",(function(){var pe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return z.addEventToQueue(f,{speed:pe}),z})),W(this,"changeDeleteSpeed",(function(pe){if(!pe)throw new Error("Must provide new delete speed");return z.addEventToQueue(h,{speed:pe}),z})),W(this,"changeDelay",(function(pe){if(!pe)throw new Error("Must provide new delay");return z.addEventToQueue(M,{delay:pe}),z})),W(this,"changeCursor",(function(pe){if(!pe)throw new Error("Must provide new cursor");return z.addEventToQueue(E,{cursor:pe}),z})),W(this,"deleteChars",(function(pe){if(!pe)throw new Error("Must provide amount of characters to delete");for(var Fe=0;Fe<pe;Fe++)z.addEventToQueue(d);return z})),W(this,"callFunction",(function(pe,Fe){if(!pe||typeof pe!="function")throw new Error("Callback must be a function");return z.addEventToQueue(_,{cb:pe,thisArg:Fe}),z})),W(this,"typeCharacters",(function(pe){var Fe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pe||!Array.isArray(pe))throw new Error("Characters must be an array");return pe.forEach((function(re){z.addEventToQueue(u,{character:re,node:Fe})})),z})),W(this,"removeCharacters",(function(pe){if(!pe||!Array.isArray(pe))throw new Error("Characters must be an array");return pe.forEach((function(){z.addEventToQueue(d)})),z})),W(this,"addEventToQueue",(function(pe,Fe){var re=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return z.addEventToStateProperty(pe,Fe,re,"eventQueue")})),W(this,"addReverseCalledEvent",(function(pe,Fe){var re=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return z.options.loop?z.addEventToStateProperty(pe,Fe,re,"reverseCalledEvents"):z})),W(this,"addEventToStateProperty",(function(pe,Fe){var re=arguments.length>2&&arguments[2]!==void 0&&arguments[2],ve=arguments.length>3?arguments[3]:void 0,ye={eventName:pe,eventArgs:Fe||{}};return z.state[ve]=re?[ye].concat(w(z.state[ve])):[].concat(w(z.state[ve]),[ye]),z})),W(this,"runEventLoop",(function(){z.state.lastFrameTime||(z.state.lastFrameTime=Date.now());var pe=Date.now(),Fe=pe-z.state.lastFrameTime;if(!z.state.eventQueue.length){if(!z.options.loop)return;z.state.eventQueue=w(z.state.calledEvents),z.state.calledEvents=[],z.options=F({},z.state.initialOptions)}if(z.state.eventLoop=a()(z.runEventLoop),!z.state.eventLoopPaused){if(z.state.pauseUntil){if(pe<z.state.pauseUntil)return;z.state.pauseUntil=null}var re,ve=w(z.state.eventQueue),ye=ve.shift();if(!(Fe<=(re=ye.eventName===p||ye.eventName===d?z.options.deleteSpeed==="natural"?c(40,80):z.options.deleteSpeed:z.options.delay==="natural"?c(120,160):z.options.delay))){var B=ye.eventName,le=ye.eventArgs;switch(z.logInDevMode({currentEvent:ye,state:z.state,delay:re}),B){case x:case u:var he=le.character,_e=le.node,He=document.createTextNode(he),A=He;z.options.onCreateTextNode&&typeof z.options.onCreateTextNode=="function"&&(A=z.options.onCreateTextNode(he,He)),A&&(_e?_e.appendChild(A):z.state.elements.wrapper.appendChild(A)),z.state.visibleNodes=[].concat(w(z.state.visibleNodes),[{type:"TEXT_NODE",character:he,node:A}]);break;case d:ve.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case g:var P=ye.eventArgs.ms;z.state.pauseUntil=Date.now()+parseInt(P);break;case _:var y=ye.eventArgs,ae=y.cb,ee=y.thisArg;ae.call(ee,{elements:z.state.elements});break;case m:var Z=ye.eventArgs,oe=Z.node,me=Z.parentNode;me?me.appendChild(oe):z.state.elements.wrapper.appendChild(oe),z.state.visibleNodes=[].concat(w(z.state.visibleNodes),[{type:k,node:oe,parentNode:me||z.state.elements.wrapper}]);break;case f:var ne=z.state.visibleNodes,S=le.speed,v=[];S&&v.push({eventName:h,eventArgs:{speed:S,temp:!0}});for(var L=0,X=ne.length;L<X;L++)v.push({eventName:p,eventArgs:{removingCharacterNode:!1}});S&&v.push({eventName:h,eventArgs:{speed:z.options.deleteSpeed,temp:!0}}),ve.unshift.apply(ve,v);break;case p:var Q=ye.eventArgs.removingCharacterNode;if(z.state.visibleNodes.length){var K=z.state.visibleNodes.pop(),Ee=K.type,ge=K.node,Ne=K.character;z.options.onRemoveNode&&typeof z.options.onRemoveNode=="function"&&z.options.onRemoveNode({node:ge,character:Ne}),ge&&ge.parentNode.removeChild(ge),Ee===k&&Q&&ve.unshift({eventName:p,eventArgs:{}})}break;case h:z.options.deleteSpeed=ye.eventArgs.speed;break;case M:z.options.delay=ye.eventArgs.delay;break;case E:z.options.cursor=ye.eventArgs.cursor,z.state.elements.cursor.innerHTML=ye.eventArgs.cursor}z.options.loop&&(ye.eventName===p||ye.eventArgs&&ye.eventArgs.temp||(z.state.calledEvents=[].concat(w(z.state.calledEvents),[ye]))),z.state.eventQueue=ve,z.state.lastFrameTime=pe}}})),O)if(typeof O=="string"){var Le=document.querySelector(O);if(!Le)throw new Error("Could not find container element");this.state.elements.container=Le}else this.state.elements.container=O;be&&(this.options=F(F({},this.options),be)),this.state.initialOptions=F({},this.options),this.init()}var H,j;return H=Y,(j=[{key:"init",value:function(){var O,be;this.setupWrapperElement(),this.addEventToQueue(E,{cursor:this.options.cursor},!0),this.addEventToQueue(f,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(O=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(be=document.createElement("style")).appendChild(document.createTextNode(O)),document.head.appendChild(be),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(O){this.options.devMode&&console.log(O)}}])&&I(H.prototype,j),Object.defineProperty(H,"prototype",{writable:!1}),Y})()})(),s.default})()))})(Lo)),Lo.exports}var by=yy();const Sy=vy(by),My={class:"glass-card flex flex-col items-center p-4 hover:scale-105 transition-all duration-200"},Ey={class:"text-sm font-medium font-inter text-gray-900 dark:text-white"},Ty=Ft({__name:"SkillCard",props:{name:{},icon:{}},setup(t){return(e,n)=>(Te(),ke("div",My,[we(q(Ve),{icon:t.icon,class:"w-10 h-10 mb-3"},null,8,["icon"]),R("span",Ey,ue(t.name),1)]))}}),wy={class:"glass-card p-5"},Ay={class:"flex flex-col md:flex-row md:items-center justify-between mb-2"},Ry={class:"text-lg font-semibold text-gray-900 dark:text-white"},Cy={class:"text-sm text-sky-500"},Py={class:"text-gray-700 dark:text-gray-300 font-medium mb-2"},Dy={class:"text-gray-600 dark:text-gray-400"},Iy=Ft({__name:"EducationItem",props:{institution:{},degree:{},period:{},description:{}},setup(t){return(e,n)=>(Te(),ke("div",wy,[R("div",Ay,[R("h3",Ry,ue(t.degree),1),R("span",Cy,ue(t.period),1)]),R("p",Py,ue(t.institution),1),R("p",Dy,ue(t.description),1)]))}});class Hs{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const Ly=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},Ht={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Ly()},Kc=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},ky=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=Kc(t);Ht.publicKey=n.publicKey,Ht.blockHeadless=n.blockHeadless,Ht.storageProvider=n.storageProvider,Ht.blockList=n.blockList,Ht.limitRate=n.limitRate,Ht.origin=n.origin||e},_p=async(t,e,n={})=>{const i=await fetch(Ht.origin+t,{method:"POST",headers:n,body:e}),r=await i.text(),s=new Hs(i.status,r);if(i.ok)return s;throw s},vp=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Uy=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},xp=t=>t.webdriver||!t.languages||t.languages.length===0,yp=()=>new Hs(451,"Unavailable For Headless Browser"),Ny=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},Fy=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},Oy=(t,e)=>t instanceof FormData?t.get(e):t[e],bp=(t,e)=>{if(Fy(t))return!1;Ny(t.list,t.watchVariable);const n=Oy(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},Sp=()=>new Hs(403,"Forbidden"),zy=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},By=async(t,e,n)=>{const i=Number(await n.get(t)||0);return e-Date.now()+i},Mp=async(t,e,n)=>{if(!e.throttle||!n)return!1;zy(e.throttle,e.id);const i=e.id||t;return await By(i,e.throttle,n)>0?!0:(await n.set(i,Date.now().toString()),!1)},Ep=()=>new Hs(429,"Too Many Requests"),Hy=async(t,e,n,i)=>{const r=Kc(i),s=r.publicKey||Ht.publicKey,o=r.blockHeadless||Ht.blockHeadless,a=r.storageProvider||Ht.storageProvider,l={...Ht.blockList,...r.blockList},c={...Ht.limitRate,...r.limitRate};return o&&xp(navigator)?Promise.reject(yp()):(vp(s,t,e),Uy(n),n&&bp(l,n)?Promise.reject(Sp()):await Mp(location.pathname,c,a)?Promise.reject(Ep()):_p("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},Vy=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Gy=t=>typeof t=="string"?document.querySelector(t):t,Wy=async(t,e,n,i)=>{const r=Kc(i),s=r.publicKey||Ht.publicKey,o=r.blockHeadless||Ht.blockHeadless,a=Ht.storageProvider||r.storageProvider,l={...Ht.blockList,...r.blockList},c={...Ht.limitRate,...r.limitRate};if(o&&xp(navigator))return Promise.reject(yp());const u=Gy(n);vp(s,t,e),Vy(u);const d=new FormData(u);return bp(l,d)?Promise.reject(Sp()):await Mp(location.pathname,c,a)?Promise.reject(Ep()):(d.append("lib_version","4.4.1"),d.append("service_id",t),d.append("template_id",e),d.append("user_id",s),_p("/api/v1.0/email/send-form",d))},Cd={init:ky,send:Hy,sendForm:Wy,EmailJSResponseStatus:Hs},jy={class:"text-xl font-semibold mb-4 text-gray-900 dark:text-white"},Xy={class:"mb-4"},$y={for:"name",class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"},qy={class:"mb-4"},Yy={for:"email",class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"},Ky={class:"mb-4"},Zy={for:"message",class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"},Jy={class:"mb-4 flex items-start"},Qy={class:"flex items-center h-5"},eb={class:"ml-3 text-sm"},tb={for:"privacy",class:"text-gray-700 dark:text-gray-300"},nb={key:0,class:"mb-4 p-3 bg-green-100/70 text-green-800 dark:bg-green-800/20 dark:text-green-400 backdrop-blur-sm rounded-md"},ib={key:1,class:"mb-4 p-3 bg-red-100/70 text-red-800 dark:bg-red-800/20 dark:text-red-400 backdrop-blur-sm rounded-md"},rb=["disabled"],sb={key:0},ob={key:1},ab=Ft({__name:"ContactForm",setup(t){const{t:e}=$n(),n=Tt(""),i=Tt(""),r=Tt(""),s=Tt(!1),o=Tt(!1),a=Tt(""),l=Tt(!1);kn(()=>{Cd.init({publicKey:"GgbAAqKVbpFjjp3g-"})});const c=async()=>{s.value=!0,a.value="";try{if(!l.value){a.value=e.value.contactForm.privacyError,s.value=!1;return}const u={from_name:n.value,from_email:i.value,message:r.value};await Cd.send("service_lrzhv2g","template_akr5e3b",u),o.value=!0,n.value="",i.value="",r.value="",l.value=!1,setTimeout(()=>{o.value=!1},5e3)}catch(u){console.error("Error sending email:",u),a.value="There was an error sending your message. Please try again."}finally{s.value=!1}};return(u,d)=>(Te(),ke("form",{onSubmit:L_(c,["prevent"]),class:"glass-card p-6"},[R("h3",jy,ue(q(e).contactForm.title),1),R("div",Xy,[R("label",$y,ue(q(e).contactForm.name),1),Cr(R("input",{id:"name","onUpdate:modelValue":d[0]||(d[0]=f=>n.value=f),type:"text",required:"",class:"w-full px-3 py-2 border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-md"},null,512),[[Oa,n.value]])]),R("div",qy,[R("label",Yy,ue(q(e).contactForm.email),1),Cr(R("input",{id:"email","onUpdate:modelValue":d[1]||(d[1]=f=>i.value=f),type:"email",required:"",class:"w-full px-3 py-2 border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-md"},null,512),[[Oa,i.value]])]),R("div",Ky,[R("label",Zy,ue(q(e).contactForm.message),1),Cr(R("textarea",{id:"message","onUpdate:modelValue":d[2]||(d[2]=f=>r.value=f),rows:"4",required:"",class:"w-full px-3 py-2 border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-md"},null,512),[[Oa,r.value]])]),R("div",Jy,[R("div",Qy,[Cr(R("input",{id:"privacy","onUpdate:modelValue":d[3]||(d[3]=f=>l.value=f),type:"checkbox",required:"",class:"w-4 h-4 border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 text-primary focus:ring-primary focus:ring-2 rounded"},null,512),[[C_,l.value]])]),R("div",eb,[R("label",tb,ue(q(e).contactForm.privacyConsent),1)])]),o.value?(Te(),ke("div",nb,ue(q(e).contactForm.success),1)):wt("",!0),a.value?(Te(),ke("div",ib,ue(a.value),1)):wt("",!0),R("button",{type:"submit",class:"btn btn-primary w-full",disabled:s.value},[s.value?(Te(),ke("span",sb,ue(q(e).contactForm.sending),1)):(Te(),ke("span",ob,ue(q(e).contactForm.send),1))],8,rb)],32))}}),lb={class:"section-title text-sky-500"},cb={class:"text-gray-900 dark:text-white"},Rr=Ft({__name:"Title",props:{title:{}},setup(t){return(e,n)=>(Te(),ke("h2",lb,[n[0]||(n[0]=bt(" < ",-1)),R("span",cb,ue(t.title),1),n[1]||(n[1]=bt(" /> ",-1))]))}}),ub={class:"flex justify-center"},db={class:"w-full max-w-md"},fb={class:"hidden md:flex justify-center overflow-x-auto pb-2"},hb={class:"inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1 bg-gray-50 dark:bg-gray-800"},pb=["onClick"],mb={class:"md:hidden flex flex-wrap justify-center gap-2 p-2"},gb=["onClick"],_b=Ft({__name:"CategorySelector",props:{categories:{},modelValue:{}},emits:["update:modelValue"],setup(t){return(e,n)=>(Te(),ke("div",ub,[R("div",db,[R("div",fb,[R("div",hb,[(Te(!0),ke(mt,null,Ct(t.categories,(i,r)=>(Te(),ke("button",{key:i,onClick:s=>e.$emit("update:modelValue",r),class:an(["px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",t.modelValue===r?"bg-sky-500 text-white shadow-md":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"])},ue(i),11,pb))),128))])]),R("div",mb,[(Te(!0),ke(mt,null,Ct(t.categories,(i,r)=>(Te(),ke("button",{key:i,onClick:s=>e.$emit("update:modelValue",r),class:an(["px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",t.modelValue===r?"bg-sky-500 text-white shadow-md":"border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"])},ue(i),11,gb))),128))])])]))}}),vb=[{name:"HTML",icon:"vscode-icons:file-type-html"},{name:"CSS",icon:"devicon:css3"},{name:"SASS",icon:"vscode-icons:file-type-sass"},{name:"LESS",icon:"vscode-icons:file-type-less"},{name:"TailwindCSS",icon:"vscode-icons:file-type-tailwind"},{name:"Bootstrap",icon:"logos:bootstrap"},{name:"JavaScript",icon:"vscode-icons:file-type-js-official"},{name:"TypeScript",icon:"vscode-icons:file-type-typescript-official"},{name:"jQuery",icon:"devicon:jquery"},{name:"Vue",icon:"devicon:vuejs"},{name:"Pinia",icon:"logos:pinia"},{name:"React",icon:"devicon:react"},{name:"C#",icon:"devicon:csharp"},{name:"C++",icon:"vscode-icons:file-type-cpp3"},{name:"Python",icon:"vscode-icons:file-type-python"},{name:".NET",icon:"logos:dotnet"},{name:"Drizzle ORM",icon:"material-icon-theme:drizzle"},{name:"MongoDB",icon:"vscode-icons:file-type-mongo"},{name:"MySQL",icon:"logos:mysql"},{name:"PostgreSQL",icon:"devicon:postgresql"},{name:"Bash",icon:"logos:bash-icon"},{name:"Powershell",icon:"devicon:powershell"},{name:"Git",icon:"logos:git-icon"},{name:"Tinkercad",icon:"simple-icons:tinkercad"},{name:"Cisco CCNA",icon:"simple-icons:cisco"}],xb={items:vb},yb={All:0},bb=[{name:"Introduction to Networks",organization:"Cisco CCNA",date:2022,file:"CCNA_R-S-_Introduction_to_Networks_certificate.pdf",category:1},{name:"Routing and Switching Essentials",organization:"Cisco CCNA",date:2022,file:"CCNA_R-S-_Routing_and_Switching_Essentials_certificate.pdf",category:1},{name:"Scaling Networks",organization:"Cisco CCNA",date:2023,file:"CCNA_R-S-_Scaling_Networks_certificate.pdf",category:1},{name:"Connecting Networks",organization:"Cisco CCNA",date:2023,file:"CCNA_R-S-_Connecting_Networks_certificate.pdf",category:1},{name:"HTML and CSS",organization:"Certiport ITS",date:2025,file:"Cert62865252306.pdf",category:2},{name:"JavaScript",organization:"Certiport ITS",date:2025,file:"Cert89412100609.pdf",category:2},{name:"Python",organization:"Certiport ITS",date:2025,file:"Cert83853654138.pdf",category:2},{name:"Java",organization:"Certiport ITS",date:2026,file:"Cert91162610320.pdf",category:2},{name:"HTML5 Application Development",organization:"Certiport ITS",date:2025,file:"Cert6466175417.pdf",category:2},{name:"Device Configuration and Management",organization:"Certiport ITS",date:2025,file:"Cert50761751679.pdf",category:3},{name:"Cybersecurity",organization:"Certiport ITS",date:2026,file:"Cert89364340988.pdf",category:3},{name:"Networking",organization:"Certiport ITS",date:2026,file:"Cert7196369199.pdf",category:1},{name:"IT Essentials: PC Hardware and Software",organization:"Cisco",date:2021,file:"IT_Essentials_certificate.pdf",category:3}],Pd={categories:yb,items:bb},Pr=JSON.parse('[{"id":1,"title":"Matrixia","description":{"en":"A web application designed to perform matrix operations with ease.","hu":"A mátrixműveletek egyszerű végrehajtására tervezett webalkalmazás.","de":"Eine Webanwendung, mit der sich Matrixoperationen problemlos durchführen lassen."},"image":"/images/matrixia.png","tags":["Vue","TypeScript","TailwindCSS","C#",".NET","Axios"],"github":"https://github.com/cseri502/Matrixia","demo":null,"features":{"en":["Determinant calculation","Matrix rank","Matrix inversion","Transpose matrix","Adjoint (or adjugate) calculation"],"hu":["Determináns számítás","Mátrix rang","Mátrix invertálás","Mátrix transzponálás","Adjungált számítás"],"de":["Determinantenberechnung","Matrixrang","Matrixinversion","Matrix transponieren","Adjungierte (oder Koadjungierte) Berechnung"]}},{"id":2,"title":"Image Editor","description":{"en":"A modern, user-friendly web application built with React, TypeScript, and Tailwind CSS that allows users to edit images directly in their browser.","hu":"Egy modern, felhasználóbarát webalkalmazás React, TypeScript és Tailwind CSS alapokon, amely lehetővé teszi a képek közvetlen böngészőben történő szerkesztését.","de":"Eine moderne, benutzerfreundliche Webanwendung, die mit React, TypeScript und Tailwind CSS erstellt wurde und es Benutzern ermöglicht, Bilder direkt im Browser zu bearbeiten."},"image":"/images/image-editor.png","tags":["React","TypeScript","TailwindCSS"],"github":"https://github.com/cseri502/image-editor","demo":null,"features":{"en":["Image upload via drag-and-drop or file selection","Brightness adjustment (0-200%)","Grayscale effect (0-100%)","Saturation adjustment (0-200%)","Sepia effect (0-100%)","Blur effect (0-20px)","Rotate left/right (90-degree increments)","Flip horizontal","Flip vertical","Dark/light mode with system preference detection","Responsive design","Real-time preview of adjustments","Reset functionality","One-click image download with applied effects"],"hu":["Kép feltöltése drag-and-drop vagy fájlválasztás segítségével","Fényerő beállítás (0-200%)","Szürkeárnyalatos effekt (0-100%)","Telítettség módosítása (0-200%)","Szépia effekt (0-100%)","Elmosás effekt (0-20px)","Forgatás balra/jobbra (90 fokos lépésekben)","Vízszintes tükrözés","Függőleges tükrözés","Sötét/világos mód rendszerbeállítás alapján","Reszponzív kialakítás","Valós idejű előnézet","Visszaállítás funkció","Egyszerű képletöltés az alkalmazott effektekkel"],"de":["Bild-Upload per Drag-and-Drop oder Dateiauswahl","Helligkeitseinstellung (0-200%)","Graustufeneffekt (0-100%)","Sättigungsanpassung (0-200%)","Sepia-Effekt (0-100%)","Unschärfe-Effekt (0-20px)","Drehen nach links/rechts (90-Grad-Schritte)","Horizontal spiegeln","Vertikal spiegeln","Dunkel-/Hellmodus mit Systemvoreinstellung","Responsives Design","Echtzeit-Vorschau der Anpassungen","Zurücksetzen-Funktion","Ein-Klick-Bild-Download mit angewendeten Effekten"]}},{"id":3,"title":"Vault of Algorithms","description":{"en":"A React application to showcase algorithm implementations in multiple programming languages.","hu":"Egy React alkalmazás algoritmus implementációk bemutatására több programozási nyelven.","de":"Eine React-Anwendung zur Präsentation von Algorithmus-Implementierungen in mehreren Programmiersprachen."},"image":"/images/voa.png","tags":["React","TypeScript","TailwindCSS"],"github":"https://github.com/cseri502/vault-of-algorithms","demo":null,"features":{"en":["Algorithms in many languages: selected algorithm implementations in many programming languages","Smart search: easy search for algorithms by name, type or programming language","Light/dark theme: customizable interface for comfortable browsing","Responsive design: works perfectly on all devices"],"hu":["Algoritmusok sok nyelven: válogatott algoritmus implementációk sok programozási nyelven","Intelligens keresés: algoritmusok egyszerű keresése név, típus vagy programozási nyelv alapján","Világos/sötét téma: személyre szabható felület a kényelmes böngészéshez","Responsive design: minden eszközön tökéletesen működik"],"de":["Algorithmen in vielen Sprachen: ausgewählte Algorithmus-Implementierungen in vielen Programmiersprachen","Intelligente Suche: Einfache Suche nach Algorithmen nach Name, Typ oder Programmiersprache","Helles/Dunkles Thema: personalisierbare Oberfläche für bequemes Browsen","Responsive Design: funktioniert perfekt auf jedem Gerät"]}},{"id":4,"title":"Portfolio website","description":{"en":"A modern and clean website that showcases my projects, skills and professional experience.","hu":"Modern és letisztult weboldal, amely bemutatja projektjeimet, készségeimet és szakmai tapasztalataimat.","de":"Eine moderne und übersichtliche Website, die meine Projekte, Fähigkeiten und Berufserfahrung präsentiert."},"image":"/images/portfolio-website.png","tags":["Vue","TypeScript","TailwindCSS"],"github":"https://github.com/cseri502/vue-portfolio","demo":null,"features":{"en":["TODO: list features"],"hu":[],"de":[]}},{"id":5,"title":"Password Generator","description":{"en":"A web application that allows users to generate secure passwords based on customizable settings.","hu":"Egy webalkalmazás, amely lehetővé teszi biztonságos jelszavak generálását testreszabható beállítások alapján.","de":"Eine Webanwendung, die es Benutzern ermöglicht, sichere Passwörter basierend auf anpassbaren Einstellungen zu generieren."},"image":"/images/password-generator.png","tags":["Vue","TypeScript","TailwindCSS"],"github":"https://github.com/cseri502/password-generator","demo":null,"features":{"en":["Generate secure passwords with customizable settings","Adjust password length (8-32 characters)","Include or exclude uppercase letters (A-Z)","Include or exclude lowercase letters (a-z)","Include or exclude numbers (0-9)","Include or exclude special symbols (!, @, #, $, etc.)","One-click password copying","Real-time password preview","User-friendly slider for password length selection","Responsive design for all screen sizes"],"hu":["Biztonságos jelszavak generálása testreszabható beállításokkal","Jelszó hosszának beállítása (8-32 karakter)","Nagybetűk hozzáadása vagy kihagyása (A-Z)","Kisbetűk hozzáadása vagy kihagyása (a-z)","Számok hozzáadása vagy kihagyása (0-9)","Speciális karakterek hozzáadása vagy kihagyása (!, @, #, $, stb.)","Jelszó egy kattintással másolható","Valós idejű jelszó előnézet","Felhasználóbarát csúszka a jelszó hosszának kiválasztásához","Reszponzív kialakítás minden eszközre"],"de":["Sichere Passwörter mit anpassbaren Einstellungen generieren","Passwortlänge anpassen (8-32 Zeichen)","Großbuchstaben hinzufügen oder ausschließen (A-Z)","Kleinbuchstaben hinzufügen oder ausschließen (a-z)","Zahlen hinzufügen oder ausschließen (0-9)","Sonderzeichen hinzufügen oder ausschließen (!, @, #, $, etc.)","Ein-Klick-Passwortkopie","Echtzeit-Vorschau des Passworts","Benutzerfreundlicher Schieberegler zur Auswahl der Passwortlänge","Responsives Design für alle Bildschirmgrößen"]}},{"id":6,"title":"Type Master","description":{"en":"A sleek and minimalist typing test application designed to help users improve their typing speed and accuracy.","hu":"Egy elegáns és minimalista gépelési tesztalkalmazás, amely segít a felhasználóknak javítani a gépelési sebességet és pontosságot.","de":"Eine elegante und minimalistische Schreibtest-Anwendung, die Benutzern hilft, ihre Tippgeschwindigkeit und -genauigkeit zu verbessern."},"image":"/images/type-master.png","tags":["Vue","TypeScript","TailwindCSS","Axios"],"github":"https://github.com/cseri502/type-master","demo":"https://cseri502.github.io/type-master/","features":{"en":["Multiple difficulty levels (easy, medium, and hard)","Real-time typing speed (WPM) and accuracy percentage metrics","Quote-based challenges fetched from an external API","Sleek dark mode UI with monospace font","Responsive design for all screen sizes","Automatic test completion when you reach the end of the quote","One-click reset with the \\"New Quote\\" button","Detailed performance statistics after each test","Customizable difficulty settings","Modern, eye-friendly interface"],"hu":["Több nehézségi szint (könnyű, közepes és nehéz)","Valós idejű gépelési sebesség (WPM) és pontossági százalék mérőszámok","Idézeteken alapuló kihívások külső API-ról","Elegáns sötét mód UI monospace betűtípussal","Reszponzív kialakítás minden eszközre","Automatikus teszt befejezés az idézet végén","Egyetlen kattintással új teszt indítása az \\"Új idézet\\" gombbal","Részletes teljesítmény statisztikák minden teszt után","Testreszabható nehézségi beállítások","Modern, szembarát felület"],"de":["Mehrere Schwierigkeitsgrade (leicht, mittel und schwer)","Echtzeit-Tippgeschwindigkeit (WPM) und Genauigkeitsprozent-Metriken","Zitat-basierte Herausforderungen von einer externen API","Elegante Dunkelmodus-Benutzeroberfläche mit Monospace-Schrift","Responsives Design für alle Bildschirmgrößen","Automatischer Testabschluss am Ende des Zitats","Ein-Klick-Reset mit der Schaltfläche \\"Neues Zitat\\"","Detaillierte Leistungsstatistiken nach jedem Test","Anpassbare Schwierigkeitseinstellungen","Moderne, augenfreundliche Benutzeroberfläche"]}},{"id":7,"title":"GoMovies","description":{"en":"A full-stack movie management application that allows users to create, view, edit, and manage a personal movie collection.","hu":"Egy teljes körű filmkezelő alkalmazás, amellyel saját filmgyűjteményedet rendszerezheted, szerkesztheted és böngészheted.","de":"Eine umfassende Anwendung zur Verwaltung von Filmen, mit der Nutzer ihre persönliche Filmsammlung organisieren, bearbeiten und durchsuchen können."},"image":"/images/gomovies.png","tags":["Go","SQLite","React","TailwindCSS","TypeScript","Axios"],"github":"https://github.com/cseri502/GoMovies","demo":null,"features":{"en":["Create, update, and delete movies","Upload movie poster images","Search and filter movies","Sort movies by title, year, or rating","Responsive design for mobile and desktop","Interactive user interface with smooth interactions"],"hu":["Filmek hozzáadása, módosítása és törlése","Filmborítók feltöltése","Keresési és szűrési lehetőségek","Rendezés cím, év vagy értékelés alapján","Mobil- és asztali nézetre optimalizált kialakítás","Felhasználóbarát, gördülékeny kezelőfelület"],"de":["Filme hinzufügen, bearbeiten und entfernen","Hochladen von Filmcovern","Such- und Filterfunktionen","Sortieren nach Titel, Jahr oder Bewertung","Optimierte Darstellung für Mobilgeräte und Desktop","Intuitive Benutzeroberfläche mit flüssiger Bedienung"]}},{"id":8,"title":"Pixelworld","description":{"en":"A procedural 2D world generator where randomness meets creativity in a pixelated playground of infinite possibilities.","hu":"Egy procedurális 2D világ generátor, ahol a véletlenszerűség találkozik a kreativitással egy pixeles játszótéren, végtelen lehetőségekkel.","de":"Ein prozeduraler 2D-Weltgenerator, bei dem Zufall auf Kreativität in einem pixeligen Spielplatz unendlicher Möglichkeiten trifft."},"image":"/images/pixelworld.png","tags":["C#","Raylib",".NET"],"github":"https://github.com/cseri502/pixelworld","demo":null,"features":{"en":["Create a procedural pixel world with unique landscapes","Move the camera by holding down the right click at the edges of the window","Break and modify terrain with the left mouse button","Experience a new world with each generation","Cross-platform compatibility","High-performance rendering through Raylib","Endless exploration possibilities","Creative playground with no strict rules","Beautiful pixel art textures from Faithful resource pack"],"hu":["Procedurális pixel világ létrehozása egyedi tájképekkel","Kamera mozgatása jobb egérgombbal az ablak széleinél","Terep módosítása és rombolása bal egérgombbal","Minden generálásnál új világ élménye","Platformfüggetlen kompatibilitás","Nagy teljesítményű renderelés Raylib segítségével","Végtelen felfedezési lehetőségek","Kreatív játszótér szigorú szabályok nélkül","Gyönyörű pixel art textúrák a Faithful resource pack-ből"],"de":["Erstellung einer prozeduralen Pixelwelt mit einzigartigen Landschaften","Bewegen der Kamera durch Halten der rechten Maustaste an den Fensterrändern","Terrain mit der linken Maustaste brechen und modifizieren","Erleben Sie bei jeder Generierung eine neue Welt","Plattformübergreifende Kompatibilität","Hochleistungs-Rendering durch Raylib","Endlose Erkundungsmöglichkeiten","Kreativer Spielplatz ohne strenge Regeln","Schöne Pixel-Art-Texturen aus dem Faithful Resource Pack"]}},{"id":9,"title":"Bouncy Balls","description":{"en":"A visual simulation developed with C# and Raylib that displays bouncing circles within a larger circle outline. The program demonstrates principles of collision detection, angle and vector handling, and implementation of basic game physics in a 2D environment.","hu":"Egy vizuális szimuláció, amely C# és Raylib használatával készült, és pattogó köröket jelenít meg egy nagyobb körvázon belül. A program bemutatja az ütközés- és vektorkezelés alapelveit, valamint a 2D-s környezetben történő alapvető játékmechanika megvalósítását.","de":"Eine visuelle Simulation, die mit C# und Raylib entwickelt wurde und springende Kreise innerhalb einer größeren Kreisumriss anzeigt. Das Programm demonstriert die Prinzipien der Kollisionsdetektion, Winkel- und Vektorkontrolle sowie die Implementierung grundlegender Spielphysik in einer 2D-Umgebung."},"image":"/images/bouncy-balls.png","tags":["C#","Raylib",".NET"],"github":"https://github.com/cseri502/bouncy-balls","demo":null,"features":{"en":["Visual simulation of bouncing circles within a larger circle outline","Demonstrates principles of collision detection, angle and vector handling","Implementation of basic game physics in a 2D environment","Developed with C# and Raylib"],"hu":["Pattogó körök vizuális szimulációja egy nagyobb körvázon belül","Ütközés- és vektorkezelés alapelveinek bemutatása","Alapvető játékmechanika megvalósítása 2D környezetben","C# és Raylib használatával fejlesztve"],"de":["Visuelle Simulation von springenden Kreisen innerhalb einer größeren Kreisumriss","Demonstration der Prinzipien der Kollisionsdetektion, Winkel- und Vektorkontrolle","Implementierung grundlegender Spielphysik in einer 2D-Umgebung","Entwickelt mit C# und Raylib"]}}]'),Sb={class:"bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-24 relative"},Mb={class:"section-container"},Eb={class:"flex flex-col md:flex-row items-center"},Tb={class:"md:w-1/2 mb-8 md:mb-0"},wb={class:"text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"},Ab={class:"text-sky-500"},Rb={class:"flex flex-wrap gap-3"},Cb={href:"#about",class:"btn btn-primary"},Pb={href:"#contact",class:"btn btn-outline"},Db={id:"about",class:"bg-white dark:bg-gray-900 py-20 relative"},Ib={class:"section-container"},Lb={class:"max-w-3xl mx-auto text-center"},kb=["innerHTML"],Ub={id:"education",class:"bg-gray-50 dark:bg-gray-950 py-20 relative"},Nb={class:"section-container"},Fb={class:"max-w-3xl mx-auto"},Ob={class:"space-y-8"},zb={id:"skills",class:"bg-white dark:bg-gray-900 py-20 relative"},Bb={class:"section-container"},Hb={class:"mb-12"},Vb={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"},Gb={class:"mt-16 pt-8 border-t border-gray-100 dark:border-gray-800"},Wb={class:"text-center text-2xl font-bold text-gray-900 dark:text-white"},jb={class:"text-center text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"},Xb={class:"max-w-6xl mx-auto mt-8"},$b={class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"},qb=["href"],Yb={class:"font-medium text-gray-900 dark:text-white duration-200 transition-colors hover:text-sky-200 hover:underline cursor-pointer"},Kb={class:"text-sm text-gray-600 dark:text-gray-400"},Zb={id:"projects",class:"bg-gray-50 dark:bg-gray-950 py-20 relative"},Jb={class:"section-container"},Qb={class:"text-center text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"},eS={class:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"},tS={class:"absolute inset-0 opacity-20 pointer-events-none overflow-hidden"},nS={class:"absolute right-6 bottom-6 text-6xl text-sky-800 dark:text-sky-500"},iS={class:"relative z-10"},rS={class:"flex items-center mb-4"},sS={class:"bg-sky-500/10 p-3 rounded-md mr-3 flex-shrink-0"},oS={class:"text-xl font-bold text-gray-900 dark:text-white"},aS={class:"text-gray-600 dark:text-gray-400 mb-4"},lS={class:"flex flex-wrap gap-2 mb-4"},cS={class:"mt-4"},uS={class:"text-center mt-10"},dS={id:"contact",class:"bg-white dark:bg-gray-900 py-20 relative"},fS={class:"section-container"},hS={class:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"},pS={class:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full"},mS={class:"text-xl font-semibold mb-6 text-gray-900 dark:text-white"},gS={class:"space-y-6"},_S={class:"bg-sky-500/10 p-3 rounded-full mr-4 flex-shrink-0"},vS={class:"min-w-0 flex-1"},xS={class:"font-medium text-gray-900 dark:text-white"},yS=["href","target","rel"],bS={class:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"},SS=Ft({__name:"Home",setup(t){const{t:e,currentLanguage:n}=$n(),i=xb.items,r=Pd.items,s=Pd.categories,o=Tt(s.All),a=Tt(null),l=()=>{a.value&&a.value.stop();const d=document.getElementById("role-span");a.value=new Sy(d,{strings:e.value.hero.role,autoStart:!0,loop:!0,delay:75})};_n(n,()=>{l()}),kn(()=>{l()});const c=ct(()=>e.value.education.items.sort((d,f)=>d.startYear!==f.startYear?f.startYear-d.startYear:(d.endYear||1/0)-(f.endYear||1/0))),u=ct(()=>o.value===s.All?[...r].sort((d,f)=>f.date-d.date):r.filter(d=>d.category===o.value).sort((d,f)=>f.date-d.date));return(d,f)=>{const p=Fs("router-link");return Te(),ke("div",null,[R("section",Sb,[R("div",Mb,[R("div",Eb,[R("div",Tb,[R("h1",wb,[bt(ue(q(e).hero.greeting)+" ",1),R("span",Ab,ue(q(e).hero.name),1)]),f[1]||(f[1]=R("p",{class:"text-xl font-mono text-gray-700 dark:text-gray-300 mb-8"},[bt(" // "),R("span",{id:"role-span"})],-1)),R("div",Rb,[R("a",Cb,ue(q(e).hero.learnMore),1),R("a",Pb,ue(q(e).hero.contactMe),1)])]),f[2]||(f[2]=Jg('<div class="md:w-1/2 flex justify-center"><div class="relative"><div class="absolute -inset-2 w-84 h-84 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 blur-md opacity-70 animate-pulse"></div><div class="w-80 h-80 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 p-1.5 shadow-xl relative z-10"><div class="w-full h-full rounded-full bg-[url(&#39;/IMG_146.jpg&#39;)] bg-cover"></div></div></div></div>',1))])])]),R("section",Db,[R("div",Ib,[we(Rr,{title:q(e).about.title},null,8,["title"]),R("div",Lb,[R("p",{class:"text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed",innerHTML:q(e).about.content.replace(/\n/g,"<br>")},null,8,kb),wt("",!0)])])]),R("section",Ub,[R("div",Nb,[we(Rr,{title:q(e).education.title},null,8,["title"]),R("div",Fb,[R("div",Ob,[(Te(!0),ke(mt,null,Ct(c.value,(g,_)=>(Te(),$t(Iy,{key:_,institution:g.institution,degree:g.degree,period:`${g.startYear} - ${g.endYear||q(e).education.present}`,description:g.description},null,8,["institution","degree","period","description"]))),128))])])])]),R("section",zb,[R("div",Bb,[we(Rr,{title:q(e).skills.title},null,8,["title"]),R("div",Hb,[R("div",Vb,[(Te(!0),ke(mt,null,Ct(q(i),g=>(Te(),$t(Ty,{key:g.name,name:g.name,icon:g.icon},null,8,["name","icon"]))),128))])]),R("div",Gb,[R("h3",Wb,ue(q(e).skills.certifications),1),R("p",jb,ue(q(e).skills.certInfo),1),we(_b,{categories:q(e).skills.certCategories,modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=g=>o.value=g)},null,8,["categories","modelValue"]),R("div",Xb,[R("div",$b,[(Te(!0),ke(mt,null,Ct(u.value,g=>(Te(),ke("div",{key:g.name,class:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start hover:shadow-md transition-shadow duration-200"},[we(q(Ve),{icon:"ph:certificate",class:"w-6 h-6 text-sky-500 mr-3 mt-1 flex-shrink-0"}),R("div",null,[R("a",{href:`/certificates/${g.file}`,target:"_blank",rel:"noopener noreferrer"},[R("h4",Yb,ue(g.name),1)],8,qb),R("p",Kb,ue(g.organization)+" | "+ue(g.date),1)])]))),128))])])])])]),R("section",Zb,[R("div",Jb,[we(Rr,{title:q(e).projects.title},null,8,["title"]),R("p",Qb,ue(q(e).projects.description),1),R("div",eS,[(Te(!0),ke(mt,null,Ct(q(Pr).filter(g=>["Matrixia","Vault of Algorithms","GoMovies","Type Master"].includes(g.title)),g=>(Te(),ke("div",{key:g.id,class:"bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200 relative"},[R("div",tS,[R("div",nS,[g.title==="Matrixia"?(Te(),$t(q(Ve),{key:0,icon:"mdi:matrix"})):wt("",!0),g.title==="Vault of Algorithms"?(Te(),$t(q(Ve),{key:1,icon:"ph:vault-duotone"})):wt("",!0),g.title==="GoMovies"?(Te(),$t(q(Ve),{key:2,icon:"bxs:movie-play"})):wt("",!0),g.title==="Type Master"?(Te(),$t(q(Ve),{key:3,icon:"material-symbols-light:keyboard-rounded"})):wt("",!0)])]),R("div",iS,[R("div",rS,[R("div",sS,[we(q(Ve),{icon:"ph:code",class:"w-6 h-6 text-sky-500"})]),R("h3",oS,ue(g.title),1)]),R("p",aS,ue(g.description[q(n)]),1),R("div",lS,[(Te(!0),ke(mt,null,Ct(g.tags,_=>(Te(),ke("span",{key:_,class:"text-xs px-2 py-1 bg-sky-500/10 text-sky-700 dark:text-sky-300 rounded-md"},ue(_),1))),128))]),R("div",cS,[we(p,{to:`projects/${g.id}`,class:"inline-flex items-center px-3 py-1.5 text-sm bg-sky-600 hover:bg-sky-700 text-white rounded-md transition-colors duration-200"},{default:Pi(()=>[bt(ue(q(e).projects.viewProject)+" ",1),we(q(Ve),{icon:"ph:arrow-right",class:"ml-1 w-4 h-4"})]),_:1},8,["to"])])])]))),128))]),R("div",uS,[we(p,{to:"/projects",class:"btn btn-outline"},{default:Pi(()=>[bt(ue(q(e).projects.viewAll),1)]),_:1})])])]),R("section",dS,[R("div",fS,[we(Rr,{title:q(e).contact.title},null,8,["title"]),R("div",hS,[R("div",null,[R("div",pS,[R("h3",mS,ue(q(e).contact.info),1),R("div",gS,[(Te(!0),ke(mt,null,Ct(q(gp),(g,_)=>(Te(),ke("div",{key:_,class:"flex items-start"},[R("div",_S,[we(q(Ve),{icon:g.icon,class:"w-5 h-5 text-sky-500"},null,8,["icon"])]),R("div",vS,[R("h4",xS,ue(g.title),1),R("a",{href:g.type==="email"?`mailto:${g.link}`:g.link,target:g.external?"_blank":"",rel:g.external?"noopener noreferrer":"",class:"text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500 break-all overflow-hidden text-ellipsis"},ue(g.link),9,yS)])]))),128))])])]),R("div",null,[R("div",bS,[we(ab)])])])])])])}}}),eo=Tt("projects");function Zc(){const t=Xc(),e=Bs(),n=r=>{eo.value=r;const s={...e.query};s.tab=r,t.replace({path:e.path,query:s})};return{activeTab:eo,setActiveTab:n,initializeTabFromUrl:()=>{const r=e.query.tab;r&&(r==="projects"||r==="models")?eo.value=r:(eo.value="projects",e.path==="/projects"&&n("projects"))}}}const Jc=Ft({__name:"Tag",props:{text:{},isSmall:{type:Boolean}},setup(t){return(e,n)=>(Te(),ke("span",{class:an([t.isSmall?"text-xs px-2":"text-sm px-3","py-1 bg-sky-500/10 text-sky-600 dark:text-sky-300 rounded-md"])},ue(t.text),3))}}),MS={class:"bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"},ES={class:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"},TS={key:1,class:"h-48 bg-gradient-to-r from-blue-500 to-sky-500 flex items-center justify-center relative group"},wS={class:"p-6 flex-grow flex flex-col"},AS={class:"text-xl font-bold text-gray-900 dark:text-white mb-3"},RS={class:"text-gray-600 dark:text-gray-400 mb-4 flex-grow"},CS={key:0,class:"mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"},PS={class:"flex items-center mb-2"},DS={class:"text-sm font-medium text-gray-700 dark:text-gray-300"},IS={class:"flex flex-wrap gap-3"},LS=["href"],kS=["href"],US={class:"flex flex-wrap gap-2 mb-4"},NS={class:"p-4 pt-0 mt-auto"},FS=Ft({__name:"ProjectCard",props:{project:{}},setup(t){const{t:e}=$n();return(n,i)=>{const r=Fs("router-link");return Te(),ke("div",MS,[t.project.image?(Te(),ke("div",{key:0,class:"h-48 bg-cover bg-center relative group",style:ks({backgroundImage:`url(${t.project.image})`})},[R("div",ES,[we(q(Ve),{icon:"ph:code",class:"w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"})])],4)):(Te(),ke("div",TS,[we(q(Ve),{icon:"ph:code",class:"w-16 h-16 text-white opacity-80"}),i[0]||(i[0]=R("div",{class:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"},null,-1))])),R("div",wS,[R("h3",AS,ue(t.project.title),1),R("p",RS,ue(t.project.description),1),t.project.github||t.project.demo?(Te(),ke("div",CS,[R("div",PS,[we(q(Ve),{icon:"ph:link",class:"w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"}),R("span",DS,ue(q(e).projects.page.links),1)]),R("div",IS,[t.project.github?(Te(),ke("a",{key:0,href:t.project.github,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center text-xs text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"},[we(q(Ve),{icon:"ph:github-logo",class:"w-3 h-3 mr-1"}),i[1]||(i[1]=bt(" GitHub ",-1))],8,LS)):wt("",!0),t.project.demo?(Te(),ke("a",{key:1,href:t.project.demo,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center text-xs text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"},[we(q(Ve),{icon:"ph:globe",class:"w-3 h-3 mr-1"}),bt(" "+ue(q(e).projects.details.demo),1)],8,kS)):wt("",!0)])])):wt("",!0),R("div",US,[(Te(!0),ke(mt,null,Ct(t.project.tags,s=>(Te(),$t(Jc,{key:s,text:s,isSmall:!0},null,8,["text"]))),128))])]),R("div",NS,[we(r,{to:`/projects/${t.project.id}`,class:"w-full bg-gradient-to-r from-blue-500 to-sky-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 inline-flex items-center justify-center group"},{default:Pi(()=>[we(q(Ve),{icon:"ph:info",class:"mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-200"}),R("span",null,ue(q(e).projects.card),1),we(q(Ve),{icon:"ph:arrow-right",class:"ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"})]),_:1},8,["to"])])])}}}),OS={class:"bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"},zS={class:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"},BS={key:1,class:"h-48 bg-gradient-to-r from-blue-500 to-sky-500 flex items-center justify-center relative group"},HS={class:"p-6 flex-grow flex flex-col"},VS={class:"text-xl font-bold text-gray-900 dark:text-white mb-3"},GS={class:"text-gray-600 dark:text-gray-400 mb-4 flex-grow"},WS={key:0,class:"mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"},jS={class:"flex items-center mb-2"},XS={class:"text-sm font-medium text-gray-700 dark:text-gray-300"},$S={class:"text-sm text-gray-600 dark:text-gray-400"},qS={class:"flex flex-wrap gap-2 mb-4"},YS={class:"p-4 pt-0 mt-auto"},KS=Ft({__name:"ModelCard",props:{model:{}},setup(t){const{t:e}=$n();return(n,i)=>{const r=Fs("router-link");return Te(),ke("div",OS,[t.model.thumbnail?(Te(),ke("div",{key:0,class:"h-48 bg-cover bg-center relative group",style:ks({backgroundImage:`url(${t.model.thumbnail})`})},[R("div",zS,[we(q(Ve),{icon:"ph:cube",class:"w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"})])],4)):(Te(),ke("div",BS,[we(q(Ve),{icon:"ph:cube",class:"w-16 h-16 text-white opacity-80"}),i[0]||(i[0]=R("div",{class:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"},null,-1))])),R("div",HS,[R("h3",VS,ue(t.model.title),1),R("p",GS,ue(t.model.description),1),t.model.dimensions?(Te(),ke("div",WS,[R("div",jS,[we(q(Ve),{icon:"ph:ruler",class:"w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"}),R("span",XS,ue(q(e).projects.modelDetails.specifications.dimensions),1)]),R("div",$S,ue(t.model.dimensions.width)+" × "+ue(t.model.dimensions.height)+" × "+ue(t.model.dimensions.depth)+" "+ue(t.model.dimensions.unit),1)])):wt("",!0),R("div",qS,[(Te(!0),ke(mt,null,Ct(t.model.tags,s=>(Te(),ke("span",{key:s,class:"text-xs px-2 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-md"},ue(s),1))),128))])]),R("div",YS,[we(r,{to:`/models/${t.model.id}`,class:"w-full bg-gradient-to-r from-blue-500 to-sky-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 inline-flex items-center justify-center group"},{default:Pi(()=>[we(q(Ve),{icon:"ph:cube",class:"mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-200"}),R("span",null,ue(q(e).projects.modelDetails.viewIn3D),1),we(q(Ve),{icon:"ph:arrow-right",class:"ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"})]),_:1},8,["to"])])])}}}),cs=[{id:1,title:"Phone Stand",description:{en:"An ergonomic phone stand designed for desktop use with charging cable support. Features a strategically placed cutout at the bottom middle to maintain access to the home indicator on iOS and Android devices while charging. The stand offers optimal viewing angles for video calls, media consumption, and notifications while keeping your device securely positioned and easily accessible.",hu:"Ergonomikus telefontartó asztali használatra, töltőkábel támogatással. Stratégiailag elhelyezett kivágással rendelkezik az alsó középső részen, hogy a töltés közben is hozzáférhető maradjon az iOS és Android eszközök otthon indikátora. A tartó optimális megtekintési szögeket kínál videohívásokhoz, médiafogyasztáshoz és értesítésekhez, miközben biztonságosan tartja és könnyen elérhetővé teszi az eszközt.",de:"Ein ergonomischer Telefonständer für den Desktop-Einsatz mit Ladekabel-Unterstützung. Verfügt über einen strategisch platzierten Ausschnitt in der unteren Mitte, um den Zugriff auf die Home-Anzeige bei iOS- und Android-Geräten während des Ladens zu gewährleisten. Der Ständer bietet optimale Betrachtungswinkel für Videoanrufe, Medienkonsum und Benachrichtigungen, während Ihr Gerät sicher positioniert und leicht zugänglich bleibt."},thumbnail:null,stlFile:"/models/phone-stand.STL",tags:["Phone","Desktop","Ergonomic","Charging","Accessory","Mobile"],dimensions:{width:70,height:113,depth:70,unit:"mm"},printSettings:{layerHeight:.2,infill:25,printTime:"5h 29m"}},{id:2,title:"Card Holder",description:{en:"A handy desktop organizer that holds credit card-sized cards and a pen. It's simple and practical - just what you need to keep your desk tidy without taking up much space. There's a small '2025' engraved inside the card slot, which was added when the model was designed as a little detail.",hu:"Praktikus asztali rendszerező bankkártya méretű kártyákhoz és egy tollhoz. Egyszerű és hasznos - pont amire szükség van az íróasztal rendben tartásához anélkül, hogy sok helyet foglalna. A kártyatartóban egy kis '2025' gravírozás található, amit a tervezés során adtam hozzá apró részletként.",de:"Ein praktischer Schreibtisch-Organizer für Karten in Kreditkartengröße und einen Stift. Einfach und nützlich - genau das, was man braucht, um den Schreibtisch ordentlich zu halten, ohne viel Platz wegzunehmen. Im Kartenfach ist eine kleine '2025' eingraviert, die beim Entwerfen als kleines Detail hinzugefügt wurde."},thumbnail:null,stlFile:"/models/card-holder.stl",tags:["Card","Desktop","Pen","Accessory"],dimensions:{width:120,height:25,depth:25,unit:"mm"},printSettings:{layerHeight:.2,infill:15,printTime:"37m"}},{id:3,title:"Gear Shaped Spinner",description:{en:"A fidget spinner with a gear design that spins just like the classic version. The cool thing about this one is that it prints in one piece - no need to add bearings or assemble anything. Just print it and it's ready to spin. Perfect for keeping your hands busy or just having something satisfying to fidget with.",hu:"Egy fogaskerék alakú fidget spinner, ami ugyanúgy pörög, mint a klasszikus változat. A különlegessége, hogy egy darabban nyomtatható - nem kell csapágyat belerakni vagy összeszerelni. Csak kinyomtatod és már pöröghet is. Tökéletes arra, hogy elfoglald a kezed, vagy csak legyen valami nyugtató, amivel játszhatsz.",de:"Ein Fidget Spinner mit Zahnrad-Design, der genauso funktioniert wie die klassische Version. Das Besondere daran: er wird in einem Stück gedruckt - keine Kugellager einbauen oder zusammenbauen nötig. Einfach drucken und schon kann gedreht werden. Perfekt, um die Hände beschäftigt zu halten oder einfach etwas Beruhigendes zum Spielen zu haben."},thumbnail:null,stlFile:"/models/gear-spinner.stl",tags:["Gear","Spinner","Toy"],dimensions:{width:55,height:7,depth:55,unit:"mm"},printSettings:{layerHeight:.2,infill:15,printTime:"17m"}},{id:4,title:"Hodor Wedge",description:{en:"A simple door wedge with 'HODOR' printed on it. It's a Game of Thrones reference - 'Hold the door!' - but it works just like any regular door stop. Perfect for keeping your doors open.",hu:"Egy egyszerű ajtóék 'HODOR' felirattal. Trónok Harca utalás a 'Hold the door!' jelenetre, de pont úgy működik, mint bármelyik hagyományos ajtótámasz. Tökéletes ajtók nyitva tartásához.",de:"Ein einfacher Türkeil mit 'HODOR' Aufdruck. Eine Game of Thrones Anspielung auf 'Hold the door!' - funktioniert aber wie jeder normale Türstopper. Perfekt zum Offenhalten von Türen."},thumbnail:null,stlFile:"/models/door-wedge.stl",tags:["Accessory","Home"],dimensions:{width:50,height:10,depth:20,unit:"mm"},printSettings:{layerHeight:.2,infill:20,printTime:"12m"}}],ZS={class:"bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 backdrop-blur-sm min-h-screen py-16 relative"},JS={class:"section-container"},QS={class:"text-center text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"},eM={class:"flex justify-center mb-8"},tM={class:"w-1/2 flex flex-col md:flex-row bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-1 border border-gray-200/30 dark:border-gray-700/30"},nM={class:"ml-2 text-sm opacity-75"},iM={class:"ml-2 text-sm opacity-75"},rM={class:"mb-8"},sM={class:"flex flex-wrap gap-2 justify-center"},oM=["onClick"],aM={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},lM={key:0,class:"text-center py-12"},cM={class:"mt-4 text-lg font-medium text-gray-900 dark:text-white"},uM={class:"mt-2 text-gray-600 dark:text-gray-400"},dM=Ft({__name:"Projects",setup(t){const{t:e,currentLanguage:n}=$n(),{activeTab:i,setActiveTab:r,initializeTabFromUrl:s}=Zc(),o=Tt(""),a=Bs();kn(()=>{s()}),_n(()=>a.query.tab,_=>{_&&(_==="projects"||_==="models")&&(i.value=_)},{immediate:!0});const l=ct(()=>o.value?Pr.filter(_=>_.tags.some(m=>m.toLowerCase().includes(o.value.toLowerCase()))):Pr),c=ct(()=>o.value?cs.filter(_=>_.tags.some(m=>m.toLowerCase().includes(o.value.toLowerCase()))):cs),u=ct(()=>{const _=new Set;return Pr.forEach(m=>{m.tags.forEach(h=>_.add(h))}),Array.from(_).sort()}),d=ct(()=>{const _=new Set;return cs.forEach(m=>{m.tags.forEach(h=>_.add(h))}),Array.from(_).sort()}),f=ct(()=>i.value==="projects"?u.value:d.value),p=ct(()=>i.value==="projects"?l.value:c.value);function g(_){r(_),o.value=""}return(_,m)=>(Te(),ke("div",ZS,[R("div",JS,[we(Rr,{title:q(e).projects.page.title},null,8,["title"]),R("p",QS,ue(q(e).projects.page.subtitle),1),R("div",eM,[R("div",tM,[R("button",{onClick:m[0]||(m[0]=h=>g("projects")),class:an(["w-full px-6 py-2 rounded-md transition-all duration-150 flex items-center justify-center cursor-pointer",q(i)==="projects"?"bg-sky-500 text-white shadow-lg":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"])},[we(q(Ve),{icon:"ph:code",class:"mr-2 w-5 h-5"}),bt(" "+ue(q(e).projects.page.projectTypes[0])+" ",1),R("span",nM,"("+ue(q(Pr).length)+")",1)],2),R("button",{onClick:m[1]||(m[1]=h=>g("models")),class:an(["w-full px-6 py-2 rounded-md transition-all duration-150 flex items-center justify-center cursor-pointer",q(i)==="models"?"bg-sky-500 text-white shadow-lg":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"])},[we(q(Ve),{icon:"ph:cube",class:"mr-2 w-5 h-5"}),bt(" "+ue(q(e).projects.page.projectTypes[1])+" ",1),R("span",iM,"("+ue(q(cs).length)+")",1)],2)])]),R("div",rM,[R("div",sM,[R("button",{onClick:m[2]||(m[2]=h=>o.value=""),class:an(["px-3 py-1 text-sm transition-colors duration-200 rounded-sm cursor-pointer",[o.value===""?"text-white":"bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/30 dark:border-gray-700/30",q(i)==="projects"&&o.value===""?"bg-sky-500":"",q(i)==="models"&&o.value===""?"bg-sky-500":""]])},ue(q(i)==="projects"?q(e).projects.page.all:"All Models"),3),(Te(!0),ke(mt,null,Ct(f.value,h=>(Te(),ke("button",{key:h,onClick:M=>o.value=h,class:an(["px-3 py-1 text-sm transition-colors duration-200 rounded-sm cursor-pointer",[o.value===h?"text-white":"bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/30 dark:border-gray-700/30",q(i)==="projects"&&o.value===h?"bg-sky-500":"",q(i)==="models"&&o.value===h?"bg-sky-500":""]])},ue(h),11,oM))),128))])]),R("div",aM,[q(i)==="projects"?(Te(!0),ke(mt,{key:0},Ct(l.value,h=>(Te(),$t(FS,{key:h.id,project:{id:h.id,title:h.title,description:h.description[q(n)],demo:h.demo,github:h.github,image:h.image,tags:h.tags}},null,8,["project"]))),128)):(Te(!0),ke(mt,{key:1},Ct(c.value,h=>(Te(),$t(KS,{key:h.id,model:{id:h.id,title:h.title,description:h.description[q(n)],thumbnail:h.thumbnail,stlFile:h.stlFile,tags:h.tags,dimensions:h.dimensions,printSettings:h.printSettings}},null,8,["model"]))),128))]),p.value.length===0?(Te(),ke("div",lM,[we(q(Ve),{icon:q(i)==="projects"?"ph:folder-open":"ph:cube",class:"w-16 h-16 mx-auto text-gray-400 dark:text-gray-600"},null,8,["icon"]),R("h3",cM,ue(q(i)==="projects"?q(e).projects.page.noProjects:"No models found"),1),R("p",uM,ue(q(i)==="projects"?q(e).projects.page.noItemsFound:"Try adjusting your filter or check back later for new models."),1)])):wt("",!0)])]))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="176",ur={ROTATE:0,DOLLY:1,PAN:2},dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fM=0,Dd=1,hM=2,Tp=1,pM=2,ni=3,ki=0,ln=1,ai=2,Di=0,Nr=1,Id=2,Ld=3,kd=4,mM=5,Yi=100,gM=101,_M=102,vM=103,xM=104,yM=200,bM=201,SM=202,MM=203,Vl=204,Gl=205,EM=206,TM=207,wM=208,AM=209,RM=210,CM=211,PM=212,DM=213,IM=214,Wl=0,jl=1,Xl=2,Gr=3,$l=4,ql=5,Yl=6,Kl=7,wp=0,LM=1,kM=2,Ii=0,UM=1,NM=2,FM=3,OM=4,zM=5,BM=6,HM=7,Ap=300,Wr=301,jr=302,Zl=303,Jl=304,Ea=306,Ql=1e3,Ji=1001,ec=1002,Dn=1003,VM=1004,to=1005,zn=1006,$a=1007,Qi=1008,jn=1009,Rp=1010,Cp=1011,Cs=1012,eu=1013,rr=1014,li=1015,Vs=1016,tu=1017,nu=1018,Ps=1020,Pp=35902,Dp=1021,Ip=1022,Cn=1023,Ds=1026,Is=1027,Lp=1028,iu=1029,kp=1030,ru=1031,su=1033,ko=33776,Uo=33777,No=33778,Fo=33779,tc=35840,nc=35841,ic=35842,rc=35843,sc=36196,oc=37492,ac=37496,lc=37808,cc=37809,uc=37810,dc=37811,fc=37812,hc=37813,pc=37814,mc=37815,gc=37816,_c=37817,vc=37818,xc=37819,yc=37820,bc=37821,Oo=36492,Sc=36494,Mc=36495,Up=36283,Ec=36284,Tc=36285,wc=36286,GM=3200,WM=3201,Np=0,jM=1,Ri="",Sn="srgb",Xr="srgb-linear",ea="linear",_t="srgb",fr=7680,Ud=519,XM=512,$M=513,qM=514,Fp=515,YM=516,KM=517,ZM=518,JM=519,Nd=35044,Fd="300 es",ci=2e3,ta=2001;let qr=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}};const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qa=Math.PI/180,Ac=180/Math.PI;function Gs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function QM(t,e){return(t%e+e)%e}function Ya(t,e,n){return(1-n)*t+n*e}function is(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,n,i,r,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],M=r[1],E=r[4],x=r[7],k=r[2],D=r[5],C=r[8];return s[0]=o*_+a*M+l*k,s[3]=o*m+a*E+l*D,s[6]=o*h+a*x+l*C,s[1]=c*_+u*M+d*k,s[4]=c*m+u*E+d*D,s[7]=c*h+u*x+d*C,s[2]=f*_+p*M+g*k,s[5]=f*m+p*E+g*D,s[8]=f*h+p*x+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ka.makeScale(e,n)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ka.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new Qe;function Op(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function na(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eE(){const t=na("canvas");return t.style.display="block",t}const Od={};function zo(t){t in Od||(Od[t]=!0,console.warn(t))}function tE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function nE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function iE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bd=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rE(){const t={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(r.r=Fr(r.r),r.g=Fr(r.g),r.b=Fr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ri?ea:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Xr]:{primaries:e,whitePoint:i,transfer:ea,toXYZ:zd,fromXYZ:Bd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:zd,fromXYZ:Bd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),t}const lt=rE();function ui(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let hr;class sE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hr===void 0&&(hr=na("canvas")),hr.width=e.width,hr.height=e.height;const r=hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=hr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=na("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ui(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ui(n[i]/255)*255):n[i]=ui(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oE=0;class ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Za(r[o].image)):s.push(Za(r[o]))}else s=Za(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Za(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aE=0;class cn extends qr{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Ji,r=Ji,s=zn,o=Qi,a=Cn,l=jn,c=cn.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Gs(),this.name="",this.source=new ou(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ql:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ql:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Ap;cn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,x=(p+1)/2,k=(h+1)/2,D=(u+f)/4,C=(d+_)/4,F=(g+m)/4;return E>x&&E>k?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=D/i,s=C/i):x>k?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=D/r,s=F/r):k<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(k),i=C/s,r=F/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lE extends qr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth?i.depth:1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ou(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends lE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class zp extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cE extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d!==_||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*_,M=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const k=Math.sqrt(E),D=Math.atan2(k,h*M);m=Math.sin(m*D)/k,a=Math.sin(a*D)/k}const x=a*M;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,d=d*m+_*x,m===1-a){const k=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=k,c*=k,u*=k,d*=k}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-a*p,e[n+2]=c*g+u*p+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new J,Hd=new or;class Ws{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),io.subVectors(this.max,rs),pr.subVectors(e.a,rs),mr.subVectors(e.b,rs),gr.subVectors(e.c,rs),vi.subVectors(mr,pr),xi.subVectors(gr,mr),Bi.subVectors(pr,gr);let n=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Bi.z,Bi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Bi.z,0,-Bi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Bi.y,Bi.x,0];return!Qa(n,pr,mr,gr,io)||(n=[1,0,0,0,1,0,0,0,1],!Qa(n,pr,mr,gr,io))?!1:(ro.crossVectors(vi,xi),n=[ro.x,ro.y,ro.z],Qa(n,pr,mr,gr,io))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new J,new J,new J,new J,new J,new J,new J,new J],Tn=new J,no=new Ws,pr=new J,mr=new J,gr=new J,vi=new J,xi=new J,Bi=new J,rs=new J,io=new J,ro=new J,Hi=new J;function Qa(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Hi.fromArray(t,s);const a=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),l=e.dot(Hi),c=n.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uE=new Ws,ss=new J,el=new J;class au{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const n=ss.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ss,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(el)),this.expandByPoint(ss.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new J,tl=new J,so=new J,yi=new J,nl=new J,oo=new J,il=new J;class Bp{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tl.copy(e).add(n).multiplyScalar(.5),so.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(tl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(so),a=yi.dot(this.direction),l=-yi.dot(so),c=yi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(tl).addScaledVector(so,f),p}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){nl.subVectors(n,e),oo.subVectors(i,e),il.crossVectors(nl,oo);let o=this.direction.dot(il),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(oo.crossVectors(yi,oo));if(l<0)return null;const c=a*this.direction.dot(nl.cross(yi));if(c<0||l+c>o)return null;const u=-a*yi.dot(il);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,g,_,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),o=1/_r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,_=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,_=c*d;n[0]=f+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,_=c*d;n[0]=f-_*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,_=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dE,e,fE)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),bi.crossVectors(i,dn),bi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),bi.crossVectors(i,dn)),bi.normalize(),ao.crossVectors(dn,bi),r[0]=bi.x,r[4]=ao.x,r[8]=dn.x,r[1]=bi.y,r[5]=ao.y,r[9]=dn.y,r[2]=bi.z,r[6]=ao.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],M=i[3],E=i[7],x=i[11],k=i[15],D=r[0],C=r[4],F=r[8],w=r[12],b=r[1],I=r[5],W=r[9],V=r[13],de=r[2],Y=r[6],H=r[10],j=r[14],O=r[3],be=r[7],z=r[11],Le=r[15];return s[0]=o*D+a*b+l*de+c*O,s[4]=o*C+a*I+l*Y+c*be,s[8]=o*F+a*W+l*H+c*z,s[12]=o*w+a*V+l*j+c*Le,s[1]=u*D+d*b+f*de+p*O,s[5]=u*C+d*I+f*Y+p*be,s[9]=u*F+d*W+f*H+p*z,s[13]=u*w+d*V+f*j+p*Le,s[2]=g*D+_*b+m*de+h*O,s[6]=g*C+_*I+m*Y+h*be,s[10]=g*F+_*W+m*H+h*z,s[14]=g*w+_*V+m*j+h*Le,s[3]=M*D+E*b+x*de+k*O,s[7]=M*C+E*I+x*Y+k*be,s[11]=M*F+E*W+x*H+k*z,s[15]=M*w+E*V+x*j+k*Le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],M=d*m*c-_*f*c+_*l*p-a*m*p-d*l*h+a*f*h,E=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,x=u*_*c-g*d*c+g*a*p-o*_*p-u*a*h+o*d*h,k=g*d*l-u*_*l-g*a*f+o*_*f+u*a*m-o*d*m,D=n*M+i*E+r*x+s*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=M*C,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*C,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*h+i*l*h)*C,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*C,e[4]=E*C,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*h+n*f*h)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*C,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*C,e[8]=x*C,e[9]=(g*d*s-u*_*s-g*i*p+n*_*p+u*i*h-n*d*h)*C,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*h+n*a*h)*C,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*C,e[12]=k*C,e[13]=(u*_*r-g*d*r+g*i*f-n*_*f-u*i*m+n*d*m)*C,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,_=o*u,m=o*d,h=a*d,M=l*c,E=l*u,x=l*d,k=i.x,D=i.y,C=i.z;return r[0]=(1-(_+h))*k,r[1]=(p+x)*k,r[2]=(g-E)*k,r[3]=0,r[4]=(p-x)*D,r[5]=(1-(f+h))*D,r[6]=(m+M)*D,r[7]=0,r[8]=(g+E)*C,r[9]=(m-M)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=_r.set(r[0],r[1],r[2]).length();const o=_r.set(r[4],r[5],r[6]).length(),a=_r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const c=1/s,u=1/o,d=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,n.setFromRotationMatrix(wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ci){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(a===ci)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ta)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ci){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let g,_;if(a===ci)g=(o+s)*d,_=-2*d;else if(a===ta)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _r=new J,wn=new Rt,dE=new J(0,0,0),fE=new J(1,1,1),bi=new J,ao=new J,dn=new J,Vd=new Rt,Gd=new or;class Xn{constructor(e=0,n=0,i=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gd.setFromEuler(this),this.setFromQuaternion(Gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Hp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hE=0;const Wd=new J,vr=new or,Jn=new Rt,lo=new J,os=new J,pE=new J,mE=new or,jd=new J(1,0,0),Xd=new J(0,1,0),$d=new J(0,0,1),qd={type:"added"},gE={type:"removed"},xr={type:"childadded",child:null},rl={type:"childremoved",child:null};class Yt extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new J,n=new Xn,i=new or,r=new J(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Qe}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vr.setFromAxisAngle(e,n),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,n){return vr.setFromAxisAngle(e,n),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(jd,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis($d,e)}translateOnAxis(e,n){return Wd.copy(e).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jd,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis($d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?lo.copy(e):lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(os,lo,this.up):Jn.lookAt(lo,os,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(Jn),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qd),xr.child=e,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gE),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qd),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,pE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,mE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new J(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new J,Qn=new J,sl=new J,ei=new J,yr=new J,br=new J,Yd=new J,ol=new J,al=new J,ll=new J,cl=new At,ul=new At,dl=new At;class Rn{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),An.subVectors(e,n),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){An.subVectors(r,n),Qn.subVectors(i,n),sl.subVectors(e,n);const o=An.dot(An),a=An.dot(Qn),l=An.dot(sl),c=Qn.dot(Qn),u=Qn.dot(sl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return cl.setScalar(0),ul.setScalar(0),dl.setScalar(0),cl.fromBufferAttribute(e,n),ul.fromBufferAttribute(e,i),dl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(cl,s.x),o.addScaledVector(ul,s.y),o.addScaledVector(dl,s.z),o}static isFrontFacing(e,n,i,r){return An.subVectors(i,n),Qn.subVectors(e,n),An.cross(Qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),An.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Rn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;yr.subVectors(r,i),br.subVectors(s,i),ol.subVectors(e,i);const l=yr.dot(ol),c=br.dot(ol);if(l<=0&&c<=0)return n.copy(i);al.subVectors(e,r);const u=yr.dot(al),d=br.dot(al);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(yr,o);ll.subVectors(e,s);const p=yr.dot(ll),g=br.dot(ll);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(br,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Yd.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(Yd,a);const h=1/(m+_+f);return o=_*h,a=f*h,n.copy(i).addScaledVector(yr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},co={h:0,s:0,l:0};function fl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=QM(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=fl(o,s,e+1/3),this.g=fl(o,s,e),this.b=fl(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,n=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Sn){const i=Vp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return lt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(nt(Wt.r*255,0,255))*65536+Math.round(nt(Wt.g*255,0,255))*256+Math.round(nt(Wt.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Sn){lt.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(co);const i=Ya(Si.h,co.h,n),r=Ya(Si.s,co.s,n),s=Ya(Si.l,co.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new st;st.NAMES=Vp;let _E=0;class js extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Nr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Gl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vl&&(i.blendSrc=this.blendSrc),this.blendDst!==Gl&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ud&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gp extends js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new J,uo=new et;let vE=0;class vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Nd,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)uo.fromBufferAttribute(this,n),uo.applyMatrix3(e),this.setXY(n,uo.x,uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=is(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=is(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=is(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=is(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=is(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nd&&(e.usage=this.usage),e}}class Wp extends vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class jp extends vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class di extends vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let xE=0;const bn=new Rt,hl=new Yt,Sr=new J,fn=new Ws,as=new Ws,Ot=new J;class mi extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Op(e)?jp:Wp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new di(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new au);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];as.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(fn.min,as.min),fn.expandByPoint(Ot),Ot.addVectors(fn.max,as.max),fn.expandByPoint(Ot)):(fn.expandByPoint(as.min),fn.expandByPoint(as.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(Sr.fromBufferAttribute(e,c),Ot.add(Sr)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new J,l[F]=new J;const c=new J,u=new J,d=new J,f=new et,p=new et,g=new et,_=new J,m=new J;function h(F,w,b){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,F),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,b),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[F].add(_),a[w].add(_),a[b].add(_),l[F].add(m),l[w].add(m),l[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let F=0,w=M.length;F<w;++F){const b=M[F],I=b.start,W=b.count;for(let V=I,de=I+W;V<de;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const E=new J,x=new J,k=new J,D=new J;function C(F){k.fromBufferAttribute(r,F),D.copy(k);const w=a[F];E.copy(w),E.sub(k.multiplyScalar(k.dot(w))).normalize(),x.crossVectors(D,w);const I=x.dot(l[F])<0?-1:1;o.setXYZW(F,E.x,E.y,E.z,I)}for(let F=0,w=M.length;F<w;++F){const b=M[F],I=b.start,W=b.count;for(let V=I,de=I+W;V<de;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new J,s=new J,o=new J,a=new J,l=new J,c=new J,u=new J,d=new J;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new vn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kd=new Rt,Vi=new Bp,fo=new au,Zd=new J,ho=new J,po=new J,mo=new J,pl=new J,go=new J,Jd=new J,_o=new J;class Bn extends Yt{constructor(e=new mi,n=new Gp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){go.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(pl.fromBufferAttribute(d,e),o?go.addScaledVector(pl,u):go.addScaledVector(pl.sub(n),u))}n.add(go)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(s),Vi.copy(e.ray).recast(e.near),!(fo.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(fo,Zd)===null||Vi.origin.distanceToSquared(Zd)>(e.far-e.near)**2))&&(Kd.copy(s).invert(),Vi.copy(e.ray).applyMatrix4(Kd),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Vi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,k=E;x<k;x+=3){const D=a.getX(x),C=a.getX(x+1),F=a.getX(x+2);r=vo(this,h,e,i,c,u,d,D,C,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const M=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);r=vo(this,o,e,i,c,u,d,M,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,k=E;x<k;x+=3){const D=x,C=x+1,F=x+2;r=vo(this,h,e,i,c,u,d,D,C,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const M=m,E=m+1,x=m+2;r=vo(this,o,e,i,c,u,d,M,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function yE(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ki,a),l===null)return null;_o.copy(a),_o.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_o);return c<n.near||c>n.far?null:{distance:c,point:_o.clone(),object:t}}function vo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ho),t.getVertexPosition(l,po),t.getVertexPosition(c,mo);const u=yE(t,e,n,i,ho,po,mo,Jd);if(u){const d=new J;Rn.getBarycoord(Jd,ho,po,mo,d),r&&(u.uv=Rn.getInterpolatedAttribute(r,a,l,c,d,new et)),s&&(u.uv1=Rn.getInterpolatedAttribute(s,a,l,c,d,new et)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,l,c,d,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new J,materialIndex:0};Rn.getNormal(ho,po,mo,f.normal),u.face=f,u.barycoord=d}return u}class Xs extends mi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(u,3)),this.setAttribute("uv",new di(d,2));function g(_,m,h,M,E,x,k,D,C,F,w){const b=x/C,I=k/F,W=x/2,V=k/2,de=D/2,Y=C+1,H=F+1;let j=0,O=0;const be=new J;for(let z=0;z<H;z++){const Le=z*I-V;for(let pe=0;pe<Y;pe++){const Fe=pe*b-W;be[_]=Fe*M,be[m]=Le*E,be[h]=de,c.push(be.x,be.y,be.z),be[_]=0,be[m]=0,be[h]=D>0?1:-1,u.push(be.x,be.y,be.z),d.push(pe/C),d.push(1-z/F),j+=1}}for(let z=0;z<F;z++)for(let Le=0;Le<C;Le++){const pe=f+Le+Y*z,Fe=f+Le+Y*(z+1),re=f+(Le+1)+Y*(z+1),ve=f+(Le+1)+Y*z;l.push(pe,Fe,ve),l.push(Fe,re,ve),O+=6}a.addGroup(p,O,w),p+=O,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $r(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=$r(t[n]);for(const r in i)e[r]=i[r]}return e}function bE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Xp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const SE={clone:$r,merge:Jt};var ME=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ME,this.fragmentShader=EE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=bE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $p extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new J,Qd=new et,ef=new et;class tn extends $p{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ac*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ac*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,n){return this.getViewBounds(e,Qd,ef),n.subVectors(ef,Qd)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(qa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Mr=-90,Er=1;class TE extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Mr,Er,e,n);r.layers=this.layers,this.add(r);const s=new tn(Mr,Er,e,n);s.layers=this.layers,this.add(s);const o=new tn(Mr,Er,e,n);o.layers=this.layers,this.add(o);const a=new tn(Mr,Er,e,n);a.layers=this.layers,this.add(a);const l=new tn(Mr,Er,e,n);l.layers=this.layers,this.add(l);const c=new tn(Mr,Er,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class qp extends cn{constructor(e=[],n=Wr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wE extends sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xs(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:$r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Di});s.uniforms.tEquirect.value=n;const o=new Bn(r,s),a=n.minFilter;return n.minFilter===Qi&&(n.minFilter=zn),new TE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class xo extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AE={type:"move"};class ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class RE extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const gl=new J,CE=new J,PE=new Qe;class Ai{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=gl.subVectors(i,n).cross(CE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(gl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PE.getNormalMatrix(e),r=this.coplanarPoint(gl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new au,yo=new J;class lu{constructor(e=new Ai,n=new Ai,i=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],M=r[13],E=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-h).normalize(),i[1].setComponents(l+s,f+c,m+p,x+h).normalize(),i[2].setComponents(l+o,f+u,m+g,x+M).normalize(),i[3].setComponents(l-o,f-u,m-g,x-M).normalize(),i[4].setComponents(l-a,f-d,m-_,x-E).normalize(),n===ci)i[5].setComponents(l+a,f+d,m+_,x+E).normalize();else if(n===ta)i[5].setComponents(a,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yo.x=r.normal.x>0?e.max.x:e.min.x,yo.y=r.normal.y>0?e.max.y:e.min.y,yo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yp extends cn{constructor(e,n,i=rr,r,s,o,a=Dn,l=Dn,c,u=Ds){if(u!==Ds&&u!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ou(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ta extends mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const M=h*f-o;for(let E=0;E<c;E++){const x=E*d-s;g.push(x,-M,0),_.push(0,0,1),m.push(E/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<a;M++){const E=M+c*h,x=M+c*(h+1),k=M+1+c*(h+1),D=M+1+c*h;p.push(E,x,D),p.push(x,k,D)}this.setIndex(p),this.setAttribute("position",new di(g,3)),this.setAttribute("normal",new di(_,3)),this.setAttribute("uv",new di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}class DE extends js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Np,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class IE extends js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LE extends js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class kE{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const UE=new kE;class cu{constructor(e){this.manager=e!==void 0?e:UE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cu.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class NE extends Error{constructor(e,n){super(e),this.response=n}}class FE extends cu{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=tf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(ti[e]!==void 0){ti[e].push({onLoad:n,onProgress:i,onError:r});return}ti[e]=[],ti[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ti[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(h){M();function M(){d.read().then(({done:E,value:x})=>{if(E)h.close();else{_+=x.byteLength;const k=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let D=0,C=u.length;D<C;D++){const F=u[D];F.onProgress&&F.onProgress(k)}h.enqueue(x),M()}},E=>{h.error(E)})}}});return new Response(m)}else throw new NE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{tf.add(e,c);const u=ti[e];delete ti[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=ti[e];if(u===void 0)throw this.manager.itemError(e),c;delete ti[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Kp extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const _l=new Rt,nf=new J,rf=new J;class OE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lu,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;nf.setFromMatrixPosition(e.matrixWorld),n.position.copy(nf),rf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(rf),n.updateMatrixWorld(),_l.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xs extends $p{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class zE extends OE{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BE extends Kp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new zE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class HE extends Kp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class VE extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sf{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function of(t,e,n,i){const r=GE(i);switch(n){case Dp:return t*e;case Lp:return t*e/r.components*r.byteLength;case iu:return t*e/r.components*r.byteLength;case kp:return t*e*2/r.components*r.byteLength;case ru:return t*e*2/r.components*r.byteLength;case Ip:return t*e*3/r.components*r.byteLength;case Cn:return t*e*4/r.components*r.byteLength;case su:return t*e*4/r.components*r.byteLength;case ko:case Uo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case No:case Fo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nc:case rc:return Math.max(t,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(t,8)*Math.max(e,8)/2;case sc:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case yc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Oo:case Sc:case Mc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Up:case Ec:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Tc:case wc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GE(t){switch(t){case jn:case Rp:return{byteLength:1,components:1};case Cs:case Cp:case Vs:return{byteLength:2,components:1};case tu:case nu:return{byteLength:2,components:4};case rr:case eu:case li:return{byteLength:4,components:1};case Pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function WE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var jE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ST=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$T=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ew=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ow=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_w=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ew=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ww=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Aw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Iw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ow=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$w=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:jE,alphahash_pars_fragment:XE,alphamap_fragment:$E,alphamap_pars_fragment:qE,alphatest_fragment:YE,alphatest_pars_fragment:KE,aomap_fragment:ZE,aomap_pars_fragment:JE,batching_pars_vertex:QE,batching_vertex:eT,begin_vertex:tT,beginnormal_vertex:nT,bsdfs:iT,iridescence_fragment:rT,bumpmap_pars_fragment:sT,clipping_planes_fragment:oT,clipping_planes_pars_fragment:aT,clipping_planes_pars_vertex:lT,clipping_planes_vertex:cT,color_fragment:uT,color_pars_fragment:dT,color_pars_vertex:fT,color_vertex:hT,common:pT,cube_uv_reflection_fragment:mT,defaultnormal_vertex:gT,displacementmap_pars_vertex:_T,displacementmap_vertex:vT,emissivemap_fragment:xT,emissivemap_pars_fragment:yT,colorspace_fragment:bT,colorspace_pars_fragment:ST,envmap_fragment:MT,envmap_common_pars_fragment:ET,envmap_pars_fragment:TT,envmap_pars_vertex:wT,envmap_physical_pars_fragment:FT,envmap_vertex:AT,fog_vertex:RT,fog_pars_vertex:CT,fog_fragment:PT,fog_pars_fragment:DT,gradientmap_pars_fragment:IT,lightmap_pars_fragment:LT,lights_lambert_fragment:kT,lights_lambert_pars_fragment:UT,lights_pars_begin:NT,lights_toon_fragment:OT,lights_toon_pars_fragment:zT,lights_phong_fragment:BT,lights_phong_pars_fragment:HT,lights_physical_fragment:VT,lights_physical_pars_fragment:GT,lights_fragment_begin:WT,lights_fragment_maps:jT,lights_fragment_end:XT,logdepthbuf_fragment:$T,logdepthbuf_pars_fragment:qT,logdepthbuf_pars_vertex:YT,logdepthbuf_vertex:KT,map_fragment:ZT,map_pars_fragment:JT,map_particle_fragment:QT,map_particle_pars_fragment:ew,metalnessmap_fragment:tw,metalnessmap_pars_fragment:nw,morphinstance_vertex:iw,morphcolor_vertex:rw,morphnormal_vertex:sw,morphtarget_pars_vertex:ow,morphtarget_vertex:aw,normal_fragment_begin:lw,normal_fragment_maps:cw,normal_pars_fragment:uw,normal_pars_vertex:dw,normal_vertex:fw,normalmap_pars_fragment:hw,clearcoat_normal_fragment_begin:pw,clearcoat_normal_fragment_maps:mw,clearcoat_pars_fragment:gw,iridescence_pars_fragment:_w,opaque_fragment:vw,packing:xw,premultiplied_alpha_fragment:yw,project_vertex:bw,dithering_fragment:Sw,dithering_pars_fragment:Mw,roughnessmap_fragment:Ew,roughnessmap_pars_fragment:Tw,shadowmap_pars_fragment:ww,shadowmap_pars_vertex:Aw,shadowmap_vertex:Rw,shadowmask_pars_fragment:Cw,skinbase_vertex:Pw,skinning_pars_vertex:Dw,skinning_vertex:Iw,skinnormal_vertex:Lw,specularmap_fragment:kw,specularmap_pars_fragment:Uw,tonemapping_fragment:Nw,tonemapping_pars_fragment:Fw,transmission_fragment:Ow,transmission_pars_fragment:zw,uv_pars_fragment:Bw,uv_pars_vertex:Hw,uv_vertex:Vw,worldpos_vertex:Gw,background_vert:Ww,background_frag:jw,backgroundCube_vert:Xw,backgroundCube_frag:$w,cube_vert:qw,cube_frag:Yw,depth_vert:Kw,depth_frag:Zw,distanceRGBA_vert:Jw,distanceRGBA_frag:Qw,equirect_vert:eA,equirect_frag:tA,linedashed_vert:nA,linedashed_frag:iA,meshbasic_vert:rA,meshbasic_frag:sA,meshlambert_vert:oA,meshlambert_frag:aA,meshmatcap_vert:lA,meshmatcap_frag:cA,meshnormal_vert:uA,meshnormal_frag:dA,meshphong_vert:fA,meshphong_frag:hA,meshphysical_vert:pA,meshphysical_frag:mA,meshtoon_vert:gA,meshtoon_frag:_A,points_vert:vA,points_frag:xA,shadow_vert:yA,shadow_frag:bA,sprite_vert:SA,sprite_frag:MA},Pe={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},On={basic:{uniforms:Jt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Jt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Jt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Jt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Jt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new st(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Jt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Jt([Pe.points,Pe.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Jt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Jt([Pe.common,Pe.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Jt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Jt([Pe.sprite,Pe.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Jt([Pe.common,Pe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Jt([Pe.lights,Pe.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};On.physical={uniforms:Jt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const bo={r:0,b:0,g:0},Wi=new Xn,EA=new Rt;function TA(t,e,n,i,r,s,o){const a=new st(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?n:e).get(x)),x}function _(E){let x=!1;const k=g(E);k===null?h(a,l):k&&k.isColor&&(h(k,1),x=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,x){const k=g(x);k&&(k.isCubeTexture||k.mapping===Ea)?(u===void 0&&(u=new Bn(new Xs(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:$r(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Wi.copy(x.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),u.material.uniforms.envMap.value=k,u.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(EA.makeRotationFromEuler(Wi)),u.material.toneMapped=lt.getTransfer(k.colorSpace)!==_t,(d!==k||f!==k.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=k,f=k.version,p=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):k&&k.isTexture&&(c===void 0&&(c=new Bn(new Ta(2,2),new Ui({name:"BackgroundMaterial",uniforms:$r(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=k,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(k.colorSpace)!==_t,k.matrixAutoUpdate===!0&&k.updateMatrix(),c.material.uniforms.uvTransform.value.copy(k.matrix),(d!==k||f!==k.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=k,f=k.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,x){E.getRGB(bo,Xp(t)),i.buffers.color.setClear(bo.r,bo.g,bo.b,x,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:_,addToRenderList:m,dispose:M}}function wA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(b,I,W,V,de){let Y=!1;const H=d(V,W,I);s!==H&&(s=H,c(s.object)),Y=p(b,V,W,de),Y&&g(b,V,W,de),de!==null&&e.update(de,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(b,I,W,V),de!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function u(b){return t.deleteVertexArray(b)}function d(b,I,W){const V=W.wireframe===!0;let de=i[b.id];de===void 0&&(de={},i[b.id]=de);let Y=de[I.id];Y===void 0&&(Y={},de[I.id]=Y);let H=Y[V];return H===void 0&&(H=f(l()),Y[V]=H),H}function f(b){const I=[],W=[],V=[];for(let de=0;de<n;de++)I[de]=0,W[de]=0,V[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:V,object:b,attributes:{},index:null}}function p(b,I,W,V){const de=s.attributes,Y=I.attributes;let H=0;const j=W.getAttributes();for(const O in j)if(j[O].location>=0){const z=de[O];let Le=Y[O];if(Le===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(Le=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(Le=b.instanceColor)),z===void 0||z.attribute!==Le||Le&&z.data!==Le.data)return!0;H++}return s.attributesNum!==H||s.index!==V}function g(b,I,W,V){const de={},Y=I.attributes;let H=0;const j=W.getAttributes();for(const O in j)if(j[O].location>=0){let z=Y[O];z===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(z=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(z=b.instanceColor));const Le={};Le.attribute=z,z&&z.data&&(Le.data=z.data),de[O]=Le,H++}s.attributes=de,s.attributesNum=H,s.index=V}function _(){const b=s.newAttributes;for(let I=0,W=b.length;I<W;I++)b[I]=0}function m(b){h(b,0)}function h(b,I){const W=s.newAttributes,V=s.enabledAttributes,de=s.attributeDivisors;W[b]=1,V[b]===0&&(t.enableVertexAttribArray(b),V[b]=1),de[b]!==I&&(t.vertexAttribDivisor(b,I),de[b]=I)}function M(){const b=s.newAttributes,I=s.enabledAttributes;for(let W=0,V=I.length;W<V;W++)I[W]!==b[W]&&(t.disableVertexAttribArray(W),I[W]=0)}function E(b,I,W,V,de,Y,H){H===!0?t.vertexAttribIPointer(b,I,W,de,Y):t.vertexAttribPointer(b,I,W,V,de,Y)}function x(b,I,W,V){_();const de=V.attributes,Y=W.getAttributes(),H=I.defaultAttributeValues;for(const j in Y){const O=Y[j];if(O.location>=0){let be=de[j];if(be===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),be!==void 0){const z=be.normalized,Le=be.itemSize,pe=e.get(be);if(pe===void 0)continue;const Fe=pe.buffer,re=pe.type,ve=pe.bytesPerElement,ye=re===t.INT||re===t.UNSIGNED_INT||be.gpuType===eu;if(be.isInterleavedBufferAttribute){const B=be.data,le=B.stride,he=be.offset;if(B.isInstancedInterleavedBuffer){for(let _e=0;_e<O.locationSize;_e++)h(O.location+_e,B.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let _e=0;_e<O.locationSize;_e++)m(O.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let _e=0;_e<O.locationSize;_e++)E(O.location+_e,Le/O.locationSize,re,z,le*ve,(he+Le/O.locationSize*_e)*ve,ye)}else{if(be.isInstancedBufferAttribute){for(let B=0;B<O.locationSize;B++)h(O.location+B,be.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let B=0;B<O.locationSize;B++)m(O.location+B);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let B=0;B<O.locationSize;B++)E(O.location+B,Le/O.locationSize,re,z,Le*ve,Le/O.locationSize*B*ve,ye)}}else if(H!==void 0){const z=H[j];if(z!==void 0)switch(z.length){case 2:t.vertexAttrib2fv(O.location,z);break;case 3:t.vertexAttrib3fv(O.location,z);break;case 4:t.vertexAttrib4fv(O.location,z);break;default:t.vertexAttrib1fv(O.location,z)}}}}M()}function k(){F();for(const b in i){const I=i[b];for(const W in I){const V=I[W];for(const de in V)u(V[de].object),delete V[de];delete I[W]}delete i[b]}}function D(b){if(i[b.id]===void 0)return;const I=i[b.id];for(const W in I){const V=I[W];for(const de in V)u(V[de].object),delete V[de];delete I[W]}delete i[b.id]}function C(b){for(const I in i){const W=i[I];if(W[b.id]===void 0)continue;const V=W[b.id];for(const de in V)u(V[de].object),delete V[de];delete W[b.id]}}function F(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function AA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Cn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const F=C===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==jn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==li&&!F)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,D=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:k,maxSamples:D}}function CA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ai,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,E=M*4;let x=h.clippingState||null;l.value=x,x=u(g,f,E,p);for(let k=0;k!==E;++k)x[k]=n[k];h.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,x=p;E!==_;++E,x+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function PA(t){let e=new WeakMap;function n(o,a){return a===Zl?o.mapping=Wr:a===Jl&&(o.mapping=jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zl||a===Jl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Dr=4,af=[.125,.215,.35,.446,.526,.582],Ki=20,vl=new xs,lf=new st;let xl=null,yl=0,bl=0,Sl=!1;const $i=(1+Math.sqrt(5))/2,Tr=1/$i,cf=[new J(-$i,Tr,0),new J($i,Tr,0),new J(-Tr,0,$i),new J(Tr,0,$i),new J(0,$i,-Tr),new J(0,$i,Tr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],DA=new J;class uf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=DA}=s;xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl,yl,bl),this._renderer.xr.enabled=Sl,e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Vs,format:Cn,colorSpace:Xr,depthBuffer:!1},r=df(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IA(s)),this._blurMaterial=LA(s,e,n)}return r}_compileMaterial(e){const n=new Bn(this._lodPlanes[0],e);this._renderer.compile(n,vl)}_sceneToCubeUV(e,n,i,r,s){const l=new tn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(lf),d.toneMapping=Ii,d.autoClear=!1;const g=new Gp({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new Bn(new Xs,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(lf),m=!0);for(let M=0;M<6;M++){const E=M%3;E===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):E===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const x=this._cubeSize;So(r,E*x,M>2?x:0,x,x),d.setRenderTarget(r),m&&d.render(_,l),d.render(e,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Wr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;So(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,vl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cf[(r-s-1)%cf.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Bn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ki;m>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const h=[];let M=0;for(let C=0;C<Ki;++C){const F=C/_,w=Math.exp(-F*F/2);h.push(w),C===0?M+=w:C<m&&(M+=2*w)}for(let C=0;C<h.length;C++)h[C]=h[C]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const x=this._sizeLods[r],k=3*x*(r>E-Dr?r-E+Dr:0),D=4*(this._cubeSize-x);So(n,k,D,3*x,2*x),l.setRenderTarget(n),l.render(d,vl)}}function IA(t){const e=[],n=[],i=[];let r=t;const s=t-Dr+1+af.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Dr?l=af[o-t+Dr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,M=new Float32Array(_*g*p),E=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let D=0;D<p;D++){const C=D%3*2/3-1,F=D>2?0:-1,w=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];M.set(w,_*g*D),E.set(f,m*g*D);const b=[D,D,D,D,D,D];x.set(b,h*g*D)}const k=new mi;k.setAttribute("position",new vn(M,_)),k.setAttribute("uv",new vn(E,m)),k.setAttribute("faceIndex",new vn(x,h)),e.push(k),r>Dr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function df(t,e,n){const i=new sr(t,e,n);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function So(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function LA(t,e,n){const i=new Float32Array(Ki),r=new J(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ff(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function hf(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zl||l===Jl,u=l===Wr||l===jr;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new uf(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new uf(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function UA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&zo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NA(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let E=0,x=M.length;E<x;E+=3){const k=M[E+0],D=M[E+1],C=M[E+2];f.push(k,D,D,C,C,k)}}else if(g!==void 0){const M=g.array;_=g.version;for(let E=0,x=M.length/3-1;E<x;E+=3){const k=E+0,D=E+1,C=E+2;f.push(k,D,D,C,C,k)}}else return;const m=new(Op(f)?jp:Wp)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function FA(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let h=0;for(let M=0;M<g;M++)h+=p[M]*_[M];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function OA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zA(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let k=a.attributes.position.count*x,D=1;k>e.maxTextureSize&&(D=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const C=new Float32Array(k*D*4*d),F=new zp(C,k,D,d);F.type=li,F.needsUpdate=!0;const w=x*4;for(let I=0;I<d;I++){const W=h[I],V=M[I],de=E[I],Y=k*D*4*I;for(let H=0;H<W.count;H++){const j=H*w;g===!0&&(r.fromBufferAttribute(W,H),C[Y+j+0]=r.x,C[Y+j+1]=r.y,C[Y+j+2]=r.z,C[Y+j+3]=0),_===!0&&(r.fromBufferAttribute(V,H),C[Y+j+4]=r.x,C[Y+j+5]=r.y,C[Y+j+6]=r.z,C[Y+j+7]=0),m===!0&&(r.fromBufferAttribute(de,H),C[Y+j+8]=r.x,C[Y+j+9]=r.y,C[Y+j+10]=r.z,C[Y+j+11]=de.itemSize===4?r.w:1)}}f={count:d,texture:F,size:new et(k,D)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function BA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Jp=new cn,pf=new Yp(1,1),Qp=new zp,em=new cE,tm=new qp,mf=[],gf=[],_f=new Float32Array(16),vf=new Float32Array(9),xf=new Float32Array(4);function Yr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=mf[r];if(s===void 0&&(s=new Float32Array(r),mf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function wa(t,e){let n=gf[e];n===void 0&&(n=new Int32Array(e),gf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function GA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function jA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;xf.set(i),t.uniformMatrix2fv(this.addr,!1,xf),Nt(n,i)}}function XA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;vf.set(i),t.uniformMatrix3fv(this.addr,!1,vf),Nt(n,i)}}function $A(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;_f.set(i),t.uniformMatrix4fv(this.addr,!1,_f),Nt(n,i)}}function qA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function ZA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function JA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function e1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function t1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function n1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(pf.compareFunction=Fp,s=pf):s=Jp,n.setTexture2D(e||s,r)}function i1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||em,r)}function r1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||tm,r)}function s1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Qp,r)}function o1(t){switch(t){case 5126:return HA;case 35664:return VA;case 35665:return GA;case 35666:return WA;case 35674:return jA;case 35675:return XA;case 35676:return $A;case 5124:case 35670:return qA;case 35667:case 35671:return YA;case 35668:case 35672:return KA;case 35669:case 35673:return ZA;case 5125:return JA;case 36294:return QA;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return s1}}function a1(t,e){t.uniform1fv(this.addr,e)}function l1(t,e){const n=Yr(e,this.size,2);t.uniform2fv(this.addr,n)}function c1(t,e){const n=Yr(e,this.size,3);t.uniform3fv(this.addr,n)}function u1(t,e){const n=Yr(e,this.size,4);t.uniform4fv(this.addr,n)}function d1(t,e){const n=Yr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function f1(t,e){const n=Yr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function h1(t,e){const n=Yr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function p1(t,e){t.uniform1iv(this.addr,e)}function m1(t,e){t.uniform2iv(this.addr,e)}function g1(t,e){t.uniform3iv(this.addr,e)}function _1(t,e){t.uniform4iv(this.addr,e)}function v1(t,e){t.uniform1uiv(this.addr,e)}function x1(t,e){t.uniform2uiv(this.addr,e)}function y1(t,e){t.uniform3uiv(this.addr,e)}function b1(t,e){t.uniform4uiv(this.addr,e)}function S1(t,e,n){const i=this.cache,r=e.length,s=wa(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Jp,s[o])}function M1(t,e,n){const i=this.cache,r=e.length,s=wa(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||em,s[o])}function E1(t,e,n){const i=this.cache,r=e.length,s=wa(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||tm,s[o])}function T1(t,e,n){const i=this.cache,r=e.length,s=wa(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Qp,s[o])}function w1(t){switch(t){case 5126:return a1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return d1;case 35675:return f1;case 35676:return h1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return x1;case 36295:return y1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return T1}}class A1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=o1(n.type)}}class R1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=w1(n.type)}}class C1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function yf(t,e){t.seq.push(e),t.map[e.id]=e}function P1(t,e,n){const i=t.name,r=i.length;for(Ml.lastIndex=0;;){const s=Ml.exec(i),o=Ml.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yf(n,c===void 0?new A1(a,t,e):new R1(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new C1(a),yf(n,d)),n=d}}}class Bo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);P1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function bf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const D1=37297;let I1=0;function L1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Sf=new Qe;function k1(t){lt._getMatrix(Sf,lt.workingColorSpace,t);const e=`mat3( ${Sf.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case ea:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Mf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+L1(t.getShaderSource(e),o)}else return r}function U1(t,e){const n=k1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function N1(t,e){let n;switch(e){case UM:n="Linear";break;case NM:n="Reinhard";break;case FM:n="Cineon";break;case OM:n="ACESFilmic";break;case BM:n="AgX";break;case HM:n="Neutral";break;case zM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Mo=new J;function F1(){lt.getLuminanceCoefficients(Mo);const t=Mo.x.toFixed(4),e=Mo.y.toFixed(4),n=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function z1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function B1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function us(t){return t!==""}function Ef(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(t){return t.replace(H1,G1)}const V1=new Map;function G1(t,e){let n=tt[e];if(n===void 0){const i=V1.get(e);if(i!==void 0)n=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rc(n)}const W1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(t){return t.replace(W1,j1)}function j1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Af(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Tp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===pM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function $1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Wr:case jr:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function Y1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wp:e="ENVMAP_BLENDING_MULTIPLY";break;case LM:e="ENVMAP_BLENDING_MIX";break;case kM:e="ENVMAP_BLENDING_ADD";break}return e}function K1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Z1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=X1(n),c=$1(n),u=q1(n),d=Y1(n),f=K1(n),p=O1(n),g=z1(s),_=r.createProgram();let m,h,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(us).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(us).join(`
`),h.length>0&&(h+=`
`)):(m=[Af(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),h=[Af(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ii?"#define TONE_MAPPING":"",n.toneMapping!==Ii?tt.tonemapping_pars_fragment:"",n.toneMapping!==Ii?N1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,U1("linearToOutputTexel",n.outputColorSpace),F1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(us).join(`
`)),o=Rc(o),o=Ef(o,n),o=Tf(o,n),a=Rc(a),a=Ef(a,n),a=Tf(a,n),o=wf(o),a=wf(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=M+m+o,x=M+h+a,k=bf(r,r.VERTEX_SHADER,E),D=bf(r,r.FRAGMENT_SHADER,x);r.attachShader(_,k),r.attachShader(_,D),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(I){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(_).trim(),V=r.getShaderInfoLog(k).trim(),de=r.getShaderInfoLog(D).trim();let Y=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,k,D);else{const j=Mf(r,k,"vertex"),O=Mf(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+j+`
`+O)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||de==="")&&(H=!1);H&&(I.diagnostics={runnable:Y,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:de,prefix:h}})}r.deleteShader(k),r.deleteShader(D),F=new Bo(r,_),w=B1(r,_)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,D1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=I1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=D,this}let J1=0;class Q1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new eR(e),n.set(e,i)),i}}class eR{constructor(e){this.id=J1++,this.code=e,this.usedTimes=0}}function tR(t,e,n,i,r,s,o){const a=new Hp,l=new Q1,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,I,W,V){const de=W.fog,Y=V.geometry,H=w.isMeshStandardMaterial?W.environment:null,j=(w.isMeshStandardMaterial?n:e).get(w.envMap||H),O=j&&j.mapping===Ea?j.image.height:null,be=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const z=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Le=z!==void 0?z.length:0;let pe=0;Y.morphAttributes.position!==void 0&&(pe=1),Y.morphAttributes.normal!==void 0&&(pe=2),Y.morphAttributes.color!==void 0&&(pe=3);let Fe,re,ve,ye;if(be){const it=On[be];Fe=it.vertexShader,re=it.fragmentShader}else Fe=w.vertexShader,re=w.fragmentShader,l.update(w),ve=l.getVertexShaderID(w),ye=l.getFragmentShaderID(w);const B=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),he=V.isInstancedMesh===!0,_e=V.isBatchedMesh===!0,He=!!w.map,A=!!w.matcap,P=!!j,y=!!w.aoMap,ae=!!w.lightMap,ee=!!w.bumpMap,Z=!!w.normalMap,oe=!!w.displacementMap,me=!!w.emissiveMap,ne=!!w.metalnessMap,S=!!w.roughnessMap,v=w.anisotropy>0,L=w.clearcoat>0,X=w.dispersion>0,Q=w.iridescence>0,K=w.sheen>0,Ee=w.transmission>0,ge=v&&!!w.anisotropyMap,Ne=L&&!!w.clearcoatMap,ze=L&&!!w.clearcoatNormalMap,xe=L&&!!w.clearcoatRoughnessMap,Re=Q&&!!w.iridescenceMap,Ge=Q&&!!w.iridescenceThicknessMap,Xe=K&&!!w.sheenColorMap,Ae=K&&!!w.sheenRoughnessMap,U=!!w.specularMap,ce=!!w.specularColorMap,Ce=!!w.specularIntensityMap,N=Ee&&!!w.transmissionMap,Se=Ee&&!!w.thicknessMap,se=!!w.gradientMap,fe=!!w.alphaMap,Ue=w.alphaTest>0,De=!!w.alphaHash,$e=!!w.extensions;let ot=Ii;w.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ot=t.toneMapping);const St={shaderID:be,shaderType:w.type,shaderName:w.name,vertexShader:Fe,fragmentShader:re,defines:w.defines,customVertexShaderID:ve,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:_e,batchingColor:_e&&V._colorsTexture!==null,instancing:he,instancingColor:he&&V.instanceColor!==null,instancingMorph:he&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Xr,alphaToCoverage:!!w.alphaToCoverage,map:He,matcap:A,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:O,aoMap:y,lightMap:ae,bumpMap:ee,normalMap:Z,displacementMap:f&&oe,emissiveMap:me,normalMapObjectSpace:Z&&w.normalMapType===jM,normalMapTangentSpace:Z&&w.normalMapType===Np,metalnessMap:ne,roughnessMap:S,anisotropy:v,anisotropyMap:ge,clearcoat:L,clearcoatMap:Ne,clearcoatNormalMap:ze,clearcoatRoughnessMap:xe,dispersion:X,iridescence:Q,iridescenceMap:Re,iridescenceThicknessMap:Ge,sheen:K,sheenColorMap:Xe,sheenRoughnessMap:Ae,specularMap:U,specularColorMap:ce,specularIntensityMap:Ce,transmission:Ee,transmissionMap:N,thicknessMap:Se,gradientMap:se,opaque:w.transparent===!1&&w.blending===Nr&&w.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ue,alphaHash:De,combine:w.combine,mapUv:He&&_(w.map.channel),aoMapUv:y&&_(w.aoMap.channel),lightMapUv:ae&&_(w.lightMap.channel),bumpMapUv:ee&&_(w.bumpMap.channel),normalMapUv:Z&&_(w.normalMap.channel),displacementMapUv:oe&&_(w.displacementMap.channel),emissiveMapUv:me&&_(w.emissiveMap.channel),metalnessMapUv:ne&&_(w.metalnessMap.channel),roughnessMapUv:S&&_(w.roughnessMap.channel),anisotropyMapUv:ge&&_(w.anisotropyMap.channel),clearcoatMapUv:Ne&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ze&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(w.sheenRoughnessMap.channel),specularMapUv:U&&_(w.specularMap.channel),specularColorMapUv:ce&&_(w.specularColorMap.channel),specularIntensityMapUv:Ce&&_(w.specularIntensityMap.channel),transmissionMapUv:N&&_(w.transmissionMap.channel),thicknessMapUv:Se&&_(w.thicknessMap.channel),alphaMapUv:fe&&_(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Z||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(He||fe),fog:!!de,useFog:w.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:le,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:pe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,decodeVideoTexture:He&&w.map.isVideoTexture===!0&&lt.getTransfer(w.map.colorSpace)===_t,decodeVideoTextureEmissive:me&&w.emissiveMap.isVideoTexture===!0&&lt.getTransfer(w.emissiveMap.colorSpace)===_t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ai,flipSided:w.side===ln,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$e&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&w.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function h(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)b.push(I),b.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(M(b,w),E(b,w),b.push(t.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function M(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function E(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const b=g[w.type];let I;if(b){const W=On[b];I=SE.clone(W.uniforms)}else I=w.uniforms;return I}function k(w,b){let I;for(let W=0,V=u.length;W<V;W++){const de=u[W];if(de.cacheKey===b){I=de,++I.usedTimes;break}}return I===void 0&&(I=new Z1(t,b,w,s),u.push(I)),I}function D(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:k,releaseProgram:D,releaseShaderCache:C,programs:u,dispose:F}}function nR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function iR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||iR),i.length>1&&i.sort(f||Rf),r.length>1&&r.sort(f||Rf)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function rR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Cf,t.set(i,[o])):r>=s.length?(o=new Cf,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function sR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new st};break;case"SpotLight":n={position:new J,direction:new J,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function oR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let aR=0;function lR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cR(t){const e=new sR,n=oR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,s=new Rt,o=new Rt;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,M=0,E=0,x=0,k=0,D=0,C=0;c.sort(lR);for(let w=0,b=c.length;w<b;w++){const I=c[w],W=I.color,V=I.intensity,de=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=W.r*V,d+=W.g*V,f+=W.b*V;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],V);C++}else if(I.isDirectionalLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,O=n.get(I);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=I.shadow.matrix,M++}i.directional[p]=H,p++}else if(I.isSpotLight){const H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(W).multiplyScalar(V),H.distance=de,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[_]=H;const j=I.shadow;if(I.map&&(i.spotLightMap[k]=I.map,k++,j.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[_]=j.matrix,I.castShadow){const O=n.get(I);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=Y,x++}_++}else if(I.isRectAreaLight){const H=e.get(I);H.color.copy(W).multiplyScalar(V),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=H,m++}else if(I.isPointLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const j=I.shadow,O=n.get(I);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,O.shadowCameraNear=j.camera.near,O.shadowCameraFar=j.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=I.shadow.matrix,E++}i.point[g]=H,g++}else if(I.isHemisphereLight){const H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(V),H.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[h]=H,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==h||F.numDirectionalShadows!==M||F.numPointShadows!==E||F.numSpotShadows!==x||F.numSpotMaps!==k||F.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+k-D,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,F.directionalLength=p,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=h,F.numDirectionalShadows=M,F.numPointShadows=E,F.numSpotShadows=x,F.numSpotMaps=k,F.numLightProbes=C,i.version=aR++)}function l(c,u){let d=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,M=c.length;h<M;h++){const E=c[h];if(E.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(E.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Pf(t){const e=new cR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function uR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Pf(t),e.set(r,[a])):s>=o.length?(a=new Pf(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hR(t,e,n){let i=new lu;const r=new et,s=new et,o=new At,a=new IE({depthPacking:WM}),l=new LE,c={},u=n.maxTextureSize,d={[ki]:ln,[ln]:ki,[ai]:ai},f=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:dR,fragmentShader:fR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new mi;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tp;let h=this.type;this.render=function(D,C,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const w=t.getRenderTarget(),b=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Di),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=h!==ni&&this.type===ni,de=h===ni&&this.type!==ni;for(let Y=0,H=D.length;Y<H;Y++){const j=D[Y],O=j.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const be=O.getFrameExtents();if(r.multiply(be),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/be.x),r.x=s.x*be.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/be.y),r.y=s.y*be.y,O.mapSize.y=s.y)),O.map===null||V===!0||de===!0){const Le=this.type!==ni?{minFilter:Dn,magFilter:Dn}:{};O.map!==null&&O.map.dispose(),O.map=new sr(r.x,r.y,Le),O.map.texture.name=j.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const z=O.getViewportCount();for(let Le=0;Le<z;Le++){const pe=O.getViewport(Le);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),W.viewport(o),O.updateMatrices(j,Le),i=O.getFrustum(),x(C,F,O.camera,j,this.type)}O.isPointLightShadow!==!0&&this.type===ni&&M(O,F),O.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,b,I)};function M(D,C){const F=e.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new sr(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,t.setRenderTarget(D.mapPass),t.clear(),t.renderBufferDirect(C,null,F,f,_,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,t.setRenderTarget(D.map),t.clear(),t.renderBufferDirect(C,null,F,p,_,null)}function E(D,C,F,w){let b=null;const I=F.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)b=I;else if(b=F.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const W=b.uuid,V=C.uuid;let de=c[W];de===void 0&&(de={},c[W]=de);let Y=de[V];Y===void 0&&(Y=b.clone(),de[V]=Y,C.addEventListener("dispose",k)),b=Y}if(b.visible=C.visible,b.wireframe=C.wireframe,w===ni?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const W=t.properties.get(b);W.light=F}return b}function x(D,C,F,w,b){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===ni)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,D.matrixWorld);const V=e.update(D),de=D.material;if(Array.isArray(de)){const Y=V.groups;for(let H=0,j=Y.length;H<j;H++){const O=Y[H],be=de[O.materialIndex];if(be&&be.visible){const z=E(D,be,w,b);D.onBeforeShadow(t,D,C,F,V,z,O),t.renderBufferDirect(F,null,V,z,D,O),D.onAfterShadow(t,D,C,F,V,z,O)}}}else if(de.visible){const Y=E(D,de,w,b);D.onBeforeShadow(t,D,C,F,V,Y,null),t.renderBufferDirect(F,null,V,Y,D,null),D.onAfterShadow(t,D,C,F,V,Y,null)}}const W=D.children;for(let V=0,de=W.length;V<de;V++)x(W[V],C,F,w,b)}function k(D){D.target.removeEventListener("dispose",k);for(const F in c){const w=c[F],b=D.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const pR={[Wl]:jl,[Xl]:Yl,[$l]:Kl,[Gr]:ql,[jl]:Wl,[Yl]:Xl,[Kl]:$l,[ql]:Gr};function mR(t,e){function n(){let N=!1;const Se=new At;let se=null;const fe=new At(0,0,0,0);return{setMask:function(Ue){se!==Ue&&!N&&(t.colorMask(Ue,Ue,Ue,Ue),se=Ue)},setLocked:function(Ue){N=Ue},setClear:function(Ue,De,$e,ot,St){St===!0&&(Ue*=ot,De*=ot,$e*=ot),Se.set(Ue,De,$e,ot),fe.equals(Se)===!1&&(t.clearColor(Ue,De,$e,ot),fe.copy(Se))},reset:function(){N=!1,se=null,fe.set(-1,0,0,0)}}}function i(){let N=!1,Se=!1,se=null,fe=null,Ue=null;return{setReversed:function(De){if(Se!==De){const $e=e.get("EXT_clip_control");De?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Se=De;const ot=Ue;Ue=null,this.setClear(ot)}},getReversed:function(){return Se},setTest:function(De){De?B(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(De){se!==De&&!N&&(t.depthMask(De),se=De)},setFunc:function(De){if(Se&&(De=pR[De]),fe!==De){switch(De){case Wl:t.depthFunc(t.NEVER);break;case jl:t.depthFunc(t.ALWAYS);break;case Xl:t.depthFunc(t.LESS);break;case Gr:t.depthFunc(t.LEQUAL);break;case $l:t.depthFunc(t.EQUAL);break;case ql:t.depthFunc(t.GEQUAL);break;case Yl:t.depthFunc(t.GREATER);break;case Kl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=De}},setLocked:function(De){N=De},setClear:function(De){Ue!==De&&(Se&&(De=1-De),t.clearDepth(De),Ue=De)},reset:function(){N=!1,se=null,fe=null,Ue=null,Se=!1}}}function r(){let N=!1,Se=null,se=null,fe=null,Ue=null,De=null,$e=null,ot=null,St=null;return{setTest:function(it){N||(it?B(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(it){Se!==it&&!N&&(t.stencilMask(it),Se=it)},setFunc:function(it,zt,nn){(se!==it||fe!==zt||Ue!==nn)&&(t.stencilFunc(it,zt,nn),se=it,fe=zt,Ue=nn)},setOp:function(it,zt,nn){(De!==it||$e!==zt||ot!==nn)&&(t.stencilOp(it,zt,nn),De=it,$e=zt,ot=nn)},setLocked:function(it){N=it},setClear:function(it){St!==it&&(t.clearStencil(it),St=it)},reset:function(){N=!1,Se=null,se=null,fe=null,Ue=null,De=null,$e=null,ot=null,St=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,M=null,E=null,x=null,k=null,D=null,C=new st(0,0,0),F=0,w=!1,b=null,I=null,W=null,V=null,de=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(O)[1]),H=j>=1):O.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),H=j>=2);let be=null,z={};const Le=t.getParameter(t.SCISSOR_BOX),pe=t.getParameter(t.VIEWPORT),Fe=new At().fromArray(Le),re=new At().fromArray(pe);function ve(N,Se,se,fe){const Ue=new Uint8Array(4),De=t.createTexture();t.bindTexture(N,De),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<se;$e++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,Ue):t.texImage2D(Se+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ue);return De}const ye={};ye[t.TEXTURE_2D]=ve(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[t.TEXTURE_2D_ARRAY]=ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(t.DEPTH_TEST),o.setFunc(Gr),ee(!1),Z(Dd),B(t.CULL_FACE),y(Di);function B(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function le(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function he(N,Se){return d[N]!==Se?(t.bindFramebuffer(N,Se),d[N]=Se,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Se),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function _e(N,Se){let se=p,fe=!1;if(N){se=f.get(Se),se===void 0&&(se=[],f.set(Se,se));const Ue=N.textures;if(se.length!==Ue.length||se[0]!==t.COLOR_ATTACHMENT0){for(let De=0,$e=Ue.length;De<$e;De++)se[De]=t.COLOR_ATTACHMENT0+De;se.length=Ue.length,fe=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,fe=!0);fe&&t.drawBuffers(se)}function He(N){return g!==N?(t.useProgram(N),g=N,!0):!1}const A={[Yi]:t.FUNC_ADD,[gM]:t.FUNC_SUBTRACT,[_M]:t.FUNC_REVERSE_SUBTRACT};A[vM]=t.MIN,A[xM]=t.MAX;const P={[yM]:t.ZERO,[bM]:t.ONE,[SM]:t.SRC_COLOR,[Vl]:t.SRC_ALPHA,[RM]:t.SRC_ALPHA_SATURATE,[wM]:t.DST_COLOR,[EM]:t.DST_ALPHA,[MM]:t.ONE_MINUS_SRC_COLOR,[Gl]:t.ONE_MINUS_SRC_ALPHA,[AM]:t.ONE_MINUS_DST_COLOR,[TM]:t.ONE_MINUS_DST_ALPHA,[CM]:t.CONSTANT_COLOR,[PM]:t.ONE_MINUS_CONSTANT_COLOR,[DM]:t.CONSTANT_ALPHA,[IM]:t.ONE_MINUS_CONSTANT_ALPHA};function y(N,Se,se,fe,Ue,De,$e,ot,St,it){if(N===Di){_===!0&&(le(t.BLEND),_=!1);return}if(_===!1&&(B(t.BLEND),_=!0),N!==mM){if(N!==m||it!==w){if((h!==Yi||x!==Yi)&&(t.blendEquation(t.FUNC_ADD),h=Yi,x=Yi),it)switch(N){case Nr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Id:t.blendFunc(t.ONE,t.ONE);break;case Ld:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Nr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Id:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ld:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,E=null,k=null,D=null,C.set(0,0,0),F=0,m=N,w=it}return}Ue=Ue||Se,De=De||se,$e=$e||fe,(Se!==h||Ue!==x)&&(t.blendEquationSeparate(A[Se],A[Ue]),h=Se,x=Ue),(se!==M||fe!==E||De!==k||$e!==D)&&(t.blendFuncSeparate(P[se],P[fe],P[De],P[$e]),M=se,E=fe,k=De,D=$e),(ot.equals(C)===!1||St!==F)&&(t.blendColor(ot.r,ot.g,ot.b,St),C.copy(ot),F=St),m=N,w=!1}function ae(N,Se){N.side===ai?le(t.CULL_FACE):B(t.CULL_FACE);let se=N.side===ln;Se&&(se=!se),ee(se),N.blending===Nr&&N.transparent===!1?y(Di):y(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const fe=N.stencilWrite;a.setTest(fe),fe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),me(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?B(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(N){b!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),b=N)}function Z(N){N!==fM?(B(t.CULL_FACE),N!==I&&(N===Dd?t.cullFace(t.BACK):N===hM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),I=N}function oe(N){N!==W&&(H&&t.lineWidth(N),W=N)}function me(N,Se,se){N?(B(t.POLYGON_OFFSET_FILL),(V!==Se||de!==se)&&(t.polygonOffset(Se,se),V=Se,de=se)):le(t.POLYGON_OFFSET_FILL)}function ne(N){N?B(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function S(N){N===void 0&&(N=t.TEXTURE0+Y-1),be!==N&&(t.activeTexture(N),be=N)}function v(N,Se,se){se===void 0&&(be===null?se=t.TEXTURE0+Y-1:se=be);let fe=z[se];fe===void 0&&(fe={type:void 0,texture:void 0},z[se]=fe),(fe.type!==N||fe.texture!==Se)&&(be!==se&&(t.activeTexture(se),be=se),t.bindTexture(N,Se||ye[N]),fe.type=N,fe.texture=Se)}function L(){const N=z[be];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function X(){try{t.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{t.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{t.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{t.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{t.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{t.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{t.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{t.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{t.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{t.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(N){Fe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Fe.copy(N))}function Ae(N){re.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),re.copy(N))}function U(N,Se){let se=c.get(Se);se===void 0&&(se=new WeakMap,c.set(Se,se));let fe=se.get(N);fe===void 0&&(fe=t.getUniformBlockIndex(Se,N.name),se.set(N,fe))}function ce(N,Se){const fe=c.get(Se).get(N);l.get(Se)!==fe&&(t.uniformBlockBinding(Se,fe,N.__bindingPointIndex),l.set(Se,fe))}function Ce(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},be=null,z={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,M=null,E=null,x=null,k=null,D=null,C=new st(0,0,0),F=0,w=!1,b=null,I=null,W=null,V=null,de=null,Fe.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:B,disable:le,bindFramebuffer:he,drawBuffers:_e,useProgram:He,setBlending:y,setMaterial:ae,setFlipSided:ee,setCullFace:Z,setLineWidth:oe,setPolygonOffset:me,setScissorTest:ne,activeTexture:S,bindTexture:v,unbindTexture:L,compressedTexImage2D:X,compressedTexImage3D:Q,texImage2D:Re,texImage3D:Ge,updateUBOMapping:U,uniformBlockBinding:ce,texStorage2D:ze,texStorage3D:xe,texSubImage2D:K,texSubImage3D:Ee,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ne,scissor:Xe,viewport:Ae,reset:Ce}}function gR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return p?new OffscreenCanvas(S,v):na("canvas")}function _(S,v,L){let X=1;const Q=ne(S);if((Q.width>L||Q.height>L)&&(X=L/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const K=Math.floor(X*Q.width),Ee=Math.floor(X*Q.height);d===void 0&&(d=g(K,Ee));const ge=v?g(K,Ee):d;return ge.width=K,ge.height=Ee,ge.getContext("2d").drawImage(S,0,0,K,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Ee+")."),ge}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){t.generateMipmap(S)}function M(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(S,v,L,X,Q=!1){if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let K=v;if(v===t.RED&&(L===t.FLOAT&&(K=t.R32F),L===t.HALF_FLOAT&&(K=t.R16F),L===t.UNSIGNED_BYTE&&(K=t.R8)),v===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(K=t.R8UI),L===t.UNSIGNED_SHORT&&(K=t.R16UI),L===t.UNSIGNED_INT&&(K=t.R32UI),L===t.BYTE&&(K=t.R8I),L===t.SHORT&&(K=t.R16I),L===t.INT&&(K=t.R32I)),v===t.RG&&(L===t.FLOAT&&(K=t.RG32F),L===t.HALF_FLOAT&&(K=t.RG16F),L===t.UNSIGNED_BYTE&&(K=t.RG8)),v===t.RG_INTEGER&&(L===t.UNSIGNED_BYTE&&(K=t.RG8UI),L===t.UNSIGNED_SHORT&&(K=t.RG16UI),L===t.UNSIGNED_INT&&(K=t.RG32UI),L===t.BYTE&&(K=t.RG8I),L===t.SHORT&&(K=t.RG16I),L===t.INT&&(K=t.RG32I)),v===t.RGB_INTEGER&&(L===t.UNSIGNED_BYTE&&(K=t.RGB8UI),L===t.UNSIGNED_SHORT&&(K=t.RGB16UI),L===t.UNSIGNED_INT&&(K=t.RGB32UI),L===t.BYTE&&(K=t.RGB8I),L===t.SHORT&&(K=t.RGB16I),L===t.INT&&(K=t.RGB32I)),v===t.RGBA_INTEGER&&(L===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),L===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),L===t.UNSIGNED_INT&&(K=t.RGBA32UI),L===t.BYTE&&(K=t.RGBA8I),L===t.SHORT&&(K=t.RGBA16I),L===t.INT&&(K=t.RGBA32I)),v===t.RGB&&L===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),v===t.RGBA){const Ee=Q?ea:lt.getTransfer(X);L===t.FLOAT&&(K=t.RGBA32F),L===t.HALF_FLOAT&&(K=t.RGBA16F),L===t.UNSIGNED_BYTE&&(K=Ee===_t?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(S,v){let L;return S?v===null||v===rr||v===Ps?L=t.DEPTH24_STENCIL8:v===li?L=t.DEPTH32F_STENCIL8:v===Cs&&(L=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===rr||v===Ps?L=t.DEPTH_COMPONENT24:v===li?L=t.DEPTH_COMPONENT32F:v===Cs&&(L=t.DEPTH_COMPONENT16),L}function k(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Dn&&S.minFilter!==zn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function D(S){const v=S.target;v.removeEventListener("dispose",D),F(v),v.isVideoTexture&&u.delete(v)}function C(S){const v=S.target;v.removeEventListener("dispose",C),b(v)}function F(S){const v=i.get(S);if(v.__webglInit===void 0)return;const L=S.source,X=f.get(L);if(X){const Q=X[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(S),Object.keys(X).length===0&&f.delete(L)}i.remove(S)}function w(S){const v=i.get(S);t.deleteTexture(v.__webglTexture);const L=S.source,X=f.get(L);delete X[v.__cacheKey],o.memory.textures--}function b(S){const v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let Q=0;Q<v.__webglFramebuffer[X].length;Q++)t.deleteFramebuffer(v.__webglFramebuffer[X][Q]);else t.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)t.deleteFramebuffer(v.__webglFramebuffer[X]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=S.textures;for(let X=0,Q=L.length;X<Q;X++){const K=i.get(L[X]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(L[X])}i.remove(S)}let I=0;function W(){I=0}function V(){const S=I;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),I+=1,S}function de(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function Y(S,v){const L=i.get(S);if(S.isVideoTexture&&oe(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){const X=S.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(L,S,v);return}}n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+v)}function H(S,v){const L=i.get(S);if(S.version>0&&L.__version!==S.version){re(L,S,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+v)}function j(S,v){const L=i.get(S);if(S.version>0&&L.__version!==S.version){re(L,S,v);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+v)}function O(S,v){const L=i.get(S);if(S.version>0&&L.__version!==S.version){ve(L,S,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+v)}const be={[Ql]:t.REPEAT,[Ji]:t.CLAMP_TO_EDGE,[ec]:t.MIRRORED_REPEAT},z={[Dn]:t.NEAREST,[VM]:t.NEAREST_MIPMAP_NEAREST,[to]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[$a]:t.LINEAR_MIPMAP_NEAREST,[Qi]:t.LINEAR_MIPMAP_LINEAR},Le={[XM]:t.NEVER,[JM]:t.ALWAYS,[$M]:t.LESS,[Fp]:t.LEQUAL,[qM]:t.EQUAL,[ZM]:t.GEQUAL,[YM]:t.GREATER,[KM]:t.NOTEQUAL};function pe(S,v){if(v.type===li&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===zn||v.magFilter===$a||v.magFilter===to||v.magFilter===Qi||v.minFilter===zn||v.minFilter===$a||v.minFilter===to||v.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,be[v.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,be[v.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,be[v.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,z[v.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,z[v.minFilter]),v.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,Le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Dn||v.minFilter!==to&&v.minFilter!==Qi||v.type===li&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Fe(S,v){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",D));const X=v.source;let Q=f.get(X);Q===void 0&&(Q={},f.set(X,Q));const K=de(v);if(K!==S.__cacheKey){Q[K]===void 0&&(Q[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Q[K].usedTimes++;const Ee=Q[S.__cacheKey];Ee!==void 0&&(Q[S.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(v)),S.__cacheKey=K,S.__webglTexture=Q[K].texture}return L}function re(S,v,L){let X=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=t.TEXTURE_3D);const Q=Fe(S,v),K=v.source;n.bindTexture(X,S.__webglTexture,t.TEXTURE0+L);const Ee=i.get(K);if(K.version!==Ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+L);const ge=lt.getPrimaries(lt.workingColorSpace),Ne=v.colorSpace===Ri?null:lt.getPrimaries(v.colorSpace),ze=v.colorSpace===Ri||ge===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let xe=_(v.image,!1,r.maxTextureSize);xe=me(v,xe);const Re=s.convert(v.format,v.colorSpace),Ge=s.convert(v.type);let Xe=E(v.internalFormat,Re,Ge,v.colorSpace,v.isVideoTexture);pe(X,v);let Ae;const U=v.mipmaps,ce=v.isVideoTexture!==!0,Ce=Ee.__version===void 0||Q===!0,N=K.dataReady,Se=k(v,xe);if(v.isDepthTexture)Xe=x(v.format===Is,v.type),Ce&&(ce?n.texStorage2D(t.TEXTURE_2D,1,Xe,xe.width,xe.height):n.texImage2D(t.TEXTURE_2D,0,Xe,xe.width,xe.height,0,Re,Ge,null));else if(v.isDataTexture)if(U.length>0){ce&&Ce&&n.texStorage2D(t.TEXTURE_2D,Se,Xe,U[0].width,U[0].height);for(let se=0,fe=U.length;se<fe;se++)Ae=U[se],ce?N&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ae.width,Ae.height,Re,Ge,Ae.data):n.texImage2D(t.TEXTURE_2D,se,Xe,Ae.width,Ae.height,0,Re,Ge,Ae.data);v.generateMipmaps=!1}else ce?(Ce&&n.texStorage2D(t.TEXTURE_2D,Se,Xe,xe.width,xe.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe.width,xe.height,Re,Ge,xe.data)):n.texImage2D(t.TEXTURE_2D,0,Xe,xe.width,xe.height,0,Re,Ge,xe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ce&&Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Xe,U[0].width,U[0].height,xe.depth);for(let se=0,fe=U.length;se<fe;se++)if(Ae=U[se],v.format!==Cn)if(Re!==null)if(ce){if(N)if(v.layerUpdates.size>0){const Ue=of(Ae.width,Ae.height,v.format,v.type);for(const De of v.layerUpdates){const $e=Ae.data.subarray(De*Ue/Ae.data.BYTES_PER_ELEMENT,(De+1)*Ue/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,De,Ae.width,Ae.height,1,Re,$e)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Ae.width,Ae.height,xe.depth,Re,Ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Xe,Ae.width,Ae.height,xe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Ae.width,Ae.height,xe.depth,Re,Ge,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Xe,Ae.width,Ae.height,xe.depth,0,Re,Ge,Ae.data)}else{ce&&Ce&&n.texStorage2D(t.TEXTURE_2D,Se,Xe,U[0].width,U[0].height);for(let se=0,fe=U.length;se<fe;se++)Ae=U[se],v.format!==Cn?Re!==null?ce?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,Ae.width,Ae.height,Re,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Xe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?N&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ae.width,Ae.height,Re,Ge,Ae.data):n.texImage2D(t.TEXTURE_2D,se,Xe,Ae.width,Ae.height,0,Re,Ge,Ae.data)}else if(v.isDataArrayTexture)if(ce){if(Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Xe,xe.width,xe.height,xe.depth),N)if(v.layerUpdates.size>0){const se=of(xe.width,xe.height,v.format,v.type);for(const fe of v.layerUpdates){const Ue=xe.data.subarray(fe*se/xe.data.BYTES_PER_ELEMENT,(fe+1)*se/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,xe.width,xe.height,1,Re,Ge,Ue)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ge,xe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Xe,xe.width,xe.height,xe.depth,0,Re,Ge,xe.data);else if(v.isData3DTexture)ce?(Ce&&n.texStorage3D(t.TEXTURE_3D,Se,Xe,xe.width,xe.height,xe.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ge,xe.data)):n.texImage3D(t.TEXTURE_3D,0,Xe,xe.width,xe.height,xe.depth,0,Re,Ge,xe.data);else if(v.isFramebufferTexture){if(Ce)if(ce)n.texStorage2D(t.TEXTURE_2D,Se,Xe,xe.width,xe.height);else{let se=xe.width,fe=xe.height;for(let Ue=0;Ue<Se;Ue++)n.texImage2D(t.TEXTURE_2D,Ue,Xe,se,fe,0,Re,Ge,null),se>>=1,fe>>=1}}else if(U.length>0){if(ce&&Ce){const se=ne(U[0]);n.texStorage2D(t.TEXTURE_2D,Se,Xe,se.width,se.height)}for(let se=0,fe=U.length;se<fe;se++)Ae=U[se],ce?N&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Re,Ge,Ae):n.texImage2D(t.TEXTURE_2D,se,Xe,Re,Ge,Ae);v.generateMipmaps=!1}else if(ce){if(Ce){const se=ne(xe);n.texStorage2D(t.TEXTURE_2D,Se,Xe,se.width,se.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Ge,xe)}else n.texImage2D(t.TEXTURE_2D,0,Xe,Re,Ge,xe);m(v)&&h(X),Ee.__version=K.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ve(S,v,L){if(v.image.length!==6)return;const X=Fe(S,v),Q=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+L);const K=i.get(Q);if(Q.version!==K.__version||X===!0){n.activeTexture(t.TEXTURE0+L);const Ee=lt.getPrimaries(lt.workingColorSpace),ge=v.colorSpace===Ri?null:lt.getPrimaries(v.colorSpace),Ne=v.colorSpace===Ri||Ee===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ze=v.isCompressedTexture||v.image[0].isCompressedTexture,xe=v.image[0]&&v.image[0].isDataTexture,Re=[];for(let fe=0;fe<6;fe++)!ze&&!xe?Re[fe]=_(v.image[fe],!0,r.maxCubemapSize):Re[fe]=xe?v.image[fe].image:v.image[fe],Re[fe]=me(v,Re[fe]);const Ge=Re[0],Xe=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type),U=E(v.internalFormat,Xe,Ae,v.colorSpace),ce=v.isVideoTexture!==!0,Ce=K.__version===void 0||X===!0,N=Q.dataReady;let Se=k(v,Ge);pe(t.TEXTURE_CUBE_MAP,v);let se;if(ze){ce&&Ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,U,Ge.width,Ge.height);for(let fe=0;fe<6;fe++){se=Re[fe].mipmaps;for(let Ue=0;Ue<se.length;Ue++){const De=se[Ue];v.format!==Cn?Xe!==null?ce?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,0,0,De.width,De.height,Xe,De.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,U,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,0,0,De.width,De.height,Xe,Ae,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,U,De.width,De.height,0,Xe,Ae,De.data)}}}else{if(se=v.mipmaps,ce&&Ce){se.length>0&&Se++;const fe=ne(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,U,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(xe){ce?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Re[fe].width,Re[fe].height,Xe,Ae,Re[fe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,U,Re[fe].width,Re[fe].height,0,Xe,Ae,Re[fe].data);for(let Ue=0;Ue<se.length;Ue++){const $e=se[Ue].image[fe].image;ce?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,0,0,$e.width,$e.height,Xe,Ae,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,U,$e.width,$e.height,0,Xe,Ae,$e.data)}}else{ce?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Xe,Ae,Re[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,U,Xe,Ae,Re[fe]);for(let Ue=0;Ue<se.length;Ue++){const De=se[Ue];ce?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,0,0,Xe,Ae,De.image[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,U,Xe,Ae,De.image[fe])}}}m(v)&&h(t.TEXTURE_CUBE_MAP),K.__version=Q.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ye(S,v,L,X,Q,K){const Ee=s.convert(L.format,L.colorSpace),ge=s.convert(L.type),Ne=E(L.internalFormat,Ee,ge,L.colorSpace),ze=i.get(v),xe=i.get(L);if(xe.__renderTarget=v,!ze.__hasExternalTextures){const Re=Math.max(1,v.width>>K),Ge=Math.max(1,v.height>>K);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,K,Ne,Re,Ge,v.depth,0,Ee,ge,null):n.texImage2D(Q,K,Ne,Re,Ge,0,Ee,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),Z(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Q,xe.__webglTexture,0,ee(v)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Q,xe.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function B(S,v,L){if(t.bindRenderbuffer(t.RENDERBUFFER,S),v.depthBuffer){const X=v.depthTexture,Q=X&&X.isDepthTexture?X.type:null,K=x(v.stencilBuffer,Q),Ee=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=ee(v);Z(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,K,v.width,v.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,K,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,K,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,S)}else{const X=v.textures;for(let Q=0;Q<X.length;Q++){const K=X[Q],Ee=s.convert(K.format,K.colorSpace),ge=s.convert(K.type),Ne=E(K.internalFormat,Ee,ge,K.colorSpace),ze=ee(v);L&&Z(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Ne,v.width,v.height):Z(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze,Ne,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Ne,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const Q=X.__webglTexture,K=ee(v);if(v.depthTexture.format===Ds)Z(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Is)Z(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function he(S){const v=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const X=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=X}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const X=S.texture.mipmaps;X&&X.length>0?le(v.__webglFramebuffer[0],S):le(v.__webglFramebuffer,S)}else if(L){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=t.createRenderbuffer(),B(v.__webglDepthbuffer[X],S,!1);else{const Q=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,K)}}else{const X=S.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),B(v.__webglDepthbuffer,S,!1);else{const Q=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(S,v,L){const X=i.get(S);v!==void 0&&ye(X.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&he(S)}function He(S){const v=S.texture,L=i.get(S),X=i.get(v);S.addEventListener("dispose",C);const Q=S.textures,K=S.isWebGLCubeRenderTarget===!0,Ee=Q.length>1;if(Ee||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=v.version,o.memory.textures++),K){L.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[ge]=[];for(let Ne=0;Ne<v.mipmaps.length;Ne++)L.__webglFramebuffer[ge][Ne]=t.createFramebuffer()}else L.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let ge=0;ge<v.mipmaps.length;ge++)L.__webglFramebuffer[ge]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ge=0,Ne=Q.length;ge<Ne;ge++){const ze=i.get(Q[ge]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(S.samples>0&&Z(S)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ge=0;ge<Q.length;ge++){const Ne=Q[ge];L.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[ge]);const ze=s.convert(Ne.format,Ne.colorSpace),xe=s.convert(Ne.type),Re=E(Ne.internalFormat,ze,xe,Ne.colorSpace,S.isXRRenderTarget===!0),Ge=ee(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Re,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,L.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),B(L.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),pe(t.TEXTURE_CUBE_MAP,v);for(let ge=0;ge<6;ge++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ne=0;Ne<v.mipmaps.length;Ne++)ye(L.__webglFramebuffer[ge][Ne],S,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne);else ye(L.__webglFramebuffer[ge],S,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(v)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ge=0,Ne=Q.length;ge<Ne;ge++){const ze=Q[ge],xe=i.get(ze);n.bindTexture(t.TEXTURE_2D,xe.__webglTexture),pe(t.TEXTURE_2D,ze),ye(L.__webglFramebuffer,S,ze,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),m(ze)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ge=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,X.__webglTexture),pe(ge,v),v.mipmaps&&v.mipmaps.length>0)for(let Ne=0;Ne<v.mipmaps.length;Ne++)ye(L.__webglFramebuffer[Ne],S,v,t.COLOR_ATTACHMENT0,ge,Ne);else ye(L.__webglFramebuffer,S,v,t.COLOR_ATTACHMENT0,ge,0);m(v)&&h(ge),n.unbindTexture()}S.depthBuffer&&he(S)}function A(S){const v=S.textures;for(let L=0,X=v.length;L<X;L++){const Q=v[L];if(m(Q)){const K=M(S),Ee=i.get(Q).__webglTexture;n.bindTexture(K,Ee),h(K),n.unbindTexture()}}}const P=[],y=[];function ae(S){if(S.samples>0){if(Z(S)===!1){const v=S.textures,L=S.width,X=S.height;let Q=t.COLOR_BUFFER_BIT;const K=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(S),ge=v.length>1;if(ge)for(let ze=0;ze<v.length;ze++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Ne=S.texture.mipmaps;Ne&&Ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ze=0;ze<v.length;ze++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ze]);const xe=i.get(v[ze]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xe,0)}t.blitFramebuffer(0,0,L,X,0,0,L,X,Q,t.NEAREST),l===!0&&(P.length=0,y.length=0,P.push(t.COLOR_ATTACHMENT0+ze),S.depthBuffer&&S.resolveDepthBuffer===!1&&(P.push(K),y.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,y)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,P))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let ze=0;ze<v.length;ze++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ze]);const xe=i.get(v[ze]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function ee(S){return Math.min(r.maxSamples,S.samples)}function Z(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function oe(S){const v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function me(S,v){const L=S.colorSpace,X=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Xr&&L!==Ri&&(lt.getTransfer(L)===_t?(X!==Cn||Q!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function ne(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=O,this.rebindTextures=_e,this.setupRenderTarget=He,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Z}function _R(t,e){function n(i,r=Ri){let s;const o=lt.getTransfer(r);if(i===jn)return t.UNSIGNED_BYTE;if(i===tu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===nu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Pp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Rp)return t.BYTE;if(i===Cp)return t.SHORT;if(i===Cs)return t.UNSIGNED_SHORT;if(i===eu)return t.INT;if(i===rr)return t.UNSIGNED_INT;if(i===li)return t.FLOAT;if(i===Vs)return t.HALF_FLOAT;if(i===Dp)return t.ALPHA;if(i===Ip)return t.RGB;if(i===Cn)return t.RGBA;if(i===Ds)return t.DEPTH_COMPONENT;if(i===Is)return t.DEPTH_STENCIL;if(i===Lp)return t.RED;if(i===iu)return t.RED_INTEGER;if(i===kp)return t.RG;if(i===ru)return t.RG_INTEGER;if(i===su)return t.RGBA_INTEGER;if(i===ko||i===Uo||i===No||i===Fo)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===No)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===rc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===oc||i===ac)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sc||i===oc)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ac)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lc||i===cc||i===uc||i===dc||i===fc||i===hc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===yc||i===bc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oo||i===Sc||i===Mc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Oo)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Up||i===Ec||i===Tc||i===wc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Oo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const vR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ui({vertexShader:vR,fragmentShader:xR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bn(new Ta(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bR extends qr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const _=new yR,m=n.getContextAttributes();let h=null,M=null;const E=[],x=[],k=new et;let D=null;const C=new tn;C.viewport=new At;const F=new tn;F.viewport=new At;const w=[C,F],b=new VE;let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ve=E[re];return ve===void 0&&(ve=new ml,E[re]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(re){let ve=E[re];return ve===void 0&&(ve=new ml,E[re]=ve),ve.getGripSpace()},this.getHand=function(re){let ve=E[re];return ve===void 0&&(ve=new ml,E[re]=ve),ve.getHandSpace()};function V(re){const ve=x.indexOf(re.inputSource);if(ve===-1)return;const ye=E[ve];ye!==void 0&&(ye.update(re.inputSource,re.frame,c||o),ye.dispatchEvent({type:re.type,data:re.inputSource}))}function de(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",de),r.removeEventListener("inputsourceschange",Y);for(let re=0;re<E.length;re++){const ve=x[re];ve!==null&&(x[re]=null,E[re].disconnect(ve))}I=null,W=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,M=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",de),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,B=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=m.stencil?Is:Ds,B=m.stencil?Ps:rr);const he={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(he),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new sr(f.textureWidth,f.textureHeight,{format:Cn,type:jn,depthTexture:new Yp(f.textureWidth,f.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ye={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ye),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new sr(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(re){for(let ve=0;ve<re.removed.length;ve++){const ye=re.removed[ve],B=x.indexOf(ye);B>=0&&(x[B]=null,E[B].disconnect(ye))}for(let ve=0;ve<re.added.length;ve++){const ye=re.added[ve];let B=x.indexOf(ye);if(B===-1){for(let he=0;he<E.length;he++)if(he>=x.length){x.push(ye),B=he;break}else if(x[he]===null){x[he]=ye,B=he;break}if(B===-1)break}const le=E[B];le&&le.connect(ye)}}const H=new J,j=new J;function O(re,ve,ye){H.setFromMatrixPosition(ve.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);const B=H.distanceTo(j),le=ve.projectionMatrix.elements,he=ye.projectionMatrix.elements,_e=le[14]/(le[10]-1),He=le[14]/(le[10]+1),A=(le[9]+1)/le[5],P=(le[9]-1)/le[5],y=(le[8]-1)/le[0],ae=(he[8]+1)/he[0],ee=_e*y,Z=_e*ae,oe=B/(-y+ae),me=oe*-y;if(ve.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(me),re.translateZ(oe),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),le[10]===-1)re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const ne=_e+oe,S=He+oe,v=ee-me,L=Z+(B-me),X=A*He/S*ne,Q=P*He/S*ne;re.projectionMatrix.makePerspective(v,L,X,Q,ne,S),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function be(re,ve){ve===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ve.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ve=re.near,ye=re.far;_.texture!==null&&(_.depthNear>0&&(ve=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),b.near=F.near=C.near=ve,b.far=F.far=C.far=ye,(I!==b.near||W!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,W=b.far),C.layers.mask=re.layers.mask|2,F.layers.mask=re.layers.mask|4,b.layers.mask=C.layers.mask|F.layers.mask;const B=re.parent,le=b.cameras;be(b,B);for(let he=0;he<le.length;he++)be(le[he],B);le.length===2?O(b,C,F):b.projectionMatrix.copy(C.projectionMatrix),z(re,b,B)};function z(re,ve,ye){ye===null?re.matrix.copy(ve.matrixWorld):(re.matrix.copy(ye.matrixWorld),re.matrix.invert(),re.matrix.multiply(ve.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ac*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let Le=null;function pe(re,ve){if(u=ve.getViewerPose(c||o),g=ve,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let B=!1;ye.length!==b.cameras.length&&(b.cameras.length=0,B=!0);for(let _e=0;_e<ye.length;_e++){const He=ye[_e];let A=null;if(p!==null)A=p.getViewport(He);else{const y=d.getViewSubImage(f,He);A=y.viewport,_e===0&&(e.setRenderTargetTextures(M,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(M))}let P=w[_e];P===void 0&&(P=new tn,P.layers.enable(_e),P.viewport=new At,w[_e]=P),P.matrix.fromArray(He.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(He.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(A.x,A.y,A.width,A.height),_e===0&&(b.matrix.copy(P.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),B===!0&&b.cameras.push(P)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const _e=d.getDepthInformation(ye[0]);_e&&_e.isValid&&_e.texture&&_.init(e,_e,r.renderState)}}for(let ye=0;ye<E.length;ye++){const B=x[ye],le=E[ye];B!==null&&le!==void 0&&le.update(B,ve,c||o)}Le&&Le(re,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),g=null}const Fe=new Zp;Fe.setAnimationLoop(pe),this.setAnimationLoop=function(re){Le=re},this.dispose=function(){}}}const ji=new Xn,SR=new Rt;function MR(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Xp(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,M,E,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,M,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ln&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ln&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const M=e.get(h),E=M.envMap,x=M.envMapRotation;E&&(m.envMap.value=E,ji.copy(x),ji.x*=-1,ji.y*=-1,ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(SR.makeRotationFromEuler(ji)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,M,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*M,m.scale.value=E*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,M){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const M=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ER(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const x=E.program;i.uniformBlockBinding(M,x)}function c(M,E){let x=r[M.id];x===void 0&&(g(M),x=u(M),r[M.id]=x,M.addEventListener("dispose",m));const k=E.program;i.updateUBOMapping(M,k);const D=e.render.frame;s[M.id]!==D&&(f(M),s[M.id]=D)}function u(M){const E=d();M.__bindingPointIndex=E;const x=t.createBuffer(),k=M.__size,D=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,k,D),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,x),x}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const E=r[M.id],x=M.uniforms,k=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let D=0,C=x.length;D<C;D++){const F=Array.isArray(x[D])?x[D]:[x[D]];for(let w=0,b=F.length;w<b;w++){const I=F[w];if(p(I,D,w,k)===!0){const W=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let de=0;for(let Y=0;Y<V.length;Y++){const H=V[Y],j=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,W+de,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,de),de+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,E,x,k){const D=M.value,C=E+"_"+x;if(k[C]===void 0)return typeof D=="number"||typeof D=="boolean"?k[C]=D:k[C]=D.clone(),!0;{const F=k[C];if(typeof D=="number"||typeof D=="boolean"){if(F!==D)return k[C]=D,!0}else if(F.equals(D)===!1)return F.copy(D),!0}return!1}function g(M){const E=M.uniforms;let x=0;const k=16;for(let C=0,F=E.length;C<F;C++){const w=Array.isArray(E[C])?E[C]:[E[C]];for(let b=0,I=w.length;b<I;b++){const W=w[b],V=Array.isArray(W.value)?W.value:[W.value];for(let de=0,Y=V.length;de<Y;de++){const H=V[de],j=_(H),O=x%k,be=O%j.boundary,z=O+be;x+=be,z!==0&&k-z<j.storage&&(x+=k-z),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=j.storage}}}const D=x%k;return D>0&&(x+=k-D),M.__size=x,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class TR{constructor(e={}){const{canvas:n=eE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const M=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let k=!1;this._outputColorSpace=Sn;let D=0,C=0,F=null,w=-1,b=null;const I=new At,W=new At;let V=null;const de=new st(0);let Y=0,H=n.width,j=n.height,O=1,be=null,z=null;const Le=new At(0,0,H,j),pe=new At(0,0,H,j);let Fe=!1;const re=new lu;let ve=!1,ye=!1;const B=new Rt,le=new Rt,he=new J,_e=new At,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function P(){return F===null?O:1}let y=i;function ae(T,G){return n.getContext(T,G)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qc}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",De,!1),y===null){const G="webgl2";if(y=ae(G,T),y===null)throw ae(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ee,Z,oe,me,ne,S,v,L,X,Q,K,Ee,ge,Ne,ze,xe,Re,Ge,Xe,Ae,U,ce,Ce,N;function Se(){ee=new UA(y),ee.init(),ce=new _R(y,ee),Z=new RA(y,ee,e,ce),oe=new mR(y,ee),Z.reverseDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),me=new OA(y),ne=new nR,S=new gR(y,ee,oe,ne,Z,ce,me),v=new PA(x),L=new kA(x),X=new WE(y),Ce=new wA(y,X),Q=new NA(y,X,me,Ce),K=new BA(y,Q,X,me),Xe=new zA(y,Z,S),xe=new CA(ne),Ee=new tR(x,v,L,ee,Z,Ce,xe),ge=new MR(x,ne),Ne=new rR,ze=new uR(ee),Ge=new TA(x,v,L,oe,K,p,l),Re=new hR(x,K,Z),N=new ER(y,me,Z,oe),Ae=new AA(y,ee,me),U=new FA(y,ee,me),me.programs=Ee.programs,x.capabilities=Z,x.extensions=ee,x.properties=ne,x.renderLists=Ne,x.shadowMap=Re,x.state=oe,x.info=me}Se();const se=new bR(x,y);this.xr=se,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const T=ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(H,j,!1))},this.getSize=function(T){return T.set(H,j)},this.setSize=function(T,G,te=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,j=G,n.width=Math.floor(T*O),n.height=Math.floor(G*O),te===!0&&(n.style.width=T+"px",n.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(H*O,j*O).floor()},this.setDrawingBufferSize=function(T,G,te){H=T,j=G,O=te,n.width=Math.floor(T*te),n.height=Math.floor(G*te),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Le)},this.setViewport=function(T,G,te,ie){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,G,te,ie),oe.viewport(I.copy(Le).multiplyScalar(O).round())},this.getScissor=function(T){return T.copy(pe)},this.setScissor=function(T,G,te,ie){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,G,te,ie),oe.scissor(W.copy(pe).multiplyScalar(O).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(T){oe.setScissorTest(Fe=T)},this.setOpaqueSort=function(T){be=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,te=!0){let ie=0;if(T){let $=!1;if(F!==null){const Me=F.texture.format;$=Me===su||Me===ru||Me===iu}if($){const Me=F.texture.type,Ie=Me===jn||Me===rr||Me===Cs||Me===Ps||Me===tu||Me===nu,Oe=Ge.getClearColor(),Be=Ge.getClearAlpha(),Ze=Oe.r,Ke=Oe.g,We=Oe.b;Ie?(g[0]=Ze,g[1]=Ke,g[2]=We,g[3]=Be,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=Ze,_[1]=Ke,_[2]=We,_[3]=Be,y.clearBufferiv(y.COLOR,0,_))}else ie|=y.COLOR_BUFFER_BIT}G&&(ie|=y.DEPTH_BUFFER_BIT),te&&(ie|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Ge.dispose(),Ne.dispose(),ze.dispose(),ne.dispose(),v.dispose(),L.dispose(),K.dispose(),Ce.dispose(),N.dispose(),Ee.dispose(),se.dispose(),se.removeEventListener("sessionstart",fu),se.removeEventListener("sessionend",hu),Ni.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const T=me.autoReset,G=Re.enabled,te=Re.autoUpdate,ie=Re.needsUpdate,$=Re.type;Se(),me.autoReset=T,Re.enabled=G,Re.autoUpdate=te,Re.needsUpdate=ie,Re.type=$}function De(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $e(T){const G=T.target;G.removeEventListener("dispose",$e),ot(G)}function ot(T){St(T),ne.remove(T)}function St(T){const G=ne.get(T).programs;G!==void 0&&(G.forEach(function(te){Ee.releaseProgram(te)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,te,ie,$,Me){G===null&&(G=He);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,Oe=nm(T,G,te,ie,$);oe.setMaterial(ie,Ie);let Be=te.index,Ze=1;if(ie.wireframe===!0){if(Be=Q.getWireframeAttribute(te),Be===void 0)return;Ze=2}const Ke=te.drawRange,We=te.attributes.position;let rt=Ke.start*Ze,dt=(Ke.start+Ke.count)*Ze;Me!==null&&(rt=Math.max(rt,Me.start*Ze),dt=Math.min(dt,(Me.start+Me.count)*Ze)),Be!==null?(rt=Math.max(rt,0),dt=Math.min(dt,Be.count)):We!=null&&(rt=Math.max(rt,0),dt=Math.min(dt,We.count));const Pt=dt-rt;if(Pt<0||Pt===1/0)return;Ce.setup($,ie,Oe,te,Be);let Mt,at=Ae;if(Be!==null&&(Mt=X.get(Be),at=U,at.setIndex(Mt)),$.isMesh)ie.wireframe===!0?(oe.setLineWidth(ie.wireframeLinewidth*P()),at.setMode(y.LINES)):at.setMode(y.TRIANGLES);else if($.isLine){let qe=ie.linewidth;qe===void 0&&(qe=1),oe.setLineWidth(qe*P()),$.isLineSegments?at.setMode(y.LINES):$.isLineLoop?at.setMode(y.LINE_LOOP):at.setMode(y.LINE_STRIP)}else $.isPoints?at.setMode(y.POINTS):$.isSprite&&at.setMode(y.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)zo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))at.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const qe=$._multiDrawStarts,Bt=$._multiDrawCounts,ft=$._multiDrawCount,En=Be?X.get(Be).bytesPerElement:1,lr=ne.get(ie).currentProgram.getUniforms();for(let un=0;un<ft;un++)lr.setValue(y,"_gl_DrawID",un),at.render(qe[un]/En,Bt[un])}else if($.isInstancedMesh)at.renderInstances(rt,Pt,$.count);else if(te.isInstancedBufferGeometry){const qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Bt=Math.min(te.instanceCount,qe);at.renderInstances(rt,Pt,Bt)}else at.render(rt,Pt)};function it(T,G,te){T.transparent===!0&&T.side===ai&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,qs(T,G,te),T.side=ki,T.needsUpdate=!0,qs(T,G,te),T.side=ai):qs(T,G,te)}this.compile=function(T,G,te=null){te===null&&(te=T),h=ze.get(te),h.init(G),E.push(h),te.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(h.pushLight($),$.castShadow&&h.pushShadow($))}),T!==te&&T.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(h.pushLight($),$.castShadow&&h.pushShadow($))}),h.setupLights();const ie=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Me=$.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){const Oe=Me[Ie];it(Oe,te,$),ie.add(Oe)}else it(Me,te,$),ie.add(Me)}),h=E.pop(),ie},this.compileAsync=function(T,G,te=null){const ie=this.compile(T,G,te);return new Promise($=>{function Me(){if(ie.forEach(function(Ie){ne.get(Ie).currentProgram.isReady()&&ie.delete(Ie)}),ie.size===0){$(T);return}setTimeout(Me,10)}ee.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let zt=null;function nn(T){zt&&zt(T)}function fu(){Ni.stop()}function hu(){Ni.start()}const Ni=new Zp;Ni.setAnimationLoop(nn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(T){zt=T,se.setAnimationLoop(T),T===null?Ni.stop():Ni.start()},se.addEventListener("sessionstart",fu),se.addEventListener("sessionend",hu),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(G),G=se.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,G,F),h=ze.get(T,E.length),h.init(G),E.push(h),le.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),re.setFromProjectionMatrix(le),ye=this.localClippingEnabled,ve=xe.init(this.clippingPlanes,ye),m=Ne.get(T,M.length),m.init(),M.push(m),se.enabled===!0&&se.isPresenting===!0){const Me=x.xr.getDepthSensingMesh();Me!==null&&Aa(Me,G,-1/0,x.sortObjects)}Aa(T,G,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(be,z),A=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,A&&Ge.addToRenderList(m,T),this.info.render.frame++,ve===!0&&xe.beginShadows();const te=h.state.shadowsArray;Re.render(te,T,G),ve===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,$=m.transmissive;if(h.setupLights(),G.isArrayCamera){const Me=G.cameras;if($.length>0)for(let Ie=0,Oe=Me.length;Ie<Oe;Ie++){const Be=Me[Ie];mu(ie,$,T,Be)}A&&Ge.render(T);for(let Ie=0,Oe=Me.length;Ie<Oe;Ie++){const Be=Me[Ie];pu(m,T,Be,Be.viewport)}}else $.length>0&&mu(ie,$,T,G),A&&Ge.render(T),pu(m,T,G);F!==null&&C===0&&(S.updateMultisampleRenderTarget(F),S.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(x,T,G),Ce.resetDefaultState(),w=-1,b=null,E.pop(),E.length>0?(h=E[E.length-1],ve===!0&&xe.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Aa(T,G,te,ie){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||re.intersectsSprite(T)){ie&&_e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);const Ie=K.update(T),Oe=T.material;Oe.visible&&m.push(T,Ie,Oe,te,_e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||re.intersectsObject(T))){const Ie=K.update(T),Oe=T.material;if(ie&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_e.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),_e.copy(Ie.boundingSphere.center)),_e.applyMatrix4(T.matrixWorld).applyMatrix4(le)),Array.isArray(Oe)){const Be=Ie.groups;for(let Ze=0,Ke=Be.length;Ze<Ke;Ze++){const We=Be[Ze],rt=Oe[We.materialIndex];rt&&rt.visible&&m.push(T,Ie,rt,te,_e.z,We)}}else Oe.visible&&m.push(T,Ie,Oe,te,_e.z,null)}}const Me=T.children;for(let Ie=0,Oe=Me.length;Ie<Oe;Ie++)Aa(Me[Ie],G,te,ie)}function pu(T,G,te,ie){const $=T.opaque,Me=T.transmissive,Ie=T.transparent;h.setupLightsView(te),ve===!0&&xe.setGlobalState(x.clippingPlanes,te),ie&&oe.viewport(I.copy(ie)),$.length>0&&$s($,G,te),Me.length>0&&$s(Me,G,te),Ie.length>0&&$s(Ie,G,te),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function mu(T,G,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ie.id]===void 0&&(h.state.transmissionRenderTarget[ie.id]=new sr(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Vs:jn,minFilter:Qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const Me=h.state.transmissionRenderTarget[ie.id],Ie=ie.viewport||I;Me.setSize(Ie.z*x.transmissionResolutionScale,Ie.w*x.transmissionResolutionScale);const Oe=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(de),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),A&&Ge.render(te);const Be=x.toneMapping;x.toneMapping=Ii;const Ze=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),h.setupLightsView(ie),ve===!0&&xe.setGlobalState(x.clippingPlanes,ie),$s(T,te,ie),S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let We=0,rt=G.length;We<rt;We++){const dt=G[We],Pt=dt.object,Mt=dt.geometry,at=dt.material,qe=dt.group;if(at.side===ai&&Pt.layers.test(ie.layers)){const Bt=at.side;at.side=ln,at.needsUpdate=!0,gu(Pt,te,ie,Mt,at,qe),at.side=Bt,at.needsUpdate=!0,Ke=!0}}Ke===!0&&(S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me))}x.setRenderTarget(Oe),x.setClearColor(de,Y),Ze!==void 0&&(ie.viewport=Ze),x.toneMapping=Be}function $s(T,G,te){const ie=G.isScene===!0?G.overrideMaterial:null;for(let $=0,Me=T.length;$<Me;$++){const Ie=T[$],Oe=Ie.object,Be=Ie.geometry,Ze=Ie.group;let Ke=Ie.material;Ke.allowOverride===!0&&ie!==null&&(Ke=ie),Oe.layers.test(te.layers)&&gu(Oe,G,te,Be,Ke,Ze)}}function gu(T,G,te,ie,$,Me){T.onBeforeRender(x,G,te,ie,$,Me),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(x,G,te,ie,T,Me),$.transparent===!0&&$.side===ai&&$.forceSinglePass===!1?($.side=ln,$.needsUpdate=!0,x.renderBufferDirect(te,G,ie,$,T,Me),$.side=ki,$.needsUpdate=!0,x.renderBufferDirect(te,G,ie,$,T,Me),$.side=ai):x.renderBufferDirect(te,G,ie,$,T,Me),T.onAfterRender(x,G,te,ie,$,Me)}function qs(T,G,te){G.isScene!==!0&&(G=He);const ie=ne.get(T),$=h.state.lights,Me=h.state.shadowsArray,Ie=$.state.version,Oe=Ee.getParameters(T,$.state,Me,G,te),Be=Ee.getProgramCacheKey(Oe);let Ze=ie.programs;ie.environment=T.isMeshStandardMaterial?G.environment:null,ie.fog=G.fog,ie.envMap=(T.isMeshStandardMaterial?L:v).get(T.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Ze===void 0&&(T.addEventListener("dispose",$e),Ze=new Map,ie.programs=Ze);let Ke=Ze.get(Be);if(Ke!==void 0){if(ie.currentProgram===Ke&&ie.lightsStateVersion===Ie)return vu(T,Oe),Ke}else Oe.uniforms=Ee.getUniforms(T),T.onBeforeCompile(Oe,x),Ke=Ee.acquireProgram(Oe,Be),Ze.set(Be,Ke),ie.uniforms=Oe.uniforms;const We=ie.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=xe.uniform),vu(T,Oe),ie.needsLights=rm(T),ie.lightsStateVersion=Ie,ie.needsLights&&(We.ambientLightColor.value=$.state.ambient,We.lightProbe.value=$.state.probe,We.directionalLights.value=$.state.directional,We.directionalLightShadows.value=$.state.directionalShadow,We.spotLights.value=$.state.spot,We.spotLightShadows.value=$.state.spotShadow,We.rectAreaLights.value=$.state.rectArea,We.ltc_1.value=$.state.rectAreaLTC1,We.ltc_2.value=$.state.rectAreaLTC2,We.pointLights.value=$.state.point,We.pointLightShadows.value=$.state.pointShadow,We.hemisphereLights.value=$.state.hemi,We.directionalShadowMap.value=$.state.directionalShadowMap,We.directionalShadowMatrix.value=$.state.directionalShadowMatrix,We.spotShadowMap.value=$.state.spotShadowMap,We.spotLightMatrix.value=$.state.spotLightMatrix,We.spotLightMap.value=$.state.spotLightMap,We.pointShadowMap.value=$.state.pointShadowMap,We.pointShadowMatrix.value=$.state.pointShadowMatrix),ie.currentProgram=Ke,ie.uniformsList=null,Ke}function _u(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Bo.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function vu(T,G){const te=ne.get(T);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function nm(T,G,te,ie,$){G.isScene!==!0&&(G=He),S.resetTextureUnits();const Me=G.fog,Ie=ie.isMeshStandardMaterial?G.environment:null,Oe=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Xr,Be=(ie.isMeshStandardMaterial?L:v).get(ie.envMap||Ie),Ze=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ke=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),We=!!te.morphAttributes.position,rt=!!te.morphAttributes.normal,dt=!!te.morphAttributes.color;let Pt=Ii;ie.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Pt=x.toneMapping);const Mt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,at=Mt!==void 0?Mt.length:0,qe=ne.get(ie),Bt=h.state.lights;if(ve===!0&&(ye===!0||T!==b)){const Kt=T===b&&ie.id===w;xe.setState(ie,T,Kt)}let ft=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Bt.state.version||qe.outputColorSpace!==Oe||$.isBatchedMesh&&qe.batching===!1||!$.isBatchedMesh&&qe.batching===!0||$.isBatchedMesh&&qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&qe.instancing===!1||!$.isInstancedMesh&&qe.instancing===!0||$.isSkinnedMesh&&qe.skinning===!1||!$.isSkinnedMesh&&qe.skinning===!0||$.isInstancedMesh&&qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&qe.instancingMorph===!1&&$.morphTexture!==null||qe.envMap!==Be||ie.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==xe.numPlanes||qe.numIntersection!==xe.numIntersection)||qe.vertexAlphas!==Ze||qe.vertexTangents!==Ke||qe.morphTargets!==We||qe.morphNormals!==rt||qe.morphColors!==dt||qe.toneMapping!==Pt||qe.morphTargetsCount!==at)&&(ft=!0):(ft=!0,qe.__version=ie.version);let En=qe.currentProgram;ft===!0&&(En=qs(ie,G,$));let lr=!1,un=!1,Kr=!1;const yt=En.getUniforms(),xn=qe.uniforms;if(oe.useProgram(En.program)&&(lr=!0,un=!0,Kr=!0),ie.id!==w&&(w=ie.id,un=!0),lr||b!==T){oe.buffers.depth.getReversed()?(B.copy(T.projectionMatrix),nE(B),iE(B),yt.setValue(y,"projectionMatrix",B)):yt.setValue(y,"projectionMatrix",T.projectionMatrix),yt.setValue(y,"viewMatrix",T.matrixWorldInverse);const rn=yt.map.cameraPosition;rn!==void 0&&rn.setValue(y,he.setFromMatrixPosition(T.matrixWorld)),Z.logarithmicDepthBuffer&&yt.setValue(y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&yt.setValue(y,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,un=!0,Kr=!0)}if($.isSkinnedMesh){yt.setOptional(y,$,"bindMatrix"),yt.setOptional(y,$,"bindMatrixInverse");const Kt=$.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),yt.setValue(y,"boneTexture",Kt.boneTexture,S))}$.isBatchedMesh&&(yt.setOptional(y,$,"batchingTexture"),yt.setValue(y,"batchingTexture",$._matricesTexture,S),yt.setOptional(y,$,"batchingIdTexture"),yt.setValue(y,"batchingIdTexture",$._indirectTexture,S),yt.setOptional(y,$,"batchingColorTexture"),$._colorsTexture!==null&&yt.setValue(y,"batchingColorTexture",$._colorsTexture,S));const yn=te.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Xe.update($,te,En),(un||qe.receiveShadow!==$.receiveShadow)&&(qe.receiveShadow=$.receiveShadow,yt.setValue(y,"receiveShadow",$.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(xn.envMap.value=Be,xn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&G.environment!==null&&(xn.envMapIntensity.value=G.environmentIntensity),un&&(yt.setValue(y,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&im(xn,Kr),Me&&ie.fog===!0&&ge.refreshFogUniforms(xn,Me),ge.refreshMaterialUniforms(xn,ie,O,j,h.state.transmissionRenderTarget[T.id]),Bo.upload(y,_u(qe),xn,S)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Bo.upload(y,_u(qe),xn,S),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&yt.setValue(y,"center",$.center),yt.setValue(y,"modelViewMatrix",$.modelViewMatrix),yt.setValue(y,"normalMatrix",$.normalMatrix),yt.setValue(y,"modelMatrix",$.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Kt=ie.uniformsGroups;for(let rn=0,Ra=Kt.length;rn<Ra;rn++){const Fi=Kt[rn];N.update(Fi,En),N.bind(Fi,En)}}return En}function im(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function rm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,G,te){const ie=ne.get(T);ie.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ne.get(T.texture).__webglTexture=G,ne.get(T.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:te,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const te=ne.get(T);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0};const sm=y.createFramebuffer();this.setRenderTarget=function(T,G=0,te=0){F=T,D=G,C=te;let ie=!0,$=null,Me=!1,Ie=!1;if(T){const Be=ne.get(T);if(Be.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(y.FRAMEBUFFER,null),ie=!1;else if(Be.__webglFramebuffer===void 0)S.setupRenderTarget(T);else if(Be.__hasExternalTextures)S.rebindTextures(T,ne.get(T.texture).__webglTexture,ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const We=T.depthTexture;if(Be.__boundDepthTexture!==We){if(We!==null&&ne.has(We)&&(T.width!==We.image.width||T.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(T)}}const Ze=T.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ie=!0);const Ke=ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[G])?$=Ke[G][te]:$=Ke[G],Me=!0):T.samples>0&&S.useMultisampledRTT(T)===!1?$=ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?$=Ke[te]:$=Ke,I.copy(T.viewport),W.copy(T.scissor),V=T.scissorTest}else I.copy(Le).multiplyScalar(O).floor(),W.copy(pe).multiplyScalar(O).floor(),V=Fe;if(te!==0&&($=sm),oe.bindFramebuffer(y.FRAMEBUFFER,$)&&ie&&oe.drawBuffers(T,$),oe.viewport(I),oe.scissor(W),oe.setScissorTest(V),Me){const Be=ne.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,te)}else if(Ie){const Be=ne.get(T.texture),Ze=G;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Be.__webglTexture,te,Ze)}else if(T!==null&&te!==0){const Be=ne.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Be.__webglTexture,te)}w=-1},this.readRenderTargetPixels=function(T,G,te,ie,$,Me,Ie){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){oe.bindFramebuffer(y.FRAMEBUFFER,Oe);try{const Be=T.texture,Ze=Be.format,Ke=Be.type;if(!Z.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-ie&&te>=0&&te<=T.height-$&&y.readPixels(G,te,ie,$,ce.convert(Ze),ce.convert(Ke),Me)}finally{const Be=F!==null?ne.get(F).__webglFramebuffer:null;oe.bindFramebuffer(y.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,G,te,ie,$,Me,Ie){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe)if(G>=0&&G<=T.width-ie&&te>=0&&te<=T.height-$){oe.bindFramebuffer(y.FRAMEBUFFER,Oe);const Be=T.texture,Ze=Be.format,Ke=Be.type;if(!Z.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,We),y.bufferData(y.PIXEL_PACK_BUFFER,Me.byteLength,y.STREAM_READ),y.readPixels(G,te,ie,$,ce.convert(Ze),ce.convert(Ke),0);const rt=F!==null?ne.get(F).__webglFramebuffer:null;oe.bindFramebuffer(y.FRAMEBUFFER,rt);const dt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await tE(y,dt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,We),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,Me),y.deleteBuffer(We),y.deleteSync(dt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,te=0){const ie=Math.pow(2,-te),$=Math.floor(T.image.width*ie),Me=Math.floor(T.image.height*ie),Ie=G!==null?G.x:0,Oe=G!==null?G.y:0;S.setTexture2D(T,0),y.copyTexSubImage2D(y.TEXTURE_2D,te,0,0,Ie,Oe,$,Me),oe.unbindTexture()};const om=y.createFramebuffer(),am=y.createFramebuffer();this.copyTextureToTexture=function(T,G,te=null,ie=null,$=0,Me=null){Me===null&&($!==0?(zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=$,$=0):Me=0);let Ie,Oe,Be,Ze,Ke,We,rt,dt,Pt;const Mt=T.isCompressedTexture?T.mipmaps[Me]:T.image;if(te!==null)Ie=te.max.x-te.min.x,Oe=te.max.y-te.min.y,Be=te.isBox3?te.max.z-te.min.z:1,Ze=te.min.x,Ke=te.min.y,We=te.isBox3?te.min.z:0;else{const yn=Math.pow(2,-$);Ie=Math.floor(Mt.width*yn),Oe=Math.floor(Mt.height*yn),T.isDataArrayTexture?Be=Mt.depth:T.isData3DTexture?Be=Math.floor(Mt.depth*yn):Be=1,Ze=0,Ke=0,We=0}ie!==null?(rt=ie.x,dt=ie.y,Pt=ie.z):(rt=0,dt=0,Pt=0);const at=ce.convert(G.format),qe=ce.convert(G.type);let Bt;G.isData3DTexture?(S.setTexture3D(G,0),Bt=y.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(S.setTexture2DArray(G,0),Bt=y.TEXTURE_2D_ARRAY):(S.setTexture2D(G,0),Bt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,G.unpackAlignment);const ft=y.getParameter(y.UNPACK_ROW_LENGTH),En=y.getParameter(y.UNPACK_IMAGE_HEIGHT),lr=y.getParameter(y.UNPACK_SKIP_PIXELS),un=y.getParameter(y.UNPACK_SKIP_ROWS),Kr=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,Mt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Mt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ze),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ke),y.pixelStorei(y.UNPACK_SKIP_IMAGES,We);const yt=T.isDataArrayTexture||T.isData3DTexture,xn=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const yn=ne.get(T),Kt=ne.get(G),rn=ne.get(yn.__renderTarget),Ra=ne.get(Kt.__renderTarget);oe.bindFramebuffer(y.READ_FRAMEBUFFER,rn.__webglFramebuffer),oe.bindFramebuffer(y.DRAW_FRAMEBUFFER,Ra.__webglFramebuffer);for(let Fi=0;Fi<Be;Fi++)yt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,ne.get(T).__webglTexture,$,We+Fi),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,ne.get(G).__webglTexture,Me,Pt+Fi)),y.blitFramebuffer(Ze,Ke,Ie,Oe,rt,dt,Ie,Oe,y.DEPTH_BUFFER_BIT,y.NEAREST);oe.bindFramebuffer(y.READ_FRAMEBUFFER,null),oe.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||ne.has(T)){const yn=ne.get(T),Kt=ne.get(G);oe.bindFramebuffer(y.READ_FRAMEBUFFER,om),oe.bindFramebuffer(y.DRAW_FRAMEBUFFER,am);for(let rn=0;rn<Be;rn++)yt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,yn.__webglTexture,$,We+rn):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,yn.__webglTexture,$),xn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Kt.__webglTexture,Me,Pt+rn):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Kt.__webglTexture,Me),$!==0?y.blitFramebuffer(Ze,Ke,Ie,Oe,rt,dt,Ie,Oe,y.COLOR_BUFFER_BIT,y.NEAREST):xn?y.copyTexSubImage3D(Bt,Me,rt,dt,Pt+rn,Ze,Ke,Ie,Oe):y.copyTexSubImage2D(Bt,Me,rt,dt,Ze,Ke,Ie,Oe);oe.bindFramebuffer(y.READ_FRAMEBUFFER,null),oe.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else xn?T.isDataTexture||T.isData3DTexture?y.texSubImage3D(Bt,Me,rt,dt,Pt,Ie,Oe,Be,at,qe,Mt.data):G.isCompressedArrayTexture?y.compressedTexSubImage3D(Bt,Me,rt,dt,Pt,Ie,Oe,Be,at,Mt.data):y.texSubImage3D(Bt,Me,rt,dt,Pt,Ie,Oe,Be,at,qe,Mt):T.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,Me,rt,dt,Ie,Oe,at,qe,Mt.data):T.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,Me,rt,dt,Mt.width,Mt.height,at,Mt.data):y.texSubImage2D(y.TEXTURE_2D,Me,rt,dt,Ie,Oe,at,qe,Mt);y.pixelStorei(y.UNPACK_ROW_LENGTH,ft),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,En),y.pixelStorei(y.UNPACK_SKIP_PIXELS,lr),y.pixelStorei(y.UNPACK_SKIP_ROWS,un),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Kr),Me===0&&G.generateMipmaps&&y.generateMipmap(Bt),oe.unbindTexture()},this.copyTextureToTexture3D=function(T,G,te=null,ie=null,$=0){return zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,G,te,ie,$)},this.initRenderTarget=function(T){ne.get(T).__webglFramebuffer===void 0&&S.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),oe.unbindTexture()},this.resetState=function(){D=0,C=0,F=null,oe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}var wR=Object.defineProperty,AR=(t,e,n)=>e in t?wR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,RR=(t,e,n)=>(AR(t,e+"",n),n);class CR{constructor(){RR(this,"_listeners")}addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}var PR=Object.defineProperty,DR=(t,e,n)=>e in t?PR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,je=(t,e,n)=>(DR(t,typeof e!="symbol"?e+"":e,n),n);const Eo=new Bp,Df=new Ai,IR=Math.cos(70*(Math.PI/180)),If=(t,e)=>(t%e+e)%e;class LR extends CR{constructor(e,n){super(),je(this,"object"),je(this,"domElement"),je(this,"enabled",!0),je(this,"target",new J),je(this,"minDistance",0),je(this,"maxDistance",1/0),je(this,"minZoom",0),je(this,"maxZoom",1/0),je(this,"minPolarAngle",0),je(this,"maxPolarAngle",Math.PI),je(this,"minAzimuthAngle",-1/0),je(this,"maxAzimuthAngle",1/0),je(this,"enableDamping",!1),je(this,"dampingFactor",.05),je(this,"enableZoom",!0),je(this,"zoomSpeed",1),je(this,"enableRotate",!0),je(this,"rotateSpeed",1),je(this,"enablePan",!0),je(this,"panSpeed",1),je(this,"screenSpacePanning",!0),je(this,"keyPanSpeed",7),je(this,"zoomToCursor",!1),je(this,"autoRotate",!1),je(this,"autoRotateSpeed",2),je(this,"reverseOrbit",!1),je(this,"reverseHorizontalOrbit",!1),je(this,"reverseVerticalOrbit",!1),je(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),je(this,"mouseButtons",{LEFT:ur.ROTATE,MIDDLE:ur.DOLLY,RIGHT:ur.PAN}),je(this,"touches",{ONE:dr.ROTATE,TWO:dr.DOLLY_PAN}),je(this,"target0"),je(this,"position0"),je(this,"zoom0"),je(this,"_domElementKeyEvents",null),je(this,"getPolarAngle"),je(this,"getAzimuthalAngle"),je(this,"setPolarAngle"),je(this,"setAzimuthalAngle"),je(this,"getDistance"),je(this,"getZoomScale"),je(this,"listenToKeyEvents"),je(this,"stopListenToKeyEvents"),je(this,"saveState"),je(this,"reset"),je(this,"update"),je(this,"connect"),je(this,"dispose"),je(this,"dollyIn"),je(this,"dollyOut"),je(this,"getScale"),je(this,"setScale"),this.object=e,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=U=>{let ce=If(U,2*Math.PI),Ce=u.phi;Ce<0&&(Ce+=2*Math.PI),ce<0&&(ce+=2*Math.PI);let N=Math.abs(ce-Ce);2*Math.PI-N<N&&(ce<Ce?ce+=2*Math.PI:Ce+=2*Math.PI),d.phi=ce-Ce,i.update()},this.setAzimuthalAngle=U=>{let ce=If(U,2*Math.PI),Ce=u.theta;Ce<0&&(Ce+=2*Math.PI),ce<0&&(ce+=2*Math.PI);let N=Math.abs(ce-Ce);2*Math.PI-N<N&&(ce<Ce?ce+=2*Math.PI:Ce+=2*Math.PI),d.theta=ce-Ce,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=U=>{U.addEventListener("keydown",ge),this._domElementKeyEvents=U},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ge),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(r),i.update(),l=a.NONE},this.update=(()=>{const U=new J,ce=new J(0,1,0),Ce=new or().setFromUnitVectors(e.up,ce),N=Ce.clone().invert(),Se=new J,se=new or,fe=2*Math.PI;return function(){const De=i.object.position;Ce.setFromUnitVectors(e.up,ce),N.copy(Ce).invert(),U.copy(De).sub(i.target),U.applyQuaternion(Ce),u.setFromVector3(U),i.autoRotate&&l===a.NONE&&de(W()),i.enableDamping?(u.theta+=d.theta*i.dampingFactor,u.phi+=d.phi*i.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let $e=i.minAzimuthAngle,ot=i.maxAzimuthAngle;isFinite($e)&&isFinite(ot)&&($e<-Math.PI?$e+=fe:$e>Math.PI&&($e-=fe),ot<-Math.PI?ot+=fe:ot>Math.PI&&(ot-=fe),$e<=ot?u.theta=Math.max($e,Math.min(ot,u.theta)):u.theta=u.theta>($e+ot)/2?Math.max($e,u.theta):Math.min(ot,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.zoomToCursor&&w||i.object.isOrthographicCamera?u.radius=Fe(u.radius):u.radius=Fe(u.radius*f),U.setFromSpherical(u),U.applyQuaternion(N),De.copy(i.target).add(U),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let St=!1;if(i.zoomToCursor&&w){let it=null;if(i.object instanceof tn&&i.object.isPerspectiveCamera){const zt=U.length();it=Fe(zt*f);const nn=zt-it;i.object.position.addScaledVector(C,nn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const zt=new J(F.x,F.y,0);zt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix(),St=!0;const nn=new J(F.x,F.y,0);nn.unproject(i.object),i.object.position.sub(nn).add(zt),i.object.updateMatrixWorld(),it=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;it!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(it).add(i.object.position):(Eo.origin.copy(i.object.position),Eo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Eo.direction))<IR?e.lookAt(i.target):(Df.setFromNormalAndCoplanarPoint(i.object.up,i.target),Eo.intersectPlane(Df,i.target))))}else i.object instanceof xs&&i.object.isOrthographicCamera&&(St=f!==1,St&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix()));return f=1,w=!1,St||Se.distanceToSquared(i.object.position)>c||8*(1-se.dot(i.object.quaternion))>c?(i.dispatchEvent(r),Se.copy(i.object.position),se.copy(i.object.quaternion),St=!1,!0):!1}})(),this.connect=U=>{i.domElement=U,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",xe),i.domElement.addEventListener("pointerdown",v),i.domElement.addEventListener("pointercancel",X),i.domElement.addEventListener("wheel",Ee)},this.dispose=()=>{var U,ce,Ce,N,Se,se;i.domElement&&(i.domElement.style.touchAction="auto"),(U=i.domElement)==null||U.removeEventListener("contextmenu",xe),(ce=i.domElement)==null||ce.removeEventListener("pointerdown",v),(Ce=i.domElement)==null||Ce.removeEventListener("pointercancel",X),(N=i.domElement)==null||N.removeEventListener("wheel",Ee),(Se=i.domElement)==null||Se.ownerDocument.removeEventListener("pointermove",L),(se=i.domElement)==null||se.ownerDocument.removeEventListener("pointerup",X),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",ge)};const i=this,r={type:"change"},s={type:"start"},o={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const c=1e-6,u=new sf,d=new sf;let f=1;const p=new J,g=new et,_=new et,m=new et,h=new et,M=new et,E=new et,x=new et,k=new et,D=new et,C=new J,F=new et;let w=!1;const b=[],I={};function W(){return 2*Math.PI/60/60*i.autoRotateSpeed}function V(){return Math.pow(.95,i.zoomSpeed)}function de(U){i.reverseOrbit||i.reverseHorizontalOrbit?d.theta+=U:d.theta-=U}function Y(U){i.reverseOrbit||i.reverseVerticalOrbit?d.phi+=U:d.phi-=U}const H=(()=>{const U=new J;return function(Ce,N){U.setFromMatrixColumn(N,0),U.multiplyScalar(-Ce),p.add(U)}})(),j=(()=>{const U=new J;return function(Ce,N){i.screenSpacePanning===!0?U.setFromMatrixColumn(N,1):(U.setFromMatrixColumn(N,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(Ce),p.add(U)}})(),O=(()=>{const U=new J;return function(Ce,N){const Se=i.domElement;if(Se&&i.object instanceof tn&&i.object.isPerspectiveCamera){const se=i.object.position;U.copy(se).sub(i.target);let fe=U.length();fe*=Math.tan(i.object.fov/2*Math.PI/180),H(2*Ce*fe/Se.clientHeight,i.object.matrix),j(2*N*fe/Se.clientHeight,i.object.matrix)}else Se&&i.object instanceof xs&&i.object.isOrthographicCamera?(H(Ce*(i.object.right-i.object.left)/i.object.zoom/Se.clientWidth,i.object.matrix),j(N*(i.object.top-i.object.bottom)/i.object.zoom/Se.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function be(U){i.object instanceof tn&&i.object.isPerspectiveCamera||i.object instanceof xs&&i.object.isOrthographicCamera?f=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function z(U){be(f/U)}function Le(U){be(f*U)}function pe(U){if(!i.zoomToCursor||!i.domElement)return;w=!0;const ce=i.domElement.getBoundingClientRect(),Ce=U.clientX-ce.left,N=U.clientY-ce.top,Se=ce.width,se=ce.height;F.x=Ce/Se*2-1,F.y=-(N/se)*2+1,C.set(F.x,F.y,1).unproject(i.object).sub(i.object.position).normalize()}function Fe(U){return Math.max(i.minDistance,Math.min(i.maxDistance,U))}function re(U){g.set(U.clientX,U.clientY)}function ve(U){pe(U),x.set(U.clientX,U.clientY)}function ye(U){h.set(U.clientX,U.clientY)}function B(U){_.set(U.clientX,U.clientY),m.subVectors(_,g).multiplyScalar(i.rotateSpeed);const ce=i.domElement;ce&&(de(2*Math.PI*m.x/ce.clientHeight),Y(2*Math.PI*m.y/ce.clientHeight)),g.copy(_),i.update()}function le(U){k.set(U.clientX,U.clientY),D.subVectors(k,x),D.y>0?z(V()):D.y<0&&Le(V()),x.copy(k),i.update()}function he(U){M.set(U.clientX,U.clientY),E.subVectors(M,h).multiplyScalar(i.panSpeed),O(E.x,E.y),h.copy(M),i.update()}function _e(U){pe(U),U.deltaY<0?Le(V()):U.deltaY>0&&z(V()),i.update()}function He(U){let ce=!1;switch(U.code){case i.keys.UP:O(0,i.keyPanSpeed),ce=!0;break;case i.keys.BOTTOM:O(0,-i.keyPanSpeed),ce=!0;break;case i.keys.LEFT:O(i.keyPanSpeed,0),ce=!0;break;case i.keys.RIGHT:O(-i.keyPanSpeed,0),ce=!0;break}ce&&(U.preventDefault(),i.update())}function A(){if(b.length==1)g.set(b[0].pageX,b[0].pageY);else{const U=.5*(b[0].pageX+b[1].pageX),ce=.5*(b[0].pageY+b[1].pageY);g.set(U,ce)}}function P(){if(b.length==1)h.set(b[0].pageX,b[0].pageY);else{const U=.5*(b[0].pageX+b[1].pageX),ce=.5*(b[0].pageY+b[1].pageY);h.set(U,ce)}}function y(){const U=b[0].pageX-b[1].pageX,ce=b[0].pageY-b[1].pageY,Ce=Math.sqrt(U*U+ce*ce);x.set(0,Ce)}function ae(){i.enableZoom&&y(),i.enablePan&&P()}function ee(){i.enableZoom&&y(),i.enableRotate&&A()}function Z(U){if(b.length==1)_.set(U.pageX,U.pageY);else{const Ce=Ae(U),N=.5*(U.pageX+Ce.x),Se=.5*(U.pageY+Ce.y);_.set(N,Se)}m.subVectors(_,g).multiplyScalar(i.rotateSpeed);const ce=i.domElement;ce&&(de(2*Math.PI*m.x/ce.clientHeight),Y(2*Math.PI*m.y/ce.clientHeight)),g.copy(_)}function oe(U){if(b.length==1)M.set(U.pageX,U.pageY);else{const ce=Ae(U),Ce=.5*(U.pageX+ce.x),N=.5*(U.pageY+ce.y);M.set(Ce,N)}E.subVectors(M,h).multiplyScalar(i.panSpeed),O(E.x,E.y),h.copy(M)}function me(U){const ce=Ae(U),Ce=U.pageX-ce.x,N=U.pageY-ce.y,Se=Math.sqrt(Ce*Ce+N*N);k.set(0,Se),D.set(0,Math.pow(k.y/x.y,i.zoomSpeed)),z(D.y),x.copy(k)}function ne(U){i.enableZoom&&me(U),i.enablePan&&oe(U)}function S(U){i.enableZoom&&me(U),i.enableRotate&&Z(U)}function v(U){var ce,Ce;i.enabled!==!1&&(b.length===0&&((ce=i.domElement)==null||ce.ownerDocument.addEventListener("pointermove",L),(Ce=i.domElement)==null||Ce.ownerDocument.addEventListener("pointerup",X)),Re(U),U.pointerType==="touch"?Ne(U):Q(U))}function L(U){i.enabled!==!1&&(U.pointerType==="touch"?ze(U):K(U))}function X(U){var ce,Ce,N;Ge(U),b.length===0&&((ce=i.domElement)==null||ce.releasePointerCapture(U.pointerId),(Ce=i.domElement)==null||Ce.ownerDocument.removeEventListener("pointermove",L),(N=i.domElement)==null||N.ownerDocument.removeEventListener("pointerup",X)),i.dispatchEvent(o),l=a.NONE}function Q(U){let ce;switch(U.button){case 0:ce=i.mouseButtons.LEFT;break;case 1:ce=i.mouseButtons.MIDDLE;break;case 2:ce=i.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case ur.DOLLY:if(i.enableZoom===!1)return;ve(U),l=a.DOLLY;break;case ur.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;ye(U),l=a.PAN}else{if(i.enableRotate===!1)return;re(U),l=a.ROTATE}break;case ur.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;re(U),l=a.ROTATE}else{if(i.enablePan===!1)return;ye(U),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(s)}function K(U){if(i.enabled!==!1)switch(l){case a.ROTATE:if(i.enableRotate===!1)return;B(U);break;case a.DOLLY:if(i.enableZoom===!1)return;le(U);break;case a.PAN:if(i.enablePan===!1)return;he(U);break}}function Ee(U){i.enabled===!1||i.enableZoom===!1||l!==a.NONE&&l!==a.ROTATE||(U.preventDefault(),i.dispatchEvent(s),_e(U),i.dispatchEvent(o))}function ge(U){i.enabled===!1||i.enablePan===!1||He(U)}function Ne(U){switch(Xe(U),b.length){case 1:switch(i.touches.ONE){case dr.ROTATE:if(i.enableRotate===!1)return;A(),l=a.TOUCH_ROTATE;break;case dr.PAN:if(i.enablePan===!1)return;P(),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(i.touches.TWO){case dr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ae(),l=a.TOUCH_DOLLY_PAN;break;case dr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ee(),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(s)}function ze(U){switch(Xe(U),l){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Z(U),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;oe(U),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ne(U),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;S(U),i.update();break;default:l=a.NONE}}function xe(U){i.enabled!==!1&&U.preventDefault()}function Re(U){b.push(U)}function Ge(U){delete I[U.pointerId];for(let ce=0;ce<b.length;ce++)if(b[ce].pointerId==U.pointerId){b.splice(ce,1);return}}function Xe(U){let ce=I[U.pointerId];ce===void 0&&(ce=new et,I[U.pointerId]=ce),ce.set(U.pageX,U.pageY)}function Ae(U){const ce=U.pointerId===b[0].pointerId?b[1]:b[0];return I[ce.pointerId]}this.dollyIn=(U=V())=>{Le(U),i.update()},this.dollyOut=(U=V())=>{z(U),i.update()},this.getScale=()=>f,this.setScale=U=>{be(U),i.update()},this.getZoomScale=()=>V(),n!==void 0&&this.connect(n),this.update()}}function kR(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}class UR extends cu{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new FE(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){function n(c){const u=new DataView(c),d=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*d===u.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(i(g,u,_))return!1;return!0}function i(c,u,d){for(let f=0,p=c.length;f<p;f++)if(c[f]!==u.getUint8(d+f,!1))return!1;return!0}function r(c){const u=new DataView(c),d=u.getUint32(80,!0);let f,p,g,_=!1,m,h,M,E,x;for(let b=0;b<70;b++)u.getUint32(b,!1)==1129270351&&u.getUint8(b+4)==82&&u.getUint8(b+5)==61&&(_=!0,m=new Float32Array(d*3*3),h=u.getUint8(b+6)/255,M=u.getUint8(b+7)/255,E=u.getUint8(b+8)/255,x=u.getUint8(b+9)/255);const k=84,D=50,C=new mi,F=new Float32Array(d*3*3),w=new Float32Array(d*3*3);for(let b=0;b<d;b++){const I=k+b*D,W=u.getFloat32(I,!0),V=u.getFloat32(I+4,!0),de=u.getFloat32(I+8,!0);if(_){const Y=u.getUint16(I+48,!0);(Y&32768)===0?(f=(Y&31)/31,p=(Y>>5&31)/31,g=(Y>>10&31)/31):(f=h,p=M,g=E)}for(let Y=1;Y<=3;Y++){const H=I+Y*12,j=b*3*3+(Y-1)*3;F[j]=u.getFloat32(H,!0),F[j+1]=u.getFloat32(H+4,!0),F[j+2]=u.getFloat32(H+8,!0),w[j]=W,w[j+1]=V,w[j+2]=de,_&&(m[j]=f,m[j+1]=p,m[j+2]=g)}}return C.setAttribute("position",new vn(F,3)),C.setAttribute("normal",new vn(w,3)),_&&(C.setAttribute("color",new vn(m,3)),C.hasColors=!0,C.alpha=x),C}function s(c){const u=new mi,d=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g;let p=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,_=new RegExp("vertex"+g+g+g,"g"),m=new RegExp("normal"+g+g+g,"g"),h=[],M=[],E=new J;let x,k=0,D=0,C=0;for(;(x=d.exec(c))!==null;){D=C;const F=x[0];for(;(x=f.exec(F))!==null;){let I=0,W=0;const V=x[0];for(;(x=m.exec(V))!==null;)E.x=parseFloat(x[1]),E.y=parseFloat(x[2]),E.z=parseFloat(x[3]),W++;for(;(x=_.exec(V))!==null;)h.push(parseFloat(x[1]),parseFloat(x[2]),parseFloat(x[3])),M.push(E.x,E.y,E.z),I++,C++;W!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),I!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}const w=D,b=C-D;u.addGroup(w,b,k),k++}return u.setAttribute("position",new di(h,3)),u.setAttribute("normal",new di(M,3)),u}function o(c){return typeof c!="string"?kR(new Uint8Array(c)):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let d=0;d<c.length;d++)u[d]=c.charCodeAt(d)&255;return u.buffer||u}else return c}const l=a(e);return n(l)?r(l):s(o(e))}}const NR=Ft({__name:"StlViewer",props:{src:{}},setup(t){const e=t,n=rp({selector:"html",attribute:"data-theme",valueDark:"dark",valueLight:"light"}),i=Tt(null);let r,s,o,a,l,c=null;kn(()=>{i.value&&(u(),f(e.src),p(),window.addEventListener("resize",g),_.observe(i.value))}),ga(()=>{var m;cancelAnimationFrame(l),window.removeEventListener("resize",g),_.disconnect(),a==null||a.dispose(),r==null||r.dispose(),c==null||c.geometry.dispose(),(m=c==null?void 0:c.material)==null||m.dispose()}),_n(()=>e.src,m=>{f(m)}),_n(n,m=>{d(m)},{immediate:!0});function u(){s=new RE,o=new tn(75,1,.1,1e3),o.position.set(80,80,80),r=new TR({antialias:!0}),r.setPixelRatio(window.devicePixelRatio),i.value&&i.value.appendChild(r.domElement),a=new LR(o,r.domElement),a.enableDamping=!0,a.dampingFactor=.05;const m=new HE(16777215,.6),h=new BE(16777215,1);h.position.set(5,5,5),s.add(m),s.add(h),d(n.value),g()}function d(m){s&&(m?(s.background=new st("#0b1224"),c&&c.material.color.setHex(16777215)):(s.background=new st("#f8fafc"),c&&c.material.color.setHex(4210752)))}function f(m){new UR().load(m,M=>{c&&(s.remove(c),c.geometry.dispose(),c.material.dispose());const E=n.value?16777215:9474192,x=new DE({color:E,metalness:.1,roughness:.7});c=new Bn(M,x),c.geometry.center(),s.add(c)},void 0,M=>{console.error("Failed to load STL:",M)})}function p(){l=requestAnimationFrame(p),a.update(),r.render(s,o)}function g(){if(!i.value)return;const m=i.value.clientWidth,h=i.value.clientHeight;o.aspect=m/h,o.updateProjectionMatrix(),r.setSize(m,h)}const _=new ResizeObserver(g);return(m,h)=>(Te(),ke("div",{ref_key:"container",ref:i,class:"stl-container"},null,512))}}),FR=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Lf=FR(NR,[["__scopeId","data-v-94ba1074"]]),OR={key:0,class:"bg-gray-50 dark:bg-gray-950 min-h-screen pt-16"},zR={class:"bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-700/30 sticky top-0 z-20"},BR={class:"px-4 py-3 sm:py-4 flex justify-start"},HR={class:"text-sm sm:text-base"},VR={class:"lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-[60px] z-10"},GR={class:"flex"},WR={class:"text-sm"},jR={class:"text-sm"},XR={class:"hidden lg:flex h-[calc(100vh-80px)]"},$R={class:"w-2/5 overflow-y-auto bg-white dark:bg-gray-900"},qR={class:"p-8"},YR={class:"mb-8"},KR={class:"text-3xl font-bold text-gray-900 dark:text-white mb-4"},ZR={class:"flex flex-wrap gap-2 mb-6"},JR={class:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed"},QR={class:"mb-8"},eC={class:"text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center"},tC={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-6"},nC={key:0,class:"grid grid-cols-2 gap-4 mb-4"},iC={class:"text-sm text-gray-500 dark:text-gray-400"},rC={class:"font-medium text-gray-900 dark:text-white"},sC={class:"text-sm text-gray-500 dark:text-gray-400"},oC={class:"font-medium text-gray-900 dark:text-white"},aC={key:0,class:"mb-8"},lC={class:"text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center"},cC={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-6"},uC={class:"grid grid-cols-2 gap-4"},dC={class:"text-sm text-gray-500 dark:text-gray-400"},fC={class:"font-medium text-gray-900 dark:text-white"},hC={class:"text-sm text-gray-500 dark:text-gray-400"},pC={class:"font-medium text-gray-900 dark:text-white"},mC={class:"col-span-2"},gC={class:"text-sm text-gray-500 dark:text-gray-400"},_C={class:"font-medium text-gray-900 dark:text-white"},vC={class:"flex space-x-4"},xC=["href"],yC={class:"w-3/5 bg-gray-100 dark:bg-gray-800 relative"},bC={class:"absolute inset-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"},SC={class:"absolute top-4 right-4 z-10 flex space-x-2"},MC={class:"p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors",title:"Reset View"},EC={class:"p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors",title:"Fullscreen"},TC={class:"absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800"},wC={class:"text-center"},AC={class:"absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"},RC={class:"font-medium text-gray-900 dark:text-white mb-2"},CC={class:"text-sm text-gray-600 dark:text-gray-400 space-y-1"},PC={class:"flex items-center"},DC={class:"flex items-center"},IC={class:"flex items-center"},LC={class:"lg:hidden"},kC={class:"bg-white dark:bg-gray-900 min-h-[calc(100vh-120px)]"},UC={class:"p-4 sm:p-6"},NC={class:"mb-6"},FC={class:"flex flex-wrap gap-2 mb-4"},OC={class:"text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed"},zC={class:"mb-6"},BC={class:"text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center"},HC={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6"},VC={key:0,class:"space-y-3 sm:space-y-4"},GC={class:"grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"},WC={class:"text-xs sm:text-sm text-gray-500 dark:text-gray-400"},jC={class:"font-medium text-gray-900 dark:text-white text-sm sm:text-base"},XC={class:"text-xs sm:text-sm text-gray-500 dark:text-gray-400"},$C={class:"font-medium text-gray-900 dark:text-white text-sm sm:text-base"},qC={key:0,class:"mb-6"},YC={class:"text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center"},KC={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6"},ZC={class:"grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"},JC={class:"text-xs sm:text-sm text-gray-500 dark:text-gray-400"},QC={class:"font-medium text-gray-900 dark:text-white text-sm sm:text-base"},eP={class:"text-xs sm:text-sm text-gray-500 dark:text-gray-400"},tP={class:"font-medium text-gray-900 dark:text-white text-sm sm:text-base"},nP={class:"sm:col-span-2"},iP={class:"text-xs sm:text-sm text-gray-500 dark:text-gray-400"},rP={class:"font-medium text-gray-900 dark:text-white text-sm sm:text-base"},sP={class:"sticky bottom-0 bg-white dark:bg-gray-900 pt-4 pb-4 sm:pb-6 border-t border-gray-200 dark:border-gray-700 -mx-4 sm:-mx-6 px-4 sm:px-6 mt-8"},oP=["href"],aP={class:"bg-gray-100 dark:bg-gray-800 h-[calc(100vh-120px)] p-2 sm:p-4"},lP={class:"h-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden relative"},cP={class:"absolute top-2 sm:top-4 right-2 sm:right-4 z-10 flex space-x-1 sm:space-x-2"},uP={class:"p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors",title:"Reset View"},dP={class:"p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors",title:"Fullscreen"},fP={class:"absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800"},hP={class:"text-center"},pP={class:"absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg"},mP={class:"font-medium text-gray-900 dark:text-white mb-2 text-sm sm:text-base"},gP={class:"text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1"},_P={class:"flex items-center"},vP={class:"flex items-center"},xP={class:"flex items-center"},yP=Ft({__name:"ModelDetails",setup(t){const{t:e,currentLanguage:n}=$n(),{setActiveTab:i}=Zc(),r=Bs(),s=Xc(),o=Tt("info"),a=ct(()=>{const c=parseInt(r.params.id);return cs.find(u=>u.id===c)}),l=()=>{i("models"),s.push("/projects?tab=models")};return kn(()=>{a.value||l()}),(c,u)=>a.value?(Te(),ke("div",OR,[R("div",zR,[R("div",BR,[R("button",{onClick:l,class:"inline-flex items-center text-sky-500 hover:text-sky-600 transition-colors"},[we(q(Ve),{icon:"ph:arrow-left",class:"mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5"}),R("span",HR,ue(q(e).projects.details.backTo.models),1)])])]),R("div",VR,[R("div",GR,[R("button",{onClick:u[0]||(u[0]=d=>o.value="info"),class:an(["flex-1 py-3 px-4 text-center font-medium transition-colors",o.value==="info"?"text-sky-600 dark:text-sky-400 border-b-2 border-sky-600 dark:border-sky-400 bg-sky-50 dark:bg-sky-900/20":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"])},[we(q(Ve),{icon:"ph:info",class:"w-5 h-5 mx-auto mb-1"}),R("div",WR,ue(q(e).projects.modelDetails.mobileNav[0]),1)],2),R("button",{onClick:u[1]||(u[1]=d=>o.value="viewer"),class:an(["flex-1 py-3 px-4 text-center font-medium transition-colors",o.value==="viewer"?"text-sky-600 dark:text-sky-400 border-b-2 border-sky-600 dark:border-sky-400 bg-sky-50 dark:bg-sky-900/20":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"])},[we(q(Ve),{icon:"ph:cube",class:"w-5 h-5 mx-auto mb-1"}),R("div",jR,ue(q(e).projects.modelDetails.mobileNav[1]),1)],2)])]),R("div",XR,[R("div",$R,[R("div",qR,[R("div",YR,[R("h2",KR,ue(a.value.title),1),R("div",ZR,[(Te(!0),ke(mt,null,Ct(a.value.tags,d=>(Te(),$t(Jc,{text:d,isSmall:!1},null,8,["text"]))),256))]),R("p",JR,ue(a.value.description[q(n)]),1)]),R("div",QR,[R("h3",eC,[we(q(Ve),{icon:"ph:ruler",class:"mr-2 w-5 h-5 text-sky-500"}),bt(" "+ue(q(e).projects.modelDetails.specifications.title),1)]),R("div",tC,[a.value.dimensions?(Te(),ke("div",nC,[R("div",null,[R("div",iC,ue(q(e).projects.modelDetails.specifications.dimensions),1),R("div",rC,ue(a.value.dimensions.width)+" × "+ue(a.value.dimensions.height)+" × "+ue(a.value.dimensions.depth)+" "+ue(a.value.dimensions.unit),1)]),R("div",null,[R("div",sC,ue(q(e).projects.modelDetails.specifications.volume),1),R("div",oC,ue((a.value.dimensions.width*a.value.dimensions.height*a.value.dimensions.depth).toFixed(2))+" "+ue(a.value.dimensions.unit)+"³ ",1)])])):wt("",!0)])]),a.value.printSettings?(Te(),ke("div",aC,[R("h3",lC,[we(q(Ve),{icon:"ph:gear",class:"mr-2 w-5 h-5 text-sky-500"}),bt(" "+ue(q(e).projects.modelDetails.printSettings.title),1)]),R("div",cC,[R("div",uC,[R("div",null,[R("div",dC,ue(q(e).projects.modelDetails.printSettings.layerHeight),1),R("div",fC,ue(a.value.printSettings.layerHeight)+"mm",1)]),R("div",null,[R("div",hC,ue(q(e).projects.modelDetails.printSettings.infill),1),R("div",pC,ue(a.value.printSettings.infill)+"%",1)]),R("div",mC,[R("div",gC,ue(q(e).projects.modelDetails.printSettings.printTime),1),R("div",_C,ue(a.value.printSettings.printTime),1)])])])])):wt("",!0),R("div",vC,[R("a",{href:a.value.stlFile,download:"",class:"flex-1 bg-gradient-to-r from-blue-500 to-sky-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 text-center font-medium"},[we(q(Ve),{icon:"ph:download",class:"mr-2 w-5 h-5 inline"}),bt(" "+ue(q(e).projects.modelDetails.download),1)],8,xC)])])]),R("div",yC,[R("div",bC,[R("div",SC,[R("button",MC,[we(q(Ve),{icon:"ph:house",class:"w-5 h-5"})]),R("button",EC,[we(q(Ve),{icon:"ph:arrows-out",class:"w-5 h-5"})])]),R("div",TC,[R("div",wC,[we(q(Ve),{icon:"ph:cube",class:"w-12 h-12 text-gray-400 dark:text-gray-600 mb-4 animate-pulse"}),u[2]||(u[2]=R("div",{class:"text-gray-500 dark:text-gray-400"},"Loading 3D model...",-1))])]),we(Lf,{src:a.value.stlFile,class:"w-full h-full"},null,8,["src"])]),R("div",AC,[R("h4",RC,ue(q(e).projects.modelDetails.controls.title),1),R("div",CC,[R("div",PC,[we(q(Ve),{icon:"ph:mouse",class:"w-4 h-4 mr-2"}),R("span",null,ue(q(e).projects.modelDetails.controls.rotate),1)]),R("div",DC,[we(q(Ve),{icon:"ph:mouse",class:"w-4 h-4 mr-2"}),R("span",null,ue(q(e).projects.modelDetails.controls.move),1)]),R("div",IC,[we(q(Ve),{icon:"ph:mouse",class:"w-4 h-4 mr-2"}),R("span",null,ue(q(e).projects.modelDetails.controls.zoom),1)])])])])]),R("div",LC,[Cr(R("div",kC,[R("div",UC,[R("div",NC,[R("div",FC,[(Te(!0),ke(mt,null,Ct(a.value.tags,d=>(Te(),ke("span",{key:d,class:"text-xs sm:text-sm px-2 sm:px-3 py-1 bg-sky-500/10 text-sky-700 dark:text-sky-300 rounded-md"},ue(d),1))),128))]),R("p",OC,ue(a.value.description[q(n)]),1)]),R("div",zC,[R("h3",BC,[we(q(Ve),{icon:"ph:ruler",class:"mr-2 w-4 h-4 sm:w-5 sm:h-5 text-sky-500"}),bt(" "+ue(q(e).projects.modelDetails.specifications.title),1)]),R("div",HC,[a.value.dimensions?(Te(),ke("div",VC,[R("div",GC,[R("div",null,[R("div",WC,ue(q(e).projects.modelDetails.specifications.dimensions),1),R("div",jC,ue(a.value.dimensions.width)+" × "+ue(a.value.dimensions.height)+" × "+ue(a.value.dimensions.depth)+" "+ue(a.value.dimensions.unit),1)]),R("div",null,[R("div",XC,ue(q(e).projects.modelDetails.specifications.volume),1),R("div",$C,ue((a.value.dimensions.width*a.value.dimensions.height*a.value.dimensions.depth).toFixed(2))+" "+ue(a.value.dimensions.unit)+"³ ",1)])])])):wt("",!0)])]),a.value.printSettings?(Te(),ke("div",qC,[R("h3",YC,[we(q(Ve),{icon:"ph:gear",class:"mr-2 w-4 h-4 sm:w-5 sm:h-5 text-sky-500"}),bt(" "+ue(q(e).projects.modelDetails.printSettings.title),1)]),R("div",KC,[R("div",ZC,[R("div",null,[R("div",JC,ue(q(e).projects.modelDetails.printSettings.layerHeight),1),R("div",QC,ue(a.value.printSettings.layerHeight)+"mm",1)]),R("div",null,[R("div",eP,ue(q(e).projects.modelDetails.printSettings.infill),1),R("div",tP,ue(a.value.printSettings.infill)+"%",1)]),R("div",nP,[R("div",iP,ue(q(e).projects.modelDetails.printSettings.printTime),1),R("div",rP,ue(a.value.printSettings.printTime),1)])])])])):wt("",!0),R("div",sP,[R("a",{href:a.value.stlFile,download:"",class:"w-full bg-gradient-to-r from-blue-500 to-sky-500 text-white px-6 py-3 sm:py-4 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 text-center font-medium flex items-center justify-center"},[we(q(Ve),{icon:"ph:download",class:"mr-2 w-5 h-5"}),bt(" "+ue(q(e).projects.modelDetails.download),1)],8,oP)])])],512),[[zu,o.value==="info"]]),Cr(R("div",aP,[R("div",lP,[R("div",cP,[R("button",uP,[we(q(Ve),{icon:"ph:house",class:"w-4 h-4 sm:w-5 sm:h-5"})]),R("button",dP,[we(q(Ve),{icon:"ph:arrows-out",class:"w-4 h-4 sm:w-5 sm:h-5"})])]),R("div",fP,[R("div",hP,[we(q(Ve),{icon:"ph:cube",class:"w-8 h-8 sm:w-12 sm:h-12 text-gray-400 dark:text-gray-600 mb-2 sm:mb-4 animate-pulse"}),u[3]||(u[3]=R("div",{class:"text-gray-500 dark:text-gray-400 text-sm sm:text-base"},"Loading 3D model...",-1))])]),we(Lf,{src:a.value.stlFile,class:"w-full h-full"},null,8,["src"]),R("div",pP,[R("h4",mP,ue(q(e).projects.modelDetails.touchControls.title),1),R("div",gP,[R("div",_P,[we(q(Ve),{icon:"ph:hand",class:"w-3 h-3 sm:w-4 sm:h-4 mr-2"}),R("span",null,ue(q(e).projects.modelDetails.touchControls.rotate),1)]),R("div",vP,[we(q(Ve),{icon:"ph:arrows-out",class:"w-3 h-3 sm:w-4 sm:h-4 mr-2"}),R("span",null,ue(q(e).projects.modelDetails.touchControls.zoom),1)]),R("div",xP,[we(q(Ve),{icon:"ph:hand",class:"w-3 h-3 sm:w-4 sm:h-4 mr-2"}),R("span",null,ue(q(e).projects.modelDetails.touchControls.move),1)])])])])],512),[[zu,o.value==="viewer"]])])])):wt("",!0)}}),bP={key:0,class:"bg-gray-50 dark:bg-gray-950 min-h-screen pt-16"},SP={class:"bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-700/30 sticky top-0 z-20"},MP={class:"container mx-auto px-4 py-3 sm:py-4"},EP={class:"flex items-center justify-between"},TP={class:"text-sm sm:text-base"},wP={class:"container mx-auto px-4 py-6 sm:py-8"},AP={class:"bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"},RP={class:"p-6 border-b border-gray-200/30 dark:border-gray-700/30"},CP={class:"pb-6 text-lg sm:text-xl font-bold text-center text-gray-900 dark:text-white mx-4 truncate"},PP={class:"flex flex-wrap justify-center gap-2 mb-4"},DP={key:0,class:"w-full h-80 sm:h-96 bg-gray-200/50 dark:bg-gray-700/50"},IP=["src","alt"],LP={key:1,class:"w-full h-80 sm:h-96 bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center"},kP={class:"p-6"},UP={class:"mb-8"},NP={class:"text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center"},FP={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-6"},OP={class:"text-gray-700 dark:text-gray-300 leading-relaxed"},zP={class:"mb-8"},BP={class:"text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center"},HP={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-6"},VP={class:"space-y-3"},GP={class:"flex flex-col sm:flex-row gap-4"},WP=["href"],jP=["href"],XP=Ft({__name:"ProjectDetails",setup(t){const{t:e,currentLanguage:n}=$n(),{setActiveTab:i}=Zc(),r=Bs(),s=Xc(),o=ct(()=>{const l=parseInt(r.params.id);return Pr.find(c=>c.id===l)}),a=()=>{i("projects"),s.push("/projects?tab=projects")};return kn(()=>{o.value||a()}),(l,c)=>o.value?(Te(),ke("div",bP,[R("div",SP,[R("div",MP,[R("div",EP,[R("button",{onClick:a,class:"inline-flex items-center text-sky-500 hover:text-sky-600 transition-colors"},[we(q(Ve),{icon:"ph:arrow-left",class:"mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5"}),R("span",TP,ue(q(e).projects.details.backTo.projects),1)]),c[0]||(c[0]=R("div",{class:"w-12"},null,-1))])])]),R("div",wP,[R("div",AP,[R("div",RP,[R("h1",CP,ue(o.value.title),1),R("div",PP,[(Te(!0),ke(mt,null,Ct(o.value.tags,u=>(Te(),$t(Jc,{text:u,isSmall:!1},null,8,["text"]))),256))])]),o.value.image?(Te(),ke("div",DP,[R("img",{src:o.value.image,alt:o.value.title,class:"w-full h-full object-cover"},null,8,IP)])):(Te(),ke("div",LP,[we(q(Ve),{icon:"ph:code",class:"w-20 h-20 text-white opacity-80"})])),R("div",kP,[R("div",UP,[R("h2",NP,[we(q(Ve),{icon:"ph:info",class:"mr-2 w-5 h-5 text-sky-500"}),bt(" "+ue(q(e).projects.details.projectOverview),1)]),R("div",FP,[R("p",OP,ue(o.value.description[q(n)]),1)])]),R("div",zP,[R("h2",BP,[we(q(Ve),{icon:"ph:list",class:"mr-2 w-5 h-5 text-sky-500"}),bt(" "+ue(q(e).projects.details.features),1)]),R("div",HP,[R("ul",VP,[(Te(!0),ke(mt,null,Ct(o.value.features[q(n)],(u,d)=>(Te(),ke("li",{key:d,class:"flex items-start text-gray-700 dark:text-gray-300"},[we(q(Ve),{icon:"ph:check-circle",class:"w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"}),R("span",null,ue(u),1)]))),128))])])]),R("div",GP,[o.value.demo?(Te(),ke("a",{key:0,href:o.value.demo,target:"_blank",rel:"noopener noreferrer",class:"flex-1 bg-gradient-to-r from-blue-500 to-sky-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 text-center font-medium inline-flex items-center justify-center"},[we(q(Ve),{icon:"ph:globe",class:"mr-2 w-5 h-5"}),bt(" "+ue(q(e).projects.viewDemo),1)],8,WP)):wt("",!0),o.value.github?(Te(),ke("a",{key:1,href:o.value.github,target:"_blank",rel:"noopener noreferrer",class:"flex-1 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 text-center font-medium inline-flex items-center justify-center"},[we(q(Ve),{icon:"ph:github-logo",class:"mr-2 w-5 h-5"}),bt(" "+ue(q(e).projects.viewSource),1)],8,jP)):wt("",!0)])])])])])):wt("",!0)}}),$P=[{path:"/",component:SS},{path:"/projects",component:dM},{path:"/projects/:id",component:XP},{path:"/models/:id",component:yP}],qP=Wv({history:Sv("/"),routes:$P,scrollBehavior(t){return t.hash?{el:t.hash,behavior:"smooth"}:{top:0}}}),YP=Tt("en"),du=N_(_y);du.provide("language",YP);du.use(qP);du.mount("#app");
