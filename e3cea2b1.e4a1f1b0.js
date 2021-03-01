(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(92)),a={id:"ins3",title:"Docker - using command line"},c={unversionedId:"ins3",id:"ins3",isDocsHomePage:!1,title:"Docker - using command line",description:"Using the command line",source:"@site/docs/ins3.md",slug:"/ins3",permalink:"/pollerdox/docs/ins3",version:"current",sidebar:"someSidebar",previous:{title:"Docker - using `docker-compose`",permalink:"/pollerdox/docs/ins2"},next:{title:"Docker - FAQs",permalink:"/pollerdox/docs/ins4"}},l=[],u={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"using-the-command-line"},"Using the command line"),Object(i.b)("p",null,"First pull the image from Docker Hub using"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker pull golift/unifi-poller\n")),Object(i.b)("p",null,"If you are using the command line and have decided to use environment variables then start the container using the following command (changed as necessary to pass other environment variables)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'docker run -e UP_UNIFI_DEFAULT_PASS="your-secret-pasword" -d  golift/unifi-poller:latest\n')),Object(i.b)("p",null," If you are using the command line and have decided to use a config file"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"copy this ",Object(i.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example"},"example config file")),Object(i.b)("li",{parentName:"ul"},"edit it as necessary (at the )"),Object(i.b)("li",{parentName:"ul"},"save it to a local location")))}p.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,f=s["".concat(a,".").concat(d)]||s[d]||m[d]||i;return t?o.a.createElement(f,c(c({ref:n},u),{},{components:t})):o.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);