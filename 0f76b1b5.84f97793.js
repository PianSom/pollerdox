(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(f,l(l({ref:t},u),{},{components:n})):o.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(100)),i={id:"up2",title:"How it works"},l={unversionedId:"up2",id:"up2",isDocsHomePage:!1,title:"How it works",description:"Overview",source:"@site/docs/up2.md",slug:"/up2",permalink:"/pollerdox/documentation/docs/up2",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/pollerdox/documentation/docs/up1"},next:{title:"FAQs",permalink:"/pollerdox/documentation/docs/up3"}},c=[{value:"Overview",id:"overview",children:[]},{value:"What platform?",id:"what-platform",children:[]},{value:"I&#39;m convinced! How do I start?",id:"im-convinced-how-do-i-start",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Unifi Poller pulls data from a controller every 30 seconds with an API, and then either"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"posts it to an InfluxDB database, or"),Object(a.b)("li",{parentName:"ul"},"converts it in to a Prometheus export")),Object(a.b)("p",null,"Once it is in a database, Grafana is used to pull information and display it graphically."),Object(a.b)("p",null,"So the information flow is"),Object(a.b)("p",null,"| Controller |  ----\x3e | ",Object(a.b)("strong",{parentName:"p"},"Unifi Poller")," | ----\x3e | Database | ----\x3e | Grafana |"),Object(a.b)("p",null,"Each of these four components needs to be set up correctly in order to get the dashboards to work."),Object(a.b)("p",null,"Unifi Poller is very flexible in its configuration options, which can be confusing at first. This documentation sets out many options for installing Unifi Poller alongside a database and Grafana, though using a pre-existing setup is, of course, possible."),Object(a.b)("h2",{id:"what-platform"},"What platform?"),Object(a.b)("p",null,"Unifi Poller itself can be run on bare metal (Windows, OSX, FreeBSD, Linux, ...) or using Docker."),Object(a.b)("p",null,"In the Installation section below you will find instructions on how to install Unifi Poller. Many people find that the easiest way to get started - even with little or no prior experience - is with Docker. But the choice is yours."),Object(a.b)("p",null,"If you already have an instance of a suitable database or Grafana in use you will probably find it most efficient to use that, and will need to amend the installation appropriately."),Object(a.b)("h2",{id:"im-convinced-how-do-i-start"},"I'm convinced! How do I start?"),Object(a.b)("p",null,"Have a look at the ",Object(a.b)("a",{parentName:"p",href:"/pollerdox/documentation/docs/ins1"},"Getting Started")," page."),Object(a.b)("p",null,"(Or, for an easy step-by-step, have a look at ",Object(a.b)("a",{parentName:"p",href:"/pollerdox/documentation/docs/up4"},"this")," page.)"))}s.isMDXComponent=!0}}]);