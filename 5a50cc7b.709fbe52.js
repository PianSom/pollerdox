(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(97)),b={id:"ins9",title:"Config file and Environment variables"},i={unversionedId:"ins9",id:"ins9",isDocsHomePage:!1,title:"Config file and Environment variables",description:"This page describes the two methods for configuring Unifi Poller.",source:"@site/docs/ins9.md",slug:"/ins9",permalink:"/pollerdox/docs/ins9",version:"current",sidebar:"someSidebar",previous:{title:"NAS - Synology",permalink:"/pollerdox/docs/ins8"},next:{title:"Final steps",permalink:"/pollerdox/docs/conf1"}},o=[],c={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This page describes the two methods for configuring Unifi Poller."),Object(l.b)("p",null,"Unifi Poller can be configured for use in two ways:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"by using environment variables (often used in a Docker) or"),Object(l.b)("li",{parentName:"ul"},"via a configuration file")),Object(l.b)("p",null,"Which to use is a matter of personal choice. The environmental path has the advantage that all settings are in one place. The config file method has the advantage that Unifi Poller specific settings can be saved in the same shared Docker folder as the rest of the app's data."),Object(l.b)("p",null,"The variables to be set can be split into three categories:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Configuration of Unifi Poller iteslf"),Object(l.b)("li",{parentName:"ol"},"Configuration of the Unifi and the controller(s) (multiple controllers are permitted for different sites)"),Object(l.b)("li",{parentName:"ol"},"Configuration of the output database(s) (Unifi Poller will output to both InfluxDB and Prometheus if desired)")),Object(l.b)("p",null,"More documentation on the configuration options is included in the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example"},"sample configuration file")," on the repo"),Object(l.b)("h4",{id:"1-unifi-poller"},"1 Unifi Poller"),Object(l.b)("p",null,"The poller section begins with the ",Object(l.b)("inlineCode",{parentName:"p"},"[poller]")," header and has the parameters below. These control overall behavior of the application."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"ENV")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"config")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"default and explanation")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_POLLER_DEBUG"),Object(l.b)("td",{parentName:"tr",align:null},"debug"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"),"  turns on debug messages")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_POLLER_QUIET"),Object(l.b)("td",{parentName:"tr",align:null},"quiet"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"),"\tturns off timer messages")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_POLLER_PLUGINS_0"),Object(l.b)("td",{parentName:"tr",align:null},"plugins"),Object(l.b)("td",{parentName:"tr",align:null},"file list - ",Object(l.b)("inlineCode",{parentName:"td"},"empty"),";\tadvanced! plugin file, use _1, _2, etc to add more")))),Object(l.b)("h4",{id:"2-unifi-and-controller"},"2 Unifi and controller"),Object(l.b)("p",null,"The unifi section begins with the ",Object(l.b)("inlineCode",{parentName:"p"},"[unifi]")," header and has the following parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"ENV")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"config")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"default and explanation")),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DISABLE"),Object(l.b)("td",{parentName:"tr",align:null},"disable"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"),"  turns off this input. don't do that!"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DYNAMIC"),Object(l.b)("td",{parentName:"tr",align:null},"dynamic"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"),"  enables dynamic lookups (from prometheus)"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_ROLE"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.defaults.role"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"URL")," allows grouping controllers"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_URL"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.defaults.url"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"https://127.0.0.1:8443"')," only applies if no controllers are defined (next section)"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_USER"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.defaults.user"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"unifipoller"')," default applies to any controller without a username"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_PASS"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.defaults.pass"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'""')," default applies to any controller without a password"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_SITES"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_sites"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_IDS"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_ids"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_EVENTS"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_events"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki, added in v2.0.2"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_ALARMS"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_alarms"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki, added in v2.0.2"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_ANOMALIES"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_anomalies"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki, added in v2.0.2"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_DPI"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_dpi"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_VERIFY_SSL"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.defaults.verify_ssl"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SITE_0"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.defaults.site.0"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'["all"]')," specify more sites with _1, _2, etc."),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("div",{className:"admonition admonition-important alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Whichever alternative you choose make sure that you do ",Object(l.b)("strong",{parentName:"p"},"not")," include ",Object(l.b)("inlineCode",{parentName:"p"},":8443")," on the url of the controller if you are using ",Object(l.b)("inlineCode",{parentName:"p"},"unifios")," (that is, a UDM-Pro, UDM, or Ckoudkey with modern firmware)"))),Object(l.b)("p",null,"You can configure a single controller by setting the ",Object(l.b)("inlineCode",{parentName:"p"},"UP_UNIFI_DEFAULT")," variables above, but you can also configure a single, or multiple controllers by setting the variables below. These, like most, are optional."),Object(l.b)("p",null,"You may repeat the ",Object(l.b)("inlineCode",{parentName:"p"},"[[unifi.controller]]")," section as many times as you want to add more controllers. If you're configuring controllers using env variables, start at",Object(l.b)("inlineCode",{parentName:"p"}," _0")," and change ",Object(l.b)("inlineCode",{parentName:"p"},"_0")," to ",Object(l.b)("inlineCode",{parentName:"p"},"_1")," to add a second, then ",Object(l.b)("inlineCode",{parentName:"p"},"_2")," and so on."),Object(l.b)("p",null,"Like any configured list, you may configure controllers with a file or env vars, or both."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"ENV")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"config")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"default and explanation")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_ROLE"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.controller.role"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"URL")," allows grouping controllers, default applies to any controller without a role")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_URL"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.controller.url"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"https://127.0.0.1:8443"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_USER"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.controller.user"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"unifipoller"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_PASS"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.controller.pass"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'""'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SAVE_SITES"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.controller.save_sites"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true")," Powers Network Sites dashboard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SAVE_IDS"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.controller.save_ids"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SAVE_EVENTS"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.controller.save_events"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki, added in v2.0.2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SAVE_ALARMS"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.controller.save_alarms"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki, added in v2.0.2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SAVE_ANOMALIES"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.controller.save_anomalies"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki, added in v2.0.2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SAVE_DPI"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.controller.save_dpi"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")," Powers DPI dashboard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_VERIFY_SSL"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.controller.verify_ssl"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false")," Verify controller SSL certificate")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SITE_0"),Object(l.b)("td",{parentName:"tr",align:null},"unifi.controller.site.0"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'["all"]')," specify more sites with _1, _2, etc")))),Object(l.b)("h4",{id:"3-output"},"3 Output"),Object(l.b)("h5",{id:"prometheus"},"Prometheus"),Object(l.b)("p",null,"This section begins with ",Object(l.b)("inlineCode",{parentName:"p"},"[prometheus]")," and configures an HTTP listener where a scrape daemon, such as Prometheus may obtain metrics. See the Prometheus wiki page for Prometheus configuration instructions."),Object(l.b)("p",null,"While Prometheus provides some configuration parameters, you shouldn't change them. If you don't use Prometheus, set ",Object(l.b)("inlineCode",{parentName:"p"},"disable")," to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"ENV")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"config")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"default and explanation")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_PROMETHEUS_DISABLE"),Object(l.b)("td",{parentName:"tr",align:null},"prometheus.disable"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_PROMETHEUS_NAMESPACE"),Object(l.b)("td",{parentName:"tr",align:null},"prometheus.namespace"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"unifipoller"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_PROMETHEUS_HTTP_LISTEN"),Object(l.b)("td",{parentName:"tr",align:null},"prometheus.http_listen"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0.0.0.0:9130"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_PROMETHEUS_REPORT_ERRORS"),Object(l.b)("td",{parentName:"tr",align:null},"prometheus.report_errors"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_PROMETHEUS_BUFFER"),Object(l.b)("td",{parentName:"tr",align:null},"prometheus.buffer"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"50"))))),Object(l.b)("h5",{id:"influxdb"},"InfluxDB"),Object(l.b)("p",null,"This section begins with ",Object(l.b)("inlineCode",{parentName:"p"},"[influxdb]")," and configures a single influxdb output destination."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"ENV")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"config")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"default and explanation")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_INFLUXDB_URL"),Object(l.b)("td",{parentName:"tr",align:null},"influxdb.url"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"http://127.0.0.1:8086"')," \tinfluxdb URL")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_INFLUXDB_DB"),Object(l.b)("td",{parentName:"tr",align:null},"influxdb.db"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"unifi"')," \tname of database you created in influx")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_INFLUXDB_USER"),Object(l.b)("td",{parentName:"tr",align:null},"influxdb.user"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"unifipoller"')," \tusername with access to database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_INFLUXDB_PASS"),Object(l.b)("td",{parentName:"tr",align:null},"influxdb.pass"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"unifipoller"')," \tpassword for username")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UP_INFLUXDB_INTERVAL"),Object(l.b)("td",{parentName:"tr",align:null},"influxdb.interval"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"30s"'),' \thow often to poll and collect metrics, ie "1m" or "90s"')))))}p.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,O=d["".concat(b,".").concat(m)]||d[m]||u[m]||l;return n?r.a.createElement(O,i(i({ref:t},c),{},{components:n})):r.a.createElement(O,i({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var c=2;c<l;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);