webpackJsonp([44],{1288:function(n,a,s){n.exports={content:[["p",["code","<WingBlank size='md'>...</WingBlank>"]]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/wing-blank/demo/basic.md",id:"components-wing-blank-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> WingBlank<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> PlaceHolder <span class="token operator">=</span> props <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n      backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ebebef\'</span><span class="token punctuation">,</span>\n      color<span class="token punctuation">:</span> <span class="token string">\'#bbb\'</span><span class="token punctuation">,</span>\n      textAlign<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n      height<span class="token punctuation">:</span> <span class="token string">\'30px\'</span><span class="token punctuation">,</span>\n      lineHeight<span class="token punctuation">:</span> <span class="token string">\'30px\'</span><span class="token punctuation">,</span>\n      width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">{...props}</span>\n  <span class="token punctuation">></span></span>Block<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> WingBlankExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'15px 0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PlaceHolder</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PlaceHolder</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PlaceHolder</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlankExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{default:n}}var a=s(0),t=(s(0),s(970),s(971)),e=n(t),p=(s(978),s(979)),o=n(p),c=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},l=function(n){return a.createElement("div",c({style:{backgroundColor:"#ebebef",color:"#bbb",textAlign:"center",height:"30px",lineHeight:"30px",width:"100%"}},n),"Block")},u=function(){return a.createElement("div",{style:{padding:"15px 0"}},a.createElement(o.default,null,a.createElement(l,null)),a.createElement(e.default,{size:"lg"}),a.createElement(o.default,{size:"md"},a.createElement(l,null)),a.createElement(e.default,{size:"lg"}),a.createElement(o.default,{size:"sm"},a.createElement(l,null)))};return a.createElement(u,null)}}},957:function(n,a,s){n.exports={basic:s(1288)}},960:function(n,a,s){"use strict";s(962),s(963),s(964)},962:function(n,a){},963:function(n,a){},964:function(n,a,s){"use strict";(function(n){}).call(a,s(36))},965:function(n,a){n.exports={}},970:function(n,a,s){"use strict";s(960),s(975)},971:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function e(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function o(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),l=s(0),u=t(l),i=s(6),r=t(i),k=function(n){function a(){return e(this,a),p(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return o(a,n),c(a,[{key:"render",value:function(){var n=this.props,a=n.prefixCls,s=n.size,t=n.className,e=n.style,p=n.onClick,o=(0,r.default)(a,a+"-"+s,t);return u.default.createElement("div",{className:o,style:e,onClick:p})}}]),a}(u.default.Component);a.default=k,k.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a.default},975:function(n,a){},978:function(n,a,s){"use strict";s(960),s(982)},979:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function e(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function o(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),l=s(0),u=t(l),i=s(6),r=t(i),k=function(n){function a(){return e(this,a),p(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return o(a,n),c(a,[{key:"render",value:function(){var n=this.props,a=n.prefixCls,s=n.size,t=n.className,e=n.children,p=n.style,o=(0,r.default)(a,a+"-"+s,t);return u.default.createElement("div",{className:o,style:p},e)}}]),a}(u.default.Component);a.default=k,k.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a.default},982:function(n,a){}});