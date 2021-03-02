(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(96)),l={id:"ins8",title:"NAS - Synology"},r={unversionedId:"ins8",id:"ins8",isDocsHomePage:!1,title:"NAS - Synology",description:"Introduction",source:"@site/docs/ins8.md",slug:"/ins8",permalink:"/pollerdox/docs/ins8",version:"current",sidebar:"someSidebar",previous:{title:"Bare metal - Windows",permalink:"/pollerdox/docs/ins7"},next:{title:"Final steps",permalink:"/pollerdox/docs/conf1"}},b=[{value:"Introduction",id:"introduction",children:[]},{value:"Prepare your UniFi controller",id:"prepare-your-unifi-controller",children:[]},{value:"Prepare Synology &amp; Docker",id:"prepare-synology--docker",children:[{value:"Run docker &amp; configure network",id:"run-docker--configure-network",children:[]},{value:"Prepare mapped volumes",id:"prepare-mapped-volumes",children:[]},{value:"Download needed images from the registry",id:"download-needed-images-from-the-registry",children:[]},{value:"Create influxdb container",id:"create-influxdb-container",children:[]}]},{value:"Create unifi-poller container",id:"create-unifi-poller-container",children:[]},{value:"Check that poller and influx are working",id:"check-that-poller-and-influx-are-working",children:[]},{value:"Grafana Container",id:"grafana-container",children:[{value:"Method 1 - Recommended",id:"method-1---recommended",children:[]},{value:"Method 2",id:"method-2",children:[]},{value:"Running the container",id:"running-the-container",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],c={toc:b};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"We are not claiming this is the only way to do this. However this is designed to use the official packages for UniFi Poller, InfluxDB and Grafana with the aim to make this maintainable as possible."),Object(i.b)("p",null,"We use a custom bridge network for some very good reasons and we highly recommend most people use it:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This ensures name resolution works between the containers without needing to use the deprecated link functionality"),Object(i.b)("li",{parentName:"ul"},"The default bridge on docker does NOT have name resolution enabled and requires mucking about with host files (this is a docker feature not anything to do with Synology)"),Object(i.b)("li",{parentName:"ul"},"This also means in the event the container IP changes (it happens) you don't need to reconfigure"),Object(i.b)("li",{parentName:"ul"},"This also means, due to the ICC, that no host port mappings are required other than for the Grafana 3000:3000 mapping in the Grafana contained, you can choose to remove other port mappings if you desire"),Object(i.b)("li",{parentName:"ul"},"The reason for not using host port mappings for container not equalling container comms is we keep this solution self-container and don't have to worry about weird things that might have been on the Synology (changing of Synology IP, other containers with host mappings etc). Customize in your environment as needed.")),Object(i.b)("p",null,"These instructions will let you use the Synology docker ",Object(i.b)("inlineCode",{parentName:"p"},"stop container action")," > ",Object(i.b)("inlineCode",{parentName:"p"},"clear container action")," > ",Object(i.b)("inlineCode",{parentName:"p"},"re-download the image")," > ",Object(i.b)("inlineCode",{parentName:"p"},"restart container")," to update to the latest. ",Object(i.b)("strong",{parentName:"p"}," <---this still needs to be tested to confirm 100% - we may need to map in some more grafana dirs.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," If you want to use this flow for updates you will need to use Method 1 for Grafana documented here."),Object(i.b)("p",null,"Assumptions:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You already installed Docker from ",Object(i.b)("a",{parentName:"li",href:"https://www.synology.com/en-us/dsm/packages/Docker"},"package center"),"."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://www.synology.com/en-global/knowledgebase/DSM/help/DSM/AdminCenter/system_terminal"},"Enable SSH")," on Synology")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," You should always logon with your default admin account you created when you setup you Synology, logging on as root no longer works."),Object(i.b)("h2",{id:"prepare-your-unifi-controller"},"Prepare your UniFi controller"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add a user to the UniFi Controller. After logging into your controller:"),Object(i.b)("li",{parentName:"ol"},"Go to Settings -> Admins"),Object(i.b)("li",{parentName:"ol"},"Add a read-only user (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"unifipoller"),")"),Object(i.b)("li",{parentName:"ol"},"The new user needs access to each site. For each UniFi Site you want to poll, add admin via the 'Manually Set and Share the password' option. Other settings:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"don't define an email"),Object(i.b)("li",{parentName:"ul"},"don't require password to be changed"),Object(i.b)("li",{parentName:"ul"},"use only uppercase, lowercase, numerals and the ! symbol and limit to 10 chars or less (some have had issues with anything else, once you have it all working feel free to play with longer more complex passwords)")),Object(i.b)("p",null,"Take note of this info, you need to put it into the unifi-poller config file in a moment"),Object(i.b)("h2",{id:"prepare-synology--docker"},"Prepare Synology & Docker"),Object(i.b)("h3",{id:"run-docker--configure-network"},"Run docker & configure network"),Object(i.b)("p",null,"Click on network and select add to create new network:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Name it something like Grafana_Net"),Object(i.b)("li",{parentName:"ol"},"Enable IPv4"),Object(i.b)("li",{parentName:"ol"},"Ensure 'Get network configuration automatically' is selected"),Object(i.b)("li",{parentName:"ol"},"Click add")),Object(i.b)("p",null,"We do this because the default bridge doesn't have name resolution but new bridge do, so you don't have to mess with host files etc inside the container. (need to verify this is actually true)"),Object(i.b)("p",null,"I don't recommend you use host network, using the bridge network keeps it self contained at helps avoid conflicts with the host or other containers you might have that we cannot predict."),Object(i.b)("h3",{id:"prepare-mapped-volumes"},"Prepare mapped volumes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create the following structure in your preferred location (mine is a shared folder called docker) <note i am not sure which you absolutely need to pre-create might be good to test - hmm the structure below does not render correctly>")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/docker/grafana")," and ",Object(i.b)("inlineCode",{parentName:"li"},"/docker/influxdb"))),Object(i.b)("h3",{id:"download-needed-images-from-the-registry"},"Download needed images from the registry"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Select ",Object(i.b)("inlineCode",{parentName:"li"},"Registry")),Object(i.b)("li",{parentName:"ol"},"Use the search box to find the following:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"unifi-poller for golift/unifi-poller:latest ",Object(i.b)("a",{parentName:"li",href:"https://hub.docker.com/r/golift/unifi-poller/"},"https://hub.docker.com/r/golift/unifi-poller/")),Object(i.b)("li",{parentName:"ul"},"grafana for grafana/grafana:latest ",Object(i.b)("a",{parentName:"li",href:"https://hub.docker.com/r/grafana/grafana/"},"https://hub.docker.com/r/grafana/grafana/")),Object(i.b)("li",{parentName:"ul"},"influxdb for influxdb:latest ",Object(i.b)("a",{parentName:"li",href:"https://hub.docker.com/_/influxdb/"},"https://hub.docker.com/_/influxdb/"))),Object(i.b)("h3",{id:"create-influxdb-container"},"Create influxdb container"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In ",Object(i.b)("inlineCode",{parentName:"li"},"Image"),", select ",Object(i.b)("inlineCode",{parentName:"li"},"influxdb:latest")," and click ",Object(i.b)("inlineCode",{parentName:"li"},"launch")),Object(i.b)("li",{parentName:"ol"},"Leave ",Object(i.b)("inlineCode",{parentName:"li"},"General Settings")," alone - container name should be ",Object(i.b)("inlineCode",{parentName:"li"},"influxdb1"),", unless you created other influxdb's"),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"Advanced Settings")),Object(i.b)("li",{parentName:"ol"},"On volume tab add the following:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"/docker/influxdb")," folder from above to mount path ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/influxdb")," - leave as read/write")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"On the ",Object(i.b)("inlineCode",{parentName:"li"},"Network")," tab")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add your network - in this example: ",Object(i.b)("inlineCode",{parentName:"li"},"Grafana_Net")),Object(i.b)("li",{parentName:"ul"},"Remove the default bridge (usually called ",Object(i.b)("inlineCode",{parentName:"li"},"Bridge"),")"),Object(i.b)("li",{parentName:"ul"},"Ensure that ",Object(i.b)("inlineCode",{parentName:"li"},"use the same network as docker host")," is unchecked")),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"On port settings ",Object(i.b)("strong",{parentName:"li"}," <--- why do i have host mapped port, not sure we need this for - this set of 3 as all traffic is internal "))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Change local port from ",Object(i.b)("inlineCode",{parentName:"li"},"Auto")," to one you have free on host - this makes it predictable. Something like ",Object(i.b)("inlineCode",{parentName:"li"},"3456")),Object(i.b)("li",{parentName:"ul"},"Leave container port as ",Object(i.b)("inlineCode",{parentName:"li"},"8086")," and type as ",Object(i.b)("inlineCode",{parentName:"li"},"TCP"))),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"On environment tab add the following vars")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"INFLUXDB_DATA_DIR"),"      | ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/influxdb/data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"INFLUXDB_DATA_WAL_DIR"),"  | ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/influxdb/wal")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"INFLUXDB_DATA_META_DIR")," | ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/influxdb/meta"))),Object(i.b)("ol",{start:8},Object(i.b)("li",{parentName:"ol"},"Finalize container and:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"APPLY")),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"NEXT")),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"APPLY"))),Object(i.b)("h2",{id:"create-unifi-poller-container"},"Create unifi-poller container"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In ",Object(i.b)("inlineCode",{parentName:"li"},"Image")," select ",Object(i.b)("inlineCode",{parentName:"li"},"golift/unifi-poller:latest")," and click launch"),Object(i.b)("li",{parentName:"ol"},"Leave general settings alone - container name should be ",Object(i.b)("inlineCode",{parentName:"li"},"golift-unifi-poller1"),", unless you created other unifi-pollers"),Object(i.b)("li",{parentName:"ol"},"Click Advanced Settings"),Object(i.b)("li",{parentName:"ol"},"On the network tab:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add your network - in this example: ",Object(i.b)("inlineCode",{parentName:"li"},"Grafana_Net")),Object(i.b)("li",{parentName:"ul"},"Remove the default bridge (usually called ",Object(i.b)("inlineCode",{parentName:"li"},"Bridge"),")"),Object(i.b)("li",{parentName:"ul"},"Ensure that ",Object(i.b)("inlineCode",{parentName:"li"},"use the same network as docker host")," is unchecked")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"On the Environment tab, add the following vars:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UP_INFLUXDB_URL"),"       | ",Object(i.b)("inlineCode",{parentName:"li"},"http://influxdb1:8086")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UP_UNIFI_DEFAULT_URL"),"  | ",Object(i.b)("inlineCode",{parentName:"li"},"https://your.unifi.controller.ip:8443")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UP_UNIFI_DEFAULT_USER")," | username for account created earlier. e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"unifipoller")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UP_UNIFI_DEFAULT_PASS")," | password for above user"),Object(i.b)("li",{parentName:"ul"},"(optional) ",Object(i.b)("inlineCode",{parentName:"li"},"UP_POLLER_DEBUG")," | ",Object(i.b)("inlineCode",{parentName:"li"},"true"))),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"Finalize the container by:\nClick ",Object(i.b)("inlineCode",{parentName:"li"},"APPLY"),"\nClick ",Object(i.b)("inlineCode",{parentName:"li"},"NEXT"),"\nClick ",Object(i.b)("inlineCode",{parentName:"li"},"APPLY"))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Do ",Object(i.b)("strong",{parentName:"p"},"not")," include ",Object(i.b)("inlineCode",{parentName:"p"},":8443")," on the url of the controller if you are using ",Object(i.b)("inlineCode",{parentName:"p"},"unifios")," (that is, a UDM-Pro, UDM, or Ckoudkey with modern firmware)"))),Object(i.b)("h2",{id:"check-that-poller-and-influx-are-working"},"Check that poller and influx are working"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Select the ",Object(i.b)("inlineCode",{parentName:"li"},"Container")," tab in the Docker UI"),Object(i.b)("li",{parentName:"ol"},"Double click ",Object(i.b)("inlineCode",{parentName:"li"},"golift-unifi-poller1")),Object(i.b)("li",{parentName:"ol"},"Select the ",Object(i.b)("inlineCode",{parentName:"li"},"Log")," tab"),Object(i.b)("li",{parentName:"ol"},"After a couple of minutes you should see an entry like the following, if you do then everything is working ok:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    2019/09/14 22:43:09 [INFO] UniFi Measurements Recorded. Sites: 1, Clients: 78, Wireless APs: 6, Gateways: 1, Switches: 6, Points: 193, Fields: 7398\n")),Object(i.b)("h2",{id:"grafana-container"},"Grafana Container"),Object(i.b)("p",null,"This container is a little difficult on Synology. There are two methods that have been to shown to work. If you have an even better method let us know! The two different methods do have their pros and cons."),Object(i.b)("p",null,"Options:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Method 1")," - Create the container in the Docker UI, use SSH on the Synology to change some file permissions."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Advantages - the Docker Clean action in the UI continues to work."),Object(i.b)("li",{parentName:"ul"},"Disadvantages - be careful not to break the container by modifying folder attributes in the UI.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Method 2")," - Create the container via SSH command on the Synology."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Advantages - no need to change file system ownership attributes."),Object(i.b)("li",{parentName:"ul"},"Disadvantages - you have to create a user account, delete the container, and re-run the docker command each time you want to update the base image.")),Object(i.b)("h3",{id:"method-1---recommended"},"Method 1 - Recommended"),Object(i.b)("h4",{id:"method-1-preparation"},"Method 1 Preparation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"SSH into your Synology"),Object(i.b)("li",{parentName:"ol"},"You will need to ",Object(i.b)("inlineCode",{parentName:"li"},"cd")," to the root ",Object(i.b)("inlineCode",{parentName:"li"},"Docker Directory")," you created earlier (In this example, the ",Object(i.b)("inlineCode",{parentName:"li"},"/docker")," folder containing the ",Object(i.b)("inlineCode",{parentName:"li"},"/grafana")," folder)"),Object(i.b)("li",{parentName:"ol"},"The command is:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cd /volume{x}/[dirname]")),Object(i.b)("li",{parentName:"ul"},"On my system this shared folder is on volume 3 so, for me it is: cd ",Object(i.b)("inlineCode",{parentName:"li"},"/volume3/docker"))),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Now, you need to change the permissions of the grafana folder:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"sudo chown 472 grafana"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"NOTE:")," If you look at the grafana folder ownership in file station it will say ",Object(i.b)("inlineCode",{parentName:"p"},"472")," rather than any user you have created."))),Object(i.b)("h4",{id:"method-1-container"},"Method 1 Container"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("inlineCode",{parentName:"li"},"Image")," tab, select ",Object(i.b)("inlineCode",{parentName:"li"},"grafana/grafana:latest")," and click ",Object(i.b)("inlineCode",{parentName:"li"},"Launch")),Object(i.b)("li",{parentName:"ol"},"Leave the ",Object(i.b)("inlineCode",{parentName:"li"},"General Settings")," alone - the container name should be ",Object(i.b)("inlineCode",{parentName:"li"},"grafana-grafana1"),", unless you created other Grafanas."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"Advanced Settings")),Object(i.b)("li",{parentName:"ol"},"On the ",Object(i.b)("inlineCode",{parentName:"li"},"Volume")," tab, add the following:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"docker/grafana")," folder to mount path ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/grafana")," and leave as ",Object(i.b)("inlineCode",{parentName:"li"},"read/write"))),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"On the ",Object(i.b)("inlineCode",{parentName:"li"},"Network")," tab:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add your network, in this example, ",Object(i.b)("inlineCode",{parentName:"li"},"Grafana_Net")),Object(i.b)("li",{parentName:"ul"},"Remove the default bridge (usually called ",Object(i.b)("inlineCode",{parentName:"li"},"bridge"),")"),Object(i.b)("li",{parentName:"ul"},"Ensure that ",Object(i.b)("inlineCode",{parentName:"li"},"use the same network as docker host")," is Unchecked")),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"On Port Settings")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Change ",Object(i.b)("inlineCode",{parentName:"li"},"local port")," from ",Object(i.b)("inlineCode",{parentName:"li"},"Auto")," to one you have free on host - this makes it predictable. Something like ",Object(i.b)("inlineCode",{parentName:"li"},"3000")),Object(i.b)("li",{parentName:"ul"},"Leave container port as ",Object(i.b)("inlineCode",{parentName:"li"},"3000")," and type as ",Object(i.b)("inlineCode",{parentName:"li"},"TCP"))),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"On the ",Object(i.b)("inlineCode",{parentName:"li"},"Environment")," tab, add the following vars:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GF_INSTALL_PLUGINS")," | ",Object(i.b)("inlineCode",{parentName:"li"},"grafana-clock-panel,grafana-piechart-panel,natel-discrete-panel"))),Object(i.b)("ol",{start:8},Object(i.b)("li",{parentName:"ol"},"Finalize container and:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"APPLY")),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"NEXT")),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"APPLY"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," Don't change ownership in file station of the Grafana folder or you will break the container."),Object(i.b)("p",null,"Skip to 'running the container section below'"),Object(i.b)("h3",{id:"method-2"},"Method 2"),Object(i.b)("h4",{id:"method-2-preparation"},"Method 2 Preparation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a new user account on the Synology from the ",Object(i.b)("inlineCode",{parentName:"li"},"Control Panel"),":")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Call the user ",Object(i.b)("inlineCode",{parentName:"li"},"grafana")),Object(i.b)("li",{parentName:"ul"},"Set the password (you don't need to logon as grafana and change it)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Disallow Password Change")),Object(i.b)("li",{parentName:"ul"},"Assign them to the user group ",Object(i.b)("inlineCode",{parentName:"li"},"users")),Object(i.b)("li",{parentName:"ul"},"Give them ",Object(i.b)("inlineCode",{parentName:"li"},"r/w")," permission to the folder you created e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"/docker/grafana")),Object(i.b)("li",{parentName:"ul"},"Don't assign them anything else")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"SSH")," into your Synology"),Object(i.b)("li",{parentName:"ol"},"Run the following command to find the ",Object(i.b)("inlineCode",{parentName:"li"},"PID")," of the user you created and note it for later:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo id grafana"))),Object(i.b)("h4",{id:"method-2-container"},"Method 2 Container"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run the following command.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'    sudo docker run --user 1031 --name grafana-grafana1 \\\n      --net=Grafana_Net -p 300:3000 \\\n      --volume /volume1/docker/grafanatest:/var/lib/grafana \\\n      -e "GF_INSTALL_PLUGINS=grafana-clock-panel,grafana-piechart-panel,natel-discrete-panel" \\\n      grafana/grafana:latest\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Use the pid you got in step 3 above, use the network name you created if you didn't use ",Object(i.b)("inlineCode",{parentName:"li"},"Grafana_Net")," AND you will need to use the volume # of your docker folder (the one you created manually is on) by default this will be on ",Object(i.b)("inlineCode",{parentName:"li"},"/volume1"),", but if you have multiple volumes, this may not be the case.")),Object(i.b)("h4",{id:"method-2-notes"},"Method 2 Notes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you use the clean action in the Synology docker UI, you will break this VM and you will need to delete and rerun the ",Object(i.b)("inlineCode",{parentName:"li"},"docker run")," command."),Object(i.b)("li",{parentName:"ul"},"If you use the Synology docker UI to export the configuration and import it again later, docker will break and you will need to rerun the ",Object(i.b)("inlineCode",{parentName:"li"},"docker run")," command."),Object(i.b)("li",{parentName:"ul"},"I have no idea if hyperbackup or any other backup / restore will also break the config"),Object(i.b)("li",{parentName:"ul"},"This all derives from the fact there is no way to do ",Object(i.b)("inlineCode",{parentName:"li"},"--user {PID}")," in the Synology docker UI / JSON.")),Object(i.b)("h3",{id:"running-the-container"},"Running the container"),Object(i.b)("p",null,"At this point your containers should have been created, hopefully with no issues."),Object(i.b)("p",null,"If so! Start the container. The first time it should take a while to initialize the database. Check the logs to make sure you have no file / folder permissions issues. If you did you will need to check and make sure you used the right PID and set the ownership of the host grafana folder correctly."),Object(i.b)("p",null,"From your host browser, access http://{ip address of your synology}:3000 and you should see the Grafana logon (the default is admin:admin)"),Object(i.b)("p",null,"You will be prompted to change the default password, do so."),Object(i.b)("h2",{id:"next-steps"},"Next steps"),Object(i.b)("p",null,"Go to the section Configuration / Final steps"))}d.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,m=u["".concat(l,".").concat(s)]||u[s]||p[s]||i;return n?o.a.createElement(m,r(r({ref:t},c),{},{components:n})):o.a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);