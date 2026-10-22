(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const vt={},tr=[],qn=()=>{},Vf=()=>!1,ca=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ua=t=>t.startsWith("onUpdate:"),Gt=Object.assign,Hc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ym=Object.prototype.hasOwnProperty,ft=(t,e)=>ym.call(t,e),Ye=Array.isArray,Li=t=>Os(t)==="[object Map]",Br=t=>Os(t)==="[object Set]",Ru=t=>Os(t)==="[object Date]",Ze=t=>typeof t=="function",Rt=t=>typeof t=="string",En=t=>typeof t=="symbol",gt=t=>t!==null&&typeof t=="object",Gf=t=>(gt(t)||Ze(t))&&Ze(t.then)&&Ze(t.catch),Wf=Object.prototype.toString,Os=t=>Wf.call(t),bm=t=>Os(t).slice(8,-1),jf=t=>Os(t)==="[object Object]",da=t=>Rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ms=Bc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Sm=/-\w/g,nn=fa(t=>t.replace(Sm,e=>e.slice(1).toUpperCase())),Mm=/\B([A-Z])/g,hr=fa(t=>t.replace(Mm,"-$1").toLowerCase()),ha=fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ua=fa(t=>t?`on${ha(t)}`:""),Wn=(t,e)=>!Object.is(t,e),Do=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Xf=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Vc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cu;const pa=()=>Cu||(Cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zs(t){if(Ye(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Rt(i)?Am(i):zs(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Rt(t)||gt(t))return t}const Em=/;(?![^(]*\))/g,wm=/:([^]+)/,Tm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Am(t){const e={};return t.replace(Tm,n=>n.startsWith("/*")?"":n).split(Em).forEach(n=>{if(n){const i=n.split(wm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ln(t){let e="";if(Rt(t))e=t;else if(Ye(t))for(let n=0;n<t.length;n++){const i=ln(t[n]);i&&(e+=i+" ")}else if(gt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Cm=Bc(Rm);function $f(t){return!!t||t===""}function Pm(t,e,n){if(t.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<t.length;r++)i=Kr(t[r],e[r],n);return i}function Pu(t,e,n){if(t.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of t){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&Kr(s,i[a],n)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function Dm(t,e,n){let i=Li(t),r=Li(e);if(i||r||(i=Br(t),r=Br(e),i||r))return i&&r?Pu(t,e,n):!1;const s=Object.keys(t).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Kr(t[a],e[a],n))return!1}return String(t)===String(e)}function Du(t,e,n,i){n||(n=[new Map,new Map]);const[r,s]=n;if(r.has(t)||s.has(e))return r.get(t)===e&&s.get(e)===t;r.set(t,e),s.set(e,t);const o=i(t,e,n);return r.delete(t),s.delete(e),o}function Kr(t,e,n){if(t===e)return!0;let i=Ru(t),r=Ru(e);return i||r?i&&r?t.getTime()===e.getTime():!1:(i=En(t),r=En(e),i||r?t===e:(i=Ye(t),r=Ye(e),i||r?i&&r?Du(t,e,n,Pm):!1:(i=gt(t),r=gt(e),i||r?!i||!r?!1:Du(t,e,n,Dm):String(t)===String(e))))}function qf(t,e){return t.findIndex(n=>Kr(n,e))}const Yf=t=>!!(t&&t.__v_isRef===!0),de=t=>Rt(t)?t:t==null?"":Ye(t)||gt(t)&&(t.toString===Wf||!Ze(t.toString))?Yf(t)?de(t.value):JSON.stringify(t,Kf,2):String(t),Kf=(t,e)=>Yf(e)?Kf(t,e.value):Li(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Fa(i,s)+" =>"]=r,n),{})}:Br(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Fa(n))}:En(e)?Fa(e):gt(e)&&!Ye(e)&&!jf(e)?String(e):e,Fa=(t,e="")=>{var n;return En(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class Im{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Nt&&(Nt.active?(this.parent=Nt,this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){++this._on===1&&(this.prevScope=Nt,Nt=this)}off(){if(this._on>0&&--this._on===0){if(Nt===this)Nt=this.prevScope;else{let e=Nt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,i=r.length;n<i;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Zf(){return Nt}function Lm(t,e=!1){Nt&&Nt.cleanups.push(t)}let xt;const Oa=new WeakSet;class Jf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&(Nt.active?Nt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oa.has(this)&&(Oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||eh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Iu(this),th(this);const e=xt,n=Ln;xt=this,Ln=!0;try{return this.fn()}finally{nh(this),xt=e,Ln=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jc(e);this.deps=this.depsTail=void 0,Iu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kl(this)&&this.run()}get dirty(){return kl(this)}}let Qf=0,gs,_s;function eh(t,e=!1){if(t.flags|=8,e){t.next=_s,_s=t;return}t.next=gs,gs=t}function Gc(){Qf++}function Wc(){if(--Qf>0)return;if(_s){let e=_s;for(_s=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;gs;){let e=gs;for(gs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function th(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function nh(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),jc(i),km(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function kl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ih(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ih(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ms)||(t.globalVersion=Ms,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!kl(t))))return;t.flags|=2;const e=t.dep,n=xt,i=Ln;xt=t,Ln=!0;try{th(t);const r=t.fn(t._value);(e.version===0||Wn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{xt=n,Ln=i,nh(t),t.flags&=-3}}function jc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)jc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function km(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ln=!0;const rh=[];function Kn(){rh.push(Ln),Ln=!1}function Zn(){const t=rh.pop();Ln=t===void 0?!0:t}function Iu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xt;xt=void 0;try{e()}finally{xt=n}}}let Ms=0;class Nm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ma{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xt||!Ln||xt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xt)n=this.activeLink=new Nm(xt,this),xt.deps?(n.prevDep=xt.depsTail,xt.depsTail.nextDep=n,xt.depsTail=n):xt.deps=xt.depsTail=n,sh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=xt.depsTail,n.nextDep=void 0,xt.depsTail.nextDep=n,xt.depsTail=n,xt.deps===n&&(xt.deps=i)}return n}trigger(e){this.version++,Ms++,this.notify(e)}notify(e){Gc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wc()}}}function sh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)sh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xo=new WeakMap,or=Symbol(""),Nl=Symbol(""),Es=Symbol("");function Xt(t,e,n){if(Ln&&xt){let i=Xo.get(t);i||Xo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new ma),r.map=i,r.key=n),r.track()}}function hi(t,e,n,i,r,s){const o=Xo.get(t);if(!o){Ms++;return}const a=l=>{l&&l.trigger()};if(Gc(),e==="clear")o.forEach(a);else{const l=Ye(t),c=l&&da(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Es||!En(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Es)),e){case"add":l?c&&a(o.get("length")):(a(o.get(or)),Li(t)&&a(o.get(Nl)));break;case"delete":l||(a(o.get(or)),Li(t)&&a(o.get(Nl)));break;case"set":Li(t)&&a(o.get(or));break}}Wc()}function Um(t,e){const n=Xo.get(t);return n&&n.get(e)}function mr(t){const e=dt(t);return e===t||(Xt(e,"iterate",Es),gn(t))?e:Jn(t)?ki(t)?e.map(n=>Fi(wn(n))):e.map(Fi):e.map(wn)}function ga(t){return Xt(t=dt(t),"iterate",Es),t}function Bn(t,e){return Jn(t)?Fi(ki(t)?wn(e):e):wn(e)}const Fm={__proto__:null,[Symbol.iterator](){return za(this,Symbol.iterator,t=>Bn(this,t))},concat(...t){return mr(this).concat(...t.map(e=>Ye(e)?mr(e):e))},entries(){return za(this,"entries",t=>(t[1]=Bn(this,t[1]),t))},every(t,e){return ni(this,"every",t,e,void 0,arguments)},filter(t,e){return ni(this,"filter",t,e,n=>n.map(i=>Bn(this,i)),arguments)},find(t,e){return ni(this,"find",t,e,n=>Bn(this,n),arguments)},findIndex(t,e){return ni(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ni(this,"findLast",t,e,n=>Bn(this,n),arguments)},findLastIndex(t,e){return ni(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ni(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ba(this,"includes",t)},indexOf(...t){return Ba(this,"indexOf",t)},join(t){return mr(this).join(t)},lastIndexOf(...t){return Ba(this,"lastIndexOf",t)},map(t,e){return ni(this,"map",t,e,void 0,arguments)},pop(){return es(this,"pop")},push(...t){return es(this,"push",t)},reduce(t,...e){return ku(this,"reduce",t,e)},reduceRight(t,...e){return ku(this,"reduceRight",t,e)},shift(){return es(this,"shift")},some(t,e){return ni(this,"some",t,e,void 0,arguments)},splice(...t){return es(this,"splice",t)},toReversed(){return mr(this).toReversed()},toSorted(t){return mr(this).toSorted(t)},toSpliced(...t){return mr(this).toSpliced(...t)},unshift(...t){return es(this,"unshift",t)},values(){return za(this,"values",t=>Bn(this,t))}};function za(t,e,n){const i=ga(t),r=i[e],s=r.call(i);if(i!==t&&!gn(t)){if(s[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(s));return o.next=()=>Lu(s.next(),n),r!==oh[e]&&Object.defineProperties(o,{return:{get(){const a=s.return;return typeof a=="function"?a.bind(s):a}},throw:{get(){const a=s.throw;return typeof a=="function"?a.bind(s):a}}}),o}s._next=s.next,s.next=()=>Lu(s._next(),n)}return s}function Lu(t,e){return t.done||(t.value=e(t.value)),t}const oh=Array.prototype;function ni(t,e,n,i,r,s){const o=ga(t),a=o!==t&&!gn(t),l=o[e];if(l!==oh[e]){const d=l.apply(t,s);return a?wn(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,Bn(t,d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function ku(t,e,n,i){const r=ga(t),s=r!==t&&!gn(t);let o=n,a=!1;r!==t&&(s?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Bn(t,c)),n.call(this,c,Bn(t,u),d,t)}):n.length>3&&(o=function(c,u,d){return n.call(this,c,u,d,t)}));const l=r[e](o,...i);return a?Bn(t,l):l}function Ba(t,e,n){const i=dt(t);Xt(i,"iterate",Es);const r=i[e](...n);return(r===-1||r===!1)&&va(n[0])?(n[0]=dt(n[0]),i[e](...n)):r}function es(t,e,n=[]){Kn(),Gc();const i=dt(t)[e].apply(t,n);return Wc(),Zn(),i}const Om=Bc("__proto__,__v_isRef,__isVue"),ah=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(En));function zm(t){En(t)||(t=String(t));const e=dt(this);return Xt(e,"has",t),e.hasOwnProperty(t)}class lh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Ym:fh:s?dh:uh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!r){let l;if(o&&(l=Fm[n]))return l;if(n==="hasOwnProperty")return zm}const a=Reflect.get(e,n,Lt(e)?e:i);if((En(n)?ah.has(n):Om(n))||(r||Xt(e,"get",n),s))return a;if(Lt(a)){const l=o&&da(n)?a:a.value;return r&&gt(l)?ws(l):l}return gt(a)?r?ws(a):_a(a):a}}class ch extends lh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=Ye(e)&&da(n);if(!this._isShallow){const c=Jn(s);if(!gn(i)&&!Jn(i)&&(s=dt(s),i=dt(i)),!o&&Lt(s)&&!Lt(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:ft(e,n),l=Reflect.set(e,n,i,Lt(e)?e:r);return e===dt(r)&&l&&(a?Wn(i,s)&&hi(e,"set",n,i):hi(e,"add",n,i)),l}deleteProperty(e,n){const i=ft(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&hi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!En(n)||!ah.has(n))&&Xt(e,"has",n),i}ownKeys(e){return Xt(e,"iterate",Ye(e)?"length":or),Reflect.ownKeys(e)}}class Bm extends lh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hm=new ch,Vm=new Bm,Gm=new ch(!0);const Ul=t=>t,Qs=t=>Reflect.getPrototypeOf(t);function Wm(t,e,n){return function(...i){const r=this.__v_raw,s=dt(r),o=Li(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Ul:e?Fi:wn;return!e&&Xt(s,"iterate",l?Nl:or),Gt(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jm(t,e){const n={get(r){const s=this.__v_raw,o=dt(s),a=dt(r);t||(Wn(r,a)&&Xt(o,"get",r),Xt(o,"get",a));const{has:l}=Qs(o),c=e?Ul:t?Fi:wn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Xt(dt(r),"iterate",or),r.size},has(r){const s=this.__v_raw,o=dt(s),a=dt(r);return t||(Wn(r,a)&&Xt(o,"has",r),Xt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=dt(a),c=e?Ul:t?Fi:wn;return!t&&Xt(l,"iterate",or),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return Gt(n,t?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(r){const s=dt(this),o=Qs(s),a=dt(r),l=!e&&!gn(r)&&!Jn(r)?a:r;return o.has.call(s,l)||Wn(r,l)&&o.has.call(s,r)||Wn(a,l)&&o.has.call(s,a)||(s.add(l),hi(s,"add",l,l)),this},set(r,s){!e&&!gn(s)&&!Jn(s)&&(s=dt(s));const o=dt(this),{has:a,get:l}=Qs(o);let c=a.call(o,r);c||(r=dt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Wn(s,u)&&hi(o,"set",r,s):hi(o,"add",r,s),this},delete(r){const s=dt(this),{has:o,get:a}=Qs(s);let l=o.call(s,r);l||(r=dt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&hi(s,"delete",r,void 0),c},clear(){const r=dt(this),s=r.size!==0,o=r.clear();return s&&hi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Wm(r,t,e)}),n}function Xc(t,e){const n=jm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_isShallow"?e:r==="__v_raw"?i:Reflect.get(ft(n,r)&&r in i?n:i,r,s)}const Xm={get:Xc(!1,!1)},$m={get:Xc(!1,!0)},qm={get:Xc(!0,!1)};const uh=new WeakMap,dh=new WeakMap,fh=new WeakMap,Ym=new WeakMap;function Km(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _a(t){return Jn(t)?t:$c(t,!1,Hm,Xm,uh)}function hh(t){return $c(t,!1,Gm,$m,dh)}function ws(t){return $c(t,!0,Vm,qm,fh)}function $c(t,e,n,i,r){if(!gt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const s=r.get(t);if(s)return s;const o=Km(bm(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function ki(t){return Jn(t)?ki(t.__v_raw):!!(t&&t.__v_isReactive)}function Jn(t){return!!(t&&t.__v_isReadonly)}function gn(t){return!!(t&&t.__v_isShallow)}function va(t){return t?!!t.__v_raw:!1}function dt(t){const e=t&&t.__v_raw;return e?dt(e):t}function Zm(t){return!ft(t,"__v_skip")&&Object.isExtensible(t)&&Xf(t,"__v_skip",!0),t}const wn=t=>gt(t)?_a(t):t,Fi=t=>gt(t)?ws(t):t;function Lt(t){return t?t.__v_isRef===!0:!1}function wt(t){return ph(t,!1)}function ar(t){return ph(t,!0)}function ph(t,e){return Lt(t)?t:new Jm(t,e)}class Jm{constructor(e,n){this.dep=new ma,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:dt(e),this._value=n?e:wn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||gn(e)||Jn(e);e=i?e:dt(e),Wn(e,n)&&(this._rawValue=e,this._value=i?e:wn(e),this.dep.trigger())}}function q(t){return Lt(t)?t.value:t}function Yn(t){return Ze(t)?t():q(t)}const Qm={get:(t,e,n)=>e==="__v_raw"?t:q(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Lt(r)&&!Lt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function mh(t){return ki(t)?t:new Proxy(t,Qm)}class eg{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new ma,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function tg(t){return new eg(t)}class ng{constructor(e,n,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=En(n)?n:String(n),this._raw=dt(e);let r=!0,s=e;if(!Ye(e)||En(this._key)||!da(this._key))do r=!va(s)||gn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=q(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Lt(this._raw[this._key])){const n=this._object[this._key];if(Lt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Um(this._raw,this._key)}}class ig{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function rg(t,e,n){return Lt(t)?t:Ze(t)?new ig(t):gt(t)&&arguments.length>1?sg(t,e,n):wt(t)}function sg(t,e,n){return new ng(t,e,n)}class og{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ma(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return eh(this,!0),!0}get value(){const e=this.dep.track();return ih(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ag(t,e,n=!1){let i,r;return Ze(t)?i=t:(i=t.get,r=t.set),new og(i,r,n)}const to={},$o=new WeakMap;let Ki;function lg(t,e=!1,n=Ki){if(n){let i=$o.get(n);i||$o.set(n,i=[]),i.push(t)}}function cg(t,e,n=vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=x=>r?x:gn(x)||r===!1||r===0?pi(x,1):pi(x);let u,d,f,p,g=!1,_=!1;if(Lt(t)?(d=()=>t.value,g=gn(t)):ki(t)?(d=()=>c(t),g=!0):Ye(t)?(_=!0,g=t.some(x=>ki(x)||gn(x)),d=()=>t.map(x=>{if(Lt(x))return x.value;if(ki(x))return c(x);if(Ze(x))return l?l(x,2):x()})):Ze(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Kn();try{f()}finally{Zn()}}const x=Ki;Ki=u;try{return l?l(t,3,[p]):t(p)}finally{Ki=x}}:d=qn,e&&r){const x=d,L=r===!0?1/0:r;d=()=>pi(x(),L)}const m=Zf(),h=()=>{u.stop(),m&&m.active&&Hc(m.effects,u)};if(s&&e){const x=e;e=(...L)=>{try{return x(...L)}finally{h()}}}let S=_?new Array(t.length).fill(to):to;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const L=u.run();if(x||r||g||(_?L.some((P,C)=>Wn(P,S[C])):Wn(L,S))){const P=Ki;Kn();try{f&&f(),Ki=u;const C=[L,S===to?void 0:_&&S[0]===to?[]:S,p];S=L,l?l(e,3,C):e(...C)}finally{Ki=P,Zn()}}}else u.run()};return a&&a(E),u=new Jf(d),u.scheduler=o?()=>o(E,!1):E,p=x=>lg(x,!1,u),f=u.onStop=()=>{const x=$o.get(u);if(x){if(l)l(x,4);else for(const L of x)L();$o.delete(u)}},e?i?E(!0):S=u.run():o?o(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function pi(t,e=1/0,n){if(e<=0||!gt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Lt(t))pi(t.value,e,n);else if(Ye(t))for(let i=0;i<t.length;i++)pi(t[i],e,n);else if(Br(t)||Li(t))t.forEach(i=>{pi(i,e,n)});else if(jf(t)){for(const i in t)pi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&pi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bs(t,e,n,i){try{return i?t(...i):t()}catch(r){xa(r,e,n)}}function Nn(t,e,n,i){if(Ze(t)){const r=Bs(t,e,n,i);return r&&Gf(r)&&r.catch(s=>{xa(s,e,n)}),r}if(Ye(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Nn(t[s],e,n,i));return r}}function xa(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(s){Kn(),Bs(s,null,10,[t,l,c]),Zn();return}}ug(t,n,r,i,o)}function ug(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const en=[];let Pn=-1;const Hn=[];let Ci=null,Ir=0;const gh=Promise.resolve();let qo=null;function ya(t){const e=qo||gh;return t?e.then(this?t.bind(this):t):e}function dg(t){let e=Pn+1,n=en.length;for(;e<n;){const i=e+n>>>1,r=en[i],s=Ts(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function qc(t){if(!(t.flags&1)){const e=Ts(t),n=en[en.length-1];!n||!(t.flags&2)&&e>=Ts(n)?en.push(t):en.splice(dg(e),0,t),t.flags|=1,_h()}}function _h(){qo||(qo=gh.then(yh))}function fg(t){if(!Ye(t))Ci&&t.id===-1?Ci.splice(Ir+1,0,t):t.flags&1||(Hn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Hn.push(t[e]);_h()}function vh(t,e,n,i=Pn+1){for(;i<en.length;i++){const r=en[i];if(r&&r.flags&2){if(t&&r.id!==t.uid||e!==void 0&&!(r.id>=e))continue;en.splice(i,1),i=t?i-1:Pn,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function xh(t,e,n=0){if(Hn.length){let i=Hn,r=0;if(e){i=[];for(let o=0;o<Hn.length;o++){const a=Hn[o];(a.i!==void 0?!a.i||a.i.uid<n:e.has(a))?Hn[r++]=a:i.push(a)}}const s=[...new Set(i)].sort((o,a)=>Ts(o)-Ts(a));if(Hn.length=r,Ci){for(let o=0;o<s.length;o++)Ci.push(s[o]);return}for(Ci=s,Ir=0;Ir<Ci.length;Ir++){const o=Ci[Ir];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Ci=null,Ir=0}}let Ha=!1;function hg(t,e){if(Ha){t();return}const n=e===void 0?void 0:new Set(Hn);t(),Ha=!0;try{vh(void 0,e),xh(void 0,n,e)}finally{Ha=!1}}const Ts=t=>t.id==null?t.flags&2?-1:1/0:t.id;function yh(t){try{for(Pn=0;Pn<en.length;Pn++){const e=en[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Bs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<en.length;Pn++){const e=en[Pn];e&&(e.flags&=-2)}Pn=-1,en.length=0,xh(),qo=null,(en.length||Hn.length)&&yh()}}let pn=null,bh=null;function Yo(t){const e=pn;return pn=t,bh=t&&t.type.__scopeId||null,e}function jn(t,e=pn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Qo(-1);const s=Yo(e),o=cr.length;let a;try{a=t(...r)}finally{for(let l=cr.length;l>o;l--)Wh();Yo(s),i._d&&Qo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Nr(t,e){if(pn===null)return t;const n=Ta(pn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=vt]=e[r];s&&(Ze(s)&&(s={mounted:s,updated:s}),s.deep&&pi(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Vi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Kn(),Nn(l,n,8,[t.el,a,t,e]),Zn())}}function Io(t,e){if(qt){let n=qt.provides;const i=qt.parent&&qt.parent.provides;i===n&&(n=qt.provides=Object.create(i)),n[t]=e}}function _n(t,e,n=!1){const i=Vs();if(i||lr){let r=lr?lr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ze(e)?e.call(i&&i.proxy):e}}function Sh(){return!!(Vs()||lr)}const pg=Symbol.for("v-scx"),mg=()=>_n(pg);function gg(t,e){return Yc(t,null,e)}function vn(t,e,n){return Yc(t,e,n)}function Yc(t,e,n=vt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Gt({},n),l=e&&i||!e&&s!=="post";let c;if(Ps){if(s==="sync"){const p=mg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=qn,p.resume=qn,p.pause=qn,p}}const u=qt;a.call=(p,g,_)=>Nn(p,u,g,_);let d=!1;s==="post"?a.scheduler=p=>{p.i=u,an(p,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(p,g)=>{g?p():qc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=cg(t,e,a);return Ps&&(c?c.push(f):l&&f()),f}function _g(t,e,n){const i=this.proxy,r=Rt(t)?t.includes(".")?Mh(i,t):()=>i[t]:t.bind(i,i);let s;Ze(e)?s=e:(s=e.handler,n=e);const o=Gs(this),a=Yc(r,s.bind(i),n);return o(),a}function Mh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const vg=Symbol("_vte"),ba=t=>t.__isTeleport,Va=Symbol("_leaveCb");function xg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Un){e=n;break}}return e}function Eh(t){if(!Kc(t))return ba(t.type)&&t.children?xg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ze(n.default))return n.default()}}function Ko(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Ko(ba(n.type)&&Eh(n)||n,e)}else if(t.shapeFlag&128)t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback);else if(t.transition=e,t.type===ct&&Ye(t.children)){const n=Dh(t.children,!1);n&&Ko(n,e)}}function Fl(t){if(t.component)return Fl(t.component.subTree);if(t.type===ct){const e=Ye(t.children)&&Dh(t.children,!1);return e?Fl(e):void 0}if(t.type!==Un)return t}function Ot(t,e){return Ze(t)?Gt({name:t.name},e,{setup:t}):t}function wh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Nu(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Zo=new WeakMap;function vs(t,e,n,i,r=!1){if(Ye(t)){t.forEach((_,m)=>vs(_,e&&(Ye(e)?e[m]:e),n,i,r));return}if(xs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&vs(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Ta(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,d=a.setupState,f=dt(d),p=d===vt?Vf:_=>Nu(u,_)?!1:ft(f,_),g=(_,m)=>!(m&&Nu(u,m));if(c!=null&&c!==l){if(Uu(e),Rt(c))u[c]=null,p(c)&&(d[c]=null);else if(Lt(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Ze(l))Bs(l,a,12,[o,u]);else{const _=Rt(l),m=Lt(l);if(_||m){const h=()=>{if(t.f){const S=_?p(l)?d[l]:u[l]:g()||!t.k?l.value:u[t.k];if(r)Ye(S)&&Hc(S,s);else if(Ye(S))S.includes(s)||S.push(s);else if(_)u[l]=[s],p(l)&&(d[l]=u[l]);else{const E=[s];g(l,t.k)&&(l.value=E),t.k&&(u[t.k]=E)}}else _?(u[l]=o,p(l)&&(d[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const S=()=>{h(),Zo.delete(t)};S.id=-1,Zo.set(t,S),an(S,n)}else Uu(t),h()}}}function Uu(t){const e=Zo.get(t);e&&(e.flags|=8,Zo.delete(t))}pa().requestIdleCallback;pa().cancelIdleCallback;const xs=t=>!!t.type.__asyncLoader,Kc=t=>t.type.__isKeepAlive;function yg(t,e){Th(t,"a",e)}function bg(t,e){Th(t,"da",e)}function Th(t,e,n=qt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Sa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Kc(r.parent.vnode)&&Sg(i,e,n,r),r=r.parent}}function Sg(t,e,n,i){const r=Sa(e,t,i,!0);Ma(()=>{Hc(i[e],r)},n)}function Sa(t,e,n=qt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Kn();const a=Gs(n),l=Nn(e,n,t,o);return a(),Zn(),l});return i?r.unshift(s):r.push(s),s}}const bi=t=>(e,n=qt)=>{(!Ps||t==="sp")&&Sa(t,(...i)=>e(...i),n)},Mg=bi("bm"),On=bi("m"),Eg=bi("bu"),wg=bi("u"),Tg=bi("bum"),Ma=bi("um"),Ag=bi("sp"),Rg=bi("rtg"),Cg=bi("rtc");function Pg(t,e=qt){Sa("ec",t,e)}const Dg="components";function Hs(t,e){return Lg(Dg,t,!0,e)||t}const Ig=Symbol.for("v-ndc");function Lg(t,e,n=!0,i=!1){const r=pn||qt;if(r){const s=r.type;{const a=__(s,!1);if(a&&(a===e||a===nn(e)||a===ha(nn(e))))return s}const o=Fu(r[t]||s[t],e)||Fu(r.appContext[t],e);return!o&&i?s:o}}function Fu(t,e){return t&&(t[e]||t[nn(e)]||t[ha(nn(e))])}function Pt(t,e,n,i){let r;const s=n,o=Ye(t);if(o||Rt(t)){const a=o&&ki(t);let l=!1,c=!1;a&&(l=!gn(t),c=Jn(t),t=ga(t)),r=new Array(t.length);for(let u=0,d=t.length;u<d;u++)r[u]=e(l?c?Fi(wn(t[u])):wn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)r=[];else{r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(gt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Ol=t=>t?qh(t)?Ta(t):Ol(t.parent):null,ys=Gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ol(t.parent),$root:t=>Ol(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Rh(t),$forceUpdate:t=>t.f||(t.f=()=>{qc(t.update)}),$nextTick:t=>t.n||(t.n=ya.bind(t.proxy)),$watch:t=>_g.bind(t)}),Ga=(t,e)=>t!==vt&&!t.__isScriptSetup&&ft(t,e),kg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ga(i,e))return o[e]=1,i[e];if(r!==vt&&ft(r,e))return o[e]=2,r[e];if(ft(s,e))return o[e]=3,s[e];if(n!==vt&&ft(n,e))return o[e]=4,n[e];zl&&(o[e]=0)}}const c=ys[e];let u,d;if(c)return e==="$attrs"&&Xt(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==vt&&ft(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ft(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ga(r,e)?(r[e]=n,!0):i!==vt&&ft(i,e)?(i[e]=n,!0):ft(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==vt&&a[0]!=="$"&&ft(t,a)||Ga(e,a)||ft(s,a)||ft(i,a)||ft(ys,a)||ft(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ft(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ou(t){return Ye(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zl=!0;function Ng(t){const e=Rh(t),n=t.proxy,i=t.ctx;zl=!1,e.beforeCreate&&zu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:h,beforeUnmount:S,destroyed:E,unmounted:x,render:L,renderTracked:P,renderTriggered:C,errorCaptured:U,serverPrefetch:T,expose:y,inheritAttrs:I,components:j,directives:G,filters:fe}=e;if(c&&Ug(c,i,null),o)for(const X in o){const O=o[X];Ze(O)&&(i[X]=O.bind(n))}if(r){const X=r.call(n,n);gt(X)&&(t.data=_a(X))}if(zl=!0,s)for(const X in s){const O=s[X],Se=Ze(O)?O.bind(n,n):Ze(O.get)?O.get.bind(n,n):qn,B=!Ze(O)&&Ze(O.set)?O.set.bind(n):qn,Le=ut({get:Se,set:B});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>Le.value,set:ge=>Le.value=ge})}if(a)for(const X in a)Ah(a[X],i,n,X);if(l){const X=Ze(l)?l.call(n):l;Reflect.ownKeys(X).forEach(O=>{Io(O,X[O])})}u&&zu(u,t,"c");function V(X,O){Ye(O)?O.forEach(Se=>X(Se.bind(n))):O&&X(O.bind(n))}if(V(Mg,d),V(On,f),V(Eg,p),V(wg,g),V(yg,_),V(bg,m),V(Pg,U),V(Cg,P),V(Rg,C),V(Tg,S),V(Ma,x),V(Ag,T),Ye(y))if(y.length){const X=t.exposed||(t.exposed={});y.forEach(O=>{Object.defineProperty(X,O,{get:()=>n[O],set:Se=>n[O]=Se,enumerable:!0})})}else t.exposed||(t.exposed={});L&&t.render===qn&&(t.render=L),I!=null&&(t.inheritAttrs=I),j&&(t.components=j),G&&(t.directives=G),T&&wh(t)}function Ug(t,e,n=qn){Ye(t)&&(t=Bl(t));for(const i in t){const r=t[i];let s;gt(r)?"default"in r?s=_n(r.from||i,r.default,!0):s=_n(r.from||i):s=_n(r),Lt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function zu(t,e,n){Nn(Ye(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ah(t,e,n,i){let r=i.includes(".")?Mh(n,i):()=>n[i];if(Rt(t)){const s=e[t];Ze(s)&&vn(r,s)}else if(Ze(t))vn(r,t.bind(n));else if(gt(t))if(Ye(t))t.forEach(s=>Ah(s,e,n,i));else{const s=Ze(t.handler)?t.handler.bind(n):e[t.handler];Ze(s)&&vn(r,s,t)}}function Rh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Jo(l,c,o,!0)),Jo(l,e,o)),gt(e)&&s.set(e,l),l}function Jo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Jo(t,s,n,!0),r&&r.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Fg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Fg={data:Bu,props:Hu,emits:Hu,methods:ds,computed:ds,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:ds,directives:ds,watch:zg,provide:Bu,inject:Og};function Bu(t,e){return e?t?function(){return Gt(Ze(t)?t.call(this,this):t,Ze(e)?e.call(this,this):e)}:e:t}function Og(t,e){return ds(Bl(t),Bl(e))}function Bl(t){if(Ye(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Zt(t,e){return t?[...new Set([].concat(t,e))]:e}function ds(t,e){return t?Gt(Object.create(null),t,e):e}function Hu(t,e){return t?Ye(t)&&Ye(e)?[...new Set([...t,...e])]:Gt(Object.create(null),Ou(t),Ou(e??{})):e}function zg(t,e){if(!t)return e;if(!e)return t;const n=Gt(Object.create(null),t);for(const i in e)n[i]=Zt(t[i],e[i]);return n}function Ch(){return{app:null,config:{isNativeTag:Vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bg=0;function Hg(t,e){return function(i,r=null){Ze(i)||(i=Gt({},i)),r!=null&&!gt(r)&&(r=null);const s=Ch(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Bg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:x_,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&Ze(u.install)?(o.add(u),u.install(c,...d)):Ze(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||Te(i,r);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),t(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Ta(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=lr;lr=c;try{return u()}finally{lr=d}}};return c}}let lr=null;const Vg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${nn(e)}Modifiers`]||t[`${hr(e)}Modifiers`];function Gg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||vt;let r=n;const s=e.startsWith("update:"),o=s&&Vg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Rt(u)?u.trim():u)),o.number&&(r=r.map(Vc)));let a,l=i[a=Ua(e)]||i[a=Ua(nn(e))];!l&&s&&(l=i[a=Ua(hr(e))]),l&&Nn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nn(c,t,6,r)}}const Wg=new WeakMap;function Ph(t,e,n=!1){const i=n?Wg:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ze(t)){const l=c=>{const u=Ph(c,e,!0);u&&(a=!0,Gt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(gt(t)&&i.set(t,null),null):(Ye(s)?s.forEach(l=>o[l]=null):Gt(o,s),gt(t)&&i.set(t,o),o)}function Ea(t,e){return!t||!ca(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ft(t,e[0].toLowerCase()+e.slice(1))||ft(t,hr(e))||ft(t,e))}function Vu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:g,inheritAttrs:_}=t,m=Yo(t);let h,S;try{if(n.shapeFlag&4){const x=r||i,L=x;h=Vn(c.call(L,x,u,d,p,f,g)),S=a}else{const x=e;h=Vn(x.length>1?x(d,{attrs:a,slots:o,emit:l}):x(d,null)),S=e.props?a:jg(a)}}catch(x){cr.length=0,xa(x,t,1),h=Te(Un)}let E=h;if(S&&_!==!1){const x=Object.keys(S),{shapeFlag:L}=E;x.length&&L&7&&(s&&x.some(ua)&&(S=Xg(S,s)),E=Hr(E,S,!1,!0))}if(n.dirs&&(E=Hr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition){const x=ba(E.type)&&Eh(E)||E;Ko(x,n.transition)}return h=E,Yo(m),h}function Dh(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(Rs(r)){if(r.type!==Un||r.children==="v-if"){if(n)return;n=r}}else return}return n}const jg=t=>{let e;for(const n in t)(n==="class"||n==="style"||ca(n))&&((e||(e={}))[n]=t[n]);return e},Xg=(t,e)=>{const n={};for(const i in t)(!ua(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function $g(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Gu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Ih(o,i,f)&&!Ea(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gu(i,o,c):!0:!!o;return!1}function Gu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(!ft(t,s)||Ih(e,t,s)&&!Ea(n,s))return!0}return!1}function Ih(t,e,n){const i=t[n],r=e[n];return n==="style"&&gt(i)&&gt(r)?!Kr(i,r):i!==r}function qg({vnode:t,parent:e,suspense:n},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=i,t=r),r===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Lh={},kh=()=>Object.create(Lh),Nh=t=>Object.getPrototypeOf(t)===Lh;function Yg(t,e,n,i=!1){const r={},s=kh();t.propsDefaults=Object.create(null),Uh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:hh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Kg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=dt(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ea(t.emitsOptions,f))continue;const p=e[f];if(l)if(ft(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=nn(f);r[g]=Hl(l,a,g,p,t,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Uh(t,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!ft(e,d)&&((u=hr(d))===d||!ft(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Hl(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!ft(e,d))&&(delete s[d],c=!0)}c&&hi(t.attrs,"set","")}function Uh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ms(l))continue;const c=e[l];let u;r&&ft(r,u=nn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ea(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=dt(n),c=a||vt;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Hl(r,l,d,c[d],t,!ft(c,d))}}return o}function Hl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ft(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ze(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Gs(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===hr(n))&&(i=!0))}return i}const Zg=new WeakMap;function Fh(t,e,n=!1){const i=n?Zg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ze(t)){const u=d=>{l=!0;const[f,p]=Fh(d,e,!0);Gt(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return gt(t)&&i.set(t,tr),tr;if(Ye(s))for(let u=0;u<s.length;u++){const d=nn(s[u]);Wu(d)&&(o[d]=vt)}else if(s)for(const u in s){const d=nn(u);if(Wu(d)){const f=s[u],p=o[d]=Ye(f)||Ze(f)?{type:f}:Gt({},f),g=p.type;let _=!1,m=!0;if(Ye(g))for(let h=0;h<g.length;++h){const S=g[h],E=Ze(S)&&S.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=Ze(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||ft(p,"default"))&&a.push(d)}}const c=[o,a];return gt(t)&&i.set(t,c),c}function Wu(t){return t[0]!=="$"&&!ms(t)}const Zc=t=>t==="_"||t==="_ctx"||t==="$stable",Jc=t=>Ye(t)?t.map(Vn):[Vn(t)],Jg=(t,e,n)=>{if(e._n)return e;const i=jn((...r)=>Jc(e(...r)),n);return i._c=!1,i},Oh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Zc(r))continue;const s=t[r];if(Ze(s))e[r]=Jg(r,s,i);else if(s!=null){const o=Jc(s);e[r]=()=>o}}},zh=(t,e)=>{const n=Jc(e);t.slots.default=()=>n},Bh=(t,e,n)=>{for(const i in e)(n||!Zc(i))&&(t[i]=e[i])},Qg=(t,e,n)=>{const i=t.slots=kh();if(t.vnode.shapeFlag&32){const r=e._;r?(Bh(i,e,n),n&&Xf(i,"_",r,!0)):Oh(e,i)}else e&&zh(t,e)},e_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Bh(r,e,n):(s=!e.$stable,Oh(e,r)),o=e}else e&&(zh(t,e),o={default:1});if(s)for(const a in r)!Zc(a)&&o[a]==null&&delete r[a]},an=s_;function t_(t){return n_(t)}function n_(t,e){const n=pa();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=qn,insertStaticContent:g}=t,_=(A,D,z,b=null,te=null,ee=null,ae=void 0,ie=null,me=!!D.dynamicChildren)=>{if(A===D)return;A&&!ts(A,D)&&(b=H(A),ge(A,te,ee,!0),A=null),D.patchFlag===-2&&(me=!1,D.dynamicChildren=null),D.dynamicChildren&&A&&A.dynamicChildren&&A.dynamicChildren.hasOnce&&(D.dynamicChildren===tr&&(D.dynamicChildren=[]),D.dynamicChildren.hasOnce=!0);const{type:Y,ref:M,shapeFlag:v}=D;switch(Y){case wa:m(A,D,z,b);break;case Un:h(A,D,z,b);break;case Lo:A==null&&S(D,z,b,ae);break;case ct:j(A,D,z,b,te,ee,ae,ie,me);break;default:v&1?L(A,D,z,b,te,ee,ae,ie,me):v&6?G(A,D,z,b,te,ee,ae,ie,me):(v&64||v&128)&&Y.process(A,D,z,b,te,ee,ae,ie,me,pe)}M!=null&&te?vs(M,A&&A.ref,ee,D||A,!D):M==null&&A&&A.ref!=null&&vs(A.ref,null,ee,A,!0)},m=(A,D,z,b)=>{if(A==null)i(D.el=a(D.children),z,b);else{const te=D.el=A.el;D.children!==A.children&&c(te,D.children)}},h=(A,D,z,b)=>{A==null?i(D.el=l(D.children||""),z,b):D.el=A.el},S=(A,D,z,b)=>{[A.el,A.anchor]=g(A.children,D,z,b,A.el,A.anchor)},E=({el:A,anchor:D},z,b)=>{let te;for(;A&&A!==D;)te=f(A),i(A,z,b),A=te;i(D,z,b)},x=({el:A,anchor:D})=>{let z;for(;A&&A!==D;)z=f(A),r(A),A=z;r(D)},L=(A,D,z,b,te,ee,ae,ie,me)=>{if(D.type==="svg"?ae="svg":D.type==="math"&&(ae="mathml"),A==null)P(D,z,b,te,ee,ae,ie,me);else{const Y=A.el&&A.el._isVueCE?A.el:null;try{Y&&Y._beginPatch(),T(A,D,te,ee,ae,ie,me)}finally{Y&&Y._endPatch()}}},P=(A,D,z,b,te,ee,ae,ie)=>{let me,Y;const{props:M,shapeFlag:v,transition:N,dirs:K}=A;if(me=A.el=o(A.type,ee,M&&M.is,M),v&8?u(me,A.children):v&16&&U(A.children,me,null,b,te,Wa(A,ee),ae,ie),K&&Vi(A,null,b,"created"),C(me,A,A.scopeId,ae,b),M){for(const Q in M)Q!=="value"&&!ms(Q)&&s(me,Q,null,M[Q],ee,b);"value"in M&&s(me,"value",null,M.value,ee),(Y=M.onVnodeBeforeMount)&&zn(Y,b,A)}K&&Vi(A,null,b,"beforeMount");const le=i_(te,N);le&&N.beforeEnter(me),i(me,D,z),((Y=M&&M.onVnodeMounted)||le||K)&&an(()=>{try{Y&&zn(Y,b,A),le&&N.enter(me),K&&Vi(A,null,b,"mounted")}finally{}},te)},C=(A,D,z,b,te)=>{if(z&&p(A,z),b)for(let ee=0;ee<b.length;ee++)p(A,b[ee]);if(te){let ee=te.subTree;if(D===ee||Gh(ee.type)&&(ee.ssContent===D||ee.ssFallback===D)){const ae=te.vnode;C(A,ae,ae.scopeId,ae.slotScopeIds,te.parent)}}},U=(A,D,z,b,te,ee,ae,ie,me=0)=>{for(let Y=me;Y<A.length;Y++){const M=A[Y]=ie?fi(A[Y]):Vn(A[Y]);_(null,M,D,z,b,te,ee,ae,ie)}},T=(A,D,z,b,te,ee,ae)=>{const ie=D.el=A.el;let{patchFlag:me,dynamicChildren:Y,dirs:M}=D;me|=A.patchFlag&16;const v=A.props||vt,N=D.props||vt;let K;if(z&&Gi(z,!1),(K=N.onVnodeBeforeUpdate)&&zn(K,z,D,A),M&&Vi(D,A,z,"beforeUpdate"),z&&Gi(z,!0),Y&&(!A.dynamicChildren||A.dynamicChildren.length!==Y.length)&&(me=0,ae=!1,Y=null),(v.innerHTML&&N.innerHTML==null||v.textContent&&N.textContent==null)&&u(ie,""),Y?y(A.dynamicChildren,Y,ie,z,b,Wa(D,te),ee):ae||O(A,D,ie,null,z,b,Wa(D,te),ee,!1),me>0){if(me&16)I(ie,v,N,z,te);else if(me&2&&v.class!==N.class&&s(ie,"class",null,N.class,te),me&4&&s(ie,"style",v.style,N.style,te),me&8){const le=D.dynamicProps;for(let Q=0;Q<le.length;Q++){const Me=le[Q],ye=v[Me],ke=N[Me];(ke!==ye||Me==="value")&&s(ie,Me,ye,ke,te,z)}}me&1&&A.children!==D.children&&u(ie,D.children)}else!ae&&Y==null&&I(ie,v,N,z,te);((K=N.onVnodeUpdated)||M)&&an(()=>{K&&zn(K,z,D,A),M&&Vi(D,A,z,"updated")},b)},y=(A,D,z,b,te,ee,ae)=>{for(let ie=0;ie<D.length;ie++){const me=A[ie],Y=D[ie],M=me.el||Vl(me),v=M&&(me.type===ct||!ts(me,Y)||me.shapeFlag&198)?d(M):z;_(me,Y,v,null,b,te,ee,ae,!0)}},I=(A,D,z,b,te)=>{if(D!==z){if(D!==vt)for(const ee in D)!ms(ee)&&!(ee in z)&&s(A,ee,D[ee],null,te,b);for(const ee in z){if(ms(ee))continue;const ae=z[ee],ie=D[ee];ae!==ie&&ee!=="value"&&s(A,ee,ie,ae,te,b)}"value"in z&&s(A,"value",D.value,z.value,te)}},j=(A,D,z,b,te,ee,ae,ie,me)=>{const Y=D.el=A?A.el:a(""),M=D.anchor=A?A.anchor:a("");let{patchFlag:v,dynamicChildren:N,slotScopeIds:K}=D;K&&(ie=ie?ie.concat(K):K),A==null?(i(Y,z,b),i(M,z,b),U(D.children||[],z,M,te,ee,ae,ie,me)):v>0&&v&64&&N&&A.dynamicChildren&&A.dynamicChildren.length===N.length?(y(A.dynamicChildren,N,z,te,ee,ae,ie),(D.key!=null||te&&D===te.subTree)&&Hh(A,D,!0)):O(A,D,z,M,te,ee,ae,ie,me)},G=(A,D,z,b,te,ee,ae,ie,me)=>{D.slotScopeIds=ie,A==null?D.shapeFlag&512?te.ctx.activate(D,z,b,ae,me):fe(D,z,b,te,ee,ae,me):Z(A,D,me)},fe=(A,D,z,b,te,ee,ae)=>{const ie=A.component=f_(A,b,te);if(Kc(A)&&(ie.ctx.renderer=pe),h_(ie,!1,ae),ie.asyncDep){if(te&&te.registerDep(ie,V,ae,ee),!A.el){const me=ie.subTree=Te(Un);h(null,me,D,z),A.placeholder=me.el}}else V(ie,A,D,z,te,ee,ae)},Z=(A,D,z)=>{const b=D.component=A.component;if($g(A,D,z))if(b.asyncDep&&!b.asyncResolved){D.el=A.el,D.placeholder=A.placeholder,X(b,D,z);return}else b.next=D,b.update();else D.el=A.el,D.placeholder=A.placeholder,b.vnode=D},V=(A,D,z,b,te,ee,ae)=>{const ie=()=>{if(A.isMounted){let{next:v,bu:N,u:K,parent:le,vnode:Q}=A;{const ve=Vh(A);if(ve){v&&(v.el=Q.el,X(A,v,ae)),ve.asyncDep.then(()=>{an(()=>{A.isUnmounted||Y()},te)});return}}let Me=v,ye;Gi(A,!1),v?(v.el=Q.el,X(A,v,ae)):v=Q,N&&Do(N),(ye=v.props&&v.props.onVnodeBeforeUpdate)&&zn(ye,le,v,Q),Gi(A,!0);const ke=Vu(A),Ve=A.subTree;A.subTree=ke,_(Ve,ke,d(Ve.el),H(Ve),A,te,ee),v.el=ke.el,Me===null&&qg(A,ke.el),K&&an(K,te),(ye=v.props&&v.props.onVnodeUpdated)&&an(()=>zn(ye,le,v,Q),te)}else{let v;const{el:N,props:K}=D,{bm:le,m:Q,parent:Me,root:ye,type:ke}=A,Ve=xs(D);Gi(A,!1),le&&Do(le),!Ve&&(v=K&&K.onVnodeBeforeMount)&&zn(v,Me,D),Gi(A,!0);{ye.ce&&ye.ce._hasShadowRoot()&&ye.ce._injectChildStyle(ke,A.parent?A.parent.type:void 0);const ve=A.subTree=Vu(A);_(null,ve,z,b,A,te,ee),D.el=ve.el}if(Q&&an(Q,te),!Ve&&(v=K&&K.onVnodeMounted)){const ve=D;an(()=>zn(v,Me,ve),te)}(D.shapeFlag&256||Me&&xs(Me.vnode)&&Me.vnode.shapeFlag&256)&&A.a&&an(A.a,te),A.isMounted=!0,D=z=b=null}};A.scope.on();const me=A.effect=new Jf(ie);A.scope.off();const Y=A.update=me.run.bind(me),M=A.job=me.runIfDirty.bind(me);M.i=A,M.id=A.uid,me.scheduler=()=>qc(M),Gi(A,!0),Y()},X=(A,D,z)=>{D.component=A;const b=A.vnode.props;A.vnode=D,A.next=null,Kg(A,D.props,b,z),e_(A,D.children,z),Kn(),vh(A),Zn()},O=(A,D,z,b,te,ee,ae,ie,me=!1)=>{const Y=A&&A.children,M=A?A.shapeFlag:0,v=D.children,{patchFlag:N,shapeFlag:K}=D;if(N>0){if(N&128){B(Y,v,z,b,te,ee,ae,ie,me);return}else if(N&256){Se(Y,v,z,b,te,ee,ae,ie,me);return}}K&8?(M&16&&be(Y,te,ee),v!==Y&&u(z,v)):M&16?K&16?B(Y,v,z,b,te,ee,ae,ie,me):be(Y,te,ee,!0):(M&8&&u(z,""),K&16&&U(v,z,b,te,ee,ae,ie,me))},Se=(A,D,z,b,te,ee,ae,ie,me)=>{A=A||tr,D=D||tr;const Y=A.length,M=D.length,v=Math.min(Y,M);let N;for(N=0;N<v;N++){const K=D[N]=me?fi(D[N]):Vn(D[N]);_(A[N],K,z,null,te,ee,ae,ie,me)}Y>M?be(A,te,ee,!0,!1,v):U(D,z,b,te,ee,ae,ie,me,v)},B=(A,D,z,b,te,ee,ae,ie,me)=>{let Y=0;const M=D.length;let v=A.length-1,N=M-1;for(;Y<=v&&Y<=N;){const K=A[Y],le=D[Y]=me?fi(D[Y]):Vn(D[Y]);if(ts(K,le))_(K,le,z,null,te,ee,ae,ie,me);else break;Y++}for(;Y<=v&&Y<=N;){const K=A[v],le=D[N]=me?fi(D[N]):Vn(D[N]);if(ts(K,le))_(K,le,z,null,te,ee,ae,ie,me);else break;v--,N--}if(Y>v){if(Y<=N){const K=N+1,le=K<M?D[K].el:b;for(;Y<=N;)_(null,D[Y]=me?fi(D[Y]):Vn(D[Y]),z,le,te,ee,ae,ie,me),Y++}}else if(Y>N)for(;Y<=v;)ge(A[Y],te,ee,!0),Y++;else{const K=Y,le=Y,Q=new Map;for(Y=le;Y<=N;Y++){const He=D[Y]=me?fi(D[Y]):Vn(D[Y]);He.key!=null&&Q.set(He.key,Y)}let Me,ye=0;const ke=N-le+1;let Ve=!1,ve=0;const Ne=new Array(ke);for(Y=0;Y<ke;Y++)Ne[Y]=0;for(Y=K;Y<=v;Y++){const He=A[Y];if(ye>=ke){ge(He,te,ee,!0);continue}let Re;if(He.key!=null)Re=Q.get(He.key);else for(Me=le;Me<=N;Me++)if(Ne[Me-le]===0&&ts(He,D[Me])){Re=Me;break}Re===void 0?ge(He,te,ee,!0):(Ne[Re-le]=Y+1,Re>=ve?ve=Re:Ve=!0,_(He,D[Re],z,null,te,ee,ae,ie,me),ye++)}const We=Ve?r_(Ne):tr;for(Me=We.length-1,Y=ke-1;Y>=0;Y--){const He=le+Y,Re=D[He],F=D[He+1],ue=He+1<M?F.el||Vl(F):b;Ne[Y]===0?_(null,Re,z,ue,te,ee,ae,ie,me):Ve&&(Me<0||Y!==We[Me]?Le(Re,z,ue,2):Me--)}}},Le=(A,D,z,b,te=null)=>{const{el:ee,type:ae,transition:ie,children:me,shapeFlag:Y}=A;if(Y&6){Le(A.component.subTree,D,z,b);return}if(Y&128){A.suspense.move(D,z,b);return}if(Y&64){ae.move(A,D,z,pe);return}if(ae===ct){i(ee,D,z);for(let v=0;v<me.length;v++)Le(me[v],D,z,b);i(A.anchor,D,z);return}if(ae===Lo){E(A,D,z);return}if(b!==2&&Y&1&&ie)if(b===0)ie.persisted&&!ee[Va]?i(ee,D,z):(ie.beforeEnter(ee),i(ee,D,z),an(()=>ie.enter(ee),te));else{const{leave:v,delayLeave:N,afterLeave:K}=ie,le=()=>{A.ctx.isUnmounted?r(ee):i(ee,D,z)},Q=()=>{const Me=ee._isLeaving||!!ee[Va];ee._isLeaving&&ee[Va](!0),ie.persisted&&!Me?le():v(ee,()=>{le(),K&&K()})};N?N(ee,le,Q):Q()}else i(ee,D,z)},ge=(A,D,z,b=!1,te=!1)=>{const{type:ee,props:ae,ref:ie,children:me,dynamicChildren:Y,shapeFlag:M,patchFlag:v,dirs:N,cacheIndex:K,memo:le}=A;if((v===-2||Y&&Y.hasOnce)&&(te=!1),ie!=null&&(Kn(),vs(ie,null,z,A,!0),Zn()),K!=null&&(!A.ctx||A.ctx===D)&&(D.renderCache[K]=void 0),M&256){D.ctx.deactivate(A);return}const Q=M&1&&N,Me=!xs(A);let ye;if(Me&&(ye=ae&&ae.onVnodeBeforeUnmount)&&zn(ye,D,A),M&6)_e(A.component,z,b);else{if(M&128){A.suspense.unmount(z,b);return}Q&&Vi(A,null,D,"beforeUnmount"),M&64?A.type.remove(A,D,z,pe,b):Y&&!Y.hasOnce&&(ee!==ct||v>0&&v&64)?be(Y,D,z,!1,!0):(ee===ct&&v&384||!te&&M&16)&&be(me,D,z),b&&Oe(A)}const ke=le!=null&&K==null;(Me&&(ye=ae&&ae.onVnodeUnmounted)||Q||ke)&&an(()=>{ye&&zn(ye,D,A),Q&&Vi(A,null,D,"unmounted"),ke&&(A.el=null)},z)},Oe=A=>{const{type:D,el:z,anchor:b,transition:te}=A,ee=D===ct;if(ee&&!te){se(z,b);return}if(D===Lo){x(A),te&&!te.persisted&&te.afterLeave&&te.afterLeave();return}const ae=ee?Fl(A):A,ie=()=>{ee?d(z)&&se(z,b):r(z),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(ae&&ae.shapeFlag&1&&te&&!te.persisted){const{leave:me,delayLeave:Y}=te,M=ae.el,v=()=>me(M,ie);Y?Y(M,ie,v):v()}else ie()},se=(A,D)=>{let z;for(;A!==D;)z=f(A),r(A),A=z;r(D)},_e=(A,D,z)=>{const{bum:b,scope:te,job:ee,subTree:ae,um:ie,m:me,a:Y}=A;ju(me),ju(Y),b&&Do(b),te.stop(),ee?(ee.flags|=8,ge(ae,A,D,z)):A.vnode.el&&ae&&(ae.transition=A.vnode.transition,ge(ae,A,D,z)),ie&&an(ie,D),an(()=>{A.isUnmounted=!0},D)},be=(A,D,z,b=!1,te=!1,ee=0)=>{for(let ae=ee;ae<A.length;ae++)ge(A[ae],D,z,b,te)},H=A=>{if(A.shapeFlag&6)return H(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const D=f(A.anchor||A.el),z=D&&D[vg];return z?f(z):D},ce=(A,D,z)=>{const b=A&&D._vnode?void 0:A&&A.component?A.component.uid:d_();hg(()=>{A==null?D._vnode&&ge(D._vnode,null,null,!0):_(D._vnode||null,A,D,null,null,null,z),D._vnode=A},b)},pe={p:_,um:ge,m:Le,r:Oe,mt:fe,mc:U,pc:O,pbc:y,n:H,o:t};return{render:ce,hydrate:void 0,createApp:Hg(ce)}}function Wa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Gi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function i_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Hh(t,e,n=!1){const i=t.children,r=e.children;if(Ye(i)&&Ye(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=fi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Hh(o,a)),a.type===wa&&(a.patchFlag===-1&&(a=r[s]=fi(a)),a.el=o.el),a.type===Un&&!a.el&&(a.el=o.el)}}function r_(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Vh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vh(e)}function ju(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Vl(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Vl(e.subTree):null}const Gh=t=>t.__isSuspense;function s_(t,e){e&&e.pendingBranch?Ye(t)?e.effects.push(...t):e.effects.push(t):fg(t)}const ct=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),Un=Symbol.for("v-cmt"),Lo=Symbol.for("v-stc"),cr=[];let mn=null;function Ae(t=!1){cr.push(mn=t?null:[])}function Wh(){cr.pop(),mn=cr[cr.length-1]||null}let As=1;function Qo(t,e=!1){As+=t,t<0&&mn&&e&&(mn.hasOnce=!0)}function jh(t){return t.dynamicChildren=As>0?mn||tr:null,Wh(),As>0&&mn&&mn.push(t),t}function Ue(t,e,n,i,r,s){return jh(R(t,e,n,i,r,s,!0))}function $t(t,e,n,i,r){return jh(Te(t,e,n,i,r,!0))}function Rs(t){return t?t.__v_isVNode===!0:!1}function ts(t,e){return t.type===e.type&&t.key===e.key}const Xh=({key:t})=>t??null,ko=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Rt(t)||Lt(t)||Ze(t)?{i:pn,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,i=0,r=null,s=t===ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xh(e),ref:e&&ko(e),scopeId:bh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:pn};return a?(ea(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Rt(n)?8:16),As>0&&!o&&mn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&mn.push(l),l}const Te=o_;function o_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Ig)&&(t=Un),Rs(t)){const a=Hr(t,e,!0);return n&&ea(a,n),As>0&&!s&&mn&&(a.shapeFlag&6?mn[mn.indexOf(t)]=a:mn.push(a)),a.patchFlag=-2,a}if(v_(t)&&(t=t.__vccOpts),e){e=a_(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=ln(a)),gt(l)&&(va(l)&&!Ye(l)&&(l=Gt({},l)),e.style=zs(l))}const o=Rt(t)?1:Gh(t)?128:ba(t)?64:gt(t)?4:Ze(t)?2:0;return R(t,e,n,i,r,o,s,!0)}function a_(t){return t?va(t)||Nh(t)?Gt({},t):t:null}function Hr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?c_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Xh(c),ref:e&&e.ref?n&&s?Ye(s)?s.concat(ko(e)):[s,ko(e)]:ko(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ct?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hr(t.ssContent),ssFallback:t.ssFallback&&Hr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return l&&i&&Ko(u,l.clone(u)),u}function yt(t=" ",e=0){return Te(wa,null,t,e)}function l_(t,e){const n=Te(Lo,null,t);return n.staticCount=e,n}function Tt(t="",e=!1){return e?(Ae(),$t(Un,null,t)):Te(Un,null,t)}function Vn(t){return t==null||typeof t=="boolean"?Te(Un):Ye(t)?Te(ct,null,t.slice()):Rs(t)?fi(t):Te(wa,null,String(t))}function fi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hr(t)}function ea(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ye(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ea(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Nh(e)?e._ctx=pn:r===3&&pn&&(pn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(Ze(e)){if(i&65){ea(t,{default:e});return}e={default:e,_ctx:pn},n=32}else e=String(e),i&64?(n=16,e=[yt(e)]):n=8;t.children=e,t.shapeFlag|=n}function c_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ln([e.class,i.class]));else if(r==="style")e.style=zs([e.style,i.style]);else if(ca(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ye(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!ua(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function zn(t,e,n,i=null){Nn(t,e,7,[n,i])}const u_=Ch();let $h=0;function d_(){return $h}function f_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||u_,s={uid:$h++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Im(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fh(i,r),emitsOptions:Ph(i,r),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Gg.bind(null,s),t.ce&&t.ce(s),s}let qt=null;const Vs=()=>qt||pn;let ta,Cs;{const t=pa(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ta=e("__VUE_INSTANCE_SETTERS__",n=>qt=n),Cs=e("__VUE_SSR_SETTERS__",n=>Ps=n)}const Gs=t=>{const e=qt;return ta(t),t.scope.on(),()=>{t.scope.off(),ta(e)}},Xu=()=>{qt&&qt.scope.off(),ta(null)};function qh(t){return t.vnode.shapeFlag&4}let Ps=!1;function h_(t,e=!1,n=!1){e&&Cs(e);const{props:i,children:r}=t.vnode,s=qh(t);Yg(t,i,s,e),Qg(t,r,n||e);const o=s?p_(t,e):void 0;return e&&Cs(!1),o}function p_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,kg);const{setup:i}=n;if(i){Kn();const r=t.setupContext=i.length>1?g_(t):null,s=Gs(t),o=Bs(i,t,0,[t.props,r]),a=Gf(o);if(Zn(),s(),(a||t.sp)&&!xs(t)&&wh(t),a){if(o.then(Xu,Xu),e)return o.then(l=>{Cs(!0);try{$u(t,l,e)}finally{Cs(!1)}}).catch(l=>{xa(l,t,0)});t.asyncDep=o}else $u(t,o)}else Yh(t)}function $u(t,e,n){Ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:gt(e)&&(t.setupState=mh(e)),Yh(t)}function Yh(t,e,n){const i=t.type;t.render||(t.render=i.render||qn);{const r=Gs(t);Kn();try{Ng(t)}finally{Zn(),r()}}}const m_={get(t,e){return Xt(t,"get",""),t[e]}};function g_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,m_),slots:t.slots,emit:t.emit,expose:e}}function Ta(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(mh(Zm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ys)return ys[n](t)},has(e,n){return n in e||n in ys}})):t.proxy}function __(t,e=!0){return Ze(t)?t.displayName||t.name:t.name||e&&t.__name}function v_(t){return Ze(t)&&"__vccOpts"in t}const ut=(t,e)=>ag(t,e,Ps);function na(t,e,n){try{Qo(-1);const i=arguments.length;return i===2?gt(e)&&!Ye(e)?Rs(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Rs(n)&&(n=[n]),Te(t,e,n))}finally{Qo(1)}}const x_="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gl;const qu=typeof window<"u"&&window.trustedTypes;if(qu)try{Gl=qu.createPolicy("vue",{createHTML:t=>t})}catch{}const Kh=Gl?t=>Gl.createHTML(t):t=>t,y_="http://www.w3.org/2000/svg",b_="http://www.w3.org/1998/Math/MathML",di=typeof document<"u"?document:null,Yu=di&&di.createElement("template"),S_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?di.createElementNS(y_,t):e==="mathml"?di.createElementNS(b_,t):n?di.createElement(t,{is:n}):di.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>di.createTextNode(t),createComment:t=>di.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>di.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Yu.innerHTML=Kh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Yu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},M_=Symbol("_vtc");function E_(t,e,n){const i=t[M_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ia=Symbol("_vod"),Zh=Symbol("_vsh"),Ku={name:"show",beforeMount(t,{value:e},{transition:n}){t[ia]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ns(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),ns(t,!0),i.enter(t)):i.leave(t,()=>{ns(t,!1)}):ns(t,e))},beforeUnmount(t,{value:e}){ns(t,e)}};function ns(t,e){t.style.display=e?t[ia]:"none",t[Zh]=!e}const w_=Symbol(""),T_=/(?:^|;)\s*display\s*:/;function A_(t,e,n){const i=t.style,r=Rt(n);let s=!1;if(n&&!r){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&fs(i,a,"")}else for(const o in e)n[o]==null&&fs(i,o,"");for(const o in n){o==="display"&&(s=!0);const a=n[o];a!=null?C_(t,o,!Rt(e)&&e?e[o]:void 0,a)||fs(i,o,a):fs(i,o,"")}}else if(r){if(e!==n){const o=i[w_];o&&(n+=";"+o),i.cssText=n,s=T_.test(n)}}else e&&t.removeAttribute("style");ia in t&&((!r||e!==n)&&(t[ia]=s?i.display:""),t[Zh]&&(i.display="none"))}const no=/\s*!important$/;function fs(t,e,n){if(Ye(n))n.forEach(i=>fs(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))no.test(n)?t.setProperty(e,n.replace(no,""),"important"):t.setProperty(e,n);else{const i=R_(t,e);no.test(n)?t.setProperty(hr(i),n.replace(no,""),"important"):t[i]=n}}const Zu=["Webkit","Moz","ms"],ja={};function R_(t,e){const n=ja[e];if(n)return n;let i=nn(e);if(i!=="filter"&&i in t)return ja[e]=i;i=ha(i);for(let r=0;r<Zu.length;r++){const s=Zu[r]+i;if(s in t)return ja[e]=s}return e}function C_(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Rt(i)&&n===i}const Ju="http://www.w3.org/1999/xlink";function Qu(t,e,n,i,r,s=Cm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ju,e.slice(6,e.length)):t.setAttributeNS(Ju,e,n):n==null||s&&!$f(n)?t.removeAttribute(e):t.setAttribute(e,s?"":En(n)?String(n):n)}function ed(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=$f(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Ji(t,e,n,i){t.addEventListener(e,n,i)}function P_(t,e,n,i){t.removeEventListener(e,n,i)}const td=Symbol("_vei");function D_(t,e,n,i,r=null){const s=t[td]||(t[td]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=k_(e);if(i){const c=s[e]=F_(i,r);Ji(t,a,c,l)}else o&&(P_(t,a,o,l),s[e]=void 0)}}const I_=/(Once|Passive|Capture)$/,L_=/^on:?(?:Once|Passive|Capture)$/;function k_(t){let e,n;for(;(n=t.match(I_))&&!L_.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):hr(t.slice(2)),e]}let Xa=0;const N_=Promise.resolve(),U_=()=>Xa||(N_.then(()=>Xa=0),Xa=Date.now());function F_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const r=n.value;if(Ye(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Nn(c,e,5,a)}}else Nn(r,e,5,[i])};return n.value=t,n.attached=U_(),n}const nd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,O_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?E_(t,i,o):e==="style"?A_(t,n,i):ca(e)?ua(e)||D_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):z_(t,e,i,o))?(ed(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qu(t,e,i,o,s,e!=="value")):t._isVueCE&&(B_(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Rt(i)))?ed(t,nn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Qu(t,e,i,o))};function z_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&nd(e)&&Ze(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return nd(e)&&Rt(n)?!1:e in t}function B_(t,e){const n=t._def.props;if(!n)return!1;const i=nn(e);return Array.isArray(n)?n.some(r=>nn(r)===i):Object.keys(n).some(r=>nn(r)===i)}const ra=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ye(e)?n=>Do(e,n):e};function H_(t){t.target.composing=!0}function id(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nr=Symbol("_assign"),io=Symbol("_initialValue");function $a(t,e,n){return e&&(t=t.trim()),n&&(t=Vc(t)),t}const qa={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t.parentNode&&(t.type==="text"?t[io]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[io]=t.defaultValue.replace(/\r\n?/g,`
`))),t[nr]=ra(r);const s=i||r.props&&r.props.type==="number";Ji(t,e?"change":"input",o=>{o.target.composing||t[nr]($a(t.value,n,s))}),(n||s)&&Ji(t,"change",()=>{t.value=$a(t.value,n,s)}),e||(Ji(t,"compositionstart",H_),Ji(t,"compositionend",id),Ji(t,"change",id))},mounted(t,{value:e,modifiers:{trim:n,number:i}}){const r=e??"",s=t[io];delete t[io],s!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==s?t[nr]($a(t.value,n,i)):t.value=r},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[nr]=ra(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Vc(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l)}},V_={deep:!0,created(t,e,n){t[nr]=ra(n),Ji(t,"change",()=>{const i=t._modelValue,r=G_(t),s=t.checked,o=t[nr];if(Ye(i)){const a=qf(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Br(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(Jh(t,s))})},mounted:rd,beforeUpdate(t,e,n){t[nr]=ra(n),rd(t,e,n)}};function rd(t,{value:e,oldValue:n},i){t._modelValue=e;let r;if(Ye(e))r=qf(e,i.props.value)>-1;else if(Br(e))r=e.has(i.props.value);else{if(e===n)return;r=Kr(e,Jh(t,!0))}t.checked!==r&&(t.checked=r)}function G_(t){return"_value"in t?t._value:t.value}function Jh(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const W_=["ctrl","shift","alt","meta"],j_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>W_.some(n=>t[`${n}Key`]&&!e.includes(n))},X_=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=j_[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},$_=Gt({patchProp:O_},S_);let sd;function q_(){return sd||(sd=t_($_))}const Y_=((...t)=>{const e=q_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Z_(i);if(!r)return;const s=e._component;!Ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,K_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function K_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Z_(t){return Rt(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Lr=typeof document<"u";function Qh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function J_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Qh(t.default)}const mt=Object.assign;function Ya(t,e){const n={};for(const i in e){const r=e[i];n[i]=Fn(r)?r.map(t):t(r)}return n}const bs=()=>{},Fn=Array.isArray;function od(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const ep=/#/g,Q_=/&/g,ev=/\//g,tv=/=/g,nv=/\?/g,tp=/\+/g,iv=/%5B/g,rv=/%5D/g,np=/%5E/g,sv=/%60/g,ip=/%7B/g,ov=/%7C/g,rp=/%7D/g,av=/%20/g;function Qc(t){return t==null?"":encodeURI(""+t).replace(ov,"|").replace(iv,"[").replace(rv,"]")}function lv(t){return Qc(t).replace(ip,"{").replace(rp,"}").replace(np,"^")}function Wl(t){return Qc(t).replace(tp,"%2B").replace(av,"+").replace(ep,"%23").replace(Q_,"%26").replace(sv,"`").replace(ip,"{").replace(rp,"}").replace(np,"^")}function cv(t){return Wl(t).replace(tv,"%3D")}function uv(t){return Qc(t).replace(ep,"%23").replace(nv,"%3F")}function dv(t){return uv(t).replace(ev,"%2F")}function Ds(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const fv=/\/$/,hv=t=>t.replace(fv,"");function Ka(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=t(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=_v(i??e,n),{fullPath:i+s+o,path:i,query:r,hash:Ds(o)}}function pv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ad(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mv(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Vr(e.matched[i],n.matched[r])&&sp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!gv(t[n],e[n]))return!1;return!0}function gv(t,e){return Fn(t)?ld(t,e):Fn(e)?ld(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function ld(t,e){return Fn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function _v(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Si={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let jl=(function(t){return t.pop="pop",t.push="push",t})({}),Za=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function vv(t){if(!t)if(Lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hv(t)}const xv=/^[^#]+#/;function yv(t,e){return t.replace(xv,"#")+e}function bv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Aa=()=>({left:window.scrollX,top:window.scrollY});function Sv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=bv(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cd(t,e){return(history.state?history.state.position-e:-1)+t}const Xl=new Map;function Mv(t,e){Xl.set(t,e)}function Ev(t){const e=Xl.get(t);return Xl.delete(t),e}function wv(t){return typeof t=="string"||t&&typeof t=="object"}function op(t){return typeof t=="string"||typeof t=="symbol"}let Et=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const ap=Symbol("");Et.MATCHER_NOT_FOUND+"",Et.NAVIGATION_GUARD_REDIRECT+"",Et.NAVIGATION_ABORTED+"",Et.NAVIGATION_CANCELLED+"",Et.NAVIGATION_DUPLICATED+"";function Gr(t,e){return mt(new Error,{type:t,[ap]:!0},e)}function ii(t,e){return t instanceof Error&&ap in t&&(e==null||!!(t.type&e))}const Tv=["params","query","hash"];function Av(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Tv)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Rv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(tp," "),s=r.indexOf("="),o=Ds(s<0?r:r.slice(0,s)),a=s<0?null:Ds(r.slice(s+1));if(o in e){let l=e[o];Fn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function ud(t){let e="";for(let n in t){const i=t[n];if(n=cv(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fn(i)?i.map(r=>r&&Wl(r)):[i&&Wl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Cv(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Fn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Pv=Symbol(""),dd=Symbol(""),Ra=Symbol(""),eu=Symbol(""),$l=Symbol("");function is(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Gr(Et.NAVIGATION_ABORTED,{from:n,to:e})):f instanceof Error?l(f):wv(f)?l(Gr(Et.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Ja(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Qh(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Pi(c,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=J_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&Pi(f,n,i,o,a,r)()}))}}return s}function Dv(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Vr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Vr(c,l))||r.push(l))}return[n,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Iv=()=>location.protocol+"//"+location.host;function lp(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),ad(a,"")}return ad(n,t)+i+r}function Lv(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const p=lp(t,location),g=n.value,_=e.value;let m=0;if(f){if(n.value=p,e.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else i(p);r.forEach(h=>{h(n.value,g,{delta:m,type:jl.pop,direction:m?m>0?Za.forward:Za.back:Za.unknown})})};function l(){o=n.value}function c(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(mt({},f.state,{scroll:Aa()}),"")}}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function fd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Aa():null}}function kv(t){const{history:e,location:n}=window,i={value:lp(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Iv()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){s(l,mt({},e.state,fd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=mt({},r.value,e.state,{forward:l,scroll:Aa()});s(u.current,u,!0),s(l,mt({},fd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Nv(t){t=vv(t);const e=kv(t),n=Lv(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=mt({location:"",base:t,go:i,createHref:yv.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Uv(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Nv(t)}let ir=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var kt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(kt||{});const Fv={type:ir.Static,value:""},Ov=/[a-zA-Z0-9_]/;function zv(t){if(!t)return[[]];if(t==="/")return[[Fv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=kt.Static,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){c&&(n===kt.Static?s.push({type:ir.Static,value:c}):n===kt.Param||n===kt.ParamRegExp||n===kt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:ir.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==kt.ParamRegExp){i=n,n=kt.EscapeNext;continue}switch(n){case kt.Static:l==="/"?(c&&d(),o()):l===":"?(d(),n=kt.Param):f();break;case kt.EscapeNext:f(),n=i;break;case kt.Param:l==="("?n=kt.ParamRegExp:Ov.test(l)?f():(d(),n=kt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case kt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=kt.ParamRegExpEnd:u+=l;break;case kt.ParamRegExpEnd:d(),n=kt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===kt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}const hd="[^/]+?",Bv={sensitive:!1,strict:!1,start:!0,end:!0};var Qt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Qt||{});const Hv=/[.+*?^${}()[\]/\\]/g;function Vv(t,e){const n=mt({},Bv,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[Qt.Root];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=Qt.Segment+(n.sensitive?Qt.BonusCaseSensitive:0);if(f.type===ir.Static)d||(r+="/"),r+=f.value.replace(Hv,"\\$&"),p+=Qt.Static;else if(f.type===ir.Param){const{value:g,repeatable:_,optional:m,regexp:h}=f;s.push({name:g,repeatable:_,optional:m});const S=h||hd;if(S!==hd){p+=Qt.BonusCustomRegExp;try{`${S}`}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+x.message)}}let E=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,p+=Qt.Dynamic,m&&(p+=Qt.BonusOptional),_&&(p+=Qt.BonusRepeatable),S===".*"&&(p+=Qt.BonusWildcard)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Qt.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=s[f-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===ir.Static)u+=p.value;else if(p.type===ir.Param){const{value:g,repeatable:_,optional:m}=p,h=g in c?c[g]:"";if(Fn(h)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=Fn(h)?h.join("/"):h;if(!S)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Gv(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Qt.Static+Qt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Qt.Static+Qt.Segment?1:-1:0}function cp(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=Gv(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(pd(i))return 1;if(pd(r))return-1}return r.length-i.length}function pd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Wv={strict:!1,end:!0,sensitive:!1};function jv(t,e,n){const i=Vv(zv(t.path),n),r=mt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Xv(t,e){const n=[],i=new Map;e=od(Wv,e);function r(d){return i.get(d)}function s(d,f,p){const g=!p,_=gd(d);_.aliasOf=p&&p.record;const m=od(e,d),h=[_];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const L of x)h.push(gd(mt({},_,{components:p?p.record.components:_.components,path:L,aliasOf:p?p.record:_})))}let S,E;for(const x of h){const{path:L}=x;if(f&&L[0]!=="/"){const P=f.record.path,C=P[P.length-1]==="/"?"":"/";x.path=f.record.path+(L&&C+L)}if(S=jv(x,f,m),p?p.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),g&&d.name&&!_d(S)&&o(d.name)),up(S)&&l(S),_.children){const P=_.children;for(let C=0;C<P.length;C++)s(P[C],S,p&&p.children[C])}p=p||S}return E?()=>{o(E)}:bs}function o(d){if(op(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=Yv(d,n);n.splice(f,0,d),d.record.name&&!_d(d)&&i.set(d.record.name,d)}function c(d,f){let p,g={},_,m;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw Gr(Et.MATCHER_NOT_FOUND,{location:d});m=p.record.name,g=mt(md(f.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&md(d.params,p.keys.map(E=>E.name))),_=p.stringify(g)}else if(d.path!=null)_=d.path,p=n.find(E=>E.re.test(_)),p&&(g=p.parse(_),m=p.record.name);else{if(p=f.name?i.get(f.name):n.find(E=>E.re.test(f.path)),!p)throw Gr(Et.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=p.record.name,g=mt({},f.params,d.params),_=p.stringify(g)}const h=[];let S=p;for(;S;)h.unshift(S.record),S=S.parent;return{name:m,path:_,params:g,matched:h,meta:qv(h)}}t.forEach(d=>s(d));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function md(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function gd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:$v(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function $v(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function _d(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qv(t){return t.reduce((e,n)=>mt(e,n.meta),{})}function Yv(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;cp(t,e[s])<0?i=s:n=s+1}const r=Kv(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function Kv(t){let e=t;for(;e=e.parent;)if(up(e)&&cp(t,e)===0)return e}function up({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function vd(t){const e=_n(Ra),n=_n(eu),i=ut(()=>{const l=q(t.to);return e.resolve(l)}),r=ut(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Vr.bind(null,u));if(f>-1)return f;const p=xd(l[c-2]);return c>1&&xd(u)===p&&d[d.length-1].path!==p?d.findIndex(Vr.bind(null,l[c-2])):f}),s=ut(()=>r.value>-1&&t0(n.params,i.value.params)),o=ut(()=>r.value>-1&&r.value===n.matched.length-1&&sp(n.params,i.value.params));function a(l={}){if(e0(l)){const c=e[q(t.replace)?"replace":"push"](q(t.to)).catch(bs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ut(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function Zv(t){return t.length===1?t[0]:t}const Jv=Ot({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:vd,setup(t,{slots:e}){const n=_a(vd(t)),{options:i}=_n(Ra),r=ut(()=>({[yd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[yd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&Zv(e.default(n));return t.custom?s:na("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),Qv=Jv;function e0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function t0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Fn(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function xd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yd=(t,e,n)=>t??e??n,n0=Ot({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=_n($l),r=ut(()=>t.route||i.value),s=_n(dd,0),o=ut(()=>{let c=q(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=ut(()=>r.value.matched[o.value]);Io(dd,ut(()=>o.value+1)),Io(Pv,a),Io($l,r);const l=wt();return vn(()=>[l.value,a.value,t.name],([c,u,d],[f,p,g])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Vr(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return bd(n.default,{Component:f,route:c});const p=d.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=na(f,mt({},g,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return bd(n.default,{Component:m,route:c})||m}}});function bd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const i0=n0;function r0(t){const e=Xv(t.routes,t),n=t.parseQuery||Rv,i=t.stringifyQuery||ud,r=t.history,s=is(),o=is(),a=is(),l=ar(Si);let c=Si;Lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ya.bind(null,H=>""+H),d=Ya.bind(null,dv),f=Ya.bind(null,Ds);function p(H,ce){let pe,xe;return op(H)?(pe=e.getRecordMatcher(H),xe=ce):xe=H,e.addRoute(xe,pe)}function g(H){const ce=e.getRecordMatcher(H);ce&&e.removeRoute(ce)}function _(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function h(H,ce){if(ce=mt({},ce||l.value),typeof H=="string"){const b=Ka(n,H,ce.path),te=e.resolve({path:b.path},ce),ee=r.createHref(b.fullPath);return mt(b,te,{params:f(te.params),hash:Ds(b.hash),redirectedFrom:void 0,href:ee})}let pe;if(H.path!=null)pe=mt({},H,{path:Ka(n,H.path,ce.path).path});else{const b=mt({},H.params);for(const te in b)b[te]==null&&delete b[te];pe=mt({},H,{params:d(b)}),ce.params=d(ce.params)}const xe=e.resolve(pe,ce),A=H.hash||"";xe.params=u(f(xe.params));const D=pv(i,mt({},H,{hash:lv(A),path:xe.path})),z=r.createHref(D);return mt({fullPath:D,hash:A,query:i===ud?Cv(H.query):H.query||{}},xe,{redirectedFrom:void 0,href:z})}function S(H){return typeof H=="string"?Ka(n,H,l.value.path):mt({},H)}function E(H,ce){if(c!==H)return Gr(Et.NAVIGATION_CANCELLED,{from:ce,to:H})}function x(H){return C(H)}function L(H){return x(mt(S(H),{replace:!0}))}function P(H,ce){const pe=H.matched[H.matched.length-1];if(pe&&pe.redirect){const{redirect:xe}=pe;let A=typeof xe=="function"?xe(H,ce):xe;return typeof A=="string"&&(A=A.includes("?")||A.includes("#")?A=S(A):{path:A},A.params={}),mt({query:H.query,hash:H.hash,params:A.path!=null?{}:H.params},A)}}function C(H,ce){const pe=c=h(H),xe=l.value,A=H.state,D=H.force,z=H.replace===!0,b=P(pe,xe);if(b)return C(mt(S(b),{state:typeof b=="object"?mt({},A,b.state):A,force:D,replace:z}),ce||pe);const te=pe;te.redirectedFrom=ce;let ee;return!D&&mv(i,xe,pe)&&(ee=Gr(Et.NAVIGATION_DUPLICATED,{to:te,from:xe}),Le(xe,xe,!0,!1)),(ee?Promise.resolve(ee):y(te,xe)).catch(ae=>ii(ae)?ii(ae,Et.NAVIGATION_GUARD_REDIRECT)?ae:B(ae):O(ae,te,xe)).then(ae=>{if(ae){if(ii(ae,Et.NAVIGATION_GUARD_REDIRECT))return C(mt({replace:z},S(ae.to),{state:typeof ae.to=="object"?mt({},A,ae.to.state):A,force:D}),ce||te)}else ae=j(te,xe,!0,z,A);return I(te,xe,ae),ae})}function U(H,ce){const pe=E(H,ce);return pe?Promise.reject(pe):Promise.resolve()}function T(H){const ce=se.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(H):H()}function y(H,ce){let pe;const[xe,A,D]=Dv(H,ce);pe=Ja(xe.reverse(),"beforeRouteLeave",H,ce);for(const b of xe)b.leaveGuards.forEach(te=>{pe.push(Pi(te,H,ce))});const z=U.bind(null,H,ce);return pe.push(z),be(pe).then(()=>{pe=[];for(const b of s.list())pe.push(Pi(b,H,ce));return pe.push(z),be(pe)}).then(()=>{pe=Ja(A,"beforeRouteUpdate",H,ce);for(const b of A)b.updateGuards.forEach(te=>{pe.push(Pi(te,H,ce))});return pe.push(z),be(pe)}).then(()=>{pe=[];for(const b of D)if(b.beforeEnter)if(Fn(b.beforeEnter))for(const te of b.beforeEnter)pe.push(Pi(te,H,ce));else pe.push(Pi(b.beforeEnter,H,ce));return pe.push(z),be(pe)}).then(()=>(H.matched.forEach(b=>b.enterCallbacks={}),pe=Ja(D,"beforeRouteEnter",H,ce,T),pe.push(z),be(pe))).then(()=>{pe=[];for(const b of o.list())pe.push(Pi(b,H,ce));return pe.push(z),be(pe)}).catch(b=>ii(b,Et.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function I(H,ce,pe){a.list().forEach(xe=>T(()=>xe(H,ce,pe)))}function j(H,ce,pe,xe,A){const D=E(H,ce);if(D)return D;const z=ce===Si,b=Lr?history.state:{};pe&&(xe||z?r.replace(H.fullPath,mt({scroll:z&&b&&b.scroll},A)):r.push(H.fullPath,A)),l.value=H,Le(H,ce,pe,z),B()}let G;function fe(){G||(G=r.listen((H,ce,pe)=>{if(!_e.listening)return;const xe=h(H),A=P(xe,_e.currentRoute.value);if(A){C(mt(A,{replace:!0,force:!0}),xe).catch(bs);return}c=xe;const D=l.value;Lr&&Mv(cd(D.fullPath,pe.delta),Aa()),y(xe,D).catch(z=>ii(z,Et.NAVIGATION_ABORTED|Et.NAVIGATION_CANCELLED)?z:ii(z,Et.NAVIGATION_GUARD_REDIRECT)?(C(mt(S(z.to),{force:!0}),xe).then(b=>{ii(b,Et.NAVIGATION_ABORTED|Et.NAVIGATION_DUPLICATED)&&!pe.delta&&pe.type===jl.pop&&r.go(-1,!1)}).catch(bs),Promise.reject()):(pe.delta&&r.go(-pe.delta,!1),O(z,xe,D))).then(z=>{z=z||j(xe,D,!1),z&&(pe.delta&&!ii(z,Et.NAVIGATION_CANCELLED)?r.go(-pe.delta,!1):pe.type===jl.pop&&ii(z,Et.NAVIGATION_ABORTED|Et.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),I(xe,D,z)}).catch(bs)}))}let Z=is(),V=is(),X;function O(H,ce,pe){B(H);const xe=V.list();return xe.length?xe.forEach(A=>A(H,ce,pe)):console.error(H),Promise.reject(H)}function Se(){return X&&l.value!==Si?Promise.resolve():new Promise((H,ce)=>{Z.add([H,ce])})}function B(H){return X||(X=!H,fe(),Z.list().forEach(([ce,pe])=>H?pe(H):ce()),Z.reset()),H}function Le(H,ce,pe,xe){const{scrollBehavior:A}=t;if(!Lr||!A)return Promise.resolve();const D=!pe&&Ev(cd(H.fullPath,0))||(xe||!pe)&&history.state&&history.state.scroll||null;return ya().then(()=>A(H,ce,D)).then(z=>z&&Sv(z)).catch(z=>O(z,H,ce))}const ge=H=>r.go(H);let Oe;const se=new Set,_e={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:h,options:t,push:x,replace:L,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:V.add,isReady:Se,install(H){H.component("RouterLink",Qv),H.component("RouterView",i0),H.config.globalProperties.$router=_e,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>q(l)}),Lr&&!Oe&&l.value===Si&&(Oe=!0,x(r.location).catch(xe=>{}));const ce={};for(const xe in Si)Object.defineProperty(ce,xe,{get:()=>l.value[xe],enumerable:!0});H.provide(Ra,_e),H.provide(eu,hh(ce)),H.provide($l,l);const pe=H.unmount;se.add(H),H.unmount=function(){se.delete(H),se.size<1&&(c=Si,G&&G(),G=null,l.value=Si,Oe=!1,X=!1),pe()}}};function be(H){return H.reduce((ce,pe)=>ce.then(()=>T(pe)),Promise.resolve())}return _e}function tu(){return _n(Ra)}function Ws(t){return _n(eu)}function s0(t){return Zf()?(Lm(t),!0):!1}const Qa=new WeakMap,o0=(...t)=>{var e;const n=t[0],i=(e=Vs())==null?void 0:e.proxy;if(i==null&&!Sh())throw new Error("injectLocal must be called in setup");return i&&Qa.has(i)&&n in Qa.get(i)?Qa.get(i)[n]:_n(...t)},a0=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const l0=Object.prototype.toString,c0=t=>l0.call(t)==="[object Object]",u0=()=>{};function d0(t,e){function n(...i){return new Promise((r,s)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return n}const dp=t=>t();function f0(t=dp,e={}){const{initialState:n="active"}=e,i=fp(n==="active");function r(){i.value=!1}function s(){i.value=!0}return{isActive:ws(i),pause:r,resume:s,eventFilter:(...a)=>{i.value&&t(...a)}}}function Sd(t){return t.endsWith("rem")?Number.parseFloat(t)*16:Number.parseFloat(t)}function h0(t){return Vs()}function el(t){return Array.isArray(t)?t:[t]}function fp(...t){if(t.length!==1)return rg(...t);const e=t[0];return typeof e=="function"?ws(tg(()=>({get:e,set:u0}))):wt(e)}function p0(t,e,n={}){const{eventFilter:i=dp,...r}=n;return vn(t,d0(i,e),r)}function m0(t,e,n={}){const{eventFilter:i,initialState:r="active",...s}=n,{eventFilter:o,pause:a,resume:l,isActive:c}=f0(i,{initialState:r});return{stop:p0(t,e,{...s,eventFilter:o}),pause:a,resume:l,isActive:c}}function hp(t,e=!0,n){h0()?On(t,n):e?t():ya(t)}function g0(t=!1,e={}){const{truthyValue:n=!0,falsyValue:i=!1}=e,r=Lt(t),s=ar(t);function o(a){if(arguments.length)return s.value=a,s.value;{const l=Yn(n);return s.value=s.value===l?Yn(i):l,s.value}}return r?o:[s,o]}function _0(t,e,n){return vn(t,e,{...n,immediate:!0})}const Is=a0?window:void 0;function pp(t){var e;const n=Yn(t);return(e=n==null?void 0:n.$el)!=null?e:n}function ql(...t){const e=[],n=()=>{e.forEach(a=>a()),e.length=0},i=(a,l,c,u)=>(a.addEventListener(l,c,u),()=>a.removeEventListener(l,c,u)),r=ut(()=>{const a=el(Yn(t[0])).filter(l=>l!=null);return a.every(l=>typeof l!="string")?a:void 0}),s=_0(()=>{var a,l;return[(l=(a=r.value)==null?void 0:a.map(c=>pp(c)))!=null?l:[Is].filter(c=>c!=null),el(Yn(r.value?t[1]:t[0])),el(q(r.value?t[2]:t[1])),Yn(r.value?t[3]:t[2])]},([a,l,c,u])=>{if(n(),!(a!=null&&a.length)||!(l!=null&&l.length)||!(c!=null&&c.length))return;const d=c0(u)?{...u}:u;e.push(...a.flatMap(f=>l.flatMap(p=>c.map(g=>i(f,p,g,d)))))},{flush:"post"}),o=()=>{s(),n()};return s0(n),o}function v0(){const t=ar(!1),e=Vs();return e&&On(()=>{t.value=!0},e),t}function x0(t){const e=v0();return ut(()=>(e.value,!!t()))}const y0=Symbol("vueuse-ssr-width");function b0(){const t=Sh()?o0(y0,null):null;return typeof t=="number"?t:void 0}function S0(t,e={}){const{window:n=Is,ssrWidth:i=b0()}=e,r=x0(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),s=ar(typeof i=="number"),o=ar(),a=ar(!1),l=c=>{a.value=c.matches};return gg(()=>{if(s.value){s.value=!r.value;const c=Yn(t).split(",");a.value=c.some(u=>{const d=u.includes("not all"),f=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),p=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let g=!!(f||p);return f&&g&&(g=i>=Sd(f[1])),p&&g&&(g=i<=Sd(p[1])),d?!g:g});return}r.value&&(o.value=n.matchMedia(Yn(t)),a.value=o.value.matches)}),ql(o,"change",l,{passive:!0}),ut(()=>a.value)}const ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},so="__vueuse_ssr_handlers__",M0=E0();function E0(){return so in ro||(ro[so]=ro[so]||{}),ro[so]}function mp(t,e){return M0[t]||e}function w0(t){return S0("(prefers-color-scheme: dark)",t)}function T0(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const A0={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Md="vueuse-storage";function R0(t,e,n,i={}){var r;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:d=Is,eventFilter:f,onError:p=I=>{console.error(I)},initOnMounted:g}=i,_=(u?ar:wt)(typeof e=="function"?e():e),m=ut(()=>Yn(t));if(!n)try{n=mp("getDefaultStorage",()=>{var I;return(I=Is)==null?void 0:I.localStorage})()}catch(I){p(I)}if(!n)return _;const h=Yn(e),S=T0(h),E=(r=i.serializer)!=null?r:A0[S],{pause:x,resume:L}=m0(_,()=>C(_.value),{flush:s,deep:o,eventFilter:f});vn(m,()=>T(),{flush:s}),d&&a&&hp(()=>{n instanceof Storage?ql(d,"storage",T,{passive:!0}):ql(d,Md,y),g&&T()}),g||T();function P(I,j){if(d){const G={key:m.value,oldValue:I,newValue:j,storageArea:n};d.dispatchEvent(n instanceof Storage?new StorageEvent("storage",G):new CustomEvent(Md,{detail:G}))}}function C(I){try{const j=n.getItem(m.value);if(I==null)P(j,null),n.removeItem(m.value);else{const G=E.write(I);j!==G&&(n.setItem(m.value,G),P(j,G))}}catch(j){p(j)}}function U(I){const j=I?I.newValue:n.getItem(m.value);if(j==null)return l&&h!=null&&n.setItem(m.value,E.write(h)),h;if(!I&&c){const G=E.read(j);return typeof c=="function"?c(G,h):S==="object"&&!Array.isArray(G)?{...h,...G}:G}else return typeof j!="string"?j:E.read(j)}function T(I){if(!(I&&I.storageArea!==n)){if(I&&I.key==null){_.value=h;return}if(!(I&&I.key!==m.value)){x();try{(I==null?void 0:I.newValue)!==E.write(_.value)&&(_.value=U(I))}catch(j){p(j)}finally{I?ya(L):L()}}}}function y(I){T(I.detail)}return _}const C0="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function P0(t={}){const{selector:e="html",attribute:n="class",initialValue:i="auto",window:r=Is,storage:s,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},f=w0({window:r}),p=ut(()=>f.value?"dark":"light"),g=l||(o==null?fp(i):R0(o,i,s,{window:r,listenToStorageChanges:a})),_=ut(()=>g.value==="auto"?p.value:g.value),m=mp("updateHTMLAttrs",(x,L,P)=>{const C=typeof x=="string"?r==null?void 0:r.document.querySelector(x):pp(x);if(!C)return;const U=new Set,T=new Set;let y=null;if(L==="class"){const j=P.split(/\s/g);Object.values(d).flatMap(G=>(G||"").split(/\s/g)).filter(Boolean).forEach(G=>{j.includes(G)?U.add(G):T.add(G)})}else y={key:L,value:P};if(U.size===0&&T.size===0&&y===null)return;let I;u&&(I=r.document.createElement("style"),I.appendChild(document.createTextNode(C0)),r.document.head.appendChild(I));for(const j of U)C.classList.add(j);for(const j of T)C.classList.remove(j);y&&C.setAttribute(y.key,y.value),u&&(r.getComputedStyle(I).opacity,document.head.removeChild(I))});function h(x){var L;m(e,n,(L=d[x])!=null?L:x)}function S(x){t.onChanged?t.onChanged(x,h):h(x)}vn(_,S,{flush:"post",immediate:!0}),hp(()=>S(_.value));const E=ut({get(){return c?g.value:_.value},set(x){g.value=x}});return Object.assign(E,{store:g,system:p,state:_})}function gp(t={}){const{valueDark:e="dark",valueLight:n=""}=t,i=P0({...t,onChanged:(o,a)=>{var l;t.onChanged?(l=t.onChanged)==null||l.call(t,o==="dark",a,o):a(o)},modes:{dark:e,light:n}}),r=ut(()=>i.system.value);return ut({get(){return i.value==="dark"},set(o){const a=o?"dark":"light";r.value===a?i.value="auto":i.value=a}})}const D0="David | Portfolio",I0={greeting:"Hi, I'm",name:"David",role:["Software Developer","System Administrator"],learnMore:"Learn More",contactMe:"Contact Me"},L0={title:"About Me",content:`I have always been attracted to technology and the freedom to create, so development has become my main focus. Whether it's backend systems, databases or full applications, I always strive to create clean, efficient and scalable solutions.

I am currently studying Computer Science at University of Debrecen to further my knowledge in software development. Previously, I obtained a qualification in IT systems management at DSZC Mechwart, where I also gained insight into the world of networking and server management. This background allows me to think not only at the code level, but also to focus on the efficient operation of the infrastructure and systems.

I am motivated by continuous development and new challenges, so I am always looking for projects where creativity, precision and deep technical knowledge are required. If you'd like to collaborate, feel free to contact me!`,cv:"Check my CV"},k0={title:"Education",items:[{institution:"DSZC Mechwart",degree:"High School Diploma",startYear:2019,endYear:2023,description:"Vocational high school training where I obtained a high school diploma. During the training, I learned about the operation of computers and networks, as well as the basics of system administration."},{institution:"DSZC Mechwart",degree:"IT System Administrator (54 481 06)",startYear:2023,endYear:2024,description:"Specialized in Windows/Linux server configuration, Cisco networking and system administration."},{institution:"University of Debrecen, Faculty of Informatics",degree:"BSc Computer Science",startYear:2024,endYear:null,description:"Currently pursuing a degree in Computer Science."}],present:"Present"},N0={title:"Skills",certifications:"Certificates",certInfo:"Click on the certificate name to open it.",certCategories:["All","Networking","Development","IT"]},U0={title:"Featured Projects",description:"Here are some of my recent projects. Visit the projects page to see my complete portfolio.",viewProject:"View Project",viewAll:"View All Projects",page:{title:"Projects",subtitle:"Here are some of the projects I've worked on. You can filter them by type, technology or click on a project to see more details.",noProjects:"No projects found",noItemsFound:"No projects match the selected filter. Try selecting a different technology.",all:"All",projectTypes:["Development","3D Modeling"],links:"Links"},card:"View Details",details:{backTo:{projects:"Back to Projects",models:"Back to Models"},projectOverview:"Project Overview",features:"Features",demo:"Live Demo"},viewSource:"View Source Code",viewDemo:"View Live Demo",modelDetails:{specifications:{title:"Specifications",dimensions:"Dimensions",volume:"Volume"},printSettings:{title:"Recommended Print Settings",layerHeight:"Layer Height",infill:"Infill",printTime:"Estimated Print Time"},download:"Download STL",controls:{title:"3D Controls",rotate:"Left click + drag to rotate",move:"Right click + drag to move",zoom:"Scroll to zoom in/out"},touchControls:{title:"3D Touch Controls",rotate:"Touch and drag to rotate",move:"Two-finger drag to move",zoom:"Pinch to zoom in/out"},viewIn3D:"View in 3D",mobileNav:["Info","3D View"]}},F0={title:"Get In Touch",info:"Contact Information",email:"Email",github:"GitHub",linkedin:"LinkedIn",facebook:"Facebook"},O0=[{text:"About",link:"/#about"},{text:"Education",link:"/#education"},{text:"Skills",link:"/#skills"},{text:"Projects",link:"/projects"},{text:"Contact",link:"/#contact"}],z0={text:"Made with lots of 💖 and some ☕."},B0={title:"Send a Message",name:"Name",email:"Email",message:"Message",success:"Your message has been sent successfully!",sending:"Sending...",send:"Send Message",privacyConsent:"I consent to the processing of my data for the purpose of contacting you.",privacyError:"Please accept the data processing."},H0={title:D0,hero:I0,about:L0,education:k0,skills:N0,projects:U0,contact:F0,navItems:O0,footer:z0,contactForm:B0},V0="David | Portfolio",G0={greeting:"Hallo, ich bin",name:"David",role:["Softwareentwickler","Systemadministrator"],learnMore:"Mehr erfahren",contactMe:"Kontaktiere mich"},W0={title:"Über mich",content:`Ich war schon immer von Technologie und der Freiheit, etwas zu erschaffen, angezogen, weshalb die Entwicklung zu meinem Hauptschwerpunkt geworden ist. Egal, ob es sich um Backend-Systeme, Datenbanken oder vollständige Anwendungen handelt, ich bin immer bestrebt, saubere, effiziente und skalierbare Lösungen zu schaffen.

Ich studiere derzeit Informatik an der Universität Debrecen, um meine Kenntnisse in der Softwareentwicklung zu vertiefen. Zuvor habe ich am DSZC Mechwart eine Qualifikation in IT-Systemmanagement erworben, wo ich auch Einblicke in die Welt der Netzwerke und des Servermanagements erhielt. Dieser Hintergrund ermöglicht es mir, nicht nur auf der Code-Ebene zu denken, sondern mich auch auf den effizienten Betrieb der Infrastruktur und der Systeme zu konzentrieren.

Ich bin motiviert durch kontinuierliche Entwicklung und neue Herausforderungen, daher bin ich immer auf der Suche nach Projekten, bei denen Kreativität, Präzision und tiefes technisches Wissen gefragt sind. Wenn Sie mit mir zusammenarbeiten möchten, kontaktieren Sie mich!`,cv:"Mein Lebenslauf"},j0={title:"Ausbildung",items:[{institution:"DSZC Mechwart",degree:"Abitur",startYear:2019,endYear:2023,description:"Berufliches Gymnasium, in dem ich das Abitur erworben habe. Während der Ausbildung habe ich die Funktionsweise von Computern und Netzwerken sowie die Grundlagen der Systemadministration kennengelernt."},{institution:"DSZC Mechwart",degree:"IT-Systemadministrator (54 481 06)",startYear:2023,endYear:2024,description:"Spezialisiert auf Windows/Linux-Serverkonfiguration, Cisco-Netzwerke und Systemadministration."},{institution:"Universität Debrecen, Fakultät für Informatik",degree:"BSc Informatik",startYear:2024,endYear:null,description:"Derzeit studiere ich Informatik."}],present:"Derzeit"},X0={title:"Kompetenzen",certifications:"Zertifikate",certInfo:"Klicken Sie auf den Namen des Zertifikats, um es zu öffnen.",certCategories:["Alle","Netzwerke","Entwicklung","IT"]},$0={title:"Ausgewählte Projekte",description:"Hier sind einige meiner neuesten Projekte. Besuchen Sie die Projektseite, um mein vollständiges Portfolio zu sehen.",viewProject:"Projekt ansehen",viewAll:"Alle Projekte ansehen",page:{title:"Projekte",subtitle:"Hier sind einige der Projekte, an denen ich gearbeitet habe. Sie können sie nach Typ, Technologie filtern oder auf ein Projekt klicken, um weitere Details zu sehen.",noProjects:"Keine Projekte gefunden",noItemsFound:"Keine Projekte entsprechen dem ausgewählten Filter. Versuchen Sie, eine andere Technologie auszuwählen.",all:"Alle",projectTypes:["Entwicklung","3D Modellierung"],links:"Verweise"},card:"Details anzeigen",details:{backTo:{projects:"Zurück zu den Projekten",models:"Zurück zu den Modellen"},projectOverview:"Projektübersicht",features:"Funktionen",demo:"Live-Demo"},viewSource:"Quellcode ansehen",viewDemo:"Live-Demo ansehen",modelDetails:{specifications:{title:"Spezifikationen",dimensions:"Abmessungen",volume:"Volumen"},printSettings:{title:"Empfohlene Druckeinstellungen",layerHeight:"Schichthöhe",infill:"Füllung",printTime:"Geschätzte Druckzeit"},download:"STL herunterladen",controls:{title:"3D-Steuerungen",rotate:"Linksklick + ziehen zum Drehen",move:"Rechtsklick + ziehen zum Bewegen",zoom:"Scrollen zum Vergrößern/Verkleinern"},touchControls:{title:"Touch-Steuerungen",rotate:"Tippen und ziehen zum Drehen",move:"Zwei Finger tippen und ziehen zum Bewegen",zoom:"Zwei Finger zusammenziehen/auseinanderziehen zum Zoomen"},viewIn3D:"In 3D ansehen",mobileNav:["Info","3D Ansicht"]}},q0={title:"Kontakt",info:"Kontaktinformationen",email:"E-Mail",github:"GitHub",linkedin:"LinkedIn",facebook:"Facebook"},Y0=[{text:"Über mich",link:"/#about"},{text:"Ausbildung",link:"/#education"},{text:"Kompetenzen",link:"/#skills"},{text:"Projekte",link:"/projects"},{text:"Kontakt",link:"/#contact"}],K0={text:"Hergestellt mit viel 💖 und etwas ☕."},Z0={title:"Nachricht senden",name:"Name",email:"E-Mail",message:"Nachricht",success:"Ihre Nachricht wurde erfolgreich gesendet!",sending:"Senden...",send:"Nachricht senden",privacyConsent:"Ich bin mit der Verarbeitung meiner Daten zum Zwecke der Kontaktaufnahme einverstanden.",privacyError:"Bitte akzeptieren Sie die Datenverarbeitung."},J0={title:V0,hero:G0,about:W0,education:j0,skills:X0,projects:$0,contact:q0,navItems:Y0,footer:K0,contactForm:Z0},Q0="Dávid | Portfólió",ex={greeting:"Szia, a nevem",name:"Dávid",role:["Szoftverfejlesztő","Rendszerüzemeltető"],learnMore:"Tudj meg többet",contactMe:"Kapcsolat"},tx={title:"Rólam",content:`Mindig is vonzott a technológia és az alkotás szabadsága, ezért a fejlesztés vált a fő területemmé. Legyen szó backend rendszerekről, adatbázisokról vagy teljes alkalmazásokról, mindig arra törekszem, hogy tiszta, hatékony és skálázható megoldásokat hozzak létre.

Jelenleg a Debreceni Egyetemen tanulok programtervező informatikus szakon, hogy tovább mélyítsem tudásomat a szoftverfejlesztés területén. Korábban a DSZC Mechwart intézményben szereztem informatikai rendszerüzemeltető képesítést, amely során a hálózatok és a szerverüzemeltetés világába is betekintést nyertem. Ez a háttér lehetővé teszi, hogy ne csak a kód szintjén gondolkodjak, hanem az infrastruktúra és a rendszerek hatékony működésére is odafigyeljek.

A folyamatos fejlődés és az új kihívások motiválnak, ezért mindig keresem azokat a projekteket, ahol kreativitásra, precizitásra és mély technikai tudásra van szükség. Ha szeretnél velem dolgozni, vedd fel velem a kapcsolatot!`,cv:"Önéletrajzom"},nx={title:"Tanulmányok",items:[{institution:"DSZC Mechwart",degree:"Érettségi bizonyítvány",startYear:2019,endYear:2023,description:"Szakgimnáziumi képzés, amely során érettségi bizonyítványt szereztem. A képzés során a számítógépek és hálózatok működését, valamint a rendszerüzemeltetés alapjait tanultam meg."},{institution:"DSZC Mechwart",degree:"Informatikai rendszerüzemeltető (54 481 06)",startYear:2023,endYear:2024,description:"Szakosodás Windows/Linux szerverkonfigurációra, Cisco hálózatok menedzselésére és rendszeradminisztrációra."},{institution:"Debreceni Egyetem, Informatikai Kar",degree:"BSc Programtervező Informatikus",startYear:2024,endYear:null,description:"Jelenleg Programtervező Informatikus szakon tanulok."}],present:"Napjainkig"},ix={title:"Ismeretek",certifications:"Tanúsítványok",certInfo:"Kattints a tanúsítvány nevére a megnyitáshoz.",certCategories:["Összes","Hálózatok","Fejlesztés","IT"]},rx={title:"Kiemelt Projektek",description:"Íme néhány a legutóbbi projektjeim közül. Látogasd meg a projektek oldalt a teljes portfólióm megtekintéséhez.",viewProject:"Projekt megtekintése",viewAll:"Összes projekt megtekintése",page:{title:"Projektek",subtitle:"Itt van néhány projekt, amin dolgoztam. Szűrheted őket típus, technológia szerint, vagy kattinthatsz egy projektre további részletekért.",noProjects:"Nem található projekt",noItemsFound:"Egyetlen projekt sem felel meg a kiválasztott szűrőnek. Próbálj meg másik technológiát választani.",all:"Összes",projectTypes:["Fejlesztés","3D Modellezés"],links:"Hivatkozások"},card:"Részletek megtekintése",details:{backTo:{projects:"Vissza a projektekhez",models:"Vissza a modellekhez"},projectOverview:"Projektáttekintés",features:"Funkciók",demo:"Bemutató"},viewSource:"Forráskód megtekintése",viewDemo:"Demó megtekintése",modelDetails:{specifications:{title:"Specifikációk",dimensions:"Méretek",volume:"Térfogat"},printSettings:{title:"Ajánlott nyomtatási beállítások",layerHeight:"Rétegmagasság",infill:"Kitöltés",printTime:"Becsült nyomtatási idő"},download:"STL letöltése",controls:{title:"3D irányítások",rotate:"Bal egérgomb + húzás a forgatáshoz",move:"Jobb egérgomb + húzás a mozgatáshoz",zoom:"Görgetés a nagyításhoz/kicsinyítéshez"},touchControls:{title:"Érintőképernyős irányítások",rotate:"Két ujjal húzva a forgatáshoz",move:"Két ujjal húzva mozgatás",zoom:"Összehúzás vagy széthúzás a nagyításhoz/kicsinyítéshez"},viewIn3D:"Megtekintés 3D-ben",mobileNav:["Információ","3D Nézet"]}},sx={title:"Kapcsolat",info:"Elérhetőségek",email:"Email",github:"GitHub",linkedin:"LinkedIn",facebook:"Facebook"},ox=[{text:"Rólam",link:"/#about"},{text:"Tanulmányok",link:"/#education"},{text:"Ismeretek",link:"/#skills"},{text:"Projektek",link:"/projects"},{text:"Kapcsolat",link:"/#contact"}],ax={text:"Készült sok 💖-tel, és némi ☕-val."},lx={title:"Üzenet küldése",name:"Név",email:"Email",message:"Üzenet",success:"Az üzeneted sikeresen elküldve!",sending:"Küldés...",send:"Üzenet küldése",privacyConsent:"Hozzájárulok az adataim kapcsolatfelvétel céljából történő kezeléséhez.",privacyError:"Kérlek, fogadd el az adatkezelést."},cx={title:Q0,hero:ex,about:tx,education:nx,skills:ix,projects:rx,contact:sx,navItems:ox,footer:ax,contactForm:lx},ux={en:H0,de:J0,hu:cx};function ti(){const t=_n("language",wt("en")),e=ut(()=>ux[t.value]);return{t:e,currentLanguage:t,setLanguage:n=>{t.value=n,localStorage.setItem("language",n),document.title=e.value.title,document.documentElement.lang=n}}}const dx="/abstract-shape.png",_p=/^[a-z0-9]+(-[a-z0-9]+)*$/,Ca=(t,e,n,i="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),c={provider:r.length>0?r[0]:i,prefix:l,name:a};return e&&!No(c)?null:c}const s=r[0],o=s.split("-");if(o.length>1){const a={provider:i,prefix:o.shift(),name:o.join("-")};return e&&!No(a)?null:a}if(n&&i===""){const a={provider:i,prefix:"",name:s};return e&&!No(a,n)?null:a}return null},No=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,vp=Object.freeze({left:0,top:0,width:16,height:16}),sa=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Pa=Object.freeze({...vp,...sa}),Yl=Object.freeze({...Pa,body:"",hidden:!1});function fx(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(e.rotate||0))%4;return i&&(n.rotate=i),n}function Ed(t,e){const n=fx(t,e);for(const i in Yl)i in sa?i in t&&!(i in n)&&(n[i]=sa[i]):i in e?n[i]=e[i]:i in t&&(n[i]=t[i]);return n}function hx(t,e){const n=t.icons,i=t.aliases||Object.create(null),r=Object.create(null);function s(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=i[o]&&i[o].parent,l=a&&s(a);l&&(r[o]=[a].concat(l))}return r[o]}return Object.keys(n).concat(Object.keys(i)).forEach(s),r}function px(t,e,n){const i=t.icons,r=t.aliases||Object.create(null);let s={};function o(a){s=Ed(i[a]||r[a],s)}return o(e),n.forEach(o),Ed(t,s)}function xp(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const i=hx(t);for(const r in i){const s=i[r];s&&(e(r,px(t,r,s)),n.push(r))}return n}const mx={provider:"",aliases:{},not_found:{},...vp};function tl(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function yp(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!tl(t,mx))return null;const n=e.icons;for(const r in n){const s=n[r];if(!r||typeof s.body!="string"||!tl(s,Yl))return null}const i=e.aliases||Object.create(null);for(const r in i){const s=i[r],o=s.parent;if(!r||typeof o!="string"||!n[o]&&!i[o]||!tl(s,Yl))return null}return e}const wd=Object.create(null);function gx(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Wr(t,e){const n=wd[t]||(wd[t]=Object.create(null));return n[e]||(n[e]=gx(t,e))}function bp(t,e){return yp(e)?xp(e,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function _x(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Ls=!1;function Sp(t){return typeof t=="boolean"&&(Ls=t),Ls}function vx(t){const e=typeof t=="string"?Ca(t,!0,Ls):t;if(e){const n=Wr(e.provider,e.prefix),i=e.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function xx(t,e){const n=Ca(t,!0,Ls);if(!n)return!1;const i=Wr(n.provider,n.prefix);return e?_x(i,n.name,e):(i.missing.add(n.name),!0)}function yx(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Ls&&!e&&!t.prefix){let r=!1;return yp(t)&&(t.prefix="",xp(t,(s,o)=>{xx(s,o)&&(r=!0)})),r}const n=t.prefix;if(!No({prefix:n,name:"a"}))return!1;const i=Wr(e,n);return!!bp(i,t)}const Mp=Object.freeze({width:null,height:null}),Ep=Object.freeze({...Mp,...sa}),bx=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Sx=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Td(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const i=t.split(bx);if(i===null||!i.length)return t;const r=[];let s=i.shift(),o=Sx.test(s);for(;;){if(o){const a=parseFloat(s);isNaN(a)?r.push(s):r.push(Math.ceil(a*e*n)/n)}else r.push(s);if(s=i.shift(),s===void 0)return r.join("");o=!o}}function Mx(t,e="defs"){let n="";const i=t.indexOf("<"+e);for(;i>=0;){const r=t.indexOf(">",i),s=t.indexOf("</"+e);if(r===-1||s===-1)break;const o=t.indexOf(">",s);if(o===-1)break;n+=t.slice(r+1,s).trim(),t=t.slice(0,i).trim()+t.slice(o+1)}return{defs:n,content:t}}function Ex(t,e){return t?"<defs>"+t+"</defs>"+e:e}function wx(t,e,n){const i=Mx(t);return Ex(i.defs,e+i.content+n)}const Tx=t=>t==="unset"||t==="undefined"||t==="none";function Ax(t,e){const n={...Pa,...t},i={...Ep,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,i].forEach(_=>{const m=[],h=_.hFlip,S=_.vFlip;let E=_.rotate;h?S?E+=2:(m.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),m.push("scale(-1 1)"),r.top=r.left=0):S&&(m.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),m.push("scale(1 -1)"),r.top=r.left=0);let x;switch(E<0&&(E-=Math.floor(E/4)*4),E=E%4,E){case 1:x=r.height/2+r.top,m.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:m.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:x=r.width/2+r.left,m.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}E%2===1&&(r.left!==r.top&&(x=r.left,r.left=r.top,r.top=x),r.width!==r.height&&(x=r.width,r.width=r.height,r.height=x)),m.length&&(s=wx(s,'<g transform="'+m.join(" ")+'">',"</g>"))});const o=i.width,a=i.height,l=r.width,c=r.height;let u,d;o===null?(d=a===null?"1em":a==="auto"?c:a,u=Td(d,l/c)):(u=o==="auto"?l:o,d=a===null?Td(u,c/l):a==="auto"?c:a);const f={},p=(_,m)=>{Tx(m)||(f[_]=m.toString())};p("width",u),p("height",d);const g=[r.left,r.top,l,c];return f.viewBox=g.join(" "),{attributes:f,viewBox:g,body:s}}const Rx=/\sid="(\S+)"/g,Cx="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Px=0;function Dx(t,e=Cx){const n=[];let i;for(;i=Rx.exec(t);)n.push(i[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const o=typeof e=="function"?e(s):e+(Px++).toString(),a=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const Kl=Object.create(null);function Ix(t,e){Kl[t]=e}function Zl(t){return Kl[t]||Kl[""]}function nu(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const iu=Object.create(null),rs=["https://api.simplesvg.com","https://api.unisvg.com"],Uo=[];for(;rs.length>0;)rs.length===1||Math.random()>.5?Uo.push(rs.shift()):Uo.push(rs.pop());iu[""]=nu({resources:["https://api.iconify.design"].concat(Uo)});function Lx(t,e){const n=nu(e);return n===null?!1:(iu[t]=n,!0)}function ru(t){return iu[t]}const kx=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Ad=kx();function Nx(t,e){const n=ru(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const s=e+".json?icons=";i=n.maxURL-r-n.path.length-s.length}return i}function Ux(t){return t===404}const Fx=(t,e,n)=>{const i=[],r=Nx(t,e),s="icons";let o={type:s,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=r&&c>0&&(i.push(o),o={type:s,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),i.push(o),i};function Ox(t){if(typeof t=="string"){const e=ru(t);if(e)return e.path}return"/"}const zx=(t,e,n)=>{if(!Ad){n("abort",424);return}let i=Ox(e.provider);switch(e.type){case"icons":{const s=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});i+=s+".json?"+l.toString();break}case"custom":{const s=e.uri;i+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;Ad(t+i).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{n(Ux(o)?"abort":"next",o)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},Bx={prepare:Fx,send:zx};function Hx(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let i={provider:"",prefix:"",name:""};return t.forEach(r=>{if(i.name===r.name&&i.prefix===r.prefix&&i.provider===r.provider)return;i=r;const s=r.provider,o=r.prefix,a=r.name,l=n[s]||(n[s]=Object.create(null)),c=l[o]||(l[o]=Wr(s,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const d={provider:s,prefix:o,name:a};u.push(d)}),e}function wp(t,e){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(r=>r.id!==e))})}function Vx(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const i=t.provider,r=t.prefix;e.forEach(s=>{const o=s.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:i,prefix:r,name:c});else if(t.missing.has(c))o.missing.push({provider:i,prefix:r,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||wp([t],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let Gx=0;function Wx(t,e,n){const i=Gx++,r=wp.bind(null,n,i);if(!e.pending.length)return r;const s={id:i,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),r}function jx(t,e=!0,n=!1){const i=[];return t.forEach(r=>{const s=typeof r=="string"?Ca(r,e,n):r;s&&i.push(s)}),i}var Xx={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function $x(t,e,n,i){const r=t.resources.length,s=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let P=t.resources.slice(0);for(o=[];P.length>1;){const C=Math.floor(Math.random()*P.length);o.push(P[C]),P=P.slice(0,C).concat(P.slice(C+1))}o=o.concat(P)}else o=t.resources.slice(s).concat(t.resources.slice(0,s));const a=Date.now();let l="pending",c=0,u,d=null,f=[],p=[];typeof i=="function"&&p.push(i);function g(){d&&(clearTimeout(d),d=null)}function _(){l==="pending"&&(l="aborted"),g(),f.forEach(P=>{P.status==="pending"&&(P.status="aborted")}),f=[]}function m(P,C){C&&(p=[]),typeof P=="function"&&p.push(P)}function h(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:m,abort:_}}function S(){l="failed",p.forEach(P=>{P(void 0,u)})}function E(){f.forEach(P=>{P.status==="pending"&&(P.status="aborted")}),f=[]}function x(P,C,U){const T=C!=="success";switch(f=f.filter(y=>y!==P),l){case"pending":break;case"failed":if(T||!t.dataAfterTimeout)return;break;default:return}if(C==="abort"){u=U,S();return}if(T){u=U,f.length||(o.length?L():S());return}if(g(),E(),!t.random){const y=t.resources.indexOf(P.resource);y!==-1&&y!==t.index&&(t.index=y)}l="completed",p.forEach(y=>{y(U)})}function L(){if(l!=="pending")return;g();const P=o.shift();if(P===void 0){if(f.length){d=setTimeout(()=>{g(),l==="pending"&&(E(),S())},t.timeout);return}S();return}const C={status:"pending",resource:P,callback:(U,T)=>{x(C,U,T)}};f.push(C),c++,d=setTimeout(L,t.rotate),n(P,e,C.callback)}return setTimeout(L),h}function Tp(t){const e={...Xx,...t};let n=[];function i(){n=n.filter(a=>a().status==="pending")}function r(a,l,c){const u=$x(e,a,l,(d,f)=>{i(),c&&c(d,f)});return n.push(u),u}function s(a){return n.find(l=>a(l))||null}return{query:r,find:s,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:i}}function Rd(){}const nl=Object.create(null);function qx(t){if(!nl[t]){const e=ru(t);if(!e)return;const n=Tp(e),i={config:e,redundancy:n};nl[t]=i}return nl[t]}function Yx(t,e,n){let i,r;if(typeof t=="string"){const s=Zl(t);if(!s)return n(void 0,424),Rd;r=s.send;const o=qx(t);o&&(i=o.redundancy)}else{const s=nu(t);if(s){i=Tp(s);const o=t.resources?t.resources[0]:"",a=Zl(o);a&&(r=a.send)}}return!i||!r?(n(void 0,424),Rd):i.query(e,r,n)().abort}function Cd(){}function Kx(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Vx(t)}))}function Zx(t){const e=[],n=[];return t.forEach(i=>{(i.match(_p)?e:n).push(i)}),{valid:e,invalid:n}}function ss(t,e,n){function i(){const r=t.pendingIcons;e.forEach(s=>{r&&r.delete(s),t.icons[s]||t.missing.add(s)})}if(n&&typeof n=="object")try{if(!bp(t,n).length){i();return}}catch(r){console.error(r)}i(),Kx(t)}function Pd(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function Jx(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,r=t.iconsToLoad;if(delete t.iconsToLoad,!r||!r.length)return;const s=t.loadIcon;if(t.loadIcons&&(r.length>1||!s)){Pd(t.loadIcons(r,i,n),u=>{ss(t,r,u)});return}if(s){r.forEach(u=>{const d=s(u,i,n);Pd(d,f=>{const p=f?{prefix:i,icons:{[u]:f}}:null;ss(t,[u],p)})});return}const{valid:o,invalid:a}=Zx(r);if(a.length&&ss(t,a,null),!o.length)return;const l=i.match(_p)?Zl(n):null;if(!l){ss(t,o,null);return}l.prepare(n,i,o).forEach(u=>{Yx(n,u,d=>{ss(t,u.icons,d)})})}))}const Qx=(t,e)=>{const n=jx(t,!0,Sp()),i=Hx(n);if(!i.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(i.loaded,i.missing,i.pending,Cd)}),()=>{l=!1}}const r=Object.create(null),s=[];let o,a;return i.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,s.push(Wr(c,u));const d=r[c]||(r[c]=Object.create(null));d[u]||(d[u]=[])}),i.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=Wr(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(d)||(p.add(d),r[c][u].push(d))}),s.forEach(l=>{const c=r[l.provider][l.prefix];c.length&&Jx(l,c)}),e?Wx(e,i,s):Cd};function ey(t,e){const n={...t};for(const i in e){const r=e[i],s=typeof r;i in Mp?(r===null||r&&(s==="string"||s==="number"))&&(n[i]=r):s===typeof n[i]&&(n[i]=i==="rotate"?r%4:r)}return n}const ty=/[\s,]+/;function ny(t,e){e.split(ty).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function iy(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function i(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:i(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/r,s%1===0?i(s):0)}}return e}function ry(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in e)n+=" "+i+'="'+e[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function sy(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function oy(t){return"data:image/svg+xml,"+sy(t)}function ay(t){return'url("'+oy(t)+'")'}const Dd={...Ep,inline:!1},ly={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},cy={display:"inline-block"},Jl={backgroundColor:"currentColor"},Ap={backgroundColor:"transparent"},Id={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ld={webkitMask:Jl,mask:Jl,background:Ap};for(const t in Ld){const e=Ld[t];for(const n in Id)e[t+n]=Id[n]}const Fo={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Fo[t+"-flip"]=e,Fo[t.slice(0,1)+"-flip"]=e,Fo[t+"Flip"]=e});function kd(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Nd=(t,e)=>{const n=ey(Dd,e),i={...ly},r=e.mode||"svg",s={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const m=e[_];if(m!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[_]=m===!0||m==="true"||m===1;break;case"flip":typeof m=="string"&&ny(n,m);break;case"color":s.color=m;break;case"rotate":typeof m=="string"?n[_]=iy(m):typeof m=="number"&&(n[_]=m);break;case"ariaHidden":case"aria-hidden":m!==!0&&m!=="true"&&delete i["aria-hidden"];break;default:{const h=Fo[_];h?(m===!0||m==="true"||m===1)&&(n[h]=!0):Dd[_]===void 0&&(i[_]=m)}}}const l=Ax(t,n),c=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),r==="svg"){i.style={...s,...a},Object.assign(i,c);let _=0,m=e.id;return typeof m=="string"&&(m=m.replace(/-/g,"_")),i.innerHTML=Dx(l.body,m?()=>m+"ID"+_++:"iconifyVue"),na("svg",i)}const{body:u,width:d,height:f}=t,p=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),g=ry(u,{...c,width:d+"",height:f+""});return i.style={...s,"--svg":ay(g),width:kd(c.width),height:kd(c.height),...cy,...p?Jl:Ap,...a},na("span",i)};Sp(!0);Ix("",Bx);if(typeof document<"u"&&typeof window<"u"){const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!yx(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const i="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;Lx(n,r)||console.error(i)}catch{console.error(i)}}}}const uy={...Pa,body:""},Ge=Ot({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let i;if(typeof t!="string"||(i=Ca(t,!1,!0))===null)return this.abortLoading(),null;let r=vx(i);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:Qx([i],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){r=Object.assign({},r);const o=n(r.body,i.name,i.prefix,i.provider);typeof o=="string"&&(r.body=o)}const s=["iconify"];return i.prefix!==""&&s.push("iconify--"+i.prefix),i.provider!==""&&s.push("iconify--"+i.provider),{data:r,classes:s}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return Nd(uy,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Nd({...Pa,...e.data},n)}}),dy={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},fy={class:"flex justify-between items-center py-3"},hy={class:"hidden md:flex items-center space-x-4"},py={class:"flex items-center space-x-2"},my={class:"relative"},gy={key:0,class:"absolute right-0 mt-2 w-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-md shadow-lg py-1 z-50"},_y=["onClick"],vy={key:0,class:"md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"},xy={class:"px-2 pt-2 pb-3 space-y-1 flex flex-col"},yy=Ot({__name:"Navbar",props:{isDarkMode:{type:Boolean}},emits:["toggle-dark-mode"],setup(t,{emit:e}){const n=e,i=wt(!1),r=wt(!1),s=wt(!1),{t:o,currentLanguage:a,setLanguage:l}=ti(),c=[{code:"en",name:"English",icon:"twemoji:flag-united-kingdom"},{code:"hu",name:"Magyar",icon:"twemoji:flag-hungary"},{code:"de",name:"Deutsch",icon:"twemoji:flag-germany"}],u=ut(()=>c.find(_=>_.code===a.value)||c[0]),d=()=>{i.value=!i.value,i.value&&(s.value=!1)},f=()=>{s.value=!s.value},p=_=>{l(_),s.value=!1},g=()=>{r.value=window.scrollY>20};return On(()=>{window.addEventListener("scroll",g)}),Ma(()=>{window.removeEventListener("scroll",g)}),(_,m)=>{const h=Hs("router-link");return Ae(),Ue("header",{class:ln(["w-full fixed top-0 z-50 transition-all duration-300 rounded-md",r.value?"bg-white/25 dark:bg-gray-950/80 backdrop-blur-md":"bg-transparent"])},[R("div",dy,[R("div",fy,[Te(h,{to:"/",class:"text-xl font-bold text-sky-500"},{default:jn(()=>[...m[2]||(m[2]=[R("img",{src:dx,alt:"icon",class:"w-8 h-8"},null,-1)])]),_:1}),R("nav",hy,[(Ae(!0),Ue(ct,null,Pt(q(o).navItems,S=>(Ae(),$t(h,{key:S.link,to:S.link,class:"nav-link"},{default:jn(()=>[yt(de(S.text),1)]),_:2},1032,["to"]))),128))]),R("div",py,[R("div",my,[R("button",{onClick:f,class:"p-2 text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500 transition-colors duration-200 bg-gray-200/50 dark:bg-gray-800/50 rounded-md flex items-center cursor-pointer","aria-label":"Change language"},[Te(q(Ge),{icon:u.value.icon,class:"w-5 h-5"},null,8,["icon"]),s.value?(Ae(),$t(q(Ge),{key:1,icon:"ph:caret-up",class:"w-4 h-4 ml-1 md:block hidden"})):(Ae(),$t(q(Ge),{key:0,icon:"ph:caret-down",class:"w-4 h-4 ml-1 md:block hidden"}))]),s.value?(Ae(),Ue("div",gy,[(Ae(),Ue(ct,null,Pt(c,S=>R("button",{key:S.code,onClick:E=>p(S.code),class:ln(["flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80",{"bg-gray-100/80 dark:bg-gray-700/80":q(a)===S.code}])},[Te(q(Ge),{icon:S.icon,class:"w-5 h-5 mr-2"},null,8,["icon"]),yt(" "+de(S.name),1)],10,_y)),64))])):Tt("",!0)]),R("button",{onClick:m[0]||(m[0]=S=>n("toggle-dark-mode")),class:"p-2 text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500 transition-colors duration-200 bg-gray-200/50 dark:bg-gray-800/50 rounded-md cursor-pointer","aria-label":"Toggle dark mode"},[Te(q(Ge),{icon:t.isDarkMode?"ph:moon":"ph:sun",class:"w-5 h-5"},null,8,["icon"])]),R("button",{onClick:d,class:"p-2 text-gray-700 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-800/50 rounded-md md:hidden","aria-label":"Toggle menu"},[Te(q(Ge),{icon:i.value?"ph:x":"ph:list",class:"w-6 h-6"},null,8,["icon"])])])])]),i.value?(Ae(),Ue("div",vy,[R("div",xy,[(Ae(!0),Ue(ct,null,Pt(q(o).navItems,S=>(Ae(),$t(h,{key:S.link,to:S.link,class:"nav-link block",onClick:m[1]||(m[1]=E=>i.value=!1)},{default:jn(()=>[yt(de(S.text),1)]),_:2},1032,["to"]))),128))])])):Tt("",!0)],2)}}}),Rp=[{icon:"ph:envelope",title:"Email",link:"cseresznyesdavid1@outlook.com",external:!1,type:"email"},{icon:"ph:github-logo",title:"Github",link:"https://github.com/cseri502",external:!0,type:"url"},{icon:"ph:linkedin-logo",title:"LinkedIn",link:"https://www.linkedin.com/in/d%C3%A1vid-csereszny%C3%A9s-623085287/",external:!0,type:"url"},{icon:"ph:facebook-logo",title:"Facebook",link:"https://www.facebook.com/davidcseresznyes05",external:!0,type:"url"}],by={class:"bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm py-8 relative z-10"},Sy={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},My={class:"flex flex-col md:flex-row justify-between items-center"},Ey={class:"mb-4 md:mb-0"},wy={class:"text-gray-600 dark:text-gray-400"},Ty={class:"flex space-x-4"},Ay=["href","target","rel"],Ry=Ot({__name:"Footer",setup(t){const{t:e}=ti();return(n,i)=>(Ae(),Ue("footer",by,[R("div",Sy,[R("div",My,[R("div",Ey,[R("p",wy,de(q(e).footer.text),1)]),R("div",Ty,[(Ae(!0),Ue(ct,null,Pt(q(Rp),(r,s)=>(Ae(),Ue("a",{key:s,href:r.link,target:r.external?"_blank":"",rel:r.external?"noopener noreferrer":"",class:"text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500"},[Te(q(Ge),{icon:r.icon,class:"w-6 h-6"},null,8,["icon"])],8,Ay))),128))])])])]))}}),Cy={class:"min-h-screen flex flex-col transition-colors duration-300 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden"},Py={class:"grow relative z-10 font-inter"},Dy=Ot({__name:"App",setup(t){const e=gp({selector:"html",attribute:"data-theme",valueDark:"dark",valueLight:"light"}),n=g0(e),i=Ws(),{setLanguage:r}=ti();async function s(){const o=navigator.language.split("-")[0]||"en";r(o)}return On(()=>{const o=localStorage.getItem("language");o?r(o):s()}),vn(()=>i.path,()=>{window.scrollTo(0,0)}),(o,a)=>{const l=Hs("router-view");return Ae(),Ue("div",Cy,[Te(yy,{isDarkMode:q(e),onToggleDarkMode:a[0]||(a[0]=()=>q(n)())},null,8,["isDarkMode"]),R("main",Py,[Te(l)]),Te(Ry)])}}});function Iy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oo={exports:{}},Ly=Oo.exports,Ud;function ky(){return Ud||(Ud=1,(function(t,e){(function(n,i){t.exports=i()})(typeof self<"u"?self:Ly,(()=>(()=>{var n={3146:(o,a,l)=>{for(var c=l(3491),u=typeof window>"u"?l.g:window,d=["moz","webkit"],f="AnimationFrame",p=u["request"+f],g=u["cancel"+f]||u["cancelRequest"+f],_=0;!p&&_<d.length;_++)p=u[d[_]+"Request"+f],g=u[d[_]+"Cancel"+f]||u[d[_]+"CancelRequest"+f];if(!p||!g){var m=0,h=0,S=[],E=1e3/60;p=function(x){if(S.length===0){var L=c(),P=Math.max(0,E-(L-m));m=P+L,setTimeout((function(){var C=S.slice(0);S.length=0;for(var U=0;U<C.length;U++)if(!C[U].cancelled)try{C[U].callback(m)}catch(T){setTimeout((function(){throw T}),0)}}),Math.round(P))}return S.push({handle:++h,callback:x,cancelled:!1}),h},g=function(x){for(var L=0;L<S.length;L++)S[L].handle===x&&(S[L].cancelled=!0)}}o.exports=function(x){return p.call(u,x)},o.exports.cancel=function(){g.apply(u,arguments)},o.exports.polyfill=function(x){x||(x=u),x.requestAnimationFrame=p,x.cancelAnimationFrame=g}},3491:function(o){(function(){var a,l,c,u,d,f;typeof performance<"u"&&performance!==null&&performance.now?o.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(o.exports=function(){return(a()-d)/1e6},l=process.hrtime,u=(a=function(){var p;return 1e9*(p=l())[0]+p[1]})(),f=1e9*process.uptime(),d=u-f):Date.now?(o.exports=function(){return Date.now()-c},c=Date.now()):(o.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)}},i={};function r(o){var a=i[o];if(a!==void 0)return a.exports;var l=i[o]={exports:{}};return n[o].call(l.exports,l,l.exports,r),l.exports}r.n=o=>{var a=o&&o.__esModule?()=>o.default:()=>o;return r.d(a,{a}),a},r.d=(o,a)=>{for(var l in a)r.o(a,l)&&!r.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:a[l]})},r.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),r.o=(o,a)=>Object.prototype.hasOwnProperty.call(o,a);var s={};return(()=>{r.d(s,{default:()=>fe});var o=r(3146),a=r.n(o);const l=function(Z){return new RegExp(/<[a-z][\s\S]*>/i).test(Z)},c=function(Z,V){return Math.floor(Math.random()*(V-Z+1))+Z};var u="TYPE_CHARACTER",d="REMOVE_CHARACTER",f="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",g="PAUSE_FOR",_="CALL_FUNCTION",m="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",S="CHANGE_DELAY",E="CHANGE_CURSOR",x="PASTE_STRING",L="HTML_TAG";function P(Z){return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(V){return typeof V}:function(V){return V&&typeof Symbol=="function"&&V.constructor===Symbol&&V!==Symbol.prototype?"symbol":typeof V},P(Z)}function C(Z,V){var X=Object.keys(Z);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(Z);V&&(O=O.filter((function(Se){return Object.getOwnPropertyDescriptor(Z,Se).enumerable}))),X.push.apply(X,O)}return X}function U(Z){for(var V=1;V<arguments.length;V++){var X=arguments[V]!=null?arguments[V]:{};V%2?C(Object(X),!0).forEach((function(O){j(Z,O,X[O])})):Object.getOwnPropertyDescriptors?Object.defineProperties(Z,Object.getOwnPropertyDescriptors(X)):C(Object(X)).forEach((function(O){Object.defineProperty(Z,O,Object.getOwnPropertyDescriptor(X,O))}))}return Z}function T(Z){return(function(V){if(Array.isArray(V))return y(V)})(Z)||(function(V){if(typeof Symbol<"u"&&V[Symbol.iterator]!=null||V["@@iterator"]!=null)return Array.from(V)})(Z)||(function(V,X){if(V){if(typeof V=="string")return y(V,X);var O={}.toString.call(V).slice(8,-1);return O==="Object"&&V.constructor&&(O=V.constructor.name),O==="Map"||O==="Set"?Array.from(V):O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)?y(V,X):void 0}})(Z)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function y(Z,V){(V==null||V>Z.length)&&(V=Z.length);for(var X=0,O=Array(V);X<V;X++)O[X]=Z[X];return O}function I(Z,V){for(var X=0;X<V.length;X++){var O=V[X];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(Z,G(O.key),O)}}function j(Z,V,X){return(V=G(V))in Z?Object.defineProperty(Z,V,{value:X,enumerable:!0,configurable:!0,writable:!0}):Z[V]=X,Z}function G(Z){var V=(function(X){if(P(X)!="object"||!X)return X;var O=X[Symbol.toPrimitive];if(O!==void 0){var Se=O.call(X,"string");if(P(Se)!="object")return Se;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(X)})(Z);return P(V)=="symbol"?V:V+""}const fe=(function(){function Z(O,Se){var B=this;if((function(ge,Oe){if(!(ge instanceof Oe))throw new TypeError("Cannot call a class as a function")})(this,Z),j(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),j(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),j(this,"setupWrapperElement",(function(){B.state.elements.container&&(B.state.elements.wrapper.className=B.options.wrapperClassName,B.state.elements.cursor.className=B.options.cursorClassName,B.state.elements.cursor.innerHTML=B.options.cursor,B.state.elements.container.innerHTML="",B.state.elements.container.appendChild(B.state.elements.wrapper),B.state.elements.container.appendChild(B.state.elements.cursor))})),j(this,"start",(function(){return B.state.eventLoopPaused=!1,B.runEventLoop(),B})),j(this,"pause",(function(){return B.state.eventLoopPaused=!0,B})),j(this,"stop",(function(){return B.state.eventLoop&&((0,o.cancel)(B.state.eventLoop),B.state.eventLoop=null),B})),j(this,"pauseFor",(function(ge){return B.addEventToQueue(g,{ms:ge}),B})),j(this,"typeOutAllStrings",(function(){return typeof B.options.strings=="string"?(B.typeString(B.options.strings).pauseFor(B.options.pauseFor),B):(B.options.strings.forEach((function(ge){B.typeString(ge).pauseFor(B.options.pauseFor).deleteAll(B.options.deleteSpeed)})),B)})),j(this,"typeString",(function(ge){var Oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(l(ge))return B.typeOutHTMLString(ge,Oe);if(ge){var se=(B.options||{}).stringSplitter,_e=typeof se=="function"?se(ge):ge.split("");B.typeCharacters(_e,Oe)}return B})),j(this,"pasteString",(function(ge){var Oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return l(ge)?B.typeOutHTMLString(ge,Oe,!0):(ge&&B.addEventToQueue(x,{character:ge,node:Oe}),B)})),j(this,"typeOutHTMLString",(function(ge){var Oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,se=arguments.length>2?arguments[2]:void 0,_e=(function(pe){var xe=document.createElement("div");return xe.innerHTML=pe,xe.childNodes})(ge);if(_e.length>0)for(var be=0;be<_e.length;be++){var H=_e[be],ce=H.innerHTML;H&&H.nodeType!==3?(H.innerHTML="",B.addEventToQueue(m,{node:H,parentNode:Oe}),se?B.pasteString(ce,H):B.typeString(ce,H)):H.textContent&&(se?B.pasteString(H.textContent,Oe):B.typeString(H.textContent,Oe))}return B})),j(this,"deleteAll",(function(){var ge=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return B.addEventToQueue(f,{speed:ge}),B})),j(this,"changeDeleteSpeed",(function(ge){if(!ge)throw new Error("Must provide new delete speed");return B.addEventToQueue(h,{speed:ge}),B})),j(this,"changeDelay",(function(ge){if(!ge)throw new Error("Must provide new delay");return B.addEventToQueue(S,{delay:ge}),B})),j(this,"changeCursor",(function(ge){if(!ge)throw new Error("Must provide new cursor");return B.addEventToQueue(E,{cursor:ge}),B})),j(this,"deleteChars",(function(ge){if(!ge)throw new Error("Must provide amount of characters to delete");for(var Oe=0;Oe<ge;Oe++)B.addEventToQueue(d);return B})),j(this,"callFunction",(function(ge,Oe){if(!ge||typeof ge!="function")throw new Error("Callback must be a function");return B.addEventToQueue(_,{cb:ge,thisArg:Oe}),B})),j(this,"typeCharacters",(function(ge){var Oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ge||!Array.isArray(ge))throw new Error("Characters must be an array");return ge.forEach((function(se){B.addEventToQueue(u,{character:se,node:Oe})})),B})),j(this,"removeCharacters",(function(ge){if(!ge||!Array.isArray(ge))throw new Error("Characters must be an array");return ge.forEach((function(){B.addEventToQueue(d)})),B})),j(this,"addEventToQueue",(function(ge,Oe){var se=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return B.addEventToStateProperty(ge,Oe,se,"eventQueue")})),j(this,"addReverseCalledEvent",(function(ge,Oe){var se=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return B.options.loop?B.addEventToStateProperty(ge,Oe,se,"reverseCalledEvents"):B})),j(this,"addEventToStateProperty",(function(ge,Oe){var se=arguments.length>2&&arguments[2]!==void 0&&arguments[2],_e=arguments.length>3?arguments[3]:void 0,be={eventName:ge,eventArgs:Oe||{}};return B.state[_e]=se?[be].concat(T(B.state[_e])):[].concat(T(B.state[_e]),[be]),B})),j(this,"runEventLoop",(function(){B.state.lastFrameTime||(B.state.lastFrameTime=Date.now());var ge=Date.now(),Oe=ge-B.state.lastFrameTime;if(!B.state.eventQueue.length){if(!B.options.loop)return;B.state.eventQueue=T(B.state.calledEvents),B.state.calledEvents=[],B.options=U({},B.state.initialOptions)}if(B.state.eventLoop=a()(B.runEventLoop),!B.state.eventLoopPaused){if(B.state.pauseUntil){if(ge<B.state.pauseUntil)return;B.state.pauseUntil=null}var se,_e=T(B.state.eventQueue),be=_e.shift();if(!(Oe<=(se=be.eventName===p||be.eventName===d?B.options.deleteSpeed==="natural"?c(40,80):B.options.deleteSpeed:B.options.delay==="natural"?c(120,160):B.options.delay))){var H=be.eventName,ce=be.eventArgs;switch(B.logInDevMode({currentEvent:be,state:B.state,delay:se}),H){case x:case u:var pe=ce.character,xe=ce.node,A=document.createTextNode(pe),D=A;B.options.onCreateTextNode&&typeof B.options.onCreateTextNode=="function"&&(D=B.options.onCreateTextNode(pe,A)),D&&(xe?xe.appendChild(D):B.state.elements.wrapper.appendChild(D)),B.state.visibleNodes=[].concat(T(B.state.visibleNodes),[{type:"TEXT_NODE",character:pe,node:D}]);break;case d:_e.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case g:var z=be.eventArgs.ms;B.state.pauseUntil=Date.now()+parseInt(z);break;case _:var b=be.eventArgs,te=b.cb,ee=b.thisArg;te.call(ee,{elements:B.state.elements});break;case m:var ae=be.eventArgs,ie=ae.node,me=ae.parentNode;me?me.appendChild(ie):B.state.elements.wrapper.appendChild(ie),B.state.visibleNodes=[].concat(T(B.state.visibleNodes),[{type:L,node:ie,parentNode:me||B.state.elements.wrapper}]);break;case f:var Y=B.state.visibleNodes,M=ce.speed,v=[];M&&v.push({eventName:h,eventArgs:{speed:M,temp:!0}});for(var N=0,K=Y.length;N<K;N++)v.push({eventName:p,eventArgs:{removingCharacterNode:!1}});M&&v.push({eventName:h,eventArgs:{speed:B.options.deleteSpeed,temp:!0}}),_e.unshift.apply(_e,v);break;case p:var le=be.eventArgs.removingCharacterNode;if(B.state.visibleNodes.length){var Q=B.state.visibleNodes.pop(),Me=Q.type,ye=Q.node,ke=Q.character;B.options.onRemoveNode&&typeof B.options.onRemoveNode=="function"&&B.options.onRemoveNode({node:ye,character:ke}),ye&&ye.parentNode.removeChild(ye),Me===L&&le&&_e.unshift({eventName:p,eventArgs:{}})}break;case h:B.options.deleteSpeed=be.eventArgs.speed;break;case S:B.options.delay=be.eventArgs.delay;break;case E:B.options.cursor=be.eventArgs.cursor,B.state.elements.cursor.innerHTML=be.eventArgs.cursor}B.options.loop&&(be.eventName===p||be.eventArgs&&be.eventArgs.temp||(B.state.calledEvents=[].concat(T(B.state.calledEvents),[be]))),B.state.eventQueue=_e,B.state.lastFrameTime=ge}}})),O)if(typeof O=="string"){var Le=document.querySelector(O);if(!Le)throw new Error("Could not find container element");this.state.elements.container=Le}else this.state.elements.container=O;Se&&(this.options=U(U({},this.options),Se)),this.state.initialOptions=U({},this.options),this.init()}var V,X;return V=Z,(X=[{key:"init",value:function(){var O,Se;this.setupWrapperElement(),this.addEventToQueue(E,{cursor:this.options.cursor},!0),this.addEventToQueue(f,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(O=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(Se=document.createElement("style")).appendChild(document.createTextNode(O)),document.head.appendChild(Se),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(O){this.options.devMode&&console.log(O)}}])&&I(V.prototype,X),Object.defineProperty(V,"prototype",{writable:!1}),Z})()})(),s.default})()))})(Oo)),Oo.exports}var Ny=ky();const Uy=Iy(Ny),Fy={class:"glass-card flex flex-col items-center p-4 hover:scale-105 transition-all duration-200"},Oy={class:"text-sm font-medium font-inter text-gray-900 dark:text-white"},zy=Ot({__name:"SkillCard",props:{name:{},icon:{}},setup(t){return(e,n)=>(Ae(),Ue("div",Fy,[Te(q(Ge),{icon:t.icon,class:"w-10 h-10 mb-3"},null,8,["icon"]),R("span",Oy,de(t.name),1)]))}}),By={class:"glass-card p-5"},Hy={class:"flex flex-col md:flex-row md:items-center justify-between mb-2"},Vy={class:"text-lg font-semibold text-gray-900 dark:text-white"},Gy={class:"text-sm text-sky-500"},Wy={class:"text-gray-700 dark:text-gray-300 font-medium mb-2"},jy={class:"text-gray-600 dark:text-gray-400"},Xy=Ot({__name:"EducationItem",props:{institution:{},degree:{},period:{},description:{}},setup(t){return(e,n)=>(Ae(),Ue("div",By,[R("div",Hy,[R("h3",Vy,de(t.degree),1),R("span",Gy,de(t.period),1)]),R("p",Wy,de(t.institution),1),R("p",jy,de(t.description),1)]))}});class js{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const $y=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},Vt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:$y()},su=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},qy=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=su(t);Vt.publicKey=n.publicKey,Vt.blockHeadless=n.blockHeadless,Vt.storageProvider=n.storageProvider,Vt.blockList=n.blockList,Vt.limitRate=n.limitRate,Vt.origin=n.origin||e},Cp=async(t,e,n={})=>{const i=await fetch(Vt.origin+t,{method:"POST",headers:n,body:e}),r=await i.text(),s=new js(i.status,r);if(i.ok)return s;throw s},Pp=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Yy=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Dp=t=>t.webdriver||!t.languages||t.languages.length===0,Ip=()=>new js(451,"Unavailable For Headless Browser"),Ky=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},Zy=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},Jy=(t,e)=>t instanceof FormData?t.get(e):t[e],Lp=(t,e)=>{if(Zy(t))return!1;Ky(t.list,t.watchVariable);const n=Jy(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},kp=()=>new js(403,"Forbidden"),Qy=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},eb=async(t,e,n)=>{const i=Number(await n.get(t)||0);return e-Date.now()+i},Np=async(t,e,n)=>{if(!e.throttle||!n)return!1;Qy(e.throttle,e.id);const i=e.id||t;return await eb(i,e.throttle,n)>0?!0:(await n.set(i,Date.now().toString()),!1)},Up=()=>new js(429,"Too Many Requests"),tb=async(t,e,n,i)=>{const r=su(i),s=r.publicKey||Vt.publicKey,o=r.blockHeadless||Vt.blockHeadless,a=r.storageProvider||Vt.storageProvider,l={...Vt.blockList,...r.blockList},c={...Vt.limitRate,...r.limitRate};return o&&Dp(navigator)?Promise.reject(Ip()):(Pp(s,t,e),Yy(n),n&&Lp(l,n)?Promise.reject(kp()):await Np(location.pathname,c,a)?Promise.reject(Up()):Cp("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},nb=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},ib=t=>typeof t=="string"?document.querySelector(t):t,rb=async(t,e,n,i)=>{const r=su(i),s=r.publicKey||Vt.publicKey,o=r.blockHeadless||Vt.blockHeadless,a=Vt.storageProvider||r.storageProvider,l={...Vt.blockList,...r.blockList},c={...Vt.limitRate,...r.limitRate};if(o&&Dp(navigator))return Promise.reject(Ip());const u=ib(n);Pp(s,t,e),nb(u);const d=new FormData(u);return Lp(l,d)?Promise.reject(kp()):await Np(location.pathname,c,a)?Promise.reject(Up()):(d.append("lib_version","4.4.1"),d.append("service_id",t),d.append("template_id",e),d.append("user_id",s),Cp("/api/v1.0/email/send-form",d))},Fd={init:qy,send:tb,sendForm:rb,EmailJSResponseStatus:js},sb={class:"text-xl font-semibold mb-4 text-gray-900 dark:text-white"},ob={class:"mb-4"},ab={for:"name",class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"},lb={class:"mb-4"},cb={for:"email",class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"},ub={class:"mb-4"},db={for:"message",class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"},fb={class:"mb-4 flex items-start"},hb={class:"flex items-center h-5"},pb={class:"ml-3 text-sm"},mb={for:"privacy",class:"text-gray-700 dark:text-gray-300"},gb={key:0,class:"mb-4 p-3 bg-green-100/70 text-green-800 dark:bg-green-800/20 dark:text-green-400 backdrop-blur-sm rounded-md"},_b={key:1,class:"mb-4 p-3 bg-red-100/70 text-red-800 dark:bg-red-800/20 dark:text-red-400 backdrop-blur-sm rounded-md"},vb=["disabled"],xb={key:0},yb={key:1},bb=Ot({__name:"ContactForm",setup(t){const{t:e}=ti(),n=wt(""),i=wt(""),r=wt(""),s=wt(!1),o=wt(!1),a=wt(""),l=wt(!1);On(()=>{Fd.init({publicKey:"GgbAAqKVbpFjjp3g-"})});const c=async()=>{s.value=!0,a.value="";try{if(!l.value){a.value=e.value.contactForm.privacyError,s.value=!1;return}const u={from_name:n.value,from_email:i.value,message:r.value};await Fd.send("service_lrzhv2g","template_akr5e3b",u),o.value=!0,n.value="",i.value="",r.value="",l.value=!1,setTimeout(()=>{o.value=!1},5e3)}catch(u){console.error("Error sending email:",u),a.value="There was an error sending your message. Please try again."}finally{s.value=!1}};return(u,d)=>(Ae(),Ue("form",{onSubmit:X_(c,["prevent"]),class:"glass-card p-6"},[R("h3",sb,de(q(e).contactForm.title),1),R("div",ob,[R("label",ab,de(q(e).contactForm.name),1),Nr(R("input",{id:"name","onUpdate:modelValue":d[0]||(d[0]=f=>n.value=f),type:"text",required:"",class:"w-full px-3 py-2 border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-md"},null,512),[[qa,n.value]])]),R("div",lb,[R("label",cb,de(q(e).contactForm.email),1),Nr(R("input",{id:"email","onUpdate:modelValue":d[1]||(d[1]=f=>i.value=f),type:"email",required:"",class:"w-full px-3 py-2 border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-md"},null,512),[[qa,i.value]])]),R("div",ub,[R("label",db,de(q(e).contactForm.message),1),Nr(R("textarea",{id:"message","onUpdate:modelValue":d[2]||(d[2]=f=>r.value=f),rows:"4",required:"",class:"w-full px-3 py-2 border border-gray-300/50 dark:border-gray-600/50 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded-md"},null,512),[[qa,r.value]])]),R("div",fb,[R("div",hb,[Nr(R("input",{id:"privacy","onUpdate:modelValue":d[3]||(d[3]=f=>l.value=f),type:"checkbox",required:"",class:"w-4 h-4 border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 text-primary focus:ring-primary focus:ring-2 rounded"},null,512),[[V_,l.value]])]),R("div",pb,[R("label",mb,de(q(e).contactForm.privacyConsent),1)])]),o.value?(Ae(),Ue("div",gb,de(q(e).contactForm.success),1)):Tt("",!0),a.value?(Ae(),Ue("div",_b,de(a.value),1)):Tt("",!0),R("button",{type:"submit",class:"btn btn-primary w-full",disabled:s.value},[s.value?(Ae(),Ue("span",xb,de(q(e).contactForm.sending),1)):(Ae(),Ue("span",yb,de(q(e).contactForm.send),1))],8,vb)],32))}}),Sb={class:"section-title text-sky-500"},Mb={class:"text-gray-900 dark:text-white"},kr=Ot({__name:"Title",props:{title:{}},setup(t){return(e,n)=>(Ae(),Ue("h2",Sb,[n[0]||(n[0]=yt(" < ",-1)),R("span",Mb,de(t.title),1),n[1]||(n[1]=yt(" /> ",-1))]))}}),Eb={class:"flex justify-center"},wb={class:"w-full max-w-md"},Tb={class:"hidden md:flex justify-center overflow-x-auto pb-2"},Ab={class:"inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1 bg-gray-50 dark:bg-gray-800"},Rb=["onClick"],Cb={class:"md:hidden flex flex-wrap justify-center gap-2 p-2"},Pb=["onClick"],Db=Ot({__name:"CategorySelector",props:{categories:{},modelValue:{}},emits:["update:modelValue"],setup(t){return(e,n)=>(Ae(),Ue("div",Eb,[R("div",wb,[R("div",Tb,[R("div",Ab,[(Ae(!0),Ue(ct,null,Pt(t.categories,(i,r)=>(Ae(),Ue("button",{key:i,onClick:s=>e.$emit("update:modelValue",r),class:ln(["px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",t.modelValue===r?"bg-sky-500 text-white shadow-md":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"])},de(i),11,Rb))),128))])]),R("div",Cb,[(Ae(!0),Ue(ct,null,Pt(t.categories,(i,r)=>(Ae(),Ue("button",{key:i,onClick:s=>e.$emit("update:modelValue",r),class:ln(["px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",t.modelValue===r?"bg-sky-500 text-white shadow-md":"border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"])},de(i),11,Pb))),128))])])]))}}),Ib=[{name:"HTML",icon:"vscode-icons:file-type-html"},{name:"CSS",icon:"devicon:css3"},{name:"SASS",icon:"vscode-icons:file-type-sass"},{name:"LESS",icon:"vscode-icons:file-type-less"},{name:"TailwindCSS",icon:"vscode-icons:file-type-tailwind"},{name:"Bootstrap",icon:"logos:bootstrap"},{name:"JavaScript",icon:"vscode-icons:file-type-js-official"},{name:"TypeScript",icon:"vscode-icons:file-type-typescript-official"},{name:"jQuery",icon:"devicon:jquery"},{name:"Vue (Composition API)",icon:"devicon:vuejs"},{name:"Pinia",icon:"logos:pinia"},{name:"React",icon:"devicon:react"},{name:"C#",icon:"devicon:csharp"},{name:"C++",icon:"vscode-icons:file-type-cpp3"},{name:"Java",icon:"devicon:java"},{name:"Python",icon:"vscode-icons:file-type-python"},{name:".NET",icon:"logos:dotnet"},{name:"NodeJS",icon:"logos:nodejs-icon"},{name:"Hono",icon:"logos:hono"},{name:"Drizzle ORM",icon:"material-icon-theme:drizzle"},{name:"MongoDB",icon:"vscode-icons:file-type-mongo"},{name:"MySQL",icon:"logos:mysql"},{name:"PostgreSQL",icon:"devicon:postgresql"},{name:"Redis",icon:"devicon:redis"},{name:"Git",icon:"logos:git-icon"},{name:"Cisco CCNA",icon:"simple-icons:cisco"}],Lb={items:Ib},kb={All:0},Nb=[{name:"Introduction to Networks",organization:"Cisco CCNA",date:2022,file:"CCNA_R-S-_Introduction_to_Networks_certificate.pdf",category:1},{name:"Routing and Switching Essentials",organization:"Cisco CCNA",date:2022,file:"CCNA_R-S-_Routing_and_Switching_Essentials_certificate.pdf",category:1},{name:"Scaling Networks",organization:"Cisco CCNA",date:2023,file:"CCNA_R-S-_Scaling_Networks_certificate.pdf",category:1},{name:"Connecting Networks",organization:"Cisco CCNA",date:2023,file:"CCNA_R-S-_Connecting_Networks_certificate.pdf",category:1},{name:"HTML and CSS",organization:"Certiport ITS",date:2025,file:"Cert62865252306.pdf",category:2},{name:"JavaScript",organization:"Certiport ITS",date:2025,file:"Cert89412100609.pdf",category:2},{name:"Python",organization:"Certiport ITS",date:2025,file:"Cert83853654138.pdf",category:2},{name:"Java",organization:"Certiport ITS",date:2026,file:"Cert91162610320.pdf",category:2},{name:"HTML5 Application Development",organization:"Certiport ITS",date:2025,file:"Cert6466175417.pdf",category:2},{name:"Device Configuration and Management",organization:"Certiport ITS",date:2025,file:"Cert50761751679.pdf",category:3},{name:"Cybersecurity",organization:"Certiport ITS",date:2026,file:"Cert89364340988.pdf",category:3},{name:"Networking",organization:"Certiport ITS",date:2026,file:"Cert7196369199.pdf",category:1},{name:"Network Security",organization:"Certiport ITS",date:2026,file:"Cert5151083122.pdf",category:1},{name:"IT Essentials: PC Hardware and Software",organization:"Cisco",date:2021,file:"IT_Essentials_certificate.pdf",category:3}],Od={categories:kb,items:Nb},Ur=JSON.parse('[{"id":1,"title":"Matrixia","description":{"en":"A web application designed to perform matrix operations with ease.","hu":"A mátrixműveletek egyszerű végrehajtására tervezett webalkalmazás.","de":"Eine Webanwendung, mit der sich Matrixoperationen problemlos durchführen lassen."},"image":"/images/matrixia.png","tags":["Vue","TypeScript","TailwindCSS","C#",".NET","Axios"],"github":"https://github.com/cseri502/Matrixia","demo":null,"features":{"en":["Determinant calculation","Matrix rank","Matrix inversion","Transpose matrix","Adjoint (or adjugate) calculation"],"hu":["Determináns számítás","Mátrix rang","Mátrix invertálás","Mátrix transzponálás","Adjungált számítás"],"de":["Determinantenberechnung","Matrixrang","Matrixinversion","Matrix transponieren","Adjungierte (oder Koadjungierte) Berechnung"]}},{"id":2,"title":"Image Editor","description":{"en":"A modern, user-friendly web application built with React, TypeScript, and Tailwind CSS that allows users to edit images directly in their browser.","hu":"Egy modern, felhasználóbarát webalkalmazás React, TypeScript és Tailwind CSS alapokon, amely lehetővé teszi a képek közvetlen böngészőben történő szerkesztését.","de":"Eine moderne, benutzerfreundliche Webanwendung, die mit React, TypeScript und Tailwind CSS erstellt wurde und es Benutzern ermöglicht, Bilder direkt im Browser zu bearbeiten."},"image":"/images/image-editor.png","tags":["React","TypeScript","TailwindCSS"],"github":"https://github.com/cseri502/image-editor","demo":null,"features":{"en":["Image upload via drag-and-drop or file selection","Brightness adjustment (0-200%)","Grayscale effect (0-100%)","Saturation adjustment (0-200%)","Sepia effect (0-100%)","Blur effect (0-20px)","Rotate left/right (90-degree increments)","Flip horizontal","Flip vertical","Dark/light mode with system preference detection","Responsive design","Real-time preview of adjustments","Reset functionality","One-click image download with applied effects"],"hu":["Kép feltöltése drag-and-drop vagy fájlválasztás segítségével","Fényerő beállítás (0-200%)","Szürkeárnyalatos effekt (0-100%)","Telítettség módosítása (0-200%)","Szépia effekt (0-100%)","Elmosás effekt (0-20px)","Forgatás balra/jobbra (90 fokos lépésekben)","Vízszintes tükrözés","Függőleges tükrözés","Sötét/világos mód rendszerbeállítás alapján","Reszponzív kialakítás","Valós idejű előnézet","Visszaállítás funkció","Egyszerű képletöltés az alkalmazott effektekkel"],"de":["Bild-Upload per Drag-and-Drop oder Dateiauswahl","Helligkeitseinstellung (0-200%)","Graustufeneffekt (0-100%)","Sättigungsanpassung (0-200%)","Sepia-Effekt (0-100%)","Unschärfe-Effekt (0-20px)","Drehen nach links/rechts (90-Grad-Schritte)","Horizontal spiegeln","Vertikal spiegeln","Dunkel-/Hellmodus mit Systemvoreinstellung","Responsives Design","Echtzeit-Vorschau der Anpassungen","Zurücksetzen-Funktion","Ein-Klick-Bild-Download mit angewendeten Effekten"]}},{"id":3,"title":"Vault of Algorithms","description":{"en":"A React application to showcase algorithm implementations in multiple programming languages.","hu":"Egy React alkalmazás algoritmus implementációk bemutatására több programozási nyelven.","de":"Eine React-Anwendung zur Präsentation von Algorithmus-Implementierungen in mehreren Programmiersprachen."},"image":"/images/voa.png","tags":["React","TypeScript","TailwindCSS"],"github":"https://github.com/cseri502/vault-of-algorithms","demo":null,"features":{"en":["Algorithms in many languages: selected algorithm implementations in many programming languages","Smart search: easy search for algorithms by name, type or programming language","Light/dark theme: customizable interface for comfortable browsing","Responsive design: works perfectly on all devices"],"hu":["Algoritmusok sok nyelven: válogatott algoritmus implementációk sok programozási nyelven","Intelligens keresés: algoritmusok egyszerű keresése név, típus vagy programozási nyelv alapján","Világos/sötét téma: személyre szabható felület a kényelmes böngészéshez","Responsive design: minden eszközön tökéletesen működik"],"de":["Algorithmen in vielen Sprachen: ausgewählte Algorithmus-Implementierungen in vielen Programmiersprachen","Intelligente Suche: Einfache Suche nach Algorithmen nach Name, Typ oder Programmiersprache","Helles/Dunkles Thema: personalisierbare Oberfläche für bequemes Browsen","Responsive Design: funktioniert perfekt auf jedem Gerät"]}},{"id":4,"title":"Portfolio website","description":{"en":"A modern and clean website that showcases my projects, skills and professional experience.","hu":"Modern és letisztult weboldal, amely bemutatja projektjeimet, készségeimet és szakmai tapasztalataimat.","de":"Eine moderne und übersichtliche Website, die meine Projekte, Fähigkeiten und Berufserfahrung präsentiert."},"image":"/images/portfolio-website.png","tags":["Vue","TypeScript","TailwindCSS"],"github":"https://github.com/cseri502/vue-portfolio","demo":null,"features":{"en":["TODO: list features"],"hu":[],"de":[]}},{"id":5,"title":"Password Generator","description":{"en":"A web application that allows users to generate secure passwords based on customizable settings.","hu":"Egy webalkalmazás, amely lehetővé teszi biztonságos jelszavak generálását testreszabható beállítások alapján.","de":"Eine Webanwendung, die es Benutzern ermöglicht, sichere Passwörter basierend auf anpassbaren Einstellungen zu generieren."},"image":"/images/password-generator.png","tags":["Vue","TypeScript","TailwindCSS"],"github":"https://github.com/cseri502/password-generator","demo":null,"features":{"en":["Generate secure passwords with customizable settings","Adjust password length (8-32 characters)","Include or exclude uppercase letters (A-Z)","Include or exclude lowercase letters (a-z)","Include or exclude numbers (0-9)","Include or exclude special symbols (!, @, #, $, etc.)","One-click password copying","Real-time password preview","User-friendly slider for password length selection","Responsive design for all screen sizes"],"hu":["Biztonságos jelszavak generálása testreszabható beállításokkal","Jelszó hosszának beállítása (8-32 karakter)","Nagybetűk hozzáadása vagy kihagyása (A-Z)","Kisbetűk hozzáadása vagy kihagyása (a-z)","Számok hozzáadása vagy kihagyása (0-9)","Speciális karakterek hozzáadása vagy kihagyása (!, @, #, $, stb.)","Jelszó egy kattintással másolható","Valós idejű jelszó előnézet","Felhasználóbarát csúszka a jelszó hosszának kiválasztásához","Reszponzív kialakítás minden eszközre"],"de":["Sichere Passwörter mit anpassbaren Einstellungen generieren","Passwortlänge anpassen (8-32 Zeichen)","Großbuchstaben hinzufügen oder ausschließen (A-Z)","Kleinbuchstaben hinzufügen oder ausschließen (a-z)","Zahlen hinzufügen oder ausschließen (0-9)","Sonderzeichen hinzufügen oder ausschließen (!, @, #, $, etc.)","Ein-Klick-Passwortkopie","Echtzeit-Vorschau des Passworts","Benutzerfreundlicher Schieberegler zur Auswahl der Passwortlänge","Responsives Design für alle Bildschirmgrößen"]}},{"id":6,"title":"Type Master","description":{"en":"A sleek and minimalist typing test application designed to help users improve their typing speed and accuracy.","hu":"Egy elegáns és minimalista gépelési tesztalkalmazás, amely segít a felhasználóknak javítani a gépelési sebességet és pontosságot.","de":"Eine elegante und minimalistische Schreibtest-Anwendung, die Benutzern hilft, ihre Tippgeschwindigkeit und -genauigkeit zu verbessern."},"image":"/images/type-master.png","tags":["Vue","TypeScript","TailwindCSS","Axios"],"github":"https://github.com/cseri502/type-master","demo":"https://cseri502.github.io/type-master/","features":{"en":["Multiple difficulty levels (easy, medium, and hard)","Real-time typing speed (WPM) and accuracy percentage metrics","Quote-based challenges fetched from an external API","Sleek dark mode UI with monospace font","Responsive design for all screen sizes","Automatic test completion when you reach the end of the quote","One-click reset with the \\"New Quote\\" button","Detailed performance statistics after each test","Customizable difficulty settings","Modern, eye-friendly interface"],"hu":["Több nehézségi szint (könnyű, közepes és nehéz)","Valós idejű gépelési sebesség (WPM) és pontossági százalék mérőszámok","Idézeteken alapuló kihívások külső API-ról","Elegáns sötét mód UI monospace betűtípussal","Reszponzív kialakítás minden eszközre","Automatikus teszt befejezés az idézet végén","Egyetlen kattintással új teszt indítása az \\"Új idézet\\" gombbal","Részletes teljesítmény statisztikák minden teszt után","Testreszabható nehézségi beállítások","Modern, szembarát felület"],"de":["Mehrere Schwierigkeitsgrade (leicht, mittel und schwer)","Echtzeit-Tippgeschwindigkeit (WPM) und Genauigkeitsprozent-Metriken","Zitat-basierte Herausforderungen von einer externen API","Elegante Dunkelmodus-Benutzeroberfläche mit Monospace-Schrift","Responsives Design für alle Bildschirmgrößen","Automatischer Testabschluss am Ende des Zitats","Ein-Klick-Reset mit der Schaltfläche \\"Neues Zitat\\"","Detaillierte Leistungsstatistiken nach jedem Test","Anpassbare Schwierigkeitseinstellungen","Moderne, augenfreundliche Benutzeroberfläche"]}},{"id":7,"title":"GoMovies","description":{"en":"A full-stack movie management application that allows users to create, view, edit, and manage a personal movie collection.","hu":"Egy teljes körű filmkezelő alkalmazás, amellyel saját filmgyűjteményedet rendszerezheted, szerkesztheted és böngészheted.","de":"Eine umfassende Anwendung zur Verwaltung von Filmen, mit der Nutzer ihre persönliche Filmsammlung organisieren, bearbeiten und durchsuchen können."},"image":"/images/gomovies.png","tags":["Go","SQLite","React","TailwindCSS","TypeScript","Axios"],"github":"https://github.com/cseri502/GoMovies","demo":null,"features":{"en":["Create, update, and delete movies","Upload movie poster images","Search and filter movies","Sort movies by title, year, or rating","Responsive design for mobile and desktop","Interactive user interface with smooth interactions"],"hu":["Filmek hozzáadása, módosítása és törlése","Filmborítók feltöltése","Keresési és szűrési lehetőségek","Rendezés cím, év vagy értékelés alapján","Mobil- és asztali nézetre optimalizált kialakítás","Felhasználóbarát, gördülékeny kezelőfelület"],"de":["Filme hinzufügen, bearbeiten und entfernen","Hochladen von Filmcovern","Such- und Filterfunktionen","Sortieren nach Titel, Jahr oder Bewertung","Optimierte Darstellung für Mobilgeräte und Desktop","Intuitive Benutzeroberfläche mit flüssiger Bedienung"]}},{"id":8,"title":"Pixelworld","description":{"en":"A procedural 2D world generator where randomness meets creativity in a pixelated playground of infinite possibilities.","hu":"Egy procedurális 2D világ generátor, ahol a véletlenszerűség találkozik a kreativitással egy pixeles játszótéren, végtelen lehetőségekkel.","de":"Ein prozeduraler 2D-Weltgenerator, bei dem Zufall auf Kreativität in einem pixeligen Spielplatz unendlicher Möglichkeiten trifft."},"image":"/images/pixelworld.png","tags":["C#","Raylib",".NET"],"github":"https://github.com/cseri502/pixelworld","demo":null,"features":{"en":["Create a procedural pixel world with unique landscapes","Move the camera by holding down the right click at the edges of the window","Break and modify terrain with the left mouse button","Experience a new world with each generation","Cross-platform compatibility","High-performance rendering through Raylib","Endless exploration possibilities","Creative playground with no strict rules","Beautiful pixel art textures from Faithful resource pack"],"hu":["Procedurális pixel világ létrehozása egyedi tájképekkel","Kamera mozgatása jobb egérgombbal az ablak széleinél","Terep módosítása és rombolása bal egérgombbal","Minden generálásnál új világ élménye","Platformfüggetlen kompatibilitás","Nagy teljesítményű renderelés Raylib segítségével","Végtelen felfedezési lehetőségek","Kreatív játszótér szigorú szabályok nélkül","Gyönyörű pixel art textúrák a Faithful resource pack-ből"],"de":["Erstellung einer prozeduralen Pixelwelt mit einzigartigen Landschaften","Bewegen der Kamera durch Halten der rechten Maustaste an den Fensterrändern","Terrain mit der linken Maustaste brechen und modifizieren","Erleben Sie bei jeder Generierung eine neue Welt","Plattformübergreifende Kompatibilität","Hochleistungs-Rendering durch Raylib","Endlose Erkundungsmöglichkeiten","Kreativer Spielplatz ohne strenge Regeln","Schöne Pixel-Art-Texturen aus dem Faithful Resource Pack"]}},{"id":9,"title":"Bouncy Balls","description":{"en":"A visual simulation developed with C# and Raylib that displays bouncing circles within a larger circle outline. The program demonstrates principles of collision detection, angle and vector handling, and implementation of basic game physics in a 2D environment.","hu":"Egy vizuális szimuláció, amely C# és Raylib használatával készült, és pattogó köröket jelenít meg egy nagyobb körvázon belül. A program bemutatja az ütközés- és vektorkezelés alapelveit, valamint a 2D-s környezetben történő alapvető játékmechanika megvalósítását.","de":"Eine visuelle Simulation, die mit C# und Raylib entwickelt wurde und springende Kreise innerhalb einer größeren Kreisumriss anzeigt. Das Programm demonstriert die Prinzipien der Kollisionsdetektion, Winkel- und Vektorkontrolle sowie die Implementierung grundlegender Spielphysik in einer 2D-Umgebung."},"image":"/images/bouncy-balls.png","tags":["C#","Raylib",".NET"],"github":"https://github.com/cseri502/bouncy-balls","demo":null,"features":{"en":["Visual simulation of bouncing circles within a larger circle outline","Demonstrates principles of collision detection, angle and vector handling","Implementation of basic game physics in a 2D environment","Developed with C# and Raylib"],"hu":["Pattogó körök vizuális szimulációja egy nagyobb körvázon belül","Ütközés- és vektorkezelés alapelveinek bemutatása","Alapvető játékmechanika megvalósítása 2D környezetben","C# és Raylib használatával fejlesztve"],"de":["Visuelle Simulation von springenden Kreisen innerhalb einer größeren Kreisumriss","Demonstration der Prinzipien der Kollisionsdetektion, Winkel- und Vektorkontrolle","Implementierung grundlegender Spielphysik in einer 2D-Umgebung","Entwickelt mit C# und Raylib"]}},{"id":10,"title":"RSA Encryption","description":{"en":"A console-based RSA cryptography application developed in Kotlin as a university assignment. The program demonstrates the complete RSA workflow, including prime number generation with the Miller-Rabin primality test, RSA key pair generation, message encryption and decryption, digital signature creation and verification, as well as optimization using the Chinese Remainder Theorem.","hu":"Egy Kotlin nyelven fejlesztett konzolos RSA kriptográfiai alkalmazás, amely egyetemi beadandó projektként készült. A program bemutatja az RSA algoritmus teljes működését, beleértve a prímszám-generálást Miller–Rabin prímteszttel, a kulcspár-generálást, az üzenetek titkosítását és visszafejtését, a digitális aláírás létrehozását és ellenőrzését, valamint a Kínai maradéktétel alkalmazásával történő optimalizálást.","de":"Eine in Kotlin entwickelte Konsolenanwendung zur RSA-Kryptografie, die als Universitätsprojekt erstellt wurde. Das Programm demonstriert den vollständigen RSA-Ablauf, einschließlich Primzahlgenerierung mit dem Miller-Rabin-Primzahltest, Schlüsselpaarerzeugung, Ver- und Entschlüsselung von Nachrichten, Erstellung und Überprüfung digitaler Signaturen sowie Optimierung durch den Chinesischen Restsatz."},"image":"/images/encryption.jpg","tags":["Kotlin","Cryptography","RSA","JUnit"],"github":"https://github.com/cseri502/rsa-implementation","demo":null,"features":{"en":["RSA public and private key generation","Prime number generation using the Miller-Rabin primality test","Message encryption and decryption","Digital signature creation and verification","Chinese Remainder Theorem optimization for decryption","Unit tests covering core mathematical algorithms"],"hu":["RSA nyilvános és privát kulcs generálása","Prímszám-generálás Miller–Rabin prímteszttel","Üzenetek titkosítása és visszafejtése","Digitális aláírás létrehozása és ellenőrzése","Kínai maradéktételen alapuló visszafejtési optimalizáció","A matematikai algoritmusokat lefedő egységtesztek"],"de":["Generierung von öffentlichen und privaten RSA-Schlüsseln","Primzahlgenerierung mit dem Miller-Rabin-Primzahltest","Ver- und Entschlüsselung von Nachrichten","Erstellung und Überprüfung digitaler Signaturen","Optimierung der Entschlüsselung durch den Chinesischen Restsatz","Unit-Tests für die zentralen mathematischen Algorithmen"]}}]'),Ub={class:"bg-linear-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-24 relative"},Fb={class:"section-container"},Ob={class:"flex flex-col md:flex-row items-center"},zb={class:"md:w-1/2 mb-8 md:mb-0"},Bb={class:"text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"},Hb={class:"text-sky-500"},Vb={class:"flex flex-wrap gap-3"},Gb={id:"about",class:"bg-white dark:bg-gray-900 py-20 relative"},Wb={class:"section-container"},jb={class:"max-w-3xl mx-auto text-center"},Xb=["innerHTML"],$b={id:"education",class:"bg-gray-50 dark:bg-gray-950 py-20 relative"},qb={class:"section-container"},Yb={class:"max-w-3xl mx-auto"},Kb={class:"space-y-8"},Zb={id:"skills",class:"bg-white dark:bg-gray-900 py-20 relative"},Jb={class:"section-container"},Qb={class:"mb-12"},eS={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"},tS={class:"mt-16 pt-8 border-t border-gray-100 dark:border-gray-800"},nS={class:"text-center text-2xl font-bold text-gray-900 dark:text-white"},iS={class:"text-center text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"},rS={class:"max-w-6xl mx-auto mt-8"},sS={class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"},oS=["href"],aS={class:"font-medium text-gray-900 dark:text-white duration-200 transition-colors hover:text-sky-200 hover:underline cursor-pointer"},lS={class:"text-sm text-gray-600 dark:text-gray-400"},cS={id:"projects",class:"bg-gray-50 dark:bg-gray-950 py-20 relative"},uS={class:"section-container"},dS={class:"text-center text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"},fS={class:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"},hS={class:"absolute inset-0 opacity-20 pointer-events-none overflow-hidden"},pS={class:"absolute right-6 bottom-6 text-6xl text-sky-800 dark:text-sky-500"},mS={class:"relative z-10"},gS={class:"flex items-center mb-4"},_S={class:"bg-sky-500/10 p-3 rounded-md mr-3 shrink-0"},vS={class:"text-xl font-bold text-gray-900 dark:text-white"},xS={class:"text-gray-600 dark:text-gray-400 mb-4"},yS={class:"flex flex-wrap gap-2 mb-4"},bS={class:"mt-4"},SS={class:"text-center mt-10"},MS={id:"contact",class:"bg-white dark:bg-gray-900 py-20 relative"},ES={class:"section-container"},wS={class:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"},TS={class:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full"},AS={class:"text-xl font-semibold mb-6 text-gray-900 dark:text-white"},RS={class:"space-y-6"},CS={class:"bg-sky-500/10 p-3 rounded-full mr-4 shrink-0"},PS={class:"min-w-0 flex-1"},DS={class:"font-medium text-gray-900 dark:text-white"},IS=["href","target","rel"],LS={class:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"},kS=Ot({__name:"Home",setup(t){const{t:e,currentLanguage:n}=ti(),i=Lb.items,r=Od.items,s=Od.categories,o=wt(s.All),a=wt(null),l=()=>{a.value&&a.value.stop();const d=document.getElementById("role-span");a.value=new Uy(d,{strings:e.value.hero.role,autoStart:!0,loop:!0,delay:75})};vn(n,()=>{l()}),On(()=>{l()});const c=ut(()=>e.value.education.items.sort((d,f)=>d.startYear!==f.startYear?f.startYear-d.startYear:(d.endYear||1/0)-(f.endYear||1/0))),u=ut(()=>o.value===s.All?[...r].sort((d,f)=>f.date-d.date):r.filter(d=>d.category===o.value).sort((d,f)=>f.date-d.date));return(d,f)=>{const p=Hs("router-link");return Ae(),Ue("div",null,[R("section",Ub,[R("div",Fb,[R("div",Ob,[R("div",zb,[R("h1",Bb,[yt(de(q(e).hero.greeting)+" ",1),R("span",Hb,de(q(e).hero.name),1)]),f[1]||(f[1]=R("p",{class:"text-xl font-mono text-gray-700 dark:text-gray-300 mb-8"},[yt(" // "),R("span",{id:"role-span"})],-1)),R("div",Vb,[Te(p,{to:"/#about",class:"btn btn-primary"},{default:jn(()=>[yt(de(q(e).hero.learnMore),1)]),_:1}),Te(p,{to:"/#contact",class:"btn btn-outline"},{default:jn(()=>[yt(de(q(e).hero.contactMe),1)]),_:1})])]),f[2]||(f[2]=l_('<div class="md:w-1/2 flex justify-center"><div class="relative"><div class="absolute -inset-2 w-84 h-84 rounded-full bg-linear-to-br from-sky-400 to-sky-600 blur-md opacity-70 animate-pulse"></div><div class="w-80 h-80 rounded-full bg-linear-to-br from-sky-400 to-sky-600 p-1.5 shadow-xl relative z-10"><div class="w-full h-full rounded-full bg-[url(&#39;/IMG_146.jpg&#39;)] bg-cover"></div></div></div></div>',1))])])]),R("section",Gb,[R("div",Wb,[Te(kr,{title:q(e).about.title},null,8,["title"]),R("div",jb,[R("p",{class:"text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed",innerHTML:q(e).about.content.replace(/\n/g,"<br>")},null,8,Xb),Tt("",!0)])])]),R("section",$b,[R("div",qb,[Te(kr,{title:q(e).education.title},null,8,["title"]),R("div",Yb,[R("div",Kb,[(Ae(!0),Ue(ct,null,Pt(c.value,(g,_)=>(Ae(),$t(Xy,{key:_,institution:g.institution,degree:g.degree,period:`${g.startYear} - ${g.endYear||q(e).education.present}`,description:g.description},null,8,["institution","degree","period","description"]))),128))])])])]),R("section",Zb,[R("div",Jb,[Te(kr,{title:q(e).skills.title},null,8,["title"]),R("div",Qb,[R("div",eS,[(Ae(!0),Ue(ct,null,Pt(q(i),g=>(Ae(),$t(zy,{key:g.name,name:g.name,icon:g.icon},null,8,["name","icon"]))),128))])]),R("div",tS,[R("h3",nS,de(q(e).skills.certifications),1),R("p",iS,de(q(e).skills.certInfo),1),Te(Db,{categories:q(e).skills.certCategories,modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=g=>o.value=g)},null,8,["categories","modelValue"]),R("div",rS,[R("div",sS,[(Ae(!0),Ue(ct,null,Pt(u.value,g=>(Ae(),Ue("div",{key:g.name,class:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex items-start hover:shadow-md transition-shadow duration-200"},[Te(q(Ge),{icon:"ph:certificate",class:"w-6 h-6 text-sky-500 mr-3 mt-1 shrink-0"}),R("div",null,[R("a",{href:`/certificates/${g.file}`,target:"_blank",rel:"noopener noreferrer"},[R("h4",aS,de(g.name),1)],8,oS),R("p",lS,de(g.organization)+" | "+de(g.date),1)])]))),128))])])])])]),R("section",cS,[R("div",uS,[Te(kr,{title:q(e).projects.title},null,8,["title"]),R("p",dS,de(q(e).projects.description),1),R("div",fS,[(Ae(!0),Ue(ct,null,Pt(q(Ur).filter(g=>["Matrixia","Vault of Algorithms","GoMovies","Type Master"].includes(g.title)),g=>(Ae(),Ue("div",{key:g.id,class:"bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200 relative"},[R("div",hS,[R("div",pS,[g.title==="Matrixia"?(Ae(),$t(q(Ge),{key:0,icon:"mdi:matrix"})):Tt("",!0),g.title==="Vault of Algorithms"?(Ae(),$t(q(Ge),{key:1,icon:"ph:vault-duotone"})):Tt("",!0),g.title==="GoMovies"?(Ae(),$t(q(Ge),{key:2,icon:"bxs:movie-play"})):Tt("",!0),g.title==="Type Master"?(Ae(),$t(q(Ge),{key:3,icon:"material-symbols-light:keyboard-rounded"})):Tt("",!0)])]),R("div",mS,[R("div",gS,[R("div",_S,[Te(q(Ge),{icon:"ph:code",class:"w-6 h-6 text-sky-500"})]),R("h3",vS,de(g.title),1)]),R("p",xS,de(g.description[q(n)]),1),R("div",yS,[(Ae(!0),Ue(ct,null,Pt(g.tags,_=>(Ae(),Ue("span",{key:_,class:"text-xs px-2 py-1 bg-sky-500/10 text-sky-700 dark:text-sky-300 rounded-md"},de(_),1))),128))]),R("div",bS,[Te(p,{to:`/projects/${g.id}`,class:"inline-flex items-center px-3 py-1.5 text-sm bg-sky-600 hover:bg-sky-700 text-white rounded-md transition-colors duration-200"},{default:jn(()=>[yt(de(q(e).projects.viewProject)+" ",1),Te(q(Ge),{icon:"ph:arrow-right",class:"ml-1 w-4 h-4"})]),_:1},8,["to"])])])]))),128))]),R("div",SS,[Te(p,{to:"/projects",class:"btn btn-outline"},{default:jn(()=>[yt(de(q(e).projects.viewAll),1)]),_:1})])])]),R("section",MS,[R("div",ES,[Te(kr,{title:q(e).contact.title},null,8,["title"]),R("div",wS,[R("div",null,[R("div",TS,[R("h3",AS,de(q(e).contact.info),1),R("div",RS,[(Ae(!0),Ue(ct,null,Pt(q(Rp),(g,_)=>(Ae(),Ue("div",{key:_,class:"flex items-start"},[R("div",CS,[Te(q(Ge),{icon:g.icon,class:"w-5 h-5 text-sky-500"},null,8,["icon"])]),R("div",PS,[R("h4",DS,de(g.title),1),R("a",{href:g.type==="email"?`mailto:${g.link}`:g.link,target:g.external?"_blank":"",rel:g.external?"noopener noreferrer":"",class:"text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-500 break-all overflow-hidden text-ellipsis"},de(g.link),9,IS)])]))),128))])])]),R("div",null,[R("div",LS,[Te(bb)])])])])])])}}}),oo=wt("projects");function ou(){const t=tu(),e=Ws(),n=r=>{oo.value=r;const s={...e.query};s.tab=r,t.replace({path:e.path,query:s})};return{activeTab:oo,setActiveTab:n,initializeTabFromUrl:()=>{const r=e.query.tab;r&&(r==="projects"||r==="models")?oo.value=r:(oo.value="projects",e.path==="/projects"&&n("projects"))}}}const au=Ot({__name:"Tag",props:{text:{},isSmall:{type:Boolean}},setup(t){return(e,n)=>(Ae(),Ue("span",{class:ln([t.isSmall?"text-xs px-2":"text-sm px-3","py-1 bg-sky-500/10 text-sky-600 dark:text-sky-300 rounded-md"])},de(t.text),3))}}),NS={class:"bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"},US={class:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"},FS={key:1,class:"h-48 bg-linear-to-r from-blue-500 to-sky-500 flex items-center justify-center relative group"},OS={class:"p-6 grow flex flex-col"},zS={class:"text-xl font-bold text-gray-900 dark:text-white mb-3"},BS={class:"text-gray-600 dark:text-gray-400 mb-4 grow"},HS={key:0,class:"mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"},VS={class:"flex items-center mb-2"},GS={class:"text-sm font-medium text-gray-700 dark:text-gray-300"},WS={class:"flex flex-wrap gap-3"},jS=["href"],XS=["href"],$S={class:"flex flex-wrap gap-2 mb-4"},qS={class:"p-4 pt-0 mt-auto"},YS=Ot({__name:"ProjectCard",props:{project:{}},setup(t){const{t:e}=ti();return(n,i)=>{const r=Hs("router-link");return Ae(),Ue("div",NS,[t.project.image?(Ae(),Ue("div",{key:0,class:"h-48 bg-cover bg-center relative group",style:zs({backgroundImage:`url(${t.project.image})`})},[R("div",US,[Te(q(Ge),{icon:"ph:code",class:"w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"})])],4)):(Ae(),Ue("div",FS,[Te(q(Ge),{icon:"ph:code",class:"w-16 h-16 text-white opacity-80"}),i[0]||(i[0]=R("div",{class:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"},null,-1))])),R("div",OS,[R("h3",zS,de(t.project.title),1),R("p",BS,de(t.project.description),1),t.project.github||t.project.demo?(Ae(),Ue("div",HS,[R("div",VS,[Te(q(Ge),{icon:"ph:link",class:"w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"}),R("span",GS,de(q(e).projects.page.links),1)]),R("div",WS,[t.project.github?(Ae(),Ue("a",{key:0,href:t.project.github,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center text-xs text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"},[Te(q(Ge),{icon:"ph:github-logo",class:"w-3 h-3 mr-1"}),i[1]||(i[1]=yt(" GitHub ",-1))],8,jS)):Tt("",!0),t.project.demo?(Ae(),Ue("a",{key:1,href:t.project.demo,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center text-xs text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"},[Te(q(Ge),{icon:"ph:globe",class:"w-3 h-3 mr-1"}),yt(" "+de(q(e).projects.details.demo),1)],8,XS)):Tt("",!0)])])):Tt("",!0),R("div",$S,[(Ae(!0),Ue(ct,null,Pt(t.project.tags,s=>(Ae(),$t(au,{key:s,text:s,isSmall:!0},null,8,["text"]))),128))])]),R("div",qS,[Te(r,{to:`/projects/${t.project.id}`,class:"w-full bg-linear-to-r from-blue-500 to-sky-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 inline-flex items-center justify-center group"},{default:jn(()=>[Te(q(Ge),{icon:"ph:info",class:"mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-200"}),R("span",null,de(q(e).projects.card),1),Te(q(Ge),{icon:"ph:arrow-right",class:"ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"})]),_:1},8,["to"])])])}}}),KS={class:"bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"},ZS={class:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"},JS={key:1,class:"h-48 bg-linear-to-r from-blue-500 to-sky-500 flex items-center justify-center relative group"},QS={class:"p-6 grow flex flex-col"},eM={class:"text-xl font-bold text-gray-900 dark:text-white mb-3"},tM={class:"text-gray-600 dark:text-gray-400 mb-4 grow"},nM={key:0,class:"mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"},iM={class:"flex items-center mb-2"},rM={class:"text-sm font-medium text-gray-700 dark:text-gray-300"},sM={class:"text-sm text-gray-600 dark:text-gray-400"},oM={class:"flex flex-wrap gap-2 mb-4"},aM={class:"p-4 pt-0 mt-auto"},lM=Ot({__name:"ModelCard",props:{model:{}},setup(t){const{t:e}=ti();return(n,i)=>{const r=Hs("router-link");return Ae(),Ue("div",KS,[t.model.thumbnail?(Ae(),Ue("div",{key:0,class:"h-48 bg-cover bg-center relative group",style:zs({backgroundImage:`url(${t.model.thumbnail})`})},[R("div",ZS,[Te(q(Ge),{icon:"ph:cube",class:"w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"})])],4)):(Ae(),Ue("div",JS,[Te(q(Ge),{icon:"ph:cube",class:"w-16 h-16 text-white opacity-80"}),i[0]||(i[0]=R("div",{class:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"},null,-1))])),R("div",QS,[R("h3",eM,de(t.model.title),1),R("p",tM,de(t.model.description),1),t.model.dimensions?(Ae(),Ue("div",nM,[R("div",iM,[Te(q(Ge),{icon:"ph:ruler",class:"w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"}),R("span",rM,de(q(e).projects.modelDetails.specifications.dimensions),1)]),R("div",sM,de(t.model.dimensions.width)+" × "+de(t.model.dimensions.height)+" × "+de(t.model.dimensions.depth)+" "+de(t.model.dimensions.unit),1)])):Tt("",!0),R("div",oM,[(Ae(!0),Ue(ct,null,Pt(t.model.tags,s=>(Ae(),Ue("span",{key:s,class:"text-xs px-2 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-md"},de(s),1))),128))])]),R("div",aM,[Te(r,{to:`/models/${t.model.id}`,class:"w-full bg-linear-to-r from-blue-500 to-sky-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 inline-flex items-center justify-center group"},{default:jn(()=>[Te(q(Ge),{icon:"ph:cube",class:"mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-200"}),R("span",null,de(q(e).projects.modelDetails.viewIn3D),1),Te(q(Ge),{icon:"ph:arrow-right",class:"ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"})]),_:1},8,["to"])])])}}}),hs=[{id:1,title:"Phone Stand",description:{en:"An ergonomic phone stand designed for desktop use with charging cable support. Features a strategically placed cutout at the bottom middle to maintain access to the home indicator on iOS and Android devices while charging. The stand offers optimal viewing angles for video calls, media consumption, and notifications while keeping your device securely positioned and easily accessible.",hu:"Ergonomikus telefontartó asztali használatra, töltőkábel támogatással. Stratégiailag elhelyezett kivágással rendelkezik az alsó középső részen, hogy a töltés közben is hozzáférhető maradjon az iOS és Android eszközök otthon indikátora. A tartó optimális megtekintési szögeket kínál videohívásokhoz, médiafogyasztáshoz és értesítésekhez, miközben biztonságosan tartja és könnyen elérhetővé teszi az eszközt.",de:"Ein ergonomischer Telefonständer für den Desktop-Einsatz mit Ladekabel-Unterstützung. Verfügt über einen strategisch platzierten Ausschnitt in der unteren Mitte, um den Zugriff auf die Home-Anzeige bei iOS- und Android-Geräten während des Ladens zu gewährleisten. Der Ständer bietet optimale Betrachtungswinkel für Videoanrufe, Medienkonsum und Benachrichtigungen, während Ihr Gerät sicher positioniert und leicht zugänglich bleibt."},thumbnail:null,stlFile:"/models/phone-stand.STL",tags:["Phone","Desktop","Ergonomic","Charging","Accessory","Mobile"],dimensions:{width:70,height:113,depth:70,unit:"mm"},printSettings:{layerHeight:.2,infill:25,printTime:"5h 29m"}},{id:2,title:"Card Holder",description:{en:"A handy desktop organizer that holds credit card-sized cards and a pen. It's simple and practical - just what you need to keep your desk tidy without taking up much space. There's a small '2025' engraved inside the card slot, which was added when the model was designed as a little detail.",hu:"Praktikus asztali rendszerező bankkártya méretű kártyákhoz és egy tollhoz. Egyszerű és hasznos - pont amire szükség van az íróasztal rendben tartásához anélkül, hogy sok helyet foglalna. A kártyatartóban egy kis '2025' gravírozás található, amit a tervezés során adtam hozzá apró részletként.",de:"Ein praktischer Schreibtisch-Organizer für Karten in Kreditkartengröße und einen Stift. Einfach und nützlich - genau das, was man braucht, um den Schreibtisch ordentlich zu halten, ohne viel Platz wegzunehmen. Im Kartenfach ist eine kleine '2025' eingraviert, die beim Entwerfen als kleines Detail hinzugefügt wurde."},thumbnail:null,stlFile:"/models/card-holder.stl",tags:["Card","Desktop","Pen","Accessory"],dimensions:{width:120,height:25,depth:25,unit:"mm"},printSettings:{layerHeight:.2,infill:15,printTime:"37m"}},{id:3,title:"Gear Shaped Spinner",description:{en:"A fidget spinner with a gear design that spins just like the classic version. The cool thing about this one is that it prints in one piece - no need to add bearings or assemble anything. Just print it and it's ready to spin. Perfect for keeping your hands busy or just having something satisfying to fidget with.",hu:"Egy fogaskerék alakú fidget spinner, ami ugyanúgy pörög, mint a klasszikus változat. A különlegessége, hogy egy darabban nyomtatható - nem kell csapágyat belerakni vagy összeszerelni. Csak kinyomtatod és már pöröghet is. Tökéletes arra, hogy elfoglald a kezed, vagy csak legyen valami nyugtató, amivel játszhatsz.",de:"Ein Fidget Spinner mit Zahnrad-Design, der genauso funktioniert wie die klassische Version. Das Besondere daran: er wird in einem Stück gedruckt - keine Kugellager einbauen oder zusammenbauen nötig. Einfach drucken und schon kann gedreht werden. Perfekt, um die Hände beschäftigt zu halten oder einfach etwas Beruhigendes zum Spielen zu haben."},thumbnail:null,stlFile:"/models/gear-spinner.stl",tags:["Gear","Spinner","Toy"],dimensions:{width:55,height:7,depth:55,unit:"mm"},printSettings:{layerHeight:.2,infill:15,printTime:"17m"}},{id:4,title:"Hodor Wedge",description:{en:"A simple door wedge with 'HODOR' printed on it. It's a Game of Thrones reference - 'Hold the door!' - but it works just like any regular door stop. Perfect for keeping your doors open.",hu:"Egy egyszerű ajtóék 'HODOR' felirattal. Trónok Harca utalás a 'Hold the door!' jelenetre, de pont úgy működik, mint bármelyik hagyományos ajtótámasz. Tökéletes ajtók nyitva tartásához.",de:"Ein einfacher Türkeil mit 'HODOR' Aufdruck. Eine Game of Thrones Anspielung auf 'Hold the door!' - funktioniert aber wie jeder normale Türstopper. Perfekt zum Offenhalten von Türen."},thumbnail:null,stlFile:"/models/door-wedge.stl",tags:["Accessory","Home"],dimensions:{width:50,height:10,depth:20,unit:"mm"},printSettings:{layerHeight:.2,infill:20,printTime:"12m"}}],cM={class:"bg-linear-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 backdrop-blur-sm min-h-screen py-16 relative"},uM={class:"section-container"},dM={class:"text-center text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"},fM={class:"flex justify-center mb-8"},hM={class:"w-1/2 flex flex-col md:flex-row bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-1 border border-gray-200/30 dark:border-gray-700/30"},pM={class:"ml-2 text-sm opacity-75"},mM={class:"ml-2 text-sm opacity-75"},gM={class:"mb-8"},_M={class:"flex flex-wrap gap-2 justify-center"},vM=["onClick"],xM={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},yM={key:0,class:"text-center py-12"},bM={class:"mt-4 text-lg font-medium text-gray-900 dark:text-white"},SM={class:"mt-2 text-gray-600 dark:text-gray-400"},MM=Ot({__name:"Projects",setup(t){const{t:e,currentLanguage:n}=ti(),{activeTab:i,setActiveTab:r,initializeTabFromUrl:s}=ou(),o=wt(""),a=Ws();On(()=>{s()}),vn(()=>a.query.tab,_=>{_&&(_==="projects"||_==="models")&&(i.value=_)},{immediate:!0});const l=ut(()=>o.value?Ur.filter(_=>_.tags.some(m=>m.toLowerCase().includes(o.value.toLowerCase()))):Ur),c=ut(()=>o.value?hs.filter(_=>_.tags.some(m=>m.toLowerCase().includes(o.value.toLowerCase()))):hs),u=ut(()=>{const _=new Set;return Ur.forEach(m=>{m.tags.forEach(h=>_.add(h))}),Array.from(_).sort()}),d=ut(()=>{const _=new Set;return hs.forEach(m=>{m.tags.forEach(h=>_.add(h))}),Array.from(_).sort()}),f=ut(()=>i.value==="projects"?u.value:d.value),p=ut(()=>i.value==="projects"?l.value:c.value);function g(_){r(_),o.value=""}return(_,m)=>(Ae(),Ue("div",cM,[R("div",uM,[Te(kr,{title:q(e).projects.page.title},null,8,["title"]),R("p",dM,de(q(e).projects.page.subtitle),1),R("div",fM,[R("div",hM,[R("button",{onClick:m[0]||(m[0]=h=>g("projects")),class:ln(["w-full px-6 py-2 rounded-md transition-all duration-150 flex items-center justify-center cursor-pointer",q(i)==="projects"?"bg-sky-500 text-white shadow-lg":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"])},[Te(q(Ge),{icon:"ph:code",class:"mr-2 w-5 h-5"}),yt(" "+de(q(e).projects.page.projectTypes[0])+" ",1),R("span",pM,"("+de(q(Ur).length)+")",1)],2),R("button",{onClick:m[1]||(m[1]=h=>g("models")),class:ln(["w-full px-6 py-2 rounded-md transition-all duration-150 flex items-center justify-center cursor-pointer",q(i)==="models"?"bg-sky-500 text-white shadow-lg":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"])},[Te(q(Ge),{icon:"ph:cube",class:"mr-2 w-5 h-5"}),yt(" "+de(q(e).projects.page.projectTypes[1])+" ",1),R("span",mM,"("+de(q(hs).length)+")",1)],2)])]),R("div",gM,[R("div",_M,[R("button",{onClick:m[2]||(m[2]=h=>o.value=""),class:ln(["px-3 py-1 text-sm transition-colors duration-200 rounded-sm cursor-pointer",[o.value===""?"text-white":"bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/30 dark:border-gray-700/30",q(i)==="projects"&&o.value===""?"bg-sky-500":"",q(i)==="models"&&o.value===""?"bg-sky-500":""]])},de(q(i)==="projects"?q(e).projects.page.all:"All Models"),3),(Ae(!0),Ue(ct,null,Pt(f.value,h=>(Ae(),Ue("button",{key:h,onClick:S=>o.value=h,class:ln(["px-3 py-1 text-sm transition-colors duration-200 rounded-sm cursor-pointer",[o.value===h?"text-white":"bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/30 dark:border-gray-700/30",q(i)==="projects"&&o.value===h?"bg-sky-500":"",q(i)==="models"&&o.value===h?"bg-sky-500":""]])},de(h),11,vM))),128))])]),R("div",xM,[q(i)==="projects"?(Ae(!0),Ue(ct,{key:0},Pt(l.value,h=>(Ae(),$t(YS,{key:h.id,project:{id:h.id,title:h.title,description:h.description[q(n)],demo:h.demo,github:h.github,image:h.image,tags:h.tags}},null,8,["project"]))),128)):(Ae(!0),Ue(ct,{key:1},Pt(c.value,h=>(Ae(),$t(lM,{key:h.id,model:{id:h.id,title:h.title,description:h.description[q(n)],thumbnail:h.thumbnail,stlFile:h.stlFile,tags:h.tags,dimensions:h.dimensions,printSettings:h.printSettings}},null,8,["model"]))),128))]),p.value.length===0?(Ae(),Ue("div",yM,[Te(q(Ge),{icon:q(i)==="projects"?"ph:folder-open":"ph:cube",class:"w-16 h-16 mx-auto text-gray-400 dark:text-gray-600"},null,8,["icon"]),R("h3",bM,de(q(i)==="projects"?q(e).projects.page.noProjects:"No models found"),1),R("p",SM,de(q(i)==="projects"?q(e).projects.page.noItemsFound:"Try adjusting your filter or check back later for new models."),1)])):Tt("",!0)])]))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="176",gr={ROTATE:0,DOLLY:1,PAN:2},_r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},EM=0,zd=1,wM=2,Fp=1,TM=2,ui=3,Oi=0,cn=1,mi=2,Ni=0,Or=1,Bd=2,Hd=3,Vd=4,AM=5,Qi=100,RM=101,CM=102,PM=103,DM=104,IM=200,LM=201,kM=202,NM=203,Ql=204,ec=205,UM=206,FM=207,OM=208,zM=209,BM=210,HM=211,VM=212,GM=213,WM=214,tc=0,nc=1,ic=2,jr=3,rc=4,sc=5,oc=6,ac=7,Op=0,jM=1,XM=2,Ui=0,$M=1,qM=2,YM=3,KM=4,ZM=5,JM=6,QM=7,zp=300,Xr=301,$r=302,lc=303,cc=304,Da=306,uc=1e3,rr=1001,dc=1002,kn=1003,eE=1004,ao=1005,Xn=1006,il=1007,sr=1008,Qn=1009,Bp=1010,Hp=1011,ks=1012,cu=1013,ur=1014,gi=1015,Xs=1016,uu=1017,du=1018,Ns=1020,Vp=35902,Gp=1021,Wp=1022,In=1023,Us=1026,Fs=1027,jp=1028,fu=1029,Xp=1030,hu=1031,pu=1033,zo=33776,Bo=33777,Ho=33778,Vo=33779,fc=35840,hc=35841,pc=35842,mc=35843,gc=36196,_c=37492,vc=37496,xc=37808,yc=37809,bc=37810,Sc=37811,Mc=37812,Ec=37813,wc=37814,Tc=37815,Ac=37816,Rc=37817,Cc=37818,Pc=37819,Dc=37820,Ic=37821,Go=36492,Lc=36494,kc=36495,$p=36283,Nc=36284,Uc=36285,Fc=36286,tE=3200,nE=3201,qp=0,iE=1,Ii="",Mn="srgb",qr="srgb-linear",oa="linear",_t="srgb",vr=7680,Gd=519,rE=512,sE=513,oE=514,Yp=515,aE=516,lE=517,cE=518,uE=519,Wd=35044,jd="300 es",_i=2e3,aa=2001;let Zr=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}};const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rl=Math.PI/180,Oc=180/Math.PI;function $s(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function dE(t,e){return(t%e+e)%e}function sl(t,e,n){return(1-n)*t+n*e}function os(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,n,i,r,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],S=r[1],E=r[4],x=r[7],L=r[2],P=r[5],C=r[8];return s[0]=o*_+a*S+l*L,s[3]=o*m+a*E+l*P,s[6]=o*h+a*x+l*C,s[1]=c*_+u*S+d*L,s[4]=c*m+u*E+d*P,s[7]=c*h+u*x+d*C,s[2]=f*_+p*S+g*L,s[5]=f*m+p*E+g*P,s[8]=f*h+p*x+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ol.makeScale(e,n)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,n){return this.premultiply(ol.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new Qe;function Kp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function la(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fE(){const t=la("canvas");return t.style.display="block",t}const Xd={};function Wo(t){t in Xd||(Xd[t]=!0,console.warn(t))}function hE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function pE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $d=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qd=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gE(){const t={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(r.r=vi(r.r),r.g=vi(r.g),r.b=vi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?oa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[qr]:{primaries:e,whitePoint:i,transfer:oa,toXYZ:$d,fromXYZ:qd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:$d,fromXYZ:qd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),t}const lt=gE();function vi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xr;class _E{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xr===void 0&&(xr=la("canvas")),xr.width=e.width,xr.height=e.height;const r=xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=xr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=la("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vi(n[i]/255)*255):n[i]=vi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vE=0;class mu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=$s(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(al(r[o].image)):s.push(al(r[o]))}else s=al(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function al(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_E.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xE=0;class un extends Zr{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=rr,r=rr,s=Xn,o=sr,a=In,l=Qn,c=un.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=$s(),this.name="",this.source=new mu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uc:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uc:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=zp;un.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,x=(p+1)/2,L=(h+1)/2,P=(u+f)/4,C=(d+_)/4,U=(g+m)/4;return E>x&&E>L?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=P/i,s=C/i):x>L?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=P/r,s=U/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=C/s,r=U/s),this.set(i,r,s,n),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yE extends Zr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth?i.depth:1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new mu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends yE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zp extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bE extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d!==_||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*_,S=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const L=Math.sqrt(E),P=Math.atan2(L,h*S);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const x=a*S;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,d=d*m+_*x,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-a*p,e[n+2]=c*g+u*p+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new J,Yd=new fr;class qs{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),co.subVectors(this.max,as),yr.subVectors(e.a,as),br.subVectors(e.b,as),Sr.subVectors(e.c,as),Mi.subVectors(br,yr),Ei.subVectors(Sr,br),Wi.subVectors(yr,Sr);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-Wi.z,Wi.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,Wi.z,0,-Wi.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-Wi.y,Wi.x,0];return!cl(n,yr,br,Sr,co)||(n=[1,0,0,0,1,0,0,0,1],!cl(n,yr,br,Sr,co))?!1:(uo.crossVectors(Mi,Ei),n=[uo.x,uo.y,uo.z],cl(n,yr,br,Sr,co))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new J,new J,new J,new J,new J,new J,new J,new J],An=new J,lo=new qs,yr=new J,br=new J,Sr=new J,Mi=new J,Ei=new J,Wi=new J,as=new J,co=new J,uo=new J,ji=new J;function cl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ji.fromArray(t,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),c=n.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const SE=new qs,ls=new J,ul=new J;class gu{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):SE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const n=ls.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(ul)),this.expandByPoint(ls.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new J,dl=new J,fo=new J,wi=new J,fl=new J,ho=new J,hl=new J;class Jp{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){dl.copy(e).add(n).multiplyScalar(.5),fo.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(dl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(fo),a=wi.dot(this.direction),l=-wi.dot(fo),c=wi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(dl).addScaledVector(fo,f),p}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){fl.subVectors(n,e),ho.subVectors(i,e),hl.crossVectors(fl,ho);let o=this.direction.dot(hl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(ho.crossVectors(wi,ho));if(l<0)return null;const c=a*this.direction.dot(fl.cross(wi));if(c<0||l+c>o)return null;const u=-a*wi.dot(hl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,g,_,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,_=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,_=c*d;n[0]=f+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,_=c*d;n[0]=f-_*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,_=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ME,e,EE)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ti.crossVectors(i,fn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ti.crossVectors(i,fn)),Ti.normalize(),po.crossVectors(fn,Ti),r[0]=Ti.x,r[4]=po.x,r[8]=fn.x,r[1]=Ti.y,r[5]=po.y,r[9]=fn.y,r[2]=Ti.z,r[6]=po.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],S=i[3],E=i[7],x=i[11],L=i[15],P=r[0],C=r[4],U=r[8],T=r[12],y=r[1],I=r[5],j=r[9],G=r[13],fe=r[2],Z=r[6],V=r[10],X=r[14],O=r[3],Se=r[7],B=r[11],Le=r[15];return s[0]=o*P+a*y+l*fe+c*O,s[4]=o*C+a*I+l*Z+c*Se,s[8]=o*U+a*j+l*V+c*B,s[12]=o*T+a*G+l*X+c*Le,s[1]=u*P+d*y+f*fe+p*O,s[5]=u*C+d*I+f*Z+p*Se,s[9]=u*U+d*j+f*V+p*B,s[13]=u*T+d*G+f*X+p*Le,s[2]=g*P+_*y+m*fe+h*O,s[6]=g*C+_*I+m*Z+h*Se,s[10]=g*U+_*j+m*V+h*B,s[14]=g*T+_*G+m*X+h*Le,s[3]=S*P+E*y+x*fe+L*O,s[7]=S*C+E*I+x*Z+L*Se,s[11]=S*U+E*j+x*V+L*B,s[15]=S*T+E*G+x*X+L*Le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],S=d*m*c-_*f*c+_*l*p-a*m*p-d*l*h+a*f*h,E=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,x=u*_*c-g*d*c+g*a*p-o*_*p-u*a*h+o*d*h,L=g*d*l-u*_*l-g*a*f+o*_*f+u*a*m-o*d*m,P=n*S+i*E+r*x+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=S*C,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*C,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*h+i*l*h)*C,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*C,e[4]=E*C,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*h+n*f*h)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*C,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*C,e[8]=x*C,e[9]=(g*d*s-u*_*s-g*i*p+n*_*p+u*i*h-n*d*h)*C,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*h+n*a*h)*C,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*C,e[12]=L*C,e[13]=(u*_*r-g*d*r+g*i*f-n*_*f-u*i*m+n*d*m)*C,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,_=o*u,m=o*d,h=a*d,S=l*c,E=l*u,x=l*d,L=i.x,P=i.y,C=i.z;return r[0]=(1-(_+h))*L,r[1]=(p+x)*L,r[2]=(g-E)*L,r[3]=0,r[4]=(p-x)*P,r[5]=(1-(f+h))*P,r[6]=(m+S)*P,r[7]=0,r[8]=(g+E)*C,r[9]=(m-S)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Mr.set(r[0],r[1],r[2]).length();const o=Mr.set(r[4],r[5],r[6]).length(),a=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,u=1/o,d=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,n.setFromRotationMatrix(Rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_i){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(a===_i)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===aa)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let g,_;if(a===_i)g=(o+s)*d,_=-2*d;else if(a===aa)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Mr=new J,Rn=new Ct,ME=new J(0,0,0),EE=new J(1,1,1),Ti=new J,po=new J,fn=new J,Kd=new Ct,Zd=new fr;class ei{constructor(e=0,n=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Qp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wE=0;const Jd=new J,Er=new fr,oi=new Ct,mo=new J,cs=new J,TE=new J,AE=new fr,Qd=new J(1,0,0),ef=new J(0,1,0),tf=new J(0,0,1),nf={type:"added"},RE={type:"removed"},wr={type:"childadded",child:null},pl={type:"childremoved",child:null};class Yt extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new J,n=new ei,i=new fr,r=new J(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Qe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Er.setFromAxisAngle(e,n),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,n){return Er.setFromAxisAngle(e,n),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,n){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?mo.copy(e):mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(cs,mo,this.up):oi.lookAt(mo,cs,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(oi),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nf),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(RE),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nf),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,TE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,AE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new J(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new J,ai=new J,ml=new J,li=new J,Tr=new J,Ar=new J,rf=new J,gl=new J,_l=new J,vl=new J,xl=new At,yl=new At,bl=new At;class Dn{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Cn.subVectors(r,n),ai.subVectors(i,n),ml.subVectors(e,n);const o=Cn.dot(Cn),a=Cn.dot(ai),l=Cn.dot(ml),c=ai.dot(ai),u=ai.dot(ml),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return xl.setScalar(0),yl.setScalar(0),bl.setScalar(0),xl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,i),bl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xl,s.x),o.addScaledVector(yl,s.y),o.addScaledVector(bl,s.z),o}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),ai.subVectors(e,n),Cn.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Cn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Tr.subVectors(r,i),Ar.subVectors(s,i),gl.subVectors(e,i);const l=Tr.dot(gl),c=Ar.dot(gl);if(l<=0&&c<=0)return n.copy(i);_l.subVectors(e,r);const u=Tr.dot(_l),d=Ar.dot(_l);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Tr,o);vl.subVectors(e,s);const p=Tr.dot(vl),g=Ar.dot(vl);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ar,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return rf.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(rf,a);const h=1/(m+_+f);return o=_*h,a=f*h,n.copy(i).addScaledVector(Tr,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},go={h:0,s:0,l:0};function Sl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=dE(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Sl(o,s,e+1/3),this.g=Sl(o,s,e),this.b=Sl(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,n=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mn){const i=em[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return lt.fromWorkingColorSpace(jt.copy(this),e),Math.round(nt(jt.r*255,0,255))*65536+Math.round(nt(jt.g*255,0,255))*256+Math.round(nt(jt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Mn){lt.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(go);const i=sl(Ai.h,go.h,n),r=sl(Ai.s,go.s,n),s=sl(Ai.l,go.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new st;st.NAMES=em;let CE=0;class Ys extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Or,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=ec,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ql&&(i.blendSrc=this.blendSrc),this.blendDst!==ec&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tm extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new J,_o=new et;let PE=0;class xn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wd,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_o.fromBufferAttribute(this,n),_o.applyMatrix3(e),this.setXY(n,_o.x,_o.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=os(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=os(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=os(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=os(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=os(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wd&&(e.usage=this.usage),e}}class nm extends xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class im extends xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xi extends xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let DE=0;const Sn=new Ct,Ml=new Yt,Rr=new J,hn=new qs,us=new qs,zt=new J;class yi extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kp(e)?im:nm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];us.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(hn.min,us.min),hn.expandByPoint(zt),zt.addVectors(hn.max,us.max),hn.expandByPoint(zt)):(hn.expandByPoint(us.min),hn.expandByPoint(us.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Rr.fromBufferAttribute(e,c),zt.add(Rr)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new J,l[U]=new J;const c=new J,u=new J,d=new J,f=new et,p=new et,g=new et,_=new J,m=new J;function h(U,T,y){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,U),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[U].add(_),a[T].add(_),a[y].add(_),l[U].add(m),l[T].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,T=S.length;U<T;++U){const y=S[U],I=y.start,j=y.count;for(let G=I,fe=I+j;G<fe;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const E=new J,x=new J,L=new J,P=new J;function C(U){L.fromBufferAttribute(r,U),P.copy(L);const T=a[U];E.copy(T),E.sub(L.multiplyScalar(L.dot(T))).normalize(),x.crossVectors(P,T);const I=x.dot(l[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,I)}for(let U=0,T=S.length;U<T;++U){const y=S[U],I=y.start,j=y.count;for(let G=I,fe=I+j;G<fe;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new J,s=new J,o=new J,a=new J,l=new J,c=new J,u=new J,d=new J;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new xn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sf=new Ct,Xi=new Jp,vo=new gu,of=new J,xo=new J,yo=new J,bo=new J,El=new J,So=new J,af=new J,Mo=new J;class $n extends Yt{constructor(e=new yi,n=new tm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){So.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(El.fromBufferAttribute(d,e),o?So.addScaledVector(El,u):So.addScaledVector(El.sub(n),u))}n.add(So)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(vo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(vo,of)===null||Xi.origin.distanceToSquared(of)>(e.far-e.near)**2))&&(sf.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(sf),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,L=E;x<L;x+=3){const P=a.getX(x),C=a.getX(x+1),U=a.getX(x+2);r=Eo(this,h,e,i,c,u,d,P,C,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const S=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);r=Eo(this,o,e,i,c,u,d,S,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,L=E;x<L;x+=3){const P=x,C=x+1,U=x+2;r=Eo(this,h,e,i,c,u,d,P,C,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const S=m,E=m+1,x=m+2;r=Eo(this,o,e,i,c,u,d,S,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function IE(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Oi,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Mo);return c<n.near||c>n.far?null:{distance:c,point:Mo.clone(),object:t}}function Eo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,xo),t.getVertexPosition(l,yo),t.getVertexPosition(c,bo);const u=IE(t,e,n,i,xo,yo,bo,af);if(u){const d=new J;Dn.getBarycoord(af,xo,yo,bo,d),r&&(u.uv=Dn.getInterpolatedAttribute(r,a,l,c,d,new et)),s&&(u.uv1=Dn.getInterpolatedAttribute(s,a,l,c,d,new et)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,d,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new J,materialIndex:0};Dn.getNormal(xo,yo,bo,f.normal),u.face=f,u.barycoord=d}return u}class Ks extends yi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xi(c,3)),this.setAttribute("normal",new xi(u,3)),this.setAttribute("uv",new xi(d,2));function g(_,m,h,S,E,x,L,P,C,U,T){const y=x/C,I=L/U,j=x/2,G=L/2,fe=P/2,Z=C+1,V=U+1;let X=0,O=0;const Se=new J;for(let B=0;B<V;B++){const Le=B*I-G;for(let ge=0;ge<Z;ge++){const Oe=ge*y-j;Se[_]=Oe*S,Se[m]=Le*E,Se[h]=fe,c.push(Se.x,Se.y,Se.z),Se[_]=0,Se[m]=0,Se[h]=P>0?1:-1,u.push(Se.x,Se.y,Se.z),d.push(ge/C),d.push(1-B/U),X+=1}}for(let B=0;B<U;B++)for(let Le=0;Le<C;Le++){const ge=f+Le+Z*B,Oe=f+Le+Z*(B+1),se=f+(Le+1)+Z*(B+1),_e=f+(Le+1)+Z*B;l.push(ge,Oe,_e),l.push(Oe,se,_e),O+=6}a.addGroup(p,O,T),p+=O,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Yr(t[n]);for(const r in i)e[r]=i[r]}return e}function LE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const kE={clone:Yr,merge:Jt};var NE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NE,this.fragmentShader=UE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=LE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class sm extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new J,lf=new et,cf=new et;class tn extends sm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Oc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oc*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,n){return this.getViewBounds(e,lf,cf),n.subVectors(cf,lf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cr=-90,Pr=1;class FE extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Cr,Pr,e,n);r.layers=this.layers,this.add(r);const s=new tn(Cr,Pr,e,n);s.layers=this.layers,this.add(s);const o=new tn(Cr,Pr,e,n);o.layers=this.layers,this.add(o);const a=new tn(Cr,Pr,e,n);a.layers=this.layers,this.add(a);const l=new tn(Cr,Pr,e,n);l.layers=this.layers,this.add(l);const c=new tn(Cr,Pr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class om extends un{constructor(e=[],n=Xr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OE extends dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new om(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ks(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ni});s.uniforms.tEquirect.value=n;const o=new $n(r,s),a=n.minFilter;return n.minFilter===sr&&(n.minFilter=Xn),new FE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class wo extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zE={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new wo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class BE extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Tl=new J,HE=new J,VE=new Qe;class Di{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tl.subVectors(i,n).cross(HE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Tl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||VE.getNormalMatrix(e),r=this.coplanarPoint(Tl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new gu,To=new J;class _u{constructor(e=new Di,n=new Di,i=new Di,r=new Di,s=new Di,o=new Di){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],S=r[13],E=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-h).normalize(),i[1].setComponents(l+s,f+c,m+p,x+h).normalize(),i[2].setComponents(l+o,f+u,m+g,x+S).normalize(),i[3].setComponents(l-o,f-u,m-g,x-S).normalize(),i[4].setComponents(l-a,f-d,m-_,x-E).normalize(),n===_i)i[5].setComponents(l+a,f+d,m+_,x+E).normalize();else if(n===aa)i[5].setComponents(a,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(To.x=r.normal.x>0?e.max.x:e.min.x,To.y=r.normal.y>0?e.max.y:e.min.y,To.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class am extends un{constructor(e,n,i=ur,r,s,o,a=kn,l=kn,c,u=Us){if(u!==Us&&u!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ia extends yi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const S=h*f-o;for(let E=0;E<c;E++){const x=E*d-s;g.push(x,-S,0),_.push(0,0,1),m.push(E/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<a;S++){const E=S+c*h,x=S+c*(h+1),L=S+1+c*(h+1),P=S+1+c*h;p.push(E,x,P),p.push(x,L,P)}this.setIndex(p),this.setAttribute("position",new xi(g,3)),this.setAttribute("normal",new xi(_,3)),this.setAttribute("uv",new xi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class GE extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qp,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class WE extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jE extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class XE{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const $E=new XE;class vu{constructor(e){this.manager=e!==void 0?e:$E,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vu.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class qE extends Error{constructor(e,n){super(e),this.response=n}}class YE extends vu{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=uf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(ci[e]!==void 0){ci[e].push({onLoad:n,onProgress:i,onError:r});return}ci[e]=[],ci[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ci[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(h){S();function S(){d.read().then(({done:E,value:x})=>{if(E)h.close();else{_+=x.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let P=0,C=u.length;P<C;P++){const U=u[P];U.onProgress&&U.onProgress(L)}h.enqueue(x),S()}},E=>{h.error(E)})}}});return new Response(m)}else throw new qE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{uf.add(e,c);const u=ci[e];delete ci[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=ci[e];if(u===void 0)throw this.manager.itemError(e),c;delete ci[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class lm extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Al=new Ct,df=new J,ff=new J;class KE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _u,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;df.setFromMatrixPosition(e.matrixWorld),n.position.copy(df),ff.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ff),n.updateMatrixWorld(),Al.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ss extends sm{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ZE extends KE{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class JE extends lm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new ZE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class QE extends lm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ew extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hf{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function pf(t,e,n,i){const r=tw(i);switch(n){case Gp:return t*e;case jp:return t*e/r.components*r.byteLength;case fu:return t*e/r.components*r.byteLength;case Xp:return t*e*2/r.components*r.byteLength;case hu:return t*e*2/r.components*r.byteLength;case Wp:return t*e*3/r.components*r.byteLength;case In:return t*e*4/r.components*r.byteLength;case pu:return t*e*4/r.components*r.byteLength;case zo:case Bo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ho:case Vo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hc:case mc:return Math.max(t,16)*Math.max(e,8)/4;case fc:case pc:return Math.max(t,8)*Math.max(e,8)/2;case gc:case _c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Go:case Lc:case kc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case $p:case Nc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Uc:case Fc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tw(t){switch(t){case Qn:case Bp:return{byteLength:1,components:1};case ks:case Hp:case Xs:return{byteLength:2,components:1};case uu:case du:return{byteLength:2,components:4};case ur:case cu:case gi:return{byteLength:4,components:1};case Vp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cm(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var iw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rw=`#ifdef USE_ALPHAHASH
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
#endif`,sw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ow=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cw=`#ifdef USE_AOMAP
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
#endif`,uw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dw=`#ifdef USE_BATCHING
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
#endif`,fw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gw=`#ifdef USE_IRIDESCENCE
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
#endif`,_w=`#ifdef USE_BUMPMAP
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
#endif`,vw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ew=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ww=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tw=`#define PI 3.141592653589793
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
} // validated`,Aw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rw=`vec3 transformedNormal = objectNormal;
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
#endif`,Cw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lw="gl_FragColor = linearToOutputTexel( gl_FragColor );",kw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nw=`#ifdef USE_ENVMAP
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
#endif`,Uw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fw=`#ifdef USE_ENVMAP
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
#endif`,Ow=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zw=`#ifdef USE_ENVMAP
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
#endif`,Bw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ww=`#ifdef USE_GRADIENTMAP
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
}`,jw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$w=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qw=`uniform bool receiveShadow;
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
#endif`,Yw=`#ifdef USE_ENVMAP
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
#endif`,Kw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eT=`PhysicalMaterial material;
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
#endif`,tT=`struct PhysicalMaterial {
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
}`,nT=`
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
#endif`,iT=`#if defined( RE_IndirectDiffuse )
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
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fT=`#if defined( USE_POINTS_UV )
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
#endif`,hT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_T=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vT=`#ifdef USE_MORPHTARGETS
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
#endif`,xT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ET=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wT=`#ifdef USE_NORMALMAP
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
#endif`,TT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HT=`float getShadowMask() {
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
}`,VT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GT=`#ifdef USE_SKINNING
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
#endif`,WT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jT=`#ifdef USE_SKINNING
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
#endif`,XT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$T=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KT=`#ifdef USE_TRANSMISSION
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
#endif`,ZT=`#ifdef USE_TRANSMISSION
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iA=`uniform sampler2D t2D;
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
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`#include <common>
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
}`,cA=`#if DEPTH_PACKING == 3200
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
}`,uA=`#define DISTANCE
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
}`,dA=`#define DISTANCE
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
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`uniform float scale;
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#include <common>
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
}`,_A=`uniform vec3 diffuse;
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
}`,vA=`#define LAMBERT
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
}`,xA=`#define LAMBERT
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
}`,yA=`#define MATCAP
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
}`,bA=`#define MATCAP
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
}`,SA=`#define NORMAL
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
}`,MA=`#define NORMAL
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
}`,EA=`#define PHONG
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
}`,wA=`#define PHONG
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
}`,TA=`#define STANDARD
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
}`,AA=`#define STANDARD
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
}`,RA=`#define TOON
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
}`,CA=`#define TOON
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
}`,PA=`uniform float size;
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
}`,DA=`uniform vec3 diffuse;
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
}`,IA=`#include <common>
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
}`,LA=`uniform vec3 color;
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
}`,kA=`uniform float rotation;
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
}`,NA=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:iw,alphahash_pars_fragment:rw,alphamap_fragment:sw,alphamap_pars_fragment:ow,alphatest_fragment:aw,alphatest_pars_fragment:lw,aomap_fragment:cw,aomap_pars_fragment:uw,batching_pars_vertex:dw,batching_vertex:fw,begin_vertex:hw,beginnormal_vertex:pw,bsdfs:mw,iridescence_fragment:gw,bumpmap_pars_fragment:_w,clipping_planes_fragment:vw,clipping_planes_pars_fragment:xw,clipping_planes_pars_vertex:yw,clipping_planes_vertex:bw,color_fragment:Sw,color_pars_fragment:Mw,color_pars_vertex:Ew,color_vertex:ww,common:Tw,cube_uv_reflection_fragment:Aw,defaultnormal_vertex:Rw,displacementmap_pars_vertex:Cw,displacementmap_vertex:Pw,emissivemap_fragment:Dw,emissivemap_pars_fragment:Iw,colorspace_fragment:Lw,colorspace_pars_fragment:kw,envmap_fragment:Nw,envmap_common_pars_fragment:Uw,envmap_pars_fragment:Fw,envmap_pars_vertex:Ow,envmap_physical_pars_fragment:Yw,envmap_vertex:zw,fog_vertex:Bw,fog_pars_vertex:Hw,fog_fragment:Vw,fog_pars_fragment:Gw,gradientmap_pars_fragment:Ww,lightmap_pars_fragment:jw,lights_lambert_fragment:Xw,lights_lambert_pars_fragment:$w,lights_pars_begin:qw,lights_toon_fragment:Kw,lights_toon_pars_fragment:Zw,lights_phong_fragment:Jw,lights_phong_pars_fragment:Qw,lights_physical_fragment:eT,lights_physical_pars_fragment:tT,lights_fragment_begin:nT,lights_fragment_maps:iT,lights_fragment_end:rT,logdepthbuf_fragment:sT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:aT,logdepthbuf_vertex:lT,map_fragment:cT,map_pars_fragment:uT,map_particle_fragment:dT,map_particle_pars_fragment:fT,metalnessmap_fragment:hT,metalnessmap_pars_fragment:pT,morphinstance_vertex:mT,morphcolor_vertex:gT,morphnormal_vertex:_T,morphtarget_pars_vertex:vT,morphtarget_vertex:xT,normal_fragment_begin:yT,normal_fragment_maps:bT,normal_pars_fragment:ST,normal_pars_vertex:MT,normal_vertex:ET,normalmap_pars_fragment:wT,clearcoat_normal_fragment_begin:TT,clearcoat_normal_fragment_maps:AT,clearcoat_pars_fragment:RT,iridescence_pars_fragment:CT,opaque_fragment:PT,packing:DT,premultiplied_alpha_fragment:IT,project_vertex:LT,dithering_fragment:kT,dithering_pars_fragment:NT,roughnessmap_fragment:UT,roughnessmap_pars_fragment:FT,shadowmap_pars_fragment:OT,shadowmap_pars_vertex:zT,shadowmap_vertex:BT,shadowmask_pars_fragment:HT,skinbase_vertex:VT,skinning_pars_vertex:GT,skinning_vertex:WT,skinnormal_vertex:jT,specularmap_fragment:XT,specularmap_pars_fragment:$T,tonemapping_fragment:qT,tonemapping_pars_fragment:YT,transmission_fragment:KT,transmission_pars_fragment:ZT,uv_pars_fragment:JT,uv_pars_vertex:QT,uv_vertex:eA,worldpos_vertex:tA,background_vert:nA,background_frag:iA,backgroundCube_vert:rA,backgroundCube_frag:sA,cube_vert:oA,cube_frag:aA,depth_vert:lA,depth_frag:cA,distanceRGBA_vert:uA,distanceRGBA_frag:dA,equirect_vert:fA,equirect_frag:hA,linedashed_vert:pA,linedashed_frag:mA,meshbasic_vert:gA,meshbasic_frag:_A,meshlambert_vert:vA,meshlambert_frag:xA,meshmatcap_vert:yA,meshmatcap_frag:bA,meshnormal_vert:SA,meshnormal_frag:MA,meshphong_vert:EA,meshphong_frag:wA,meshphysical_vert:TA,meshphysical_frag:AA,meshtoon_vert:RA,meshtoon_frag:CA,points_vert:PA,points_frag:DA,shadow_vert:IA,shadow_frag:LA,sprite_vert:kA,sprite_frag:NA},Ce={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Gn={basic:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Jt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Jt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Jt([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Jt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Jt([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Jt([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Jt([Ce.common,Ce.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Jt([Ce.lights,Ce.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Gn.physical={uniforms:Jt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Ao={r:0,b:0,g:0},qi=new ei,UA=new Ct;function FA(t,e,n,i,r,s,o){const a=new st(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?n:e).get(x)),x}function _(E){let x=!1;const L=g(E);L===null?h(a,l):L&&L.isColor&&(h(L,1),x=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,x){const L=g(x);L&&(L.isCubeTexture||L.mapping===Da)?(u===void 0&&(u=new $n(new Ks(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Yr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qi.copy(x.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(UA.makeRotationFromEuler(qi)),u.material.toneMapped=lt.getTransfer(L.colorSpace)!==_t,(d!==L||f!==L.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=L,f=L.version,p=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new $n(new Ia(2,2),new zi({name:"BackgroundMaterial",uniforms:Yr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(L.colorSpace)!==_t,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=L,f=L.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,x){E.getRGB(Ao,rm(t)),i.buffers.color.setClear(Ao.r,Ao.g,Ao.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:_,addToRenderList:m,dispose:S}}function OA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,I,j,G,fe){let Z=!1;const V=d(G,j,I);s!==V&&(s=V,c(s.object)),Z=p(y,G,j,fe),Z&&g(y,G,j,fe),fe!==null&&e.update(fe,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(y,I,j,G),fe!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,I,j){const G=j.wireframe===!0;let fe=i[y.id];fe===void 0&&(fe={},i[y.id]=fe);let Z=fe[I.id];Z===void 0&&(Z={},fe[I.id]=Z);let V=Z[G];return V===void 0&&(V=f(l()),Z[G]=V),V}function f(y){const I=[],j=[],G=[];for(let fe=0;fe<n;fe++)I[fe]=0,j[fe]=0,G[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:j,attributeDivisors:G,object:y,attributes:{},index:null}}function p(y,I,j,G){const fe=s.attributes,Z=I.attributes;let V=0;const X=j.getAttributes();for(const O in X)if(X[O].location>=0){const B=fe[O];let Le=Z[O];if(Le===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(Le=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(Le=y.instanceColor)),B===void 0||B.attribute!==Le||Le&&B.data!==Le.data)return!0;V++}return s.attributesNum!==V||s.index!==G}function g(y,I,j,G){const fe={},Z=I.attributes;let V=0;const X=j.getAttributes();for(const O in X)if(X[O].location>=0){let B=Z[O];B===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(B=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(B=y.instanceColor));const Le={};Le.attribute=B,B&&B.data&&(Le.data=B.data),fe[O]=Le,V++}s.attributes=fe,s.attributesNum=V,s.index=G}function _(){const y=s.newAttributes;for(let I=0,j=y.length;I<j;I++)y[I]=0}function m(y){h(y,0)}function h(y,I){const j=s.newAttributes,G=s.enabledAttributes,fe=s.attributeDivisors;j[y]=1,G[y]===0&&(t.enableVertexAttribArray(y),G[y]=1),fe[y]!==I&&(t.vertexAttribDivisor(y,I),fe[y]=I)}function S(){const y=s.newAttributes,I=s.enabledAttributes;for(let j=0,G=I.length;j<G;j++)I[j]!==y[j]&&(t.disableVertexAttribArray(j),I[j]=0)}function E(y,I,j,G,fe,Z,V){V===!0?t.vertexAttribIPointer(y,I,j,fe,Z):t.vertexAttribPointer(y,I,j,G,fe,Z)}function x(y,I,j,G){_();const fe=G.attributes,Z=j.getAttributes(),V=I.defaultAttributeValues;for(const X in Z){const O=Z[X];if(O.location>=0){let Se=fe[X];if(Se===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),Se!==void 0){const B=Se.normalized,Le=Se.itemSize,ge=e.get(Se);if(ge===void 0)continue;const Oe=ge.buffer,se=ge.type,_e=ge.bytesPerElement,be=se===t.INT||se===t.UNSIGNED_INT||Se.gpuType===cu;if(Se.isInterleavedBufferAttribute){const H=Se.data,ce=H.stride,pe=Se.offset;if(H.isInstancedInterleavedBuffer){for(let xe=0;xe<O.locationSize;xe++)h(O.location+xe,H.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let xe=0;xe<O.locationSize;xe++)m(O.location+xe);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let xe=0;xe<O.locationSize;xe++)E(O.location+xe,Le/O.locationSize,se,B,ce*_e,(pe+Le/O.locationSize*xe)*_e,be)}else{if(Se.isInstancedBufferAttribute){for(let H=0;H<O.locationSize;H++)h(O.location+H,Se.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let H=0;H<O.locationSize;H++)m(O.location+H);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let H=0;H<O.locationSize;H++)E(O.location+H,Le/O.locationSize,se,B,Le*_e,Le/O.locationSize*H*_e,be)}}else if(V!==void 0){const B=V[X];if(B!==void 0)switch(B.length){case 2:t.vertexAttrib2fv(O.location,B);break;case 3:t.vertexAttrib3fv(O.location,B);break;case 4:t.vertexAttrib4fv(O.location,B);break;default:t.vertexAttrib1fv(O.location,B)}}}}S()}function L(){U();for(const y in i){const I=i[y];for(const j in I){const G=I[j];for(const fe in G)u(G[fe].object),delete G[fe];delete I[j]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const j in I){const G=I[j];for(const fe in G)u(G[fe].object),delete G[fe];delete I[j]}delete i[y.id]}function C(y){for(const I in i){const j=i[I];if(j[y.id]===void 0)continue;const G=j[y.id];for(const fe in G)u(G[fe].object),delete G[fe];delete j[y.id]}}function U(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function zA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function BA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==In&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const U=C===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gi&&!U)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:L,maxSamples:P}}function HA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Di,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,E=S*4;let x=h.clippingState||null;l.value=x,x=u(g,f,E,p);for(let L=0;L!==E;++L)x[L]=n[L];h.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,x=p;E!==_;++E,x+=4)o.copy(d[E]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function VA(t){let e=new WeakMap;function n(o,a){return a===lc?o.mapping=Xr:a===cc&&(o.mapping=$r),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lc||a===cc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new OE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Fr=4,mf=[.125,.215,.35,.446,.526,.582],er=20,Rl=new Ss,gf=new st;let Cl=null,Pl=0,Dl=0,Il=!1;const Zi=(1+Math.sqrt(5))/2,Dr=1/Zi,_f=[new J(-Zi,Dr,0),new J(Zi,Dr,0),new J(-Dr,0,Zi),new J(Dr,0,Zi),new J(0,Zi,-Dr),new J(0,Zi,Dr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],GA=new J;class vf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=GA}=s;Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cl,Pl,Dl),this._renderer.xr.enabled=Il,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Xs,format:In,colorSpace:qr,depthBuffer:!1},r=xf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WA(s)),this._blurMaterial=jA(s,e,n)}return r}_compileMaterial(e){const n=new $n(this._lodPlanes[0],e);this._renderer.compile(n,Rl)}_sceneToCubeUV(e,n,i,r,s){const l=new tn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(gf),d.toneMapping=Ui,d.autoClear=!1;const g=new tm({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),_=new $n(new Ks,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(gf),m=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const x=this._cubeSize;Ro(r,E*x,S>2?x:0,x,x),d.setRenderTarget(r),m&&d.render(_,l),d.render(e,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xr||e.mapping===$r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ro(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Rl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_f[(r-s-1)%_f.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new $n(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*er-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):er;m>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);const h=[];let S=0;for(let C=0;C<er;++C){const U=C/_,T=Math.exp(-U*U/2);h.push(T),C===0?S+=T:C<m&&(S+=2*T)}for(let C=0;C<h.length;C++)h[C]=h[C]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const x=this._sizeLods[r],L=3*x*(r>E-Fr?r-E+Fr:0),P=4*(this._cubeSize-x);Ro(n,L,P,3*x,2*x),l.setRenderTarget(n),l.render(d,Rl)}}function WA(t){const e=[],n=[],i=[];let r=t;const s=t-Fr+1+mf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Fr?l=mf[o-t+Fr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,S=new Float32Array(_*g*p),E=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let P=0;P<p;P++){const C=P%3*2/3-1,U=P>2?0:-1,T=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];S.set(T,_*g*P),E.set(f,m*g*P);const y=[P,P,P,P,P,P];x.set(y,h*g*P)}const L=new yi;L.setAttribute("position",new xn(S,_)),L.setAttribute("uv",new xn(E,m)),L.setAttribute("faceIndex",new xn(x,h)),e.push(L),r>Fr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function xf(t,e,n){const i=new dr(t,e,n);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function jA(t,e,n){const i=new Float32Array(er),r=new J(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function yf(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function bf(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}function XA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===lc||l===cc,u=l===Xr||l===$r;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new vf(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new vf(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function $A(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Wo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qA(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let E=0,x=S.length;E<x;E+=3){const L=S[E+0],P=S[E+1],C=S[E+2];f.push(L,P,P,C,C,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let E=0,x=S.length/3-1;E<x;E+=3){const L=E+0,P=E+1,C=E+2;f.push(L,P,P,C,C,L)}}else return;const m=new(Kp(f)?im:nm)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function YA(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let h=0;for(let S=0;S<g;S++)h+=p[S]*_[S];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function KA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ZA(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*P*4*d),U=new Zp(C,L,P,d);U.type=gi,U.needsUpdate=!0;const T=x*4;for(let I=0;I<d;I++){const j=h[I],G=S[I],fe=E[I],Z=L*P*4*I;for(let V=0;V<j.count;V++){const X=V*T;g===!0&&(r.fromBufferAttribute(j,V),C[Z+X+0]=r.x,C[Z+X+1]=r.y,C[Z+X+2]=r.z,C[Z+X+3]=0),_===!0&&(r.fromBufferAttribute(G,V),C[Z+X+4]=r.x,C[Z+X+5]=r.y,C[Z+X+6]=r.z,C[Z+X+7]=0),m===!0&&(r.fromBufferAttribute(fe,V),C[Z+X+8]=r.x,C[Z+X+9]=r.y,C[Z+X+10]=r.z,C[Z+X+11]=fe.itemSize===4?r.w:1)}}f={count:d,texture:U,size:new et(L,P)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function JA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const um=new un,Sf=new am(1,1),dm=new Zp,fm=new bE,hm=new om,Mf=[],Ef=[],wf=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function Jr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Mf[r];if(s===void 0&&(s=new Float32Array(r),Mf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function La(t,e){let n=Ef[e];n===void 0&&(n=new Int32Array(e),Ef[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function eR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function tR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function iR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Af.set(i),t.uniformMatrix2fv(this.addr,!1,Af),Ft(n,i)}}function rR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Tf.set(i),t.uniformMatrix3fv(this.addr,!1,Tf),Ft(n,i)}}function sR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;wf.set(i),t.uniformMatrix4fv(this.addr,!1,wf),Ft(n,i)}}function oR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function aR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function lR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function cR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function uR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function dR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function fR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function hR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function pR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Sf.compareFunction=Yp,s=Sf):s=um,n.setTexture2D(e||s,r)}function mR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||fm,r)}function gR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||hm,r)}function _R(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||dm,r)}function vR(t){switch(t){case 5126:return QA;case 35664:return eR;case 35665:return tR;case 35666:return nR;case 35674:return iR;case 35675:return rR;case 35676:return sR;case 5124:case 35670:return oR;case 35667:case 35671:return aR;case 35668:case 35672:return lR;case 35669:case 35673:return cR;case 5125:return uR;case 36294:return dR;case 36295:return fR;case 36296:return hR;case 35678:case 36198:case 36298:case 36306:case 35682:return pR;case 35679:case 36299:case 36307:return mR;case 35680:case 36300:case 36308:case 36293:return gR;case 36289:case 36303:case 36311:case 36292:return _R}}function xR(t,e){t.uniform1fv(this.addr,e)}function yR(t,e){const n=Jr(e,this.size,2);t.uniform2fv(this.addr,n)}function bR(t,e){const n=Jr(e,this.size,3);t.uniform3fv(this.addr,n)}function SR(t,e){const n=Jr(e,this.size,4);t.uniform4fv(this.addr,n)}function MR(t,e){const n=Jr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ER(t,e){const n=Jr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function wR(t,e){const n=Jr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function TR(t,e){t.uniform1iv(this.addr,e)}function AR(t,e){t.uniform2iv(this.addr,e)}function RR(t,e){t.uniform3iv(this.addr,e)}function CR(t,e){t.uniform4iv(this.addr,e)}function PR(t,e){t.uniform1uiv(this.addr,e)}function DR(t,e){t.uniform2uiv(this.addr,e)}function IR(t,e){t.uniform3uiv(this.addr,e)}function LR(t,e){t.uniform4uiv(this.addr,e)}function kR(t,e,n){const i=this.cache,r=e.length,s=La(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||um,s[o])}function NR(t,e,n){const i=this.cache,r=e.length,s=La(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||fm,s[o])}function UR(t,e,n){const i=this.cache,r=e.length,s=La(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||hm,s[o])}function FR(t,e,n){const i=this.cache,r=e.length,s=La(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||dm,s[o])}function OR(t){switch(t){case 5126:return xR;case 35664:return yR;case 35665:return bR;case 35666:return SR;case 35674:return MR;case 35675:return ER;case 35676:return wR;case 5124:case 35670:return TR;case 35667:case 35671:return AR;case 35668:case 35672:return RR;case 35669:case 35673:return CR;case 5125:return PR;case 36294:return DR;case 36295:return IR;case 36296:return LR;case 35678:case 36198:case 36298:case 36306:case 35682:return kR;case 35679:case 36299:case 36307:return NR;case 35680:case 36300:case 36308:case 36293:return UR;case 36289:case 36303:case 36311:case 36292:return FR}}class zR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=vR(n.type)}}class BR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OR(n.type)}}class HR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ll=/(\w+)(\])?(\[|\.)?/g;function Rf(t,e){t.seq.push(e),t.map[e.id]=e}function VR(t,e,n){const i=t.name,r=i.length;for(Ll.lastIndex=0;;){const s=Ll.exec(i),o=Ll.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Rf(n,c===void 0?new zR(a,t,e):new BR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new HR(a),Rf(n,d)),n=d}}}class jo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);VR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Cf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const GR=37297;let WR=0;function jR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Pf=new Qe;function XR(t){lt._getMatrix(Pf,lt.workingColorSpace,t);const e=`mat3( ${Pf.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case oa:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Df(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+jR(t.getShaderSource(e),o)}else return r}function $R(t,e){const n=XR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function qR(t,e){let n;switch(e){case $M:n="Linear";break;case qM:n="Reinhard";break;case YM:n="Cineon";break;case KM:n="ACESFilmic";break;case JM:n="AgX";break;case QM:n="Neutral";break;case ZM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Co=new J;function YR(){lt.getLuminanceCoefficients(Co);const t=Co.x.toFixed(4),e=Co.y.toFixed(4),n=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function ZR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function JR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ps(t){return t!==""}function If(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QR=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(t){return t.replace(QR,t1)}const e1=new Map;function t1(t,e){let n=tt[e];if(n===void 0){const i=e1.get(e);if(i!==void 0)n=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zc(n)}const n1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(t){return t.replace(n1,i1)}function i1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nf(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function r1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===TM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function s1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xr:case $r:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function a1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Op:e="ENVMAP_BLENDING_MULTIPLY";break;case jM:e="ENVMAP_BLENDING_MIX";break;case XM:e="ENVMAP_BLENDING_ADD";break}return e}function l1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function c1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=r1(n),c=s1(n),u=o1(n),d=a1(n),f=l1(n),p=KR(n),g=ZR(s),_=r.createProgram();let m,h,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ps).join(`
`),h.length>0&&(h+=`
`)):(m=[Nf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),h=[Nf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ui?"#define TONE_MAPPING":"",n.toneMapping!==Ui?tt.tonemapping_pars_fragment:"",n.toneMapping!==Ui?qR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,$R("linearToOutputTexel",n.outputColorSpace),YR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ps).join(`
`)),o=zc(o),o=If(o,n),o=Lf(o,n),a=zc(a),a=If(a,n),a=Lf(a,n),o=kf(o),a=kf(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=S+m+o,x=S+h+a,L=Cf(r,r.VERTEX_SHADER,E),P=Cf(r,r.FRAGMENT_SHADER,x);r.attachShader(_,L),r.attachShader(_,P),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(I){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(_).trim(),G=r.getShaderInfoLog(L).trim(),fe=r.getShaderInfoLog(P).trim();let Z=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,L,P);else{const X=Df(r,L,"vertex"),O=Df(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+X+`
`+O)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(G===""||fe==="")&&(V=!1);V&&(I.diagnostics={runnable:Z,programLog:j,vertexShader:{log:G,prefix:m},fragmentShader:{log:fe,prefix:h}})}r.deleteShader(L),r.deleteShader(P),U=new jo(r,_),T=JR(r,_)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,GR)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=P,this}let u1=0;class d1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new f1(e),n.set(e,i)),i}}class f1{constructor(e){this.id=u1++,this.code=e,this.usedTimes=0}}function h1(t,e,n,i,r,s,o){const a=new Qp,l=new d1,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,y,I,j,G){const fe=j.fog,Z=G.geometry,V=T.isMeshStandardMaterial?j.environment:null,X=(T.isMeshStandardMaterial?n:e).get(T.envMap||V),O=X&&X.mapping===Da?X.image.height:null,Se=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const B=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Le=B!==void 0?B.length:0;let ge=0;Z.morphAttributes.position!==void 0&&(ge=1),Z.morphAttributes.normal!==void 0&&(ge=2),Z.morphAttributes.color!==void 0&&(ge=3);let Oe,se,_e,be;if(Se){const it=Gn[Se];Oe=it.vertexShader,se=it.fragmentShader}else Oe=T.vertexShader,se=T.fragmentShader,l.update(T),_e=l.getVertexShaderID(T),be=l.getFragmentShaderID(T);const H=t.getRenderTarget(),ce=t.state.buffers.depth.getReversed(),pe=G.isInstancedMesh===!0,xe=G.isBatchedMesh===!0,A=!!T.map,D=!!T.matcap,z=!!X,b=!!T.aoMap,te=!!T.lightMap,ee=!!T.bumpMap,ae=!!T.normalMap,ie=!!T.displacementMap,me=!!T.emissiveMap,Y=!!T.metalnessMap,M=!!T.roughnessMap,v=T.anisotropy>0,N=T.clearcoat>0,K=T.dispersion>0,le=T.iridescence>0,Q=T.sheen>0,Me=T.transmission>0,ye=v&&!!T.anisotropyMap,ke=N&&!!T.clearcoatMap,Ve=N&&!!T.clearcoatNormalMap,ve=N&&!!T.clearcoatRoughnessMap,Ne=le&&!!T.iridescenceMap,We=le&&!!T.iridescenceThicknessMap,He=Q&&!!T.sheenColorMap,Re=Q&&!!T.sheenRoughnessMap,F=!!T.specularMap,ue=!!T.specularColorMap,De=!!T.specularIntensityMap,k=Me&&!!T.transmissionMap,Ee=Me&&!!T.thicknessMap,oe=!!T.gradientMap,he=!!T.alphaMap,Fe=T.alphaTest>0,Pe=!!T.alphaHash,$e=!!T.extensions;let ot=Ui;T.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ot=t.toneMapping);const St={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:Oe,fragmentShader:se,defines:T.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:xe,batchingColor:xe&&G._colorsTexture!==null,instancing:pe,instancingColor:pe&&G.instanceColor!==null,instancingMorph:pe&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:qr,alphaToCoverage:!!T.alphaToCoverage,map:A,matcap:D,envMap:z,envMapMode:z&&X.mapping,envMapCubeUVHeight:O,aoMap:b,lightMap:te,bumpMap:ee,normalMap:ae,displacementMap:f&&ie,emissiveMap:me,normalMapObjectSpace:ae&&T.normalMapType===iE,normalMapTangentSpace:ae&&T.normalMapType===qp,metalnessMap:Y,roughnessMap:M,anisotropy:v,anisotropyMap:ye,clearcoat:N,clearcoatMap:ke,clearcoatNormalMap:Ve,clearcoatRoughnessMap:ve,dispersion:K,iridescence:le,iridescenceMap:Ne,iridescenceThicknessMap:We,sheen:Q,sheenColorMap:He,sheenRoughnessMap:Re,specularMap:F,specularColorMap:ue,specularIntensityMap:De,transmission:Me,transmissionMap:k,thicknessMap:Ee,gradientMap:oe,opaque:T.transparent===!1&&T.blending===Or&&T.alphaToCoverage===!1,alphaMap:he,alphaTest:Fe,alphaHash:Pe,combine:T.combine,mapUv:A&&_(T.map.channel),aoMapUv:b&&_(T.aoMap.channel),lightMapUv:te&&_(T.lightMap.channel),bumpMapUv:ee&&_(T.bumpMap.channel),normalMapUv:ae&&_(T.normalMap.channel),displacementMapUv:ie&&_(T.displacementMap.channel),emissiveMapUv:me&&_(T.emissiveMap.channel),metalnessMapUv:Y&&_(T.metalnessMap.channel),roughnessMapUv:M&&_(T.roughnessMap.channel),anisotropyMapUv:ye&&_(T.anisotropyMap.channel),clearcoatMapUv:ke&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:We&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(T.sheenRoughnessMap.channel),specularMapUv:F&&_(T.specularMap.channel),specularColorMapUv:ue&&_(T.specularColorMap.channel),specularIntensityMapUv:De&&_(T.specularIntensityMap.channel),transmissionMapUv:k&&_(T.transmissionMap.channel),thicknessMapUv:Ee&&_(T.thicknessMap.channel),alphaMapUv:he&&_(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ae||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(A||he),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ce,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,decodeVideoTexture:A&&T.map.isVideoTexture===!0&&lt.getTransfer(T.map.colorSpace)===_t,decodeVideoTextureEmissive:me&&T.emissiveMap.isVideoTexture===!0&&lt.getTransfer(T.emissiveMap.colorSpace)===_t,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===mi,flipSided:T.side===cn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$e&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&T.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function h(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)y.push(I),y.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(S(y,T),E(y,T),y.push(t.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function S(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function E(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const y=g[T.type];let I;if(y){const j=Gn[y];I=kE.clone(j.uniforms)}else I=T.uniforms;return I}function L(T,y){let I;for(let j=0,G=u.length;j<G;j++){const fe=u[j];if(fe.cacheKey===y){I=fe,++I.usedTimes;break}}return I===void 0&&(I=new c1(t,y,T,s),u.push(I)),I}function P(T){if(--T.usedTimes===0){const y=u.indexOf(T);u[y]=u[u.length-1],u.pop(),T.destroy()}}function C(T){l.remove(T)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:L,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:U}}function p1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function m1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Uf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ff(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||m1),i.length>1&&i.sort(f||Uf),r.length>1&&r.sort(f||Uf)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function g1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ff,t.set(i,[o])):r>=s.length?(o=new Ff,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function _1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new st};break;case"SpotLight":n={position:new J,direction:new J,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function v1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let x1=0;function y1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function b1(t){const e=new _1,n=v1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,s=new Ct,o=new Ct;function a(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,S=0,E=0,x=0,L=0,P=0,C=0;c.sort(y1);for(let T=0,y=c.length;T<y;T++){const I=c[T],j=I.color,G=I.intensity,fe=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=j.r*G,d+=j.g*G,f+=j.b*G;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],G);C++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const X=I.shadow,O=n.get(I);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=I.shadow.matrix,S++}i.directional[p]=V,p++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(j).multiplyScalar(G),V.distance=fe,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[_]=V;const X=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,X.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[_]=X.matrix,I.castShadow){const O=n.get(I);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=Z,x++}_++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(j).multiplyScalar(G),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const X=I.shadow,O=n.get(I);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,O.shadowCameraNear=X.camera.near,O.shadowCameraFar=X.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=I.shadow.matrix,E++}i.point[g]=V,g++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(G),V.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[h]=V,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==S||U.numPointShadows!==E||U.numSpotShadows!==x||U.numSpotMaps!==L||U.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=S,U.numPointShadows=E,U.numSpotShadows=x,U.numSpotMaps=L,U.numLightProbes=C,i.version=x1++)}function l(c,u){let d=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const E=c[h];if(E.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(E.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Of(t){const e=new b1(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function S1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Of(t),e.set(r,[a])):s>=o.length?(a=new Of(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const M1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E1=`uniform sampler2D shadow_pass;
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
}`;function w1(t,e,n){let i=new _u;const r=new et,s=new et,o=new At,a=new WE({depthPacking:nE}),l=new jE,c={},u=n.maxTextureSize,d={[Oi]:cn,[cn]:Oi,[mi]:mi},f=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:M1,fragmentShader:E1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new yi;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $n(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fp;let h=this.type;this.render=function(P,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const T=t.getRenderTarget(),y=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),j=t.state;j.setBlending(Ni),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const G=h!==ui&&this.type===ui,fe=h===ui&&this.type!==ui;for(let Z=0,V=P.length;Z<V;Z++){const X=P[Z],O=X.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const Se=O.getFrameExtents();if(r.multiply(Se),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Se.x),r.x=s.x*Se.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Se.y),r.y=s.y*Se.y,O.mapSize.y=s.y)),O.map===null||G===!0||fe===!0){const Le=this.type!==ui?{minFilter:kn,magFilter:kn}:{};O.map!==null&&O.map.dispose(),O.map=new dr(r.x,r.y,Le),O.map.texture.name=X.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const B=O.getViewportCount();for(let Le=0;Le<B;Le++){const ge=O.getViewport(Le);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),j.viewport(o),O.updateMatrices(X,Le),i=O.getFrustum(),x(C,U,O.camera,X,this.type)}O.isPointLightShadow!==!0&&this.type===ui&&S(O,U),O.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(T,y,I)};function S(P,C){const U=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new dr(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(C,null,U,f,_,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(C,null,U,p,_,null)}function E(P,C,U,T){let y=null;const I=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)y=I;else if(y=U.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const j=y.uuid,G=C.uuid;let fe=c[j];fe===void 0&&(fe={},c[j]=fe);let Z=fe[G];Z===void 0&&(Z=y.clone(),fe[G]=Z,C.addEventListener("dispose",L)),y=Z}if(y.visible=C.visible,y.wireframe=C.wireframe,T===ui?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=t.properties.get(y);j.light=U}return y}function x(P,C,U,T,y){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===ui)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const G=e.update(P),fe=P.material;if(Array.isArray(fe)){const Z=G.groups;for(let V=0,X=Z.length;V<X;V++){const O=Z[V],Se=fe[O.materialIndex];if(Se&&Se.visible){const B=E(P,Se,T,y);P.onBeforeShadow(t,P,C,U,G,B,O),t.renderBufferDirect(U,null,G,B,P,O),P.onAfterShadow(t,P,C,U,G,B,O)}}}else if(fe.visible){const Z=E(P,fe,T,y);P.onBeforeShadow(t,P,C,U,G,Z,null),t.renderBufferDirect(U,null,G,Z,P,null),P.onAfterShadow(t,P,C,U,G,Z,null)}}const j=P.children;for(let G=0,fe=j.length;G<fe;G++)x(j[G],C,U,T,y)}function L(P){P.target.removeEventListener("dispose",L);for(const U in c){const T=c[U],y=P.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const T1={[tc]:nc,[ic]:oc,[rc]:ac,[jr]:sc,[nc]:tc,[oc]:ic,[ac]:rc,[sc]:jr};function A1(t,e){function n(){let k=!1;const Ee=new At;let oe=null;const he=new At(0,0,0,0);return{setMask:function(Fe){oe!==Fe&&!k&&(t.colorMask(Fe,Fe,Fe,Fe),oe=Fe)},setLocked:function(Fe){k=Fe},setClear:function(Fe,Pe,$e,ot,St){St===!0&&(Fe*=ot,Pe*=ot,$e*=ot),Ee.set(Fe,Pe,$e,ot),he.equals(Ee)===!1&&(t.clearColor(Fe,Pe,$e,ot),he.copy(Ee))},reset:function(){k=!1,oe=null,he.set(-1,0,0,0)}}}function i(){let k=!1,Ee=!1,oe=null,he=null,Fe=null;return{setReversed:function(Pe){if(Ee!==Pe){const $e=e.get("EXT_clip_control");Pe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ee=Pe;const ot=Fe;Fe=null,this.setClear(ot)}},getReversed:function(){return Ee},setTest:function(Pe){Pe?H(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(Pe){oe!==Pe&&!k&&(t.depthMask(Pe),oe=Pe)},setFunc:function(Pe){if(Ee&&(Pe=T1[Pe]),he!==Pe){switch(Pe){case tc:t.depthFunc(t.NEVER);break;case nc:t.depthFunc(t.ALWAYS);break;case ic:t.depthFunc(t.LESS);break;case jr:t.depthFunc(t.LEQUAL);break;case rc:t.depthFunc(t.EQUAL);break;case sc:t.depthFunc(t.GEQUAL);break;case oc:t.depthFunc(t.GREATER);break;case ac:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Pe}},setLocked:function(Pe){k=Pe},setClear:function(Pe){Fe!==Pe&&(Ee&&(Pe=1-Pe),t.clearDepth(Pe),Fe=Pe)},reset:function(){k=!1,oe=null,he=null,Fe=null,Ee=!1}}}function r(){let k=!1,Ee=null,oe=null,he=null,Fe=null,Pe=null,$e=null,ot=null,St=null;return{setTest:function(it){k||(it?H(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(it){Ee!==it&&!k&&(t.stencilMask(it),Ee=it)},setFunc:function(it,Bt,rn){(oe!==it||he!==Bt||Fe!==rn)&&(t.stencilFunc(it,Bt,rn),oe=it,he=Bt,Fe=rn)},setOp:function(it,Bt,rn){(Pe!==it||$e!==Bt||ot!==rn)&&(t.stencilOp(it,Bt,rn),Pe=it,$e=Bt,ot=rn)},setLocked:function(it){k=it},setClear:function(it){St!==it&&(t.clearStencil(it),St=it)},reset:function(){k=!1,Ee=null,oe=null,he=null,Fe=null,Pe=null,$e=null,ot=null,St=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,S=null,E=null,x=null,L=null,P=null,C=new st(0,0,0),U=0,T=!1,y=null,I=null,j=null,G=null,fe=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),V=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),V=X>=2);let Se=null,B={};const Le=t.getParameter(t.SCISSOR_BOX),ge=t.getParameter(t.VIEWPORT),Oe=new At().fromArray(Le),se=new At().fromArray(ge);function _e(k,Ee,oe,he){const Fe=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(k,Pe),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<oe;$e++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(Ee,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,Fe):t.texImage2D(Ee+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Fe);return Pe}const be={};be[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(t.DEPTH_TEST),o.setFunc(jr),ee(!1),ae(zd),H(t.CULL_FACE),b(Ni);function H(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function ce(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function pe(k,Ee){return d[k]!==Ee?(t.bindFramebuffer(k,Ee),d[k]=Ee,k===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Ee),k===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Ee),!0):!1}function xe(k,Ee){let oe=p,he=!1;if(k){oe=f.get(Ee),oe===void 0&&(oe=[],f.set(Ee,oe));const Fe=k.textures;if(oe.length!==Fe.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,$e=Fe.length;Pe<$e;Pe++)oe[Pe]=t.COLOR_ATTACHMENT0+Pe;oe.length=Fe.length,he=!0}}else oe[0]!==t.BACK&&(oe[0]=t.BACK,he=!0);he&&t.drawBuffers(oe)}function A(k){return g!==k?(t.useProgram(k),g=k,!0):!1}const D={[Qi]:t.FUNC_ADD,[RM]:t.FUNC_SUBTRACT,[CM]:t.FUNC_REVERSE_SUBTRACT};D[PM]=t.MIN,D[DM]=t.MAX;const z={[IM]:t.ZERO,[LM]:t.ONE,[kM]:t.SRC_COLOR,[Ql]:t.SRC_ALPHA,[BM]:t.SRC_ALPHA_SATURATE,[OM]:t.DST_COLOR,[UM]:t.DST_ALPHA,[NM]:t.ONE_MINUS_SRC_COLOR,[ec]:t.ONE_MINUS_SRC_ALPHA,[zM]:t.ONE_MINUS_DST_COLOR,[FM]:t.ONE_MINUS_DST_ALPHA,[HM]:t.CONSTANT_COLOR,[VM]:t.ONE_MINUS_CONSTANT_COLOR,[GM]:t.CONSTANT_ALPHA,[WM]:t.ONE_MINUS_CONSTANT_ALPHA};function b(k,Ee,oe,he,Fe,Pe,$e,ot,St,it){if(k===Ni){_===!0&&(ce(t.BLEND),_=!1);return}if(_===!1&&(H(t.BLEND),_=!0),k!==AM){if(k!==m||it!==T){if((h!==Qi||x!==Qi)&&(t.blendEquation(t.FUNC_ADD),h=Qi,x=Qi),it)switch(k){case Or:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bd:t.blendFunc(t.ONE,t.ONE);break;case Hd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Or:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Hd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,E=null,L=null,P=null,C.set(0,0,0),U=0,m=k,T=it}return}Fe=Fe||Ee,Pe=Pe||oe,$e=$e||he,(Ee!==h||Fe!==x)&&(t.blendEquationSeparate(D[Ee],D[Fe]),h=Ee,x=Fe),(oe!==S||he!==E||Pe!==L||$e!==P)&&(t.blendFuncSeparate(z[oe],z[he],z[Pe],z[$e]),S=oe,E=he,L=Pe,P=$e),(ot.equals(C)===!1||St!==U)&&(t.blendColor(ot.r,ot.g,ot.b,St),C.copy(ot),U=St),m=k,T=!1}function te(k,Ee){k.side===mi?ce(t.CULL_FACE):H(t.CULL_FACE);let oe=k.side===cn;Ee&&(oe=!oe),ee(oe),k.blending===Or&&k.transparent===!1?b(Ni):b(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const he=k.stencilWrite;a.setTest(he),he&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),me(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){y!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),y=k)}function ae(k){k!==EM?(H(t.CULL_FACE),k!==I&&(k===zd?t.cullFace(t.BACK):k===wM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),I=k}function ie(k){k!==j&&(V&&t.lineWidth(k),j=k)}function me(k,Ee,oe){k?(H(t.POLYGON_OFFSET_FILL),(G!==Ee||fe!==oe)&&(t.polygonOffset(Ee,oe),G=Ee,fe=oe)):ce(t.POLYGON_OFFSET_FILL)}function Y(k){k?H(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function M(k){k===void 0&&(k=t.TEXTURE0+Z-1),Se!==k&&(t.activeTexture(k),Se=k)}function v(k,Ee,oe){oe===void 0&&(Se===null?oe=t.TEXTURE0+Z-1:oe=Se);let he=B[oe];he===void 0&&(he={type:void 0,texture:void 0},B[oe]=he),(he.type!==k||he.texture!==Ee)&&(Se!==oe&&(t.activeTexture(oe),Se=oe),t.bindTexture(k,Ee||be[k]),he.type=k,he.texture=Ee)}function N(){const k=B[Se];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function K(){try{t.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{t.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{t.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{t.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{t.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{t.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{t.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{t.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{t.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{t.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(k){Oe.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Oe.copy(k))}function Re(k){se.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),se.copy(k))}function F(k,Ee){let oe=c.get(Ee);oe===void 0&&(oe=new WeakMap,c.set(Ee,oe));let he=oe.get(k);he===void 0&&(he=t.getUniformBlockIndex(Ee,k.name),oe.set(k,he))}function ue(k,Ee){const he=c.get(Ee).get(k);l.get(Ee)!==he&&(t.uniformBlockBinding(Ee,he,k.__bindingPointIndex),l.set(Ee,he))}function De(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},Se=null,B={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,S=null,E=null,x=null,L=null,P=null,C=new st(0,0,0),U=0,T=!1,y=null,I=null,j=null,G=null,fe=null,Oe.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:H,disable:ce,bindFramebuffer:pe,drawBuffers:xe,useProgram:A,setBlending:b,setMaterial:te,setFlipSided:ee,setCullFace:ae,setLineWidth:ie,setPolygonOffset:me,setScissorTest:Y,activeTexture:M,bindTexture:v,unbindTexture:N,compressedTexImage2D:K,compressedTexImage3D:le,texImage2D:Ne,texImage3D:We,updateUBOMapping:F,uniformBlockBinding:ue,texStorage2D:Ve,texStorage3D:ve,texSubImage2D:Q,texSubImage3D:Me,compressedTexSubImage2D:ye,compressedTexSubImage3D:ke,scissor:He,viewport:Re,reset:De}}function R1(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return p?new OffscreenCanvas(M,v):la("canvas")}function _(M,v,N){let K=1;const le=Y(M);if((le.width>N||le.height>N)&&(K=N/Math.max(le.width,le.height)),K<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Q=Math.floor(K*le.width),Me=Math.floor(K*le.height);d===void 0&&(d=g(Q,Me));const ye=v?g(Q,Me):d;return ye.width=Q,ye.height=Me,ye.getContext("2d").drawImage(M,0,0,Q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Q+"x"+Me+")."),ye}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),M;return M}function m(M){return M.generateMipmaps}function h(M){t.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(M,v,N,K,le=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Q=v;if(v===t.RED&&(N===t.FLOAT&&(Q=t.R32F),N===t.HALF_FLOAT&&(Q=t.R16F),N===t.UNSIGNED_BYTE&&(Q=t.R8)),v===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Q=t.R8UI),N===t.UNSIGNED_SHORT&&(Q=t.R16UI),N===t.UNSIGNED_INT&&(Q=t.R32UI),N===t.BYTE&&(Q=t.R8I),N===t.SHORT&&(Q=t.R16I),N===t.INT&&(Q=t.R32I)),v===t.RG&&(N===t.FLOAT&&(Q=t.RG32F),N===t.HALF_FLOAT&&(Q=t.RG16F),N===t.UNSIGNED_BYTE&&(Q=t.RG8)),v===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Q=t.RG8UI),N===t.UNSIGNED_SHORT&&(Q=t.RG16UI),N===t.UNSIGNED_INT&&(Q=t.RG32UI),N===t.BYTE&&(Q=t.RG8I),N===t.SHORT&&(Q=t.RG16I),N===t.INT&&(Q=t.RG32I)),v===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),N===t.UNSIGNED_INT&&(Q=t.RGB32UI),N===t.BYTE&&(Q=t.RGB8I),N===t.SHORT&&(Q=t.RGB16I),N===t.INT&&(Q=t.RGB32I)),v===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),N===t.UNSIGNED_INT&&(Q=t.RGBA32UI),N===t.BYTE&&(Q=t.RGBA8I),N===t.SHORT&&(Q=t.RGBA16I),N===t.INT&&(Q=t.RGBA32I)),v===t.RGB&&N===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),v===t.RGBA){const Me=le?oa:lt.getTransfer(K);N===t.FLOAT&&(Q=t.RGBA32F),N===t.HALF_FLOAT&&(Q=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Q=Me===_t?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(M,v){let N;return M?v===null||v===ur||v===Ns?N=t.DEPTH24_STENCIL8:v===gi?N=t.DEPTH32F_STENCIL8:v===ks&&(N=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ur||v===Ns?N=t.DEPTH_COMPONENT24:v===gi?N=t.DEPTH_COMPONENT32F:v===ks&&(N=t.DEPTH_COMPONENT16),N}function L(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==kn&&M.minFilter!==Xn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function P(M){const v=M.target;v.removeEventListener("dispose",P),U(v),v.isVideoTexture&&u.delete(v)}function C(M){const v=M.target;v.removeEventListener("dispose",C),y(v)}function U(M){const v=i.get(M);if(v.__webglInit===void 0)return;const N=M.source,K=f.get(N);if(K){const le=K[v.__cacheKey];le.usedTimes--,le.usedTimes===0&&T(M),Object.keys(K).length===0&&f.delete(N)}i.remove(M)}function T(M){const v=i.get(M);t.deleteTexture(v.__webglTexture);const N=M.source,K=f.get(N);delete K[v.__cacheKey],o.memory.textures--}function y(M){const v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let le=0;le<v.__webglFramebuffer[K].length;le++)t.deleteFramebuffer(v.__webglFramebuffer[K][le]);else t.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)t.deleteFramebuffer(v.__webglFramebuffer[K]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=M.textures;for(let K=0,le=N.length;K<le;K++){const Q=i.get(N[K]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(N[K])}i.remove(M)}let I=0;function j(){I=0}function G(){const M=I;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),I+=1,M}function fe(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function Z(M,v){const N=i.get(M);if(M.isVideoTexture&&ie(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){const K=M.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(N,M,v);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+v)}function V(M,v){const N=i.get(M);if(M.version>0&&N.__version!==M.version){se(N,M,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+v)}function X(M,v){const N=i.get(M);if(M.version>0&&N.__version!==M.version){se(N,M,v);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+v)}function O(M,v){const N=i.get(M);if(M.version>0&&N.__version!==M.version){_e(N,M,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+v)}const Se={[uc]:t.REPEAT,[rr]:t.CLAMP_TO_EDGE,[dc]:t.MIRRORED_REPEAT},B={[kn]:t.NEAREST,[eE]:t.NEAREST_MIPMAP_NEAREST,[ao]:t.NEAREST_MIPMAP_LINEAR,[Xn]:t.LINEAR,[il]:t.LINEAR_MIPMAP_NEAREST,[sr]:t.LINEAR_MIPMAP_LINEAR},Le={[rE]:t.NEVER,[uE]:t.ALWAYS,[sE]:t.LESS,[Yp]:t.LEQUAL,[oE]:t.EQUAL,[cE]:t.GEQUAL,[aE]:t.GREATER,[lE]:t.NOTEQUAL};function ge(M,v){if(v.type===gi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Xn||v.magFilter===il||v.magFilter===ao||v.magFilter===sr||v.minFilter===Xn||v.minFilter===il||v.minFilter===ao||v.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,Se[v.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,Se[v.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,Se[v.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,B[v.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,B[v.minFilter]),v.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===kn||v.minFilter!==ao&&v.minFilter!==sr||v.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Oe(M,v){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",P));const K=v.source;let le=f.get(K);le===void 0&&(le={},f.set(K,le));const Q=fe(v);if(Q!==M.__cacheKey){le[Q]===void 0&&(le[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),le[Q].usedTimes++;const Me=le[M.__cacheKey];Me!==void 0&&(le[M.__cacheKey].usedTimes--,Me.usedTimes===0&&T(v)),M.__cacheKey=Q,M.__webglTexture=le[Q].texture}return N}function se(M,v,N){let K=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=t.TEXTURE_3D);const le=Oe(M,v),Q=v.source;n.bindTexture(K,M.__webglTexture,t.TEXTURE0+N);const Me=i.get(Q);if(Q.version!==Me.__version||le===!0){n.activeTexture(t.TEXTURE0+N);const ye=lt.getPrimaries(lt.workingColorSpace),ke=v.colorSpace===Ii?null:lt.getPrimaries(v.colorSpace),Ve=v.colorSpace===Ii||ye===ke?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ve=_(v.image,!1,r.maxTextureSize);ve=me(v,ve);const Ne=s.convert(v.format,v.colorSpace),We=s.convert(v.type);let He=E(v.internalFormat,Ne,We,v.colorSpace,v.isVideoTexture);ge(K,v);let Re;const F=v.mipmaps,ue=v.isVideoTexture!==!0,De=Me.__version===void 0||le===!0,k=Q.dataReady,Ee=L(v,ve);if(v.isDepthTexture)He=x(v.format===Fs,v.type),De&&(ue?n.texStorage2D(t.TEXTURE_2D,1,He,ve.width,ve.height):n.texImage2D(t.TEXTURE_2D,0,He,ve.width,ve.height,0,Ne,We,null));else if(v.isDataTexture)if(F.length>0){ue&&De&&n.texStorage2D(t.TEXTURE_2D,Ee,He,F[0].width,F[0].height);for(let oe=0,he=F.length;oe<he;oe++)Re=F[oe],ue?k&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Re.width,Re.height,Ne,We,Re.data):n.texImage2D(t.TEXTURE_2D,oe,He,Re.width,Re.height,0,Ne,We,Re.data);v.generateMipmaps=!1}else ue?(De&&n.texStorage2D(t.TEXTURE_2D,Ee,He,ve.width,ve.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve.width,ve.height,Ne,We,ve.data)):n.texImage2D(t.TEXTURE_2D,0,He,ve.width,ve.height,0,Ne,We,ve.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ue&&De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,He,F[0].width,F[0].height,ve.depth);for(let oe=0,he=F.length;oe<he;oe++)if(Re=F[oe],v.format!==In)if(Ne!==null)if(ue){if(k)if(v.layerUpdates.size>0){const Fe=pf(Re.width,Re.height,v.format,v.type);for(const Pe of v.layerUpdates){const $e=Re.data.subarray(Pe*Fe/Re.data.BYTES_PER_ELEMENT,(Pe+1)*Fe/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,Pe,Re.width,Re.height,1,Ne,$e)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Re.width,Re.height,ve.depth,Ne,Re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,He,Re.width,Re.height,ve.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Re.width,Re.height,ve.depth,Ne,We,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,He,Re.width,Re.height,ve.depth,0,Ne,We,Re.data)}else{ue&&De&&n.texStorage2D(t.TEXTURE_2D,Ee,He,F[0].width,F[0].height);for(let oe=0,he=F.length;oe<he;oe++)Re=F[oe],v.format!==In?Ne!==null?ue?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,Re.width,Re.height,Ne,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,He,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?k&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Re.width,Re.height,Ne,We,Re.data):n.texImage2D(t.TEXTURE_2D,oe,He,Re.width,Re.height,0,Ne,We,Re.data)}else if(v.isDataArrayTexture)if(ue){if(De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,He,ve.width,ve.height,ve.depth),k)if(v.layerUpdates.size>0){const oe=pf(ve.width,ve.height,v.format,v.type);for(const he of v.layerUpdates){const Fe=ve.data.subarray(he*oe/ve.data.BYTES_PER_ELEMENT,(he+1)*oe/ve.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,ve.width,ve.height,1,Ne,We,Fe)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ne,We,ve.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,He,ve.width,ve.height,ve.depth,0,Ne,We,ve.data);else if(v.isData3DTexture)ue?(De&&n.texStorage3D(t.TEXTURE_3D,Ee,He,ve.width,ve.height,ve.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ne,We,ve.data)):n.texImage3D(t.TEXTURE_3D,0,He,ve.width,ve.height,ve.depth,0,Ne,We,ve.data);else if(v.isFramebufferTexture){if(De)if(ue)n.texStorage2D(t.TEXTURE_2D,Ee,He,ve.width,ve.height);else{let oe=ve.width,he=ve.height;for(let Fe=0;Fe<Ee;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,He,oe,he,0,Ne,We,null),oe>>=1,he>>=1}}else if(F.length>0){if(ue&&De){const oe=Y(F[0]);n.texStorage2D(t.TEXTURE_2D,Ee,He,oe.width,oe.height)}for(let oe=0,he=F.length;oe<he;oe++)Re=F[oe],ue?k&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Ne,We,Re):n.texImage2D(t.TEXTURE_2D,oe,He,Ne,We,Re);v.generateMipmaps=!1}else if(ue){if(De){const oe=Y(ve);n.texStorage2D(t.TEXTURE_2D,Ee,He,oe.width,oe.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ne,We,ve)}else n.texImage2D(t.TEXTURE_2D,0,He,Ne,We,ve);m(v)&&h(K),Me.__version=Q.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function _e(M,v,N){if(v.image.length!==6)return;const K=Oe(M,v),le=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+N);const Q=i.get(le);if(le.version!==Q.__version||K===!0){n.activeTexture(t.TEXTURE0+N);const Me=lt.getPrimaries(lt.workingColorSpace),ye=v.colorSpace===Ii?null:lt.getPrimaries(v.colorSpace),ke=v.colorSpace===Ii||Me===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ve=v.isCompressedTexture||v.image[0].isCompressedTexture,ve=v.image[0]&&v.image[0].isDataTexture,Ne=[];for(let he=0;he<6;he++)!Ve&&!ve?Ne[he]=_(v.image[he],!0,r.maxCubemapSize):Ne[he]=ve?v.image[he].image:v.image[he],Ne[he]=me(v,Ne[he]);const We=Ne[0],He=s.convert(v.format,v.colorSpace),Re=s.convert(v.type),F=E(v.internalFormat,He,Re,v.colorSpace),ue=v.isVideoTexture!==!0,De=Q.__version===void 0||K===!0,k=le.dataReady;let Ee=L(v,We);ge(t.TEXTURE_CUBE_MAP,v);let oe;if(Ve){ue&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,F,We.width,We.height);for(let he=0;he<6;he++){oe=Ne[he].mipmaps;for(let Fe=0;Fe<oe.length;Fe++){const Pe=oe[Fe];v.format!==In?He!==null?ue?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe,0,0,Pe.width,Pe.height,He,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe,F,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe,0,0,Pe.width,Pe.height,He,Re,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe,F,Pe.width,Pe.height,0,He,Re,Pe.data)}}}else{if(oe=v.mipmaps,ue&&De){oe.length>0&&Ee++;const he=Y(Ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,F,he.width,he.height)}for(let he=0;he<6;he++)if(ve){ue?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne[he].width,Ne[he].height,He,Re,Ne[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,F,Ne[he].width,Ne[he].height,0,He,Re,Ne[he].data);for(let Fe=0;Fe<oe.length;Fe++){const $e=oe[Fe].image[he].image;ue?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe+1,0,0,$e.width,$e.height,He,Re,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe+1,F,$e.width,$e.height,0,He,Re,$e.data)}}else{ue?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,He,Re,Ne[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,F,He,Re,Ne[he]);for(let Fe=0;Fe<oe.length;Fe++){const Pe=oe[Fe];ue?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe+1,0,0,He,Re,Pe.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe+1,F,He,Re,Pe.image[he])}}}m(v)&&h(t.TEXTURE_CUBE_MAP),Q.__version=le.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function be(M,v,N,K,le,Q){const Me=s.convert(N.format,N.colorSpace),ye=s.convert(N.type),ke=E(N.internalFormat,Me,ye,N.colorSpace),Ve=i.get(v),ve=i.get(N);if(ve.__renderTarget=v,!Ve.__hasExternalTextures){const Ne=Math.max(1,v.width>>Q),We=Math.max(1,v.height>>Q);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,Q,ke,Ne,We,v.depth,0,Me,ye,null):n.texImage2D(le,Q,ke,Ne,We,0,Me,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),ae(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,le,ve.__webglTexture,0,ee(v)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,le,ve.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function H(M,v,N){if(t.bindRenderbuffer(t.RENDERBUFFER,M),v.depthBuffer){const K=v.depthTexture,le=K&&K.isDepthTexture?K.type:null,Q=x(v.stencilBuffer,le),Me=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=ee(v);ae(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,Q,v.width,v.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,Q,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Q,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,M)}else{const K=v.textures;for(let le=0;le<K.length;le++){const Q=K[le],Me=s.convert(Q.format,Q.colorSpace),ye=s.convert(Q.type),ke=E(Q.internalFormat,Me,ye,Q.colorSpace),Ve=ee(v);N&&ae(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,ke,v.width,v.height):ae(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ve,ke,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ke,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const le=K.__webglTexture,Q=ee(v);if(v.depthTexture.format===Us)ae(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(v.depthTexture.format===Fs)ae(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function pe(M){const v=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const K=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const le=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",le)};K.addEventListener("dispose",le),v.__depthDisposeCallback=le}v.__boundDepthTexture=K}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const K=M.texture.mipmaps;K&&K.length>0?ce(v.__webglFramebuffer[0],M):ce(v.__webglFramebuffer,M)}else if(N){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=t.createRenderbuffer(),H(v.__webglDepthbuffer[K],M,!1);else{const le=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Q)}}else{const K=M.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),H(v.__webglDepthbuffer,M,!1);else{const le=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function xe(M,v,N){const K=i.get(M);v!==void 0&&be(K.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&pe(M)}function A(M){const v=M.texture,N=i.get(M),K=i.get(v);M.addEventListener("dispose",C);const le=M.textures,Q=M.isWebGLCubeRenderTarget===!0,Me=le.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=v.version,o.memory.textures++),Q){N.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ye]=[];for(let ke=0;ke<v.mipmaps.length;ke++)N.__webglFramebuffer[ye][ke]=t.createFramebuffer()}else N.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ye=0;ye<v.mipmaps.length;ye++)N.__webglFramebuffer[ye]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ye=0,ke=le.length;ye<ke;ye++){const Ve=i.get(le[ye]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&ae(M)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ye=0;ye<le.length;ye++){const ke=le[ye];N.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[ye]);const Ve=s.convert(ke.format,ke.colorSpace),ve=s.convert(ke.type),Ne=E(ke.internalFormat,Ve,ve,ke.colorSpace,M.isXRRenderTarget===!0),We=ee(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Ne,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,N.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),H(N.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ge(t.TEXTURE_CUBE_MAP,v);for(let ye=0;ye<6;ye++)if(v.mipmaps&&v.mipmaps.length>0)for(let ke=0;ke<v.mipmaps.length;ke++)be(N.__webglFramebuffer[ye][ke],M,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke);else be(N.__webglFramebuffer[ye],M,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(v)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ye=0,ke=le.length;ye<ke;ye++){const Ve=le[ye],ve=i.get(Ve);n.bindTexture(t.TEXTURE_2D,ve.__webglTexture),ge(t.TEXTURE_2D,Ve),be(N.__webglFramebuffer,M,Ve,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),m(Ve)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ye=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,K.__webglTexture),ge(ye,v),v.mipmaps&&v.mipmaps.length>0)for(let ke=0;ke<v.mipmaps.length;ke++)be(N.__webglFramebuffer[ke],M,v,t.COLOR_ATTACHMENT0,ye,ke);else be(N.__webglFramebuffer,M,v,t.COLOR_ATTACHMENT0,ye,0);m(v)&&h(ye),n.unbindTexture()}M.depthBuffer&&pe(M)}function D(M){const v=M.textures;for(let N=0,K=v.length;N<K;N++){const le=v[N];if(m(le)){const Q=S(M),Me=i.get(le).__webglTexture;n.bindTexture(Q,Me),h(Q),n.unbindTexture()}}}const z=[],b=[];function te(M){if(M.samples>0){if(ae(M)===!1){const v=M.textures,N=M.width,K=M.height;let le=t.COLOR_BUFFER_BIT;const Q=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(M),ye=v.length>1;if(ye)for(let Ve=0;Ve<v.length;Ve++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const ke=M.texture.mipmaps;ke&&ke.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ve=0;Ve<v.length;Ve++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),ye){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Ve]);const ve=i.get(v[Ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ve,0)}t.blitFramebuffer(0,0,N,K,0,0,N,K,le,t.NEAREST),l===!0&&(z.length=0,b.length=0,z.push(t.COLOR_ATTACHMENT0+Ve),M.depthBuffer&&M.resolveDepthBuffer===!1&&(z.push(Q),b.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,z))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let Ve=0;Ve<v.length;Ve++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ve,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Ve]);const ve=i.get(v[Ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ve,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const v=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function ee(M){return Math.min(r.maxSamples,M.samples)}function ae(M){const v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ie(M){const v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function me(M,v){const N=M.colorSpace,K=M.format,le=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==qr&&N!==Ii&&(lt.getTransfer(N)===_t?(K!==In||le!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function Y(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=j,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=O,this.rebindTextures=xe,this.setupRenderTarget=A,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ae}function C1(t,e){function n(i,r=Ii){let s;const o=lt.getTransfer(r);if(i===Qn)return t.UNSIGNED_BYTE;if(i===uu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===du)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Vp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Bp)return t.BYTE;if(i===Hp)return t.SHORT;if(i===ks)return t.UNSIGNED_SHORT;if(i===cu)return t.INT;if(i===ur)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===Xs)return t.HALF_FLOAT;if(i===Gp)return t.ALPHA;if(i===Wp)return t.RGB;if(i===In)return t.RGBA;if(i===Us)return t.DEPTH_COMPONENT;if(i===Fs)return t.DEPTH_STENCIL;if(i===jp)return t.RED;if(i===fu)return t.RED_INTEGER;if(i===Xp)return t.RG;if(i===hu)return t.RG_INTEGER;if(i===pu)return t.RGBA_INTEGER;if(i===zo||i===Bo||i===Ho||i===Vo)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fc||i===hc||i===pc||i===mc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===_c||i===vc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gc||i===_c)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xc||i===yc||i===bc||i===Sc||i===Mc||i===Ec||i===wc||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Dc||i===Ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ec)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ac)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ic)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Go||i===Lc||i===kc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Go)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$p||i===Nc||i===Uc||i===Fc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Go)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const P1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D1=`
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

}`;class I1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new zi({vertexShader:P1,fragmentShader:D1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $n(new Ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L1 extends Zr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const _=new I1,m=n.getContextAttributes();let h=null,S=null;const E=[],x=[],L=new et;let P=null;const C=new tn;C.viewport=new At;const U=new tn;U.viewport=new At;const T=[C,U],y=new ew;let I=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let _e=E[se];return _e===void 0&&(_e=new wl,E[se]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(se){let _e=E[se];return _e===void 0&&(_e=new wl,E[se]=_e),_e.getGripSpace()},this.getHand=function(se){let _e=E[se];return _e===void 0&&(_e=new wl,E[se]=_e),_e.getHandSpace()};function G(se){const _e=x.indexOf(se.inputSource);if(_e===-1)return;const be=E[_e];be!==void 0&&(be.update(se.inputSource,se.frame,c||o),be.dispatchEvent({type:se.type,data:se.inputSource}))}function fe(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",fe),r.removeEventListener("inputsourceschange",Z);for(let se=0;se<E.length;se++){const _e=x[se];_e!==null&&(x[se]=null,E[se].disconnect(_e))}I=null,j=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,S=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",fe),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,H=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=m.stencil?Fs:Us,H=m.stencil?Ns:ur);const pe={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new dr(f.textureWidth,f.textureHeight,{format:In,type:Qn,depthTexture:new am(f.textureWidth,f.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new dr(p.framebufferWidth,p.framebufferHeight,{format:In,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(se){for(let _e=0;_e<se.removed.length;_e++){const be=se.removed[_e],H=x.indexOf(be);H>=0&&(x[H]=null,E[H].disconnect(be))}for(let _e=0;_e<se.added.length;_e++){const be=se.added[_e];let H=x.indexOf(be);if(H===-1){for(let pe=0;pe<E.length;pe++)if(pe>=x.length){x.push(be),H=pe;break}else if(x[pe]===null){x[pe]=be,H=pe;break}if(H===-1)break}const ce=E[H];ce&&ce.connect(be)}}const V=new J,X=new J;function O(se,_e,be){V.setFromMatrixPosition(_e.matrixWorld),X.setFromMatrixPosition(be.matrixWorld);const H=V.distanceTo(X),ce=_e.projectionMatrix.elements,pe=be.projectionMatrix.elements,xe=ce[14]/(ce[10]-1),A=ce[14]/(ce[10]+1),D=(ce[9]+1)/ce[5],z=(ce[9]-1)/ce[5],b=(ce[8]-1)/ce[0],te=(pe[8]+1)/pe[0],ee=xe*b,ae=xe*te,ie=H/(-b+te),me=ie*-b;if(_e.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(me),se.translateZ(ie),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),ce[10]===-1)se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Y=xe+ie,M=A+ie,v=ee-me,N=ae+(H-me),K=D*A/M*Y,le=z*A/M*Y;se.projectionMatrix.makePerspective(v,N,K,le,Y,M),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function Se(se,_e){_e===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(_e.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let _e=se.near,be=se.far;_.texture!==null&&(_.depthNear>0&&(_e=_.depthNear),_.depthFar>0&&(be=_.depthFar)),y.near=U.near=C.near=_e,y.far=U.far=C.far=be,(I!==y.near||j!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,j=y.far),C.layers.mask=se.layers.mask|2,U.layers.mask=se.layers.mask|4,y.layers.mask=C.layers.mask|U.layers.mask;const H=se.parent,ce=y.cameras;Se(y,H);for(let pe=0;pe<ce.length;pe++)Se(ce[pe],H);ce.length===2?O(y,C,U):y.projectionMatrix.copy(C.projectionMatrix),B(se,y,H)};function B(se,_e,be){be===null?se.matrix.copy(_e.matrixWorld):(se.matrix.copy(be.matrixWorld),se.matrix.invert(),se.matrix.multiply(_e.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Oc*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Le=null;function ge(se,_e){if(u=_e.getViewerPose(c||o),g=_e,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let H=!1;be.length!==y.cameras.length&&(y.cameras.length=0,H=!0);for(let xe=0;xe<be.length;xe++){const A=be[xe];let D=null;if(p!==null)D=p.getViewport(A);else{const b=d.getViewSubImage(f,A);D=b.viewport,xe===0&&(e.setRenderTargetTextures(S,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(S))}let z=T[xe];z===void 0&&(z=new tn,z.layers.enable(xe),z.viewport=new At,T[xe]=z),z.matrix.fromArray(A.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(A.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(D.x,D.y,D.width,D.height),xe===0&&(y.matrix.copy(z.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),H===!0&&y.cameras.push(z)}const ce=r.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const xe=d.getDepthInformation(be[0]);xe&&xe.isValid&&xe.texture&&_.init(e,xe,r.renderState)}}for(let be=0;be<E.length;be++){const H=x[be],ce=E[be];H!==null&&ce!==void 0&&ce.update(H,_e,c||o)}Le&&Le(se,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),g=null}const Oe=new cm;Oe.setAnimationLoop(ge),this.setAnimationLoop=function(se){Le=se},this.dispose=function(){}}}const Yi=new ei,k1=new Ct;function N1(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,rm(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,S,E,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,S,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===cn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===cn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=e.get(h),E=S.envMap,x=S.envMapRotation;E&&(m.envMap.value=E,Yi.copy(x),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(k1.makeRotationFromEuler(Yi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,S,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=E*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===cn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const S=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function U1(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const x=E.program;i.uniformBlockBinding(S,x)}function c(S,E){let x=r[S.id];x===void 0&&(g(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",m));const L=E.program;i.updateUBOMapping(S,L);const P=e.render.frame;s[S.id]!==P&&(f(S),s[S.id]=P)}function u(S){const E=d();S.__bindingPointIndex=E;const x=t.createBuffer(),L=S.__size,P=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,L,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,x),x}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const E=r[S.id],x=S.uniforms,L=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let P=0,C=x.length;P<C;P++){const U=Array.isArray(x[P])?x[P]:[x[P]];for(let T=0,y=U.length;T<y;T++){const I=U[T];if(p(I,P,T,L)===!0){const j=I.__offset,G=Array.isArray(I.value)?I.value:[I.value];let fe=0;for(let Z=0;Z<G.length;Z++){const V=G[Z],X=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,j+fe,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,fe),fe+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,E,x,L){const P=S.value,C=E+"_"+x;if(L[C]===void 0)return typeof P=="number"||typeof P=="boolean"?L[C]=P:L[C]=P.clone(),!0;{const U=L[C];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return L[C]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function g(S){const E=S.uniforms;let x=0;const L=16;for(let C=0,U=E.length;C<U;C++){const T=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,I=T.length;y<I;y++){const j=T[y],G=Array.isArray(j.value)?j.value:[j.value];for(let fe=0,Z=G.length;fe<Z;fe++){const V=G[fe],X=_(V),O=x%L,Se=O%X.boundary,B=O+Se;x+=Se,B!==0&&L-B<X.storage&&(x+=L-B),j.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=x,x+=X.storage}}}const P=x%L;return P>0&&(x+=L-P),S.__size=x,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class F1{constructor(e={}){const{canvas:n=fE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const S=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let L=!1;this._outputColorSpace=Mn;let P=0,C=0,U=null,T=-1,y=null;const I=new At,j=new At;let G=null;const fe=new st(0);let Z=0,V=n.width,X=n.height,O=1,Se=null,B=null;const Le=new At(0,0,V,X),ge=new At(0,0,V,X);let Oe=!1;const se=new _u;let _e=!1,be=!1;const H=new Ct,ce=new Ct,pe=new J,xe=new At,A={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function z(){return U===null?O:1}let b=i;function te(w,W){return n.getContext(w,W)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lu}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),b===null){const W="webgl2";if(b=te(W,w),b===null)throw te(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ee,ae,ie,me,Y,M,v,N,K,le,Q,Me,ye,ke,Ve,ve,Ne,We,He,Re,F,ue,De,k;function Ee(){ee=new $A(b),ee.init(),ue=new C1(b,ee),ae=new BA(b,ee,e,ue),ie=new A1(b,ee),ae.reverseDepthBuffer&&f&&ie.buffers.depth.setReversed(!0),me=new KA(b),Y=new p1,M=new R1(b,ee,ie,Y,ae,ue,me),v=new VA(x),N=new XA(x),K=new nw(b),De=new OA(b,K),le=new qA(b,K,me,De),Q=new JA(b,le,K,me),He=new ZA(b,ae,M),ve=new HA(Y),Me=new h1(x,v,N,ee,ae,De,ve),ye=new N1(x,Y),ke=new g1,Ve=new S1(ee),We=new FA(x,v,N,ie,Q,p,l),Ne=new w1(x,Q,ae),k=new U1(b,me,ae,ie),Re=new zA(b,ee,me),F=new YA(b,ee,me),me.programs=Me.programs,x.capabilities=ae,x.extensions=ee,x.properties=Y,x.renderLists=ke,x.shadowMap=Ne,x.state=ie,x.info=me}Ee();const oe=new L1(x,b);this.xr=oe,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(V,X,!1))},this.getSize=function(w){return w.set(V,X)},this.setSize=function(w,W,ne=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,X=W,n.width=Math.floor(w*O),n.height=Math.floor(W*O),ne===!0&&(n.style.width=w+"px",n.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(V*O,X*O).floor()},this.setDrawingBufferSize=function(w,W,ne){V=w,X=W,O=ne,n.width=Math.floor(w*ne),n.height=Math.floor(W*ne),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Le)},this.setViewport=function(w,W,ne,re){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,W,ne,re),ie.viewport(I.copy(Le).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,W,ne,re){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,W,ne,re),ie.scissor(j.copy(ge).multiplyScalar(O).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(w){ie.setScissorTest(Oe=w)},this.setOpaqueSort=function(w){Se=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,ne=!0){let re=0;if(w){let $=!1;if(U!==null){const we=U.texture.format;$=we===pu||we===hu||we===fu}if($){const we=U.texture.type,Ie=we===Qn||we===ur||we===ks||we===Ns||we===uu||we===du,ze=We.getClearColor(),Be=We.getClearAlpha(),Je=ze.r,Ke=ze.g,je=ze.b;Ie?(g[0]=Je,g[1]=Ke,g[2]=je,g[3]=Be,b.clearBufferuiv(b.COLOR,0,g)):(_[0]=Je,_[1]=Ke,_[2]=je,_[3]=Be,b.clearBufferiv(b.COLOR,0,_))}else re|=b.COLOR_BUFFER_BIT}W&&(re|=b.DEPTH_BUFFER_BIT),ne&&(re|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),We.dispose(),ke.dispose(),Ve.dispose(),Y.dispose(),v.dispose(),N.dispose(),Q.dispose(),De.dispose(),k.dispose(),Me.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",bu),oe.removeEventListener("sessionend",Su),Bi.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=me.autoReset,W=Ne.enabled,ne=Ne.autoUpdate,re=Ne.needsUpdate,$=Ne.type;Ee(),me.autoReset=w,Ne.enabled=W,Ne.autoUpdate=ne,Ne.needsUpdate=re,Ne.type=$}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $e(w){const W=w.target;W.removeEventListener("dispose",$e),ot(W)}function ot(w){St(w),Y.remove(w)}function St(w){const W=Y.get(w).programs;W!==void 0&&(W.forEach(function(ne){Me.releaseProgram(ne)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,ne,re,$,we){W===null&&(W=A);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,ze=pm(w,W,ne,re,$);ie.setMaterial(re,Ie);let Be=ne.index,Je=1;if(re.wireframe===!0){if(Be=le.getWireframeAttribute(ne),Be===void 0)return;Je=2}const Ke=ne.drawRange,je=ne.attributes.position;let rt=Ke.start*Je,ht=(Ke.start+Ke.count)*Je;we!==null&&(rt=Math.max(rt,we.start*Je),ht=Math.min(ht,(we.start+we.count)*Je)),Be!==null?(rt=Math.max(rt,0),ht=Math.min(ht,Be.count)):je!=null&&(rt=Math.max(rt,0),ht=Math.min(ht,je.count));const Dt=ht-rt;if(Dt<0||Dt===1/0)return;De.setup($,re,ze,ne,Be);let Mt,at=Re;if(Be!==null&&(Mt=K.get(Be),at=F,at.setIndex(Mt)),$.isMesh)re.wireframe===!0?(ie.setLineWidth(re.wireframeLinewidth*z()),at.setMode(b.LINES)):at.setMode(b.TRIANGLES);else if($.isLine){let qe=re.linewidth;qe===void 0&&(qe=1),ie.setLineWidth(qe*z()),$.isLineSegments?at.setMode(b.LINES):$.isLineLoop?at.setMode(b.LINE_LOOP):at.setMode(b.LINE_STRIP)}else $.isPoints?at.setMode(b.POINTS):$.isSprite&&at.setMode(b.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Wo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))at.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const qe=$._multiDrawStarts,Ht=$._multiDrawCounts,pt=$._multiDrawCount,Tn=Be?K.get(Be).bytesPerElement:1,pr=Y.get(re).currentProgram.getUniforms();for(let dn=0;dn<pt;dn++)pr.setValue(b,"_gl_DrawID",dn),at.render(qe[dn]/Tn,Ht[dn])}else if($.isInstancedMesh)at.renderInstances(rt,Dt,$.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ht=Math.min(ne.instanceCount,qe);at.renderInstances(rt,Dt,Ht)}else at.render(rt,Dt)};function it(w,W,ne){w.transparent===!0&&w.side===mi&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,Js(w,W,ne),w.side=Oi,w.needsUpdate=!0,Js(w,W,ne),w.side=mi):Js(w,W,ne)}this.compile=function(w,W,ne=null){ne===null&&(ne=w),h=Ve.get(ne),h.init(W),E.push(h),ne.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(h.pushLight($),$.castShadow&&h.pushShadow($))}),w!==ne&&w.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(h.pushLight($),$.castShadow&&h.pushShadow($))}),h.setupLights();const re=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const we=$.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){const ze=we[Ie];it(ze,ne,$),re.add(ze)}else it(we,ne,$),re.add(we)}),h=E.pop(),re},this.compileAsync=function(w,W,ne=null){const re=this.compile(w,W,ne);return new Promise($=>{function we(){if(re.forEach(function(Ie){Y.get(Ie).currentProgram.isReady()&&re.delete(Ie)}),re.size===0){$(w);return}setTimeout(we,10)}ee.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Bt=null;function rn(w){Bt&&Bt(w)}function bu(){Bi.stop()}function Su(){Bi.start()}const Bi=new cm;Bi.setAnimationLoop(rn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(w){Bt=w,oe.setAnimationLoop(w),w===null?Bi.stop():Bi.start()},oe.addEventListener("sessionstart",bu),oe.addEventListener("sessionend",Su),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(W),W=oe.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,W,U),h=Ve.get(w,E.length),h.init(W),E.push(h),ce.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),se.setFromProjectionMatrix(ce),be=this.localClippingEnabled,_e=ve.init(this.clippingPlanes,be),m=ke.get(w,S.length),m.init(),S.push(m),oe.enabled===!0&&oe.isPresenting===!0){const we=x.xr.getDepthSensingMesh();we!==null&&ka(we,W,-1/0,x.sortObjects)}ka(w,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Se,B),D=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,D&&We.addToRenderList(m,w),this.info.render.frame++,_e===!0&&ve.beginShadows();const ne=h.state.shadowsArray;Ne.render(ne,w,W),_e===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=m.opaque,$=m.transmissive;if(h.setupLights(),W.isArrayCamera){const we=W.cameras;if($.length>0)for(let Ie=0,ze=we.length;Ie<ze;Ie++){const Be=we[Ie];Eu(re,$,w,Be)}D&&We.render(w);for(let Ie=0,ze=we.length;Ie<ze;Ie++){const Be=we[Ie];Mu(m,w,Be,Be.viewport)}}else $.length>0&&Eu(re,$,w,W),D&&We.render(w),Mu(m,w,W);U!==null&&C===0&&(M.updateMultisampleRenderTarget(U),M.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(x,w,W),De.resetDefaultState(),T=-1,y=null,E.pop(),E.length>0?(h=E[E.length-1],_e===!0&&ve.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ka(w,W,ne,re){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||se.intersectsSprite(w)){re&&xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const Ie=Q.update(w),ze=w.material;ze.visible&&m.push(w,Ie,ze,ne,xe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||se.intersectsObject(w))){const Ie=Q.update(w),ze=w.material;if(re&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),xe.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),xe.copy(Ie.boundingSphere.center)),xe.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(ze)){const Be=Ie.groups;for(let Je=0,Ke=Be.length;Je<Ke;Je++){const je=Be[Je],rt=ze[je.materialIndex];rt&&rt.visible&&m.push(w,Ie,rt,ne,xe.z,je)}}else ze.visible&&m.push(w,Ie,ze,ne,xe.z,null)}}const we=w.children;for(let Ie=0,ze=we.length;Ie<ze;Ie++)ka(we[Ie],W,ne,re)}function Mu(w,W,ne,re){const $=w.opaque,we=w.transmissive,Ie=w.transparent;h.setupLightsView(ne),_e===!0&&ve.setGlobalState(x.clippingPlanes,ne),re&&ie.viewport(I.copy(re)),$.length>0&&Zs($,W,ne),we.length>0&&Zs(we,W,ne),Ie.length>0&&Zs(Ie,W,ne),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Eu(w,W,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[re.id]===void 0&&(h.state.transmissionRenderTarget[re.id]=new dr(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Xs:Qn,minFilter:sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const we=h.state.transmissionRenderTarget[re.id],Ie=re.viewport||I;we.setSize(Ie.z*x.transmissionResolutionScale,Ie.w*x.transmissionResolutionScale);const ze=x.getRenderTarget();x.setRenderTarget(we),x.getClearColor(fe),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),D&&We.render(ne);const Be=x.toneMapping;x.toneMapping=Ui;const Je=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),h.setupLightsView(re),_e===!0&&ve.setGlobalState(x.clippingPlanes,re),Zs(w,ne,re),M.updateMultisampleRenderTarget(we),M.updateRenderTargetMipmap(we),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let je=0,rt=W.length;je<rt;je++){const ht=W[je],Dt=ht.object,Mt=ht.geometry,at=ht.material,qe=ht.group;if(at.side===mi&&Dt.layers.test(re.layers)){const Ht=at.side;at.side=cn,at.needsUpdate=!0,wu(Dt,ne,re,Mt,at,qe),at.side=Ht,at.needsUpdate=!0,Ke=!0}}Ke===!0&&(M.updateMultisampleRenderTarget(we),M.updateRenderTargetMipmap(we))}x.setRenderTarget(ze),x.setClearColor(fe,Z),Je!==void 0&&(re.viewport=Je),x.toneMapping=Be}function Zs(w,W,ne){const re=W.isScene===!0?W.overrideMaterial:null;for(let $=0,we=w.length;$<we;$++){const Ie=w[$],ze=Ie.object,Be=Ie.geometry,Je=Ie.group;let Ke=Ie.material;Ke.allowOverride===!0&&re!==null&&(Ke=re),ze.layers.test(ne.layers)&&wu(ze,W,ne,Be,Ke,Je)}}function wu(w,W,ne,re,$,we){w.onBeforeRender(x,W,ne,re,$,we),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(x,W,ne,re,w,we),$.transparent===!0&&$.side===mi&&$.forceSinglePass===!1?($.side=cn,$.needsUpdate=!0,x.renderBufferDirect(ne,W,re,$,w,we),$.side=Oi,$.needsUpdate=!0,x.renderBufferDirect(ne,W,re,$,w,we),$.side=mi):x.renderBufferDirect(ne,W,re,$,w,we),w.onAfterRender(x,W,ne,re,$,we)}function Js(w,W,ne){W.isScene!==!0&&(W=A);const re=Y.get(w),$=h.state.lights,we=h.state.shadowsArray,Ie=$.state.version,ze=Me.getParameters(w,$.state,we,W,ne),Be=Me.getProgramCacheKey(ze);let Je=re.programs;re.environment=w.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(w.isMeshStandardMaterial?N:v).get(w.envMap||re.environment),re.envMapRotation=re.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Je===void 0&&(w.addEventListener("dispose",$e),Je=new Map,re.programs=Je);let Ke=Je.get(Be);if(Ke!==void 0){if(re.currentProgram===Ke&&re.lightsStateVersion===Ie)return Au(w,ze),Ke}else ze.uniforms=Me.getUniforms(w),w.onBeforeCompile(ze,x),Ke=Me.acquireProgram(ze,Be),Je.set(Be,Ke),re.uniforms=ze.uniforms;const je=re.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=ve.uniform),Au(w,ze),re.needsLights=gm(w),re.lightsStateVersion=Ie,re.needsLights&&(je.ambientLightColor.value=$.state.ambient,je.lightProbe.value=$.state.probe,je.directionalLights.value=$.state.directional,je.directionalLightShadows.value=$.state.directionalShadow,je.spotLights.value=$.state.spot,je.spotLightShadows.value=$.state.spotShadow,je.rectAreaLights.value=$.state.rectArea,je.ltc_1.value=$.state.rectAreaLTC1,je.ltc_2.value=$.state.rectAreaLTC2,je.pointLights.value=$.state.point,je.pointLightShadows.value=$.state.pointShadow,je.hemisphereLights.value=$.state.hemi,je.directionalShadowMap.value=$.state.directionalShadowMap,je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,je.spotShadowMap.value=$.state.spotShadowMap,je.spotLightMatrix.value=$.state.spotLightMatrix,je.spotLightMap.value=$.state.spotLightMap,je.pointShadowMap.value=$.state.pointShadowMap,je.pointShadowMatrix.value=$.state.pointShadowMatrix),re.currentProgram=Ke,re.uniformsList=null,Ke}function Tu(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=jo.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Au(w,W){const ne=Y.get(w);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function pm(w,W,ne,re,$){W.isScene!==!0&&(W=A),M.resetTextureUnits();const we=W.fog,Ie=re.isMeshStandardMaterial?W.environment:null,ze=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:qr,Be=(re.isMeshStandardMaterial?N:v).get(re.envMap||Ie),Je=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ke=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),je=!!ne.morphAttributes.position,rt=!!ne.morphAttributes.normal,ht=!!ne.morphAttributes.color;let Dt=Ui;re.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Dt=x.toneMapping);const Mt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,at=Mt!==void 0?Mt.length:0,qe=Y.get(re),Ht=h.state.lights;if(_e===!0&&(be===!0||w!==y)){const Kt=w===y&&re.id===T;ve.setState(re,w,Kt)}let pt=!1;re.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ht.state.version||qe.outputColorSpace!==ze||$.isBatchedMesh&&qe.batching===!1||!$.isBatchedMesh&&qe.batching===!0||$.isBatchedMesh&&qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&qe.instancing===!1||!$.isInstancedMesh&&qe.instancing===!0||$.isSkinnedMesh&&qe.skinning===!1||!$.isSkinnedMesh&&qe.skinning===!0||$.isInstancedMesh&&qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&qe.instancingMorph===!1&&$.morphTexture!==null||qe.envMap!==Be||re.fog===!0&&qe.fog!==we||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ve.numPlanes||qe.numIntersection!==ve.numIntersection)||qe.vertexAlphas!==Je||qe.vertexTangents!==Ke||qe.morphTargets!==je||qe.morphNormals!==rt||qe.morphColors!==ht||qe.toneMapping!==Dt||qe.morphTargetsCount!==at)&&(pt=!0):(pt=!0,qe.__version=re.version);let Tn=qe.currentProgram;pt===!0&&(Tn=Js(re,W,$));let pr=!1,dn=!1,Qr=!1;const bt=Tn.getUniforms(),yn=qe.uniforms;if(ie.useProgram(Tn.program)&&(pr=!0,dn=!0,Qr=!0),re.id!==T&&(T=re.id,dn=!0),pr||y!==w){ie.buffers.depth.getReversed()?(H.copy(w.projectionMatrix),pE(H),mE(H),bt.setValue(b,"projectionMatrix",H)):bt.setValue(b,"projectionMatrix",w.projectionMatrix),bt.setValue(b,"viewMatrix",w.matrixWorldInverse);const sn=bt.map.cameraPosition;sn!==void 0&&sn.setValue(b,pe.setFromMatrixPosition(w.matrixWorld)),ae.logarithmicDepthBuffer&&bt.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&bt.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,dn=!0,Qr=!0)}if($.isSkinnedMesh){bt.setOptional(b,$,"bindMatrix"),bt.setOptional(b,$,"bindMatrixInverse");const Kt=$.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),bt.setValue(b,"boneTexture",Kt.boneTexture,M))}$.isBatchedMesh&&(bt.setOptional(b,$,"batchingTexture"),bt.setValue(b,"batchingTexture",$._matricesTexture,M),bt.setOptional(b,$,"batchingIdTexture"),bt.setValue(b,"batchingIdTexture",$._indirectTexture,M),bt.setOptional(b,$,"batchingColorTexture"),$._colorsTexture!==null&&bt.setValue(b,"batchingColorTexture",$._colorsTexture,M));const bn=ne.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&He.update($,ne,Tn),(dn||qe.receiveShadow!==$.receiveShadow)&&(qe.receiveShadow=$.receiveShadow,bt.setValue(b,"receiveShadow",$.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(yn.envMap.value=Be,yn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(yn.envMapIntensity.value=W.environmentIntensity),dn&&(bt.setValue(b,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&mm(yn,Qr),we&&re.fog===!0&&ye.refreshFogUniforms(yn,we),ye.refreshMaterialUniforms(yn,re,O,X,h.state.transmissionRenderTarget[w.id]),jo.upload(b,Tu(qe),yn,M)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(jo.upload(b,Tu(qe),yn,M),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&bt.setValue(b,"center",$.center),bt.setValue(b,"modelViewMatrix",$.modelViewMatrix),bt.setValue(b,"normalMatrix",$.normalMatrix),bt.setValue(b,"modelMatrix",$.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Kt=re.uniformsGroups;for(let sn=0,Na=Kt.length;sn<Na;sn++){const Hi=Kt[sn];k.update(Hi,Tn),k.bind(Hi,Tn)}}return Tn}function mm(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function gm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,W,ne){const re=Y.get(w);re.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Y.get(w.texture).__webglTexture=W,Y.get(w.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ne,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const ne=Y.get(w);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0};const _m=b.createFramebuffer();this.setRenderTarget=function(w,W=0,ne=0){U=w,P=W,C=ne;let re=!0,$=null,we=!1,Ie=!1;if(w){const Be=Y.get(w);if(Be.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(b.FRAMEBUFFER,null),re=!1;else if(Be.__webglFramebuffer===void 0)M.setupRenderTarget(w);else if(Be.__hasExternalTextures)M.rebindTextures(w,Y.get(w.texture).__webglTexture,Y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const je=w.depthTexture;if(Be.__boundDepthTexture!==je){if(je!==null&&Y.has(je)&&(w.width!==je.image.width||w.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(w)}}const Je=w.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ie=!0);const Ke=Y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ke[W])?$=Ke[W][ne]:$=Ke[W],we=!0):w.samples>0&&M.useMultisampledRTT(w)===!1?$=Y.get(w).__webglMultisampledFramebuffer:Array.isArray(Ke)?$=Ke[ne]:$=Ke,I.copy(w.viewport),j.copy(w.scissor),G=w.scissorTest}else I.copy(Le).multiplyScalar(O).floor(),j.copy(ge).multiplyScalar(O).floor(),G=Oe;if(ne!==0&&($=_m),ie.bindFramebuffer(b.FRAMEBUFFER,$)&&re&&ie.drawBuffers(w,$),ie.viewport(I),ie.scissor(j),ie.setScissorTest(G),we){const Be=Y.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,ne)}else if(Ie){const Be=Y.get(w.texture),Je=W;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Be.__webglTexture,ne,Je)}else if(w!==null&&ne!==0){const Be=Y.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Be.__webglTexture,ne)}T=-1},this.readRenderTargetPixels=function(w,W,ne,re,$,we,Ie){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){ie.bindFramebuffer(b.FRAMEBUFFER,ze);try{const Be=w.texture,Je=Be.format,Ke=Be.type;if(!ae.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-re&&ne>=0&&ne<=w.height-$&&b.readPixels(W,ne,re,$,ue.convert(Je),ue.convert(Ke),we)}finally{const Be=U!==null?Y.get(U).__webglFramebuffer:null;ie.bindFramebuffer(b.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,W,ne,re,$,we,Ie){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze)if(W>=0&&W<=w.width-re&&ne>=0&&ne<=w.height-$){ie.bindFramebuffer(b.FRAMEBUFFER,ze);const Be=w.texture,Je=Be.format,Ke=Be.type;if(!ae.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,je),b.bufferData(b.PIXEL_PACK_BUFFER,we.byteLength,b.STREAM_READ),b.readPixels(W,ne,re,$,ue.convert(Je),ue.convert(Ke),0);const rt=U!==null?Y.get(U).__webglFramebuffer:null;ie.bindFramebuffer(b.FRAMEBUFFER,rt);const ht=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await hE(b,ht,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,je),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,we),b.deleteBuffer(je),b.deleteSync(ht),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,ne=0){const re=Math.pow(2,-ne),$=Math.floor(w.image.width*re),we=Math.floor(w.image.height*re),Ie=W!==null?W.x:0,ze=W!==null?W.y:0;M.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,ne,0,0,Ie,ze,$,we),ie.unbindTexture()};const vm=b.createFramebuffer(),xm=b.createFramebuffer();this.copyTextureToTexture=function(w,W,ne=null,re=null,$=0,we=null){we===null&&($!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=$,$=0):we=0);let Ie,ze,Be,Je,Ke,je,rt,ht,Dt;const Mt=w.isCompressedTexture?w.mipmaps[we]:w.image;if(ne!==null)Ie=ne.max.x-ne.min.x,ze=ne.max.y-ne.min.y,Be=ne.isBox3?ne.max.z-ne.min.z:1,Je=ne.min.x,Ke=ne.min.y,je=ne.isBox3?ne.min.z:0;else{const bn=Math.pow(2,-$);Ie=Math.floor(Mt.width*bn),ze=Math.floor(Mt.height*bn),w.isDataArrayTexture?Be=Mt.depth:w.isData3DTexture?Be=Math.floor(Mt.depth*bn):Be=1,Je=0,Ke=0,je=0}re!==null?(rt=re.x,ht=re.y,Dt=re.z):(rt=0,ht=0,Dt=0);const at=ue.convert(W.format),qe=ue.convert(W.type);let Ht;W.isData3DTexture?(M.setTexture3D(W,0),Ht=b.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(M.setTexture2DArray(W,0),Ht=b.TEXTURE_2D_ARRAY):(M.setTexture2D(W,0),Ht=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,W.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,W.unpackAlignment);const pt=b.getParameter(b.UNPACK_ROW_LENGTH),Tn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),pr=b.getParameter(b.UNPACK_SKIP_PIXELS),dn=b.getParameter(b.UNPACK_SKIP_ROWS),Qr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Mt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Mt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Je),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ke),b.pixelStorei(b.UNPACK_SKIP_IMAGES,je);const bt=w.isDataArrayTexture||w.isData3DTexture,yn=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const bn=Y.get(w),Kt=Y.get(W),sn=Y.get(bn.__renderTarget),Na=Y.get(Kt.__renderTarget);ie.bindFramebuffer(b.READ_FRAMEBUFFER,sn.__webglFramebuffer),ie.bindFramebuffer(b.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let Hi=0;Hi<Be;Hi++)bt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Y.get(w).__webglTexture,$,je+Hi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Y.get(W).__webglTexture,we,Dt+Hi)),b.blitFramebuffer(Je,Ke,Ie,ze,rt,ht,Ie,ze,b.DEPTH_BUFFER_BIT,b.NEAREST);ie.bindFramebuffer(b.READ_FRAMEBUFFER,null),ie.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||Y.has(w)){const bn=Y.get(w),Kt=Y.get(W);ie.bindFramebuffer(b.READ_FRAMEBUFFER,vm),ie.bindFramebuffer(b.DRAW_FRAMEBUFFER,xm);for(let sn=0;sn<Be;sn++)bt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,bn.__webglTexture,$,je+sn):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,bn.__webglTexture,$),yn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Kt.__webglTexture,we,Dt+sn):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Kt.__webglTexture,we),$!==0?b.blitFramebuffer(Je,Ke,Ie,ze,rt,ht,Ie,ze,b.COLOR_BUFFER_BIT,b.NEAREST):yn?b.copyTexSubImage3D(Ht,we,rt,ht,Dt+sn,Je,Ke,Ie,ze):b.copyTexSubImage2D(Ht,we,rt,ht,Je,Ke,Ie,ze);ie.bindFramebuffer(b.READ_FRAMEBUFFER,null),ie.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else yn?w.isDataTexture||w.isData3DTexture?b.texSubImage3D(Ht,we,rt,ht,Dt,Ie,ze,Be,at,qe,Mt.data):W.isCompressedArrayTexture?b.compressedTexSubImage3D(Ht,we,rt,ht,Dt,Ie,ze,Be,at,Mt.data):b.texSubImage3D(Ht,we,rt,ht,Dt,Ie,ze,Be,at,qe,Mt):w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,we,rt,ht,Ie,ze,at,qe,Mt.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,we,rt,ht,Mt.width,Mt.height,at,Mt.data):b.texSubImage2D(b.TEXTURE_2D,we,rt,ht,Ie,ze,at,qe,Mt);b.pixelStorei(b.UNPACK_ROW_LENGTH,pt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Tn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,pr),b.pixelStorei(b.UNPACK_SKIP_ROWS,dn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Qr),we===0&&W.generateMipmaps&&b.generateMipmap(Ht),ie.unbindTexture()},this.copyTextureToTexture3D=function(w,W,ne=null,re=null,$=0){return Wo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,ne,re,$)},this.initRenderTarget=function(w){Y.get(w).__webglFramebuffer===void 0&&M.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?M.setTextureCube(w,0):w.isData3DTexture?M.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?M.setTexture2DArray(w,0):M.setTexture2D(w,0),ie.unbindTexture()},this.resetState=function(){P=0,C=0,U=null,ie.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}var O1=Object.defineProperty,z1=(t,e,n)=>e in t?O1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,B1=(t,e,n)=>(z1(t,e+"",n),n);class H1{constructor(){B1(this,"_listeners")}addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}var V1=Object.defineProperty,G1=(t,e,n)=>e in t?V1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Xe=(t,e,n)=>(G1(t,typeof e!="symbol"?e+"":e,n),n);const Po=new Jp,zf=new Di,W1=Math.cos(70*(Math.PI/180)),Bf=(t,e)=>(t%e+e)%e;class j1 extends H1{constructor(e,n){super(),Xe(this,"object"),Xe(this,"domElement"),Xe(this,"enabled",!0),Xe(this,"target",new J),Xe(this,"minDistance",0),Xe(this,"maxDistance",1/0),Xe(this,"minZoom",0),Xe(this,"maxZoom",1/0),Xe(this,"minPolarAngle",0),Xe(this,"maxPolarAngle",Math.PI),Xe(this,"minAzimuthAngle",-1/0),Xe(this,"maxAzimuthAngle",1/0),Xe(this,"enableDamping",!1),Xe(this,"dampingFactor",.05),Xe(this,"enableZoom",!0),Xe(this,"zoomSpeed",1),Xe(this,"enableRotate",!0),Xe(this,"rotateSpeed",1),Xe(this,"enablePan",!0),Xe(this,"panSpeed",1),Xe(this,"screenSpacePanning",!0),Xe(this,"keyPanSpeed",7),Xe(this,"zoomToCursor",!1),Xe(this,"autoRotate",!1),Xe(this,"autoRotateSpeed",2),Xe(this,"reverseOrbit",!1),Xe(this,"reverseHorizontalOrbit",!1),Xe(this,"reverseVerticalOrbit",!1),Xe(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),Xe(this,"mouseButtons",{LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN}),Xe(this,"touches",{ONE:_r.ROTATE,TWO:_r.DOLLY_PAN}),Xe(this,"target0"),Xe(this,"position0"),Xe(this,"zoom0"),Xe(this,"_domElementKeyEvents",null),Xe(this,"getPolarAngle"),Xe(this,"getAzimuthalAngle"),Xe(this,"setPolarAngle"),Xe(this,"setAzimuthalAngle"),Xe(this,"getDistance"),Xe(this,"getZoomScale"),Xe(this,"listenToKeyEvents"),Xe(this,"stopListenToKeyEvents"),Xe(this,"saveState"),Xe(this,"reset"),Xe(this,"update"),Xe(this,"connect"),Xe(this,"dispose"),Xe(this,"dollyIn"),Xe(this,"dollyOut"),Xe(this,"getScale"),Xe(this,"setScale"),this.object=e,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=F=>{let ue=Bf(F,2*Math.PI),De=u.phi;De<0&&(De+=2*Math.PI),ue<0&&(ue+=2*Math.PI);let k=Math.abs(ue-De);2*Math.PI-k<k&&(ue<De?ue+=2*Math.PI:De+=2*Math.PI),d.phi=ue-De,i.update()},this.setAzimuthalAngle=F=>{let ue=Bf(F,2*Math.PI),De=u.theta;De<0&&(De+=2*Math.PI),ue<0&&(ue+=2*Math.PI);let k=Math.abs(ue-De);2*Math.PI-k<k&&(ue<De?ue+=2*Math.PI:De+=2*Math.PI),d.theta=ue-De,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=F=>{F.addEventListener("keydown",ye),this._domElementKeyEvents=F},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ye),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(r),i.update(),l=a.NONE},this.update=(()=>{const F=new J,ue=new J(0,1,0),De=new fr().setFromUnitVectors(e.up,ue),k=De.clone().invert(),Ee=new J,oe=new fr,he=2*Math.PI;return function(){const Pe=i.object.position;De.setFromUnitVectors(e.up,ue),k.copy(De).invert(),F.copy(Pe).sub(i.target),F.applyQuaternion(De),u.setFromVector3(F),i.autoRotate&&l===a.NONE&&fe(j()),i.enableDamping?(u.theta+=d.theta*i.dampingFactor,u.phi+=d.phi*i.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let $e=i.minAzimuthAngle,ot=i.maxAzimuthAngle;isFinite($e)&&isFinite(ot)&&($e<-Math.PI?$e+=he:$e>Math.PI&&($e-=he),ot<-Math.PI?ot+=he:ot>Math.PI&&(ot-=he),$e<=ot?u.theta=Math.max($e,Math.min(ot,u.theta)):u.theta=u.theta>($e+ot)/2?Math.max($e,u.theta):Math.min(ot,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.zoomToCursor&&T||i.object.isOrthographicCamera?u.radius=Oe(u.radius):u.radius=Oe(u.radius*f),F.setFromSpherical(u),F.applyQuaternion(k),Pe.copy(i.target).add(F),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let St=!1;if(i.zoomToCursor&&T){let it=null;if(i.object instanceof tn&&i.object.isPerspectiveCamera){const Bt=F.length();it=Oe(Bt*f);const rn=Bt-it;i.object.position.addScaledVector(C,rn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Bt=new J(U.x,U.y,0);Bt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix(),St=!0;const rn=new J(U.x,U.y,0);rn.unproject(i.object),i.object.position.sub(rn).add(Bt),i.object.updateMatrixWorld(),it=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;it!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(it).add(i.object.position):(Po.origin.copy(i.object.position),Po.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Po.direction))<W1?e.lookAt(i.target):(zf.setFromNormalAndCoplanarPoint(i.object.up,i.target),Po.intersectPlane(zf,i.target))))}else i.object instanceof Ss&&i.object.isOrthographicCamera&&(St=f!==1,St&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix()));return f=1,T=!1,St||Ee.distanceToSquared(i.object.position)>c||8*(1-oe.dot(i.object.quaternion))>c?(i.dispatchEvent(r),Ee.copy(i.object.position),oe.copy(i.object.quaternion),St=!1,!0):!1}})(),this.connect=F=>{i.domElement=F,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",ve),i.domElement.addEventListener("pointerdown",v),i.domElement.addEventListener("pointercancel",K),i.domElement.addEventListener("wheel",Me)},this.dispose=()=>{var F,ue,De,k,Ee,oe;i.domElement&&(i.domElement.style.touchAction="auto"),(F=i.domElement)==null||F.removeEventListener("contextmenu",ve),(ue=i.domElement)==null||ue.removeEventListener("pointerdown",v),(De=i.domElement)==null||De.removeEventListener("pointercancel",K),(k=i.domElement)==null||k.removeEventListener("wheel",Me),(Ee=i.domElement)==null||Ee.ownerDocument.removeEventListener("pointermove",N),(oe=i.domElement)==null||oe.ownerDocument.removeEventListener("pointerup",K),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",ye)};const i=this,r={type:"change"},s={type:"start"},o={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const c=1e-6,u=new hf,d=new hf;let f=1;const p=new J,g=new et,_=new et,m=new et,h=new et,S=new et,E=new et,x=new et,L=new et,P=new et,C=new J,U=new et;let T=!1;const y=[],I={};function j(){return 2*Math.PI/60/60*i.autoRotateSpeed}function G(){return Math.pow(.95,i.zoomSpeed)}function fe(F){i.reverseOrbit||i.reverseHorizontalOrbit?d.theta+=F:d.theta-=F}function Z(F){i.reverseOrbit||i.reverseVerticalOrbit?d.phi+=F:d.phi-=F}const V=(()=>{const F=new J;return function(De,k){F.setFromMatrixColumn(k,0),F.multiplyScalar(-De),p.add(F)}})(),X=(()=>{const F=new J;return function(De,k){i.screenSpacePanning===!0?F.setFromMatrixColumn(k,1):(F.setFromMatrixColumn(k,0),F.crossVectors(i.object.up,F)),F.multiplyScalar(De),p.add(F)}})(),O=(()=>{const F=new J;return function(De,k){const Ee=i.domElement;if(Ee&&i.object instanceof tn&&i.object.isPerspectiveCamera){const oe=i.object.position;F.copy(oe).sub(i.target);let he=F.length();he*=Math.tan(i.object.fov/2*Math.PI/180),V(2*De*he/Ee.clientHeight,i.object.matrix),X(2*k*he/Ee.clientHeight,i.object.matrix)}else Ee&&i.object instanceof Ss&&i.object.isOrthographicCamera?(V(De*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),X(k*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Se(F){i.object instanceof tn&&i.object.isPerspectiveCamera||i.object instanceof Ss&&i.object.isOrthographicCamera?f=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(F){Se(f/F)}function Le(F){Se(f*F)}function ge(F){if(!i.zoomToCursor||!i.domElement)return;T=!0;const ue=i.domElement.getBoundingClientRect(),De=F.clientX-ue.left,k=F.clientY-ue.top,Ee=ue.width,oe=ue.height;U.x=De/Ee*2-1,U.y=-(k/oe)*2+1,C.set(U.x,U.y,1).unproject(i.object).sub(i.object.position).normalize()}function Oe(F){return Math.max(i.minDistance,Math.min(i.maxDistance,F))}function se(F){g.set(F.clientX,F.clientY)}function _e(F){ge(F),x.set(F.clientX,F.clientY)}function be(F){h.set(F.clientX,F.clientY)}function H(F){_.set(F.clientX,F.clientY),m.subVectors(_,g).multiplyScalar(i.rotateSpeed);const ue=i.domElement;ue&&(fe(2*Math.PI*m.x/ue.clientHeight),Z(2*Math.PI*m.y/ue.clientHeight)),g.copy(_),i.update()}function ce(F){L.set(F.clientX,F.clientY),P.subVectors(L,x),P.y>0?B(G()):P.y<0&&Le(G()),x.copy(L),i.update()}function pe(F){S.set(F.clientX,F.clientY),E.subVectors(S,h).multiplyScalar(i.panSpeed),O(E.x,E.y),h.copy(S),i.update()}function xe(F){ge(F),F.deltaY<0?Le(G()):F.deltaY>0&&B(G()),i.update()}function A(F){let ue=!1;switch(F.code){case i.keys.UP:O(0,i.keyPanSpeed),ue=!0;break;case i.keys.BOTTOM:O(0,-i.keyPanSpeed),ue=!0;break;case i.keys.LEFT:O(i.keyPanSpeed,0),ue=!0;break;case i.keys.RIGHT:O(-i.keyPanSpeed,0),ue=!0;break}ue&&(F.preventDefault(),i.update())}function D(){if(y.length==1)g.set(y[0].pageX,y[0].pageY);else{const F=.5*(y[0].pageX+y[1].pageX),ue=.5*(y[0].pageY+y[1].pageY);g.set(F,ue)}}function z(){if(y.length==1)h.set(y[0].pageX,y[0].pageY);else{const F=.5*(y[0].pageX+y[1].pageX),ue=.5*(y[0].pageY+y[1].pageY);h.set(F,ue)}}function b(){const F=y[0].pageX-y[1].pageX,ue=y[0].pageY-y[1].pageY,De=Math.sqrt(F*F+ue*ue);x.set(0,De)}function te(){i.enableZoom&&b(),i.enablePan&&z()}function ee(){i.enableZoom&&b(),i.enableRotate&&D()}function ae(F){if(y.length==1)_.set(F.pageX,F.pageY);else{const De=Re(F),k=.5*(F.pageX+De.x),Ee=.5*(F.pageY+De.y);_.set(k,Ee)}m.subVectors(_,g).multiplyScalar(i.rotateSpeed);const ue=i.domElement;ue&&(fe(2*Math.PI*m.x/ue.clientHeight),Z(2*Math.PI*m.y/ue.clientHeight)),g.copy(_)}function ie(F){if(y.length==1)S.set(F.pageX,F.pageY);else{const ue=Re(F),De=.5*(F.pageX+ue.x),k=.5*(F.pageY+ue.y);S.set(De,k)}E.subVectors(S,h).multiplyScalar(i.panSpeed),O(E.x,E.y),h.copy(S)}function me(F){const ue=Re(F),De=F.pageX-ue.x,k=F.pageY-ue.y,Ee=Math.sqrt(De*De+k*k);L.set(0,Ee),P.set(0,Math.pow(L.y/x.y,i.zoomSpeed)),B(P.y),x.copy(L)}function Y(F){i.enableZoom&&me(F),i.enablePan&&ie(F)}function M(F){i.enableZoom&&me(F),i.enableRotate&&ae(F)}function v(F){var ue,De;i.enabled!==!1&&(y.length===0&&((ue=i.domElement)==null||ue.ownerDocument.addEventListener("pointermove",N),(De=i.domElement)==null||De.ownerDocument.addEventListener("pointerup",K)),Ne(F),F.pointerType==="touch"?ke(F):le(F))}function N(F){i.enabled!==!1&&(F.pointerType==="touch"?Ve(F):Q(F))}function K(F){var ue,De,k;We(F),y.length===0&&((ue=i.domElement)==null||ue.releasePointerCapture(F.pointerId),(De=i.domElement)==null||De.ownerDocument.removeEventListener("pointermove",N),(k=i.domElement)==null||k.ownerDocument.removeEventListener("pointerup",K)),i.dispatchEvent(o),l=a.NONE}function le(F){let ue;switch(F.button){case 0:ue=i.mouseButtons.LEFT;break;case 1:ue=i.mouseButtons.MIDDLE;break;case 2:ue=i.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case gr.DOLLY:if(i.enableZoom===!1)return;_e(F),l=a.DOLLY;break;case gr.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(i.enablePan===!1)return;be(F),l=a.PAN}else{if(i.enableRotate===!1)return;se(F),l=a.ROTATE}break;case gr.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(i.enableRotate===!1)return;se(F),l=a.ROTATE}else{if(i.enablePan===!1)return;be(F),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(s)}function Q(F){if(i.enabled!==!1)switch(l){case a.ROTATE:if(i.enableRotate===!1)return;H(F);break;case a.DOLLY:if(i.enableZoom===!1)return;ce(F);break;case a.PAN:if(i.enablePan===!1)return;pe(F);break}}function Me(F){i.enabled===!1||i.enableZoom===!1||l!==a.NONE&&l!==a.ROTATE||(F.preventDefault(),i.dispatchEvent(s),xe(F),i.dispatchEvent(o))}function ye(F){i.enabled===!1||i.enablePan===!1||A(F)}function ke(F){switch(He(F),y.length){case 1:switch(i.touches.ONE){case _r.ROTATE:if(i.enableRotate===!1)return;D(),l=a.TOUCH_ROTATE;break;case _r.PAN:if(i.enablePan===!1)return;z(),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(i.touches.TWO){case _r.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;te(),l=a.TOUCH_DOLLY_PAN;break;case _r.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ee(),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(s)}function Ve(F){switch(He(F),l){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;ae(F),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;ie(F),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Y(F),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;M(F),i.update();break;default:l=a.NONE}}function ve(F){i.enabled!==!1&&F.preventDefault()}function Ne(F){y.push(F)}function We(F){delete I[F.pointerId];for(let ue=0;ue<y.length;ue++)if(y[ue].pointerId==F.pointerId){y.splice(ue,1);return}}function He(F){let ue=I[F.pointerId];ue===void 0&&(ue=new et,I[F.pointerId]=ue),ue.set(F.pageX,F.pageY)}function Re(F){const ue=F.pointerId===y[0].pointerId?y[1]:y[0];return I[ue.pointerId]}this.dollyIn=(F=G())=>{Le(F),i.update()},this.dollyOut=(F=G())=>{B(F),i.update()},this.getScale=()=>f,this.setScale=F=>{Se(F),i.update()},this.getZoomScale=()=>G(),n!==void 0&&this.connect(n),this.update()}}function X1(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}class $1 extends vu{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new YE(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){function n(c){const u=new DataView(c),d=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*d===u.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(i(g,u,_))return!1;return!0}function i(c,u,d){for(let f=0,p=c.length;f<p;f++)if(c[f]!==u.getUint8(d+f,!1))return!1;return!0}function r(c){const u=new DataView(c),d=u.getUint32(80,!0);let f,p,g,_=!1,m,h,S,E,x;for(let y=0;y<70;y++)u.getUint32(y,!1)==1129270351&&u.getUint8(y+4)==82&&u.getUint8(y+5)==61&&(_=!0,m=new Float32Array(d*3*3),h=u.getUint8(y+6)/255,S=u.getUint8(y+7)/255,E=u.getUint8(y+8)/255,x=u.getUint8(y+9)/255);const L=84,P=50,C=new yi,U=new Float32Array(d*3*3),T=new Float32Array(d*3*3);for(let y=0;y<d;y++){const I=L+y*P,j=u.getFloat32(I,!0),G=u.getFloat32(I+4,!0),fe=u.getFloat32(I+8,!0);if(_){const Z=u.getUint16(I+48,!0);(Z&32768)===0?(f=(Z&31)/31,p=(Z>>5&31)/31,g=(Z>>10&31)/31):(f=h,p=S,g=E)}for(let Z=1;Z<=3;Z++){const V=I+Z*12,X=y*3*3+(Z-1)*3;U[X]=u.getFloat32(V,!0),U[X+1]=u.getFloat32(V+4,!0),U[X+2]=u.getFloat32(V+8,!0),T[X]=j,T[X+1]=G,T[X+2]=fe,_&&(m[X]=f,m[X+1]=p,m[X+2]=g)}}return C.setAttribute("position",new xn(U,3)),C.setAttribute("normal",new xn(T,3)),_&&(C.setAttribute("color",new xn(m,3)),C.hasColors=!0,C.alpha=x),C}function s(c){const u=new yi,d=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g;let p=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,_=new RegExp("vertex"+g+g+g,"g"),m=new RegExp("normal"+g+g+g,"g"),h=[],S=[],E=new J;let x,L=0,P=0,C=0;for(;(x=d.exec(c))!==null;){P=C;const U=x[0];for(;(x=f.exec(U))!==null;){let I=0,j=0;const G=x[0];for(;(x=m.exec(G))!==null;)E.x=parseFloat(x[1]),E.y=parseFloat(x[2]),E.z=parseFloat(x[3]),j++;for(;(x=_.exec(G))!==null;)h.push(parseFloat(x[1]),parseFloat(x[2]),parseFloat(x[3])),S.push(E.x,E.y,E.z),I++,C++;j!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),I!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}const T=P,y=C-P;u.addGroup(T,y,L),L++}return u.setAttribute("position",new xi(h,3)),u.setAttribute("normal",new xi(S,3)),u}function o(c){return typeof c!="string"?X1(new Uint8Array(c)):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let d=0;d<c.length;d++)u[d]=c.charCodeAt(d)&255;return u.buffer||u}else return c}const l=a(e);return n(l)?r(l):s(o(e))}}const q1=Ot({__name:"StlViewer",props:{src:{}},setup(t){const e=t,n=gp({selector:"html",attribute:"data-theme",valueDark:"dark",valueLight:"light"}),i=wt(null);let r,s,o,a,l,c=null;On(()=>{i.value&&(u(),f(e.src),p(),window.addEventListener("resize",g),_.observe(i.value))}),Ma(()=>{var m;cancelAnimationFrame(l),window.removeEventListener("resize",g),_.disconnect(),a==null||a.dispose(),r==null||r.dispose(),c==null||c.geometry.dispose(),(m=c==null?void 0:c.material)==null||m.dispose()}),vn(()=>e.src,m=>{f(m)}),vn(n,m=>{d(m)},{immediate:!0});function u(){s=new BE,o=new tn(75,1,.1,1e3),o.position.set(80,80,80),r=new F1({antialias:!0}),r.setPixelRatio(window.devicePixelRatio),i.value&&i.value.appendChild(r.domElement),a=new j1(o,r.domElement),a.enableDamping=!0,a.dampingFactor=.05;const m=new QE(16777215,.6),h=new JE(16777215,1);h.position.set(5,5,5),s.add(m),s.add(h),d(n.value),g()}function d(m){s&&(m?(s.background=new st("#0b1224"),c&&c.material.color.setHex(16777215)):(s.background=new st("#f8fafc"),c&&c.material.color.setHex(4210752)))}function f(m){new $1().load(m,S=>{c&&(s.remove(c),c.geometry.dispose(),c.material.dispose());const E=n.value?16777215:9474192,x=new GE({color:E,metalness:.1,roughness:.7});c=new $n(S,x),c.geometry.center(),s.add(c)},void 0,S=>{console.error("Failed to load STL:",S)})}function p(){l=requestAnimationFrame(p),a.update(),r.render(s,o)}function g(){if(!i.value)return;const m=i.value.clientWidth,h=i.value.clientHeight;o.aspect=m/h,o.updateProjectionMatrix(),r.setSize(m,h)}const _=new ResizeObserver(g);return(m,h)=>(Ae(),Ue("div",{ref_key:"container",ref:i,class:"stl-container"},null,512))}}),Y1=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Hf=Y1(q1,[["__scopeId","data-v-e3134466"]]),K1={key:0,class:"bg-gray-50 dark:bg-gray-950 min-h-screen pt-16"},Z1={class:"bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-700/30 sticky top-0 z-20"},J1={class:"px-4 py-3 sm:py-4 flex justify-start"},Q1={class:"text-sm sm:text-base"},eC={class:"lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-[60px] z-10"},tC={class:"flex"},nC={class:"text-sm"},iC={class:"text-sm"},rC={class:"hidden lg:flex h-[calc(100vh-80px)]"},sC={class:"w-2/5 overflow-y-auto bg-white dark:bg-gray-900"},oC={class:"p-8"},aC={class:"mb-8"},lC={class:"text-3xl font-bold text-gray-900 dark:text-white mb-4"},cC={class:"flex flex-wrap gap-2 mb-6"},uC={class:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed"},dC={class:"mb-8"},fC={class:"text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center"},hC={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-6"},pC={key:0,class:"grid grid-cols-2 gap-4 mb-4"},mC={class:"text-sm text-gray-500 dark:text-gray-400"},gC={class:"font-medium text-gray-900 dark:text-white"},_C={class:"text-sm text-gray-500 dark:text-gray-400"},vC={class:"font-medium text-gray-900 dark:text-white"},xC={key:0,class:"mb-8"},yC={class:"text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center"},bC={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-6"},SC={class:"grid grid-cols-2 gap-4"},MC={class:"text-sm text-gray-500 dark:text-gray-400"},EC={class:"font-medium text-gray-900 dark:text-white"},wC={class:"text-sm text-gray-500 dark:text-gray-400"},TC={class:"font-medium text-gray-900 dark:text-white"},AC={class:"col-span-2"},RC={class:"text-sm text-gray-500 dark:text-gray-400"},CC={class:"font-medium text-gray-900 dark:text-white"},PC={class:"flex space-x-4"},DC=["href"],IC={class:"w-3/5 bg-gray-100 dark:bg-gray-800 relative"},LC={class:"absolute inset-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"},kC={class:"absolute top-4 right-4 z-10 flex space-x-2"},NC={class:"p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors",title:"Reset View"},UC={class:"p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors",title:"Fullscreen"},FC={class:"absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800"},OC={class:"text-center"},zC={class:"absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"},BC={class:"font-medium text-gray-900 dark:text-white mb-2"},HC={class:"text-sm text-gray-600 dark:text-gray-400 space-y-1"},VC={class:"flex items-center"},GC={class:"flex items-center"},WC={class:"flex items-center"},jC={class:"lg:hidden"},XC={class:"bg-white dark:bg-gray-900 min-h-[calc(100vh-120px)]"},$C={class:"p-4 sm:p-6"},qC={class:"mb-6"},YC={class:"flex flex-wrap gap-2 mb-4"},KC={class:"text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed"},ZC={class:"mb-6"},JC={class:"text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center"},QC={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6"},eP={key:0,class:"space-y-3 sm:space-y-4"},tP={class:"grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"},nP={class:"text-xs sm:text-sm text-gray-500 dark:text-gray-400"},iP={class:"font-medium text-gray-900 dark:text-white text-sm sm:text-base"},rP={class:"text-xs sm:text-sm text-gray-500 dark:text-gray-400"},sP={class:"font-medium text-gray-900 dark:text-white text-sm sm:text-base"},oP={key:0,class:"mb-6"},aP={class:"text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center"},lP={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6"},cP={class:"grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"},uP={class:"text-xs sm:text-sm text-gray-500 dark:text-gray-400"},dP={class:"font-medium text-gray-900 dark:text-white text-sm sm:text-base"},fP={class:"text-xs sm:text-sm text-gray-500 dark:text-gray-400"},hP={class:"font-medium text-gray-900 dark:text-white text-sm sm:text-base"},pP={class:"sm:col-span-2"},mP={class:"text-xs sm:text-sm text-gray-500 dark:text-gray-400"},gP={class:"font-medium text-gray-900 dark:text-white text-sm sm:text-base"},_P={class:"sticky bottom-0 bg-white dark:bg-gray-900 pt-4 pb-4 sm:pb-6 border-t border-gray-200 dark:border-gray-700 -mx-4 sm:-mx-6 px-4 sm:px-6 mt-8"},vP=["href"],xP={class:"bg-gray-100 dark:bg-gray-800 h-[calc(100vh-120px)] p-2 sm:p-4"},yP={class:"h-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden relative"},bP={class:"absolute top-2 sm:top-4 right-2 sm:right-4 z-10 flex space-x-1 sm:space-x-2"},SP={class:"p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors",title:"Reset View"},MP={class:"p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors",title:"Fullscreen"},EP={class:"absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800"},wP={class:"text-center"},TP={class:"absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg"},AP={class:"font-medium text-gray-900 dark:text-white mb-2 text-sm sm:text-base"},RP={class:"text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1"},CP={class:"flex items-center"},PP={class:"flex items-center"},DP={class:"flex items-center"},IP=Ot({__name:"ModelDetails",setup(t){const{t:e,currentLanguage:n}=ti(),{setActiveTab:i}=ou(),r=Ws(),s=tu(),o=wt("info"),a=ut(()=>{const c=parseInt(r.params.id);return hs.find(u=>u.id===c)}),l=()=>{i("models"),s.push("/projects?tab=models")};return On(()=>{a.value||l()}),(c,u)=>a.value?(Ae(),Ue("div",K1,[R("div",Z1,[R("div",J1,[R("button",{onClick:l,class:"inline-flex items-center text-sky-500 hover:text-sky-600 transition-colors"},[Te(q(Ge),{icon:"ph:arrow-left",class:"mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5"}),R("span",Q1,de(q(e).projects.details.backTo.models),1)])])]),R("div",eC,[R("div",tC,[R("button",{onClick:u[0]||(u[0]=d=>o.value="info"),class:ln(["flex-1 py-3 px-4 text-center font-medium transition-colors",o.value==="info"?"text-sky-600 dark:text-sky-400 border-b-2 border-sky-600 dark:border-sky-400 bg-sky-50 dark:bg-sky-900/20":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"])},[Te(q(Ge),{icon:"ph:info",class:"w-5 h-5 mx-auto mb-1"}),R("div",nC,de(q(e).projects.modelDetails.mobileNav[0]),1)],2),R("button",{onClick:u[1]||(u[1]=d=>o.value="viewer"),class:ln(["flex-1 py-3 px-4 text-center font-medium transition-colors",o.value==="viewer"?"text-sky-600 dark:text-sky-400 border-b-2 border-sky-600 dark:border-sky-400 bg-sky-50 dark:bg-sky-900/20":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"])},[Te(q(Ge),{icon:"ph:cube",class:"w-5 h-5 mx-auto mb-1"}),R("div",iC,de(q(e).projects.modelDetails.mobileNav[1]),1)],2)])]),R("div",rC,[R("div",sC,[R("div",oC,[R("div",aC,[R("h2",lC,de(a.value.title),1),R("div",cC,[(Ae(!0),Ue(ct,null,Pt(a.value.tags,d=>(Ae(),$t(au,{text:d,isSmall:!1},null,8,["text"]))),256))]),R("p",uC,de(a.value.description[q(n)]),1)]),R("div",dC,[R("h3",fC,[Te(q(Ge),{icon:"ph:ruler",class:"mr-2 w-5 h-5 text-sky-500"}),yt(" "+de(q(e).projects.modelDetails.specifications.title),1)]),R("div",hC,[a.value.dimensions?(Ae(),Ue("div",pC,[R("div",null,[R("div",mC,de(q(e).projects.modelDetails.specifications.dimensions),1),R("div",gC,de(a.value.dimensions.width)+" × "+de(a.value.dimensions.height)+" × "+de(a.value.dimensions.depth)+" "+de(a.value.dimensions.unit),1)]),R("div",null,[R("div",_C,de(q(e).projects.modelDetails.specifications.volume),1),R("div",vC,de((a.value.dimensions.width*a.value.dimensions.height*a.value.dimensions.depth).toFixed(2))+" "+de(a.value.dimensions.unit)+"³ ",1)])])):Tt("",!0)])]),a.value.printSettings?(Ae(),Ue("div",xC,[R("h3",yC,[Te(q(Ge),{icon:"ph:gear",class:"mr-2 w-5 h-5 text-sky-500"}),yt(" "+de(q(e).projects.modelDetails.printSettings.title),1)]),R("div",bC,[R("div",SC,[R("div",null,[R("div",MC,de(q(e).projects.modelDetails.printSettings.layerHeight),1),R("div",EC,de(a.value.printSettings.layerHeight)+"mm",1)]),R("div",null,[R("div",wC,de(q(e).projects.modelDetails.printSettings.infill),1),R("div",TC,de(a.value.printSettings.infill)+"%",1)]),R("div",AC,[R("div",RC,de(q(e).projects.modelDetails.printSettings.printTime),1),R("div",CC,de(a.value.printSettings.printTime),1)])])])])):Tt("",!0),R("div",PC,[R("a",{href:a.value.stlFile,download:"",class:"flex-1 bg-linear-to-r from-blue-500 to-sky-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 text-center font-medium"},[Te(q(Ge),{icon:"ph:download",class:"mr-2 w-5 h-5 inline"}),yt(" "+de(q(e).projects.modelDetails.download),1)],8,DC)])])]),R("div",IC,[R("div",LC,[R("div",kC,[R("button",NC,[Te(q(Ge),{icon:"ph:house",class:"w-5 h-5"})]),R("button",UC,[Te(q(Ge),{icon:"ph:arrows-out",class:"w-5 h-5"})])]),R("div",FC,[R("div",OC,[Te(q(Ge),{icon:"ph:cube",class:"w-12 h-12 text-gray-400 dark:text-gray-600 mb-4 animate-pulse"}),u[2]||(u[2]=R("div",{class:"text-gray-500 dark:text-gray-400"},"Loading 3D model...",-1))])]),Te(Hf,{src:a.value.stlFile,class:"w-full h-full"},null,8,["src"])]),R("div",zC,[R("h4",BC,de(q(e).projects.modelDetails.controls.title),1),R("div",HC,[R("div",VC,[Te(q(Ge),{icon:"ph:mouse",class:"w-4 h-4 mr-2"}),R("span",null,de(q(e).projects.modelDetails.controls.rotate),1)]),R("div",GC,[Te(q(Ge),{icon:"ph:mouse",class:"w-4 h-4 mr-2"}),R("span",null,de(q(e).projects.modelDetails.controls.move),1)]),R("div",WC,[Te(q(Ge),{icon:"ph:mouse",class:"w-4 h-4 mr-2"}),R("span",null,de(q(e).projects.modelDetails.controls.zoom),1)])])])])]),R("div",jC,[Nr(R("div",XC,[R("div",$C,[R("div",qC,[R("div",YC,[(Ae(!0),Ue(ct,null,Pt(a.value.tags,d=>(Ae(),Ue("span",{key:d,class:"text-xs sm:text-sm px-2 sm:px-3 py-1 bg-sky-500/10 text-sky-700 dark:text-sky-300 rounded-md"},de(d),1))),128))]),R("p",KC,de(a.value.description[q(n)]),1)]),R("div",ZC,[R("h3",JC,[Te(q(Ge),{icon:"ph:ruler",class:"mr-2 w-4 h-4 sm:w-5 sm:h-5 text-sky-500"}),yt(" "+de(q(e).projects.modelDetails.specifications.title),1)]),R("div",QC,[a.value.dimensions?(Ae(),Ue("div",eP,[R("div",tP,[R("div",null,[R("div",nP,de(q(e).projects.modelDetails.specifications.dimensions),1),R("div",iP,de(a.value.dimensions.width)+" × "+de(a.value.dimensions.height)+" × "+de(a.value.dimensions.depth)+" "+de(a.value.dimensions.unit),1)]),R("div",null,[R("div",rP,de(q(e).projects.modelDetails.specifications.volume),1),R("div",sP,de((a.value.dimensions.width*a.value.dimensions.height*a.value.dimensions.depth).toFixed(2))+" "+de(a.value.dimensions.unit)+"³ ",1)])])])):Tt("",!0)])]),a.value.printSettings?(Ae(),Ue("div",oP,[R("h3",aP,[Te(q(Ge),{icon:"ph:gear",class:"mr-2 w-4 h-4 sm:w-5 sm:h-5 text-sky-500"}),yt(" "+de(q(e).projects.modelDetails.printSettings.title),1)]),R("div",lP,[R("div",cP,[R("div",null,[R("div",uP,de(q(e).projects.modelDetails.printSettings.layerHeight),1),R("div",dP,de(a.value.printSettings.layerHeight)+"mm",1)]),R("div",null,[R("div",fP,de(q(e).projects.modelDetails.printSettings.infill),1),R("div",hP,de(a.value.printSettings.infill)+"%",1)]),R("div",pP,[R("div",mP,de(q(e).projects.modelDetails.printSettings.printTime),1),R("div",gP,de(a.value.printSettings.printTime),1)])])])])):Tt("",!0),R("div",_P,[R("a",{href:a.value.stlFile,download:"",class:"w-full bg-linear-to-r from-blue-500 to-sky-500 text-white px-6 py-3 sm:py-4 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 text-center font-medium flex items-center justify-center"},[Te(q(Ge),{icon:"ph:download",class:"mr-2 w-5 h-5"}),yt(" "+de(q(e).projects.modelDetails.download),1)],8,vP)])])],512),[[Ku,o.value==="info"]]),Nr(R("div",xP,[R("div",yP,[R("div",bP,[R("button",SP,[Te(q(Ge),{icon:"ph:house",class:"w-4 h-4 sm:w-5 sm:h-5"})]),R("button",MP,[Te(q(Ge),{icon:"ph:arrows-out",class:"w-4 h-4 sm:w-5 sm:h-5"})])]),R("div",EP,[R("div",wP,[Te(q(Ge),{icon:"ph:cube",class:"w-8 h-8 sm:w-12 sm:h-12 text-gray-400 dark:text-gray-600 mb-2 sm:mb-4 animate-pulse"}),u[3]||(u[3]=R("div",{class:"text-gray-500 dark:text-gray-400 text-sm sm:text-base"},"Loading 3D model...",-1))])]),Te(Hf,{src:a.value.stlFile,class:"w-full h-full"},null,8,["src"]),R("div",TP,[R("h4",AP,de(q(e).projects.modelDetails.touchControls.title),1),R("div",RP,[R("div",CP,[Te(q(Ge),{icon:"ph:hand",class:"w-3 h-3 sm:w-4 sm:h-4 mr-2"}),R("span",null,de(q(e).projects.modelDetails.touchControls.rotate),1)]),R("div",PP,[Te(q(Ge),{icon:"ph:arrows-out",class:"w-3 h-3 sm:w-4 sm:h-4 mr-2"}),R("span",null,de(q(e).projects.modelDetails.touchControls.zoom),1)]),R("div",DP,[Te(q(Ge),{icon:"ph:hand",class:"w-3 h-3 sm:w-4 sm:h-4 mr-2"}),R("span",null,de(q(e).projects.modelDetails.touchControls.move),1)])])])])],512),[[Ku,o.value==="viewer"]])])])):Tt("",!0)}}),LP={key:0,class:"bg-gray-50 dark:bg-gray-950 min-h-screen pt-16"},kP={class:"bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-700/30 sticky top-0 z-20"},NP={class:"container mx-auto px-4 py-3 sm:py-4"},UP={class:"flex items-center justify-between"},FP={class:"text-sm sm:text-base"},OP={class:"container mx-auto px-4 py-6 sm:py-8"},zP={class:"bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"},BP={class:"p-6 border-b border-gray-200/30 dark:border-gray-700/30"},HP={class:"pb-6 text-lg sm:text-xl font-bold text-center text-gray-900 dark:text-white mx-4 truncate"},VP={class:"flex flex-wrap justify-center gap-2 mb-4"},GP={key:0,class:"w-full h-80 sm:h-96 bg-gray-200/50 dark:bg-gray-700/50"},WP=["src","alt"],jP={key:1,class:"w-full h-80 sm:h-96 bg-linear-to-r from-sky-500 to-indigo-500 flex items-center justify-center"},XP={class:"p-6"},$P={class:"mb-8"},qP={class:"text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center"},YP={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-6"},KP={class:"text-gray-700 dark:text-gray-300 leading-relaxed"},ZP={class:"mb-8"},JP={class:"text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center"},QP={class:"bg-gray-50 dark:bg-gray-800 rounded-lg p-6"},eD={class:"space-y-3"},tD={class:"flex flex-col sm:flex-row gap-4"},nD=["href"],iD=["href"],rD=Ot({__name:"ProjectDetails",setup(t){const{t:e,currentLanguage:n}=ti(),{setActiveTab:i}=ou(),r=Ws(),s=tu(),o=ut(()=>{const l=parseInt(r.params.id);return Ur.find(c=>c.id===l)}),a=()=>{i("projects"),s.push("/projects?tab=projects")};return On(()=>{o.value||a()}),(l,c)=>o.value?(Ae(),Ue("div",LP,[R("div",kP,[R("div",NP,[R("div",UP,[R("button",{onClick:a,class:"inline-flex items-center text-sky-500 hover:text-sky-600 transition-colors"},[Te(q(Ge),{icon:"ph:arrow-left",class:"mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5"}),R("span",FP,de(q(e).projects.details.backTo.projects),1)]),c[0]||(c[0]=R("div",{class:"w-12"},null,-1))])])]),R("div",OP,[R("div",zP,[R("div",BP,[R("h1",HP,de(o.value.title),1),R("div",VP,[(Ae(!0),Ue(ct,null,Pt(o.value.tags,u=>(Ae(),$t(au,{text:u,isSmall:!1},null,8,["text"]))),256))])]),o.value.image?(Ae(),Ue("div",GP,[R("img",{src:o.value.image,alt:o.value.title,class:"w-full h-full object-cover"},null,8,WP)])):(Ae(),Ue("div",jP,[Te(q(Ge),{icon:"ph:code",class:"w-20 h-20 text-white opacity-80"})])),R("div",XP,[R("div",$P,[R("h2",qP,[Te(q(Ge),{icon:"ph:info",class:"mr-2 w-5 h-5 text-sky-500"}),yt(" "+de(q(e).projects.details.projectOverview),1)]),R("div",YP,[R("p",KP,de(o.value.description[q(n)]),1)])]),R("div",ZP,[R("h2",JP,[Te(q(Ge),{icon:"ph:list",class:"mr-2 w-5 h-5 text-sky-500"}),yt(" "+de(q(e).projects.details.features),1)]),R("div",QP,[R("ul",eD,[(Ae(!0),Ue(ct,null,Pt(o.value.features[q(n)],(u,d)=>(Ae(),Ue("li",{key:d,class:"flex items-start text-gray-700 dark:text-gray-300"},[Te(q(Ge),{icon:"ph:check-circle",class:"w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0"}),R("span",null,de(u),1)]))),128))])])]),R("div",tD,[o.value.demo?(Ae(),Ue("a",{key:0,href:o.value.demo,target:"_blank",rel:"noopener noreferrer",class:"flex-1 bg-linear-to-r from-blue-500 to-sky-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 text-center font-medium inline-flex items-center justify-center"},[Te(q(Ge),{icon:"ph:globe",class:"mr-2 w-5 h-5"}),yt(" "+de(q(e).projects.viewDemo),1)],8,nD)):Tt("",!0),o.value.github?(Ae(),Ue("a",{key:1,href:o.value.github,target:"_blank",rel:"noopener noreferrer",class:"flex-1 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 text-center font-medium inline-flex items-center justify-center"},[Te(q(Ge),{icon:"ph:github-logo",class:"mr-2 w-5 h-5"}),yt(" "+de(q(e).projects.viewSource),1)],8,iD)):Tt("",!0)])])])])])):Tt("",!0)}}),sD=[{path:"/",component:kS},{path:"/projects",component:MM},{path:"/projects/:id",component:rD},{path:"/models/:id",component:IP}],oD=r0({history:Uv("/"),routes:sD,scrollBehavior(t){if(t.hash)return{el:t.hash,behavior:"smooth"}}}),aD=wt("en"),yu=Y_(Dy);yu.provide("language",aD);yu.use(oD);yu.mount("#app");
