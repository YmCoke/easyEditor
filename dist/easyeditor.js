(()=>{"use strict";var e,t,n,i,o={924:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateMenuItems=void 0,t.generateMenuItems=function(){return[{text:"H",children:[{text:"一级标题",command:"fontSize-6"},{text:"二级标题",command:"fontSize-5"},{text:"三级标题",command:"fontSize-4"},{text:"四级标题",command:"fontSize-3"},{text:"五级标题",command:"fontSize-2"},{text:"六级标题",command:"fontSize-1"}]},{text:"B",command:"bold"},{text:"C",children:[{text:"red",command:"foreColor-red"},{text:"blue",command:"foreColor-blue"},{text:"green",command:"foreColor-green"}]}]}},249:(e,t)=>{function n(e,t){var n=document.createElement("div");n.style.width=t.width||"100%",n.style.height=t.height||"20px",n.style.border=t.border||"1px solid #666",n.style.display="flex",n.style.padding="6px 10px",n.style.boxSizing="border-box",n.style.alignItems="center";var i=t.menuItems;if(i)for(var o=function(e){var t=document.createElement("div");i[e].icon?t.style.backgroundImage=i[e].icon:t.innerText=i[e].text,t.style.width=i[e].width||"20px",t.style.height=i[e].height||"20px",t.style.lineHeight=i[e].height||"20px",t.style.cursor="pointer",t.style.margin="0 5px",t.style.position="relative";var o,r=i[e].children;if(r){(o=document.createElement("ul")).style.display="none",o.style.width="100px",o.style.position="absolute",o.style.left="-4px",o.style.top="28px",o.style.margin="0",o.style.padding="0px",o.style.boxSizing="border-box",o.style.background="#fff";for(var d=0;d<r.length;++d){var l=document.createElement("li");l.style.listStyle="none",l.style.border="1px solid #666",l.style.borderTop="none",l.style.padding="2px",l.innerText=r[d].text,l.setAttribute("command",r[d].command),o.appendChild(l)}t.appendChild(o),t.addEventListener("click",(function(){"block"==o.style.display?o.style.display="none":o.style.display="block"}))}else t.setAttribute("command",i[e].command);n.appendChild(t)},r=0;r<i.length;++r)o(r);return n.addEventListener("click",(function(t){var n=t.target.getAttribute("command");if(n&&e.cacheRange){var i=window.getSelection();i.removeAllRanges(),i.addRange(e.cacheRange),function(e){if(console.log(e),-1==e.indexOf("-"))document.execCommand(e);else{var t=e.split("-"),n=t[0],i=t[1];document.execCommand(n,!1,i)}}(n)}})),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return[n(e,t),{width:function(){},height:function(){}}]}},816:(e,t)=>{function n(e,t){var n=document.createElement("div");return n.style.width=t.width||"100%",n.style.height=t.height||"500px",n.style.padding=t.padding||"6px 10px",n.style.border=t.border||"1px solid #666",n.style.lineHeight=t.lineHeight||"1",n.contentEditable="true",n.style.boxSizing="border-box",n.style.outline="none",function(e,t){e.addEventListener("mouseup",(function(e){t.cacheRange=window.getSelection().getRangeAt(0)}))}(n,e),n}Object.defineProperty(t,"__esModule",{value:!0}),t.initText=void 0,t.initText=function(e,t){return[n(e,t),{width:function(){},height:function(){},clear:function(){}}]}}},r={};function d(e){if(r[e])return r[e].exports;var t=r[e]={exports:{}};return o[e](t,t.exports,d),t.exports}e=d(249),t=d(816),n=d(924),i=function(){function i(e){if(this.config={menuConfig:{width:"100%",height:"100%",border:"1px solid #666",menuItems:n.generateMenuItems()},textConfig:{}},!e)throw new Error("传入Dom为空!!");this.$containerDom=e}return i.prototype.create=function(e){e&&(this.config=e),this.setMenuArea(),this.setTextArea(),document.execCommand("defaultParagraphSeparator",!1,"p")},i.prototype.setMenuArea=function(){var t;t=e.default(this,this.config.menuConfig),this.$menuDom=t[0],this.menu=t[1],this.$containerDom.appendChild(this.$menuDom)},i.prototype.setTextArea=function(){var e;e=t.initText(this,this.config.textConfig),this.$textDom=e[0],this.text=e[1],this.$containerDom.appendChild(this.$textDom)},i}(),window.EasyEditor=i})();
//# sourceMappingURL=easyeditor.js.map