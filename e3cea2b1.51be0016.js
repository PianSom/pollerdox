(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),l=n(7),r=(n(0),n(93)),i={id:"ins3",title:"Docker - using command line"},o={unversionedId:"ins3",id:"ins3",isDocsHomePage:!1,title:"Docker - using command line",description:"This page assumes that you have decided to start Unifi Poller with Docker using the command line",source:"@site/docs/ins3.md",slug:"/ins3",permalink:"/pollerdox/docs/ins3",version:"current",sidebar:"someSidebar",previous:{title:"Docker - using docker-compose",permalink:"/pollerdox/docs/ins2"},next:{title:"Docker - FAQs",permalink:"/pollerdox/docs/ins4"}},b=[{value:"Before this",id:"before-this",children:[]},{value:"Pull the images",id:"pull-the-images",children:[]},{value:"Configuring and starting the container",id:"configuring-and-starting-the-container",children:[{value:"Config file and Environment variables",id:"config-file-and-environment-variables",children:[]},{value:"Alternative 1 - Using environment variables",id:"alternative-1---using-environment-variables",children:[]},{value:"Alternative 2 - Using a configuration file",id:"alternative-2---using-a-configuration-file",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],c={toc:b};function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page assumes that you have decided to start Unifi Poller with Docker using the command line"),Object(r.b)("p",null,"It is also assumed that you already have working versions of Grafana and InfluxDB/Prometheus"),Object(r.b)("h2",{id:"before-this"},"Before this"),Object(r.b)("p",null,"Make sure you have set up a user on your controller for Unifi Poller to use"),Object(r.b)("h2",{id:"pull-the-images"},"Pull the images"),Object(r.b)("p",null,"First pull the image from Docker Hub using"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"docker pull golift/unifi-poller\n")),Object(r.b)("p",null,"xxx note on tags\nxxx port no for unifios"),Object(r.b)("h2",{id:"configuring-and-starting-the-container"},"Configuring and starting the container"),Object(r.b)("p",null,"Unifi Poller's Docker container can be configured for use in two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"by using environment variables or"),Object(r.b)("li",{parentName:"ul"},"via a configuration file")),Object(r.b)("p",null,"Which to use is a matter of personal choice. The environmental path has the advantage that all settings are in one place. The config file method has the advantage that Unifi Poller specific settings can be saved in the same shared Docker folder as the rest of the app's data."),Object(r.b)("p",null,"In either case, the variables to be set can be split into three categories:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Configuration of Unifi Poller iteslf"),Object(r.b)("li",{parentName:"ol"},"Configuration of the Unifi and the controller(s) (multiple controllers are permitted for different sites)"),Object(r.b)("li",{parentName:"ol"},"Configuration of the output database(s) (Unifi Poller will output to both InfluxDB and Prometheus if desired)")),Object(r.b)("p",null,"More documentation on the configuration options is included in the ","[sample configuration file]"," (",Object(r.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example"},"https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example"),") on the repo"),Object(r.b)("h3",{id:"config-file-and-environment-variables"},"Config file and Environment variables"),Object(r.b)("h4",{id:"poller"},"poller"),Object(r.b)("p",null,"The poller section begins with the ",Object(r.b)("inlineCode",{parentName:"p"},"[poller]")," header and has the parameters below. These control overall behavior of the application."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"ENV")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"config")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"default and explanation")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_POLLER_DEBUG"),Object(r.b)("td",{parentName:"tr",align:null},"debug"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"),"  turns on debug messages")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_POLLER_QUIET"),Object(r.b)("td",{parentName:"tr",align:null},"quiet"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"),"\tturns off timer messages")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_POLLER_PLUGINS_0"),Object(r.b)("td",{parentName:"tr",align:null},"plugins"),Object(r.b)("td",{parentName:"tr",align:null},"file list - ",Object(r.b)("inlineCode",{parentName:"td"},"empty"),";\tadvanced! plugin file, use _1, _2, etc to add more")))),Object(r.b)("h4",{id:"unifi"},"Unifi"),Object(r.b)("p",null,"The unifi section begins with the ",Object(r.b)("inlineCode",{parentName:"p"},"[unifi]")," header and has the following parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"ENV")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"config")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"default and explanation")),Object(r.b)("th",{parentName:"tr",align:null}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DISABLE"),Object(r.b)("td",{parentName:"tr",align:null},"disable"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"),"  turns off this input. don't do that!"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DYNAMIC"),Object(r.b)("td",{parentName:"tr",align:null},"dynamic"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"),"  enables dynamic lookups (from prometheus)"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_ROLE"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.role"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"URL")," allows grouping controllers"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_URL"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.url"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"https://127.0.0.1:8443"')," only applies if no controllers are defined (next section)"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_USER"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.user"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"unifipoller"')," default applies to any controller without a username"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_PASS"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.pass"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'""')," default applies to any controller without a password"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_SITES"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_sites"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_IDS"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_ids"),Object(r.b)("td",{parentName:"tr",align:null},"false, Only works with InfluxDB / Loki"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_EVENTS"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_events"),Object(r.b)("td",{parentName:"tr",align:null},"false, Only works with InfluxDB / Loki, added in v2.0.2"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_ALARMS"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_alarms"),Object(r.b)("td",{parentName:"tr",align:null},"false, Only works with InfluxDB / Loki, added in v2.0.2"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_ANOMALIES"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_anomalies"),Object(r.b)("td",{parentName:"tr",align:null},"false, Only works with InfluxDB / Loki, added in v2.0.2"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_DPI"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_dpi"),Object(r.b)("td",{parentName:"tr",align:null},"false"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_VERIFY_SSL"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.verify_ssl"),Object(r.b)("td",{parentName:"tr",align:null},"false"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SITE_0"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.site.0"),Object(r.b)("td",{parentName:"tr",align:null},'["all"]',", specify more sites with _1, _2, etc."),Object(r.b)("td",{parentName:"tr",align:null})))),Object(r.b)("p",null,"You can configure a single controller by setting the UP_UNIFI_DEFAULT variables above, but you can also configure a single, or multiple controllers by setting the variables below. These, like most, are optional."),Object(r.b)("p",null,"You may repeat the [","[unifi.controller]","] section as many times as you want to add more controllers. If you're configuring controllers using env variables, start at _0 and change _0 to _1 to add a second, then _2 and so on."),Object(r.b)("p",null,"Like any configured list, you may configure controllers with a file or env vars, or both."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"ENV")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"config")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"default")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"explanation"))))),Object(r.b)("p",null,'UP_UNIFI_CONTROLLER_0_ROLE \tunifi.controller.role \tURL, allows grouping controllers, default applies to any controller without a role\nUP_UNIFI_CONTROLLER_0_URL \tunifi.controller.url \t"',Object(r.b)("a",{parentName:"p",href:"https://127.0.0.1:8443%22"},'https://127.0.0.1:8443"'),'\nUP_UNIFI_CONTROLLER_0_USER \tunifi.controller.user \t"unifipoller"\nUP_UNIFI_CONTROLLER_0_PASS \tunifi.controller.pass \t""\nUP_UNIFI_CONTROLLER_0_SAVE_SITES \tunifi.controller.save_sites \ttrue, Powers Network Sites dashboard\nUP_UNIFI_CONTROLLER_0_SAVE_IDS \tunifi.controller.save_ids \tfalse, Only works with InfluxDB / Loki\nUP_UNIFI_CONTROLLER_0_SAVE_EVENTS \tunifi.controller.save_events \tfalse, Only works with InfluxDB / Loki, added in v2.0.2\nUP_UNIFI_CONTROLLER_0_SAVE_ALARMS \tunifi.controller.save_alarms \tfalse, Only works with InfluxDB / Loki, added in v2.0.2\nUP_UNIFI_CONTROLLER_0_SAVE_ANOMALIES \tunifi.controller.save_anomalies \tfalse, Only works with InfluxDB / Loki, added in v2.0.2\nUP_UNIFI_CONTROLLER_0_SAVE_DPI \tunifi.controller.save_dpi \tfalse, Powers DPI dashboard\nUP_UNIFI_CONTROLLER_0_VERIFY_SSL \tunifi.controller.verify_ssl \tfalse, Verify controller SSL certificate\nUP_UNIFI_CONTROLLER_0_SITE_0 \tunifi.controller.site.0 \t','["all"]',", specify more sites with _1, _2, etc"),Object(r.b)("h4",{id:"output"},"Output"),Object(r.b)("h5",{id:"prometheus"},"Prometheus"),Object(r.b)("p",null,"This section begins with ","[prometheus]"," and configures an HTTP listener where a scrape daemon, such as Prometheus may obtain metrics. See the Prometheus wiki page for Prometheus configuration instructions."),Object(r.b)("p",null,"While Prometheus provides some configuration parameters, you shouldn't change them. If you don't use Prometheus, set disable to true. If you do use Prometheus, don't let the parameters temp you."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"ENV")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"config")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"default")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"explanation"))))),Object(r.b)("p",null,"UP_PROMETHEUS_DISABLE \tprometheus.disable \tfalse\nUP_PROMETHEUS_NAMESPACE \tprometheus.namespace \tunifipoller\nUP_PROMETHEUS_HTTP_LISTEN \tprometheus.http_listen \t0.0.0.0:9130\nUP_PROMETHEUS_REPORT_ERRORS \tprometheus.report_errors \tfalse\nUP_PROMETHEUS_BUFFER \tprometheus.buffer \t50"),Object(r.b)("h5",{id:"influxdb"},"InfluxDB"),Object(r.b)("p",null,"This section begins with ","[influxdb]"," and configures a single influxdb output destination."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"ENV")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"config")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"default")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"explanation"))))),Object(r.b)("p",null,'UP_INFLUXDB_URL \tinfluxdb.url \t"',Object(r.b)("a",{parentName:"p",href:"http://127.0.0.1:8086%22"},'http://127.0.0.1:8086"'),' \tinfluxdb URL\nUP_INFLUXDB_DB \tinfluxdb.db \t"unifi" \tname of database you created in influx\nUP_INFLUXDB_USER \tinfluxdb.user \t"unifipoller" \tusername with access to database\nUP_INFLUXDB_PASS \tinfluxdb.pass \t"unifipoller" \tpassword for username\nUP_INFLUXDB_INTERVAL \tinfluxdb.interval \t"30s" \thow often to poll and collect metrics, ie "1m" or "90s"'),Object(r.b)("h3",{id:"alternative-1---using-environment-variables"},"Alternative 1 - Using environment variables"),Object(r.b)("p",null,"If you are using the command line and have decided to use environment variables then start the container using the following command (changed as necessary to pass other environment variables)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'docker run -e UP_UNIFI_DEFAULT_PASS="your-secret-pasword" -d  golift/unifi-poller:latest\n')),Object(r.b)("h3",{id:"alternative-2---using-a-configuration-file"},"Alternative 2 - Using a configuration file"),Object(r.b)("p",null,"Alternatively, if you choose to use a configuration file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy this ",Object(r.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example"},"example config file")),Object(r.b)("li",{parentName:"ul"},"Edit it as necessary (in particular ensure that the ",Object(r.b)("inlineCode",{parentName:"li"},"[unifi]"),"/",Object(r.b)("inlineCode",{parentName:"li"},"user")," and ",Object(r.b)("inlineCode",{parentName:"li"},"pass")," variables are set)"),Object(r.b)("li",{parentName:"ul"},"Save it as ",Object(r.b)("inlineCode",{parentName:"li"},"unifi-poller.conf")," in the local location you use for Docker storage in a folder called `unifi-poller")),Object(r.b)("p",null,"xxx add in docker start"),Object(r.b)("p",null,"If all has worked then after it has downloaded and started you should start seeing lines like"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"unifi-poller    | 2020/06/18 12:08:50 [INFO] UniFi Metrics Recorded. Sites: 1, Clients: 67, UAP: 6, USG/UDM: 1, USW: 5, IDS Events: 0, Points: 1837, Fields: 11307, Errs: 0, Elapsed: 599ms\n")),Object(r.b)("p",null,"If you don't see this then go back and check what you have done so far"),Object(r.b)("h2",{id:"next-steps"},"Next steps"),Object(r.b)("p",null,"Go to the section Configuration / Final steps"))}s.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),s=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return n?l.a.createElement(m,o(o({ref:t},c),{},{components:n})):l.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);