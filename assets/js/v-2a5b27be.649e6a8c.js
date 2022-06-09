"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52746],{51220:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o={key:"v-2a5b27be",path:"/advanced/more/tuya_xiaomi_ota_url.html",title:"Get Tuya and Xiaomi OTA url",lang:"en-US",frontmatter:{pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"Step 1: running the proxy",slug:"step-1-running-the-proxy",children:[]},{level:2,title:"Step 2: setup the Android emulator",slug:"step-2-setup-the-android-emulator",children:[]},{level:2,title:"Step 3a: get the TuYa OTA url",slug:"step-3a-get-the-tuya-ota-url",children:[]},{level:2,title:"Step 3b: get the Xiaomi OTA url",slug:"step-3b-get-the-xiaomi-ota-url",children:[]},{level:2,title:"Step 4: add OTA to zigbee-ota",slug:"step-4-add-ota-to-zigbee-ota",children:[]}],filePathRelative:"advanced/more/tuya_xiaomi_ota_url.md",git:{updatedTime:1654801022e3}}},32465:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ne});var o=a(66252),l=a(80331),r=a(15835),i=a(34329);const n=(0,o._)("h1",{id:"get-tuya-and-xiaomi-ota-url",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#get-tuya-and-xiaomi-ota-url","aria-hidden":"true"},"#"),(0,o.Uk)(" Get Tuya and Xiaomi OTA url")],-1),u=(0,o._)("p",null,"This guide explains how to retrieve a TuYa or Xiaomi OTA file for your device. This file can then be used to update your TuYa/Xiaomi device via Zigbee2MQTT.",-1),h=(0,o._)("p",null,"Prerequisites:",-1),d=(0,o._)("li",null,"Docker",-1),s=(0,o._)("li",null,"TuYa bridge or Xiaomi gateway",-1),p={href:"https://developer.android.com/studio",target:"_blank",rel:"noopener noreferrer"},c=(0,o.Uk)("Android Studio"),m=(0,o._)("h2",{id:"step-1-running-the-proxy",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#step-1-running-the-proxy","aria-hidden":"true"},"#"),(0,o.Uk)(" Step 1: running the proxy")],-1),g=(0,o._)("p",null,[(0,o.Uk)("Execute the following command: "),(0,o._)("code",null,"docker run --rm -it -p 8080:8080 mitmproxy/mitmproxy")],-1),k=(0,o._)("h2",{id:"step-2-setup-the-android-emulator",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#step-2-setup-the-android-emulator","aria-hidden":"true"},"#"),(0,o.Uk)(" Step 2: setup the Android emulator")],-1),_=(0,o._)("p",null,"Start Android Studio and create a new empty project:",-1),f=(0,o._)("ol",null,[(0,o._)("li",null,"File -> New -> New Project..."),(0,o._)("li",null,"Phone and Tablet -> Empty Activity -> Next"),(0,o._)("li",null,"Finish"),(0,o._)("li",null,[(0,o.Uk)('Click on the emulator ("Pixel_3a_..." in the case below) -> Device Manager '),(0,o._)("br"),(0,o.Uk)(),(0,o._)("img",{src:l,alt:""})]),(0,o._)("li",null,'Click on the pencil icon of the device, under "Show Advanced Settings" change the "Internal Storage" to "2000". Click "Finish".'),(0,o._)("li",null,[(0,o.Uk)("Start the emulator by clicking the play icon. "),(0,o._)("br"),(0,o.Uk)(),(0,o._)("img",{src:r,alt:""})]),(0,o._)("li",null,"On the emulator, go to Settings -> Network & internet -> Internet -> AndroidWifi -> Edit (pencil right top) -> Advanced options -> Proxy -> Manual. For proxy host name fill in the IP address of your computer (e.g. 192.168.2.145), for port fill in 8080. Save."),(0,o._)("li",null,'Open Chrome on the emulator, go to http://mitm.it and click on "Get mitmproxy-ca-cert.cer" under Android.'),(0,o._)("li",null,"Go to settings again, Security -> Encryption & credentials -> Install a certificate -> CA certificate -> Install anyway -> Drawer icon -> Downloads -> click on the downloaded certificate.")],-1),b=(0,o._)("h2",{id:"step-3a-get-the-tuya-ota-url",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#step-3a-get-the-tuya-ota-url","aria-hidden":"true"},"#"),(0,o.Uk)(" Step 3a: get the TuYa OTA url")],-1),y=(0,o.Uk)("Download the TuYa app apk from "),w={href:"https://aapks.com/download.php?dl=48267761",target:"_blank",rel:"noopener noreferrer"},v=(0,o.Uk)("this link"),T=(0,o.Uk)(" (IMPORTANT: newer version don't work, tested with 3.12.6). Drag the downloaded apk on the emulator (which will install it)."),U=(0,o._)("li",null,"Open the TuYa Smart Life app in the emulator, log in with your account",-1),x=(0,o.Uk)("Make sure the TuYa bridge + the device you want to get the OTA of is already coupled to your account, this cannot be done from the emulator so use your phone for this. Make sure to use the same app on your phone, otherwise the device will not show up (e.g. for iOS use "),A={href:"https://apps.apple.com/nl/app/smart-life-smart-living/id1115101477",target:"_blank",rel:"noopener noreferrer"},O=(0,o.Uk)("this"),S=(0,o.Uk)(", "),W={href:"https://apps.apple.com/nl/app/tuya-smart/id1034649547",target:"_blank",rel:"noopener noreferrer"},q=(0,o._)("strong",null,"not this",-1),M=(0,o.Uk)(")."),C=(0,o._)("li",null,'Click on the device -> edit (pencil icon right top). Click "Check for Firmware Upgrade".',-1),D=(0,o._)("li",null,[(0,o.Uk)("If an firmware upgrade is available, quickly go back to the output of mitm (step 1), click on the latest request (yes you can click in the console window). This will show your the OTA url (see red box below). "),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("Tip: to go back to the overview of requests press the "),(0,o._)("code",null,"Q"),(0,o.Uk)(" key on your keyboard.")])])],-1),G=(0,o._)("p",null,[(0,o._)("img",{src:i,alt:""})],-1),z=(0,o._)("h2",{id:"step-3b-get-the-xiaomi-ota-url",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#step-3b-get-the-xiaomi-ota-url","aria-hidden":"true"},"#"),(0,o.Uk)(" Step 3b: get the Xiaomi OTA url")],-1),Y=(0,o._)("p",null,"NOTE: This only works for native Aqara gateways which can be connected to the Aqara Home app (not the Xiaomi home app!)",-1),I=(0,o._)("ul",null,[(0,o._)("li",null,"Works: ZHWG16LM/HE1-G0, ZHWG15LM, ZHWG12LM"),(0,o._)("li",null,"Doesn't work: ZNDMWG03LM, DGNWG02LM")],-1),L=(0,o.Uk)("Download the Aqara home app apk from "),N={href:"https://apkpure.com/nl/aqara-home/com.lumiunited.aqarahome",target:"_blank",rel:"noopener noreferrer"},P=(0,o.Uk)("this link"),X=(0,o.Uk)(", tested with version 2.2.5. Drag the downloaded apk on the emulator (which will install it)."),E=(0,o._)("li",null,"Open the Aqara home app in the emulator, log in with your account",-1),Z=(0,o._)("li",null,"Make sure the Aqara gateway + the device you want to get the OTA of is already coupled to your account, this cannot be done from the emulator so use your phone for this.",-1),F=(0,o._)("li",null,"Click on your device and check for a firmware upgrade.",-1),H=(0,o._)("li",null,"If an firmware upgrade is available, quickly go back to the output of mitm (step 1), click on the latest request (yes you can click in the console window). This will show your the OTA url (see screenshot of step 3a).",-1),j=(0,o._)("h2",{id:"step-4-add-ota-to-zigbee-ota",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#step-4-add-ota-to-zigbee-ota","aria-hidden":"true"},"#"),(0,o.Uk)(" Step 4: add OTA to zigbee-ota")],-1),Q=(0,o.Uk)("Follow "),R={href:"https://github.com/koenkk/zigbee-ota#adding-new-and-updating-existing-ota-files",target:"_blank",rel:"noopener noreferrer"},K=(0,o.Uk)("this guide"),B=(0,o.Uk)(" to add the OTA to the "),J={href:"https://github.com/koenkk/zigbee-ota",target:"_blank",rel:"noopener noreferrer"},V=(0,o.Uk)("zigbee-OTA"),$=(0,o.Uk)(" repository."),ee=(0,o.Uk)("Enable the ota by adding "),te=(0,o._)("code",null,"ota: ota.zigbeeOTA",-1),ae=(0,o.Uk)(" to your device definition ("),oe={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/3e45f8f13b419ea8ce33fb3d30b11f5ac1bdec08/devices/tuya.js#L1172",target:"_blank",rel:"noopener noreferrer"},le=(0,o.Uk)("example"),re=(0,o.Uk)(")."),ie={},ne=(0,a(83744).Z)(ie,[["render",function(e,t){const a=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n,u,h,(0,o._)("ul",null,[d,s,(0,o._)("li",null,[(0,o._)("a",p,[c,(0,o.Wm)(a)])])]),m,g,k,_,f,b,(0,o._)("ol",null,[(0,o._)("li",null,[y,(0,o._)("a",w,[v,(0,o.Wm)(a)]),T]),U,(0,o._)("li",null,[x,(0,o._)("a",A,[O,(0,o.Wm)(a)]),S,(0,o._)("a",W,[q,(0,o.Wm)(a)]),M]),C,D]),G,z,Y,I,(0,o._)("ol",null,[(0,o._)("li",null,[L,(0,o._)("a",N,[P,(0,o.Wm)(a)]),X]),E,Z,F,H]),j,(0,o._)("ol",null,[(0,o._)("li",null,[Q,(0,o._)("a",R,[K,(0,o.Wm)(a)]),B,(0,o._)("a",J,[V,(0,o.Wm)(a)]),$]),(0,o._)("li",null,[ee,te,ae,(0,o._)("a",oe,[le,(0,o.Wm)(a)]),re])])],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,o]of t)e[a]=o;return e}},15835:(e,t,a)=>{e.exports=a.p+"assets/img/android_studio_adv.eb66c947.png"},80331:(e,t,a)=>{e.exports=a.p+"assets/img/android_studio_run.429dab07.png"},34329:(e,t,a)=>{e.exports=a.p+"assets/img/tuya_ota.c9bc92f7.png"}}]);