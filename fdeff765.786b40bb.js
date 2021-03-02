(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),i=(n(0),n(96)),r={id:"ins6",title:"Bare metal - Linux/MacOS"},o={unversionedId:"ins6",id:"ins6",isDocsHomePage:!1,title:"Bare metal - Linux/MacOS",description:"This page assumes that you have decided to install Unifi Poller on to an existing Linux operating system",source:"@site/docs/ins6.md",slug:"/ins6",permalink:"/pollerdox/docs/ins6",version:"current",sidebar:"someSidebar",previous:{title:"Bare metal - FreeBSD",permalink:"/pollerdox/docs/ins5"},next:{title:"Bare metal - Windows",permalink:"/pollerdox/docs/ins7"}},c=[{value:"Before this",id:"before-this",children:[]},{value:"Linux",id:"linux",children:[{value:"RedHat variants (CentOS, Fedora)",id:"redhat-variants-centos-fedora",children:[]},{value:"Debian variants (Ubuntu, Knoppix)",id:"debian-variants-ubuntu-knoppix",children:[]}]},{value:"MacOS - brew",id:"macos---brew",children:[]},{value:"Manual package",id:"manual-package",children:[]},{value:"Linux post-install",id:"linux-post-install",children:[]},{value:"Grafana Plugins",id:"grafana-plugins",children:[]},{value:"Next steps",id:"next-steps",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page assumes that you have decided to install Unifi Poller on to an existing Linux operating system"),Object(i.b)("h2",{id:"before-this"},"Before this"),Object(i.b)("p",null,"Make sure you have set up a user on your controller for Unifi Poller to use"),Object(i.b)("p",null,"It is assumed that you have working (and supported) versions of Grafana (though see the Plugins section below) and at least one of InfluxDB/Prometheus"),Object(i.b)("h2",{id:"linux"},"Linux"),Object(i.b)("p",null,"JFrog Bintray provides package hosting with RedHat, CentOS, Debian and Ubuntu repos."),Object(i.b)("p",null,"Follow these directions to configure the repo and install poller."),Object(i.b)("p",null,"The same package is in all the repos, but you can set the name to match your OS as shown below."),Object(i.b)("h3",{id:"redhat-variants-centos-fedora"},"RedHat variants (CentOS, Fedora)"),Object(i.b)("p",null,"Create a file at ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/yum.repos.d/golift.repo")," with the following contents. You may replace ",Object(i.b)("inlineCode",{parentName:"p"},"centos")," with ",Object(i.b)("inlineCode",{parentName:"p"},"el"),", but they're the same thing either way."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    [golift]\n    name=Go Lift Awesomeness - Main Repo\n    baseurl=https://dl.bintray.com/golift/centos/main/$basearch/\n    gpgcheck=1\n    repo_gpgcheck=1\n    enabled=1\n    sslverify=1\n    gpgkey=https://golift.io/gpgkey\n")),Object(i.b)("p",null,"Then install the package: ",Object(i.b)("inlineCode",{parentName:"p"},"sudo yum install unifi-poller"),"\nYou'll have to respond ",Object(i.b)("inlineCode",{parentName:"p"},"yes")," to the prompts to install the Go Lift GPG key."),Object(i.b)("h3",{id:"debian-variants-ubuntu-knoppix"},"Debian variants (Ubuntu, Knoppix)"),Object(i.b)("p",null,"Install the repo and package using the commands below.\nReplace ",Object(i.b)("inlineCode",{parentName:"p"},"ubuntu")," with ",Object(i.b)("inlineCode",{parentName:"p"},"debian")," if you have Debian."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    curl -s https://golift.io/gpgkey | sudo apt-key add -\n    echo deb https://dl.bintray.com/golift/ubuntu bionic main | sudo tee /etc/apt/sources.list.d/golift.list\n    sudo apt update\n    sudo apt install unifi-poller\n")),Object(i.b)("p",null,"Supported distributions:\n",Object(i.b)("inlineCode",{parentName:"p"},"xenial"),", ",Object(i.b)("inlineCode",{parentName:"p"},"bionic"),", ",Object(i.b)("inlineCode",{parentName:"p"},"focal"),", ",Object(i.b)("inlineCode",{parentName:"p"},"jesse"),", ",Object(i.b)("inlineCode",{parentName:"p"},"stretch"),", ",Object(i.b)("inlineCode",{parentName:"p"},"buster"),", ",Object(i.b)("inlineCode",{parentName:"p"},"bullseye"),"\nIf you have another distro, try one of these ^ (they're all the same)."),Object(i.b)("h2",{id:"macos---brew"},"MacOS - brew"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Install ",Object(i.b)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"brew install golift/mugs/unifi-poller")),Object(i.b)("li",{parentName:"ol"},"Edit the config file after installing the brew:"),Object(i.b)("li",{parentName:"ol"},"Start the service")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"nano /usr/local/etc/unifi-poller/up.conf\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"vi /usr/local/etc/unifi-poller/up.conf\n")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Do the first step of Linux post-install below, but then ..."),Object(i.b)("li",{parentName:"ol"},"Start the service:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# do not use sudo\nbrew services start unifi-poller\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The log file should show up at ",Object(i.b)("inlineCode",{parentName:"li"},"/usr/local/var/log/unifi-poller.log")),Object(i.b)("li",{parentName:"ul"},"If it does not show up, make sure your user has permissions to create the file")),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"To restart (",Object(i.b)("strong",{parentName:"li"}," required after upgrade"),")")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"brew services restart unifi-poller\n")),Object(i.b)("h2",{id:"manual-package"},"Manual package"),Object(i.b)("p",null,"Recommend reading the note at the bottom if you're using a mac."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Install ",Object(i.b)("a",{parentName:"li",href:"https://fpm.readthedocs.io/en/latest/installing.html"},"FPM")),Object(i.b)("li",{parentName:"ol"},"Install ",Object(i.b)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Go")),Object(i.b)("li",{parentName:"ol"},"Clone this repo and change your working directory to the checkout.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    git clone https://github.com/unifi-poller/unifi-poller.git\n    cd unifi-poller\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Install local Golang dependencies:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Build a package (or two!):",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"make deb")," will build a Debian package"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"make rpm")," builds a RHEL package."))),Object(i.b)("li",{parentName:"ul"},"Install it:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo dpkg -i *.deb || sudo rpm -Uvh *.rpm"))))),Object(i.b)("h4",{id:"manual-build-notes"},"Manual Build Notes"),Object(i.b)("p",null,"If you're building linux packages on a mac you can run ",Object(i.b)("inlineCode",{parentName:"p"},"brew install rpmbuild gnu-tar")," to get the additional tools you need. That means you're going to need Homebrew. And if you're going to install Homebrew, or already have, you can simply do something like this to get your Go environment up and build the packages:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"brew install rpmbuild gnu-tar go dep\nsudo gem install --no-document fpm\nmkdir ~/go/{src,mod}\nexport GOPATH=~/go\ncd ~go/src\ngit clone https://github.com/unifi-poller/unifi-poller.git\ncd unifi-poller\nmake rpm deb\n")),Object(i.b)("h2",{id:"linux-post-install"},"Linux post-install"),Object(i.b)("p",null,"See the Configuration doc and the example config file for additional post-install configuration information."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Edit the config file after installing the package, and correct the authentication information for your setup:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    sudo nano /etc/unifi-poller/up.conf\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    sudo vi /etc/unifi-poller/up.conf\n")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Do ",Object(i.b)("strong",{parentName:"p"},"not")," include ",Object(i.b)("inlineCode",{parentName:"p"},":8443")," on the url of the controller if you are using ",Object(i.b)("inlineCode",{parentName:"p"},"unifios")," (that is, a UDM-Pro, UDM, or Ckoudkey with modern firmware)"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Restart the service:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    sudo systemctl restart unifi-poller\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Check the log:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    tail -f -n100  /var/log/syslog /var/log/messages | grep unifi-poller\n")),Object(i.b)("h2",{id:"grafana-plugins"},"Grafana Plugins"),Object(i.b)("p",null,"This application uses a few Grafana plugins. Install them:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Clock, Discrete (InfluxDB only), PieChart, Singlestat (standard), Table (standard)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"grafana-cli plugins install grafana-clock-panel\ngrafana-cli plugins install natel-discrete-panel\ngrafana-cli plugins install grafana-piechart-panel\n")),Object(i.b)("p",null,"If you're running Grafana in Docker, pass this environment variable/value to Grafana to install the plugins:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel\n")),Object(i.b)("h2",{id:"next-steps"},"Next steps"),Object(i.b)("p",null,"Go to the section Configuration / Final steps"))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),p=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(r,".").concat(d)]||s[d]||u[d]||i;return n?l.a.createElement(m,o(o({ref:t},b),{},{components:n})):l.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var b=2;b<i;b++)r[b]=n[b];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);