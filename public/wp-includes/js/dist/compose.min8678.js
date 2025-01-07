/*! This file is auto-generated */
!function(){var e={8294:function(e){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var t;t=function(){return function(){var e={686:function(e,t,n){"use strict";n.d(t,{default:function(){return S}});var r=n(279),o=n.n(r),u=n(370),i=n.n(u),c=n(817),s=n.n(c);function a(e){try{return document.execCommand(e)}catch(e){return!1}}var l=function(e){var t=s()(e);return a("cut"),t},f=function(e,t){var n=function(e){var t="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[t?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=e,n}(e);t.container.appendChild(n);var r=s()(n);return a("copy"),n.remove(),r},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof e?n=f(e,t):e instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==e?void 0:e.type)?n=f(e.value,t):(n=s()(e),a("copy")),n};function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,n=void 0===t?"copy":t,r=e.container,o=e.target,u=e.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==p(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return u?d(u,{container:r}):o?"cut"===n?l(o):d(o,{container:r}):void 0};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function E(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(u,e);var t,n,r,o=g(u);function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=o.call(this)).resolveOptions(t),n.listenClick(e),n}return t=u,n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=i()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||"copy",r=v({action:n,container:this.container,target:this.target(t),text:this.text(t)});this.emit(r?"success":"error",{action:n,text:r,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return E("action",e)}},{key:"defaultTarget",value:function(e){var t=E("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return E("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}],r=[{key:"copy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return d(e,t)}},{key:"cut",value:function(e){return l(e)}},{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}],n&&m(t.prototype,n),r&&m(t,r),u}(o()),S=x},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,n){var r=n(828);function o(e,t,n,r,o){var i=u.apply(this,arguments);return e.addEventListener(n,i,o),{destroy:function(){e.removeEventListener(n,i,o)}}}function u(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,u){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,u)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var r=n(879),o=n(438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var u=0,i=r.length;u<i;u++)r[u].fn!==t&&r[u].fn._!==t&&o.push(r[u]);return o.length?n[e]=o:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(686)}().default},e.exports=t()},7973:function(e,t,n){var r;!function(o,u,i){if(o){for(var c,s={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},l={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},f={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},d=1;d<20;++d)s[111+d]="f"+d;for(d=0;d<=9;++d)s[d+96]=d.toString();b.prototype.bind=function(e,t,n){var r=this;return e=e instanceof Array?e:[e],r._bindMultiple.call(r,e,t,n),r},b.prototype.unbind=function(e,t){return this.bind.call(this,e,(function(){}),t)},b.prototype.trigger=function(e,t){var n=this;return n._directMap[e+":"+t]&&n._directMap[e+":"+t]({},e),n},b.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},b.prototype.stopCallback=function(e,t){if((" "+t.className+" ").indexOf(" mousetrap ")>-1)return!1;if(g(t,this.target))return!1;if("composedPath"in e&&"function"==typeof e.composedPath){var n=e.composedPath()[0];n!==e.target&&(t=n)}return"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable},b.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},b.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);c=null},b.init=function(){var e=b(u);for(var t in e)"_"!==t.charAt(0)&&(b[t]=function(t){return function(){return e[t].apply(e,arguments)}}(t))},b.init(),o.Mousetrap=b,e.exports&&(e.exports=b),void 0===(r=function(){return b}.call(t,n,t,e))||(e.exports=r)}function p(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function v(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return s[e.which]?s[e.which]:a[e.which]?a[e.which]:String.fromCharCode(e.which).toLowerCase()}function h(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function m(e,t,n){return n||(n=function(){if(!c)for(var e in c={},s)e>95&&e<112||s.hasOwnProperty(e)&&(c[s[e]]=e);return c}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function y(e,t){var n,r,o,u=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),o=0;o<n.length;++o)r=n[o],f[r]&&(r=f[r]),t&&"keypress"!=t&&l[r]&&(r=l[r],u.push("shift")),h(r)&&u.push(r);return{key:r,modifiers:u,action:t=m(r,u,t)}}function g(e,t){return null!==e&&e!==u&&(e===t||g(e.parentNode,t))}function b(e){var t=this;if(e=e||u,!(t instanceof b))return new b(e);t.target=e,t._callbacks={},t._directMap={};var n,r={},o=!1,i=!1,c=!1;function s(e){e=e||{};var t,n=!1;for(t in r)e[t]?n=!0:r[t]=0;n||(c=!1)}function a(e,n,o,u,i,c){var s,a,l,f,d=[],p=o.type;if(!t._callbacks[e])return[];for("keyup"==p&&h(e)&&(n=[e]),s=0;s<t._callbacks[e].length;++s)if(a=t._callbacks[e][s],(u||!a.seq||r[a.seq]==a.level)&&p==a.action&&("keypress"==p&&!o.metaKey&&!o.ctrlKey||(l=n,f=a.modifiers,l.sort().join(",")===f.sort().join(",")))){var v=!u&&a.combo==i,m=u&&a.seq==u&&a.level==c;(v||m)&&t._callbacks[e].splice(s,1),d.push(a)}return d}function l(e,n,r,o){t.stopCallback(n,n.target||n.srcElement,r,o)||!1===e(n,r)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(n),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(n))}function f(e){"number"!=typeof e.which&&(e.which=e.keyCode);var n=v(e);n&&("keyup"!=e.type||o!==n?t.handleKey(n,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):o=!1)}function d(e,t,u,i){function a(t){return function(){c=t,++r[e],clearTimeout(n),n=setTimeout(s,1e3)}}function f(t){l(u,t,e),"keyup"!==i&&(o=v(t)),setTimeout(s,10)}r[e]=0;for(var d=0;d<t.length;++d){var p=d+1===t.length?f:a(i||y(t[d+1]).action);m(t[d],p,i,e,d)}}function m(e,n,r,o,u){t._directMap[e+":"+r]=n;var i,c=(e=e.replace(/\s+/g," ")).split(" ");c.length>1?d(e,c,n,r):(i=y(e,r),t._callbacks[i.key]=t._callbacks[i.key]||[],a(i.key,i.modifiers,{type:i.action},o,e,u),t._callbacks[i.key][o?"unshift":"push"]({callback:n,modifiers:i.modifiers,action:i.action,seq:o,level:u,combo:e}))}t._handleKey=function(e,t,n){var r,o=a(e,t,n),u={},f=0,d=!1;for(r=0;r<o.length;++r)o[r].seq&&(f=Math.max(f,o[r].level));for(r=0;r<o.length;++r)if(o[r].seq){if(o[r].level!=f)continue;d=!0,u[o[r].seq]=1,l(o[r].callback,n,o[r].combo,o[r].seq)}else d||l(o[r].callback,n,o[r].combo);var p="keypress"==n.type&&i;n.type!=c||h(e)||p||s(u),i=d&&"keydown"==n.type},t._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)m(e[r],t,n)},p(e,"keypress",f),p(e,"keydown",f),p(e,"keyup",f)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},5538:function(){!function(e){if(e){var t={},n=e.prototype.stopCallback;e.prototype.stopCallback=function(e,r,o,u){return!!this.paused||!t[o]&&!t[u]&&n.call(this,e,r,o)},e.prototype.bindGlobal=function(e,n,r){if(this.bind(e,n,r),e instanceof Array)for(var o=0;o<e.length;o++)t[e[o]]=!0;else t[e]=!0},e.init()}}("undefined"!=typeof Mousetrap?Mousetrap:void 0)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r].call(u.exports,u,u.exports,n),u.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){"use strict";n.r(r),n.d(r,{__experimentalUseDialog:function(){return B},__experimentalUseDragging:function(){return Z},__experimentalUseDropZone:function(){return we},__experimentalUseFixedWindowList:function(){return xe},__experimentalUseFocusOutside:function(){return H},compose:function(){return h},createHigherOrderComponent:function(){return a},debounce:function(){return f},ifCondition:function(){return y},pipe:function(){return v},pure:function(){return w},throttle:function(){return d},useAsyncList:function(){return pe},useConstrainedTabbing:function(){return P},useCopyOnClick:function(){return N},useCopyToClipboard:function(){return U},useDebounce:function(){return ye},useDisabled:function(){return F},useFocusOnMount:function(){return q},useFocusReturn:function(){return K},useFocusableIframe:function(){return Ee},useInstanceId:function(){return L},useIsomorphicLayoutEffect:function(){return G},useKeyboardShortcut:function(){return Y},useMediaQuery:function(){return J},useMergeRefs:function(){return $},usePrevious:function(){return ee},useReducedMotion:function(){return te},useRefEffect:function(){return A},useResizeObserver:function(){return le},useThrottle:function(){return ge},useViewportMatch:function(){return ce},useWarnOnChange:function(){return ve},withGlobalEvents:function(){return T},withInstanceId:function(){return R},withSafeTimeout:function(){return D},withState:function(){return M}});var e=function(){return e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},e.apply(this,arguments)};Object.create;Object.create;function t(e){return e.toLowerCase()}var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],u=/[^A-Z0-9]+/gi;function i(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function c(e,t){var n=e.charAt(0),r=e.substr(1).toLowerCase();return t>0&&n>="0"&&n<="9"?"_"+n+r:""+n.toUpperCase()+r}function s(n,r){return void 0===r&&(r={}),function(e,n){void 0===n&&(n={});for(var r=n.splitRegexp,c=void 0===r?o:r,s=n.stripRegexp,a=void 0===s?u:s,l=n.transform,f=void 0===l?t:l,d=n.delimiter,p=void 0===d?" ":d,v=i(i(e,c,"$1\0$2"),a,"\0"),h=0,m=v.length;"\0"===v.charAt(h);)h++;for(;"\0"===v.charAt(m-1);)m--;return v.slice(h,m).split("\0").map(f).join(p)}(n,e({delimiter:"",transform:c},r))}function a(e,t){return n=>{const r=e(n);return r.displayName=l(t,n),r}}const l=(e,t)=>{const n=t.displayName||t.name||"Component";return`${s(null!=e?e:"")}(${n})`},f=(e,t,n)=>{let r,o,u,i,c,s=0,a=0,l=!1,f=!1,d=!0;function p(t){const n=r,i=o;return r=void 0,o=void 0,a=t,u=e.apply(i,n),u}function v(e,t){i=setTimeout(e,t)}function h(e){return a=e,v(g,t),l?p(e):u}function m(e){return e-(c||0)}function y(e){const n=m(e);return void 0===c||n>=t||n<0||f&&e-a>=s}function g(){const e=Date.now();if(y(e))return w(e);v(g,function(e){const n=m(e),r=e-a,o=t-n;return f?Math.min(o,s-r):o}(e))}function b(){i=void 0}function w(e){return b(),d&&r?p(e):(r=o=void 0,u)}function E(){return void 0!==i}function x(){const e=Date.now(),n=y(e);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];if(r=s,o=this,c=e,n){if(!E())return h(c);if(f)return v(g,t),p(c)}return E()||v(g,t),u}return n&&(l=!!n.leading,f="maxWait"in n,void 0!==n.maxWait&&(s=Math.max(n.maxWait,t)),d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==i&&clearTimeout(i),a=0,b(),r=c=o=void 0},x.flush=function(){return E()?w(Date.now()):u},x.pending=E,x},d=(e,t,n)=>{let r=!0,o=!0;return n&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),f(e,t,{leading:r,trailing:o,maxWait:t})},p=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){const t=n.flat();e&&t.reverse();for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return t.reduce(((e,t)=>[t(...e)]),o)[0]}}};var v=p();var h=p(!0),m=window.wp.element;var y=function(e){return a((t=>n=>e(n)?(0,m.createElement)(t,n):null),"ifCondition")},g=window.wp.isShallowEqual,b=n.n(g);var w=a((function(e){return e.prototype instanceof m.Component?class extends e{shouldComponentUpdate(e,t){return!b()(e,this.props)||!b()(t,this.state)}}:class extends m.Component{shouldComponentUpdate(e){return!b()(e,this.props)}render(){return(0,m.createElement)(e,this.props)}}}),"pure");function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(null,arguments)}var x=window.wp.deprecated,S=n.n(x);const k=new class{constructor(){this.listeners={},this.handleEvent=this.handleEvent.bind(this)}add(e,t){this.listeners[e]||(window.addEventListener(e,this.handleEvent),this.listeners[e]=[]),this.listeners[e].push(t)}remove(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter((e=>e!==t)),this.listeners[e].length||(window.removeEventListener(e,this.handleEvent),delete this.listeners[e]))}handleEvent(e){var t;null===(t=this.listeners[e.type])||void 0===t||t.forEach((t=>{t.handleEvent(e)}))}};function T(e){return S()("wp.compose.withGlobalEvents",{since:"5.7",alternative:"useEffect"}),a((t=>{class n extends m.Component{constructor(e){super(e),this.handleEvent=this.handleEvent.bind(this),this.handleRef=this.handleRef.bind(this)}componentDidMount(){Object.keys(e).forEach((e=>{k.add(e,this)}))}componentWillUnmount(){Object.keys(e).forEach((e=>{k.remove(e,this)}))}handleEvent(t){const n=e[t.type];"function"==typeof this.wrappedRef[n]&&this.wrappedRef[n](t)}handleRef(e){this.wrappedRef=e,this.props.forwardedRef&&this.props.forwardedRef(e)}render(){return(0,m.createElement)(t,E({},this.props.ownProps,{ref:this.handleRef}))}}return(0,m.forwardRef)(((e,t)=>(0,m.createElement)(n,{ownProps:e,forwardedRef:t})))}),"withGlobalEvents")}const C=new WeakMap;var L=function(e,t,n){return(0,m.useMemo)((()=>{if(n)return n;const r=function(e){const t=C.get(e)||0;return C.set(e,t+1),t}(e);return t?`${t}-${r}`:r}),[e])};var R=a((e=>t=>{const n=L(e);return(0,m.createElement)(e,E({},t,{instanceId:n}))}),"instanceId");var D=a((e=>class extends m.Component{constructor(e){super(e),this.timeouts=[],this.setTimeout=this.setTimeout.bind(this),this.clearTimeout=this.clearTimeout.bind(this)}componentWillUnmount(){this.timeouts.forEach(clearTimeout)}setTimeout(e,t){const n=setTimeout((()=>{e(),this.clearTimeout(n)}),t);return this.timeouts.push(n),n}clearTimeout(e){clearTimeout(e),this.timeouts=this.timeouts.filter((t=>t!==e))}render(){return(0,m.createElement)(e,E({},this.props,{setTimeout:this.setTimeout,clearTimeout:this.clearTimeout}))}}),"withSafeTimeout");function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return S()("wp.compose.withState",{since:"5.8",alternative:"wp.element.useState"}),a((t=>class extends m.Component{constructor(t){super(t),this.setState=this.setState.bind(this),this.state=e}render(){return(0,m.createElement)(t,E({},this.props,this.state,{setState:this.setState}))}}),"withState")}var O=window.wp.keycodes,_=window.wp.dom;function A(e,t){const n=(0,m.useRef)();return(0,m.useCallback)((t=>{t?n.current=e(t):n.current&&n.current()}),t)}var P=function(){return A((e=>{function t(t){const{keyCode:n,shiftKey:r,target:o}=t;if(n!==O.TAB)return;const u=r?"findPrevious":"findNext",i=_.focus.tabbable[u](o)||null;if(e.contains(i))return;const c=r?"append":"prepend",{ownerDocument:s}=e,a=s.createElement("div");a.tabIndex=-1,e[c](a),a.addEventListener("blur",(()=>e.removeChild(a))),a.focus()}return e.addEventListener("keydown",t),()=>{e.removeEventListener("keydown",t)}}),[])},j=n(8294),I=n.n(j);function N(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4e3;S()("wp.compose.useCopyOnClick",{since:"5.8",alternative:"wp.compose.useCopyToClipboard"});const r=(0,m.useRef)(),[o,u]=(0,m.useState)(!1);return(0,m.useEffect)((()=>{let o;if(e.current)return r.current=new(I())(e.current,{text:()=>"function"==typeof t?t():t}),r.current.on("success",(e=>{let{clearSelection:t,trigger:r}=e;t(),r&&r.focus(),n&&(u(!0),clearTimeout(o),o=setTimeout((()=>u(!1)),n))})),()=>{r.current&&r.current.destroy(),clearTimeout(o)}}),[t,n,u]),o}function z(e){const t=(0,m.useRef)(e);return t.current=e,t}function U(e,t){const n=z(e),r=z(t);return A((e=>{const t=new(I())(e,{text(){return"function"==typeof n.current?n.current():n.current||""}});return t.on("success",(t=>{let{clearSelection:n}=t;n(),e.focus(),r.current&&r.current()})),()=>{t.destroy()}}),[])}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"firstElement";const t=(0,m.useRef)(e);return(0,m.useEffect)((()=>{t.current=e}),[e]),(0,m.useCallback)((e=>{var n,r;if(!e||!1===t.current)return;if(e.contains(null!==(n=null===(r=e.ownerDocument)||void 0===r?void 0:r.activeElement)&&void 0!==n?n:null))return;let o=e;if("firstElement"===t.current){const t=_.focus.tabbable.find(e)[0];t&&(o=t)}o.focus({preventScroll:!0})}),[])}var K=function(e){const t=(0,m.useRef)(null),n=(0,m.useRef)(null),r=(0,m.useRef)(e);return(0,m.useEffect)((()=>{r.current=e}),[e]),(0,m.useCallback)((e=>{if(e){if(t.current=e,n.current)return;n.current=e.ownerDocument.activeElement}else if(n.current){var o,u,i;const e=null===(o=t.current)||void 0===o?void 0:o.contains(null===(u=t.current)||void 0===u?void 0:u.ownerDocument.activeElement);if(null!==(i=t.current)&&void 0!==i&&i.isConnected&&!e)return;var c;if(r.current)r.current();else null===(c=n.current)||void 0===c||c.focus()}}),[])};const W=["button","submit"];function H(e){const t=(0,m.useRef)(e);(0,m.useEffect)((()=>{t.current=e}),[e]);const n=(0,m.useRef)(!1),r=(0,m.useRef)(),o=(0,m.useCallback)((()=>{clearTimeout(r.current)}),[]);(0,m.useEffect)((()=>()=>o()),[]),(0,m.useEffect)((()=>{e||o()}),[e,o]);const u=(0,m.useCallback)((e=>{const{type:t,target:r}=e;["mouseup","touchend"].includes(t)?n.current=!1:function(e){if(!(e instanceof window.HTMLElement))return!1;switch(e.nodeName){case"A":case"BUTTON":return!0;case"INPUT":return W.includes(e.type)}return!1}(r)&&(n.current=!0)}),[]),i=(0,m.useCallback)((e=>{var o;if(e.persist(),n.current)return;const u=e.target.getAttribute("data-unstable-ignore-focus-outside-for-relatedtarget");u&&null!==(o=e.relatedTarget)&&void 0!==o&&o.closest(u)||(r.current=setTimeout((()=>{document.hasFocus()?"function"==typeof t.current&&t.current(e):e.preventDefault()}),0))}),[]);return{onFocus:o,onMouseDown:u,onMouseUp:u,onTouchStart:u,onTouchEnd:u,onBlur:i}}function V(e,t){"function"==typeof e?e(t):e&&e.hasOwnProperty("current")&&(e.current=t)}function $(e){const t=(0,m.useRef)(),n=(0,m.useRef)(!1),r=(0,m.useRef)(!1),o=(0,m.useRef)([]),u=(0,m.useRef)(e);return u.current=e,(0,m.useLayoutEffect)((()=>{!1===r.current&&!0===n.current&&e.forEach(((e,n)=>{const r=o.current[n];e!==r&&(V(r,null),V(e,t.current))})),o.current=e}),e),(0,m.useLayoutEffect)((()=>{r.current=!1})),(0,m.useCallback)((e=>{V(t,e),r.current=!0,n.current=null!==e;const i=e?u.current:o.current;for(const t of i)V(t,e)}),[])}var B=function(e){const t=(0,m.useRef)();(0,m.useEffect)((()=>{t.current=e}),Object.values(e));const n=P(),r=q(e.focusOnMount),o=K(),u=H((e=>{var n,r;null!==(n=t.current)&&void 0!==n&&n.__unstableOnClose?t.current.__unstableOnClose("focus-outside",e):null!==(r=t.current)&&void 0!==r&&r.onClose&&t.current.onClose()})),i=(0,m.useCallback)((e=>{e&&e.addEventListener("keydown",(e=>{var n;e.keyCode===O.ESCAPE&&!e.defaultPrevented&&null!==(n=t.current)&&void 0!==n&&n.onClose&&(e.preventDefault(),t.current.onClose())}))}),[]);return[$([!1!==e.focusOnMount?n:null,!1!==e.focusOnMount?o:null,!1!==e.focusOnMount?r:null,i]),{...u,tabIndex:-1}]};function F(){let{isDisabled:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return A((t=>{var n;if(e)return;const r=null==t||null===(n=t.ownerDocument)||void 0===n?void 0:n.defaultView;if(!r)return;const o=[],u=()=>{t.childNodes.forEach((e=>{e instanceof r.HTMLElement&&(e.getAttribute("inert")||(e.setAttribute("inert","true"),o.push((()=>{e.removeAttribute("inert")}))))}))},i=f(u,0,{leading:!0});u();const c=new window.MutationObserver(i);return c.observe(t,{childList:!0}),()=>{c&&c.disconnect(),i.cancel(),o.forEach((e=>e()))}}),[e])}var G="undefined"!=typeof window?m.useLayoutEffect:m.useEffect;function Z(e){let{onDragStart:t,onDragMove:n,onDragEnd:r}=e;const[o,u]=(0,m.useState)(!1),i=(0,m.useRef)({onDragStart:t,onDragMove:n,onDragEnd:r});G((()=>{i.current.onDragStart=t,i.current.onDragMove=n,i.current.onDragEnd=r}),[t,n,r]);const c=(0,m.useCallback)((e=>i.current.onDragMove&&i.current.onDragMove(e)),[]),s=(0,m.useCallback)((e=>{i.current.onDragEnd&&i.current.onDragEnd(e),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",s),u(!1)}),[]),a=(0,m.useCallback)((e=>{i.current.onDragStart&&i.current.onDragStart(e),document.addEventListener("mousemove",c),document.addEventListener("mouseup",s),u(!0)}),[]);return(0,m.useEffect)((()=>()=>{o&&(document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",s))}),[o]),{startDrag:a,endDrag:s,isDragging:o}}var Q=n(7973),X=n.n(Q);n(5538);var Y=function(e,t){let{bindGlobal:n=!1,eventName:r="keydown",isDisabled:o=!1,target:u}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=(0,m.useRef)(t);(0,m.useEffect)((()=>{i.current=t}),[t]),(0,m.useEffect)((()=>{if(o)return;const t=new(X())(u&&u.current?u.current:document);return(Array.isArray(e)?e:[e]).forEach((e=>{const o=e.split("+"),u=new Set(o.filter((e=>e.length>1))),c=u.has("alt"),s=u.has("shift");if((0,O.isAppleOS)()&&(1===u.size&&c||2===u.size&&c&&s))throw new Error(`Cannot bind ${e}. Alt and Shift+Alt modifiers are reserved for character input.`);t[n?"bindGlobal":"bind"](e,(function(){return i.current(...arguments)}),r)})),()=>{t.reset()}}),[e,n,r,u,o])};function J(e){const[t,n]=(0,m.useState)((()=>!(!e||"undefined"==typeof window||!window.matchMedia(e).matches)));return(0,m.useEffect)((()=>{if(!e)return;const t=()=>n(window.matchMedia(e).matches);t();const r=window.matchMedia(e);return r.addListener(t),()=>{r.removeListener(t)}}),[e]),!!e&&t}function ee(e){const t=(0,m.useRef)();return(0,m.useEffect)((()=>{t.current=e}),[e]),t.current}var te=()=>J("(prefers-reduced-motion: reduce)");const ne={huge:1440,wide:1280,large:960,medium:782,small:600,mobile:480},re={">=":"min-width","<":"max-width"},oe={">=":(e,t)=>t>=e,"<":(e,t)=>t<e},ue=(0,m.createContext)(null),ie=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:">=";const n=(0,m.useContext)(ue),r=!n&&`(${re[t]}: ${ne[e]}px)`,o=J(r||void 0);return n?oe[t](ne[e],n):o};ie.__experimentalWidthProvider=ue.Provider;var ce=ie;function se(e,t){const n=(0,m.useRef)(null),r=(0,m.useRef)(null),o=(0,m.useRef)(),u=(0,m.useCallback)((()=>{let i=null;n.current?i=n.current:t&&(i=t instanceof HTMLElement?t:t.current),r.current&&r.current.element===i&&r.current.reporter===u||(o.current&&(o.current(),o.current=null),r.current={reporter:u,element:i},i&&(o.current=e(i)))}),[t,e]);return(0,m.useEffect)((()=>{u()}),[u]),(0,m.useCallback)((e=>{n.current=e,u()}),[u])}const ae=(e,t,n)=>e[t]?e[t][0]?e[t][0][n]:e[t][n]:"contentBoxSize"===t?e.contentRect["inlineSize"===n?"width":"height"]:void 0;function le(){const{ref:e,width:t,height:n}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e.onResize,n=(0,m.useRef)(void 0);n.current=t;const r=e.round||Math.round,o=(0,m.useRef)(),[u,i]=(0,m.useState)({width:void 0,height:void 0}),c=(0,m.useRef)(!1);(0,m.useEffect)((()=>()=>{c.current=!0}),[]);const s=(0,m.useRef)({width:void 0,height:void 0}),a=se((0,m.useCallback)((t=>(o.current&&o.current.box===e.box&&o.current.round===r||(o.current={box:e.box,round:r,instance:new ResizeObserver((t=>{const o=t[0];let u="borderBoxSize";u="border-box"===e.box?"borderBoxSize":"device-pixel-content-box"===e.box?"devicePixelContentBoxSize":"contentBoxSize";const a=ae(o,u,"inlineSize"),l=ae(o,u,"blockSize"),f=a?r(a):void 0,d=l?r(l):void 0;if(s.current.width!==f||s.current.height!==d){const e={width:f,height:d};s.current.width=f,s.current.height=d,n.current?n.current(e):c.current||i(e)}}))}),o.current.instance.observe(t,{box:e.box}),()=>{o.current&&o.current.instance.unobserve(t)})),[e.box,r]),e.ref);return(0,m.useMemo)((()=>({ref:a,width:u.width,height:u.height})),[a,u?u.width:null,u?u.height:null])}(),r=(0,m.useMemo)((()=>({width:null!=t?t:null,height:null!=n?n:null})),[t,n]);return[(0,m.createElement)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",opacity:0,overflow:"hidden",zIndex:-1},"aria-hidden":"true",ref:e}),r]}var fe=window.wp.priorityQueue;function de(e,t){const n=[];for(let r=0;r<e.length;r++){const o=e[r];if(!t.includes(o))break;n.push(o)}return n}var pe=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{step:1};const{step:n=1}=t,[r,o]=(0,m.useState)([]);return(0,m.useEffect)((()=>{let t=de(e,r);t.length<n&&(t=t.concat(e.slice(t.length,n))),o(t);const u=(0,fe.createQueue)();for(let r=t.length;r<e.length;r+=n)u.add({},(()=>{(0,m.flushSync)((()=>{o((t=>[...t,...e.slice(r,r+n)]))}))}));return()=>u.reset()}),[e]),r};var ve=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Change detection";const n=ee(e);Object.entries(null!=n?n:[]).forEach((n=>{let[r,o]=n;o!==e[r]&&console.warn(`${t}: ${r} key changed:`,o,e[r])}))},he=window.React;function me(e,t){var n=(0,he.useState)((function(){return{inputs:t,result:e()}}))[0],r=(0,he.useRef)(!0),o=(0,he.useRef)(n),u=r.current||Boolean(t&&o.current.inputs&&function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.current.inputs))?o.current:{inputs:t,result:e()};return(0,he.useEffect)((function(){r.current=!1,o.current=u}),[u]),u.result}function ye(e,t,n){const r=me((()=>f(e,null!=t?t:0,n)),[e,t,n]);return(0,m.useEffect)((()=>()=>r.cancel()),[r]),r}function ge(e,t,n){const r=me((()=>d(e,null!=t?t:0,n)),[e,t,n]);return(0,m.useEffect)((()=>()=>r.cancel()),[r]),r}function be(e){const t=(0,m.useRef)();return t.current=e,t}function we(e){let{isDisabled:t,onDrop:n,onDragStart:r,onDragEnter:o,onDragLeave:u,onDragEnd:i,onDragOver:c}=e;const s=be(n),a=be(r),l=be(o),f=be(u),d=be(i),p=be(c);return A((e=>{if(t)return;let n=!1;const{ownerDocument:r}=e;function o(e){n||(n=!0,r.addEventListener("dragend",h),r.addEventListener("mousemove",h),a.current&&a.current(e))}function u(t){t.preventDefault(),e.contains(t.relatedTarget)||l.current&&l.current(t)}function i(e){!e.defaultPrevented&&p.current&&p.current(e),e.preventDefault()}function c(t){(function(t){const{defaultView:n}=r;if(!(t&&n&&t instanceof n.HTMLElement&&e.contains(t)))return!1;let o=t;do{if(o.dataset.isDropZone)return o===e}while(o=o.parentElement);return!1})(t.relatedTarget)||f.current&&f.current(t)}function v(e){e.defaultPrevented||(e.preventDefault(),e.dataTransfer&&e.dataTransfer.files.length,s.current&&s.current(e),h(e))}function h(e){n&&(n=!1,r.removeEventListener("dragend",h),r.removeEventListener("mousemove",h),d.current&&d.current(e))}return e.dataset.isDropZone="true",e.addEventListener("drop",v),e.addEventListener("dragenter",u),e.addEventListener("dragover",i),e.addEventListener("dragleave",c),r.addEventListener("dragenter",o),()=>{delete e.dataset.isDropZone,e.removeEventListener("drop",v),e.removeEventListener("dragenter",u),e.removeEventListener("dragover",i),e.removeEventListener("dragleave",c),r.removeEventListener("dragend",h),r.removeEventListener("mousemove",h),r.removeEventListener("dragenter",o)}}),[t])}function Ee(){return A((e=>{const{ownerDocument:t}=e;if(!t)return;const{defaultView:n}=t;if(n)return n.addEventListener("blur",r),()=>{n.removeEventListener("blur",r)};function r(){t&&t.activeElement===e&&e.focus()}}),[])}function xe(e,t,n,r){var o,u;const i=null!==(o=null==r?void 0:r.initWindowSize)&&void 0!==o?o:30,c=null===(u=null==r?void 0:r.useWindowing)||void 0===u||u,[s,a]=(0,m.useState)({visibleItems:i,start:0,end:i,itemInView:e=>e>=0&&e<=i});return(0,m.useLayoutEffect)((()=>{var o,u,i,s;if(!c)return;const l=(0,_.getScrollContainer)(e.current),d=e=>{var o;if(!l)return;const u=Math.ceil(l.clientHeight/t),i=e?u:null!==(o=null==r?void 0:r.windowOverscan)&&void 0!==o?o:u,c=Math.floor(l.scrollTop/t),s=Math.max(0,c-i),f=Math.min(n-1,c+u+i);a((e=>{const t={visibleItems:u,start:s,end:f,itemInView:e=>s<=e&&e<=f};return e.start!==t.start||e.end!==t.end||e.visibleItems!==t.visibleItems?t:e}))};d(!0);const p=f((()=>{d()}),16);return null==l||l.addEventListener("scroll",p),null==l||null===(o=l.ownerDocument)||void 0===o||null===(u=o.defaultView)||void 0===u||u.addEventListener("resize",p),null==l||null===(i=l.ownerDocument)||void 0===i||null===(s=i.defaultView)||void 0===s||s.addEventListener("resize",p),()=>{var e,t;null==l||l.removeEventListener("scroll",p),null==l||null===(e=l.ownerDocument)||void 0===e||null===(t=e.defaultView)||void 0===t||t.removeEventListener("resize",p)}}),[t,e,n]),(0,m.useLayoutEffect)((()=>{var r,o;if(!c)return;const u=(0,_.getScrollContainer)(e.current),i=e=>{switch(e.keyCode){case O.HOME:return null==u?void 0:u.scrollTo({top:0});case O.END:return null==u?void 0:u.scrollTo({top:n*t});case O.PAGEUP:return null==u?void 0:u.scrollTo({top:u.scrollTop-s.visibleItems*t});case O.PAGEDOWN:return null==u?void 0:u.scrollTo({top:u.scrollTop+s.visibleItems*t})}};return null==u||null===(r=u.ownerDocument)||void 0===r||null===(o=r.defaultView)||void 0===o||o.addEventListener("keydown",i),()=>{var e,t;null==u||null===(e=u.ownerDocument)||void 0===e||null===(t=e.defaultView)||void 0===t||t.removeEventListener("keydown",i)}}),[n,t,e,s.visibleItems]),[s,a]}}(),(window.wp=window.wp||{}).compose=r}();