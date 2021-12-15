"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[486],{3503:function(e,t,r){var i=r(5893),a=(r(7294),r(9008));t.Z=function(e){var t=e.title,r=void 0===t?"My portfolio":t,n=e.description,o=void 0===n?"":n,s=e.image,l=void 0===s?"":s,c=e.children;return(0,i.jsxs)(a.default,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}),(0,i.jsx)("title",{children:r},"title"),(0,i.jsx)("meta",{name:"description",content:o}),(0,i.jsx)("meta",{property:"og:title",content:r}),(0,i.jsx)("meta",{property:"og:description",content:o}),(0,i.jsx)("meta",{property:"og:image",content:l}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:r}),(0,i.jsx)("meta",{name:"twitter:description",content:o}),(0,i.jsx)("meta",{name:"twitter:image",content:l}),c]})}},9284:function(e,t,r){var i=r(5893);t.Z=function(e){var t=e.it,r=e.children,a=e.orElse,n=void 0===a?null:a;return(0,i.jsx)(i.Fragment,{children:t?r:n})}},6560:function(e,t,r){r.d(t,{X:function(){return I}});var i,a=r(5893),n=r(7294),o=r(3019),s=r(9583);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=(l(i={},o.f.LINKED_IN,(0,a.jsx)(s.BUd,{})),l(i,o.f.GITHUB,(0,a.jsx)(s.hJX,{})),l(i,o.f.EMAIL,(0,a.jsx)(s.uWG,{})),l(i,o.f.WHATSAPP,(0,a.jsx)(s.xpo,{})),i);function u(e){var t=e.socialMedia;return c[t]||null}var m=r(4184),d=r.n(m),p=r(1664);function g(e){var t;return(0,a.jsx)("div",{className:d()("footer-style-2 ptb--30 bg_color--1",e.className),"data-black-overlay":"6",children:(0,a.jsx)("div",{className:"wrapper plr--50 plr_sm--20",children:(0,a.jsxs)("div",{className:"row align-items-center justify-content-between",children:[(0,a.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12",children:(0,a.jsx)("div",{className:"inner",children:(0,a.jsx)("div",{className:"logo text-center text-sm-left mb_sm--20",children:(0,a.jsx)(p.default,{href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:e.logo,alt:"Logo images"})})})})})}),(0,a.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12",children:(0,a.jsx)("div",{className:"inner text-center",children:(0,a.jsx)("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle",children:null===(t=e.socialMedias)||void 0===t?void 0:t.map((function(e){var t=e.id,r=e.link;return(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:(0,a.jsx)(u,{socialMedia:t})})},t)}))})})}),(0,a.jsx)("div",{className:"col-lg-4 col-md-12 col-sm-12 col-12",children:(0,a.jsx)("div",{className:"inner text-lg-right text-center mt_md--20 mt_sm--20",children:(0,a.jsx)("div",{className:"text",children:(0,a.jsx)("p",{children:"Copyright \xa9 ".concat((new Date).getFullYear(),". All Rights Reserved.")})})})})]})})})}var h=r(257),f=r(6893),v=r(9986);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?b(e):t}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=w(e);if(t){var a=w(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return x(this,r)}}var S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(o,e);var t,r,i,n=N(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=n.call(this,e)).menuTrigger=t.menuTrigger.bind(b(t)),t.CLoseMenuTrigger=t.CLoseMenuTrigger.bind(b(t)),t.stickyHeader=t.stickyHeader.bind(b(t)),t}return t=o,(r=[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",(function(){window.scrollY>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky")}));var e=document.querySelectorAll(".has-droupdown > a");for(var t in e)e.hasOwnProperty(t)&&(e[t].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")})}},{key:"render",value:function(){var e,t,r;return(0,a.jsx)("header",{className:d()("header-area header-style-two header--fixed",this.props.color,this.props.className),children:(0,a.jsxs)("div",{className:"header-wrapper",children:[(0,a.jsxs)("div",{className:"header-left d-flex align-items-center",children:[(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)("a",{href:this.props.homeLink,children:(0,a.jsx)("img",{src:this.props.logo,alt:"Digital Agency"})})}),(0,a.jsx)("nav",{className:"mainmenunav d-lg-block ml--50",children:(0,a.jsx)(v.Z,{className:"mainmenu",items:null===(e=this.props.navItems)||void 0===e?void 0:e.map((function(e){return e.id})),currentClassName:"is-current",offset:-200,children:null===(t=this.props.navItems)||void 0===t?void 0:t.map((function(e){var t=e.id,r=e.name;return(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/#".concat(t),children:r})},t)}))})})]}),(0,a.jsxs)("div",{className:"header-right",children:[(0,a.jsx)("div",{className:"social-share-inner",children:(0,a.jsx)("ul",{className:"social-share social-style--2 color-black d-flex justify-content-start liststyle",children:null===(r=this.props.socialMedias)||void 0===r?void 0:r.map((function(e){var t=e.id,r=e.link;return(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:(0,a.jsx)(u,{socialMedia:t})})},t)}))})}),(0,a.jsx)("div",{className:"header-btn",children:(0,a.jsx)("a",{className:this.props.ctaButton.className,href:this.props.ctaButton.url,target:this.props.ctaButton.target,children:(0,a.jsx)("span",{children:this.props.ctaButton.text})})}),(0,a.jsx)("div",{className:"humberger-menu d-block d-lg-none pl--20",children:(0,a.jsx)("span",{onClick:this.menuTrigger,className:"menutrigger text-white",children:(0,a.jsx)(f.cur,{})})}),(0,a.jsx)("div",{className:"close-menu d-block d-lg-none",children:(0,a.jsx)("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger",children:(0,a.jsx)(f.q5L,{})})})]})]})})}}])&&j(t.prototype,r),i&&j(t,i),o}(n.Component),U=r(5269),T=r(9284);function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){M(e,t,r[t])}))}return e}function I(e){var t=e.children,r=e.showHeader,i=void 0===r||r,n=e.showFooter,o=void 0===n||n;return(0,a.jsxs)("div",{className:"active-dark",children:[(0,a.jsx)(T.Z,{it:i,children:(0,a.jsx)(S,P({},U.Fs))}),t,(0,a.jsx)(T.Z,{it:o,children:(0,a.jsx)(g,P({},U.Mv))}),(0,a.jsx)("div",{className:"backto-top",children:(0,a.jsx)(h.Z,{showUnder:160,children:(0,a.jsx)(f.rH8,{})})})]})}},5269:function(e,t,r){r.d(t,{p$:function(){return c},PX:function(){return d},yU:function(){return s},Mv:function(){return m},Fs:function(){return u},rP:function(){return o},FY:function(){return f},v6:function(){return g},Ht:function(){return h},cn:function(){return l},wo:function(){return p}});var i=r(3019),a={firstName:"German",lastName:"Solano",fullName:"German Solano",completeFullName:"German Andres Solano Salazar",avatarUrl:"/assets/images/avatar.jpg",cvUrl:"https://kontrolg.github.io/curriculum.pdf",primaryRole:"Frontend Developer",email:"germansdev@gmail.com",whatsapp:"+58 412 522 0585",websiteThumbnail:"/assets/images/og-thumbnail.jpg",socialMedias:[{id:i.f.GITHUB,name:"Github",link:"https://github.com/KontrolG"},{id:i.f.LINKED_IN,name:"LinkedIn",link:"https://www.linkedin.com/in/germansdev/"},{id:i.f.EMAIL,name:"Email",link:"mailto:germansdev@gmail.com"},{id:i.f.WHATSAPP,name:"WhatsApp",link:"https://wa.me/584125220585"}]},n=function(e){return a.socialMedias.find((function(t){return t.id===e}))},o={avatarUrl:a.avatarUrl,textAlignment:"left",title:{greeting:"Hi, I\u2019m ".concat(a.firstName),role:"Developer",roleNiches:["Web","Frontend","JS"],final:"based in VEN."},buttons:[{link:a.cvUrl,text:"Download CV",className:"btn-solid",target:"_blank"},{link:"#expertise",text:"Explore more",className:"btn-primary-color"}]},s={title:"My Expertise",description:"I develop websites and apps for companies or individual that scalable, has great vIsual and achieve client goal for sure.",checkListItems:["Use top-notch technologies.","Use latest UI libraries.","Build your app or website looks fresh and modern.","Deep understanding of software architecture and server technologies."],technologies:[{logo:"/assets/images/node-logo-dark.png",name:"NodeJS",url:"https://nodejs.org/es/"},{logo:"/assets/images/react-logo.png",name:"ReactJS",url:"https://reactjs.org/"},{logo:"/assets/images/firebase-logo.png",name:"Firebase",url:"https://firebase.google.com/"},{logo:"/assets/images/next-js-logo-dark.png",name:"NextJS",url:"https://nextjs.org/"},{logo:"/assets/images/mongo-db-logo.png",name:"Mongo DB",url:"https://www.mongodb.com/"}]},l={title:"My Projects",projects:[{name:"Facebook Clone",description:"Facebook clone created with ReactJS and Firebase, applying all the main concepts in the most popular library in the creation of user interfaces. Deployed to Heroku and built from scratch using Webpack and Babel.",year:2020,previewUrl:"https://facebook-clone-reactjs.herokuapp.com/",repositoryUrl:"https://github.com/KontrolG/facebook-clone",previewButtonText:"Preview",repositoryButtonText:"Source code",thumbnail:"/assets/images/facebook-clone-preview.jpg",tags:["reactjs","firebase","heroku"]},{name:"Marvel Searcher",description:"Marvel characters searcher made in ReactJS, using Styled-components, Context API and Hooks together with Sass. Configured to run in different environments (development, staging and production).",year:2020,previewUrl:"https://marvel-searcher-reactjs.herokuapp.com/",repositoryUrl:"https://github.com/KontrolG/marvel-searcher",previewButtonText:"Preview",repositoryButtonText:"Source code",thumbnail:"/assets/images/marvel-searcher-preview.jpg",tags:["sass","marvel-api","styled-components"]},{name:"Card game",description:"UNO-based card game, made only with HTML5, CSS3 and Javascript. Play against the CPU using action cards as a reverse, lose turn, change color, and more.",year:2019,previewUrl:"https://kontrolg.github.io/card-game",repositoryUrl:"https://github.com/KontrolG/card-game",previewButtonText:"Preview",repositoryButtonText:"Source code",thumbnail:"/assets/images/card-game-preview.jpg",tags:["vanilla","gaming","npc"]}],moreProjectsLink:{text:"More projects",url:"/more-projects"}},c={title:"About Me",description:"Self-taught programmer with practical experience in developing web applications with ReactJS, willing to learn and master emerging technologies in the Frontend field. Javascript / ES9, HTML5 and CSS3 specialist.",tabs:[{title:"Experience",items:[{link:"https://www.linkedin.com/company/64713065/",title:"Frontend Developer",subtitle:"Famosos Inc.",start:new Date("2020/09/24"),end:null,totalTime:"1 year 4 months",additionalInfo:["I contributed to 300% reduction in the loading time of their main website, managing to double the GMV of the product.","Co-create utils and reusable components that improved development times and decreased the boilerplate code.","I collaborated on 4 web applications adding new ones functionalities and troubleshooting."]}]},{title:"Main skills",items:[{title:"ReactJS & Redux",subtitle:"UI Library"},{title:"NextJS",subtitle:"Server-side rendering Framework"},{title:"Javascript & Typescript",subtitle:"Programming Language"},{title:"HTML5 & CSS3",subtitle:"Web development"},{title:"Sass & Bootstrap",subtitle:"Styling"},{title:"Cypress & Enzyme",subtitle:"Testing"},{title:"NodeJS & ExpressJS",subtitle:"RESTFul APIs"},{title:"Firebase",subtitle:"Database, Storage and Authentication"}]},{title:"Education & Certification",items:[{link:n(i.f.GITHUB).link,title:"Web development",subtitle:"Self-taught",start:new Date("2019/12/10"),end:new Date("2020/09/24"),totalTime:"10 months",additionalInfo:["More than 800 hours of practicing.","Multiples projects made."]},{link:"http://uptpweb.sytes.net/uptp/",title:"Associate Degree",subtitle:'UPTP "JJ Montilla"',start:new Date("2017/06/1"),end:new Date("2019/06/1"),totalTime:"2 years",additionalInfo:["Web programming basics.","Application of software engineering."]}]}]},u={homeLink:"/",logo:"/assets/images/logo-symbol-dark.svg",color:"color-black",socialMedias:a.socialMedias,ctaButton:{text:"Contact me",url:"/#contact",target:"_self",className:"rn-btn"},navItems:[{id:"home",name:"Home"},{id:"expertise",name:"Expertise"},{id:"portfolio",name:"Portfolio"},{id:"about",name:"About"},{id:"contact",name:"Contact"}]},m={logo:"/assets/images/logo.svg",socialMedias:a.socialMedias},d={image:"/assets/images/about-9.jpg",title:"Contact Me.",imageAlt:a.fullName,submitSuccessMessage:{title:"Thank you!",description:"I will get back to you as soon as possible."},whatsapp:{text:a.whatsapp,url:n(i.f.WHATSAPP).link},email:{text:a.email,url:n(i.f.EMAIL).link},description:"I am available for remote work. Connect with me via Whatsapp: {{phoneNumber}} or email: {{emailAddress}}"},p={columnClassName:"col-lg-4 col-md-6 col-sm-6 col-12",tabs:[{title:"Web apps",items:[{title:"Facebook Clone",previewUrl:"https://facebook-clone-reactjs.herokuapp.com/",imageUrl:"/assets/images/facebook-clone-preview.jpg"},{title:"Marvel Searcher",previewUrl:"https://marvel-searcher-reactjs.herokuapp.com/",imageUrl:"/assets/images/marvel-searcher-preview.jpg"},{title:"Nutrimate",previewUrl:"https://github.com/KontrolG/nutrimate",imageUrl:"/assets/images/nutrimate-preview.jpg"},{title:"TodoList",previewUrl:"https://kontrolg.github.io/todo-list/",imageUrl:"/assets/images/todo-list-preview.jpg"},{title:"Video Player",previewUrl:"https://kontrolg.github.io/video-player-controls/",imageUrl:"/assets/images/video-player-preview.jpg"}]},{title:"Games",items:[{title:"Card game",previewUrl:"https://kontrolg.github.io/card-game",imageUrl:"/assets/images/card-game-preview.jpg"},{title:"Jumping Moon",previewUrl:"https://jumping-moon.herokuapp.com/",imageUrl:"/assets/images/jumping-moon-preview.jpg"},{title:"Breakout",previewUrl:"https://kontrolg.github.io/breakout",imageUrl:"/assets/images/breakout-preview.jpg"},{title:"Blackjack",previewUrl:"https://kontrolg.github.io/mini-blackjack",imageUrl:"/assets/images/blackjack-preview.jpg"}]},{title:"Mobile apps",items:[{title:"Rock, Paper, Scissors, Lizard, Spock",previewUrl:"https://github.com/KontrolG/rock-paper-scissors-native",imageUrl:"/assets/images/rock-paper-scissors-preview.jpg"}]}]},g={title:"404!",subtitle:"Page not found",message:"The page you were looking for could not be found.",backToHomeButton:{text:"Back To Homepage",url:"/"}},h={title:"".concat(a.fullName," \u2014 ").concat(a.primaryRole),description:g.message,image:a.websiteThumbnail},f={title:"".concat(a.fullName," \u2014 ").concat(a.primaryRole),description:s.description,image:a.websiteThumbnail}},3019:function(e,t,r){var i,a;r.d(t,{f:function(){return i}}),(a=i||(i={}))[a.GITHUB=0]="GITHUB",a[a.LINKED_IN=1]="LINKED_IN",a[a.EMAIL=2]="EMAIL",a[a.WHATSAPP=3]="WHATSAPP"}}]);