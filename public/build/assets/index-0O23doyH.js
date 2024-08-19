import{r as o,b}from"./app-DC2gQZ47.js";/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=(...e)=>e.filter((n,r,t)=>!!n&&t.indexOf(n)===r).join(" ");/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=o.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:t,className:l="",children:c,iconNode:a,...s},f)=>o.createElement("svg",{ref:f,...v,width:n,height:n,stroke:e,strokeWidth:t?Number(r)*24/Number(n):r,className:d("lucide",l),...s},[...a.map(([$,h])=>o.createElement($,h)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=(e,n)=>{const r=o.forwardRef(({className:t,...l},c)=>o.createElement(C,{ref:c,iconNode:n,className:d(`lucide-${E(e)}`,t),...l}));return r.displayName=`${e}`,r};function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(null,arguments)}function y(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function p(...e){return n=>e.forEach(r=>y(r,n))}function k(...e){return o.useCallback(p(...e),e)}const m=o.forwardRef((e,n)=>{const{children:r,...t}=e,l=o.Children.toArray(r),c=l.find(g);if(c){const a=c.props.children,s=l.map(f=>f===c?o.Children.count(a)>1?o.Children.only(null):o.isValidElement(a)?a.props.children:null:f);return o.createElement(u,i({},t,{ref:n}),o.isValidElement(a)?o.cloneElement(a,void 0,s):null)}return o.createElement(u,i({},t,{ref:n}),r)});m.displayName="Slot";const u=o.forwardRef((e,n)=>{const{children:r,...t}=e;return o.isValidElement(r)?o.cloneElement(r,{...x(t,r.props),ref:n?p(n,r.ref):r.ref}):o.Children.count(r)>1?o.Children.only(null):null});u.displayName="SlotClone";const w=({children:e})=>o.createElement(o.Fragment,null,e);function g(e){return o.isValidElement(e)&&e.type===w}function x(e,n){const r={...n};for(const t in n){const l=e[t],c=n[t];/^on[A-Z]/.test(t)?l&&c?r[t]=(...s)=>{c(...s),l(...s)}:l&&(r[t]=l):t==="style"?r[t]={...l,...c}:t==="className"&&(r[t]=[l,c].filter(Boolean).join(" "))}return{...e,...r}}const N=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],P=N.reduce((e,n)=>{const r=o.forwardRef((t,l)=>{const{asChild:c,...a}=t,s=c?m:n;return o.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.createElement(s,i({},a,{ref:l}))});return r.displayName=`Primitive.${n}`,{...e,[n]:r}},{});function V(e,n){e&&b.flushSync(()=>e.dispatchEvent(n))}export{p as $,i as _,k as a,P as b,S as c,V as d};
