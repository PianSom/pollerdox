(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(3),a=t(7),r=(t(0),t(93)),o={id:"ins2",title:"Docker - using docker-compose"},l={unversionedId:"ins2",id:"ins2",isDocsHomePage:!1,title:"Docker - using docker-compose",description:"This page assumes that you have decided to start Unifi Poller using docker-compose",source:"@site/docs/ins2.md",slug:"/ins2",permalink:"/pollerdox/docs/ins2",version:"current",sidebar:"someSidebar",previous:{title:"Getting started",permalink:"/pollerdox/docs/ins1"},next:{title:"Docker - using command line",permalink:"/pollerdox/docs/ins3"}},c=[{value:"Before this",id:"before-this",children:[]},{value:"Configuring Unifi Poller for Docker",id:"configuring-unifi-poller-for-docker",children:[{value:"Alternative 2 - Using a configuration file",id:"alternative-2---using-a-configuration-file",children:[]}]},{value:"Starting up",id:"starting-up",children:[]},{value:"Next steps",id:"next-steps",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page assumes that you have decided to start Unifi Poller using ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")),Object(r.b)("h2",{id:"before-this"},"Before this"),Object(r.b)("p",null,"Make sure you have set up a user on your controller for Unifi Poller to use"),Object(r.b)("h2",{id:"configuring-unifi-poller-for-docker"},"Configuring Unifi Poller for Docker"),Object(r.b)("p",null," Unifi Poller's Docker container can be configured for use in two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"by using environment variables or"),Object(r.b)("li",{parentName:"ul"},"via a configuration file")),Object(r.b)("p",null,"Which to use is a matter of personal choice. The environmental path has the advantage that all settings are in one place (albeit a hidden file, and one where all information is available to all containers). The config file method has the advantage that Unifi Poller specific settings can be saved in the same shared Docker folder as the rest of the app's data."),Object(r.b)("p",null,"(Both of the alternatives described here will pull containers not just for Unifi Poller, but also for InfluxDB and Grafana. If you wish to use existing instances then amend the files as necessary.)"),Object(r.b)("h4",{id:"alternative-1---using-environment-variables"},"Alternative 1 - Using environment variables"),Object(r.b)("p",null,"In order to pass environment variables via ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," you need to have a file called ",Object(r.b)("inlineCode",{parentName:"p"},".env")," in the same folder as the ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," yaml file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy the example ",Object(r.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/unifi-poller/blob/master/init/docker/docker-compose.env.example"},"environment file")),Object(r.b)("li",{parentName:"ul"},"Edit it as necessary (in particular ensure that ",Object(r.b)("inlineCode",{parentName:"li"},"UNIFI_USER")," and ",Object(r.b)("inlineCode",{parentName:"li"},"UNIFI_PASS")," are set)"),Object(r.b)("li",{parentName:"ul"},"Save it as ",Object(r.b)("inlineCode",{parentName:"li"},".env")," in the same folder as your ",Object(r.b)("inlineCode",{parentName:"li"},"docker-compose.yml")," (if you have one; if not see below)")),Object(r.b)("p",null,"Download the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/blob/master/init/docker/docker-compose.yml"},"example")," ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," and add it to your existing one (if you have one; if not just make sure it is saved in the same folder as the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file)"),Object(r.b)("h3",{id:"alternative-2---using-a-configuration-file"},"Alternative 2 - Using a configuration file"),Object(r.b)("p",null,"Alternatively, if you choose to use a configuration file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy this ",Object(r.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example"},"example config file")),Object(r.b)("li",{parentName:"ul"},"Edit it as necessary (in particular ensure that the ",Object(r.b)("inlineCode",{parentName:"li"},"[unifi]"),"/",Object(r.b)("inlineCode",{parentName:"li"},"user")," and ",Object(r.b)("inlineCode",{parentName:"li"},"pass")," variables are set)"),Object(r.b)("li",{parentName:"ul"},"Save it as ",Object(r.b)("inlineCode",{parentName:"li"},"unifi-poller.conf")," in the local location you use for Docker storage in a folder called ",Object(r.b)("inlineCode",{parentName:"li"},"unifi-poller"))),Object(r.b)("p",null,"Add the following to your ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," after amending ",Object(r.b)("inlineCode",{parentName:"p"},"YOURLOCALPATH")," to be the local location you use for Docker storage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"version: \"3\"\nservices:\n  influxdb:\n    container_name: up_influxdb\n    restart: unless-stopped\n    image: influxdb:latest\n    ports:\n      - '8086:8086'\n    volumes:\n      - /YOURLOCALPATH/influxdb:/var/lib/influxdb\n    environment:\n      - INFLUXDB_DB=unifi\n      - INFLUXDB_ADMIN_USER=unifi\n      - INFLUXDB_ADMIN_PASSWORD=unifi\n\n  grafana:\n    container_name: up_grafana\n    image: grafana/grafana\n    restart: unless-stopped\n    ports:\n      - '3000:3000'\n    volumes:\n      - /YOURLOCALPATH/grafana:/var/lib/grafana\n    depends_on:\n      - influxdb\n    environment:\n      - GF_SECURITY_ADMIN_USER=admin\n      - GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel\n\n  unifi-poller:\n    container_name: up-poller\n    restart: unless-stopped\n    image: golift/unifi-poller:latest\n    depends_on:\n      - influxdb\n      - grafana\n    volumes:\n      - /YOURLOCALPATH/unifi-poller:/config\n")),Object(r.b)("h2",{id:"starting-up"},"Starting up"),Object(r.b)("p",null,"Whichever alternative you chose, all that is need to pull the containers and start them is a simple\n",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose up")),Object(r.b)("p",null,"If all has worked then after it has downloaded and started you should start seeing lines like"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"unifi-poller    | 2020/06/18 12:08:50 [INFO] UniFi Metrics Recorded. Sites: 1, Clients: 67, UAP: 6, USG/UDM: 1, USW: 5, IDS Events: 0, Points: 1837, Fields: 11307, Errs: 0, Elapsed: 599ms\n")),Object(r.b)("p",null,"If you don't see this then go back and check what you have done so far"),Object(r.b)("p",null,"Finally, start the containers in a daemonised fashion, just stop the ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," and run ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose up -d")),Object(r.b)("h2",{id:"next-steps"},"Next steps"),Object(r.b)("p",null,"Go to the section Configuration / Final steps"))}p.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return t?a.a.createElement(f,l(l({ref:n},s),{},{components:t})):a.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);