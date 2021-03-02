(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(7),a=(r(0),r(99)),i={id:"up4",title:"FAQs"},l={unversionedId:"up4",id:"up4",isDocsHomePage:!1,title:"FAQs",description:"What are the requirements?",source:"@site/docs/up4.md",slug:"/up4",permalink:"/pollerdox/docs/up4",version:"current",sidebar:"someSidebar",previous:{title:"Easy starting point",permalink:"/pollerdox/docs/up3"},next:{title:"Getting started",permalink:"/pollerdox/docs/ins1"}},s=[],u={toc:s};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"what-are-the-requirements"},"What are the requirements?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Grafana 7.0.5+ is recommended. Grafana 6.x or newer is required."),Object(a.b)("li",{parentName:"ul"},"InfluxDB 1.7.7 or newer is needed, if you choose to use InfluxDB.\nUnifi Poller has not been tested with InfluxDB 2.0 or newer")),Object(a.b)("h4",{id:"why-is-unifi-poller-showing-me-xxxx"},"Why is Unifi Poller showing me XXXX?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Almost all of the time this is because it is what the controller is telling it! Although the Unifi controller has many strengths, it is not flawless, and the data that Unifi Poller shows on Grafana is only what it is given")),Object(a.b)("h4",{id:"heres-a-great-idea---show-me-the-amount-of-wan-data-ive-used-this-month"},"Here's a great idea - show me the amount of WAN data I've used this month!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Yes, it is a great idea. Sadly, this information is not produced by the Unifi controller. However, it should be possible to calculate it from the data already stored and work is on-going to produce something useful"),Object(a.b)("li",{parentName:"ul"},"If you have a method of doing this already then please share!")))}c.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(m,l(l({ref:t},u),{},{components:r})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);