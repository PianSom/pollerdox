(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var o=t(3),a=t(7),r=(t(0),t(96)),i={id:"ins8",title:"NAS - Synology"},l={unversionedId:"ins8",id:"ins8",isDocsHomePage:!1,title:"NAS - Synology",description:"We are not claiming this is the only way to do this. However this is designed to use the official packages for UniFi Poller, InfluxDB and Grafana with the aim to make this maintainable as possible.",source:"@site/docs/ins8.md",slug:"/ins8",permalink:"/pollerdox/docs/ins8",version:"current",sidebar:"someSidebar",previous:{title:"Bare metal - Windows",permalink:"/pollerdox/docs/ins7"},next:{title:"Final steps",permalink:"/pollerdox/docs/conf1"}},s=[],c={toc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We are not claiming this is the only way to do this. However this is designed to use the official packages for UniFi Poller, InfluxDB and Grafana with the aim to make this maintainable as possible."),Object(r.b)("p",null,"We use a custom bridge network for some very good reasons and we highly recommend most people use it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"This ensures name resolution works between the containers without needing to use the deprecated link functionality\nThe default bridge on docker does NOT have name resolution enabled and requires mucking about with host files (this is a docker feature not anything to do with Synology)\nThis also means in the event the container IP changes (it happens) you don't need to reconfigure\nThis also means, due to the ICC, that no host port mappings are required other than for the Grafana 3000:3000 mapping in the Grafana contained, you can choose to remove other port mappings if you desire\nThe reason for not using host port mappings for container <> container comms is we keep this solution self-container and don't have to worry about weird things that might have been on the Synology (changing of Synology IP, other containers with host mappings etc). Customize in your environment as needed.\n")),Object(r.b)("p",null,"These instructions will let you use the Synology docker stop container action > clear container action > re-download the image > restart container to update to the latest. <---this still needs to be tested to confirm 100% - we may need to map in some more grafana dirs."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"NOTE: If you want to use this flow for updates you will need to use Method 1 for Grafana documented here.\n")),Object(r.b)("p",null,"Assumptions:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"You already installed Docker from package center.\nEnable SSH on Synology\n\nNote: you should always logon with your default admin account you created when you setup you Synology, logging on as root no longer works.\n")),Object(r.b)("p",null,"Prepare your UniFi controller"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Add a user to the UniFi Controller. After logging into your controller:\nGo to Settings -> Admins\nAdd a read-only user (e.g. unifipoller)\nThe new user needs access to each site. For each UniFi Site you want to poll, add admin via the 'Manually Set and Share the password' option. Other settings:\n\ndon't define an email\ndon't require password to be changed\nuse only uppercase, lowercase, numerals and the ! symbol and limit to 10 chars or less (some have had issues with anything else, once you have it all working feel free to play with longer more complex passwords)\n")),Object(r.b)("p",null,"Take note of this info, you need to put it into the unifi-poller config file in a moment\nPrepare Synology & Docker\nRun docker & configure network"),Object(r.b)("p",null,"Click on network and select add to create new network:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Name it something like Grafana_Net\nEnable IPv4\nEnsure 'Get network configuration automatically' is selected\nClick add\n")),Object(r.b)("p",null,"We do this because the default bridge doesn't have name resolution but new bridge do, so you don't have to mess with host files etc inside the container. (need to verify this is actually true)"),Object(r.b)("p",null,"I don't recommend you use host network, using the bridge network keeps it self contained at helps avoid conflicts with the host or other containers you might have that we cannot predict.\nPrepare mapped volumes"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Create the following structure in your preferred location (mine is a shared folder called docker) <note i am not sure which you absolutely need to pre-create might be good to test - hmm the structure below does not render correctly>\n    /docker/grafana and /docker/influxdb\n")),Object(r.b)("p",null,"Download needed images from the registry"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Select Registry\nUse the search box to find the following:\n    unifi-poller for golift/unifi-poller:latest https://hub.docker.com/r/golift/unifi-poller/\n    grafana for grafana/grafana:latest https://hub.docker.com/r/grafana/grafana/\n    influxdb for influxdb:latest https://hub.docker.com/_/influxdb/\n")),Object(r.b)("p",null,"Create influxdb container"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"In Image, select influxdb:latest and click launch\nLeave General Settings alone - container name should be influxdb1, unless you created other influxdb's\nClick Advanced Settings\nOn volume tab add the following:\n    The /docker/influxdb folder from above to mount path /var/lib/influxdb - leave as read/write\nOn the Network tab\n    Add your network - in this example: Grafana_Net\n    Remove the default bridge (usually called Bridge)\n    Ensure that 'use the same network as docker host' is unchecked\nOn port settings <--- why do i have host mapped port, not sure we need this for - this set of 3 as all traffic is internal\n    Change local port from Auto to one you have free on host - this makes it predictable. Something like 3456\n    Leave container port as 8086 and type as TCP\nOn environment tab add the following vars\n    INFLUXDB_DATA_DIR | /var/lib/influxdb/data\n    INFLUXDB_DATA_WAL_DIR | /var/lib/influxdb/wal\n    INFLUXDB_DATA_META_DIR | /var/lib/influxdb/meta\nFinalize container and:\n    Click APPLY\n    Click NEXT\n    Click APPLY\n")),Object(r.b)("p",null,"Create influx database"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Click Containers and then double click the running influxdb1 container\nSwitch to the terminal tab\nClick the drop down next to Create and select launch with command\nEnter bash and click ok\nSelect bash from the left hand side. You should now see a command prompt\nIn the command prompt, enter these commands: (note you can't copy and paste)\n    influx - after a couple of seconds you should be in the InfluxDB shell\n    Run the following commands in the InfluxDB shell, then close the window:\n")),Object(r.b)("p",null,"CREATE DATABASE unifi\nUSE unifi\nCREATE USER unifipoller WITH PASSWORD 'unifipoller' WITH ALL PRIVILEGES\nGRANT ALL ON unifi TO unifipoller\nexit"),Object(r.b)("p",null,"Note"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"We have not used any advanced aut setting of influx, this is for simplicity of instructions and tbh the data in this is not critical, if you have someone on your network who is malicious and figures out how to route into the containers you have bigger issues at hand.... you can remove the influxdb port mapping if that makes you feel better.... :-)\n")),Object(r.b)("p",null,"Create unifi-poller container"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"In Image select golift/unifi-poller:latest and click launch\nLeave general settings alone - container name should be golift-unifi-poller1, unless you created other unifi-pollers\nClick Advanced Settings\nOn the network tab:\n    Add your network, in this example, Grafana_Net\n    Remove the default bridge (usually called Bridge)\n    Ensure that 'use the same network as docker host' is unchecked\nOn the Environment tab, add the following vars:\n    UP_INFLUXDB_URL | http://influxdb1:8086\n    UP_UNIFI_DEFAULT_URL | https://your.unifi.controller.ip:8443\n    UP_UNIFI_DEFAULT_USER | username for account created earlier. e.g. unifipoller\n    UP_UNIFI_DEFAULT_PASS | password for above user\n    (optional) UP_POLLER_DEBUG | true\nFinalize the container by:\n    Click APPLY\n    Click NEXT\n    Click APPLY\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Do ",Object(r.b)("strong",{parentName:"p"},"not")," include ",Object(r.b)("inlineCode",{parentName:"p"},":8443")," on the url of the controller if you are using ",Object(r.b)("inlineCode",{parentName:"p"},"unifios")," (that is, a UDM-Pro, UDM, or Ckoudkey with modern firmware)"))),Object(r.b)("p",null,"Check that poller and influx are working"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Select the Container tab in the Docker UI\n\nDouble click golift-unifi-poller1\n\nSelect the Log tab\n\nAfter a couple of minutes you should see an entry like the following, if you do then everything is working ok:\n\n2019/09/14 22:43:09 [INFO] UniFi Measurements Recorded. Sites: 1, Clients: 78, Wireless APs: 6, Gateways: 1, Switches: 6, Points: 193, Fields: 7398\n")),Object(r.b)("p",null,"Grafana Container"),Object(r.b)("p",null,"This container is a little difficult on Synology. There are two methods that have been to shown to work. If you have an even better method let us know! The two different methods do have their pros and cons."),Object(r.b)("p",null,"Options:"),Object(r.b)("p",null,"Method 1 - Create the container in the Docker UI, use SSH on the Synology to change some file permissions."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Advantages - the Docker Clean action in the UI continues to work.\nDisadvantages - be careful not to break the container by modifying folder attributes in the UI.\n")),Object(r.b)("p",null,"Method 2 - Create the container via SSH command on the Synology."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Advantages - no need to change file system ownership attributes.\nDisadvantages - you have to create a user account, delete the container, and re-run the docker command each time you want to update the base image.\n")),Object(r.b)("p",null,"Method 1 - Recommended\nMethod 1 Preparation"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"SSH into your Synology\nYou will need to cd to the root Docker Directory you created earlier (In this example, the /docker folder containing the /grafana folder)\nThe command is:\n    cd /volume{x}/[dirname]\n    On my system this shared folder is on volume 3 so, for me it is: cd /volume3/docker\nNow, you need to change the permissions of the grafana folder:\n    sudo chown 472 grafana\n\nNOTE: If you look at the grafana folder ownership in file station it will say 472 rather than any user you have created.\n")),Object(r.b)("p",null,"Method 1 Container"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"In the Image tab, select grafana/grafana:latest and click Launch\nLeave the General Settings alone - the container name should be grafana-grafana1, unless you created other Grafanas.\nClick Advanced Settings\nOn the Volume tab, add the following:\n    docker/grafana folder to mount path /var/lib/grafana and leave as read/write\nOn the Network tab:\n    Add your network, in this example, Grafana_Net\n    Remove the default bridge (usually called bridge)\n    Ensure that 'use the same network as docker host' is Unchecked\nOn Port Settings\n    Change local port from Auto to one you have free on host - this makes it predictable. Something like 3000\n    Leave container port as 3000 and type as TCP\nOn the Environment tab, add the following vars:\n    GF_INSTALL_PLUGINS | grafana-clock-panel,grafana-piechart-panel,natel-discrete-panel\nFinalize container and:\n    Click APPLY\n    Click NEXT\n    Click APPLY\n\nNOTE: Don't change ownership in file station of the Grafana folder or you will break the container.\nSkip to 'running the container section below'\n")),Object(r.b)("p",null,"Method 2\nMethod 2 Preparation"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Create a new user account on the Synology from the Control Panel:\n    Call the user grafana\n    Set the password (you don't need to logon as grafana and change it)\n    Disallow Password Change\n    Assign them to the user group users\n    Give them r/w permission to the folder you created e.g. /docker/grafana\n    Don't assign them anything else\nSSH into your Synology\nRun the following command to find the PID of the user you created and note it for later:\n    sudo id grafana\n")),Object(r.b)("p",null,"Method 2 Container"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'Run the following command.\n\nsudo docker run --user 1031 --name grafana-grafana1 \\\n  --net=Grafana_Net -p 300:3000 \\\n  --volume /volume1/docker/grafanatest:/var/lib/grafana \\\n  -e "GF_INSTALL_PLUGINS=grafana-clock-panel,grafana-piechart-panel,natel-discrete-panel" \\\n  grafana/grafana:latest\n\nUse the pid you got in step 3 above, use the network name you created if you didn\'t use Grafana_Net AND you will need to use the volume # of your docker folder (the one you created manually is on) by default this will be on /volume1, but if you have multiple volumes, this may not be the case.\n')),Object(r.b)("p",null,"Method 2 Notes"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"If you use the clean action in the Synology docker UI, you will break this VM and you will need to delete and rerun the docker run command.\nIf you use the Synology docker UI to export the configuration and import it again later, docker will break and you will need to rerun the docker run command.\nI have no idea if hyperbackup or any other backup / restore will also break the config\nThis all derives from the fact there is no way to do --user {PID} in the Synology docker UI / JSON.\n")),Object(r.b)("p",null,"Running the container"),Object(r.b)("p",null,"At this point your containers should have been created, hopefully with no issues."),Object(r.b)("p",null,"If so! Start the container. The first time it should take a while to initialize the database. Check the logs to make sure you have no file / folder permissions issues. If you did you will need to check and make sure you used the right PID and set the ownership of the host grafana folder correctly."),Object(r.b)("p",null,"From your host browser, access http://{ip address of your synology}:3000 and you should see the Grafana logon (the default is admin:admin)"),Object(r.b)("p",null,"You will be prompted to change the default password, do so."))}d.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),d=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=o,b=u["".concat(i,".").concat(p)]||u[p]||h[p]||r;return t?a.a.createElement(b,l(l({ref:n},c),{},{components:t})):a.a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);