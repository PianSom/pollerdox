(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{144:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/UDM_user-318c3fb11a9240fdba65e66d552da9d7.png"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(99)),i={id:"ins1",title:"Getting started"},c={unversionedId:"ins1",id:"ins1",isDocsHomePage:!1,title:"Getting started",description:"Where to begin?",source:"@site/docs/ins1.md",slug:"/ins1",permalink:"/pollerdox/docs/ins1",version:"current",sidebar:"someSidebar",previous:{title:"Easy starting point",permalink:"/pollerdox/docs/up4"},next:{title:"Docker - using docker-compose",permalink:"/pollerdox/docs/ins2"}},s=[{value:"Where to begin?",id:"where-to-begin",children:[]},{value:"Configuring the controller",id:"configuring-the-controller",children:[]},{value:"Next steps",id:"next-steps",children:[]}],l={toc:s};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"where-to-begin"},"Where to begin?"),Object(a.b)("p",null,"The first decision to be made is Docker or not. Many users have chosen to go the Docker route, and it is perhaps worth summarising the pros and cons"),Object(a.b)("h4",{id:"advantages-of-docker"},"Advantages of Docker"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Easy to configure, as you can rely on pre-existing work"),Object(a.b)("li",{parentName:"ul"},"Easy to update"),Object(a.b)("li",{parentName:"ul"},"Reliable and well-supported")),Object(a.b)("h4",{id:"disadvantages-of-docker"},"Disadvantages of Docker"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Some performance impact (though not likely to impact Unifi Poller, there is an overhead)"),Object(a.b)("li",{parentName:"ul"},"Relies on a base system for persistence of data"),Object(a.b)("li",{parentName:"ul"},"May not be implemented on some useful platforms (eg NAS)")),Object(a.b)("p",null,"In the sections below we will first discuss Docker implementation, and then go on to look at implementing the components directly."),Object(a.b)("p",null,"In both cases, though, there will be some common configuration steps"),Object(a.b)("p",null,"The first of these is to set up the controller correctly"),Object(a.b)("h2",{id:"configuring-the-controller"},"Configuring the controller"),Object(a.b)("p",null,"The only requirement of the controller is that Unifi Poller can log in to it and extract data. For this purpose go ahead and create a new user now. Make a note of the username and password you have chosen"),Object(a.b)("p",null,"If your controller is on a UDM or UDM-Pro or UCK running UnifiOS then it is recommended that a Limited Admin user is created with Read-Only rights to the Unifi Network app"),Object(a.b)("p",null,"For example, here the username chosen is ",Object(a.b)("inlineCode",{parentName:"p"},"unifipoller")," (which is the default, and one which will be used throughout these docs):"),Object(a.b)("p",null,Object(a.b)("img",{alt:"img",src:n(144).default}),"  "),Object(a.b)("p",null,"If you are using another controller type (eg an older Cloudkey, a VM controller) then just go ahead and create a user"),Object(a.b)("h2",{id:"next-steps"},"Next steps"),Object(a.b)("p",null,"At this point you need to decide whether to use"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Docker - using ",Object(a.b)("inlineCode",{parentName:"li"},"docker-compose")),Object(a.b)("li",{parentName:"ul"},"Docker - using command line (this assumes that you have access to Grafana and InfluxDB/Prometheus)"),Object(a.b)("li",{parentName:"ul"},"Bare metal or a NAS - see the appropriate page (this assumes that you have access to Grafana and InfluxDB/Prometheus)")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Although it is a matter of choice, new users may find it easiest to use ",Object(a.b)("inlineCode",{parentName:"p"},"docker_compose")))),Object(a.b)("p",null,"Finish up by looking at the ",Object(a.b)("a",{parentName:"p",href:"/pollerdox/docs/ins10"},"Final steps")," page to do the post-install commissioning"))}u.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);