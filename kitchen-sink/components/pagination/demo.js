webpackJsonp([27,141],{6:function(n,a,s){"use strict";s(13),s(12)},12:function(n,a){},13:function(n,a){},16:function(n,a,s){"use strict";s(20)},20:function(n,a){},31:function(n,a,s){"use strict";s(6),s(16),s(39)},39:function(n,a){},54:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(2),p=t(e),o=s(7),c=t(o),l=s(3),u=t(l),i=s(5),r=t(i),k=s(4),m=t(k),d="/Users/jiangkai/demo/ant-design-mobile/components/flex/Flex.web.tsx",f=s(1),g=t(f),b=s(8),v=t(b),N=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},h=function(n){function a(){return(0,u["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,m["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.direction,t=a.wrap,e=a.justify,o=a.align,l=a.alignContent,u=a.className,i=a.children,r=a.prefixCls,k=a.style,m=N(a,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),f=(0,v["default"])((n={},(0,c["default"])(n,r,!0),(0,c["default"])(n,r+"-dir-row","row"===s),(0,c["default"])(n,r+"-dir-row-reverse","row-reverse"===s),(0,c["default"])(n,r+"-dir-column","column"===s),(0,c["default"])(n,r+"-dir-column-reverse","column-reverse"===s),(0,c["default"])(n,r+"-nowrap","nowrap"===t),(0,c["default"])(n,r+"-wrap","wrap"===t),(0,c["default"])(n,r+"-wrap-reverse","wrap-reverse"===t),(0,c["default"])(n,r+"-justify-start","start"===e),(0,c["default"])(n,r+"-justify-end","end"===e),(0,c["default"])(n,r+"-justify-center","center"===e),(0,c["default"])(n,r+"-justify-between","between"===e),(0,c["default"])(n,r+"-justify-around","around"===e),(0,c["default"])(n,r+"-align-top","top"===o||"start"===o),(0,c["default"])(n,r+"-align-middle","middle"===o||"center"===o),(0,c["default"])(n,r+"-align-bottom","bottom"===o||"end"===o),(0,c["default"])(n,r+"-align-baseline","baseline"===o),(0,c["default"])(n,r+"-align-stretch","stretch"===o),(0,c["default"])(n,r+"-align-content-start","start"===l),(0,c["default"])(n,r+"-align-content-end","end"===l),(0,c["default"])(n,r+"-align-content-center","center"===l),(0,c["default"])(n,r+"-align-content-between","between"===l),(0,c["default"])(n,r+"-align-content-around","around"===l),(0,c["default"])(n,r+"-align-content-stretch","stretch"===l),(0,c["default"])(n,u,u),n));return g["default"].createElement("div",(0,p["default"])({className:f,style:k},m,{__source:{fileName:d,lineNumber:42}}),i)},a}(g["default"].Component);a["default"]=h,h.defaultProps={prefixCls:"am-flexbox",align:"center"},n.exports=a["default"]},55:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(2),p=t(e),o=s(7),c=t(o),l=s(3),u=t(l),i=s(5),r=t(i),k=s(4),m=t(k),d="/Users/jiangkai/demo/ant-design-mobile/components/flex/FlexItem.web.tsx",f=s(1),g=t(f),b=s(8),v=t(b),N=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},h=function(n){function a(){return(0,u["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,m["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.children,t=a.className,e=a.prefixCls,o=a.style,l=N(a,["children","className","prefixCls","style"]),u=(0,v["default"])((n={},(0,c["default"])(n,e+"-item",!0),(0,c["default"])(n,t,t),n));return g["default"].createElement("div",(0,p["default"])({className:u,style:o},l,{__source:{fileName:d,lineNumber:19}}),s)},a}(g["default"].Component);a["default"]=h,h.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},56:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(54),p=t(e),o=s(55),c=t(o);p["default"].Item=c["default"],a["default"]=p["default"],n.exports=a["default"]},57:function(n,a,s){"use strict";s(6),s(58)},58:function(n,a){},76:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n,a,s,t){var e={};if(a&&a.antLocale&&a.antLocale[s])e=a.antLocale[s];else{var p=t();e=p["default"]||p}var o=(0,c["default"])({},e);return n.locale&&(o=(0,c["default"])({},o,n.locale),n.locale.lang&&(o.lang=(0,c["default"])({},e.lang,n.locale.lang))),o}function p(n){var a=n.antLocale&&n.antLocale.locale;return n.antLocale&&n.antLocale.exist&&!a?"zh-cn":a}Object.defineProperty(a,"__esModule",{value:!0});var o=s(2),c=t(o);a.getComponentLocale=e,a.getLocaleCode=p},313:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(7),p=t(e),o=s(3),c=t(o),l=s(5),u=t(l),i=s(4),r=t(i),k="/Users/jiangkai/demo/ant-design-mobile/components/pagination/index.web.tsx",m=s(1),d=t(m),f=s(11),g=t(f),b=s(8),v=t(b),N=s(53),h=t(N),y=s(56),x=t(y),w=s(76),_=function(n){function a(s){(0,c["default"])(this,a);var t=(0,u["default"])(this,n.call(this,s));return t.state={current:s.current},t}return(0,r["default"])(a,n),a.prototype.componentWillReceiveProps=function(n){this.setState({current:n.current})},a.prototype.onChange=function(n){this.setState({current:n}),this.props.onChange&&this.props.onChange(n)},a.prototype.render=function(){var n,a=this,t=this.props,e=t.prefixCls,o=t.className,c=t.style,l=t.mode,u=t.total,i=t.simple,r=this.state.current,m=(0,w.getComponentLocale)(this.props,this.context,"Pagination",function(){return s(314)}),f=m.prevText,g=m.nextText,b=d["default"].createElement(x["default"],{__source:{fileName:k,lineNumber:33}},d["default"].createElement(x["default"].Item,{className:e+"-wrap-btn "+e+"-wrap-btn-prev",__source:{fileName:k,lineNumber:34}},d["default"].createElement(h["default"],{inline:!0,disabled:r<=0,onClick:function(){return a.onChange(r-1)},__source:{fileName:k,lineNumber:35}},f)),this.props.children?d["default"].createElement(x["default"].Item,{__source:{fileName:k,lineNumber:37}},this.props.children):!i&&d["default"].createElement(x["default"].Item,{className:e+"-wrap","aria-live":"assertive",__source:{fileName:k,lineNumber:38}},d["default"].createElement("span",{className:"active",__source:{fileName:k,lineNumber:39}},r+1),"/",d["default"].createElement("span",{__source:{fileName:k,lineNumber:39}},u)),d["default"].createElement(x["default"].Item,{className:e+"-wrap-btn "+e+"-wrap-btn-next",__source:{fileName:k,lineNumber:41}},d["default"].createElement(h["default"],{inline:!0,disabled:r>=u-1,onClick:function(){return a.onChange(a.state.current+1)},__source:{fileName:k,lineNumber:42}},g)));if("number"===l)b=d["default"].createElement("div",{className:e+"-wrap",__source:{fileName:k,lineNumber:48}},d["default"].createElement("span",{className:"active",__source:{fileName:k,lineNumber:49}},r+1),"/",d["default"].createElement("span",{__source:{fileName:k,lineNumber:49}},u));else if("pointer"===l){for(var N=[],y=0;y<u;y++){var _;N.push(d["default"].createElement("div",{key:"dot-"+y,className:(0,v["default"])((_={},(0,p["default"])(_,e+"-wrap-dot",!0),(0,p["default"])(_,e+"-wrap-dot-active",y===r),_)),__source:{fileName:k,lineNumber:55}},d["default"].createElement("span",{__source:{fileName:k,lineNumber:59}})))}b=d["default"].createElement("div",{className:e+"-wrap",__source:{fileName:k,lineNumber:62}},N)}var j=(0,v["default"])((n={},(0,p["default"])(n,e,!0),(0,p["default"])(n,o,!!o),n));return d["default"].createElement("div",{className:j,style:c,__source:{fileName:k,lineNumber:68}},b)},a}(d["default"].Component);a["default"]=_,_.defaultProps={prefixCls:"am-pagination",mode:"button",current:0,simple:!1,onChange:function(){}},_.contextTypes={antLocale:g["default"].object},n.exports=a["default"]},314:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={prevText:"\u4e0a\u4e00\u9875",nextText:"\u4e0b\u4e00\u9875"},n.exports=a["default"]},315:function(n,a,s){"use strict";s(6),s(31),s(57),s(348)},348:function(n,a){},563:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],"en-US":[["p","Basic Pagination"]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/pagination/demo/basic.md",id:"components-pagination-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token punctuation">{</span>\n  prevText<span class="token punctuation">:</span> <span class="token string">\'Prev\'</span><span class="token punctuation">,</span>\n  nextText<span class="token punctuation">:</span> <span class="token string">\'Next\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pagination-container<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button <span class="token keyword">with</span> text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button <span class="token keyword">with</span> text and icon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom-pagination-with-icon<span class="token punctuation">"</span></span>\n      <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        prevText<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>arrow-align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\u4e0a\u4e00\u6b65<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        nextText<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>arrow-align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0b\u4e00\u6b65<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hide number<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">simple</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show number only<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Point Style<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pointer<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">\'0.32rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(9),s(16),s(26)),e=n(t),p=(s(315),s(313)),o=n(p),c={prevText:"Prev",nextText:"Next"},l=function(){return a.createElement("div",{className:"pagination-container"},a.createElement("p",{className:"sub-title"},"Button with text"),a.createElement(o["default"],{total:5,current:1,locale:c}),a.createElement("p",{className:"sub-title"},"Button with text and icon"),a.createElement(o["default"],{total:5,className:"custom-pagination-with-icon",current:1,locale:{prevText:a.createElement("span",{className:"arrow-align"},a.createElement(e["default"],{type:"left"}),"\u4e0a\u4e00\u6b65"),nextText:a.createElement("span",{className:"arrow-align"},"\u4e0b\u4e00\u6b65",a.createElement(e["default"],{type:"right"}))}}),a.createElement("p",{className:"sub-title"},"Hide number"),a.createElement(o["default"],{simple:!0,total:5,current:1,locale:c}),a.createElement("p",{className:"sub-title"},"Show number only"),a.createElement(o["default"],{mode:"number",total:5,current:3}),a.createElement("p",{className:"sub-title"},"Point Style"),a.createElement(o["default"],{mode:"pointer",total:5,current:2,style:{marginBottom:"0.32rem"}}))};return a.createElement(l,null)},style:".pagination-container {\n  margin: 0 0.3rem;\n}\n\n.custom-pagination-with-icon .am-pagination-wrap-btn-prev .am-button-inline{\n  padding-left: 0;\n  padding-right: 0.2rem;\n}\n.custom-pagination-with-icon .am-pagination-wrap-btn-next .am-button-inline{\n  padding-left: 0.2rem;\n  padding-right: 0;\n}\n.arrow-align {\n  display: flex;\n  align-items: center;\n}\n.sub-title {\n  color: #888;\n  font-size: .28rem;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.pagination-container</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">0.3</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.custom-pagination-with-icon</span> <span class="token class">.am-pagination-wrap-btn-prev</span> <span class="token class">.am-button-inline</span></span><span class="token punctuation">{</span>\n  <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token number">0.2</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.custom-pagination-with-icon</span> <span class="token class">.am-pagination-wrap-btn-next</span> <span class="token class">.am-button-inline</span></span><span class="token punctuation">{</span>\n  <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token number">0.2</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.arrow-align</span> </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">.28</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},724:function(n,a,s){n.exports={basic:s(563)}}});