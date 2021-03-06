(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(99)),o={id:"ins2",title:"Docker - using docker-compose"},l={unversionedId:"ins2",id:"ins2",isDocsHomePage:!1,title:"Docker - using docker-compose",description:"This page assumes that you have decided to start Unifi Poller using docker-compose. The setup detailed below will install containers for Unifi Poller, Grafana and InfluxDB",source:"@site/docs/ins2.md",slug:"/ins2",permalink:"/pollerdox/docs/ins2",version:"current",sidebar:"someSidebar",previous:{title:"Getting started",permalink:"/pollerdox/docs/ins1"},next:{title:"Docker - using command line",permalink:"/pollerdox/docs/ins3"}},c=[{value:"Before this",id:"before-this",children:[]},{value:"Installing the Unifi Poller package for Docker",id:"installing-the-unifi-poller-package-for-docker",children:[]},{value:"Starting up",id:"starting-up",children:[]},{value:"Next steps",id:"next-steps",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page assumes that you have decided to start Unifi Poller using ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose"),". The setup detailed below will install containers for Unifi Poller, Grafana and InfluxDB"),Object(r.b)("h2",{id:"before-this"},"Before this"),Object(r.b)("p",null,"Make sure you have set up a user on your controller for Unifi Poller to use"),Object(r.b)("h2",{id:"installing-the-unifi-poller-package-for-docker"},"Installing the Unifi Poller package for Docker"),Object(r.b)("p",null," Unifi Poller's Docker container can be configured for use in two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"by using environment variables or"),Object(r.b)("li",{parentName:"ul"},"via a configuration file")),Object(r.b)("p",null,"Which to use is a matter of personal choice. The environmental path has the advantage that all settings are in one place (albeit a hidden file, and one where all information is available to all containers). The config file method has the advantage that Unifi Poller specific settings can be saved in the same shared Docker folder as the rest of the app's data."),Object(r.b)("p",null,"There is a detailed description of the configuration parameters in ","[Config file and Environment variables]"," (ins9.md) below."),Object(r.b)("p",null,"Both of the alternatives described here will pull containers not just for Unifi Poller, but also for InfluxDB and Grafana. If you wish to use existing instances then amend the files as necessary."),Object(r.b)("h4",{id:"alternative-1---using-environment-variables"},"Alternative 1 - Using environment variables"),Object(r.b)("p",null,"In order to pass environment variables via ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," you need to have a file called ",Object(r.b)("inlineCode",{parentName:"p"},".env")," in the same folder as the ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," yaml file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy the example ",Object(r.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/unifi-poller/blob/master/init/docker/docker-compose.env.example"},"environment file")),Object(r.b)("li",{parentName:"ul"},"Edit it as necessary (in particular ensure that ",Object(r.b)("inlineCode",{parentName:"li"},"UNIFI_USER")," and ",Object(r.b)("inlineCode",{parentName:"li"},"UNIFI_PASS")," are set)"),Object(r.b)("li",{parentName:"ul"},"Save it as ",Object(r.b)("inlineCode",{parentName:"li"},".env")," in the same folder as your ",Object(r.b)("inlineCode",{parentName:"li"},"docker-compose.yml")," (if you have one; if not see below)")),Object(r.b)("p",null,"Download the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/blob/master/init/docker/docker-compose.yml"},"example")," ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," and add it to your existing one (if you have one; if not just make sure it is saved in the same folder as the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file)"),Object(r.b)("h4",{id:"alternative-2---using-a-configuration-file"},"Alternative 2 - Using a configuration file"),Object(r.b)("p",null,"Alternatively, if you choose to use a configuration file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy the example ",Object(r.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example"},"config file")),Object(r.b)("li",{parentName:"ul"},"Edit it as necessary (in particular ensure that the ",Object(r.b)("inlineCode",{parentName:"li"},"[unifi]"),"/",Object(r.b)("inlineCode",{parentName:"li"},"user")," and ",Object(r.b)("inlineCode",{parentName:"li"},"pass")," variables are set)"),Object(r.b)("li",{parentName:"ul"},"In the ",Object(r.b)("inlineCode",{parentName:"li"},"[influxdb]")," section change ",Object(r.b)("inlineCode",{parentName:"li"},'url  = "http://127.0.0.1:8086"')," to become ",Object(r.b)("inlineCode",{parentName:"li"},'url  = "http://THE_IP_OF_YOUR_DOCKER_HOST:8086"')),Object(r.b)("li",{parentName:"ul"},"Save it as ",Object(r.b)("inlineCode",{parentName:"li"},"unifi-poller.conf")," in the local location you use for Docker storage in a folder called ",Object(r.b)("inlineCode",{parentName:"li"},"unifi-poller"))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Whichever alternative you choose make sure that you do ",Object(r.b)("strong",{parentName:"p"},"not")," include ",Object(r.b)("inlineCode",{parentName:"p"},":8443")," on the url of the controller if you are using ",Object(r.b)("inlineCode",{parentName:"p"},"unifios")," (that is, a UDM-Pro, UDM, or Ckoudkey with modern firmware)"))),Object(r.b)("p",null,"Add the following to your ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," after amending ",Object(r.b)("inlineCode",{parentName:"p"},"YOURLOCALPATH")," to be the local location you use for Docker storage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"version: \"3\"\nservices:\n  influxdb:\n    container_name: up_influxdb\n    restart: unless-stopped\n    image: influxdb:1.8\n    ports:\n      - '8086:8086'\n    volumes:\n      - /YOURLOCALPATH/influxdb:/var/lib/influxdb\n    environment:\n      - INFLUXDB_DB=unifi\n      - INFLUXDB_ADMIN_USER=unifi\n      - INFLUXDB_ADMIN_PASSWORD=unifi\n\n  grafana:\n    container_name: up_grafana\n    image: grafana/grafana\n    restart: unless-stopped\n    ports:\n      - '3000:3000'\n    volumes:\n      - /YOURLOCALPATH/grafana:/var/lib/grafana\n    depends_on:\n      - influxdb\n    environment:\n      - GF_SECURITY_ADMIN_USER=admin\n      - GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel\n\n  unifi-poller:\n    container_name: up-poller\n    restart: unless-stopped\n    image: golift/unifi-poller:latest\n    depends_on:\n      - influxdb\n      - grafana\n    volumes:\n      - /YOURLOCALPATH/unifi-poller:/config\n")),Object(r.b)("h2",{id:"starting-up"},"Starting up"),Object(r.b)("p",null,"Whichever alternative you chose, all that is need to pull the containers and start them is a simple\n",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose up")),Object(r.b)("p",null,"If all has worked then after it has downloaded and started you should start seeing lines like"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"unifi-poller    | 2020/06/18 12:08:50 [INFO] UniFi Metrics Recorded. Sites: 1, Clients: 67, UAP: 6, USG/UDM: 1, USW: 5, IDS Events: 0, Points: 1837, Fields: 11307, Errs: 0, Elapsed: 599ms\n")),Object(r.b)("p",null,"If you don't see this then go back and check what you have done so far"),Object(r.b)("p",null,"Finally, start the containers in a daemonised fashion, just stop the ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," and run ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose up -d")),Object(r.b)("h2",{id:"next-steps"},"Next steps"),Object(r.b)("p",null,"Go to the section ",Object(r.b)("a",{parentName:"p",href:"/pollerdox/docs/ins10"},"Final steps")))}p.isMDXComponent=!0},99:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,f=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return t?i.a.createElement(f,l(l({ref:n},s),{},{components:t})):i.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);