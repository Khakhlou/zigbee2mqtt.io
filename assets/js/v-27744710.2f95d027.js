"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[32464],{3386:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-27744710",path:"/devices/GS361A-H04.html",title:"Siterwell GS361A-H04 control via MQTT",lang:"en-US",frontmatter:{title:"Siterwell GS361A-H04 control via MQTT",description:"Integrate your Siterwell GS361A-H04 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Installing the TRV",slug:"installing-the-trv",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Switch",slug:"switch-1",children:[]},{level:3,title:"Position (numeric)",slug:"position-numeric",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/GS361A-H04.md",git:{updatedTime:1654801022e3}}},55302:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const i=(0,o(66252).uE)('<h1 id="siterwell-gs361a-h04" tabindex="-1"><a class="header-anchor" href="#siterwell-gs361a-h04" aria-hidden="true">#</a> Siterwell GS361A-H04</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>GS361A-H04</td></tr><tr><td>Vendor</td><td>Siterwell</td></tr><tr><td>Description</td><td>Radiator valve with thermostat</td></tr><tr><td>Exposes</td><td>lock (state), switch (state), battery, position, climate (current_heating_setpoint, local_temperature, system_mode, running_state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/GS361A-H04.jpg" alt="Siterwell GS361A-H04"></td></tr><tr><td>White-label</td><td>Essentials 120112, TuYa GTZ02, Revolt NX-4911, Unitec 30946, Tesla TSL-TRV-GS361A, Nedis ZBHTR10WT</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="installing-the-trv" tabindex="-1"><a class="header-anchor" href="#installing-the-trv" aria-hidden="true">#</a> Installing the TRV</h3><ul><li>open battery cover (twist and slide)</li><li>insert batteries (a orange wrench should appear)</li><li>close battery cover (slide and twist)</li><li>press front button until <code>F1₁</code> is displayed</li><li>install TRV</li><li>press front button until <code>F1₂</code> is displayed (after 10-30 seconds the TRV should be able to pair)</li><li>to recall same menu on already installed valve - long-press the front button until F1 is shown (ignore lock symbol appear and disappear). Then turn right until F4 appears and confirm by short-pressing the front button</li></ul><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ul><li>press front button 3x to enter pairing mode (LED will flash green)</li></ul><p>If you get a warning that the model is undefined, which might happen after removing the device. Try removing it from the network again while in pairing mode.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="switch-1" tabindex="-1"><a class="header-anchor" href="#switch-1" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>valve_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;valve_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;valve_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="position-numeric" tabindex="-1"><a class="header-anchor" href="#position-numeric" aria-hidden="true">#</a> Position (numeric)</h3><p>Position. Value can be found in the published state on the <code>position</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',24),d={},a=(0,o(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);