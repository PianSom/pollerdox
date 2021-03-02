(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(96)),l={id:"conf1",title:"Final steps"},i={unversionedId:"conf1",id:"conf1",isDocsHomePage:!1,title:"Final steps",description:"This page assume that you have successfully completed the installation of Unifi Poller, Grafana and either InfluxDB Or Prometheus.",source:"@site/docs/conf1.md",slug:"/conf1",permalink:"/pollerdox/docs/conf1",version:"current",sidebar:"someSidebar",previous:{title:"NAS - Synology",permalink:"/pollerdox/docs/ins8"},next:{title:"Troubleshooting",permalink:"/pollerdox/docs/tro1"}},b=[{value:"Before this",id:"before-this",children:[]},{value:"1 - Only for InfluxDB users",id:"1---only-for-influxdb-users",children:[]},{value:"2 - Configuring Grafana Datasource",id:"2---configuring-grafana-datasource",children:[]},{value:"3 - Import Grafana Dashboards",id:"3---import-grafana-dashboards",children:[{value:"Recommendations",id:"recommendations",children:[]},{value:"Import Dashboards",id:"import-dashboards",children:[]}]}],s={toc:b};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page assume that you have successfully completed the installation of Unifi Poller, Grafana and either InfluxDB Or Prometheus."),Object(o.b)("h2",{id:"before-this"},"Before this"),Object(o.b)("p",null,"You should have seen log entries showing that data has been collected by Unifi Poller, and should be able to see that data is arriving in the database."),Object(o.b)("p",null,"There are just a few remaining steps to complete the installation"),Object(o.b)("h2",{id:"1---only-for-influxdb-users"},"1 - Only for InfluxDB users"),Object(o.b)("p",null,"Although InfluxDB is up and running, you need to set up the database which was referenced in the configuration. Get shell access to wherever it is and run the command ",Object(o.b)("inlineCode",{parentName:"p"},"influx")),Object(o.b)("p",null,"Create the database:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"influx -host localhost -port 8086\nCREATE DATABASE unifi\nUSE unifi\nCREATE USER unifipoller WITH PASSWORD 'unifipoller' WITH ALL PRIVILEGES\nGRANT ALL ON unifi TO unifipoller\n")),Object(o.b)("p",null,"Optionally - and this is a very sensible idea - set limits on how much data you wish to retain by implementing a retention policy. For example, to hold data for 32 days add the command"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"CREATE RETENTION POLICY retention_policy ON unifi DURATION 32d REPLICATION 1\n")),Object(o.b)("p",null,"(if ever you need to reset the database it can be deleted by the command ",Object(o.b)("inlineCode",{parentName:"p"},"DROP DATABASE unifi")," and then recreated using the commands above.)"),Object(o.b)("h2",{id:"2---configuring-grafana-datasource"},"2 - Configuring Grafana Datasource"),Object(o.b)("p",null,"Grafana needs to be set up to use the database that Poller is writing to as a source. Here we set out the steps for InfluxDB; the Prometheus steps are very similar"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click Add your first data source on the home page you see after logon."),Object(o.b)("li",{parentName:"ul"},"Select the influxdb option"),Object(o.b)("li",{parentName:"ul"},"Set the following fields:\nName = UniFi InfluxDB (or whatever name you want) and set to default\nURL = http://influxdb1:8086\nDatabase = unifi\nUsername = unifipoller\nPassword = unifipoller"),Object(o.b)("li",{parentName:"ul"},"No other fields need to be changed or set on this page."),Object(o.b)("li",{parentName:"ul"},"Click Save & Test"),Object(o.b)("li",{parentName:"ul"},"You should get green banner above the save and test that says 'Data Source is Working'"),Object(o.b)("li",{parentName:"ul"},"To return to the homepage click the icon with 4 squares on the left nav-bar and select home")),Object(o.b)("h2",{id:"3---import-grafana-dashboards"},"3 - Import Grafana Dashboards"),Object(o.b)("p",null,"This project provides a few Grafana dashboards. They are available on ",Object(o.b)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards"},"Grafana.com"),"."),Object(o.b)("p",null,"Keep in mind these dashboards are just examples. You should make a single dedicated folder in Grafana to keep all of them in, and copy the graphs to new dashboards that you want to maintain. From time to time I will release new features (like multi-site support and multi-controller support) that brings new benefits to the existing dashboards. When that happens I update them. Keeping an example set allows you to update too, inspect the changes, and apply them to your own custom dashboards."),Object(o.b)("h3",{id:"recommendations"},"Recommendations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Import the provided dashboards into their own folder, so they're easy to find.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Do not make one folder per dashboard."),Object(o.b)("li",{parentName:"ul"},"Make one folder for all of them."),Object(o.b)("li",{parentName:"ul"},"The folder name cannot be the same as the dashboard names, or Grafana will throw an error."))),Object(o.b)("li",{parentName:"ul"},"Changing the unique identifier allows you to re-import a dashboard, but this is not recommended."),Object(o.b)("li",{parentName:"ul"},"Don't edit them, instead:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Copy these dashboards or graphs to your own."),Object(o.b)("li",{parentName:"ul"},"Edit the copies to get the data how you want it."),Object(o.b)("li",{parentName:"ul"},"Keeping the original dashboards unedited allows you to continue referencing them, and copying graphs out of them."),Object(o.b)("li",{parentName:"ul"},"This also allows you to identify problems with them and open an Issue.")))),Object(o.b)("h3",{id:"import-dashboards"},"Import Dashboards"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Simply click the + on the left nav bar in Grafana and click Import."),Object(o.b)("li",{parentName:"ul"},"Put in the ID for the dashboard (below) and click the blue Load button."),Object(o.b)("li",{parentName:"ul"},"Select the InfluxDB or Prometheus data source you created previously."),Object(o.b)("li",{parentName:"ul"},"Click the Green Import button on the last screen.")),Object(o.b)("p",null,"Repeat this for each dashboard you want. The IDs for each database platform are below. You only need Prometheus or Influx, not both. Unless you really want both."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"App"),Object(o.b)("th",{parentName:"tr",align:null},"Prometheus ID"),Object(o.b)("th",{parentName:"tr",align:null},"Influx ID"),Object(o.b)("th",{parentName:"tr",align:null},"Get this if you..."))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Client DPI"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://grafana.com/grafana/dashboards/11310"},"11310")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://grafana.com/grafana/dashboards/10419"},"10419")),Object(o.b)("td",{parentName:"tr",align:null},"...enabled ",Object(o.b)("inlineCode",{parentName:"td"},"save_dpi")," in the config")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Sites"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://grafana.com/grafana/dashboards/11311"},"11311")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://grafana.com/grafana/dashboards/10414"},"10414")),Object(o.b)("td",{parentName:"tr",align:null},"...enabled ",Object(o.b)("inlineCode",{parentName:"td"},"save_sites"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"USW"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://grafana.com/grafana/dashboards/11312"},"11312")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://grafana.com/grafana/dashboards/10417"},"10417")),Object(o.b)("td",{parentName:"tr",align:null},"...have UniFi Switches")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"USG"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://grafana.com/grafana/dashboards/11313"},"11313")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://grafana.com/grafana/dashboards/10416"},"10416")),Object(o.b)("td",{parentName:"tr",align:null},"...have a UniFi gateway (UDM-P, UDM, USG, ...)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"UAP"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://grafana.com/grafana/dashboards/11314"},"11314")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://grafana.com/grafana/dashboards/10416"},"10415")),Object(o.b)("td",{parentName:"tr",align:null},"...have UniFi Access Points")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Clients"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://grafana.com/grafana/dashboards/11315"},"11315")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://grafana.com/grafana/dashboards/10418"},"10418")),Object(o.b)("td",{parentName:"tr",align:null},"...love nano")))),Object(o.b)("h4",{id:"dashboard-update-notes"},"Dashboard Update Notes"),Object(o.b)("p",null,"When the dashboards are updated, you have a couple options to update them in Grafana. You can either import them and replace the existing ones (use the same unique identifier), or you can import them as fresh new dashboards by changing the unique identifier. This allows you to keep updating the provided dashboards while maintaining your own. From time to time the dashboards get new features, new graphs, new variables, etc. Giving yourself an easy way to import the updated dashboards provided by this project is ideal. You're able to inspect the changes and apply them to your dashboards with this method."))}d.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),c=d(a),p=n,h=c["".concat(l,".").concat(p)]||c[p]||u[p]||o;return a?r.a.createElement(h,i(i({ref:t},s),{},{components:a})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);