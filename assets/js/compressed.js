/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

!function(n){var t=n(window),o=t.height();t.resize(function(){o=t.height()}),n.fn.parallax=function(i,e,r){var u,h,l=n(this);function c(){var r=t.scrollTop();l.each(function(){var t=n(this),c=t.offset().top;c+u(t)<r||c>r+o||l.css("backgroundPosition",i+" "+Math.round((h-r)*e)+"px")})}l.each(function(){h=l.offset().top}),u=r?function(n){return n.outerHeight(!0)}:function(n){return n.height()},(arguments.length<1||null===i)&&(i="50%"),(arguments.length<2||null===e)&&(e=.1),(arguments.length<3||null===r)&&(r=!0),t.bind("scroll",c).resize(c),c()}}(jQuery);

!function(e){"use strict";function t(){}var n=t.prototype,i=!!Array.prototype.indexOf;function r(e,t){if(i)return t.indexOf(e);for(var n=t.length;n--;)if(t[n]===e)return n;return-1}n._getEvents=function(){return this._events||(this._events={})},n.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e)for(n in t={},i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n]);else t=i[e]||(i[e]=[]);return t},n.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&((t={})[e]=n),t||n},n.addListener=function(e,t){var n,i=this.getListenersAsObject(e);for(n in i)i.hasOwnProperty(n)&&-1===r(t,i[n])&&i[n].push(t);return this},n.on=n.addListener,n.defineEvent=function(e){return this.getListeners(e),this},n.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},n.removeListener=function(e,t){var n,i,s=this.getListenersAsObject(e);for(i in s)s.hasOwnProperty(i)&&-1!==(n=r(t,s[i]))&&s[i].splice(n,1);return this},n.off=n.removeListener,n.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},n.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},n.manipulateListeners=function(e,t,n){var i,r,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)s.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?s.call(this,i,r):o.call(this,i,r));return this},n.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},n.emitEvent=function(e,t){var n,i,r=this.getListenersAsObject(e);for(i in r)if(r.hasOwnProperty(i))for(n=r[i].length;n--;)!0===(t?r[i][n].apply(null,t):r[i][n]())&&this.removeListener(e,r[i][n]);return this},n.trigger=n.emitEvent,n.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},"function"==typeof define&&define.amd?define(function(){return t}):e.EventEmitter=t}(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";var t=e.jQuery,n=e.console,i=void 0!==n;function r(e,t){for(var n in t)e[n]=t[n];return e}var s=Object.prototype.toString;function o(e){var t=[];if(function(e){return"[object Array]"===s.call(e)}(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;n<i;n++)t.push(e[n]);else t.push(e);return t}function h(e,s){function h(e,n,i){if(!(this instanceof h))return new h(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=r({},this.options),"function"==typeof n?i=n:r(this.options,n),i&&this.on("always",i),this.getImages(),t&&(this.jqDeferred=new t.Deferred);var s=this;setTimeout(function(){s.check()})}h.prototype=new e,h.prototype.options={},h.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;e<t;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,s=i.length;r<s;r++){var o=i[r];this.addImage(o)}}},h.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},h.prototype.check=function(){var e=this,t=0,r=this.images.length;if(this.hasAnyBroken=!1,r)for(var s=0;s<r;s++){var o=this.images[s];o.on("confirm",h),o.check()}else this.complete();function h(s,o){return e.options.debug&&i&&n.log("confirm",s,o),e.progress(s),++t===r&&e.complete(),!0}},h.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emit("progress",this,e),this.jqDeferred&&this.jqDeferred.notify(this,e)},h.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(e,this),this.emit("always",this),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},t&&(t.fn.imagesLoaded=function(e,n){return new h(this,e,n).jqDeferred.promise(t(this))});var a={};function f(e){this.img=e}return f.prototype=new e,f.prototype.check=function(){var e=a[this.img.src];if(e)this.useCached(e);else if(a[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)this.confirm(0!==this.img.naturalWidth,"naturalWidth");else{var t=this.proxyImage=new Image;s.bind(t,"load",this),s.bind(t,"error",this),t.src=this.img.src}},f.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},f.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},f.prototype.unbindProxyEvents=function(){s.unbind(this.proxyImage,"load",this),s.unbind(this.proxyImage,"error",this)},h}"function"==typeof define&&define.amd?define(["eventEmitter","eventie"],h):e.imagesLoaded=h(e.EventEmitter,e.eventie)}(window);

!function(t){var e={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",responsiveWidth:!1},i=t(window),n=t(document),s=[],r=i.height(),o=function(){for(var e=i.scrollTop(),o=n.height(),a=o-r,c=e>a?a-e:0,p=0;p<s.length;p++){var l=s[p];if(e<=l.stickyWrapper.offset().top-l.topSpacing-c)null!==l.currentTop&&(l.stickyElement.css("position","").css("top",""),l.stickyElement.trigger("sticky-end",[l]).parent().removeClass(l.className),l.currentTop=null);else{var d=o-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-e-c;d<0?d+=l.topSpacing:d=l.topSpacing,l.currentTop!=d&&(l.stickyElement.css("position","fixed").css("top",d),void 0!==l.getWidthFrom&&l.stickyElement.css("width",t(l.getWidthFrom).width()),l.stickyElement.trigger("sticky-start",[l]).parent().addClass(l.className),l.currentTop=d)}}},a=function(){r=i.height();for(var e=0;e<s.length;e++){var n=s[e];void 0!==n.getWidthFrom&&!0===n.responsiveWidth&&n.stickyElement.css("width",t(n.getWidthFrom).width())}},c={init:function(i){var n=t.extend({},e,i);return this.each(function(){var e=t(this),i=e.attr("id"),r=t("<div></div>").attr("id",i+"-sticky-wrapper").addClass(n.wrapperClassName);e.wrapAll(r),n.center&&e.parent().css({width:e.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==e.css("float")&&e.css({float:"none"}).parent().css({float:"right"});var o=e.parent();o.css("height",e.outerHeight()),s.push({topSpacing:n.topSpacing,bottomSpacing:n.bottomSpacing,stickyElement:e,currentTop:null,stickyWrapper:o,className:n.className,getWidthFrom:n.getWidthFrom,responsiveWidth:n.responsiveWidth})})},update:o,unstick:function(e){return this.each(function(){for(var e=t(this),i=-1,n=0;n<s.length;n++)s[n].stickyElement.get(0)==e.get(0)&&(i=n);-1!=i&&(s.splice(i,1),e.unwrap(),e.removeAttr("style"))})}};window.addEventListener?(window.addEventListener("scroll",o,!1),window.addEventListener("resize",a,!1)):window.attachEvent&&(window.attachEvent("onscroll",o),window.attachEvent("onresize",a)),t.fn.sticky=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):c.init.apply(this,arguments)},t.fn.unstick=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):c.unstick.apply(this,arguments)},t(function(){setTimeout(o,0)})}(jQuery);

function ssc_init(){if(document.body){var e=document.body,s=document.documentElement,c=window.innerHeight,t=e.scrollHeight;if(ssc_root=document.compatMode.indexOf("CSS")>=0?s:e,ssc_activeElement=e,ssc_initdone=!0,top!=self)ssc_frame=!0;else if(t>c&&(e.offsetHeight<=c||s.offsetHeight<=c)&&(ssc_root.style.height="auto",ssc_root.offsetHeight<=c)){var o=document.createElement("div");o.style.clear="both",e.appendChild(o)}ssc_fixedback||(e.style.backgroundAttachment="scroll",s.style.backgroundAttachment="scroll"),ssc_keyboardsupport&&ssc_addEvent("keydown",ssc_keydown)}}function ssc_scrollArray(e,s,c,t){if(t||(t=1e3),ssc_directionCheck(s,c),ssc_que.push({x:s,y:c,lastX:s<0?.99:-.99,lastY:c<0?.99:-.99,start:+new Date}),!ssc_pending){var o=function(){for(var r=+new Date,n=0,a=0,i=0;i<ssc_que.length;i++){var l=ssc_que[i],_=r-l.start,u=_>=ssc_animtime,d=u?1:_/ssc_animtime;ssc_pulseAlgorithm&&(d=ssc_pulse(d));var f=l.x*d-l.lastX>>0,m=l.y*d-l.lastY>>0;n+=f,a+=m,l.lastX+=f,l.lastY+=m,u&&(ssc_que.splice(i,1),i--)}if(s){var h=e.scrollLeft;e.scrollLeft+=n,n&&e.scrollLeft===h&&(s=0)}if(c){var p=e.scrollTop;e.scrollTop+=a,a&&e.scrollTop===p&&(c=0)}s||c||(ssc_que=[]),ssc_que.length?setTimeout(o,t/ssc_framerate+1):ssc_pending=!1};setTimeout(o,0),ssc_pending=!0}}function ssc_wheel(e){ssc_initdone||ssc_init();var s=e.target,c=ssc_overflowingAncestor(s);if(!c||e.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||ssc_isNodeName(s,"embed")&&/\.pdf/i.test(s.src))return!0;var t=e.wheelDeltaX||0,o=e.wheelDeltaY||0;t||o||(o=e.wheelDelta||0),Math.abs(t)>1.2&&(t*=ssc_stepsize/120),Math.abs(o)>1.2&&(o*=ssc_stepsize/120),ssc_scrollArray(c,-t,-o),e.preventDefault()}function ssc_keydown(e){var s=e.target,c=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(s.nodeName)||s.isContentEditable||e.defaultPrevented||c)return!0;if(ssc_isNodeName(s,"button")&&e.keyCode===ssc_key.spacebar)return!0;var t=0,o=0,r=ssc_overflowingAncestor(ssc_activeElement),n=r.clientHeight;switch(r==document.body&&(n=window.innerHeight),e.keyCode){case ssc_key.up:o=-ssc_arrowscroll;break;case ssc_key.down:o=ssc_arrowscroll;break;case ssc_key.spacebar:o=-(e.shiftKey?1:-1)*n*.9;break;case ssc_key.pageup:o=.9*-n;break;case ssc_key.pagedown:o=.9*n;break;case ssc_key.home:o=-r.scrollTop;break;case ssc_key.end:var a=r.scrollHeight-r.scrollTop-n;o=a>0?a+10:0;break;case ssc_key.left:t=-ssc_arrowscroll;break;case ssc_key.right:t=ssc_arrowscroll;break;default:return!0}ssc_scrollArray(r,t,o),e.preventDefault()}function ssc_mousedown(e){ssc_activeElement=e.target}function ssc_setCache(e,s){for(var c=e.length;c--;)ssc_cache[ssc_uniqueID(e[c])]=s;return s}function ssc_overflowingAncestor(e){var s=[],c=ssc_root.scrollHeight;do{var t=ssc_cache[ssc_uniqueID(e)];if(t)return ssc_setCache(s,t);if(s.push(e),c===e.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<c)return ssc_setCache(s,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow"),"scroll"===overflow||"auto"===overflow))return ssc_setCache(s,e)}while(e=e.parentNode)}function ssc_addEvent(e,s,c){window.addEventListener(e,s,c||!1)}function ssc_removeEvent(e,s,c){window.removeEventListener(e,s,c||!1)}function ssc_isNodeName(e,s){return e.nodeName.toLowerCase()===s.toLowerCase()}function ssc_directionCheck(e,s){e=e>0?1:-1,s=s>0?1:-1,ssc_direction.x===e&&ssc_direction.y===s||(ssc_direction.x=e,ssc_direction.y=s,ssc_que=[])}function ssc_pulse_(e){var s,c;return(e*=ssc_pulseScale)<1?s=e-(1-Math.exp(-e)):(e-=1,s=(c=Math.exp(-1))+(1-Math.exp(-e))*(1-c)),s*ssc_pulseNormalize}function ssc_pulse(e){return e>=1?1:e<=0?0:(1==ssc_pulseNormalize&&(ssc_pulseNormalize/=ssc_pulse_(1)),ssc_pulse_(e))}var ssc_activeElement,ssc_framerate=150,ssc_animtime=500,ssc_stepsize=150,ssc_pulseAlgorithm=!0,ssc_pulseScale=6,ssc_pulseNormalize=1,ssc_keyboardsupport=!0,ssc_arrowscroll=50,ssc_frame=!1,ssc_direction={x:0,y:0},ssc_initdone=!1,ssc_fixedback=!0,ssc_root=document.documentElement,ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},ssc_que=[],ssc_pending=!1,ssc_cache={};setInterval(function(){ssc_cache={}},1e4);var ssc_uniqueID=function(){var e=0;return function(s){return s.ssc_uniqueID||(s.ssc_uniqueID=e++)}}(),ischrome=/chrome/.test(navigator.userAgent.toLowerCase());ischrome&&(ssc_addEvent("mousedown",ssc_mousedown),ssc_addEvent("mousewheel",ssc_wheel),ssc_addEvent("load",ssc_init));

!function(e,t){"object"==typeof exports?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):t(e.jQuery)}(this,function(e){var t=function(e,t){var a,n=document.createElement("canvas");e.appendChild(n),"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(n);var i=n.getContext("2d");n.width=n.height=t.size;var r=1;window.devicePixelRatio>1&&(r=window.devicePixelRatio,n.style.width=n.style.height=[t.size,"px"].join(""),n.width=n.height=t.size*r,i.scale(r,r)),i.translate(t.size/2,t.size/2),i.rotate((t.rotate/180-.5)*Math.PI);var o=(t.size-t.lineWidth)/2;t.scaleColor&&t.scaleLength&&(o-=t.scaleLength+2),Date.now=Date.now||function(){return+new Date};var s=function(e,t,a){var n=(a=Math.min(Math.max(-1,a||0),1))<=0;i.beginPath(),i.arc(0,0,o,0,2*Math.PI*a,n),i.strokeStyle=e,i.lineWidth=t,i.stroke()},d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},h=function(){t.scaleColor&&function(){var e,a;i.lineWidth=1,i.fillStyle=t.scaleColor,i.save();for(var n=24;n>0;--n)n%6==0?(a=t.scaleLength,e=0):(a=.6*t.scaleLength,e=t.scaleLength-a),i.fillRect(-t.size/2+e,0,a,1),i.rotate(Math.PI/12);i.restore()}(),t.trackColor&&s(t.trackColor,t.trackWidth||t.lineWidth,1)};this.getCanvas=function(){return n},this.getCtx=function(){return i},this.clear=function(){i.clearRect(t.size/-2,t.size/-2,t.size,t.size)},this.draw=function(e){var n;t.scaleColor||t.trackColor?i.getImageData&&i.putImageData?a?i.putImageData(a,0,0):(h(),a=i.getImageData(0,0,t.size*r,t.size*r)):(this.clear(),h()):this.clear(),i.lineCap=t.lineCap,n="function"==typeof t.barColor?t.barColor(e):t.barColor,s(n,t.lineWidth,e/100)}.bind(this),this.animate=function(e,a){var n=Date.now();t.onStart(e,a);var i=function(){var r=Math.min(Date.now()-n,t.animate.duration),o=t.easing(this,r,e,a-e,t.animate.duration);this.draw(o),t.onStep(e,a,o),r>=t.animate.duration?t.onStop(e,a):d(i)}.bind(this);d(i)}.bind(this)},a=function(e,a){var n={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(e,t,a,n,i){return(t/=i/2)<1?n/2*t*t+a:-n/2*(--t*(t-2)-1)+a},onStart:function(e,t){},onStep:function(e,t,a){},onStop:function(e,t){}};n.renderer=t;var i={},r=0,o=function(){for(var t in this.el=e,this.options=i,n)n.hasOwnProperty(t)&&(i[t]=a&&void 0!==a[t]?a[t]:n[t],"function"==typeof i[t]&&(i[t]=i[t].bind(this)));"string"==typeof i.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[i.easing])?i.easing=jQuery.easing[i.easing]:i.easing=n.easing,"number"==typeof i.animate&&(i.animate={duration:i.animate,enabled:!0}),"boolean"!=typeof i.animate||i.animate||(i.animate={duration:1e3,enabled:i.animate}),this.renderer=new i.renderer(e,i),this.renderer.draw(r),e.dataset&&e.dataset.percent?this.update(parseFloat(e.dataset.percent)):e.getAttribute&&e.getAttribute("data-percent")&&this.update(parseFloat(e.getAttribute("data-percent")))}.bind(this);this.update=function(e){return e=parseFloat(e),i.animate.enabled?this.renderer.animate(r,e):this.renderer.draw(e),r=e,this}.bind(this),this.disableAnimation=function(){return i.animate.enabled=!1,this},this.enableAnimation=function(){return i.animate.enabled=!0,this},o()};e.fn.easyPieChart=function(t){return this.each(function(){var n;e.data(this,"easyPieChart")||(n=e.extend({},t,e(this).data()),e.data(this,"easyPieChart",new a(this,n)))})}});

!function(t,s,i){"use strict";var o=s.Modernizr;t.CBPQTRotator=function(s,i){this.$el=t(i),this._init(s)},t.CBPQTRotator.defaults={speed:700,easing:"ease",interval:8e3},t.CBPQTRotator.prototype={_init:function(s){this.options=t.extend(!0,{},t.CBPQTRotator.defaults,s),this._config(),this.$items.eq(this.current).addClass("cbp-qtcurrent"),this.support&&this._setTransition(),this._startRotator()},_config:function(){this.$items=this.$el.children("div.cbp-qtcontent"),this.itemsCount=this.$items.length,this.current=0,this.support=o.csstransitions,this.support&&(this.$progress=t('<span class="cbp-qtprogress"></span>').appendTo(this.$el))},_setTransition:function(){setTimeout(t.proxy(function(){this.$items.css("transition","opacity "+this.options.speed+"ms "+this.options.easing)},this),25)},_startRotator:function(){this.support&&this._startProgress(),setTimeout(t.proxy(function(){this.support&&this._resetProgress(),this._next(),this._startRotator()},this),this.options.interval)},_next:function(){this.$items.eq(this.current).removeClass("cbp-qtcurrent"),this.current=this.current<this.itemsCount-1?this.current+1:0,this.$items.eq(this.current).addClass("cbp-qtcurrent")},_startProgress:function(){setTimeout(t.proxy(function(){this.$progress.css({transition:"width "+this.options.interval+"ms linear",width:"100%"})},this),25)},_resetProgress:function(){this.$progress.css({transition:"none",width:"0%"})},destroy:function(){this.support&&(this.$items.css("transition","none"),this.$progress.remove()),this.$items.removeClass("cbp-qtcurrent").css({position:"relative","z-index":100,"pointer-events":"auto",opacity:1})}};var n=function(t){s.console&&s.console.error(t)};t.fn.cbpQTRotator=function(s){if("string"==typeof s){var i=Array.prototype.slice.call(arguments,1);this.each(function(){var o=t.data(this,"cbpQTRotator");o?t.isFunction(o[s])&&"_"!==s.charAt(0)?o[s].apply(o,i):n("no such method '"+s+"' for cbpQTRotator instance"):n("cannot call methods on cbpQTRotator prior to initialization; attempted to call method '"+s+"'")})}else this.each(function(){var i=t.data(this,"cbpQTRotator");i?i._init():i=t.data(this,"cbpQTRotator",new t.CBPQTRotator(s,this))});return this}}(jQuery,window);