import{a,b as N,d as E,e as D,f as z,g as A}from"./chunk-KITGH3ML.js";var G=a((en,F)=>{var Yr=typeof global=="object"&&global&&global.Object===Object&&global;F.exports=Yr});var y=a((rn,H)=>{var Zr=G(),Br=typeof self=="object"&&self&&self.Object===Object&&self,Qr=Zr||Br||Function("return this")();H.exports=Qr});var q=a((tn,$)=>{var Wr=y(),kr=Wr.Symbol;$.exports=kr});var J=a((an,U)=>{var R=q(),K=Object.prototype,et=K.hasOwnProperty,rt=K.toString,d=R?R.toStringTag:void 0;function tt(e){var r=et.call(e,d),t=e[d];try{e[d]=void 0;var i=!0}catch{}var n=rt.call(e);return i&&(r?e[d]=t:delete e[d]),n}U.exports=tt});var X=a((nn,L)=>{var at=Object.prototype,it=at.toString;function nt(e){return it.call(e)}L.exports=nt});var C=a((on,Z)=>{var V=q(),ot=J(),st=X(),ut="[object Null]",ct="[object Undefined]",Y=V?V.toStringTag:void 0;function pt(e){return e==null?e===void 0?ct:ut:Y&&Y in Object(e)?ot(e):st(e)}Z.exports=pt});var b=a((sn,B)=>{function ft(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}B.exports=ft});var W=a((un,Q)=>{var ht=C(),lt=b(),gt="[object AsyncFunction]",dt="[object Function]",vt="[object GeneratorFunction]",_t="[object Proxy]";function xt(e){if(!lt(e))return!1;var r=ht(e);return r==dt||r==vt||r==gt||r==_t}Q.exports=xt});var ee=a((cn,k)=>{var yt=y(),qt=yt["__core-js_shared__"];k.exports=qt});var ae=a((pn,te)=>{var P=ee(),re=function(){var e=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function bt(e){return!!re&&re in e}te.exports=bt});var ne=a((fn,ie)=>{var mt=Function.prototype,St=mt.toString;function Ot(e){if(e!=null){try{return St.call(e)}catch{}try{return e+""}catch{}}return""}ie.exports=Ot});var se=a((hn,oe)=>{var Ct=W(),Pt=ae(),Tt=b(),wt=ne(),It=/[\\^$.*+?()[\]{}|]/g,jt=/^\[object .+?Constructor\]$/,Mt=Function.prototype,Nt=Object.prototype,Et=Mt.toString,Dt=Nt.hasOwnProperty,zt=RegExp("^"+Et.call(Dt).replace(It,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function At(e){if(!Tt(e)||Pt(e))return!1;var r=Ct(e)?zt:jt;return r.test(wt(e))}oe.exports=At});var ce=a((ln,ue)=>{function Ft(e,r){return e?.[r]}ue.exports=Ft});var m=a((gn,pe)=>{var Gt=se(),Ht=ce();function $t(e,r){var t=Ht(e,r);return Gt(t)?t:void 0}pe.exports=$t});var he=a((dn,fe)=>{var Rt=m(),Kt=function(){try{var e=Rt(Object,"defineProperty");return e({},"",{}),e}catch{}}();fe.exports=Kt});var de=a((vn,ge)=>{var le=he();function Ut(e,r,t){r=="__proto__"&&le?le(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}ge.exports=Ut});var T=a((_n,ve)=>{function Jt(e,r){return e===r||e!==e&&r!==r}ve.exports=Jt});var xe=a((xn,_e)=>{var Lt=de(),Xt=T(),Vt=Object.prototype,Yt=Vt.hasOwnProperty;function Zt(e,r,t){var i=e[r];(!(Yt.call(e,r)&&Xt(i,t))||t===void 0&&!(r in e))&&Lt(e,r,t)}_e.exports=Zt});var S=a((yn,ye)=>{var Bt=Array.isArray;ye.exports=Bt});var be=a((qn,qe)=>{function Qt(e){return e!=null&&typeof e=="object"}qe.exports=Qt});var O=a((bn,me)=>{var Wt=C(),kt=be(),ea="[object Symbol]";function ra(e){return typeof e=="symbol"||kt(e)&&Wt(e)==ea}me.exports=ra});var Oe=a((mn,Se)=>{var ta=S(),aa=O(),ia=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,na=/^\w*$/;function oa(e,r){if(ta(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||aa(e)?!0:na.test(e)||!ia.test(e)||r!=null&&e in Object(r)}Se.exports=oa});var v=a((Sn,Ce)=>{var sa=m(),ua=sa(Object,"create");Ce.exports=ua});var we=a((On,Te)=>{var Pe=v();function ca(){this.__data__=Pe?Pe(null):{},this.size=0}Te.exports=ca});var je=a((Cn,Ie)=>{function pa(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}Ie.exports=pa});var Ne=a((Pn,Me)=>{var fa=v(),ha="__lodash_hash_undefined__",la=Object.prototype,ga=la.hasOwnProperty;function da(e){var r=this.__data__;if(fa){var t=r[e];return t===ha?void 0:t}return ga.call(r,e)?r[e]:void 0}Me.exports=da});var De=a((Tn,Ee)=>{var va=v(),_a=Object.prototype,xa=_a.hasOwnProperty;function ya(e){var r=this.__data__;return va?r[e]!==void 0:xa.call(r,e)}Ee.exports=ya});var Ae=a((wn,ze)=>{var qa=v(),ba="__lodash_hash_undefined__";function ma(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=qa&&r===void 0?ba:r,this}ze.exports=ma});var Ge=a((In,Fe)=>{var Sa=we(),Oa=je(),Ca=Ne(),Pa=De(),Ta=Ae();function h(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var i=e[r];this.set(i[0],i[1])}}h.prototype.clear=Sa;h.prototype.delete=Oa;h.prototype.get=Ca;h.prototype.has=Pa;h.prototype.set=Ta;Fe.exports=h});var $e=a((jn,He)=>{function wa(){this.__data__=[],this.size=0}He.exports=wa});var _=a((Mn,Re)=>{var Ia=T();function ja(e,r){for(var t=e.length;t--;)if(Ia(e[t][0],r))return t;return-1}Re.exports=ja});var Ue=a((Nn,Ke)=>{var Ma=_(),Na=Array.prototype,Ea=Na.splice;function Da(e){var r=this.__data__,t=Ma(r,e);if(t<0)return!1;var i=r.length-1;return t==i?r.pop():Ea.call(r,t,1),--this.size,!0}Ke.exports=Da});var Le=a((En,Je)=>{var za=_();function Aa(e){var r=this.__data__,t=za(r,e);return t<0?void 0:r[t][1]}Je.exports=Aa});var Ve=a((Dn,Xe)=>{var Fa=_();function Ga(e){return Fa(this.__data__,e)>-1}Xe.exports=Ga});var Ze=a((zn,Ye)=>{var Ha=_();function $a(e,r){var t=this.__data__,i=Ha(t,e);return i<0?(++this.size,t.push([e,r])):t[i][1]=r,this}Ye.exports=$a});var Qe=a((An,Be)=>{var Ra=$e(),Ka=Ue(),Ua=Le(),Ja=Ve(),La=Ze();function l(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var i=e[r];this.set(i[0],i[1])}}l.prototype.clear=Ra;l.prototype.delete=Ka;l.prototype.get=Ua;l.prototype.has=Ja;l.prototype.set=La;Be.exports=l});var ke=a((Fn,We)=>{var Xa=m(),Va=y(),Ya=Xa(Va,"Map");We.exports=Ya});var tr=a((Gn,rr)=>{var er=Ge(),Za=Qe(),Ba=ke();function Qa(){this.size=0,this.__data__={hash:new er,map:new(Ba||Za),string:new er}}rr.exports=Qa});var ir=a((Hn,ar)=>{function Wa(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}ar.exports=Wa});var x=a(($n,nr)=>{var ka=ir();function ei(e,r){var t=e.__data__;return ka(r)?t[typeof r=="string"?"string":"hash"]:t.map}nr.exports=ei});var sr=a((Rn,or)=>{var ri=x();function ti(e){var r=ri(this,e).delete(e);return this.size-=r?1:0,r}or.exports=ti});var cr=a((Kn,ur)=>{var ai=x();function ii(e){return ai(this,e).get(e)}ur.exports=ii});var fr=a((Un,pr)=>{var ni=x();function oi(e){return ni(this,e).has(e)}pr.exports=oi});var lr=a((Jn,hr)=>{var si=x();function ui(e,r){var t=si(this,e),i=t.size;return t.set(e,r),this.size+=t.size==i?0:1,this}hr.exports=ui});var dr=a((Ln,gr)=>{var ci=tr(),pi=sr(),fi=cr(),hi=fr(),li=lr();function g(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var i=e[r];this.set(i[0],i[1])}}g.prototype.clear=ci;g.prototype.delete=pi;g.prototype.get=fi;g.prototype.has=hi;g.prototype.set=li;gr.exports=g});var xr=a((Xn,_r)=>{var vr=dr(),gi="Expected a function";function w(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(gi);var t=function(){var i=arguments,n=r?r.apply(this,i):i[0],o=t.cache;if(o.has(n))return o.get(n);var f=e.apply(this,i);return t.cache=o.set(n,f)||o,f};return t.cache=new(w.Cache||vr),t}w.Cache=vr;_r.exports=w});var qr=a((Vn,yr)=>{var di=xr(),vi=500;function _i(e){var r=di(e,function(i){return t.size===vi&&t.clear(),i}),t=r.cache;return r}yr.exports=_i});var mr=a((Yn,br)=>{var xi=qr(),yi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qi=/\\(\\)?/g,bi=xi(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(yi,function(t,i,n,o){r.push(n?o.replace(qi,"$1"):i||t)}),r});br.exports=bi});var Or=a((Zn,Sr)=>{function mi(e,r){for(var t=-1,i=e==null?0:e.length,n=Array(i);++t<i;)n[t]=r(e[t],t,e);return n}Sr.exports=mi});var jr=a((Bn,Ir)=>{var Cr=q(),Si=Or(),Oi=S(),Ci=O(),Pi=1/0,Pr=Cr?Cr.prototype:void 0,Tr=Pr?Pr.toString:void 0;function wr(e){if(typeof e=="string")return e;if(Oi(e))return Si(e,wr)+"";if(Ci(e))return Tr?Tr.call(e):"";var r=e+"";return r=="0"&&1/e==-Pi?"-0":r}Ir.exports=wr});var Nr=a((Qn,Mr)=>{var Ti=jr();function wi(e){return e==null?"":Ti(e)}Mr.exports=wi});var I=a((Wn,Er)=>{var Ii=S(),ji=Oe(),Mi=mr(),Ni=Nr();function Ei(e,r){return Ii(e)?e:ji(e,r)?[e]:Mi(Ni(e))}Er.exports=Ei});var zr=a((kn,Dr)=>{var Di=9007199254740991,zi=/^(?:0|[1-9]\d*)$/;function Ai(e,r){var t=typeof e;return r=r??Di,!!r&&(t=="number"||t!="symbol"&&zi.test(e))&&e>-1&&e%1==0&&e<r}Dr.exports=Ai});var j=a((eo,Ar)=>{var Fi=O(),Gi=1/0;function Hi(e){if(typeof e=="string"||Fi(e))return e;var r=e+"";return r=="0"&&1/e==-Gi?"-0":r}Ar.exports=Hi});var Hr=a((ro,Gr)=>{var $i=xe(),Ri=I(),Ki=zr(),Fr=b(),Ui=j();function Ji(e,r,t,i){if(!Fr(e))return e;r=Ri(r,e);for(var n=-1,o=r.length,f=o-1,u=e;u!=null&&++n<o;){var s=Ui(r[n]),c=t;if(s==="__proto__"||s==="constructor"||s==="prototype")return e;if(n!=f){var p=u[s];c=i?i(p,s,u):void 0,c===void 0&&(c=Fr(p)?p:Ki(r[n+1])?[]:{})}$i(u,s,c),u=u[s]}return e}Gr.exports=Ji});var Rr=a((to,$r)=>{var Li=Hr();function Xi(e,r,t){return e==null?e:Li(e,r,t)}$r.exports=Xi});var Ur=a((ao,Kr)=>{var Vi=I(),Yi=j();function Zi(e,r){r=Vi(r,e);for(var t=0,i=r.length;e!=null&&t<i;)e=e[Yi(r[t++])];return t&&t==i?e:void 0}Kr.exports=Zi});var Lr=a((io,Jr)=>{var Bi=Ur();function Qi(e,r,t){var i=e==null?void 0:Bi(e,r);return i===void 0?t:i}Jr.exports=Qi});var Xr=N(Rr(),1),Vr=N(Lr(),1);function Wi(e,r){if(e=JSON.parse(JSON.stringify(e)),!z(r))throw new Error(`Unsupported locale '${r}'`);let t=e.configSettings.locale,{icuMessagePaths:i}=e.i18n,n=[];if(!i)throw new Error("missing icuMessagePaths");for(let[o,f]of Object.entries(i))for(let u of f){let s,c;typeof u=="string"?s=u:(s=u.path,c=u.values);let p=(0,Vr.default)(e,s);if(typeof p!="string")continue;let M=D({i18nId:o,values:c,formattedDefault:p},r);if(M===p){r!==t&&n.push(o);continue}(0,Xr.default)(e,s,M)}return e.i18n.rendererFormattedStrings=E(r),e.configSettings.locale=r,{lhr:e,missingIcuMessageIds:n}}export{A as format,Wi as swapLocale};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
