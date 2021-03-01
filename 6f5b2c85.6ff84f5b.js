(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(7),i=(r(0),r(91)),a={id:"up4",title:"FAQs"},s={unversionedId:"up4",id:"up4",isDocsHomePage:!1,title:"FAQs",description:"What are the requirements?",source:"@site/docs/up4.md",slug:"/up4",permalink:"/pollerdox/docs/up4",version:"current",sidebar:"someSidebar",previous:{title:"Easy starting point",permalink:"/pollerdox/docs/up3"},next:{title:"Getting started",permalink:"/pollerdox/docs/ins1"}},l=[{value:"What are the requirements?",id:"what-are-the-requirements",children:[]},{value:"Why is Unifi Poller showing me XXXX?",id:"why-is-unifi-poller-showing-me-xxxx",children:[]},{value:"Here&#39;s a great idea - show me the amount of WAN data I&#39;ve used this month!",id:"heres-a-great-idea---show-me-the-amount-of-wan-data-ive-used-this-month",children:[]}],u={toc:l};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"what-are-the-requirements"},"What are the requirements?"),Object(i.b)("p",null,"Grafana 7.0.5+ is recommended. Grafana 6.x or newer is required"),Object(i.b)("p",null,"InfluxDB 1.7.7 or newer is needed, if you choose to use InfluxDB"),Object(i.b)("h3",{id:"why-is-unifi-poller-showing-me-xxxx"},"Why is Unifi Poller showing me XXXX?"),Object(i.b)("p",null,"Almost all of the time this is because it is what the controller is telling it! Although the Unifi controller has many strengths, it is not flawless, and the data that Unifi Poller produces is only as good as what it is given"),Object(i.b)("h3",{id:"heres-a-great-idea---show-me-the-amount-of-wan-data-ive-used-this-month"},"Here's a great idea - show me the amount of WAN data I've used this month!"),Object(i.b)("p",null,"Yes, it is a great idea. Sadly, this information is not produced by the Unifi controller. However, it should be possible to calculate it from the data already stored and work is on-going to produce something useful"))}c.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,h=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?o.a.createElement(h,s(s({ref:t},u),{},{components:r})):o.a.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);