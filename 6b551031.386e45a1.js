(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,s(s({ref:t},u),{},{components:n})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),o=(n(0),n(100)),i={id:"ins12",title:"Loki"},s={unversionedId:"ins12",id:"ins12",isDocsHomePage:!1,title:"Loki",description:"Poller provides support for writing UniFi's Events, Anomalies, Alarms and IDS data to Loki. There are no dashboards for this data, but it's pretty simple. Just add a \"Logs\" panel. You can also use this data as an Annotation source. Loki support was added in UniFi Poller v2.0.2.",source:"@site/docs/ins12.md",slug:"/ins12",permalink:"/pollerdox/docs/ins12",version:"current",sidebar:"someSidebar",previous:{title:"Prometheus support",permalink:"/pollerdox/docs/ins11"},next:{title:"InfluxDB and Grafana Installation",permalink:"/pollerdox/docs/ins13"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Advanced",id:"advanced",children:[]}],u={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Poller provides support for writing UniFi's Events, Anomalies, Alarms and IDS data to Loki. There are no dashboards for this data, but it's pretty simple. Just add a \"Logs\" panel. You can also use this data as an Annotation source. Loki support was added in UniFi Poller v2.0.2."),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("p",null,"Installation of Loki is documented ",Object(o.b)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/installation/"},"here"),". If you're only using Poller, you don't need Promtail."),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"Just add the Loki URL to your poller config to enable this output plugin."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'[loki]\n  url = "http://127.0.0.1:3100"\n')),Object(o.b)("p",null,"Use the UniFi input plugin settings to choose which logs to collect and save. Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[unifi.defaults]\n  save_ids       = true\n  save_events    = true\n  save_alarms    = true\n  save_anomalies = true\n")),Object(o.b)("h3",{id:"advanced"},"Advanced"),Object(o.b)("p",null,"The Loki output plugin has a few advanced settings that most folks won't use. These are their default values."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'user       = ""\npass       = ""\nverify_ssl = false\ntenant_id  = ""\ninterval   = "2m"\ntimeout    = "10s"\n')),Object(o.b)("p",null,"You can set a user and pass if your Loki instance requires auth. This currently only supports Basic Auth. Please open an ",Object(o.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/issues/"},"Issue")," if you need support for something else. Alternatively you can pass the Tenant ID header directly by setting ",Object(o.b)("inlineCode",{parentName:"p"},"tenant_id"),". If your Loki instance is using/behind an SSL proxy that has a valid SSL cert you may set ",Object(o.b)("inlineCode",{parentName:"p"},"verify_ssl")," to true. The recommended interval is ",Object(o.b)("inlineCode",{parentName:"p"},"2m")," but anything from ",Object(o.b)("inlineCode",{parentName:"p"},"1m")," to ",Object(o.b)("inlineCode",{parentName:"p"},"15m")," should work fine. The timeout is ",Object(o.b)("inlineCode",{parentName:"p"},"10s"),", adjust it if you get timeout errors."))}c.isMDXComponent=!0}}]);