(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},2717:function(e,t,r){"use strict";var n=r(9713);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=p,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),c=(o=r(1585))&&o.__esModule?o:{default:o},s=r(8e3),u=r(5850),l=r(5646);function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(a.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?o=!1:r.add(l);else{var p=a.props[l],f=n[l]||new Set;"name"===l&&i||!f.has(p)?(f.add(p),n[l]=f):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:o})}))}var h=function(e){var t=e.children,r=i.useContext(s.AmpStateContext),n=i.useContext(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:n,inAmpMode:l.isInAmpMode(r)},t)};t.default=h},1585:function(e,t,r){"use strict";var n=r(319),a=r(4575),o=r(3913),i=(r(1506),r(2205)),c=r(8585),s=r(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return c(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var p=function(e){i(r,e);var t=u(r);function r(e){var o;return a(this,r),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=p},439:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return m}});var a,o=r(7294),i=r(9008),c=r(5893),s=function(e){var t=e.title,r=void 0===t?"My portfolio":t,n=e.description,a=void 0===n?"":n,o=e.image,s=void 0===o?"":o,u=e.children;return(0,c.jsxs)(i.default,{children:[(0,c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}),(0,c.jsx)("title",{children:r},"title"),(0,c.jsx)("meta",{name:"description",content:a}),(0,c.jsx)("meta",{property:"og:title",content:r}),(0,c.jsx)("meta",{property:"og:description",content:a}),(0,c.jsx)("meta",{property:"og:image",content:s}),(0,c.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,c.jsx)("meta",{name:"twitter:title",content:r}),(0,c.jsx)("meta",{name:"twitter:description",content:a}),(0,c.jsx)("meta",{name:"twitter:image",content:s}),u]})};!function(e){e[e.GITHUB=0]="GITHUB",e[e.LINKED_IN=1]="LINKED_IN",e[e.EMAIL=2]="EMAIL",e[e.WHATSAPP=3]="WHATSAPP"}(a||(a={}));var u={firstName:"German",lastName:"Solano",fullName:"German Solano",completeFullName:"German Andres Solano Salazar",avatarUrl:"/assets/images/avatar.jpg",cvUrl:"https://kontrolg.github.io/curriculum.pdf",primaryRole:"Frontend Developer",email:"germansdev@gmail.com",whatsapp:"+58 412 522 0585",websiteThumbnail:"/assets/images/og-thumbnail.jpg",socialMedias:[{id:a.GITHUB,name:"Github",link:"https://github.com/KontrolG"},{id:a.LINKED_IN,name:"LinkedIn",link:"https://www.linkedin.com/in/germansdev/"},{id:a.EMAIL,name:"Email",link:"mailto:germansdev@gmail.com"},{id:a.WHATSAPP,name:"WhatsApp",link:"https://wa.me/584125220585"}]},l=function(e){return u.socialMedias.find((function(t){return t.id===e}))},p=(u.avatarUrl,"Hi, I\u2019m ".concat(u.firstName),u.cvUrl,new Date("2020/09/24"),l(a.GITHUB).link,new Date("2019/12/10"),new Date("2020/09/24"),new Date("2017/06/1"),new Date("2019/06/1"),u.socialMedias,u.socialMedias,u.fullName,u.whatsapp,l(a.WHATSAPP).link,u.email,l(a.EMAIL).link,"".concat(u.fullName," \u2014 ").concat(u.primaryRole),u.websiteThumbnail,{title:"".concat(u.fullName," \u2014 ").concat(u.primaryRole),description:"I develop websites and apps for companies or individual that scalable, has great vIsual and achieve client goal for sure.",image:u.websiteThumbnail});function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(){return(0,o.useEffect)((function(){window.location.assign("https://germansdev.vercel.app/")}),[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s,d({},p))})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(439)}])},9008:function(e,t,r){e.exports=r(2717)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);