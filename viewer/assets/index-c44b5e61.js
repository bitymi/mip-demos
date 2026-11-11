var zc=Object.defineProperty;var Ic=(i,s,a)=>s in i?zc(i,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[s]=a;var S=(i,s,a)=>(Ic(i,typeof s!="symbol"?s+"":s,a),a);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const _ of l)if(_.type==="childList")for(const y of _.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function a(l){const _={};return l.integrity&&(_.integrity=l.integrity),l.referrerPolicy&&(_.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?_.credentials="include":l.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function u(l){if(l.ep)return;l.ep=!0;const _=a(l);fetch(l.href,_)}})();function Fc(i,s){return class extends i{constructor(...a){super(...a),s(this)}}}const Oc=Fc(Array,i=>i.fill(0));let Ke=1e-6;function Vc(i){function s(B=0,D=0){const M=new i(2);return B!==void 0&&(M[0]=B,D!==void 0&&(M[1]=D)),M}const a=s;function u(B,D,M){const o=M??new i(2);return o[0]=B,o[1]=D,o}function l(B,D){const M=D??new i(2);return M[0]=Math.ceil(B[0]),M[1]=Math.ceil(B[1]),M}function _(B,D){const M=D??new i(2);return M[0]=Math.floor(B[0]),M[1]=Math.floor(B[1]),M}function y(B,D){const M=D??new i(2);return M[0]=Math.round(B[0]),M[1]=Math.round(B[1]),M}function x(B,D=0,M=1,o){const v=o??new i(2);return v[0]=Math.min(M,Math.max(D,B[0])),v[1]=Math.min(M,Math.max(D,B[1])),v}function P(B,D,M){const o=M??new i(2);return o[0]=B[0]+D[0],o[1]=B[1]+D[1],o}function A(B,D,M,o){const v=o??new i(2);return v[0]=B[0]+D[0]*M,v[1]=B[1]+D[1]*M,v}function z(B,D){const M=B[0],o=B[1],v=D[0],f=D[1],b=Math.sqrt(M*M+o*o),d=Math.sqrt(v*v+f*f),g=b*d,C=g&&Ee(B,D)/g;return Math.acos(C)}function L(B,D,M){const o=M??new i(2);return o[0]=B[0]-D[0],o[1]=B[1]-D[1],o}const N=L;function O(B,D){return Math.abs(B[0]-D[0])<Ke&&Math.abs(B[1]-D[1])<Ke}function Y(B,D){return B[0]===D[0]&&B[1]===D[1]}function R(B,D,M,o){const v=o??new i(2);return v[0]=B[0]+M*(D[0]-B[0]),v[1]=B[1]+M*(D[1]-B[1]),v}function q(B,D,M,o){const v=o??new i(2);return v[0]=B[0]+M[0]*(D[0]-B[0]),v[1]=B[1]+M[1]*(D[1]-B[1]),v}function Z(B,D,M){const o=M??new i(2);return o[0]=Math.max(B[0],D[0]),o[1]=Math.max(B[1],D[1]),o}function V(B,D,M){const o=M??new i(2);return o[0]=Math.min(B[0],D[0]),o[1]=Math.min(B[1],D[1]),o}function ee(B,D,M){const o=M??new i(2);return o[0]=B[0]*D,o[1]=B[1]*D,o}const K=ee;function te(B,D,M){const o=M??new i(2);return o[0]=B[0]/D,o[1]=B[1]/D,o}function ue(B,D){const M=D??new i(2);return M[0]=1/B[0],M[1]=1/B[1],M}const de=ue;function pe(B,D,M){const o=M??new i(3),v=B[0]*D[1]-B[1]*D[0];return o[0]=0,o[1]=0,o[2]=v,o}function Ee(B,D){return B[0]*D[0]+B[1]*D[1]}function Te(B){const D=B[0],M=B[1];return Math.sqrt(D*D+M*M)}const Re=Te;function Ge(B){const D=B[0],M=B[1];return D*D+M*M}const ie=Ge;function F(B,D){const M=B[0]-D[0],o=B[1]-D[1];return Math.sqrt(M*M+o*o)}const xe=F;function be(B,D){const M=B[0]-D[0],o=B[1]-D[1];return M*M+o*o}const me=be;function fe(B,D){const M=D??new i(2),o=B[0],v=B[1],f=Math.sqrt(o*o+v*v);return f>1e-5?(M[0]=o/f,M[1]=v/f):(M[0]=0,M[1]=0),M}function oe(B,D){const M=D??new i(2);return M[0]=-B[0],M[1]=-B[1],M}function Pe(B,D){const M=D??new i(2);return M[0]=B[0],M[1]=B[1],M}const Ie=Pe;function Ae(B,D,M){const o=M??new i(2);return o[0]=B[0]*D[0],o[1]=B[1]*D[1],o}const De=Ae;function ye(B,D,M){const o=M??new i(2);return o[0]=B[0]/D[0],o[1]=B[1]/D[1],o}const ve=ye;function Se(B=1,D){const M=D??new i(2),o=Math.random()*2*Math.PI;return M[0]=Math.cos(o)*B,M[1]=Math.sin(o)*B,M}function I(B){const D=B??new i(2);return D[0]=0,D[1]=0,D}function Q(B,D,M){const o=M??new i(2),v=B[0],f=B[1];return o[0]=v*D[0]+f*D[4]+D[12],o[1]=v*D[1]+f*D[5]+D[13],o}function T(B,D,M){const o=M??new i(2),v=B[0],f=B[1];return o[0]=D[0]*v+D[4]*f+D[8],o[1]=D[1]*v+D[5]*f+D[9],o}function c(B,D,M,o){const v=o??new i(2),f=B[0]-D[0],b=B[1]-D[1],d=Math.sin(M),g=Math.cos(M);return v[0]=f*g-b*d+D[0],v[1]=f*d+b*g+D[1],v}function p(B,D,M){const o=M??new i(2);return fe(B,o),ee(o,D,o)}function h(B,D,M){const o=M??new i(2);return Te(B)>D?p(B,D,o):Pe(B,o)}function w(B,D,M){const o=M??new i(2);return R(B,D,.5,o)}return{create:s,fromValues:a,set:u,ceil:l,floor:_,round:y,clamp:x,add:P,addScaled:A,angle:z,subtract:L,sub:N,equalsApproximately:O,equals:Y,lerp:R,lerpV:q,max:Z,min:V,mulScalar:ee,scale:K,divScalar:te,inverse:ue,invert:de,cross:pe,dot:Ee,length:Te,len:Re,lengthSq:Ge,lenSq:ie,distance:F,dist:xe,distanceSq:be,distSq:me,normalize:fe,negate:oe,copy:Pe,clone:Ie,multiply:Ae,mul:De,divide:ye,div:ve,random:Se,zero:I,transformMat4:Q,transformMat3:T,rotate:c,setLength:p,truncate:h,midpoint:w}}const pa=new Map;function Za(i){let s=pa.get(i);return s||(s=Vc(i),pa.set(i,s)),s}function $c(i){function s(d,g,C){const E=new i(3);return d!==void 0&&(E[0]=d,g!==void 0&&(E[1]=g,C!==void 0&&(E[2]=C))),E}const a=s;function u(d,g,C,E){const $=E??new i(3);return $[0]=d,$[1]=g,$[2]=C,$}function l(d,g){const C=g??new i(3);return C[0]=Math.ceil(d[0]),C[1]=Math.ceil(d[1]),C[2]=Math.ceil(d[2]),C}function _(d,g){const C=g??new i(3);return C[0]=Math.floor(d[0]),C[1]=Math.floor(d[1]),C[2]=Math.floor(d[2]),C}function y(d,g){const C=g??new i(3);return C[0]=Math.round(d[0]),C[1]=Math.round(d[1]),C[2]=Math.round(d[2]),C}function x(d,g=0,C=1,E){const $=E??new i(3);return $[0]=Math.min(C,Math.max(g,d[0])),$[1]=Math.min(C,Math.max(g,d[1])),$[2]=Math.min(C,Math.max(g,d[2])),$}function P(d,g,C){const E=C??new i(3);return E[0]=d[0]+g[0],E[1]=d[1]+g[1],E[2]=d[2]+g[2],E}function A(d,g,C,E){const $=E??new i(3);return $[0]=d[0]+g[0]*C,$[1]=d[1]+g[1]*C,$[2]=d[2]+g[2]*C,$}function z(d,g){const C=d[0],E=d[1],$=d[2],U=g[0],j=g[1],se=g[2],ae=Math.sqrt(C*C+E*E+$*$),ne=Math.sqrt(U*U+j*j+se*se),ge=ae*ne,Me=ge&&Ee(d,g)/ge;return Math.acos(Me)}function L(d,g,C){const E=C??new i(3);return E[0]=d[0]-g[0],E[1]=d[1]-g[1],E[2]=d[2]-g[2],E}const N=L;function O(d,g){return Math.abs(d[0]-g[0])<Ke&&Math.abs(d[1]-g[1])<Ke&&Math.abs(d[2]-g[2])<Ke}function Y(d,g){return d[0]===g[0]&&d[1]===g[1]&&d[2]===g[2]}function R(d,g,C,E){const $=E??new i(3);return $[0]=d[0]+C*(g[0]-d[0]),$[1]=d[1]+C*(g[1]-d[1]),$[2]=d[2]+C*(g[2]-d[2]),$}function q(d,g,C,E){const $=E??new i(3);return $[0]=d[0]+C[0]*(g[0]-d[0]),$[1]=d[1]+C[1]*(g[1]-d[1]),$[2]=d[2]+C[2]*(g[2]-d[2]),$}function Z(d,g,C){const E=C??new i(3);return E[0]=Math.max(d[0],g[0]),E[1]=Math.max(d[1],g[1]),E[2]=Math.max(d[2],g[2]),E}function V(d,g,C){const E=C??new i(3);return E[0]=Math.min(d[0],g[0]),E[1]=Math.min(d[1],g[1]),E[2]=Math.min(d[2],g[2]),E}function ee(d,g,C){const E=C??new i(3);return E[0]=d[0]*g,E[1]=d[1]*g,E[2]=d[2]*g,E}const K=ee;function te(d,g,C){const E=C??new i(3);return E[0]=d[0]/g,E[1]=d[1]/g,E[2]=d[2]/g,E}function ue(d,g){const C=g??new i(3);return C[0]=1/d[0],C[1]=1/d[1],C[2]=1/d[2],C}const de=ue;function pe(d,g,C){const E=C??new i(3),$=d[2]*g[0]-d[0]*g[2],U=d[0]*g[1]-d[1]*g[0];return E[0]=d[1]*g[2]-d[2]*g[1],E[1]=$,E[2]=U,E}function Ee(d,g){return d[0]*g[0]+d[1]*g[1]+d[2]*g[2]}function Te(d){const g=d[0],C=d[1],E=d[2];return Math.sqrt(g*g+C*C+E*E)}const Re=Te;function Ge(d){const g=d[0],C=d[1],E=d[2];return g*g+C*C+E*E}const ie=Ge;function F(d,g){const C=d[0]-g[0],E=d[1]-g[1],$=d[2]-g[2];return Math.sqrt(C*C+E*E+$*$)}const xe=F;function be(d,g){const C=d[0]-g[0],E=d[1]-g[1],$=d[2]-g[2];return C*C+E*E+$*$}const me=be;function fe(d,g){const C=g??new i(3),E=d[0],$=d[1],U=d[2],j=Math.sqrt(E*E+$*$+U*U);return j>1e-5?(C[0]=E/j,C[1]=$/j,C[2]=U/j):(C[0]=0,C[1]=0,C[2]=0),C}function oe(d,g){const C=g??new i(3);return C[0]=-d[0],C[1]=-d[1],C[2]=-d[2],C}function Pe(d,g){const C=g??new i(3);return C[0]=d[0],C[1]=d[1],C[2]=d[2],C}const Ie=Pe;function Ae(d,g,C){const E=C??new i(3);return E[0]=d[0]*g[0],E[1]=d[1]*g[1],E[2]=d[2]*g[2],E}const De=Ae;function ye(d,g,C){const E=C??new i(3);return E[0]=d[0]/g[0],E[1]=d[1]/g[1],E[2]=d[2]/g[2],E}const ve=ye;function Se(d=1,g){const C=g??new i(3),E=Math.random()*2*Math.PI,$=Math.random()*2-1,U=Math.sqrt(1-$*$)*d;return C[0]=Math.cos(E)*U,C[1]=Math.sin(E)*U,C[2]=$*d,C}function I(d){const g=d??new i(3);return g[0]=0,g[1]=0,g[2]=0,g}function Q(d,g,C){const E=C??new i(3),$=d[0],U=d[1],j=d[2],se=g[3]*$+g[7]*U+g[11]*j+g[15]||1;return E[0]=(g[0]*$+g[4]*U+g[8]*j+g[12])/se,E[1]=(g[1]*$+g[5]*U+g[9]*j+g[13])/se,E[2]=(g[2]*$+g[6]*U+g[10]*j+g[14])/se,E}function T(d,g,C){const E=C??new i(3),$=d[0],U=d[1],j=d[2];return E[0]=$*g[0*4+0]+U*g[1*4+0]+j*g[2*4+0],E[1]=$*g[0*4+1]+U*g[1*4+1]+j*g[2*4+1],E[2]=$*g[0*4+2]+U*g[1*4+2]+j*g[2*4+2],E}function c(d,g,C){const E=C??new i(3),$=d[0],U=d[1],j=d[2];return E[0]=$*g[0]+U*g[4]+j*g[8],E[1]=$*g[1]+U*g[5]+j*g[9],E[2]=$*g[2]+U*g[6]+j*g[10],E}function p(d,g,C){const E=C??new i(3),$=g[0],U=g[1],j=g[2],se=g[3]*2,ae=d[0],ne=d[1],ge=d[2],Me=U*ge-j*ne,Be=j*ae-$*ge,ke=$*ne-U*ae;return E[0]=ae+Me*se+(U*ke-j*Be)*2,E[1]=ne+Be*se+(j*Me-$*ke)*2,E[2]=ge+ke*se+($*Be-U*Me)*2,E}function h(d,g){const C=g??new i(3);return C[0]=d[12],C[1]=d[13],C[2]=d[14],C}function w(d,g,C){const E=C??new i(3),$=g*4;return E[0]=d[$+0],E[1]=d[$+1],E[2]=d[$+2],E}function B(d,g){const C=g??new i(3),E=d[0],$=d[1],U=d[2],j=d[4],se=d[5],ae=d[6],ne=d[8],ge=d[9],Me=d[10];return C[0]=Math.sqrt(E*E+$*$+U*U),C[1]=Math.sqrt(j*j+se*se+ae*ae),C[2]=Math.sqrt(ne*ne+ge*ge+Me*Me),C}function D(d,g,C,E){const $=E??new i(3),U=[],j=[];return U[0]=d[0]-g[0],U[1]=d[1]-g[1],U[2]=d[2]-g[2],j[0]=U[0],j[1]=U[1]*Math.cos(C)-U[2]*Math.sin(C),j[2]=U[1]*Math.sin(C)+U[2]*Math.cos(C),$[0]=j[0]+g[0],$[1]=j[1]+g[1],$[2]=j[2]+g[2],$}function M(d,g,C,E){const $=E??new i(3),U=[],j=[];return U[0]=d[0]-g[0],U[1]=d[1]-g[1],U[2]=d[2]-g[2],j[0]=U[2]*Math.sin(C)+U[0]*Math.cos(C),j[1]=U[1],j[2]=U[2]*Math.cos(C)-U[0]*Math.sin(C),$[0]=j[0]+g[0],$[1]=j[1]+g[1],$[2]=j[2]+g[2],$}function o(d,g,C,E){const $=E??new i(3),U=[],j=[];return U[0]=d[0]-g[0],U[1]=d[1]-g[1],U[2]=d[2]-g[2],j[0]=U[0]*Math.cos(C)-U[1]*Math.sin(C),j[1]=U[0]*Math.sin(C)+U[1]*Math.cos(C),j[2]=U[2],$[0]=j[0]+g[0],$[1]=j[1]+g[1],$[2]=j[2]+g[2],$}function v(d,g,C){const E=C??new i(3);return fe(d,E),ee(E,g,E)}function f(d,g,C){const E=C??new i(3);return Te(d)>g?v(d,g,E):Pe(d,E)}function b(d,g,C){const E=C??new i(3);return R(d,g,.5,E)}return{create:s,fromValues:a,set:u,ceil:l,floor:_,round:y,clamp:x,add:P,addScaled:A,angle:z,subtract:L,sub:N,equalsApproximately:O,equals:Y,lerp:R,lerpV:q,max:Z,min:V,mulScalar:ee,scale:K,divScalar:te,inverse:ue,invert:de,cross:pe,dot:Ee,length:Te,len:Re,lengthSq:Ge,lenSq:ie,distance:F,dist:xe,distanceSq:be,distSq:me,normalize:fe,negate:oe,copy:Pe,clone:Ie,multiply:Ae,mul:De,divide:ye,div:ve,random:Se,zero:I,transformMat4:Q,transformMat4Upper3x3:T,transformMat3:c,transformQuat:p,getTranslation:h,getAxis:w,getScaling:B,rotateX:D,rotateY:M,rotateZ:o,setLength:v,truncate:f,midpoint:b}}const ha=new Map;function hr(i){let s=ha.get(i);return s||(s=$c(i),ha.set(i,s)),s}function Nc(i){const s=Za(i),a=hr(i);function u(c,p,h,w,B,D,M,o,v){const f=new i(12);return f[3]=0,f[7]=0,f[11]=0,c!==void 0&&(f[0]=c,p!==void 0&&(f[1]=p,h!==void 0&&(f[2]=h,w!==void 0&&(f[4]=w,B!==void 0&&(f[5]=B,D!==void 0&&(f[6]=D,M!==void 0&&(f[8]=M,o!==void 0&&(f[9]=o,v!==void 0&&(f[10]=v))))))))),f}function l(c,p,h,w,B,D,M,o,v,f){const b=f??new i(12);return b[0]=c,b[1]=p,b[2]=h,b[3]=0,b[4]=w,b[5]=B,b[6]=D,b[7]=0,b[8]=M,b[9]=o,b[10]=v,b[11]=0,b}function _(c,p){const h=p??new i(12);return h[0]=c[0],h[1]=c[1],h[2]=c[2],h[3]=0,h[4]=c[4],h[5]=c[5],h[6]=c[6],h[7]=0,h[8]=c[8],h[9]=c[9],h[10]=c[10],h[11]=0,h}function y(c,p){const h=p??new i(12),w=c[0],B=c[1],D=c[2],M=c[3],o=w+w,v=B+B,f=D+D,b=w*o,d=B*o,g=B*v,C=D*o,E=D*v,$=D*f,U=M*o,j=M*v,se=M*f;return h[0]=1-g-$,h[1]=d+se,h[2]=C-j,h[3]=0,h[4]=d-se,h[5]=1-b-$,h[6]=E+U,h[7]=0,h[8]=C+j,h[9]=E-U,h[10]=1-b-g,h[11]=0,h}function x(c,p){const h=p??new i(12);return h[0]=-c[0],h[1]=-c[1],h[2]=-c[2],h[4]=-c[4],h[5]=-c[5],h[6]=-c[6],h[8]=-c[8],h[9]=-c[9],h[10]=-c[10],h}function P(c,p,h){const w=h??new i(12);return w[0]=c[0]*p,w[1]=c[1]*p,w[2]=c[2]*p,w[4]=c[4]*p,w[5]=c[5]*p,w[6]=c[6]*p,w[8]=c[8]*p,w[9]=c[9]*p,w[10]=c[10]*p,w}const A=P;function z(c,p,h){const w=h??new i(12);return w[0]=c[0]+p[0],w[1]=c[1]+p[1],w[2]=c[2]+p[2],w[4]=c[4]+p[4],w[5]=c[5]+p[5],w[6]=c[6]+p[6],w[8]=c[8]+p[8],w[9]=c[9]+p[9],w[10]=c[10]+p[10],w}function L(c,p){const h=p??new i(12);return h[0]=c[0],h[1]=c[1],h[2]=c[2],h[4]=c[4],h[5]=c[5],h[6]=c[6],h[8]=c[8],h[9]=c[9],h[10]=c[10],h}const N=L;function O(c,p){return Math.abs(c[0]-p[0])<Ke&&Math.abs(c[1]-p[1])<Ke&&Math.abs(c[2]-p[2])<Ke&&Math.abs(c[4]-p[4])<Ke&&Math.abs(c[5]-p[5])<Ke&&Math.abs(c[6]-p[6])<Ke&&Math.abs(c[8]-p[8])<Ke&&Math.abs(c[9]-p[9])<Ke&&Math.abs(c[10]-p[10])<Ke}function Y(c,p){return c[0]===p[0]&&c[1]===p[1]&&c[2]===p[2]&&c[4]===p[4]&&c[5]===p[5]&&c[6]===p[6]&&c[8]===p[8]&&c[9]===p[9]&&c[10]===p[10]}function R(c){const p=c??new i(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function q(c,p){const h=p??new i(12);if(h===c){let g;return g=c[1],c[1]=c[4],c[4]=g,g=c[2],c[2]=c[8],c[8]=g,g=c[6],c[6]=c[9],c[9]=g,h}const w=c[0*4+0],B=c[0*4+1],D=c[0*4+2],M=c[1*4+0],o=c[1*4+1],v=c[1*4+2],f=c[2*4+0],b=c[2*4+1],d=c[2*4+2];return h[0]=w,h[1]=M,h[2]=f,h[4]=B,h[5]=o,h[6]=b,h[8]=D,h[9]=v,h[10]=d,h}function Z(c,p){const h=p??new i(12),w=c[0*4+0],B=c[0*4+1],D=c[0*4+2],M=c[1*4+0],o=c[1*4+1],v=c[1*4+2],f=c[2*4+0],b=c[2*4+1],d=c[2*4+2],g=d*o-v*b,C=-d*M+v*f,E=b*M-o*f,$=1/(w*g+B*C+D*E);return h[0]=g*$,h[1]=(-d*B+D*b)*$,h[2]=(v*B-D*o)*$,h[4]=C*$,h[5]=(d*w-D*f)*$,h[6]=(-v*w+D*M)*$,h[8]=E*$,h[9]=(-b*w+B*f)*$,h[10]=(o*w-B*M)*$,h}function V(c){const p=c[0],h=c[0*4+1],w=c[0*4+2],B=c[1*4+0],D=c[1*4+1],M=c[1*4+2],o=c[2*4+0],v=c[2*4+1],f=c[2*4+2];return p*(D*f-v*M)-B*(h*f-v*w)+o*(h*M-D*w)}const ee=Z;function K(c,p,h){const w=h??new i(12),B=c[0],D=c[1],M=c[2],o=c[4+0],v=c[4+1],f=c[4+2],b=c[8+0],d=c[8+1],g=c[8+2],C=p[0],E=p[1],$=p[2],U=p[4+0],j=p[4+1],se=p[4+2],ae=p[8+0],ne=p[8+1],ge=p[8+2];return w[0]=B*C+o*E+b*$,w[1]=D*C+v*E+d*$,w[2]=M*C+f*E+g*$,w[4]=B*U+o*j+b*se,w[5]=D*U+v*j+d*se,w[6]=M*U+f*j+g*se,w[8]=B*ae+o*ne+b*ge,w[9]=D*ae+v*ne+d*ge,w[10]=M*ae+f*ne+g*ge,w}const te=K;function ue(c,p,h){const w=h??R();return c!==w&&(w[0]=c[0],w[1]=c[1],w[2]=c[2],w[4]=c[4],w[5]=c[5],w[6]=c[6]),w[8]=p[0],w[9]=p[1],w[10]=1,w}function de(c,p){const h=p??s.create();return h[0]=c[8],h[1]=c[9],h}function pe(c,p,h){const w=h??s.create(),B=p*4;return w[0]=c[B+0],w[1]=c[B+1],w}function Ee(c,p,h,w){const B=w===c?c:L(c,w),D=h*4;return B[D+0]=p[0],B[D+1]=p[1],B}function Te(c,p){const h=p??s.create(),w=c[0],B=c[1],D=c[4],M=c[5];return h[0]=Math.sqrt(w*w+B*B),h[1]=Math.sqrt(D*D+M*M),h}function Re(c,p){const h=p??a.create(),w=c[0],B=c[1],D=c[2],M=c[4],o=c[5],v=c[6],f=c[8],b=c[9],d=c[10];return h[0]=Math.sqrt(w*w+B*B+D*D),h[1]=Math.sqrt(M*M+o*o+v*v),h[2]=Math.sqrt(f*f+b*b+d*d),h}function Ge(c,p){const h=p??new i(12);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=1,h[6]=0,h[8]=c[0],h[9]=c[1],h[10]=1,h}function ie(c,p,h){const w=h??new i(12),B=p[0],D=p[1],M=c[0],o=c[1],v=c[2],f=c[1*4+0],b=c[1*4+1],d=c[1*4+2],g=c[2*4+0],C=c[2*4+1],E=c[2*4+2];return c!==w&&(w[0]=M,w[1]=o,w[2]=v,w[4]=f,w[5]=b,w[6]=d),w[8]=M*B+f*D+g,w[9]=o*B+b*D+C,w[10]=v*B+d*D+E,w}function F(c,p){const h=p??new i(12),w=Math.cos(c),B=Math.sin(c);return h[0]=w,h[1]=B,h[2]=0,h[4]=-B,h[5]=w,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function xe(c,p,h){const w=h??new i(12),B=c[0*4+0],D=c[0*4+1],M=c[0*4+2],o=c[1*4+0],v=c[1*4+1],f=c[1*4+2],b=Math.cos(p),d=Math.sin(p);return w[0]=b*B+d*o,w[1]=b*D+d*v,w[2]=b*M+d*f,w[4]=b*o-d*B,w[5]=b*v-d*D,w[6]=b*f-d*M,c!==w&&(w[8]=c[8],w[9]=c[9],w[10]=c[10]),w}function be(c,p){const h=p??new i(12),w=Math.cos(c),B=Math.sin(c);return h[0]=1,h[1]=0,h[2]=0,h[4]=0,h[5]=w,h[6]=B,h[8]=0,h[9]=-B,h[10]=w,h}function me(c,p,h){const w=h??new i(12),B=c[4],D=c[5],M=c[6],o=c[8],v=c[9],f=c[10],b=Math.cos(p),d=Math.sin(p);return w[4]=b*B+d*o,w[5]=b*D+d*v,w[6]=b*M+d*f,w[8]=b*o-d*B,w[9]=b*v-d*D,w[10]=b*f-d*M,c!==w&&(w[0]=c[0],w[1]=c[1],w[2]=c[2]),w}function fe(c,p){const h=p??new i(12),w=Math.cos(c),B=Math.sin(c);return h[0]=w,h[1]=0,h[2]=-B,h[4]=0,h[5]=1,h[6]=0,h[8]=B,h[9]=0,h[10]=w,h}function oe(c,p,h){const w=h??new i(12),B=c[0*4+0],D=c[0*4+1],M=c[0*4+2],o=c[2*4+0],v=c[2*4+1],f=c[2*4+2],b=Math.cos(p),d=Math.sin(p);return w[0]=b*B-d*o,w[1]=b*D-d*v,w[2]=b*M-d*f,w[8]=b*o+d*B,w[9]=b*v+d*D,w[10]=b*f+d*M,c!==w&&(w[4]=c[4],w[5]=c[5],w[6]=c[6]),w}const Pe=F,Ie=xe;function Ae(c,p){const h=p??new i(12);return h[0]=c[0],h[1]=0,h[2]=0,h[4]=0,h[5]=c[1],h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function De(c,p,h){const w=h??new i(12),B=p[0],D=p[1];return w[0]=B*c[0*4+0],w[1]=B*c[0*4+1],w[2]=B*c[0*4+2],w[4]=D*c[1*4+0],w[5]=D*c[1*4+1],w[6]=D*c[1*4+2],c!==w&&(w[8]=c[8],w[9]=c[9],w[10]=c[10]),w}function ye(c,p){const h=p??new i(12);return h[0]=c[0],h[1]=0,h[2]=0,h[4]=0,h[5]=c[1],h[6]=0,h[8]=0,h[9]=0,h[10]=c[2],h}function ve(c,p,h){const w=h??new i(12),B=p[0],D=p[1],M=p[2];return w[0]=B*c[0*4+0],w[1]=B*c[0*4+1],w[2]=B*c[0*4+2],w[4]=D*c[1*4+0],w[5]=D*c[1*4+1],w[6]=D*c[1*4+2],w[8]=M*c[2*4+0],w[9]=M*c[2*4+1],w[10]=M*c[2*4+2],w}function Se(c,p){const h=p??new i(12);return h[0]=c,h[1]=0,h[2]=0,h[4]=0,h[5]=c,h[6]=0,h[8]=0,h[9]=0,h[10]=1,h}function I(c,p,h){const w=h??new i(12);return w[0]=p*c[0*4+0],w[1]=p*c[0*4+1],w[2]=p*c[0*4+2],w[4]=p*c[1*4+0],w[5]=p*c[1*4+1],w[6]=p*c[1*4+2],c!==w&&(w[8]=c[8],w[9]=c[9],w[10]=c[10]),w}function Q(c,p){const h=p??new i(12);return h[0]=c,h[1]=0,h[2]=0,h[4]=0,h[5]=c,h[6]=0,h[8]=0,h[9]=0,h[10]=c,h}function T(c,p,h){const w=h??new i(12);return w[0]=p*c[0*4+0],w[1]=p*c[0*4+1],w[2]=p*c[0*4+2],w[4]=p*c[1*4+0],w[5]=p*c[1*4+1],w[6]=p*c[1*4+2],w[8]=p*c[2*4+0],w[9]=p*c[2*4+1],w[10]=p*c[2*4+2],w}return{add:z,clone:N,copy:L,create:u,determinant:V,equals:Y,equalsApproximately:O,fromMat4:_,fromQuat:y,get3DScaling:Re,getAxis:pe,getScaling:Te,getTranslation:de,identity:R,inverse:Z,invert:ee,mul:te,mulScalar:A,multiply:K,multiplyScalar:P,negate:x,rotate:xe,rotateX:me,rotateY:oe,rotateZ:Ie,rotation:F,rotationX:be,rotationY:fe,rotationZ:Pe,scale:De,scale3D:ve,scaling:Ae,scaling3D:ye,set:l,setAxis:Ee,setTranslation:ue,translate:ie,translation:Ge,transpose:q,uniformScale:I,uniformScale3D:T,uniformScaling:Se,uniformScaling3D:Q}}const fa=new Map;function qc(i){let s=fa.get(i);return s||(s=Nc(i),fa.set(i,s)),s}function Kc(i){const s=hr(i);function a(o,v,f,b,d,g,C,E,$,U,j,se,ae,ne,ge,Me){const Be=new i(16);return o!==void 0&&(Be[0]=o,v!==void 0&&(Be[1]=v,f!==void 0&&(Be[2]=f,b!==void 0&&(Be[3]=b,d!==void 0&&(Be[4]=d,g!==void 0&&(Be[5]=g,C!==void 0&&(Be[6]=C,E!==void 0&&(Be[7]=E,$!==void 0&&(Be[8]=$,U!==void 0&&(Be[9]=U,j!==void 0&&(Be[10]=j,se!==void 0&&(Be[11]=se,ae!==void 0&&(Be[12]=ae,ne!==void 0&&(Be[13]=ne,ge!==void 0&&(Be[14]=ge,Me!==void 0&&(Be[15]=Me)))))))))))))))),Be}function u(o,v,f,b,d,g,C,E,$,U,j,se,ae,ne,ge,Me,Be){const ke=Be??new i(16);return ke[0]=o,ke[1]=v,ke[2]=f,ke[3]=b,ke[4]=d,ke[5]=g,ke[6]=C,ke[7]=E,ke[8]=$,ke[9]=U,ke[10]=j,ke[11]=se,ke[12]=ae,ke[13]=ne,ke[14]=ge,ke[15]=Me,ke}function l(o,v){const f=v??new i(16);return f[0]=o[0],f[1]=o[1],f[2]=o[2],f[3]=0,f[4]=o[4],f[5]=o[5],f[6]=o[6],f[7]=0,f[8]=o[8],f[9]=o[9],f[10]=o[10],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function _(o,v){const f=v??new i(16),b=o[0],d=o[1],g=o[2],C=o[3],E=b+b,$=d+d,U=g+g,j=b*E,se=d*E,ae=d*$,ne=g*E,ge=g*$,Me=g*U,Be=C*E,ke=C*$,$e=C*U;return f[0]=1-ae-Me,f[1]=se+$e,f[2]=ne-ke,f[3]=0,f[4]=se-$e,f[5]=1-j-Me,f[6]=ge+Be,f[7]=0,f[8]=ne+ke,f[9]=ge-Be,f[10]=1-j-ae,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function y(o,v){const f=v??new i(16);return f[0]=-o[0],f[1]=-o[1],f[2]=-o[2],f[3]=-o[3],f[4]=-o[4],f[5]=-o[5],f[6]=-o[6],f[7]=-o[7],f[8]=-o[8],f[9]=-o[9],f[10]=-o[10],f[11]=-o[11],f[12]=-o[12],f[13]=-o[13],f[14]=-o[14],f[15]=-o[15],f}function x(o,v,f){const b=f??new i(16);return b[0]=o[0]+v[0],b[1]=o[1]+v[1],b[2]=o[2]+v[2],b[3]=o[3]+v[3],b[4]=o[4]+v[4],b[5]=o[5]+v[5],b[6]=o[6]+v[6],b[7]=o[7]+v[7],b[8]=o[8]+v[8],b[9]=o[9]+v[9],b[10]=o[10]+v[10],b[11]=o[11]+v[11],b[12]=o[12]+v[12],b[13]=o[13]+v[13],b[14]=o[14]+v[14],b[15]=o[15]+v[15],b}function P(o,v,f){const b=f??new i(16);return b[0]=o[0]*v,b[1]=o[1]*v,b[2]=o[2]*v,b[3]=o[3]*v,b[4]=o[4]*v,b[5]=o[5]*v,b[6]=o[6]*v,b[7]=o[7]*v,b[8]=o[8]*v,b[9]=o[9]*v,b[10]=o[10]*v,b[11]=o[11]*v,b[12]=o[12]*v,b[13]=o[13]*v,b[14]=o[14]*v,b[15]=o[15]*v,b}const A=P;function z(o,v){const f=v??new i(16);return f[0]=o[0],f[1]=o[1],f[2]=o[2],f[3]=o[3],f[4]=o[4],f[5]=o[5],f[6]=o[6],f[7]=o[7],f[8]=o[8],f[9]=o[9],f[10]=o[10],f[11]=o[11],f[12]=o[12],f[13]=o[13],f[14]=o[14],f[15]=o[15],f}const L=z;function N(o,v){return Math.abs(o[0]-v[0])<Ke&&Math.abs(o[1]-v[1])<Ke&&Math.abs(o[2]-v[2])<Ke&&Math.abs(o[3]-v[3])<Ke&&Math.abs(o[4]-v[4])<Ke&&Math.abs(o[5]-v[5])<Ke&&Math.abs(o[6]-v[6])<Ke&&Math.abs(o[7]-v[7])<Ke&&Math.abs(o[8]-v[8])<Ke&&Math.abs(o[9]-v[9])<Ke&&Math.abs(o[10]-v[10])<Ke&&Math.abs(o[11]-v[11])<Ke&&Math.abs(o[12]-v[12])<Ke&&Math.abs(o[13]-v[13])<Ke&&Math.abs(o[14]-v[14])<Ke&&Math.abs(o[15]-v[15])<Ke}function O(o,v){return o[0]===v[0]&&o[1]===v[1]&&o[2]===v[2]&&o[3]===v[3]&&o[4]===v[4]&&o[5]===v[5]&&o[6]===v[6]&&o[7]===v[7]&&o[8]===v[8]&&o[9]===v[9]&&o[10]===v[10]&&o[11]===v[11]&&o[12]===v[12]&&o[13]===v[13]&&o[14]===v[14]&&o[15]===v[15]}function Y(o){const v=o??new i(16);return v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,v}function R(o,v){const f=v??new i(16);if(f===o){let Ve;return Ve=o[1],o[1]=o[4],o[4]=Ve,Ve=o[2],o[2]=o[8],o[8]=Ve,Ve=o[3],o[3]=o[12],o[12]=Ve,Ve=o[6],o[6]=o[9],o[9]=Ve,Ve=o[7],o[7]=o[13],o[13]=Ve,Ve=o[11],o[11]=o[14],o[14]=Ve,f}const b=o[0*4+0],d=o[0*4+1],g=o[0*4+2],C=o[0*4+3],E=o[1*4+0],$=o[1*4+1],U=o[1*4+2],j=o[1*4+3],se=o[2*4+0],ae=o[2*4+1],ne=o[2*4+2],ge=o[2*4+3],Me=o[3*4+0],Be=o[3*4+1],ke=o[3*4+2],$e=o[3*4+3];return f[0]=b,f[1]=E,f[2]=se,f[3]=Me,f[4]=d,f[5]=$,f[6]=ae,f[7]=Be,f[8]=g,f[9]=U,f[10]=ne,f[11]=ke,f[12]=C,f[13]=j,f[14]=ge,f[15]=$e,f}function q(o,v){const f=v??new i(16),b=o[0*4+0],d=o[0*4+1],g=o[0*4+2],C=o[0*4+3],E=o[1*4+0],$=o[1*4+1],U=o[1*4+2],j=o[1*4+3],se=o[2*4+0],ae=o[2*4+1],ne=o[2*4+2],ge=o[2*4+3],Me=o[3*4+0],Be=o[3*4+1],ke=o[3*4+2],$e=o[3*4+3],Ve=ne*$e,rt=ke*ge,ut=U*$e,Ne=ke*j,it=U*ge,Qe=ne*j,et=g*$e,tt=ke*C,Xe=g*ge,pt=ne*C,ht=g*j,nt=U*C,at=se*Be,ct=Me*ae,dt=E*Be,Ze=Me*$,je=E*ae,Tt=se*$,vt=b*Be,Rt=Me*d,xt=b*ae,St=se*d,$t=b*$,Ft=E*d,jt=Ve*$+Ne*ae+it*Be-(rt*$+ut*ae+Qe*Be),Dt=rt*d+et*ae+pt*Be-(Ve*d+tt*ae+Xe*Be),tn=ut*d+tt*$+ht*Be-(Ne*d+et*$+nt*Be),Ut=Qe*d+Xe*$+nt*ae-(it*d+pt*$+ht*ae),Je=1/(b*jt+E*Dt+se*tn+Me*Ut);return f[0]=Je*jt,f[1]=Je*Dt,f[2]=Je*tn,f[3]=Je*Ut,f[4]=Je*(rt*E+ut*se+Qe*Me-(Ve*E+Ne*se+it*Me)),f[5]=Je*(Ve*b+tt*se+Xe*Me-(rt*b+et*se+pt*Me)),f[6]=Je*(Ne*b+et*E+nt*Me-(ut*b+tt*E+ht*Me)),f[7]=Je*(it*b+pt*E+ht*se-(Qe*b+Xe*E+nt*se)),f[8]=Je*(at*j+Ze*ge+je*$e-(ct*j+dt*ge+Tt*$e)),f[9]=Je*(ct*C+vt*ge+St*$e-(at*C+Rt*ge+xt*$e)),f[10]=Je*(dt*C+Rt*j+$t*$e-(Ze*C+vt*j+Ft*$e)),f[11]=Je*(Tt*C+xt*j+Ft*ge-(je*C+St*j+$t*ge)),f[12]=Je*(dt*ne+Tt*ke+ct*U-(je*ke+at*U+Ze*ne)),f[13]=Je*(xt*ke+at*g+Rt*ne-(vt*ne+St*ke+ct*g)),f[14]=Je*(vt*U+Ft*ke+Ze*g-($t*ke+dt*g+Rt*U)),f[15]=Je*($t*ne+je*g+St*U-(xt*U+Ft*ne+Tt*g)),f}function Z(o){const v=o[0],f=o[0*4+1],b=o[0*4+2],d=o[0*4+3],g=o[1*4+0],C=o[1*4+1],E=o[1*4+2],$=o[1*4+3],U=o[2*4+0],j=o[2*4+1],se=o[2*4+2],ae=o[2*4+3],ne=o[3*4+0],ge=o[3*4+1],Me=o[3*4+2],Be=o[3*4+3],ke=se*Be,$e=Me*ae,Ve=E*Be,rt=Me*$,ut=E*ae,Ne=se*$,it=b*Be,Qe=Me*d,et=b*ae,tt=se*d,Xe=b*$,pt=E*d,ht=ke*C+rt*j+ut*ge-($e*C+Ve*j+Ne*ge),nt=$e*f+it*j+tt*ge-(ke*f+Qe*j+et*ge),at=Ve*f+Qe*C+Xe*ge-(rt*f+it*C+pt*ge),ct=Ne*f+et*C+pt*j-(ut*f+tt*C+Xe*j);return v*ht+g*nt+U*at+ne*ct}const V=q;function ee(o,v,f){const b=f??new i(16),d=o[0],g=o[1],C=o[2],E=o[3],$=o[4+0],U=o[4+1],j=o[4+2],se=o[4+3],ae=o[8+0],ne=o[8+1],ge=o[8+2],Me=o[8+3],Be=o[12+0],ke=o[12+1],$e=o[12+2],Ve=o[12+3],rt=v[0],ut=v[1],Ne=v[2],it=v[3],Qe=v[4+0],et=v[4+1],tt=v[4+2],Xe=v[4+3],pt=v[8+0],ht=v[8+1],nt=v[8+2],at=v[8+3],ct=v[12+0],dt=v[12+1],Ze=v[12+2],je=v[12+3];return b[0]=d*rt+$*ut+ae*Ne+Be*it,b[1]=g*rt+U*ut+ne*Ne+ke*it,b[2]=C*rt+j*ut+ge*Ne+$e*it,b[3]=E*rt+se*ut+Me*Ne+Ve*it,b[4]=d*Qe+$*et+ae*tt+Be*Xe,b[5]=g*Qe+U*et+ne*tt+ke*Xe,b[6]=C*Qe+j*et+ge*tt+$e*Xe,b[7]=E*Qe+se*et+Me*tt+Ve*Xe,b[8]=d*pt+$*ht+ae*nt+Be*at,b[9]=g*pt+U*ht+ne*nt+ke*at,b[10]=C*pt+j*ht+ge*nt+$e*at,b[11]=E*pt+se*ht+Me*nt+Ve*at,b[12]=d*ct+$*dt+ae*Ze+Be*je,b[13]=g*ct+U*dt+ne*Ze+ke*je,b[14]=C*ct+j*dt+ge*Ze+$e*je,b[15]=E*ct+se*dt+Me*Ze+Ve*je,b}const K=ee;function te(o,v,f){const b=f??Y();return o!==b&&(b[0]=o[0],b[1]=o[1],b[2]=o[2],b[3]=o[3],b[4]=o[4],b[5]=o[5],b[6]=o[6],b[7]=o[7],b[8]=o[8],b[9]=o[9],b[10]=o[10],b[11]=o[11]),b[12]=v[0],b[13]=v[1],b[14]=v[2],b[15]=1,b}function ue(o,v){const f=v??s.create();return f[0]=o[12],f[1]=o[13],f[2]=o[14],f}function de(o,v,f){const b=f??s.create(),d=v*4;return b[0]=o[d+0],b[1]=o[d+1],b[2]=o[d+2],b}function pe(o,v,f,b){const d=b===o?b:z(o,b),g=f*4;return d[g+0]=v[0],d[g+1]=v[1],d[g+2]=v[2],d}function Ee(o,v){const f=v??s.create(),b=o[0],d=o[1],g=o[2],C=o[4],E=o[5],$=o[6],U=o[8],j=o[9],se=o[10];return f[0]=Math.sqrt(b*b+d*d+g*g),f[1]=Math.sqrt(C*C+E*E+$*$),f[2]=Math.sqrt(U*U+j*j+se*se),f}function Te(o,v,f,b,d){const g=d??new i(16),C=Math.tan(Math.PI*.5-.5*o);if(g[0]=C/v,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=C,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,Number.isFinite(b)){const E=1/(f-b);g[10]=b*E,g[14]=b*f*E}else g[10]=-1,g[14]=-f;return g}function Re(o,v,f,b=1/0,d){const g=d??new i(16),C=1/Math.tan(o*.5);if(g[0]=C/v,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=C,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,b===1/0)g[10]=0,g[14]=f;else{const E=1/(b-f);g[10]=f*E,g[14]=b*f*E}return g}function Ge(o,v,f,b,d,g,C){const E=C??new i(16);return E[0]=2/(v-o),E[1]=0,E[2]=0,E[3]=0,E[4]=0,E[5]=2/(b-f),E[6]=0,E[7]=0,E[8]=0,E[9]=0,E[10]=1/(d-g),E[11]=0,E[12]=(v+o)/(o-v),E[13]=(b+f)/(f-b),E[14]=d/(d-g),E[15]=1,E}function ie(o,v,f,b,d,g,C){const E=C??new i(16),$=v-o,U=b-f,j=d-g;return E[0]=2*d/$,E[1]=0,E[2]=0,E[3]=0,E[4]=0,E[5]=2*d/U,E[6]=0,E[7]=0,E[8]=(o+v)/$,E[9]=(b+f)/U,E[10]=g/j,E[11]=-1,E[12]=0,E[13]=0,E[14]=d*g/j,E[15]=0,E}function F(o,v,f,b,d,g=1/0,C){const E=C??new i(16),$=v-o,U=b-f;if(E[0]=2*d/$,E[1]=0,E[2]=0,E[3]=0,E[4]=0,E[5]=2*d/U,E[6]=0,E[7]=0,E[8]=(o+v)/$,E[9]=(b+f)/U,E[11]=-1,E[12]=0,E[13]=0,E[15]=0,g===1/0)E[10]=0,E[14]=d;else{const j=1/(g-d);E[10]=d*j,E[14]=g*d*j}return E}const xe=s.create(),be=s.create(),me=s.create();function fe(o,v,f,b){const d=b??new i(16);return s.normalize(s.subtract(v,o,me),me),s.normalize(s.cross(f,me,xe),xe),s.normalize(s.cross(me,xe,be),be),d[0]=xe[0],d[1]=xe[1],d[2]=xe[2],d[3]=0,d[4]=be[0],d[5]=be[1],d[6]=be[2],d[7]=0,d[8]=me[0],d[9]=me[1],d[10]=me[2],d[11]=0,d[12]=o[0],d[13]=o[1],d[14]=o[2],d[15]=1,d}function oe(o,v,f,b){const d=b??new i(16);return s.normalize(s.subtract(o,v,me),me),s.normalize(s.cross(f,me,xe),xe),s.normalize(s.cross(me,xe,be),be),d[0]=xe[0],d[1]=xe[1],d[2]=xe[2],d[3]=0,d[4]=be[0],d[5]=be[1],d[6]=be[2],d[7]=0,d[8]=me[0],d[9]=me[1],d[10]=me[2],d[11]=0,d[12]=o[0],d[13]=o[1],d[14]=o[2],d[15]=1,d}function Pe(o,v,f,b){const d=b??new i(16);return s.normalize(s.subtract(o,v,me),me),s.normalize(s.cross(f,me,xe),xe),s.normalize(s.cross(me,xe,be),be),d[0]=xe[0],d[1]=be[0],d[2]=me[0],d[3]=0,d[4]=xe[1],d[5]=be[1],d[6]=me[1],d[7]=0,d[8]=xe[2],d[9]=be[2],d[10]=me[2],d[11]=0,d[12]=-(xe[0]*o[0]+xe[1]*o[1]+xe[2]*o[2]),d[13]=-(be[0]*o[0]+be[1]*o[1]+be[2]*o[2]),d[14]=-(me[0]*o[0]+me[1]*o[1]+me[2]*o[2]),d[15]=1,d}function Ie(o,v){const f=v??new i(16);return f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=o[0],f[13]=o[1],f[14]=o[2],f[15]=1,f}function Ae(o,v,f){const b=f??new i(16),d=v[0],g=v[1],C=v[2],E=o[0],$=o[1],U=o[2],j=o[3],se=o[1*4+0],ae=o[1*4+1],ne=o[1*4+2],ge=o[1*4+3],Me=o[2*4+0],Be=o[2*4+1],ke=o[2*4+2],$e=o[2*4+3],Ve=o[3*4+0],rt=o[3*4+1],ut=o[3*4+2],Ne=o[3*4+3];return o!==b&&(b[0]=E,b[1]=$,b[2]=U,b[3]=j,b[4]=se,b[5]=ae,b[6]=ne,b[7]=ge,b[8]=Me,b[9]=Be,b[10]=ke,b[11]=$e),b[12]=E*d+se*g+Me*C+Ve,b[13]=$*d+ae*g+Be*C+rt,b[14]=U*d+ne*g+ke*C+ut,b[15]=j*d+ge*g+$e*C+Ne,b}function De(o,v){const f=v??new i(16),b=Math.cos(o),d=Math.sin(o);return f[0]=1,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=b,f[6]=d,f[7]=0,f[8]=0,f[9]=-d,f[10]=b,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function ye(o,v,f){const b=f??new i(16),d=o[4],g=o[5],C=o[6],E=o[7],$=o[8],U=o[9],j=o[10],se=o[11],ae=Math.cos(v),ne=Math.sin(v);return b[4]=ae*d+ne*$,b[5]=ae*g+ne*U,b[6]=ae*C+ne*j,b[7]=ae*E+ne*se,b[8]=ae*$-ne*d,b[9]=ae*U-ne*g,b[10]=ae*j-ne*C,b[11]=ae*se-ne*E,o!==b&&(b[0]=o[0],b[1]=o[1],b[2]=o[2],b[3]=o[3],b[12]=o[12],b[13]=o[13],b[14]=o[14],b[15]=o[15]),b}function ve(o,v){const f=v??new i(16),b=Math.cos(o),d=Math.sin(o);return f[0]=b,f[1]=0,f[2]=-d,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=d,f[9]=0,f[10]=b,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function Se(o,v,f){const b=f??new i(16),d=o[0*4+0],g=o[0*4+1],C=o[0*4+2],E=o[0*4+3],$=o[2*4+0],U=o[2*4+1],j=o[2*4+2],se=o[2*4+3],ae=Math.cos(v),ne=Math.sin(v);return b[0]=ae*d-ne*$,b[1]=ae*g-ne*U,b[2]=ae*C-ne*j,b[3]=ae*E-ne*se,b[8]=ae*$+ne*d,b[9]=ae*U+ne*g,b[10]=ae*j+ne*C,b[11]=ae*se+ne*E,o!==b&&(b[4]=o[4],b[5]=o[5],b[6]=o[6],b[7]=o[7],b[12]=o[12],b[13]=o[13],b[14]=o[14],b[15]=o[15]),b}function I(o,v){const f=v??new i(16),b=Math.cos(o),d=Math.sin(o);return f[0]=b,f[1]=d,f[2]=0,f[3]=0,f[4]=-d,f[5]=b,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function Q(o,v,f){const b=f??new i(16),d=o[0*4+0],g=o[0*4+1],C=o[0*4+2],E=o[0*4+3],$=o[1*4+0],U=o[1*4+1],j=o[1*4+2],se=o[1*4+3],ae=Math.cos(v),ne=Math.sin(v);return b[0]=ae*d+ne*$,b[1]=ae*g+ne*U,b[2]=ae*C+ne*j,b[3]=ae*E+ne*se,b[4]=ae*$-ne*d,b[5]=ae*U-ne*g,b[6]=ae*j-ne*C,b[7]=ae*se-ne*E,o!==b&&(b[8]=o[8],b[9]=o[9],b[10]=o[10],b[11]=o[11],b[12]=o[12],b[13]=o[13],b[14]=o[14],b[15]=o[15]),b}function T(o,v,f){const b=f??new i(16);let d=o[0],g=o[1],C=o[2];const E=Math.sqrt(d*d+g*g+C*C);d/=E,g/=E,C/=E;const $=d*d,U=g*g,j=C*C,se=Math.cos(v),ae=Math.sin(v),ne=1-se;return b[0]=$+(1-$)*se,b[1]=d*g*ne+C*ae,b[2]=d*C*ne-g*ae,b[3]=0,b[4]=d*g*ne-C*ae,b[5]=U+(1-U)*se,b[6]=g*C*ne+d*ae,b[7]=0,b[8]=d*C*ne+g*ae,b[9]=g*C*ne-d*ae,b[10]=j+(1-j)*se,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,b}const c=T;function p(o,v,f,b){const d=b??new i(16);let g=v[0],C=v[1],E=v[2];const $=Math.sqrt(g*g+C*C+E*E);g/=$,C/=$,E/=$;const U=g*g,j=C*C,se=E*E,ae=Math.cos(f),ne=Math.sin(f),ge=1-ae,Me=U+(1-U)*ae,Be=g*C*ge+E*ne,ke=g*E*ge-C*ne,$e=g*C*ge-E*ne,Ve=j+(1-j)*ae,rt=C*E*ge+g*ne,ut=g*E*ge+C*ne,Ne=C*E*ge-g*ne,it=se+(1-se)*ae,Qe=o[0],et=o[1],tt=o[2],Xe=o[3],pt=o[4],ht=o[5],nt=o[6],at=o[7],ct=o[8],dt=o[9],Ze=o[10],je=o[11];return d[0]=Me*Qe+Be*pt+ke*ct,d[1]=Me*et+Be*ht+ke*dt,d[2]=Me*tt+Be*nt+ke*Ze,d[3]=Me*Xe+Be*at+ke*je,d[4]=$e*Qe+Ve*pt+rt*ct,d[5]=$e*et+Ve*ht+rt*dt,d[6]=$e*tt+Ve*nt+rt*Ze,d[7]=$e*Xe+Ve*at+rt*je,d[8]=ut*Qe+Ne*pt+it*ct,d[9]=ut*et+Ne*ht+it*dt,d[10]=ut*tt+Ne*nt+it*Ze,d[11]=ut*Xe+Ne*at+it*je,o!==d&&(d[12]=o[12],d[13]=o[13],d[14]=o[14],d[15]=o[15]),d}const h=p;function w(o,v){const f=v??new i(16);return f[0]=o[0],f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=o[1],f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=o[2],f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function B(o,v,f){const b=f??new i(16),d=v[0],g=v[1],C=v[2];return b[0]=d*o[0*4+0],b[1]=d*o[0*4+1],b[2]=d*o[0*4+2],b[3]=d*o[0*4+3],b[4]=g*o[1*4+0],b[5]=g*o[1*4+1],b[6]=g*o[1*4+2],b[7]=g*o[1*4+3],b[8]=C*o[2*4+0],b[9]=C*o[2*4+1],b[10]=C*o[2*4+2],b[11]=C*o[2*4+3],o!==b&&(b[12]=o[12],b[13]=o[13],b[14]=o[14],b[15]=o[15]),b}function D(o,v){const f=v??new i(16);return f[0]=o,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=o,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=o,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}function M(o,v,f){const b=f??new i(16);return b[0]=v*o[0*4+0],b[1]=v*o[0*4+1],b[2]=v*o[0*4+2],b[3]=v*o[0*4+3],b[4]=v*o[1*4+0],b[5]=v*o[1*4+1],b[6]=v*o[1*4+2],b[7]=v*o[1*4+3],b[8]=v*o[2*4+0],b[9]=v*o[2*4+1],b[10]=v*o[2*4+2],b[11]=v*o[2*4+3],o!==b&&(b[12]=o[12],b[13]=o[13],b[14]=o[14],b[15]=o[15]),b}return{add:x,aim:fe,axisRotate:p,axisRotation:T,cameraAim:oe,clone:L,copy:z,create:a,determinant:Z,equals:O,equalsApproximately:N,fromMat3:l,fromQuat:_,frustum:ie,frustumReverseZ:F,getAxis:de,getScaling:Ee,getTranslation:ue,identity:Y,inverse:q,invert:V,lookAt:Pe,mul:K,mulScalar:A,multiply:ee,multiplyScalar:P,negate:y,ortho:Ge,perspective:Te,perspectiveReverseZ:Re,rotate:h,rotateX:ye,rotateY:Se,rotateZ:Q,rotation:c,rotationX:De,rotationY:ve,rotationZ:I,scale:B,scaling:w,set:u,setAxis:pe,setTranslation:te,translate:Ae,translation:Ie,transpose:R,uniformScale:M,uniformScaling:D}}const _a=new Map;function Wc(i){let s=_a.get(i);return s||(s=Kc(i),_a.set(i,s)),s}function jc(i){const s=hr(i);function a(I,Q,T,c){const p=new i(4);return I!==void 0&&(p[0]=I,Q!==void 0&&(p[1]=Q,T!==void 0&&(p[2]=T,c!==void 0&&(p[3]=c)))),p}const u=a;function l(I,Q,T,c,p){const h=p??new i(4);return h[0]=I,h[1]=Q,h[2]=T,h[3]=c,h}function _(I,Q,T){const c=T??new i(4),p=Q*.5,h=Math.sin(p);return c[0]=h*I[0],c[1]=h*I[1],c[2]=h*I[2],c[3]=Math.cos(p),c}function y(I,Q){const T=Q??s.create(3),c=Math.acos(I[3])*2,p=Math.sin(c*.5);return p>Ke?(T[0]=I[0]/p,T[1]=I[1]/p,T[2]=I[2]/p):(T[0]=1,T[1]=0,T[2]=0),{angle:c,axis:T}}function x(I,Q){const T=Te(I,Q);return Math.acos(2*T*T-1)}function P(I,Q,T){const c=T??new i(4),p=I[0],h=I[1],w=I[2],B=I[3],D=Q[0],M=Q[1],o=Q[2],v=Q[3];return c[0]=p*v+B*D+h*o-w*M,c[1]=h*v+B*M+w*D-p*o,c[2]=w*v+B*o+p*M-h*D,c[3]=B*v-p*D-h*M-w*o,c}const A=P;function z(I,Q,T){const c=T??new i(4),p=Q*.5,h=I[0],w=I[1],B=I[2],D=I[3],M=Math.sin(p),o=Math.cos(p);return c[0]=h*o+D*M,c[1]=w*o+B*M,c[2]=B*o-w*M,c[3]=D*o-h*M,c}function L(I,Q,T){const c=T??new i(4),p=Q*.5,h=I[0],w=I[1],B=I[2],D=I[3],M=Math.sin(p),o=Math.cos(p);return c[0]=h*o-B*M,c[1]=w*o+D*M,c[2]=B*o+h*M,c[3]=D*o-w*M,c}function N(I,Q,T){const c=T??new i(4),p=Q*.5,h=I[0],w=I[1],B=I[2],D=I[3],M=Math.sin(p),o=Math.cos(p);return c[0]=h*o+w*M,c[1]=w*o-h*M,c[2]=B*o+D*M,c[3]=D*o-B*M,c}function O(I,Q,T,c){const p=c??new i(4),h=I[0],w=I[1],B=I[2],D=I[3];let M=Q[0],o=Q[1],v=Q[2],f=Q[3],b=h*M+w*o+B*v+D*f;b<0&&(b=-b,M=-M,o=-o,v=-v,f=-f);let d,g;if(1-b>Ke){const C=Math.acos(b),E=Math.sin(C);d=Math.sin((1-T)*C)/E,g=Math.sin(T*C)/E}else d=1-T,g=T;return p[0]=d*h+g*M,p[1]=d*w+g*o,p[2]=d*B+g*v,p[3]=d*D+g*f,p}function Y(I,Q){const T=Q??new i(4),c=I[0],p=I[1],h=I[2],w=I[3],B=c*c+p*p+h*h+w*w,D=B?1/B:0;return T[0]=-c*D,T[1]=-p*D,T[2]=-h*D,T[3]=w*D,T}function R(I,Q){const T=Q??new i(4);return T[0]=-I[0],T[1]=-I[1],T[2]=-I[2],T[3]=I[3],T}function q(I,Q){const T=Q??new i(4),c=I[0]+I[5]+I[10];if(c>0){const p=Math.sqrt(c+1);T[3]=.5*p;const h=.5/p;T[0]=(I[6]-I[9])*h,T[1]=(I[8]-I[2])*h,T[2]=(I[1]-I[4])*h}else{let p=0;I[5]>I[0]&&(p=1),I[10]>I[p*4+p]&&(p=2);const h=(p+1)%3,w=(p+2)%3,B=Math.sqrt(I[p*4+p]-I[h*4+h]-I[w*4+w]+1);T[p]=.5*B;const D=.5/B;T[3]=(I[h*4+w]-I[w*4+h])*D,T[h]=(I[h*4+p]+I[p*4+h])*D,T[w]=(I[w*4+p]+I[p*4+w])*D}return T}function Z(I,Q,T,c,p){const h=p??new i(4),w=I*.5,B=Q*.5,D=T*.5,M=Math.sin(w),o=Math.cos(w),v=Math.sin(B),f=Math.cos(B),b=Math.sin(D),d=Math.cos(D);switch(c){case"xyz":h[0]=M*f*d+o*v*b,h[1]=o*v*d-M*f*b,h[2]=o*f*b+M*v*d,h[3]=o*f*d-M*v*b;break;case"xzy":h[0]=M*f*d-o*v*b,h[1]=o*v*d-M*f*b,h[2]=o*f*b+M*v*d,h[3]=o*f*d+M*v*b;break;case"yxz":h[0]=M*f*d+o*v*b,h[1]=o*v*d-M*f*b,h[2]=o*f*b-M*v*d,h[3]=o*f*d+M*v*b;break;case"yzx":h[0]=M*f*d+o*v*b,h[1]=o*v*d+M*f*b,h[2]=o*f*b-M*v*d,h[3]=o*f*d-M*v*b;break;case"zxy":h[0]=M*f*d-o*v*b,h[1]=o*v*d+M*f*b,h[2]=o*f*b+M*v*d,h[3]=o*f*d-M*v*b;break;case"zyx":h[0]=M*f*d-o*v*b,h[1]=o*v*d+M*f*b,h[2]=o*f*b-M*v*d,h[3]=o*f*d+M*v*b;break;default:throw new Error(`Unknown rotation order: ${c}`)}return h}function V(I,Q){const T=Q??new i(4);return T[0]=I[0],T[1]=I[1],T[2]=I[2],T[3]=I[3],T}const ee=V;function K(I,Q,T){const c=T??new i(4);return c[0]=I[0]+Q[0],c[1]=I[1]+Q[1],c[2]=I[2]+Q[2],c[3]=I[3]+Q[3],c}function te(I,Q,T){const c=T??new i(4);return c[0]=I[0]-Q[0],c[1]=I[1]-Q[1],c[2]=I[2]-Q[2],c[3]=I[3]-Q[3],c}const ue=te;function de(I,Q,T){const c=T??new i(4);return c[0]=I[0]*Q,c[1]=I[1]*Q,c[2]=I[2]*Q,c[3]=I[3]*Q,c}const pe=de;function Ee(I,Q,T){const c=T??new i(4);return c[0]=I[0]/Q,c[1]=I[1]/Q,c[2]=I[2]/Q,c[3]=I[3]/Q,c}function Te(I,Q){return I[0]*Q[0]+I[1]*Q[1]+I[2]*Q[2]+I[3]*Q[3]}function Re(I,Q,T,c){const p=c??new i(4);return p[0]=I[0]+T*(Q[0]-I[0]),p[1]=I[1]+T*(Q[1]-I[1]),p[2]=I[2]+T*(Q[2]-I[2]),p[3]=I[3]+T*(Q[3]-I[3]),p}function Ge(I){const Q=I[0],T=I[1],c=I[2],p=I[3];return Math.sqrt(Q*Q+T*T+c*c+p*p)}const ie=Ge;function F(I){const Q=I[0],T=I[1],c=I[2],p=I[3];return Q*Q+T*T+c*c+p*p}const xe=F;function be(I,Q){const T=Q??new i(4),c=I[0],p=I[1],h=I[2],w=I[3],B=Math.sqrt(c*c+p*p+h*h+w*w);return B>1e-5?(T[0]=c/B,T[1]=p/B,T[2]=h/B,T[3]=w/B):(T[0]=0,T[1]=0,T[2]=0,T[3]=1),T}function me(I,Q){return Math.abs(I[0]-Q[0])<Ke&&Math.abs(I[1]-Q[1])<Ke&&Math.abs(I[2]-Q[2])<Ke&&Math.abs(I[3]-Q[3])<Ke}function fe(I,Q){return I[0]===Q[0]&&I[1]===Q[1]&&I[2]===Q[2]&&I[3]===Q[3]}function oe(I){const Q=I??new i(4);return Q[0]=0,Q[1]=0,Q[2]=0,Q[3]=1,Q}const Pe=s.create(),Ie=s.create(),Ae=s.create();function De(I,Q,T){const c=T??new i(4),p=s.dot(I,Q);return p<-.999999?(s.cross(Ie,I,Pe),s.len(Pe)<1e-6&&s.cross(Ae,I,Pe),s.normalize(Pe,Pe),_(Pe,Math.PI,c),c):p>.999999?(c[0]=0,c[1]=0,c[2]=0,c[3]=1,c):(s.cross(I,Q,Pe),c[0]=Pe[0],c[1]=Pe[1],c[2]=Pe[2],c[3]=1+p,be(c,c))}const ye=new i(4),ve=new i(4);function Se(I,Q,T,c,p,h){const w=h??new i(4);return O(I,c,p,ye),O(Q,T,p,ve),O(ye,ve,2*p*(1-p),w),w}return{create:a,fromValues:u,set:l,fromAxisAngle:_,toAxisAngle:y,angle:x,multiply:P,mul:A,rotateX:z,rotateY:L,rotateZ:N,slerp:O,inverse:Y,conjugate:R,fromMat:q,fromEuler:Z,copy:V,clone:ee,add:K,subtract:te,sub:ue,mulScalar:de,scale:pe,divScalar:Ee,dot:Te,lerp:Re,length:Ge,len:ie,lengthSq:F,lenSq:xe,normalize:be,equalsApproximately:me,equals:fe,identity:oe,rotationTo:De,sqlerp:Se}}const ma=new Map;function Hc(i){let s=ma.get(i);return s||(s=jc(i),ma.set(i,s)),s}function Yc(i){function s(T,c,p,h){const w=new i(4);return T!==void 0&&(w[0]=T,c!==void 0&&(w[1]=c,p!==void 0&&(w[2]=p,h!==void 0&&(w[3]=h)))),w}const a=s;function u(T,c,p,h,w){const B=w??new i(4);return B[0]=T,B[1]=c,B[2]=p,B[3]=h,B}function l(T,c){const p=c??new i(4);return p[0]=Math.ceil(T[0]),p[1]=Math.ceil(T[1]),p[2]=Math.ceil(T[2]),p[3]=Math.ceil(T[3]),p}function _(T,c){const p=c??new i(4);return p[0]=Math.floor(T[0]),p[1]=Math.floor(T[1]),p[2]=Math.floor(T[2]),p[3]=Math.floor(T[3]),p}function y(T,c){const p=c??new i(4);return p[0]=Math.round(T[0]),p[1]=Math.round(T[1]),p[2]=Math.round(T[2]),p[3]=Math.round(T[3]),p}function x(T,c=0,p=1,h){const w=h??new i(4);return w[0]=Math.min(p,Math.max(c,T[0])),w[1]=Math.min(p,Math.max(c,T[1])),w[2]=Math.min(p,Math.max(c,T[2])),w[3]=Math.min(p,Math.max(c,T[3])),w}function P(T,c,p){const h=p??new i(4);return h[0]=T[0]+c[0],h[1]=T[1]+c[1],h[2]=T[2]+c[2],h[3]=T[3]+c[3],h}function A(T,c,p,h){const w=h??new i(4);return w[0]=T[0]+c[0]*p,w[1]=T[1]+c[1]*p,w[2]=T[2]+c[2]*p,w[3]=T[3]+c[3]*p,w}function z(T,c,p){const h=p??new i(4);return h[0]=T[0]-c[0],h[1]=T[1]-c[1],h[2]=T[2]-c[2],h[3]=T[3]-c[3],h}const L=z;function N(T,c){return Math.abs(T[0]-c[0])<Ke&&Math.abs(T[1]-c[1])<Ke&&Math.abs(T[2]-c[2])<Ke&&Math.abs(T[3]-c[3])<Ke}function O(T,c){return T[0]===c[0]&&T[1]===c[1]&&T[2]===c[2]&&T[3]===c[3]}function Y(T,c,p,h){const w=h??new i(4);return w[0]=T[0]+p*(c[0]-T[0]),w[1]=T[1]+p*(c[1]-T[1]),w[2]=T[2]+p*(c[2]-T[2]),w[3]=T[3]+p*(c[3]-T[3]),w}function R(T,c,p,h){const w=h??new i(4);return w[0]=T[0]+p[0]*(c[0]-T[0]),w[1]=T[1]+p[1]*(c[1]-T[1]),w[2]=T[2]+p[2]*(c[2]-T[2]),w[3]=T[3]+p[3]*(c[3]-T[3]),w}function q(T,c,p){const h=p??new i(4);return h[0]=Math.max(T[0],c[0]),h[1]=Math.max(T[1],c[1]),h[2]=Math.max(T[2],c[2]),h[3]=Math.max(T[3],c[3]),h}function Z(T,c,p){const h=p??new i(4);return h[0]=Math.min(T[0],c[0]),h[1]=Math.min(T[1],c[1]),h[2]=Math.min(T[2],c[2]),h[3]=Math.min(T[3],c[3]),h}function V(T,c,p){const h=p??new i(4);return h[0]=T[0]*c,h[1]=T[1]*c,h[2]=T[2]*c,h[3]=T[3]*c,h}const ee=V;function K(T,c,p){const h=p??new i(4);return h[0]=T[0]/c,h[1]=T[1]/c,h[2]=T[2]/c,h[3]=T[3]/c,h}function te(T,c){const p=c??new i(4);return p[0]=1/T[0],p[1]=1/T[1],p[2]=1/T[2],p[3]=1/T[3],p}const ue=te;function de(T,c){return T[0]*c[0]+T[1]*c[1]+T[2]*c[2]+T[3]*c[3]}function pe(T){const c=T[0],p=T[1],h=T[2],w=T[3];return Math.sqrt(c*c+p*p+h*h+w*w)}const Ee=pe;function Te(T){const c=T[0],p=T[1],h=T[2],w=T[3];return c*c+p*p+h*h+w*w}const Re=Te;function Ge(T,c){const p=T[0]-c[0],h=T[1]-c[1],w=T[2]-c[2],B=T[3]-c[3];return Math.sqrt(p*p+h*h+w*w+B*B)}const ie=Ge;function F(T,c){const p=T[0]-c[0],h=T[1]-c[1],w=T[2]-c[2],B=T[3]-c[3];return p*p+h*h+w*w+B*B}const xe=F;function be(T,c){const p=c??new i(4),h=T[0],w=T[1],B=T[2],D=T[3],M=Math.sqrt(h*h+w*w+B*B+D*D);return M>1e-5?(p[0]=h/M,p[1]=w/M,p[2]=B/M,p[3]=D/M):(p[0]=0,p[1]=0,p[2]=0,p[3]=0),p}function me(T,c){const p=c??new i(4);return p[0]=-T[0],p[1]=-T[1],p[2]=-T[2],p[3]=-T[3],p}function fe(T,c){const p=c??new i(4);return p[0]=T[0],p[1]=T[1],p[2]=T[2],p[3]=T[3],p}const oe=fe;function Pe(T,c,p){const h=p??new i(4);return h[0]=T[0]*c[0],h[1]=T[1]*c[1],h[2]=T[2]*c[2],h[3]=T[3]*c[3],h}const Ie=Pe;function Ae(T,c,p){const h=p??new i(4);return h[0]=T[0]/c[0],h[1]=T[1]/c[1],h[2]=T[2]/c[2],h[3]=T[3]/c[3],h}const De=Ae;function ye(T){const c=T??new i(4);return c[0]=0,c[1]=0,c[2]=0,c[3]=0,c}function ve(T,c,p){const h=p??new i(4),w=T[0],B=T[1],D=T[2],M=T[3];return h[0]=c[0]*w+c[4]*B+c[8]*D+c[12]*M,h[1]=c[1]*w+c[5]*B+c[9]*D+c[13]*M,h[2]=c[2]*w+c[6]*B+c[10]*D+c[14]*M,h[3]=c[3]*w+c[7]*B+c[11]*D+c[15]*M,h}function Se(T,c,p){const h=p??new i(4);return be(T,h),V(h,c,h)}function I(T,c,p){const h=p??new i(4);return pe(T)>c?Se(T,c,h):fe(T,h)}function Q(T,c,p){const h=p??new i(4);return Y(T,c,.5,h)}return{create:s,fromValues:a,set:u,ceil:l,floor:_,round:y,clamp:x,add:P,addScaled:A,subtract:z,sub:L,equalsApproximately:N,equals:O,lerp:Y,lerpV:R,max:q,min:Z,mulScalar:V,scale:ee,divScalar:K,inverse:te,invert:ue,dot:de,length:pe,len:Ee,lengthSq:Te,lenSq:Re,distance:Ge,dist:ie,distanceSq:F,distSq:xe,normalize:be,negate:me,copy:fe,clone:oe,multiply:Pe,mul:Ie,divide:Ae,div:De,zero:ye,transformMat4:ve,setLength:Se,truncate:I,midpoint:Q}}const ba=new Map;function Xc(i){let s=ba.get(i);return s||(s=Yc(i),ba.set(i,s)),s}function fi(i,s,a,u,l,_){return{mat3:qc(i),mat4:Wc(s),quat:Hc(a),vec2:Za(u),vec3:hr(l),vec4:Xc(_)}}const{mat3:Mt,mat4:Pt,quat:mt,vec2:va,vec3:X,vec4:Fd}=fi(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);fi(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);fi(Oc,Array,Array,Array,Array,Array);const Zc=(()=>{try{return new URLSearchParams(window.location.search).get("render")==="always"}catch{return!1}})(),Jc=1e3;class Ja{constructor(){S(this,"pos",new Float32Array(3));S(this,"rot",new Float32Array(16));S(this,"fov",NaN);S(this,"w",0);S(this,"h",0);S(this,"extra","");S(this,"requested",!0);S(this,"lastDraw",-1/0);S(this,"frames",0);S(this,"reason","start");S(this,"lastActive",-1/0)}request(){this.requested=!0}needFrame(s,a,u,l,_,y=""){const x=a.position,P=a.rotation,A=a.getFovY();let z=Zc?"always":this.requested?"requested":_?"active":this.frames<3?"warmup":s-this.lastDraw>=Jc?"heartbeat":"";if(!z)if(u!==this.w||l!==this.h)z="size";else if(A!==this.fov)z="fov";else if(y!==this.extra)z="state";else{for(let L=0;L<3&&!z;L++)Math.abs(x[L]-this.pos[L])>1e-6*(1+Math.abs(x[L]))&&(z="position");for(let L=0;L<16&&!z;L++)Math.abs(P[L]-this.rot[L])>1e-7&&(z="rotation")}if(!z)return!1;this.reason=z;for(let L=0;L<3;L++)this.pos[L]=x[L];for(let L=0;L<16;L++)this.rot[L]=P[L];return this.fov=A,this.w=u,this.h=l,this.extra=y,this.requested=!1,this.lastDraw=s,this.frames++,z!=="heartbeat"&&(this.lastActive=s),!0}idleMs(s){return s-this.lastActive}}const Qa=64,ti=1,ni=2,ga=4,wa=512,xa=1024,ya=2048,Pa=4096,Sa=8192,Qc=0,Wt=new ArrayBuffer(Qa),lt={canvas_size:new Uint32Array(Wt,0,2),accel_flags:new Uint32Array(Wt,8,1),feature_mode:new Uint32Array(Wt,12,1),gaussian_scaling:new Float32Array(Wt,16,1),sh_bias:new Float32Array(Wt,20,1),color_K:new Uint32Array(Wt,24,1),walltime:new Float32Array(Wt,28,1),clip_plane:new Float32Array(Wt,32,4),clip_intr:new Float32Array(Wt,48,4)};function eu(i){lt.canvas_size[0]=i.width>>>0,lt.canvas_size[1]=i.height>>>0,lt.accel_flags[0]=(i.accel_flags??ti|ni)>>>0,lt.feature_mode[0]=(i.feature_mode??Qc)>>>0,lt.gaussian_scaling[0]=i.gaussian_scaling??1,lt.sh_bias[0]=i.sh_bias??.5,lt.color_K[0]=(i.color_K??0)>>>0,lt.walltime[0]=i.walltime??0}function fr(i,s){i.queue.writeBuffer(s,0,Wt)}function en(i,s,a){a&&i&&s&&fr(i,s)}function An(i,s,a,u,l=!0){lt.canvas_size[0]=i>>>0,lt.canvas_size[1]=s>>>0,en(a??null,u??null,l)}function Ea(i,s,a,u=!0){lt.gaussian_scaling[0]=i,en(s??null,a??null,u)}function ka(i,s,a,u=!0){lt.sh_bias[0]=i,en(s??null,a??null,u)}function tu(i,s,a,u=!0){lt.color_K[0]=i>>>0,en(s??null,a??null,u)}function nu(i,s,a,u=!0){lt.feature_mode[0]=i>>>0,en(s??null,a??null,u)}function Ta(i,s,a,u,l=!0){i?(lt.clip_plane.set(i),lt.clip_intr.set(s)):(lt.clip_plane.set([0,0,0,0]),lt.clip_intr.set([0,0,0,0])),l&&a&&u&&fr(a,u)}function su(i){const s=new Float32Array(1),a=new Uint32Array(s.buffer);s[0]=i;const u=a[0],l=u>>>16&32768,_=(u>>>23&255)-127+15;return _<=0?l:_>=31?l|31744:l|_<<10|u>>>13&1023}function Ca(i,s=.3,a,u,l=!0){let _=lt.accel_flags[0]&65535&~Sa;i&&(_=_|Sa|su(s)<<16),lt.accel_flags[0]=_>>>0,en(a??null,u??null,l)}function ds(i,s,a,u=!0){let l=lt.accel_flags[0];i.oac!==void 0&&(l=i.oac?l|ti:l&~ti),i.spr!==void 0&&(l=i.spr?l|ni:l&~ni),i.bfc!==void 0&&(l=i.bfc?l|ga:l&~ga),i.hypLegacy!==void 0&&(l=i.hypLegacy?l|wa:l&~wa),i.centred!==void 0&&(l=i.centred?l|Pa:l&~Pa),i.raysplat!==void 0&&(l=i.raysplat?l|ya:l&~ya),i.legacyPos!==void 0&&(l=i.legacyPos?l|xa:l&~xa),lt.accel_flags[0]=l>>>0,en(s??null,a??null,u)}const Ba=16384,Aa=32768;function ru(i,s,a,u=!0){let l=lt.accel_flags[0];l=i?l&~Aa:l|Aa,lt.accel_flags[0]=l>>>0,en(s??null,a??null,u)}function Ma(i,s,a,u=!0){let l=lt.accel_flags[0];l=i?l|Ba:l&~Ba,lt.accel_flags[0]=l>>>0,en(s??null,a??null,u)}function iu(i,s,a,u=!0){const l=i>0?Math.max(1,Math.min(63,Math.round(i*8))):0;let _=lt.accel_flags[0];_=_&-505|l<<3,lt.accel_flags[0]=_>>>0,en(s??null,a??null,u)}const au=`// Cap layer (2026-11-04): the exposed cross-section of an axis-aligned clip plane, drawn as ONE
// quad BEFORE the surfel pass so the sorted surfels composite over it ("over" blend, premultiplied).
// The texture is a stack of orthographic cross-section renders at N levels tau_k (BC7 2D array,
// RGBA with alpha = tissue mask); the fragment intersects the camera ray with the plane z = tau,
// maps the hit to in-plane uv, and samples the two nearest levels (lerp in tau).
struct CapParams {
  plane_axis   : u32,      // 0/1/2 = x/y/z
  n_levels     : u32,
  flip_v       : u32,      // 1 = level images are stored top-down relative to +axis2
  _p0          : u32,
  tau          : f32,      // current clip offset (bundle world units)
  tau_min      : f32,      // tau of level 0
  tau_max      : f32,      // tau of level n_levels-1 (uniform spacing)
  mix_levels   : f32,      // 1 = lerp between the two nearest levels, 0 = nearest
  uv_min       : vec2<f32>,// in-plane world coords of texel (0,0)
  uv_max       : vec2<f32>,// in-plane world coords of texel (W,H)
};
struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};
@group(0) @binding(0) var<uniform> camera : CameraUniforms;
@group(0) @binding(1) var<uniform> cap    : CapParams;
@group(0) @binding(2) var cap_tex : texture_2d_array<f32>;
@group(0) @binding(3) var cap_smp : sampler;

struct VOut { @builtin(position) pos : vec4<f32>, @location(0) ndc : vec2<f32> };

@vertex
fn vs_main(@builtin(vertex_index) vi : u32) -> VOut {
  // full-screen triangle; the fragment rejects rays that miss the plane rectangle
  var p = array<vec2<f32>, 3>(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
  var o : VOut; o.pos = vec4<f32>(p[vi], 0.0, 1.0); o.ndc = p[vi]; return o;
}

fn axis_of(v : vec3<f32>, a : u32) -> f32 { if a == 0u { return v.x; } if a == 1u { return v.y; } return v.z; }
fn inplane(v : vec3<f32>, a : u32) -> vec2<f32> { if a == 0u { return v.yz; } if a == 1u { return v.zx; } return v.xy; }

@fragment
fn fs_main(in : VOut) -> @location(0) vec4<f32> {
  // camera ray in world space through this pixel
  let cam_o = (camera.view_inv * vec4<f32>(0.0, 0.0, 0.0, 1.0)).xyz;
  let p_view = camera.proj_inv * vec4<f32>(in.ndc, 1.0, 1.0);
  let d_view = normalize(p_view.xyz / p_view.w);
  let d = normalize((camera.view_inv * vec4<f32>(d_view, 0.0)).xyz);
  let a = cap.plane_axis;
  let dn = axis_of(d, a);
  if abs(dn) < 1e-6 { discard; }
  let t = (cap.tau - axis_of(cam_o, a)) / dn;
  if t <= 0.0 { discard; }
  let hit = cam_o + t * d;
  let uvw = inplane(hit, a);
  var uv = (uvw - cap.uv_min) / (cap.uv_max - cap.uv_min);
  if uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0 { discard; }
  if cap.flip_v == 1u { uv.y = 1.0 - uv.y; }
  // level lookup
  let fl = clamp((cap.tau - cap.tau_min) / max(cap.tau_max - cap.tau_min, 1e-9), 0.0, 1.0) * f32(cap.n_levels - 1u);
  let l0 = u32(floor(fl)); let l1 = min(l0 + 1u, cap.n_levels - 1u); let w = select(0.0, fract(fl), cap.mix_levels > 0.5);
  let c0 = textureSampleLevel(cap_tex, cap_smp, uv, i32(l0), 0.0);
  let c1 = textureSampleLevel(cap_tex, cap_smp, uv, i32(l1), 0.0);
  let c = mix(c0, c1, w);
  if c.a < 1.0 / 255.0 { discard; }
  // premultiplied output for the renderer's "over" blend (the surfel pass composites on top)
  return vec4<f32>(c.rgb * c.a, c.a);
}
`;function ou(i){const s=new DataView(i),a=String.fromCharCode(s.getUint8(0),s.getUint8(1),s.getUint8(2),s.getUint8(3));if(a!=="CAP1")throw new Error(`capstack: bad magic '${a}'`);const u=s.getUint32(4,!0),l=s.getUint32(8,!0),_=s.getUint32(12,!0),y=s.getUint32(16,!0),x=s.getUint32(20,!0),P=s.getFloat32(24,!0),A=s.getFloat32(28,!0),z=[s.getFloat32(32,!0),s.getFloat32(36,!0)],L=[s.getFloat32(40,!0),s.getFloat32(44,!0)],N=s.getUint32(48,!0),O=56;return{meta:{W:u,H:l,N:_,axis:y,flipV:x,tauMin:P,tauMax:A,uvMin:z,uvMax:L,format:N},blocks:new Uint8Array(i,O)}}class _i{constructor(s,a,u,l,_,y){S(this,"pipeline");S(this,"params");S(this,"bg");S(this,"tex");S(this,"meta");S(this,"tau",0);S(this,"mix",1);S(this,"enabled",!0);this.device=s,this.meta=l,this.tex=_;const{W:x,H:P,N:A}=l;this.params=s.createBuffer({label:"cap params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const z=s.createShaderModule({label:"cap layer",code:au}),L=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d-array"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]});this.pipeline=s.createRenderPipeline({label:"cap layer",layout:s.createPipelineLayout({bindGroupLayouts:[L]}),vertex:{module:z,entryPoint:"vs_main"},fragment:{module:z,entryPoint:"fs_main",targets:[{format:a,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}});const N=s.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});this.bg=s.createBindGroup({layout:L,entries:[{binding:0,resource:{buffer:u}},{binding:1,resource:{buffer:this.params}},{binding:2,resource:this.tex.createView({dimension:"2d-array"})},{binding:3,resource:N}]}),console.log(`[cap] ${x}x${P} x ${A} levels, axis ${"xyz"[l.axis]}, tau ${l.tauMin.toFixed(3)}..${l.tauMax.toFixed(3)}, ${(y/1048576).toFixed(0)} MB BC7`)}static async create(s,a,u,l){const{W:_,H:y,N:x}=l.meta;if(l.meta.format!==7)throw new Error(`capstack: unsupported format ${l.meta.format}`);if(!s.features.has("texture-compression-bc"))throw new Error("capstack needs texture-compression-bc");const P=s.createTexture({label:"cap stack",size:{width:_,height:y,depthOrArrayLayers:x},format:"bc7-rgba-unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),A=Math.ceil(_/4)*16,z=Math.ceil(y/4),L=A*z;let N=0;for(let O=0;O<x;O++)s.queue.writeTexture({texture:P,origin:{x:0,y:0,z:O}},l.blocks,{offset:O*L,bytesPerRow:A,rowsPerImage:z},{width:_,height:y,depthOrArrayLayers:1}),N+=L,N>=32*1048576&&(s.queue.submit([]),await s.queue.onSubmittedWorkDone(),N=0);return s.queue.submit([]),await s.queue.onSubmittedWorkDone(),new _i(s,a,u,l.meta,P,l.blocks.byteLength)}draw(s,a,u){if(!this.enabled)return;const l=this.meta,_=new Uint32Array([l.axis,l.N,l.flipV,0]),y=new Float32Array([this.tau,l.tauMin,l.tauMax,this.mix,l.uvMin[0],l.uvMin[1],l.uvMax[0],l.uvMax[1]]),x=new ArrayBuffer(48);new Uint32Array(x,0,4).set(_),new Float32Array(x,16,8).set(y),this.device.queue.writeBuffer(this.params,0,x);const P=s.beginRenderPass({label:"cap",colorAttachments:[{view:a,loadOp:"load",storeOp:"store"}]});u&&(P.setViewport(0,0,u[0],u[1],0,1),P.setScissorRect(0,0,u[0],u[1])),P.setPipeline(this.pipeline),P.setBindGroup(0,this.bg),P.draw(3),P.end()}destroy(){this.tex.destroy(),this.params.destroy()}}const jn=(()=>{try{return new URLSearchParams(window.location.search).get("lowmem")==="1"}catch{return!1}})(),lu=/insufficient memory|out ?of ?memory|OutOfMemory|kIOGPUCommandBufferCallbackErrorOutOfMemory/i;let Ra=!1,si=!1;const eo="halloumi.gpuLossAttempts",cu=18e4,Zs=4,Da=[2e3,4e3,6e3,8e3],uu=2;function to(){try{return new URLSearchParams(window.location.search).get("bundle")??window.location.pathname}catch{return""}}function du(){try{const i=JSON.parse(sessionStorage.getItem(eo)??"null");if(i&&i.key===to()&&Date.now()-i.t<cu)return i.n|0}catch{}return 0}function pu(i){try{sessionStorage.setItem(eo,JSON.stringify({key:to(),n:i,t:Date.now()}))}catch{}}function jr(i,s){const a=document.createElement("div");Object.assign(a.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const u=document.createElement("div");if(u.textContent=i,a.appendChild(u),s){const l=document.createElement("button");l.textContent="Reload",Object.assign(l.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),l.onclick=()=>window.location.reload(),a.appendChild(l)}document.body.appendChild(a)}function no(i,s){if(Ra)return;Ra=!0,si=!0,console.error(`[gpu-loss] ${i} lost: ${s}`);const a=lu.test(s),u=du();if(u<Zs){pu(u+1);const l=new URL(window.location.href),_=a&&(jn||u>=uu);_&&l.searchParams.set("lowmem","1");const y=Da[Math.min(u,Da.length-1)],x=a?jn?`GPU memory was not available (attempt ${u+1} of ${Zs})`:"The GPU ran out of memory":"The GPU device was lost",P=_&&!jn?"reloading the viewer in low-memory mode":"reloading the viewer",A=y>=1e3?` in ${(y/1e3).toFixed(1)} s`:"";jr(`${x} — ${P}${A}…`,!1),console.warn(`[gpu-loss] auto-reload ${u+1}/${Zs} in ${y} ms${_?" (lowmem)":""}`),setTimeout(()=>window.location.replace(l.toString()),y)}else jr(a?`The GPU ran out of memory ${Zs} times in a row, even in low-memory mode. This Mac shares its RAM with the GPU: close other tabs / apps (or end the browser’s "GPU Process" in its Task Manager) and reload.`:`The GPU device was lost again (${i}: ${s}). Reload to try once more.`,!0)}function hu(i){i.lost.then(a=>{a.reason!=="destroyed"&&no("webgpu",`${a.reason}: ${a.message}`)});let s=0;i.addEventListener("uncapturederror",a=>{var u;s++<5&&console.error("[webgpu] uncaptured error:",((u=a==null?void 0:a.error)==null?void 0:u.message)??a)})}function Ua(i){i.addEventListener("webglcontextlost",s=>{s.preventDefault(),!so&&no("webgl","webglcontextlost")},!1)}let so=!1;function Hr(i){window.addEventListener("pagehide",()=>{so=!0;try{i()}catch(s){console.warn("[gpu-loss] release on pagehide failed:",s)}}),window.addEventListener("pageshow",s=>{s.persisted&&location.reload()})}const La=document.querySelector("#log");let It=null,Hn=null;function ro(){if(It)return It;It=document.createElement("div"),It.className="ply-spinner-overlay";const i=document.createElement("div");return i.className="ply-spinner",It.appendChild(i),Hn=document.createElement("div"),Hn.className="ply-spinner-label",It.appendChild(Hn),It.style.display="none",document.body.appendChild(It),It}function fs(i){ro(),Hn&&i&&(Hn.textContent=i),It&&(It.style.opacity="1",It.style.display="flex")}function At(i){ro(),Hn&&(Hn.textContent=i)}function Qt(){if(!It)return;const i=It;i.style.opacity="0",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},220)}function io(i,s){if(!La)return;const a=document.createElement("p");a.innerText=i,s&&Object.assign(a.style,s),La.appendChild(a)}async function bt(i){console.log(i),io(i)}async function fu(i){console.error(i),io(i,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let ao;function oo(){ao=performance.now()}function Ga(i){const s=performance.now()-ao;bt(`⏱️ ${i} Time: ${s.toFixed(0)} ms`)}function _u(i,s){if(!i)throw new Error(s&&(typeof s=="string"?s:s()))}function Wn(i){return i+3&-4}const mu=2,bu=3,vu=5,gu=6,Ds=7,tr=8,Ls=9,Gs=10,wu=11,xu=12,yu=13,Pu=14;function Yn(i){const s=new TextDecoder("ascii"),a=s.decode(new Uint8Array(i,0,4));if(a!=="NAT2")throw new Error(`NAT2 bad magic: '${a}'`);if(i.byteLength<4+64)throw new Error(`NAT2 truncated (${i.byteLength} bytes < 4 + 64)`);const u=new DataView(i),l=4,_=u.getUint32(l+0,!0),y=u.getUint32(l+4,!0),x=u.getUint32(l+8,!0),P=u.getUint32(l+12,!0),A=u.getUint32(l+16,!0),z=u.getFloat32(l+20,!0),L=u.getUint32(l+24,!0),N=u.getUint32(l+28,!0),O=N===yu||N===Pu,Y=O?N-2:N,R=u.getFloat32(l+32,!0),q=u.getFloat32(l+36,!0),Z=u.getFloat32(l+40,!0),V=u.getUint32(l+44,!0),ee=u.getFloat32(l+48,!0),K=u.getFloat32(l+52,!0),te=u.getUint32(l+56,!0),ue=u.getUint32(l+60,!0),de=Y===Ls||Y===Gs,pe=de?ue:0,Ee=de?0:ue&255,Te=de?0:ue>>8&255,Re=Ee>0?Ee:1;if(Y===vu||Y===gu)throw new Error(`NAT2: paired-RVQ format=${Y} is retired 2026-07-23; re-bake with typeD (--bc7-codebook)`);const Ge=Y===Ls||Y===Gs;if(Y!==mu&&Y!==bu&&Y!==wu&&Y!==xu&&Y!==Ds&&Y!==tr&&!Ge)throw new Error(`NAT2: Halloumi-WS supports BC7 (2), ASTC 4x4 (3), BC7-codebook (7), ASTC-codebook (8), probe-BC7 (9) or probe-ASTC (10); got format=${Y}`);if(_%4!==0||V%4!==0)throw new Error(`NAT2 block-format dims must be 4-aligned: width=${_} layer_h=${V}`);let ie=l+64;const F=(te+1)*4,xe=new Uint32Array(i.slice(ie,ie+F));ie+=F;let be;if(Re>1){const Se=(Re+1)*4;if(ie+Se>i.byteLength)throw new Error(`NAT2 truncated at column_cuts (need ${Se} from ${ie})`);be=new Uint32Array(i.slice(ie,ie+Se)),ie+=Se}else be=new Uint32Array([0,_]);let me=0;for(let Se=0;Se<Re;Se++){const I=be[Se+1]-be[Se];I>me&&(me=I)}if(Ge){const Se=pe&2?21:pe&1?7:6,I=A*Se*4;if(ie+I>i.byteLength)throw new Error(`NAT2 truncated at probes: need ${I} more bytes from offset ${ie}, have ${i.byteLength-ie}`);const Q=new Float32Array(i.slice(ie,ie+I));ie+=I;const T=Math.max(1,pe>>8&255),c=[];let p=0;for(let M=0,o=_,v=V;M<T;M++,o>>=1,v>>=1){const f=Math.max(1,o>>2)*Math.max(1,v>>2)*16;c.push(f),p+=f}const h=i.byteLength-ie;if(h<p)throw new Error(`NAT2 probe atlas truncated: need ${p} bytes for ${_}x${V} x${T} mips, have ${h}`);const w=[];let B=ie;for(const M of c)w.push(new Uint8Array(i.slice(B,B+M))),B+=M;const D=w[0];return{width:_,height:y,channels:x,kernel_type:P,num_rects:A,uv_extent:z,sb_number:L,format:Y,sh_bias:R,res_bias:q,compact_mult:Z,layer_h:V,atlas_scale:ee,atlas_offset:K,n_layers:te,n_cols:Re,layer_cuts:xe,column_cuts:be,slice_width:me,rects_expanded:Q,atlas_bytes:D,mip_bytes:w,probe_mode:pe&2?3:pe&1?2:1}}const fe=A*4*4;if(ie+fe>i.byteLength)throw new Error(`NAT2 truncated at rects: need ${fe} more bytes from offset ${ie}, have ${i.byteLength-ie}`);const oe=new Float32Array(i.slice(ie,ie+fe));ie+=fe;const Pe=new Float32Array(A*5);for(let Se=0;Se<A;Se++){const I=oe[Se*4+0],Q=oe[Se*4+1],T=oe[Se*4+2],c=oe[Se*4+3];let p=0;for(let M=1;M<=te&&xe[M]<=Q;M++)p=M;let h=0;for(let M=1;M<=Re&&be[M]<=I;M++)h=M;const w=Q-xe[p],B=I-be[h],D=h*te+p;Pe[Se*5+0]=B,Pe[Se*5+1]=w,Pe[Se*5+2]=T,Pe[Se*5+3]=c,Pe[Se*5+4]=D}let Ie,Ae;const De=Re,ve=_/4*16;if(Y===Ds||Y===tr||O){if(ie+24>i.byteLength)throw new Error("NAT2 truncated at typeD sub-header");const Se=Y===Ds||O?"BCCB":"ACCB",I=s.decode(new Uint8Array(i,ie,4));if(I!==Se)throw new Error(`NAT2 typeD bad sub-magic: expected '${Se}' got '${I}'`);const Q=u.getUint32(ie+4,!0),T=u.getUint32(ie+8,!0),c=u.getUint32(ie+12,!0),p=u.getUint32(ie+16,!0),h=u.getUint32(ie+20,!0);if(Q!==1)throw new Error(`NAT2 BCCB unsupported version ${Q}`);if(c!==y/4||p!==_/4||h!==c*p)throw new Error(`NAT2 BCCB block grid mismatch: header ${_}×${y}, sub-header ${p}×${c} (${h} blocks)`);ie+=24;const w=T*16;if(ie+w>i.byteLength)throw new Error(`NAT2 BCCB truncated at codebook (need ${w}, have ${i.byteLength-ie})`);const B=new Uint8Array(i,ie,w);ie+=w;const D=h*2;if(ie+D>i.byteLength)throw new Error(`NAT2 BCCB truncated at indices (need ${D}, have ${i.byteLength-ie})`);const M=new Uint16Array(i.slice(ie,ie+D));ie+=D;const o=new Uint8Array(h*16);for(let v=0;v<h;v++){const f=M[v]*16;o.set(B.subarray(f,f+16),v*16)}if(Ie=o,Te>1){Ae=[o];for(let v=1;v<Te;v++){if(ie+24>i.byteLength)throw new Error(`NAT2 truncated at mip ${v} sub-header`);const f=s.decode(new Uint8Array(i,ie,4));if(f!==Se)throw new Error(`NAT2 mip ${v}: bad sub-magic '${f}'`);const b=u.getUint32(ie+8,!0),d=u.getUint32(ie+16,!0),g=u.getUint32(ie+20,!0);if(d!==v)throw new Error(`NAT2 mip section order: expected level ${v}, got ${d}`);ie+=24;let C=0;for(let j=0;j<De;j++)for(let se=0;se<te;se++){const ae=ri(v,be[j+1]-be[j],xe[se+1]-xe[se],me,V);C+=(ae.cw>>2)*(ae.ch>>2)}if(C!==g)throw new Error(`NAT2 mip ${v}: ${g} blocks, loader expects ${C}`);if(ie+b*16+g*2>i.byteLength)throw new Error(`NAT2 truncated in mip ${v}`);const E=new Uint8Array(i,ie,b*16);ie+=b*16;const $=new Uint16Array(i.slice(ie,ie+g*2));ie+=g*2;const U=new Uint8Array(g*16);for(let j=0;j<g;j++){const se=$[j]*16;U.set(E.subarray(se,se+16),j*16)}Ae.push(U)}}}else{let Se=0;for(let I=0;I<te;I++){const Q=xe[I+1]-xe[I];if(Q%4!==0)throw new Error(`NAT2 BC7 layer ${I} rows ${Q} not 4-aligned`);Se+=Q/4*ve}if(ie+Se>i.byteLength)throw new Error(`NAT2 truncated at atlas payload: need ${Se} more bytes from offset ${ie}, have ${i.byteLength-ie}`);if(Ie=new Uint8Array(i.slice(ie,ie+Se)),ie+=Se,Te>1&&!de){Ae=[Ie];for(let I=1;I<Te;I++){let Q=0;for(let T=0;T<Re;T++)for(let c=0;c<te;c++){const p=ri(I,be[T+1]-be[T],xe[c+1]-xe[c],me,V);Q+=p.cw/4*(p.ch/4)*16}if(ie+Q>i.byteLength)throw new Error(`NAT2 raw mip ${I}: truncated (need ${Q} B)`);Ae.push(new Uint8Array(i.slice(ie,ie+Q))),ie+=Q}}}return{width:_,height:y,channels:x,kernel_type:P,num_rects:A,uv_extent:z,sb_number:L,format:Y,sh_bias:R,res_bias:q,compact_mult:Z,layer_h:V,atlas_scale:ee,atlas_offset:K,n_layers:te,n_cols:Re,layer_cuts:xe,column_cuts:be,slice_width:me,rects_expanded:Pe,atlas_bytes:Ie,...Ae?{mip_bytes:Ae}:{}}}function ri(i,s,a,u,l){const _=x=>x+3>>2<<2,y=1<<i;return{cw:Math.min(_(Math.max(1,u>>i)),_(Math.ceil(s/y))),ch:Math.min(_(Math.max(1,l>>i)),_(Math.ceil(a/y)))}}const Su=32;async function ii(i,s,a){if(s.format===5||s.format===6)throw new Error(`paired-RVQ format=${s.format} is retired; re-bake with typeD (--bc7-codebook)`);let u,l,_,y,x,P;if(s.format===2||s.format===Ds||s.format===Ls){if(!i.features.has("texture-compression-bc"))return bt(`⚠️  bundle is BC7 (format=${s.format}) but texture-compression-bc not supported — atlas disabled`),null;P=s.format===Ls?"BC7 atlas (proberes: shared probe texture)":s.format===Ds?"BC7 atlas (typeD: codebook gather)":"BC7 atlas",{texture:u,view:l,sampler:_,samplerAniso:y,samplerTri:x}=await ai(i,s,"bc7-rgba-unorm",P)}else if(s.format===3||s.format===tr||s.format===Gs){if(!i.features.has("texture-compression-astc"))return bt(`⚠️  bundle is ASTC 4x4 (format=${s.format}) but texture-compression-astc not supported — atlas disabled`),null;P=s.format===Gs?"ASTC 4x4 atlas (proberes: shared probe texture)":s.format===tr?"ASTC 4x4 atlas (typeD-ASTC: codebook gather)":"ASTC 4x4 atlas",{texture:u,view:l,sampler:_,samplerAniso:y,samplerTri:x}=await ai(i,s,"astc-4x4-unorm",P)}else return bt(`⚠️  unsupported atlas format ${s.format} — atlas disabled`),null;const{rects_expanded:A}=s,z=i.createBuffer({label:"atlas rects (5-stride)",size:Wn(A.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(z,0,A);const L=i.createBuffer({label:"tex_params",size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return er(i,L,s,a),{texture:u,view:l,sampler:_,samplerAniso:y,samplerTri:x,rectsBuffer:z,texParamsBuffer:L,meta:s}}async function Eu(i,s,a){if(s.format!==11&&s.format!==12)return bt(`⚠️  ?slope= file has format ${s.format}, expected 11 (BC5) or 12 (P)`),null;if(!i.features.has("texture-compression-bc"))return bt("⚠️  slope sidecar needs texture-compression-bc — disabled"),null;if(a&&(a.width!==s.width||a.layer_h!==s.layer_h||a.n_layers!==s.n_layers||a.n_cols!==s.n_cols||a.num_rects!==s.num_rects))return bt(`⚠️  slope sidecar layout ${s.width}x${s.layer_h}x${s.n_layers} does not match the atlas ${a.width}x${a.layer_h}x${a.n_layers} — disabled`),null;const u=s.atlas_bytes.byteLength/1048576,{view:l}=await ai(i,s,s.format===11?"bc5-rg-unorm":"bc7-rgba-unorm",s.format===11?"slope BC5":"slope P (BC7 alpha)");return{view:l,kind:s.format===11?"bc5":"p",scaleU:s.atlas_scale,offU:s.atlas_offset,scaleV:s.sh_bias,offV:s.res_bias,mb:u}}const za=48*1048576;async function ai(i,s,a,u){let l=0;const _=async()=>{i.queue.submit([]),await i.queue.onSubmittedWorkDone(),l=0},y=async ie=>{l+=ie,l>=za&&await _()},{width:x,layer_h:P,n_layers:A,n_cols:z,layer_cuts:L,column_cuts:N,slice_width:O,atlas_bytes:Y}=s,q=x/4*16,Z=i.limits.maxTextureDimension2D;if(P>Z||O>Z)throw new Error(`⚠️  atlas slice dims ${O}x${P} exceed maxTextureDimension2D=${Z}. Re-bake with smaller LAYER_H or pack with column-aware atlas widths.`);const V=z*A;if(V>i.limits.maxTextureArrayLayers)throw new Error(`⚠️  ${z} cols × ${A} layers = ${V} slices > maxTextureArrayLayers=${i.limits.maxTextureArrayLayers}.`);const ee=s.mip_bytes??[Y],K=jn?ee.slice(0,1):ee,te=K.length;jn&&ee.length>1&&console.log(`[atlas] lowmem: skipping ${ee.length-1} mip level(s)`);const ue=i.createTexture({label:u,size:{width:O,height:P,depthOrArrayLayers:V},mipLevelCount:te,sampleCount:1,dimension:"2d",format:a,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let ie=0;ie<z;ie++){const F=N[ie]/4,xe=(N[ie+1]-N[ie])/4;for(let be=0;be<A;be++){const me=L[be]/4,fe=(L[be+1]-L[be])/4,oe=ie*A+be,Pe=me*q+F*16;i.queue.writeTexture({texture:ue,mipLevel:0,origin:{x:0,y:0,z:oe},aspect:"all"},Y,{offset:Pe,bytesPerRow:q,rowsPerImage:fe},{width:xe*4,height:fe*4,depthOrArrayLayers:1}),await y(xe*fe*16)}}const de=s.format===Ls||s.format===Gs;for(let ie=1;ie<te&&!de;ie++){let F=0;for(let xe=0;xe<z;xe++)for(let be=0;be<A;be++){const{cw:me,ch:fe}=ri(ie,N[xe+1]-N[xe],L[be+1]-L[be],O,P);i.queue.writeTexture({texture:ue,mipLevel:ie,origin:{x:0,y:0,z:xe*A+be},aspect:"all"},K[ie],{offset:F,bytesPerRow:(me>>2)*16,rowsPerImage:fe>>2},{width:me,height:fe,depthOrArrayLayers:1}),F+=(me>>2)*(fe>>2)*16,await y((me>>2)*(fe>>2)*16)}}for(let ie=1;ie<te&&de;ie++){const F=Math.max(1,O>>ie),xe=Math.max(1,P>>ie);i.queue.writeTexture({texture:ue,mipLevel:ie,origin:{x:0,y:0,z:0},aspect:"all"},K[ie],{offset:0,bytesPerRow:Math.max(1,F>>2)*16,rowsPerImage:Math.max(1,xe>>2)},{width:F,height:xe,depthOrArrayLayers:1}),await y(K[ie].byteLength)}te>1&&console.log(`[atlas] ${te} mip levels uploaded (${de?"trilinear":"per-surfel integer level"})`),await _();const pe=ee.reduce((ie,F)=>ie+F.byteLength,0)/1048576;s.atlas_bytes=new Uint8Array(0),s.mip_bytes&&(s.mip_bytes=ee.map(()=>new Uint8Array(0))),console.log(`[atlas] ${u}: ${pe.toFixed(0)} MB uploaded in ≤${za/1048576} MB chunks; CPU copy released`);const Ee=ue.createView({label:`${u} view`,dimension:"2d-array"}),Te=i.createSampler({label:`${u} sampler`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:te>1&&de?"linear":"nearest"}),Re=i.createSampler({label:`${u} sampler (aniso 16x)`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",maxAnisotropy:16}),Ge=i.createSampler({label:`${u} sampler (trilinear)`,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",maxAnisotropy:1});return{texture:ue,view:Ee,sampler:Te,samplerAniso:Re,samplerTri:Ge}}function er(i,s,a,u,l=1){var A;const _=new ArrayBuffer(32),y=new Uint32Array(_),x=new Float32Array(_);y[0]=u?1:0,x[1]=a.atlas_scale,x[2]=a.atlas_offset,x[3]=a.res_bias,y[4]=a.probe_mode?a.probe_mode|0:0,y[5]=a.width|0;const P=(((A=a.mip_bytes)==null?void 0:A.length)??1)>1;y[6]=l===2?2:l===3&&P?3:P&&l!==0?1:0,x[7]=a.uv_extent,i.queue.writeBuffer(s,0,_)}async function nr(i,s){bt(`loading ply file from File... : ${i.name}`),fs("downloading PLY...");const a=await i.arrayBuffer();try{return await co(a,s)}finally{Qt()}}async function ku(i,s){bt(`loading ply file from URL... : ${i}`),fs("downloading PLY...");try{oo();const a=new URL(i,self.location.href).href;return await co({url:a},s)}finally{Qt()}}function lo(i){return new Promise((s,a)=>{const u=new Worker(new URL(""+new URL("ply-worker-70df72a6.js",import.meta.url).href,self.location),{type:"module"});u.onmessage=l=>{const _=l.data;if((_==null?void 0:_.type)==="error"){fu(`PLY worker error: ${_.message??"unknown error"}`),u.terminate(),a(new Error(_.message??"Worker error"));return}else if((_==null?void 0:_.type)==="download_progress"){const y=_.totalBytes,x=_.loadedBytes/(1024*1024),P=y?y/(1024*1024):void 0,A=(_.speedBps??0)/(1024*1024),z=y?Math.min(99,Math.floor(_.loadedBytes/y*100)):void 0,L=P?`total ${P.toFixed(1)} MB`:"total -- MB",N=P&&z!==void 0?`${x.toFixed(1)} MB downloaded (${z}%)`:`${x.toFixed(1)} MB downloaded`,O=`${A.toFixed(2)} MB/s`;At(`downloading PLY ...
${L}, ${N}
${O}`);return}else if((_==null?void 0:_.type)==="fetched"){bt(`💾 Fetched (${_.byteLength} bytes)`),Ga("Download"),At("parsing PLY..."),oo();return}else if((_==null?void 0:_.type)==="parse_progress"){const y=_.total??0,x=_.read??0,P=y>0?Math.floor(x/y*100):0;At(`parsing PLY ...
${x}/${y} surfels (${P}%)`);return}else(_==null?void 0:_.type)==="done"&&(u.terminate(),Ga("Parse"),s(_))},u.onerror=l=>{u.terminate(),a(l)},i instanceof ArrayBuffer?(At("parsing PLY..."),u.postMessage({type:"start",plyBuffer:i},[i])):u.postMessage({type:"start_url",url:i.url})})}async function Ia(i){var a,u,l,_,y,x,P,A,z,L,N,O;const s=await lo(await i.arrayBuffer());return{num_points:s.num_points,K:s.K,feature_mode:s.feature_mode??0,sh_bias:s.sh_bias,kernel_type:s.kernel_type,surfel_data:new Float32Array(s.surfelBuffer),sv_params:new Float32Array(s.svParamsBuffer),bbox:s.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:s.centroid??[((((u=(a=s.bbox)==null?void 0:a.min)==null?void 0:u[0])??-1)+(((_=(l=s.bbox)==null?void 0:l.max)==null?void 0:_[0])??1))/2,((((x=(y=s.bbox)==null?void 0:y.min)==null?void 0:x[1])??-1)+(((A=(P=s.bbox)==null?void 0:P.max)==null?void 0:A[1])??1))/2,((((L=(z=s.bbox)==null?void 0:z.min)==null?void 0:L[2])??-1)+(((O=(N=s.bbox)==null?void 0:N.max)==null?void 0:O[2])??1))/2]}}async function co(i,s){var Y,R,q,Z,V,ee,K,te,ue,de,pe,Ee;const a=await lo(i),u=a.num_points,l=a.K,_=a.feature_mode??0,y=a.sh_bias,x=a.kernel_type,P=a.surfelBuffer,A=a.svParamsBuffer,z=_===2?"NASG":_===1?"SB":"SV";bt(`🪐 Total surfels: ${u}, mode=${z}, K=${l}, sh_bias=${y}, kernel_type=${x}`);const L=s.createBuffer({label:"surfel input buffer",size:Wn(u*Su),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});s.queue.writeBuffer(L,0,P);const N=A.byteLength>0?A.byteLength:16,O=s.createBuffer({label:`color_params buffer (${z})`,size:Wn(N),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});return A.byteLength>0&&s.queue.writeBuffer(O,0,A),{num_points:u,K:l,feature_mode:_,sh_bias:y,kernel_type:x,surfel_buffer:L,surfel_data:new Float32Array(P),sv_params_buffer:O,bbox:a.bbox??{min:[-1,-1,-1],max:[1,1,1]},centroid:a.centroid??[((((R=(Y=a.bbox)==null?void 0:Y.min)==null?void 0:R[0])??-1)+(((Z=(q=a.bbox)==null?void 0:q.max)==null?void 0:Z[0])??1))/2,((((ee=(V=a.bbox)==null?void 0:V.min)==null?void 0:ee[1])??-1)+(((te=(K=a.bbox)==null?void 0:K.max)==null?void 0:te[1])??1))/2,((((de=(ue=a.bbox)==null?void 0:ue.min)==null?void 0:de[2])??-1)+(((Ee=(pe=a.bbox)==null?void 0:pe.max)==null?void 0:Ee[2])??1))/2]}}const sr="halloumi-bundles-v1",Fa=8,Oa="x-halloumi-cached-at",uo="x-halloumi-etag",_r="x-halloumi-length";function Tu(i){try{const s=new URL(i,window.location.href);return s.hash="",s.toString()}catch{return i}}function po(){try{const i=new URLSearchParams(window.location.search);return{nocache:i.get("nocache")==="1",clearcache:i.get("clearcache")==="1",keepcache:i.get("keepcache")==="1"}}catch{return{nocache:!1,clearcache:!1,keepcache:!1}}}const Va="halloumi-bundles-session";function Cu(){try{return sessionStorage.getItem(Va)?!1:(sessionStorage.setItem(Va,String(Date.now())),!0)}catch{return!1}}async function mi(){if(typeof caches>"u")return null;try{return await caches.open(sr)}catch{return null}}let $a=!1;function Bu(){var i;$a||!((i=navigator.storage)!=null&&i.persist)||($a=!0,navigator.storage.persist().then(s=>console.log(`[cache] persistent storage ${s?"granted":"not granted"}`)).catch(()=>{}))}let Js=null;function Au(){return Js||(Js=(async()=>{const i=po();if(i.clearcache)try{await caches.delete(sr),console.log("[cache] cleared (?clearcache=1)")}catch{}else if(!i.keepcache&&Cu())try{const s=await mi(),a=s?(await s.keys()).length:0;a>0&&(await caches.delete(sr),console.log(`[cache] new tab: dropped ${a} file(s) left by a closed tab (?keepcache=1 to keep)`))}catch{}rr()})(),Js)}async function Na(){const i=await mi();if(!i)return{files:0,bytes:0};let s=0;const a=await i.keys();for(const u of a){const l=await i.match(u);s+=parseInt((l==null?void 0:l.headers.get(_r))??"0",10)||0}return{files:a.length,bytes:s}}async function Mu(){try{await caches.delete(sr)}catch{}rr()}const oi=new Set;function rr(){for(const i of oi)try{i()}catch{}}function Ru(i){return oi.add(i),()=>oi.delete(i)}function ho(i){const s=i.addButton({title:"🗑 Clear cache",hidden:!0});let a=!1;const u=_=>_===1?"":"s",l=async()=>{const{files:_,bytes:y}=await Na();s.hidden=_===0,_>0&&(s.title=`🗑 Clear cache (${_} file${u(_)}, ${qa(y)})`)};s.on("click",async()=>{if(a)return;const{files:_,bytes:y}=await Na();if(_===0){l();return}const x=`Delete ${_} cached bundle file${u(_)} (${qa(y)}) from this device?

The current scene stays loaded; the next page load will download it again.`;if(confirm(x)){a=!0,s.title="🗑 Clearing…";try{await Mu()}finally{a=!1}await l(),console.log("[cache] cleared by user")}}),Ru(()=>void l()),l()}function qa(i){return i>=1024*1048576?`${(i/(1024*1048576)).toFixed(2)} GB`:`${(i/1048576).toFixed(0)} MB`}function Du(i){return new Promise(s=>setTimeout(s,i))}function Uu(){return typeof document>"u"||document.visibilityState!=="hidden"?Promise.resolve():new Promise(i=>{const s=()=>{document.visibilityState!=="hidden"&&(document.removeEventListener("visibilitychange",s),i())};document.addEventListener("visibilitychange",s)})}async function Lu(i,s){var N;const a=[];let u=0,l,_=null,y=null,x=performance.now(),P=0,A=null;for(let O=0;O<Fa;O++){O>0&&(document.visibilityState==="hidden"?await Uu():await Du(Math.min(8e3,1e3*2**(O-1))));try{const Y={};u>0&&(Y.Range=`bytes=${u}-`,_?Y["If-Range"]=_:y&&(Y["If-Range"]=y));const R=await fetch(i,{headers:Y,cache:"no-store"});if(R.status===416&&l!==void 0&&u>=l)break;if(!R.ok)throw new Error(`fetch failed: ${R.status} ${R.statusText}`);if(u>0&&R.status!==206&&(a.length=0,u=0,P=0),u===0){_=R.headers.get("etag"),y=R.headers.get("last-modified");const Z=R.headers.get("content-length");l=Z&&parseInt(Z,10)||void 0}else{const Z=R.headers.get("content-range"),V=Z&&/\/(\d+)$/.exec(Z);V&&(l=parseInt(V[1],10))}const q=(N=R.body)==null?void 0:N.getReader();if(q)for(;;){const{done:Z,value:V}=await q.read();if(Z)break;a.push(V),u+=V.byteLength;const ee=performance.now();ee-x>=150&&s&&(s(u,l,(u-P)/((ee-x)/1e3),"network"),x=ee,P=u)}else{const Z=await R.arrayBuffer();a.push(new Uint8Array(Z)),u+=Z.byteLength}if(l!==void 0&&u<l)throw new Error(`short read: ${u} of ${l} bytes`);A=null;break}catch(Y){A=Y,console.warn(`[cache] download attempt ${O+1}/${Fa} failed at ${(u/2**20).toFixed(1)} MB:`,Y),s&&s(u,l,0,"network")}}if(A)throw A;const z=new Uint8Array(u);let L=0;for(const O of a)z.set(O,L),L+=O.byteLength;return s&&s(u,l??u,0,"network"),{buf:z.buffer,etag:_,lastModified:y}}async function Gu(i,s,a){let u=!0;const l=()=>new Response(u?(u=!1,a.buf):a.buf.slice(0),{headers:{"content-type":"application/octet-stream","content-length":String(a.buf.byteLength),[_r]:String(a.buf.byteLength),[Oa]:String(Date.now()),[uo]:a.etag??"",...a.lastModified?{"last-modified":a.lastModified}:{}}});for(let _=0;_<4;_++)try{return await i.put(s,l()),rr(),!0}catch(y){const x=await i.keys();if(x.length===0)return console.warn("[cache] not cached:",y),!1;const P=[];for(const z of x){const L=await i.match(z);P.push({k:z,t:parseInt((L==null?void 0:L.headers.get(Oa))??"0",10)||0})}P.sort((z,L)=>z.t-L.t);const A=P[0].k;await i.delete(A),rr(),console.warn(`[cache] quota: evicted ${A.url}`)}return!1}function zu(i,s,a,u){const l=new AbortController,_=setTimeout(()=>l.abort(),15e3);fetch(s,{headers:{Range:"bytes=0-0"},cache:"no-store",signal:l.signal}).then(async y=>{var Y,R;if(!y.ok)return;(Y=y.body)==null||Y.cancel().catch(()=>{});const x=y.headers.get("etag"),P=y.headers.get("content-range"),A=y.status===206?((R=/\/(\d+)$/.exec(P??""))==null?void 0:R[1])??null:y.headers.get("content-length"),z=a.headers.get(uo)||null,L=a.headers.get(_r),N=A!==null&&L!==null&&parseInt(A,10)!==parseInt(L,10);(N||!!(x&&z)&&x!==z)&&(await i.delete(s),console.info(`[cache] ${s} changed on the server (${N?"size":"etag"}); evicted — reload to fetch the new version`),u==null||u())}).catch(()=>{}).finally(()=>clearTimeout(_))}async function li(i,s,a={}){await Au();const{nocache:u}=po(),l=Tu(i),_=u?null:await mi();if(_)try{const x=await _.match(l);if(x){const P=parseInt(x.headers.get(_r)??x.headers.get("content-length")??"0",10)||void 0;s&&s(0,P,0,"cache");const A=await x.arrayBuffer();return s&&s(A.byteLength,A.byteLength,0,"cache"),console.log(`[cache] hit ${(A.byteLength/2**20).toFixed(1)} MB ${l}`),zu(_,l,x,a.onStale),A}}catch(x){console.warn("[cache] lookup failed:",x)}const y=await Lu(i,s);return _&&(Bu(),Gu(_,l,y).then(x=>{x&&console.log(`[cache] stored ${(y.buf.byteLength/2**20).toFixed(1)} MB ${l}`)}).catch(x=>console.warn("[cache] store failed:",x))),y.buf}const ir="BITYMI01",Iu=0,Fu=1,Ou=2,Vu=3,$u=4,Nu=5;function bi(i){const s=new Uint8Array(i),a=new TextDecoder().decode(s.subarray(0,8));if(a!==ir)throw new Error(`Not a BITYMI bundle (bad magic '${a}')`);const u=new DataView(i),l=u.getUint32(8,!0),_=12,y=20;let x=null,P=null,A=null;for(let z=0;z<l;z++){const L=_+z*y,N=u.getUint32(L+0,!0),O=Number(u.getBigUint64(L+4,!0)),Y=Number(u.getBigUint64(L+12,!0)),R=s.slice(O,O+Y).buffer;N===Iu||N===Fu||N===Nu?x=R:N===Ou?P=R:(N===Vu||N===$u)&&(A=R)}if(x===null)throw new Error("BITYMI bundle has no point cloud chunk");return{pcBuffer:x,camerasBuffer:P,atlasBuffer:A}}async function hs(i,s){const a=await li(i,s);return a.byteLength>=8&&new TextDecoder().decode(new Uint8Array(a,0,8))===ir?{bundle:bi(a),rawPly:null}:{bundle:null,rawPly:a}}var qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ci={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(i,s){(function(a,u){u(s)})(qu,function(a){class u{constructor(e){const[t,r]=e.split("-"),m=t.split(".");this.major=parseInt(m[0],10),this.minor=parseInt(m[1],10),this.patch=parseInt(m[2],10),this.prerelease=r??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class l{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class _{constructor(e){this.target=e}}class y extends _{constructor(e,t,r,m){super(e),this.value=t,this.presetKey=r,this.last=m??!0}}class x extends _{constructor(e,t,r){super(e),this.value=t,this.presetKey=r}}class P extends _{constructor(e,t){super(e),this.expanded=t}}class A extends _{constructor(e,t){super(e),this.index=t}}function z(n){return n}function L(n){return n==null}function N(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function O(n,e){let t=n;do{const r=Object.getOwnPropertyDescriptor(t,e);if(r&&(r.set!==void 0||r.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const Y={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class R{static alreadyDisposed(){return new R({type:"alreadydisposed"})}static notBindable(){return new R({type:"notbindable"})}static propertyNotFound(e){return new R({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new R({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=Y[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class q{constructor(e,t,r){this.obj_=e,this.key_=t,this.presetKey_=r??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const r=this.read();if(!q.isBindable(r))throw R.notBindable();if(!(e in r))throw R.propertyNotFound(e);r[e]=t}}class Z extends l{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const r=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{r(new _(this))}),this}}class V{constructor(){this.observers_={}}on(e,t){let r=this.observers_[e];return r||(r=this.observers_[e]=[]),r.push({handler:t}),this}off(e,t){const r=this.observers_[e];return r&&(this.observers_[e]=r.filter(m=>m.handler!==t)),this}emit(e,t){const r=this.observers_[e];r&&r.forEach(m=>{m.handler(t)})}}const ee="tp";function K(n){return(t,r)=>[ee,"-",n,"v",t?`_${t}`:"",r?`-${r}`:""].join("")}function te(n,e){return t=>e(n(t))}function ue(n){return n.rawValue}function de(n,e){n.emitter.on("change",te(ue,e)),e(n.rawValue)}function pe(n,e,t){de(n.value(e),t)}function Ee(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function Te(n,e){return t=>{Ee(n,e,t)}}function Re(n,e){de(n,t=>{e.textContent=t??""})}const Ge=K("btn");class ie{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ge()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("button");r.classList.add(Ge("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const m=e.createElement("div");m.classList.add(Ge("t")),Re(t.props.value("title"),m),this.buttonElement.appendChild(m)}}class F{constructor(e,t){this.emitter=new V,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ie(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class xe{constructor(e,t){var r;this.constraint_=t==null?void 0:t.constraint,this.equals_=(r=t==null?void 0:t.equals)!==null&&r!==void 0?r:(m,G)=>m===G,this.emitter=new V,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},m=this.constraint_?this.constraint_.constrain(e):e,G=this.rawValue_;this.equals_(G,m)&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=m,this.emitter.emit("change",{options:r,previousRawValue:G,rawValue:m,sender:this}))}}class be{constructor(e){this.emitter=new V,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const r=t??{forceEmit:!1,last:!0},m=this.value_;m===e&&!r.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:r,previousRawValue:m,rawValue:this.value_,sender:this}))}}function me(n,e){const t=e==null?void 0:e.constraint,r=e==null?void 0:e.equals;return!t&&!r?new be(n):new xe(n,e)}class fe{constructor(e){this.emitter=new V,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((r,m)=>Object.assign(r,{[m]:me(e[m])}),{})}static fromObject(e){const t=this.createCore(e);return new fe(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function oe(n,e){const r=Object.keys(e).reduce((m,G)=>{if(m===void 0)return;const H=e[G],we=H(n[G]);return we.succeeded?Object.assign(Object.assign({},m),{[G]:we.value}):void 0},{});return r}function Pe(n,e){return n.reduce((t,r)=>{if(t===void 0)return;const m=e(r);if(!(!m.succeeded||m.value===void 0))return[...t,m.value]},[])}function Ie(n){return n===null?!1:typeof n=="object"}function Ae(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const r=n(t);return r!==void 0?{succeeded:!0,value:r}:{succeeded:!1,value:void 0}}}function De(n){return{custom:e=>Ae(e)(n),boolean:Ae(e=>typeof e=="boolean"?e:void 0)(n),number:Ae(e=>typeof e=="number"?e:void 0)(n),string:Ae(e=>typeof e=="string"?e:void 0)(n),function:Ae(e=>typeof e=="function"?e:void 0)(n),constant:e=>Ae(t=>t===e?e:void 0)(n),raw:Ae(e=>e)(n),object:e=>Ae(t=>{if(Ie(t))return oe(t,e)})(n),array:e=>Ae(t=>{if(Array.isArray(t))return Pe(t,e)})(n)}}const ye={optional:De(!0),required:De(!1)};function ve(n,e){const t=ye.required.object(e)(n);return t.succeeded?t.value:void 0}function Se(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function I(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class Q{constructor(e){this.value_=e}static create(e){return[new Q(e),(t,r)=>{e.setRawValue(t,r)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const T=K("");function c(n,e){return Te(n,T(void 0,e))}class p extends fe{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Q.create(me(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,r,m;const G=e??{};return new p(fe.createCore({disabled:(t=G.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(r=G.hidden)!==null&&r!==void 0?r:!1,parent:(m=G.parent)!==null&&m!==void 0?m:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){de(this.globalDisabled_,c(e,"disabled")),pe(this,"hidden",c(e,"hidden"))}bindDisabled(e){de(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){de(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const r=e.previousRawValue;r==null||r.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function h(){return["veryfirst","first","last","verylast"]}const w=K(""),B={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class D{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{h().forEach(r=>{t.classList.remove(w(void 0,B[r]))}),this.blade.get("positions").forEach(r=>{t.classList.add(w(void 0,B[r]))})}),this.viewProps.handleDispose(()=>{I(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){Se({key:"parent",target:p.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const M="http://www.w3.org/2000/svg";function o(n){n.offsetHeight}function v(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function f(n){return n.ontouchstart!==void 0}function b(){return globalThis}function d(){return b().document}function g(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const C={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function E(n,e){const t=n.createElementNS(M,"svg");return t.innerHTML=C[e],t}function $(n,e,t){n.insertBefore(e,n.children[t])}function U(n){n.parentElement&&n.parentElement.removeChild(n)}function j(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function se(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ae(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const ne=K("lbl");function ge(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(m=>n.createTextNode(m)).forEach((m,G)=>{G>0&&t.appendChild(n.createElement("br")),t.appendChild(m)}),t}class Me{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ne()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(ne("l")),pe(t.props,"label",G=>{L(G)?this.element.classList.add(ne(void 0,"nol")):(this.element.classList.remove(ne(void 0,"nol")),se(r),r.appendChild(ge(e,G)))}),this.element.appendChild(r),this.labelElement=r;const m=e.createElement("div");m.classList.add(ne("v")),this.element.appendChild(m),this.valueElement=m}}class Be extends D{constructor(e,t){const r=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new Me(e,{props:t.props,viewProps:r}),viewProps:r})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ke={id:"button",type:"blade",accept(n){const e=ye,t=ve(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new Be(n.document,{blade:n.blade,props:fe.fromObject({label:n.params.label}),valueController:new F(n.document,{props:fe.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof Be)||!(n.controller.valueController instanceof F)?null:new Z(n.controller)}};class $e extends D{constructor(e){super(e),this.value=e.value}}function Ve(){return new fe({positions:me([],{equals:N})})}class rt extends fe{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},r=fe.createCore(t);return new rt(r)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!L(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const r=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};pe(this,"expanded",r),pe(this,"temporaryExpanded",r)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function ut(n,e){let t=0;return v(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),o(e),t=e.clientHeight,n.set("temporaryExpanded",null),o(e)}),t}function Ne(n,e){e.style.height=n.styleHeight}function it(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),L(n.get("expandedHeight"))){const t=ut(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),o(e)}),n.emitter.on("change",()=>{Ne(n,e)}),Ne(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Qe extends l{constructor(e,t){super(e),this.rackApi_=t}}function et(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function tt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function Xe(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function pt(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class ht{constructor(e){this.emitter=new V,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw R.shouldNeverHappen();const r=t!==void 0?t:this.items_.length;this.items_.splice(r,0,e),this.cache_.add(e);const m=this.extract_(e);m&&(m.emitter.on("add",this.onSubListAdd_),m.emitter.on("remove",this.onSubListRemove_),m.allItems().forEach(G=>{this.cache_.add(G)})),this.emitter.emit("add",{index:r,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const r=this.extract_(e);r&&(r.emitter.off("add",this.onSubListAdd_),r.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class nt extends l{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new V,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new y(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class at extends Be{constructor(e,t){super(e,t),this.binding=t.binding}}class ct extends l{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new V,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new x(this,t,this.controller_.binding.target.presetKey)})}}class dt extends Be{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Ze(n){return n instanceof vt?n.apiSet_:n instanceof Qe?n.rackApi_.apiSet_:null}function je(n,e){const t=n.find(r=>r.controller_===e);if(!t)throw R.shouldNeverHappen();return t}function Tt(n,e,t){if(!q.isBindable(n))throw R.notBindable();return new q(n,e,t)}class vt extends l{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new V,this.apiSet_=new ht(Ze),this.pool_=t;const r=this.controller_.rack;r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),r.emitter.on("inputchange",this.onRackInputChange_),r.emitter.on("monitorupdate",this.onRackMonitorUpdate_),r.children.forEach(m=>{this.setUpApi_(m)})}get children(){return this.controller_.rack.children.map(e=>je(this.apiSet_,e))}addInput(e,t,r){const m=r??{},G=this.controller_.view.element.ownerDocument,H=this.pool_.createInput(G,Tt(e,t,m.presetKey),m),we=new nt(H);return this.add(we,m.index)}addMonitor(e,t,r){const m=r??{},G=this.controller_.view.element.ownerDocument,H=this.pool_.createMonitor(G,Tt(e,t),m),we=new ct(H);return this.add(we,m.index)}addFolder(e){return tt(this,e)}addButton(e){return et(this,e)}addSeparator(e){return Xe(this,e)}addTab(e){return pt(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const r=this.apiSet_.find(m=>m.controller_===e.controller_);return r&&this.apiSet_.remove(r),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,r=this.pool_.createBlade(t,e),m=this.pool_.createBladeApi(r);return this.add(m,e.index)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}setUpApi_(e){this.apiSet_.find(r=>r.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=je(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof at){const r=je(this.apiSet_,t),m=t.binding;this.emitter_.emit("change",{event:new y(r,m.target.read(),m.target.presetKey,e.options.last)})}else if(t instanceof $e){const r=je(this.apiSet_,t);this.emitter_.emit("change",{event:new y(r,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof dt))throw R.shouldNeverHappen();const t=je(this.apiSet_,e.bladeController),r=e.bladeController.binding;this.emitter_.emit("update",{event:new x(t,r.target.read(),r.target.presetKey)})}}class Rt extends Qe{constructor(e,t){super(e,new vt(e.rackController,t)),this.emitter_=new V,this.controller_.foldable.value("expanded").emitter.on("change",r=>{this.emitter_.emit("fold",{event:new P(this,r.sender.rawValue)})}),this.rackApi_.on("change",r=>{this.emitter_.emit("change",{event:r})}),this.rackApi_.on("update",r=>{this.emitter_.emit("update",{event:r})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,r){return this.rackApi_.addInput(e,t,r)}addMonitor(e,t,r){return this.rackApi_.addMonitor(e,t,r)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}}class xt extends D{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class St{constructor(e,t){const r=K(t.viewName);this.element=e.createElement("div"),this.element.classList.add(r()),t.viewProps.bindClassModifiers(this.element)}}function $t(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof at&&r.binding===e)return r}return null}function Ft(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof dt&&r.binding===e)return r}return null}function jt(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(r instanceof $e&&r.value===e)return r}return null}function Dt(n){return n instanceof Je?n.rack:n instanceof xt?n.rackController.rack:null}function tn(n){const e=Dt(n);return e?e.bcSet_:null}class Ut{constructor(e){var t,r;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new V,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(r=this.blade_)===null||r===void 0||r.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new ht(tn),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var r;(r=e.parent)===null||r===void 0||r.remove(e),O(e,"parent")?e.parent=this:(e.parent_=this,Se({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){O(e,"parent")?e.parent=null:(e.parent_=null,Se({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const r=e.item;if(r.viewProps.emitter.on("change",this.onChildViewPropsChange_),r.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),r.viewProps.handleDispose(this.onChildDispose_),r instanceof at)r.binding.emitter.on("change",this.onChildInputChange_);else if(r instanceof dt)r.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(r instanceof $e)r.value.emitter.on("change",this.onChildValueChange_);else{const m=Dt(r);if(m){const G=m.emitter;G.on("layout",this.onDescendantLayout_),G.on("inputchange",this.onDescendantInputChange_),G.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const r=e.item;if(r instanceof at)r.binding.emitter.off("change",this.onChildInputChange_);else if(r instanceof dt)r.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(r instanceof $e)r.value.emitter.off("change",this.onChildValueChange_);else{const m=Dt(r);if(m){const G=m.emitter;G.off("layout",this.onDescendantLayout_),G.off("inputchange",this.onDescendantInputChange_),G.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(m=>!m.viewProps.get("hidden")),t=e[0],r=e[e.length-1];this.bcSet_.items.forEach(m=>{const G=[];m===t&&(G.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&G.push("veryfirst")),m===r&&(G.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&G.push("verylast")),m.blade.set("positions",G)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=$t(this.find(at),e.sender);if(!t)throw R.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Ft(this.find(dt),e.sender);if(!t)throw R.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=jt(this.find($e),e.sender);if(!t)throw R.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Je extends D{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new St(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const r=new Ut({blade:t.root?void 0:t.blade,viewProps:t.viewProps});r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),this.rack=r,this.viewProps.handleDispose(()=>{for(let m=this.rack.children.length-1;m>=0;m--)this.rack.children[m].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&$(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&U(e.bladeController.view.element)}}const _n=K("cnt");class Ot{constructor(e,t){var r;this.className_=K((r=t.viewName)!==null&&r!==void 0?r:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),_n()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),pe(this.foldable_,"completed",Te(this.element,this.className_(void 0,"cpl")));const m=e.createElement("button");m.classList.add(this.className_("b")),pe(t.props,"title",Oe=>{L(Oe)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(m),this.element.appendChild(m),this.buttonElement=m;const G=e.createElement("div");G.classList.add(this.className_("i")),this.element.appendChild(G);const H=e.createElement("div");H.classList.add(this.className_("t")),Re(t.props.value("title"),H),this.buttonElement.appendChild(H),this.titleElement=H;const we=e.createElement("div");we.classList.add(this.className_("m")),this.buttonElement.appendChild(we);const ze=t.containerElement;ze.classList.add(this.className_("c")),this.element.appendChild(ze),this.containerElement=ze}}class nn extends xt{constructor(e,t){var r;const m=rt.create((r=t.expanded)!==null&&r!==void 0?r:!0),G=new Je(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:G,view:new Ot(e,{containerElement:G.view.element,foldable:m,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=m,it(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const mn={id:"folder",type:"blade",accept(n){const e=ye,t=ve(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new nn(n.document,{blade:n.blade,expanded:n.params.expanded,props:fe.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof nn?new Rt(n.controller,n.pool):null}};class Ht extends $e{constructor(e,t){const r=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new Me(e,{props:t.props,viewProps:r}),viewProps:r})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class bn extends l{}const sn=K("spr");class rn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(sn()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("hr");r.classList.add(sn("r")),this.element.appendChild(r)}}class Vt extends D{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new rn(e,{viewProps:t.viewProps})}))}}const Xn={id:"separator",type:"blade",accept(n){const t=ve(n,{view:ye.required.constant("separator")});return t?{params:t}:null},controller(n){return new Vt(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Vt?new bn(n.controller):null}},vn=K("tbi");class an{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(vn()),t.viewProps.bindClassModifiers(this.element),pe(t.props,"selected",G=>{G?this.element.classList.add(vn(void 0,"sel")):this.element.classList.remove(vn(void 0,"sel"))});const r=e.createElement("button");r.classList.add(vn("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const m=e.createElement("div");m.classList.add(vn("t")),Re(t.props.value("title"),m),this.buttonElement.appendChild(m),this.titleElement=m}}class on{constructor(e,t){this.emitter=new V,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new an(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class _s{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new on(e,{props:t.itemProps,viewProps:p.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Je(e,{blade:Ve(),viewProps:p.create()}),this.props=t.props,pe(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.contentController.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Zn{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,r){return this.rackApi_.addInput(e,t,r)}addMonitor(e,t,r){return this.rackApi_.addMonitor(e,t,r)}addBlade(e){return this.rackApi_.addBlade(e)}}class Jn extends Qe{constructor(e,t){super(e,new vt(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new V,this.pageApiMap_=new Map,this.rackApi_.on("change",r=>{this.emitter_.emit("change",{event:r})}),this.rackApi_.on("update",r=>{this.emitter_.emit("update",{event:r})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(r=>{this.setUpPageApi_(r)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw R.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,r=new _s(t,{itemProps:fe.fromObject({selected:!1,title:e.title}),props:fe.fromObject({selected:!1})});this.controller_.add(r,e.index);const m=this.pageApiMap_.get(r);if(!m)throw R.shouldNeverHappen();return m}removePage(e){this.controller_.remove(e)}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(m=>m.controller_===e.contentController);if(!t)throw R.shouldNeverHappen();const r=new Zn(e,t);this.pageApiMap_.set(e,r)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw R.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new A(this,e.rawValue)})}}const gn=-1;class mr{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=me(!0),this.selectedIndex=me(gn),this.items_=[]}add(e,t){const r=t??this.items_.length;this.items_.splice(r,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=gn,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,r)=>{t.rawValue=r===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,r)=>{t.rawValue=r===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(r=>r===e.sender);this.items_.forEach((r,m)=>{r.rawValue=m===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Ct=K("tab");class Qn{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ct(),_n()),t.viewProps.bindClassModifiers(this.element),de(t.empty,Te(this.element,Ct(void 0,"nop")));const r=e.createElement("div");r.classList.add(Ct("t")),this.element.appendChild(r),this.itemsElement=r;const m=e.createElement("div");m.classList.add(Ct("i")),this.element.appendChild(m);const G=t.contentsElement;G.classList.add(Ct("c")),this.element.appendChild(G),this.contentsElement=G}}class zs extends xt{constructor(e,t){const r=new Je(e,{blade:t.blade,viewProps:t.viewProps}),m=new mr;super({blade:t.blade,rackController:r,view:new Qn(e,{contentsElement:r.view.element,empty:m.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new ht(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=m}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;$(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;U(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const es={id:"tab",type:"blade",accept(n){const e=ye,t=ve(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new zs(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const r=new _s(n.document,{itemProps:fe.fromObject({selected:!1,title:t.title}),props:fe.fromObject({selected:!1})});e.add(r)}),e},api(n){return n.controller instanceof zs?new Jn(n.controller,n.pool):null}};function ts(n,e){const t=n.accept(e.params);if(!t)return null;const r=ye.optional.boolean(e.params.disabled).value,m=ye.optional.boolean(e.params.hidden).value;return n.controller({blade:Ve(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:r,hidden:m}),viewProps:p.create({disabled:r,hidden:m})})}class Mn{constructor(){this.disabled=!1,this.emitter=new V}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class wn{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new V,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class br{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new V,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function xn(n,e){for(;n.length<e;)n.push(void 0)}function vr(n){const e=[];return xn(e,n),me(e)}function Is(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function gr(n,e){const t=[...Is(n),e];return t.length>n.length?t.splice(0,t.length-n.length):xn(t,n.length),t}class Fs{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new V,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,r=this.reader_(e);this.value.rawValue=gr(t,r),this.emitter.emit("update",{rawValue:r,sender:this})}onTick_(e){this.read()}}class Yt{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,r)=>r.constrain(t),e)}}function Lt(n,e){if(n instanceof e)return n;if(n instanceof Yt){const t=n.constraints.reduce((r,m)=>r||(m instanceof e?m:null),null);if(t)return t}return null}class ln{constructor(e){this.values=fe.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),r=this.values.get("min");return Math.min(Math.max(e,r),t)}}class Rn{constructor(e){this.values=fe.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(m=>m.value===e).length>0?e:t[0].value}}class cn{constructor(e){this.values=fe.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),r=this.values.get("min");let m=e;return L(r)||(m=Math.max(m,r)),L(t)||(m=Math.min(m,t)),m}}class Dn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,r=Math.round((e-t)/this.step);return t+r*this.step}}const ms=K("lst");class wr{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(ms()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("select");r.classList.add(ms("s")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.selectElement=r;const m=e.createElement("div");m.classList.add(ms("m")),m.appendChild(E(e,"dropdown")),this.element.appendChild(m),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,pe(this.props_,"options",G=>{j(this.selectElement),G.forEach(H=>{const we=e.createElement("option");we.textContent=H.text,this.selectElement.appendChild(we)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Un{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new wr(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Et=K("pop");class xr{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Et()),t.viewProps.bindClassModifiers(this.element),de(t.shows,Te(this.element,Et(void 0,"v")))}}class Os{constructor(e,t){this.shows=me(!1),this.viewProps=t.viewProps,this.view=new xr(e,{shows:this.shows,viewProps:this.viewProps})}}const Vs=K("txt");class yr{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Vs()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const r=e.createElement("input");r.classList.add(Vs("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class Ln{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new yr(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const r=e.currentTarget.value,m=this.parser_(r);L(m)||(this.value.rawValue=m),this.view.refresh()}}function bs(n){return String(n)}function vs(n){return n==="false"?!1:!!n}function gs(n){return bs(n)}class ws{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const $s={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class xs{constructor(e,t,r){this.left=t,this.operator=e,this.right=r}evaluate(){const e=$s[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Ns={"+":n=>n,"-":n=>-n,"~":n=>~n};class ns{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Ns[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ys(n){return(e,t)=>{for(let r=0;r<n.length;r++){const m=n[r](e,t);if(m!=="")return m}return""}}function yn(n,e){var t;const r=n.substr(e).match(/^\s+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function un(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Nt(n,e){var t;const r=n.substr(e).match(/^[0-9]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Pr(n,e){const t=Nt(n,e);if(t!=="")return t;const r=n.substr(e,1);if(e+=1,r!=="-"&&r!=="+")return"";const m=Nt(n,e);return m===""?"":r+m}function k(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const r=Pr(n,e);return r===""?"":t+r}function W(n,e){const t=n.substr(e,1);if(t==="0")return t;const r=un(n,e);return e+=r.length,r===""?"":r+Nt(n,e)}function J(n,e){const t=W(n,e);if(e+=t.length,t==="")return"";const r=n.substr(e,1);if(e+=r.length,r!==".")return"";const m=Nt(n,e);return e+=m.length,t+r+m+k(n,e)}function ce(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const r=Nt(n,e);return e+=r.length,r===""?"":t+r+k(n,e)}function re(n,e){const t=W(n,e);return e+=t.length,t===""?"":t+k(n,e)}const he=ys([J,ce,re]);function le(n,e){var t;const r=n.substr(e).match(/^[01]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function _e(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const r=le(n,e);return r===""?"":t+r}function Ce(n,e){var t;const r=n.substr(e).match(/^[0-7]+/);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Le(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const r=Ce(n,e);return r===""?"":t+r}function He(n,e){var t;const r=n.substr(e).match(/^[0-9a-f]+/i);return(t=r&&r[0])!==null&&t!==void 0?t:""}function Ue(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const r=He(n,e);return r===""?"":t+r}const We=ys([_e,Le,Ue]),ft=ys([We,he]);function qe(n,e){const t=ft(n,e);return e+=t.length,t===""?null:{evaluable:new ws(t),cursor:e}}function gt(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const r=Bt(n,e);if(!r)return null;e=r.cursor,e+=yn(n,e).length;const m=n.substr(e,1);return e+=m.length,m!==")"?null:{evaluable:r.evaluable,cursor:e}}function Fe(n,e){var t;return(t=qe(n,e))!==null&&t!==void 0?t:gt(n,e)}function yt(n,e){const t=Fe(n,e);if(t)return t;const r=n.substr(e,1);if(e+=r.length,r!=="+"&&r!=="-"&&r!=="~")return null;const m=yt(n,e);return m?(e=m.cursor,{cursor:e,evaluable:new ns(r,m.evaluable)}):null}function Xt(n,e,t){t+=yn(e,t).length;const r=n.filter(m=>e.startsWith(m,t))[0];return r?(t+=r.length,t+=yn(e,t).length,{cursor:t,operator:r}):null}function ss(n,e){return(t,r)=>{const m=n(t,r);if(!m)return null;r=m.cursor;let G=m.evaluable;for(;;){const H=Xt(e,t,r);if(!H)break;r=H.cursor;const we=n(t,r);if(!we)return null;r=we.cursor,G=new xs(H.operator,G,we.evaluable)}return G?{cursor:r,evaluable:G}:null}}const Zt=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>ss(n,e),yt);function Bt(n,e){return e+=yn(n,e).length,Zt(n,e)}function Gn(n){const e=Bt(n,0);return!e||e.cursor+yn(n,e.cursor).length!==n.length?null:e.evaluable}function Gt(n){var e;const t=Gn(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Jt(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=Gt(n);if(!L(e))return e}return 0}function rs(n){return String(n)}function wt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const Sr=wt(0);function Pn(n){return Sr(n)+"%"}function gi(n){return String(n)}function Er(n){return n}function Ps({primary:n,secondary:e,forward:t,backward:r}){let m=!1;function G(H){m||(m=!0,H(),m=!1)}n.emitter.on("change",H=>{G(()=>{e.setRawValue(t(n,e),H.options)})}),e.emitter.on("change",H=>{G(()=>{n.setRawValue(r(n,e),H.options)}),G(()=>{e.setRawValue(t(n,e),H.options)})}),G(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function zt(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Ss(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function dn(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function Eo(n){return n==="ArrowUp"||n==="ArrowDown"}function wi(n){return Eo(n)||n==="ArrowLeft"||n==="ArrowRight"}function kr(n,e){var t,r;const m=e.ownerDocument.defaultView,G=e.getBoundingClientRect();return{x:n.pageX-(((t=m&&m.scrollX)!==null&&t!==void 0?t:0)+G.left),y:n.pageY-(((r=m&&m.scrollY)!==null&&r!==void 0?r:0)+G.top)}}class zn{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new V,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const r=this.elem_.ownerDocument;r.addEventListener("mousemove",this.onDocumentMouseMove_),r.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(kr(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(kr(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(kr(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),r=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-r.left,y:t.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const r=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,m=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(r?{x:r.clientX-m.left,y:r.clientY-m.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function _t(n,e,t,r,m){const G=(n-e)/(t-e);return r+G*(m-r)}function xi(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function kt(n,e,t){return Math.min(Math.max(n,e),t)}function yi(n,e){return(n%e+e)%e}const qt=K("txt");class ko{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(qt(),qt(void 0,"num")),t.arrayPosition&&this.element.classList.add(qt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(qt("i")),r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(qt()),this.inputElement.classList.add(qt("i"));const m=e.createElement("div");m.classList.add(qt("k")),this.element.appendChild(m),this.knobElement=m;const G=e.createElementNS(M,"svg");G.classList.add(qt("g")),this.knobElement.appendChild(G);const H=e.createElementNS(M,"path");H.classList.add(qt("gb")),G.appendChild(H),this.guideBodyElem_=H;const we=e.createElementNS(M,"path");we.classList.add(qt("gh")),G.appendChild(we),this.guideHeadElem_=we;const ze=e.createElement("div");ze.classList.add(K("tt")()),this.knobElement.appendChild(ze),this.tooltipElem_=ze,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(qt(void 0,"drg"));return}this.element.classList.add(qt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),r=t+(t>0?-1:t<0?1:0),m=kt(-r,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${r+m},0 L${r},4 L${r+m},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const G=this.props_.get("formatter");this.tooltipElem_.textContent=G(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Es{constructor(e,t){var r;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(r=t.sliderProps)!==null&&r!==void 0?r:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=me(null),this.view=new ko(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const m=new zn(this.view.knobElement);m.emitter.on("down",this.onPointerDown_),m.emitter.on("move",this.onPointerMove_),m.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,r;const m=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),G=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("maxValue");let H=e;return m!==void 0&&(H=Math.max(H,m)),G!==void 0&&(H=Math.min(H,G)),H}onInputChange_(e){const r=e.currentTarget.value,m=this.parser_(r);L(m)||(this.value.rawValue=this.constrainValue_(m)),this.view.refresh()}onInputKeyDown_(e){const t=zt(this.baseStep_,Ss(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){zt(this.baseStep_,Ss(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Tr=K("sld");class To{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Tr()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Tr("t")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.trackElement=r;const m=e.createElement("div");m.classList.add(Tr("k")),this.trackElement.appendChild(m),this.knobElement=m,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=kt(_t(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class Co{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new To(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new zn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(_t(kt(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=zt(this.baseStep_,dn(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){zt(this.baseStep_,dn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Cr=K("sldtxt");class Bo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Cr());const r=e.createElement("div");r.classList.add(Cr("s")),this.sliderView_=t.sliderView,r.appendChild(this.sliderView_.element),this.element.appendChild(r);const m=e.createElement("div");m.classList.add(Cr("t")),this.textView_=t.textView,m.appendChild(this.textView_.element),this.element.appendChild(m)}}class Br{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new Co(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Es(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new Bo(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function ks(n,e){n.write(e)}function qs(n){const e=ye;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Pi(n){if(n==="inline"||n==="popup")return n}function Sn(n){const e=ye;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Si(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Ar(n){return L(n)?null:new Rn(Si(n))}function Ao(n){const e=n?Lt(n,Dn):null;return e?e.step:null}function Ks(n,e){const t=n&&Lt(n,Dn);return t?xi(t.step):Math.max(xi(e),2)}function is(n){const e=Ao(n);return e??1}function as(n,e){var t;const r=n&&Lt(n,Dn),m=Math.abs((t=r==null?void 0:r.step)!==null&&t!==void 0?t:e);return m===0?.1:Math.pow(10,Math.floor(Math.log10(m))-1)}const Ws=K("ckb");class Mo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ws()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("label");r.classList.add(Ws("l")),this.element.appendChild(r);const m=e.createElement("input");m.classList.add(Ws("i")),m.type="checkbox",r.appendChild(m),this.inputElement=m,t.viewProps.bindDisabled(this.inputElement);const G=e.createElement("div");G.classList.add(Ws("w")),r.appendChild(G);const H=E(e,"check");G.appendChild(H),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Ro{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Mo(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function Do(n){const e=[],t=Ar(n.options);return t&&e.push(t),new Yt(e)}const Uo={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const r=ve(e,{options:ye.optional.custom(qs)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>vs,constraint:n=>Do(n.params),writer:n=>ks},controller:n=>{const e=n.document,t=n.value,r=n.constraint,m=r&&Lt(r,Rn);return m?new Un(e,{props:new fe({options:m.values.value("options")}),value:t,viewProps:n.viewProps}):new Ro(e,{value:t,viewProps:n.viewProps})}},In=K("col");class Lo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(In()),t.foldable.bindExpandedClass(this.element,In(void 0,"expanded")),pe(t.foldable,"completed",Te(this.element,In(void 0,"cpl")));const r=e.createElement("div");r.classList.add(In("h")),this.element.appendChild(r);const m=e.createElement("div");m.classList.add(In("s")),r.appendChild(m),this.swatchElement=m;const G=e.createElement("div");if(G.classList.add(In("t")),r.appendChild(G),this.textElement=G,t.pickerLayout==="inline"){const H=e.createElement("div");H.classList.add(In("p")),this.element.appendChild(H),this.pickerElement=H}else this.pickerElement=null}}function Go(n,e,t){const r=kt(n/255,0,1),m=kt(e/255,0,1),G=kt(t/255,0,1),H=Math.max(r,m,G),we=Math.min(r,m,G),ze=H-we;let Oe=0,st=0;const ot=(we+H)/2;return ze!==0&&(st=ze/(1-Math.abs(H+we-1)),r===H?Oe=(m-G)/ze:m===H?Oe=2+(G-r)/ze:Oe=4+(r-m)/ze,Oe=Oe/6+(Oe<0?1:0)),[Oe*360,st*100,ot*100]}function zo(n,e,t){const r=(n%360+360)%360,m=kt(e/100,0,1),G=kt(t/100,0,1),H=(1-Math.abs(2*G-1))*m,we=H*(1-Math.abs(r/60%2-1)),ze=G-H/2;let Oe,st,ot;return r>=0&&r<60?[Oe,st,ot]=[H,we,0]:r>=60&&r<120?[Oe,st,ot]=[we,H,0]:r>=120&&r<180?[Oe,st,ot]=[0,H,we]:r>=180&&r<240?[Oe,st,ot]=[0,we,H]:r>=240&&r<300?[Oe,st,ot]=[we,0,H]:[Oe,st,ot]=[H,0,we],[(Oe+ze)*255,(st+ze)*255,(ot+ze)*255]}function Io(n,e,t){const r=kt(n/255,0,1),m=kt(e/255,0,1),G=kt(t/255,0,1),H=Math.max(r,m,G),we=Math.min(r,m,G),ze=H-we;let Oe;ze===0?Oe=0:H===r?Oe=60*(((m-G)/ze%6+6)%6):H===m?Oe=60*((G-r)/ze+2):Oe=60*((r-m)/ze+4);const st=H===0?0:ze/H,ot=H;return[Oe,st*100,ot*100]}function Ei(n,e,t){const r=yi(n,360),m=kt(e/100,0,1),G=kt(t/100,0,1),H=G*m,we=H*(1-Math.abs(r/60%2-1)),ze=G-H;let Oe,st,ot;return r>=0&&r<60?[Oe,st,ot]=[H,we,0]:r>=60&&r<120?[Oe,st,ot]=[we,H,0]:r>=120&&r<180?[Oe,st,ot]=[0,H,we]:r>=180&&r<240?[Oe,st,ot]=[0,we,H]:r>=240&&r<300?[Oe,st,ot]=[we,0,H]:[Oe,st,ot]=[H,0,we],[(Oe+ze)*255,(st+ze)*255,(ot+ze)*255]}function Fo(n,e,t){const r=t+e*(100-Math.abs(2*t-100))/200;return[n,r!==0?e*(100-Math.abs(2*t-100))/r:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Oo(n,e,t){const r=100-Math.abs(t*(200-e)/100-100);return[n,r!==0?e*t/r:0,t*(200-e)/(2*100)]}function Fn(n){return[n[0],n[1],n[2]]}function ki(n,e){return[n[0],n[1],n[2],e]}const Vo={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Fo,rgb:zo},hsv:{hsl:Oo,hsv:(n,e,t)=>[n,e,t],rgb:Ei},rgb:{hsl:Go,hsv:Io,rgb:(n,e,t)=>[n,e,t]}};function js(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function $o(n,e){return n===e?e:yi(n,e)}function No(n,e,t){var r;const m=js(e,t);return[e==="rgb"?kt(n[0],0,m[0]):$o(n[0],m[0]),kt(n[1],0,m[1]),kt(n[2],0,m[2]),kt((r=n[3])!==null&&r!==void 0?r:1,0,1)]}function Ti(n,e,t,r){const m=js(e,t),G=js(e,r);return n.map((H,we)=>H/m[we]*G[we])}function qo(n,e,t){const r=Ti(n,e.mode,e.type,"int"),m=Vo[e.mode][t.mode](...r);return Ti(m,t.mode,"int",t.type)}function Hs(n,e){return typeof n!="object"||L(n)?!1:e in n&&typeof n[e]=="number"}class Ye{static black(e="int"){return new Ye([0,0,0],"rgb",e)}static fromObject(e,t="int"){const r="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new Ye(r,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return Hs(e,"r")&&Hs(e,"g")&&Hs(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&Hs(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const r=e.comps_,m=t.comps_;for(let G=0;G<r.length;G++)if(r[G]!==m[G])return!1;return!0}constructor(e,t,r="int"){this.mode=t,this.type=r,this.comps_=No(e,t,r)}getComponents(e,t="int"){return ki(qo(Fn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const En=K("colp");class Ko{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(En()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(En("hsv"));const m=e.createElement("div");m.classList.add(En("sv")),this.svPaletteView_=t.svPaletteView,m.appendChild(this.svPaletteView_.element),r.appendChild(m);const G=e.createElement("div");G.classList.add(En("h")),this.hPaletteView_=t.hPaletteView,G.appendChild(this.hPaletteView_.element),r.appendChild(G),this.element.appendChild(r);const H=e.createElement("div");if(H.classList.add(En("rgb")),this.textView_=t.textView,H.appendChild(this.textView_.element),this.element.appendChild(H),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const we=e.createElement("div");we.classList.add(En("a"));const ze=e.createElement("div");ze.classList.add(En("ap")),ze.appendChild(this.alphaViews_.palette.element),we.appendChild(ze);const Oe=e.createElement("div");Oe.classList.add(En("at")),Oe.appendChild(this.alphaViews_.text.element),we.appendChild(Oe),this.element.appendChild(we)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Wo(n){return n==="int"?"int":n==="float"?"float":void 0}function Mr(n){const e=ye;return ve(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Wo)}),expanded:e.optional.boolean,picker:e.optional.custom(Pi)})}function On(n){return n?.1:1}function Vn(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function jo(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function Kt(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Ho={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Ci(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),r=e[2];return Ho[r](t)}function Bi(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Kt(e[1],255),Kt(e[2],255),Kt(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Ai(n){return e=>{const t=Bi(e);return t?new Ye(t,"rgb",n):null}}function Mi(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Kt(e[1],255),Kt(e[2],255),Kt(e[3],255),Kt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Ri(n){return e=>{const t=Mi(e);return t?new Ye(t,"rgb",n):null}}function Di(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ci(e[1]),Kt(e[2],100),Kt(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Ui(n){return e=>{const t=Di(e);return t?new Ye(t,"hsl",n):null}}function Li(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ci(e[1]),Kt(e[2],100),Kt(e[3],100),Kt(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Gi(n){return e=>{const t=Li(e);return t?new Ye(t,"hsl",n):null}}function zi(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function Yo(n){const e=zi(n);return e?new Ye(e,"rgb","int"):null}function Ii(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),_t(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),_t(parseInt(t[4],16),0,255,0,1)]:null}function Xo(n){const e=Ii(n);return e?new Ye(e,"rgb","int"):null}function Fi(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Oi(n){return e=>{const t=Fi(e);return t?new Ye(t,"rgb",n):null}}function Vi(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function $i(n){return e=>{const t=Vi(e);return t?new Ye(t,"rgb",n):null}}const Zo=[{parser:zi,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Ii,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Bi,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Mi,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Di,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Li,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Fi,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Vi,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Jo(n){return Zo.reduce((e,{parser:t,result:r})=>e||(t(n)?r:null),null)}function Rr(n,e="int"){const t=Jo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const Ni={int:[Yo,Xo,Ai("int"),Ri("int"),Ui("int"),Gi("int"),Oi("int"),$i("int")],float:[Ai("float"),Ri("float"),Ui("float"),Gi("float"),Oi("float"),$i("float")]};function Qo(n){const e=Ni[n];return t=>{if(typeof t!="string")return Ye.black(n);const r=e.reduce((m,G)=>m||G(t),null);return r??Ye.black(n)}}function Dr(n){const e=Ni[n];return t=>e.reduce((r,m)=>r||m(t),null)}function qi(n){const e=kt(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function Ki(n,e="#"){const t=Fn(n.getComponents("rgb")).map(qi).join("");return`${e}${t}`}function Ur(n,e="#"){const t=n.getComponents("rgb"),r=[t[0],t[1],t[2],t[3]*255].map(qi).join("");return`${e}${r}`}function Wi(n,e){const t=wt(e==="float"?2:0);return`rgb(${Fn(n.getComponents("rgb",e)).map(m=>t(m)).join(", ")})`}function el(n){return e=>Wi(e,n)}function Ys(n,e){const t=wt(2),r=wt(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((G,H)=>(H===3?t:r)(G)).join(", ")})`}function tl(n){return e=>Ys(e,n)}function nl(n){const e=[wt(0),Pn,Pn];return`hsl(${Fn(n.getComponents("hsl")).map((r,m)=>e[m](r)).join(", ")})`}function sl(n){const e=[wt(0),Pn,Pn,wt(2)];return`hsla(${n.getComponents("hsl").map((r,m)=>e[m](r)).join(", ")})`}function ji(n,e){const t=wt(e==="float"?2:0),r=["r","g","b"];return`{${Fn(n.getComponents("rgb",e)).map((G,H)=>`${r[H]}: ${t(G)}`).join(", ")}}`}function rl(n){return e=>ji(e,n)}function Hi(n,e){const t=wt(2),r=wt(e==="float"?2:0),m=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((H,we)=>{const ze=we===3?t:r;return`${m[we]}: ${ze(H)}`}).join(", ")}}`}function il(n){return e=>Hi(e,n)}const al=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Ki},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ur},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:nl},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:sl},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:el(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:tl(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:rl(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:il(e)}],[])];function Lr(n){return al.reduce((e,t)=>e||(jo(t.format,n)?t.stringifier:null),null)}const Ts=K("apl");class ol{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ts()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(Ts("b")),this.element.appendChild(r);const m=e.createElement("div");m.classList.add(Ts("c")),r.appendChild(m),this.colorElem_=m;const G=e.createElement("div");G.classList.add(Ts("m")),this.element.appendChild(G),this.markerElem_=G;const H=e.createElement("div");H.classList.add(Ts("p")),this.markerElem_.appendChild(H),this.previewElem_=H,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),r=new Ye([t[0],t[1],t[2],0],"rgb"),m=new Ye([t[0],t[1],t[2],255],"rgb"),G=["to right",Ys(r),Ys(m)];this.colorElem_.style.background=`linear-gradient(${G.join(",")})`,this.previewElem_.style.backgroundColor=Ys(e);const H=_t(t[3],0,1,0,100);this.markerElem_.style.left=`${H}%`}onValueChange_(){this.update_()}}class ll{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ol(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new zn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=e.point.x/e.bounds.width,m=this.value.rawValue,[G,H,we]=m.getComponents("hsv");this.value.setRawValue(new Ye([G,H,we,r],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=zt(On(!0),dn(e));if(t===0)return;const r=this.value.rawValue,[m,G,H,we]=r.getComponents("hsv");this.value.setRawValue(new Ye([m,G,H,we+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){zt(On(!0),dn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const os=K("coltxt");function cl(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((r,m)=>{const G=n.createElement("option");return G.textContent=m.text,G.value=m.value,r.appendChild(G),r},n.createDocumentFragment())),e}class ul{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(os()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(os("m")),this.modeElem_=cl(e),this.modeElem_.classList.add(os("ms")),r.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const m=e.createElement("div");m.classList.add(os("mm")),m.appendChild(E(e,"dropdown")),r.appendChild(m),this.element.appendChild(r);const G=e.createElement("div");G.classList.add(os("w")),this.element.appendChild(G),this.textsElem_=G,this.textViews_=t.textViews,this.applyTextViews_(),de(t.colorMode,H=>{this.modeElem_.value=H})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){j(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const r=e.createElement("div");r.classList.add(os("c")),r.appendChild(t.element),this.textsElem_.appendChild(r)})}}function dl(n){return wt(n==="float"?2:0)}function pl(n,e,t){const r=js(n,e)[t];return new ln({min:0,max:r})}function Gr(n,e,t){return new Es(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:On(!1),parser:e.parser,props:fe.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:dl(e.colorType)}),value:me(0,{constraint:pl(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class hl{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=me(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new ul(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},r=[Gr(e,t,0),Gr(e,t,1),Gr(e,t,2)];return r.forEach((m,G)=>{Ps({primary:this.value,secondary:m.value,forward:H=>H.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[G],backward:(H,we)=>{const ze=this.colorMode.rawValue,Oe=H.rawValue.getComponents(ze,this.colorType_);return Oe[G]=we.rawValue,new Ye(ki(Fn(Oe),Oe[3]),ze,this.colorType_)}})}),r}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const zr=K("hpl");class fl{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(zr()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("div");r.classList.add(zr("c")),this.element.appendChild(r);const m=e.createElement("div");m.classList.add(zr("m")),this.element.appendChild(m),this.markerElem_=m,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Wi(new Ye([t,100,100],"hsv"));const r=_t(t,0,360,0,100);this.markerElem_.style.left=`${r}%`}onValueChange_(){this.update_()}}class _l{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new fl(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new zn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=_t(kt(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),m=this.value.rawValue,[,G,H,we]=m.getComponents("hsv");this.value.setRawValue(new Ye([r,G,H,we],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=zt(On(!1),dn(e));if(t===0)return;const r=this.value.rawValue,[m,G,H,we]=r.getComponents("hsv");this.value.setRawValue(new Ye([m+t,G,H,we],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){zt(On(!1),dn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ir=K("svp"),Yi=64;class ml{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ir()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const r=e.createElement("canvas");r.height=Yi,r.width=Yi,r.classList.add(Ir("c")),this.element.appendChild(r),this.canvasElement=r;const m=e.createElement("div");m.classList.add(Ir("m")),this.element.appendChild(m),this.markerElem_=m,this.update_()}update_(){const e=g(this.canvasElement);if(!e)return;const r=this.value.rawValue.getComponents("hsv"),m=this.canvasElement.width,G=this.canvasElement.height,H=e.getImageData(0,0,m,G),we=H.data;for(let st=0;st<G;st++)for(let ot=0;ot<m;ot++){const $n=_t(ot,0,m,0,100),Bs=_t(st,0,G,100,0),As=Ei(r[0],$n,Bs),Xs=(st*m+ot)*4;we[Xs]=As[0],we[Xs+1]=As[1],we[Xs+2]=As[2],we[Xs+3]=255}e.putImageData(H,0,0);const ze=_t(r[1],0,100,0,100);this.markerElem_.style.left=`${ze}%`;const Oe=_t(r[2],0,100,100,0);this.markerElem_.style.top=`${Oe}%`}onValueChange_(){this.update_()}}class bl{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new ml(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new zn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=_t(e.point.x,0,e.bounds.width,0,100),m=_t(e.point.y,0,e.bounds.height,100,0),[G,,,H]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ye([G,r,m,H],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){wi(e.key)&&e.preventDefault();const[t,r,m,G]=this.value.rawValue.getComponents("hsv"),H=On(!1),we=zt(H,dn(e)),ze=zt(H,Ss(e));we===0&&ze===0||this.value.setRawValue(new Ye([t,r+we,m+ze,G],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=On(!1),r=zt(t,dn(e)),m=zt(t,Ss(e));r===0&&m===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class vl{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new _l(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new bl(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new ll(e,{value:this.value,viewProps:this.viewProps}),text:new Es(e,{parser:Gt,baseStep:.1,props:fe.fromObject({draggingScale:.01,formatter:wt(2)}),value:me(0,{constraint:new ln({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Ps({primary:this.value,secondary:this.alphaIcs_.text.value,forward:r=>r.rawValue.getComponents()[3],backward:(r,m)=>{const G=r.rawValue.getComponents();return G[3]=m.rawValue,new Ye(G,r.rawValue.mode)}}),this.textC_=new hl(e,{colorType:t.colorType,parser:Gt,value:this.value,viewProps:this.viewProps}),this.view=new Ko(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Fr=K("colsw");class gl{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Fr()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Fr("sw")),this.element.appendChild(r),this.swatchElem_=r;const m=e.createElement("button");m.classList.add(Fr("b")),t.viewProps.bindDisabled(m),this.element.appendChild(m),this.buttonElement=m,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ur(e)}onValueChange_(){this.update_()}}class wl{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new gl(e,{value:this.value,viewProps:this.viewProps})}}class Or{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=rt.create(t.expanded),this.swatchC_=new wl(e,{value:this.value,viewProps:this.viewProps});const r=this.swatchC_.view.buttonElement;r.addEventListener("blur",this.onButtonBlur_),r.addEventListener("click",this.onButtonClick_),this.textC_=new Ln(e,{parser:t.parser,props:fe.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Lo(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Os(e,{viewProps:this.viewProps}):null;const m=new vl(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});m.view.allFocusableElements.forEach(G=>{G.addEventListener("blur",this.onPopupChildBlur_),G.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=m,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(m.view.element),Ps({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:G=>G.rawValue,backward:(G,H)=>H.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),it(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=ae(e);r&&t.contains(r)||r&&r===this.swatchC_.view.buttonElement&&!f(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function xl(n,e){return Ye.isColorObject(n)?Ye.fromObject(n,e):Ye.black(e)}function yl(n){return Fn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function Pl(n){return n.getComponents("rgb").reduce((e,t,r)=>{const m=Math.floor(r===3?t*255:t)&255;return e<<8|m},0)>>>0}function Sl(n){return new Ye([n>>16&255,n>>8&255,n&255],"rgb")}function El(n){return new Ye([n>>24&255,n>>16&255,n>>8&255,_t(n&255,0,255,0,1)],"rgb")}function kl(n){return typeof n!="number"?Ye.black():Sl(n)}function Tl(n){return typeof n!="number"?Ye.black():El(n)}function Cl(n){const e=Lr(n);return e?(t,r)=>{ks(t,e(r))}:null}function Bl(n){const e=n?Pl:yl;return(t,r)=>{ks(t,e(r))}}function Al(n,e,t){const r=e.toRgbaObject(t);n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function Ml(n,e,t){const r=e.toRgbaObject(t);n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function Rl(n,e){return(t,r)=>{n?Al(t,r,e):Ml(t,r,e)}}function Vr(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Dl(n){return n?e=>Ur(e,"0x"):e=>Ki(e,"0x")}function Ul(n){return"color"in n||"view"in n&&n.view==="color"}const Ll={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Ul(e))return null;const t=Mr(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Vr(n.params)?Tl:kl,equals:Ye.equals,writer:n=>Bl(Vr(n.params))},controller:n=>{const e=Vr(n.params),t="expanded"in n.params?n.params.expanded:void 0,r="picker"in n.params?n.params.picker:void 0;return new Or(n.document,{colorType:"int",expanded:t??!1,formatter:Dl(e),parser:Dr("int"),pickerLayout:r??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function Gl(n){return Ye.isRgbaColorObject(n)}function zl(n){return e=>xl(e,n)}function Il(n,e){return t=>n?Hi(t,e):ji(t,e)}const Fl={id:"input-color-object",type:"input",accept:(n,e)=>{if(!Ye.isColorObject(n))return null;const t=Mr(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>zl(Vn(n.params)),equals:Ye.equals,writer:n=>Rl(Gl(n.initialValue),Vn(n.params))},controller:n=>{var e;const t=Ye.isRgbaColorObject(n.initialValue),r="expanded"in n.params?n.params.expanded:void 0,m="picker"in n.params?n.params.picker:void 0,G=(e=Vn(n.params))!==null&&e!==void 0?e:"int";return new Or(n.document,{colorType:G,expanded:r??!1,formatter:Il(t,G),parser:Dr(G),pickerLayout:m??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},Ol={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Rr(n,Vn(e));if(!t||!Lr(t))return null;const m=Mr(e);return m?{initialValue:n,params:m}:null},binding:{reader:n=>{var e;return Qo((e=Vn(n.params))!==null&&e!==void 0?e:"int")},equals:Ye.equals,writer:n=>{const e=Rr(n.initialValue,Vn(n.params));if(!e)throw R.shouldNeverHappen();const t=Cl(e);if(!t)throw R.notBindable();return t}},controller:n=>{const e=Rr(n.initialValue,Vn(n.params));if(!e)throw R.shouldNeverHappen();const t=Lr(e);if(!t)throw R.shouldNeverHappen();const r="expanded"in n.params?n.params.expanded:void 0,m="picker"in n.params?n.params.picker:void 0;return new Or(n.document,{colorType:e.type,expanded:r??!1,formatter:t,parser:Dr(e.type),pickerLayout:m??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class kn{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((r,m)=>{var G,H;return(H=(G=this.components[m])===null||G===void 0?void 0:G.constrain(r))!==null&&H!==void 0?H:r});return this.asm_.fromComponents(t)}}const Xi=K("pndtxt");class Vl{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Xi()),this.textViews.forEach(r=>{const m=e.createElement("div");m.classList.add(Xi("a")),m.appendChild(r.element),this.element.appendChild(m)})}}function $l(n,e,t){return new Es(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:me(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class $r{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((r,m)=>$l(e,t,m)),this.acs_.forEach((r,m)=>{Ps({primary:this.value,secondary:r.value,forward:G=>t.assembly.toComponents(G.rawValue)[m],backward:(G,H)=>{const we=t.assembly.toComponents(G.rawValue);return we[m]=H.rawValue,t.assembly.fromComponents(we)}})}),this.view=new Vl(e,{textViews:this.acs_.map(r=>r.view)})}}function Zi(n,e){return"step"in n&&!L(n.step)?new Dn(n.step,e):null}function Ji(n){return!L(n.max)&&!L(n.min)?new ln({max:n.max,min:n.min}):!L(n.max)||!L(n.min)?new cn({max:n.max,min:n.min}):null}function Nl(n){const e=Lt(n,ln);if(e)return[e.values.get("min"),e.values.get("max")];const t=Lt(n,cn);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function ql(n,e){const t=[],r=Zi(n,e);r&&t.push(r);const m=Ji(n);m&&t.push(m);const G=Ar(n.options);return G&&t.push(G),new Yt(t)}const Kl={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=ye,r=ve(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(qs),step:t.optional.number});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Jt,constraint:n=>ql(n.params,n.initialValue),writer:n=>ks},controller:n=>{var e;const t=n.value,r=n.constraint,m=r&&Lt(r,Rn);if(m)return new Un(n.document,{props:new fe({options:m.values.value("options")}),value:t,viewProps:n.viewProps});const G=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:wt(Ks(r,t.rawValue)),H=r&&Lt(r,ln);return H?new Br(n.document,{baseStep:is(r),parser:Gt,sliderProps:new fe({maxValue:H.values.value("max"),minValue:H.values.value("min")}),textProps:fe.fromObject({draggingScale:as(r,t.rawValue),formatter:G}),value:t,viewProps:n.viewProps}):new Es(n.document,{baseStep:is(r),parser:Gt,props:fe.fromObject({draggingScale:as(r,t.rawValue),formatter:G}),value:t,viewProps:n.viewProps})}};class Tn{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(L(e))return!1;const t=e.x,r=e.y;return!(typeof t!="number"||typeof r!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Qi={toComponents:n=>n.getComponents(),fromComponents:n=>new Tn(...n)},ls=K("p2d");class Wl{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ls()),t.viewProps.bindClassModifiers(this.element),de(t.expanded,Te(this.element,ls(void 0,"expanded")));const r=e.createElement("div");r.classList.add(ls("h")),this.element.appendChild(r);const m=e.createElement("button");m.classList.add(ls("b")),m.appendChild(E(e,"p2dpad")),t.viewProps.bindDisabled(m),r.appendChild(m),this.buttonElement=m;const G=e.createElement("div");if(G.classList.add(ls("t")),r.appendChild(G),this.textElement=G,t.pickerLayout==="inline"){const H=e.createElement("div");H.classList.add(ls("p")),this.element.appendChild(H),this.pickerElement=H}else this.pickerElement=null}}const Cn=K("p2dp");class jl{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(Cn()),t.layout==="popup"&&this.element.classList.add(Cn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("div");r.classList.add(Cn("p")),t.viewProps.bindTabIndex(r),this.element.appendChild(r),this.padElement=r;const m=e.createElementNS(M,"svg");m.classList.add(Cn("g")),this.padElement.appendChild(m),this.svgElem_=m;const G=e.createElementNS(M,"line");G.classList.add(Cn("ax")),G.setAttributeNS(null,"x1","0"),G.setAttributeNS(null,"y1","50%"),G.setAttributeNS(null,"x2","100%"),G.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(G);const H=e.createElementNS(M,"line");H.classList.add(Cn("ax")),H.setAttributeNS(null,"x1","50%"),H.setAttributeNS(null,"y1","0"),H.setAttributeNS(null,"x2","50%"),H.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(H);const we=e.createElementNS(M,"line");we.classList.add(Cn("l")),we.setAttributeNS(null,"x1","50%"),we.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(we),this.lineElem_=we;const ze=e.createElement("div");ze.classList.add(Cn("m")),this.padElement.appendChild(ze),this.markerElem_=ze,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),r=this.maxValue_,m=_t(e,-r,+r,0,100),G=_t(t,-r,+r,0,100),H=this.invertsY_?100-G:G;this.lineElem_.setAttributeNS(null,"x2",`${m}%`),this.lineElem_.setAttributeNS(null,"y2",`${H}%`),this.markerElem_.style.left=`${m}%`,this.markerElem_.style.top=`${H}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function ea(n,e,t){return[zt(e[0],dn(n)),zt(e[1],Ss(n))*(t?1:-1)]}class Hl{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new jl(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new zn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const r=this.maxValue_,m=_t(e.point.x,0,e.bounds.width,-r,+r),G=_t(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-r,+r);this.value.setRawValue(new Tn(m,G),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){wi(e.key)&&e.preventDefault();const[t,r]=ea(e,this.baseSteps_,this.invertsY_);t===0&&r===0||this.value.setRawValue(new Tn(this.value.rawValue.x+t,this.value.rawValue.y+r),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,r]=ea(e,this.baseSteps_,this.invertsY_);t===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Yl{constructor(e,t){var r,m;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=rt.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Os(e,{viewProps:this.viewProps}):null;const G=new Hl(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});G.view.allFocusableElements.forEach(H=>{H.addEventListener("blur",this.onPopupChildBlur_),H.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=G,this.textC_=new $r(e,{assembly:Qi,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new Wl(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("blur",this.onPadButtonBlur_),(m=this.view.buttonElement)===null||m===void 0||m.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Ps({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:H=>H.rawValue,backward:(H,we)=>we.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),it(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,r=e.relatedTarget;(!r||!t.contains(r))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,r=ae(e);r&&t.contains(r)||r&&r===this.view.buttonElement&&!f(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class cs{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(L(e))return!1;const t=e.x,r=e.y,m=e.z;return!(typeof t!="number"||typeof r!="number"||typeof m!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const ta={toComponents:n=>n.getComponents(),fromComponents:n=>new cs(...n)};function Xl(n){return cs.isObject(n)?new cs(n.x,n.y,n.z):new cs}function Zl(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function Jl(n,e){return new kn({assembly:ta,components:[pn("x"in n?n.x:void 0,e.x),pn("y"in n?n.y:void 0,e.y),pn("z"in n?n.z:void 0,e.z)]})}function Nr(n,e){return{baseStep:is(e),constraint:e,textProps:fe.fromObject({draggingScale:as(e,n),formatter:wt(Ks(e,n))})}}const Ql={id:"input-point3d",type:"input",accept:(n,e)=>{if(!cs.isObject(n))return null;const t=ye,r=ve(e,{x:t.optional.custom(Sn),y:t.optional.custom(Sn),z:t.optional.custom(Sn)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>Xl,constraint:n=>Jl(n.params,n.initialValue),equals:cs.equals,writer:n=>Zl},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof kn))throw R.shouldNeverHappen();return new $r(n.document,{assembly:ta,axes:[Nr(e.rawValue.x,t.components[0]),Nr(e.rawValue.y,t.components[1]),Nr(e.rawValue.z,t.components[2])],parser:Gt,value:e,viewProps:n.viewProps})}};class us{constructor(e=0,t=0,r=0,m=0){this.x=e,this.y=t,this.z=r,this.w=m}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(L(e))return!1;const t=e.x,r=e.y,m=e.z,G=e.w;return!(typeof t!="number"||typeof r!="number"||typeof m!="number"||typeof G!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const na={toComponents:n=>n.getComponents(),fromComponents:n=>new us(...n)};function ec(n){return us.isObject(n)?new us(n.x,n.y,n.z,n.w):new us}function tc(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function nc(n,e){return new kn({assembly:na,components:[pn("x"in n?n.x:void 0,e.x),pn("y"in n?n.y:void 0,e.y),pn("z"in n?n.z:void 0,e.z),pn("w"in n?n.w:void 0,e.w)]})}function sc(n,e){return{baseStep:is(e),constraint:e,textProps:fe.fromObject({draggingScale:as(e,n),formatter:wt(Ks(e,n))})}}const rc={id:"input-point4d",type:"input",accept:(n,e)=>{if(!us.isObject(n))return null;const t=ye,r=ve(e,{x:t.optional.custom(Sn),y:t.optional.custom(Sn),z:t.optional.custom(Sn),w:t.optional.custom(Sn)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>ec,constraint:n=>nc(n.params,n.initialValue),equals:us.equals,writer:n=>tc},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof kn))throw R.shouldNeverHappen();return new $r(n.document,{assembly:na,axes:e.rawValue.getComponents().map((r,m)=>sc(r,t.components[m])),parser:Gt,value:e,viewProps:n.viewProps})}};function ic(n){const e=[],t=Ar(n.options);return t&&e.push(t),new Yt(e)}const ac={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const r=ve(e,{options:ye.optional.custom(qs)});return r?{initialValue:n,params:r}:null},binding:{reader:n=>gi,constraint:n=>ic(n.params),writer:n=>ks},controller:n=>{const e=n.document,t=n.value,r=n.constraint,m=r&&Lt(r,Rn);return m?new Un(e,{props:new fe({options:m.values.value("options")}),value:t,viewProps:n.viewProps}):new Ln(e,{parser:G=>G,props:fe.fromObject({formatter:Er}),value:t,viewProps:n.viewProps})}},Cs={monitor:{defaultInterval:200,defaultLineCount:3}},sa=K("mll");class oc{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(sa()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("textarea");r.classList.add(sa("i")),r.style.height=`calc(var(--bld-us) * ${t.lineCount})`,r.readOnly=!0,t.viewProps.bindDisabled(r),this.element.appendChild(r),this.textareaElem_=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,r=[];this.value.rawValue.forEach(m=>{m!==void 0&&r.push(this.formatter_(m))}),e.textContent=r.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class qr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new oc(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const ra=K("sgl");class lc{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(ra()),t.viewProps.bindClassModifiers(this.element);const r=e.createElement("input");r.classList.add(ra("i")),r.readOnly=!0,r.type="text",t.viewProps.bindDisabled(r),this.element.appendChild(r),this.inputElement=r,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Kr{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new lc(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const cc={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const r=ve(e,{lineCount:ye.optional.number});return r?{initialValue:n,params:r}:null},binding:{reader:n=>vs},controller:n=>{var e;return n.value.rawValue.length===1?new Kr(n.document,{formatter:gs,value:n.value,viewProps:n.viewProps}):new qr(n.document,{formatter:gs,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Cs.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},Bn=K("grl");class uc{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Bn()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const r=e.createElementNS(M,"svg");r.classList.add(Bn("g")),r.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(r),this.svgElem_=r;const m=e.createElementNS(M,"polyline");this.svgElem_.appendChild(m),this.lineElem_=m;const G=e.createElement("div");G.classList.add(Bn("t"),K("tt")()),this.element.appendChild(G),this.tooltipElem_=G,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,r=this.props_.get("minValue"),m=this.props_.get("maxValue"),G=[];this.value.rawValue.forEach((st,ot)=>{if(st===void 0)return;const $n=_t(ot,0,t,0,e.width),Bs=_t(st,r,m,e.height,0);G.push([$n,Bs].join(","))}),this.lineElem_.setAttributeNS(null,"points",G.join(" "));const H=this.tooltipElem_,we=this.value.rawValue[this.cursor_.rawValue];if(we===void 0){H.classList.remove(Bn("t","a"));return}const ze=_t(this.cursor_.rawValue,0,t,0,e.width),Oe=_t(we,r,m,e.height,0);H.style.left=`${ze}px`,H.style.top=`${Oe}px`,H.textContent=`${this.formatter_(we)}`,H.classList.contains(Bn("t","a"))||(H.classList.add(Bn("t","a"),Bn("t","in")),o(H),H.classList.remove(Bn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class dc{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=me(-1),this.view=new uc(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!f(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const r=new zn(this.view.element);r.emitter.on("down",this.onGraphPointerDown_),r.emitter.on("move",this.onGraphPointerMove_),r.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(_t(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(_t(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Wr(n){return"format"in n&&!L(n.format)?n.format:wt(2)}function pc(n){var e;return n.value.rawValue.length===1?new Kr(n.document,{formatter:Wr(n.params),value:n.value,viewProps:n.viewProps}):new qr(n.document,{formatter:Wr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Cs.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function hc(n){var e,t,r;return new dc(n.document,{formatter:Wr(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Cs.monitor.defaultLineCount,props:fe.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(r="min"in n.params?n.params.min:null)!==null&&r!==void 0?r:0}),value:n.value,viewProps:n.viewProps})}function ia(n){return"view"in n&&n.view==="graph"}const fc={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=ye,r=ve(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return r?{initialValue:n,params:r}:null},binding:{defaultBufferSize:n=>ia(n)?64:1,reader:n=>Jt},controller:n=>ia(n.params)?hc(n):pc(n)},_c={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=ye,r=ve(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return r?{initialValue:n,params:r}:null},binding:{reader:n=>gi},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new qr(n.document,{formatter:Er,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:Cs.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new Kr(n.document,{formatter:Er,value:t,viewProps:n.viewProps})}};function mc(n,e){var t;const r=n.accept(e.target.read(),e.params);if(L(r))return null;const m=ye,G={target:e.target,initialValue:r.initialValue,params:r.params},H=n.binding.reader(G),we=n.binding.constraint?n.binding.constraint(G):void 0,ze=me(H(r.initialValue),{constraint:we,equals:n.binding.equals}),Oe=new br({reader:H,target:e.target,value:ze,writer:n.binding.writer(G)}),st=m.optional.boolean(e.params.disabled).value,ot=m.optional.boolean(e.params.hidden).value,$n=n.controller({constraint:we,document:e.document,initialValue:r.initialValue,params:r.params,value:Oe.value,viewProps:p.create({disabled:st,hidden:ot})});return new at(e.document,{binding:Oe,blade:Ve(),props:fe.fromObject({label:"label"in e.params?(t=m.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:$n})}function bc(n,e){return e===0?new Mn:new wn(n,e??Cs.monitor.defaultInterval)}function vc(n,e){var t,r,m;const G=ye,H=n.accept(e.target.read(),e.params);if(L(H))return null;const we={target:e.target,initialValue:H.initialValue,params:H.params},ze=n.binding.reader(we),Oe=(r=(t=G.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(H.params))!==null&&r!==void 0?r:1,st=G.optional.number(e.params.interval).value,ot=new Fs({reader:ze,target:e.target,ticker:bc(e.document,st),value:vr(Oe)}),$n=G.optional.boolean(e.params.disabled).value,Bs=G.optional.boolean(e.params.hidden).value,As=n.controller({document:e.document,params:H.params,value:ot.value,viewProps:p.create({disabled:$n,hidden:Bs})});return new dt(e.document,{binding:ot,blade:Ve(),props:fe.fromObject({label:"label"in e.params?(m=G.optional.string(e.params.label).value)!==null&&m!==void 0?m:null:e.target.key}),valueController:As})}class gc{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,r){const m=t.read();if(L(m))throw new R({context:{key:t.key},type:"nomatchingcontroller"});const G=this.pluginsMap_.inputs.reduce((H,we)=>H??mc(we,{document:e,target:t,params:r}),null);if(G)return G;throw new R({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,r){const m=this.pluginsMap_.monitors.reduce((G,H)=>G??vc(H,{document:e,params:r,target:t}),null);if(m)return m;throw new R({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const r=this.pluginsMap_.blades.reduce((m,G)=>m??ts(G,{document:e,params:t}),null);if(!r)throw new R({type:"nomatchingview",context:{params:t}});return r}createBladeApi(e){if(e instanceof at)return new nt(e);if(e instanceof dt)return new ct(e);if(e instanceof Je)return new vt(e,this);const t=this.pluginsMap_.blades.reduce((r,m)=>r??m.api({controller:e,pool:this}),null);if(!t)throw R.shouldNeverHappen();return t}}function wc(){const n=new gc;return[kc,Ql,rc,ac,Kl,Ol,Fl,Ll,Uo,cc,_c,fc,ke,mn,Xn,es].forEach(e=>{n.register(e)}),n}function xc(n){return Tn.isObject(n)?new Tn(n.x,n.y):new Tn}function yc(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function pn(n,e){if(!n)return;const t=[],r=Zi(n,e);r&&t.push(r);const m=Ji(n);return m&&t.push(m),new Yt(t)}function Pc(n,e){return new kn({assembly:Qi,components:[pn("x"in n?n.x:void 0,e.x),pn("y"in n?n.y:void 0,e.y)]})}function aa(n,e){const[t,r]=n?Nl(n):[];if(!L(t)||!L(r))return Math.max(Math.abs(t??0),Math.abs(r??0));const m=is(n);return Math.max(Math.abs(m)*10,Math.abs(e)*10)}function Sc(n,e){const t=e instanceof kn?e.components[0]:void 0,r=e instanceof kn?e.components[1]:void 0,m=aa(t,n.x),G=aa(r,n.y);return Math.max(m,G)}function oa(n,e){return{baseStep:is(e),constraint:e,textProps:fe.fromObject({draggingScale:as(e,n),formatter:wt(Ks(e,n))})}}function Ec(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const kc={id:"input-point2d",type:"input",accept:(n,e)=>{if(!Tn.isObject(n))return null;const t=ye,r=ve(e,{expanded:t.optional.boolean,picker:t.optional.custom(Pi),x:t.optional.custom(Sn),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return r?{initialValue:n,params:r}:null},binding:{reader:n=>xc,constraint:n=>Pc(n.params,n.initialValue),equals:Tn.equals,writer:n=>yc},controller:n=>{const e=n.document,t=n.value,r=n.constraint;if(!(r instanceof kn))throw R.shouldNeverHappen();const m="expanded"in n.params?n.params.expanded:void 0,G="picker"in n.params?n.params.picker:void 0;return new Yl(e,{axes:[oa(t.rawValue.x,r.components[0]),oa(t.rawValue.y,r.components[1])],expanded:m??!1,invertsY:Ec(n.params),maxValue:Sc(t.rawValue,r),parser:Gt,pickerLayout:G??"popup",value:t,viewProps:n.viewProps})}};class la extends l{constructor(e){super(e),this.emitter_=new V,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new y(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}}class ca extends l{constructor(e){super(e),this.emitter_=new V,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new y(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}}class ua extends l{constructor(e){super(e),this.emitter_=new V,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new y(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const r=t.bind(this);return this.emitter_.on(e,m=>{r(m.event)}),this}}const Tc=function(){return{id:"list",type:"blade",accept(n){const e=ye,t=ve(n,{options:e.required.custom(qs),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Rn(Si(n.params.options)),t=me(n.params.value,{constraint:e}),r=new Un(n.document,{props:new fe({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Ht(n.document,{blade:n.blade,props:fe.fromObject({label:n.params.label}),valueController:r})},api(n){return!(n.controller instanceof Ht)||!(n.controller.valueController instanceof Un)?null:new la(n.controller)}}}();function Cc(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function Bc(n,e){n.forEach(t=>{const r=e[t.target.presetKey];r!==void 0&&t.writer(t.target,t.reader(r))})}class Ac extends Rt{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(at).map(r=>r.binding);Bc(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(at).map(t=>t.binding.target);return Cc(e)}refresh(){this.controller_.rackController.rack.find(at).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(dt).forEach(e=>{e.binding.read()})}}class Mc extends nn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const Rc={id:"slider",type:"blade",accept(n){const e=ye,t=ve(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const r=(e=n.params.value)!==null&&e!==void 0?e:0,m=new ln({max:n.params.max,min:n.params.min}),G=new Br(n.document,{baseStep:1,parser:Gt,sliderProps:new fe({maxValue:m.values.value("max"),minValue:m.values.value("min")}),textProps:fe.fromObject({draggingScale:as(void 0,r),formatter:(t=n.params.format)!==null&&t!==void 0?t:rs}),value:me(r,{constraint:m}),viewProps:n.viewProps});return new Ht(n.document,{blade:n.blade,props:fe.fromObject({label:n.params.label}),valueController:G})},api(n){return!(n.controller instanceof Ht)||!(n.controller.valueController instanceof Br)?null:new ca(n.controller)}},Dc=function(){return{id:"text",type:"blade",accept(n){const e=ye,t=ve(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new Ln(n.document,{parser:n.params.parse,props:fe.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:r=>String(r)}),value:me(n.params.value),viewProps:n.viewProps});return new Ht(n.document,{blade:n.blade,props:fe.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Ht)||!(n.controller.valueController instanceof Ln)?null:new ua(n.controller)}}}();function Uc(n){const e=n.createElement("div");return e.classList.add(K("dfw")()),n.body&&n.body.appendChild(e),e}function da(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const r=n.createElement("style");r.dataset.tpStyle=e,r.textContent=t,n.head.appendChild(r)}class Lc extends Ac{constructor(e){var t,r;const m=e??{},G=(t=m.document)!==null&&t!==void 0?t:d(),H=wc(),we=new Mc(G,{expanded:m.expanded,blade:Ve(),props:fe.fromObject({title:m.title}),viewProps:p.create()});super(we,H),this.pool_=H,this.containerElem_=(r=m.container)!==null&&r!==void 0?r:Uc(G),this.containerElem_.appendChild(this.element),this.doc_=G,this.usesDefaultWrapper_=!m.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw R.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw R.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(r=>{this.pool_.register(r),this.embedPluginStyle_(r)})}embedPluginStyle_(e){e.css&&da(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){da(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[Rc,Tc,es,Dc]})}}const Gc=new u("3.1.10");a.BladeApi=l,a.ButtonApi=Z,a.FolderApi=Rt,a.InputBindingApi=nt,a.ListApi=la,a.MonitorBindingApi=ct,a.Pane=Lc,a.SeparatorApi=bn,a.SliderApi=ca,a.TabApi=Jn,a.TabPageApi=Zn,a.TextApi=ua,a.TpChangeEvent=y,a.VERSION=Gc,Object.defineProperty(a,"__esModule",{value:!0})})})(ci,ci.exports);var fo=ci.exports;const Ku=`// 2DGS preprocess — per-alive-Gauss view-dependent color eval.
//
// Cull writes a compacted alive list with per-Gauss metadata into Splat2DGS
// + SHSolver buffers; this stage runs only over alive Gausses (indirect-
// dispatched), evaluates the per-Gauss color from EITHER:
//
//   feature_mode = 0 (SV): Spherical Voronoi softmax over K sites with
//      per-site colors and per-site τ scalars. Result per-Gauss is
//      \`max(0, Σ_k W_k·color_k + sh_bias)\`. Mirrors nest's
//      \`eval_voronoi_sv_feat\`.
//
//   feature_mode = 1 (SB): SH degree-3 base color plus K spherical-beta
//      directional lobes. Result per-Gauss is
//      \`max(0, eval_sh(view_dir, coefs) + sh_bias) + eval_sb(view_dir, lobes)\`.
//      Matches diff_surfel_bake_render's preprocessCUDA: SH is clamped first
//      (the inner ReLU), the SB sum is added unclamped on top, and the
//      fragment shader applies the outer \`max(0, color + atlas + res_bias)\`.
//
// In both modes the per-Gauss RGB is packed as f16 into Splat2DGS.color_*.
// The render fragment shader reads from there and never re-evaluates color —
// SV/SB eval is per-Gauss, not per-pixel, mirroring the CUDA path's design.

struct GeneralInfo {
  keys_size  : u32,
  dispatch_x : u32, dispatch_y : u32, dispatch_z : u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

const WG_SIZE : u32 = 256u;

struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};

// 32-byte RenderSettings (matches render-settings.ts canonical layout).
//   0  vec2<u32> canvas_size
//   8  u32       accel_flags    (consumed by surfel_cull; unused here)
//   12 u32       feature_mode   (0 = SV, 1 = SB, 2 = NASG)
//   16 f32       gaussian_scaling
//   20 f32       sh_bias
//   24 u32       color_K        (K — sites for SV, lobes for SB)
//   28 f32       walltime
struct RenderSettings {
  canvas_size      : vec2<u32>,
  accel_flags      : u32,
  feature_mode     : u32,
  gaussian_scaling : f32,
  sh_bias          : f32,
  color_K          : u32,
  walltime         : f32,
  // --xclip (2026-11-04): exact half-space clip, camera space. clip_plane = (a,b,c,d) with the
  // fragment REMOVED where a*x+b*y+c*z+d > 0 at its ray-surfel hit (kept half n.x+d <= 0, the
  // nest-splatting Camera.clip_plane convention, transformed per frame by the host).
  // clip_intr = (fx, fy, cx, cy) in render-target pixels; clip_intr.x == 0 => clip off.
  clip_plane       : vec4<f32>,
  clip_intr        : vec4<f32>,
};

// Splat2DGS — MUST match surfel_cull.wgsl + render_2dgs.wgsl + host TS
// (C_SIZE_2D_SPLAT = 96 in gaussian-renderer.ts).  Fields uv_base_*,
// uv_scale_*, layer are the atlas-UV precompute added 2026-07-23: this
// preprocess pass fills them so the fragment shader can do a single
// \`uv = uv_base + s * uv_scale\` mad + texture sample (see file header of
// render_2dgs.wgsl).
struct Splat2DGS {
  tu_x : f32, tu_y : f32, tu_z : f32,
  tv_x : f32, tv_y : f32, tv_z : f32,
  tw_x : f32, tw_y : f32, tw_z : f32,
  opacity      : f32,
  pos          : u32,   // 2× i16 snorm center_pix/8192 (¼-px fixed point; cull packs, render unpacks)
  extent       : u32,
  color_rg     : u32,
  color_b_shape: u32,
  gauss_id     : u32,
  depth_u      : f32,
  depth_v      : f32,
  depth_center : f32,
  uv_base_x    : f32,
  uv_base_y    : f32,
  uv_scale_x   : f32,
  uv_scale_y   : f32,
  layer        : u32,
  _pad         : u32,
};

struct SHSolver {
  dir_xy        : u32,
  dir_z_opacity : u32,
  idx           : u32,
};

// AtlasParams — same layout as gaussian-renderer.ts writes for this pass.
// Everything is a per-frame uniform; \`atlas_width\` and \`atlas_layer_h\` are
// zero when the bundle has no atlas (or user disabled it), which causes this
// pass to skip writing the UV-precomp fields (fragment shader gate will
// short-circuit via TexParams.atlas_enabled).
struct AtlasParams {
  atlas_width   : u32,      // texture_2d_array width in texels; 0 = no atlas
  atlas_layer_h : u32,      // per-layer height in texels
  uv_extent     : f32,      // surfel-uv cutoff used at bake time (≈ 4.0)
  // 0 = baked: atlas_rects is stride 5 (u0, v0, w, h, layer), diagonal affine.
  // 1 = proberes: atlas_rects is stride 6 (A00, A01, A10, A11, t0, t1),
  //     ALREADY divided by tex_res by the exporter, so we pass it straight
  //     through with no arithmetic. Single-layer texture, layer always 0.
  // 2 = proberes+WSR: stride 7 — same 6 affine floats + per-surfel occlusion
  //     (read by fs_wsr in the render pass, not here).
  probe_mode    : u32,
  // Baked atlases exported with --mips: number of levels (1 = level 0 only / mips toggled off).
  mip_count     : u32,
  // Levels subtracted from the per-surfel choice (0 = round(log2 texels/pixel)). The finetune
  // optimised the texels for level-0 point sampling, so full prefiltering loses detail the
  // model relies on; a bias keeps level 0 until a surfel is minified by 2^(bias+0.5) or more.
  lod_bias      : f32,
  // 1 = anisotropic fetch (render mip_mode 2): the per-surfel slot carries the tile's LEVEL CAP instead of a level.
  aniso         : u32,
  _p2 : u32,
};

@group(0) @binding(0) var<uniform> camera          : CameraUniforms;
@group(0) @binding(1) var<uniform> render_settings : RenderSettings;

@group(1) @binding(0) var<storage, read>       sort_infos : GeneralInfo;
@group(1) @binding(1) var<storage, read>       sh_solvers : array<SHSolver>;
@group(1) @binding(2) var<storage, read_write> splats_2d  : array<Splat2DGS>;
@group(1) @binding(3) var<storage, read>       color_params : array<f32>;

// Atlas rects laid out as fp32 [N, 5] rows: (u0, v0, w_span, h_span, layer).
// Same buffer the fragment shader used to fetch per-pixel; now consumed here
// once per alive Gauss.
@group(1) @binding(4) var<storage, read>       atlas_rects : array<f32>;
@group(1) @binding(5) var<uniform>             atlas_params : AtlasParams;
// Surfel records (8 × u32 each; x,y,z are the first three f32). Read only by the NASG path,
// which needs the view direction in f32: the SHSolver copy is f16-packed, and sharp Gabor
// lobes (k up to 40) turned that quantisation into colour errors up to ~1.0.
@group(1) @binding(6) var<storage, read>       surfels_raw  : array<f32>;
//#if PACKED
// 64 B per alive slot: the fragment record the PACKED render variant reads instead of Splat2DGS
// (layout in render_2dgs.wgsl unpack_packed).
@group(1) @binding(7) var<storage, read_write> splats_frag  : array<vec4<u32>>;
//#endif

// =============================================================================
// SV evaluation — feature_mode == 0
// Layout per Gauss (stride K*7): K sites (3 ea) + K colors (3 ea) + K taus (1 ea).
// =============================================================================
fn eval_sv(gauss_id: u32, view_dir: vec3<f32>, K: u32, sh_bias: f32) -> vec3<f32> {
    if K == 0u { return vec3<f32>(0.0); }
    let stride    = K * 7u;
    let base      = gauss_id * stride;
    let sites_ofs = base;
    let cols_ofs  = base + K * 3u;
    let taus_ofs  = base + K * 6u;

    var logits : array<f32, 8>;     // K ≤ 8 supported.
    var lmax   = -3.4e38;
    for (var k = 0u; k < K; k = k + 1u) {
        let s = vec3<f32>(
            color_params[sites_ofs + k * 3u + 0u],
            color_params[sites_ofs + k * 3u + 1u],
            color_params[sites_ofs + k * 3u + 2u],
        );
        let s_unit = s * inverseSqrt(max(dot(s, s), 1e-20));
        let tau    = exp(color_params[taus_ofs + k]);
        let d      = s_unit - view_dir;
        let dist   = sqrt(max(dot(d, d), 0.0));
        let lg     = -tau * dist;
        logits[k]  = lg;
        if lg > lmax { lmax = lg; }
    }

    var w_sum = 0.0;
    var feat  = vec3<f32>(0.0);
    for (var k = 0u; k < K; k = k + 1u) {
        let w = exp(logits[k] - lmax);
        w_sum = w_sum + w;
        let c = vec3<f32>(
            color_params[cols_ofs + k * 3u + 0u],
            color_params[cols_ofs + k * 3u + 1u],
            color_params[cols_ofs + k * 3u + 2u],
        );
        feat = feat + w * c;
    }
    feat = feat / max(w_sum, 1e-20);
    return max(vec3<f32>(0.0), feat + vec3<f32>(sh_bias));
}

// =============================================================================
// SH-DC evaluation — used in SB mode.
//
// nest-splatting freezes f_rest_* (degrees 1–3) at zero during \`--feature
// beta\` training (gaussian_model.py:824), so we evaluate ONLY the DC term:
//   color = SH_C0 · (dc_r, dc_g, dc_b)
// The SB lobes carry the entire view-dependent contribution; the atlas
// residual carries the spatial high-frequency detail.
//
// Per-Gauss buffer base = gauss_id * (3 + K*6); DC at offsets 0..2,
// SB lobes start at offset 3.
// =============================================================================
const SH_C0 : f32 = 0.28209479177387814;

fn eval_sh_dc(coef_base: u32) -> vec3<f32> {
    return SH_C0 * vec3<f32>(
        color_params[coef_base + 0u],
        color_params[coef_base + 1u],
        color_params[coef_base + 2u],
    );
}

// =============================================================================
// SB lobe evaluation — used in SB mode.
// Per-lobe: (r, g, b, theta, phi, beta_raw). Formula matches Python eval_sb
// and CUDA eval_sb in diff_surfel_bake_render/forward.cu:
//   rgb_steep = softplus_steep(r,g,b)        (steep = 10·ln(2))
//   mu        = (sin θ cos φ, sin θ sin φ, cos θ)
//   dot       = mu · view_dir
//   contrib   = (dot > 0 ? dot^(4·exp(beta_raw)) : 0) · rgb_steep
//   sum across K lobes.
// =============================================================================
fn softplus_steep(x: f32) -> f32 {
    // β = 10·ln(2) ≈ 6.9314718. softplus = log(1 + exp(β·x)) / β.
    let s = 6.9314718;
    return log(1.0 + exp(s * x)) / s;
}

fn eval_sb(lobe_base: u32, K: u32, view_dir: vec3<f32>) -> vec3<f32> {
    var rgb = vec3<f32>(0.0);
    for (var k = 0u; k < K; k = k + 1u) {
        let p = lobe_base + k * 6u;
        let r       = color_params[p + 0u];
        let g       = color_params[p + 1u];
        let b       = color_params[p + 2u];
        let theta   = color_params[p + 3u];
        let phi     = color_params[p + 4u];
        let beta_r  = color_params[p + 5u];
        let beta    = 4.0 * exp(beta_r);
        let st = sin(theta); let ct = cos(theta);
        let sp = sin(phi);   let cp = cos(phi);
        let mu = vec3<f32>(st * cp, st * sp, ct);
        let d  = dot(mu, view_dir);
        if d > 0.0 {
            let w = pow(max(d, 1e-12), beta);
            rgb = rgb + vec3<f32>(softplus_steep(r), softplus_steep(g), softplus_steep(b)) * w;
        }
    }
    return rgb;
}

// =============================================================================
// NASG-Gabor lobe evaluation — feature_mode == 2 (\`--feature nasg\`).
// Per-Gauss stride 3 + K*9: SH-DC (3) then K lobes of
//   (cosθ, cosϕ, cosτ, λ_raw, a_raw, k_raw, r, g, b).
// Port of nest-splatting gaussian_renderer.eval_nasg (itself a port of
// ../NASGabor spherical_nasg_gabor.cuh::nasg_gabor_fwd, without c0):
//   λ = min(e^λ_raw, 1e4), a = min(e^a_raw, 1e4), k = 20·(tanh k_raw + 1),
//   pdf = exp(2λ(K^(e+a·vx²/(1−vz²))·K − 1)) · K^(…) · ½(1+cos(k·vx)) · λ√(1+a)/(2π(1+1e-8−e^{−2λ}))
//   with K = (vz+1)/2; pole mask vz ≥ 1−1e-7 → pdf 1, vz ≤ −1+1e-7 → 0.
// The lobe sum goes INSIDE the inner clamp: max(0, SH_C0·dc + sh_bias + Σ pdf·rgb)
// (training injects it into the SH DC slot).
// =============================================================================
fn eval_nasg(lobe_base: u32, K: u32, d: vec3<f32>) -> vec3<f32> {
    var rgb = vec3<f32>(0.0);
    for (var i = 0u; i < K; i = i + 1u) {
        let p  = lobe_base + i * 9u;
        let ct = clamp(color_params[p + 0u], -0.999999, 0.999999);
        let cp = clamp(color_params[p + 1u], -0.999999, 0.999999);
        let cu = clamp(color_params[p + 2u], -0.999999, 0.999999);
        let st = sqrt(1.0 - ct * ct);
        let sp = sqrt(1.0 - cp * cp);
        let su = sqrt(1.0 - cu * cu);
        let x  = vec3<f32>(ct * cp * cu - st * su, st * cp * cu + ct * su, -sp * cu);
        let z  = vec3<f32>(ct * sp, st * sp, cp);
        let lam = min(exp(color_params[p + 3u]), 1e4);
        let a   = min(exp(color_params[p + 4u]), 1e4);
        let k   = (tanh(color_params[p + 5u]) + 1.0) * 20.0;
        let col = vec3<f32>(color_params[p + 6u], color_params[p + 7u], color_params[p + 8u]);
        let vz = dot(d, z);
        let vx = dot(d, x);
        var pdf = 0.0;
        if vz >= 1.0 - 1e-7 {
            pdf = 1.0;
        } else if vz > -1.0 + 1e-7 {
            let vzs    = clamp(vz, -1.0 + 1e-6, 1.0 - 1e-6);
            let kb     = (vzs + 1.0) * 0.5;
            let kexp   = 5e-6 + a * vx * vx / (1.0 - vzs * vzs);
            let ev     = pow(kb, kexp);
            let inv_n  = lam * sqrt(1.0 + a) / (6.283185307179586 * (1.0 + 1e-8 - exp(-2.0 * lam)));
            let gabor  = (1.0 + cos(k * vx)) * 0.5;
            pdf = exp(2.0 * lam * (ev * kb - 1.0)) * ev * gabor * inv_n;
        }
        rgb = rgb + pdf * col;
    }
    return rgb;
}

@compute @workgroup_size(WG_SIZE)
fn preprocess(@builtin(global_invocation_id) gid: vec3<u32>) {
    let store_idx = gid.x;
    if store_idx >= sort_infos.keys_size { return; }

    let solver = sh_solvers[store_idx];
    let dir_op = vec4<f32>(unpack2x16float(solver.dir_xy), unpack2x16float(solver.dir_z_opacity));
    let dir    = dir_op.xyz;
    let v_idx  = solver.idx;

    var rgb : vec3<f32>;
    if render_settings.feature_mode == 2u {
        // NASG: per-Gauss stride = 3 + K*9 floats. DC at 0..2, lobes at 3+.
        let K = render_settings.color_K;
        let base = v_idx * (3u + K * 9u);
        let pw = vec3<f32>(surfels_raw[v_idx * 8u + 0u], surfels_raw[v_idx * 8u + 1u], surfels_raw[v_idx * 8u + 2u]);
        let dir32 = normalize(pw - camera.view_inv[3].xyz);
        rgb = max(vec3<f32>(0.0), eval_sh_dc(base) + vec3<f32>(render_settings.sh_bias) + eval_nasg(base + 3u, K, dir32));
    } else if render_settings.feature_mode == 1u {
        // SB: per-Gauss stride = 3 + K*6 floats. DC at offset 0..2, SB lobes at 3+.
        let K = render_settings.color_K;
        let base = v_idx * (3u + K * 6u);
        let sh_color = max(vec3<f32>(0.0), eval_sh_dc(base) + vec3<f32>(render_settings.sh_bias));
        let sb_color = eval_sb(base + 3u, K, dir);
        // Inner clamp on SH only — matches CUDA preprocessCUDA. The fragment
        // shader applies the outer \`max(0, color + atlas + res_bias)\`.
        rgb = sh_color + sb_color;
    } else {
        rgb = eval_sv(v_idx, dir, render_settings.color_K, render_settings.sh_bias);
    }

    // Preserve the shape value the cull pass packed alongside (zeroed) color.b.
    let prev  = unpack2x16float(splats_2d[store_idx].color_b_shape);
    let shape = prev.y;
    splats_2d[store_idx].color_rg      = pack2x16float(vec2<f32>(rgb.r, rgb.g));
    splats_2d[store_idx].color_b_shape = pack2x16float(vec2<f32>(rgb.b, shape));

    // Atlas UV precomputation — fold everything Gauss-uniform in the atlas UV
    // mapping into (uv_base, uv_scale). Fragment does \`uv = uv_base + s * uv_scale\`
    // (2 fmadd) then one HW texture fetch. Kills 5 storage-buffer reads + 2
    // fp32 divides per fragment vs the pre-2026-07-23 shader that fetched
    // atlas_rects and normalised divisors per pixel.
    //
    // Derivation, per axis, s = surfel-uv in [−E, E]:
    //   au = u0 + (s + E) / (2E) * w_span            (atlas pixel)
    //   uv = (au + 0.5) / atlas_width                (normalised)
    //      = ((u0 + 0.5 + w_span/2)          + s * (w_span / (2E))) / atlas_width
    //      = uv_base                          + s * uv_scale
    // where uv_base and uv_scale are Gauss-uniform.
    //
    // Untextured mixed_3d Gauss and no-atlas bundles: cull writes gauss_id with
    // its high bit set OR the bundle has atlas_width=0. Either way we skip the
    // rect fetch and write sentinel zeros — fragment gates on tex_params.atlas_enabled.
    // NB: don't reuse \`gid\` here — that's the workgroup-builtin param name.
    let gid_raw   = splats_2d[store_idx].gauss_id;
    let is_texd   = (gid_raw & 0x80000000u) == 0u;
    let src_gauss = gid_raw & 0x3FFFFFFFu;   // bit 31 = untextured EWA, bit 30 = --tex3d kernel
    if is_texd && atlas_params.atlas_width > 0u && atlas_params.probe_mode != 0u {
        // Proberes: stage the per-surfel affine into Splat2DGS so the fragment
        // needs ZERO storage-buffer reads (the baked path's whole reason for
        // the UV precompute). The 6 probe floats fit the 6 free slots exactly:
        // 4 f32 + the layer/_pad u32 pair, reinterpreted via bitcast. Safe
        // because this atlas is single-layer, so \`layer\` is identically 0 and
        // the fragment hardcodes layer = 0 under probe_mode.
        // Values are already divided by tex_res by the exporter.
        // probe_mode 2 (WSR) = stride-7 records (6 affine floats + occlusion).
        // probe_mode 3 (pair format) = stride-21 records: 6 affine floats + a 3x4 matrix and bias (15) read by the fragment.
        let po = src_gauss * select(select(6u, 7u, atlas_params.probe_mode == 2u), 21u, atlas_params.probe_mode == 3u);
        splats_2d[store_idx].uv_base_x  = atlas_rects[po + 4u];                 // t0
        splats_2d[store_idx].uv_base_y  = atlas_rects[po + 5u];                 // t1
        splats_2d[store_idx].uv_scale_x = atlas_rects[po + 0u];                 // A00
        splats_2d[store_idx].uv_scale_y = atlas_rects[po + 3u];                 // A11
        splats_2d[store_idx].layer      = bitcast<u32>(atlas_rects[po + 1u]);   // A01
        splats_2d[store_idx]._pad       = bitcast<u32>(atlas_rects[po + 2u]);   // A10
    } else if is_texd && atlas_params.atlas_width > 0u {
        let base_off = src_gauss * 5u;
        let u0     = atlas_rects[base_off + 0u];
        let v0     = atlas_rects[base_off + 1u];
        let w_span = atlas_rects[base_off + 2u];
        let h_span = atlas_rects[base_off + 3u];
        let layer  = u32(atlas_rects[base_off + 4u]);
        let E      = atlas_params.uv_extent;
        let inv_w  = 1.0 / f32(atlas_params.atlas_width);
        let inv_h  = 1.0 / f32(atlas_params.atlas_layer_h);
        let inv_2E = 1.0 / (2.0 * E);
        // ---- per-surfel mip level (typeD bundles exported with --mips) ----------------
        // The cull stores the CONIC form of the ray-splat (surfel_cull.wgsl): tu = (u0, v0, J⁻¹00),
        // tv = (J⁻¹01, J⁻¹10, J⁻¹11), with s = (u0, v0) + J⁻¹·Δpix / (1 + dw·Δpix). At the centre,
        // uv moves J⁻¹ per pixel, so texel motion per pixel is diag(w, h)/2E · J⁻¹ and the
        // minification is its larger column norm (the pixel axis that sweeps most texels).
        // ONE integer level per surfel (nearest-level sampler → still a single bilinear
        // fetch), rounded, clamped to the levels shipped and to the tile's own alignment:
        // the box filter is per-tile exact only up to countTrailingZeros(u0 | v0 | w | h).
        var lod = 0.0;
        var fx  = 1.0;
        var fy  = 1.0;
        if (atlas_params.mip_count > 1u || atlas_params.aniso != 0u) && w_span >= 2.0 && h_span >= 2.0 {
            let sp   = splats_2d[store_idx];
            let kx   = w_span * inv_2E;
            let ky   = h_span * inv_2E;
            let c0   = vec2<f32>(kx * sp.tu_z, ky * sp.tv_y);   // d(texel)/d(pix.x): (J⁻¹00, J⁻¹10)
            let c1   = vec2<f32>(kx * sp.tv_x, ky * sp.tv_z);   // d(texel)/d(pix.y): (J⁻¹01, J⁻¹11)
            let tpp  = max(length(c0), length(c1));
            let amax = countTrailingZeros(u32(u0) | u32(v0) | u32(w_span) | u32(h_span));
            // ...and down to ONE texel on the short side (a 64x4 tile ends at 16x1): level l of a tile
            // is exact as long as the tile is 2^l-aligned (amax) and 2^l <= its short side (side).
            // (Until 2026-11-09 the chain stopped at a 4-texel short side to match the --mip_view_lod
            // training pyramid; that left 4 texels/pixel unfiltered on zoomed-out 16-64 px tiles.)
            let side = countTrailingZeros(u32(min(w_span, h_span)));
            let lmax = f32(min(min(atlas_params.mip_count - 1u, amax), side));
            lod = clamp(floor(log2(max(tpp, 1.0)) + 0.5 - atlas_params.lod_bias), 0.0, lmax);
            // Per-pixel modes (anisotropic 2 / textbook trilinear 3): the fragment picks the level; hand it the cap only.
            lod = select(lod, lmax, atlas_params.aniso != 0u);
            // Level-l tiles stay inside their rect by the fragment's CLAMP (half a level-l texel
            // in from each edge, the CUDA/training convention), not by shrinking the uv span.
        }
        // Texel i of the bake sits at s_i = (i + ½)·2E/w − E, i.e. at atlas x = u0 + w/2 + s·w/2E
        // (normalised: ÷ width; texel i's centre is at i + ½). Matches CUDA / Vulkan
        // (u0 − ½ + w/2 base, sampled at au + ½). The pre-2026-09-19 base carried an extra +½:
        // every fetch was half a texel off (−0.7 dB vs CUDA on garden). w = 0 (no texture)
        // keeps pointing at texel (u0, v0)'s centre.
        splats_2d[store_idx].uv_base_x  = (u0 + 0.5 * max(w_span, 1.0)) * inv_w;
        splats_2d[store_idx].uv_base_y  = (v0 + 0.5 * max(h_span, 1.0)) * inv_h;
        splats_2d[store_idx].uv_scale_x = w_span * fx * inv_2E * inv_w;
        splats_2d[store_idx].uv_scale_y = h_span * fy * inv_2E * inv_h;
        splats_2d[store_idx].layer      = layer;
        splats_2d[store_idx]._pad       = bitcast<u32>(lod);   // render reads it as sp.lod
    } else {
        splats_2d[store_idx].uv_base_x  = 0.0;
        splats_2d[store_idx].uv_base_y  = 0.0;
        splats_2d[store_idx].uv_scale_x = 0.0;
        splats_2d[store_idx].uv_scale_y = 0.0;
        splats_2d[store_idx].layer      = 0u;
        splats_2d[store_idx]._pad       = 0u;
    }
//#if PACKED
    {
        let r = splats_2d[store_idx];
        let b = store_idx * 4u;
        splats_frag[b]      = vec4<u32>(pack2x16float(vec2<f32>(r.tu_x, r.tu_y)), pack2x16float(vec2<f32>(r.tu_z, r.tv_x)),
                                        pack2x16float(vec2<f32>(r.tv_y, r.tv_z)), pack2x16float(vec2<f32>(r.tw_x, r.tw_y)));
        splats_frag[b + 1u] = vec4<u32>(r.pos, r.color_rg, r.color_b_shape, pack2x16float(vec2<f32>(r.opacity, bitcast<f32>(r._pad))));
        splats_frag[b + 2u] = vec4<u32>(pack2x16float(vec2<f32>(r.depth_u, r.depth_v)), pack2x16float(vec2<f32>(r.depth_center, r.tw_z)),
                                        r.gauss_id, r.layer);
        splats_frag[b + 3u] = vec4<u32>(bitcast<u32>(r.uv_base_x), bitcast<u32>(r.uv_base_y),
                                        pack2x16float(vec2<f32>(r.uv_scale_x, r.uv_scale_y)), r.extent);
    }
//#endif
}
`,Ms=`//#if F16
enable f16;
//#endif
// F16 build variant: fragment kernel + colour arithmetic in f16 (shader-f16); the ray/plane
// intersection, depth and uv stay f32. PACKED build variant: the FETCH_BY_ID fragment reads a 64 B
// record (4 x vec4<u32>, f16 conic/depth/scale, f32 uv_base) written by preprocess_2dgs.wgsl
// instead of the 96 B Splat2DGS. Both are measured on the device-bench page (bitymi_f16 / _packed).
// 2DGS render — vertex+fragment.
//
// Fragment does CONIC-corrected rational reconstruction (see the CONIC block
// below) + optional BC7/typeD atlas residual lookup via a SINGLE HW-decoded
// texture fetch.
//
// Atlas UV precomputation
// -----------------------
// The atlas UV mapping \`au = u0 + (s.x + E)/(2E)*w_span\` etc. is Gauss-uniform
// in everything except \`s.x\`/\`s.y\`. Two coefficients per axis (\`uv_base\`,
// \`uv_scale\`) and the array layer live inside Splat2DGS, computed once per
// alive Gauss in preprocess_2dgs.wgsl. Fragment then does:
//   \`uv = uv_base + s * uv_scale\` (2 fmadd, 0 divides, 0 storage-buffer loads).
// Prior versions read atlas_rects[gauss_id*5..gauss_id*5+4] per pixel and did
// 2 fp32 divides for the atlas_width/atlas_layer_h normalisation. That path
// showed up as a large fraction of "textures on" latency on TBDR mobile GPUs
// (Adreno / Mali / Apple), which pay more for storage-buffer reads than for
// texture reads.
//
// Paired-RVQ path
// ---------------
// Removed 2026-07-23. The per-fragment SW codebook decode was unusably slow
// on TBDR mobile GPUs. All shipped bundles are typeD (atlas_format=7, BC7
// codebook expanded to a normal BC7 texture at load time); the fragment
// shader below only knows about the single HW-decoded texture-fetch path.
// See memory/reference_atlas_format_typeD_default.md.

const FILTER_INV_SQUARE : f32 = 2.0;             // 1 / (2 · FilterSize²) with FilterSize=√2/2
const FILTER_SIZE       : f32 = 0.7071067811865476;
const K_BETA            : f32 = 3.0;
const K_BETA_SQ         : f32 = 9.0;

// Compile-time constant: 1 = beta_scaled bake (--kernel beta_scaled,
// shape > 0 per Gauss), 0 = Gaussian bake (--kernel gaussian, shape == 0
// always). Host sets it at pipeline-build time from bake_meta.json.kernel
// and the shader dead-strips the unused branch.
override BETA_KERNEL : u32 = 1u;
// Kernel evaluation mode (pipeline constant, diagnostic sweep 2026-11-11):
//   0 = learned beta per surfel (fast paths for 0.5/1/2/4, pow() otherwise)   [default]
//   1 = beta snapped to {0, 0.5, 1, 2, 4} (no pow(); 0 = flat disc)
//   2 = flat disc for every surfel (support + low-pass + opacity only)
// Mode 3 (Gaussian falloff) is BETA_KERNEL = 0, set by the host.
override KMODE : u32 = 0u;

// Splat2DGS — layout MUST match the same struct in preprocess_2dgs.wgsl,
// surfel_cull.wgsl, and gaussian-renderer.ts::C_SIZE_2D_SPLAT (96 B stride).
// Fields added over the 80-byte v1:
//   uv_base_x/y, uv_scale_x/y : normalised atlas UV precomp (see file header)
//   layer                     : atlas array layer (u32; preprocess writes it)
//   _pad                      : keeps stride at 96 = 24*4 for 16-B alignment
struct Splat2DGS {
  tu_x : f32, tu_y : f32, tu_z : f32,
  tv_x : f32, tv_y : f32, tv_z : f32,
  tw_x : f32, tw_y : f32, tw_z : f32,
  opacity      : f32,
  pos          : u32,   // 2× i16 centre in ¼-px units (unpack_center)
  extent       : u32,
  color_rg     : u32,
  color_b_shape: u32,
  gauss_id     : u32,
  depth_u      : f32,
  depth_v      : f32,
  depth_center : f32,
  uv_base_x    : f32,
  uv_base_y    : f32,
  uv_scale_x   : f32,
  uv_scale_y   : f32,
  layer        : u32,
  _pad         : u32,
};

// ---------------------------------------------------------------------------
// Build variants (host-side line preprocessor in gaussian-renderer.ts —
// \`//#if NAME\` / \`//#else\` / \`//#endif\`, no nesting needed):
//
//   FETCH_BY_ID — the vertex stage emits ONLY the compacted splat slot
//     (one flat u32); the fragment re-reads Splat2DGS[slot] from the storage
//     buffer. Replaces 13 flat varyings (≈ 176 B/primitive of interpolator
//     storage). Measured faster than 7 flat vec4s in the Vulkan port on a
//     5090 (docs/VULKAN_HW_RASTER.md §3); on TBDR mobile GPUs the varying
//     store is per-tile, so this is expected to matter more there. ?byid=0
//     restores the varying path for an A/B.
//   LEAN — fs_main compiled without the viewer-only fragment paths (clip plane, heat map,
//     per-pixel mip modes 2/3 + textureSampleGrad, probe atlases, accel-bit intersection
//     alternatives, re-fetch rank varying, slope/re-fetch entry points). Same image for baked
//     bundles; measured 2026-11-11 on an M3 Pro: the never-taken uniform branches cost ~20 %
//     of the frame (register pressure / occupancy). ?lean=1 in the viewer, +lean in the bench.
//   OCT — 8-vertex triangle-strip octagon tangent to the EXACT projected
//     cutoff ellipse (the same conic the cull's SnugBox uses, rebuilt here
//     from the CONIC coefficients), unioned with the low-pass disc, instead
//     of the axis-aligned quad. ~21 % fewer fragments per surfel at 2× the
//     vertex invocations; an earlier corner-cut-quad attempt was a net loss
//     on most GPUs, so this is OFF by default (?oct=1 to A/B). NB the
//     hyperbolic-surfel drop that gave the big Vulkan fragment win lives in
//     surfel_cull.wgsl (accel bit 9), independent of this.
// ---------------------------------------------------------------------------

//#if FETCH_BY_ID
struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0) @interpolate(flat) slot : u32,
//#if LEAN
//#else
  @location(1) @interpolate(flat) rank : u32,   // instance index = back-to-front draw rank (re-fetch upscaling)
//#endif
};
//#else
struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0)  @interpolate(flat) Tu          : vec3<f32>,
  @location(1)  @interpolate(flat) Tv          : vec3<f32>,
  @location(2)  @interpolate(flat) Tw          : vec3<f32>,
  @location(3)  @interpolate(flat) color       : vec4<f32>,
  @location(4)  @interpolate(flat) shape       : f32,
  @location(5)  @interpolate(flat) center_pix  : vec2<f32>,
  @location(6)  @interpolate(flat) depth_plane : vec3<f32>,
  @location(7)  @interpolate(flat) gauss_id    : u32,
  @location(8)  @interpolate(flat) uv_base     : vec2<f32>,
  @location(9)  @interpolate(flat) uv_scale    : vec2<f32>,
  @location(10) @interpolate(flat) layer       : u32,
  // Proberes off-diagonal terms (A01, A10) / tex_res. Unused when probe_mode==0.
  @location(11) @interpolate(flat) uv_skew     : vec2<f32>,
  // Proberes mip LOD: log2(texels per pixel), computed once per Gauss in the
  // vertex stage. Compute passes have no implicit derivatives, so the fragment
  // must use textureSampleLevel with an explicit level. 0 when probe_mode==0.
  @location(12) @interpolate(flat) lod         : f32,
//#if LEAN
//#else
  @location(13) @interpolate(flat) rank        : u32,   // instance index = back-to-front draw rank (re-fetch upscaling)
//#endif
};
//#endif

// Per-splat inputs to shade() — identical content whichever variant delivers
// it (varyings or a storage re-read).
struct SplatIn {
  Tu          : vec3<f32>,
  Tv          : vec3<f32>,
  Tw          : vec3<f32>,
  color       : vec4<f32>,
  shape       : f32,
  center_pix  : vec2<f32>,
  depth_plane : vec3<f32>,
  gauss_id    : u32,
  uv_base     : vec2<f32>,
  uv_scale    : vec2<f32>,
  layer       : u32,
  uv_skew     : vec2<f32>,
  lod         : f32,
};

// 64-byte RenderSettings — same layout as preprocess_2dgs.wgsl. We only read
// \`canvas_size\` here (vertex shader uses it to convert pixel coords → NDC)
// plus accel_flags bit 0 (OAC) under OCT to rebuild the cull's cutoff.
struct RenderSettings {
  canvas_size      : vec2<u32>,
  accel_flags      : u32,
  _pad0            : u32,
  gaussian_scaling : f32,
  sh_bias          : f32,
  sv_number        : u32,
  walltime         : f32,
  // --xclip (2026-11-04): exact half-space clip, camera space. clip_plane = (a,b,c,d) with the
  // fragment REMOVED where a*x+b*y+c*z+d > 0 at its ray-surfel hit (kept half n.x+d <= 0, the
  // nest-splatting Camera.clip_plane convention, transformed per frame by the host).
  // clip_intr = (fx, fy, cx, cy) in render-target pixels; clip_intr.x == 0 => clip off.
  clip_plane       : vec4<f32>,
  clip_intr        : vec4<f32>,
};

// 32-byte TexParams. Bundle without atlas → host writes \`atlas_enabled = 0\`
// and the fragment shader's single \`if atlas_enabled != 0u\` short-circuits.
//
// Cut down from 48 B in the pre-2026-07-23 shader: the RVQ tail
// (rvq_block / pair_scale / pair_offset) was removed with the RVQ code path.
struct TexParams {
  atlas_enabled : u32,     // 0 = no atlas / user toggle off ; nonzero = sample
  atlas_scale   : f32,
  atlas_offset  : f32,
  res_bias      : f32,     // additive RGB bias after the residual is folded in
  // 0 = baked (per-surfel rect, diagonal affine, multi-layer atlas)
  // 1 = proberes (shared single-layer texture, general 2x2 affine + low-pass
  //     centre collapse). Set by the loader for NAT2 atlas_format 9/10.
  probe_mode    : u32,
  // Atlas width in texels — needed for the proberes mip LOD, since the probe
  // affine arrives NORMALISED (already divided by tex_res by the exporter) and
  // LOD needs an absolute texel count. Claims the former _pad0.
  atlas_width   : u32,
  // Mip LOD policy (proberes). 0 = force level 0 (pre-mip behaviour, point-ish
  // minification); 1 = trilinear at the computed LOD. Runtime-toggleable so the
  // same bundle can be A/B'd — the chain is resident either way.
  mip_mode      : u32,
  // Explicit u32 pad (NOT vec3<f32>): a vec3 aligns to 16 and would push the
  // struct to 48 B, mismatching buildStubAtlas's 32-byte TexParams buffer.
  // uv extent E of the bake (surfel uv ∈ [−E, E] ↔ the tile): the fragment clamp needs the
  // tile's half span, = |uv_scale|·E.
  uv_extent : f32,
};

@group(0) @binding(0) var<uniform>       render_settings : RenderSettings;
@group(1) @binding(0) var<storage, read> splats_2d       : array<Splat2DGS>;
@group(1) @binding(1) var<storage, read> indices         : array<u32>;
//#if PACKED
@group(1) @binding(2) var<storage, read> splats_frag     : array<vec4<u32>>;
//#endif
//#if F16
alias hf = f16;
alias hf3 = vec3<f16>;
//#else
alias hf = f32;
alias hf3 = vec3<f32>;
//#endif
@group(2) @binding(0) var                atlas           : texture_2d_array<f32>;
@group(2) @binding(1) var                atlas_samp      : sampler;
@group(2) @binding(2) var<uniform>       tex_params      : TexParams;
// Per-surfel probe records (the same buffer preprocess reads as atlas_rects). Only read under probe_mode == 3 (pair
// format: stride 21 = 6 affine floats + 3x4 matrix row-major + bias), one 60-byte read per shaded fragment.
@group(2) @binding(3) var<storage, read> probe_recs      : array<f32>;

// Splat2DGS.pos → centre in pixels (¼-px integer grid, see surfel_cull
// pack_center). Sign-extend each i16 lane with a shift pair.
fn unpack_center(p: u32) -> vec2<f32> {
    // accel bit 10 (?legacy=1): the cull packed f16 instead — read it back the
    // old way so the two stages always agree within a frame.
    if (render_settings.accel_flags & 1024u) != 0u {
        return unpack2x16float(p);
    }
    let x = (i32(p << 16u)) >> 16u;
    let y = (i32(p)) >> 16u;
    return vec2<f32>(f32(x), f32(y)) * 0.25;
}

// Bound margin: 0.25 px + 0.1 % over the cull's tight bbox (see vs_main), or
// nothing under ?legacy=1.
fn bound_pad(extent_pix: vec2<f32>) -> vec2<f32> {
    if (render_settings.accel_flags & 1024u) != 0u { return extent_pix; }
    return extent_pix * 1.001 + vec2<f32>(0.25);
}

// Unpack a Splat2DGS record into the shade() inputs. Shared by the vertex
// stage (varying variant) and the fragment stage (FETCH_BY_ID variant) so the
// two variants are the same math by construction.
fn unpack_splat(splat: Splat2DGS) -> SplatIn {
    var sp : SplatIn;
    sp.Tu = vec3<f32>(splat.tu_x, splat.tu_y, splat.tu_z);
    sp.Tv = vec3<f32>(splat.tv_x, splat.tv_y, splat.tv_z);
    sp.Tw = vec3<f32>(splat.tw_x, splat.tw_y, splat.tw_z);
    let rg = unpack2x16float(splat.color_rg);
    let bs = unpack2x16float(splat.color_b_shape);
    sp.color       = vec4<f32>(rg.x, rg.y, bs.x, splat.opacity);
    sp.shape       = bs.y;
    sp.center_pix  = unpack_center(splat.pos);
    sp.depth_plane = vec3<f32>(splat.depth_u, splat.depth_v, splat.depth_center);
    sp.gauss_id    = splat.gauss_id;
    sp.uv_base     = vec2<f32>(splat.uv_base_x,  splat.uv_base_y);
    sp.uv_scale    = vec2<f32>(splat.uv_scale_x, splat.uv_scale_y);
    sp.layer       = splat.layer;
    // Under probe_mode the layer/_pad slots carry A01/A10 (see preprocess).
    // Harmless otherwise — probe_mode==0 never reads uv_skew.
    sp.uv_skew     = vec2<f32>(bitcast<f32>(splat.layer), bitcast<f32>(splat._pad));

    // ---- proberes mip LOD ----------------------------------------------------
    // The probe maps surfel-uv -> NORMALISED texture uv, so a column's length
    // times atlas_width is that axis's texel span across uv 0..1. The surfel
    // spans uv in [-3,3] (6 units) over 2*extent_pix screen pixels, hence
    //     texels_per_pixel = 6*|A_col|*atlas_width / (2*extent_pix)
    // and lod = log2 of the larger axis, clamped at 0 (magnification stays on
    // level 0, where plain bilinear is already correct).
//#if LEAN
    sp.lod = sp.uv_skew.y;   // baked atlas: integer level from preprocess (0 without a chain)
//#else
    sp.lod = 0.0;
    if tex_params.probe_mode != 0u {
        let extent_pix = unpack2x16float(splat.extent);
        let a_col0 = vec2<f32>(sp.uv_scale.x, sp.uv_skew.y);   // (A00, A10)
        let a_col1 = vec2<f32>(sp.uv_skew.x,  sp.uv_scale.y);  // (A01, A11)
        let texw   = f32(tex_params.atlas_width);
        let px     = max(2.0 * max(extent_pix.x, extent_pix.y), 1.0);
        let tpp    = 6.0 * texw * max(length(a_col0), length(a_col1)) / px;
        sp.lod     = max(0.0, log2(max(tpp, 1.0)));
    } else {
        // Baked atlas: preprocess picked the integer level and stored it in \`_pad\`
        // (0.0 for bundles without a chain), see preprocess_2dgs.wgsl.
        sp.lod     = sp.uv_skew.y;
    }
//#endif
    return sp;
}

//#if PACKED
// 64 B fragment record (preprocess_2dgs.wgsl writes it under PACKED):
//   q0 = (Tu.xy, Tu.z|Tv.x, Tv.yz, Tw.xy)          f16 pairs
//   q1 = (pos, color_rg, color_b_shape, opacity|lod)
//   q2 = (depth_u|depth_v, depth_center|Tw.z, gauss_id, layer)
//   q3 = (uv_base_x f32, uv_base_y f32, uv_scale xy f16, extent)
fn unpack_packed(slot: u32) -> SplatIn {
    let b  = slot * 4u;
    let q0 = splats_frag[b];
    let q1 = splats_frag[b + 1u];
    let q2 = splats_frag[b + 2u];
    let q3 = splats_frag[b + 3u];
    var sp : SplatIn;
    let t0 = unpack2x16float(q0.x); let t1 = unpack2x16float(q0.y);
    let t2 = unpack2x16float(q0.z); let t3 = unpack2x16float(q0.w);
    let dz = unpack2x16float(q2.y);
    sp.Tu = vec3<f32>(t0.x, t0.y, t1.x);
    sp.Tv = vec3<f32>(t1.y, t2.x, t2.y);
    sp.Tw = vec3<f32>(t3.x, t3.y, dz.y);
    sp.center_pix = unpack_center(q1.x);
    let rg = unpack2x16float(q1.y); let bs = unpack2x16float(q1.z); let ol = unpack2x16float(q1.w);
    sp.color = vec4<f32>(rg.x, rg.y, bs.x, ol.x);
    sp.shape = bs.y;
    let duv = unpack2x16float(q2.x);
    sp.depth_plane = vec3<f32>(duv.x, duv.y, dz.x);
    sp.gauss_id = q2.z;
    sp.layer    = q2.w;
    sp.uv_base  = vec2<f32>(bitcast<f32>(q3.x), bitcast<f32>(q3.y));
    sp.uv_scale = unpack2x16float(q3.z);
    sp.uv_skew  = vec2<f32>(0.0);
    sp.lod      = ol.y;
    return sp;
}
//#endif

fn splat_in(in: VertexOutput) -> SplatIn {
//#if FETCH_BY_ID
//#if PACKED
    if tex_params.probe_mode == 0u { return unpack_packed(in.slot); }
//#endif
    return unpack_splat(splats_2d[in.slot]);
//#else
    var sp : SplatIn;
    sp.Tu = in.Tu; sp.Tv = in.Tv; sp.Tw = in.Tw;
    sp.color = in.color; sp.shape = in.shape; sp.center_pix = in.center_pix;
    sp.depth_plane = in.depth_plane; sp.gauss_id = in.gauss_id;
    sp.uv_base = in.uv_base; sp.uv_scale = in.uv_scale; sp.layer = in.layer;
    sp.uv_skew = in.uv_skew; sp.lod = in.lod;
    return sp;
//#endif
}

//#if OCT
// ---- OCT bound: exact cutoff ellipse rebuilt from the CONIC coefficients ----
// The fragment's rational reconstruction is s(d) = c + J·d / (1 + dw·d) with
// c = (u0, v0), so with M = J + c ⊗ dw:  |s|² ≤ k²  ⇔  |c + M d|² ≤ k²(1+dw·d)²
// (denom > 0 side), a quadratic in d:
//     dᵀ Q d + 2 gᵀ d + q0 ≤ 0,   Q = MᵀM − k² dw dwᵀ,  g = Mᵀc − k² dw,
//     q0 = |c|² − k².
// Completing the square gives centre δ = −Q⁻¹g and dᵀQd ≤ t = gᵀQ⁻¹g − q0.
// For a cull-alive surfel this is exactly the SnugBox ellipse (same cutoff k,
// same conic), so δ ≈ 0 — it is kept anyway so fp drift never shrinks the
// bound. The cutoff must be rebuilt with the cull's formula (OAC included).
fn oct_cutoff(opacity: f32, shape: f32) -> f32 {
    let oac = (render_settings.accel_flags & 1u) != 0u;
    if shape > 1e-6 {
        if !oac { return 3.0; }
        let inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
        let inv_pow = pow(inv, 1.0 / max(shape, 1e-3));
        return max(0.5, 3.0 * sqrt(max(0.0, 1.0 - inv_pow)));
    }
    if !oac { return 3.5; }
    return max(0.5, sqrt(2.0 * log(255.0 * max(opacity, 1.0 / 255.0))));
}

// 8 unit normals at 45° steps (CCW) — support directions of the octagon.
const OCT_N = array<vec2<f32>, 8>(
    vec2<f32>( 1.0,  0.0), vec2<f32>( 0.7071067811865476,  0.7071067811865476),
    vec2<f32>( 0.0,  1.0), vec2<f32>(-0.7071067811865476,  0.7071067811865476),
    vec2<f32>(-1.0,  0.0), vec2<f32>(-0.7071067811865476, -0.7071067811865476),
    vec2<f32>( 0.0, -1.0), vec2<f32>( 0.7071067811865476, -0.7071067811865476),
);

// Corner \`k\` (0..7, CCW) of the polygon bounding this splat, in pixel offsets
// from center_pix. Ellipse support h(n) = sqrt(t · nᵀQ⁻¹n), unioned with the
// low-pass disc (radius filter_r, as the quad path) and the cull's box
// half-extents (never smaller than the legacy quad); + PAD px of slack.
fn oct_corner(sp: SplatIn, extent_pix: vec2<f32>, k: u32) -> vec2<f32> {
    let filter_r = K_BETA * FILTER_SIZE;
    let ext_pad = bound_pad(extent_pix);
    let half = vec2<f32>(max(ext_pad.x, filter_r), max(ext_pad.y, filter_r));
    var use_ell = false;
    var Qa = 1.0; var Qb = 0.0; var Qe = 1.0; var t = 0.0; var delta = vec2<f32>(0.0);
    // \`--tex3d\` rows (bit 30): the footprint is the EWA box the cull wrote, not the
    // plane disc — use the box support only.
    if (sp.gauss_id & 0xC0000000u) == 0u {
        let c  = vec2<f32>(sp.Tu.x, sp.Tu.y);
        let J00 = sp.Tu.z; let J01 = sp.Tv.x; let J10 = sp.Tv.y; let J11 = sp.Tv.z;
        let dw = vec2<f32>(sp.Tw.x, sp.Tw.y);
        let kk = oct_cutoff(sp.color.a, sp.shape); let k2 = kk * kk;
        let M00 = J00 + c.x * dw.x; let M01 = J01 + c.x * dw.y;
        let M10 = J10 + c.y * dw.x; let M11 = J11 + c.y * dw.y;
        Qa = M00 * M00 + M10 * M10 - k2 * dw.x * dw.x;
        Qb = M00 * M01 + M10 * M11 - k2 * dw.x * dw.y;
        Qe = M01 * M01 + M11 * M11 - k2 * dw.y * dw.y;
        let g = vec2<f32>(M00 * c.x + M10 * c.y - k2 * dw.x,
                          M01 * c.x + M11 * c.y - k2 * dw.y);
        let q0 = dot(c, c) - k2;
        let det = Qa * Qe - Qb * Qb;
        if det > 1e-12 && Qa > 0.0 && Qe > 0.0 {
            // Q⁻¹ = [E −B; −B A] / det
            let Qig = vec2<f32>(Qe * g.x - Qb * g.y, -Qb * g.x + Qa * g.y) / det;
            delta = -Qig;
            t = dot(g, Qig) - q0;
            use_ell = t > 0.0;
        }
    }
    // Same slack as the quad path (centre now exact for the CONIC; f16 extent
    // only enters through \`half\`).
    let PAD = select(0.25, 0.0, (render_settings.accel_flags & 1024u) != 0u);
    var h : array<f32, 8>;
    for (var j = 0u; j < 8u; j = j + 1u) {
        let n = OCT_N[j];
        // Box support (== legacy quad when the ellipse is unavailable).
        var hj = half.x * abs(n.x) + half.y * abs(n.y);
        if use_ell {
            let det = Qa * Qe - Qb * Qb;
            let he = sqrt(max(t * (Qe * n.x * n.x - 2.0 * Qb * n.x * n.y + Qa * n.y * n.y) / det, 0.0));
            // ellipse ∪ low-pass disc, offset by the completed-square centre
            hj = max(he + dot(n, delta), filter_r);
        }
        h[j] = hj + PAD;
    }
    // Corner k = intersection of the tangent lines n_k·x = h_k and
    // n_{k+1}·x = h_{k+1}  (2×2 Cramer, determinant sin 45°).
    let n0 = OCT_N[k]; let n1 = OCT_N[(k + 1u) & 7u];
    let h0 = h[k];     let h1 = h[(k + 1u) & 7u];
    return vec2<f32>(h0 * n1.y - n0.y * h1, n0.x * h1 - h0 * n1.x) * 1.4142135623730951;
}
//#endif

@vertex
fn vs_main(
    @builtin(vertex_index)   vid : u32,
    @builtin(instance_index) iid : u32,
) -> VertexOutput {
    var out : VertexOutput;
//#if LEAN
//#else
    out.rank = iid;
//#endif

    let slot       = indices[iid];
    let splat      = splats_2d[slot];
    let center_pix = unpack_center(splat.pos);
    let extent_pix = unpack2x16float(splat.extent);
    let sp         = unpack_splat(splat);

//#if OCT
    // 8-vertex triangle strip over the CCW octagon corners in zig-zag order
    // 0,1,7,2,6,3,5,4 → triangles (0,1,7)(1,7,2)(7,2,6)(2,6,3)(6,3,5)(3,5,4)
    // tile the convex polygon exactly. drawIndirect vertex_count == 8.
    let k = select((8u - (vid >> 1u)) & 7u, (vid + 1u) >> 1u, (vid & 1u) == 1u);
    let corner_pix = center_pix + oct_corner(sp, extent_pix, k);
//#else
    // Quad half-extent: max(extent_pix, k·FilterSize) on each axis. The cull
    // pass already wrote the tight bbox, so this just adds the filter margin.
    // Margin: the stored centre is on a ¼-px grid (≤ ⅛ px from the ellipse's
    // true centre) and the f16 extent carries 0.05 % relative error, so the
    // bare tight bbox clipped fragments on the edge. For hard-edged surfels
    // (beta shape → 0, α ≈ opacity right up to ρ = 3) those were fully
    // visible fragments: measured ~100 px/frame, |Δ| up to 46/255 on room
    // before the ¼-px centre, 16/255 after. 0.25 px + 0.1 % restores them.
    let filter_r = K_BETA * FILTER_SIZE;
    let ext_pad  = bound_pad(extent_pix);
    let half     = vec2<f32>(max(ext_pad.x, filter_r), max(ext_pad.y, filter_r));

    // 4-vertex triangle-strip axis-aligned quad (matches websplatter).
    //   vid 0: ( 1,  1)   vid 1: (-1,  1)
    //   vid 2: ( 1, -1)   vid 3: (-1, -1)
    let ox = select(-1.0, 1.0, (vid & 1u) == 0u);
    let oy = select(-1.0, 1.0, vid < 2u);
    let corner_pix = center_pix + vec2<f32>(ox, oy) * half;
//#endif

    // Pixel → NDC. Framebuffer y grows downward; clip y grows upward.
    let vp = vec2<f32>(f32(render_settings.canvas_size.x), f32(render_settings.canvas_size.y));
    let ndc = vec2<f32>(
        (corner_pix.x * 2.0 - (vp.x - 1.0)) / vp.x,
        -((corner_pix.y * 2.0 - (vp.y - 1.0)) / vp.y),
    );
//#if HW_DEPTH
    // Hardware depth from geometry: z_ndc of the SURFEL PLANE at this corner.
    // For a plane, 1/z_view is affine in screen space, and z_ndc = P22 + P32/z
    // is too, so linear interpolation of the corner values reproduces the exact
    // ray/plane depth at every pixel — the z-buffer can then test and reject
    // fragments BEFORE the fragment shader runs (early-Z; no frag_depth).
    // Flat varyings are unaffected by w, so w = 1.
    let zc    = corner_depth(sp, corner_pix);
    let z_ndc = clamp(camera.proj[2][2] + camera.proj[3][2] / zc, 0.0, 0.999999);
    out.position = vec4<f32>(ndc, z_ndc, 1.0);
//#else
    out.position = vec4<f32>(ndc, 0.0, 1.0);
//#endif

//#if FETCH_BY_ID
    out.slot = slot;
//#else
    out.Tu = sp.Tu; out.Tv = sp.Tv; out.Tw = sp.Tw;
    out.color       = sp.color;
    out.shape       = sp.shape;
    out.center_pix  = center_pix;
    out.depth_plane = sp.depth_plane;
    out.gauss_id    = sp.gauss_id;
    out.uv_base     = sp.uv_base;
    out.uv_scale    = sp.uv_scale;
    out.layer       = sp.layer;
    out.uv_skew     = sp.uv_skew;
    out.lod         = sp.lod;
//#endif
    return out;
}

// Shared fragment evaluation — returns un-premultiplied rgb, alpha, and the
// per-pixel VIEW-SPACE depth of the exact ray-splat intersection (zv). All
// fragment entry points call this; a discard inside culls the fragment.
//
// Split in two stages (2026-10-06, for the two-pass path below):
//   shade_geom()  — ray/splat intersection \`s\`, kernel alpha \`a\`, depth \`zv\`,
//                   and the low-pass flag; every discard lives here.
//   shade_color() — SV/SH base colour + the atlas residual fetch + biases.
// shade() = both, and is what fs_main uses; fs_front runs the geometry stage
// first so fragments hidden behind the opaque layer never pay for the fetch.
struct ShadeOut {
    rgb : vec3<f32>,
    a   : f32,
    zv  : f32,
};

struct ShadeGeom {
    s   : vec2<f32>,   // ray/splat intersection in surfel uv (unused for EWA)
    a   : f32,         // kernel alpha (opacity · falloff, low-pass included)
    zv  : f32,         // view-space depth of the intersection
    lp  : bool,        // low-pass kernel won (rho3d > rho2d) — probe uv collapses
    pix : vec2<f32>,   // fragment position (the anisotropic fetch re-intersects the two neighbouring pixels)
};

// Ray/splat intersection \`s\` (surfel uv) at pixel \`pixf\`. Three equivalent
// formulations selected by accel bits (see below); \`ok == false\` where the
// fragment path discards (degenerate / wrong side of the conic expansion).
// Shared by shade_geom() and, under HW_DEPTH, by the vertex stage, which needs
// the plane depth at the bound corners.
struct Isect { s : vec2<f32>, ok : bool };

fn intersect_uv(in: SplatIn, pixf: vec2<f32>) -> Isect {
    var s : vec2<f32>;
//#if LEAN
    {
//#else
    if (render_settings.accel_flags & 4096u) != 0u {
        // CENTRED (accel bit 12): same cross-product, but in coordinates
        // centred on the splat. in.Tu = k_c, in.Tv = l_c, in.Tw = Tw, and the
        // offset d is at most the quad half-extent -- so nothing here subtracts
        // two numbers of magnitude ~1e3 to get one of magnitude ~1.
        let d2 = pixf - in.center_pix;
        let kk = in.Tu + d2.x * in.Tw;
        let ll = in.Tv + d2.y * in.Tw;
        let pp = cross(kk, ll);
        if abs(pp.z) < 1e-12 { return Isect(vec2<f32>(0.0), false); }
        s = pp.xy / pp.z;
    } else if (render_settings.accel_flags & 2048u) != 0u {
        // accel bit 11 (?raysplat=1): original 2DGS per-fragment ray-splat from
        // the RAW transmat rows the cull stored under the same bit. Every
        // cancellation in \`pix*Tw - Tu\` happens AT this pixel, so the error
        // cannot grow with the quad.
        let kk = pixf.x * in.Tw - in.Tu;
        let ll = pixf.y * in.Tw - in.Tv;
        let pp = cross(kk, ll);
        if abs(pp.z) < 1e-12 { return Isect(vec2<f32>(0.0), false); }
        s = pp.xy / pp.z;
    } else {
//#endif
        // CONIC OPTION A: (u0, v0, J⁻¹, dw) precomputed about the splat centre.
        // Exact in exact arithmetic, but the cancellation is baked into the
        // per-Gauss constants and the extrapolation multiplies whatever error
        // they carry by the distance from the centre.
        let u0 = in.Tu.x; let v0 = in.Tu.y;
        let J00 = in.Tu.z; let J01 = in.Tv.x;
        let J10 = in.Tv.y; let J11 = in.Tv.z;
        let dwdxr = in.Tw.x; let dwdyr = in.Tw.y;
        let d = pixf - in.center_pix;
        let du_lin = J00 * d.x + J01 * d.y;
        let dv_lin = J10 * d.x + J11 * d.y;
        // Correction denominator crosses zero at the expansion's validity
        // boundary — sign flips there produce the foggy/bowtie artifact.
        let denom  = 1.0 + dwdxr * d.x + dwdyr * d.y;
        if denom < 0.1 { return Isect(vec2<f32>(0.0), false); }
        let inv_d  = 1.0 / denom;
        s = vec2<f32>(u0 + du_lin * inv_d, v0 + dv_lin * inv_d);
    }
    return Isect(s, true);
}

fn shade_geom(in: SplatIn, pos: vec2<f32>) -> ShadeGeom {
    let pixf = floor(pos);

    // \`--method mixed_3d\` untextured branch — Gauss is a 3D EWA ellipsoid,
    // not a 2DGS surfel. Top bit of gauss_id is the untextured flag (set in
    // surfel_cull at store time). When set:
    //   * Tu carries the inverse 2D covariance (a, b, c), NOT the transmat;
    //   * Falloff is \`α·exp(-½·m)\` with m = a·dx² + 2b·dx·dy + c·dy²;
    //   * No atlas residual — untextured Gausses carry a zero-area atlas rect
    //     at bake time; skip the sample entirely.
    //   * Depth = depth_center (no surfel-plane interpolation).
    // Matches diff_surfel_bake_render/cuda_rasterizer/forward.cu:457.
    // \`--tex3d\` 3D kernel (gauss_id bit 30): alpha from the EWA conic of the
    // (sx, sy, sz) ellipsoid (a = Tw.z, b = depth_u, c = depth_v), run's kernel on the
    // Mahalanobis m, no screen-space low-pass (the conic carries eps2d). The texture
    // is still fetched at the plane-hit uv (CONIC form), clamped to the disc |s| <= 3.
    // Matches diff_surfel_mixed_3d_tex training + the CUDA lean bake renderer.
    if (in.gauss_id & 0x40000000u) != 0u {
        let dx_t = pixf - in.center_pix;
        let m_t  = in.Tw.z * dx_t.x * dx_t.x
                 + 2.0 * in.depth_plane.x * dx_t.x * dx_t.y
                 + in.depth_plane.y * dx_t.y * dx_t.y;
        if m_t < 0.0 { discard; }
        var ka : f32;
        if BETA_KERNEL == 0u {
            ka = exp(-0.5 * m_t);
        } else {
            if m_t >= K_BETA_SQ + 1e-6 { discard; }
            ka = pow(max(0.0, 1.0 - m_t / K_BETA_SQ), in.shape);
        }
        let a_t = min(0.99, in.color.a * ka);
        if a_t < 1.0 / 255.0 { discard; }
        if in.depth_plane.z < 0.2 { discard; }
        // Plane-hit uv: exact rational CONIC form; a near-zero denominator means the ray
        // grazes the plane far outside the disc, which the clamp maps to the rim.
        let J00 = in.Tu.z; let J01 = in.Tv.x; let J10 = in.Tv.y; let J11 = in.Tv.z;
        let du_lin = J00 * dx_t.x + J01 * dx_t.y;
        let dv_lin = J10 * dx_t.x + J11 * dx_t.y;
        let den = 1.0 + in.Tw.x * dx_t.x + in.Tw.y * dx_t.y;
        let den_s = select(den, select(-1e-6, 1e-6, den >= 0.0), abs(den) < 1e-6);
        var s_t = vec2<f32>(in.Tu.x + du_lin / den_s, in.Tu.y + dv_lin / den_s);
        let r2 = dot(s_t, s_t);
        if r2 > 9.0 { s_t = s_t * sqrt(9.0 / r2); }
        return ShadeGeom(s_t, a_t, in.depth_plane.z, false, pos);
    }

    if (in.gauss_id & 0x80000000u) != 0u {
        let dx_e = pixf - in.center_pix;
        let m_e  = in.Tu.x * dx_e.x * dx_e.x
                 + 2.0 * in.Tu.y * dx_e.x * dx_e.y
                 + in.Tu.z * dx_e.y * dx_e.y;
        if m_e < 0.0 { discard; }
        let alpha_e = min(0.99, in.color.a * exp(-0.5 * m_e));
        if alpha_e < 1.0 / 255.0 { discard; }
        if in.depth_plane.z < 0.2 { discard; }
        return ShadeGeom(vec2<f32>(0.0), alpha_e, in.depth_plane.z, false, pos);
    }

    // CONIC OPTION A: fragment reads precomputed (u₀, v₀, J⁻¹, ∇p.z/p_c.z)
    // from the tu/tv/tw slots (see surfel_cull's textured branch). Skips the
    // per-fragment cross-product + perspective divide. Formula is
    // MATHEMATICALLY EXACT (not linearized) because p.x, p.z are both linear
    // in pix → u = p.x/p.z is a rational function of pix, and:
    //   u = u₀ + (J⁻¹·Δpix).x / (1 + dwdxr·dx + dwdyr·dy)
    // Slot layout: tu=(u₀, v₀, J00), tv=(J01, J10, J11), tw=(dwdxr, dwdyr, 0).
    // Ray/surfel intersection (three equivalent formulations, see intersect_uv).
    let isect = intersect_uv(in, pixf);
    if !isect.ok { discard; }
    let s = isect.s;
    let rho3d  = dot(s, s);

    // Screen-space low-pass (alpha_lp) for sub-pixel splats.
    let d_pix = in.center_pix - pixf;
    let rho2d_lp = FILTER_INV_SQUARE * dot(d_pix, d_pix);
    // Low-pass toggle (accel bit 15, render-settings.ts setLowPass / viewer "Low-pass" button, bench +nolp):
    // off → rho2d = +inf, so alpha = opacity · falloff only and the depth always comes from the plane.
    let rho2d = select(rho2d_lp, 1e30, (render_settings.accel_flags & 32768u) != 0u);

    // Per-pixel intersection depth — with the CUDA low-pass fallback
    // (forward.cu: \`depth = (rho3d <= rho2d) ? plane : Tw.z\`). When the
    // screen-space low-pass kernel wins (sub-pixel / edge-on splats), the
    // ray-plane intersection \`s\` is a wild extrapolation and the plane-
    // interpolated depth is meaningless — fall back to the splat's CENTER
    // depth. Invisible in ht=0 (zv unused; order comes from the sort), but
    // in HT modes this is the CORE SORT KEY: keying an edge-on splat at an
    // extrapolated depth costs it its core slot and buries it in the tail
    // at huge \`rel\` → thin structures vanish/shimmer under ht=1/2.
    let depth_plane_interp = dot(in.depth_plane, vec3<f32>(s, 1.0));
    let depth = select(in.depth_plane.z, depth_plane_interp, rho3d <= rho2d);
    if depth < 0.2 { discard; }
//#if LEAN
//#else
    // --xclip: exact per-fragment half-space clip at the ray-surfel hit (camera space:
    // p = depth * ((px+0.5-cx)/fx, (py+0.5-cy)/fy, 1)), identical to the CUDA bake renderer.
    if render_settings.clip_intr.x != 0.0 {
        let cp = render_settings.clip_plane;
        let ci = render_settings.clip_intr;
        let hx = depth * (pixf.x + 0.5 - ci.z) / ci.x;
        let hy = depth * (pixf.y + 0.5 - ci.w) / ci.y;
        if cp.x * hx + cp.y * hy + cp.z * depth + cp.w > 0.0 { discard; }
    }
//#endif

    // Kernel dispatch — BETA_KERNEL is a pipeline constant. \`hf\` is f16 under the F16 build
    // variant (kernel falloff, low-pass and the opacity product), f32 otherwise.
    let rho3d_h = hf(rho3d);
    var alpha_beta : hf;
    if BETA_KERNEL == 0u {
        alpha_beta = exp(-rho3d_h * hf(0.5));
    } else {
        if rho3d >= K_BETA_SQ + 1e-6 { discard; }
        let base = max(hf(0.0), hf(1.0) - rho3d_h * hf(1.0 / K_BETA_SQ));
        let sh = hf(in.shape);
        if KMODE == 2u {
            alpha_beta = hf(1.0);                                   // flat disc, support test only
        } else if KMODE == 1u {
            // Snapped exponent: no pow(). Learned β is below 1 for ~95 % of the surfels (rebuttal §9).
            if sh < hf(0.25)      { alpha_beta = hf(1.0); }         // β≈0
            else if sh < hf(0.75) { alpha_beta = sqrt(base); }      // β≈0.5
            else if sh < hf(1.5)  { alpha_beta = base; }            // β≈1
            else if sh < hf(3.0)  { alpha_beta = base * base; }     // β≈2
            else { let b2 = base * base; alpha_beta = b2 * b2; }    // β≈4
        } else {
        // Fast paths for shape ∈ {0.5, 1, 2, 4}.
        if sh >= hf(1.99) && sh <= hf(2.01) {
            alpha_beta = base * base;                               // β=2
        } else if sh >= hf(0.99) && sh <= hf(1.01) {
            alpha_beta = base;                                      // β=1
        } else if sh >= hf(0.49) && sh <= hf(0.51) {
            alpha_beta = sqrt(base);                                // β=0.5
        } else if sh >= hf(3.99) && sh <= hf(4.01) {
            let b2 = base * base;                                   // β=4
            alpha_beta = b2 * b2;
        } else {
            alpha_beta = pow(base, sh);                             // fallback
        }
        }
    }
    let alpha_lp   = exp(-hf(rho2d) * hf(0.5));
    let opa        = hf(in.color.a);
    let b          = min(hf(0.99), opa * max(alpha_beta, alpha_lp));
    if b < hf(1.0 / 255.0) { discard; }

    return ShadeGeom(s, f32(b), depth, rho3d > rho2d, pos);
}

fn shade_color(in: SplatIn, g: ShadeGeom) -> vec3<f32> {
    var color = hf3(in.color.rgb);
    let s = g.s;

//#if LEAN
//#else
    // Adaptive-upscaling heatmap (accel_flags bits 3..8 = tau in 1/8 steps, render-settings.ts setAdaptHeat).
    // Per fragment: q = atlas texels per screen pixel (area of the pixel's footprint on the tile, from the
    // ray/plane uv at the two neighbouring pixels, the same footprint the anisotropic path uses). Colour = the
    // largest render factor the ?rs=auto rule would allow here (f · q <= tau): red = native only, yellow = 1/2,
    // green = 1/4, blue = surfel without texture (SV only, no texels to lose). Alpha-blended like the colour.
    let heat = (render_settings.accel_flags >> 3u) & 63u;
    if heat != 0u {
        var col = vec3<f32>(0.25, 0.4, 1.0);
        if tex_params.atlas_enabled != 0u && (in.gauss_id & 0x80000000u) == 0u && tex_params.probe_mode == 0u
           && in.uv_scale.x != 0.0 && in.uv_scale.y != 0.0 {
            let pixf = floor(g.pix);
            let ix   = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
            let iy   = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
            let dsdx = select(vec2<f32>(0.0), ix.s - s, ix.ok);
            let dsdy = select(vec2<f32>(0.0), iy.s - s, iy.ok);
            let dims = vec2<f32>(textureDimensions(atlas));
            let tdx  = in.uv_scale * dsdx * dims;
            let tdy  = in.uv_scale * dsdy * dims;
            let q    = sqrt(abs(tdx.x * tdy.y - tdx.y * tdy.x));
            let tau  = f32(heat) / 8.0;
            col = vec3<f32>(1.0, 0.15, 0.1);
            if 2.0 * q <= tau { col = vec3<f32>(1.0, 0.85, 0.1); }
            if 4.0 * q <= tau { col = vec3<f32>(0.15, 0.9, 0.2); }
        }
        return col;
    }
//#endif

    // Atlas residual — single HW-decoded BC7 texture fetch per fragment.
    // uv_base / uv_scale are precomputed in preprocess_2dgs.wgsl so the entire
    // atlas UV mapping reduces to two fmadd + one texture sample. Untextured
    // (EWA, top bit of gauss_id) Gausses carry a zero-area rect: skip.
    // Skip-texture surfels carry a zero-area rect whose slice id is ONE PAST the last layer
    // (sentinel): the CUDA bake-render skips the lookup (SV only). Sampling it would clamp
    // the array index and read texel (0,0) of the last layer as a bogus residual (found
    // 2026-10-13 in the WebGL2 port; ~0.3 % of garden's surfels).
    if tex_params.atlas_enabled != 0u && (in.gauss_id & 0x80000000u) == 0u
       && (tex_params.probe_mode != 0u || (in.uv_scale.x != 0.0 && in.uv_scale.y != 0.0)) {
//#if LEAN
        // LEAN: baked atlas only — tile clamp at the per-surfel level, one textureSampleLevel.
        let lvl  = select(0.0, in.lod, tex_params.mip_mode != 0u);
        let dims = vec2<f32>(textureDimensions(atlas));
        let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 * exp2(lvl) / dims, vec2<f32>(0.0));
        let uv   = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        let rgba = textureSampleLevel(atlas, atlas_samp, uv, i32(in.layer), lvl);
        color = color + hf3(rgba.rgb) * hf(tex_params.atlas_scale) + hf3(hf(tex_params.atlas_offset));
//#else
        var uv    : vec2<f32>;
        var layer : i32 = i32(in.layer);
        var aniso_dx = vec2<f32>(0.0);   // mip_mode 2: atlas-uv footprint handed to textureSampleGrad
        var aniso_dy = vec2<f32>(0.0);
        var lod_s    = 0.0;              // explicit level for textureSampleLevel (modes 1 and 3)
        if tex_params.probe_mode != 0u {
            // ---- Proberes: shared single-layer texture, general 2x2 affine ----
            // Mirrors the CUDA ground truth (diff_surfel_3D_sh_res_probe
            // forward.cu case 5, flag 0x1000):
            //     uv = (rho3d <= rho2d) ? s : (0,0)
            //     tx = A00*uv.x + A01*uv.y + t0
            //     ty = A10*uv.x + A11*uv.y + t1
            //
            // The low-pass collapse is NOT foldable into the affine: when the
            // screen-space kernel wins, the sample point is the probe CENTRE,
            // not the ray-splat point. Dropping it corrupts distant geometry.
            let uv_eff = select(s, vec2<f32>(0.0), g.lp);
            // Zero storage reads — all six coefficients arrive as flat varyings.
            // uv_scale = (A00, A11) diagonal, uv_skew = (A01, A10) off-diagonal.
            uv = vec2<f32>(
                in.uv_scale.x * uv_eff.x + in.uv_skew.x  * uv_eff.y + in.uv_base.x,
                in.uv_skew.y  * uv_eff.x + in.uv_scale.y * uv_eff.y + in.uv_base.y,
            );
            layer = 0;
        } else if tex_params.mip_mode == 2u {
            // Anisotropic filtering (mip_mode 2, ?mipbias=aniso). The pixel's footprint on the tile — the
            // ray/plane uv at the two neighbouring pixels, scaled to texels — goes to the sampler as explicit
            // gradients: the hardware picks the mip level from the SHORT axis and takes up to 16 taps along the
            // LONG one (the long axis of a grazing surfel is what shimmers under level-0 bilinear). Works on
            // bundles without a chain too (level 0, taps only). in.lod carries the tile's exact-box-filter
            // level cap in this mode (preprocess_2dgs); the footprint is shrunk so the HW level never exceeds
            // it or spans more than the tile, and the clamp range is narrowed by the footprint + the bilinear
            // reach of that level, so no tap reads a neighbouring tile. Mirrors vk_raster --aniso (splat.frag ANISO).
            let pixf = floor(g.pix);
            let ix   = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
            let iy   = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
            let dsdx = select(vec2<f32>(0.0), ix.s - s, ix.ok);
            let dsdy = select(vec2<f32>(0.0), iy.s - s, iy.ok);
            let dims = vec2<f32>(textureDimensions(atlas));
            var tdx  = in.uv_scale * dsdx * dims;                              // texels per pixel step
            var tdy  = in.uv_scale * dsdy * dims;
            let tile = 2.0 * abs(in.uv_scale) * tex_params.uv_extent * dims;   // tile size in texels
            let hx   = 0.5 * (abs(tdx.x) + abs(tdy.x));                        // footprint half extents
            let hy   = 0.5 * (abs(tdx.y) + abs(tdy.y));
            let pmx  = max(length(tdx), length(tdy));
            let pmn  = min(length(tdx), length(tdy));
            let lodlen = max(pmn, pmx / 16.0);                                 // what the HW derives the level from
            var sc   = min(1.0, exp2(in.lod) / max(lodlen, 1e-6));
            sc = max(0.0, min(sc, 0.5 * min((tile.x - 1.0) / max(hx, 1e-6), (tile.y - 1.0) / max(hy, 1e-6))));
            tdx *= sc; tdy *= sc;
            let mg   = (vec2<f32>(hx, hy) * sc + 0.5 * (max(lodlen * sc, 1.0) - 1.0)) / dims;
            let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 / dims - mg, vec2<f32>(0.0));
            uv = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
            aniso_dx = tdx / dims; aniso_dy = tdy / dims;
        } else if tex_params.mip_mode == 3u {
            // Textbook trilinear mipmapping (mip_mode 3, ?mipbias=tri). Per PIXEL: the texel footprint from the
            // ray/plane uv at the two neighbouring pixels (same as the anisotropic path), the level from the LONGER
            // axis (rho = max |d texel / d pixel|, the GL/Vulkan implicit-LOD rule with isotropy 1), fractional,
            // sampled with textureSampleLevel through a sampler whose mipmapFilter is linear, so the two adjacent
            // levels blend — no per-surfel level, no pops, no seams. in.lod carries the tile's exact-box-filter
            // level cap (preprocess_2dgs: alignment + short side, down to 1 texel); the clamp keeps the bilinear
            // taps of the COARSER blended level inside the tile.
            let pixf = floor(g.pix);
            let ix   = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
            let iy   = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
            let dsdx = select(vec2<f32>(0.0), ix.s - s, ix.ok);
            let dsdy = select(vec2<f32>(0.0), iy.s - s, iy.ok);
            let dims = vec2<f32>(textureDimensions(atlas));
            let tdx  = in.uv_scale * dsdx * dims;                              // texels per pixel step
            let tdy  = in.uv_scale * dsdy * dims;
            let rho  = max(length(tdx), length(tdy));
            lod_s    = clamp(log2(max(rho, 1.0)), 0.0, in.lod);
            let mg   = 0.5 * exp2(ceil(lod_s)) / dims;
            let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - mg, vec2<f32>(0.0));
            uv = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        } else {
            // Clamp to the tile's texel-centre range at the sampled level (CUDA: au ∈ [u0, u0+w−1.001]
            // before the +½), so bilinear taps never reach the neighbouring tile in the atlas.
            let lvl  = select(0.0, in.lod, tex_params.mip_mode != 0u);
            lod_s    = lvl;
            let dims = vec2<f32>(textureDimensions(atlas));
            let hw   = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 * exp2(lvl) / dims, vec2<f32>(0.0));
            uv = clamp(in.uv_base + s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        }
        var rgba : vec4<f32>;
        if tex_params.mip_mode == 2u && tex_params.probe_mode == 0u {
            rgba = textureSampleGrad(atlas, atlas_samp, uv, layer, aniso_dx, aniso_dy);
        } else {
            // modes 0/1/3 (lod_s = 0 / per-surfel integer level / per-pixel fractional level); probe atlases
            // keep their own per-surfel trilinear LOD in in.lod.
            let lod_eff = select(lod_s, in.lod, tex_params.probe_mode != 0u && tex_params.mip_mode != 0u);
            rgba = textureSampleLevel(atlas, atlas_samp, uv, layer, lod_eff);
        }
        if tex_params.probe_mode == 3u {
            // Pair format: two surfels share one RGBA texel; this surfel decodes it with its own 3x4 matrix + bias
            // (record floats 6..20). The exporter folds the per-channel dequantisation into the matrix, so the header's
            // atlas_scale/offset are 1/0 and are not applied here.
            let b = (in.gauss_id & 0x3FFFFFFFu) * 21u + 6u;
            let r = vec4<f32>(rgba.r, rgba.g, rgba.b, rgba.a);
            color = color + hf3(vec3<f32>(
                dot(vec4<f32>(probe_recs[b + 0u], probe_recs[b + 1u], probe_recs[b + 2u],  probe_recs[b + 3u]),  r) + probe_recs[b + 12u],
                dot(vec4<f32>(probe_recs[b + 4u], probe_recs[b + 5u], probe_recs[b + 6u],  probe_recs[b + 7u]),  r) + probe_recs[b + 13u],
                dot(vec4<f32>(probe_recs[b + 8u], probe_recs[b + 9u], probe_recs[b + 10u], probe_recs[b + 11u]), r) + probe_recs[b + 14u]));
        } else {
            color = color + hf3(rgba.rgb) * hf(tex_params.atlas_scale) + hf3(hf(tex_params.atlas_offset));
        }
//#endif
    }
    return vec3<f32>(max(hf3(0.0), color + hf3(hf(tex_params.res_bias))));
}

fn shade(in: SplatIn, pos: vec2<f32>) -> ShadeOut {
    let g = shade_geom(in, pos);
    return ShadeOut(shade_color(in, g), g.a, g.zv);
}

// ---------------------------------------------------------------------------
// Sorted path (default): premultiplied output, blend order = radix-sorted
// instance order. Popping-prone when opaque surfels interpenetrate (per-splat
// center-depth global order vs per-pixel intersection order).
// ---------------------------------------------------------------------------
@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let sh = shade(sp, in.position.xy);
    return vec4<f32>(sh.rgb, 1.0) * sh.a;
}

//#if LEAN
//#else
// ---------------------------------------------------------------------------
// Texture-aware upscaling (nest-splatting docs/UPSCALING_GRADIENT_AWARE.md, "green gather" mode).
// Second render target, same premultiplied back-to-front blend as the colour: (α·∂Y/∂x, α·∂Y/∂y, 0, α).
// The blend then yields Σ α_i T_i · slope_i, the image-space slope contributed by the surfel textures.
// slope_i = d(residual)/d(pixel) of the atlas at this fragment: one textureGather of the green channel
// (luminance proxy; no extra data, no bake step) gives the 2x2 texels around the sample, their bilinear
// derivative in texel units, chained with d(texel)/d(pixel) from the ray-splat at the neighbouring
// pixels. Units: residual per LOW-RES pixel, which is what the upscaler's Hermite slopes are in.
// ---------------------------------------------------------------------------
// Slope source (pipeline constant): 0 = green-channel gather of the colour atlas (no data, FD + λ·slope in the
// upscaler), 1 = P field in the alpha of a BC7 sidecar (vk_raster --grad 5), 2 = BC5 slope sidecar (dY/du, dY/dv per
// texel, vk_raster --grad 4). 1/2 are finetuned for slope-only Hermite and follow the Vulkan path exactly: uv clamped
// to the tile's texel-centre range, no magnification gate, luminance-weighted ReLU gate (in fs_slope).
override SLOPE_SRC : u32 = 0u;
@group(3) @binding(6) var                slope_tex    : texture_2d_array<f32>;
@group(3) @binding(7) var<uniform>       slope_params : vec4<f32>;   // scale_u, off_u, scale_v, off_v (P: scale_p in .x)

fn tex_slope(in: SplatIn, g: ShadeGeom, pos: vec2<f32>) -> vec2<f32> {
    if tex_params.atlas_enabled == 0u || (in.gauss_id & 0xC0000000u) != 0u || tex_params.probe_mode != 0u
       || in.uv_scale.x == 0.0 || in.uv_scale.y == 0.0 || g.lp {
        return vec2<f32>(0.0);
    }
    let pixf = floor(pos);
    let ix = intersect_uv(in, pixf + vec2<f32>(1.0, 0.0));
    let iy = intersect_uv(in, pixf + vec2<f32>(0.0, 1.0));
    if !ix.ok || !iy.ok { return vec2<f32>(0.0); }
    let dsdx = ix.s - g.s;
    let dsdy = iy.s - g.s;
    let dims = vec2<f32>(textureDimensions(atlas));
    let k    = in.uv_scale * dims;                      // texels per unit of surfel uv
    var dPu : f32; var dPv : f32;
    if SLOPE_SRC == 0u {
        let uv   = in.uv_base + g.s * in.uv_scale;
        // Only where the texture is MAGNIFIED: with more than ~1.5 texels per low-res pixel the bilinear slope of
        // the 2x2 footprint says nothing about the image (minified / grazing surfels) and overshoots.
        let tpp  = max(length(abs(k) * dsdx), length(abs(k) * dsdy));
        if tpp > 1.5 { return vec2<f32>(0.0); }
        // The gathered 2x2 footprint must stay inside this surfel's tile (else it mixes in a neighbour tile).
        let half = abs(in.uv_scale) * tex_params.uv_extent - 1.0 / dims;
        if any(abs(uv - in.uv_base) > half) { return vec2<f32>(0.0); }
        let f    = fract(uv * dims - 0.5);                 // position inside the gathered 2x2 footprint
        let g4   = textureGather(1, atlas, atlas_samp, uv, i32(in.layer));   // x (i0,j1) y (i1,j1) z (i1,j0) w (i0,j0)
        dPu = mix(g4.z - g4.w, g4.y - g4.x, f.y) * tex_params.atlas_scale;   // per texel, residual units
        dPv = mix(g4.x - g4.w, g4.y - g4.z, f.x) * tex_params.atlas_scale;
    } else {
        // Mip-matched slope (accel bit 14, ?slope_mip=1): fetch the sidecar at the surfel's colour mip level
        // (in.lod — computed by preprocess for the CURRENT render target, i.e. the low-res one under upscaling)
        // so the slope is the derivative of the texture band-limited to the render rate. Level 0 otherwise.
        let nlev = f32(textureNumLevels(slope_tex));
        var lvl  = 0.0;
        if (render_settings.accel_flags & 16384u) != 0u && tex_params.mip_mode == 1u {   // aniso (2) stores the level CAP in lod, not a level
            lvl = clamp(round(in.lod), 0.0, max(nlev - 1.0, 0.0));
        }
        let sc   = exp2(lvl);
        let dimsl = dims / sc;                               // texel grid of the sampled level
        // Same tile clamp as shade_color (CUDA / vk_raster: au in [u0, u0+w-1]) at the sampled level.
        let hw = max(abs(in.uv_scale) * tex_params.uv_extent - 0.5 * sc / dims, vec2<f32>(0.0));
        let uv = clamp(in.uv_base + g.s * in.uv_scale, in.uv_base - hw, in.uv_base + hw);
        if SLOPE_SRC == 1u {
            let f  = fract(uv * dimsl - 0.5);
            var g4 : vec4<f32>;
            if lvl == 0.0 {
                g4 = textureGather(3, slope_tex, atlas_samp, uv, i32(in.layer));
            } else {
                // textureGather is level-0 only: read the 2x2 texel centres of level \`lvl\` with point-exact
                // bilinear taps (x (i0,j1) y (i1,j1) z (i1,j0) w (i0,j0), the gather's component order).
                let c0 = (floor(uv * dimsl - 0.5) + 0.5) / dimsl;
                let du = vec2<f32>(1.0 / dimsl.x, 0.0); let dv = vec2<f32>(0.0, 1.0 / dimsl.y);
                g4 = vec4<f32>(textureSampleLevel(slope_tex, atlas_samp, c0 + dv,      i32(in.layer), lvl).a,
                               textureSampleLevel(slope_tex, atlas_samp, c0 + du + dv, i32(in.layer), lvl).a,
                               textureSampleLevel(slope_tex, atlas_samp, c0 + du,      i32(in.layer), lvl).a,
                               textureSampleLevel(slope_tex, atlas_samp, c0,           i32(in.layer), lvl).a);
            }
            // per texel OF THE SAMPLED LEVEL → per level-0 texel (k below is in level-0 texels per uv unit)
            dPu = mix(g4.z - g4.w, g4.y - g4.x, f.y) * slope_params.x / sc;
            dPv = mix(g4.x - g4.w, g4.y - g4.z, f.x) * slope_params.x / sc;
        } else {
            let t = textureSampleLevel(slope_tex, atlas_samp, uv, i32(in.layer), lvl).rg;
            dPu = t.x * slope_params.x + slope_params.y;
            dPv = t.y * slope_params.z + slope_params.w;
        }
        // Texel-rate gate (same idea as the green mode's 1.5 cut, soft): at grazing / minified fragments the
        // pixel step crosses more than a texel OF THE SAMPLED LEVEL, so the per-texel slope times that step is
        // texel noise amplified by the step length — the speckle on edge-on surfels. Full weight up to 1 texel
        // per pixel, zero from 2. (The Vulkan finetune path has no gate; magnified fragments are unchanged.)
        let tppl = max(length(abs(k) * dsdx), length(abs(k) * dsdy)) / sc;
        let gate = clamp(2.0 - tppl, 0.0, 1.0);
        dPu *= gate; dPv *= gate;
    }
    return vec2<f32>(dPu * k.x * dsdx.x + dPv * k.y * dsdx.y,
                     dPu * k.x * dsdy.x + dPv * k.y * dsdy.y);
}

struct SlopeOut {
    @location(0) c : vec4<f32>,
    @location(1) g : vec4<f32>,
};

@fragment
fn fs_slope(in: VertexOutput) -> SlopeOut {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    let rgb = shade_color(sp, g);
    var sl = tex_slope(sp, g, in.position.xy);
    if SLOPE_SRC != 0u {   // channels clamped by the outer ReLU carry no slope (mode 0: rgb == 0 there)
        sl *= dot(vec3<f32>(0.299, 0.587, 0.114), select(vec3<f32>(0.0), vec3<f32>(1.0), rgb > vec3<f32>(0.0)));
    }
    return SlopeOut(vec4<f32>(rgb, 1.0) * g.a, vec4<f32>(sl, 0.0, 1.0) * g.a);
}

//#endif
// ---------------------------------------------------------------------------
// Two-pass "opaque layer + translucent front" path (?twopass=1, 2026-10-06,
// hardware depth 2026-10-07).
// Video-game style: pass 1 rasterises every surfel with the hardware depth
// test and keeps, per pixel, the NEAREST fragment whose kernel alpha exceeds
// \`thresh\` — its SV+atlas colour is written opaque into a depth32float-backed
// pass (no sort needed). Pass 2 draws the same sorted list again with the
// depth test LESS against that layer (read-only), so fragments at or behind
// the layer are rejected by the z-buffer — on hardware with early-Z before the
// fragment shader runs — and only the fragments in front are alpha-blended
// (sub-threshold by construction: anything above the threshold in front would
// have won pass 1). Pixels with no layer keep the clear depth (1.0) and
// composite exactly as the sorted path does.
//
// The depth comes from the VERTEX stage (HW_DEPTH build variant, see vs_main):
// the bound corners carry the surfel plane's z_ndc, which interpolates to the
// exact per-pixel ray/plane depth. The low-pass centre-depth fallback of the
// fragment path is not reproduced (sub-pixel splats test at their plane depth
// instead of their centre depth) — a negligible approximation.
// ---------------------------------------------------------------------------
struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};
struct TwoPassParams {
  thresh : f32,   // kernel-alpha threshold for the opaque layer
  _p0    : f32,
  _p1    : u32,
  _p2    : u32,
};
@group(3) @binding(0) var<uniform> camera  : CameraUniforms;
@group(3) @binding(1) var<uniform> twopass : TwoPassParams;

// View-space depth of the surfel plane at screen position \`pix\` (vertex stage).
// EWA ellipsoids (top bit of gauss_id) are billboards at their centre depth.
// Where the plane is degenerate at the corner (behind the eye / conic expansion
// invalid) fall back to the centre depth so the quad stays drawable.
fn corner_depth(sp: SplatIn, pix: vec2<f32>) -> f32 {
    var z = sp.depth_plane.z;
    if (sp.gauss_id & 0xC0000000u) == 0u {   // EWA + --tex3d kernels: centre depth
        let is = intersect_uv(sp, pix);
        if is.ok {
            let zp = dot(sp.depth_plane, vec3<f32>(is.s, 1.0));
            if zp >= 0.2 { z = zp; }
        }
    }
    return max(z, 0.2);
}

// Pass 1 — opaque layer. No blending; depth test LESS + write.
@fragment
fn fs_opaque(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a <= twopass.thresh { discard; }
    let rgb = shade_color(sp, g);
    return vec4<f32>(rgb, 1.0);
}

// Pass 2 — translucent front, sorted back-to-front, premultiplied over the
// pass-1 image; depth test LESS against the layer (read-only). The threshold
// discard is redundant with the depth test (see above) and kept so the layer
// fragment itself can never blend twice.
@fragment
fn fs_front(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a > twopass.thresh { discard; }
    let rgb = shade_color(sp, g);
    return vec4<f32>(rgb, 1.0) * g.a;
}

// ---------------------------------------------------------------------------
// Overdraw counters (the "Overdraw" view): each entry point adds 1.0 to an
// r16float target under additive blending, so the target holds per-pixel
// fragment counts (exact up to 2048). \`raster\` counts every fragment the
// rasteriser invokes (no discards); \`shaded\` counts fragments that survive
// every cull, i.e. the ones that pay for the colour stage. The two-pass
// variants pair with the same depth states as fs_opaque / fs_front, so with
// early-Z the counts show what the z-buffer rejected.
// ---------------------------------------------------------------------------
@fragment
fn fs_count_raster(in: VertexOutput) -> @location(0) vec4<f32> {
    return vec4<f32>(1.0);
}
@fragment
fn fs_count_shaded(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a < 0.0 { discard; }   // keeps the geometry stage live; never true
    return vec4<f32>(1.0);
}
@fragment
fn fs_count_opaque(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a <= twopass.thresh { discard; }
    return vec4<f32>(1.0);
}
@fragment
fn fs_count_front(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a > twopass.thresh { discard; }
    return vec4<f32>(1.0);
}


// ---------------------------------------------------------------------------
// Re-fetch upscaling (?up=refetch; nest-splatting scripts/topk_refetch_eval.py, docs/UPSCALING_GRADIENT_AWARE.md).
// The low-res pass keeps, per low-res pixel, the RF_K front-most surfels whose kernel alpha reaches rf.thr and their
// exact blend weights w = alpha * T; the full-res pass then upscales the low-res colour with FD-Hermite and adds, for
// each of the 4 low-res pixels around the output pixel (bilinear weights) and each kept surfel,
//     w * (feat(uv at the output pixel) - feat(uv at the low-res pixel)),
// i.e. the surfel's own texture re-fetched at the output pixel's exact ray/plane uv. Pass order per frame:
//   1. fs_refetch_select  — atomicMax insertion of (rank + 1) into RF_K slots (larger rank = nearer, back-to-front sort)
//   2. fs_refetch_cw      — colour + slot weights in one blended pass: only slot k's surfel writes alpha into channel k,
//                           every fragment attenuates it (premultiplied over), so channel k ends at alpha_k * T_k
//   3. fs_refetch_up      — full-res fullscreen pass (vs_rf_full)
//#if LEAN
//#else
// ---------------------------------------------------------------------------
const RF_K : u32 = 4u;
struct RefetchParams { wl : u32, hl : u32, W : u32, H : u32, thr : f32, gain : f32, edge : u32, _p1 : u32 };
@group(3) @binding(10) var<storage, read_write> rf_keys : array<atomic<u32>>;
@group(3) @binding(11) var<uniform>             rf      : RefetchParams;
@group(3) @binding(12) var                      rf_wa   : texture_2d<f32>;
@group(3) @binding(13) var                      rf_wb   : texture_2d<f32>;
@group(3) @binding(14) var                      rf_low  : texture_2d<f32>;
@group(3) @binding(15) var                      rf_wc   : texture_2d<f32>;

fn rf_base(pos: vec2<f32>) -> u32 {
    let p = vec2<u32>(floor(pos));
    return (min(p.y, rf.hl - 1u) * rf.wl + min(p.x, rf.wl - 1u)) * RF_K;
}

@fragment
fn fs_refetch_select(in: VertexOutput) -> @location(0) vec4<f32> {
    let sp = splat_in(in);
    let g  = shade_geom(sp, in.position.xy);
    if g.a >= rf.thr {
        let base = rf_base(in.position.xy);
        var v = in.rank + 1u;
        for (var k = 0u; k < RF_K; k++) {
            let old = atomicMax(&rf_keys[base + k], v);
            if old == 0u { break; }
            v = min(old, v);         // the smaller of the two moves on to the next slot
        }
    }
    return vec4<f32>(0.0);
}

struct RefetchOut {
    @location(0) c  : vec4<f32>,
    @location(1) wa : vec4<f32>,
    @location(2) wb : vec4<f32>,
    @location(3) wc : vec4<f32>,
};

// Targets after the blend: wa = (w0, w1, w2), wb = (w3, S.r, S.g), wc = (S.b, -, -), with w_k = alpha_k T_k of slot k
// and S = sum_k w_k feat_k (the slots' share of the low-res colour) — premultiplied over gives both directly.
@fragment
fn fs_refetch_cw(in: VertexOutput) -> RefetchOut {
    let sp  = splat_in(in);
    let g   = shade_geom(sp, in.position.xy);
    let rgb = shade_color(sp, g);
    let base = rf_base(in.position.xy);
    let key  = in.rank + 1u;
    var m = vec4<f32>(0.0);
    for (var k = 0u; k < RF_K; k++) {
        if atomicLoad(&rf_keys[base + k]) == key { m[k] = 1.0; }
    }
    let inslot = min(1.0, m.x + m.y + m.z + m.w);
    let sf = rgb * inslot;
    return RefetchOut(vec4<f32>(rgb, 1.0) * g.a, vec4<f32>(m.xyz, 1.0) * g.a,
                      vec4<f32>(m.w, sf.r, sf.g, 1.0) * g.a, vec4<f32>(sf.b, 0.0, 0.0, 1.0) * g.a);
}

// Kernel alpha of 2D surfel \`in\` at (fractional) low-res pixel \`pixf\`, for a render whose pixels are 1/lp_scale of a
// low-res pixel (the screen-space low-pass width scales with the render's pixel size); 0 where the fragment path
// discards. Same formula as shade_geom's 2D branch (pixf = the pixel index there), without the depth test.
fn rf_alpha(in: SplatIn, isect: Isect, pixf: vec2<f32>, lp_scale: f32) -> f32 {
    if !isect.ok { return 0.0; }
    let rho3d = dot(isect.s, isect.s);
    let d_pix = (in.center_pix - pixf) * lp_scale;
    let rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);
    let alp = exp(-rho2d * 0.5);
    var ab : f32;
    if BETA_KERNEL == 0u {
        ab = exp(-rho3d * 0.5);
    } else if rho3d >= K_BETA_SQ + 1e-6 {
        ab = 0.0;
    } else {
        let bs = max(0.0, 1.0 - rho3d / K_BETA_SQ);
        ab = select(pow(bs, in.shape), alp, bs <= 0.0);   // pow only where the base is positive
    }
    let b = min(0.99, in.color.a * max(ab, alp));
    return select(b, 0.0, b < 1.0 / 255.0);
}

@vertex
fn vs_rf_full(@builtin(vertex_index) i: u32) -> @builtin(position) vec4<f32> {
    var pos = array<vec2<f32>, 3>(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[i], 0.0, 1.0);
}
fn rf_f(x: i32, y: i32) -> vec3<f32> {
    return textureLoad(rf_low, vec2<i32>(clamp(x, 0, i32(rf.wl) - 1), clamp(y, 0, i32(rf.hl) - 1)), 0).rgb;
}
fn rf_gx(x: i32, y: i32) -> vec3<f32> {
    if (x <= 0) { return rf_f(1, y) - rf_f(0, y); }
    if (x >= i32(rf.wl) - 1) { return rf_f(x, y) - rf_f(x - 1, y); }
    return 0.5 * (rf_f(x + 1, y) - rf_f(x - 1, y));
}
fn rf_gy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return rf_f(x, 1) - rf_f(x, 0); }
    if (y >= i32(rf.hl) - 1) { return rf_f(x, y) - rf_f(x, y - 1); }
    return 0.5 * (rf_f(x, y + 1) - rf_f(x, y - 1));
}
fn rf_gxy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return rf_gx(x, 1) - rf_gx(x, 0); }
    if (y >= i32(rf.hl) - 1) { return rf_gx(x, y) - rf_gx(x, y - 1); }
    return 0.5 * (rf_gx(x, y + 1) - rf_gx(x, y - 1));
}

@fragment
fn fs_refetch_up(@builtin(position) fc: vec4<f32>) -> @location(0) vec4<f32> {
    let X = fc.x - 0.5; let Y = fc.y - 0.5;
    let rx = f32(rf.wl) / f32(rf.W); let ry = f32(rf.hl) / f32(rf.H);
    let x = (X + 0.5) * rx - 0.5; let y = (Y + 0.5) * ry - 0.5;     // output pixel in low-res pixel coordinates
    // FD-Hermite base (same as the upscaler's mode 2)
    let sx = clamp(x, 0.0, f32(rf.wl) - 1.0); let sy = clamp(y, 0.0, f32(rf.hl) - 1.0);
    let i0 = clamp(i32(floor(sx)), 0, max(i32(rf.wl) - 2, 0)); let j0 = clamp(i32(floor(sy)), 0, max(i32(rf.hl) - 2, 0));
    let tx = clamp(sx - f32(i0), 0.0, 1.0); let ty = clamp(sy - f32(j0), 0.0, 1.0);
    let tx2 = tx * tx; let tx3 = tx2 * tx; let ty2 = ty * ty; let ty3 = ty2 * ty;
    let Hx = vec2<f32>(2.0 * tx3 - 3.0 * tx2 + 1.0, -2.0 * tx3 + 3.0 * tx2); let Gx = vec2<f32>(tx3 - 2.0 * tx2 + tx, tx3 - tx2);
    let Hy = vec2<f32>(2.0 * ty3 - 3.0 * ty2 + 1.0, -2.0 * ty3 + 3.0 * ty2); let Gy = vec2<f32>(ty3 - 2.0 * ty2 + ty, ty3 - ty2);
    var c = vec3<f32>(0.0);
    for (var b = 0; b < 2; b++) {
        for (var a = 0; a < 2; a++) {
            let i = i0 + a; let j = j0 + b;
            c += rf_f(i, j) * (Hx[a] * Hy[b]) + rf_gx(i, j) * (Gx[a] * Hy[b]) + rf_gy(i, j) * (Hx[a] * Gy[b]) + rf_gxy(i, j) * (Gx[a] * Gy[b]);
        }
    }
    // Re-fetch correction over the 4 surrounding low-res records (bilinear weights bw, edge-clamped like the prototype).
    // Texture term:  sum_n bw_n (sum_k w'_nk f_hi(surfel_nk) - S_n),  S_n = sum_k w_nk f_lo,nk (stored by fs_refetch_cw),
    // so only the full-res side is evaluated here: one unpack, one ray/plane intersection, one atlas fetch per slot.
    // (A merge of the 4 neighbours' slots by surfel was tried and was 6x SLOWER: runtime-indexed local arrays spill.)
    // Edge recompose (rf.edge): w'_k = alpha'_k T'_k with alpha'_k the kernel alpha re-evaluated at the OUTPUT pixel
    // (native low-pass width) and T'_k = T_k * prod_{j<k} (1 - alpha'_j) / (1 - alpha_j) — the stack re-chained with the
    // sub-threshold leaks kept; T_k = w_k / alpha_k from the stored weight and the alpha recomputed at the low-res pixel.
    // What is behind the stack, R_n = C_lo,n - S_n = T_K,n B_n, is rescaled to the new transmittance with ONE behind
    // colour per output pixel, B = sum bw R / sum bw T_K, regularised towards the Hermite colour where every
    // neighbour's stack is opaque (nothing known behind it). edge = 0 reproduces the plain texture re-fetch exactly.
    var corr = vec3<f32>(0.0);
    if rf.gain > 0.0 && tex_params.atlas_enabled != 0u && tex_params.probe_mode == 0u {
        let fx0 = floor(x); let fy0 = floor(y);
        let fx = x - fx0; let fy = y - fy0;
        let pix_hi = vec2<f32>(x, y);
        let lp = f32(rf.W) / f32(rf.wl);          // output pixels per low-res pixel
        let edge = rf.edge != 0u;
        var rsum = vec3<f32>(0.0); var tk_sum = 0.0; var tkp_sum = 0.0;
        for (var b = 0; b < 2; b++) {
            for (var a = 0; a < 2; a++) {
                let li = clamp(i32(fx0) + a, 0, i32(rf.wl) - 1); let lj = clamp(i32(fy0) + b, 0, i32(rf.hl) - 1);
                let bw = select(1.0 - fx, fx, a == 1) * select(1.0 - fy, fy, b == 1);
                if bw <= 0.0 { continue; }
                let q = vec2<i32>(li, lj);
                let wa = textureLoad(rf_wa, q, 0); let wb = textureLoad(rf_wb, q, 0); let wc = textureLoad(rf_wc, q, 0);
                let s_n = vec3<f32>(wb.g, wb.b, wc.r);
                var acc = -s_n;
                let wk = vec4<f32>(wa.r, wa.g, wa.b, wb.r);
                let base = (u32(lj) * rf.wl + u32(li)) * RF_K;
                let pix_lo = vec2<f32>(f32(li), f32(lj));
                var rho = 1.0; var tk = 1.0; var tkp = 1.0;
                for (var k = 0u; k < RF_K; k++) {
                    let key = atomicLoad(&rf_keys[base + k]);
                    if key == 0u { break; }
                    let sp = unpack_splat(splats_2d[indices[key - 1u]]);
                    var w_new = wk[k];
                    var hi = intersect_uv(sp, pix_hi);
                    if edge && (sp.gauss_id & 0xC0000000u) == 0u {
                        let a_lo = max(rf_alpha(sp, intersect_uv(sp, pix_lo), pix_lo, 1.0), 1e-3);
                        let a_hi = rf_alpha(sp, hi, pix_hi, lp);
                        let t_k = wk[k] / a_lo;                 // transmittance in front of slot k at low res (leaks included)
                        w_new = a_hi * rho * t_k;
                        tk  = t_k * (1.0 - a_lo);
                        tkp = rho * t_k * (1.0 - a_hi);
                        rho *= (1.0 - a_hi) / max(1.0 - a_lo, 0.01);
                    }
                    if w_new <= 0.0 { continue; }
                    if !hi.ok { hi = intersect_uv(sp, pix_lo); }   // rare conic-validity edge: no re-fetch
                    var su = hi.s;
                    if (sp.gauss_id & 0x40000000u) != 0u { let r2 = dot(su, su); if r2 > 9.0 { su = su * sqrt(9.0 / r2); } }   // tex3d disc clamp
                    // EWA rows (top bit) skip the atlas inside shade_color: f = base colour = their f_lo, exact.
                    acc += w_new * shade_color(sp, ShadeGeom(su, 1.0, 1.0, false, pix_hi));
                }
                corr += bw * acc;
                if edge {
                    rsum += bw * (rf_f(li, lj) - s_n);
                    tk_sum += bw * tk; tkp_sum += bw * tkp;
                }
            }
        }
        if edge {
            let eps = 0.05;
            let behind = (rsum + eps * c) / (tk_sum + eps);
            corr += (tkp_sum - tk_sum) * behind;
        }
    }
    return vec4<f32>(max(c + rf.gain * corr, vec3<f32>(0.0)), 1.0);
}

//#endif
`,Wu=`const WG_SIZE = 256u;
const TILE_SIZE = 256u;
override RS_RADIX_LOG2 = 8u;  // 2 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 4 entries into the radix table

struct GeneralInfo{
  keys_size : u32,  dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

struct DrawIndirect {
    vertex_count: u32,
    instance_count: u32,
    first_vertex: u32,
    first_instance: u32,
}

@group(0) @binding(0) var<storage, read_write> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read_write> draw_indirect: DrawIndirect;

@compute @workgroup_size(1)
fn write_dispatch_triples(
    @builtin(workgroup_id)        wid: vec3<u32>,
    @builtin(local_invocation_id) lid: vec3<u32>
) {
    if wid.x == 0u && lid.x == 0u {
        draw_indirect.instance_count = infos.keys_size;
        // Histogram/Scatter dispatch X (elements divided by WG_SIZE)
        infos.dispatch_x = (infos.keys_size + WG_SIZE - 1u) / WG_SIZE;
        infos.dispatch_y = 1u;
        infos.dispatch_z = 1u;

        // Two-level tile counts
        let t0 = (infos.dispatch_x + TILE_SIZE - 1u) / TILE_SIZE;
        let t1 = (t0 + TILE_SIZE - 1u) / TILE_SIZE;

        // Triples for L0/L1 plus t0/t1
        infos.l0_x = t0; infos.l0_y = RS_RADIX_SIZE; infos.l0_z = 1u; infos.l0_t = t0;
        infos.l1_x = t1; infos.l1_y = RS_RADIX_SIZE; infos.l1_z = 1u; infos.l1_t = t1;
    }
}`,ju=`// 2DGS surfel cull pass — forked from gaussian_cull.wgsl.
//
// Reads per-Gauss \`Surfel\` (position + 2D scale + rotation + opacity + shape),
// builds the transmat T = (splat2world)^T · world2ndc · ndc2pix, computes the
// axis-aligned screen-space bbox via compute_aabb, AABB-culls against the
// viewport, and writes the alive Gauss compactly into:
//   • splats_2d  : Splat2DGS (Tu/Tv/Tw + opacity + pos + extent + depth_plane + gauss_id + shape)
//   • sh_solvers : SHSolver  (view_dir + opacity + gauss_id, for later SH/SV eval)
//   • sort_depths/sort_indices : keys & payload for radix sort
//
// Compaction uses workgroup-local prefix sum + a single atomicAdd per workgroup
// to allocate the output offset. No inter-workgroup spin-wait.

struct GeneralInfo {
  keys_size  : atomic<u32>,
  dispatch_x : u32, dispatch_y : u32, dispatch_z : u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

const WG_SIZE : u32 = 256u;

struct CameraUniforms {
  view     : mat4x4<f32>,
  view_inv : mat4x4<f32>,
  proj     : mat4x4<f32>,
  proj_inv : mat4x4<f32>,
  viewport : vec2<f32>,
  focal    : vec2<f32>,
};

// 32-byte input surfel (matches PLY worker output).
//
// IMPORTANT: WGSL would naturally size this struct at 28 bytes (3 f32 +
// 4 u32, all 4-aligned) with \`array<Surfel>\` stride 28, but the JS-side
// SurfelPlyParser writes 32 bytes per record (xyz f32 + 4 u32 + 1 pad u32).
// Without the explicit \`_pad\` field below, surfel N would read at offset
// N*28 in WGSL while JS wrote it at N*32 — every surfel past #0 ends up
// reading garbage from the middle of an earlier record. That single
// alignment bug is what made the renderer look completely broken.
struct Surfel {
  x : f32, y : f32, z : f32,
  opacity_shape : u32,            // 2× f16: [opacity, shape]
  scale_rot     : array<u32, 3>,  // 6× f16: [scale_x, scale_y, rot_w, rot_x, rot_y, rot_z]
  // \`--method mixed_3d\` aux word — was \`_pad\` before mixed_3d. JS PLY parser
  // writes 1 (is_textured=true, scale_z=0) for every Gauss in pre-mixed_3d
  // bundles, so the textured branch below is bit-identically the old path
  // (the EWA branch is gated on \`(aux >> 16) & 1 == 0u\`).
  //   bits  0..15 : scale_z (f16, exp'd from log-space PLY column);
  //                 ignored when is_textured = 1.
  //   bit      16 : is_textured (1 = 2DGS surfel + atlas residual path;
  //                              0 = mixed_3d untextured 3D EWA ellipsoid).
  //   bits 17..31 : reserved.
  aux           : u32,
};

// 96-byte output splat. Extended 2026-07-23 with atlas-UV precomp fields
// (uv_base_*, uv_scale_*, layer) that preprocess_2dgs.wgsl fills once per
// alive Gauss so the fragment shader can do \`uv = uv_base + s * uv_scale\`
// and a single HW texture fetch — kills 5 storage-buffer reads + 2 fp32
// divides per fragment on the atlas path. Cull just zero-initialises the
// new fields; preprocess overwrites.
//
// Stride must match preprocess_2dgs.wgsl + render_2dgs.wgsl + the host TS
// (\`C_SIZE_2D_SPLAT = 96\` in gaussian-renderer.ts).
struct Splat2DGS {
  tu_x : f32, tu_y : f32, tu_z : f32,
  tv_x : f32, tv_y : f32, tv_z : f32,
  tw_x : f32, tw_y : f32, tw_z : f32,
  opacity      : f32,
  pos          : u32, // 2× i16 center_pix in ¼-px units (pack_center / unpack_center)
  extent       : u32, // 2× f16 extent_pix
  color_rg     : u32, // 2× f16, written by preprocess
  color_b_shape: u32, // 2× f16, .x=color.b .y=shape
  gauss_id     : u32,
  depth_u      : f32,
  depth_v      : f32,
  depth_center : f32,
  uv_base_x    : f32,
  uv_base_y    : f32,
  uv_scale_x   : f32,
  uv_scale_y   : f32,
  layer        : u32,
  _pad         : u32,
};

// 12-byte solver — view dir + opacity + idx. Preprocess reads this to evaluate
// per-frame view-dependent color and writes the result into Splat2DGS.color_*.
struct SHSolver {
  dir_xy        : u32, // 2× f16 = [dir.x, dir.y]
  dir_z_opacity : u32, // 2× f16 = [dir.z, opacity]
  idx           : u32, // gauss_id (input vertex index)
};

// 32-byte RenderSettings (matches render-settings.ts canonical layout).
//   word at offset 8 = accel_flags
//     bit 0 → OAC: opacity-aware cutoff (shrink k per-surfel by opacity·shape)
//     bit 1 → SPR: sub-pixel rejection (drop tiny low-opacity surfels)
//     bit 2 → BFC: backface cull (drop surfels where normal points away from
//             camera; only safe on 1-sided bakes — many 2DGS bakes train
//             double-sided so leave OFF unless visually verified)
struct RenderSettings {
  canvas_size      : vec2<u32>,
  accel_flags      : u32,
  _pad0            : u32,
  gaussian_scaling : f32,
  kernel_size      : f32,
  mip_spatting     : u32,
  walltime         : f32,
  // --xclip (2026-11-04): exact half-space clip, camera space. clip_plane = (a,b,c,d) with the
  // fragment REMOVED where a*x+b*y+c*z+d > 0 at its ray-surfel hit (kept half n.x+d <= 0, the
  // nest-splatting Camera.clip_plane convention, transformed per frame by the host).
  // clip_intr = (fx, fy, cx, cy) in render-target pixels; clip_intr.x == 0 => clip off.
  clip_plane       : vec4<f32>,
  clip_intr        : vec4<f32>,
};

@group(0) @binding(0) var<uniform> camera          : CameraUniforms;
@group(0) @binding(1) var<uniform> render_settings : RenderSettings;

@group(1) @binding(0) var<storage, read>       surfels   : array<Surfel>;
@group(1) @binding(1) var<storage, read_write> splats_2d : array<Splat2DGS>;

@group(2) @binding(0) var<storage, read_write> sort_infos    : GeneralInfo;
@group(2) @binding(1) var<storage, read_write> sort_depths   : array<u32>;
@group(2) @binding(2) var<storage, read_write> sort_indices  : array<u32>;
@group(2) @binding(3) var<storage, read_write> sh_solvers    : array<SHSolver>;

// Backface-cull params (centroid-oriented BFC — matches nest-splatting's
// train.py --backface_cull + the CUDA lean_occ set_backface_cull):
//   n_out = disc_normal * sign(dot(disc_normal, pos − centroid))
//   cull when dot(normalize(pos − cam), n_out) > cos_thr
// cos_thr > 1.0 is the OFF sentinel → the ACCEL_BFC bit falls back to the
// legacy sign-naive test (old bundles keep their behavior). Host seeds the
// centroid from the loaded surfel cloud's mean at boot.
struct BfcParams {
  cos_thr : f32,
  cx : f32, cy : f32, cz : f32,
};
@group(3) @binding(1) var<uniform> bfc_params : BfcParams;
//#if STATIC_KEYS
// Fixed per-surfel sort keys (portal background): > 0 replaces the live view depth as the
// radix-sort key, so these surfels keep one global order however the camera moves.
@group(3) @binding(2) var<storage, read> static_keys : array<f32>;
//#endif

// Splat2DGS.pos: centre in ¼-px units as two i16 (low = x, high = y).
// Exact integer grid (pack2x16snorm's 1/32767 scale is NOT a ¼-px grid and
// drifts 0.12 px by x = 4000). Unpack in render_2dgs.wgsl: unpack_center.
fn pack_center(c: vec2<f32>) -> u32 {
    let q = vec2<i32>(round(c * 4.0));
    return (u32(q.x) & 0xFFFFu) | (u32(q.y) << 16u);
}

fn quat_to_rotmat(q: vec4<f32>) -> mat3x3<f32> {
    let qn = q * inverseSqrt(max(dot(q, q), 1e-20));
    let w = qn.x; let x = qn.y; let y = qn.z; let z = qn.w;
    let x2 = x*x; let y2 = y*y; let z2 = z*z;
    let xy = x*y; let xz = x*z; let yz = y*z;
    let wx = w*x; let wy = w*y; let wz = w*z;
    return mat3x3<f32>(
        vec3<f32>(1.0 - 2.0*(y2 + z2), 2.0*(xy + wz),       2.0*(xz - wy)),
        vec3<f32>(2.0*(xy - wz),       1.0 - 2.0*(x2 + z2), 2.0*(yz + wx)),
        vec3<f32>(2.0*(xz + wy),       2.0*(yz - wx),       1.0 - 2.0*(x2 + y2))
    );
}

// Opacity-aware cutoff (OAC) — BetaScaled kernel.
// The fragment shader discards when \`opacity · (1 − ρ²/k²)^shape < 1/255\`.
// Solve for ρ:
//   k_eff = k · √(1 − (1/(255·opa))^(1/shape))
// Tighter than the compact-support k, especially for low-opacity surfels.
// Returns at least 0.5 to avoid the bbox shrinking below the minimum quad
// the vertex shader applies.
fn opacity_aware_cutoff(k: f32, opacity: f32, shape: f32) -> f32 {
    let inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
    let inv_pow = pow(inv, 1.0 / max(shape, 1e-3));
    let inside = max(0.0, 1.0 - inv_pow);
    return max(0.5, k * sqrt(inside));
}

// Opacity-aware cutoff — Gaussian kernel (--kernel gaussian, shape == 0).
// Solve \`α · exp(-ρ²/2) = 1/255\` → ρ = √(2·log(255·α)).
// For α = 1 → ρ ≈ 3.33; α = 0.5 → 3.0; α = 0.1 → 2.5. Tighter than the
// hardcoded 3.0 in the beta path's caller for low-α surfels, which is
// exactly the win we want on Gaussian bakes (loose binning was leaving the
// SnugBox+AccuTile pass over-emitting tiles for these). Same 0.5 floor.
fn opacity_aware_cutoff_gaussian(opacity: f32) -> f32 {
    let log_term = log(255.0 * max(opacity, 1.0 / 255.0));
    return max(0.5, sqrt(2.0 * log_term));
}

// Axis-aligned bbox of the projected disk via the standard transmat conic
// (matches CUDA \`compute_aabb\` in diff_surfel_bake_render). Returns
// (cx, cy, hx, hy) in pixel coords. hx<0 ⇒ degenerate (caller culls).
fn compute_aabb(T: mat3x3<f32>, cutoff: f32) -> vec4<f32> {
    let t = vec3<f32>(cutoff * cutoff, cutoff * cutoff, -1.0);
    let d = dot(t, T[2] * T[2]);
    if d >= 0.0 { return vec4<f32>(0.0, 0.0, -1.0, -1.0); }
    let f = (1.0 / d) * t;
    let p  = vec2<f32>(dot(f, T[0] * T[2]), dot(f, T[1] * T[2]));
    let h0 = p * p - vec2<f32>(dot(f, T[0] * T[0]), dot(f, T[1] * T[1]));
    if any(h0 < vec2<f32>(0.0)) { return vec4<f32>(0.0, 0.0, -1.0, -1.0); }
    let h = sqrt(h0);
    return vec4<f32>(p.x, p.y, h.x, h.y);
}

// SnugBox AABB — same ellipse, computed via the cross-product / quadratic
// form Q(p) = A·px² + 2B·px·py + E·py² + 2D·px + 2F·py + G ≤ 0 with
// coefficients derived from {n0,n1,n2} = {Tv×Tw, Tw×Tu, Tu×Tv}. Numerically
// stable: doesn't catastrophically lose digits on edge-on splats where the
// standard \`compute_aabb\` returns negative axes (caller would cull). Ports
// directly from Halloumi-web-splat's preprocess_2dgs.wgsl::compute_aabb_snugbox.
// On bonsai's foreground glass orb this recovers ~12% of foreground pixels.
fn compute_aabb_snugbox(T: mat3x3<f32>, cutoff: f32) -> vec4<f32> {
    let k_sq = cutoff * cutoff;
    let Tu = T[0];
    let Tv = T[1];
    let Tw = T[2];

    let n0 = cross(Tv, Tw);  // coef of px
    let n1 = cross(Tw, Tu);  // coef of py
    let n2 = cross(Tu, Tv);  // constant

    let A_ = n0.x*n0.x + n0.y*n0.y - k_sq * n0.z*n0.z;
    let B_ = n0.x*n1.x + n0.y*n1.y - k_sq * n0.z*n1.z;
    let E_ = n1.x*n1.x + n1.y*n1.y - k_sq * n1.z*n1.z;
    let D_ = n0.x*n2.x + n0.y*n2.y - k_sq * n0.z*n2.z;
    let F_ = n1.x*n2.x + n1.y*n2.y - k_sq * n1.z*n2.z;

    let det = A_*E_ - B_*B_;
    if !(det > 0.0) || !(A_ > 0.0) || !(E_ > 0.0) {
        return vec4<f32>(0.0, 0.0, -1.0, -1.0);
    }

    // Center p = ellipse gradient zero (Cramer on ∇Q = 0).
    let p_x = (B_*F_ - E_*D_) / det;
    let p_y = (B_*D_ - A_*F_) / det;

    // t = -Q(p). Evaluating via the cross-product form (each component
    // O(1) after gradient cancellation) keeps ~7 more digits than the
    // direct (D·p + F·p + G) form.
    let cx_p = p_x*n0.x + p_y*n1.x + n2.x;
    let cy_p = p_x*n0.y + p_y*n1.y + n2.y;
    let cz_p = p_x*n0.z + p_y*n1.z + n2.z;
    let t_   = -(cx_p*cx_p + cy_p*cy_p - k_sq * cz_p*cz_p);
    if !(t_ > 0.0) {
        return vec4<f32>(0.0, 0.0, -1.0, -1.0);
    }

    // Axis-aligned bbox half-extents of the centered ellipse:
    //   max |px| s.t. A·dx² + 2B·dx·dy + E·dy² ≤ t  ⇒  dx² = t·E / det
    let hx = sqrt(t_ * E_ / det);
    let hy = sqrt(t_ * A_ / det);
    return vec4<f32>(p_x, p_y, hx, hy);
}

// \`--method mixed_3d\` untextured EWA 3D-ellipsoid projection. Ports the
// FastGS-verbatim path I just landed in diff_surfel_bake_render's CUDA
// preprocess (cuda_rasterizer/forward.cu compute_ewa_conic + the AccuTile
// AABB block I added at forward.cu:617). Returns:
//   .xy   = pixel-space center (CUDA convention — same as compute_aabb_snugbox);
//   .zw   = per-axis tight half-extents (in pixels).
// Conic (a, b, c) = inverse 2D covariance is returned via out_conic; degenerate
// conics return half-extent < 0 so the caller culls.
fn compute_ewa_cov2d_pixel(
    xyz: vec3<f32>,
    scales: vec3<f32>,           // (sx, sy, sz), already exp'd from log-space + multiplied by gaussian_scaling.
    rot: vec4<f32>,
    camspace: vec3<f32>,         // camera-space position (camera.view * xyz).xyz
    opacity: f32,
    out_conic: ptr<function, vec3<f32>>,
    out_coef: ptr<function, f32>,
) -> vec4<f32> {
    *out_coef = 1.0;
    // World covariance Σw = R · diag(sx²,sy²,sz²) · Rᵀ. Quat → R.
    let R = quat_to_rotmat(rot);
    let s2 = scales * scales;
    let r0 = R[0]; let r1 = R[1]; let r2 = R[2];

    // Σw is symmetric 3x3 — keep 6 components.
    let cw_xx = s2.x*r0.x*r0.x + s2.y*r1.x*r1.x + s2.z*r2.x*r2.x;
    let cw_xy = s2.x*r0.x*r0.y + s2.y*r1.x*r1.y + s2.z*r2.x*r2.y;
    let cw_xz = s2.x*r0.x*r0.z + s2.y*r1.x*r1.z + s2.z*r2.x*r2.z;
    let cw_yy = s2.x*r0.y*r0.y + s2.y*r1.y*r1.y + s2.z*r2.y*r2.y;
    let cw_yz = s2.x*r0.y*r0.z + s2.y*r1.y*r1.z + s2.z*r2.y*r2.z;
    let cw_zz = s2.x*r0.z*r0.z + s2.y*r1.z*r1.z + s2.z*r2.z*r2.z;

    // T = J · W, where W is the view rotation submatrix and J is the FastGS
    // Jacobian of the perspective projection at camera-space position t:
    //   J = [[fx/t.z,    0,    -fx·t.x/t.z²],
    //        [   0,   fy/t.z,  -fy·t.y/t.z²],
    //        [   0,      0,         0      ]]   (last row dropped)
    // Σs (screen-space 2D cov) = T · Σw · Tᵀ.
    let t  = camspace;
    let tz = sign(t.z) * max(abs(t.z), 1e-6);   // protect against /0 without flipping sign
    let zi = 1.0 / tz;
    let fx = camera.focal.x;
    let fy = camera.focal.y;
    let view_R = mat3x3<f32>(
        camera.view[0].xyz, camera.view[1].xyz, camera.view[2].xyz,
    );

    // T (2x3) — 2 rows (the screen-x and screen-y row), 3 world cols.
    // Row 0 = J row 0 · W:  (fx·zi, 0, -fx·t.x·zi²) · W
    // Row 1 = J row 1 · W:  (0, fy·zi, -fy·t.y·zi²) · W
    let j0 = vec3<f32>(fx * zi, 0.0, -fx * t.x * zi * zi);
    let j1 = vec3<f32>(0.0,     fy * zi, -fy * t.y * zi * zi);
    let T0 = vec3<f32>(dot(j0, view_R[0]), dot(j0, view_R[1]), dot(j0, view_R[2]));
    let T1 = vec3<f32>(dot(j1, view_R[0]), dot(j1, view_R[1]), dot(j1, view_R[2]));

    // Σs = T · Σw · Tᵀ. Symmetric 2x2 → 3 entries (xx, xy, yy).
    // Tw0 = Σw · T0 (3-vec), Tw1 = Σw · T1.
    let Tw0 = vec3<f32>(
        cw_xx*T0.x + cw_xy*T0.y + cw_xz*T0.z,
        cw_xy*T0.x + cw_yy*T0.y + cw_yz*T0.z,
        cw_xz*T0.x + cw_yz*T0.y + cw_zz*T0.z,
    );
    let Tw1 = vec3<f32>(
        cw_xx*T1.x + cw_xy*T1.y + cw_xz*T1.z,
        cw_xy*T1.x + cw_yy*T1.y + cw_yz*T1.z,
        cw_xz*T1.x + cw_yz*T1.y + cw_zz*T1.z,
    );
    var sxx = dot(T0, Tw0);
    var sxy = dot(T0, Tw1);
    var syy = dot(T1, Tw1);

    // Mip low-pass (FastGS eps2d = 0.3) — adds a sub-pixel filter so
    // far-away EWA Gaussians don't degenerate to a near-zero conic.
    // ?mip2d=1 (accel bit 13): Mip-Splatting 2D Mip filter — same dilation (k from bits
    // 16..31, f16; 0 ⇒ 0.3) plus the opacity normalisation sqrt(det_before / det_after).
    // Off: k = 0.3 and coef = 1, i.e. exactly the previous code.
    let mip2d = (render_settings.accel_flags & 8192u) != 0u;
    var kd = 0.3;
    var det0 = 0.0;
    if mip2d {
        let kh = unpack2x16float(render_settings.accel_flags >> 16u).x;
        if kh > 0.0 { kd = kh; }
        det0 = sxx * syy - sxy * sxy;
    }
    sxx = sxx + kd;
    syy = syy + kd;

    let det = sxx * syy - sxy * sxy;
    if !(det > 0.0) {
        *out_conic = vec3<f32>(0.0);
        return vec4<f32>(0.0, 0.0, -1.0, -1.0);
    }

    // Conic = Σ⁻¹.
    let inv = 1.0 / det;
    *out_conic = vec3<f32>(syy * inv, -sxy * inv, sxx * inv);

    // Opacity-aware Mahalanobis-squared cutoff: 1/255 alpha-floor =>
    //   α · exp(-m/2) > 1/255   ⇔   m < 2·log(255·α).
    // Anything outside this iso-line is culled by the fragment shader's
    // \`α·exp(-m/2) < 1/255\` check, so binning to it is lossless.
    var opa_eff = opacity;
    if mip2d {
        *out_coef = sqrt(max(det0, 0.0) / det);
        opa_eff = opacity * (*out_coef);
    }
    let t_cut = max(0.5, 2.0 * log(255.0 * max(opa_eff, 1.0 / 255.0)));
    let r_cut = sqrt(t_cut);

    // Per-axis tight half-extents at the cutoff iso-line. Σs.xx == sxx, so
    // half_w = r_cut · √Σs.xx (no inverse-roundtrip needed). Screen-axis-
    // aligned bbox is slightly loose for rotated EWA ellipses (vs. tight
    // principal-axes bbox), but the per-surfel atan2+cos+sin cost of computing
    // the principal-axis rotation in WGSL outweighs the saved fragments in
    // practice. Sticking with the simpler axis-aligned form.
    let hx = r_cut * sqrt(sxx);
    let hy = r_cut * sqrt(syy);

    // Pixel-space center in CUDA convention (matches compute_aabb_snugbox).
    // Use proj_raw (Y-flip undone) so wgpu's NDC matches the CUDA-convention
    // pixel coords the rest of the pipeline already produces for textured.
    var proj_raw = camera.proj;
    proj_raw[0].y = -proj_raw[0].y;
    proj_raw[1].y = -proj_raw[1].y;
    proj_raw[2].y = -proj_raw[2].y;
    proj_raw[3].y = -proj_raw[3].y;
    let pos2d_cuda = proj_raw * vec4<f32>(camspace, 1.0);
    let inv_w = 1.0 / pos2d_cuda.w;
    let ndc_cuda = pos2d_cuda.xy * inv_w;
    let W = camera.viewport.x;
    let H = camera.viewport.y;
    let cx = ndc_cuda.x * (W * 0.5) + (W - 1.0) * 0.5;
    let cy = ndc_cuda.y * (H * 0.5) + (H - 1.0) * 0.5;
    return vec4<f32>(cx, cy, hx, hy);
}

var<workgroup> scan0      : array<u32, WG_SIZE>;
var<workgroup> scan1      : array<u32, WG_SIZE>;
var<workgroup> group_base : u32;

@compute @workgroup_size(WG_SIZE)
fn surfel_cull(
  @builtin(global_invocation_id) gid : vec3<u32>,
  @builtin(local_invocation_id)  lid : vec3<u32>
) {
    var alive : u32 = 0u;

    // Per-element staging that the alive lane will commit at the end.
    var tu : vec3<f32>;
    var tv : vec3<f32>;
    var tw : vec3<f32>;
    var center_pix : vec2<f32>;
    var extent_pix : vec2<f32>;
    var depth_u    : f32;
    var depth_v    : f32;
    var depth_center : f32;
    var depth      : f32;
    var opacity    : f32;
    var shape      : f32;
    var view_dir   : vec3<f32>;
    // \`--method mixed_3d\` per-Gauss textured/untextured flag, persisted out of
    // the inner block so the store can OR it into gauss_id's top bit. Default 1
    // (textured) — bit-identical to the pre-mixed_3d path when every surfel is
    // textured (which is every existing bundle on the demo site).
    var is_textured_flag : u32 = 1u;
    // \`--tex3d\` (aux bit 17): textured surfel rendered as a 3D EWA kernel with the
    // atlas on its XY plane. Stored in gauss_id bit 30 for the fragment.
    var tex3d_flag : u32 = 0u;

    let idx = gid.x;
    if idx < arrayLength(&surfels) {
        let s = surfels[idx];
        let xyz = vec3<f32>(s.x, s.y, s.z);

        let opa_shape = unpack2x16float(s.opacity_shape);
        opacity = opa_shape.x;
        shape   = opa_shape.y;

        // View clip (pos2d / w  ∈ [−1.2, 1.2]).
        let camspace = camera.view * vec4<f32>(xyz, 1.0);
        let pos2d    = camera.proj * camspace;
//#if WIDE_FRUSTUM
        // Portal: keep every surfel whose CENTRE projects anywhere Splat2DGS.pos can store
        // (±8191 px, ¼-px i16). The 1.2 test below drops big surfels (sky, clouds) whose
        // centre sits just off-screen although their footprint covers the view, so they
        // pop in and out as the camera moves; training (CUDA) never culls on the centre.
        let bounds   = (8000.0 / (0.5 * max(camera.viewport.x, camera.viewport.y))) * pos2d.w;
//#else
        let bounds   = 1.2 * pos2d.w;
//#endif
        let z_ndc    = pos2d.z / pos2d.w;

        if z_ndc > 0.0 && z_ndc < 1.0
            && pos2d.x >= -bounds && pos2d.x <= bounds
            && pos2d.y >= -bounds && pos2d.y <= bounds
            && opacity > 1.0 / 255.0 {


            let scale_packed = unpack2x16float(s.scale_rot[0]);
            let rot_wx       = unpack2x16float(s.scale_rot[1]);
            let rot_yz       = unpack2x16float(s.scale_rot[2]);

            let scaling = render_settings.gaussian_scaling;
            let sx = scale_packed.x * scaling;
            let sy = scale_packed.y * scaling;
            let rot = vec4<f32>(rot_wx.x, rot_wx.y, rot_yz.x, rot_yz.y);

            let R = quat_to_rotmat(rot);

            // \`--method mixed_3d\` aux split: bit 16 = is_textured (default 1 →
            // standard 2DGS path), bits 0..15 = scale_z (f16, exp'd from
            // log-space, ignored when textured). For mixed_3d untextured rows
            // we jump to the EWA branch at the bottom; textured rows take the
            // existing 2DGS path verbatim.
            is_textured_flag = (s.aux >> 16u) & 1u;
            tex3d_flag = ((s.aux >> 17u) & 1u) & is_textured_flag;
            let aux_lo16 = s.aux & 0xFFFFu;
            let sz       = unpack2x16float(aux_lo16).x * scaling;

            if is_textured_flag != 0u {

            // Backface cull (BFC, bit 2). 2DGS surfels lie in the local x-y
            // plane, so the local z-axis (R column 2) is the surface normal.
            // Cull when (pos − cam)·n > 0 — the normal points away from the
            // camera, i.e. we're looking at the back side.
            //
            // The win is downstream: a smaller alive list shrinks the sort
            // input by ~½ and the HW raster's vertex-instance count along
            // with it. We can't bail out of the surrounding \`if z_ndc > 0\`
            // block (would skip workgroupBarrier() and break compaction),
            // so backface lanes still finish the per-surfel math but never
            // set \`alive = 1u\`.
            //
            // Off by default — many 2DGS bakes train double-sided, so
            // enabling this can punch holes in surfaces. Verify visually
            // per-scene before relying on it.
            var alive_geom : bool = true;
            if (render_settings.accel_flags & 4u) != 0u {
                let camera_pos = camera.view_inv[3].xyz;
                if bfc_params.cos_thr <= 1.0 {
                    // Centroid-oriented BFC (training-matched): orient the
                    // disc normal outward via the cloud centroid, fade the
                    // surfel out as it turns away past the cos threshold.
                    // Required for --backface_cull-trained checkpoints —
                    // their back shell is unsupervised garbage without it.
                    //
                    // SMOOTH fade (±BFC_FADE_BAND around the threshold)
                    // instead of a binary kill: a hard per-view predicate
                    // pops silhouette surfels in/out as the camera orbits
                    // (the decision boundary sweeps across them). Fading
                    // opacity over the band is stateless and view-continuous
                    // — same surfel set, no temporal popping.
                    const BFC_FADE_BAND : f32 = 0.08;
                    var n = R[2];
                    let rel = xyz - vec3<f32>(bfc_params.cx, bfc_params.cy, bfc_params.cz);
                    if dot(n, rel) < 0.0 { n = -n; }
                    let vd = xyz - camera_pos;
                    let inv_len = inverseSqrt(max(dot(vd, vd), 1e-24));
                    let facing = dot(vd, n) * inv_len;
                    let fade = 1.0 - smoothstep(bfc_params.cos_thr - BFC_FADE_BAND,
                                                bfc_params.cos_thr + BFC_FADE_BAND,
                                                facing);
                    opacity = opacity * fade;
                    if opacity <= 1.0 / 255.0 {
                        alive_geom = false;
                    }
                } else if dot(R[2], xyz - camera_pos) > 0.0 {
                    // Legacy sign-naive test (pre-centroid bundles).
                    alive_geom = false;
                }
            }

            let L0 = R[0] * sx;
            let L1 = R[1] * sy;
            depth_u = (camera.view * vec4<f32>(L0, 0.0)).z;
            depth_v = (camera.view * vec4<f32>(L1, 0.0)).z;
            depth_center = camspace.z;

            // Build T = (splat2world)^T · world2ndc · ndc2pix. We undo the wgpu
            // Y-flip that's baked into camera.proj so the math runs in the
            // CUDA-standard Y-up NDC, then ndc2pix converts to pixel coords.
            let s2w_r0 = vec4<f32>(L0, 0.0);
            let s2w_r1 = vec4<f32>(L1, 0.0);
            let s2w_r2 = vec4<f32>(xyz, 1.0);

            var proj_raw = camera.proj;
            proj_raw[0].y = -proj_raw[0].y;
            proj_raw[1].y = -proj_raw[1].y;
            proj_raw[2].y = -proj_raw[2].y;
            proj_raw[3].y = -proj_raw[3].y;
            let M = transpose(proj_raw * camera.view);

            let I0 = vec4<f32>(dot(s2w_r0, M[0]), dot(s2w_r0, M[1]), dot(s2w_r0, M[2]), dot(s2w_r0, M[3]));
            let I1 = vec4<f32>(dot(s2w_r1, M[0]), dot(s2w_r1, M[1]), dot(s2w_r1, M[2]), dot(s2w_r1, M[3]));
            let I2 = vec4<f32>(dot(s2w_r2, M[0]), dot(s2w_r2, M[1]), dot(s2w_r2, M[2]), dot(s2w_r2, M[3]));

            let W = camera.viewport.x;
            let H = camera.viewport.y;
            let np0 = vec4<f32>(W / 2.0, 0.0, 0.0, (W - 1.0) / 2.0);
            let np1 = vec4<f32>(0.0, H / 2.0, 0.0, (H - 1.0) / 2.0);
            let np2 = vec4<f32>(0.0, 0.0, 0.0, 1.0);

            let T_mat = mat3x3<f32>(
                vec3<f32>(dot(I0, np0), dot(I1, np0), dot(I2, np0)),
                vec3<f32>(dot(I0, np1), dot(I1, np1), dot(I2, np1)),
                vec3<f32>(dot(I0, np2), dot(I1, np2), dot(I2, np2)),
            );

            // Per-Gauss cutoff selection. shape > 0 ⇒ BetaScaled bake (k=3
            // compact support). shape ≈ 0 ⇒ Gaussian-kernel bake — natural
            // cutoff is √(2·log(255·α)) ≈ 3.33 at α=1, much smaller at low α.
            // The OAC flag (bit 0) shrinks per-surfel based on actual opacity
            // (and shape for beta); when OAC is off we use a conservative
            // global value per kernel.
            var cutoff : f32;
            if (shape > 1e-6) {
                cutoff = 3.0;
                if (render_settings.accel_flags & 1u) != 0u {
                    cutoff = opacity_aware_cutoff(3.0, opacity, shape);
                }
            } else {
                // Gaussian. Default 3.5 covers the α≈1 tail with a small
                // margin; OAC tightens to the exact per-α iso-line.
                cutoff = 3.5;
                if (render_settings.accel_flags & 1u) != 0u {
                    cutoff = opacity_aware_cutoff_gaussian(opacity);
                }
            }
            // SnugBox first — numerically more robust for edge-on splats.
            // Fall back to the standard transmat compute_aabb only when
            // SnugBox itself is degenerate (det ≤ 0 or t ≤ 0), so we get
            // identical conservative behavior in the rare cases SnugBox
            // can't handle.
            var aabb = vec4<f32>(0.0, 0.0, -1.0, -1.0);
            var conic3 = vec3<f32>(0.0);
            if tex3d_flag != 0u {
                // \`--tex3d\`: footprint = EWA projection of the (sx, sy, sz) ellipsoid
                // (FastGS conic, eps2d 0.3). compute_ewa_cov2d_pixel bins to the Gaussian
                // iso-line m = t_g; rescale the extents to the beta kernel's support
                // (m < 9, opacity-aware under OAC). The CONIC uv below still comes from
                // T_mat (the texture lives on the surfel plane).
                var mcoef = 1.0;
                aabb = compute_ewa_cov2d_pixel(xyz, vec3<f32>(sx, sy, sz), rot, camspace.xyz, opacity, &conic3, &mcoef);
                opacity = opacity * mcoef;   // ?mip2d: stored opacity (fragment alpha + OAC below) carries the 2D Mip coef
                if opacity <= 1.0 / 255.0 { alive_geom = false; }
                if aabb.z >= 0.0 && shape > 1e-6 {
                    let t_g = max(0.5, 2.0 * log(255.0 * max(opacity, 1.0 / 255.0)));
                    var t_b = 9.0;
                    if (render_settings.accel_flags & 1u) != 0u {
                        let inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
                        t_b = max(0.25, 9.0 * (1.0 - pow(inv, 1.0 / max(shape, 1e-3))));
                    }
                    let sc = sqrt(t_b / t_g);
                    aabb = vec4<f32>(aabb.x, aabb.y, aabb.z * sc, aabb.w * sc);
                }
            } else {
                aabb = compute_aabb_snugbox(T_mat, cutoff);
            }
            // SnugBox failing (det/A/E/t ≤ 0) means the conic is NOT an
            // ellipse: the cutoff disc crosses the camera plane and its
            // projection is unbounded. compute_aabb returns a garbage rect
            // for these (Vulkan port, room: 161 surfels, up to 765k px) and
            // every one of their fragments fails the denom/depth culls in
            // the fragment shader — a full-screen quad of pure discard work.
            // Drop them (bit-identical on 13/13 scenes). accel bit 9
            // (?hyp_legacy=1) restores the old fallback for an A/B.
            if aabb.z < 0.0 && tex3d_flag == 0u {
                aabb = compute_aabb(T_mat, cutoff);
                // Garbage-rect guard (default on; accel bit 9 = ?hyp_legacy=1
                // disables it). Measured offline on room cam 0: the SnugBox
                // failures are NOT hyperbolic surfels — they are 99 thin,
                // edge-on surfels (depth 3–10 m, ≤ 81 px) whose det is
                // ~1e-6·A·E, so fp32 cancellation ruins the centre / t test;
                // compute_aabb recovers them fine and they ARE visible (370 px,
                // α up to 0.99), so culling every failure costs real pixels.
                // Only a rect wider than twice the viewport can be the
                // camera-plane-crossing garbage (Vulkan port, room: up to
                // 765k px half-extent, every fragment failing the denom /
                // depth culls) — cull just those.
                if (render_settings.accel_flags & 512u) == 0u
                    && max(aabb.z, aabb.w) > 2.0 * max(camera.viewport.x, camera.viewport.y) {
                    aabb = vec4<f32>(0.0, 0.0, -1.0, -1.0);
                }
            }
            if alive_geom && aabb.z >= 0.0 {
                // CONIC OPTION A (precomputed): compute (u₀, v₀, J⁻¹, ∇p.z/p_c.z)
                // once here, so the fragment shader skips the ray-splat entirely.
                // Same math as the CUDA lean fork's LEAN_CONIC + exact rational
                // correction — matches production ray-splat to fp32 precision.
                // Repurposes the tu/tv/tw slots (36 B — same footprint):
                //   tu = (u0, v0, J⁻¹[0,0])
                //   tv = (J⁻¹[0,1], J⁻¹[1,0], J⁻¹[1,1])
                //   tw = (dwdxr, dwdyr, 0)
                let Tux = T_mat[0].x; let Tuy = T_mat[0].y; let Tuz = T_mat[0].z;
                let Tvx = T_mat[1].x; let Tvy = T_mat[1].y; let Tvz = T_mat[1].z;
                let Twx = T_mat[2].x; let Twy = T_mat[2].y; let Twz = T_mat[2].z;
                // Quantise the centre to the ¼-px grid Splat2DGS.pos stores
                // BEFORE deriving the CONIC, so (u₀, v₀, J⁻¹, ∇w) are exact for
                // the centre the fragment actually subtracts — zero systematic
                // shift, whatever the canvas width. (Extent stays relative to
                // the true centre; the vertex pads for the ≤ ⅛ px difference.)
                // accel bit 10 (?legacy=1) restores the unquantised centre.
                let legacy_pos = (render_settings.accel_flags & 1024u) != 0u;
                let cxc = select(round(aabb.x * 4.0) * 0.25, aabb.x, legacy_pos);
                let cyc = select(round(aabb.y * 4.0) * 0.25, aabb.y, legacy_pos);
                let k_c = vec3<f32>(cxc*Twx - Tux, cxc*Twy - Tuy, cxc*Twz - Tuz);
                let l_c = vec3<f32>(cyc*Twx - Tvx, cyc*Twy - Tvy, cyc*Twz - Tvz);
                let p_c = cross(k_c, l_c);
                var u0f: f32 = 1e10; var v0f: f32 = 1e10;   // "always cull" defaults
                var J00f: f32 = 0.0; var J01f: f32 = 0.0;
                var J10f: f32 = 0.0; var J11f: f32 = 0.0;
                var dwdxrf: f32 = 0.0; var dwdyrf: f32 = 0.0;
                if abs(p_c.z) > 1e-12 {
                    u0f = p_c.x / p_c.z;
                    v0f = p_c.y / p_c.z;
                    let w_c = Twx*u0f + Twy*v0f + Twz;
                    let det_kl = k_c.x*l_c.y - k_c.y*l_c.x;
                    if abs(det_kl) > 1e-12 && abs(w_c) > 1e-8 {
                        let scale = w_c / det_kl;
                        J00f = -l_c.y * scale;
                        J01f =  k_c.y * scale;
                        J10f =  l_c.x * scale;
                        J11f = -k_c.x * scale;
                        // ∂p.z/∂pix is CONSTANT (bilinear cross-terms cancel):
                        //   ∂p.z/∂pix.x = Tw.y·Tv.x - Tw.x·Tv.y
                        //   ∂p.z/∂pix.y = Tu.y·Tw.x - Tu.x·Tw.y
                        // Exact rational reconstruction:
                        //   u = u₀ + (J·Δpix).x / (1 + dwdxr·dx + dwdyr·dy)
                        let dpz_dpx = Twy*Tvx - Twx*Tvy;
                        let dpz_dpy = Tuy*Twx - Tux*Twy;
                        dwdxrf = dpz_dpx / p_c.z;
                        dwdyrf = dpz_dpy / p_c.z;
                    } else {
                        // Degenerate Jacobian → force cull (u₀ huge → rho3d always > cutoff).
                        u0f = 1e10; v0f = 1e10;
                    }
                }
                // accel bit 11 (?raysplat=1): hand the fragment the RAW transmat
                // rows instead of the conic expansion, so it can do the original
                // per-fragment ray/surfel intersection. Same math, but the
                // cancellation in \`pix*Tw - Tu\` is evaluated AT the fragment
                // rather than baked into u0/v0/J and extrapolated outward.
                if tex3d_flag != 0u {
                    // \`--tex3d\`: CONIC uv (always the conic form) + the EWA conic in the
                    // free slots: tw.z = a, depth_u = b, depth_v = c (the fragment reads
                    // depth_center only for these rows).
                    tu = vec3<f32>(u0f, v0f, J00f);
                    tv = vec3<f32>(J01f, J10f, J11f);
                    tw = vec3<f32>(dwdxrf, dwdyrf, conic3.x);
                    depth_u = conic3.y;
                    depth_v = conic3.z;
                } else if (render_settings.accel_flags & 4096u) != 0u {
                    // CENTRED (accel bit 12): hand over k_c / l_c / Tw so the
                    // fragment can form k = k_c + dx*Tw with dx only a few px.
                    tu = k_c;
                    tv = l_c;
                    tw = vec3<f32>(Twx, Twy, Twz);
                } else if (render_settings.accel_flags & 2048u) != 0u {
                    tu = T_mat[0];
                    tv = T_mat[1];
                    tw = T_mat[2];
                } else {
                    tu = vec3<f32>(u0f, v0f, J00f);
                    tv = vec3<f32>(J01f, J10f, J11f);
                    tw = vec3<f32>(dwdxrf, dwdyrf, 0.0);
                }
                center_pix = vec2<f32>(cxc, cyc);
                extent_pix = aabb.zw;

                // SPR (sub-pixel rejection): drop surfels whose tight ellipse
                // extent is well under one pixel AND whose opacity is low
                // enough that the lp-filtered contribution to neighbouring
                // pixels falls below 1/255. Conservative threshold (extent <
                // 0.25 px AND opa < 0.5) is safe for SV bakes — it catches
                // degenerate / numerically-vanishing surfels without killing
                // visible signal. Bit 1 of accel_flags gates it.
                let drop_subpixel = (render_settings.accel_flags & 2u) != 0u
                    && max(extent_pix.x, extent_pix.y) < 0.25
                    && opacity < 0.5;

                if !drop_subpixel {
                    let camera_pos = camera.view_inv[3].xyz;
                    view_dir = normalize(xyz - camera_pos);

                    // Sort key = front-to-back distance (back has smaller value
                    // with this CUDA convention; matches keksboter's bitcast).
                    let zfar = -camera.proj[3][2] / (camera.proj[2][2] - 1.0);
                    depth = zfar - pos2d.z;
                    alive = 1u;
                }
            }

            } else {
                // ===== \`--method mixed_3d\` UNTEXTURED — EWA 3D ellipsoid =====
                // Mirrors the CUDA bake-render branch I added at
                // diff_surfel_bake_render/cuda_rasterizer/forward.cu:617.
                // Color is per-Gauss SV (no atlas tap — untextured rows
                // carry a zero atlas rect by construction); geometry is
                // the FastGS EWA conic + opacity-aware Mahalanobis cutoff.
                // The fragment shader's untextured branch reads (a, b, c)
                // out of tu_x/y/z (transmat slot is repurposed).
                let camera_pos = camera.view_inv[3].xyz;
                view_dir = normalize(xyz - camera_pos);

                var conic : vec3<f32>;
                var mcoef_u = 1.0;
                let aabb_e = compute_ewa_cov2d_pixel(
                    xyz,
                    vec3<f32>(sx, sy, sz),
                    rot,
                    camspace.xyz,
                    opacity,
                    &conic,
                    &mcoef_u,
                );
                opacity = opacity * mcoef_u;   // ?mip2d: 2D Mip coef on the stored opacity
                if aabb_e.z >= 0.0 && opacity > 1.0 / 255.0 {
                    tu = conic;
                    tv = vec3<f32>(0.0);
                    tw = vec3<f32>(0.0);
                    center_pix = aabb_e.xy;
                    extent_pix = aabb_e.zw;
                    depth_u = 0.0;
                    depth_v = 0.0;
                    depth_center = camspace.z;

                    // SPR (same threshold as textured path).
                    let drop_subpixel = (render_settings.accel_flags & 2u) != 0u
                        && max(extent_pix.x, extent_pix.y) < 0.25
                        && opacity < 0.5;
                    if !drop_subpixel {
                        let zfar = -camera.proj[3][2] / (camera.proj[2][2] - 1.0);
                        depth = zfar - pos2d.z;
                        alive = 1u;
                    }
                }
            }
        }
    }

    // Workgroup-local Hillis-Steele inclusive scan over \`alive\` flags.
    scan0[lid.x] = alive;
    workgroupBarrier();
    if (lid.x >=   1u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x -   1u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >=   2u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x -   2u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >=   4u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x -   4u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >=   8u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x -   8u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >=  16u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x -  16u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >=  32u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x -  32u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >=  64u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x -  64u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 128u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 128u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();

    // Single global atomicAdd per workgroup, broadcast the base offset.
    if (lid.x == 0u) {
        let group_cnt = scan0[WG_SIZE - 1u];
        if (group_cnt != 0u) {
            group_base = atomicAdd(&sort_infos.keys_size, group_cnt);
        }
    }
    workgroupBarrier();

    if (alive == 1u) {
        let store_idx = group_base + scan0[lid.x] - 1u;
        // \`--method mixed_3d\` untextured marker: top bit of gauss_id. The
        // fragment shader checks this to dispatch the EWA Mahalanobis path
        // vs the standard 2DGS ray-disk path. Bits 0..30 still hold the
        // original surfel index (we never have >2^31 Gausses) so any
        // downstream lookup that needs the real index can mask with
        // 0x7FFFFFFFu. SHSolver.idx (used for color eval) stays unmasked
        // — preprocess never sees the untex flag, just the raw index.
        let gauss_id_packed : u32 = idx | ((1u - is_textured_flag) << 31u) | (tex3d_flag << 30u);
        // We leave color_* and the atlas UV precompute fields (uv_base_*,
        // uv_scale_*, layer) zero — preprocess_2dgs.wgsl fills them per frame
        // per alive Gauss (color from SV/SB eval, UV precomp from atlas_rects
        // + atlas dims). Fragment shader gates the atlas fetch on
        // tex_params.atlas_enabled so zero UV precomp is harmless when the
        // bundle has no atlas.
        splats_2d[store_idx] = Splat2DGS(
            tu.x, tu.y, tu.z,
            tv.x, tv.y, tv.z,
            tw.x, tw.y, tw.z,
            opacity,
            // ¼-px fixed point (2×i16, exact grid), NOT f16: f16 has
            // 1 px spacing beyond x=1024 and 0.5 px beyond 512, which shifted
            // every splat on the right/bottom of a retina canvas by up to
            // 0.5 px (the CONIC u0/v0 are exact for the TRUE centre) and let
            // the vertex quad miss up to 0.5 px of the ellipse edge (measured:
            // 100 px/frame with α up to 0.18 on room). Range ±8191.75 px
            // covers canvases up to ~7400 px wide (cull keeps |centre| ≤ 1.1·viewport).
            select(pack_center(center_pix),
                   pack2x16float(center_pix),
                   (render_settings.accel_flags & 1024u) != 0u),
            pack2x16float(extent_pix),
            0u,
            pack2x16float(vec2<f32>(0.0, shape)),
            gauss_id_packed,
            depth_u,
            depth_v,
            depth_center,
            0.0, 0.0,      // uv_base_x, uv_base_y
            0.0, 0.0,      // uv_scale_x, uv_scale_y
            0u,            // layer
            0u,            // _pad
        );
        sh_solvers[store_idx] = SHSolver(
            pack2x16float(view_dir.xy),
            pack2x16float(vec2<f32>(view_dir.z, opacity)),
            idx,
        );
//#if STATIC_KEYS
        let static_key = static_keys[idx];
        sort_depths[store_idx]  = bitcast<u32>(select(depth, static_key, static_key > 0.0));
//#else
        sort_depths[store_idx]  = bitcast<u32>(depth);
//#endif
        sort_indices[store_idx] = store_idx;
    }
}
`,Hu=`// shader implementing gpu radix sort.

override PASS_ID = 0u;  // Pass ID for current radix sort pass
const WG_SIZE = 256u;
const WORDS_PER_WG   : u32 = WG_SIZE / 32u; // 8 for 256
override RS_RADIX_LOG2 = 8u;  // 8 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 256 entries into the radix table
override MAX_BIN_SIZE = RS_RADIX_SIZE * WORDS_PER_WG; // legacy (pre-padding)

struct GeneralInfo{
  keys_size : u32,  dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

@group(0) @binding(0) var<storage, read> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read> digit_base : array<u32>;
@group(0) @binding(2) var<storage, read> keys_src : array<u32>;
@group(0) @binding(3) var<storage, read_write> keys_dst : array<u32>;
@group(0) @binding(4) var<storage, read> payload_src : array<u32>;
@group(0) @binding(5) var<storage, read_write> payload_dst : array<u32>;
@group(0) @binding(6) var<storage, read> wg_prefixes : array<u32>;
// --------------------------------------------------------------------------------------------------------------
// Pass 3: Scatter elements to final positions
// --------------------------------------------------------------------------------------------------------------
// var<workgroup> sh_digits : array<u32, WG_SIZE>;
// var<workgroup> bin_flags : array<atomic<u32>, MAX_BIN_SIZE>;

struct BinWords { words: array<atomic<u32>, WORDS_PER_WG + 1> }
var<workgroup> bin_flags : array<BinWords, RS_RADIX_SIZE>; // For each digit: 8 x 32-bit words bitmap

@compute @workgroup_size(WG_SIZE)
fn scatter_elements(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(num_workgroups) wgs: vec3<u32>) {
    // for (var i = lid.x; i < RS_RADIX_SIZE * WORDS_PER_WG; i += WG_SIZE) {
    //     let d = i / WORDS_PER_WG;
    //     let w = i % WORDS_PER_WG;
    //     atomicStore(&bin_flags[d].words[w], 0u);
    // }
    atomicStore(&bin_flags[lid.x].words[0], 0u);
    atomicStore(&bin_flags[lid.x].words[1], 0u);
    atomicStore(&bin_flags[lid.x].words[2], 0u);
    atomicStore(&bin_flags[lid.x].words[3], 0u);
    atomicStore(&bin_flags[lid.x].words[4], 0u);
    atomicStore(&bin_flags[lid.x].words[5], 0u);
    atomicStore(&bin_flags[lid.x].words[6], 0u);
    atomicStore(&bin_flags[lid.x].words[7], 0u);

    workgroupBarrier();

    let wg_base  = wid.x * WG_SIZE;
    let pos = wg_base + lid.x;

    var key: u32;
    var digit : u32;

    if (pos < infos.keys_size) {
        key = keys_src[pos];
        digit = extractBits(key, PASS_ID * RS_RADIX_LOG2, RS_RADIX_LOG2);
        // 3) Set bit in this digit's bitmap: one 32-thread word
        let myWord = lid.x >> 5u;                 // /32
        let myBit  = 1u << (lid.x & 31u);         // %32
        atomicOr(&bin_flags[digit].words[myWord], myBit);
    }
    workgroupBarrier();

    if (pos < infos.keys_size) {

        let myWord = lid.x >> 5u;                 // /32
        let myBit  = 1u << (lid.x & 31u);         // %32
        var rank_in_row : u32 = 0u;

        // Accumulate bit counts in preceding full words
        for (var w = 0u; w < myWord; w++) {
            let bits = atomicLoad(&bin_flags[digit].words[w]);
            rank_in_row += countOneBits(bits);
        }
        // Add bits below my bit in the current word
        let cur  = atomicLoad(&bin_flags[digit].words[myWord]);
        rank_in_row  += countOneBits(cur & (myBit - 1u));

        let global_pos =
            digit_base[digit] +
            wg_prefixes[digit * wgs.x + wid.x] +
            rank_in_row;

        // Write back key/payload
        keys_dst[global_pos]    = key;
        payload_dst[global_pos] = payload_src[pos];
    }
}
`,Yu=`// shader implementing gpu radix sort.

override PASS_ID = 0u;  // Pass ID for current radix sort pass
const WG_SIZE = 256u;
override RS_RADIX_LOG2 = 8u;  // 8 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 256 entries into the radix table

struct GeneralInfo{
  keys_size : u32,  dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

@group(0) @binding(0) var<storage, read> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read> keys_src : array<u32>;
@group(0) @binding(2) var<storage, read_write> wg_histograms : array<u32>;
// --------------------------------------------------------------------------------------------------------------
// NEW MULTI-PASS RADIX SORT IMPLEMENTATION
// Pass 1: Local histogram generation per workgroup
// --------------------------------------------------------------------------------------------------------------
var<workgroup> local_histogram : array<atomic<u32>, RS_RADIX_SIZE>;
@compute @workgroup_size(WG_SIZE)
fn local_histogram_pass(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(num_workgroups) wgs: vec3<u32>) {
    // Zero local histogram
    if lid.x < RS_RADIX_SIZE {
        atomicStore(&local_histogram[lid.x], 0u);
    }
    workgroupBarrier();
    
    // Process elements and build local histogram + ranks
    let pos = wid.x * WG_SIZE + lid.x;
    if (pos < infos.keys_size) {
        let key = keys_src[pos];
        let digit = extractBits(key, PASS_ID * RS_RADIX_LOG2, RS_RADIX_LOG2);
        
        atomicAdd(&local_histogram[digit], 1u);
    }
    workgroupBarrier();
    
    // Write workgroup histogram to global memory
    if lid.x < RS_RADIX_SIZE {
        wg_histograms[wid.x + lid.x * wgs.x] = atomicLoad(&local_histogram[lid.x]);
    }
}
`,Xu=`// ============================================================================
// 2-Level (Nested) Blelloch Prefix Scan Kernels (Radix Sort histogram phase)
// ----------------------------------------------------------------------------
// This file implements a hierarchical exclusive prefix sum over workgroup
// histograms laid out as [digit][workgroup]. We use a tile size equal to the
// workgroup size so each invocation owns exactly one element (no inner loops).
//
// Pipeline of passes for one radix digit plane (repeated for all digits):
//   (A) prefix_l0_tile_scan              : per-element scan in tiles of wg histograms
//       -> produces wg_prefixes (exclusive) + l0_sums (per tile totals)
//   (B) prefix_l1_tile_scan_on_l0_sums   : scan l0_sums producing l0_offsets + l1_sums
//   (C) prefix_scan_l1_sums              : scan l1_sums producing l1_offsets
//   (D) prefix_add_l1_to_l0_offsets      : add l1_offsets back to l0_offsets
//   (E) prefix_add_l0_to_elements        : add final l0_offsets to element prefixes
//   (F) compute_digit_base               : final scan across digits to get digit_base
//
// All scans are Blelloch (exclusive) using a shared workgroup array \`temp\`.
// We intentionally keep loops with compile-time bounds (WG_SIZE) for the
// compiler to unroll/optimize. No algorithmic / memory access pattern change
// has been made—only clarity improvements and richer commentary.
//
// NOTE: RS_RADIX_SIZE == WG_SIZE (256) here, allowing reuse of the same
// Blelloch logic for digit_base without an extra buffer.
// ============================================================================

override WG_SIZE        : u32 = 256u;  // 1 thread ↔ 1 element (no inner striding)

// Dispatch / tiling metadata passed from host.
// l0_t: number of L0 tiles      (ceil(dispatch_x / WG_SIZE))
// l1_t: number of L1 tiles over l0_t (ceil(l0_t / WG_SIZE))
struct GeneralInfo {
  keys_size  : u32,  // Total number of keys (for context)
  dispatch_x : u32,  // Number of workgroups along x for histogram source
  dispatch_y : u32,  // (digits) normally RS_RADIX_SIZE or batched digits
  dispatch_z : u32,
  l0_x       : u32,  // Mirrors grid dims for L0 (informational)
  l0_y       : u32,
  l0_z       : u32,
  l0_t       : u32,  // Number of L0 tiles per digit
  l1_x       : u32,  // Mirrors grid dims for L1 (informational)
  l1_y       : u32,
  l1_z       : u32,
  l1_t       : u32,  // Number of L1 tiles over L0 tiles per digit
};

// in/out buffers
@group(0) @binding(0) var<storage, read>        infos         : GeneralInfo;
@group(0) @binding(1) var<storage, read>        wg_histograms : array<u32>; // [digit][wg]
@group(0) @binding(2) var<storage, read_write>  wg_prefixes   : array<u32>; // [digit][wg] (exclusive prefix for each digit)
@group(0) @binding(3) var<storage, read_write>  l0_sums       : array<u32>; // [digit][t0]   per L0 tile total
@group(0) @binding(4) var<storage, read_write>  l0_offsets    : array<u32>; // [digit][t0]   exclusive scan over l0_sums
@group(0) @binding(5) var<storage, read_write>  l1_sums       : array<u32>; // [digit][t1]   per L1 tile total (over l0_sums)
@group(0) @binding(6) var<storage, read_write>  l1_offsets    : array<u32>; // [digit][t1]   exclusive scan over l1_sums
@group(0) @binding(7) var<storage, read_write>  digit_base    : array<u32>; // length RS_RADIX_SIZE exclusive base per digit

fn idx_hist(d: u32, wg: u32) -> u32 { return d * infos.dispatch_x + wg; }
fn idx_l0 (d: u32, t0: u32) -> u32 { return d * infos.l0_t + t0; }
fn idx_l1 (d: u32, t1: u32) -> u32 { return d * infos.l1_t + t1; }
// Shared scratch used by all kernels (size == WG_SIZE). For digit_base the
// size matches RS_RADIX_SIZE.
var<workgroup> temp : array<u32, WG_SIZE>;

// ---------------------------------------------------------------------------
// Reusable Blelloch scan helpers (tile-sized, operating on \`temp\`).
// We split into up-sweep (returning total) and down-sweep (producing exclusive)
// so callers needing the tile total (for hierarchical sums) can read it.
// These operate over the full WG_SIZE; inactive lanes should have been
// initialized with 0 beforehand.
// ---------------------------------------------------------------------------
// NOTE: Manually unrolled for WG_SIZE == 256u (log2=8). If WG_SIZE changes,
// regenerate this sequence (offsets: 1,2,4,8,16,32,64,128).
fn blelloch_up_sweep_tile(tid: u32) -> u32 {
  let ui1 = (tid + 1u) * 2u * 1u - 1u;   if (ui1   < WG_SIZE) { temp[ui1]   += temp[ui1 - 1u]; }     workgroupBarrier();
  let ui2 = (tid + 1u) * 2u * 2u - 1u;   if (ui2   < WG_SIZE) { temp[ui2]   += temp[ui2 - 2u]; }     workgroupBarrier();
  let ui4 = (tid + 1u) * 2u * 4u - 1u;   if (ui4   < WG_SIZE) { temp[ui4]   += temp[ui4 - 4u]; }     workgroupBarrier();
  let ui8 = (tid + 1u) * 2u * 8u - 1u;   if (ui8   < WG_SIZE) { temp[ui8]   += temp[ui8 - 8u]; }     workgroupBarrier();
  let ui16 = (tid + 1u) * 2u * 16u - 1u; if (ui16  < WG_SIZE) { temp[ui16]  += temp[ui16 - 16u]; }   workgroupBarrier();
  let ui32 = (tid + 1u) * 2u * 32u - 1u; if (ui32  < WG_SIZE) { temp[ui32]  += temp[ui32 - 32u]; }   workgroupBarrier();
  let ui64 = (tid + 1u) * 2u * 64u - 1u; if (ui64  < WG_SIZE) { temp[ui64]  += temp[ui64 - 64u]; }   workgroupBarrier();
  let ui128 = (tid + 1u) * 2u * 128u - 1u; if (ui128 < WG_SIZE) { temp[ui128] += temp[ui128 - 128u]; } workgroupBarrier();
  return temp[WG_SIZE - 1u]; // inclusive total
}

fn blelloch_down_sweep_tile_exclusive(tid: u32) {
  if (tid == 0u) { temp[WG_SIZE - 1u] = 0u; }
  workgroupBarrier();
  let di128 = (tid + 1u) * 2u * 128u - 1u; if (di128 < WG_SIZE) { let t = temp[di128 - 128u]; temp[di128 - 128u] = temp[di128]; temp[di128] += t; } workgroupBarrier();
  let di64  = (tid + 1u) * 2u * 64u  - 1u; if (di64  < WG_SIZE) { let t = temp[di64  - 64u];  temp[di64  - 64u]  = temp[di64];  temp[di64]  += t; } workgroupBarrier();
  let di32  = (tid + 1u) * 2u * 32u  - 1u; if (di32  < WG_SIZE) { let t = temp[di32  - 32u];  temp[di32  - 32u]  = temp[di32];  temp[di32]  += t; } workgroupBarrier();
  let di16  = (tid + 1u) * 2u * 16u  - 1u; if (di16  < WG_SIZE) { let t = temp[di16  - 16u];  temp[di16  - 16u]  = temp[di16];  temp[di16]  += t; } workgroupBarrier();
  let di8   = (tid + 1u) * 2u * 8u   - 1u; if (di8   < WG_SIZE) { let t = temp[di8   - 8u];   temp[di8   - 8u]   = temp[di8];   temp[di8]   += t; } workgroupBarrier();
  let di4   = (tid + 1u) * 2u * 4u   - 1u; if (di4   < WG_SIZE) { let t = temp[di4   - 4u];   temp[di4   - 4u]   = temp[di4];   temp[di4]   += t; } workgroupBarrier();
  let di2   = (tid + 1u) * 2u * 2u   - 1u; if (di2   < WG_SIZE) { let t = temp[di2   - 2u];   temp[di2   - 2u]   = temp[di2];   temp[di2]   += t; } workgroupBarrier();
  let di1   = (tid + 1u) * 2u * 1u   - 1u; if (di1   < WG_SIZE) { let t = temp[di1   - 1u];   temp[di1   - 1u]   = temp[di1];   temp[di1]   += t; } workgroupBarrier();
}

// Separate helpers for digit_base scan (RS_RADIX_SIZE may conceptually differ
// though equal here). Kept distinct to avoid introducing an extra branch.
fn blelloch_up_sweep_digits(d: u32) {
  // Unrolled for RS_RADIX_SIZE == 256u
  let ui1 = (d + 1u) * 2u * 1u - 1u;   if (ui1   < WG_SIZE) { temp[ui1]   += temp[ui1 - 1u]; }     workgroupBarrier();
  let ui2 = (d + 1u) * 2u * 2u - 1u;   if (ui2   < WG_SIZE) { temp[ui2]   += temp[ui2 - 2u]; }     workgroupBarrier();
  let ui4 = (d + 1u) * 2u * 4u - 1u;   if (ui4   < WG_SIZE) { temp[ui4]   += temp[ui4 - 4u]; }     workgroupBarrier();
  let ui8 = (d + 1u) * 2u * 8u - 1u;   if (ui8   < WG_SIZE) { temp[ui8]   += temp[ui8 - 8u]; }     workgroupBarrier();
  let ui16 = (d + 1u) * 2u * 16u - 1u; if (ui16  < WG_SIZE) { temp[ui16]  += temp[ui16 - 16u]; }   workgroupBarrier();
  let ui32 = (d + 1u) * 2u * 32u - 1u; if (ui32  < WG_SIZE) { temp[ui32]  += temp[ui32 - 32u]; }   workgroupBarrier();
  let ui64 = (d + 1u) * 2u * 64u - 1u; if (ui64  < WG_SIZE) { temp[ui64]  += temp[ui64 - 64u]; }   workgroupBarrier();
  let ui128 = (d + 1u) * 2u * 128u - 1u; if (ui128 < WG_SIZE) { temp[ui128] += temp[ui128 - 128u]; } workgroupBarrier();
}

fn blelloch_down_sweep_digits(d: u32) {
  if (d == 0u) { temp[WG_SIZE - 1u] = 0u; }
  workgroupBarrier();
  let di128 = (d + 1u) * 2u * 128u - 1u; if (di128 < WG_SIZE) { let t = temp[di128 - 128u]; temp[di128 - 128u] = temp[di128]; temp[di128] += t; } workgroupBarrier();
  let di64  = (d + 1u) * 2u * 64u  - 1u; if (di64  < WG_SIZE) { let t = temp[di64  - 64u];  temp[di64  - 64u]  = temp[di64];  temp[di64]  += t; } workgroupBarrier();
  let di32  = (d + 1u) * 2u * 32u  - 1u; if (di32  < WG_SIZE) { let t = temp[di32  - 32u];  temp[di32  - 32u]  = temp[di32];  temp[di32]  += t; } workgroupBarrier();
  let di16  = (d + 1u) * 2u * 16u  - 1u; if (di16  < WG_SIZE) { let t = temp[di16  - 16u];  temp[di16  - 16u]  = temp[di16];  temp[di16]  += t; } workgroupBarrier();
  let di8   = (d + 1u) * 2u * 8u   - 1u; if (di8   < WG_SIZE) { let t = temp[di8   - 8u];   temp[di8   - 8u]   = temp[di8];   temp[di8]   += t; } workgroupBarrier();
  let di4   = (d + 1u) * 2u * 4u   - 1u; if (di4   < WG_SIZE) { let t = temp[di4   - 4u];   temp[di4   - 4u]   = temp[di4];   temp[di4]   += t; } workgroupBarrier();
  let di2   = (d + 1u) * 2u * 2u   - 1u; if (di2   < WG_SIZE) { let t = temp[di2   - 2u];   temp[di2   - 2u]   = temp[di2];   temp[di2]   += t; } workgroupBarrier();
  let di1   = (d + 1u) * 2u * 1u   - 1u; if (di1   < WG_SIZE) { let t = temp[di1   - 1u];   temp[di1   - 1u]   = temp[di1];   temp[di1]   += t; } workgroupBarrier();
}

// ---------------------------------------------------------------------------
// (A) L0 pass
// Per-digit tile scan over wg_histograms -> produces:
//   - wg_prefixes (exclusive per element inside each digit plane)
//   - l0_sums     (tile totals for hierarchical accumulation)
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_l0_tile_scan(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t0, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t0    = wid.x;
  let digit = wid.y;

  let start = t0 * WG_SIZE;
  // Number of active (in-bounds) lanes for this tile along dispatch_x.
  let valid = select(0u, min(WG_SIZE, infos.dispatch_x - start), infos.dispatch_x > start);

  let tid = lid.x; // lane id

  var v : u32 = 0u;
  if (tid < valid) { v = wg_histograms[idx_hist(digit, start + tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  // Blelloch scan over tile
  let total = blelloch_up_sweep_tile(tid);
  blelloch_down_sweep_tile_exclusive(tid);

  if (tid < valid) { wg_prefixes[idx_hist(digit, start + tid)] = temp[tid]; }
  if (tid == 0u)    { l0_sums[idx_l0(digit, t0)] = select(0u, total, valid > 0u); }
}

// ---------------------------------------------------------------------------
// (B) L1 pass over l0_sums
// Scan l0_sums in tiles to produce l0_offsets (exclusive within tile) and
// l1_sums (totals per L1 tile). This is structurally identical to (A) but the
// source array is l0_sums and destination for element-level offsets is l0_offsets.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_l1_tile_scan_on_l0_sums(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t1, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t1    = wid.x;
  let digit = wid.y;

  let t0_len = infos.l0_t;
  let start  = t1 * WG_SIZE;
  let valid  = select(0u, min(WG_SIZE, t0_len - start), t0_len > start);

  let tid = lid.x;

  var v : u32 = 0u;
  if (tid < valid) { v = l0_sums[idx_l0(digit, start + tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  let total = blelloch_up_sweep_tile(tid);
  blelloch_down_sweep_tile_exclusive(tid);

  if (tid < valid) { l0_offsets[idx_l0(digit, start + tid)] = temp[tid]; }
  if (tid == 0u)    { l1_sums[idx_l1(digit, t1)] = select(0u, total, valid > 0u); }
}

// ---------------------------------------------------------------------------
// (C) Scan l1_sums -> l1_offsets (single workgroup per digit)
// Assumes infos.l1_t <= WG_SIZE. Add further level if this can be exceeded.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_scan_l1_sums(
  @builtin(workgroup_id)        wid : vec3<u32>,   // y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let digit = wid.y;
  let T = infos.l1_t;

  let tid = lid.x;

  var v : u32 = 0u;
  if (tid < T) { v = l1_sums[idx_l1(digit, tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  blelloch_up_sweep_tile(tid); // total not needed here
  blelloch_down_sweep_tile_exclusive(tid);
  if (tid < T) { l1_offsets[idx_l1(digit, tid)] = temp[tid]; }
}

// ---------------------------------------------------------------------------
// (D) Add l1_offsets into l0_offsets for each corresponding L0 tile.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_add_l1_to_l0_offsets(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t1, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t1    = wid.x;
  let digit = wid.y;

  let t0_len = infos.l0_t;
  let start  = t1 * WG_SIZE;
  let valid  = select(0u, min(WG_SIZE, t0_len - start), t0_len > start);
  let add    = l1_offsets[idx_l1(digit, t1)];

  let tid = lid.x;
  if (tid < valid) {
    let idx = idx_l0(digit, start + tid);
    l0_offsets[idx] += add;
  }
}

// ---------------------------------------------------------------------------
// (E) Add final l0_offsets back to element-level wg_prefixes.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_add_l0_to_elements(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t0, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t0    = wid.x;
  let digit = wid.y;

  let start = t0 * WG_SIZE;
  let valid = select(0u, min(WG_SIZE, infos.dispatch_x - start), infos.dispatch_x > start);
  let add   = l0_offsets[idx_l0(digit, t0)];

  let tid = lid.x;
  if (tid < valid) {
    let idx = idx_hist(digit, start + tid);
    wg_prefixes[idx] += add;
  }
}

@compute @workgroup_size(WG_SIZE)
fn compute_digit_base(
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let d = lid.x; // digit 0..255

  // Gather total count for digit d into temp[d]
  var tot : u32 = 0u;
  if (infos.dispatch_x > 0u) {
    let last = infos.dispatch_x - 1u;
    let idx  = idx_hist(d, last);
    tot = wg_prefixes[idx] + wg_histograms[idx];
  }
  temp[d] = tot;
  workgroupBarrier();

  // Blelloch exclusive scan over digits -------------------------------
  blelloch_up_sweep_digits(d);
  blelloch_down_sweep_digits(d);
  // Exclusive result -> digit_base
  digit_base[d] = temp[d];
}

@compute @workgroup_size(WG_SIZE)
fn compute_digit_base1(
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let d = lid.x; // digit 0..255 (one lane per digit)
  // Gather total count for digit d (tile total for that digit plane)
  let idx  = idx_hist(d, infos.dispatch_x - 1u);
  temp[d] = wg_prefixes[idx] + wg_histograms[idx];
  workgroupBarrier();
  // Hillis-Steele inclusive scan (log2(256)=8 iterations)
  // offset 1
  let add1   = select(0u, temp[d - 1u],   d >= 1u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add1,   d >= 1u);   workgroupBarrier();
  // offset 2
  let add2   = select(0u, temp[d - 2u],   d >= 2u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add2,   d >= 2u);   workgroupBarrier();
  // offset 4
  let add4   = select(0u, temp[d - 4u],   d >= 4u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add4,   d >= 4u);   workgroupBarrier();
  // offset 8
  let add8   = select(0u, temp[d - 8u],   d >= 8u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add8,   d >= 8u);   workgroupBarrier();
  // offset 16
  let add16  = select(0u, temp[d - 16u],  d >= 16u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add16,  d >= 16u);  workgroupBarrier();
  // offset 32
  let add32  = select(0u, temp[d - 32u],  d >= 32u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add32,  d >= 32u);  workgroupBarrier();
  // offset 64
  let add64  = select(0u, temp[d - 64u],  d >= 64u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add64,  d >= 64u);  workgroupBarrier();
  // offset 128
  let add128 = select(0u, temp[d - 128u], d >= 128u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add128, d >= 128u); workgroupBarrier();
  // Convert inclusive -> exclusive: shift right by one (digit 0 -> 0)
  digit_base[d] = select(0u, temp[d - 1u], d > 0u);
}`,Zu=256;function Nn(i,s){const a=[],u=[];let l=!0;for(const _ of i.split(`
`)){const y=_.trim();let x;if((x=/^\/\/#if\s+(\w+)\s*$/.exec(y))!==null){const P=!!s[x[1]];u.push({parent:l,taken:P}),l=l&&P;continue}if(/^\/\/#else\s*$/.test(y)){const P=u[u.length-1];if(P===void 0)throw new Error("preprocessWGSL: #else without #if");l=P.parent&&!P.taken;continue}if(/^\/\/#endif\s*$/.test(y)){const P=u.pop();if(P===void 0)throw new Error("preprocessWGSL: #endif without #if");l=P.parent;continue}l&&a.push(_)}if(u.length!==0)throw new Error("preprocessWGSL: unterminated #if");return a.join(`
`)}const Ju=Qa,Qu=8,ed=96,td=12,vi=8,hn=1<<vi,Kn=256,ar=32/vi,nd=0,Qs=ar&1;function Ka(i,s){return{sort_indices_buffer:s.createBuffer({label:"ping-pong payload (indices)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:s.createBuffer({label:"ping-pong keys (depths)",size:i*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function sd(i,s){const a=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),u=i.createPipelineLayout({bindGroupLayouts:[a]}),l=_=>i.createComputePipeline({layout:u,compute:{module:s,entryPoint:_,constants:{WG_SIZE:Kn}}});return{l0TileScan:l("prefix_l0_tile_scan"),l1TileScanOnL0:l("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:l("prefix_scan_l1_sums"),addL1ToL0:l("prefix_add_l1_to_l0_offsets"),addL0ToElems:l("prefix_add_l0_to_elements"),computeDigitBase:l("compute_digit_base"),prefixBindGroupLayout:a}}function rd(i,s,a){const u=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),l=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),_=i.createPipelineLayout({bindGroupLayouts:[u]}),y=i.createPipelineLayout({bindGroupLayouts:[l]}),x=[];for(let P=0;P<ar;P++){const A={PASS_ID:P+nd,RS_RADIX_LOG2:vi,RS_RADIX_SIZE:hn};x.push({localHistogram:i.createComputePipeline({layout:_,compute:{module:s,entryPoint:"local_histogram_pass",constants:A}}),scatterElements:i.createComputePipeline({layout:y,compute:{module:a,entryPoint:"scatter_elements",constants:A}})})}return{passes:x,localHistogramBindGroupLayout:u,scatterBindGroupLayout:l}}function id(i){const s=i.createShaderModule({label:"local histogram",code:Yu}),a=i.createShaderModule({label:"scatter",code:Hu}),u=i.createShaderModule({label:"blelloch prefix",code:Xu}),l=sd(i,u),_=rd(i,s,a);return{localHistogramBindGroupLayout:_.localHistogramBindGroupLayout,scatterBindGroupLayout:_.scatterBindGroupLayout,passes:_.passes,hierarchicalBlelloch:l}}function Wa(i){const s=i.createTexture({label:"atlas stub (4x4x1 zero RGBA8)",size:{width:4,height:4,depthOrArrayLayers:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),a=s.createView({dimension:"2d-array"}),u=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),l=i.createBuffer({label:"atlas rects stub (5 zero floats)",size:4*5,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),_=i.createBuffer({label:"tex_params stub (atlas_enabled=0)",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});i.queue.writeBuffer(_,0,new ArrayBuffer(32));const y={width:0,height:0,channels:0,kernel_type:0,num_rects:0,uv_extent:0,sb_number:0,format:4294967295,sh_bias:0,res_bias:0,compact_mult:0,layer_h:0,atlas_scale:0,atlas_offset:0,n_layers:0,n_cols:1,layer_cuts:new Uint32Array,column_cuts:new Uint32Array([0,0]),slice_width:0,rects_expanded:new Float32Array,atlas_bytes:new Uint8Array};return{texture:s,view:a,sampler:u,rectsBuffer:l,texParamsBuffer:_,meta:y}}const ps=class ps{constructor(s,a,u,l,_,y=null,x={}){S(this,"device");S(this,"pc");S(this,"presentationFormat");S(this,"camera_buffer");S(this,"render_settings_buffer");S(this,"draw_indirect_buffer");S(this,"splat_2d_buffer");S(this,"querySet");S(this,"resolveBuffer");S(this,"resultBuffer");S(this,"queriesPerFrame",Qu);S(this,"queryCapacityFrames",200);S(this,"sort_prefixBindGroup");S(this,"sort_pipelines");S(this,"sort_localHistogramBindGroups");S(this,"sort_scatterBindGroups");S(this,"lastFrame",0);S(this,"frameCount",0);S(this,"preprocessPipeline");S(this,"cullPipeline");S(this,"renderPipeline");S(this,"indirectPipeline");S(this,"renderShaderModule");S(this,"betaKernel",1);S(this,"fetchById");S(this,"octBound");S(this,"acc16");S(this,"f16");S(this,"packed");S(this,"kmode");S(this,"lean");S(this,"splat_frag_buffer");S(this,"accTexture",null);S(this,"accView",null);S(this,"accW",0);S(this,"accH",0);S(this,"legacyRenderPipeline",null);S(this,"varyingsPipeline",null);S(this,"msaa",!1);S(this,"msaaTexture",null);S(this,"msaaView",null);S(this,"msaaW",0);S(this,"msaaH",0);S(this,"msaaPipelines",new Map);S(this,"mkVariant",null);S(this,"fullByIdPipeline",null);S(this,"slopeTarget",null);S(this,"viewport",null);S(this,"slopeSource",0);S(this,"slopePipelines",new Map);S(this,"rendererBgls",[]);S(this,"betaKernelConst",1);S(this,"slopeBgl",null);S(this,"slopeBg",null);S(this,"slopeDummy",null);S(this,"refetch",null);S(this,"rfTsIndex",-1);S(this,"refetchApplied",!1);S(this,"rfKeys",null);S(this,"rfKeysCap",0);S(this,"rfParams",null);S(this,"rfLowBgl",null);S(this,"rfUpBgl",null);S(this,"rfSplatsBgl",null);S(this,"rfLowBg",null);S(this,"rfUpBg",null);S(this,"rfUpKey",[]);S(this,"rfSplatsBg",null);S(this,"rfSplatsKey",[]);S(this,"rfPipelines",new Map);S(this,"rfWl",0);S(this,"rfHl",0);S(this,"legacyRenderer",!1);S(this,"accResolvePipeline",null);S(this,"accResolveBgl",null);S(this,"accResolveBindGroup",null);S(this,"twoPass",!1);S(this,"twoPassThresh",.5);S(this,"twoPassParamsBuffer",null);S(this,"twoPassBgl",null);S(this,"twoPassBg",null);S(this,"twoPassSplatsBgl",null);S(this,"twoPassSplatsBg",null);S(this,"twoPassModules",new Map);S(this,"twoPassPipelines",new Map);S(this,"twoPassDepth",null);S(this,"twoPassDepthView",null);S(this,"twoPassW",0);S(this,"twoPassH",0);S(this,"overdrawMode",0);S(this,"overdrawMax",48);S(this,"ovTexture",null);S(this,"ovView",null);S(this,"ovW",0);S(this,"ovH",0);S(this,"ovParamsBuffer",null);S(this,"ovResolvePipeline",null);S(this,"ovResolveBgl",null);S(this,"ovResolveBg",null);S(this,"ovStatsPipeline",null);S(this,"ovStatsBgl",null);S(this,"ovStatsBg",null);S(this,"ovStatsBuffer",null);S(this,"ovReadback",null);S(this,"ovReadState","idle");S(this,"ovLastStats",null);S(this,"ovPipelines",new Map);S(this,"renderSettingsBgl");S(this,"preprocessBgl2");S(this,"renderSplatsBgl");S(this,"atlasBgl");S(this,"sort_info_buffer");S(this,"sort_ping_pong");S(this,"crsBg");S(this,"gsBg");S(this,"cullBg2");S(this,"preprocessBg1");S(this,"renderSplatsBindGroup");S(this,"renderSettingsBindGroup");S(this,"atlasBindGroup");S(this,"indirectBindGroup");S(this,"sh_solvers_buffer");S(this,"bfcParamsBuffer");S(this,"bfcBindGroupLayout");S(this,"bfcBindGroup");S(this,"staticSortKeys",null);S(this,"wideFrustum",!1);S(this,"staticKeysBuffer",null);S(this,"bgColor",[0,0,0,0]);S(this,"showPerfDialogNext",!1);S(this,"requestReorderNextFrame",!1);S(this,"reorderInFlight",!1);S(this,"downloadOnceNextRead",!1);S(this,"downloadOnceFileName","fps_metrics");S(this,"allFrameTimes",[]);S(this,"lastStageBreakdownMs",null);S(this,"timeQueryEnabled");S(this,"atlas");S(this,"atlasParamsBuffer");S(this,"_atlasEnabled",!0);S(this,"mipLodBias",1);S(this,"_mipMode",1);S(this,"preFrame",null);S(this,"capPass",null);this.fetchById=x.fetchById??!0,this.staticSortKeys=x.staticSortKeys??null,this.wideFrustum=x.wideFrustum??!1,this.octBound=x.octBound??!1,this.acc16=x.acc16??!1,this.f16=(x.f16??!1)&&_.includes("shader-f16"),this.packed=x.packed??!1,this.kmode=x.kmode??0,this.lean=x.lean??!1,(x.f16??!1)&&!this.f16&&console.warn("[render_2dgs] f16 variant requested but the device has no shader-f16; using f32"),bt(`[render_2dgs] variants: fetch_by_id=${this.fetchById} oct_bound=${this.octBound} acc16=${this.acc16} f16=${this.f16} packed=${this.packed} kmode=${this.kmode} lean=${this.lean}`);const P=_.includes("timestamp-query");this.timeQueryEnabled=P,P&&bt("⏰ using timestamp-query"),this.pc=s,this.device=a,this.presentationFormat=u,this.camera_buffer=l,this.atlas=y??Wa(a),this.atlasParamsBuffer=a.createBuffer({label:"atlas_params UBO",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeAtlasParams(),a.addEventListener("uncapturederror",Ae=>{console.error("A WebGPU error was not captured:",Ae.error)}),this._setupTimestampQueries(),this._setupBuffers();const A=(Math.floor((this.pc.num_points+Kn-1)/Kn)+1)*Kn,z=Math.ceil(A/Kn);console.log(`keys count adjusted: ${A}`),console.log(`key size: ${this.pc.num_points}`);const L=a.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=id(a);const N=[Ka(A,a),Ka(A,a)],O=a.createBuffer({label:"workgroup histograms",size:z*hn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Y=a.createBuffer({label:"workgroup prefixes",size:z*hn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),R=a.createBuffer({label:"digit base",size:hn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),q=Math.ceil(z/Kn),Z=Math.ceil(q/Kn),V=a.createBuffer({label:"prefix l0 sums",size:q*hn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ee=a.createBuffer({label:"prefix l0 offsets",size:q*hn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),K=a.createBuffer({label:"prefix l1 sums",size:Z*hn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),te=a.createBuffer({label:"prefix l1 offsets",size:Z*hn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=a.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:O}},{binding:2,resource:{buffer:Y}},{binding:3,resource:{buffer:V}},{binding:4,resource:{buffer:ee}},{binding:5,resource:{buffer:K}},{binding:6,resource:{buffer:te}},{binding:7,resource:{buffer:R}}]}),this.sort_localHistogramBindGroups=[a.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:N[0].sort_depths_buffer}},{binding:2,resource:{buffer:O}}]}),a.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:N[1].sort_depths_buffer}},{binding:2,resource:{buffer:O}}]})],this.sort_scatterBindGroups=[a.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:R}},{binding:2,resource:{buffer:N[0].sort_depths_buffer}},{binding:3,resource:{buffer:N[1].sort_depths_buffer}},{binding:4,resource:{buffer:N[0].sort_indices_buffer}},{binding:5,resource:{buffer:N[1].sort_indices_buffer}},{binding:6,resource:{buffer:Y}}]}),a.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:{buffer:R}},{binding:2,resource:{buffer:N[1].sort_depths_buffer}},{binding:3,resource:{buffer:N[0].sort_depths_buffer}},{binding:4,resource:{buffer:N[1].sort_indices_buffer}},{binding:5,resource:{buffer:N[0].sort_indices_buffer}},{binding:6,resource:{buffer:Y}}]})],this.sort_info_buffer=L,this.sort_ping_pong=N;const ue=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),de=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),pe=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Ee=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:ue,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"surfels + splats",layout:de,entries:[{binding:0,resource:{buffer:this.pc.surfel_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:pe,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBgl2=Ee,this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:Ee,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}},{binding:7,resource:{buffer:this.splat_frag_buffer}}]});const Te=this.device.createShaderModule({code:Wu});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Te,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]}),this.bfcParamsBuffer=this.device.createBuffer({label:"bfc params (uniform, 16 B)",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([2,0,0,0]));const Re=[{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],Ge=[{binding:1,resource:{buffer:this.bfcParamsBuffer}}];if(this.staticSortKeys){if(this.staticSortKeys.length!==this.pc.num_points)throw new Error(`staticSortKeys has ${this.staticSortKeys.length} entries, expected ${this.pc.num_points}`);this.staticKeysBuffer=this.device.createBuffer({label:"static sort keys",size:Wn(this.staticSortKeys.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.staticKeysBuffer,0,this.staticSortKeys),Re.push({binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),Ge.push({binding:2,resource:{buffer:this.staticKeysBuffer}})}this.bfcBindGroupLayout=this.device.createBindGroupLayout({label:"bfc params (cull group 3)",entries:Re}),this.bfcBindGroup=this.device.createBindGroup({label:"bfc params bind",layout:this.bfcBindGroupLayout,entries:Ge});const ie=this.device.createShaderModule({code:Nn(ju,{STATIC_KEYS:this.staticSortKeys!==null,WIDE_FRUSTUM:this.wideFrustum})});this.cullPipeline=this.device.createComputePipeline({label:"surfel_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[ue,de,pe,this.bfcBindGroupLayout]}),compute:{module:ie,entryPoint:"surfel_cull"}});const F=this.device.createShaderModule({code:Nn(Ku,{PACKED:this.packed})});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[ue,Ee]}),compute:{module:F,entryPoint:"preprocess"}});const xe=this.device.createShaderModule({label:"render_2dgs",code:Nn(Ms,{FETCH_BY_ID:this.fetchById,OCT:this.octBound,F16:this.f16,PACKED:this.packed&&this.fetchById,LEAN:this.lean})});xe.getCompilationInfo().then(Ae=>{Ae.messages.length>0?(console.group("[render_2dgs.wgsl] compilation messages"),Ae.messages.forEach(De=>{(De.type==="error"?console.error:De.type==="warning"?console.warn:console.log)(`${De.type} (line ${De.lineNum}:${De.linePos}): ${De.message}`)}),console.groupEnd()):console.log("[render_2dgs.wgsl] compiled clean")});const be=this.device.createBindGroupLayout({label:"render_settings (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),me=this.fetchById?GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX,fe=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex)",entries:[{binding:0,visibility:me,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),oe=this.device.createBindGroupLayout({label:"atlas (fragment)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),Pe=this.atlas.meta.format!==4294967295&&this.atlas.meta.kernel_type===0?0:1;this.device.pushErrorScope("validation"),this.renderPipeline=this.device.createRenderPipeline({label:"render_2dgs",layout:this.device.createPipelineLayout({bindGroupLayouts:[be,fe,oe]}),vertex:{module:xe,entryPoint:"vs_main"},fragment:{module:xe,entryPoint:"fs_main",constants:{BETA_KERNEL:this.kmode===3?0:Pe,KMODE:this.kmode===3?0:this.kmode},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});const Ie=(Ae,De,ye,ve=1,Se=this.lean)=>{const I=this.device.createShaderModule({label:`render_2dgs (${Ae})`,code:Nn(Ms,{FETCH_BY_ID:De,OCT:ye,F16:this.f16,PACKED:this.packed&&De,LEAN:Se})});return this.device.createRenderPipeline({label:`render_2dgs_${Ae}`,multisample:{count:ve},layout:this.device.createPipelineLayout({bindGroupLayouts:[be,fe,oe]}),vertex:{module:I,entryPoint:"vs_main"},fragment:{module:I,entryPoint:"fs_main",constants:{BETA_KERNEL:this.kmode===3?0:Pe,KMODE:this.kmode===3?0:this.kmode},targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}})};this.rendererBgls=[be,fe,oe],this.betaKernelConst=Pe,this.varyingsPipeline=Ie("varyings",!1,this.octBound),this.legacyRenderPipeline=this.octBound?Ie("legacy",!1,!1):this.varyingsPipeline,this.mkVariant=Ie,this.device.popErrorScope().then(Ae=>{Ae?console.error("[render_2dgs] pipeline create validation error:",Ae.message):console.log("[render_2dgs] pipeline created OK")}),this.renderSettingsBindGroup=this.device.createBindGroup({label:"render_settings (vertex)",layout:be,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}}]}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"splats_2d + indices (vertex)",layout:fe,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Qs].sort_indices_buffer}},{binding:2,resource:{buffer:this.splat_frag_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:oe,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.renderShaderModule=xe,this.betaKernel=Pe,this.renderSettingsBgl=be,this.renderSplatsBgl=fe,this.atlasBgl=oe}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}get resolvesIntoTarget(){return this.msaa||this.acc16||this.overdrawMode!==0}setSlopeAtlas(s,a){this.slopeBgl||(this.slopeBgl=this.device.createBindGroupLayout({label:"slope sidecar",entries:[{binding:6,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:7,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]})),s||(this.slopeDummy??(this.slopeDummy=this.device.createTexture({size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING})),s=this.slopeDummy.createView({dimension:"2d-array"}));const u=this.device.createBuffer({label:"slope params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(u,0,new Float32Array(a)),this.slopeBg=this.device.createBindGroup({layout:this.slopeBgl,entries:[{binding:6,resource:s},{binding:7,resource:{buffer:u}}]})}slopePipelineFor(s,a){this.slopeBg||this.setSlopeAtlas(null,[0,0,0,0]);const u=`${s?1:0}${a?1:0}${this.slopeSource}`;let l=this.slopePipelines.get(u);if(!l){const _=this.device.createShaderModule({label:`render_2dgs slope (${u})`,code:Nn(Ms,{FETCH_BY_ID:s,OCT:a})}),y={color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}};l=this.device.createRenderPipeline({label:`render_2dgs_slope_${u}`,layout:this.device.createPipelineLayout({bindGroupLayouts:[...this.rendererBgls,this.slopeBgl]}),vertex:{module:_,entryPoint:"vs_main"},fragment:{module:_,entryPoint:"fs_slope",constants:{BETA_KERNEL:this.betaKernelConst,SLOPE_SRC:this.slopeSource},targets:[{format:this.presentationFormat,blend:y},{format:"rgba16float",blend:y}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.slopePipelines.set(u,l)}return l}rfEnsure(s,a){var P;const u=this.device;this.rfLowBgl||(this.rfLowBgl=u.createBindGroupLayout({label:"refetch (low)",entries:[{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"storage"}},{binding:11,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.rfUpBgl=u.createBindGroupLayout({label:"refetch (up)",entries:[{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"storage"}},{binding:11,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:12,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:13,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:14,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:15,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.rfSplatsBgl=u.createBindGroupLayout({label:"refetch splats",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]}),this.rfParams=u.createBuffer({label:"refetch params",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const l=s*a*4*4;(!this.rfKeys||this.rfKeysCap<l)&&((P=this.rfKeys)==null||P.destroy(),this.rfKeysCap=Math.ceil(l*1.25/256)*256,this.rfKeys=u.createBuffer({label:"refetch keys",size:this.rfKeysCap,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.rfLowBg=null,this.rfUpBg=null),this.rfLowBg||(this.rfLowBg=u.createBindGroup({layout:this.rfLowBgl,entries:[{binding:10,resource:{buffer:this.rfKeys}},{binding:11,resource:{buffer:this.rfParams}}]}));const _=this.refetch,y=new Uint32Array([s,a,_.W,_.H,0,0,0,0]),x=new Float32Array(y.buffer);x[4]=_.thr,x[5]=_.gain,y[6]=_.edge?1:0,u.queue.writeBuffer(this.rfParams,0,y),this.rfWl=s,this.rfHl=a}rfPipeline(s,a,u){const l=s==="up"?"up":`${s}${a?1:0}${u?1:0}`;let _=this.rfPipelines.get(l);if(_)return _;const y=this.device.createShaderModule({label:`render_2dgs refetch (${l})`,code:Nn(Ms,{FETCH_BY_ID:s==="up"?!1:a,OCT:s==="up"?!1:u})}),x={color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}},P={BETA_KERNEL:this.betaKernelConst};if(s==="up")_=this.device.createRenderPipeline({label:"render_2dgs_refetch_up",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.rendererBgls[0],this.rfSplatsBgl,this.rendererBgls[2],this.rfUpBgl]}),vertex:{module:y,entryPoint:"vs_rf_full"},fragment:{module:y,entryPoint:"fs_refetch_up",constants:P,targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});else{const A=this.device.createPipelineLayout({bindGroupLayouts:[...this.rendererBgls,this.rfLowBgl]});_=this.device.createRenderPipeline({label:`render_2dgs_refetch_${l}`,layout:A,vertex:{module:y,entryPoint:"vs_main"},fragment:s==="select"?{module:y,entryPoint:"fs_refetch_select",constants:P,targets:[{format:"rgba16float",writeMask:0}]}:{module:y,entryPoint:"fs_refetch_cw",constants:P,targets:[{format:this.presentationFormat,blend:x},{format:"rgba16float",blend:x},{format:"rgba16float",blend:x},{format:"rgba16float",blend:x}]},primitive:{topology:"triangle-strip",cullMode:"none"}})}return this.rfPipelines.set(l,_),_}refetchPass(s,a){const u=this.refetch,l=[this.splat_2d_buffer,this.sort_ping_pong[Qs].sort_indices_buffer];(!this.rfSplatsBg||l.some((P,A)=>P!==this.rfSplatsKey[A]))&&(this.rfSplatsBg=this.device.createBindGroup({layout:this.rfSplatsBgl,entries:[{binding:0,resource:{buffer:l[0]}},{binding:1,resource:{buffer:l[1]}}]}),this.rfSplatsKey=l);const _=[this.rfKeys,u.wa,u.wb,u.wc,u.low];(!this.rfUpBg||_.some((P,A)=>P!==this.rfUpKey[A]))&&(this.rfUpBg=this.device.createBindGroup({layout:this.rfUpBgl,entries:[{binding:10,resource:{buffer:this.rfKeys}},{binding:11,resource:{buffer:this.rfParams}},{binding:12,resource:u.wa},{binding:13,resource:u.wb},{binding:14,resource:u.low},{binding:15,resource:u.wc}]}),this.rfUpKey=_);const y={label:"refetch_up",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};this.rfTsIndex>=0&&(y.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:this.rfTsIndex},this.rfTsIndex=-1);const x=s.beginRenderPass(y);x.setPipeline(this.rfPipeline("up",!1,!1)),x.setBindGroup(0,this.renderSettingsBindGroup),x.setBindGroup(1,this.rfSplatsBg),x.setBindGroup(2,this.atlasBindGroup),x.setBindGroup(3,this.rfUpBg),x.draw(3),x.end()}setBfcParams(s,a){this.device.queue.writeBuffer(this.bfcParamsBuffer,0,new Float32Array([s,a[0],a[1],a[2]]))}get texParamsBuffer(){return this.atlas.texParamsBuffer}get hasAtlas(){return this.atlas.meta.format!==4294967295}writeAtlasParams(){var l;const s=new ArrayBuffer(32),a=new Uint32Array(s),u=new Float32Array(s);a[0]=(this.atlas.meta.slice_width||this.atlas.meta.width)|0,a[1]=this.atlas.meta.layer_h|0,u[2]=this.atlas.meta.uv_extent||0,a[3]=this.atlas.meta.probe_mode|0||0,a[4]=this._mipMode!==0?Math.max(1,((l=this.atlas.meta.mip_bytes)==null?void 0:l.length)??1):1,u[5]=this.mipLodBias,a[6]=this._mipMode===2||this._mipMode===3?1:0,this.device.queue.writeBuffer(this.atlasParamsBuffer,0,s)}setMsaa(s){s!==this.msaa&&(this.msaa=s,bt(`[render_2dgs] MSAA 4x: ${s?"ON":"OFF"}`))}get isMsaa(){return this.msaa}msaaPipelineFor(s,a){const u=`${s?"byid":"var"}_${a?"oct":"quad"}`;let l=this.msaaPipelines.get(u);return l||(l=this.mkVariant(`msaa4_${u}`,s,a,4),this.msaaPipelines.set(u,l)),l}ensureMsaaResources(s,a){var u;this.msaaTexture!==null&&this.msaaW===s&&this.msaaH===a||((u=this.msaaTexture)==null||u.destroy(),this.msaaTexture=this.device.createTexture({label:"msaa4 colour",size:{width:s,height:a},sampleCount:4,format:this.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.msaaView=this.msaaTexture.createView(),this.msaaW=s,this.msaaH=a)}setTwoPass(s){s!==this.twoPass&&(this.twoPass=s,bt(`[render_2dgs] two-pass layer path: ${s?"ON":"OFF"} (thresh ${this.twoPassThresh.toFixed(2)})`))}get isTwoPass(){return this.twoPass}setOpaqueThresh(s){this.twoPassThresh=Math.min(.999,Math.max(.001,s)),this.writeTwoPassParams()}get opaqueThresh(){return this.twoPassThresh}writeTwoPassParams(){this.twoPassParamsBuffer!==null&&this.device.queue.writeBuffer(this.twoPassParamsBuffer,0,new Float32Array([this.twoPassThresh,0,0,0]))}ensureSplatsVF(){this.twoPassSplatsBg===null&&(this.twoPassSplatsBgl=this.device.createBindGroupLayout({label:"splats_2d + indices (vertex+fragment)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.twoPassSplatsBg=this.device.createBindGroup({label:"splats_2d + indices (vertex+fragment)",layout:this.twoPassSplatsBgl,entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[Qs].sort_indices_buffer}}]}))}ensureTwoPassResources(s,a){var u;this.ensureSplatsVF(),this.twoPassParamsBuffer===null&&(this.twoPassParamsBuffer=this.device.createBuffer({label:"twopass params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.writeTwoPassParams(),this.twoPassBgl=this.device.createBindGroupLayout({label:"twopass (camera + params)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.twoPassBg=this.device.createBindGroup({label:"twopass (camera + params)",layout:this.twoPassBgl,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.twoPassParamsBuffer}}]})),!(this.twoPassDepth!==null&&this.twoPassW===s&&this.twoPassH===a)&&((u=this.twoPassDepth)==null||u.destroy(),this.twoPassDepth=this.device.createTexture({label:"twopass layer depth",size:{width:Math.max(1,s),height:Math.max(1,a),depthOrArrayLayers:1},format:"depth32float",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.twoPassDepthView=this.twoPassDepth.createView(),this.twoPassW=s,this.twoPassH=a)}renderModuleFor(s,a,u){const l=`${s?"byid":"vary"}_${a?"oct":"quad"}_${u?"hwz":"z0"}`,_=this.twoPassModules.get(l);if(_!==void 0)return _;const y=this.device.createShaderModule({label:`render_2dgs (${l})`,code:Nn(Ms,{FETCH_BY_ID:s,OCT:a,HW_DEPTH:u})});return y.getCompilationInfo().then(x=>{for(const P of x.messages)P.type==="error"&&console.error(`[render_2dgs ${l}] (line ${P.lineNum}:${P.linePos}): ${P.message}`)}),this.twoPassModules.set(l,y),y}twoPassPipelinesFor(s,a){const u=`${s?"byid":"vary"}_${a?"oct":"quad"}`,l=this.twoPassPipelines.get(u);if(l!==void 0)return l;const _=this.renderModuleFor(s,a,!0),y=this.device.createPipelineLayout({bindGroupLayouts:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]});this.device.pushErrorScope("validation");const x=this.device.createRenderPipeline({label:`render_2dgs_opaque_${u}`,layout:y,vertex:{module:_,entryPoint:"vs_main"},fragment:{module:_,entryPoint:"fs_opaque",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat}]},depthStencil:{format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}}),P=this.device.createRenderPipeline({label:`render_2dgs_front_${u}`,layout:y,vertex:{module:_,entryPoint:"vs_main"},fragment:{module:_,entryPoint:"fs_front",constants:{BETA_KERNEL:this.betaKernel},targets:[{format:this.presentationFormat,blend:ps.BLEND_OVER}]},depthStencil:{format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"},primitive:{topology:"triangle-strip",cullMode:"none"}});this.device.popErrorScope().then(z=>{z?console.error(`[render_2dgs twopass ${u}] pipeline validation error:`,z.message):console.log(`[render_2dgs twopass ${u}] pipelines created OK`)});const A={opaque:x,front:P};return this.twoPassPipelines.set(u,A),A}setOverdrawMode(s){s!==this.overdrawMode&&(this.overdrawMode=s,this.ovLastStats=null,bt(`[render_2dgs] overdraw view: ${["off","shaded fragments","rasterised fragments"][s]}`))}get overdrawModeValue(){return this.overdrawMode}setOverdrawMax(s){this.overdrawMax=Math.max(1,s),this.ovParamsBuffer&&this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]))}ensureOverdrawResources(s,a){var u;if(this.ensureSplatsVF(),this.ovResolvePipeline===null){this.ovParamsBuffer=this.device.createBuffer({label:"overdraw params",size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.ovParamsBuffer,0,new Float32Array([this.overdrawMax,0,0,0]));const l=`
struct OvParams { max_count : f32, _a : f32, _b : u32, _c : u32 };
@group(0) @binding(0) var cnt : texture_2d<f32>;
@group(0) @binding(1) var<uniform> ov : OvParams;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
// 0 → near-black, ¼ → blue, ½ → green, ¾ → yellow, 1 → red, beyond → white.
fn ramp(t : f32) -> vec3<f32> {
    let c0 = vec3<f32>(0.03, 0.03, 0.12); let c1 = vec3<f32>(0.10, 0.35, 1.00);
    let c2 = vec3<f32>(0.10, 0.90, 0.30); let c3 = vec3<f32>(1.00, 0.90, 0.10);
    let c4 = vec3<f32>(1.00, 0.15, 0.10);
    if t >= 1.0 { return mix(c4, vec3<f32>(1.0), clamp((t - 1.0) * 4.0, 0.0, 1.0)); }
    let u = t * 4.0;
    if u < 1.0 { return mix(c0, c1, u); }
    if u < 2.0 { return mix(c1, c2, u - 1.0); }
    if u < 3.0 { return mix(c2, c3, u - 2.0); }
    return mix(c3, c4, u - 3.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(cnt));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    let c = textureLoad(cnt, q, 0).r;
    if c <= 0.0 { return vec4<f32>(0.0, 0.0, 0.0, 1.0); }
    return vec4<f32>(ramp(c / ov.max_count), 1.0);
}`,_=this.device.createShaderModule({label:"overdraw_resolve",code:l});this.ovResolveBgl=this.device.createBindGroupLayout({label:"overdraw resolve",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),this.ovResolvePipeline=this.device.createRenderPipeline({label:"overdraw_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovResolveBgl]}),vertex:{module:_,entryPoint:"vs_main"},fragment:{module:_,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}});const y=`
@group(0) @binding(0) var cnt : texture_2d<f32>;
@group(0) @binding(1) var<storage, read_write> stats : array<atomic<u32>, 4>;   // sum, max, covered px, pad
var<workgroup> w_sum : atomic<u32>;
var<workgroup> w_max : atomic<u32>;
var<workgroup> w_cov : atomic<u32>;
@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) gid : vec3<u32>, @builtin(local_invocation_index) li : u32) {
    if li == 0u { atomicStore(&w_sum, 0u); atomicStore(&w_max, 0u); atomicStore(&w_cov, 0u); }
    workgroupBarrier();
    let dims = textureDimensions(cnt);
    if gid.x < dims.x && gid.y < dims.y {
        let c = u32(textureLoad(cnt, vec2<i32>(gid.xy), 0).r + 0.5);
        if c > 0u { atomicAdd(&w_sum, c); atomicMax(&w_max, c); atomicAdd(&w_cov, 1u); }
    }
    workgroupBarrier();
    if li == 0u {
        atomicAdd(&stats[0], atomicLoad(&w_sum));
        atomicMax(&stats[1], atomicLoad(&w_max));
        atomicAdd(&stats[2], atomicLoad(&w_cov));
    }
}`,x=this.device.createShaderModule({label:"overdraw_stats",code:y});this.ovStatsBgl=this.device.createBindGroupLayout({label:"overdraw stats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.ovStatsPipeline=this.device.createComputePipeline({label:"overdraw_stats",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.ovStatsBgl]}),compute:{module:x,entryPoint:"main"}}),this.ovStatsBuffer=this.device.createBuffer({label:"overdraw stats",size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.ovReadback=this.device.createBuffer({label:"overdraw stats readback",size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}this.ovTexture!==null&&this.ovW===s&&this.ovH===a||((u=this.ovTexture)==null||u.destroy(),this.ovTexture=this.device.createTexture({label:"overdraw counts",size:{width:Math.max(1,s),height:Math.max(1,a),depthOrArrayLayers:1},format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.ovView=this.ovTexture.createView(),this.ovResolveBg=this.device.createBindGroup({label:"overdraw resolve",layout:this.ovResolveBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovParamsBuffer}}]}),this.ovStatsBg=this.device.createBindGroup({label:"overdraw stats",layout:this.ovStatsBgl,entries:[{binding:0,resource:this.ovView},{binding:1,resource:{buffer:this.ovStatsBuffer}}]}),this.ovW=s,this.ovH=a)}ovPipelineFor(s,a,u){const l=`${s}_${a?"byid":"vary"}_${u?"oct":"quad"}`,_=this.ovPipelines.get(l);if(_!==void 0)return _;const y=s.startsWith("tp_"),x=this.renderModuleFor(a,u,y),P=this.device.createPipelineLayout({bindGroupLayouts:y?[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl,this.twoPassBgl]:[this.renderSettingsBgl,this.twoPassSplatsBgl,this.atlasBgl]}),A={single_raster:"fs_count_raster",single_shaded:"fs_count_shaded",tp_raster:"fs_count_raster",tp_opaque:"fs_count_opaque",tp_front:"fs_count_front"}[s];let z;s==="tp_raster"?z={format:"depth32float",depthWriteEnabled:!1,depthCompare:"always"}:s==="tp_opaque"?z={format:"depth32float",depthWriteEnabled:!0,depthCompare:"less"}:s==="tp_front"&&(z={format:"depth32float",depthWriteEnabled:!1,depthCompare:"less"}),this.device.pushErrorScope("validation");const L=this.device.createRenderPipeline({label:`render_2dgs_${l}`,layout:P,vertex:{module:x,entryPoint:"vs_main"},fragment:{module:x,entryPoint:A,constants:{BETA_KERNEL:this.betaKernel},targets:[{format:"r16float",blend:ps.BLEND_ADD}]},depthStencil:z,primitive:{topology:"triangle-strip",cullMode:"none"}});return this.device.popErrorScope().then(N=>{N&&console.error(`[render_2dgs overdraw ${l}] pipeline validation error:`,N.message)}),this.ovPipelines.set(l,L),L}async readOverdrawStats(){if(this.ovReadState!=="copied"||this.ovReadback===null)return this.ovLastStats;this.ovReadState="mapping";try{await this.ovReadback.mapAsync(GPUMapMode.READ);const s=new Uint32Array(this.ovReadback.getMappedRange().slice(0));this.ovReadback.unmap();const a=Math.max(1,this.ovW*this.ovH);this.ovLastStats={mean:s[0]/a,meanCovered:s[2]>0?s[0]/s[2]:0,max:s[1],coveredFrac:s[2]/a}}finally{this.ovReadState="idle"}return this.ovLastStats}ensureAccResources(s,a){var u;if(this.accResolvePipeline===null){const l=`
@group(0) @binding(0) var src : texture_2d<f32>;
@vertex fn vs_main(@builtin(vertex_index) vid : u32) -> @builtin(position) vec4<f32> {
    const pos = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[vid], 0.0, 1.0);
}
@fragment fn fs_main(@builtin(position) p : vec4<f32>) -> @location(0) vec4<f32> {
    let dims = vec2<i32>(textureDimensions(src));
    let q = clamp(vec2<i32>(floor(p.xy)), vec2<i32>(0), dims - vec2<i32>(1));
    return textureLoad(src, q, 0);
}`,_=this.device.createShaderModule({label:"acc16_resolve",code:l});this.accResolveBgl=this.device.createBindGroupLayout({label:"acc16_resolve src",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.accResolvePipeline=this.device.createRenderPipeline({label:"acc16_resolve",layout:this.device.createPipelineLayout({bindGroupLayouts:[this.accResolveBgl]}),vertex:{module:_,entryPoint:"vs_main"},fragment:{module:_,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}})}this.accTexture!==null&&this.accW===s&&this.accH===a||((u=this.accTexture)==null||u.destroy(),this.accTexture=this.device.createTexture({label:"acc16 target",size:{width:Math.max(1,s),height:Math.max(1,a),depthOrArrayLayers:1},format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.accView=this.accTexture.createView(),this.accResolveBindGroup=this.device.createBindGroup({label:"acc16_resolve bind",layout:this.accResolveBgl,entries:[{binding:0,resource:this.accView}]}),this.accW=s,this.accH=a)}setAtlas(s){this.atlas=s??Wa(this.device),this.writeAtlasParams(),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg1",layout:this.preprocessBgl2,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sh_solvers_buffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.pc.sv_params_buffer}},{binding:4,resource:{buffer:this.atlas.rectsBuffer}},{binding:5,resource:{buffer:this.atlasParamsBuffer}},{binding:6,resource:{buffer:this.pc.surfel_buffer}},{binding:7,resource:{buffer:this.splat_frag_buffer}}]}),this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]}),this.atlas.meta.format!==4294967295&&er(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}setAtlasEnabled(s){this.atlas.meta.format!==4294967295&&(this._atlasEnabled=s,er(this.device,this.atlas.texParamsBuffer,this.atlas.meta,s,this._mipMode))}setMipLodBias(s){this.mipLodBias=s,this.writeAtlasParams()}setFetchById(s){s!==this.fetchById&&(this.fetchById=s,bt(`[render_2dgs] fragment inputs: ${s?"fetch-by-id (storage re-read)":"13 flat varyings"}`))}get isFetchById(){return this.fetchById}setLowPass(s){ru(s,this.device,this.render_settings_buffer)}setLegacyRenderer(s){if(s===this.legacyRenderer)return;this.legacyRenderer=s,ds({legacyPos:s,hypLegacy:s},this.device,this.render_settings_buffer);const a=!s&&this.octBound?8:4;this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([a])),bt(`[render_2dgs] renderer: ${s?"LEGACY (varyings, quad, f16 centres)":"current"}`)}get isLegacyRenderer(){return this.legacyRenderer}atlasSampler(){return this._mipMode===2&&this.atlas.samplerAniso?this.atlas.samplerAniso:this._mipMode===3&&this.atlas.samplerTri?this.atlas.samplerTri:this.atlas.sampler}byIdPipelineForMip(){return!this.lean||this._mipMode!==2&&this._mipMode!==3?this.renderPipeline:(this.fullByIdPipeline||(this.fullByIdPipeline=this.mkVariant("byid_full",!0,this.octBound,1,!1)),this.fullByIdPipeline)}setMipMode(s){if(this.atlas.meta.format===4294967295)return;const a=this.atlasSampler();this._mipMode=typeof s=="boolean"?s?1:0:s,a!==this.atlasSampler()&&this.atlasBgl&&(this.atlasBindGroup=this.device.createBindGroup({label:"atlas (fragment)",layout:this.atlasBgl,entries:[{binding:0,resource:this.atlas.view},{binding:1,resource:this.atlasSampler()},{binding:2,resource:{buffer:this.atlas.texParamsBuffer}},{binding:3,resource:{buffer:this.atlas.rectsBuffer}}]})),this.writeAtlasParams(),er(this.device,this.atlas.texParamsBuffer,this.atlas.meta,this._atlasEnabled,this._mipMode)}get hasMips(){var s;return(((s=this.atlas.meta.mip_bytes)==null?void 0:s.length)??1)>1}async debugReadSortedIndices(s=30){const a=Math.max(0,Math.min(s,this.pc.num_points)),u=a*Uint32Array.BYTES_PER_ELEMENT;if(u===0){console.log("[DEBUG] No indices to read.");return}const l=this.device.createBuffer({size:u,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),_=this.device.createCommandEncoder();_.copyBufferToBuffer(this.sort_ping_pong[Qs].sort_indices_buffer,0,l,0,u),this.device.queue.submit([_.finish()]),await l.mapAsync(GPUMapMode.READ);const y=new Uint32Array(l.getMappedRange());console.log("[DEBUG] Sorted indices (first",a,"):",Array.from(y)),l.unmap()}writeSortKeys(s){if(!this.staticKeysBuffer)throw new Error("writeSortKeys: renderer built without staticSortKeys");this.device.queue.writeBuffer(this.staticKeysBuffer,0,s)}frame(s,a,u=!0){this.preFrame&&this.preFrame();const _=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame,y=u&&this.timeQueryEnabled;{s.clearBuffer(this.sort_info_buffer,0,4);const x={label:"cull"};y&&(x.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:_+0,endOfPassWriteIndex:_+1});const P=s.beginComputePass(x);P.setPipeline(this.cullPipeline),P.setBindGroup(0,this.crsBg),P.setBindGroup(1,this.gsBg),P.setBindGroup(2,this.cullBg2),P.setBindGroup(3,this.bfcBindGroup);const A=Math.ceil(this.pc.num_points/Zu);P.dispatchWorkgroups(A,1,1),P.end()}{const x=s.beginComputePass({label:"calculate indirect dispatch"});x.setPipeline(this.indirectPipeline),x.setBindGroup(0,this.indirectBindGroup),x.dispatchWorkgroups(1,1,1),x.end()}{const x={label:"preprocess"};y&&(x.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:_+2,endOfPassWriteIndex:_+3});const P=s.beginComputePass(x);P.setPipeline(this.preprocessPipeline),P.setBindGroup(0,this.crsBg),P.setBindGroup(1,this.preprocessBg1),P.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),P.end()}for(let x=0;x<ar;x++){const P=x&1,A=this.sort_pipelines.passes[x],z=this.sort_localHistogramBindGroups[P],L=this.sort_scatterBindGroups[P];{const N={label:`upsweep_round${x}`};y&&x==0&&(N.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:_+4});const O=s.beginComputePass(N);O.setPipeline(A.localHistogram),O.setBindGroup(0,z),O.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),O.end()}{const N=s.beginComputePass({label:`prefix_round${x} - l0TileScan`});N.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),N.setBindGroup(0,this.sort_prefixBindGroup),N.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),N.end()}{const N=s.beginComputePass({label:`prefix_round${x} - l1TileScanOnL0`});N.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),N.setBindGroup(0,this.sort_prefixBindGroup),N.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),N.end()}{const N=s.beginComputePass({label:`prefix_round${x} - l1ScanSums`});N.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),N.setBindGroup(0,this.sort_prefixBindGroup),N.dispatchWorkgroups(1,hn,1),N.end()}{const N=s.beginComputePass({label:`prefix_round${x} - addL1ToL0`});N.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),N.setBindGroup(0,this.sort_prefixBindGroup),N.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),N.end()}{const N=s.beginComputePass({label:`prefix_round${x} - addL0ToElems`});N.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),N.setBindGroup(0,this.sort_prefixBindGroup),N.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),N.end()}{const N=s.beginComputePass({label:`prefix_round${x} - computeDigitBase`});N.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),N.setBindGroup(0,this.sort_prefixBindGroup),N.dispatchWorkgroups(1,1,1),N.end()}{const N={label:`scatter_round${x}`};y&&x==ar-1&&(N.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:_+5});const O=s.beginComputePass(N);O.setPipeline(A.scatterElements),O.setBindGroup(0,L),O.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),O.end()}}{const x=lt.canvas_size[0],P=lt.canvas_size[1],A=this.overdrawMode!==0;this.refetchApplied=!1;let z=a;A?(this.ensureOverdrawResources(x,P),z=this.ovView):this.acc16&&(this.ensureAccResources(x,P),z=this.accView);const L=A?{r:0,g:0,b:0,a:0}:this.bgColor,N=A||this.acc16,O=this.fetchById&&!this.legacyRenderer,Y=this.octBound&&!this.legacyRenderer;if(this.twoPass){this.ensureTwoPassResources(x,P);let R,q;if(A)this.overdrawMode===1?(R=this.ovPipelineFor("tp_opaque",O,Y),q=this.ovPipelineFor("tp_front",O,Y)):R=q=this.ovPipelineFor("tp_raster",O,Y);else{const te=this.twoPassPipelinesFor(O,Y);R=te.opaque,q=te.front}const Z={label:"render_opaque_layer",colorAttachments:[{view:z,loadOp:"clear",storeOp:"store",clearValue:L}],depthStencilAttachment:{view:this.twoPassDepthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};y&&(Z.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:_+6});const V=s.beginRenderPass(Z);V.setPipeline(R),V.setBindGroup(0,this.renderSettingsBindGroup),V.setBindGroup(1,this.twoPassSplatsBg),V.setBindGroup(2,this.atlasBindGroup),V.setBindGroup(3,this.twoPassBg),V.drawIndirect(this.draw_indirect_buffer,0),V.end();const ee={label:"render_front",colorAttachments:[{view:z,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.twoPassDepthView,depthReadOnly:!0}};y&&!N&&(ee.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:_+7});const K=s.beginRenderPass(ee);K.setPipeline(q),K.setBindGroup(0,this.renderSettingsBindGroup),K.setBindGroup(1,this.twoPassSplatsBg),K.setBindGroup(2,this.atlasBindGroup),K.setBindGroup(3,this.twoPassBg),K.drawIndirect(this.draw_indirect_buffer,0),K.end()}else{const R=this.msaa&&!A&&!this.acc16;R&&this.ensureMsaaResources(x,P);const q=this.refetch!==null&&!R&&!A&&!this.acc16&&!this.legacyRenderer,Z=!q&&this.slopeTarget!==null&&!R&&!A&&!this.acc16&&!this.legacyRenderer;this.refetchApplied=q;let V=!1;this.capPass&&!R&&!A&&!this.acc16&&(s.beginRenderPass({label:"cap clear",colorAttachments:[{view:z,loadOp:"clear",storeOp:"store",clearValue:L}]}).end(),V=this.capPass(s,z,this.viewport));const ee=[R?{view:this.msaaView,resolveTarget:z,loadOp:"clear",storeOp:"discard",clearValue:L}:{view:z,loadOp:V?"load":"clear",storeOp:"store",clearValue:L}];if(Z&&ee.push({view:this.slopeTarget,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}),q){const ue=this.viewport??[x,P];this.rfEnsure(ue[0],ue[1]),s.clearBuffer(this.rfKeys,0,ue[0]*ue[1]*16);const de=s.beginRenderPass({label:"refetch_select",colorAttachments:[{view:this.refetch.wa,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});de.setPipeline(this.rfPipeline("select",this.fetchById,Y)),de.setViewport(0,0,ue[0],ue[1],0,1),de.setScissorRect(0,0,ue[0],ue[1]),de.setBindGroup(0,this.renderSettingsBindGroup),de.setBindGroup(1,this.renderSplatsBindGroup),de.setBindGroup(2,this.atlasBindGroup),de.setBindGroup(3,this.rfLowBg),de.drawIndirect(this.draw_indirect_buffer,0),de.end();const pe={r:0,g:0,b:0,a:0};ee.push({view:this.refetch.wa,loadOp:"clear",storeOp:"store",clearValue:pe},{view:this.refetch.wb,loadOp:"clear",storeOp:"store",clearValue:pe},{view:this.refetch.wc,loadOp:"clear",storeOp:"store",clearValue:pe})}const K={label:"render",colorAttachments:ee};y&&(K.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:_+6,...N||q?{}:{endOfPassWriteIndex:_+7}}),this.rfTsIndex=q&&y?_+7:-1;const te=s.beginRenderPass(K);A?(te.setPipeline(this.ovPipelineFor(this.overdrawMode===1?"single_shaded":"single_raster",O,Y)),te.setBindGroup(1,this.twoPassSplatsBg)):q?(te.setPipeline(this.rfPipeline("cw",this.fetchById,Y)),te.setBindGroup(1,this.renderSplatsBindGroup),te.setBindGroup(3,this.rfLowBg)):Z?(te.setPipeline(this.slopePipelineFor(this.fetchById,Y)),te.setBindGroup(1,this.renderSplatsBindGroup),te.setBindGroup(3,this.slopeBg)):(te.setPipeline(R?this.msaaPipelineFor(O,Y):this.legacyRenderer?this.legacyRenderPipeline:this.fetchById?this.byIdPipelineForMip():this.varyingsPipeline),te.setBindGroup(1,this.renderSplatsBindGroup)),this.viewport!==null&&!R&&(te.setViewport(0,0,this.viewport[0],this.viewport[1],0,1),te.setScissorRect(0,0,this.viewport[0],this.viewport[1])),te.setBindGroup(0,this.renderSettingsBindGroup),te.setBindGroup(2,this.atlasBindGroup),te.drawIndirect(this.draw_indirect_buffer,0),te.end()}if(A){s.clearBuffer(this.ovStatsBuffer,0,16);const R=s.beginComputePass({label:"overdraw_stats"});R.setPipeline(this.ovStatsPipeline),R.setBindGroup(0,this.ovStatsBg),R.dispatchWorkgroups(Math.ceil(x/16),Math.ceil(P/16),1),R.end();const q={label:"overdraw_resolve",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]};y&&(q.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:_+7});const Z=s.beginRenderPass(q);Z.setPipeline(this.ovResolvePipeline),Z.setBindGroup(0,this.ovResolveBg),Z.draw(3),Z.end(),this.ovReadState==="idle"&&(s.copyBufferToBuffer(this.ovStatsBuffer,0,this.ovReadback,0,16),this.ovReadState="copied")}else if(this.acc16){const R={label:"acc16_resolve",colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:this.bgColor}]};y&&(R.timestampWrites={querySet:this.querySet,endOfPassWriteIndex:_+7});const q=s.beginRenderPass(R);q.setPipeline(this.accResolvePipeline),q.setBindGroup(0,this.accResolveBindGroup),q.draw(3),q.end()}}this.frameCount++}async readPerfMetrics(s){const a=(s==null?void 0:s.silent)??!1;if(this.frameCount<=0)return;const u=this.device.createCommandEncoder({label:"timestamp resolve encoder"});u.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),u.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([u.finish()]),await this.device.queue.onSubmittedWorkDone();const l=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];await this.resultBuffer.mapAsync(GPUMapMode.READ);const _=new BigInt64Array(this.resultBuffer.getMappedRange()),y=Math.min(this.frameCount,this.queryCapacityFrames),x=(this.lastFrame+this.frameCount-y)%this.queryCapacityFrames,P=Array.from({length:l.length},()=>[]);let A=0;for(let Z=0;Z<y;Z++){const V=(x+Z)%this.queryCapacityFrames,ee=V*this.queriesPerFrame;let K=!0;for(let te=0;te<l.length;te++){const[ue,de,pe]=l[te];if(_[ee+pe]===0n||_[ee+de]===0n||_[ee+de]<_[ee+pe]){K=!1;break}}if(!K){!a&&V%60===0&&console.debug("[timestamp] frame slot",V,"contains unwritten (0) timestamps, skipped in stats");continue}A++;for(let te=0;te<l.length;te++){const[ue,de,pe]=l[te],Ee=Number(_[ee+pe]),Te=Number(_[ee+de]);P[te].push((Te-Ee)/1e6)}}if(A===0){this.resultBuffer.unmap(),a||console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...P[0]);const z=[];let L=0,N=0,O=0;for(let Z=0;Z<l.length;Z++){const V=l[Z][0],ee=P[Z];let K=0;if(V==="Total"){const te=this.allFrameTimes;K=te.reduce((pe,Ee)=>pe+Ee,0)/te.length;const ue=[...te].sort((pe,Ee)=>pe-Ee);L=ue[Math.floor(ue.length*.99)]||0;const de=te.reduce((pe,Ee)=>pe+Math.pow(Ee-K,2),0)/te.length;N=Math.sqrt(de),O=K}else K=ee.reduce((te,ue)=>te+ue,0)/ee.length;z.push([V,K])}this.lastFrame+=this.frameCount,this.frameCount=0;const Y=Object.fromEntries(z);this.lastStageBreakdownMs={cull:Y.Culling??0,preprocess:Y.Preprocess??0,sort:Y.Sort??0,render:Y.Render??0,total:Y.Total??0};const q=`[TIMESTAMP - ${this.constructor.name}]
`+z.map(([Z,V])=>`${Z}: ${V.toFixed(3)}ms`).join(`
`)+`
Total P99: ${L.toFixed(3)}ms
Total STD: ${N.toFixed(3)}ms
Total AVG: ${O.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(a||(console.log(q),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes))),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const Z=`Stage,ms
`,V=z.map(([te,ue])=>`${te},${ue.toFixed(3)}`).join(`
`),ee="data:text/csv;charset=utf-8,"+encodeURIComponent(Z+V),K=document.createElement("a");K.href=ee,K.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(K),K.click(),K.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(q)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const s=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Ju,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const s=document.querySelector("canvas"),a=s?s.width:1,u=s?s.height:1;eu({width:a,height:u,sh_bias:this.pc.sh_bias,color_K:this.pc.K,feature_mode:this.pc.feature_mode}),fr(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"splats_2d (Splat2DGS)",size:Wn(this.pc.num_points*ed),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.splat_frag_buffer=this.device.createBuffer({label:"splats_frag (packed fragment records)",size:this.packed?Wn(this.pc.num_points*64):16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([this.octBound?8:4,0,0,0])),this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:Wn(this.pc.num_points*td),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(s){if(s&&s.trim().length>0){const a=s.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=a.length>0?a:this.downloadOnceFileName}else{const a=new Date,u=`${a.getFullYear()}${String(a.getMonth()+1).padStart(2,"0")}${String(a.getDate()).padStart(2,"0")}_${String(a.getHours()).padStart(2,"0")}${String(a.getMinutes()).padStart(2,"0")}${String(a.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${u}`}this.downloadOnceNextRead=!0}requestReorder(){}async maybeReorderAfterSubmit(){}};S(ps,"BLEND_OVER",{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}),S(ps,"BLEND_ADD",{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}});let or=ps;class ad{constructor(s){S(this,"nSurfels");S(this,"nNodes");S(this,"planes");S(this,"front");S(this,"back");S(this,"copOff");S(this,"cop");S(this,"missing");S(this,"stackNode");S(this,"stackPhase");S(this,"keys");S(this,"lastMs",0);S(this,"lastEye",[NaN,NaN,NaN]);const a=new DataView(s),u=String.fromCharCode(a.getUint8(0),a.getUint8(1),a.getUint8(2),a.getUint8(3));if(u!=="BSP1")throw new Error(`not a BSP1 file (magic ${u})`);this.nSurfels=a.getUint32(4,!0),this.nNodes=a.getUint32(8,!0);const l=a.getUint32(12,!0),_=a.getUint32(16,!0);let y=20;const x=this.nNodes;if(this.planes=new Float32Array(s.slice(y,y+x*16)),y+=x*16,this.front=new Int32Array(s.slice(y,y+x*4)),y+=x*4,this.back=new Int32Array(s.slice(y,y+x*4)),y+=x*4,this.copOff=new Uint32Array(s.slice(y,y+(x+1)*4)),y+=(x+1)*4,this.cop=new Uint32Array(s.slice(y,y+l*4)),y+=l*4,this.missing=new Uint32Array(s.slice(y,y+_*4)),y+=_*4,y!==s.byteLength)throw new Error(`BSP1 size mismatch: parsed ${y} of ${s.byteLength} bytes`);this.keys=new Float32Array(this.nSurfels),this.stackNode=new Int32Array(2*x+2),this.stackPhase=new Uint8Array(2*x+2)}computeKeys(s){const a=s[0],u=s[1],l=s[2];if(a===this.lastEye[0]&&u===this.lastEye[1]&&l===this.lastEye[2])return!1;this.lastEye=[a,u,l];const _=performance.now(),y=this.planes,x=this.front,P=this.back,A=this.copOff,z=this.cop,L=this.keys;let N=1;for(let q=0;q<this.missing.length;q++)L[this.missing[q]]=N++;const O=this.stackNode,Y=this.stackPhase;let R=0;for(O[0]=0,Y[0]=0,R=1;R>0;){R--;const q=O[R],Z=Y[R],V=y[4*q],ee=y[4*q+1],K=y[4*q+2];if(V===0&&ee===0&&K===0){for(let pe=A[q];pe<A[q+1];pe++)L[z[pe]]=N++;continue}const te=V*a+ee*u+K*l-y[4*q+3]>=0,ue=te?x[q]:P[q],de=te?P[q]:x[q];if(Z===0)O[R]=q,Y[R]=1,R++,de>=0&&(O[R]=de,Y[R]=0,R++);else{for(let pe=A[q];pe<A[q+1];pe++)L[z[pe]]=N++;ue>=0&&(O[R]=ue,Y[R]=0,R++)}}return this.lastMs=performance.now()-_,!0}invalidate(){this.lastEye=[NaN,NaN,NaN]}}async function od(i){const s=await fetch(i);if(!s.ok)throw new Error(`BSP fetch ${i}: HTTP ${s.status}`);return new ad(await s.arrayBuffer())}function ld(i,s){return 2*Math.atan(s/(2*i))}function cd(i,s,a,u){const l=Math.tan(u/2),_=Math.tan(a/2),y=l*i,x=-y,P=_*i,A=-P,z=Pt.create();return z[0]=2*i/(P-A),z[5]=-2*i/(y-x),z[2]=(P+A)/(P-A),z[6]=(y+x)/(y-x),z[14]=1,z[10]=s/(s-i),z[11]=-(s*i)/(s-i),Pt.transpose(z,z),z}async function ui(i){bt(`loading scene camera file... : ${i}`);const a=await(await fetch(i)).json();return bt(`loaded cameras count: ${a.length}`),a.map(u=>{const l=X.clone(u.position),_=Mt.create(...u.rotation.flat()),y=_[0],x=_[4],P=_[8],A=_[1],z=_[5],L=_[9],N=_[2],O=_[6],Y=_[10];y*(z*Y-L*O)-x*(A*Y-L*N)+P*(A*O-z*N)<0&&(_[1]=-_[1],_[5]=-_[5],_[9]=-_[9]);const q=Pt.fromMat3(_);return{position:l,rotation:q,img_name:u.img_name,id:u.id}})}const ud=4*2,dd=4*16,_o=4*dd+2*ud;function pd(i){return i.createBuffer({label:"camera uniform",size:_o,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const qn=new Float32Array(_o/Float32Array.BYTES_PER_ELEMENT),pr=class pr{constructor(s,a){S(this,"_renderSize",null);S(this,"_refSize",null);S(this,"uniform_buffer");S(this,"position",X.create());S(this,"rotation",Pt.create());S(this,"zfar",100);S(this,"fovY",45/180*Math.PI);S(this,"fovX");S(this,"focalRatioX",1);S(this,"focal",va.create());S(this,"viewport",va.create());S(this,"view_matrix",Pt.identity());S(this,"view_inv_matrix",Pt.identity());S(this,"proj_matrix",Pt.identity());S(this,"proj_inv_matrix",Pt.identity());S(this,"_negPos",X.create());S(this,"look",X.create(0,0,1));S(this,"up",X.create(0,1,0));S(this,"right",X.create(1,0,0));this.canvas=s,this.device=a,this.uniform_buffer=a?pd(a):null,this.on_update_canvas()}getFovY(){return this.fovY}setRenderSize(s,a,u,l){this._renderSize=[s,a],this._refSize=u&&l?[u,l]:null,this.on_update_canvas()}clearRenderSize(){this._renderSize=null,this._refSize=null,this.on_update_canvas()}getRenderSize(){return this._renderSize}getViewMatrix(){return this.view_matrix}on_update_canvas(){const s=this._renderSize?this._renderSize[0]:this.canvas.width,a=this._renderSize?this._renderSize[1]:this.canvas.height;if(this._refSize){const[u,l]=this._refSize,_=.5*l/Math.tan(this.fovY*.5);this.focal[0]=_*this.focalRatioX*(s/u),this.focal[1]=_*(a/l)}else{const u=.5*a/Math.tan(this.fovY*.5);this.focal[0]=u*this.focalRatioX,this.focal[1]=u}this.fovX=ld(this.focal[0],s),this.viewport[0]=s,this.viewport[1]=a,this.proj_matrix=cd(.01,this.zfar,this.fovX,this.fovY),Pt.inverse(this.proj_matrix,this.proj_inv_matrix),this.update_buffer()}update_buffer(){this._negPos[0]=-this.position[0],this._negPos[1]=-this.position[1],this._negPos[2]=-this.position[2],Pt.copy(this.rotation,this.view_matrix),Pt.translate(this.view_matrix,this._negPos,this.view_matrix),Pt.inverse(this.view_matrix,this.view_inv_matrix),X.transformMat4Upper3x3(pr.Z_AXIS,this.view_inv_matrix,this.look),X.normalize(this.look,this.look),X.cross(this.up,this.look,this.right),X.normalize(this.right,this.right);let s=0;qn.set(this.view_matrix,s),s+=16,qn.set(this.view_inv_matrix,s),s+=16,qn.set(this.proj_matrix,s),s+=16,qn.set(this.proj_inv_matrix,s),s+=16,qn.set(this.viewport,s),s+=2,qn.set(this.focal,s),s+=2,this.device&&this.device.queue.writeBuffer(this.uniform_buffer,0,qn)}set_preset(s){X.copy(s.position,this.position),Pt.copy(s.rotation,this.rotation),this.update_buffer()}setFov(s){this.fovY=s,this.on_update_canvas()}setFocalRatio(s){this.focalRatioX=s,this.on_update_canvas()}getFov(){return this.fovY}};S(pr,"Z_AXIS",X.create(0,0,1));let lr=pr;const hd={bilinear:0,bicubic:1,hermite:2,texture:3,bc5:4,p:4,spline:5,refetch:2},mo={texture:0,p:1,bc5:2,spline:2},fd=.7,_d=`
struct P { wl: u32, hl: u32, w: u32, h: u32, mode: u32, lam: f32, T: f32, pad2: u32, K: vec4<f32> };
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var<uniform> p: P;
// mode 5: learned spline kernel, control grid as a 3D texture (rgb = sample / x-Taylor / y-Taylor kernels)
@group(0) @binding(3) var spk: texture_3d<f32>;
@group(0) @binding(4) var spk_s: sampler;
// mode 3: blended texture slope from the renderer's second target, (Σ α T ∂Y/∂x, Σ α T ∂Y/∂y, 0, ·), low-res px units
@group(0) @binding(2) var slope: texture_2d<f32>;
fn ts(x: i32, y: i32) -> vec2<f32> {
    let xc = clamp(x, 0, i32(p.wl) - 1); let yc = clamp(y, 0, i32(p.hl) - 1);
    return textureLoad(slope, vec2<i32>(xc, yc), 0).rg;
}

@vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4<f32> {
    var pos = array<vec2<f32>, 3>(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(pos[i], 0.0, 1.0);
}
fn f(x: i32, y: i32) -> vec3<f32> {
    let xc = clamp(x, 0, i32(p.wl) - 1); let yc = clamp(y, 0, i32(p.hl) - 1);
    return textureLoad(src, vec2<i32>(xc, yc), 0).rgb;
}
fn gx(x: i32, y: i32) -> vec3<f32> {
    if (x <= 0) { return f(1, y) - f(0, y); }
    if (x >= i32(p.wl) - 1) { return f(x, y) - f(x - 1, y); }
    return 0.5 * (f(x + 1, y) - f(x - 1, y));
}
fn gy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return f(x, 1) - f(x, 0); }
    if (y >= i32(p.hl) - 1) { return f(x, y) - f(x, y - 1); }
    return 0.5 * (f(x, y + 1) - f(x, y - 1));
}
fn gxy(x: i32, y: i32) -> vec3<f32> {
    if (y <= 0) { return gx(x, 1) - gx(x, 0); }
    if (y >= i32(p.hl) - 1) { return gx(x, y) - gx(x, y - 1); }
    return 0.5 * (gx(x, y + 1) - gx(x, y - 1));
}
fn keys(t0: f32) -> f32 {
    let a = -0.75; let t = abs(t0);
    if (t <= 1.0) { return ((a + 2.0) * t - (a + 3.0)) * t * t + 1.0; }
    if (t < 2.0) { return ((a * t - 5.0 * a) * t + 8.0 * a) * t - 4.0 * a; }
    return 0.0;
}
@fragment fn fs(@builtin(position) fc: vec4<f32>) -> @location(0) vec4<f32> {
    let X = i32(fc.x); let Y = i32(fc.y);
    let sx = clamp((f32(X) + 0.5) * (f32(p.wl) / f32(p.w)) - 0.5, 0.0, f32(p.wl) - 1.0);
    let sy = clamp((f32(Y) + 0.5) * (f32(p.hl) / f32(p.h)) - 0.5, 0.0, f32(p.hl) - 1.0);
    let i0 = clamp(i32(floor(sx)), 0, max(i32(p.wl) - 2, 0)); let j0 = clamp(i32(floor(sy)), 0, max(i32(p.hl) - 2, 0));
    let tx = clamp(sx - f32(i0), 0.0, 1.0); let ty = clamp(sy - f32(j0), 0.0, 1.0);
    var c = vec3<f32>(0.0);
    if (p.mode == 5u) {
        // SplineCNN kernel over the 2x2 cell (same conventions as spline_upscale_cuda.cu): output pixel at low-res
        // position (x, y), tap offset o = (x, y) - j, Taylor term t = gx*ox + gy*oy from the blended slope target;
        // pseudo-coordinate u = ((ox+1)/2, (oy+1)/2, clamp(t)/(2T)+0.5); knot i sits at u = i/(K-1) -> texel centre.
        let x = (f32(X) + 0.5) * (f32(p.wl) / f32(p.w)) - 0.5; let y = (f32(Y) + 0.5) * (f32(p.hl) / f32(p.h)) - 0.5;
        let ix0 = i32(floor(x)); let jy0 = i32(floor(y));
        let K3 = p.K.xyz;
        for (var b = 0; b < 2; b++) {
            for (var a = 0; a < 2; a++) {
                let jx = ix0 + a; let jy = jy0 + b;
                let ox = x - f32(jx); let oy = y - f32(jy);
                let s = ts(jx, jy);
                let tx = s.x * ox; let ty = s.y * oy; let t = tx + ty;
                let u = vec3<f32>((ox + 1.0) * 0.5, (oy + 1.0) * 0.5, clamp(t, -p.T, p.T) / (2.0 * p.T) + 0.5);
                let tc = (clamp(u, vec3<f32>(0.0), vec3<f32>(1.0)) * (K3 - 1.0) + 0.5) / K3;
                let k = textureSampleLevel(spk, spk_s, tc, 0.0).rgb;
                c += f(jx, jy) * k.r + vec3<f32>(tx) * k.g + vec3<f32>(ty) * k.b;
            }
        }
    } else if (p.mode == 0u) {
        c = mix(mix(f(i0, j0), f(i0 + 1, j0), tx), mix(f(i0, j0 + 1), f(i0 + 1, j0 + 1), tx), ty);
    } else if (p.mode == 1u) {
        for (var dy = -1; dy <= 2; dy++) {
            let wy = keys(f32(dy) - ty); var row = vec3<f32>(0.0);
            for (var dx = -1; dx <= 2; dx++) { row += keys(f32(dx) - tx) * f(i0 + dx, j0 + dy); }
            c += wy * row;
        }
    } else {
        let tx2 = tx * tx; let tx3 = tx2 * tx; let ty2 = ty * ty; let ty3 = ty2 * ty;
        let Hx = vec2<f32>(2.0 * tx3 - 3.0 * tx2 + 1.0, -2.0 * tx3 + 3.0 * tx2); let Gx = vec2<f32>(tx3 - 2.0 * tx2 + tx, tx3 - tx2);
        let Hy = vec2<f32>(2.0 * ty3 - 3.0 * ty2 + 1.0, -2.0 * ty3 + 3.0 * ty2); let Gy = vec2<f32>(ty3 - 2.0 * ty2 + ty, ty3 - ty2);
        for (var b = 0; b < 2; b++) {
            for (var a = 0; a < 2; a++) {
                let i = i0 + a; let j = j0 + b;
                if (p.mode == 4u) {   // slope sidecar alone (luminance slope -> all channels)
                    let t = ts(i, j);
                    c += f(i, j) * (Hx[a] * Hy[b]) + vec3<f32>(t.x) * (Gx[a] * Hy[b]) + vec3<f32>(t.y) * (Hx[a] * Gy[b]);
                    continue;
                }
                var sx = gx(i, j); var sy = gy(i, j);
                if (p.mode == 3u) { let t = ts(i, j) * p.lam; sx += vec3<f32>(t.x); sy += vec3<f32>(t.y); }   // luminance slope -> all channels
                c += f(i, j) * (Hx[a] * Hy[b]) + sx * (Gx[a] * Hy[b]) + sy * (Hx[a] * Gy[b]) + gxy(i, j) * (Gx[a] * Gy[b]);
            }
        }
    }
    return vec4<f32>(c, 1.0);
}`;class md{constructor(s,a,u,l,_=!1){S(this,"pipeline");S(this,"uni");S(this,"bgCache",new Map);S(this,"lowTex",null);S(this,"lowView",null);S(this,"lowSize",[0,0]);S(this,"allocSize",[0,0]);S(this,"last","");S(this,"slopeTex",null);S(this,"slopeView",null);S(this,"rfTex",[]);S(this,"rfViews",[]);S(this,"dummySlope");S(this,"splineTex");S(this,"splineSampler");S(this,"splineKernel",null);S(this,"scale");this.device=s,this.format=a,this.mode=u,this.exact=_,this.scale=l;const y=s.createShaderModule({label:"upscaler",code:_d});this.pipeline=s.createRenderPipeline({label:"upscaler",layout:"auto",vertex:{module:y,entryPoint:"vs"},fragment:{module:y,entryPoint:"fs",targets:[{format:a}]},primitive:{topology:"triangle-list"}}),this.uni=s.createBuffer({size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.dummySlope=s.createTexture({size:[1,1],format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING}),this.splineTex=s.createTexture({size:[1,1,1],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.splineSampler=s.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"})}get refetchViews(){return this.rfViews.length===3?{wa:this.rfViews[0],wb:this.rfViews[1],wc:this.rfViews[2],low:this.lowView}:null}get slopeTarget(){return this.slopeView}setSplineKernel(s){if(s===this.splineKernel)return;if(this.splineKernel=s,this.bgCache.clear(),this.last="",this.splineTex.destroy(),!s){this.splineTex=this.device.createTexture({size:[1,1,1],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return}const[a,u,l]=s.K,_=a*u*l,y=new Uint16Array(_*4);for(let x=0;x<_;x++)y[4*x]=Yr(s.w[3*x]),y[4*x+1]=Yr(s.w[3*x+1]),y[4*x+2]=Yr(s.w[3*x+2]),y[4*x+3]=15360;this.splineTex=this.device.createTexture({size:[a,u,l],dimension:"3d",format:"rgba16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.device.queue.writeTexture({texture:this.splineTex},y,{bytesPerRow:a*8,rowsPerImage:u},[a,u,l])}lowTarget(s,a){var x,P;const u=Math.max(1,Math.min(s,Math.round(s*this.scale))),l=Math.max(1,Math.min(a,Math.round(a*this.scale))),_=this.exact?u:s,y=this.exact?l:a;if(!this.lowTex||this.allocSize[0]!==_||this.allocSize[1]!==y){if((x=this.lowTex)==null||x.destroy(),this.bgCache.clear(),this.lowTex=this.device.createTexture({size:[_,y],format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.lowView=this.lowTex.createView(),this.allocSize=[_,y],(P=this.slopeTex)==null||P.destroy(),this.slopeTex=null,this.slopeView=null,this.rfTex.forEach(A=>A.destroy()),this.rfTex=[],this.rfViews=[],this.mode==="refetch")for(let A=0;A<3;A++){const z=this.device.createTexture({size:[_,y],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});this.rfTex.push(z),this.rfViews.push(z.createView())}mo[this.mode]!==void 0&&(this.slopeTex=this.device.createTexture({size:[_,y],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.slopeView=this.slopeTex.createView())}return this.lowSize=[u,l],{view:this.lowView,w:u,h:l}}pass(s,a,u,l){var z,L,N,O;const[_,y]=this.lowSize,x=`${_},${y},${u},${l}`;if(x!==this.last){const Y=new Uint32Array([_,y,u,l,hd[this.mode],0,0,0,0,0,0,0]),R=new Float32Array(Y.buffer);R[5]=fd,R[6]=((z=this.splineKernel)==null?void 0:z.T)??.25,R[8]=((L=this.splineKernel)==null?void 0:L.K[0])??1,R[9]=((N=this.splineKernel)==null?void 0:N.K[1])??1,R[10]=((O=this.splineKernel)==null?void 0:O.K[2])??1,R[11]=0,this.device.queue.writeBuffer(this.uni,0,Y),this.last=x}let P=this.bgCache.get(this.lowView);P||(P=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.lowView},{binding:1,resource:{buffer:this.uni}},{binding:2,resource:this.slopeView??this.dummySlope.createView()},{binding:3,resource:this.splineTex.createView({dimension:"3d"})},{binding:4,resource:this.splineSampler}]}),this.bgCache.set(this.lowView,P));const A=s.beginRenderPass({colorAttachments:[{view:a,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});A.setPipeline(this.pipeline),A.setBindGroup(0,P),A.draw(3),A.end()}destroy(){var s,a;this.rfTex.forEach(u=>u.destroy()),(s=this.lowTex)==null||s.destroy(),(a=this.slopeTex)==null||a.destroy(),this.dummySlope.destroy(),this.splineTex.destroy(),this.uni.destroy()}}function Yr(i){const s=new Float32Array([i]),a=new Uint32Array(s.buffer)[0],u=a>>>16&32768;let l=(a>>>23&255)-127+15,_=a&8388607;if((a>>>23&255)===255)return u|31744|(_?512:0);if(l>=31)return u|31744;if(l<=0){if(l<-10)return u;_|=8388608;const P=14-l;let A=_>>P;const z=_&(1<<P)-1,L=1<<P-1;return(z>L||z===L&&A&1)&&A++,u|A}let y=u|l<<10|_>>13;const x=_&8191;return(x>4096||x===4096&&y&1)&&y++,y}const Rs=64,Xr=-7,bd=5;function Zr(i){const s=i&32768?-1:1,a=i>>10&31,u=i&1023;return a===0?s*u*2**-24:a===31?u?NaN:s*(1/0):s*(1+u/1024)*2**(a-15)}class vd{constructor(s,a,u,l={}){S(this,"n");S(this,"texelMode");S(this,"px");S(this,"py");S(this,"pz");S(this,"tpu");S(this,"op");S(this,"ext2s");S(this,"hist",new Float64Array(Rs));S(this,"cur",1);S(this,"agree",0);S(this,"tau");S(this,"pct");S(this,"levels");S(this,"upHold");S(this,"minPx");S(this,"continuous");S(this,"fMax");S(this,"rateUp");S(this,"rateDown");S(this,"deadband");S(this,"minF");this.tau=l.tau??1,this.pct=l.pct??.5,this.upHold=l.upHold??12,this.minPx=l.minPx??6,this.levels=(l.levels??[1,2,4]).slice().sort((Z,V)=>Z-V),this.continuous=l.continuous??!0,this.fMax=this.levels[this.levels.length-1],this.rateUp=l.rateUp??.03,this.rateDown=l.rateDown??.1,this.deadband=l.deadband??.06,this.minF=Math.max(1,l.minF??1.3);const _=Math.min(l.sample??4096,a),y=new Uint32Array(s.buffer,s.byteOffset,a*8),x=u?u.uv_extent:3,P=!!u&&!u.probe_mode&&u.num_rects===a&&u.rects_expanded.length>=a*4,A=P?Math.round(u.rects_expanded.length/a):0;this.texelMode=P;const z=[],L=[],N=[],O=[],Y=[],R=[],q=a/_;for(let Z=0;Z<_;Z++){const V=Math.min(a-1,Math.floor(Z*q)),ee=Zr(y[V*8+3]&65535);if(!(ee>.02))continue;const K=Zr(y[V*8+4]&65535),te=Zr(y[V*8+4]>>>16),ue=Math.sqrt(Math.max(1e-12,K*te));let de;if(P){const pe=u.rects_expanded[V*A+2],Ee=u.rects_expanded[V*A+3];if(!(pe>0&&Ee>0))continue;de=Math.sqrt(pe*Ee)/(2*x*ue)}else de=1/(2*x*ue);z.push(s[V*8]),L.push(s[V*8+1]),N.push(s[V*8+2]),O.push(de),Y.push(ee),R.push(2*x*ue)}this.n=z.length,this.px=Float32Array.from(z),this.py=Float32Array.from(L),this.pz=Float32Array.from(N),this.tpu=Float32Array.from(O),this.op=Float32Array.from(Y),this.ext2s=Float32Array.from(R)}get factor(){return this.cur}reset(){this.cur=1,this.agree=0}choose(s,a,u){const l=s.rotation,_=s.position[0],y=s.position[1],x=s.position[2],P=s.getFovY(),A=Math.tan(P*.5),z=A*a/u,L=.5*u/A,N=this.hist;N.fill(0);let O=0,Y=0;const R=Rs/(bd-Xr);for(let V=0;V<this.n;V++){const ee=this.px[V]-_,K=this.py[V]-y,te=this.pz[V]-x,ue=l[2]*ee+l[6]*K+l[10]*te;if(!(ue>.05))continue;const de=l[0]*ee+l[4]*K+l[8]*te,pe=l[1]*ee+l[5]*K+l[9]*te;if(Math.abs(de)>1.15*ue*z||Math.abs(pe)>1.15*ue*A)continue;const Ee=this.ext2s[V]*L/ue,Te=this.texelMode?this.tpu[V]*ue/L:this.minPx/Ee,Re=this.op[V]*Math.min(Ee*Ee,4096);let Ge=Math.floor((Math.log2(Math.max(Te,1e-9))-Xr)*R);Ge=Ge<0?0:Ge>=Rs?Rs-1:Ge,N[Ge]+=Re,O+=Re,Y++}let q=1/0;if(O>0){let V=0;for(let ee=0;ee<Rs;ee++)if(V+=N[ee],V>=this.pct*O){q=2**(Xr+(ee+.5)/R);break}}if(this.continuous){let V=q>0?Math.min(this.fMax,Math.max(1,this.tau/q)):1;V<(this.cur===1?this.minF:this.minF/1.13)?V=1:this.cur===1&&(this.cur=this.minF/1.13);const ee=Math.log2(V)-Math.log2(this.cur);if(Math.abs(ee)>Math.log2(1+this.deadband)||V===1||V===this.fMax){const K=ee>0?Math.min(ee,this.rateUp):Math.max(ee,-this.rateDown);this.cur=Math.abs(ee)<=Math.abs(K)?V:2**(Math.log2(this.cur)+K)}return(this.cur<this.minF/1.13-1e-6||this.cur<1.02)&&(this.cur=1),{f:this.cur,q,visible:Y,texelMode:this.texelMode}}let Z=1;for(const V of this.levels)V*q<=this.tau&&(Z=V);return Z<this.cur?(this.cur=Z,this.agree=0):Z>this.cur?++this.agree>=this.upHold&&(this.cur=Z,this.agree=0):this.agree=0,{f:this.cur,q,visible:Y,texelMode:this.texelMode}}}const gd=X.create(1,0,0),wd=X.create(0,1,0),xd=X.create(0,0,1);function yd(i,s){const a=i[0],u=i[4],l=i[8],_=i[1],y=i[5],x=i[9],P=i[2],A=i[6],z=i[10],L=a+y+z;let N,O,Y,R;if(L>0){const q=.5/Math.sqrt(L+1);N=.25/q,O=(A-x)*q,Y=(l-P)*q,R=(_-u)*q}else if(a>y&&a>z){const q=2*Math.sqrt(1+a-y-z);N=(A-x)/q,O=.25*q,Y=(u+_)/q,R=(l+P)/q}else if(y>z){const q=2*Math.sqrt(1+y-a-z);N=(l-P)/q,O=(u+_)/q,Y=.25*q,R=(x+A)/q}else{const q=2*Math.sqrt(1+z-a-y);N=(_-u)/q,O=(l+P)/q,Y=(x+A)/q,R=.25*q}return s[0]=O,s[1]=Y,s[2]=R,s[3]=N,s}class bo{constructor(s){S(this,"element");S(this,"enabled",!0);S(this,"center",X.create(0,0,0));S(this,"up",X.create(0,1,0));S(this,"rotation",[0,0]);S(this,"shift",[0,0]);S(this,"scroll",0);S(this,"speed",.1);S(this,"sensitivity",.08);S(this,"leftPressed",!1);S(this,"rightPressed",!1);S(this,"leftDragPans",!1);S(this,"lastX",0);S(this,"lastY",0);S(this,"touches",new Map);S(this,"lastTouchCenter",null);S(this,"lastPinchDistance",null);S(this,"lastTwoFingerAngle",null);S(this,"lastTouchCount",0);S(this,"roll",0);S(this,"_dir",X.create());S(this,"_right",X.create());S(this,"_upCam",X.create());S(this,"_scratch",X.create());S(this,"_qY",mt.create());S(this,"_qX",mt.create());S(this,"_qRot",mt.create());S(this,"_qZ",mt.create());S(this,"_qLocal",mt.create());S(this,"_qWorldToCam",mt.create());S(this,"_scratchMat3",Mt.create());S(this,"bboxMin",null);S(this,"bboxMax",null);S(this,"anchor",X.create(0,0,0));S(this,"downCallback",s=>{var a,u,l,_;if(this.enabled){if(s.pointerType==="touch"){this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),(u=(a=s.target)==null?void 0:a.setPointerCapture)==null||u.call(a,s.pointerId),s.preventDefault();return}s.isPrimary&&(s.button===0?(this.leftPressed=!0,this.leftDragPans=s.shiftKey):s.button===2?this.rightPressed=!0:this.rightPressed=!0,this.lastX=s.pageX,this.lastY=s.pageY,(_=(l=s.target)==null?void 0:l.setPointerCapture)==null||_.call(l,s.pointerId),s.preventDefault())}});S(this,"moveCallback",s=>{if(!this.enabled)return;if(s.pointerType==="touch"){if(!this.touches.has(s.pointerId))return;this.touches.set(s.pointerId,{x:s.pageX,y:s.pageY}),this.handleTouchGestures(),s.preventDefault();return}if(!s.isPrimary||!this.leftPressed&&!this.rightPressed)return;s.preventDefault();const a=s.pageX-this.lastX,u=s.pageY-this.lastY;this.lastX=s.pageX,this.lastY=s.pageY,this.leftPressed&&!this.leftDragPans?(this.rotation[0]+=a,this.rotation[1]-=u):(this.rightPressed||this.leftPressed&&this.leftDragPans)&&(this.shift[1]-=a,this.shift[0]+=u)});S(this,"upCallback",s=>{var a,u,l,_;if(s.pointerType==="touch"){this.touches.delete(s.pointerId),this.handleTouchGestures(),(u=(a=s.target)==null?void 0:a.releasePointerCapture)==null||u.call(a,s.pointerId),s.preventDefault();return}s.button===0?this.leftPressed=!1:s.button===2?this.rightPressed=!1:this.rightPressed=!1,(_=(l=s.target)==null?void 0:l.releasePointerCapture)==null||_.call(l,s.pointerId),s.preventDefault()});S(this,"wheelCallback",s=>{if(!this.enabled||(s.preventDefault(),this.rightPressed))return;let a=s.deltaY;s.deltaMode===1?a*=16:s.deltaMode===2&&(a*=100),this.scroll+=a*.01});this.camera=s,this.registerElement(s.canvas)}get sceneRadius(){if(!this.bboxMin||!this.bboxMax)return null;const s=this.bboxMax[0]-this.bboxMin[0],a=this.bboxMax[1]-this.bboxMin[1],u=this.bboxMax[2]-this.bboxMin[2],l=.5*Math.sqrt(s*s+a*a+u*u);return l>1e-6?l:null}addRoll(s){this.roll+=s}registerElement(s){this.element&&this.element!==s&&(this.element.removeEventListener("pointerdown",this.downCallback),this.element.removeEventListener("pointermove",this.moveCallback),this.element.removeEventListener("pointerup",this.upCallback),this.element.removeEventListener("wheel",this.wheelCallback)),this.element=s,this.element.addEventListener("pointerdown",this.downCallback),this.element.addEventListener("pointermove",this.moveCallback),this.element.addEventListener("pointerup",this.upCallback),this.element.addEventListener("wheel",this.wheelCallback,{passive:!1}),this.element.addEventListener("contextmenu",a=>a.preventDefault())}setCenter(s){X.copy(s,this.center),X.copy(s,this.anchor)}setOrbitPivot(s){X.set(s[0],s[1],s[2],this.center),this._reorientCameraToCenter()}setOrbitDepth(s){if(!isFinite(s)||s<.001)return;const a=this.camera.rotation;X.set(a[2],a[6],a[10],this._dir),X.normalize(this._dir,this._dir),X.scale(this._dir,s,this._dir),X.add(this.camera.position,this._dir,this.center)}_reorientCameraToCenter(){const s=this.camera;if(X.subtract(this.center,s.position,this._scratch),X.length(this._scratch)<1e-6)return;X.normalize(this._scratch,this._scratch),X.cross(this.up,this._scratch,this._right),X.length(this._right)<1e-6&&X.set(1,0,0,this._right),X.normalize(this._right,this._right),X.cross(this._scratch,this._right,this._upCam),X.normalize(this._upCam,this._upCam);const a=s.rotation;a[0]=this._right[0],a[1]=this._upCam[0],a[2]=this._scratch[0],a[3]=0,a[4]=this._right[1],a[5]=this._upCam[1],a[6]=this._scratch[1],a[7]=0,a[8]=this._right[2],a[9]=this._upCam[2],a[10]=this._scratch[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,s.update_buffer()}setBbox(s,a){this.bboxMin=X.create(s[0],s[1],s[2]),this.bboxMax=X.create(a[0],a[1],a[2]);const u=(s[0]+a[0])*.5,l=(s[1]+a[1])*.5,_=(s[2]+a[2])*.5;X.set(u,l,_,this.center),X.set(u,l,_,this.anchor)}resetToCamera(){const s=this.camera.rotation;X.set(s[2],s[6],s[10],this._dir),X.normalize(this._dir,this._dir);let a=null;if(this.bboxMin&&this.bboxMax){let u=-1/0,l=1/0,_=!1;for(let y=0;y<3;y++){const x=this._dir[y],P=this.bboxMin[y]-this.camera.position[y],A=this.bboxMax[y]-this.camera.position[y];if(Math.abs(x)>1e-8){const z=P/x,L=A/x;u=Math.max(u,Math.min(z,L)),l=Math.min(l,Math.max(z,L))}else if(P>0||A<0){_=!0;break}}!_&&u<=l&&l>0&&(a=(Math.max(u,0)+l)*.5)}if(a===null||!isFinite(a)||a<.001){X.subtract(this.anchor,this.camera.position,this._scratch);const u=X.dot(this._scratch,this._dir);a=u>.001?u:X.length(this._scratch)}a=Math.max(.1,a),X.scale(this._dir,a,this._dir),X.add(this.camera.position,this._dir,this.center)}handleTouchGestures(){const s=this.touches.size;if(s!==this.lastTouchCount&&(this.lastTouchCenter=null,this.lastPinchDistance=null,this.lastTwoFingerAngle=null),this.lastTouchCount=s,s===1){const a=this.touches.values().next().value;if(this.lastTouchCenter){const u=a.x-this.lastTouchCenter[0],l=a.y-this.lastTouchCenter[1];this.rotation[0]+=u*.3,this.rotation[1]-=l*.3}this.lastTouchCenter=[a.x,a.y]}else if(s===2){const a=Array.from(this.touches.values()),u=(a[0].x+a[1].x)*.5,l=(a[0].y+a[1].y)*.5,_=a[1].x-a[0].x,y=a[1].y-a[0].y,x=Math.hypot(_,y),P=Math.atan2(y,_);if(this.lastTouchCenter!==null&&this.lastPinchDistance!==null&&this.lastTwoFingerAngle!==null){const A=u-this.lastTouchCenter[0],z=l-this.lastTouchCenter[1],L=Math.hypot(A,z),N=Math.abs(x-this.lastPinchDistance);let O=P-this.lastTwoFingerAngle;O>Math.PI&&(O-=2*Math.PI),O<-Math.PI&&(O+=2*Math.PI),L>.5&&(this.shift[1]-=A,this.shift[0]+=z),N>1&&this.lastPinchDistance>.001&&(this.scroll+=-Math.log(x/this.lastPinchDistance)*10),Math.abs(O)>.0087&&(this.roll+=O)}this.lastTouchCenter=[u,l],this.lastPinchDistance=x,this.lastTwoFingerAngle=P}}update(s){if(!this.enabled||Math.abs(this.rotation[0])<1e-4&&Math.abs(this.rotation[1])<1e-4&&Math.abs(this.shift[0])<1e-4&&Math.abs(this.shift[1])<1e-4&&Math.abs(this.scroll)<1e-4&&Math.abs(this.roll)<1e-4)return;const a=this.camera;{const q=a.rotation;this.up[0]=q[1],this.up[1]=q[5],this.up[2]=q[9],X.length(this.up)>1e-6?X.normalize(this.up,this.up):X.set(0,1,0,this.up)}let u=0,l=!1;Math.abs(this.roll)>1e-4&&(u=this.roll,this.roll=0,l=!0),X.subtract(a.position,this.center,this._dir);let _=X.length(this._dir);_<1e-6&&(_=1e-6);const y=Math.exp(Math.log(_)+this.scroll*s*10*this.speed);X.scale(this._dir,y/_,this._dir),_=y;const x=a.rotation;this._right[0]=x[0],this._right[1]=x[4],this._right[2]=x[8],X.normalize(this._right,this._right),X.length(this._right)<1e-6&&X.set(1,0,0,this._right);const P=X.create(x[1],x[5],x[9]);X.normalize(P,P),X.length(P)<1e-6&&X.set(0,1,0,P);const A=s*this.speed*.1*_,z=this.shift[1]*A,L=-this.shift[0]*A;X.scale(this._right,z,this._scratch),X.add(this.center,this._scratch,this.center),X.add(a.position,this._scratch,a.position),X.scale(P,L,this._scratch),X.add(this.center,this._scratch,this.center),X.add(a.position,this._scratch,a.position);const N=this.rotation[0]*s*this.sensitivity,O=this.rotation[1]*s*this.sensitivity;if(Math.abs(N)>1e-5||Math.abs(O)>1e-5||l){const q=a.rotation;yd(q,this._qWorldToCam),mt.fromAxisAngle(gd,-O,this._qX),mt.fromAxisAngle(wd,-N,this._qY),mt.multiply(this._qX,this._qY,this._qLocal),l&&(mt.fromAxisAngle(xd,1*u,this._qZ),mt.multiply(this._qZ,this._qLocal,this._qLocal)),mt.normalize(this._qLocal,this._qLocal),mt.multiply(this._qLocal,this._qWorldToCam,this._qWorldToCam),mt.normalize(this._qWorldToCam,this._qWorldToCam),Mt.fromQuat(this._qWorldToCam,this._scratchMat3),Pt.fromMat3(this._scratchMat3,a.rotation);const Z=a.rotation,V=Z[2],ee=Z[6],K=Z[10];a.position[0]=this.center[0]-V*_,a.position[1]=this.center[1]-ee*_,a.position[2]=this.center[2]-K*_,this.up[0]=Z[1],this.up[1]=Z[5],this.up[2]=Z[9],X.normalize(this.up,this.up)}else X.add(this.center,this._dir,a.position);a.update_buffer();const R=Math.pow(.8,s*60);this.rotation[0]*=R,Math.abs(this.rotation[0])<1e-4&&(this.rotation[0]=0),this.rotation[1]*=R,Math.abs(this.rotation[1])<1e-4&&(this.rotation[1]=0),this.shift[0]*=R,Math.abs(this.shift[0])<1e-4&&(this.shift[0]=0),this.shift[1]*=R,Math.abs(this.shift[1])<1e-4&&(this.shift[1]=0),this.scroll*=R,Math.abs(this.scroll)<1e-4&&(this.scroll=0)}}function vo(i){const s=X.create();for(const a of i)X.add(s,a,s);return X.scale(s,1/Math.max(i.length,1),s)}function go(i,s){const a=Mt.create();Mt.inverse(i,a);const u=X.create();return u[0]=a[0]*s[0]+a[4]*s[1]+a[8]*s[2],u[1]=a[1]*s[0]+a[5]*s[1]+a[9]*s[2],u[2]=a[2]*s[0]+a[6]*s[1]+a[10]*s[2],u}function Pd(i){const s=i.slice(),a=[1,0,0,0,1,0,0,0,1],u=(P,A)=>s[P*3+A],l=(P,A,z)=>{s[P*3+A]=z},_=(P,A)=>a[P*3+A],y=(P,A,z)=>{a[P*3+A]=z};for(let P=0;P<30;P++){let A=0,z=1,L=Math.abs(u(0,1));if(Math.abs(u(0,2))>L&&(A=0,z=2,L=Math.abs(u(0,2))),Math.abs(u(1,2))>L&&(A=1,z=2,L=Math.abs(u(1,2))),L<1e-12)break;const N=u(A,A),O=u(z,z),Y=u(A,z);let R;Math.abs(N-O)<1e-30?R=Math.PI/4*Math.sign(Y):R=.5*Math.atan2(2*Y,N-O);const q=Math.cos(R),Z=Math.sin(R);for(let V=0;V<3;V++){const ee=u(V,A),K=u(V,z);l(V,A,q*ee+Z*K),l(V,z,-Z*ee+q*K)}for(let V=0;V<3;V++){const ee=u(A,V),K=u(z,V);l(A,V,q*ee+Z*K),l(z,V,-Z*ee+q*K)}for(let V=0;V<3;V++){const ee=_(V,A),K=_(V,z);y(V,A,q*ee+Z*K),y(V,z,-Z*ee+q*K)}}const x=[];for(let P=0;P<3;P++)x.push({val:u(P,P),vec:X.create(_(0,P),_(1,P),_(2,P))});return x.sort((P,A)=>A.val-P.val),{vals:[x[0].val,x[1].val,x[2].val],vecs:[x[0].vec,x[1].vec,x[2].vec]}}function Sd(i,s){const a=vo(i);let u=0,l=0,_=0,y=0,x=0,P=0;for(const Y of i){const R=Y[0]-a[0],q=Y[1]-a[1],Z=Y[2]-a[2];u+=R*R,l+=R*q,_+=R*Z,y+=q*q,x+=q*Z,P+=Z*Z}const A=[u,l,_,l,y,x,_,x,P],{vecs:z}=Pd(A);let L=z[0],N=z[1],O=z[2];return X.dot(O,s)<0&&(X.scale(O,-1,O),X.scale(N,-1,N)),{centroid:a,normal:O,u:L,v:N}}function Ed(i){let s=0,a=0,u=0,l=0,_=0,y=0,x=0,P=0,A=0;for(const[q,Z]of i){const V=-2*q,ee=-2*Z,K=1,te=-(q*q+Z*Z);s+=V*V,a+=V*ee,u+=V*K,l+=ee*ee,_+=ee*K,y+=K*K,x+=V*te,P+=ee*te,A+=K*te}const z=Mt.create(s,a,u,a,l,_,u,_,y),L=go(z,X.create(x,P,A)),N=L[0],O=L[1],Y=L[2],R=N*N+O*O-Y;return{center:[N,O],radius:Math.sqrt(Math.max(R,1e-12))}}function kd(i,s){let a=0,u=0,l=0,_=0,y=0,x=0,P=0,A=0,z=0;for(let N=0;N<i.length;N++){const O=i[N],Y=X.normalize(s[N],X.create()),R=1-Y[0]*Y[0],q=-Y[0]*Y[1],Z=-Y[0]*Y[2],V=1-Y[1]*Y[1],ee=-Y[1]*Y[2],K=1-Y[2]*Y[2];a+=R,u+=q,l+=Z,_+=V,y+=ee,x+=K,P+=R*O[0]+q*O[1]+Z*O[2],A+=q*O[0]+V*O[1]+ee*O[2],z+=Z*O[0]+ee*O[1]+K*O[2]}const L=Mt.create(a,u,l,u,_,y,l,y,x);return go(L,X.create(P,A,z))}function wo(i,s={}){if(i.length===0)return null;const a=s.tiltDownDeg??8,u=s.radiusScale??1,l=s.alignFirst??!0,_=(s.direction??"ccw")==="ccw"?1:-1,y=i.map(pe=>X.clone(pe.position)),x=i.map(pe=>{const Ee=pe.rotation;return X.create(Ee[8],Ee[9],Ee[10])}),P=i.map(pe=>{const Ee=pe.rotation;return X.create(Ee[4],Ee[5],Ee[6])}),A=vo(P),z=X.normalize(X.scale(A,-1,X.create())),{centroid:L,normal:N,u:O,v:Y}=Sd(y,z),R=y.map(pe=>{const Ee=X.sub(pe,L,X.create());return[X.dot(Ee,O),X.dot(Ee,Y)]}),{center:q,radius:Z}=Ed(R),V=Z*u,ee=X.add(L,X.add(X.scale(O,q[0],X.create()),X.scale(Y,q[1],X.create()),X.create()),X.create()),K=kd(y,x),te=V*Math.tan(a*Math.PI/180),ue=X.sub(K,X.scale(N,te,X.create()),X.create());let de=0;if(l){const pe=X.sub(y[0],ee,X.create());de=Math.atan2(X.dot(pe,Y),X.dot(pe,O))/(2*Math.PI)%1,de<0&&(de+=1)}return console.log(`[orbit] fit ${i.length} train cams: radius=${V.toFixed(2)}, tilt=${a}°, normal=[${N[0].toFixed(2)}, ${N[1].toFixed(2)}, ${N[2].toFixed(2)}], startPhase=${de.toFixed(3)}`),{center:ee,radius:V,normal:N,u:O,v:Y,lookAt:ue,startPhase:de,direction:_}}function xo(i,s){const a=(i.startPhase+s*i.direction)*2*Math.PI,u=Math.cos(a),l=Math.sin(a),_=X.add(i.center,X.add(X.scale(i.u,i.radius*u,X.create()),X.scale(i.v,i.radius*l,X.create()),X.create()),X.create()),y=X.normalize(X.sub(i.lookAt,_,X.create())),x=X.cross(y,i.normal,X.create());X.length(x)<1e-6&&X.copy(i.u,x),X.normalize(x,x);const P=X.cross(y,x,X.create());X.normalize(P,P);const A=Pt.create();return A[0]=x[0],A[1]=P[0],A[2]=y[0],A[3]=0,A[4]=x[1],A[5]=P[1],A[6]=y[1],A[7]=0,A[8]=x[2],A[9]=P[2],A[10]=y[2],A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,{position:_,rotation:A,img_name:`orbit_${(s*1e3).toFixed(0)}`,id:0}}function Td(i,s={}){const a=wo(i,s);if(!a)return[];const u=s.numViews??120;return Array.from({length:u},(l,_)=>({...xo(a,_/u),img_name:`circle_${_.toString().padStart(4,"0")}`,id:_}))}const yo="halloumi.renderer";function Cd(){const i=new URLSearchParams(window.location.search).get("renderer"),s=i==="webgl"||i==="webgpu"?i:null;let a=null;try{const u=localStorage.getItem(yo);(u==="webgl"||u==="webgpu")&&(a=u)}catch{}return{forced:s,stored:a}}function di(i){try{localStorage.setItem(yo,i)}catch{}const s=new URLSearchParams(window.location.search);s.set("renderer",i),window.location.search=s.toString()}function ja(i){return i==="bilinear"||i==="bicubic"||i==="hermite"||i==="texture"||i==="bc5"||i==="p"||i==="spline"||i==="refetch"?i:"off"}function fn(i){const s=(i&32768)>>15,a=(i&31744)>>10,u=i&1023;return a===0?(s?-1:1)*Math.pow(2,-14)*(u/1024):a===31?u?NaN:s?-1/0:1/0:(s?-1:1)*Math.pow(2,a-15)*(1+u/1024)}function pi(i,s,a,u,l,_,y,x,P,A=.5){const z=P?P.length:y.length/8,L=[],N=[];for(let R=0;R<z;R++){const Z=(P?P[R]:R)*8,V=y[Z]-i,ee=y[Z+1]-s,K=y[Z+2]-a,te=V*u+ee*l+K*_;if(te<=0||!(x[Z+7]>>>16&1))continue;const ue=x[Z+4],de=fn(ue&65535),pe=fn(ue>>>16&65535),Ee=3*Math.max(de,pe),Te=V-te*u,Re=ee-te*l,Ge=K-te*_;if(Te*Te+Re*Re+Ge*Ge>Ee*Ee)continue;const ie=fn(x[Z+3]&65535);if(ie<1/255)continue;const F=x[Z+5],xe=x[Z+6];let be=fn(F&65535),me=fn(F>>>16&65535),fe=fn(xe&65535),oe=fn(xe>>>16&65535);const Pe=Math.hypot(be,me,fe,oe)||1;be/=Pe,me/=Pe,fe/=Pe,oe/=Pe;const Ie=1-2*(fe*fe+oe*oe),Ae=2*(me*fe+be*oe),De=2*(me*oe-be*fe),ye=2*(me*fe-be*oe),ve=1-2*(me*me+oe*oe),Se=2*(fe*oe+be*me),I=2*(me*oe+be*fe),Q=2*(fe*oe-be*me),T=1-2*(me*me+fe*fe),c=u*I+l*Q+_*T;if(Math.abs(c)<1e-6)continue;const p=(V*I+ee*Q+K*T)/c;if(!(p>0))continue;const h=p*u-V,w=p*l-ee,B=p*_-K,D=(h*Ie+w*Ae+B*De)/(de||1e-6),M=(h*ye+w*ve+B*Se)/(pe||1e-6),o=D*D+M*M;if(o>9)continue;const v=Math.min(.99,ie*Math.exp(-.5*o));v<1/255||(L.push(p),N.push(v))}if(L.length===0)return null;const O=L.map((R,q)=>q).sort((R,q)=>L[R]-L[q]);let Y=1;for(const R of O)if(Y*=1-N[R],Y<A)return L[R];return null}function cr(i,s,a){const u=(i-a.viewport[0]*.5)/a.focal[0],l=-((s-a.viewport[1]*.5)/a.focal[1]),_=a.rotation;let y=u*_[0]+l*_[1]+_[2],x=u*_[4]+l*_[5]+_[6],P=u*_[8]+l*_[9]+_[10];const A=Math.hypot(y,x,P)||1;return[y/A,x/A,P/A]}function hi(i,s,a,u,l,_){const[y,x,P]=cr(i,s,u),A=u.position[0],z=u.position[1],L=u.position[2],N=new Uint32Array(l.buffer,l.byteOffset,l.length);let O=pi(A,z,L,y,x,P,l,N,null,.5);return O===null&&(O=pi(A,z,L,y,x,P,l,N,null,.8)),O===null?null:[A+O*y,z+O*x,L+O*P]}function Po(i,s){const a=i.viewport[0],u=i.viewport[1],l=new Uint32Array(s.buffer,s.byteOffset,s.length),_=i.position[0],y=i.position[1],x=i.position[2],[P,A,z]=cr(a*.5,u*.5,i),L=.06*Math.max(a,u),N=(L+2)/i.focal[0],O=s.length/8,Y=[];for(let V=0;V<O;V++){const ee=V*8,K=s[ee]-_,te=s[ee+1]-y,ue=s[ee+2]-x,de=K*P+te*A+ue*z;if(de<=0)continue;const pe=l[ee+4],Ee=3*Math.max(fn(pe&65535),fn(pe>>>16&65535)),Te=K-de*P,Re=te-de*A,Ge=ue-de*z,ie=de*N+Ee;Te*Te+Re*Re+Ge*Ge<=ie*ie&&Y.push(V)}if(Y.length===0)return null;const R=Int32Array.from(Y),q=[],Z=5;for(let V=0;V<Z;V++)for(let ee=0;ee<Z;ee++){const K=a*.5+(ee-(Z-1)/2)/((Z-1)/2)*L,te=u*.5+(V-(Z-1)/2)/((Z-1)/2)*L,[ue,de,pe]=cr(K,te,i),Ee=pi(_,y,x,ue,de,pe,s,l,R,.5);Ee!==null&&q.push(Ee*(ue*P+de*A+pe*z))}return q.length<3?null:(q.sort((V,ee)=>V-ee),q[q.length>>1])}function Bd(i){return new Promise(s=>{const a=document.createElement("input");a.type="file",a.accept=i,a.style.display="none",a.onchange=()=>{var u;return s(((u=a.files)==null?void 0:u[0])??null)},document.body.appendChild(a),a.click(),setTimeout(()=>document.body.removeChild(a),1e3)})}function Ad(i,s,a){const u=document.getElementById("ui-panel-container"),l=document.getElementById("load-button"),_=document.getElementById("quick-links");l&&(l.onclick=async()=>{const A=await Bd(".ply,.bitymi");if(A)if(u&&(u.style.display="none"),A.name.toLowerCase().endsWith(".bitymi")){const z=await A.arrayBuffer(),{pcBuffer:L}=bi(z),N=new File([L],A.name.replace(/\.bitymi$/i,".ply"),{type:"application/octet-stream"}),O=await nr(N,i);s(O)}else{const z=await nr(A,i);s(z)}}),_&&(_.innerHTML="");const y=new URLSearchParams(window.location.search),x=y.get("bundle")??y.get("model_url"),P=y.get("camera_url");x&&(u&&(u.style.display="none"),a(x,P))}async function Md(i,s,a){const{bundle:u}=await hs(i,(y,x)=>a(`downloading B ... ${(y/1048576).toFixed(1)}${x?` / ${(x/1048576).toFixed(1)}`:""} MB`));if(!u)throw new Error("bundle_b must be a .bitymi bundle");a("parsing B ...");const l=await nr(new File([u.pcBuffer],"bundle_b.ply",{type:"application/octet-stream"}),s);let _=null;if(u.atlasBuffer){a("uploading B atlas ...");try{_=await ii(s,Yn(u.atlasBuffer),!0)}catch(y){console.warn("[A/B] B atlas failed:",y)}}return{pc:l,atlas:_}}function Jr(i){const s=new Uint32Array(i.surfel_data.buffer,i.surfel_data.byteOffset,i.num_points*8);for(let a=0;a<i.num_points;a++){const u=s[a*8+7];if(!(u>>>16&1)||(u>>>17&1)===1)return!0}return!1}async function Rd(i,s,a,u){const l=new lr(i,a),_=new bo(l);let y=!1;i.addEventListener("pointerdown",()=>{y=!0}),window.addEventListener("pointerup",()=>{y=!1});const x=typeof window<"u"&&window.parent!==window,P={pos:new Float32Array(3),rot:new Float32Array(16)};if(x){window.addEventListener("message",p=>{const h=p.data;if(!(!h||h.type!=="halloumi_sync_pose")&&!(!Array.isArray(h.position)||h.position.length!==3)&&!(!Array.isArray(h.rotation)||h.rotation.length!==16)){for(let w=0;w<3;w++)l.position[w]=h.position[w];for(let w=0;w<16;w++)l.rotation[w]=h.rotation[w];l.update_buffer(),_.resetToCamera();for(let w=0;w<3;w++)P.pos[w]=l.position[w];for(let w=0;w<16;w++)P.rot[w]=l.rotation[w]}});try{window.parent.postMessage({type:"halloumi_sync_ready"},"*")}catch{}}const A=()=>{if(!x)return;const p=l.position,h=l.rotation;let w=!1;for(let B=0;B<3;B++)if(Math.abs(p[B]-P.pos[B])>1e-6){w=!0;break}if(!w){for(let B=0;B<16;B++)if(Math.abs(h[B]-P.rot[B])>1e-6){w=!0;break}}if(w){for(let B=0;B<3;B++)P.pos[B]=p[B];for(let B=0;B<16;B++)P.rot[B]=h[B];try{window.parent.postMessage({type:"halloumi_camera_state",position:[p[0],p[1],p[2]],rotation:Array.from(h)},"*")}catch{}}},z="rgba8unorm";s.configure({device:a,format:z,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});let L=null,N=null,O=null,Y=[0,0,0,0];const R=()=>{l.on_update_canvas(),L!==null&&An(i.width,i.height,a,L.render_settings_buffer),N!==null&&N()};new ResizeObserver(()=>{const p=Math.max(.25,F.render_scale),h=Math.max(1,Math.ceil(p*i.clientWidth)),w=Math.max(1,Math.ceil(p*i.clientHeight));i.width===h&&i.height===w||(i.width=h,i.height=w,R())}).observe(i);let Z=0,V=0;const ee=()=>{(i.width!==Z||i.height!==V)&&(Z=i.width,V=i.height,R())},K=new URLSearchParams(window.location.search);let ue=K.get("animation")==="1";_.enabled=!ue;const de=K.get("camera_url"),pe=K.get("bfc"),Ee=pe==="1"||pe==="true",Te=K.get("bfc_cos"),Re=Te!==null?Number(Te):NaN,Ge=Number.isFinite(Re)?Re:2,ie=Math.max(1,window.devicePixelRatio||1),F={msaa:!1,bsp_order:new URLSearchParams(window.location.search).get("bsp_order")!=="0",gaussian_scaling:1,sh_bias:.5,animate:ue,animateMode:"presets",bg:{r:0,g:0,b:0,a:0},atlas_enabled:!1,mips:(new URLSearchParams(window.location.search).get("mip")??"1")!=="0",bfc:Ee,bfc_cos:Ge,legacy_renderer:!1,surfel_math:"conic",hyp_legacy:!1,mip2d:!1,mip2d_k:.3,fetch_by_id:!0,two_pass:!1,opaque_thresh:.5,overdraw:"off",overdraw_max:48,render_scale:1,upscale:["1","true"].includes(new URLSearchParams(location.search).get("upon")??"")?ja(new URLSearchParams(location.search).get("up")):"off",upscale_factor:(p=>p>0&&p<1?Math.max(1.05,Math.min(8,1/p)):2)(parseFloat(new URLSearchParams(location.search).get("rs")??"1")),upscale_auto:new URLSearchParams(location.search).get("rs")==="auto",clip_on:["x","y","z"].includes((new URLSearchParams(location.search).get("clip")??"").toLowerCase()),clip_t:parseFloat(new URLSearchParams(location.search).get("clip_t")??"0.5"),clip_eps:parseFloat(new URLSearchParams(location.search).get("clip_eps")??"0.01"),cap_on:!0,cap_mix:!0,rf_edge:new URLSearchParams(location.search).get("rf_edge")!=="0",adapt_heat:["1","true"].includes(new URLSearchParams(location.search).get("adapt_heat")??""),adapt_tau:(p=>p>0?p:1)(parseFloat(new URLSearchParams(location.search).get("adapt_tpp")??"1")),slope_mip:["1","true"].includes(new URLSearchParams(location.search).get("slope_mip")??"")},xe=new fo.Pane({title:"Config",expanded:!0}),be={stats:"— loading —"};xe.addMonitor(be,"stats",{label:"Stats",interval:200,multiline:!0,lineCount:2});let me=null;const fe=xe.addInput(F,"atlas_enabled",{label:"Texture"}).on("change",p=>me==null?void 0:me(p.value));let oe=null;const Pe=new URLSearchParams(location.search),Ie={x:0,y:1,z:2}[(Pe.get("clip")??"").toLowerCase()]??2,Ae=(Pe.get("clip_keep")??"lower")!=="upper";let De=[parseFloat(Pe.get("clip_min")??"NaN"),parseFloat(Pe.get("clip_max")??"NaN")];F.clip_on&&xe.addInput(F,"clip_t",{label:`Clip (${"xyz"[Ie]})`,min:0,max:1,step:.002}),F.clip_on&&xe.addInput(F,"clip_on",{label:"Clip on"});let ye=null;const ve=xe.addFolder({title:"⚙ Advanced options",expanded:!1});ve.hidden=!0;const Se=new Ja;xe.on("change",()=>Se.request()),window.__halloumiRedraw=()=>Se.request(),window.__halloumiGate=Se;const I={on:F.upscale!=="off"},Q=ve.addInput(I,"on",{label:"Upscaling (2×)"}).on("change",p=>oe==null?void 0:oe(p.value));ve.addInput(F,"animate",{label:"Animate"}).on("change",p=>{const h=ue;ue=p.value,_.enabled=!p.value,!h&&ue&&T.value&&T.value.onAnimateStart(),h&&!ue&&T.value&&T.value.onAnimateStop()}),ve.addInput(F,"animateMode",{label:"Anim path",options:{"Training views":"presets","Circle orbit":"circle"}});const T={value:null};Ad(a,p=>c(p,[],null),async(p,h)=>{let w=h??de,B,D=null;const M=p.toLowerCase();if(M.endsWith(".bitymi")||M.includes(".bitymi?")){fs("downloading bundle ...");try{const{bundle:d}=await hs(p,(C,E,$,U)=>{if(U==="cache"){At(`loading cached bundle ...
${(C/1048576).toFixed(1)}${E?` / ${(E/1048576).toFixed(1)}`:""} MB on this device`);return}const j=C/(1024*1024),se=E?E/(1024*1024):void 0,ae=$/(1024*1024),ne=E?Math.min(99,Math.floor(C/E*100)):void 0,ge=se?`total ${se.toFixed(1)} MB`:"total -- MB",Me=se&&ne!==void 0?`${j.toFixed(1)} MB downloaded (${ne}%)`:`${j.toFixed(1)} MB downloaded`,Be=`${ae.toFixed(2)} MB/s`;At(`downloading bundle ...
${ge}, ${Me}
${Be}`)});if(!d)throw new Error("Expected a .bitymi bundle");At("parsing PLY ...");const g=new File([d.pcBuffer],"bundle.ply",{type:"application/octet-stream"});if(B=await nr(g,a),!w&&d.camerasBuffer&&(w=URL.createObjectURL(new Blob([d.camerasBuffer],{type:"application/json"}))),d.atlasBuffer){const C=d.atlasBuffer.byteLength/1048576;At(`uploading atlas ...
${C.toFixed(1)} MB BC7`);try{const E=Yn(d.atlasBuffer);D=await ii(a,E,!0)}catch(E){console.warn("[atlas] failed to parse/upload atlas:",E)}}}catch(d){throw Qt(),d}}else B=await ku(p,a);let o=null,v="";const f=K.get("atlas2");if(f)try{const{bundle:d}=await hs(f,(g,C)=>{At(`downloading second atlas ...
${(g/1048576).toFixed(1)}${C?` / ${(C/1048576).toFixed(1)}`:""} MB`)});if(!(d!=null&&d.atlasBuffer))throw new Error("second bundle has no atlas chunk");At("uploading second atlas ..."),o=await ii(a,Yn(d.atlasBuffer),!0),o||(v="second atlas: format unsupported on this device")}catch(d){console.warn("[atlas2] failed:",d),v=`second atlas failed: ${d}`}const b=w?await ui(w):[];b.length>0&&l.set_preset(b[0]),c(B,b,D,o,v)});function c(p,h=[],w=null,B=null,D=""){const M=[(p.bbox.min[0]+p.bbox.max[0])/2,(p.bbox.min[1]+p.bbox.max[1])/2,(p.bbox.min[2]+p.bbox.max[2])/2];if(_.setBbox(p.bbox.min,p.bbox.max),!(isFinite(De[0])&&isFinite(De[1]))){const k=p.bbox.min[Ie],W=p.bbox.max[Ie];De=[k+.3*(W-k),k+.7*(W-k)]}F.clip_on&&console.log(`[clip] axis ${"xyz"[Ie]} keep ${Ae?"lower":"upper"} range ${De[0].toFixed(3)}..${De[1].toFixed(3)}`);{const k=Pe.get("cap");k&&F.clip_on&&(async()=>{try{const W=await li(k,(ce,re,he,le)=>{vt.slope=`cap: ${le==="cache"?"cached ":""}${(ce/1048576).toFixed(0)}${re?` / ${(re/1048576).toFixed(0)}`:""} MB`}),J=ou(W);ye=await _i.create(a,z,l.uniform_buffer,J),U.capPass=(ce,re,he)=>!ye||!F.clip_on?!1:(ye.draw(ce,re,he??void 0),ye.enabled),Pe.get("clip_min")===null&&(De=[J.meta.tauMin,J.meta.tauMax]),vt.slope=`cap: ${J.meta.N} levels ready`,ve.addInput(F,"cap_on",{label:"Cap (cross-section)"}).on("change",()=>Se.request()),ve.addInput(F,"cap_mix",{label:"Cap: blend levels"}).on("change",()=>Se.request()),ve.addInput(F,"clip_eps",{label:"Clip offset under cap",min:0,max:.1,step:.001}).on("change",()=>Se.request()),Se.request()}catch(W){console.warn("[cap] failed:",W),vt.slope=`cap failed: ${W}`}})()}.5*Math.sqrt((p.bbox.max[0]-p.bbox.min[0])**2+(p.bbox.max[1]-p.bbox.min[1])**2+(p.bbox.max[2]-p.bbox.min[2])**2);function o(k,W){const J=hi(k,W,i,l,p.surfel_data);J&&(_.setOrbitPivot(J),console.log(`[pick] orbit pivot → (${J[0].toFixed(3)}, ${J[1].toFixed(3)}, ${J[2].toFixed(3)})`))}function v(){const k=Po(l,p.surfel_data);if(k!==null&&k>.001){_.setOrbitDepth(k);return}const W=l.rotation,J=W[2],ce=W[6],re=W[10],he=(p.centroid[0]-l.position[0])*J+(p.centroid[1]-l.position[1])*ce+(p.centroid[2]-l.position[2])*re;he>.001&&_.setOrbitDepth(he)}if(h.length===0){const k=p.bbox.max[0]-p.bbox.min[0],W=p.bbox.max[1]-p.bbox.min[1],J=p.bbox.max[2]-p.bbox.min[2],re=.5*Math.sqrt(k*k+W*W+J*J)*.5;X.set(M[0]-re,M[1]-re,M[2]-re,l.position);const he=X.create(re,re,re);X.normalize(he,he);const le=X.create(0,1,0),_e=X.create();X.cross(le,he,_e),X.normalize(_e,_e);const Ce=X.create();X.cross(he,_e,Ce);const Le=Mt.create(_e[0],Ce[0],he[0],_e[1],Ce[1],he[1],_e[2],Ce[2],he[2]);Pt.fromMat3(Le,l.rotation),l.update_buffer()}_.setCenter(X.create(p.centroid[0],p.centroid[1],p.centroid[2]));const f=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),b="halloumi.fetch_by_id";let d=null;try{const k=localStorage.getItem(b);(k==="0"||k==="1")&&(d=k==="1")}catch{}const g=K.get("byid"),C={fetchById:g!==null?g==="1":d!==null?d:!f,octBound:K.get("oct")==="1"||K.get("oct")!=="0",acc16:K.get("acc16")==="1",f16:K.get("f16")==="1",packed:K.get("packed")==="1",lean:K.get("lean")==="1"||K.get("lean")!=="0",staticSortKeys:null},E=K.get("bsp");let $=null;E&&(C.staticSortKeys=new Float32Array(p.num_points),$=od(E).then(k=>{if(k.nSurfels!==p.num_points)throw new Error(`BSP has ${k.nSurfels} surfels, scene has ${p.num_points}`);return console.log(`[bsp] loaded ${E}: ${k.nNodes} nodes over ${k.nSurfels} surfels`),k}));let U=new or(p,a,z,l.uniform_buffer,u,w,C);const j=K.get("surfel_math");F.surfel_math=j==="raysplat"||j==="centred"?j:K.get("raysplat")==="1"?"raysplat":"conic",F.hyp_legacy=K.get("hyp_legacy")==="1",F.mip2d=K.get("mip2d")==="1";{const k=parseFloat(K.get("mip2d_k")??"");Number.isFinite(k)&&k>0&&(F.mip2d_k=k)}Ca(F.mip2d,F.mip2d_k,a,U.render_settings_buffer),ds({hypLegacy:F.hyp_legacy,raysplat:F.surfel_math==="raysplat",centred:F.surfel_math==="centred"},a,U.render_settings_buffer),F.legacy_renderer=K.get("legacy")==="1",F.legacy_renderer&&U.setLegacyRenderer(!0),F.two_pass=K.get("twopass")==="1"&&!jn;{const k=parseFloat(K.get("opaque_t")??"");Number.isFinite(k)&&(F.opaque_thresh=Math.min(.99,Math.max(.01,k)))}U.setOpaqueThresh(F.opaque_thresh),F.two_pass&&U.setTwoPass(!0);{const k=K.get("overdraw");(k==="shaded"||k==="raster"||k==="1")&&(F.overdraw=k==="raster"?"raster":"shaded");const W=parseInt(K.get("overdraw_max")??"",10);Number.isFinite(W)&&W>0&&(F.overdraw_max=W)}U.setOverdrawMax(F.overdraw_max),F.overdraw!=="off"&&U.setOverdrawMode(F.overdraw==="raster"?2:1),F.fetch_by_id=C.fetchById,console.log(`[render_2dgs] fetch_by_id=${C.fetchById} (source: ${g!==null?"?byid":d!==null?"remembered":`handheld=${f}`})`),L=U,An(i.width,i.height,a,U.render_settings_buffer),F.atlas_enabled=w!==null;{const k=p.surfel_data,W=k.length/8;let J=0,ce=0,re=0;for(let le=0;le<W;le++)J+=k[le*8],ce+=k[le*8+1],re+=k[le*8+2];const he=W>0?[J/W,ce/W,re/W]:[0,0,0];U.setBfcParams(F.bfc_cos,he),ds({bfc:F.bfc},a,U.render_settings_buffer),console.log(`[bfc] flag=${F.bfc} cos=${F.bfc_cos} centroid=(${he[0].toFixed(3)}, ${he[1].toFixed(3)}, ${he[2].toFixed(3)})`)}let se=!1;const ae=(()=>{if(w!==null)return`${w.meta.format===2?"BC7":w.meta.format===3?"ASTC 4×4":w.meta.format===7?"BC7 codebook gather (typeD)":`format=${w.meta.format}`} ${w.meta.width}×${w.meta.height}, ${w.meta.n_layers} layers`;const k=a.features.has("texture-compression-bc"),W=a.features.has("texture-compression-astc");return`no atlas in bundle (GPU supports: ${(k?["BC7"]:[]).concat(W?["ASTC"]:[]).join("+")||"none"})`})();console.log("[atlas]",ae),ka(p.sh_bias,a,U.render_settings_buffer),Ea(F.gaussian_scaling,a,U.render_settings_buffer),F.sh_bias=p.sh_bias;let ne=p.num_points.toLocaleString();be.stats=`${ne} surfels · -- fps`;const ge=.4,Me=3,Be=.3;let ke=null,$e=0,Ve=0;const rt=mt.create(),ut=Mt.create();let Ne=h.length>0?0:-1;const it={view:h.length>0?`${Ne+1} / ${h.length}: ${h[Ne].img_name??Ne}`:"— no presets —"},Qe=document.createElement("span");function et(k){const W=Mt.create(k[0],k[1],k[2],k[4],k[5],k[6],k[8],k[9],k[10]);return mt.fromMat(W)}function tt(k,W){ke={fromPos:X.clone(l.position),toPos:X.clone(k.position),fromQuat:mt.normalize(et(l.rotation)),toQuat:mt.normalize(et(k.rotation)),target:k,t:0,duration:Math.max(.01,W)}}const Xe=(k,W=!0)=>{if(h.length===0)return;Ne=(k%h.length+h.length)%h.length;const J=h[Ne];W?tt(J,ge):(l.set_preset(J),_.resetToCamera(),v()),it.view=`${Ne+1} / ${h.length}: ${h[Ne].img_name??Ne}`,Qe.textContent=it.view};if(h.length>0){const k=ve.addSeparator(),W=document.createElement("div");W.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const J=(re,he,le)=>{const _e=document.createElement("button");return _e.className="tp-btnv_b",_e.textContent=re,_e.title=he,_e.style.cssText="flex:0 0 34px;height:24px;padding:0;",_e.addEventListener("click",le),_e};Qe.textContent=it.view,Qe.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",W.appendChild(J("◀","previous view (←)",()=>Xe(Ne-1))),W.appendChild(Qe),W.appendChild(J("▶","next view (→)",()=>Xe(Ne+1))),(k.element.parentElement??ve.element.querySelector(".tp-fldv_c")??ve.element).insertBefore(W,k.element),k.dispose()}const pt=h.length>0?wo(h,{tiltDownDeg:15,alignFirst:!0}):null,ht=pt?Td(h,{numViews:120,tiltDownDeg:15,alignFirst:!0}):[];let nt=0;const at=12;T.value={onAnimateStart:()=>{nt=0},onAnimateStop:()=>{_.resetToCamera(),v()}};const ct=k=>{const W=Math.max(.25,k),J=Math.max(1,Math.ceil(W*i.clientWidth)),ce=Math.max(1,Math.ceil(W*i.clientHeight));(i.width!==J||i.height!==ce)&&(i.width=J,i.height=ce,R())},dt=xe.addInput(F,"render_scale",{label:"Render scale",min:.25,max:ie,step:.25}).on("change",k=>ct(k.value)),Ze=new URLSearchParams(location.search),je={};for(const k of["bc5","p"]){const W=Ze.get(`slope_${k}`),J=Ze.get(`slope_${k}_4x`);W&&(je[`${k}2`]=W),(J||W)&&(je[`${k}4`]=J??W)}const Tt={},vt={slope:""},Rt=(k,W)=>{const J=`${k}${W>=2.83?4:2}`;if(je[J]===je[`${k}2`]&&J!==`${k}2`)return Rt(k,2);const ce=Tt[J],re=`${k.toUpperCase()} ${W>=2.83?4:2}x`;return ce&&ce!=="loading"&&ce!=="failed"?ce:(ce===void 0&&je[J]&&(Tt[J]="loading",vt.slope=`${re}: downloading…`,(async()=>{try{const he=await li(je[J],(_e,Ce,Le,He)=>{vt.slope=`${re}: ${He==="cache"?"cached ":""}${(_e/1048576).toFixed(0)}${Ce?` / ${(Ce/1048576).toFixed(0)}`:""} MB`}),le=await Eu(a,Yn(he),w?w.meta:null);if(!le)throw new Error("unsupported on this device or layout mismatch (see console)");Tt[J]=le,vt.slope=`${re}: ready (${le.mb.toFixed(0)} MB on GPU)`,Se.request()}catch(he){console.warn(`[slope ${re}]`,he),Tt[J]="failed",vt.slope=`${re}: failed — ${he}`}})()),null)};let xt=null;const St=parseFloat(Ze.get("rf_thr")??"0.02"),$t=parseFloat(Ze.get("rf_gain")??"1"),Ft=Ze.get("spline");let jt=null;Ft&&je.bc52&&fetch(Ft).then(k=>k.json()).then(k=>{jt={K:k.K,R:k.R,T:k.T,w:Float32Array.from(k.w)},console.log("[spline] kernel",k.K,"T",k.T,k.tag??"")}).catch(k=>console.warn("[spline] kernel load failed",k));const Dt={off:"off",bilinear:"bilinear",bicubic:"bicubic",hermite:"hermite","texture-aware (green)":"texture"};je.bc52&&(Dt["texture BC5 (finetuned)"]="bc5"),je.p2&&(Dt["texture P (finetuned)"]="p"),je.bc52&&Ft&&(Dt["texture BC5 + learned spline kernel"]="spline"),Dt["texture re-fetch, top-4 surfels (no training)"]="refetch";const tn=ve.addInput(F,"upscale",{label:"Upscale",options:Dt}).on("change",()=>{F.upscale==="off"&&(R(),_n()),I.on=F.upscale!=="off",Q.refresh()});ve.addInput(F,"rf_edge",{label:"Re-fetch: edges"});const Ut=ja(Ze.get("up")),Je=Ut!=="off"&&!((Ut==="bc5"||Ut==="p")&&!je[`${Ut}2`])&&!(Ut==="spline"&&!(je.bc52&&Ft))?Ut:je.bc52?"bc5":"hermite";Q.label=Je==="bc5"||Je==="p"||Je==="spline"?"Upscaling (texture-aware 2×)":`Upscaling (${Je==="hermite"?"Hermite":Je} 2×)`;const _n=()=>{F.render_scale!==1&&(F.render_scale=1,dt.refresh(),ct(1))};oe=k=>{k?(F.upscale=Je,F.upscale_factor=2):(F.upscale="off",R()),_n(),tn.refresh()},(je.bc52||je.p2)&&ve.addMonitor(vt,"slope",{label:"Slope data",interval:300}),ve.addInput(F,"upscale_factor",{label:"Upscale factor (render at 1/f)",min:1.05,max:4,step:.05});const Ot=new vd(p.surfel_data,p.num_points,w?w.meta:null,{tau:F.adapt_tau,pct:parseFloat(Ze.get("adapt_pct")??"0.5"),levels:(Ze.get("adapt_levels")??"1,2,4").split(",").map(Number).filter(k=>k>=1),continuous:!["0","false"].includes(Ze.get("adapt_cont")??""),rateUp:parseFloat(Ze.get("adapt_rate")??"0.03"),rateDown:parseFloat(Ze.get("adapt_rate_down")??"0.1"),minF:parseFloat(Ze.get("adapt_min")??"1.3"),upHold:parseInt(Ze.get("adapt_hold")??"12"),minPx:parseFloat(Ze.get("adapt_px")??"6")});F.upscale_auto&&F.upscale==="off"&&["1","true"].includes(Ze.get("upon")??"")&&(F.upscale=Je);const nn={adapt:Ot.texelMode?"texel mode":"no atlas rects: surfel-width mode"};ve.addInput(F,"upscale_auto",{label:"Adaptive factor"}).on("change",()=>Ot.reset()),ve.addInput(Ot,"continuous",{label:"Adaptive: continuous factor"}).on("change",()=>Ot.reset()),ve.addMonitor(nn,"adapt",{label:"Adaptive",interval:250}),ve.addInput(F,"slope_mip",{label:"Slope mip-matched"}).on("change",()=>Ma(F.slope_mip,a,U.render_settings_buffer)),F.slope_mip&&Ma(!0,a,U.render_settings_buffer);const mn=()=>iu(F.adapt_heat?Ot.tau:0,a,U.render_settings_buffer);ve.addInput(F,"adapt_heat",{label:"Adaptive heatmap (red 1x · yellow 2x · green 4x)"}).on("change",mn),ve.addInput(F,"adapt_tau",{label:"Adaptive bias (texels/px)",min:.25,max:4,step:.05}).on("change",k=>{Ot.tau=k.value,Ot.reset(),mn()}),F.adapt_heat&&mn(),ve.addInput(F,"bfc",{label:F.bfc_cos<1.5?`Backface cull (cos ${F.bfc_cos})`:"Backface cull"}).on("change",()=>{ds({bfc:F.bfc},a,U.render_settings_buffer)});const Ht={res:""},bn=()=>{const k=i.width*i.height/1e6;Ht.res=`${i.width}×${i.height}  (${k.toFixed(2)} MP)
CSS ${i.clientWidth}×${i.clientHeight} · DPR ${ie.toFixed(2)} · native ${Math.round(i.clientWidth*ie)}×${Math.round(i.clientHeight*ie)}`};bn(),N=bn,ve.addMonitor(Ht,"res",{label:"Resolution",interval:250,multiline:!0,lineCount:2}),xe.addInput(F,"gaussian_scaling",{label:"Surfel scale",min:0,max:1}).on("change",k=>Ea(k.value,a,U.render_settings_buffer)),xe.addInput(F,"sh_bias",{label:"SH bias",min:0,max:2,step:.01}).on("change",k=>ka(k.value,a,U.render_settings_buffer)),ve.addInput(F,"bg",{label:"Background",color:{type:"float",alpha:!0}}).on("change",k=>{U.bgColor=[k.value.r,k.value.g,k.value.b,k.value.a]});const sn=k=>k===null?"":k.meta.format===3||k.meta.format===8||k.meta.format===10?" (ASTC)":" (BC7)";let rn=sn(w);const Vt=document.createElement("button");Vt.style.cssText="position:fixed;top:8px;right:276px;z-index:1000;height:28px;padding:0 10px;border-radius:6px;border:1px solid #444;background:#1c1c1ccc;color:#eee;font:600 12px/1 system-ui,sans-serif;cursor:pointer;backdrop-filter:blur(4px);";const Xn=()=>{Vt.textContent=`Texture${rn}: ${F.atlas_enabled?"ON":"OFF"}`,Vt.style.borderColor=F.atlas_enabled?"#f0b060":"#444",Vt.style.color=F.atlas_enabled?"#f0b060":"#bbb"},vn=()=>{F.atlas_enabled=!F.atlas_enabled,U.setAtlasEnabled(F.atlas_enabled),fe.refresh(),Xn()};fe.label=`Texture${rn}`,me=k=>{U.setAtlasEnabled(k),Xn(),Se.request()},fe.refresh(),Vt.title="toggle the baked texture (T)",Vt.addEventListener("click",vn),w&&document.body.appendChild(Vt),Xn();let an=K.get("lp")!=="0";const on=document.createElement("button");on.style.cssText=Vt.style.cssText.replace("top:8px","top:76px"),on.title="toggle the screen-space low-pass fallback of the kernel (diagnostic)";const _s=()=>{on.textContent=`Low-pass: ${an?"ON":"OFF"}`,on.style.borderColor=an?"#f0b060":"#444",on.style.color=an?"#f0b060":"#bbb"};on.addEventListener("click",()=>{an=!an,U.setLowPass(an),_s(),Se.request()}),U.setLowPass(an),K.get("lpbtn")==="1"&&document.body.appendChild(on),_s();const Zn=K.get("bundle_b");let Jn=()=>{};if({}.VITE_MIP2D_UI==="1"&&(Jr(p)||Zn)){const k=document.createElement("button");k.style.cssText=Vt.style.cssText.replace("top:8px","top:42px"),k.title="Mip-Splatting 2D Mip filter on the 3D kernels (normalises the screen-space dilation; helps when zoomed out)";let W=null;const J=()=>{k.textContent=`Mip 2D filter: ${F.mip2d?"ON":"OFF"}`,k.style.borderColor=F.mip2d?"#f0b060":"#444",k.style.color=F.mip2d?"#f0b060":"#bbb";try{const re=new URL(window.location.href);F.mip2d?re.searchParams.set("mip2d","1"):re.searchParams.delete("mip2d"),history.replaceState(history.state,"",re.toString())}catch{}},ce=()=>{Ca(F.mip2d,F.mip2d_k,a,U.render_settings_buffer),W==null||W.refresh(),J()};k.addEventListener("click",()=>{F.mip2d=!F.mip2d,ce()}),W=ve.addInput(F,"mip2d",{label:"Mip 2D filter"}).on("change",()=>ce()),document.body.appendChild(k),J(),Jn=()=>{const re=Jr(p);k.style.display=re?"":"none",W&&(W.hidden=!re)},Jn(),window.__halloumiMip2D={get on(){return F.mip2d},toggle:()=>k.click()}}let gn=()=>{};if(Zn){const k=K.get("label_a")??"A",W=K.get("label_b")??"B",J={a:{pc:p,atlas:w,renderer:U},b:null};let ce="a",re=null;const he=document.createElement("button");he.style.cssText=Vt.style.cssText.replace("top:8px","top:76px"),he.title=`switch between the two bakes of this scene (B key): ${k} / ${W}`;const le=(Ue="")=>{he.textContent=Ue||`Scene: ${ce==="a"?k:W}  ⇄`,he.style.borderColor=ce==="b"?"#60b0f0":"#f0b060",he.style.color=ce==="b"?"#60b0f0":"#f0b060";try{const We=new URL(window.location.href);ce==="b"?We.searchParams.set("side","b"):We.searchParams.delete("side"),history.replaceState(history.state,"",We.toString())}catch{}},_e=()=>J.b?Promise.resolve(J.b):(re||(re=Md(Zn,a,Ue=>{ce==="a"&&le(Ue)}).then(Ue=>(J.b={pc:Ue.pc,atlas:Ue.atlas,renderer:null},le(),J.b))),re),Ce=Ue=>{const We=Wt.slice(0);Ue.renderer=new or(Ue.pc,a,z,l.uniform_buffer,u,Ue.atlas,Ue===J.a?C:{...C,staticSortKeys:null}),new Uint8Array(Wt).set(new Uint8Array(We))},Le=Ue=>{const We=J[Ue];We.renderer||Ce(We);const ft=U,qe=We.renderer;qe.bgColor=[...ft.bgColor],qe.setAtlasEnabled(F.atlas_enabled&&We.atlas!==null),qe.setLegacyRenderer(F.legacy_renderer),qe.setOpaqueThresh(F.opaque_thresh),qe.setTwoPass(F.two_pass),qe.setOverdrawMax(F.overdraw_max),qe.setOverdrawMode(F.overdraw==="off"?0:F.overdraw==="raster"?2:1),qe.setMsaa(F.msaa),qe.setFetchById(F.fetch_by_id);{const gt=We.pc.surfel_data,Fe=gt.length/8;let yt=0,Xt=0,ss=0;for(let Zt=0;Zt<Fe;Zt++)yt+=gt[Zt*8],Xt+=gt[Zt*8+1],ss+=gt[Zt*8+2];qe.setBfcParams(F.bfc_cos,Fe>0?[yt/Fe,Xt/Fe,ss/Fe]:[0,0,0])}nu(We.pc.feature_mode,void 0,void 0,!1),tu(We.pc.K,void 0,void 0,!1),An(i.width,i.height,void 0,void 0,!1),fr(a,qe.render_settings_buffer),U=qe,L=qe,p=We.pc,w=We.atlas,ne=p.num_points.toLocaleString(),ce=Ue,Jn(),le(),console.log(`[A/B] active = ${Ue} (${Ue==="a"?k:W}): ${p.num_points} surfels, feature_mode ${p.feature_mode}, EWA rows ${Jr(p)}`)};gn=()=>{if(ce==="a"){if(J.b){Le("b");return}fs(`loading ${W} ...`),_e().then(()=>{Le("b"),Qt()}).catch(Ue=>{Qt(),console.error("[A/B] B failed:",Ue),le(`B failed: ${(Ue==null?void 0:Ue.message)??Ue}`)})}else Le("a")},he.addEventListener("click",()=>gn()),document.body.appendChild(he),le(),K.get("side")==="b"?gn():f||setTimeout(()=>{_e().then(Ue=>{Ue.renderer||Ce(Ue)}).catch(Ue=>console.warn("[A/B] preload failed:",Ue))},1500),window.__halloumiAB={get side(){return ce},toggle:()=>gn(),get bReady(){var Ue;return!!((Ue=J.b)!=null&&Ue.renderer)}}}if(w&&(B||D))if(B){const k={};k[`A${sn(w)} · bundle`]="A",k[`B${sn(B)} · atlas2`]="B";const W={atlas:"A"};ve.addInput(W,"atlas",{label:"Atlas source",options:k}).on("change",J=>{const ce=J.value==="B"?B:w;U.setAtlas(ce),rn=sn(ce),fe.label=`Texture${rn}`,Xn(),console.log(`[atlas2] now sampling ${J.value}${rn}`)})}else{const k={note:D};ve.addMonitor(k,"note",{label:"Atlas B",multiline:!0,lineCount:2})}const mr=w!==null&&(w.meta.probe_mode|0)>0;if(U.hasMips&&mr)U.setMipMode(F.mips),ve.addInput(F,"mips",{label:"Mips (trilinear)"}).on("change",k=>U.setMipMode(k.value));else if(w!==null&&w.meta.format!==4294967295&&typeof U.setMipMode=="function"){const k=K.get("mipbias"),W=U.hasMips,J={mode:k==="aniso"||K.get("aniso")==="1"?"aniso":W&&k==="tri"?"tri":W&&(k==="0"||k==="1"||k==="2")?k:"off"},ce=he=>{he==="off"?U.setMipMode(0):he==="aniso"?U.setMipMode(2):he==="tri"?U.setMipMode(3):(U.setMipLodBias(Number(he)),U.setMipMode(1)),console.log(`[mips] ${he==="off"?"off (level 0 only)":he==="aniso"?"anisotropic 16x (textureSampleGrad)":he==="tri"?"textbook trilinear (per-pixel level, textureSampleLevel)":`on, bias ${he}`}`)};ce(J.mode),W&&Object.assign({"off (level 0)":"off","anisotropic 16x":"aniso"},{"trilinear (textbook)":"tri","bias 0 (full)":"0","bias 1":"1","bias 2":"2"});{const he={on:J.mode!=="off"};xe.addInput(he,"on",{label:"Mipmaps"}).on("change",le=>ce(le.value?"aniso":"off"))}}const Ct=ve.addFolder({title:"🔬 Surfel math (A/B)",expanded:!0});$&&$.then(k=>{const W=U,J=new Float32Array(k.nSurfels),ce={cpu:"--"};let re=null;W.preFrame=()=>{U===W&&(F.bsp_order?(re!==!0&&k.invalidate(),k.computeKeys(l.position)&&(W.writeSortKeys(k.keys),ce.cpu=`${k.lastMs.toFixed(2)} ms / ${k.nNodes} nodes`)):re!==!1&&W.writeSortKeys(J),re=F.bsp_order)},Ct.addInput(F,"bsp_order",{label:"BSP order (vs depth sort)"}),Ct.addMonitor(ce,"cpu",{label:"BSP traversal",interval:500})}).catch(k=>console.error("[bsp] disabled:",k)),Ct.addInput(F,"surfel_math",{label:"Surfel math",options:{"Conic (default)":"conic","Ray-splat":"raysplat",Centred:"centred"}}).on("change",k=>ds({raysplat:k.value==="raysplat",centred:k.value==="centred"},a,U.render_settings_buffer));const Qn=globalThis.__gpuAdapterInfo??{},zs={s:`${Qn.vendor??"?"} / ${Qn.architecture??"?"}
${Qn.device||Qn.description||"?"}`};Ct.addMonitor(zs,"s",{label:"GPU",multiline:!0,lineCount:2}),Ct.addInput(F,"hyp_legacy",{label:"Hyp-rect legacy"}).on("change",k=>ds({hypLegacy:k.value},a,U.render_settings_buffer)),Ct.addInput(F,"two_pass",{label:"Two-pass (layer)"}).on("change",k=>U.setTwoPass(k.value)),Ct.addInput(F,"opaque_thresh",{label:"Layer α >",min:.05,max:.99,step:.01}).on("change",k=>U.setOpaqueThresh(k.value)),Ct.addInput(F,"overdraw",{label:"Overdraw view",options:{Off:"off","Shaded fragments":"shaded","Rasterized fragments":"raster"}}).on("change",k=>U.setOverdrawMode(k.value==="shaded"?1:k.value==="raster"?2:0)),Ct.addInput(F,"overdraw_max",{label:"Overdraw scale",min:4,max:256,step:1}).on("change",k=>U.setOverdrawMax(k.value));const es={s:"—"};Ct.addMonitor(es,"s",{label:"Overdraw",multiline:!0,lineCount:2}),setInterval(()=>{if(U.overdrawModeValue===0){es.s="—";return}U.readOverdrawStats().then(k=>{k&&(es.s=`mean ${k.mean.toFixed(1)} frag/px · ${k.meanCovered.toFixed(1)} on covered
max ${k.max} · covered ${(k.coveredFrac*100).toFixed(0)} % of pixels`)}).catch(k=>console.warn("[overdraw] readback failed:",k))},500),ve.addInput(F,"legacy_renderer",{label:"Legacy renderer"}).on("change",k=>U.setLegacyRenderer(k.value)),ve.addInput(F,"fetch_by_id",{label:"Fetch-by-id (frag)"}).on("change",k=>{U.setFetchById(k.value);try{localStorage.setItem("halloumi.fetch_by_id",k.value?"1":"0")}catch{}}),ve.addButton({title:"🔁 Switch to WebGL2 renderer"}).on("click",()=>di("webgl")),F.msaa=K.get("msaa")==="1"&&!jn,F.msaa&&U.setMsaa(!0),ve.addInput(F,"msaa",{label:"MSAA 4×"}).on("change",k=>U.setMsaa(k.value));const ts={aspect:"canvas"},Mn=ve.addFolder({title:"📸 Screenshot",expanded:!1});Mn.addInput(ts,"aspect",{label:"Aspect",options:{Canvas:"canvas","16:9":"16:9","3:2":"3:2","4:3":"4:3","1:1":"1:1","9:16":"9:16","21:9":"21:9"}});const wn={s:"pick a size to capture"};Mn.addMonitor(wn,"s",{label:"Status",interval:250,multiline:!0,lineCount:2});const br=[["SD",854],["HD",1280],["FHD",1920],["QHD",2560],["4K",3840],["8K",7680]];let xn=null;function vr(k){let W;if(ts.aspect==="canvas")W=i.width/i.height;else{const[le,_e]=ts.aspect.split(":").map(Number);W=le/_e}const J=a.limits.maxTextureDimension2D;let ce,re;if(k==="canvas"&&ts.aspect==="canvas")ce=i.width,re=i.height;else{const le=k==="canvas"?Math.max(i.width,i.height):k;W>=1?(ce=le,re=Math.round(le/W)):(re=le,ce=Math.round(le*W))}const he=Math.min(1,J/Math.max(ce,re));return ce=Math.max(2,Math.round(ce*he)&-2),re=Math.max(2,Math.round(re*he)&-2),[ce,re]}function Is(k,W){const J=URL.createObjectURL(k),ce=document.createElement("a");ce.href=J,ce.download=W,document.body.appendChild(ce),ce.click(),ce.remove(),setTimeout(()=>URL.revokeObjectURL(J),1e4)}async function gr(k,W){var le;const J=(k.size/1048576).toFixed(1),ce=window;if(typeof ce.showSaveFilePicker=="function")try{const _e=await ce.showSaveFilePicker({suggestedName:W,types:[{description:"PNG image",accept:{"image/png":[".png"]}}]}),Ce=await _e.createWritable();return await Ce.write(k),await Ce.close(),`saved ${_e.name??W} (${J} MB) where you chose`}catch(_e){if((_e==null?void 0:_e.name)==="AbortError")return"save cancelled — use ⬇ Download last"}const re=new File([k],W,{type:"image/png"}),he=navigator;if(he.share&&((le=he.canShare)!=null&&le.call(he,{files:[re]})))try{return await he.share({files:[re],title:W}),`shared ${W} (${J} MB) via share sheet`}catch(_e){if((_e==null?void 0:_e.name)==="AbortError")return"share cancelled — use ⬇ Download last"}return Is(k,W),`downloaded ${W} (${J} MB) to your browser's Downloads folder`}async function Fs(k){if(se)return;const[W,J]=vr(k);wn.s=`rendering ${W}×${J}…`;const ce=i.width,re=i.height;l.setRenderSize(W,J),An(W,J,a,U.render_settings_buffer);const he=a.createTexture({size:[W,J,1],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),le=Math.ceil(W*4/256)*256,_e=a.createBuffer({size:le*J,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Ce=a.createCommandEncoder({label:"screenshot"});U.frame(Ce,he.createView(),!1),Ce.copyTextureToBuffer({texture:he},{buffer:_e,bytesPerRow:le,rowsPerImage:J},[W,J,1]),a.queue.submit([Ce.finish()]),l.clearRenderSize(),An(ce,re,a,U.render_settings_buffer);try{await _e.mapAsync(GPUMapMode.READ);const Le=new Uint8Array(_e.getMappedRange()),He=new Uint8ClampedArray(W*J*4);for(let Fe=0;Fe<J;Fe++)He.set(Le.subarray(Fe*le,Fe*le+W*4),Fe*W*4);for(let Fe=3;Fe<He.length;Fe+=4)He[Fe]=255;_e.unmap();const Ue=document.createElement("canvas");Ue.width=W,Ue.height=J,Ue.getContext("2d").putImageData(new ImageData(He,W,J),0,0);const We=await new Promise((Fe,yt)=>Ue.toBlob(Xt=>Xt?Fe(Xt):yt(new Error("toBlob failed")),"image/png")),ft=(new URLSearchParams(window.location.search).get("bundle")??"halloumi").split("/").pop().replace(/\.(bitymi|ply)$/i,""),qe=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),gt=`${ft}_${W}x${J}_${qe}.png`;xn={blob:We,name:gt},wn.s=await gr(We,gt)}catch(Le){console.error("[screenshot]",Le),wn.s=`failed: ${Le}`}finally{_e.destroy(),he.destroy()}}{const k=document.createElement("div");k.style.cssText="display:flex;gap:4px;padding:4px 6px;flex-wrap:wrap;";const W=(ce,re,he)=>{const le=document.createElement("button");le.className="tp-btnv_b",le.textContent=ce,le.title=re,le.style.cssText="flex:1 1 auto;min-width:44px;height:26px;padding:0 6px;",le.addEventListener("click",he),k.appendChild(le)};W("Canvas","current canvas size",()=>{Fs("canvas")});for(const[ce,re]of br)W(ce,`${re} px long edge`,()=>{Fs(re)});(Mn.element.querySelector(".tp-fldv_c")??Mn.element).appendChild(k)}Mn.addButton({title:"⬇ Download last"}).on("click",()=>{if(!xn){wn.s="nothing captured yet";return}Is(xn.blob,xn.name),wn.s=`downloaded ${xn.name} to your browser's Downloads folder`}),ve.addButton({title:"🎯 Reset camera"}).on("click",()=>{if(h.length>0)l.set_preset(h[0]);else{const k=p.bbox.max[0]-p.bbox.min[0],W=p.bbox.max[1]-p.bbox.min[1],J=p.bbox.max[2]-p.bbox.min[2],re=.5*Math.sqrt(k*k+W*W+J*J)*.5;X.set(M[0]-re,M[1]-re,M[2]-re,l.position);const he=X.create(re,re,re);X.normalize(he,he);const le=X.create();X.cross(X.create(0,1,0),he,le),X.normalize(le,le);const _e=X.create();X.cross(he,le,_e);const Ce=Mt.create(le[0],_e[0],he[0],le[1],_e[1],he[1],le[2],_e[2],he[2]);Pt.fromMat3(Ce,l.rotation),l.update_buffer()}_.resetToCamera(),v()});const Yt={result:"— click Benchmark —"},Lt=xe.addMonitor(Yt,"result",{label:"Bench",interval:500,multiline:!0,lineCount:4});Lt.hidden=!0;const ln={bicycle:{w:1237,h:822,fovY:2*Math.atan(3286/(2*4627.3))},flowers:{w:1256,h:828,fovY:2*Math.atan(3312/(2*4285.5))},garden:{w:1297,h:840,fovY:2*Math.atan(3361/(2*3852.4))},stump:{w:1245,h:825,fovY:2*Math.atan(3300/(2*4528.1))},treehill:{w:1267,h:832,fovY:2*Math.atan(3326/(2*4205.6))},bonsai:{w:1559,h:1039,fovY:2*Math.atan(2078/(2*3222.7))},counter:{w:1558,h:1038,fovY:2*Math.atan(2076/(2*3192.7))},kitchen:{w:1558,h:1039,fovY:2*Math.atan(2078/(2*3240.8))},room:{w:1557,h:1038,fovY:2*Math.atan(2075/(2*3174))},truck:{w:979,h:546,fovY:2*Math.atan(1091/(2*1156.28))},drjohnson:{w:1332,h:876,fovY:2*Math.atan(876/(2*1034.97))}};function Rn(){const W=((new URLSearchParams(window.location.search).get("bundle")??"").split("/").pop()??"").toLowerCase();for(const J of Object.keys(ln))if(W.startsWith(J))return J;return null}const cn=document.createElement("div");cn.id="bench-overlay",cn.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,0,0,0.9)","color:#fff","padding:24px 32px","border-radius:8px","font-family:monospace","font-size:14px","min-width:340px","text-align:left","box-shadow:0 4px 24px rgba(0,0,0,0.6)","display:none","z-index:9999","pointer-events:none"].join(";"),document.body.appendChild(cn);function Dn(k,W,J){const ce=Math.floor(W/Math.max(1,J)*100),re=32,he=Math.floor(W/Math.max(1,J)*re),le="█".repeat(he)+"░".repeat(re-he);cn.innerHTML=`<div style="margin-bottom:10px;font-weight:bold">📊 ${k}</div><div>[${le}] ${ce}%</div><div style="margin-top:6px;font-size:11px;opacity:0.7">${W} / ${J} frames · offscreen · pipelined · no vsync</div>`,cn.style.display="block"}function ms(){cn.style.display="none"}async function wr(k=10,W=200){if(se)return;if(si){Yt.result="⚠ GPU device lost — reload before benchmarking",Lt.hidden=!1;return}if(h.length===0){Yt.result="no cameras to benchmark";return}se=!0;const J=ue,ce=F.animate,re=new Float32Array(l.position),he=new Float32Array(l.rotation);ue=!1,F.animate=!1,xe.refresh(),ke=null,_.enabled=!1;const le=Rn(),_e=le?ln[le]:null,Ce=(_e==null?void 0:_e.w)??i.width,Le=(_e==null?void 0:_e.h)??i.height,He=(_e==null?void 0:_e.fovY)??l.getFov(),Ue=le?`${le} · ${le==="truck"||le==="drjohnson"?`${Ce}x${Le}`:Ce>=4e3/4+500?"images_4":"images_2"}`:"custom",We=i.width,ft=i.height,qe=l.getFov();i.width=Ce,i.height=Le,l.setFov(He),An(Ce,Le,a,U.render_settings_buffer);const gt=a.createTexture({size:[Ce,Le,1],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING}),Fe=gt.createView(),yt=()=>{const Bt=a.createCommandEncoder();U.frame(Bt,Fe,!1),a.queue.submit([Bt.finish()])},Xt=()=>new Promise(Bt=>setTimeout(Bt,0)),ss=20,Zt=async(Bt,Gn)=>{let Gt=0,Jt=0;for(Dn(Gn,0,Bt),await Xt();Jt<Bt;){const rs=Math.min(ss,Bt-Jt),wt=performance.now();for(let Pn=0;Pn<rs;Pn++)l.set_preset(h[(Jt+Pn)%h.length]),yt();if(await a.queue.onSubmittedWorkDone(),si)throw new Error("GPU device lost during the benchmark; the result is invalid");const Sr=performance.now();Gt+=Sr-wt,Jt+=rs,Dn(Gn,Jt,Bt),await Xt()}return Gt};try{await Zt(k,"Warming up");const Gn=await Zt(W,"Benchmarking")/W,Gt=1e3/Gn,Jt=p.num_points??p.surfel_data.length/8,rs=(He*180/Math.PI).toFixed(1),wt=`${Gt.toFixed(1)} FPS  (${Gn.toFixed(2)} ms/frame)
${Ce}×${Le} · fovY ${rs}° · ${Ue}
${Jt.toLocaleString()} surfels · ${k}w+${W}b · pipelined`+(U.hasMips?` · ${U._mipMode?`mips bias ${U.mipLodBias}`:"mips off"}`:"");Yt.result=wt,Lt.hidden=!1,console.log("[bench]",wt.replace(/\n/g,"  |  "))}catch(Bt){console.error("[bench] failed:",Bt),Yt.result=`bench failed: ${Bt}`,Lt.hidden=!1}finally{ms(),gt.destroy(),i.width=We,i.height=ft,l.setFov(qe),An(We,ft,a,U.render_settings_buffer),l.position.set(re),l.rotation.set(he),l.update_buffer(),_.enabled=!J,ue=J,F.animate=ce,xe.refresh(),se=!1}}xe.addButton({title:"📊 Benchmark (eval resolution)"}).on("click",()=>wr()),ho(ve);const Un=Math.PI/2,Et=new Set,xr=["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyZ","KeyX","ShiftLeft","ShiftRight"],Os=k=>{const W=k.target;return!!W&&(W.tagName==="INPUT"||W.tagName==="TEXTAREA"||W.isContentEditable)},Vs=()=>Et.has("ShiftLeft")||Et.has("ShiftRight");document.addEventListener("keyup",k=>{Et.delete(k.code)}),window.addEventListener("blur",()=>Et.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&Et.clear()});const yr=k=>{if(Et.size===0||F.animate)return;const W=Vs()?3:1;let J=0;Et.has("KeyX")&&(J+=1),Et.has("KeyZ")&&(J-=1),J!==0&&(_.addRoll(J*Un*W*k),ke=null);const ce=l.rotation,re=[ce[0],ce[4],ce[8]],he=[ce[1],ce[5],ce[9]],le=[ce[2],ce[6],ce[10]],_e=_.center,Le=(_.sceneRadius??Math.max(.05,X.distance(l.position,_e)))*.5*W*k;let He=0,Ue=0,We=0;if(Et.has("KeyW")&&(We+=1),Et.has("KeyS")&&(We-=1),Et.has("KeyD")&&(He+=1),Et.has("KeyA")&&(He-=1),Et.has("KeyE")&&(Ue+=1),Et.has("KeyQ")&&(Ue-=1),!He&&!Ue&&!We)return;const ft=[0,0,0];for(let qe=0;qe<3;qe++)ft[qe]=(re[qe]*He+he[qe]*Ue+le[qe]*We)*Le;for(let qe=0;qe<3;qe++)l.position[qe]+=ft[qe],_e[qe]+=ft[qe];l.update_buffer(),ke=null};document.addEventListener("keydown",k=>{if(Os(k))return;const W=k.key,J=W.toLowerCase();if(k.ctrlKey||k.metaKey||k.altKey){Et.clear();return}if(xr.includes(k.code)&&!(k.shiftKey&&k.code==="KeyD")){Et.add(k.code),k.preventDefault();return}if(J==="t"){vn();return}if(J==="b"){gn();return}if(W>="0"&&W<="9"&&h.length>0){const ce=parseInt(W);ce<h.length&&Xe(ce)}else W==="ArrowLeft"||W==="PageUp"?(Xe(Ne-1),k.preventDefault()):W==="ArrowRight"||W==="PageDown"?(Xe(Ne+1),k.preventDefault()):k.shiftKey&&J==="d"&&U.debugReadSortedIndices(30).catch(ce=>console.error("[DEBUG] readback failed:",ce))});function Ln(k,W){const J=i.getBoundingClientRect();return[(k-J.left)*l.viewport[0]/J.width,(W-J.top)*l.viewport[1]/J.height]}i.addEventListener("dblclick",k=>{const[W,J]=Ln(k.clientX,k.clientY);o(W,J)});let bs=0,vs=0,gs=0;i.addEventListener("pointerdown",k=>{if(k.pointerType!=="touch")return;const W=performance.now(),J=W-bs,ce=k.clientX-vs,re=k.clientY-gs;if(J>0&&J<300&&ce*ce+re*re<40*40){const[he,le]=Ln(k.clientX,k.clientY);o(he,le),bs=0}else bs=W,vs=k.clientX,gs=k.clientY});function ws(){return y}let $s=performance.now(),xs=60,Ns=Promise.resolve(),ns=0,ys=0;const yn=(k,W)=>{if(!F.clip_on||!(isFinite(De[0])&&isFinite(De[1]))){Ta(null,[0,0,0,0],a,U.render_settings_buffer);return}const J=De[0]+F.clip_t*(De[1]-De[0]);ye&&(ye.tau=J,ye.mix=F.cap_mix?1:0,ye.enabled=F.cap_on);const ce=ye&&F.cap_on?J-(Ae?1:-1)*F.clip_eps:J,re=[0,0,0];re[Ie]=Ae?1:-1;const he=Ae?-ce:ce,le=l.getViewMatrix(),_e=[le[0]*re[0]+le[4]*re[1]+le[8]*re[2],le[1]*re[0]+le[5]*re[1]+le[9]*re[2],le[2]*re[0]+le[6]*re[1]+le[10]*re[2]],Ce=he-(_e[0]*le[12]+_e[1]*le[13]+_e[2]*le[14]),Le=l.focal[0],He=l.focal[1];Ta([_e[0],_e[1],_e[2],Ce],[Le,He,.5*k,.5*W],a,U.render_settings_buffer)};function un(k,W,J){if(F.upscale!=="off"&&J>1){const ce=J;let re=F.upscale;if(re==="spline"&&!jt&&(re="bc5"),re==="bc5"||re==="p"||re==="spline"){const Le=Rt(re==="spline"?"bc5":re,ce);Le?Le!==xt&&(U.setSlopeAtlas(Le.view,[Le.scaleU,Le.offU,Le.scaleV,Le.offV]),xt=Le):re="hermite"}U.slopeSource=mo[re]??0;const he=U.resolvesIntoTarget;(!O||O.mode!==re||O.exact!==he)&&(O==null||O.destroy(),O=new md(a,z,re,1/ce,he)),O.scale=1/ce,re==="spline"&&O.setSplineKernel(jt);const le=O.lowTarget(i.width,i.height);U.viewport=he?null:[le.w,le.h];const _e=l.getRenderSize();(!_e||_e[0]!==le.w||_e[1]!==le.h||Y[2]!==i.width||Y[3]!==i.height)&&(l.setRenderSize(le.w,le.h,i.width,i.height),Y=[le.w,le.h,i.width,i.height]),An(le.w,le.h,a,U.render_settings_buffer),yn(le.w,le.h),U.slopeTarget=O.slopeTarget;const Ce=re==="refetch"?O.refetchViews:null;U.refetch=Ce?{...Ce,W:i.width,H:i.height,thr:St,gain:$t,edge:F.rf_edge}:null,U.frame(k,le.view),U.slopeTarget=null,U.viewport=null,Ce&&U.refetchApplied?U.refetchPass(k,W):O.pass(k,W,i.width,i.height),U.refetch=null}else(Y[0]!==0||l.getRenderSize()!==null)&&(l.clearRenderSize(),Y=[0,0,0,0],R()),yn(i.width,i.height),U.frame(k,W)}window.__halloumiView=(k,W,J)=>h[k]?(l.set_preset(h[k]),l.setFocalRatio(J),l.setFov(W),Se.request(),!0):!1,window.__halloumiReadbackPost=async k=>{const W=i.width,J=i.height,ce=a.createTexture({size:[W,J],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),re=Math.ceil(W*4/256)*256,he=a.createBuffer({size:re*J,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),le=a.createCommandEncoder();un(le,ce.createView(),F.upscale!=="off"?F.upscale_factor:1),le.copyTextureToBuffer({texture:ce},{buffer:he,bytesPerRow:re},[W,J]),a.queue.submit([le.finish()]),await he.mapAsync(GPUMapMode.READ);const _e=new Uint8Array(he.getMappedRange()),Ce=new Uint8Array(W*J*3),Le=z.startsWith("bgra"),He=Le?2:0,Ue=Le?0:2;for(let ft=0;ft<J;ft++){let qe=ft*re,gt=ft*W*3;for(let Fe=0;Fe<W;Fe++,qe+=4,gt+=3)Ce[gt]=_e[qe+He],Ce[gt+1]=_e[qe+1],Ce[gt+2]=_e[qe+Ue]}he.unmap(),he.destroy(),ce.destroy();const We=await fetch(k,{method:"POST",body:Ce});return{w:W,h:J,status:We.status}},window.__halloumiGpuTime=async(k=100,W="frame",J=10)=>{if(!a.features.has("timestamp-query"))return null;const ce=i.width,re=i.height,he=a.createTexture({size:[ce,re],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),le=he.createView(),_e=F.upscale!=="off"?F.upscale_factor:1,Ce=a.createQuerySet({type:"timestamp",count:2*k}),Le=a.createBuffer({size:16*k,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),He=a.createBuffer({size:16*k,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});if(W==="up"){const Fe=a.createCommandEncoder();un(Fe,le,_e),a.queue.submit([Fe.finish()])}const Ue=(O==null?void 0:O.refetchViews)??null,We=Fe=>{if(W==="frame"||_e<=1){un(Fe,le,_e);return}Ue?(U.refetch={...Ue,W:ce,H:re,thr:St,gain:$t,edge:F.rf_edge},U.refetchPass(Fe,le),U.refetch=null):O.pass(Fe,le,ce,re)};for(let Fe=0;Fe<J;Fe++){const yt=a.createCommandEncoder();We(yt),a.queue.submit([yt.finish()]),Fe%50==49&&await a.queue.onSubmittedWorkDone()}await a.queue.onSubmittedWorkDone();for(let Fe=0;Fe<k;Fe++){const yt=a.createCommandEncoder();yt.beginComputePass({timestampWrites:{querySet:Ce,beginningOfPassWriteIndex:2*Fe}}).end(),We(yt),yt.beginComputePass({timestampWrites:{querySet:Ce,endOfPassWriteIndex:2*Fe+1}}).end(),a.queue.submit([yt.finish()])}const ft=a.createCommandEncoder();ft.resolveQuerySet(Ce,0,2*k,Le,0),ft.copyBufferToBuffer(Le,0,He,0,16*k),a.queue.submit([ft.finish()]),await He.mapAsync(GPUMapMode.READ);const qe=new BigInt64Array(He.getMappedRange()),gt=[];for(let Fe=0;Fe<k;Fe++)gt.push(Number(qe[2*Fe+1]-qe[2*Fe])/1e6);return He.unmap(),He.destroy(),Le.destroy(),Ce.destroy(),he.destroy(),gt.sort((Fe,yt)=>Fe-yt),{mean:gt.reduce((Fe,yt)=>Fe+yt,0)/k,median:gt[k>>1],n:k}},window.__halloumiReadback=async()=>{const k=i.width,W=i.height,J=a.createTexture({size:[k,W],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),ce=Math.ceil(k*4/256)*256,re=a.createBuffer({size:ce*W,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),he=a.createCommandEncoder();un(he,J.createView(),F.upscale!=="off"?F.upscale_factor:1),he.copyTextureToBuffer({texture:J},{buffer:re,bytesPerRow:ce},[k,W]),a.queue.submit([he.finish()]),await re.mapAsync(GPUMapMode.READ);const le=new Uint8Array(re.getMappedRange()),_e=new Uint8Array(k*W*4),Ce=z.startsWith("bgra");for(let He=0;He<W;He++)for(let Ue=0;Ue<k;Ue++){const We=He*ce+Ue*4,ft=(He*k+Ue)*4;_e[ft]=le[We+(Ce?2:0)],_e[ft+1]=le[We+1],_e[ft+2]=le[We+(Ce?0:2)],_e[ft+3]=255}re.unmap(),re.destroy(),J.destroy();let Le="";for(let He=0;He<_e.length;He+=32768)Le+=String.fromCharCode(..._e.subarray(He,He+32768));return{w:k,h:W,b64:btoa(Le)}},window.__halloumiBenchUp=async(k=300)=>{const W=a.createTexture({size:[i.width,i.height],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),J=W.createView();let ce=a.createCommandEncoder();un(ce,J,F.upscale!=="off"?F.upscale_factor:1),a.queue.submit([ce.finish()]),await a.queue.onSubmittedWorkDone();const re=(O==null?void 0:O.refetchViews)??null,he=()=>{const _e=a.createCommandEncoder();re?(U.refetch={...re,W:i.width,H:i.height,thr:St,gain:$t,edge:F.rf_edge},U.refetchPass(_e,J),U.refetch=null):O.pass(_e,J,i.width,i.height),a.queue.submit([_e.finish()])};for(let _e=0;_e<20;_e++)he();await a.queue.onSubmittedWorkDone();const le=performance.now();for(let _e=0;_e<k;_e++)he();return await a.queue.onSubmittedWorkDone(),W.destroy(),{ms:(performance.now()-le)/k,mode:re?"refetch":String(O==null?void 0:O.mode)}},window.__halloumiBench=async(k=300,W=30)=>{const J=a.createTexture({size:[i.width,i.height],format:z,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),ce=J.createView(),re=_e=>{for(let Ce=0;Ce<_e;Ce++){const Le=a.createCommandEncoder();un(Le,ce,F.upscale!=="off"?F.upscale_factor:1),a.queue.submit([Le.finish()])}};re(W),await a.queue.onSubmittedWorkDone();const he=performance.now();re(k),await a.queue.onSubmittedWorkDone();const le=(performance.now()-he)/k;return J.destroy(),{ms:le,fps:1e3/le,w:i.width,h:i.height}};function Nt(){Pr().catch(k=>{ys++<5&&console.error("[frame] exception (render loop kept alive):",k),requestAnimationFrame(Nt)})}async function Pr(){var le,_e;const k=performance.now(),W=Math.min((k-$s)/1e3,.1);if($s=k,W>0){const Ce=((le=U.lastStageBreakdownMs)==null?void 0:le.total)??0,Le=Ce>.5?1e3/Ce:1/W;Se.idleMs(k)<250&&(xs=xs*.9+Le*.1),be.stats=`${ne} surfels · ${Se.idleMs(k)>500?"idle":`${Math.round(xs)} fps`}
${i.width}×${i.height} px`}if(se){requestAnimationFrame(Nt);return}if(ws()&&(ke||ue)&&(ke=null,_.resetToCamera(),v(),ue&&(ue=!1,F.animate=!1,xe.refresh())),ue&&F.animateMode==="circle"&&pt){nt+=W/at,nt>=1&&(nt-=1);const Ce=xo(pt,nt);l.set_preset(Ce),_.update(W);const Le=a.createCommandEncoder();U.frame(Le,s.getCurrentTexture().createView()),a.queue.submit([Le.finish()]),ns++,ns===2&&Qt(),requestAnimationFrame(Nt);return}if(ke){ke.t+=W/ke.duration;const Ce=Math.min(1,ke.t),Le=Ce*Ce*(3-2*Ce);X.lerp(ke.fromPos,ke.toPos,Le,l.position),mt.slerp(ke.fromQuat,ke.toQuat,Le,rt),Mt.fromQuat(rt,ut),Pt.fromMat3(ut,l.rotation),l.update_buffer(),ke.t>=1&&(l.set_preset(ke.target),ke=null,ue?h.length>0&&($e=Be):(_.resetToCamera(),v()))}else if(ue&&!ws()){const Ce=F.animateMode==="circle"&&ht.length>0,Le=Ce?ht:h;if(Le.length!==0){if($e-=W,$e<=0){const Ue=((Ce?Ve:Ne)+1)%Le.length;Ce?Ve=Ue:Ne=Ue;const We=Ce?Me/8:Me;tt(Le[Ue],We),Ce||(it.view=`${Ne+1} / ${h.length}: ${h[Ne].img_name??Ne}`)}}}yr(W),_.update(W),A(),ee();let J=F.upscale_factor;if(F.upscale!=="off"&&F.upscale_auto){const Ce=Ot.choose(l,i.width,i.height);J=Ce.f,nn.adapt=`${Ce.f===1?"native":`1/${Ce.f.toFixed(2)}`} · ${Ce.texelMode?"texel/px":"q"} ${Ce.q.toFixed(2)} · ${Ce.visible} sampled`}F.adapt_heat&&(J=1);const ce=ke!==null||ue||ws()||Et.size>0;if(!Se.needFrame(k,l,i.width,i.height,ce,`${F.upscale}|${F.rf_edge}|${J}|${F.render_scale}|${F.atlas_enabled}|${((_e=l.getRenderSize())==null?void 0:_e.join())??""}|${F.clip_on}|${F.clip_t}|${F.cap_on}|${F.cap_mix}|${F.clip_eps}`)){requestAnimationFrame(Nt);return}await Ns;const re=a.createCommandEncoder(),he=s.getCurrentTexture().createView();un(re,he,J),a.queue.submit([re.finish()]),Ns=a.queue.onSubmittedWorkDone(),ns++,ns===2&&Qt(),requestAnimationFrame(Nt)}requestAnimationFrame(Nt)}}const Dd=i=>`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2DArray;
flat in vec4 v_tu_op; flat in vec4 v_tv_sh; flat in vec4 v_tw_ly; flat in vec4 v_col_dc;
flat in vec2 v_ctr; flat in vec4 v_uv; flat in vec2 v_dp;
uniform vec2 u_vp;
uniform sampler2DArray u_atlas;
uniform int u_atlas_on;
uniform vec4 u_tex;          // atlas_scale, atlas_offset, res_bias, uv_extent
uniform vec2 u_dims;         // atlas slice width, layer height
uniform int u_dbg;           // 0 normal; see the debug outputs below
out vec4 o;
void main() {
    const float FILTER_INV_SQUARE = 2.0;
    const float K_BETA_SQ = 9.0;
    vec2 pixf = floor(vec2(gl_FragCoord.x, u_vp.y - gl_FragCoord.y));   // top-left origin
    float u0 = v_tu_op.x, v0 = v_tu_op.y, J00 = v_tu_op.z;
    float J01 = v_tv_sh.x, J10 = v_tv_sh.y, J11 = v_tv_sh.z;
    vec2 d = pixf - v_ctr;
    float denom = 1.0 + v_tw_ly.x * d.x + v_tw_ly.y * d.y;
    if (denom < 0.1) discard;
    float inv_d = 1.0 / denom;
    vec2 s = vec2(u0 + (J00 * d.x + J01 * d.y) * inv_d, v0 + (J10 * d.x + J11 * d.y) * inv_d);
    float rho3d = dot(s, s);
    vec2 d_pix = v_ctr - pixf;
    float rho2d = FILTER_INV_SQUARE * dot(d_pix, d_pix);
    float depth = rho3d <= rho2d ? dot(vec3(v_dp, v_col_dc.w), vec3(s, 1.0)) : v_col_dc.w;
    if (depth < 0.2) discard;
    float ab;
${i?`    if (rho3d >= K_BETA_SQ + 1e-6) discard;
    float base = max(0.0, 1.0 - rho3d / K_BETA_SQ);
    float sh = v_tv_sh.w;
    if (sh >= 1.99 && sh <= 2.01) ab = base * base;
    else if (sh >= 0.99 && sh <= 1.01) ab = base;
    else if (sh >= 0.49 && sh <= 0.51) ab = sqrt(base);
    else if (sh >= 3.99 && sh <= 4.01) { float b2 = base * base; ab = b2 * b2; }
    else ab = pow(base, sh);`:"    ab = exp(-rho3d * 0.5);"}
    float alp = exp(-rho2d * 0.5);
    float b = min(0.99, v_tu_op.w * max(ab, alp));
    if (b < 1.0 / 255.0) discard;
    vec3 color = v_col_dc.rgb;
    // Skip-texture surfels carry a zero-area rect (uv_scale == 0) whose slice id points one past
    // the last layer: no residual, SV only — the CUDA bake-render semantics. Sampling it instead
    // reads texel (0,0) of whatever layer the index clamps to (a +0.3 brightness bug, found
    // 2026-10-13 via the re-shard A/B).
    if (u_atlas_on != 0 && v_uv.z != 0.0 && v_uv.w != 0.0) {
        vec2 hw = max(abs(v_uv.zw) * u_tex.w - 0.5 / u_dims, vec2(0.0));
        vec2 uv = clamp(v_uv.xy + s * v_uv.zw, v_uv.xy - hw, v_uv.xy + hw);
        vec4 t = textureLod(u_atlas, vec3(uv, v_tw_ly.w), 0.0);
        // debug (u_dbg): 1 = fetched texel rgb only, 2 = sample offset from the tile centre in texels/256 + layer/16
        if (u_dbg == 1) { o = vec4(t.rgb, 1.0); return; }
        if (u_dbg == 2) { o = vec4((uv - v_uv.xy) * u_dims / 256.0 + 0.5, v_tw_ly.w / 16.0, 1.0); return; }
        color = color + t.rgb * u_tex.x + vec3(u_tex.y);
    }
    color = max(vec3(0.0), color + vec3(u_tex.z));
    o = vec4(color, 1.0) * b;
}`;function So(i){return{bc7:!!i.getExtension("EXT_texture_compression_bptc"),astc:!!i.getExtension("WEBGL_compressed_texture_astc")}}function Ud(i,s){const a=So(i),u=s.format===2||s.format===7,l=s.format===3||s.format===8;let _=0;u&&a.bc7?_=36492:l&&a.astc&&(_=37808);const y=oe=>(console.warn("[gl]",oe),{tex:null,status:oe,slice_width:s.slice_width,layer_h:s.layer_h,n_slices:0,rects:s.rects_expanded});if(!_)return y(`atlas is ${u?"BC7":l?"ASTC":`format ${s.format}`}; this GPU has bc7=${a.bc7} astc=${a.astc}`);let x=i.getParameter(i.MAX_TEXTURE_SIZE);try{const oe=parseInt(new URLSearchParams(window.location.search).get("maxtex")??"",10);oe>=256&&(x=Math.min(x,oe-oe%4))}catch{}const P=i.getParameter(i.MAX_ARRAY_TEXTURE_LAYERS),{width:A,n_layers:z,n_cols:L,layer_cuts:N,column_cuts:O,atlas_bytes:Y}=s,R=A/4*16,q=s.rects_expanded,Z=q.length/5,V=[];let ee=0,K=0,te=0,ue=!1;const de=Array.from({length:L*z},()=>[]);let pe=0,Ee=0;for(let oe=0;oe<Z;oe++){const Pe=q[oe*5+4]|0,Ie=q[oe*5+2],Ae=q[oe*5+3];Pe>=0&&Pe<de.length&&Ie>0&&(de[Pe].push(oe),pe=Math.max(pe,Ie),Ee=Math.max(Ee,Ae))}pe=Math.ceil(pe/4)*4,Ee=Math.ceil(Ee/4)*4;const Te=(oe,Pe)=>{if(oe<=x)return[0,oe];const Ie=x-Pe;if(Ie<64)throw new Error(`atlas re-shard: tiles up to ${Pe} px do not fit MAX_TEXTURE_SIZE ${x}`);const Ae=Math.ceil(oe/Ie),De=[0];for(let ye=1;ye<Ae;ye++)De.push(Math.round(oe*ye/Ae/4)*4);return De.push(oe),De},Re=(oe,Pe,Ie,Ae)=>Math.min(oe[Pe+1]-oe[Pe]+Ie,Ae-oe[Pe]);try{for(let oe=0;oe<L;oe++)for(let Pe=0;Pe<z;Pe++){const Ie=O[oe+1]-O[oe],Ae=N[Pe+1]-N[Pe],De=Te(Ie,pe),ye=Te(Ae,Ee);(De.length>2||ye.length>2)&&(ue=!0);for(let ve=0;ve<De.length-1;ve++)K=Math.max(K,Re(De,ve,pe,Ie));for(let ve=0;ve<ye.length-1;ve++)te=Math.max(te,Re(ye,ve,Ee,Ae));V.push({c:oe,l:Pe,xcuts:De,ycuts:ye,base:ee}),ee+=(De.length-1)*(ye.length-1)}}catch(oe){return y(String(oe))}if(K=Math.ceil(K/4)*4,te=Math.ceil(te/4)*4,ee>P)return y(`atlas needs ${ee} array layers, GPU allows ${P}`);const Ge=K/4*16,ie=Ge*(te/4);let F;try{F=new Uint8Array(ie*ee)}catch(oe){return y(`atlas staging buffer ${(ie*ee/2**20).toFixed(0)} MB failed: ${oe}`)}let xe=q;ue&&(xe=new Float32Array(q));for(const oe of V){const Pe=oe.xcuts.length-1,Ie=oe.ycuts.length-1,Ae=O[oe.c+1]-O[oe.c],De=N[oe.l+1]-N[oe.l];for(let ye=0;ye<Ie;ye++)for(let ve=0;ve<Pe;ve++){const Se=oe.base+ye*Pe+ve,I=O[oe.c]+oe.xcuts[ve],Q=Re(oe.xcuts,ve,pe,Ae),T=N[oe.l]+oe.ycuts[ye],c=Re(oe.ycuts,ye,Ee,De),p=Se*ie,h=I/4,w=Q/4;for(let B=0;B<c/4;B++){const D=(T/4+B)*R+h*16;F.set(Y.subarray(D,D+w*16),p+B*Ge)}}if(ue)for(const ye of de[oe.c*z+oe.l]){const ve=q[ye*5],Se=q[ye*5+1];let I=0;for(;I<Pe-1&&ve>=oe.xcuts[I+1];)I++;let Q=0;for(;Q<Ie-1&&Se>=oe.ycuts[Q+1];)Q++;xe[ye*5]=ve-oe.xcuts[I],xe[ye*5+1]=Se-oe.ycuts[Q],xe[ye*5+4]=oe.base+Q*Pe+I}}const be=i.createTexture();i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D_ARRAY,be),i.compressedTexImage3D(i.TEXTURE_2D_ARRAY,0,_,K,te,ee,0,F),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D_ARRAY,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);const me=i.getError();if(me!==i.NO_ERROR){i.deleteTexture(be);const oe=me===i.OUT_OF_MEMORY?"OUT_OF_MEMORY":me===i.INVALID_VALUE?"INVALID_VALUE":`0x${me.toString(16)}`;return y(`atlas upload failed: GL ${oe} (${K}x${te}x${ee} ${_===36492?"BC7":"ASTC"}, ${(ie*ee/2**20).toFixed(0)} MB, max tex ${x})`)}const fe=`${_===36492?"BC7":"ASTC"} atlas ${K}x${te}x${ee}${ue?` (re-sharded for max tex ${x})`:""}`;return{tex:be,status:fe,slice_width:K,layer_h:te,n_slices:ee,rects:xe}}const Ha=28,Us=8,Ld=i=>`#version 300 es
precision highp float;
precision highp int;
precision highp usampler2D;
precision highp sampler2D;
layout(location=0) in uint a_id;          // surfel id, in sorted (back-to-front) order
uniform usampler2D u_surf;                // 2 texels / surfel: (x y z opa|shape) (sx|sy qw|qx qy|qz aux)
uniform sampler2D  u_sv;                  // 2K texels / surfel: K × (site.xyz, log tau), K × (rgb, 0)
uniform sampler2D  u_uv;                  // 2 texels / surfel: (uv_base.xy uv_scale.xy) (layer 0 0 0)
uniform mat3  u_R;                        // world -> camera rotation
uniform vec3  u_t;                        // camera-space translation (-R·eye)
uniform vec3  u_eye;
uniform vec2  u_vp;                       // drawing-buffer size
uniform float u_focal;                    // pixels (= 0.5 H / tan(fovY/2))
uniform float u_zfar;
uniform float u_scaling;                  // gaussian_scaling
uniform float u_sh_bias;
uniform int   u_K;
out vec4 v_tu_op; out vec4 v_tv_sh; out vec4 v_tw_ly; out vec4 v_col_dc;
out vec4 v_ctr_ext; out vec4 v_uv; out vec4 v_dp;

ivec2 tc(int l) { return ivec2(l & ${(1<<i)-1}, l >> ${i}); }
void cull() {
    v_tu_op = vec4(0.0); v_tv_sh = vec4(0.0); v_tw_ly = vec4(0.0); v_col_dc = vec4(0.0);
    v_ctr_ext = vec4(0.0); v_uv = vec4(0.0); v_dp = vec4(0.0);
}
void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 1.0;
    int i = int(a_id);
    uvec4 s0 = texelFetch(u_surf, tc(i * 2), 0);
    uvec4 s1 = texelFetch(u_surf, tc(i * 2 + 1), 0);
    vec3 p = uintBitsToFloat(s0.xyz);
    vec2 os = unpackHalf2x16(s0.w);
    float opacity = os.x, shape = os.y;
    vec2 sc = unpackHalf2x16(s1.x) * u_scaling;
    vec2 qa = unpackHalf2x16(s1.y), qb = unpackHalf2x16(s1.z);
    bool textured = ((s1.w >> 16u) & 1u) == 1u;
    if (!(opacity > 1.0 / 255.0) || !textured) { cull(); return; }
    float qn = inversesqrt(max(dot(qa, qa) + dot(qb, qb), 1e-20));
    float w = qa.x * qn, x = qa.y * qn, y = qb.x * qn, z = qb.y * qn;
    // quat_to_rotmat columns 0 / 1 = the surfel's tangent axes, scaled
    vec3 L0 = vec3(1.0 - 2.0 * (y * y + z * z), 2.0 * (x * y + w * z), 2.0 * (x * z - w * y)) * sc.x;
    vec3 L1 = vec3(2.0 * (x * y - w * z), 1.0 - 2.0 * (x * x + z * z), 2.0 * (y * z + w * x)) * sc.y;
    vec3 c = u_R * p + u_t;
    float W = u_vp.x, H = u_vp.y;
    float zn = 0.01, zf = u_zfar, P22 = zf / (zf - zn), P23 = -(zf * zn) / (zf - zn);
    float P00 = 2.0 * u_focal / W, P11 = 2.0 * u_focal / H;
    float cw = c.z, clipZ = P22 * c.z + P23, zndc = clipZ / cw;
    float bnd = 1.2 * cw;
    if (!(zndc > 0.0 && zndc < 1.0) || abs(P00 * c.x) > bnd || abs(P11 * c.y) > bnd) { cull(); return; }
    vec3 l0 = u_R * L0, l1 = u_R * L1;
    float hw = W * 0.5, hwc = (W - 1.0) * 0.5, hh = H * 0.5, hhc = (H - 1.0) * 0.5;
    vec3 Tu = vec3(P00 * l0.x * hw + l0.z * hwc, P00 * l1.x * hw + l1.z * hwc, P00 * c.x * hw + cw * hwc);
    vec3 Tv = vec3(P11 * l0.y * hh + l0.z * hhc, P11 * l1.y * hh + l1.z * hhc, P11 * c.y * hh + cw * hhc);
    vec3 Tw = vec3(l0.z, l1.z, cw);
    // OAC cutoff
    float cutoff;
    if (shape > 1e-6) {
        float inv = 1.0 / (255.0 * max(opacity, 1.0 / 255.0));
        cutoff = max(0.5, 3.0 * sqrt(max(0.0, 1.0 - pow(inv, 1.0 / max(shape, 1e-3)))));
    } else {
        cutoff = max(0.5, sqrt(2.0 * log(255.0 * max(opacity, 1.0 / 255.0))));
    }
    float k2 = cutoff * cutoff;
    // SnugBox
    vec3 n0 = cross(Tv, Tw), n1 = cross(Tw, Tu), n2 = cross(Tu, Tv);
    float A = n0.x * n0.x + n0.y * n0.y - k2 * n0.z * n0.z;
    float B = n0.x * n1.x + n0.y * n1.y - k2 * n0.z * n1.z;
    float E = n1.x * n1.x + n1.y * n1.y - k2 * n1.z * n1.z;
    float D = n0.x * n2.x + n0.y * n2.y - k2 * n0.z * n2.z;
    float F = n1.x * n2.x + n1.y * n2.y - k2 * n1.z * n2.z;
    float det = A * E - B * B;
    float ax = 0.0, ay = 0.0, ex = -1.0, ey = -1.0;
    if (det > 0.0 && A > 0.0 && E > 0.0) {
        float qx = (B * F - E * D) / det, qy = (B * D - A * F) / det;
        vec3 cc = qx * n0 + qy * n1 + n2;
        float t = -(cc.x * cc.x + cc.y * cc.y - k2 * cc.z * cc.z);
        if (t > 0.0) { ax = qx; ay = qy; ex = sqrt(t * E / det); ey = sqrt(t * A / det); }
    }
    if (ex < 0.0) {                                   // compute_aabb fallback + garbage guard
        float dd = k2 * Tw.x * Tw.x + k2 * Tw.y * Tw.y - Tw.z * Tw.z;
        if (dd < 0.0) {
            float fx = k2 / dd, fy = k2 / dd, fz = -1.0 / dd;
            float pxx = fx * Tu.x * Tw.x + fy * Tu.y * Tw.y + fz * Tu.z * Tw.z;
            float pyy = fx * Tv.x * Tw.x + fy * Tv.y * Tw.y + fz * Tv.z * Tw.z;
            float h0x = pxx * pxx - (fx * Tu.x * Tu.x + fy * Tu.y * Tu.y + fz * Tu.z * Tu.z);
            float h0y = pyy * pyy - (fx * Tv.x * Tv.x + fy * Tv.y * Tv.y + fz * Tv.z * Tv.z);
            if (h0x >= 0.0 && h0y >= 0.0) {
                ax = pxx; ay = pyy; ex = sqrt(h0x); ey = sqrt(h0y);
                if (max(ex, ey) > 2.0 * max(W, H)) ex = -1.0;
            }
        }
    }
    if (ex < 0.0) { cull(); return; }
    if (max(ex, ey) < 0.25 && opacity < 0.5) { cull(); return; }        // SPR
    // CONIC expansion about the ¼-px quantised centre
    float cxc = floor(ax * 4.0 + 0.5) * 0.25, cyc = floor(ay * 4.0 + 0.5) * 0.25;
    vec3 kk = cxc * Tw - Tu, ll = cyc * Tw - Tv;
    vec3 pc = cross(kk, ll);
    float u0 = 1e10, v0 = 1e10, J00 = 0.0, J01 = 0.0, J10 = 0.0, J11 = 0.0, dwx = 0.0, dwy = 0.0;
    if (abs(pc.z) > 1e-12) {
        u0 = pc.x / pc.z; v0 = pc.y / pc.z;
        float wc = Tw.x * u0 + Tw.y * v0 + Tw.z;
        float detkl = kk.x * ll.y - kk.y * ll.x;
        if (abs(detkl) > 1e-12 && abs(wc) > 1e-8) {
            float scl = wc / detkl;
            J00 = -ll.y * scl; J01 = kk.y * scl; J10 = ll.x * scl; J11 = -kk.x * scl;
            dwx = (Tw.y * Tv.x - Tw.x * Tv.y) / pc.z;
            dwy = (Tu.y * Tw.x - Tu.x * Tw.y) / pc.z;
        } else { u0 = 1e10; v0 = 1e10; }
    }
    // SV colour (preprocess eval_sv): softmax over K sites of -tau·|site - view_dir|
    vec3 vd = normalize(p - u_eye);
    vec3 col = vec3(0.0);
    if (u_K > 0) {
        int base = i * 2 * u_K;
        float lg[${Us}];
        float lmax = -3.4e38;
        for (int k = 0; k < ${Us}; k++) {
            if (k >= u_K) break;
            vec4 st = texelFetch(u_sv, tc(base + k), 0);
            vec3 sd = st.xyz * inversesqrt(max(dot(st.xyz, st.xyz), 1e-20)) - vd;
            lg[k] = -exp(st.w) * length(sd);
            lmax = max(lmax, lg[k]);
        }
        float ws = 0.0;
        for (int k = 0; k < ${Us}; k++) {
            if (k >= u_K) break;
            float wk = exp(lg[k] - lmax);
            ws += wk;
            col += wk * texelFetch(u_sv, tc(base + u_K + k), 0).xyz;
        }
        col = max(vec3(0.0), col / max(ws, 1e-20) + vec3(u_sh_bias));
    }
    vec4 uvb = texelFetch(u_uv, tc(i * 2), 0);
    float layer = texelFetch(u_uv, tc(i * 2 + 1), 0).x;
    v_tu_op   = vec4(u0, v0, J00, opacity);
    v_tv_sh   = vec4(J01, J10, J11, shape);
    v_tw_ly   = vec4(dwx, dwy, 0.0, layer);
    v_col_dc  = vec4(col, c.z);
    v_ctr_ext = vec4(cxc, cyc, ex, ey);
    v_uv      = uvb;
    v_dp      = vec4(l0.z, l1.z, 0.0, 0.0);          // depth_u, depth_v = (view · L).z
}`,Gd=`#version 300 es
precision highp float;
precision highp int;
layout(location=0) in vec4 a_tu_op;
layout(location=1) in vec4 a_tv_sh;
layout(location=2) in vec4 a_tw_ly;
layout(location=3) in vec4 a_col_dc;
layout(location=4) in vec4 a_ctr_ext;
layout(location=5) in vec4 a_uv;
layout(location=6) in vec4 a_dp;
uniform vec2 u_vp;
flat out vec4 v_tu_op; flat out vec4 v_tv_sh; flat out vec4 v_tw_ly; flat out vec4 v_col_dc;
flat out vec2 v_ctr; flat out vec4 v_uv; flat out vec2 v_dp;
void main() {
    v_tu_op = a_tu_op; v_tv_sh = a_tv_sh; v_tw_ly = a_tw_ly; v_col_dc = a_col_dc;
    v_ctr = a_ctr_ext.xy; v_uv = a_uv; v_dp = a_dp.xy;
    if (a_tu_op.w <= 0.0) { gl_Position = vec4(3.0, 3.0, 0.0, 1.0); return; }   // culled record: clipped away
    const float FILTER_R = 3.0 * 0.7071067811865476;
    int vid = gl_VertexID;
    vec2 ext_pad = a_ctr_ext.zw * 1.001 + vec2(0.25);
    vec2 hlf = max(ext_pad, vec2(FILTER_R));
    float ox = (vid & 1) == 0 ? 1.0 : -1.0;
    float oy = vid < 2 ? 1.0 : -1.0;
    vec2 corner = a_ctr_ext.xy + vec2(ox, oy) * hlf;
    gl_Position = vec4((corner.x * 2.0 - (u_vp.x - 1.0)) / u_vp.x,
                       -((corner.y * 2.0 - (u_vp.y - 1.0)) / u_vp.y), 0.0, 1.0);
}`;class Ya{constructor(s,a,u,l={}){S(this,"gl");S(this,"n");S(this,"K");S(this,"twLog2");S(this,"pre");S(this,"draw");S(this,"preU",{});S(this,"drawU",{});S(this,"texSurf");S(this,"texSv");S(this,"texUv");S(this,"idBuf");S(this,"recBuf");S(this,"preVao");S(this,"drawVao");S(this,"tf");S(this,"atlasTex",null);S(this,"atlasStatus","no atlas");S(this,"atlasUpload",null);S(this,"atlasOn",!1);S(this,"sd");S(this,"ok");S(this,"keyF");S(this,"keyU");S(this,"ids");S(this,"ids2");S(this,"keys2");S(this,"hist");S(this,"cnt",new Uint32Array(256));S(this,"bgColor",[0,0,0]);S(this,"scaling",1);S(this,"lastStats",{visible:0,cpuMs:0});S(this,"only",-1);S(this,"dbg",0);if(this.gl=s,a.feature_mode!==0)throw new Error("WebGL2 backend supports SV colour only (feature_mode 0)");if(a.K>Us)throw new Error(`WebGL2 backend supports K <= ${Us} SV sites (bundle has ${a.K})`);this.n=a.num_points,this.K=a.K,this.sd=a.surfel_data;const _=this.n,y=s.getParameter(s.MAX_TEXTURE_SIZE);this.twLog2=y>=4096?12:11;const x=1<<this.twLog2,P=new Uint32Array(a.surfel_data.buffer,a.surfel_data.byteOffset,_*8);for(let R=0;R<_;R++)if(P[R*8+7]>>>17&1)throw new Error("WebGL2 backend does not support --tex3d bundles (3D kernels); use WebGPU");this.ok=new Uint8Array(_);for(let R=0;R<_;R++){const q=zd(P[R*8+3]);this.ok[R]=q>1/255&&(P[R*8+7]>>>16&1)===1?1:0}this.keyF=new Float32Array(_),this.keyU=new Uint32Array(this.keyF.buffer),this.ids=new Uint32Array(_),this.ids2=new Uint32Array(_),this.keys2=new Uint32Array(_),this.hist=new Uint32Array(256*4);const A=R=>Math.max(1,Math.ceil(_*R/x)),z=(R,q,Z,V,ee)=>{const K=s.createTexture();return s.bindTexture(s.TEXTURE_2D,K),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,R,x,A(V),0,q,Z,ee),K};{const R=A(2),q=new Uint32Array(x*R*4);q.set(P),this.texSurf=z(s.RGBA32UI,s.RGBA_INTEGER,s.UNSIGNED_INT,2,q)}{const R=this.K,q=A(2*R),Z=new Float32Array(x*q*4),V=a.sv_params,ee=R*7;for(let K=0;K<_;K++){const te=K*ee,ue=K*2*R*4;for(let de=0;de<R;de++){Z[ue+de*4]=V[te+de*3],Z[ue+de*4+1]=V[te+de*3+1],Z[ue+de*4+2]=V[te+de*3+2],Z[ue+de*4+3]=V[te+R*6+de];const pe=ue+(R+de)*4;Z[pe]=V[te+R*3+de*3],Z[pe+1]=V[te+R*3+de*3+1],Z[pe+2]=V[te+R*3+de*3+2]}}this.texSv=z(s.RGBA32F,s.RGBA,s.FLOAT,2*R,Z)}const L=u?Ud(s,u):null;L&&(this.atlasStatus=L.status),this.atlasUpload=L;{const R=A(2),q=new Float32Array(x*R*4);if(u&&L&&L.tex){const Z=L.slice_width,V=L.layer_h,ee=u.uv_extent,K=L.rects;for(let te=0;te<_;te++){if(!this.ok[te])continue;const ue=K[te*5],de=K[te*5+1],pe=K[te*5+2],Ee=K[te*5+3],Te=te*8;q[Te]=(ue+.5*Math.max(pe,1))/Z,q[Te+1]=(de+.5*Math.max(Ee,1))/V,q[Te+2]=pe/(2*ee)/Z,q[Te+3]=Ee/(2*ee)/V,q[Te+4]=K[te*5+4]}}this.texUv=z(s.RGBA32F,s.RGBA,s.FLOAT,2,q)}const N=(R,q)=>{const Z=s.createShader(R);if(s.shaderSource(Z,q),s.compileShader(Z),!s.getShaderParameter(Z,s.COMPILE_STATUS))throw new Error("GLSL: "+s.getShaderInfoLog(Z));return Z},O=R=>{if(s.linkProgram(R),!s.getProgramParameter(R,s.LINK_STATUS))throw new Error("GLSL link: "+s.getProgramInfoLog(R))};this.pre=s.createProgram(),s.attachShader(this.pre,N(s.VERTEX_SHADER,Ld(this.twLog2))),s.attachShader(this.pre,N(s.FRAGMENT_SHADER,`#version 300 es
precision mediump float;
out vec4 o;
void main(){ o = vec4(0.0); }`)),s.transformFeedbackVaryings(this.pre,["v_tu_op","v_tv_sh","v_tw_ly","v_col_dc","v_ctr_ext","v_uv","v_dp"],s.INTERLEAVED_ATTRIBS),O(this.pre);for(const R of["u_surf","u_sv","u_uv","u_R","u_t","u_eye","u_vp","u_focal","u_zfar","u_scaling","u_sh_bias","u_K"])this.preU[R]=s.getUniformLocation(this.pre,R);const Y=!(u&&u.kernel_type===0)&&a.kernel_type!==0;this.draw=s.createProgram(),s.attachShader(this.draw,N(s.VERTEX_SHADER,Gd)),s.attachShader(this.draw,N(s.FRAGMENT_SHADER,Dd(Y))),O(this.draw);for(const R of["u_vp","u_atlas","u_atlas_on","u_tex","u_dims","u_dbg"])this.drawU[R]=s.getUniformLocation(this.draw,R);try{const R=new URLSearchParams(window.location.search);this.only=parseInt(R.get("only")??"-1",10),this.dbg=parseInt(R.get("dbg")??"0",10)|0}catch{}this.idBuf=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.idBuf),s.bufferData(s.ARRAY_BUFFER,_*4,s.DYNAMIC_DRAW),this.recBuf=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.recBuf),s.bufferData(s.ARRAY_BUFFER,_*Ha*4,s.STREAM_COPY),s.bindBuffer(s.ARRAY_BUFFER,null),this.preVao=s.createVertexArray(),s.bindVertexArray(this.preVao),s.bindBuffer(s.ARRAY_BUFFER,this.idBuf),s.enableVertexAttribArray(0),s.vertexAttribIPointer(0,1,s.UNSIGNED_INT,0,0),s.bindVertexArray(null),this.drawVao=s.createVertexArray(),s.bindVertexArray(this.drawVao),s.bindBuffer(s.ARRAY_BUFFER,this.recBuf);for(let R=0;R<7;R++)s.enableVertexAttribArray(R),s.vertexAttribPointer(R,4,s.FLOAT,!1,Ha*4,R*16),s.vertexAttribDivisor(R,1);s.bindVertexArray(null),s.bindBuffer(s.ARRAY_BUFFER,null),this.tf=s.createTransformFeedback(),s.useProgram(this.pre),s.uniform1i(this.preU.u_surf,1),s.uniform1i(this.preU.u_sv,2),s.uniform1i(this.preU.u_uv,3),s.uniform1i(this.preU.u_K,this.K),s.uniform1f(this.preU.u_sh_bias,l.shBias??a.sh_bias),s.uniform1f(this.preU.u_scaling,this.scaling),s.useProgram(this.draw),s.uniform1i(this.drawU.u_atlas,0),s.uniform1i(this.drawU.u_atlas_on,0),s.uniform4f(this.drawU.u_tex,0,0,u?u.res_bias:0,u?u.uv_extent:4),u&&L&&L.tex&&(this.atlasTex=L.tex,this.atlasOn=!0,s.uniform1i(this.drawU.u_atlas_on,1),s.uniform4f(this.drawU.u_tex,u.atlas_scale,u.atlas_offset,u.res_bias,u.uv_extent),s.uniform2f(this.drawU.u_dims,L.slice_width,L.layer_h)),s.useProgram(null)}get hasAtlas(){return this.atlasTex!==null}get atlasEnabled(){return this.atlasOn}setAtlasEnabled(s){this.atlasTex&&(this.atlasOn=s,this.gl.useProgram(this.draw),this.gl.uniform1i(this.drawU.u_atlas_on,s?1:0))}setGaussianScaling(s){this.scaling=s,this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_scaling,s)}setShBias(s){this.gl.useProgram(this.pre),this.gl.uniform1f(this.preU.u_sh_bias,s)}render(s){const a=this.gl,u=this.n,l=s.rotation,_=s.eye,y=this.sd,x=this.ok,P=s.width,A=s.height,z=performance.now(),L=.5*A/Math.tan(s.fovY*.5),N=-(l[0]*_[0]+l[4]*_[1]+l[8]*_[2]),O=-(l[1]*_[0]+l[5]*_[1]+l[9]*_[2]),Y=-(l[2]*_[0]+l[6]*_[1]+l[10]*_[2]),R=.01,q=s.zfar??100,Z=q/(q-R),V=-(q*R)/(q-R),ee=2*L/P,K=2*L/A,te=l[0],ue=l[4],de=l[8],pe=l[1],Ee=l[5],Te=l[9],Re=l[2],Ge=l[6],ie=l[10],F=this.keyF,xe=this.ids;let be=0;for(let oe=0;oe<u;oe++){if(x[oe]===0||this.only>=0&&oe!==this.only)continue;const Pe=oe*8,Ie=y[Pe],Ae=y[Pe+1],De=y[Pe+2],ye=Re*Ie+Ge*Ae+ie*De+Y;if(!(ye>0))continue;const ve=Z*ye+V,Se=ve/ye;if(!(Se>0&&Se<1))continue;const I=1.2*ye,Q=te*Ie+ue*Ae+de*De+N;if(Math.abs(ee*Q)>I)continue;const T=pe*Ie+Ee*Ae+Te*De+O;Math.abs(K*T)>I||(F[be]=q-ve,xe[be]=oe,be++)}const me=this.radixSort(be),fe=performance.now()-z;return this.lastStats={visible:be,cpuMs:fe},be===0?(a.viewport(0,0,P,A),a.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT),0):(a.bindBuffer(a.ARRAY_BUFFER,this.idBuf),a.bufferSubData(a.ARRAY_BUFFER,0,me,0,be),a.bindBuffer(a.ARRAY_BUFFER,null),a.useProgram(this.pre),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,this.texSurf),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,this.texSv),a.activeTexture(a.TEXTURE3),a.bindTexture(a.TEXTURE_2D,this.texUv),a.uniformMatrix3fv(this.preU.u_R,!1,[te,pe,Re,ue,Ee,Ge,de,Te,ie]),a.uniform3f(this.preU.u_t,N,O,Y),a.uniform3f(this.preU.u_eye,_[0],_[1],_[2]),a.uniform2f(this.preU.u_vp,P,A),a.uniform1f(this.preU.u_focal,L),a.uniform1f(this.preU.u_zfar,q),a.bindVertexArray(this.preVao),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,this.tf),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,this.recBuf),a.enable(a.RASTERIZER_DISCARD),a.beginTransformFeedback(a.POINTS),a.drawArrays(a.POINTS,0,be),a.endTransformFeedback(),a.disable(a.RASTERIZER_DISCARD),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,null),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,null),a.bindVertexArray(null),a.viewport(0,0,P,A),a.clearColor(this.bgColor[0],this.bgColor[1],this.bgColor[2],1),a.clear(a.COLOR_BUFFER_BIT),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),a.disable(a.DEPTH_TEST),a.useProgram(this.draw),a.uniform2f(this.drawU.u_vp,P,A),a.uniform1i(this.drawU.u_dbg,this.dbg),this.atlasTex&&(a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D_ARRAY,this.atlasTex)),a.bindVertexArray(this.drawVao),a.drawArraysInstanced(a.TRIANGLE_STRIP,0,4,be),a.bindVertexArray(null),be)}radixSort(s){const a=this.keyU,u=this.hist;u.fill(0);for(let A=0;A<s;A++){const z=a[A];u[z&255]++,u[256+(z>>>8&255)]++,u[512+(z>>>16&255)]++,u[768+(z>>>24)]++}let l=a,_=this.ids,y=this.keys2,x=this.ids2;const P=this.cnt;for(let A=0;A<4;A++){const z=A*8,L=A*256;let N=!1;for(let q=0;q<256;q++)if(u[L+q]===s){N=!0;break}if(N)continue;let O=0;for(let q=0;q<256;q++)P[q]=O,O+=u[L+q];for(let q=0;q<s;q++){const Z=l[q],V=Z>>>z&255,ee=P[V]++;y[ee]=Z,x[ee]=_[q]}const Y=l;l=y,y=Y;const R=_;_=x,x=R}return _}}function zd(i){const s=i&65535,a=s&32768?-1:1,u=s>>10&31,l=s&1023;return u===0?a*l*5960464477539063e-23:u===31?l?NaN:a*(1/0):a*(1+l/1024)*Math.pow(2,u-15)}const Qr=i=>i.format===2||i.format===7,ei=i=>i.format===3||i.format===8;async function Xa(i,s,a){const u=new URLSearchParams(window.location.search),l=new lr(i,null),_=new bo(l),y=So(s);bt(`[gl] WebGL2 backend · bc7=${y.bc7} astc=${y.astc} · ${s.getParameter(s.RENDERER)}`);let x=null,P=null,A=[],z=null;const L={animate:u.get("animation")==="1",atlas_enabled:!0,render_scale:1,gaussian_scaling:1,bg:{r:0,g:0,b:0}},N=new fo.Pane({title:"Config (WebGL2)",expanded:!0}),O={stats:"— loading —"};N.addMonitor(O,"stats",{label:"Stats",interval:200,multiline:!0,lineCount:2}),N.addInput(L,"atlas_enabled",{label:"Texture"}).on("change",o=>x==null?void 0:x.setAtlasEnabled(o.value));const Y=N.addFolder({title:"⚙ Advanced options",expanded:!1}),R=new Ja;N.on("change",()=>R.request()),window.__halloumiRedraw=()=>R.request(),window.__halloumiGate=R;const q={s:a.gpuAvailable?"WebGL2 (WebGPU available)":"WebGL2 (no WebGPU here)"};Y.addMonitor(q,"s",{label:"Renderer"}),Y.addButton({title:"🔁 Switch to WebGPU",disabled:!a.gpuAvailable}).on("click",()=>di("webgpu"));let V=L.animate;_.enabled=!V,Y.addInput(L,"animate",{label:"Animate"}).on("change",o=>{V=o.value,_.enabled=!V,V||(_.resetToCamera(),fe())}),Y.addInput(L,"render_scale",{label:"Render scale",min:.25,max:Math.max(1,window.devicePixelRatio||1),step:.05}).on("change",()=>ue()),Y.addInput(L,"gaussian_scaling",{label:"Surfel scale",min:.1,max:2,step:.05}).on("change",o=>x==null?void 0:x.setGaussianScaling(o.value)),Y.addInput(L,"bg",{label:"Background",color:{type:"float"}}).on("change",o=>{x&&(x.bgColor=[o.value.r,o.value.g,o.value.b])});const ee={s:"—"};Y.addMonitor(ee,"s",{label:"Atlas"}),Y.addButton({title:"🎯 Reset camera"}).on("click",()=>oe(0,!1)),ho(Y);const K=document.createElement("button");K.textContent="Texture: on",Object.assign(K.style,{position:"fixed",top:"8px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #666",background:"rgba(20,20,30,0.8)",color:"#eee",cursor:"pointer"}),document.body.appendChild(K);const te=()=>{L.atlas_enabled=!L.atlas_enabled,x==null||x.setAtlasEnabled(L.atlas_enabled),K.textContent=`Texture: ${L.atlas_enabled?"on":"off"}`,N.refresh()};K.addEventListener("click",te);const ue=()=>{const o=Math.max(.25,L.render_scale),v=Math.max(1,Math.ceil(o*i.clientWidth)),f=Math.max(1,Math.ceil(o*i.clientHeight));(i.width!==v||i.height!==f)&&(i.width=v,i.height=f),l.on_update_canvas()};new ResizeObserver(()=>ue()).observe(i),ue();const de=.4,pe=3,Ee=.3;let Te=-1,Re=null,Ge=0;const ie=mt.create(),F=Mt.create(),xe=o=>mt.fromMat(Mt.create(o[0],o[1],o[2],o[4],o[5],o[6],o[8],o[9],o[10])),be=(o,v)=>{Re={fromPos:X.clone(l.position),toPos:X.clone(o.position),fromQuat:mt.normalize(xe(l.rotation)),toQuat:mt.normalize(xe(o.rotation)),target:o,t:0,duration:Math.max(.01,v)}},me=document.createElement("span"),fe=()=>{if(!P)return;const o=Po(l,P.surfel_data);o!==null&&_.setOrbitDepth(o)},oe=(o,v=!0)=>{if(A.length===0)return;Te=(o%A.length+A.length)%A.length;const f=A[Te];v?be(f,de):(l.set_preset(f),_.resetToCamera(),fe()),me.textContent=`${Te+1} / ${A.length}: ${A[Te].img_name??Te}`};let Pe=null;const Ie=()=>{if(Pe||A.length===0)return;Y.addSeparator(),Pe=document.createElement("div"),Pe.style.cssText="display:flex;gap:4px;align-items:center;padding:3px 6px;";const o=(v,f)=>{const b=document.createElement("button");return b.className="tp-btnv_b",b.textContent=v,b.style.cssText="flex:0 0 34px;height:24px;padding:0;",b.addEventListener("click",f),b};me.style.cssText="flex:1 1 auto;font-size:11px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:.85;",Pe.appendChild(o("◀",()=>oe(Te-1))),Pe.appendChild(me),Pe.appendChild(o("▶",()=>oe(Te+1))),Y.element.appendChild(Pe)};window.addEventListener("keydown",o=>{var v;((v=o.target)==null?void 0:v.tagName)!=="INPUT"&&(o.key==="ArrowLeft"||o.key==="PageUp"?oe(Te-1):o.key==="ArrowRight"||o.key==="PageDown"?oe(Te+1):o.key==="t"||o.key==="T"?te():o.key==="b"||o.key==="B"?Q():o.key>="1"&&o.key<="9"&&oe(parseInt(o.key,10)-1))});let Ae=0;const De=(o,v)=>{if(!P)return;const f=i.getBoundingClientRect(),b=hi((o-f.left)*i.width/f.width,(v-f.top)*i.height/f.height,i,l,P.surfel_data);b&&_.setOrbitPivot(b)};i.addEventListener("dblclick",o=>De(o.clientX,o.clientY)),i.addEventListener("pointerup",o=>{if(o.pointerType!=="touch")return;const v=performance.now();v-Ae<300&&De(o.clientX,o.clientY),Ae=v});const ye=u.get("bundle")??u.get("model_url");async function ve(o,v){fs(`parsing ${v} ...`);try{const f=new TextDecoder().decode(new Uint8Array(o,0,8));let b=o,d=null,g=null;f===ir&&({pcBuffer:b,camerasBuffer:d,atlasBuffer:g}=bi(o)),At("parsing surfels ..."),P=await Ia(new File([b],v));let C=null;if(g&&u.get("notex")!=="1"){C=Yn(g);const $=Qr(C)&&y.bc7||ei(C)&&y.astc;let U=u.get("atlas2");if(!$&&!U&&ye){const j=ye.match(/^(.*?)(_astc)?\.bitymi(\?.*)?$/);j&&(U=j[2]?`${j[1]}.bitymi${j[3]??""}`:`${j[1]}_astc.bitymi${j[3]??""}`)}if(!$&&U){At("atlas format unsupported here — fetching the twin bundle ...");try{const{bundle:j}=await hs(U,(se,ae)=>At(`downloading twin atlas ...
${(se/1048576).toFixed(1)}${ae?` / ${(ae/1048576).toFixed(1)}`:""} MB`));if(j!=null&&j.atlasBuffer){const se=Yn(j.atlasBuffer);(Qr(se)&&y.bc7||ei(se)&&y.astc)&&(C=se)}}catch(j){console.warn("[gl] atlas2 failed:",j)}}}At("building GPU resources ..."),z=C,x=new Ya(s,P,C),x.bgColor=[L.bg.r,L.bg.g,L.bg.b],x.setGaussianScaling(L.gaussian_scaling),x.setAtlasEnabled(L.atlas_enabled),ee.s=x.atlasStatus,bt(`[gl] max tex ${s.getParameter(s.MAX_TEXTURE_SIZE)} · layers ${s.getParameter(s.MAX_ARRAY_TEXTURE_LAYERS)} · ${x.atlasStatus}`),bt(`[gl] ${P.num_points} surfels · ${x.atlasStatus}`),A=[];const E=u.get("camera_url");if(d){const $=URL.createObjectURL(new Blob([d],{type:"application/json"}));try{A=await ui($)}finally{URL.revokeObjectURL($)}}else if(E)try{A=await ui(E)}catch($){console.warn("[gl] camera_url failed:",$)}if(_.setBbox(P.bbox.min,P.bbox.max),A.length>0)Ie(),oe(0,!1);else{const $=P.centroid,U=.5*Math.hypot(P.bbox.max[0]-P.bbox.min[0],P.bbox.max[1]-P.bbox.min[1],P.bbox.max[2]-P.bbox.min[2]),j=X.create($[0]-U,$[1]-U,$[2]-U),se=Pt.lookAt(j,X.create($[0],$[1],$[2]),X.create(0,1,0));Pt.copy(se,l.rotation),l.rotation[12]=0,l.rotation[13]=0,l.rotation[14]=0,X.copy(j,l.position),l.update_buffer(),_.resetToCamera()}}catch(f){throw Qt(),f}}const Se=document.getElementById("load-button");if(Se==null||Se.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept=".ply,.bitymi",o.onchange=async()=>{var f;const v=(f=o.files)==null?void 0:f[0];v&&await ve(await v.arrayBuffer(),v.name)},o.click()}),ye)try{fs("downloading ...");const{bundle:o,rawPly:v}=await hs(ye,(f,b,d,g)=>At(g==="cache"?`loading cached bundle ...
${(f/2**20).toFixed(1)}${b?` / ${(b/2**20).toFixed(1)}`:""} MB on this device`:`downloading ...
${(f/2**20).toFixed(1)}${b?` / ${(b/2**20).toFixed(1)}`:""} MB · ${(d/2**20).toFixed(1)} MB/s`));o?await I(o.pcBuffer,o.camerasBuffer,o.atlasBuffer,ye.split("/").pop()??"bundle"):v&&await ve(v,ye.split("/").pop()??"scene.ply")}catch(o){Qt(),console.error("[gl] bundle load failed:",o),O.stats=`load failed: ${(o==null?void 0:o.message)??o}`;const v=document.createElement("div");v.textContent=`Could not load this bundle in the WebGL2 renderer: ${(o==null?void 0:o.message)??o}`,Object.assign(v.style,{position:"fixed",left:"50%",top:"40%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.92)",border:"1px solid #f0b060",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"}),document.body.appendChild(v)}else O.stats="no ?bundle= — use 📂 Load";async function I(o,v,f,b){const d=new TextEncoder().encode(ir),g=[o],C=[0];v&&(g.push(v),C.push(2)),f&&(g.push(f),C.push(3));const E=4+g.length*20,$=8+E,U=$+g.reduce((ne,ge)=>ne+ge.byteLength,0),j=new Uint8Array(U),se=new DataView(j.buffer);j.set(d,0),se.setUint32(8,g.length,!0);let ae=$;g.forEach((ne,ge)=>{se.setUint32(12+ge*20,C[ge],!0),se.setBigUint64(16+ge*20,BigInt(ae),!0),se.setBigUint64(24+ge*20,BigInt(ne.byteLength),!0),j.set(new Uint8Array(ne),ae),ae+=ne.byteLength}),await ve(j.buffer,b)}let Q=()=>{};const T=u.get("bundle_b");if(T&&x&&P){const o=u.get("label_a")??"A",v=u.get("label_b")??"B",f={a:{pc:P,renderer:x,atlas:z},b:null};let b="a",d=!1,g="";const C=document.createElement("button");Object.assign(C.style,{position:"fixed",top:"40px",right:"270px",zIndex:"1000",padding:"4px 8px",font:"12px system-ui, sans-serif",borderRadius:"4px",border:"1px solid #f0b060",background:"rgba(20,20,30,0.8)",color:"#f0b060",cursor:"pointer"});const E=(j="")=>{C.textContent=j||`Scene: ${b==="a"?o:v}  ⇄`;try{const se=new URL(window.location.href);b==="b"?se.searchParams.set("side","b"):se.searchParams.delete("side"),history.replaceState(history.state,"",se.toString())}catch{}},$=j=>{const se=document.createElement("div");Object.assign(se.style,{position:"fixed",left:"50%",top:"30%",transform:"translate(-50%,-50%)",maxWidth:"80vw",color:"#eee",background:"rgba(20,20,20,0.94)",border:"1px solid #60b0f0",borderRadius:"8px",font:"15px system-ui, sans-serif",padding:"16px 20px",textAlign:"center",zIndex:"10000"});const ae=document.createElement("div");ae.textContent=j,se.appendChild(ae);const ne=document.createElement("div");ne.style.marginTop="12px";const ge=(Me,Be)=>{const ke=document.createElement("button");ke.textContent=Me,Object.assign(ke.style,{margin:"0 6px",padding:"6px 14px",font:"600 13px system-ui, sans-serif",borderRadius:"6px",border:"1px solid #666",background:"#222",color:"#eee",cursor:"pointer"}),ke.onclick=Be,ne.appendChild(ke)};a.gpuAvailable&&ge("Switch to WebGPU",()=>di("webgpu")),ge("OK",()=>se.remove()),se.appendChild(ne),document.body.appendChild(se)},U=j=>{const se=j==="a"?f.a:f.b;x=se.renderer,P=se.pc,z=se.atlas,x.bgColor=[L.bg.r,L.bg.g,L.bg.b],x.setGaussianScaling(L.gaussian_scaling),x.setAtlasEnabled(L.atlas_enabled),ee.s=x.atlasStatus,b=j,E(),console.log(`[gl A/B] active = ${j}: ${P.num_points} surfels`)};Q=async()=>{if(!d){if(b==="b"){U("a");return}if(f.b){U("b");return}if(g){$(g);return}d=!0,E(`loading ${v} ...`);try{const{bundle:j}=await hs(T,(ge,Me)=>E(`loading ${v} ... ${(ge/1048576).toFixed(0)}${Me?`/${(Me/1048576).toFixed(0)}`:""} MB`));if(!j)throw new Error("bundle_b must be a .bitymi bundle");const se=await Ia(new File([j.pcBuffer],"bundle_b.ply"));let ae=null;if(j.atlasBuffer&&u.get("notex")!=="1"){const ge=Yn(j.atlasBuffer);(Qr(ge)&&y.bc7||ei(ge)&&y.astc)&&(ae=ge)}let ne;try{ne=new Ya(s,se,ae)}catch(ge){throw g=/tex3d/.test(String(ge==null?void 0:ge.message))?`“${v}” is a 3D-kernel bake (--tex3d), which only the WebGPU renderer can draw. Still showing “${o}”.`:`“${v}” cannot be shown in the WebGL2 renderer: ${(ge==null?void 0:ge.message)??ge}. Still showing “${o}”.`,new Error(g)}f.b={pc:se,renderer:ne,atlas:ae},U("b")}catch(j){console.error("[gl A/B] B failed:",j),g||(g=`Could not load “${v}”: ${(j==null?void 0:j.message)??j}`),E(),$(g)}finally{d=!1}}},C.addEventListener("click",()=>Q()),document.body.appendChild(C),E(),u.get("side")==="b"&&Q()}let c=performance.now(),p=0,h=0;const w=()=>{var o;return((o=_.isDragging)==null?void 0:o.call(_))??!1};let B=0;function D(){try{M()}catch(o){B++<5&&console.error("[gl frame] exception (render loop kept alive):",o)}requestAnimationFrame(D)}function M(){const o=performance.now(),v=Math.min((o-c)/1e3,.1);if(c=o,x&&P){if(Re){Re.t+=v/Re.duration;const g=Math.min(1,Re.t),C=g*g*(3-2*g);X.lerp(Re.fromPos,Re.toPos,C,l.position),mt.slerp(Re.fromQuat,Re.toQuat,C,ie),Mt.fromQuat(ie,F),Pt.fromMat3(F,l.rotation),l.update_buffer(),Re.t>=1&&(l.set_preset(Re.target),Re=null,V?Ge=Ee:(_.resetToCamera(),fe()))}else V&&A.length>0&&(Ge-=v,Ge<=0&&(Te=(Te+1)%A.length,be(A[Te],pe),me.textContent=`${Te+1} / ${A.length}: ${A[Te].img_name??Te}`));w()&&Re&&(Re=null),_.update(v);const f=performance.now();if(!R.needFrame(f,l,i.width,i.height,Re!==null||V||w(),`${L.atlas_enabled}`)){R.idleMs(f)>500&&(O.stats=O.stats.replace(/· \d+ fps/,"· idle"));return}const b=x.render({rotation:l.rotation,eye:l.position,fovY:l.getFovY(),width:i.width,height:i.height,zfar:l.zfar}),d=1/Math.max(v,.001);p=p===0?d:p*.9+d*.1,O.stats=`${b.toLocaleString()} / ${P.num_points.toLocaleString()} surfels · ${Math.round(p)} fps
${i.width}×${i.height} px`,h++,h===2&&Qt()}}requestAnimationFrame(D),window.__halloumiGL={stats:O,get renderer(){return x},get cameras(){return A},setPreset:oe,get atlas(){return z},pick(o,v){return P?hi(o,v,i,l,P.surfel_data):null},pickIds(o,v){if(!P)return[];const[f,b,d]=cr(o,v,l),g=l.position[0],C=l.position[1],E=l.position[2],$=P.surfel_data,U=new Uint32Array($.buffer,$.byteOffset,$.length),j=ae=>{const ne=ae>>10&31,ge=ae&1023,Me=ae&32768?-1:1;return ne===0?Me*ge*596e-10:Me*(1+ge/1024)*Math.pow(2,ne-15)},se=[];for(let ae=0;ae<P.num_points;ae++){const ne=ae*8,ge=$[ne],Me=$[ne+1],Be=$[ne+2],ke=j(U[ne+4]&65535),$e=j(U[ne+4]>>>16),Ve=j(U[ne+5]&65535),rt=j(U[ne+5]>>>16),ut=j(U[ne+6]&65535),Ne=j(U[ne+6]>>>16),it=1/Math.hypot(Ve,rt,ut,Ne),Qe=Ve*it,et=rt*it,tt=ut*it,Xe=Ne*it,pt=[1-2*(tt*tt+Xe*Xe),2*(et*tt+Qe*Xe),2*(et*Xe-Qe*tt)],ht=[2*(et*tt-Qe*Xe),1-2*(et*et+Xe*Xe),2*(tt*Xe+Qe*et)],nt=[2*(et*Xe+Qe*tt),2*(tt*Xe-Qe*et),1-2*(et*et+tt*tt)],at=f*nt[0]+b*nt[1]+d*nt[2];if(Math.abs(at)<1e-9)continue;const ct=((ge-g)*nt[0]+(Me-C)*nt[1]+(Be-E)*nt[2])/at;if(ct<=0)continue;const dt=g+ct*f-ge,Ze=C+ct*b-Me,je=E+ct*d-Be,Tt=(dt*pt[0]+Ze*pt[1]+je*pt[2])/ke,vt=(dt*ht[0]+Ze*ht[1]+je*ht[2])/$e,Rt=Tt*Tt+vt*vt,xt=l.rotation,St=l.position,$t=xt[0]*(ge-St[0])+xt[4]*(Me-St[1])+xt[8]*(Be-St[2]),Ft=xt[1]*(ge-St[0])+xt[5]*(Me-St[1])+xt[9]*(Be-St[2]),jt=xt[2]*(ge-St[0])+xt[6]*(Me-St[1])+xt[10]*(Be-St[2]),Dt=i.width,tn=i.height,Ut=.5*tn/Math.tan(l.getFovY()*.5),Je=Ut*$t/jt+(Dt-1)*.5,_n=Ut*Ft/jt+(tn-1)*.5,Ot=2*((Je-o)*(Je-o)+(_n-v)*(_n-v)),nn=j(U[ne+3]&65535),mn=j(U[ne+3]>>>16),Ht=Rt>=9?0:Math.pow(Math.max(0,1-Rt/9),mn>1e-6?mn:1),bn=Math.min(.99,nn*Math.max(Ht,Math.exp(-.5*Ot)));if(bn<1/255)continue;const sn=z?Array.from(z.rects_expanded.subarray(ae*5,ae*5+5)):null,rn=x&&x.atlasUpload?Array.from(x.atlasUpload.rects.subarray(ae*5,ae*5+5)):null;se.push({id:ae,t:+ct.toFixed(3),u:+Tt.toFixed(2),v:+vt.toFixed(2),rho2d:+Ot.toFixed(2),alpha:+bn.toFixed(3),opa:+nn.toFixed(2),tex:U[ne+7]>>>16&1,rect:sn,remap:rn})}return se.sort((ae,ne)=>ae.t-ne.t)}}}(function(){let s="dev";for(const u of Array.from(document.querySelectorAll('script[type="module"]'))){const _=u.src.match(/\/assets\/index-([0-9a-z]+)\.js$/i);if(_){s=_[1];break}}const a=document.createElement("div");a.textContent="v "+s,a.title="viewer build hash (Vite content hash of index-*.js)",Object.assign(a.style,{position:"fixed",right:"6px",bottom:"6px",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:"rgba(255,255,255,0.55)",background:"rgba(0,0,0,0.35)",padding:"2px 6px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",userSelect:"all"}),document.body.appendChild(a)})();function ur(i){const s=document.createElement("div");Object.assign(s.style,{position:"fixed",inset:"0",display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",justifyContent:"center",zIndex:"10000",color:"#eee",background:"rgba(10,10,10,0.92)",font:"15px system-ui, sans-serif",padding:"24px",textAlign:"center"});const a=document.createElement("div");a.textContent=i,s.appendChild(a);const u=document.createElement("button");u.textContent="Reload",Object.assign(u.style,{font:"600 14px system-ui, sans-serif",padding:"8px 18px",borderRadius:"6px",border:"1px solid #f0b060",background:"#222",color:"#f0b060",cursor:"pointer"}),u.onclick=()=>window.location.reload(),s.appendChild(u),document.body.appendChild(s)}let dr=!1;window.addEventListener("unhandledrejection",i=>{if(dr)return;dr=!0;const s=i.reason;ur(`The viewer failed to load: ${(s==null?void 0:s.message)??s}`)});window.addEventListener("error",i=>{var s;dr||!i.error||(dr=!0,ur(`The viewer hit an error: ${((s=i.error)==null?void 0:s.message)??i.message}`))});try{const i=performance.memory;console.log("[mem]",{deviceMemoryGB:navigator.deviceMemory??"?",hardwareConcurrency:navigator.hardwareConcurrency,jsHeapLimitMB:i?Math.round(i.jsHeapSizeLimit/2**20):"?",dpr:window.devicePixelRatio})}catch{}(async()=>{const i=document.querySelector("#webgpu-canvas");_u(i!==null);const{forced:s,stored:a}=Cd(),u=s??a??"webgpu";let l=null;if(navigator.gpu!==void 0)try{l=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})}catch(P){console.warn("[backend] requestAdapter failed:",P)}if(u==="webgl"||l===null){const P=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!P){ur(l===null?"This browser has neither WebGPU nor WebGL2.":"WebGL2 is not available in this browser.");return}console.log(`[backend] WebGL2 (${u==="webgl"?s?"?renderer=webgl":"remembered choice":"no WebGPU adapter"})`),Ua(i),Hr(()=>{var A;return(A=P.getExtension("WEBGL_lose_context"))==null?void 0:A.loseContext()}),Xa(i,P,{gpuAvailable:l!==null});return}const _=[];l.features.has("timestamp-query")&&_.push("timestamp-query"),l.features.has("texture-compression-bc")&&_.push("texture-compression-bc"),l.features.has("texture-compression-astc")&&_.push("texture-compression-astc"),l.features.has("shader-f16")&&_.push("shader-f16"),console.log("[adapter]",l.info??"(unknown)");try{const P=l.info??{};globalThis.__gpuAdapterInfo={vendor:P.vendor??"?",architecture:P.architecture??"?",device:P.device??"?",description:P.description??"?",features:Array.from(l.features).join(",")}}catch{}console.log("[adapter] features:",Array.from(l.features)),console.log("[adapter] BC7:",l.features.has("texture-compression-bc")),console.log("[adapter] ASTC:",l.features.has("texture-compression-astc")),console.log("[adapter] limits:",{maxStorageBuffersPerShaderStage:l.limits.maxStorageBuffersPerShaderStage,maxComputeWorkgroupStorageSize:l.limits.maxComputeWorkgroupStorageSize,maxBufferSize:l.limits.maxBufferSize,maxStorageBufferBindingSize:l.limits.maxStorageBufferBindingSize,maxTextureDimension2D:l.limits.maxTextureDimension2D});let y;try{y=await l.requestDevice({requiredFeatures:_,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:l.limits.maxComputeWorkgroupStorageSize,maxBufferSize:l.limits.maxBufferSize,maxStorageBufferBindingSize:l.limits.maxStorageBufferBindingSize}})}catch(P){console.warn("[backend] requestDevice failed, falling back to WebGL2:",P);const A=i.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"});if(!A){ur(`WebGPU device creation failed (${P}) and WebGL2 is not available.`);return}Ua(i),Hr(()=>{var z;return(z=A.getExtension("WEBGL_lose_context"))==null?void 0:z.loseContext()}),Xa(i,A,{gpuAvailable:!1});return}hu(y),Hr(()=>y.destroy());const x=i.getContext("webgpu");Rd(i,x,y,_)})();
