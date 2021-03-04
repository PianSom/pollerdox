(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{86:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),l=(r(0),r(98)),i={id:"ins11",title:"Prometheus support"},a={unversionedId:"ins11",id:"ins11",isDocsHomePage:!1,title:"Prometheus support",description:"Prometheus support was add in the 1.6 release, but was never very well documented. Release 2.0 brings with it a re-write of the prometheus integration. Many changes were made to how one may configure a controller. This page only applies to version 2.0.1+.",source:"@site/docs/ins11.md",slug:"/ins11",permalink:"/pollerdox/docs/ins11",version:"current",sidebar:"someSidebar",previous:{title:"Final steps",permalink:"/pollerdox/docs/ins10"},next:{title:"Common solutions",permalink:"/pollerdox/docs/tro1"}},s=[{value:"Single Controller",id:"single-controller",children:[]},{value:"Multiple Controllers",id:"multiple-controllers",children:[{value:"First Approach",id:"first-approach",children:[]},{value:"Second Approach",id:"second-approach",children:[]},{value:"Final Approach, NOT Recommended",id:"final-approach-not-recommended",children:[]}]}],c={toc:s};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Prometheus support was add in the 1.6 release, but was never very well documented. Release 2.0 brings with it a re-write of the prometheus integration. Many changes were made to how one may configure a controller. This page only applies to version 2.0.1+."),Object(l.b)("p",null,"This page explains how to configure Prometheus and UniFi-Poller. For help installing Prometheus you'll have to look elsewhere; that's not in this wiki at this time."),Object(l.b)("h2",{id:"single-controller"},"Single Controller"),Object(l.b)("p",null,"Lets make the first example look a lot like the old v1.x way of doing things. Configure a single controller in up.conf (or using environment variables). See ",Object(l.b)("a",{parentName:"p",href:"/pollerdox/docs/ins9"},"Config file and Environment variables")," and the example config file for help with that."),Object(l.b)("p",null,"Then you simply point prometheus at unifi-poller using a config like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"scrape_configs:\n  - job_name: 'unifipoller'\n    scrape_interval: 30s\n    static_configs:\n    - targets: ['localhost:9130']\n")),Object(l.b)("p",null,"If you have other scrape configs, leave them there. Just add a new one for unifipoller. Replace localhost with the IP of the host running unifi-poller. That's it! Restart prometheus and it should begin to scrape data from your controller."),Object(l.b)("h2",{id:"multiple-controllers"},"Multiple Controllers"),Object(l.b)("p",null,"You can either configure the controllers in unifi-poller or poll them unconfigured. When polling unconfigured, you must enable dynamic. You can scrape multiple controllers in several ways. Here is a list of options:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Set all controller user/passwords the same and pass in controller URLs from Prometheus. To do this, you set the username and password as the default in the unifi config."),Object(l.b)("li",{parentName:"ol"},"Configure each controller in unifi-poller and pass in urls from Prometheus. This allows them to have different usernames and passwords."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"NOT Recommended:")," Configure each controller in unifi-poller and configure prometheus as shown above in the Single Controller section. This is useful when you want to poll all the controllers at the same time from a single prometheus instance.")),Object(l.b)("h3",{id:"first-approach"},"First Approach"),Object(l.b)("p",null,"This describes approach 1 above."),Object(l.b)("p",null,"Using this approach all you need to configure for controllers in unifi-poller is the name and password. Example below. Any settings you provide to ","[unifi.defaults]"," will be used for all controllers passed in from Prometheus. All other settings are optional."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'[unifi]\n  # This must be enabled to do dynamic polls against unconfigured urls.\n  dynamic = true\n[unifi.defaults]\n  user       = "unifipoller"\n  pass       = "unifipoller"\n  sites      = ["all"]\n  save_ids   = false\n  save_dpi   = false\n  save_sites = true\n  verify_ssl = false\n')),Object(l.b)("p",null,"Or with env variables:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'UP_UNIFI_DYNAMIC=true\nUP_UNIFI_DEFAULT_USER="unifipoller"\nUP_UNIFI_DEFAULT_PASS="unifipoller"\n')),Object(l.b)("h3",{id:"second-approach"},"Second Approach"),Object(l.b)("p",null,"This describes approach 2 above."),Object(l.b)("p",null,"Configure each controller in up.conf or using environment variables. When Prometheus scrapes from unifi-poller the poller will map the URL directly to the one configured in up.conf (or using env vars). Just make sure the url you put into the prometheus configuration matches the url put into the poller configuration."),Object(l.b)("p",null,"Example polling two controllers:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'[unifi]\n  # Not needed since not dynamic.\n  dynamic = false\n[[unifi.controller]]\n  url = "http://unifi.controller:8443"\n  user = "unifipoller1"\n  pass = "unifipoller1"\n[[unifi.controller]]\n  url = "http://another.controller:8443"\n  user = "unifipoller2"\n  pass = "unifipoller2"\n')),Object(l.b)("p",null,"Or with env variables:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'UP_UNIFI_DYNAMIC=false\nUP_UNIFI_CONTROLLER_0_URL="http://unifi.controller:8443"\nUP_UNIFI_CONTROLLER_0_USER="unifipoller"\nUP_UNIFI_CONTROLLER_0_PASS="unifipoller"\nUP_UNIFI_CONTROLLER_1_URL="http://another.controller:8443"\nUP_UNIFI_CONTROLLER_1_USER="unifipoller"\nUP_UNIFI_CONTROLLER_1_PASS="unifipoller"\n')),Object(l.b)("h4",{id:"prometheus-configuration-for-urls"},"Prometheus Configuration for URLs"),Object(l.b)("p",null,"This applies to both approaches above. Configure prometheus like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"scrape_configs:\n  - job_name: 'unifipoller'\n    scrape_interval: 30s\n    static_configs:\n      - targets:\n        - https://unifi.controller:8443\n        - https://another.controller:8443\n    metrics_path: /scrape\n    relabel_configs:\n     - source_labels: [__address__]\n       target_label: __param_target\n     - source_labels: [__param_target]\n       target_label: instance\n     - target_label: __address__\n       replacement: localhost:9130\n")),Object(l.b)("p",null,"Replace ",Object(l.b)("inlineCode",{parentName:"p"},"localhost")," with the IP of your unifi-poller host, and replace ",Object(l.b)("inlineCode",{parentName:"p"},"unifi.controller")," and another.controller with the IPs of your controllers."),Object(l.b)("h3",{id:"final-approach-not-recommended"},"Final Approach, NOT Recommended"),Object(l.b)("p",null,"Just configure your controllers in up.conf or using env variables as explained in the Configuration doc. Then setup Prometheus like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"scrape_configs:\n  - job_name: 'unifipoller'\n    scrape_interval: 30s\n    static_configs:\n    - targets: ['localhost:9130']\n")),Object(l.b)("p",null,"The standard /metrics path that the above snippet uses returns metrics for all configured controllers."))}p.isMDXComponent=!0},98:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=t,b=u["".concat(i,".").concat(f)]||u[f]||h[f]||l;return r?o.a.createElement(b,a(a({ref:n},c),{},{components:r})):o.a.createElement(b,a({ref:n},c))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);