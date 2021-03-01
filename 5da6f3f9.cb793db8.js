(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),i=(t(0),t(93)),a={id:"ins4",title:"Docker - FAQs"},c={unversionedId:"ins4",id:"ins4",isDocsHomePage:!1,title:"Docker - FAQs",description:"Where are the Docker images?",source:"@site/docs/ins4.md",slug:"/ins4",permalink:"/pollerdox/docs/ins4",version:"current",sidebar:"someSidebar",previous:{title:"Docker - using command line",permalink:"/pollerdox/docs/ins3"},next:{title:"Bare metal",permalink:"/pollerdox/docs/ins5"}},l=[{value:"Other Docker tags",id:"other-docker-tags",children:[]},{value:"Build from source",id:"build-from-source",children:[]}],u={toc:l};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"##\xa0Where are the Docker images?"),Object(i.b)("p",null,"Images are available on ",Object(i.b)("a",{parentName:"p",href:"https://hub.docker.com/r/golift/unifi-poller/tags"},"Docker Hub")),Object(i.b)("p",null,"Linux images are available for 386, amd64, arm32v6 and arm64v8 architectures. There is no need to specify an architecture tag, docker will pull the correct image automatically with the ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(i.b)("h2",{id:"other-docker-tags"},"Other Docker tags"),Object(i.b)("p",null,"Using ",Object(i.b)("inlineCode",{parentName:"p"},"master")," is not recommended. You may be asked to give this a try while troubleshooting or debugging, but generally this will contain untested code or things that will break your graphs. The ",Object(i.b)("inlineCode",{parentName:"p"},"master")," docker tag is based from the ",Object(i.b)("inlineCode",{parentName:"p"},"master")," git branch and may contain bugs; you've been overly warned."),Object(i.b)("p",null,"You can install a specific version by specifying a version like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker pull golift/unifi-poller:2.0.1\n")),Object(i.b)("p",null,"or minor version like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker pull golift/unifi-poller:2.0\n")),Object(i.b)("p",null,"or a major version like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker pull golift/unifi-poller:2\n")),Object(i.b)("h2",{id:"build-from-source"},"Build from source"),Object(i.b)("p",null,"You can build your own image from source."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git clone https://github.com/unifi-poller/unifi-poller.git\ncd unifi-poller\nmake docker\n")),Object(i.b)("p",null,"This builds a 64-bit amd64 linux image from scratch. If you need another architecture, use the ",Object(i.b)("inlineCode",{parentName:"p"},"docker build")," command directly with a correct --build-arg flag. Examples ",Object(i.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/tree/master/init/docker/hooks"},"here"),"."))}p.isMDXComponent=!0},93:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=n,m=s["".concat(a,".").concat(d)]||s[d]||b[d]||i;return t?o.a.createElement(m,c(c({ref:r},u),{},{components:t})):o.a.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);