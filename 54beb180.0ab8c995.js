(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{74:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return c}));var r=o(3),n=o(7),a=(o(0),o(99)),i={id:"tro1",title:"Common solutions"},s={unversionedId:"tro1",id:"tro1",isDocsHomePage:!1,title:"Common solutions",description:"Below are some common solutions and possible symptoms.",source:"@site/docs/tro1.md",slug:"/tro1",permalink:"/pollerdox/docs/tro1",version:"current",sidebar:"someSidebar",previous:{title:"Web server",permalink:"/pollerdox/docs/ins14"},next:{title:"Getting help",permalink:"/pollerdox/docs/tro2"}},l=[{value:"Empty Dashboards",id:"empty-dashboards",children:[]},{value:"Check the port used to connect to the controller",id:"check-the-port-used-to-connect-to-the-controller",children:[]},{value:"Run Updated Components",id:"run-updated-components",children:[]},{value:"Check Log Files",id:"check-log-files",children:[]},{value:"Double-Check Data Source",id:"double-check-data-source",children:[]},{value:"Double-Check Passwords",id:"double-check-passwords",children:[]},{value:"Dashboard Variables",id:"dashboard-variables",children:[]},{value:"InfluxDB Write Errors",id:"influxdb-write-errors",children:[]}],u={toc:l};function c(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Below are some common solutions and possible symptoms."),Object(a.b)("h3",{id:"empty-dashboards"},"Empty Dashboards"),Object(a.b)("p",null,"The number one cause of empty dashboards is an old version of InfluxDB. Make sure you are on version 1.7.x or 1.8.x. ",Object(a.b)("strong",{parentName:"p"},"Use of 1.6.x will cause empty dashboards.")),Object(a.b)("p",null,"If your DPI dashboards are empty ",Object(a.b)("inlineCode",{parentName:"p"},"DPI")," is like still disabled. It must be enabled in both the poller config and in your UniFi controller. Two spots."),Object(a.b)("h3",{id:"check-the-port-used-to-connect-to-the-controller"},"Check the port used to connect to the controller"),Object(a.b)("p",null,"It should be ",Object(a.b)("inlineCode",{parentName:"p"},"8443")," if you are using a non-unifios interface (eg the original Cloudkey with old firmware) and ",Object(a.b)("inlineCode",{parentName:"p"},"443")," (or just omitted) if you are using a unifios device (UDM-Pro, UDM, etc)"),Object(a.b)("h3",{id:"run-updated-components"},"Run Updated Components"),Object(a.b)("p",null,"Running out of date components may result in missing data, or errors from Grafana."),Object(a.b)("p",null,"Make sure you're running up-to-date software. InfluxDB must be at least 1.7.x. Version 1.7.9 is out and it works great. Grafana 6.5.2 also works great, and any version older than 6.4.x is going to give you problems. UniFi Poller should be at least version 1.6.3 if you are seeking help."),Object(a.b)("h3",{id:"check-log-files"},"Check Log Files"),Object(a.b)("p",null,"UniFi Poller has great logs that help when troubleshooting. If you're seeking help please enable debug mode and copy/paste some of your logs. All of this data helps figure out what's going on. Debug mode can be enable in up.conf or by passing the env variable UP_POLLER_DEBUG=true."),Object(a.b)("p",null,"Grafana, Prometheus and InfluxDB also have logs files, but they're probably less useful. You can still check them for errors."),Object(a.b)("p",null,"If you are a Docker user then check out ",Object(a.b)("a",{parentName:"p",href:"https://dozzle.dev/"},"Dozzle")),Object(a.b)("h3",{id:"double-check-data-source"},"Double-Check Data Source"),Object(a.b)("p",null,"Many users make typos in their data source. Sometimes on the URLs, sometimes on the passwords. This will cause data to not show up and the dashboards may provide red error messages. Most data sources do not have paths; just ",Object(a.b)("inlineCode",{parentName:"p"},"http://ip:port"),"."),Object(a.b)("h3",{id:"double-check-passwords"},"Double-Check Passwords"),Object(a.b)("p",null,"The default username used to be ",Object(a.b)("inlineCode",{parentName:"p"},"influxdb"),", but has been changed to ",Object(a.b)("inlineCode",{parentName:"p"},"unifipoller"),". Keep this in mind when setting things up. Can't tell you how many times someone had issues only to find a bad password. Check it, check it again; log in with it yourself. The poller log should give you clues if this is the problem."),Object(a.b)("h3",{id:"dashboard-variables"},"Dashboard Variables"),Object(a.b)("p",null,'If your dashboards have some data, but it looks like most of it is missing, this often indicates a problem with the variables, or the data source the variables are using. Edit the affected dashboards: go to Settings then to Variables, and click on the variables. Make sure they have the correct data source listed, and check for "preview of values" to make sure things are showing up. Let me know if you see values when you make a report.'),Object(a.b)("h3",{id:"influxdb-write-errors"},"InfluxDB Write Errors"),Object(a.b)("p",null,"If you're getting errors like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'[ERROR] infdb.Write(bp): {"error":"field type conflict"}\n[ERROR] infdb.Write(bp): {"error":"partial write: field type conflict: input field "tx_power" on measurement "uap_radios" is type integer, already exists as type float dropped="}\n')),Object(a.b)("p",null,"This usually indicates a bug was fixed and the resulting fixed has caused an incompatibility with your existing InfluxDB database. This could also indicate you've found a new bug. Please open an issue if you are running the latest version and dropping the database did not solve the error. There are generally two fixes:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Downgrade. Do not upgrade to a new version."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"DROP")," and re-",Object(a.b)("inlineCode",{parentName:"li"},"CREATE")," the InfluxDB database.")))}c.isMDXComponent=!0},99:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return h}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=n.a.createContext({}),c=function(e){var t=n.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),p=r,h=d["".concat(i,".").concat(p)]||d[p]||b[p]||a;return o?n.a.createElement(h,s(s({ref:t},u),{},{components:o})):n.a.createElement(h,s({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);