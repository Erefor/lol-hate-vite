import{r as d,o as u,c as p,a as l,w as m,b as g,p as ce,d as ue,e as h,t as E,f as c,u as q,g as $,F as I,h as k,i as x,j as J,n as w,k as D,T as de,l as _e,m as me,q as V,s as pe,v as fe,x as ve,y as M,z as K,A as ge,B as be,C as ye,D as B,E as z,G as H,H as U,I as j,J as Se,K as he,L as $e,M as xe}from"./vendor.ab57cba0.js";const we=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};we();var S=(t,a)=>{for(const[o,e]of a)t[o]=e;return t};const Je={name:"IndexMainPage"},F=t=>(ce("data-v-36a57830"),t=t(),ue(),t),De={class:"tab-inicio"},Ve=g(" \xBFQu\xE9 es LoL Hate? "),Te=g(" Debido a la falta de un sistema de registro de las experiencias entre los jugadores en partidas de League of Legends surge LoL Hate. Un lugar donde se puede comentar, registrar y revisar experiencias propias o de otros jugadores a trav\xE9s de su nombre de invocador. "),Ie=g(" No solo se busca generar registros, sino ofrecer un espacio donde cualquier invocador puedes desahogar cualquier sentimiento proveniente de la conclusi\xF3n de una partida de League of Legends, sin importar si es una victoria o derrota. "),ke=g(" \xBFC\xF3mo usar la plataforma? "),Le=g(" Usar LoL Hate es f\xE1cil, puedes buscar un jugador a trav\xE9s de su nombre de invocador y darle un vistazo a los comentarios que se hayan generado hasta ese momento. "),Me=g(" Por otra parte, si deseas escribir alg\xFAn comentario, insulto, propuesta, recomendaci\xF3n, etc. Puedes dar clic sobre la peque\xF1a pesta\xF1a con el texto "),Ce=F(()=>h("strong",null,"reportar",-1)),qe=g(" y generar un comentario para ese jugador "),Be=g(" Informaci\xF3n adicional "),je=g(" LoL Hate se encuentra en fase beta, es posible que se apliquen cambios o mejoras en la plataforma, debido a esto, existe la posibilidad de que los registros o comentarios sobre los jugadores sean eliminados. Esperamos que no sea as\xED. Si tienes ideas, comentarios, mejoras, insultos o solo te gustar\xEDa agradecer, puedes enviarme un correo a "),Re=F(()=>h("strong",null,"lolhateforthewin@gmail.com",-1));function Ae(t,a,o,e,n,s){const r=d("JSText");return u(),p("div",De,[l(r,{class:"margin-bottom",variant:"subtitle"},{default:m(()=>[Ve]),_:1}),l(r,{class:"margin-bottom",variant:"description"},{default:m(()=>[Te]),_:1}),l(r,{class:"margin-bottom",variant:"description"},{default:m(()=>[Ie]),_:1}),l(r,{class:"margin-bottom",variant:"subtitle"},{default:m(()=>[ke]),_:1}),l(r,{class:"margin-bottom",variant:"description"},{default:m(()=>[Le]),_:1}),l(r,{class:"margin-bottom",variant:"description"},{default:m(()=>[Me,Ce,qe]),_:1}),l(r,{class:"margin-bottom",variant:"subtitle"},{default:m(()=>[Be]),_:1}),l(r,{variant:"description"},{default:m(()=>[je,Re]),_:1})])}var G=S(Je,[["render",Ae],["__scopeId","data-v-36a57830"]]),Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});const R={emits:["update:modelValue","campos-validos"],props:{modelValue:{type:String,default:""},label:{type:String,required:!1,default:"Label aqu\xED"},type:{type:String,default:"text"},placeholder:{type:String,default:""},rules:{type:Array,required:!1,default:()=>[]},width:{type:String,required:!1,default:null},labelVariant:{type:String,default:"text"}},setup(t,{emit:a}){const{modelValue:o}=E(t),e=c(!0),n=c([]),s=c([]),r=c(t.width?t.width:"322px"),i=b=>{if(s.value=[],n.value=[],t.rules.forEach(y=>{const f=y(b);n.value.push(f),s.value.push(f),s.value=s.value.map(L=>typeof L!="boolean"?L:"")}),n.value.length===t.rules.length){e.value=n.value.every(y=>y===!0);return}e.value=!1};function _(b){i(b.target.value),a("update:modelValue",b.target.value)}function v(){return i(o.value),e.value}return{valid:e,errores:n,inputWidth:r,mensajesDeError:s,tomarValidacionDeCampo:v,update:_}}},W=()=>{q(t=>({"2071e040":t.inputWidth}))},Q=R.setup;R.setup=Q?(t,a)=>(W(),Q(t,a)):W;const Pe=R,Oe=["placeholder","type","value"],Ee={key:0,class:"errores"};function Ke(t,a,o,e,n,s){const r=d("JSText");return u(),p("div",{class:w(["contenedor-input",{campoInvalido:!e.valid}])},[l(r,{variant:o.labelVariant,class:"label"},{default:m(()=>[g($(o.label),1)]),_:1},8,["variant"]),h("input",{class:"input",placeholder:o.placeholder,type:o.type,value:o.modelValue,onInput:a[0]||(a[0]=(...i)=>e.update&&e.update(...i))},null,40,Oe),e.mensajesDeError.length?(u(),p("div",Ee,[(u(!0),p(I,null,k(e.mensajesDeError,(i,_)=>(u(),x(r,{variant:"text",color:"red",key:_},{default:m(()=>[g($(i),1)]),_:2},1024))),128))])):J("",!0)],2)}var Y=S(Pe,[["render",Ke],["__scopeId","data-v-0bf6d0ee"]]);const ze={name:"JSDialog",emits:["update:modelValue"],props:{modelValue:{type:Boolean,default:!0,required:!1}}},He={key:0,class:"modal-mask"},Ue={class:"modal-wrapper"};function Fe(t,a,o,e,n,s){return u(),x(de,{to:"body"},[o.modelValue?(u(),p("div",He,[h("div",Ue,[D(t.$slots,"default")])])):J("",!0)])}var C=S(ze,[["render",Fe]]);const Ge={name:"JSModalBody"};function We(t,a,o,e,n,s){return u(),p("div",null,[D(t.$slots,"default",{},void 0,!0)])}var Qe=S(Ge,[["render",We],["__scopeId","data-v-fba024ee"]]);const Ye={name:"NoDataModal",components:{JSModalBody:Qe},emits:["action"],props:{buttonText:{type:String,default:"Texto",required:!0},description:{type:String,default:"Description",required:!1},descriptionVariant:{type:String,default:"title",required:!1}}};function Ze(t,a,o,e,n,s){const r=d("JSText"),i=d("JSButton"),_=d("JSModalBody");return u(),x(_,{class:"container"},{default:m(()=>[l(r,{variant:o.descriptionVariant},{default:m(()=>[g($(o.description),1)]),_:1},8,["variant"]),l(i,{onClick:a[0]||(a[0]=v=>t.$emit("action"))},{default:m(()=>[g($(o.buttonText),1)]),_:1})]),_:1})}var A=S(Ye,[["render",Ze],["__scopeId","data-v-5555b162"]]);async function Z(t="",a=""){var n,s;const o=c(),e=(n=await fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${t}?api_key=${a}`))!=null?n:null;return o.value=(s=await e.json())!=null?s:null,o.value}const Xe={apiKey:"AIzaSyClMHJDb3aWMcbyvZD7i0jD14yDvrYhfuM",authDomain:"prueba-379df.firebaseapp.com",databaseURL:"https://prueba-379df-default-rtdb.firebaseio.com",projectId:"prueba-379df",storageBucket:"prueba-379df.appspot.com",messagingSenderId:"1003715560659",appId:"1:1003715560659:web:04415b788a99b362918026",measurementId:"G-P6HV0DG0D7"};_e(Xe);const N=me();const et={name:"SummonerCard",props:{summonerData:{type:Object,required:!0,default:()=>{}}}},tt={class:"card-container"},at={class:"image"},ot=["src"],nt={class:"texts"},rt=["href"];function st(t,a,o,e,n,s){const r=d("JSText");return u(),p("div",tt,[h("div",at,[h("img",{src:`https://ddragon.leagueoflegends.com/cdn/11.22.1/img/profileicon/${o.summonerData.profileIconId||1}.png`,alt:"summoner image"},null,8,ot)]),h("div",nt,[l(r,{variant:"subtitle"},{default:m(()=>[g($(o.summonerData.name),1)]),_:1}),l(r,{variant:"subtitle"},{default:m(()=>[g($(o.summonerData.summonerLevel)+" lvl ",1)]),_:1}),l(r,{variant:"description"},{default:m(()=>[h("a",{target:"_blank",href:`https://lan.op.gg/summoner/userName=${o.summonerData.name}`},"OP.GG",8,rt)]),_:1})])])}var X=S(et,[["render",st],["__scopeId","data-v-557ab5ff"]]);const P={props:{tamanio:{type:String,required:!1,default:"sm"},borderColor:{type:String,required:!1,default:""},nombreDeIcono:{type:String,required:!1,default:"link"},color:{type:String,required:!1,default:"primary"},backgroundColor:{type:String,required:!1,default:""},borderRadius:{type:String,required:!1,default:null}},setup(t){const a=c("image"),o=c(t.borderRadius?t.borderRadius:"0px"),e=c({sm:"contenedor-icono-sm",md:"contenedor-icono-md",lg:"contenedor-icono-lg"}),n=c({primary:"primary",black:"black"}),s=c({primary:"color-primary",black:"color-black",white:"color-white",yellow:"color-yellow",grey:"color-grey",red:"color-red"}),r=c({primary:"primary-background",secondary:"secondary-background",black:"black-background",white:"white-background"}),i=V(()=>`
        ${e.value[t.tamanio]} ${n.value[t.borderColor]}
        ${s.value[t.color]} ${r.value[t.backgroundColor]}
        `);return{icono:a,configuracionIcono:i,iconBorderRadius:o}}},ee=()=>{q(t=>({"789c42b0":t.iconBorderRadius}))},te=P.setup;P.setup=te?(t,a)=>(ee(),te(t,a)):ee;const lt=P,it={class:"material-icons"};function ct(t,a,o,e,n,s){return u(),p("div",{class:w(e.configuracionIcono)},[h("span",it,$(o.nombreDeIcono),1)],2)}var ae=S(lt,[["render",ct],["__scopeId","data-v-813b2e66"]]);const ut={name:"JSSelect",components:{JSIcon:ae},emits:["update:modelValue"],props:{options:{type:Array,required:!0,default:()=>[]},label:{type:String,required:!1,default:"Label aqu\xED"},disabled:{type:Boolean,required:!1,default:!1},optionLabel:{type:String,required:!1,default:null},optionValue:{type:String,required:!1,default:null},size:{type:String,default:"sm",required:!1,validator:t=>["sm","md","full"].includes(t)},labelVariant:{type:String,default:"text"},styleLabel:{type:Object,default:null}},setup(t,{emit:a}){const o=c(!1),e=c(t.label),n=c(t.optionValue),s=c(t.optionLabel),r=c(t.options.length>0?t.options[0]:"Cargando..."),i=c(t.options),_=c(t.labelVariant),v=pe({sm:"selector-sm",md:"selector-md",full:"selector-full"}),b=V(()=>o.value?"arrow_drop_up":"arrow_drop_down");function y(ie){r.value=ie,t.optionValue!=null&&t.optionLabel!=null?a("update:modelValue",r.value[`${n.value}`]):a("update:modelValue",r.value)}const f=V(()=>t.disabled?[v[t.size],"disabled"]:v[t.size]),L=V(()=>t.disabled?()=>{}:()=>o.value=!o.value),le=V(()=>t.optionValue!=null&&t.optionLabel!=null);return fe(()=>t.options,()=>{i.value=t.options,r.value=i.value[0]},{deep:!0}),{componentLabel:e,componentOptionValue:n,componentOptionLabel:s,open:o,modelValue:r,setSize:f,updateModel:y,setToggleAction:L,isObject:le,componentOptions:i,iconArrowDirection:b,componentLabelVariant:_}}},dt={class:"select"},_t=["onClick"],mt=["onClick"];function pt(t,a,o,e,n,s){const r=d("JSText"),i=d("JSIcon");return u(),p("div",{class:w(e.setSize),onClick:a[0]||(a[0]=(..._)=>e.setToggleAction&&e.setToggleAction(..._))},[h("label",null,[l(r,{variant:e.componentLabelVariant,style:ve(o.styleLabel)},{default:m(()=>[g($(e.componentLabel),1)]),_:1},8,["variant","style"])]),h("div",dt,$(e.isObject?e.modelValue[`${e.componentOptionLabel}`]:e.modelValue),1),e.isObject?(u(),p("div",{key:1,class:w(["items",{selectHide:!e.open}])},[(u(!0),p(I,null,k(e.componentOptions,(_,v)=>(u(),p("div",{key:v,class:"item",onClick:b=>e.updateModel(_)},$(_[`${e.componentOptionLabel}`]),9,mt))),128))],2)):(u(),p("div",{key:0,class:w(["items",{selectHide:!e.open}])},[(u(!0),p(I,null,k(e.componentOptions,(_,v)=>(u(),p("div",{key:v,class:"item",onClick:b=>e.updateModel(_)},$(_),9,_t))),128))],2)),l(i,{class:"icono",tamanio:"sm","nombre-de-icono":e.iconArrowDirection},null,8,["nombre-de-icono"])],2)}var ft=S(ut,[["render",pt],["__scopeId","data-v-2c0a5d51"]]);const vt={name:"JSSpinner"},gt={class:"spinner"};function bt(t,a,o,e,n,s){return u(),p("div",gt)}var yt=S(vt,[["render",bt],["__scopeId","data-v-c5948dbe"]]);const St={name:"LoadingIndicator",components:{Spinner:yt,JSDialog:C}};function ht(t,a,o,e,n,s){const r=d("Spinner"),i=d("JSDialog");return u(),x(i,null,{default:m(()=>[l(r)]),_:1})}var oe=S(St,[["render",ht]]);const $t={name:"ReportSection",components:{SummonerCard:X,JSSelect:ft,LoadingIndicator:oe,NotificationModal:A,JSDialog:C},props:{summonerData:{type:[Object,null],required:!0,default:()=>{}}},setup(t){const a=c(""),o=c("Buen jugador"),e=M("selectSearchSection"),n=c(!1),s=c(!1),r=c(!1),i=c(["Buen jugador","Se fue Afk","Ayuda al equipo enemigo","T\xF3xico como el cianuro","Muerte intencional","Prueba campeones en ranked","Insult\xF3 a mi madre","P\xE9simo jugador","Perdimos por su culpa","Solo deseo insultarlo","Me carreo","Buenas calls"]);async function _(){if(n.value=!0,a.value.length<10){n.value=!1,r.value=!0;return}await ye(B(N,`summoners/${t.summonerData.name}/reviews`),{review:a.value,reason:o.value}),n.value=!1,s.value=!0}function v(){s.value=!1,a.value="",o.value=i.value[0],e()}return{options:i,reviewTag:o,review:a,loading:n,showSuccessModal:s,showInvalidFieldModal:r,submitReview:_,resetSection:v}}},xt={key:0,class:"report-section"},wt=g("Enviar");function Jt(t,a,o,e,n,s){const r=d("LoadingIndicator"),i=d("SummonerCard"),_=d("JSSelect"),v=d("JSButton"),b=d("NotificationModal"),y=d("JSDialog");return o.summonerData?(u(),p("div",xt,[l(r,{modelValue:e.loading,"onUpdate:modelValue":a[0]||(a[0]=f=>e.loading=f)},null,8,["modelValue"]),o.summonerData?(u(),x(i,{key:0,summonerData:o.summonerData},null,8,["summonerData"])):J("",!0),h("form",{onSubmit:a[3]||(a[3]=be((...f)=>e.submitReview&&e.submitReview(...f),["prevent"]))},[l(_,{options:e.options,size:"full",label:"Selecciona un etiqueta",modelValue:e.reviewTag,"onUpdate:modelValue":a[1]||(a[1]=f=>e.reviewTag=f)},null,8,["options","modelValue"]),K(h("textarea",{"onUpdate:modelValue":a[2]||(a[2]=f=>e.review=f),placeholder:"Agrega aqu\xED tu comentario"},null,512),[[ge,e.review]]),l(v,null,{default:m(()=>[wt]),_:1})],32),l(y,{modelValue:e.showSuccessModal,"onUpdate:modelValue":a[4]||(a[4]=f=>e.showSuccessModal=f)},{default:m(()=>[l(b,{class:"center",onAction:e.resetSection,description:"Tu comentario se ha guardado","button-text":"Entendido"},null,8,["onAction"])]),_:1},8,["modelValue"]),l(y,{modelValue:e.showInvalidFieldModal,"onUpdate:modelValue":a[6]||(a[6]=f=>e.showInvalidFieldModal=f)},{default:m(()=>[l(b,{class:"center",onAction:a[5]||(a[5]=f=>e.showInvalidFieldModal=!1),description:"Debes agregar un comentario valido, por favor","button-text":"Entendido"})]),_:1},8,["modelValue"])])):J("",!0)}var Dt=S($t,[["render",Jt],["__scopeId","data-v-6de077ad"]]);const Vt={name:"IndexReportPage",components:{ReportSection:Dt,JSInput:Y,JSDialog:C,NotificationModal:A},setup(){const t=c(""),a=M("apiKey"),o=c(null),e=c(!1),n=c(null),s=c(!1);async function r(){if(s.value=!0,!n.value.tomarValidacionDeCampo()){s.value=!1;return}try{o.value=null,o.value=await Z(t.value,a.value),s.value=!1}catch{s.value=!1,e.value=!0}}return{summonerName:t,summonerData:o,apiKey:a,showModal:e,input:n,loading:s,getSummonerData:r}}},Tt={class:"inputs"},It=g(" Buscar invocador ");function kt(t,a,o,e,n,s){const r=d("LoadingIndicator"),i=d("JSInput"),_=d("JSButton"),v=d("NotificationModal"),b=d("JSDialog"),y=d("ReportSection");return u(),p("div",null,[e.loading?(u(),x(r,{key:0})):J("",!0),h("div",Tt,[l(i,{ref:"input",label:"Buscar invocador",modelValue:e.summonerName,"onUpdate:modelValue":a[0]||(a[0]=f=>e.summonerName=f),rules:[f=>f.trim()!==""||"Agrega un nombre valido"],onKeypress:z(e.getSummonerData,["enter"])},null,8,["modelValue","rules","onKeypress"]),l(_,{onClick:e.getSummonerData},{default:m(()=>[It]),_:1},8,["onClick"])]),l(b,{modelValue:e.showModal,"onUpdate:modelValue":a[2]||(a[2]=f=>e.showModal=f)},{default:m(()=>[l(v,{class:"center",description:"No hay jugadores con ese nombre","button-text":"Entendido",onAction:a[1]||(a[1]=f=>e.showModal=!1)})]),_:1},8,["modelValue"]),l(y,{"summoner-data":e.summonerData},null,8,["summoner-data"])])}var Lt=S(Vt,[["render",kt],["__scopeId","data-v-e20e8ce8"]]);const Mt={name:"ReviewsSection",components:{SummonerCard:X},props:{summonerData:{type:[Object,null],required:!0,default:()=>{}}},setup(t){const a=c([]);async function o(){const e=await H(await U(B(N),`/summoners/${t.summonerData.name}/reviews`));if(e.exists()){a.value=e.val();return}a.value[0]={reason:"",review:"Este jugador a\xFAn no tiene ning\xFAn comentario"}}return o(),{reviews:a}}},Ct={class:"reviews-section"};function qt(t,a,o,e,n,s){const r=d("SummonerCard"),i=d("JSText");return u(),p("div",Ct,[o.summonerData?(u(),x(r,{key:0,summonerData:o.summonerData},null,8,["summonerData"])):J("",!0),h("ul",null,[(u(!0),p(I,null,k(e.reviews,({review:_,reason:v},b)=>(u(),p("li",{key:b,class:"review-item"},[l(i,{variant:"text"},{default:m(()=>[h("strong",null,$(v),1)]),_:2},1024),l(i,{variant:"description"},{default:m(()=>[g($(_),1)]),_:2},1024)]))),128))])])}var Bt=S(Mt,[["render",qt],["__scopeId","data-v-215b4fe0"]]);const jt={name:"SearchPageIndex",components:{ReviewsSection:Bt,JSInput:Y,JSDialog:C,NotificationModal:A},setup(){const t=c(""),a=M("apiKey"),o=c(!1),e=c(null),n=c(null),s=c(!1);async function r(){if(o.value=!0,!e.value.tomarValidacionDeCampo()){o.value=!1;return}try{n.value=null,n.value=await Z(t.value,a.value),o.value=!1}catch{o.value=!1,s.value=!0}}return{input:e,summonerName:t,summonerData:n,showModal:s,getSummonerData:r}}},Rt={class:"search-container"},At={class:"inputs"},Nt=g(" Buscar invocador ");function Pt(t,a,o,e,n,s){const r=d("JSInput"),i=d("JSButton"),_=d("NotificationModal"),v=d("JSDialog"),b=d("ReviewsSection");return u(),p("div",Rt,[h("div",At,[l(r,{ref:"input",label:"Buscar invocador",modelValue:e.summonerName,"onUpdate:modelValue":a[0]||(a[0]=y=>e.summonerName=y),rules:[y=>y.trim()!==""||"Agrega un nombre valido"],onKeypress:z(e.getSummonerData,["enter"])},null,8,["modelValue","rules","onKeypress"]),l(i,{onClick:e.getSummonerData},{default:m(()=>[Nt]),_:1},8,["onClick"])]),l(v,{modelValue:e.showModal,"onUpdate:modelValue":a[2]||(a[2]=y=>e.showModal=y)},{default:m(()=>[l(_,{class:"center",description:"No hay jugadores con ese nombre","button-text":"Entendido",onAction:a[1]||(a[1]=y=>e.showModal=!1)})]),_:1},8,["modelValue"]),e.summonerData?(u(),x(b,{key:0,class:"reviews-section","summoner-data":e.summonerData},null,8,["summoner-data"])):J("",!0)])}var Ot=S(jt,[["render",Pt],["__scopeId","data-v-535bfc36"]]);const Et={name:"JSTabs",props:{tabTitleVariant:{type:String,default:"text",required:!1}},setup(t,{slots:a}){const o=c(a.default().map(s=>s.props.title)),e=c(o.value[0]);function n(){e.value=o.value[1]}return j("selectSearchSection",n),j("selectedTitle",e),{tabTitles:o,selectedTitle:e}}},Kt={class:"js-tabs"},zt={class:"js-tabs-header"},Ht=["onClick"];function Ut(t,a,o,e,n,s){const r=d("JSText");return u(),p("div",Kt,[h("ul",zt,[(u(!0),p(I,null,k(e.tabTitles,(i,_)=>(u(),p("li",{key:_,onClick:v=>e.selectedTitle=i,class:w({"js-selected-tab":e.selectedTitle===i})},[l(r,{variant:o.tabTitleVariant},{default:m(()=>[g($(i),1)]),_:2},1032,["variant"])],10,Ht))),128))]),D(t.$slots,"default",{},void 0,!0)])}var Ft=S(Et,[["render",Ut],["__scopeId","data-v-7e7f851e"]]);const Gt={name:"JSTab",props:{title:{type:String,default:"Titulo",required:!0}},setup(){return{selectedTitle:M("selectedTitle")}}},Wt={class:"tab-content"};function Qt(t,a,o,e,n,s){return K((u(),p("div",Wt,[D(t.$slots,"default",{},void 0,!0)],512)),[[Se,e.selectedTitle===o.title]])}var Yt=S(Gt,[["render",Qt],["__scopeId","data-v-ace057b2"]]);async function Zt(){return(await H(await U(B(N),"/apiKey"))).val()}const Xt={components:{JSTabs:Ft,Tab:Yt,MainPageTab:G,ReportPage:Lt,SearchPage:Ot},setup(){const t=c(null),a=c("LoL Hate / LATAM");async function o(){t.value=await Zt()}return o(),j("apiKey",t),{nombre:a,apiKey:t}}},ea={class:"contenedor-principal"};function ta(t,a,o,e,n,s){const r=d("JSText"),i=d("MainPageTab"),_=d("Tab"),v=d("SearchPage"),b=d("ReportPage"),y=d("JSTabs");return u(),p("div",ea,[l(r,{variant:"title",class:"titulo"},{default:m(()=>[g($(e.nombre),1)]),_:1}),l(y,{"tab-title-variant":"subtitle-text"},{default:m(()=>[l(_,{title:"Inicio"},{default:m(()=>[l(i)]),_:1}),l(_,{title:"Buscar"},{default:m(()=>[l(v)]),_:1}),l(_,{title:"Reportar"},{default:m(()=>[l(b)]),_:1})]),_:1})])}var aa=S(Xt,[["render",ta]]);const oa="modulepreload",ne={},na="/lol-hate-vite/",ra=function(a,o){return!o||o.length===0?a():Promise.all(o.map(e=>{if(e=`${na}${e}`,e in ne)return;ne[e]=!0;const n=e.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":oa,n||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),n)return new Promise((i,_)=>{r.addEventListener("load",i),r.addEventListener("error",_)})})).then(()=>a())},sa=[{path:"",name:"Home",component:()=>ra(()=>Promise.resolve().then(function(){return Ne}),void 0)}],la=he({history:$e(),routes:sa});const ia={name:"JSText",props:{variant:{type:String,default:"title",validator:t=>["title","subtitle","subtitle-text","description","text"].includes(t)}},data(){return{classes:[this.variant]}}};function ca(t,a,o,e,n,s){return u(),p("div",{class:w(o.variant)},[D(t.$slots,"default")],2)}var ua=S(ia,[["render",ca]]);const O={name:"JSButton",props:{borderRadius:{type:String,default:"5px",required:!1},variant:{type:String,default:"default",required:!1,validator:t=>["default"].includes(t)},type:{type:String,default:"",required:!1}},setup(t){const{borderRadius:a}=E(t),o={default:"default"},e=V(()=>`
      ${o[t.variant]}`);return{componentBorderRadius:a,computedComponentClass:e}}},re=()=>{q(t=>({"72366ef7":t.componentBorderRadius}))},se=O.setup;O.setup=se?(t,a)=>(re(),se(t,a)):re;const da=O,_a=["type"];function ma(t,a,o,e,n,s){return u(),p("button",{type:o.type,class:w(e.computedComponentClass)},[D(t.$slots,"default",{},void 0,!0)],10,_a)}var pa=S(da,[["render",ma],["__scopeId","data-v-22841c00"]]);const T=xe(aa);T.component("JSText",ua);T.component("JSButton",pa);T.component("LoadingIndicator",oe);T.component("JSIcon",ae);T.use(la);T.mount("#app");