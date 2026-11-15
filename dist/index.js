"use strict";var j=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var h=j(function(L,R){
function D(e,r,s,q,o,i,f,a,g,p){var v,c,u,l,m,y,n,t,x,P;for(v=r.data,c=o.data,u=a.data,l=r.accessors[0],m=o.accessors[0],y=a.accessors[1],n=q,t=f,x=p,P=0;P<e;P++)y(u,x,l(v,n)*m(c,t)),n+=s,t+=i,x+=g;return a}R.exports=D
});var M=j(function(Q,z){
var k=require('@stdlib/array-base-arraylike2object/dist'),E=h(),b=5;function F(e,r,s,q,o,i,f,a,g,p){var v,c,u,l,m,y,n,t;if(e<=0)return a;if(l=k(r),m=k(o),y=k(a),l.accessorProtocol||m.accessorProtocol||y.accessorProtocol)return E(e,l,s,q,m,i,f,y,g,p),a;if(v=q,c=f,u=p,s===1&&i===1&&g===1){if(n=e%b,n>0)for(t=0;t<n;t++)a[u]=r[v]*o[c],v+=s,c+=i,u+=g;if(e<b)return a;for(t=n;t<e;t+=b)a[u]=r[v]*o[c],a[u+1]=r[v+1]*o[c+1],a[u+2]=r[v+2]*o[c+2],a[u+3]=r[v+3]*o[c+3],a[u+4]=r[v+4]*o[c+4],v+=b,c+=b,u+=b;return a}for(t=0;t<e;t++)a[u]=r[v]*o[c],v+=s,c+=i,u+=g;return a}z.exports=F
});var B=j(function(S,A){
var O=require('@stdlib/strided-base-stride2offset/dist'),G=M();function H(e,r,s,q,o,i,f){return G(e,r,s,O(e,s),q,o,O(e,o),i,f,O(e,f))}A.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),J=M();I(C,"ndarray",J);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
