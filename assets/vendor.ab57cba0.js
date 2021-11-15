function vi(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Wu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uu=vi(Wu);function Ro(t){return!!t||t===""}function wi(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=we(s)?Vu(s):wi(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(we(t))return t;if(Ce(t))return t}}const Hu=/;(?![^(]*\))/g,$u=/:(.+)/;function Vu(t){const e={};return t.split(Hu).forEach(n=>{if(n){const s=n.split($u);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bi(t){let e="";if(we(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=bi(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _y=t=>t==null?"":U(t)||Ce(t)&&(t.toString===Oo||!$(t.toString))?JSON.stringify(t,No,2):String(t),No=(t,e)=>e&&e.__v_isRef?No(t,e.value):tn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:xo(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!U(e)&&!Mo(e)?String(e):e,ie={},en=[],Ye=()=>{},ju=()=>!1,zu=/^on[^a-z]/,ps=t=>zu.test(t),Ii=t=>t.startsWith("onUpdate:"),Ne=Object.assign,Ao=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ku=Object.prototype.hasOwnProperty,Q=(t,e)=>Ku.call(t,e),U=Array.isArray,tn=t=>_s(t)==="[object Map]",xo=t=>_s(t)==="[object Set]",$=t=>typeof t=="function",we=t=>typeof t=="string",Ti=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Po=t=>Ce(t)&&$(t.then)&&$(t.catch),Oo=Object.prototype.toString,_s=t=>Oo.call(t),qu=t=>_s(t).slice(8,-1),Mo=t=>_s(t)==="[object Object]",Si=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gs=vi(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ms=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gu=/-(\w)/g,nt=ms(t=>t.replace(Gu,(e,n)=>n?n.toUpperCase():"")),Yu=/\B([A-Z])/g,Nt=ms(t=>t.replace(Yu,"-$1").toLowerCase()),ys=ms(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ri=ms(t=>t?`on${ys(t)}`:""),Pn=(t,e)=>!Object.is(t,e),Cs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Es=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ni=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ko;const Qu=()=>ko||(ko=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let At;const vs=[];class Xu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&At&&(this.parent=At,this.index=(At.scopes||(At.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(vs.push(this),At=this)}off(){this.active&&(vs.pop(),At=vs[vs.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Ju(t,e){e=e||At,e&&e.active&&e.effects.push(t)}const Ai=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Do=t=>(t.w&gt)>0,Fo=t=>(t.n&gt)>0,Zu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gt},eh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Do(i)&&!Fo(i)?i.delete(t):e[n++]=i,i.w&=~gt,i.n&=~gt}e.length=n}},xi=new WeakMap;let On=0,gt=1;const Pi=30,Mn=[];let xt;const Pt=Symbol(""),Oi=Symbol("");class Mi{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],Ju(this,s)}run(){if(!this.active)return this.fn();if(!Mn.includes(this))try{return Mn.push(xt=this),th(),gt=1<<++On,On<=Pi?Zu(this):Lo(this),this.fn()}finally{On<=Pi&&eh(this),gt=1<<--On,Ot(),Mn.pop();const e=Mn.length;xt=e>0?Mn[e-1]:void 0}}stop(){this.active&&(Lo(this),this.onStop&&this.onStop(),this.active=!1)}}function Lo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let nn=!0;const ki=[];function sn(){ki.push(nn),nn=!1}function th(){ki.push(nn),nn=!0}function Ot(){const t=ki.pop();nn=t===void 0?!0:t}function Be(t,e,n){if(!Bo())return;let s=xi.get(t);s||xi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ai()),Wo(i)}function Bo(){return nn&&xt!==void 0}function Wo(t,e){let n=!1;On<=Pi?Fo(t)||(t.n|=gt,n=!Do(t)):n=!t.has(xt),n&&(t.add(xt),xt.deps.push(t))}function ct(t,e,n,s,i,r){const o=xi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&U(t))o.forEach((c,a)=>{(a==="length"||a>=s)&&l.push(c)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":U(t)?Si(n)&&l.push(o.get("length")):(l.push(o.get(Pt)),tn(t)&&l.push(o.get(Oi)));break;case"delete":U(t)||(l.push(o.get(Pt)),tn(t)&&l.push(o.get(Oi)));break;case"set":tn(t)&&l.push(o.get(Pt));break}if(l.length===1)l[0]&&Di(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);Di(Ai(c))}}function Di(t,e){for(const n of U(t)?t:[...t])(n!==xt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const nh=vi("__proto__,__v_isRef,__isVue"),Uo=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Ti)),sh=Fi(),ih=Fi(!1,!0),rh=Fi(!0),Ho=oh();function oh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=X(this);for(let r=0,o=this.length;r<o;r++)Be(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(X)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){sn();const s=X(this)[e].apply(this,n);return Ot(),s}}),t}function Fi(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&r===(t?e?wh:Qo:e?Yo:Go).get(s))return s;const o=U(s);if(!t&&o&&Q(Ho,i))return Reflect.get(Ho,i,r);const l=Reflect.get(s,i,r);return(Ti(i)?Uo.has(i):nh(i))||(t||Be(s,"get",i),e)?l:Pe(l)?!o||!Si(i)?l.value:l:Ce(l)?t?Xo(l):kn(l):l}}const lh=$o(),ch=$o(!0);function $o(t=!1){return function(n,s,i,r){let o=n[s];if(!t&&(i=X(i),o=X(o),!U(n)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const l=U(n)&&Si(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,i,r);return n===X(r)&&(l?Pn(i,o)&&ct(n,"set",s,i):ct(n,"add",s,i)),c}}function ah(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ct(t,"delete",e,void 0),s}function uh(t,e){const n=Reflect.has(t,e);return(!Ti(e)||!Uo.has(e))&&Be(t,"has",e),n}function hh(t){return Be(t,"iterate",U(t)?"length":Pt),Reflect.ownKeys(t)}const Vo={get:sh,set:lh,deleteProperty:ah,has:uh,ownKeys:hh},fh={get:rh,set(t,e){return!0},deleteProperty(t,e){return!0}},dh=Ne({},Vo,{get:ih,set:ch}),Li=t=>t,ws=t=>Reflect.getPrototypeOf(t);function bs(t,e,n=!1,s=!1){t=t.__v_raw;const i=X(t),r=X(e);e!==r&&!n&&Be(i,"get",e),!n&&Be(i,"get",r);const{has:o}=ws(i),l=s?Li:n?Ui:Dn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Is(t,e=!1){const n=this.__v_raw,s=X(n),i=X(t);return t!==i&&!e&&Be(s,"has",t),!e&&Be(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Ts(t,e=!1){return t=t.__v_raw,!e&&Be(X(t),"iterate",Pt),Reflect.get(t,"size",t)}function jo(t){t=X(t);const e=X(this);return ws(e).has.call(e,t)||(e.add(t),ct(e,"add",t,t)),this}function zo(t,e){e=X(e);const n=X(this),{has:s,get:i}=ws(n);let r=s.call(n,t);r||(t=X(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Pn(e,o)&&ct(n,"set",t,e):ct(n,"add",t,e),this}function Ko(t){const e=X(this),{has:n,get:s}=ws(e);let i=n.call(e,t);i||(t=X(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ct(e,"delete",t,void 0),r}function qo(){const t=X(this),e=t.size!==0,n=t.clear();return e&&ct(t,"clear",void 0,void 0),n}function Ss(t,e){return function(s,i){const r=this,o=r.__v_raw,l=X(o),c=e?Li:t?Ui:Dn;return!t&&Be(l,"iterate",Pt),o.forEach((a,u)=>s.call(i,c(a),c(u),r))}}function Rs(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=tn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?Li:e?Ui:Dn;return!e&&Be(r,"iterate",c?Oi:Pt),{next(){const{value:h,done:f}=a.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function mt(t){return function(...e){return t==="delete"?!1:this}}function ph(){const t={get(r){return bs(this,r)},get size(){return Ts(this)},has:Is,add:jo,set:zo,delete:Ko,clear:qo,forEach:Ss(!1,!1)},e={get(r){return bs(this,r,!1,!0)},get size(){return Ts(this)},has:Is,add:jo,set:zo,delete:Ko,clear:qo,forEach:Ss(!1,!0)},n={get(r){return bs(this,r,!0)},get size(){return Ts(this,!0)},has(r){return Is.call(this,r,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Ss(!0,!1)},s={get(r){return bs(this,r,!0,!0)},get size(){return Ts(this,!0)},has(r){return Is.call(this,r,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:Ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Rs(r,!1,!1),n[r]=Rs(r,!0,!1),e[r]=Rs(r,!1,!0),s[r]=Rs(r,!0,!0)}),[t,n,e,s]}const[_h,gh,mh,yh]=ph();function Bi(t,e){const n=e?t?yh:mh:t?gh:_h;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const Ch={get:Bi(!1,!1)},Eh={get:Bi(!1,!0)},vh={get:Bi(!0,!1)},Go=new WeakMap,Yo=new WeakMap,Qo=new WeakMap,wh=new WeakMap;function bh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ih(t){return t.__v_skip||!Object.isExtensible(t)?0:bh(qu(t))}function kn(t){return t&&t.__v_isReadonly?t:Wi(t,!1,Vo,Ch,Go)}function Th(t){return Wi(t,!1,dh,Eh,Yo)}function Xo(t){return Wi(t,!0,fh,vh,Qo)}function Wi(t,e,n,s,i){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Ih(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function rn(t){return Jo(t)?rn(t.__v_raw):!!(t&&t.__v_isReactive)}function Jo(t){return!!(t&&t.__v_isReadonly)}function Zo(t){return rn(t)||Jo(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function el(t){return Es(t,"__v_skip",!0),t}const Dn=t=>Ce(t)?kn(t):t,Ui=t=>Ce(t)?Xo(t):t;function tl(t){Bo()&&(t=X(t),t.dep||(t.dep=Ai()),Wo(t.dep))}function nl(t,e){t=X(t),t.dep&&Di(t.dep)}function Pe(t){return Boolean(t&&t.__v_isRef===!0)}function Sh(t){return sl(t,!1)}function Rh(t){return sl(t,!0)}function sl(t,e){return Pe(t)?t:new Nh(t,e)}class Nh{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:Dn(e)}get value(){return tl(this),this._value}set value(e){e=this._shallow?e:X(e),Pn(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Dn(e),nl(this))}}function Fn(t){return Pe(t)?t.value:t}const Ah={get:(t,e,n)=>Fn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function il(t){return rn(t)?t:new Proxy(t,Ah)}function gy(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=Ph(t,n);return e}class xh{constructor(e,n){this._object=e,this._key=n,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function Ph(t,e){const n=t[e];return Pe(n)?n:new xh(t,e)}class Oh{constructor(e,n,s){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Mi(e,()=>{this._dirty||(this._dirty=!0,nl(this))}),this.__v_isReadonly=s}get value(){const e=X(this);return tl(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function st(t,e){let n,s;const i=$(t);return i?(n=t,s=Ye):(n=t.get,s=t.set),new Oh(n,s,i||!s)}Promise.resolve();function Mh(t,e,...n){const s=t.vnode.props||ie;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ie;f?i=n.map(_=>_.trim()):h&&(i=n.map(Ni))}let l,c=s[l=Ri(e)]||s[l=Ri(nt(e))];!c&&r&&(c=s[l=Ri(Nt(e))]),c&&Ke(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ke(a,t,6,i)}}function rl(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!$(t)){const c=a=>{const u=rl(a,e,!0);u&&(l=!0,Ne(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(s.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):Ne(o,r),s.set(t,o),o)}function Hi(t,e){return!t||!ps(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Nt(e))||Q(t,e))}let We=null,Ns=null;function As(t){const e=We;return We=t,Ns=t&&t.type.__scopeId||null,e}function my(t){Ns=t}function yy(){Ns=null}function kh(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Pl(-1);const r=As(e),o=t(...i);return As(r),s._d&&Pl(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function $i(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:u,renderCache:h,data:f,setupState:_,ctx:m,inheritAttrs:N}=t;let R,x;const F=As(t);try{if(n.shapeFlag&4){const z=i||s;R=rt(u.call(z,z,h,r,_,f,m)),x=c}else{const z=e;R=rt(z.length>1?z(r,{attrs:c,slots:l,emit:a}):z(r,null)),x=e.props?c:Dh(c)}}catch(z){Bn.length=0,$s(z,t,1),R=ke(Qe)}let V=R;if(x&&N!==!1){const z=Object.keys(x),{shapeFlag:le}=V;z.length&&le&(1|6)&&(o&&z.some(Ii)&&(x=Fh(x,o)),V=on(V,x))}return n.dirs&&(V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),R=V,As(F),R}const Dh=t=>{let e;for(const n in t)(n==="class"||n==="style"||ps(n))&&((e||(e={}))[n]=t[n]);return e},Fh=(t,e)=>{const n={};for(const s in t)(!Ii(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Lh(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ol(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Hi(a,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ol(s,o,a):!0:!!o;return!1}function ol(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Hi(n,r))return!0}return!1}function Bh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Wh=t=>t.__isSuspense;function Uh(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Uf(t)}function xs(t,e){if(be){let n=be.provides;const s=be.parent&&be.parent.provides;s===n&&(n=be.provides=Object.create(s)),n[t]=e}}function yt(t,e,n=!1){const s=be||We;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&$(e)?e.call(s.proxy):e}}function Hh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qi(()=>{t.isMounted=!0}),fl(()=>{t.isUnmounting=!0}),t}const ze=[Function,Array],$h={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ze,onEnter:ze,onAfterEnter:ze,onEnterCancelled:ze,onBeforeLeave:ze,onLeave:ze,onAfterLeave:ze,onLeaveCancelled:ze,onBeforeAppear:ze,onAppear:ze,onAfterAppear:ze,onAppearCancelled:ze},setup(t,{slots:e}){const n=Ll(),s=Hh();let i;return()=>{const r=e.default&&al(e.default(),!0);if(!r||!r.length)return;const o=X(t),{mode:l}=o,c=r[0];if(s.isLeaving)return ji(c);const a=cl(c);if(!a)return ji(c);const u=Vi(a,o,s,n);zi(a,u);const h=n.subTree,f=h&&cl(h);let _=!1;const{getTransitionKey:m}=a.type;if(m){const N=m();i===void 0?i=N:N!==i&&(i=N,_=!0)}if(f&&f.type!==Qe&&(!Ft(a,f)||_)){const N=Vi(f,o,s,n);if(zi(f,N),l==="out-in")return s.isLeaving=!0,N.afterLeave=()=>{s.isLeaving=!1,n.update()},ji(c);l==="in-out"&&a.type!==Qe&&(N.delayLeave=(R,x,F)=>{const V=ll(s,f);V[String(f.key)]=f,R._leaveCb=()=>{x(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=F})}return c}}},Vh=$h;function ll(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Vi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:N,onAppear:R,onAfterAppear:x,onAppearCancelled:F}=e,V=String(t.key),z=ll(n,t),le=(W,ee)=>{W&&Ke(W,s,9,ee)},pe={mode:r,persisted:o,beforeEnter(W){let ee=l;if(!n.isMounted)if(i)ee=N||l;else return;W._leaveCb&&W._leaveCb(!0);const Z=z[V];Z&&Ft(t,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),le(ee,[W])},enter(W){let ee=c,Z=a,ve=u;if(!n.isMounted)if(i)ee=R||c,Z=x||a,ve=F||u;else return;let ge=!1;const xe=W._enterCb=_t=>{ge||(ge=!0,_t?le(ve,[W]):le(Z,[W]),pe.delayedLeave&&pe.delayedLeave(),W._enterCb=void 0)};ee?(ee(W,xe),ee.length<=1&&xe()):xe()},leave(W,ee){const Z=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return ee();le(h,[W]);let ve=!1;const ge=W._leaveCb=xe=>{ve||(ve=!0,ee(),xe?le(m,[W]):le(_,[W]),W._leaveCb=void 0,z[Z]===t&&delete z[Z])};z[Z]=t,f?(f(W,ge),f.length<=1&&ge()):ge()},clone(W){return Vi(W,e,n,s)}};return pe}function ji(t){if(Ps(t))return t=on(t),t.children=null,t}function cl(t){return Ps(t)?t.children?t.children[0]:void 0:t}function zi(t,e){t.shapeFlag&6&&t.component?zi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function al(t,e=!1){let n=[],s=0;for(let i=0;i<t.length;i++){const r=t[i];r.type===Ue?(r.patchFlag&128&&s++,n=n.concat(al(r.children,e))):(e||r.type!==Qe)&&n.push(r)}if(s>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function ul(t){return $(t)?{setup:t,name:t.name}:t}const Ki=t=>!!t.type.__asyncLoader,Ps=t=>t.type.__isKeepAlive;function jh(t,e){hl(t,"a",e)}function zh(t,e){hl(t,"da",e)}function hl(t,e,n=be){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}t()});if(Os(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ps(i.parent.vnode)&&Kh(s,e,n,i),i=i.parent}}function Kh(t,e,n,s){const i=Os(e,t,s,!0);Gi(()=>{Ao(s[e],i)},n)}function Os(t,e,n=be,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;sn(),ln(n);const l=Ke(e,n,t,o);return Lt(),Ot(),l});return s?i.unshift(r):i.push(r),r}}const at=t=>(e,n=be)=>(!Hs||t==="sp")&&Os(t,e,n),qh=at("bm"),qi=at("m"),Gh=at("bu"),Yh=at("u"),fl=at("bum"),Gi=at("um"),Qh=at("sp"),Xh=at("rtg"),Jh=at("rtc");function Zh(t,e=be){Os("ec",t,e)}let Yi=!0;function ef(t){const e=_l(t),n=t.proxy,s=t.ctx;Yi=!1,e.beforeCreate&&dl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:N,deactivated:R,beforeDestroy:x,beforeUnmount:F,destroyed:V,unmounted:z,render:le,renderTracked:pe,renderTriggered:W,errorCaptured:ee,serverPrefetch:Z,expose:ve,inheritAttrs:ge,components:xe,directives:_t,filters:Qt}=e;if(a&&tf(a,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ce in o){const te=o[ce];$(te)&&(s[ce]=te.bind(n))}if(i){const ce=i.call(n,n);Ce(ce)&&(t.data=kn(ce))}if(Yi=!0,r)for(const ce in r){const te=r[ce],Ve=$(te)?te.bind(n,n):$(te.get)?te.get.bind(n,n):Ye,Jt=!$(te)&&$(te.set)?te.set.bind(n):Ye,lt=st({get:Ve,set:Jt});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>lt.value,set:et=>lt.value=et})}if(l)for(const ce in l)pl(l[ce],s,n,ce);if(c){const ce=$(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(te=>{xs(te,ce[te])})}u&&dl(u,t,"c");function ye(ce,te){U(te)?te.forEach(Ve=>ce(Ve.bind(n))):te&&ce(te.bind(n))}if(ye(qh,h),ye(qi,f),ye(Gh,_),ye(Yh,m),ye(jh,N),ye(zh,R),ye(Zh,ee),ye(Jh,pe),ye(Xh,W),ye(fl,F),ye(Gi,z),ye(Qh,Z),U(ve))if(ve.length){const ce=t.exposed||(t.exposed={});ve.forEach(te=>{Object.defineProperty(ce,te,{get:()=>n[te],set:Ve=>n[te]=Ve})})}else t.exposed||(t.exposed={});le&&t.render===Ye&&(t.render=le),ge!=null&&(t.inheritAttrs=ge),xe&&(t.components=xe),_t&&(t.directives=_t)}function tf(t,e,n=Ye,s=!1){U(t)&&(t=Qi(t));for(const i in t){const r=t[i];let o;Ce(r)?"default"in r?o=yt(r.from||i,r.default,!0):o=yt(r.from||i):o=yt(r),Pe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function dl(t,e,n){Ke(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function pl(t,e,n,s){const i=s.includes(".")?Ql(n,s):()=>n[s];if(we(t)){const r=e[t];$(r)&&js(i,r)}else if($(t))js(i,t.bind(n));else if(Ce(t))if(U(t))t.forEach(r=>pl(r,e,n,s));else{const r=$(t.handler)?t.handler.bind(n):e[t.handler];$(r)&&js(i,r,t)}}function _l(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Ms(c,a,o,!0)),Ms(c,e,o)),r.set(e,c),c}function Ms(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ms(t,r,n,!0),i&&i.forEach(o=>Ms(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=nf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const nf={data:gl,props:Mt,emits:Mt,methods:Mt,computed:Mt,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Mt,directives:Mt,watch:rf,provide:gl,inject:sf};function gl(t,e){return e?t?function(){return Ne($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function sf(t,e){return Mt(Qi(t),Qi(e))}function Qi(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function Mt(t,e){return t?Ne(Ne(Object.create(null),t),e):e}function rf(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const s in e)n[s]=Oe(t[s],e[s]);return n}function of(t,e,n,s=!1){const i={},r={};Es(r,Bs,1),t.propsDefaults=Object.create(null),ml(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Th(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function lf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=X(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const _=e[f];if(c)if(Q(r,f))_!==r[f]&&(r[f]=_,a=!0);else{const m=nt(f);i[m]=Xi(c,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,a=!0)}}}else{ml(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!Q(e,h)&&((u=Nt(h))===h||!Q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Xi(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!Q(e,h))&&(delete r[h],a=!0)}a&&ct(t,"set","$attrs")}function ml(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(gs(c))continue;const a=e[c];let u;i&&Q(i,u=nt(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Hi(t.emitsOptions,c)||a!==s[c]&&(s[c]=a,o=!0)}if(r){const c=X(n),a=l||ie;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Xi(i,c,h,a[h],t,!Q(a,h))}}return o}function Xi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Q(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&$(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(ln(i),s=a[n]=c.call(null,e),Lt())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Nt(n))&&(s=!0))}return s}function yl(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!$(t)){const u=h=>{c=!0;const[f,_]=yl(h,e,!0);Ne(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return s.set(t,en),en;if(U(r))for(let u=0;u<r.length;u++){const h=nt(r[u]);Cl(h)&&(o[h]=ie)}else if(r)for(const u in r){const h=nt(u);if(Cl(h)){const f=r[u],_=o[h]=U(f)||$(f)?{type:f}:f;if(_){const m=wl(Boolean,_.type),N=wl(String,_.type);_[0]=m>-1,_[1]=N<0||m<N,(m>-1||Q(_,"default"))&&l.push(h)}}}const a=[o,l];return s.set(t,a),a}function Cl(t){return t[0]!=="$"}function El(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function vl(t,e){return El(t)===El(e)}function wl(t,e){return U(e)?e.findIndex(n=>vl(n,t)):$(e)&&vl(e,t)?0:-1}const bl=t=>t[0]==="_"||t==="$stable",Ji=t=>U(t)?t.map(rt):[rt(t)],cf=(t,e,n)=>{const s=kh((...i)=>Ji(e(...i)),n);return s._c=!1,s},Il=(t,e,n)=>{const s=t._ctx;for(const i in t){if(bl(i))continue;const r=t[i];if($(r))e[i]=cf(i,r,s);else if(r!=null){const o=Ji(r);e[i]=()=>o}}},Tl=(t,e)=>{const n=Ji(e);t.slots.default=()=>n},af=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),Es(e,"_",n)):Il(e,t.slots={})}else t.slots={},e&&Tl(t,e);Es(t.slots,Bs,1)},uf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ie;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ne(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Il(e,i)),o=e}else e&&(Tl(t,e),o={default:1});if(r)for(const l in i)!bl(l)&&!(l in o)&&delete i[l]};function Cy(t,e){const n=We;if(n===null)return t;const s=n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,c,a=ie]=e[r];$(o)&&(o={mounted:o,updated:o}),o.deep&&Bt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:c,modifiers:a})}return t}function kt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(sn(),Ke(c,n,8,[t.el,l,t,e]),Ot())}}function Sl(){return{app:null,config:{isNativeTag:ju,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hf=0;function ff(t,e){return function(s,i=null){i!=null&&!Ce(i)&&(i=null);const r=Sl(),o=new Set;let l=!1;const c=r.app={_uid:hf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Vf,get config(){return r.config},set config(a){},use(a,...u){return o.has(a)||(a&&$(a.install)?(o.add(a),a.install(c,...u)):$(a)&&(o.add(a),a(c,...u))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,u){return u?(r.components[a]=u,c):r.components[a]},directive(a,u){return u?(r.directives[a]=u,c):r.directives[a]},mount(a,u,h){if(!l){const f=ke(s,i);return f.appContext=r,u&&e?e(f,a):t(f,a,h),l=!0,c._container=a,a.__vue_app__=c,rr(f.component)||f.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,u){return r.provides[a]=u,c}};return c}}const Me=Uh;function df(t){return pf(t)}function pf(t,e){const n=Qu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=Ye,cloneNode:m,insertStaticContent:N}=t,R=(d,p,g,E=null,C=null,I=null,A=!1,w=null,b=!!p.dynamicChildren)=>{if(d===p)return;d&&!Ft(d,p)&&(E=M(d),je(d,C,I,!0),d=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:v,ref:k,shapeFlag:P}=p;switch(v){case nr:x(d,p,g,E);break;case Qe:F(d,p,g,E);break;case Ds:d==null&&V(p,g,E,A);break;case Ue:_t(d,p,g,E,C,I,A,w,b);break;default:P&1?pe(d,p,g,E,C,I,A,w,b):P&6?Qt(d,p,g,E,C,I,A,w,b):(P&64||P&128)&&v.process(d,p,g,E,C,I,A,w,b,ae)}k!=null&&C&&Zi(k,d&&d.ref,I,p||d,!p)},x=(d,p,g,E)=>{if(d==null)s(p.el=l(p.children),g,E);else{const C=p.el=d.el;p.children!==d.children&&a(C,p.children)}},F=(d,p,g,E)=>{d==null?s(p.el=c(p.children||""),g,E):p.el=d.el},V=(d,p,g,E)=>{[d.el,d.anchor]=N(d.children,p,g,E)},z=({el:d,anchor:p},g,E)=>{let C;for(;d&&d!==p;)C=f(d),s(d,g,E),d=C;s(p,g,E)},le=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},pe=(d,p,g,E,C,I,A,w,b)=>{A=A||p.type==="svg",d==null?W(p,g,E,C,I,A,w,b):ve(d,p,C,I,A,w,b)},W=(d,p,g,E,C,I,A,w)=>{let b,v;const{type:k,props:P,shapeFlag:D,transition:B,patchFlag:Y,dirs:_e}=d;if(d.el&&m!==void 0&&Y===-1)b=d.el=m(d.el);else{if(b=d.el=o(d.type,I,P&&P.is,P),D&8?u(b,d.children):D&16&&Z(d.children,b,null,E,C,I&&k!=="foreignObject",A,w),_e&&kt(d,null,E,"created"),P){for(const he in P)he!=="value"&&!gs(he)&&r(b,he,null,P[he],I,d.children,E,C,S);"value"in P&&r(b,"value",null,P.value),(v=P.onVnodeBeforeMount)&&it(v,E,d)}ee(b,d,d.scopeId,A,E)}_e&&kt(d,null,E,"beforeMount");const se=(!C||C&&!C.pendingBranch)&&B&&!B.persisted;se&&B.beforeEnter(b),s(b,p,g),((v=P&&P.onVnodeMounted)||se||_e)&&Me(()=>{v&&it(v,E,d),se&&B.enter(b),_e&&kt(d,null,E,"mounted")},C)},ee=(d,p,g,E,C)=>{if(g&&_(d,g),E)for(let I=0;I<E.length;I++)_(d,E[I]);if(C){let I=C.subTree;if(p===I){const A=C.vnode;ee(d,A,A.scopeId,A.slotScopeIds,C.parent)}}},Z=(d,p,g,E,C,I,A,w,b=0)=>{for(let v=b;v<d.length;v++){const k=d[v]=w?Ct(d[v]):rt(d[v]);R(null,k,p,g,E,C,I,A,w)}},ve=(d,p,g,E,C,I,A)=>{const w=p.el=d.el;let{patchFlag:b,dynamicChildren:v,dirs:k}=p;b|=d.patchFlag&16;const P=d.props||ie,D=p.props||ie;let B;(B=D.onVnodeBeforeUpdate)&&it(B,g,p,d),k&&kt(p,d,g,"beforeUpdate");const Y=C&&p.type!=="foreignObject";if(v?ge(d.dynamicChildren,v,w,g,E,Y,I):A||Ve(d,p,w,null,g,E,Y,I,!1),b>0){if(b&16)xe(w,p,P,D,g,E,C);else if(b&2&&P.class!==D.class&&r(w,"class",null,D.class,C),b&4&&r(w,"style",P.style,D.style,C),b&8){const _e=p.dynamicProps;for(let se=0;se<_e.length;se++){const he=_e[se],Ge=P[he],Zt=D[he];(Zt!==Ge||he==="value")&&r(w,he,Ge,Zt,C,d.children,g,E,S)}}b&1&&d.children!==p.children&&u(w,p.children)}else!A&&v==null&&xe(w,p,P,D,g,E,C);((B=D.onVnodeUpdated)||k)&&Me(()=>{B&&it(B,g,p,d),k&&kt(p,d,g,"updated")},E)},ge=(d,p,g,E,C,I,A)=>{for(let w=0;w<p.length;w++){const b=d[w],v=p[w],k=b.el&&(b.type===Ue||!Ft(b,v)||b.shapeFlag&(6|64))?h(b.el):g;R(b,v,k,null,E,C,I,A,!0)}},xe=(d,p,g,E,C,I,A)=>{if(g!==E){for(const w in E){if(gs(w))continue;const b=E[w],v=g[w];b!==v&&w!=="value"&&r(d,w,v,b,A,p.children,C,I,S)}if(g!==ie)for(const w in g)!gs(w)&&!(w in E)&&r(d,w,g[w],null,A,p.children,C,I,S);"value"in E&&r(d,"value",g.value,E.value)}},_t=(d,p,g,E,C,I,A,w,b)=>{const v=p.el=d?d.el:l(""),k=p.anchor=d?d.anchor:l("");let{patchFlag:P,dynamicChildren:D,slotScopeIds:B}=p;B&&(w=w?w.concat(B):B),d==null?(s(v,g,E),s(k,g,E),Z(p.children,g,k,C,I,A,w,b)):P>0&&P&64&&D&&d.dynamicChildren?(ge(d.dynamicChildren,D,g,C,I,A,w),(p.key!=null||C&&p===C.subTree)&&er(d,p,!0)):Ve(d,p,g,k,C,I,A,w,b)},Qt=(d,p,g,E,C,I,A,w,b)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?C.ctx.activate(p,g,E,A,b):Xt(p,g,E,C,I,A,b):ye(d,p,b)},Xt=(d,p,g,E,C,I,A)=>{const w=d.component=Af(d,E,C);if(Ps(d)&&(w.ctx.renderer=ae),xf(w),w.asyncDep){if(C&&C.registerDep(w,ce),!d.el){const b=w.subTree=ke(Qe);F(null,b,p,g)}return}ce(w,d,p,g,C,I,A)},ye=(d,p,g)=>{const E=p.component=d.component;if(Lh(d,p,g))if(E.asyncDep&&!E.asyncResolved){te(E,p,g);return}else E.next=p,Bf(E.update),E.update();else p.component=d.component,p.el=d.el,E.vnode=p},ce=(d,p,g,E,C,I,A)=>{const w=()=>{if(d.isMounted){let{next:k,bu:P,u:D,parent:B,vnode:Y}=d,_e=k,se;b.allowRecurse=!1,k?(k.el=Y.el,te(d,k,A)):k=Y,P&&Cs(P),(se=k.props&&k.props.onVnodeBeforeUpdate)&&it(se,B,k,Y),b.allowRecurse=!0;const he=$i(d),Ge=d.subTree;d.subTree=he,R(Ge,he,h(Ge.el),M(Ge),d,C,I),k.el=he.el,_e===null&&Bh(d,he.el),D&&Me(D,C),(se=k.props&&k.props.onVnodeUpdated)&&Me(()=>it(se,B,k,Y),C)}else{let k;const{el:P,props:D}=p,{bm:B,m:Y,parent:_e}=d,se=Ki(p);if(b.allowRecurse=!1,B&&Cs(B),!se&&(k=D&&D.onVnodeBeforeMount)&&it(k,_e,p),b.allowRecurse=!0,P&&H){const he=()=>{d.subTree=$i(d),H(P,d.subTree,d,C,null)};se?p.type.__asyncLoader().then(()=>!d.isUnmounted&&he()):he()}else{const he=d.subTree=$i(d);R(null,he,g,E,d,C,I),p.el=he.el}if(Y&&Me(Y,C),!se&&(k=D&&D.onVnodeMounted)){const he=p;Me(()=>it(k,_e,he),C)}p.shapeFlag&256&&d.a&&Me(d.a,C),d.isMounted=!0,p=g=E=null}},b=new Mi(w,()=>jl(d.update),d.scope),v=d.update=b.run.bind(b);v.id=d.uid,b.allowRecurse=v.allowRecurse=!0,v()},te=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,lf(d,p.props,E,g),uf(d,p.children,g),sn(),ar(void 0,d.update),Ot()},Ve=(d,p,g,E,C,I,A,w,b=!1)=>{const v=d&&d.children,k=d?d.shapeFlag:0,P=p.children,{patchFlag:D,shapeFlag:B}=p;if(D>0){if(D&128){lt(v,P,g,E,C,I,A,w,b);return}else if(D&256){Jt(v,P,g,E,C,I,A,w,b);return}}B&8?(k&16&&S(v,C,I),P!==v&&u(g,P)):k&16?B&16?lt(v,P,g,E,C,I,A,w,b):S(v,C,I,!0):(k&8&&u(g,""),B&16&&Z(P,g,E,C,I,A,w,b))},Jt=(d,p,g,E,C,I,A,w,b)=>{d=d||en,p=p||en;const v=d.length,k=p.length,P=Math.min(v,k);let D;for(D=0;D<P;D++){const B=p[D]=b?Ct(p[D]):rt(p[D]);R(d[D],B,g,null,C,I,A,w,b)}v>k?S(d,C,I,!0,!1,P):Z(p,g,E,C,I,A,w,b,P)},lt=(d,p,g,E,C,I,A,w,b)=>{let v=0;const k=p.length;let P=d.length-1,D=k-1;for(;v<=P&&v<=D;){const B=d[v],Y=p[v]=b?Ct(p[v]):rt(p[v]);if(Ft(B,Y))R(B,Y,g,null,C,I,A,w,b);else break;v++}for(;v<=P&&v<=D;){const B=d[P],Y=p[D]=b?Ct(p[D]):rt(p[D]);if(Ft(B,Y))R(B,Y,g,null,C,I,A,w,b);else break;P--,D--}if(v>P){if(v<=D){const B=D+1,Y=B<k?p[B].el:E;for(;v<=D;)R(null,p[v]=b?Ct(p[v]):rt(p[v]),g,Y,C,I,A,w,b),v++}}else if(v>D)for(;v<=P;)je(d[v],C,I,!0),v++;else{const B=v,Y=v,_e=new Map;for(v=Y;v<=D;v++){const Le=p[v]=b?Ct(p[v]):rt(p[v]);Le.key!=null&&_e.set(Le.key,v)}let se,he=0;const Ge=D-Y+1;let Zt=!1,Io=0;const xn=new Array(Ge);for(v=0;v<Ge;v++)xn[v]=0;for(v=B;v<=P;v++){const Le=d[v];if(he>=Ge){je(Le,C,I,!0);continue}let tt;if(Le.key!=null)tt=_e.get(Le.key);else for(se=Y;se<=D;se++)if(xn[se-Y]===0&&Ft(Le,p[se])){tt=se;break}tt===void 0?je(Le,C,I,!0):(xn[tt-Y]=v+1,tt>=Io?Io=tt:Zt=!0,R(Le,p[tt],g,null,C,I,A,w,b),he++)}const To=Zt?_f(xn):en;for(se=To.length-1,v=Ge-1;v>=0;v--){const Le=Y+v,tt=p[Le],So=Le+1<k?p[Le+1].el:E;xn[v]===0?R(null,tt,g,So,C,I,A,w,b):Zt&&(se<0||v!==To[se]?et(tt,g,So,2):se--)}}},et=(d,p,g,E,C=null)=>{const{el:I,type:A,transition:w,children:b,shapeFlag:v}=d;if(v&6){et(d.component.subTree,p,g,E);return}if(v&128){d.suspense.move(p,g,E);return}if(v&64){A.move(d,p,g,ae);return}if(A===Ue){s(I,p,g);for(let P=0;P<b.length;P++)et(b[P],p,g,E);s(d.anchor,p,g);return}if(A===Ds){z(d,p,g);return}if(E!==2&&v&1&&w)if(E===0)w.beforeEnter(I),s(I,p,g),Me(()=>w.enter(I),C);else{const{leave:P,delayLeave:D,afterLeave:B}=w,Y=()=>s(I,p,g),_e=()=>{P(I,()=>{Y(),B&&B()})};D?D(I,Y,_e):_e()}else s(I,p,g)},je=(d,p,g,E=!1,C=!1)=>{const{type:I,props:A,ref:w,children:b,dynamicChildren:v,shapeFlag:k,patchFlag:P,dirs:D}=d;if(w!=null&&Zi(w,null,g,d,!0),k&256){p.ctx.deactivate(d);return}const B=k&1&&D,Y=!Ki(d);let _e;if(Y&&(_e=A&&A.onVnodeBeforeUnmount)&&it(_e,p,d),k&6)O(d.component,g,E);else{if(k&128){d.suspense.unmount(g,E);return}B&&kt(d,null,p,"beforeUnmount"),k&64?d.type.remove(d,p,g,C,ae,E):v&&(I!==Ue||P>0&&P&64)?S(v,p,g,!1,!0):(I===Ue&&P&(128|256)||!C&&k&16)&&S(b,p,g),E&&Ei(d)}(Y&&(_e=A&&A.onVnodeUnmounted)||B)&&Me(()=>{_e&&it(_e,p,d),B&&kt(d,null,p,"unmounted")},g)},Ei=d=>{const{type:p,el:g,anchor:E,transition:C}=d;if(p===Ue){y(g,E);return}if(p===Ds){le(d);return}const I=()=>{i(g),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(d.shapeFlag&1&&C&&!C.persisted){const{leave:A,delayLeave:w}=C,b=()=>A(g,I);w?w(d.el,I,b):b()}else I()},y=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},O=(d,p,g)=>{const{bum:E,scope:C,update:I,subTree:A,um:w}=d;E&&Cs(E),C.stop(),I&&(I.active=!1,je(A,d,p,g)),w&&Me(w,p),Me(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},S=(d,p,g,E=!1,C=!1,I=0)=>{for(let A=I;A<d.length;A++)je(d[A],p,g,E,C)},M=d=>d.shapeFlag&6?M(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ne=(d,p,g)=>{d==null?p._vnode&&je(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,g),ql(),p._vnode=d},ae={p:R,um:je,m:et,r:Ei,mt:Xt,mc:Z,pc:Ve,pbc:ge,n:M,o:t};let K,H;return e&&([K,H]=e(ae)),{render:ne,hydrate:K,createApp:ff(ne,K)}}function Zi(t,e,n,s,i=!1){if(U(t)){t.forEach((f,_)=>Zi(f,e&&(U(e)?e[_]:e),n,s,i));return}if(Ki(s)&&!i)return;const r=s.shapeFlag&4?rr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===ie?l.refs={}:l.refs,h=l.setupState;if(a!=null&&a!==c&&(we(a)?(u[a]=null,Q(h,a)&&(h[a]=null)):Pe(a)&&(a.value=null)),we(c)){const f=()=>{u[c]=o,Q(h,c)&&(h[c]=o)};o?(f.id=-1,Me(f,n)):f()}else if(Pe(c)){const f=()=>{c.value=o};o?(f.id=-1,Me(f,n)):f()}else $(c)&&Et(c,l,12,[o,u])}function it(t,e,n,s=null){Ke(t,e,7,[n,s])}function er(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Ct(i[r]),l.el=o.el),n||er(o,l))}}function _f(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const gf=t=>t.__isTeleport,Ln=t=>t&&(t.disabled||t.disabled===""),Rl=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,tr=(t,e)=>{const n=t&&t.to;return we(n)?e?e(n):null:n},mf={__isTeleport:!0,process(t,e,n,s,i,r,o,l,c,a){const{mc:u,pc:h,pbc:f,o:{insert:_,querySelector:m,createText:N,createComment:R}}=a,x=Ln(e.props);let{shapeFlag:F,children:V,dynamicChildren:z}=e;if(t==null){const le=e.el=N(""),pe=e.anchor=N("");_(le,n,s),_(pe,n,s);const W=e.target=tr(e.props,m),ee=e.targetAnchor=N("");W&&(_(ee,W),o=o||Rl(W));const Z=(ve,ge)=>{F&16&&u(V,ve,ge,i,r,o,l,c)};x?Z(n,pe):W&&Z(W,ee)}else{e.el=t.el;const le=e.anchor=t.anchor,pe=e.target=t.target,W=e.targetAnchor=t.targetAnchor,ee=Ln(t.props),Z=ee?n:pe,ve=ee?le:W;if(o=o||Rl(pe),z?(f(t.dynamicChildren,z,Z,i,r,o,l),er(t,e,!0)):c||h(t,e,Z,ve,i,r,o,l,!1),x)ee||ks(e,n,le,a,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ge=e.target=tr(e.props,m);ge&&ks(e,ge,null,a,0)}else ee&&ks(e,pe,W,a,1)}},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:l,children:c,anchor:a,targetAnchor:u,target:h,props:f}=t;if(h&&r(u),(o||!Ln(f))&&(r(a),l&16))for(let _=0;_<c.length;_++){const m=c[_];i(m,e,n,!0,!!m.dynamicChildren)}},move:ks,hydrate:yf};function ks(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:a,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||Ln(u))&&c&16)for(let f=0;f<a.length;f++)i(a[f],e,n,2);h&&s(l,e,n)}function yf(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:l,querySelector:c}},a){const u=e.target=tr(e.props,c);if(u){const h=u._lpa||u.firstChild;e.shapeFlag&16&&(Ln(e.props)?(e.anchor=a(o(t),e,l(t),n,s,i,r),e.targetAnchor=h):(e.anchor=o(t),e.targetAnchor=a(h,e,u,n,s,i,r)),u._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const Ey=mf,Nl="components";function vy(t,e){return Ef(Nl,t,!0,e)||t}const Cf=Symbol();function Ef(t,e,n=!0,s=!1){const i=We||be;if(i){const r=i.type;if(t===Nl){const l=kf(r);if(l&&(l===e||l===nt(e)||l===ys(nt(e))))return r}const o=Al(i[t]||r[t],e)||Al(i.appContext[t],e);return!o&&s?r:o}}function Al(t,e){return t&&(t[e]||t[nt(e)]||t[ys(nt(e))])}const Ue=Symbol(void 0),nr=Symbol(void 0),Qe=Symbol(void 0),Ds=Symbol(void 0),Bn=[];let Dt=null;function xl(t=!1){Bn.push(Dt=t?null:[])}function vf(){Bn.pop(),Dt=Bn[Bn.length-1]||null}let Fs=1;function Pl(t){Fs+=t}function Ol(t){return t.dynamicChildren=Fs>0?Dt||en:null,vf(),Fs>0&&Dt&&Dt.push(t),t}function wy(t,e,n,s,i,r){return Ol(Dl(t,e,n,s,i,r,!0))}function Ml(t,e,n,s,i){return Ol(ke(t,e,n,s,i,!0))}function Ls(t){return t?t.__v_isVNode===!0:!1}function Ft(t,e){return t.type===e.type&&t.key===e.key}const Bs="__vInternal",kl=({key:t})=>t!=null?t:null,Ws=({ref:t})=>t!=null?we(t)||Pe(t)||$(t)?{i:We,r:t}:t:null;function Dl(t,e=null,n=null,s=0,i=null,r=t===Ue?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&kl(e),ref:e&&Ws(e),scopeId:Ns,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(sr(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=we(n)?8:16),Fs>0&&!o&&Dt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Dt.push(c),c}const ke=wf;function wf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Cf)&&(t=Qe),Ls(t)){const l=on(t,e,!0);return n&&sr(l,n),l}if(Df(t)&&(t=t.__vccOpts),e){e=bf(e);let{class:l,style:c}=e;l&&!we(l)&&(e.class=bi(l)),Ce(c)&&(Zo(c)&&!U(c)&&(c=Ne({},c)),e.style=wi(c))}const o=we(t)?1:Wh(t)?128:gf(t)?64:Ce(t)?4:$(t)?2:0;return Dl(t,e,n,s,i,o,r,!0)}function bf(t){return t?Zo(t)||Bs in t?Ne({},t):t:null}function on(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Tf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&kl(l),ref:e&&e.ref?n&&i?U(i)?i.concat(Ws(e)):[i,Ws(e)]:Ws(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&on(t.ssContent),ssFallback:t.ssFallback&&on(t.ssFallback),el:t.el,anchor:t.anchor}}function If(t=" ",e=0){return ke(nr,null,t,e)}function by(t="",e=!1){return e?(xl(),Ml(Qe,null,t)):ke(Qe,null,t)}function rt(t){return t==null||typeof t=="boolean"?ke(Qe):U(t)?ke(Ue,null,t.slice()):typeof t=="object"?Ct(t):ke(nr,null,String(t))}function Ct(t){return t.el===null||t.memo?t:on(t)}function sr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),sr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Bs in e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[If(e)]):n=8);t.children=e,t.shapeFlag|=n}function Tf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=bi([e.class,s.class]));else if(i==="style")e.style=wi([e.style,s.style]);else if(ps(i)){const r=e[i],o=s[i];r!==o&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Iy(t,e,n,s){let i;const r=n&&n[s];if(U(t)||we(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ce(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}function Ty(t,e,n={},s,i){if(We.isCE)return ke("slot",e==="default"?null:{name:e},s&&s());let r=t[e];r&&r._c&&(r._d=!1),xl();const o=r&&Fl(r(n)),l=Ml(Ue,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Fl(t){return t.some(e=>Ls(e)?!(e.type===Qe||e.type===Ue&&!Fl(e.children)):!0)?t:null}const ir=t=>t?Bl(t)?rr(t)||t.proxy:ir(t.parent):null,Us=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ir(t.parent),$root:t=>ir(t.root),$emit:t=>t.emit,$options:t=>_l(t),$forceUpdate:t=>()=>jl(t.update),$nextTick:t=>Vl.bind(t.proxy),$watch:t=>$f.bind(t)}),Sf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 0:return s[e];case 1:return i[e];case 3:return n[e];case 2:return r[e]}else{if(s!==ie&&Q(s,e))return o[e]=0,s[e];if(i!==ie&&Q(i,e))return o[e]=1,i[e];if((a=t.propsOptions[0])&&Q(a,e))return o[e]=2,r[e];if(n!==ie&&Q(n,e))return o[e]=3,n[e];Yi&&(o[e]=4)}}const u=Us[e];let h,f;if(u)return e==="$attrs"&&Be(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ie&&Q(n,e))return o[e]=3,n[e];if(f=c.config.globalProperties,Q(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;if(i!==ie&&Q(i,e))i[e]=n;else if(s!==ie&&Q(s,e))s[e]=n;else if(Q(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return n[o]!==void 0||t!==ie&&Q(t,o)||e!==ie&&Q(e,o)||(l=r[0])&&Q(l,o)||Q(s,o)||Q(Us,o)||Q(i.config.globalProperties,o)}},Rf=Sl();let Nf=0;function Af(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Rf,r={uid:Nf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,update:null,scope:new Xu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yl(s,i),emitsOptions:rl(s,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Mh.bind(null,r),t.ce&&t.ce(r),r}let be=null;const Ll=()=>be||We,ln=t=>{be=t,t.scope.on()},Lt=()=>{be&&be.scope.off(),be=null};function Bl(t){return t.vnode.shapeFlag&4}let Hs=!1;function xf(t,e=!1){Hs=e;const{props:n,children:s}=t.vnode,i=Bl(t);of(t,n,i,e),af(t,s);const r=i?Pf(t,e):void 0;return Hs=!1,r}function Pf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=el(new Proxy(t.ctx,Sf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Mf(t):null;ln(t),sn();const r=Et(s,t,0,[t.props,i]);if(Ot(),Lt(),Po(r)){if(r.then(Lt,Lt),e)return r.then(o=>{Wl(t,o,e)}).catch(o=>{$s(o,t,0)});t.asyncDep=r}else Wl(t,r,e)}else Hl(t,e)}function Wl(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=il(e)),Hl(t,n)}let Ul;function Hl(t,e,n){const s=t.type;if(!t.render){if(!e&&Ul&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=Ne(Ne({isCustomElement:r,delimiters:l},o),c);s.render=Ul(i,a)}}t.render=s.render||Ye}ln(t),sn(),ef(t),Ot(),Lt()}function Of(t){return new Proxy(t.attrs,{get(e,n){return Be(t,"get","$attrs"),e[n]}})}function Mf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Of(t))},slots:t.slots,emit:t.emit,expose:e}}function rr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(il(el(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Us)return Us[n](t)}}))}function kf(t){return $(t)&&t.displayName||t.name}function Df(t){return $(t)&&"__vccOpts"in t}function Et(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){$s(r,e,n)}return i}function Ke(t,e,n,s){if($(t)){const r=Et(t,e,n,s);return r&&Po(r)&&r.catch(o=>{$s(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ke(t[r],e,n,s));return i}function $s(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let u=0;u<a.length;u++)if(a[u](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Et(c,null,10,[t,o,l]);return}}Ff(t,n,i,s)}function Ff(t,e,n,s=!0){console.error(t)}let Vs=!1,or=!1;const He=[];let ut=0;const Wn=[];let Un=null,cn=0;const Hn=[];let vt=null,an=0;const $l=Promise.resolve();let lr=null,cr=null;function Vl(t){const e=lr||$l;return t?e.then(this?t.bind(this):t):e}function Lf(t){let e=ut+1,n=He.length;for(;e<n;){const s=e+n>>>1;$n(He[s])<t?e=s+1:n=s}return e}function jl(t){(!He.length||!He.includes(t,Vs&&t.allowRecurse?ut+1:ut))&&t!==cr&&(t.id==null?He.push(t):He.splice(Lf(t.id),0,t),zl())}function zl(){!Vs&&!or&&(or=!0,lr=$l.then(Gl))}function Bf(t){const e=He.indexOf(t);e>ut&&He.splice(e,1)}function Kl(t,e,n,s){U(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),zl()}function Wf(t){Kl(t,Un,Wn,cn)}function Uf(t){Kl(t,vt,Hn,an)}function ar(t,e=null){if(Wn.length){for(cr=e,Un=[...new Set(Wn)],Wn.length=0,cn=0;cn<Un.length;cn++)Un[cn]();Un=null,cn=0,cr=null,ar(t,e)}}function ql(t){if(Hn.length){const e=[...new Set(Hn)];if(Hn.length=0,vt){vt.push(...e);return}for(vt=e,vt.sort((n,s)=>$n(n)-$n(s)),an=0;an<vt.length;an++)vt[an]();vt=null,an=0}}const $n=t=>t.id==null?1/0:t.id;function Gl(t){or=!1,Vs=!0,ar(t),He.sort((n,s)=>$n(n)-$n(s));const e=Ye;try{for(ut=0;ut<He.length;ut++){const n=He[ut];n&&n.active!==!1&&Et(n,null,14)}}finally{ut=0,He.length=0,ql(),Vs=!1,lr=null,(He.length||Wn.length||Hn.length)&&Gl(t)}}function Hf(t,e){return ur(t,null,{flush:"post"})}const Yl={};function js(t,e,n){return ur(t,e,n)}function ur(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ie){const l=be;let c,a=!1,u=!1;if(Pe(t)?(c=()=>t.value,a=!!t._shallow):rn(t)?(c=()=>t,s=!0):U(t)?(u=!0,a=t.some(rn),c=()=>t.map(x=>{if(Pe(x))return x.value;if(rn(x))return Bt(x);if($(x))return Et(x,l,2)})):$(t)?e?c=()=>Et(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ke(t,l,3,[f])}:c=Ye,e&&s){const x=c;c=()=>Bt(x())}let h,f=x=>{h=R.onStop=()=>{Et(x,l,4)}};if(Hs)return f=Ye,e?n&&Ke(e,l,3,[c(),u?[]:void 0,f]):c(),Ye;let _=u?[]:Yl;const m=()=>{if(!!R.active)if(e){const x=R.run();(s||a||(u?x.some((F,V)=>Pn(F,_[V])):Pn(x,_)))&&(h&&h(),Ke(e,l,3,[x,_===Yl?void 0:_,f]),_=x)}else R.run()};m.allowRecurse=!!e;let N;i==="sync"?N=m:i==="post"?N=()=>Me(m,l&&l.suspense):N=()=>{!l||l.isMounted?Wf(m):m()};const R=new Mi(c,N);return e?n?m():_=R.run():i==="post"?Me(R.run.bind(R),l&&l.suspense):R.run(),()=>{R.stop(),l&&l.scope&&Ao(l.scope.effects,R)}}function $f(t,e,n){const s=this.proxy,i=we(t)?t.includes(".")?Ql(s,t):()=>s[t]:t.bind(s,s);let r;$(e)?r=e:(r=e.handler,n=e);const o=be;ln(this);const l=ur(i,r.bind(s),n);return o?ln(o):Lt(),l}function Ql(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Bt(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))Bt(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)Bt(t[n],e);else if(xo(t)||tn(t))t.forEach(n=>{Bt(n,e)});else if(Mo(t))for(const n in t)Bt(t[n],e);return t}function Xl(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!U(e)?Ls(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ls(n)&&(n=[n]),ke(t,e,n))}const Vf="3.2.21",jf="http://www.w3.org/2000/svg",un=typeof document!="undefined"?document:null,Jl=new Map,zf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?un.createElementNS(jf,t):un.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>un.createTextNode(t),createComment:t=>un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s){const i=n?n.previousSibling:e.lastChild;let r=Jl.get(t);if(!r){const o=un.createElement("template");if(o.innerHTML=s?`<svg>${t}</svg>`:t,r=o.content,s){const l=r.firstChild;for(;l.firstChild;)r.appendChild(l.firstChild);r.removeChild(l)}Jl.set(t,r)}return e.insertBefore(r.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Kf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function qf(t,e,n){const s=t.style,i=we(n);if(n&&!i){for(const r in n)hr(s,r,n[r]);if(e&&!we(e))for(const r in e)n[r]==null&&hr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Zl=/\s*!important$/;function hr(t,e,n){if(U(n))n.forEach(s=>hr(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=Gf(t,e);Zl.test(n)?t.setProperty(Nt(s),n.replace(Zl,""),"important"):t[s]=n}}const ec=["Webkit","Moz","ms"],fr={};function Gf(t,e){const n=fr[e];if(n)return n;let s=nt(e);if(s!=="filter"&&s in t)return fr[e]=s;s=ys(s);for(let i=0;i<ec.length;i++){const r=ec[i]+s;if(r in t)return fr[e]=r}return e}const tc="http://www.w3.org/1999/xlink";function Yf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(tc,e.slice(6,e.length)):t.setAttributeNS(tc,e,n);else{const r=Uu(e);n==null||r&&!Ro(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Qf(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const l=n==null?"":n;t.value!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const l=typeof t[e];if(l==="boolean"){t[e]=Ro(n);return}else if(n==null&&l==="string"){t[e]="",t.removeAttribute(e);return}else if(l==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let zs=Date.now,nc=!1;if(typeof window!="undefined"){zs()>document.createEvent("Event").timeStamp&&(zs=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);nc=!!(t&&Number(t[1])<=53)}let dr=0;const Xf=Promise.resolve(),Jf=()=>{dr=0},Zf=()=>dr||(Xf.then(Jf),dr=zs());function hn(t,e,n,s){t.addEventListener(e,n,s)}function ed(t,e,n,s){t.removeEventListener(e,n,s)}function td(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=nd(e);if(s){const a=r[e]=sd(s,i);hn(t,l,a,c)}else o&&(ed(t,l,o,c),r[e]=void 0)}}const sc=/(?:Once|Passive|Capture)$/;function nd(t){let e;if(sc.test(t)){e={};let n;for(;n=t.match(sc);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Nt(t.slice(2)),e]}function sd(t,e){const n=s=>{const i=s.timeStamp||zs();(nc||i>=n.attached-1)&&Ke(id(s,n.value),e,5,[s])};return n.value=t,n.attached=Zf(),n}function id(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s(i))}else return e}const ic=/^on[a-z]/,rd=(t,e,n,s,i=!1,r,o,l,c)=>{e==="class"?Kf(t,s,i):e==="style"?qf(t,n,s):ps(e)?Ii(e)||td(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):od(t,e,s,i))?Qf(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Yf(t,e,s,i))};function od(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ic.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ic.test(e)&&we(n)?!1:e in t}function Sy(t){const e=Ll();if(!e)return;const n=()=>pr(e.subTree,t(e.proxy));Hf(n),qi(()=>{const s=new MutationObserver(n);s.observe(e.subTree.el.parentNode,{childList:!0}),Gi(()=>s.disconnect())})}function pr(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{pr(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)rc(t.el,e);else if(t.type===Ue)t.children.forEach(n=>pr(n,e));else if(t.type===Ds){let{el:n,anchor:s}=t;for(;n&&(rc(n,e),n!==s);)n=n.nextSibling}}function rc(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const ld={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Vh.props;const oc=t=>{const e=t.props["onUpdate:modelValue"];return U(e)?n=>Cs(e,n):e};function cd(t){t.target.composing=!0}function lc(t){const e=t.target;e.composing&&(e.composing=!1,ad(e,"input"))}function ad(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Ry={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=oc(i);const r=s||i.props&&i.props.type==="number";hn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n?l=l.trim():r&&(l=Ni(l)),t._assign(l)}),n&&hn(t,"change",()=>{t.value=t.value.trim()}),e||(hn(t,"compositionstart",cd),hn(t,"compositionend",lc),hn(t,"change",lc))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=oc(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ni(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},ud=["ctrl","shift","alt","meta"],hd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ud.some(n=>t[`${n}Key`]&&!e.includes(n))},Ny=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=hd[e[i]];if(r&&r(n,e))return}return t(n,...s)},fd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ay=(t,e)=>n=>{if(!("key"in n))return;const s=Nt(n.key);if(e.some(i=>i===s||fd[i]===s))return t(n)},xy={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Vn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Vn(t,!0),s.enter(t)):s.leave(t,()=>{Vn(t,!1)}):Vn(t,e))},beforeUnmount(t,{value:e}){Vn(t,e)}};function Vn(t,e){t.style.display=e?t._vod:"none"}const dd=Ne({patchProp:rd},zf);let cc;function pd(){return cc||(cc=df(dd))}const Py=(...t)=>{const e=pd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=_d(s);if(!i)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function _d(t){return we(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw fn(e)},fn=function(t){return new Error("Firebase Database ("+ac.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|a>>6,_=a&63;c||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),a!==64){const _=l<<4&240|a>>2;if(s.push(_),h!==64){const m=a<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},md=function(t){const e=uc(t);return _r.encodeByteArray(e,!0)},hc=function(t){try{return _r.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t){return fc(void 0,t)}function fc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Cd(n)||(t[n]=fc(t[n],e[n]));return t}function Cd(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ed())}function vd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pc(){return ac.NODE_ADMIN===!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="FirebaseError";class gr extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=wd,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_c.prototype.create)}}class _c{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?bd(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new gr(i,l,s)}}function bd(t,e){return t.replace(Id,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Id=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=jn(hc(r[0])||""),n=jn(hc(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Td=function(t){const e=gc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Sd=function(t){const e=gc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function dn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function mc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function mr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(yc(r)&&yc(o)){if(!mr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function yc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function yr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gs=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t){return t&&t._delegate?t._delegate:t}class Ys{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ks;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Od(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Pd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pd(t){return t===Wt?void 0:t}function Od(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const kd={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Dd=ue.INFO,Fd={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Ld=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Fd[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cc{constructor(e){this.name=e,this._logLevel=Dd,this._logHandler=Ld,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Wd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cr="@firebase/app",Ec="0.7.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Cc("@firebase/app"),Ud="@firebase/app-compat",Hd="@firebase/analytics-compat",$d="@firebase/analytics",Vd="@firebase/app-check-compat",jd="@firebase/app-check",zd="@firebase/auth",Kd="@firebase/auth-compat",qd="@firebase/database",Gd="@firebase/database-compat",Yd="@firebase/functions",Qd="@firebase/functions-compat",Xd="@firebase/installations",Jd="@firebase/installations-compat",Zd="@firebase/messaging",ep="@firebase/messaging-compat",tp="@firebase/performance",np="@firebase/performance-compat",sp="@firebase/remote-config",ip="@firebase/remote-config-compat",rp="@firebase/storage",op="@firebase/storage-compat",lp="@firebase/firestore",cp="@firebase/firestore-compat",ap="firebase",up="9.4.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="[DEFAULT]",hp={[Cr]:"fire-core",[Ud]:"fire-core-compat",[$d]:"fire-analytics",[Hd]:"fire-analytics-compat",[jd]:"fire-app-check",[Vd]:"fire-app-check-compat",[zd]:"fire-auth",[Kd]:"fire-auth-compat",[qd]:"fire-rtdb",[Gd]:"fire-rtdb-compat",[Yd]:"fire-fn",[Qd]:"fire-fn-compat",[Xd]:"fire-iid",[Jd]:"fire-iid-compat",[Zd]:"fire-fcm",[ep]:"fire-fcm-compat",[tp]:"fire-perf",[np]:"fire-perf-compat",[sp]:"fire-rc",[ip]:"fire-rc-compat",[rp]:"fire-gcs",[op]:"fire-gcs-compat",[lp]:"fire-fst",[cp]:"fire-fst-compat","fire-js":"fire-js",[ap]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new Map,vr=new Map;function fp(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wr(t){const e=t.name;if(vr.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;vr.set(e,t);for(const n of Qs.values())fp(n,t);return!0}function dp(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Xs=new _c("app","Firebase",pp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=up;function Oy(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:vc,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Xs.create("bad-app-name",{appName:String(s)});const i=Qs.get(s);if(i){if(mr(t,i.options)&&mr(n,i.config))return i;throw Xs.create("duplicate-app",{appName:s})}const r=new Md(s);for(const l of vr.values())r.addComponent(l);const o=new _p(t,n,r);return Qs.set(s,o),o}function mp(t=vc){const e=Qs.get(t);if(!e)throw Xs.create("no-app",{appName:t});return e}function _n(t,e,n){var s;let i=(s=hp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(l.join(" "));return}wr(new Ys(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t){wr(new Ys("platform-logger",e=>new Bd(e),"PRIVATE")),_n(Cr,Ec,t),_n(Cr,Ec,"esm2017"),_n("fire-js","")}yp("");const wc="@firebase/database",bc="0.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic="";function Cp(t){Ic=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:jn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ep(e)}}catch{}return new vp},Ut=Tc("localStorage"),br=Tc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new Cc("@firebase/database"),wp=function(){let t=1;return function(){return t++}}(),Sc=function(t){const e=Ad(t),n=new Nd;n.update(e);const s=n.digest();return _r.encodeByteArray(s)},zn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=zn.apply(null,s):typeof s=="object"?e+=Ie(s):e+=s,e+=" "}return e};let Ht=null,Rc=!0;const bp=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(gn.logLevel=ue.VERBOSE,Ht=gn.log.bind(gn),e&&br.set("logging_enabled",!0)):typeof t=="function"?Ht=t:(Ht=null,br.remove("logging_enabled"))},Ae=function(...t){if(Rc===!0&&(Rc=!1,Ht===null&&br.get("logging_enabled")===!0&&bp(!0)),Ht){const e=zn.apply(null,t);Ht(e)}},Kn=function(t){return function(...e){Ae(t,...e)}},Ir=function(...t){const e="FIREBASE INTERNAL ERROR: "+zn(...t);gn.error(e)},$t=function(...t){const e=`FIREBASE FATAL ERROR: ${zn(...t)}`;throw gn.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+zn(...t);gn.warn(e)},Ip=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Tp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mn="[MIN_NAME]",Vt="[MAX_NAME]",yn=function(t,e){if(t===e)return 0;if(t===mn||e===Vt)return-1;if(e===mn||t===Vt)return 1;{const n=Pc(t),s=Pc(e);return n!==null?s!==null?n-s==0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Sp=function(t,e){return t===e?0:t<e?-1:1},qn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},Tr=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ie(e[s]),n+=":",n+=Tr(t[e[s]]);return n+="}",n},Ac=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xc=function(t){T(!Nc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t==-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Rp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Np=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Ap=new RegExp("^-?(0*)\\d{1,10}$"),xp=-2147483648,Pp=2147483647,Pc=function(t){if(Ap.test(t)){const e=Number(t);if(e>=xp&&e<=Pp)return e}return null},Cn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},Op=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gn=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class Sr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="5",Oc="v",Mc="s",kc="r",Dc="f",Fc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Lc="ls",Dp="p",Nr="ac",Bc="websocket",Wc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ut.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ut.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Lp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Uc(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Bc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Wc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Lp(t)&&(n.ns=t.namespace);const i=[];return qe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(){this.counters_={}}incrementCounter(e,n=1){ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return yd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar={},xr={};function Pr(t){const e=t.toString();return Ar[e]||(Ar[e]=new Bp),Ar[e]}function Wp(t,e){const n=t.toString();return xr[n]||(xr[n]=e()),xr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Cn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="start",Hp="close",$p="pLPCommand",Vp="pRTLPCB",$c="id",Vc="pw",jc="ser",jp="cb",zp="seg",Kp="ts",qp="d",Gp="dframe",zc=1870,Kc=30,Yp=zc-Kc,Qp=25e3,Xp=3e4;class En{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Kn(e),this.stats_=Pr(n),this.urlFn=c=>(this.appCheckToken&&(c[Nr]=this.appCheckToken),Uc(n,Wc,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Up(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Xp)),Tp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Or((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hc)this.id=l,this.password=c;else if(o===Hp)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hc]="t",s[jc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[jp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Oc]=Rr,this.transportSessionId&&(s[Mc]=this.transportSessionId),this.lastSessionId&&(s[Lc]=this.lastSessionId),this.applicationId&&(s[Dp]=this.applicationId),this.appCheckToken&&(s[Nr]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Fc.test(location.hostname)&&(s[kc]=Dc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){En.forceAllow_=!0}static forceDisallow(){En.forceDisallow_=!0}static isAvailable(){return En.forceAllow_?!0:!En.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Rp()&&!Np()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=md(n),i=Ac(s,Yp);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Gp]="t",s[$c]=e,s[Vc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Or{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wp(),window[$p+this.uniqueCallbackIdentifier]=e,window[Vp+this.uniqueCallbackIdentifier]=n,this.myIFrame=Or.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$c]=this.myID,e[Vc]=this.myPW,e[jc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Kc+s.length<=zc;){const o=this.pendingSegs.shift();s=s+"&"+zp+i+"="+o.seg+"&"+Kp+i+"="+o.ts+"&"+qp+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Qp)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=16384,Zp=45e3;let Js=null;typeof MozWebSocket!="undefined"?Js=MozWebSocket:typeof WebSocket!="undefined"&&(Js=WebSocket);class Xe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Kn(this.connId),this.stats_=Pr(n),this.connURL=Xe.connectionURL_(n,o,l,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i){const r={};return r[Oc]=Rr,typeof location!="undefined"&&location.hostname&&Fc.test(location.hostname)&&(r[kc]=Dc),n&&(r[Mc]=n),s&&(r[Lc]=s),i&&(r[Nr]=i),Uc(e,Bc,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ut.set("previous_websocket_failure",!0);try{if(!pc()){const s={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Js(this.connURL,[],s)}}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Js!==null&&!Xe.forceDisallow_}static previouslyFailed(){return Ut.isInMemoryStorage||Ut.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ut.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=jn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ac(n,Jp);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Zp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xe.responsesRequiredToBeHealthy=2;Xe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[En,Xe]}initTransports_(e){const n=Xe&&Xe.isAvailable();let s=n&&!Xe.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Xe];else{const i=this.transports_=[];for(const r of Mr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=6e4,t_=5e3,n_=10*1024,s_=100*1024,kr="t",qc="d",i_="s",Gc="r",r_="e",Yc="o",Qc="a",Xc="n",Jc="p",o_="h";class l_{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Kn("c:"+this.id+":"),this.transportManager_=new Mr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Gn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>s_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>n_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(kr in e){const n=e[kr];n===Qc?this.upgradeIfSecondaryHealthy_():n===Gc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=qn("t",e),s=qn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=qn("t",e),s=qn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=qn(kr,e);if(qc in e){const s=e[qc];if(n===o_)this.onHandshake_(s);else if(n===Xc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===i_?this.onConnectionShutdown_(s):n===Gc?this.onReset_(s):n===r_?Ir("Server Error: "+s):n===Yc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ir("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rr!==s&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Gn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(e_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(t_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ut.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends ea{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!dc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zs}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=32,na=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new re("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wt(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function sa(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function c_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ia(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ra(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function Ee(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new re(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function $e(t,e){const n=q(t),s=q(e);if(n===null)return e;if(n===s)return $e(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Dr(t,e){if(wt(t)!==wt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Je(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(wt(t)>wt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class a_{constructor(e,n){this.errorPrefix_=n,this.parts_=ia(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Gs(this.parts_[s]);oa(this)}}function u_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Gs(e),oa(t)}function h_(t){const e=t.parts_.pop();t.byteLength_-=Gs(e),t.parts_.length>0&&(t.byteLength_-=1)}function oa(t){if(t.byteLength_>na)throw new Error(t.errorPrefix_+"has a key path longer than "+na+" bytes ("+t.byteLength_+").");if(t.parts_.length>ta)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ta+") or object contains a cycle "+jt(t))}function jt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends ea{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Fr}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=1e3,f_=60*5*1e3,d_=3*1e3,la=30*1e3,p_=1.3,__=3e4,g_="server_kill",ca=3;class ft extends Zc{constructor(e,n,s,i,r,o,l,c){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=ft.nextPersistentConnectionId_++,this.log_=Kn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yn,this.maxReconnectDelay_=f_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!pc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ie(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ks,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?(this.onDataUpdate_(s.p,l,!1,null),n.resolve(l)):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},d_),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;ft.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ht(e,"w")){const s=dn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Sd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=la)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Td(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ir("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>__&&(this.reconnectDelay_=Yn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*p_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ft.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new l_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{De(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(g_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&De(h),c())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mc(this.interruptReasons_)&&(this.reconnectDelay_=Yn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Tr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ca&&(this.reconnectDelay_=la,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ca&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ic.replace(/\./g,"-")]=1,dc()?e["framework.cordova"]=1:vd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zs.getInstance().currentlyOnline();return mc(this.interruptReasons_)&&e}}ft.nextPersistentConnectionId_=0;ft.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new j(mn,e),i=new j(mn,n);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;class aa extends ei{static get __EMPTY_NODE(){return ti}static set __EMPTY_NODE(e){ti=e}compare(e,n){return yn(e.name,n.name)}isDefinedOn(e){throw fn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Vt,ti)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,ti)}toString(){return".key"}}const vn=new aa;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Te{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Te.RED,this.left=i!=null?i:Fe.EMPTY_NODE,this.right=r!=null?r:Fe.EMPTY_NODE}copy(e,n,s,i,r){return new Te(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Fe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Te.RED=!0;Te.BLACK=!1;class m_{copy(e,n,s,i,r){return this}insert(e,n,s){return new Te(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Te.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Te.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ni(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ni(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ni(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ni(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new m_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t,e){return yn(t.name,e.name)}function Lr(t,e){return yn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br;function C_(t){Br=t}const ua=function(t){return typeof t=="number"?"number:"+xc(t):"string:"+t},ha=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ht(e,".sv"),"Priority must be a string or number.")}else T(t===Br||t.isEmpty(),"priority of unexpected type.");T(t===Br||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa;class Se{constructor(e,n=Se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ha(this.priorityNode_)}static set __childrenNodeConstructor(e){fa=e}static get __childrenNodeConstructor(){return fa}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:q(e)===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||wt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Se.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ua(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xc(this.value_):e+=this.value_,this.lazyHash_=Sc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Se.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Se.VALUE_TYPE_ORDER.indexOf(n),r=Se.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da,pa;function E_(t){da=t}function v_(t){pa=t}class w_ extends ei{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?yn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Vt,new Se("[PRIORITY-POST]",pa))}makePost(e,n){const s=da(e);return new j(n,new Se("[PRIORITY-POST]",s))}toString(){return".priority"}}const me=new w_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=Math.log(2);class I_{constructor(e){const n=r=>parseInt(Math.log(r)/b_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const si=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new Te(f,h.node,Te.BLACK,null,null);{const _=parseInt(u/2,10)+c,m=i(c,_),N=i(_+1,a);return h=t[_],f=n?n(h):h,new Te(f,h.node,Te.BLACK,m,N)}},r=function(c){let a=null,u=null,h=t.length;const f=function(m,N){const R=h-m,x=h;h-=m;const F=i(R+1,x),V=t[R],z=n?n(V):V;_(new Te(z,V.node,N,null,F))},_=function(m){a?(a.left=m,a=m):(u=m,a=m)};for(let m=0;m<c.count;++m){const N=c.nextBitIsOne(),R=Math.pow(2,c.count-(m+1));N?f(R,Te.BLACK):(f(R,Te.BLACK),f(R,Te.RED))}return u},o=new I_(t.length),l=r(o);return new Fe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr;const wn={};class dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(wn&&me,"ChildrenNode.ts has not been loaded"),Wr=Wr||new dt({".priority":wn},{".priority":me}),Wr}get(e){const n=dn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return ht(this.indexSet_,e.toString())}addIndex(e,n){T(e!==vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=si(s,e.getCompare()):l=wn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new dt(u,a)}addToIndexes(e,n){const s=qs(this.indexes_,(i,r)=>{const o=dn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===wn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(j.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),si(l,o.getCompare())}else return wn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new j(e.name,l))),c.insert(e,e.node)}});return new dt(s,this.indexSet_)}removeFromIndexes(e,n){const s=qs(this.indexes_,i=>{if(i===wn)return i;{const r=n.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new dt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qn;class L{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ha(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Qn||(Qn=new L(new Fe(Lr),null,dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qn}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Qn:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new j(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Qn:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=q(e);if(s===null)return n;{T(q(e)!==".priority"||wt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(fe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(me,(o,l)=>{n[o]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ua(this.getPriority().val())+":"),this.forEachChild(me,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Sc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xn?-1:0}withIndex(e){if(e===vn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(me),i=n.getIterator(me);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class T_ extends L{constructor(){super(new Fe(Lr),L.EMPTY_NODE,dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Xn=new T_;Object.defineProperties(j,{MIN:{value:new j(mn,L.EMPTY_NODE)},MAX:{value:new j(Vt,Xn)}});aa.__EMPTY_NODE=L.EMPTY_NODE;Se.__childrenNodeConstructor=L;C_(Xn);v_(Xn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=!0;function Re(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Se(n,Re(e))}if(!(t instanceof Array)&&S_){const n=[];let s=!1;if(qe(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Re(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new j(o,c)))}}),n.length===0)return L.EMPTY_NODE;const r=si(n,y_,o=>o.name,Lr);if(s){const o=si(n,me.getCompare());return new L(r,Re(e),new dt({".priority":o},{".priority":me}))}else return new L(r,Re(e),dt.Default)}else{let n=L.EMPTY_NODE;return qe(t,(s,i)=>{if(ht(t,s)&&s.substring(0,1)!=="."){const r=Re(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Re(e))}}E_(Re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends ei{constructor(e){super();this.indexPath_=e,T(!G(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?yn(e.name,n.name):r}makePost(e,n){const s=Re(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Xn);return new j(Vt,e)}toString(){return ia(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_ extends ei{compare(e,n){const s=e.node.compareTo(n.node);return s===0?yn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const s=Re(e);return new j(n,s)}toString(){return".value"}}const A_=new N_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",x_=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=_a.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=_a.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t){return{type:"value",snapshotNode:t}}function Jn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Zn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function es(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function O_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Zn(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Jn(n,s)):o.trackChildChange(es(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(me,(i,r)=>{n.hasChild(i)||s.trackChildChange(Zn(i,r))}),n.isLeafNode()||n.forEachChild(me,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(es(i,r,o))}else s.trackChildChange(Jn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.indexedFilter_=new Ur(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ts.getStartPost_(e),this.endPost_=ts.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new j(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(me,(o,l)=>{r.matches(new j(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.rangedFilter_=new ts(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new j(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:c=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,c)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r,o,l,c;if(this.reverse_){c=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,_)=>h(_,f)}else c=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let a=0,u=!1;for(;c.hasNext();){const h=c.getNext();!u&&l(r,h)<=0&&(u=!0),u&&a<this.limit_&&l(h,o)<=0?a++:i=i.updateImmediateChild(h.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const c=new j(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,a,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,c);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(es(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Zn(n,h));const N=l.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Jn(f.name,f.node)),N.updateImmediateChild(f.name,f.node)):N}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(Zn(a.name,a.node)),r.trackChildChange(Jn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Hr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function k_(t){return t.loadsAllData()?new Ur(t.getIndex()):t.hasLimit()?new M_(t):new ts(t)}function ga(t){const e={};if(t.isDefault())return e;let n;return t.index_===me?n="$priority":t.index_===A_?n="$value":t.index_===vn?n="$key":(T(t.index_ instanceof R_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_&&(e.startAt=Ie(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ie(t.indexStartName_))),t.endSet_&&(e.endAt=Ie(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ie(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ma(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Zc{constructor(e,n,s,i){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Kn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ii.getListenId_(e,s),l={};this.listens_[o]=l;const c=ga(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),dn(this.listens_,o)===l){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,n){const s=ii.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ga(e._queryParams),s=e._path.toString(),i=new Ks;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rd(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=jn(l.responseText)}catch{De("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(){return{value:null,children:new Map}}function ya(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=q(e);t.children.has(s)||t.children.set(s,ri());const i=t.children.get(s);e=fe(e),ya(i,e,n)}}function $r(t,e,n){t.value!==null?n(e,t.value):F_(t,(s,i)=>{const r=new re(e.toString()+"/"+s);$r(i,r,n)})}function F_(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=10*1e3,B_=30*1e3,W_=5*60*1e3;class U_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new L_(e);const s=Ca+(B_-Ca)*Math.random();Gn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;qe(e,(i,r)=>{r>0&&ht(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Gn(this.reportStats_.bind(this),Math.floor(Math.random()*2*W_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function Ea(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function va(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wa(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ot.ACK_USER_WRITE,this.source=Ea()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new oi(J(),n,this.revert)}}else return T(q(this.path)===e,"operationForChild called for unrelated child."),new oi(fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ot.OVERWRITE}operationForChild(e){return G(this.path)?new zt(this.source,J(),this.snap.getImmediateChild(e)):new zt(this.source,fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ot.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new zt(this.source,J(),n.value):new ns(this.source,J(),n)}else return T(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ns(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $_(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(O_(o.childName,o.snapshotNode))}),ss(t,i,"child_removed",e,s,n),ss(t,i,"child_added",e,s,n),ss(t,i,"child_moved",r,s,n),ss(t,i,"child_changed",e,s,n),ss(t,i,"value",e,s,n),i}function ss(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>j_(t,l,c)),o.forEach(l=>{const c=V_(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function V_(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function j_(t,e,n){if(e.childName==null||n.childName==null)throw fn("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t,e){return{eventCache:t,serverCache:e}}function is(t,e,n,s){return li(new bt(e,n,s),t.serverCache)}function ba(t,e,n,s){return li(t.eventCache,new bt(e,n,s))}function ci(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Kt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr;const z_=()=>(Vr||(Vr=new Fe(Sp)),Vr);class de{constructor(e,n=z_()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return qe(e,(s,i)=>{n=n.set(new re(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(G(e))return null;{const s=q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(fe(e),n);return r!=null?{path:Ee(new re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=q(e),s=this.children.get(n);return s!==null?s.subtree(fe(e)):new de(null)}}set(e,n){if(G(e))return new de(n,this.children);{const s=q(e),r=(this.children.get(s)||new de(null)).set(fe(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=q(e),s=this.children.get(n);if(s){const i=s.remove(fe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const n=q(e),s=this.children.get(n);return s?s.get(fe(e)):null}}setTree(e,n){if(G(e))return n;{const s=q(e),r=(this.children.get(s)||new de(null)).setTree(fe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ee(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(G(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(fe(e),Ee(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,s){if(G(e))return this;{this.value&&s(n,this.value);const i=q(e),r=this.children.get(i);return r?r.foreachOnPath_(fe(e),Ee(n,i),s):new de(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ee(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.writeTree_=e}static empty(){return new Ze(new de(null))}}function rs(t,e,n){if(G(e))return new Ze(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=$e(i,e);return r=r.updateChild(o,n),new Ze(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new Ze(r)}}}function Ia(t,e,n){let s=t;return qe(n,(i,r)=>{s=rs(s,Ee(e,i),r)}),s}function Ta(t,e){if(G(e))return Ze.empty();{const n=t.writeTree_.setTree(e,new de(null));return new Ze(n)}}function jr(t,e){return qt(t,e)!=null}function qt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($e(n.path,e)):null}function Sa(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(s,i)=>{e.push(new j(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function It(t,e){if(G(e))return t;{const n=qt(t,e);return n!=null?new Ze(new de(n)):new Ze(t.writeTree_.subtree(e))}}function zr(t){return t.writeTree_.isEmpty()}function bn(t,e){return Ra(J(),t.writeTree_,e)}function Ra(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ra(Ee(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ee(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t,e){return Oa(e,t)}function K_(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=rs(t.visibleWrites,e,n)),t.lastWriteId=s}function q_(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function G_(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Y_(l,s.path)?i=!1:Je(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Q_(t),!0;if(s.snap)t.visibleWrites=Ta(t.visibleWrites,s.path);else{const l=s.children;qe(l,c=>{t.visibleWrites=Ta(t.visibleWrites,Ee(s.path,c))})}return!0}else return!1}function Y_(t,e){if(t.snap)return Je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Je(Ee(t.path,n),e))return!0;return!1}function Q_(t){t.visibleWrites=Na(t.allWrites,X_,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function X_(t){return t.visible}function Na(t,e,n){let s=Ze.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Je(n,o)?(l=$e(n,o),s=rs(s,l,r.snap)):Je(o,n)&&(l=$e(o,n),s=rs(s,J(),r.snap.getChild(l)));else if(r.children){if(Je(n,o))l=$e(n,o),s=Ia(s,l,r.children);else if(Je(o,n))if(l=$e(o,n),G(l))s=Ia(s,J(),r.children);else{const c=dn(r.children,q(l));if(c){const a=c.getChild(fe(l));s=rs(s,J(),a)}}}else throw fn("WriteRecord should have .snap or .children")}}return s}function Aa(t,e,n,s,i){if(!s&&!i){const r=qt(t.visibleWrites,e);if(r!=null)return r;{const o=It(t.visibleWrites,e);if(zr(o))return n;if(n==null&&!jr(o,J()))return null;{const l=n||L.EMPTY_NODE;return bn(o,l)}}}else{const r=It(t.visibleWrites,e);if(!i&&zr(r))return n;if(!i&&n==null&&!jr(r,J()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Je(a.path,e)||Je(e,a.path))},l=Na(t.allWrites,o,e),c=n||L.EMPTY_NODE;return bn(l,c)}}}function J_(t,e,n){let s=L.EMPTY_NODE;const i=qt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(me,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=It(t.visibleWrites,e);return n.forEachChild(me,(o,l)=>{const c=bn(It(r,new re(o)),l);s=s.updateImmediateChild(o,c)}),Sa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=It(t.visibleWrites,e);return Sa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Z_(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ee(e,n);if(jr(t.visibleWrites,r))return null;{const o=It(t.visibleWrites,r);return zr(o)?i.getChild(n):bn(o,i.getChild(n))}}function eg(t,e,n,s){const i=Ee(e,n),r=qt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=It(t.visibleWrites,i);return bn(o,s.getNode().getImmediateChild(n))}else return null}function tg(t,e){return qt(t.visibleWrites,e)}function ng(t,e,n,s,i,r,o){let l;const c=It(t.visibleWrites,e),a=qt(c,J());if(a!=null)l=a;else if(n!=null)l=bn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function sg(){return{visibleWrites:Ze.empty(),allWrites:[],lastWriteId:-1}}function ai(t,e,n,s){return Aa(t.writeTree,t.treePath,e,n,s)}function qr(t,e){return J_(t.writeTree,t.treePath,e)}function xa(t,e,n,s){return Z_(t.writeTree,t.treePath,e,n,s)}function ui(t,e){return tg(t.writeTree,Ee(t.treePath,e))}function ig(t,e,n,s,i,r){return ng(t.writeTree,t.treePath,e,n,s,i,r)}function Gr(t,e,n){return eg(t.writeTree,t.treePath,e,n)}function Pa(t,e){return Oa(Ee(t.treePath,e),t.writeTree)}function Oa(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,es(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Zn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Jn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,es(s,e.snapshotNode,i.oldSnap));else throw fn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ma=new og;class Yr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Kt(this.viewCache_),r=ig(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){return{filter:t}}function cg(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ag(t,e,n,s,i){const r=new rg;let o,l;if(n.type===ot.OVERWRITE){const a=n;a.source.fromUser?o=Qr(t,e,a.path,a.snap,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!G(a.path),o=hi(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===ot.MERGE){const a=n;a.source.fromUser?o=hg(t,e,a.path,a.children,s,i,r):(T(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Xr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===ot.ACK_USER_WRITE){const a=n;a.revert?o=pg(t,e,a.path,s,i,r):o=fg(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===ot.LISTEN_COMPLETE)o=dg(t,e,n.path,s,r);else throw fn("Unknown operation type: "+n.type);const c=r.getChanges();return ug(e,o,c),{viewCache:o,changes:c}}function ug(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ci(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(P_(ci(e)))}}function ka(t,e,n,s,i,r){const o=e.eventCache;if(ui(s,n)!=null)return e;{let l,c;if(G(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=Kt(e),u=a instanceof L?a:L.EMPTY_NODE,h=qr(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=ai(s,Kt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=q(n);if(a===".priority"){T(wt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=xa(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=fe(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const f=xa(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(a).updateChild(u,f):h=o.getNode().getImmediateChild(a)}else h=Gr(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return is(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function hi(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(G(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),_,null)}else{const _=q(n);if(!c.isCompleteForPath(n)&&wt(n)>1)return e;const m=fe(n),R=c.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?a=u.updatePriority(c.getNode(),R):a=u.updateChild(c.getNode(),_,R,m,Ma,null)}const h=ba(e,a,c.isFullyInitialized()||G(n),u.filtersNodes()),f=new Yr(i,h,r);return ka(t,h,n,i,f,l)}function Qr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new Yr(i,e,r);if(G(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=is(e,a,!0,t.filter.filtersNodes());else{const h=q(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=is(e,a,l.isFullyInitialized(),l.isFiltered());else{const f=fe(n),_=l.getNode().getImmediateChild(h);let m;if(G(f))m=s;else{const N=u.getCompleteChild(h);N!=null?sa(f)===".priority"&&N.getChild(ra(f)).isEmpty()?m=N:m=N.updateChild(f,s):m=L.EMPTY_NODE}if(_.equals(m))c=e;else{const N=t.filter.updateChild(l.getNode(),h,m,f,u,o);c=is(e,N,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Da(t,e){return t.eventCache.isCompleteForChild(e)}function hg(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=Ee(n,c);Da(e,q(u))&&(l=Qr(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=Ee(n,c);Da(e,q(u))||(l=Qr(t,l,u,a,i,r,o))}),l}function Fa(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Xr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;G(n)?a=s:a=new de(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Fa(t,_,f);c=hi(t,c,new re(h),m,i,r,o,l)}}),a.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),N=Fa(t,m,f);c=hi(t,c,new re(h),N,i,r,o,l)}}),c}function fg(t,e,n,s,i,r,o){if(ui(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(G(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return hi(t,e,n,c.getNode().getChild(n),i,r,l,o);if(G(n)){let a=new de(null);return c.getNode().forEachChild(vn,(u,h)=>{a=a.set(new re(u),h)}),Xr(t,e,n,a,i,r,l,o)}else return e}else{let a=new de(null);return s.foreach((u,h)=>{const f=Ee(n,u);c.isCompleteForPath(f)&&(a=a.set(u,c.getNode().getChild(f)))}),Xr(t,e,n,a,i,r,l,o)}}function dg(t,e,n,s,i){const r=e.serverCache,o=ba(e,r.getNode(),r.isFullyInitialized()||G(n),r.isFiltered());return ka(t,o,n,s,Ma,i)}function pg(t,e,n,s,i,r){let o;if(ui(s,n)!=null)return e;{const l=new Yr(s,e,i),c=e.eventCache.getNode();let a;if(G(n)||q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ai(s,Kt(e));else{const h=e.serverCache.getNode();T(h instanceof L,"serverChildren would be complete if leaf node"),u=qr(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=q(n);let h=Gr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,fe(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,L.EMPTY_NODE,fe(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ai(s,Kt(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||ui(s,J())!=null,is(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ur(s.getIndex()),r=k_(s);this.processor_=lg(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),u=new bt(c,o.isFullyInitialized(),i.filtersNodes()),h=new bt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=li(h,u),this.eventGenerator_=new H_(this.query_)}get query(){return this.query_}}function gg(t){return ci(t.viewCache_)}function mg(t,e){const n=Kt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function La(t,e,n,s){e.type===ot.MERGE&&e.source.queryId!==null&&(T(Kt(t.viewCache_),"We should always have a full cache before handling merges"),T(ci(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=ag(t.processor_,i,e,n,s);return cg(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,yg(t,r.changes,r.viewCache.eventCache.getNode(),null)}function yg(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return $_(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;class Cg{constructor(){this.views=new Map}}function Eg(t){T(!Ba,"__referenceConstructor has already been defined"),Ba=t}function Jr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),La(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(La(o,e,n,s));return r}}function vg(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ai(n,i?s:null),c=!1;l?c=!0:s instanceof L?(l=qr(n,s),c=!1):(l=L.EMPTY_NODE,c=!1);const a=li(new bt(l,c,!1),new bt(s,i,!1));return new _g(e,a)}return o}function os(t,e){let n=null;for(const s of t.views.values())n=n||mg(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa;function wg(t){T(!Wa,"__referenceConstructor has already been defined"),Wa=t}class Ua{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=sg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ha(t,e,n,s,i){return K_(t.pendingWriteTree_,e,n,s,i),i?fi(t,new zt(Ea(),e,n)):[]}function Gt(t,e,n=!1){const s=q_(t.pendingWriteTree_,e);if(G_(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(J(),!0):qe(s.children,o=>{r=r.set(new re(o),!0)}),fi(t,new oi(s.path,r,n))}else return[]}function ls(t,e,n){return fi(t,new zt(va(),e,n))}function bg(t,e,n){const s=de.fromObject(n);return fi(t,new ns(va(),e,s))}function Ig(t,e,n,s){const i=ja(t,s);if(i!=null){const r=za(i),o=r.path,l=r.queryId,c=$e(o,e),a=new zt(wa(l),c,n);return Ka(t,o,a)}else return[]}function Tg(t,e,n,s){const i=ja(t,s);if(i){const r=za(i),o=r.path,l=r.queryId,c=$e(o,e),a=de.fromObject(n),u=new ns(wa(l),c,a);return Ka(t,o,u)}else return[]}function Zr(t,e,n){const s=!0,i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=$e(o,e),a=os(l,c);if(a)return a});return Aa(i,e,r,n,s)}function Sg(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const h=$e(a,n);s=s||os(u,h)});let i=t.syncPointTree_.get(n);i?s=s||os(i,J()):(i=new Cg,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new bt(s,!0,!1):null,l=Kr(t.pendingWriteTree_,e._path),c=vg(i,e,l,r?o.getNode():L.EMPTY_NODE,r);return gg(c)}function fi(t,e){return $a(e,t.syncPointTree_,null,Kr(t.pendingWriteTree_,J()))}function $a(t,e,n,s){if(G(t.path))return Va(t,e,n,s);{const i=e.get(J());n==null&&i!=null&&(n=os(i,J()));let r=[];const o=q(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Pa(s,o);r=r.concat($a(l,c,a,u))}return i&&(r=r.concat(Jr(i,t,s,n))),r}}function Va(t,e,n,s){const i=e.get(J());n==null&&i!=null&&(n=os(i,J()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Pa(s,o),u=t.operationForChild(o);u&&(r=r.concat(Va(u,l,c,a)))}),i&&(r=r.concat(Jr(i,t,s,n))),r}function ja(t,e){return t.tagToQueryMap.get(e)}function za(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Ka(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Kr(t.pendingWriteTree_,e);return Jr(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new eo(n)}node(){return this.node_}}class to{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new to(this.syncTree_,n)}node(){return Zr(this.syncTree_,this.path_)}}const Rg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},qa=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ng(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ag(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ng=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},Ag=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},xg=function(t,e,n,s){return no(e,new to(n,t),s)},Ga=function(t,e,n){return no(t,new eo(e),n)};function no(t,e,n){const s=t.getPriority().val(),i=qa(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=qa(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Se(l,Re(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Se(i))),o.forEachChild(me,(l,c)=>{const a=no(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function io(t,e){let n=e instanceof re?e:new re(e),s=t,i=q(n);for(;i!==null;){const r=dn(s.node.children,i)||{children:{},childCount:0};s=new so(i,s,r),n=fe(n),i=q(n)}return s}function In(t){return t.node.value}function Ya(t,e){t.node.value=e,ro(t)}function Qa(t){return t.node.childCount>0}function Pg(t){return In(t)===void 0&&!Qa(t)}function di(t,e){qe(t.node.children,(n,s)=>{e(new so(n,t,s))})}function Xa(t,e,n,s){n&&!s&&e(t),di(t,i=>{Xa(i,e,!0,s)}),n&&s&&e(t)}function Og(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function cs(t){return new re(t.parent===null?t.name:cs(t.parent)+"/"+t.name)}function ro(t){t.parent!==null&&Mg(t.parent,t.name,t)}function Mg(t,e,n){const s=Pg(n),i=ht(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ro(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ro(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=/[\[\].#$\/\u0000-\u001F\u007F]/,Dg=/[\[\].#$\u0000-\u001F\u007F]/,oo=10*1024*1024,Ja=function(t){return typeof t=="string"&&t.length!==0&&!kg.test(t)},Za=function(t){return typeof t=="string"&&t.length!==0&&!Dg.test(t)},Fg=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Za(t)},eu=function(t,e,n,s){s&&e===void 0||lo(yr(t,"value"),e,n)},lo=function(t,e,n){const s=n instanceof re?new a_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jt(s));if(typeof e=="function")throw new Error(t+"contains a function "+jt(s)+" with contents = "+e.toString());if(Nc(e))throw new Error(t+"contains "+e.toString()+" "+jt(s));if(typeof e=="string"&&e.length>oo/3&&Gs(e)>oo)throw new Error(t+"contains a string greater than "+oo+" utf8 bytes "+jt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(qe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ja(o)))throw new Error(t+" contains an invalid key ("+o+") "+jt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);u_(s,o),lo(t,l,s),h_(s)}),i&&r)throw new Error(t+' contains ".value" child '+jt(s)+" in addition to actual children.")}},tu=function(t,e,n,s){if(!(s&&n===void 0)&&!Za(n))throw new Error(yr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Lg=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tu(t,e,n,s)},nu=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Bg=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ja(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Fg(n))throw new Error(yr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function co(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Dr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ug(t,e,n){co(t,n),su(t,s=>Dr(s,e))}function pt(t,e,n){co(t,n),su(t,s=>Je(s,e)||Je(e,s))}function su(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Hg(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Hg(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ht&&Ae("event: "+n.toString()),Cn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="repo_interrupt",Vg=25;class jg{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Wg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ri(),this.transactionQueueTree_=new so,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function zg(t,e,n){if(t.stats_=Pr(t.repoInfo_),t.forceRestClient_||Op())t.server_=new ii(t.repoInfo_,(s,i,r,o)=>{ru(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ou(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ft(t.repoInfo_,e,(s,i,r,o)=>{ru(t,s,i,r,o)},s=>{ou(t,s)},s=>{Kg(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Wp(t.repoInfo_,()=>new U_(t.stats_,t.server_)),t.infoData_=new D_,t.infoSyncTree_=new Ua({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=ls(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),uo(t,"connected",!1),t.serverSyncTree_=new Ua({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);pt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function iu(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ao(t){return Rg({timestamp:iu(t)})}function ru(t,e,n,s,i){t.dataUpdateCount++;const r=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=qs(n,a=>Re(a));o=Tg(t.serverSyncTree_,r,c,i)}else{const c=Re(n);o=Ig(t.serverSyncTree_,r,c,i)}else if(s){const c=qs(n,a=>Re(a));o=bg(t.serverSyncTree_,r,c)}else{const c=Re(n);o=ls(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=_i(t,r)),pt(t.eventQueue_,l,o)}function ou(t,e){uo(t,"connected",e),e===!1&&Yg(t)}function Kg(t,e){qe(e,(n,s)=>{uo(t,n,s)})}function uo(t,e,n){const s=new re("/.info/"+e),i=Re(n);t.infoData_.updateSnapshot(s,i);const r=ls(t.infoSyncTree_,s,i);pt(t.eventQueue_,s,r)}function lu(t){return t.nextWriteId_++}function qg(t,e){const n=Sg(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(s=>{const i=Re(s).withIndex(e._queryParams.getIndex()),r=ls(t.serverSyncTree_,e._path,i);return Ug(t.eventQueue_,e._path,r),Promise.resolve(i)},s=>(pi(t,"get for query "+Ie(e)+" failed: "+s),Promise.reject(new Error(s))))}function Gg(t,e,n,s,i){pi(t,"set",{path:e.toString(),value:n,priority:s});const r=ao(t),o=Re(n,s),l=Zr(t.serverSyncTree_,e),c=Ga(o,l,r),a=lu(t),u=Ha(t.serverSyncTree_,e,c,a,!0);co(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||De("set at "+e+" failed: "+f);const N=Gt(t.serverSyncTree_,a,!m);pt(t.eventQueue_,e,N),Xg(t,i,f,_)});const h=fu(t,e);_i(t,h),pt(t.eventQueue_,h,[])}function Yg(t){pi(t,"onDisconnectEvents");const e=ao(t),n=ri();$r(t.onDisconnect_,J(),(i,r)=>{const o=xg(i,r,t.serverSyncTree_,e);ya(n,i,o)});let s=[];$r(n,J(),(i,r)=>{s=s.concat(ls(t.serverSyncTree_,i,r));const o=fu(t,i);_i(t,o)}),t.onDisconnect_=ri(),pt(t.eventQueue_,J(),s)}function Qg(t){t.persistentConnection_&&t.persistentConnection_.interrupt($g)}function pi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function Xg(t,e,n,s){e&&Cn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function cu(t,e,n){return Zr(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function ho(t,e=t.transactionQueueTree_){if(e||gi(t,e),In(e)){const n=uu(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jg(t,cs(e),n)}else Qa(e)&&di(e,n=>{ho(t,n)})}function Jg(t,e,n){const s=n.map(a=>a.currentWriteId),i=cu(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=$e(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{pi(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Gt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();gi(t,io(t.transactionQueueTree_,e)),ho(t,t.transactionQueueTree_),pt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Cn(h[f])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{De("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}_i(t,e)}},o)}function _i(t,e){const n=au(t,e),s=cs(n),i=uu(t,n);return Zg(t,i,s),s}function Zg(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=$e(n,c.path);let u=!1,h;if(T(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Gt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Vg)u=!0,h="maxretry",i=i.concat(Gt(t.serverSyncTree_,c.currentWriteId,!0));else{const f=cu(t,c.path,o);c.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){lo("transaction failed: Data returned ",_,c.path);let m=Re(_);typeof _=="object"&&_!=null&&ht(_,".priority")||(m=m.updatePriority(f.getPriority()));const R=c.currentWriteId,x=ao(t),F=Ga(m,f,x);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=F,c.currentWriteId=lu(t),o.splice(o.indexOf(R),1),i=i.concat(Ha(t.serverSyncTree_,c.path,F,c.currentWriteId,c.applyLocally)),i=i.concat(Gt(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",i=i.concat(Gt(t.serverSyncTree_,c.currentWriteId,!0))}pt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}gi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Cn(s[l]);ho(t,t.transactionQueueTree_)}function au(t,e){let n,s=t.transactionQueueTree_;for(n=q(e);n!==null&&In(s)===void 0;)s=io(s,n),e=fe(e),n=q(e);return s}function uu(t,e){const n=[];return hu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function hu(t,e,n){const s=In(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);di(e,i=>{hu(t,i,n)})}function gi(t,e){const n=In(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ya(e,n.length>0?n:void 0)}di(e,s=>{gi(t,s)})}function fu(t,e){const n=cs(au(t,e)),s=io(t.transactionQueueTree_,e);return Og(s,i=>{fo(t,i)}),fo(t,s),Xa(s,i=>{fo(t,i)}),n}function fo(t,e){const n=In(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Gt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ya(e,void 0):n.length=r+1,pt(t.eventQueue_,cs(e),i);for(let o=0;o<s.length;o++)Cn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function tm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const du=function(t,e){const n=nm(t),s=n.namespace;n.domain==="firebase.com"&&$t(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&$t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ip();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Fp(n.host,n.secure,s,e,i,"",s!==n.subdomain),path:new re(n.pathString)}},nm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=em(t.substring(u,h)));const f=tm(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const _=e.slice(0,a);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:sa(this._path)}get ref(){return new Tt(this._repo,this._path)}get _queryIdentifier(){const e=ma(this._queryParams),n=Tr(e);return n==="{}"?"default":n}get _queryObject(){return ma(this._queryParams)}isEqual(e){if(e=pn(e),!(e instanceof po))return!1;const n=this._repo===e._repo,s=Dr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+c_(this._path)}}class Tt extends po{constructor(e,n){super(e,n,new Hr,!1)}get parent(){const e=ra(this._path);return e===null?null:new Tt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class mi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),s=as(this.ref,e);return new mi(this._node.getChild(n),s,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new mi(i,as(this.ref,s),me)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function My(t,e){return t=pn(t),t._checkNotDeleted("ref"),e!==void 0?as(t._root,e):t._root}function as(t,e){return t=pn(t),q(t._path)===null?Lg("child","path",e,!1):tu("child","path",e,!1),new Tt(t._repo,Ee(t._path,e))}function ky(t,e){t=pn(t),nu("push",t._path),eu("push",e,t._path,!0);const n=iu(t._repo),s=x_(n),i=as(t,s),r=as(t,s);let o;return e!=null?o=sm(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function sm(t,e){t=pn(t),nu("set",t._path),eu("set",e,t._path,!1);const n=new Ks;return Gg(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Dy(t){return t=pn(t),qg(t._repo,t).then(e=>new mi(e,new Tt(t._repo,t._path),t._queryParams.getIndex()))}Eg(Tt);wg(Tt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="FIREBASE_DATABASE_EMULATOR_HOST",_o={};let rm=!1;function om(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||$t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=du(r,i),l=o.repoInfo,c,a;typeof process!="undefined"&&(a=process.env[im]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=du(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Sr(Sr.OWNER):new kp(t.name,t.options,e);Bg("Invalid Firebase Database URL",o),G(o.path)||$t("Database URL must point to the root of a Firebase Database (not including a child path).");const h=cm(l,t,u,new Mp(t.name,n));return new am(h,t)}function lm(t,e){const n=_o[e];(!n||n[t.key]!==t)&&$t(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Qg(t),delete n[t.key]}function cm(t,e,n,s){let i=_o[e.name];i||(i={},_o[e.name]=i);let r=i[t.toURLString()];return r&&$t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new jg(t,rm,n,s),i[t.toURLString()]=r,r}class am{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(zg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$t("Cannot call "+e+" on a deleted database.")}}function Fy(t=mp(),e){return dp(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t){Cp(gp),wr(new Ys("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return om(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),_n(wc,bc,t),_n(wc,bc,"esm2017")}ft.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ft.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};um();var hm="firebase",fm="9.4.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n(hm,fm,"app");/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const pu=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Tn=t=>pu?Symbol(t):"_vr_"+t,dm=Tn("rvlm"),_u=Tn("rvd"),go=Tn("r"),gu=Tn("rl"),mo=Tn("rvl"),Sn=typeof window!="undefined";function pm(t){return t.__esModule||pu&&t[Symbol.toStringTag]==="Module"}const oe=Object.assign;function yo(t,e){const n={};for(const s in e){const i=e[s];n[s]=Array.isArray(i)?i.map(t):t(i)}return n}const us=()=>{},_m=/\/$/,gm=t=>t.replace(_m,"");function Co(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("?"),c=e.indexOf("#",l>-1?l:0);return l>-1&&(s=e.slice(0,l),r=e.slice(l+1,c>-1?c:e.length),i=t(r)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=Em(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function mm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ym(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Rn(e.matched[s],n.matched[i])&&yu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Cm(t[n],e[n]))return!1;return!0}function Cm(t,e){return Array.isArray(t)?Cu(t,e):Array.isArray(e)?Cu(e,t):t===e}function Cu(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Em(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var hs;(function(t){t.pop="pop",t.push="push"})(hs||(hs={}));var fs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fs||(fs={}));function vm(t){if(!t)if(Sn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gm(t)}const wm=/^[^#]+#/;function bm(t,e){return t.replace(wm,"#")+e}function Im(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const yi=()=>({left:window.pageXOffset,top:window.pageYOffset});function Tm(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Im(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Eu(t,e){return(history.state?history.state.position-e:-1)+t}const Eo=new Map;function Sm(t,e){Eo.set(t,e)}function Rm(t){const e=Eo.get(t);return Eo.delete(t),e}let Nm=()=>location.protocol+"//"+location.host;function vu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),mu(c,"")}return mu(n,t)+s+i}function Am(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=vu(t,location),m=n.value,N=e.value;let R=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}R=N?f.position-N.position:0}else s(_);i.forEach(x=>{x(n.value,m,{delta:R,type:hs.pop,direction:R?R>0?fs.forward:fs.back:fs.unknown})})};function c(){o=n.value}function a(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;!f.state||f.replaceState(oe({},f.state,{scroll:yi()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:a,destroy:h}}function wu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?yi():null}}function xm(t){const{history:e,location:n}=window,s={value:vu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,a,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Nm()+t+c;try{e[u?"replaceState":"pushState"](a,"",f),i.value=a}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(c,a){const u=oe({},e.state,wu(i.value.back,c,i.value.forward,!0),a,{position:i.value.position});r(c,u,!0),s.value=c}function l(c,a){const u=oe({},i.value,e.state,{forward:c,scroll:yi()});r(u.current,u,!0);const h=oe({},wu(s.value,c,null),{position:u.position+1},a);r(c,h,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function Ly(t){t=vm(t);const e=xm(t),n=Am(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=oe({location:"",base:t,go:s,createHref:bm.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Pm(t){return typeof t=="string"||t&&typeof t=="object"}function bu(t){return typeof t=="string"||typeof t=="symbol"}const St={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Iu=Tn("nf");var Tu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Tu||(Tu={}));function Nn(t,e){return oe(new Error,{type:t,[Iu]:!0},e)}function Yt(t,e){return t instanceof Error&&Iu in t&&(e==null||!!(t.type&e))}const Su="[^/]+?",Om={sensitive:!1,strict:!1,start:!0,end:!0},Mm=/[.+*?^${}()[\]/\\]/g;function km(t,e){const n=oe({},Om,e),s=[];let i=n.start?"^":"";const r=[];for(const a of t){const u=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let h=0;h<a.length;h++){const f=a[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(Mm,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:N,optional:R,regexp:x}=f;r.push({name:m,repeatable:N,optional:R});const F=x||Su;if(F!==Su){_+=10;try{new RegExp(`(${F})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${m}" (${F}): `+z.message)}}let V=N?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(V=R&&a.length<2?`(?:/${V})`:"/"+V),R&&(V+="?"),i+=V,_+=20,R&&(_+=-8),N&&(_+=-20),F===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const a=s.length-1;s[a][s[a].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(a){const u=a.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function c(a){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:N,optional:R}=_,x=m in a?a[m]:"";if(Array.isArray(x)&&!N)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const F=Array.isArray(x)?x.join("/"):x;if(!F)if(R)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=F}}return u}return{re:o,score:s,keys:r,parse:l,stringify:c}}function Dm(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Fm(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Dm(s[n],i[n]);if(r)return r;n++}return i.length-s.length}const Lm={type:0,value:""},Bm=/[a-zA-Z0-9_]/;function Wm(t){if(!t)return[[]];if(t==="/")return[[Lm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${a}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,a="",u="";function h(){!a||(n===0?r.push({type:0,value:a}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:a,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),a="")}function f(){a+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(a&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:Bm.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${a}"`),h(),o(),i}function Um(t,e,n){const s=km(Wm(t.path),n),i=oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Hm(t,e){const n=[],s=new Map;e=Nu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,m=Vm(u);m.aliasOf=f&&f.record;const N=Nu(e,u),R=[m];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of V)R.push(oe({},m,{components:f?f.record.components:m.components,path:z,aliasOf:f?f.record:m}))}let x,F;for(const V of R){const{path:z}=V;if(h&&z[0]!=="/"){const le=h.record.path,pe=le[le.length-1]==="/"?"":"/";V.path=h.record.path+(z&&pe+z)}if(x=Um(V,h,N),f?f.alias.push(x):(F=F||x,F!==x&&F.alias.push(x),_&&u.name&&!Ru(x)&&o(u.name)),"children"in m){const le=m.children;for(let pe=0;pe<le.length;pe++)r(le[pe],x,f&&f.children[pe])}f=f||x,c(x)}return F?()=>{o(F)}:us}function o(u){if(bu(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function c(u){let h=0;for(;h<n.length&&Fm(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!Ru(u)&&s.set(u.record.name,u)}function a(u,h){let f,_={},m,N;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Nn(1,{location:u});N=f.record.name,_=oe($m(h.params,f.keys.filter(F=>!F.optional).map(F=>F.name)),u.params),m=f.stringify(_)}else if("path"in u)m=u.path,f=n.find(F=>F.re.test(m)),f&&(_=f.parse(m),N=f.record.name);else{if(f=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!f)throw Nn(1,{location:u,currentLocation:h});N=f.record.name,_=oe({},h.params,u.params),m=f.stringify(_)}const R=[];let x=f;for(;x;)R.unshift(x.record),x=x.parent;return{name:N,path:m,params:_,matched:R,meta:zm(R)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:a,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function $m(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Vm(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:jm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function jm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ru(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function zm(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function Nu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const Au=/#/g,Km=/&/g,qm=/\//g,Gm=/=/g,Ym=/\?/g,xu=/\+/g,Qm=/%5B/g,Xm=/%5D/g,Pu=/%5E/g,Jm=/%60/g,Ou=/%7B/g,Zm=/%7C/g,Mu=/%7D/g,ey=/%20/g;function vo(t){return encodeURI(""+t).replace(Zm,"|").replace(Qm,"[").replace(Xm,"]")}function ty(t){return vo(t).replace(Ou,"{").replace(Mu,"}").replace(Pu,"^")}function wo(t){return vo(t).replace(xu,"%2B").replace(ey,"+").replace(Au,"%23").replace(Km,"%26").replace(Jm,"`").replace(Ou,"{").replace(Mu,"}").replace(Pu,"^")}function ny(t){return wo(t).replace(Gm,"%3D")}function sy(t){return vo(t).replace(Au,"%23").replace(Ym,"%3F")}function iy(t){return t==null?"":sy(t).replace(qm,"%2F")}function Ci(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ry(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(xu," "),o=r.indexOf("="),l=Ci(o<0?r:r.slice(0,o)),c=o<0?null:Ci(r.slice(o+1));if(l in e){let a=e[l];Array.isArray(a)||(a=e[l]=[a]),a.push(c)}else e[l]=c}return e}function ku(t){let e="";for(let n in t){const s=t[n];if(n=ny(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(r=>r&&wo(r)):[s&&wo(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function oy(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}function ds(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Rt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(Nn(4,{from:n,to:e})):h instanceof Error?l(h):Pm(h)?l(Nn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},a=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(a);t.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function bo(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(ly(l)){const a=(l.__vccOpts||l)[e];a&&i.push(Rt(a,n,s,r,o))}else{let c=l();i.push(()=>c.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=pm(a)?a.default:a;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Rt(f,n,s,r,o)()}))}}return i}function ly(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Du(t){const e=yt(go),n=yt(gu),s=st(()=>e.resolve(Fn(t.to))),i=st(()=>{const{matched:c}=s.value,{length:a}=c,u=c[a-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Rn.bind(null,u));if(f>-1)return f;const _=Fu(c[a-2]);return a>1&&Fu(u)===_&&h[h.length-1].path!==_?h.findIndex(Rn.bind(null,c[a-2])):f}),r=st(()=>i.value>-1&&hy(n.params,s.value.params)),o=st(()=>i.value>-1&&i.value===n.matched.length-1&&yu(n.params,s.value.params));function l(c={}){return uy(c)?e[Fn(t.replace)?"replace":"push"](Fn(t.to)).catch(us):Promise.resolve()}return{route:s,href:st(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const cy=ul({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Du,setup(t,{slots:e}){const n=kn(Du(t)),{options:s}=yt(go),i=st(()=>({[Lu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Lu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Xl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ay=cy;function uy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hy(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Array.isArray(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Fu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Lu=(t,e,n)=>t!=null?t:e!=null?e:n,fy=ul({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=yt(mo),i=st(()=>t.route||s.value),r=yt(_u,0),o=st(()=>i.value.matched[r]);xs(_u,r+1),xs(dm,o),xs(mo,i);const l=Sh();return js(()=>[l.value,o.value,t.name],([c,a,u],[h,f,_])=>{a&&(a.instances[u]=c,f&&f!==a&&c&&c===h&&(a.leaveGuards.size||(a.leaveGuards=f.leaveGuards),a.updateGuards.size||(a.updateGuards=f.updateGuards))),c&&a&&(!f||!Rn(a,f)||!h)&&(a.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,a=o.value,u=a&&a.components[t.name],h=t.name;if(!u)return Bu(n.default,{Component:u,route:c});const f=a.props[t.name],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,N=Xl(u,oe({},_,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(a.instances[h]=null)},ref:l}));return Bu(n.default,{Component:N,route:c})||N}}});function Bu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const dy=fy;function By(t){const e=Hm(t.routes,t),n=t.parseQuery||ry,s=t.stringifyQuery||ku,i=t.history,r=ds(),o=ds(),l=ds(),c=Rh(St);let a=St;Sn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=yo.bind(null,y=>""+y),h=yo.bind(null,iy),f=yo.bind(null,Ci);function _(y,O){let S,M;return bu(y)?(S=e.getRecordMatcher(y),M=O):M=y,e.addRoute(M,S)}function m(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function N(){return e.getRoutes().map(y=>y.record)}function R(y){return!!e.getRecordMatcher(y)}function x(y,O){if(O=oe({},O||c.value),typeof y=="string"){const H=Co(n,y,O.path),d=e.resolve({path:H.path},O),p=i.createHref(H.fullPath);return oe(H,d,{params:f(d.params),hash:Ci(H.hash),redirectedFrom:void 0,href:p})}let S;if("path"in y)S=oe({},y,{path:Co(n,y.path,O.path).path});else{const H=oe({},y.params);for(const d in H)H[d]==null&&delete H[d];S=oe({},y,{params:h(y.params)}),O.params=h(O.params)}const M=e.resolve(S,O),ne=y.hash||"";M.params=u(f(M.params));const ae=mm(s,oe({},y,{hash:ty(ne),path:M.path})),K=i.createHref(ae);return oe({fullPath:ae,hash:ne,query:s===ku?oy(y.query):y.query||{}},M,{redirectedFrom:void 0,href:K})}function F(y){return typeof y=="string"?Co(n,y,c.value.path):oe({},y)}function V(y,O){if(a!==y)return Nn(8,{from:O,to:y})}function z(y){return W(y)}function le(y){return z(oe(F(y),{replace:!0}))}function pe(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:S}=O;let M=typeof S=="function"?S(y):S;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=F(M):{path:M},M.params={}),oe({query:y.query,hash:y.hash,params:y.params},M)}}function W(y,O){const S=a=x(y),M=c.value,ne=y.state,ae=y.force,K=y.replace===!0,H=pe(S);if(H)return W(oe(F(H),{state:ne,force:ae,replace:K}),O||S);const d=S;d.redirectedFrom=O;let p;return!ae&&ym(s,M,S)&&(p=Nn(16,{to:d,from:M}),Jt(M,M,!0,!1)),(p?Promise.resolve(p):Z(d,M)).catch(g=>Yt(g)?g:ce(g,d,M)).then(g=>{if(g){if(Yt(g,2))return W(oe(F(g.to),{state:ne,force:ae,replace:K}),O||d)}else g=ge(d,M,!0,K,ne);return ve(d,M,g),g})}function ee(y,O){const S=V(y,O);return S?Promise.reject(S):Promise.resolve()}function Z(y,O){let S;const[M,ne,ae]=py(y,O);S=bo(M.reverse(),"beforeRouteLeave",y,O);for(const H of M)H.leaveGuards.forEach(d=>{S.push(Rt(d,y,O))});const K=ee.bind(null,y,O);return S.push(K),An(S).then(()=>{S=[];for(const H of r.list())S.push(Rt(H,y,O));return S.push(K),An(S)}).then(()=>{S=bo(ne,"beforeRouteUpdate",y,O);for(const H of ne)H.updateGuards.forEach(d=>{S.push(Rt(d,y,O))});return S.push(K),An(S)}).then(()=>{S=[];for(const H of y.matched)if(H.beforeEnter&&!O.matched.includes(H))if(Array.isArray(H.beforeEnter))for(const d of H.beforeEnter)S.push(Rt(d,y,O));else S.push(Rt(H.beforeEnter,y,O));return S.push(K),An(S)}).then(()=>(y.matched.forEach(H=>H.enterCallbacks={}),S=bo(ae,"beforeRouteEnter",y,O),S.push(K),An(S))).then(()=>{S=[];for(const H of o.list())S.push(Rt(H,y,O));return S.push(K),An(S)}).catch(H=>Yt(H,8)?H:Promise.reject(H))}function ve(y,O,S){for(const M of l.list())M(y,O,S)}function ge(y,O,S,M,ne){const ae=V(y,O);if(ae)return ae;const K=O===St,H=Sn?history.state:{};S&&(M||K?i.replace(y.fullPath,oe({scroll:K&&H&&H.scroll},ne)):i.push(y.fullPath,ne)),c.value=y,Jt(y,O,S,K),Ve()}let xe;function _t(){xe=i.listen((y,O,S)=>{const M=x(y),ne=pe(M);if(ne){W(oe(ne,{replace:!0}),M).catch(us);return}a=M;const ae=c.value;Sn&&Sm(Eu(ae.fullPath,S.delta),yi()),Z(M,ae).catch(K=>Yt(K,4|8)?K:Yt(K,2)?(W(K.to,M).then(H=>{Yt(H,4|16)&&!S.delta&&S.type===hs.pop&&i.go(-1,!1)}).catch(us),Promise.reject()):(S.delta&&i.go(-S.delta,!1),ce(K,M,ae))).then(K=>{K=K||ge(M,ae,!1),K&&(S.delta?i.go(-S.delta,!1):S.type===hs.pop&&Yt(K,4|16)&&i.go(-1,!1)),ve(M,ae,K)}).catch(us)})}let Qt=ds(),Xt=ds(),ye;function ce(y,O,S){Ve(y);const M=Xt.list();return M.length?M.forEach(ne=>ne(y,O,S)):console.error(y),Promise.reject(y)}function te(){return ye&&c.value!==St?Promise.resolve():new Promise((y,O)=>{Qt.add([y,O])})}function Ve(y){ye||(ye=!0,_t(),Qt.list().forEach(([O,S])=>y?S(y):O()),Qt.reset())}function Jt(y,O,S,M){const{scrollBehavior:ne}=t;if(!Sn||!ne)return Promise.resolve();const ae=!S&&Rm(Eu(y.fullPath,0))||(M||!S)&&history.state&&history.state.scroll||null;return Vl().then(()=>ne(y,O,ae)).then(K=>K&&Tm(K)).catch(K=>ce(K,y,O))}const lt=y=>i.go(y);let et;const je=new Set;return{currentRoute:c,addRoute:_,removeRoute:m,hasRoute:R,getRoutes:N,resolve:x,options:t,push:z,replace:le,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Xt.add,isReady:te,install(y){const O=this;y.component("RouterLink",ay),y.component("RouterView",dy),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Fn(c)}),Sn&&!et&&c.value===St&&(et=!0,z(i.location).catch(ne=>{}));const S={};for(const ne in St)S[ne]=st(()=>c.value[ne]);y.provide(go,O),y.provide(gu,kn(S)),y.provide(mo,c);const M=y.unmount;je.add(y),y.unmount=function(){je.delete(y),je.size<1&&(a=St,xe&&xe(),c.value=St,et=!1,ye=!1),M()}}}}function An(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function py(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(a=>Rn(a,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(a=>Rn(a,c))||i.push(c))}return[n,s,i]}export{Ry as A,Ny as B,ky as C,My as D,Ay as E,Ue as F,Dy as G,as as H,xs as I,xy as J,By as K,Ly as L,Py as M,Ey as T,ke as a,If as b,wy as c,yy as d,Dl as e,Sh as f,_y as g,Iy as h,Ml as i,by as j,Ty as k,Oy as l,Fy as m,bi as n,xl as o,my as p,st as q,vy as r,kn as s,gy as t,Sy as u,js as v,kh as w,wi as x,yt as y,Cy as z};
