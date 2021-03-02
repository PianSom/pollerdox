(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(96)),i={id:"ins4",title:"Docker - FAQs"},c={unversionedId:"ins4",id:"ins4",isDocsHomePage:!1,title:"Docker - FAQs",description:"Where are the Docker images?",source:"@site/docs/ins4.md",slug:"/ins4",permalink:"/pollerdox/docs/ins4",version:"current",sidebar:"someSidebar",previous:{title:"Docker - using command line",permalink:"/pollerdox/docs/ins3"},next:{title:"Bare metal - FreeBSD",permalink:"/pollerdox/docs/ins5"}},l=[{value:"Where are the Docker images?",id:"where-are-the-docker-images",children:[]},{value:"What Docker tags are available?",id:"what-docker-tags-are-available",children:[]},{value:"How can I build from source?",id:"how-can-i-build-from-source",children:[]}],u={toc:l};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"where-are-the-docker-images"},"Where are the Docker images?"),Object(o.b)("p",null,"Images are available on ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/r/golift/unifi-poller/tags"},"Docker Hub")),Object(o.b)("p",null,"Linux images are available for 386, amd64, arm32v6 and arm64v8 architectures. There is no need to specify an architecture tag, docker will pull the correct image automatically with the ",Object(o.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(o.b)("h2",{id:"what-docker-tags-are-available"},"What Docker tags are available?"),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"master")," is not recommended. You may be asked to give this a try while troubleshooting or debugging, but generally this will contain untested code or things that will break your graphs. The ",Object(o.b)("inlineCode",{parentName:"p"},"master")," docker tag is based from the ",Object(o.b)("inlineCode",{parentName:"p"},"master")," git branch and may contain bugs; you've been overly warned."),Object(o.b)("p",null,"You can install a specific version by specifying a version like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker pull golift/unifi-poller:2.0.1\n")),Object(o.b)("p",null,"or minor version like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker pull golift/unifi-poller:2.0\n")),Object(o.b)("p",null,"or a major version like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker pull golift/unifi-poller:2\n")),Object(o.b)("h2",{id:"how-can-i-build-from-source"},"How can I build from source?"),Object(o.b)("p",null,"You can build your own image from source."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"git clone https://github.com/unifi-poller/unifi-poller.git\ncd unifi-poller\nmake docker\n")),Object(o.b)("p",null,"This builds a 64-bit amd64 linux image from scratch. If you need another architecture, use the ",Object(o.b)("inlineCode",{parentName:"p"},"docker build")," command directly with a correct --build-arg flag. Examples ",Object(o.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/tree/master/init/docker/hooks"},"here"),"."))}p.isMDXComponent=!0},96:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=n,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return t?a.a.createElement(m,c(c({ref:r},u),{},{components:t})):a.a.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);