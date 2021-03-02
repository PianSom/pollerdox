(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(93)),i={id:"ins3",title:"Docker - using command line"},o={unversionedId:"ins3",id:"ins3",isDocsHomePage:!1,title:"Docker - using command line",description:"This page assumes that you have decided to start Unifi Poller with Docker using the command line",source:"@site/docs/ins3.md",slug:"/ins3",permalink:"/pollerdox/docs/ins3",version:"current",sidebar:"someSidebar",previous:{title:"Docker - using docker-compose",permalink:"/pollerdox/docs/ins2"},next:{title:"Docker - FAQs",permalink:"/pollerdox/docs/ins4"}},s=[{value:"Before this",id:"before-this",children:[]},{value:"Pull the images",id:"pull-the-images",children:[]},{value:"Configuring and starting the container",id:"configuring-and-starting-the-container",children:[{value:"Config file and Environment variables",id:"config-file-and-environment-variables",children:[]},{value:"Alternative 1 - Using environment variables",id:"alternative-1---using-environment-variables",children:[]},{value:"Alternative 2 - Using a configuration file",id:"alternative-2---using-a-configuration-file",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],b={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This page assumes that you have decided to start Unifi Poller with Docker using the command line"),Object(l.b)("p",null,"It is also assumed that you already have working versions of Grafana and InfluxDB/Prometheus"),Object(l.b)("h2",{id:"before-this"},"Before this"),Object(l.b)("p",null,"Make sure you have set up a user on your controller for Unifi Poller to use"),Object(l.b)("h2",{id:"pull-the-images"},"Pull the images"),Object(l.b)("p",null,"First pull the image from Docker Hub using"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"docker pull golift/unifi-poller\n")),Object(l.b)("p",null,"xxx note on tags\nxxx port no for unifios"),Object(l.b)("h2",{id:"configuring-and-starting-the-container"},"Configuring and starting the container"),Object(l.b)("p",null,"Unifi Poller's Docker container can be configured for use in two ways:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"by using environment variables or"),Object(l.b)("li",{parentName:"ul"},"via a configuration file")),Object(l.b)("p",null,"Which to use is a matter of personal choice. The environmental path has the advantage that all settings are in one place. The config file method has the advantage that Unifi Poller specific settings can be saved in the same shared Docker folder as the rest of the app's data."),Object(l.b)("p",null,"In either case, the variables to be set can be split into three categories:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Configuration of Unifi Poller iteslf"),Object(l.b)("li",{parentName:"ol"},"Configuration of the Unifi and the controller(s) (multiple controllers are permitted for different sites)"),Object(l.b)("li",{parentName:"ol"},"Configuration of the output database(s) (Unifi Poller will output to both InfluxDB and Prometheus if desired)")),Object(l.b)("p",null,"More documentation on the configuration options is included in the ","[sample configuration file]"," (",Object(l.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example"},"https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example"),") on the repo"),Object(l.b)("h3",{id:"config-file-and-environment-variables"},"Config file and Environment variables"),Object(l.b)("h4",{id:"poller"},"poller"),Object(l.b)("p",null,"The poller section begins with the ",Object(l.b)("inlineCode",{parentName:"p"},"[poller]")," header and has the parameters below. These control overall behavior of the application."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"ENV")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"config")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"type - default")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"explanation")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_POLLER_DEBUG"),Object(l.b)("td",{parentName:"tr",align:null},"debug"),Object(l.b)("td",{parentName:"tr",align:null},"boolean - false"),Object(l.b)("td",{parentName:"tr",align:null},"turns on debug messages")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_POLLER_QUIET"),Object(l.b)("td",{parentName:"tr",align:null},"quiet"),Object(l.b)("td",{parentName:"tr",align:null},"boolean - false"),Object(l.b)("td",{parentName:"tr",align:null},"turns off timer messages")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_POLLER_PLUGINS_0"),Object(l.b)("td",{parentName:"tr",align:null},"plugins"),Object(l.b)("td",{parentName:"tr",align:null},"file list - empty"),Object(l.b)("td",{parentName:"tr",align:null},"advanced! plugin file, use _1, _2, etc to add more")))),Object(l.b)("h4",{id:"unifi"},"Unifi"),Object(l.b)("p",null,"The unifi section begins with the ",Object(l.b)("inlineCode",{parentName:"p"},"[unifi]")," header and has the following parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"ENV")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"config")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"default")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"explanation")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DISABLE"),Object(l.b)("td",{parentName:"tr",align:null},"disable"),Object(l.b)("td",{parentName:"tr",align:null},"false, turns off this input. don't do that!"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("p",null,'UP_UNIFI_DYNAMIC \tdynamic \tfalse, enables dynamic lookups (from prometheus)\nUP_UNIFI_DEFAULT_ROLE \tunifi.defaults.role \tURL, allows grouping controllers\nUP_UNIFI_DEFAULT_URL \tunifi.defaults.url \t"',Object(l.b)("a",{parentName:"p",href:"https://127.0.0.1:8443%22"},'https://127.0.0.1:8443"'),', only applies if no controllers are defined (next section)\nUP_UNIFI_DEFAULT_USER \tunifi.defaults.user \t"unifipoller", default applies to any controller without a username\nUP_UNIFI_DEFAULT_PASS \tunifi.defaults.pass \t"", default applies to any controller without a password\nUP_UNIFI_DEFAULT_SAVE_SITES \tunifi.defaults.save_sites \ttrue\nUP_UNIFI_DEFAULT_SAVE_IDS \tunifi.defaults.save_ids \tfalse, Only works with InfluxDB / Loki\nUP_UNIFI_DEFAULT_SAVE_EVENTS \tunifi.defaults.save_events \tfalse, Only works with InfluxDB / Loki, added in v2.0.2\nUP_UNIFI_DEFAULT_SAVE_ALARMS \tunifi.defaults.save_alarms \tfalse, Only works with InfluxDB / Loki, added in v2.0.2\nUP_UNIFI_DEFAULT_SAVE_ANOMALIES \tunifi.defaults.save_anomalies \tfalse, Only works with InfluxDB / Loki, added in v2.0.2\nUP_UNIFI_DEFAULT_SAVE_DPI \tunifi.defaults.save_dpi \tfalse\nUP_UNIFI_DEFAULT_VERIFY_SSL \tunifi.defaults.verify_ssl \tfalse\nUP_UNIFI_DEFAULT_SITE_0 \tunifi.defaults.site.0 \t','["all"]',", specify more sites with _1, _2, etc."),Object(l.b)("p",null,"You can configure a single controller by setting the UP_UNIFI_DEFAULT variables above, but you can also configure a single, or multiple controllers by setting the variables below. These, like most, are optional."),Object(l.b)("p",null,"You may repeat the [","[unifi.controller]","] section as many times as you want to add more controllers. If you're configuring controllers using env variables, start at _0 and change _0 to _1 to add a second, then _2 and so on."),Object(l.b)("p",null,"Like any configured list, you may configure controllers with a file or env vars, or both."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"ENV")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"config")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"default")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"explanation"))))),Object(l.b)("p",null,'UP_UNIFI_CONTROLLER_0_ROLE \tunifi.controller.role \tURL, allows grouping controllers, default applies to any controller without a role\nUP_UNIFI_CONTROLLER_0_URL \tunifi.controller.url \t"',Object(l.b)("a",{parentName:"p",href:"https://127.0.0.1:8443%22"},'https://127.0.0.1:8443"'),'\nUP_UNIFI_CONTROLLER_0_USER \tunifi.controller.user \t"unifipoller"\nUP_UNIFI_CONTROLLER_0_PASS \tunifi.controller.pass \t""\nUP_UNIFI_CONTROLLER_0_SAVE_SITES \tunifi.controller.save_sites \ttrue, Powers Network Sites dashboard\nUP_UNIFI_CONTROLLER_0_SAVE_IDS \tunifi.controller.save_ids \tfalse, Only works with InfluxDB / Loki\nUP_UNIFI_CONTROLLER_0_SAVE_EVENTS \tunifi.controller.save_events \tfalse, Only works with InfluxDB / Loki, added in v2.0.2\nUP_UNIFI_CONTROLLER_0_SAVE_ALARMS \tunifi.controller.save_alarms \tfalse, Only works with InfluxDB / Loki, added in v2.0.2\nUP_UNIFI_CONTROLLER_0_SAVE_ANOMALIES \tunifi.controller.save_anomalies \tfalse, Only works with InfluxDB / Loki, added in v2.0.2\nUP_UNIFI_CONTROLLER_0_SAVE_DPI \tunifi.controller.save_dpi \tfalse, Powers DPI dashboard\nUP_UNIFI_CONTROLLER_0_VERIFY_SSL \tunifi.controller.verify_ssl \tfalse, Verify controller SSL certificate\nUP_UNIFI_CONTROLLER_0_SITE_0 \tunifi.controller.site.0 \t','["all"]',", specify more sites with _1, _2, etc"),Object(l.b)("h4",{id:"output"},"Output"),Object(l.b)("h5",{id:"prometheus"},"Prometheus"),Object(l.b)("p",null,"This section begins with ","[prometheus]"," and configures an HTTP listener where a scrape daemon, such as Prometheus may obtain metrics. See the Prometheus wiki page for Prometheus configuration instructions."),Object(l.b)("p",null,"While Prometheus provides some configuration parameters, you shouldn't change them. If you don't use Prometheus, set disable to true. If you do use Prometheus, don't let the parameters temp you."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"ENV")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"config")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"default")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"explanation"))))),Object(l.b)("p",null,"UP_PROMETHEUS_DISABLE \tprometheus.disable \tfalse\nUP_PROMETHEUS_NAMESPACE \tprometheus.namespace \tunifipoller\nUP_PROMETHEUS_HTTP_LISTEN \tprometheus.http_listen \t0.0.0.0:9130\nUP_PROMETHEUS_REPORT_ERRORS \tprometheus.report_errors \tfalse\nUP_PROMETHEUS_BUFFER \tprometheus.buffer \t50"),Object(l.b)("h5",{id:"influxdb"},"InfluxDB"),Object(l.b)("p",null,"This section begins with ","[influxdb]"," and configures a single influxdb output destination."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"ENV")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"config")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"default")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"explanation"))))),Object(l.b)("p",null,'UP_INFLUXDB_URL \tinfluxdb.url \t"',Object(l.b)("a",{parentName:"p",href:"http://127.0.0.1:8086%22"},'http://127.0.0.1:8086"'),' \tinfluxdb URL\nUP_INFLUXDB_DB \tinfluxdb.db \t"unifi" \tname of database you created in influx\nUP_INFLUXDB_USER \tinfluxdb.user \t"unifipoller" \tusername with access to database\nUP_INFLUXDB_PASS \tinfluxdb.pass \t"unifipoller" \tpassword for username\nUP_INFLUXDB_INTERVAL \tinfluxdb.interval \t"30s" \thow often to poll and collect metrics, ie "1m" or "90s"'),Object(l.b)("h3",{id:"alternative-1---using-environment-variables"},"Alternative 1 - Using environment variables"),Object(l.b)("p",null,"If you are using the command line and have decided to use environment variables then start the container using the following command (changed as necessary to pass other environment variables)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'docker run -e UP_UNIFI_DEFAULT_PASS="your-secret-pasword" -d  golift/unifi-poller:latest\n')),Object(l.b)("h3",{id:"alternative-2---using-a-configuration-file"},"Alternative 2 - Using a configuration file"),Object(l.b)("p",null,"Alternatively, if you choose to use a configuration file"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Copy this ",Object(l.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example"},"example config file")),Object(l.b)("li",{parentName:"ul"},"Edit it as necessary (in particular ensure that the ",Object(l.b)("inlineCode",{parentName:"li"},"[unifi]"),"/",Object(l.b)("inlineCode",{parentName:"li"},"user")," and ",Object(l.b)("inlineCode",{parentName:"li"},"pass")," variables are set)"),Object(l.b)("li",{parentName:"ul"},"Save it as ",Object(l.b)("inlineCode",{parentName:"li"},"unifi-poller.conf")," in the local location you use for Docker storage in a folder called `unifi-poller")),Object(l.b)("p",null,"xxx add in docker start"),Object(l.b)("p",null,"If all has worked then after it has downloaded and started you should start seeing lines like"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"unifi-poller    | 2020/06/18 12:08:50 [INFO] UniFi Metrics Recorded. Sites: 1, Clients: 67, UAP: 6, USG/UDM: 1, USW: 5, IDS Events: 0, Points: 1837, Fields: 11307, Errs: 0, Elapsed: 599ms\n")),Object(l.b)("p",null,"If you don't see this then go back and check what you have done so far"),Object(l.b)("h2",{id:"next-steps"},"Next steps"),Object(l.b)("p",null,"Go to the section Configuration / Final steps"))}u.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,d=c["".concat(i,".").concat(f)]||c[f]||p[f]||l;return n?r.a.createElement(d,o(o({ref:t},b),{},{components:n})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);