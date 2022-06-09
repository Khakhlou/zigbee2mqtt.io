"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67074],{15439:(t,e,o)=>{o.r(e),o.d(e,{data:()=>i});const i={key:"v-66fb50bf",path:"/devices/NUE-ZBFLB.html",title:"Nue / 3A NUE-ZBFLB control via MQTT",lang:"en-US",frontmatter:{title:"Nue / 3A NUE-ZBFLB control via MQTT",description:"Integrate your Nue / 3A NUE-ZBFLB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-09-30T20:52:56.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (button_light endpoint)",slug:"switch-button-light-endpoint",children:[]},{level:3,title:"Switch (button_fan_high endpoint)",slug:"switch-button-fan-high-endpoint",children:[]},{level:3,title:"Switch (button_fan_med endpoint)",slug:"switch-button-fan-med-endpoint",children:[]},{level:3,title:"Switch (button_fan_low endpoint)",slug:"switch-button-fan-low-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/NUE-ZBFLB.md",git:{updatedTime:1654801022e3}}},69414:(t,e,o)=>{o.r(e),o.d(e,{default:()=>a});const i=(0,o(66252).uE)('<h1 id="nue-3a-nue-zbflb" tabindex="-1"><a class="header-anchor" href="#nue-3a-nue-zbflb" aria-hidden="true">#</a> Nue / 3A NUE-ZBFLB</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>NUE-ZBFLB</td></tr><tr><td>Vendor</td><td>Nue / 3A</td></tr><tr><td>Description</td><td>Smart fan light switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/NUE-ZBFLB.jpg" alt="Nue / 3A NUE-ZBFLB"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-button-light-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-button-light-endpoint" aria-hidden="true">#</a> Switch (button_light endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_button_light</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_button_light&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_button_light&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_button_light&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_button_light&quot;: &quot;&quot;}</code>.</p><h3 id="switch-button-fan-high-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-button-fan-high-endpoint" aria-hidden="true">#</a> Switch (button_fan_high endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_button_fan_high</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_button_fan_high&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_button_fan_high&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_button_fan_high&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_button_fan_high&quot;: &quot;&quot;}</code>.</p><h3 id="switch-button-fan-med-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-button-fan-med-endpoint" aria-hidden="true">#</a> Switch (button_fan_med endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_button_fan_med</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_button_fan_med&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_button_fan_med&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_button_fan_med&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_button_fan_med&quot;: &quot;&quot;}</code>.</p><h3 id="switch-button-fan-low-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-button-fan-low-endpoint" aria-hidden="true">#</a> Switch (button_fan_low endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_button_fan_low</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_button_fan_low&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_button_fan_low&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_button_fan_low&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_button_fan_low&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),d={},a=(0,o(83744).Z)(d,[["render",function(t,e){return i}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[o,i]of e)t[o]=i;return t}}}]);