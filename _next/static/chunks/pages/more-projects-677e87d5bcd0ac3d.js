(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{3198:function(e,t,r){var n=1/0,c=9007199254740991,i=17976931348623157e292,a=NaN,o="[object Arguments]",u="[object Map]",s="[object Promise]",l="[object Set]",f="[object String]",d="[object Symbol]",p="[object WeakMap]",m="[object DataView]",v=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,b=/^\[object .+?Constructor\]$/,y=/^0o[0-7]+$/i,x=/^(?:0|[1-9]\d*)$/,g="\\u0300-\\u036f\\ufe20-\\ufe23",O="[\\ud800-\\udfff]",w="["+g+"\\u20d0-\\u20f0]",N="\\ud83c[\\udffb-\\udfff]",_="[^\\ud800-\\udfff]",P="(?:\\ud83c[\\udde6-\\uddff]){2}",S="[\\ud800-\\udbff][\\udc00-\\udfff]",E="(?:"+w+"|"+N+")"+"?",k="[\\ufe0e\\ufe0f]?",F=k+E+("(?:\\u200d(?:"+[_,P,S].join("|")+")"+k+E+")*"),D="(?:"+[_+w+"?",w,P,S,O].join("|")+")",T=RegExp(N+"(?="+N+")|"+D+F,"g"),Z=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),C=parseInt,A="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,M="object"==typeof self&&self&&self.Object===Object&&self,$=A||M||Function("return this")();function R(e,t){return function(e,t){for(var r=-1,n=e?e.length:0,c=Array(n);++r<n;)c[r]=t(e[r],r,e);return c}(t,(function(t){return e[t]}))}function I(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function V(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function B(e){return function(e){return Z.test(e)}(e)?function(e){return e.match(T)||[]}(e):function(e){return e.split("")}(e)}var U,W,Y=Function.prototype,X=Object.prototype,L=$["__core-js_shared__"],z=function(){var e=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),G=Y.toString,H=X.hasOwnProperty,K=X.toString,q=RegExp("^"+G.call(H).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),J=$.Symbol,Q=J?J.iterator:void 0,ee=X.propertyIsEnumerable,te=Math.floor,re=(U=Object.keys,W=Object,function(e){return U(W(e))}),ne=Math.random,ce=be($,"DataView"),ie=be($,"Map"),ae=be($,"Promise"),oe=be($,"Set"),ue=be($,"WeakMap"),se=ge(ce),le=ge(ie),fe=ge(ae),de=ge(oe),pe=ge(ue);function me(e,t){var r=we(e)||function(e){return function(e){return Se(e)&&Ne(e)}(e)&&H.call(e,"callee")&&(!ee.call(e,"callee")||K.call(e)==o)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,c=!!n;for(var i in e)!t&&!H.call(e,i)||c&&("length"==i||xe(i,n))||r.push(i);return r}function ve(e){return!(!Pe(e)||function(e){return!!z&&z in e}(e))&&(_e(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(r){}return t}(e)?q:b).test(ge(e))}function he(e){if(!function(e){var t=e&&e.constructor,r="function"==typeof t&&t.prototype||X;return e===r}(e))return re(e);var t=[];for(var r in Object(e))H.call(e,r)&&"constructor"!=r&&t.push(r);return t}function je(e,t){return e+te(ne()*(t-e+1))}function be(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return ve(r)?r:void 0}var ye=function(e){return K.call(e)};function xe(e,t){return!!(t=null==t?c:t)&&("number"==typeof e||x.test(e))&&e>-1&&e%1==0&&e<t}function ge(e){if(null!=e){try{return G.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Oe(e,t,r){var c,o,s,p=-1,m=function(e){if(!e)return[];if(Ne(e))return function(e){return"string"==typeof e||!we(e)&&Se(e)&&K.call(e)==f}(e)?B(e):function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}(e);if(Q&&e[Q])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Q]());var t=ye(e);return(t==u?I:t==l?V:Ee)(e)}(e),b=m.length,x=b-1;for((r?function(e,t,r){if(!Pe(r))return!1;var n=typeof t;return!!("number"==n?Ne(r)&&xe(t,r.length):"string"==n&&t in r)&&function(e,t){return e===t||e!==e&&t!==t}(r[t],e)}(e,t,r):void 0===t)?t=1:(c=function(e){var t=function(e){return e?(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||Se(e)&&K.call(e)==d}(e))return a;if(Pe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Pe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(v,"");var r=j.test(e);return r||y.test(e)?C(e.slice(2),r?2:8):h.test(e)?a:+e}(e))===n||e===-1/0?(e<0?-1:1)*i:e===e?e:0:0===e?e:0}(e),r=t%1;return t===t?r?t-r:t:0}(t),o=0,s=b,c===c&&(void 0!==s&&(c=c<=s?c:s),void 0!==o&&(c=c>=o?c:o)),t=c);++p<t;){var g=je(p,x),O=m[g];m[g]=m[p],m[p]=O}return m.length=t,m}(ce&&ye(new ce(new ArrayBuffer(1)))!=m||ie&&ye(new ie)!=u||ae&&ye(ae.resolve())!=s||oe&&ye(new oe)!=l||ue&&ye(new ue)!=p)&&(ye=function(e){var t=K.call(e),r="[object Object]"==t?e.constructor:void 0,n=r?ge(r):void 0;if(n)switch(n){case se:return m;case le:return u;case fe:return s;case de:return l;case pe:return p}return t});var we=Array.isArray;function Ne(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=c}(e.length)&&!_e(e)}function _e(e){var t=Pe(e)?K.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function Pe(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Se(e){return!!e&&"object"==typeof e}function Ee(e){return e?R(e,function(e){return Ne(e)?me(e):he(e)}(e)):[]}e.exports=function(e){return Oe(e,4294967295)}},8262:function(e,t,r){"use strict";r.d(t,{l:function(){return M}});var n=r(5861),c=r(7757),i=r.n(c),a=r(6854),o=r(5893),u=/\s+/;function s(e){var t=e.text,r=e.components,n=void 0===r?{}:r;return(0,o.jsx)(o.Fragment,{children:Object.entries(n).reduce((function(e,t){var r=(0,a.Z)(t,2),n=r[0],c=r[1];return e.map((function(e){return e==="{{".concat(n,"}}")?c:e}))}),t.split(u)).map((function(e){return(0,o.jsxs)(o.Fragment,{children:[e," "]})}))})}var l=r(4184),f=r.n(l),d=r(1451),p=r(4942),m=r(7294);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j="SET_FIELD_VALUE",b="SET_FIELD_TOUCHED",y="SET_FIELD_ERROR",x="FORM_SUBMITTED",g={errors:{},values:{},touched:{}},O=function(e,t,r){return h(h({},e),{},(0,p.Z)({},t,h(h({},e[t]),{},(0,p.Z)({},r.name,r.value))))};function w(e,t){var r=t.type,n=t.payload;switch(r){case j:return O(e,"values",n);case b:return O(e,"touched",n);case y:return O(e,"errors",n);case x:return h(h({},e),{},{touched:Object.assign.apply(Object,[{}].concat((0,d.Z)(Object.keys(e.values).map((function(e){return(0,p.Z)({},e,!0)})))))});default:return e}}var N=function(e){var t=e.initialValues,r=e.validations,n=e.validateOnChange,c=void 0===n||n,i=e.onSubmit,o=(0,m.useReducer)(w,function(e){return e?h(h({},g),{},{values:h({},e)}):g}(t)),u=o[0],s=o[1];function l(e,t){var n=null===r||void 0===r?void 0:r[e];if(!n)return!0;if("function"!==typeof n)throw new TypeError("The validation for field '".concat(e,"' is not a valid function."));var c=n(null!==t&&void 0!==t?t:u.values[e],u);return d(e,c),!c}function f(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c;s({type:j,payload:{name:e,value:t}}),r&&l(e,t)}function d(e,t){s({type:y,payload:{name:e,value:t}})}function p(){if(!r)return!0;var e=!0;return Object.keys(u.values).forEach((function(t){l(t)||(e=!1)})),e}function v(e){var t;if(null===e||void 0===e||null===(t=e.preventDefault)||void 0===t||t.call(e),s({type:x}),p())return null===i||void 0===i?void 0:i(u.values)}return h(h({},u),{},{setFieldValue:f,onChangeField:function(e){var t=e.target;f(t.name,t.value)},setFieldTouched:function(e,t){s({type:b,payload:{name:e,value:t}})},setFieldError:d,onFocusField:function(e){var t=e.target;s({type:b,payload:{name:t.name,value:!0}})},validateFields:p,validateField:l,getTouchedFieldValues:function(){return Object.entries(u.values).reduce((function(e,t){var r=(0,a.Z)(t,2),n=r[0],c=r[1];return u.touched[n]&&(e[n]=c),e}),{})},validateBeforeSubmit:v,submitForm:v})},_=r(6209),P="".concat("https://my-personal-portfolio-backend.herokuapp.com","/api/lead-form-submissions");function S(e){if(e.ok)return e;throw new Error(e.statusText)}function E(e){return(0,_.Z)((function(){return fetch("".concat(P,"/"),{method:"POST",body:JSON.stringify({data:e}),headers:{"Content-type":"application/json"}}).then(S)}),{retries:10,minTimeout:100,maxTimeout:1e3})}var k=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"idle";return(0,m.useState)(e)}(),t=(0,a.Z)(e,2),r=t[0],c=t[1];function o(){return(o=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c("loading"),e.prev=1,e.next=4,t;case 4:return r=e.sent,c("completed"),e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),c("rejected"),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return{handle:function(e){return o.apply(this,arguments)},status:r,setStatus:c}},F=r(8827),D=r(8144),T=r.n(D),Z=r(9583);function C(e){var t=e.baseText,r=void 0===t?"Guardar":t,n=e.status,c=void 0===n?"idle":n,i=null;return"loading"===c&&(i=(0,o.jsx)(Z.koH,{className:T().Spinner})),"completed"===c&&(i=(0,o.jsx)(Z.l_A,{className:T().Check})),(0,o.jsxs)("span",{className:T().Wrapper,children:[(0,o.jsx)("span",{className:f()(T().Text,"idle"===c&&T().TextIdle),children:r}),i]})}function A(e){return{name:"",email:"",subject:"",message:"",location:e.location}}function M(e){var t=k(),r=t.handle,c=t.status,a=(0,m.useState)(null),u=a[0],l=a[1],d="loading"===c,p="completed"===c,v=N({initialValues:A(e),onSubmit:function(e){return(0,n.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d){t.next=2;break}return t.abrupt("return");case 2:return l(null),t.prev=3,t.next=6,r(E(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),l(null===t.t0||void 0===t.t0?void 0:t.t0.toString());case 11:case"end":return t.stop()}}),t,null,[[3,8]])})))()}}),h=v.values,j=v.onChangeField,b=v.validateBeforeSubmit,y=(0,o.jsx)("a",{href:e.whatsapp.url,children:e.whatsapp.text}),x=(0,o.jsx)("a",{href:e.email.url,children:e.email.text});return(0,o.jsx)("div",{className:f()("contact-form--1",e.className),children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row row--35 align-items-center",children:[(0,o.jsxs)("div",{className:"col-lg-6 order-2 order-lg-1",children:[(0,o.jsxs)("div",{className:"section-title text-left mb--50",children:[(0,o.jsx)("h2",{className:"title",children:e.title}),(0,o.jsx)("p",{className:"description",children:(0,o.jsx)(s,{text:e.description,components:{phoneNumber:y,emailAddress:x}})})]}),(0,o.jsx)("div",{className:"form-wrapper",children:(0,o.jsx)(F.Z,{it:!p,orElse:(0,o.jsxs)("div",{className:"section-title",children:[(0,o.jsx)("h3",{className:"title",children:e.submitSuccessMessage.title}),(0,o.jsx)("p",{className:"description",children:e.submitSuccessMessage.description})]}),children:(0,o.jsxs)("form",{onSubmit:b,children:[(0,o.jsx)("label",{htmlFor:"item01",children:(0,o.jsx)("input",{id:"item01",type:"text",name:"name",value:h.name,onChange:j,placeholder:"Your Name"})}),(0,o.jsx)("label",{htmlFor:"item02",children:(0,o.jsx)("input",{type:"email",name:"email",id:"item02",value:h.email,onChange:j,placeholder:"Your email *",required:!0})}),(0,o.jsx)("label",{htmlFor:"item03",children:(0,o.jsx)("input",{id:"item03",type:"text",name:"subject",value:h.subject,onChange:j,placeholder:"Write a Subject"})}),(0,o.jsx)("label",{htmlFor:"item04",children:(0,o.jsx)("textarea",{id:"item04",name:"message",value:h.message,onChange:j,placeholder:"Your Message"})}),(0,o.jsx)("button",{className:"rn-button-style--2 btn-solid",type:"submit",name:"submit",children:(0,o.jsx)(C,{baseText:"Submit",status:c})}),(0,o.jsx)(F.Z,{it:Boolean(u),children:(0,o.jsx)("p",{className:"mt-3 text-danger",children:u})})]})})})]}),(0,o.jsx)("div",{className:"col-lg-6 order-1 order-lg-2",children:(0,o.jsx)("div",{className:"thumbnail mb_md--30 mb_sm--30",children:(0,o.jsx)("img",{src:"".concat(e.image),alt:e.imageAlt})})})]})})})}},7197:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(4942),c=r(5625),i=r(8262),a=r(4805),o=r(5136),u=r(1451),s=r(9723),l=r(4184),f=r.n(l),d=r(3198),p=r.n(d),m=r(7294),v=r(5893);function h(e){var t=e.className,r=e.category,n=e.project;return(0,v.jsx)("div",{className:t,children:(0,v.jsx)("div",{className:"item-portfolio-static",children:(0,v.jsx)("div",{children:(0,v.jsxs)("div",{className:"portfolio-static",children:[(0,v.jsx)("div",{className:"thumbnail-inner",children:(0,v.jsx)("div",{className:"thumbnail",children:(0,v.jsx)("a",{href:n.previewUrl,target:"_blank",rel:"noreferrer",children:(0,v.jsx)("img",{src:n.imageUrl,alt:"".concat(n.title," thumbnail")})})})}),(0,v.jsx)("div",{className:"content",children:(0,v.jsxs)("div",{className:"inner",children:[(0,v.jsx)("p",{children:r}),(0,v.jsx)("h4",{children:(0,v.jsx)("a",{href:n.previewUrl,target:"_blank",rel:"noreferrer",children:n.title})})]})})]})})})})}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e){var t,r,n=(0,m.useState)((function(){var t;return null===(t=e.tabs)||void 0===t?void 0:t.reduce((function(e,t){var r=t.title,n=t.items;return e.push.apply(e,(0,u.Z)(null===n||void 0===n?void 0:n.map((function(e){return b(b({},e),{},{category:r})})))),e}),[])})),c=n[0],i=n[1];return(0,m.useEffect)((function(){i((function(e){return p()(e)}))}),[]),(0,v.jsx)("div",{className:f()("wrapper plr--70 plr_sm--30 plr_md--30",e.className),children:(0,v.jsx)("div",{children:(0,v.jsxs)(s.mQ,{children:[(0,v.jsx)("div",{className:"row text-center",children:(0,v.jsx)("div",{className:"col-lg-12",children:(0,v.jsx)("div",{className:"tablist-inner",children:(0,v.jsxs)(s.td,{className:"pv-tab-button text-center mt--0",children:[(0,v.jsx)(s.OK,{children:(0,v.jsx)("span",{children:"All"})}),null===(t=e.tabs)||void 0===t?void 0:t.map((function(e){var t=e.title;return(0,v.jsx)(s.OK,{children:(0,v.jsx)("span",{children:t})},t)}))]})})})}),(0,v.jsx)(s.x4,{className:"row row--35",children:c.map((function(t){return(0,v.jsx)(h,{category:t.category,className:e.columnClassName,project:t},t.title)}))}),null===(r=e.tabs)||void 0===r?void 0:r.map((function(t){var r=t.title,n=t.items;return(0,v.jsx)(s.x4,{className:"row row--35",children:null===n||void 0===n?void 0:n.map((function(t){return(0,v.jsx)(h,{category:r,className:e.columnClassName,project:t},t.title)}))},r)}))]})})})}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(){return(0,v.jsxs)(a.X,{children:[(0,v.jsx)("div",{className:"ptb--120 bg_color--1",id:"projects-tabs",children:(0,v.jsx)(y,g({className:"mt-5 mt-md-0"},o.wo))}),(0,v.jsx)("div",{id:"contact",className:"fix-scroll rn-contact-area ptb--120 bg_color--5",children:(0,v.jsx)(i.l,g(g({},o.PX),{},{location:"more-projects-contact-form"}))})]})}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c.Z,N({},o.FY)),(0,v.jsx)(O,{})]})}},5225:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/more-projects",function(){return r(7197)}])},8144:function(e){e.exports={Wrapper:"styles_Wrapper__bXh5Y",Text:"styles_Text__u1ka7",Spinner:"styles_Spinner__c5h1B",Check:"styles_Check__rYkaF",rotate:"styles_rotate__ix2sg",appear:"styles_appear__3Tgv4"}}},function(e){e.O(0,[445,979,302,580,774,888,179],(function(){return t=5225,e(e.s=t);var t}));var t=e.O();_N_E=t}]);