/*
 * jQuery UI Effects 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function m(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return n.transparent;return n[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return m(b)}function o(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function p(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function l(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=m(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var n={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},q=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue(function(){var e=f(this),g=e.attr("style")||" ",h=p(o.call(this)),r,v=e.attr("class");f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});r=p(o.call(this));e.attr("class",v);e.animate(u(h,r),{queue:false,duration:a,easing:b,complete:function(){f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments);f.dequeue(this)}})})};
f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,
[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.16",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,a){var b;switch(c[0]){case "top":b=
0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),
d=document.activeElement;c.wrap(b);if(c[0]===d||f.contains(c[0],d))f(d).focus();b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(e,g){a[g]=c.css(g);if(isNaN(parseInt(a[g],10)))a[g]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){var a,b=document.activeElement;
if(c.parent().is(".ui-effects-wrapper")){a=c.parent().replaceWith(c);if(c[0]===b||f.contains(c[0],b))f(b).focus();return a}return c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});
return d.call(this,b)},_show:f.fn.show,show:function(c){if(l(c))return this._show.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(l(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(l(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,
arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),b=[];f.each(["em","px","%","pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/
2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,
d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,
a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==e)return b+d;if((a/=e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,
d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=
0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);if(a<1)return-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;
if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,
a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;




/* http://keith-wood.name/countdown.html
   Countdown for jQuery v1.5.9.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */
(function($){function Countdown(){this.regional=[];this.regional['']={labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,timeSeparator:':',isRTL:false};this._defaults={until:null,since:null,timezone:null,serverSync:null,format:'dHMS',layout:'',compact:false,significant:0,description:'',expiryUrl:'',expiryText:'',alwaysExpire:false,onExpiry:null,onTick:null,tickInterval:1};$.extend(this._defaults,this.regional['']);this._serverSyncs=[]}var w='countdown';var Y=0;var O=1;var W=2;var D=3;var H=4;var M=5;var S=6;$.extend(Countdown.prototype,{markerClassName:'hasCountdown',_timer:setInterval(function(){$.countdown._updateTargets()},980),_timerTargets:[],setDefaults:function(a){this._resetExtraLabels(this._defaults,a);extendRemove(this._defaults,a||{})},UTCDate:function(a,b,c,e,f,g,h,i){if(typeof b=='object'&&b.constructor==Date){i=b.getMilliseconds();h=b.getSeconds();g=b.getMinutes();f=b.getHours();e=b.getDate();c=b.getMonth();b=b.getFullYear()}var d=new Date();d.setUTCFullYear(b);d.setUTCDate(1);d.setUTCMonth(c||0);d.setUTCDate(e||1);d.setUTCHours(f||0);d.setUTCMinutes((g||0)-(Math.abs(a)<30?a*60:a));d.setUTCSeconds(h||0);d.setUTCMilliseconds(i||0);return d},periodsToSeconds:function(a){return a[0]*31557600+a[1]*2629800+a[2]*604800+a[3]*86400+a[4]*3600+a[5]*60+a[6]},_settingsCountdown:function(a,b){if(!b){return $.countdown._defaults}var c=$.data(a,w);return(b=='all'?c.options:c.options[b])},_attachCountdown:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName)){return}c.addClass(this.markerClassName);var d={options:$.extend({},b),_periods:[0,0,0,0,0,0,0]};$.data(a,w,d);this._changeCountdown(a)},_addTarget:function(a){if(!this._hasTarget(a)){this._timerTargets.push(a)}},_hasTarget:function(a){return($.inArray(a,this._timerTargets)>-1)},_removeTarget:function(b){this._timerTargets=$.map(this._timerTargets,function(a){return(a==b?null:a)})},_updateTargets:function(){for(var i=this._timerTargets.length-1;i>=0;i--){this._updateCountdown(this._timerTargets[i])}},_updateCountdown:function(a,b){var c=$(a);b=b||$.data(a,w);if(!b){return}c.html(this._generateHTML(b));c[(this._get(b,'isRTL')?'add':'remove')+'Class']('countdown_rtl');var d=this._get(b,'onTick');if(d){var e=b._hold!='lap'?b._periods:this._calculatePeriods(b,b._show,this._get(b,'significant'),new Date());var f=this._get(b,'tickInterval');if(f==1||this.periodsToSeconds(e)%f==0){d.apply(a,[e])}}var g=b._hold!='pause'&&(b._since?b._now.getTime()<b._since.getTime():b._now.getTime()>=b._until.getTime());if(g&&!b._expiring){b._expiring=true;if(this._hasTarget(a)||this._get(b,'alwaysExpire')){this._removeTarget(a);var h=this._get(b,'onExpiry');if(h){h.apply(a,[])}var i=this._get(b,'expiryText');if(i){var j=this._get(b,'layout');b.options.layout=i;this._updateCountdown(a,b);b.options.layout=j}var k=this._get(b,'expiryUrl');if(k){window.location=k}}b._expiring=false}else if(b._hold=='pause'){this._removeTarget(a)}$.data(a,w,b)},_changeCountdown:function(a,b,c){b=b||{};if(typeof b=='string'){var d=b;b={};b[d]=c}var e=$.data(a,w);if(e){this._resetExtraLabels(e.options,b);extendRemove(e.options,b);this._adjustSettings(a,e);$.data(a,w,e);var f=new Date();if((e._since&&e._since<f)||(e._until&&e._until>f)){this._addTarget(a)}this._updateCountdown(a,e)}},_resetExtraLabels:function(a,b){var c=false;for(var n in b){if(n!='whichLabels'&&n.match(/[Ll]abels/)){c=true;break}}if(c){for(var n in a){if(n.match(/[Ll]abels[0-9]/)){a[n]=null}}}},_adjustSettings:function(a,b){var c;var d=this._get(b,'serverSync');var e=0;var f=null;for(var i=0;i<this._serverSyncs.length;i++){if(this._serverSyncs[i][0]==d){f=this._serverSyncs[i][1];break}}if(f!=null){e=(d?f:0);c=new Date()}else{var g=(d?d.apply(a,[]):null);c=new Date();e=(g?c.getTime()-g.getTime():0);this._serverSyncs.push([d,e])}var h=this._get(b,'timezone');h=(h==null?-c.getTimezoneOffset():h);b._since=this._get(b,'since');if(b._since!=null){b._since=this.UTCDate(h,this._determineTime(b._since,null));if(b._since&&e){b._since.setMilliseconds(b._since.getMilliseconds()+e)}}b._until=this.UTCDate(h,this._determineTime(this._get(b,'until'),c));if(e){b._until.setMilliseconds(b._until.getMilliseconds()+e)}b._show=this._determineShow(b)},_destroyCountdown:function(a){var b=$(a);if(!b.hasClass(this.markerClassName)){return}this._removeTarget(a);b.removeClass(this.markerClassName).empty();$.removeData(a,w)},_pauseCountdown:function(a){this._hold(a,'pause')},_lapCountdown:function(a){this._hold(a,'lap')},_resumeCountdown:function(a){this._hold(a,null)},_hold:function(a,b){var c=$.data(a,w);if(c){if(c._hold=='pause'&&!b){c._periods=c._savePeriods;var d=(c._since?'-':'+');c[c._since?'_since':'_until']=this._determineTime(d+c._periods[0]+'y'+d+c._periods[1]+'o'+d+c._periods[2]+'w'+d+c._periods[3]+'d'+d+c._periods[4]+'h'+d+c._periods[5]+'m'+d+c._periods[6]+'s');this._addTarget(a)}c._hold=b;c._savePeriods=(b=='pause'?c._periods:null);$.data(a,w,c);this._updateCountdown(a,c)}},_getTimesCountdown:function(a){var b=$.data(a,w);return(!b?null:(!b._hold?b._periods:this._calculatePeriods(b,b._show,this._get(b,'significant'),new Date())))},_get:function(a,b){return(a.options[b]!=null?a.options[b]:$.countdown._defaults[b])},_determineTime:function(k,l){var m=function(a){var b=new Date();b.setTime(b.getTime()+a*1000);return b};var n=function(a){a=a.toLowerCase();var b=new Date();var c=b.getFullYear();var d=b.getMonth();var e=b.getDate();var f=b.getHours();var g=b.getMinutes();var h=b.getSeconds();var i=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;var j=i.exec(a);while(j){switch(j[2]||'s'){case's':h+=parseInt(j[1],10);break;case'm':g+=parseInt(j[1],10);break;case'h':f+=parseInt(j[1],10);break;case'd':e+=parseInt(j[1],10);break;case'w':e+=parseInt(j[1],10)*7;break;case'o':d+=parseInt(j[1],10);e=Math.min(e,$.countdown._getDaysInMonth(c,d));break;case'y':c+=parseInt(j[1],10);e=Math.min(e,$.countdown._getDaysInMonth(c,d));break}j=i.exec(a)}return new Date(c,d,e,f,g,h,0)};var o=(k==null?l:(typeof k=='string'?n(k):(typeof k=='number'?m(k):k)));if(o)o.setMilliseconds(0);return o},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(c){var d=this._get(c,'significant');c._periods=(c._hold?c._periods:this._calculatePeriods(c,c._show,d,new Date()));var e=false;var f=0;var g=d;var h=$.extend({},c._show);for(var i=Y;i<=S;i++){e|=(c._show[i]=='?'&&c._periods[i]>0);h[i]=(c._show[i]=='?'&&!e?null:c._show[i]);f+=(h[i]?1:0);g-=(c._periods[i]>0?1:0)}var j=[false,false,false,false,false,false,false];for(var i=S;i>=Y;i--){if(c._show[i]){if(c._periods[i]){j[i]=true}else{j[i]=g>0;g--}}}var k=this._get(c,'compact');var l=this._get(c,'layout');var m=(k?this._get(c,'compactLabels'):this._get(c,'labels'));var n=this._get(c,'whichLabels')||this._normalLabels;var o=this._get(c,'timeSeparator');var p=this._get(c,'description')||'';var q=function(a){var b=$.countdown._get(c,'compactLabels'+n(c._periods[a]));return(h[a]?c._periods[a]+(b?b[a]:m[a])+' ':'')};var r=function(a){var b=$.countdown._get(c,'labels'+n(c._periods[a]));return((!d&&h[a])||(d&&j[a])?'<span class="countdown_section"><span class="countdown_amount">'+c._periods[a]+'</span><br/>'+(b?b[a]:m[a])+'</span>':'')};return(l?this._buildLayout(c,h,l,k,d,j):((k?'<span class="countdown_row countdown_amount'+(c._hold?' countdown_holding':'')+'">'+q(Y)+q(O)+q(W)+q(D)+(h[H]?this._minDigits(c._periods[H],2):'')+(h[M]?(h[H]?o:'')+this._minDigits(c._periods[M],2):'')+(h[S]?(h[H]||h[M]?o:'')+this._minDigits(c._periods[S],2):''):'<span class="countdown_row countdown_show'+(d||f)+(c._hold?' countdown_holding':'')+'">'+r(Y)+r(O)+r(W)+r(D)+r(H)+r(M)+r(S))+'</span>'+(p?'<span class="countdown_row countdown_descr">'+p+'</span>':'')))},_buildLayout:function(c,d,e,f,g,h){var j=this._get(c,(f?'compactLabels':'labels'));var k=this._get(c,'whichLabels')||this._normalLabels;var l=function(a){return($.countdown._get(c,(f?'compactLabels':'labels')+k(c._periods[a]))||j)[a]};var m=function(a,b){return Math.floor(a/b)%10};var o={desc:this._get(c,'description'),sep:this._get(c,'timeSeparator'),yl:l(Y),yn:c._periods[Y],ynn:this._minDigits(c._periods[Y],2),ynnn:this._minDigits(c._periods[Y],3),y1:m(c._periods[Y],1),y10:m(c._periods[Y],10),y100:m(c._periods[Y],100),y1000:m(c._periods[Y],1000),ol:l(O),on:c._periods[O],onn:this._minDigits(c._periods[O],2),onnn:this._minDigits(c._periods[O],3),o1:m(c._periods[O],1),o10:m(c._periods[O],10),o100:m(c._periods[O],100),o1000:m(c._periods[O],1000),wl:l(W),wn:c._periods[W],wnn:this._minDigits(c._periods[W],2),wnnn:this._minDigits(c._periods[W],3),w1:m(c._periods[W],1),w10:m(c._periods[W],10),w100:m(c._periods[W],100),w1000:m(c._periods[W],1000),dl:l(D),dn:c._periods[D],dnn:this._minDigits(c._periods[D],2),dnnn:this._minDigits(c._periods[D],3),d1:m(c._periods[D],1),d10:m(c._periods[D],10),d100:m(c._periods[D],100),d1000:m(c._periods[D],1000),hl:l(H),hn:c._periods[H],hnn:this._minDigits(c._periods[H],2),hnnn:this._minDigits(c._periods[H],3),h1:m(c._periods[H],1),h10:m(c._periods[H],10),h100:m(c._periods[H],100),h1000:m(c._periods[H],1000),ml:l(M),mn:c._periods[M],mnn:this._minDigits(c._periods[M],2),mnnn:this._minDigits(c._periods[M],3),m1:m(c._periods[M],1),m10:m(c._periods[M],10),m100:m(c._periods[M],100),m1000:m(c._periods[M],1000),sl:l(S),sn:c._periods[S],snn:this._minDigits(c._periods[S],2),snnn:this._minDigits(c._periods[S],3),s1:m(c._periods[S],1),s10:m(c._periods[S],10),s100:m(c._periods[S],100),s1000:m(c._periods[S],1000)};var p=e;for(var i=Y;i<=S;i++){var q='yowdhms'.charAt(i);var r=new RegExp('\\{'+q+'<\\}(.*)\\{'+q+'>\\}','g');p=p.replace(r,((!g&&d[i])||(g&&h[i])?'$1':''))}$.each(o,function(n,v){var a=new RegExp('\\{'+n+'\\}','g');p=p.replace(a,v)});return p},_minDigits:function(a,b){a=''+a;if(a.length>=b){return a}a='0000000000'+a;return a.substr(a.length-b)},_determineShow:function(a){var b=this._get(a,'format');var c=[];c[Y]=(b.match('y')?'?':(b.match('Y')?'!':null));c[O]=(b.match('o')?'?':(b.match('O')?'!':null));c[W]=(b.match('w')?'?':(b.match('W')?'!':null));c[D]=(b.match('d')?'?':(b.match('D')?'!':null));c[H]=(b.match('h')?'?':(b.match('H')?'!':null));c[M]=(b.match('m')?'?':(b.match('M')?'!':null));c[S]=(b.match('s')?'?':(b.match('S')?'!':null));return c},_calculatePeriods:function(c,d,e,f){c._now=f;c._now.setMilliseconds(0);var g=new Date(c._now.getTime());if(c._since){if(f.getTime()<c._since.getTime()){c._now=f=g}else{f=c._since}}else{g.setTime(c._until.getTime());if(f.getTime()>c._until.getTime()){c._now=f=g}}var h=[0,0,0,0,0,0,0];if(d[Y]||d[O]){var i=$.countdown._getDaysInMonth(f.getFullYear(),f.getMonth());var j=$.countdown._getDaysInMonth(g.getFullYear(),g.getMonth());var k=(g.getDate()==f.getDate()||(g.getDate()>=Math.min(i,j)&&f.getDate()>=Math.min(i,j)));var l=function(a){return(a.getHours()*60+a.getMinutes())*60+a.getSeconds()};var m=Math.max(0,(g.getFullYear()-f.getFullYear())*12+g.getMonth()-f.getMonth()+((g.getDate()<f.getDate()&&!k)||(k&&l(g)<l(f))?-1:0));h[Y]=(d[Y]?Math.floor(m/12):0);h[O]=(d[O]?m-h[Y]*12:0);f=new Date(f.getTime());var n=(f.getDate()==i);var o=$.countdown._getDaysInMonth(f.getFullYear()+h[Y],f.getMonth()+h[O]);if(f.getDate()>o){f.setDate(o)}f.setFullYear(f.getFullYear()+h[Y]);f.setMonth(f.getMonth()+h[O]);if(n){f.setDate(o)}}var p=Math.floor((g.getTime()-f.getTime())/1000);var q=function(a,b){h[a]=(d[a]?Math.floor(p/b):0);p-=h[a]*b};q(W,604800);q(D,86400);q(H,3600);q(M,60);q(S,1);if(p>0&&!c._since){var r=[1,12,4.3482,7,24,60,60];var s=S;var t=1;for(var u=S;u>=Y;u--){if(d[u]){if(h[s]>=t){h[s]=0;p=1}if(p>0){h[u]++;p=0;s=u;t=1}}t*=r[u]}}if(e){for(var u=Y;u<=S;u++){if(e&&h[u]){e--}else if(!e){h[u]=0}}}return h}});function extendRemove(a,b){$.extend(a,b);for(var c in b){if(b[c]==null){a[c]=null}}return a}$.fn.countdown=function(a){var b=Array.prototype.slice.call(arguments,1);if(a=='getTimes'||a=='settings'){return $.countdown['_'+a+'Countdown'].apply($.countdown,[this[0]].concat(b))}return this.each(function(){if(typeof a=='string'){$.countdown['_'+a+'Countdown'].apply($.countdown,[this].concat(b))}else{$.countdown._attachCountdown(this,a)}})};$.countdown=new Countdown()})(jQuery);







/**
 * @author Alexander Farkas
 * v. 1.02
 */
(function($) {
	$.extend($.fx.step,{
	    backgroundPosition: function(fx) {
            if (fx.state === 0 && typeof fx.end == 'string') {
                var start = $.curCSS(fx.elem,'backgroundPosition');
                start = toArray(start);
                fx.start = [start[0],start[2]];
                var end = toArray(fx.end);
                fx.end = [end[0],end[2]];
                fx.unit = [end[1],end[3]];
			}
            var nowPosX = [];
            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
            nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
            fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

           function toArray(strg){
               strg = strg.replace(/left|top/g,'0px');
               strg = strg.replace(/right|bottom/g,'100%');
               strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
               var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
               return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
           }
        }
	});
})(jQuery);



// ========================= getStyleProperty by kangax ===============================
  // http://perfectionkills.com/feature-testing-css-properties/

  var getStyleProperty = (function(){

    var prefixes = ['Moz', 'Webkit', 'Khtml', 'O', 'Ms'];
    var _cache = { };

    function getStyleProperty(propName, element) {
      element = element || document.documentElement;
      var style = element.style,
          prefixed,
          uPropName,
          i, l;

      // check cache only when no element is given
      if (arguments.length === 1 && typeof _cache[propName] === 'string') {
        return _cache[propName];
      }
      // test standard property first
      if (typeof style[propName] === 'string') {
        return (_cache[propName] = propName);
      }
    
      // capitalize
      uPropName = propName.charAt(0).toUpperCase() + propName.slice(1);

      // test vendor specific properties
      for (i=0, l=prefixes.length; i<l; i++) {
        prefixed = prefixes[i] + uPropName;
        if (typeof style[prefixed] === 'string') {
          return (_cache[propName] = prefixed);
        }
      }
    }

    return getStyleProperty;
  }());

  var transformProp = getStyleProperty('transform');

  // ========================= miniModernizr ===============================
  // <3<3<3 and thanks to Faruk and Paul for doing the heavy lifting

  /*!
   * Modernizr v1.6ish: miniModernizr for Isotope
   * http://www.modernizr.com
   *
   * Developed by: 
   * - Faruk Ates  http://farukat.es/
   * - Paul Irish  http://paulirish.com/
   *
   * Copyright (c) 2009-2010
   * Dual-licensed under the BSD or MIT licenses.
   * http://www.modernizr.com/license/
   */

 
  /*
   * This version whittles down the script just to check support for
   * CSS transitions, transforms, and 3D transforms.
  */
  
  var docElement = document.documentElement,
      vendorCSSPrefixes = ' -o- -moz- -ms- -webkit- -khtml- '.split(' '),
      tests = [
        {
          name : 'csstransforms',
          getResult : function() {
            return !!transformProp;
          }
        },
        {
          name : 'csstransforms3d',
          getResult : function() {
            var test = !!getStyleProperty('perspective');
            // double check for Chrome's false positive
            if ( test ){
              var st = document.createElement('style'),
                  div = document.createElement('div'),
                  mq = '@media (' + vendorCSSPrefixes.join('transform-3d),(') + 'modernizr)';

              st.textContent = mq + '{#modernizr{height:3px}}';
              (document.head || document.getElementsByTagName('head')[0]).appendChild(st);
              div.id = 'modernizr';
              docElement.appendChild(div);

              test = div.offsetHeight === 3;

              st.parentNode.removeChild(st);
              div.parentNode.removeChild(div);
            }
            return !!test;
          }
        },
        {
          name : 'csstransitions',
          getResult : function() {
            return !!getStyleProperty('transitionProperty');
          }
        }
      ],

      i, len = tests.length
  ;

  if ( window.Modernizr ) {
    // if there's a previous Modernzir, check if there are necessary tests
    for ( i=0; i < len; i++ ) {
      var test = tests[i];
      if ( !Modernizr.hasOwnProperty( test.name ) ) {
        // if test hasn't been run, use addTest to run it
        Modernizr.addTest( test.name, test.getResult );
      }
    }
  } else {
    // or create new mini Modernizr that just has the 3 tests
    window.Modernizr = (function(){

      var miniModernizr = {
            _version : '1.6ish: miniModernizr for Isotope'
          },
          classes = [],
          test, result, className;

      // Run through tests
      for ( i=0; i < len; i++ ) {
        test = tests[i];
        result = test.getResult();
        miniModernizr[ test.name ] = result;
        className = ( result ?  '' : 'no-' ) + test.name;
        classes.push( className );
      }

      // Add the new classes to the <html> element.
      docElement.className += ' ' + classes.join( ' ' );

      return miniModernizr;
    })();
  }


  // ========================= isoTransform ===============================
  
  if ( Modernizr.csstransforms ) {
    
    var transformFnNotations = Modernizr.csstransforms3d ? 
      { // 3D transform functions
        translate : function ( position ) {
          return 'translate3d(' + position[0] + 'px, ' + position[1] + 'px, 0) ';
        },
        scale : function ( scale ) {
          return 'scale3d(' + scale + ', ' + scale + ', 1) ';
        },
		rotate : function ( angle ) {
			return 'rotateZ(' + angle + ')'; 
		}
      } :
      { // 2D transform functions
        translate : function ( position ) {
          return 'translate(' + position[0] + 'px, ' + position[1] + 'px) ';
        },
        scale : function ( scale ) {
          return 'scale(' + scale + ') ';
        },
        rotate : function ( angle ) {
          return 'rotate(' + angle + ') ';
        }
      }
    ;

    function setIsoTransform ( elem, name, value ) {
	  //	store the $ELEM
      var $elem = $(elem),
          data =  $elem.data('isoTransform') || {},
          newData = {},
          fnName,
          transformObj = {},
          transformValue;

      // 	i.e. newData.scale = 0.5
	  //	store what was passed in into the NEWDATA
      newData[ name ] = value;
      // 	extend new value over current data
	  //	merge NEWDATA into DATA
      $.extend( data, newData );

	  //
	  //	loop through DATA, 
	  //	which should be all the custom name value CSS pairs
	  //  		key 	= FNAME 
	  //		value	= TRANSFORMVALUE
	  //
      for ( fnName in data ) {
		//	gets the merged value for the hooked CSS types
        transformValue = data[ fnName ];
		//	then use it to generate the proper CSS
		//	transformObj[ scale ] stores the 2d or 3d css string including the values
		//			e.g.	translate3d( 30px, 50px, 0);
        transformObj[ fnName ] = transformFnNotations[ fnName ]( transformValue );
      }

      // get proper order
      // ideally, we could loop through this give an array, but since we only have
      // a couple transforms we're keeping track of, we'll do it like so
      var translateFn = transformObj.translate || '',
          scaleFn = transformObj.scale || '',
		  rotateFn = transformObj.rotate || '',				// EDIT
          // sorting so translate always comes first
          valueFns = translateFn + scaleFn + rotateFn;

      // set data back in elem
      $elem.data( 'isoTransform', data );
		
      // set name to vendor specific property
      elem.style[ transformProp ] = valueFns;
    }	//	END setIsoTransform

    // ==================== scale ===================
  
    $.cssNumber.scale = true;				//	just a number - no units
  
	//
	//		HOOKS
	//
    $.cssHooks.scale = {
      set: function( elem, value ) {

        if ( typeof value === 'string' ) {
          value = parseFloat( value );
        }

        setIsoTransform( elem, 'scale', value );

      },
      get: function( elem, computed ) {
        var transform = $.data( elem, 'isoTransform' );
        return transform && transform.scale ? transform.scale : 1;
      }
    };
    $.fx.step.scale = function( fx ) {
      $.cssHooks.scale.set( fx.elem, fx.now+fx.unit );
    };
  
    // ==================== translate ===================
    
    $.cssNumber.translate = true;
  
    $.cssHooks.translate = {
      set: function( elem, value ) {

        setIsoTransform( elem, 'translate', value );

      },
      get: function( elem, computed ) {
        var transform = $.data( elem, 'isoTransform' );
        return transform && transform.translate ? transform.translate : [ 0, 0 ];
      }
    };


    // ==================== rotate ===================
    $.cssHooks.rotate = {
      set: function( elem, value ) {

        setIsoTransform( elem, 'rotate', value );

      },
      get: function( elem, computed ) {
        var transform = $.data( elem, 'isoTransform' );
        return transform && transform.rotate ? transform.rotate : 0;
      }
    };
  }







$(document).ready(function() {

	$('body').addClass('js');
	
	var clicks = 0;
	var bottle1 = $('#bottle-1');
	var win = $(window);
	var center_x = Math.round( win.width()-bottle1.width())/2;
	var msgs = $('#messages .msg').css('opacity',0)
	var cur_msg = -1;
	$('#lucky_numbers').html( lucky_num()+", "+lucky_num()+", "+lucky_num()+", "+lucky_num()+" &amp; "+lucky_num() )
	
	setTimeout( function(){ $('#first').fadeOut() }, 1500 );
	setTimeout( function(){ $('#second').fadeIn() }, 3500 );
	setTimeout( function(){ $('#second').fadeOut() }, 5500 );
	setTimeout( function(){ drop_bottle(); }, 6500 );
	setTimeout( function(){ attach_social_buttons(); },14000);
	//		JUST IN CASE
	setTimeout( function(){ if ( bottle1.data('beenClicked')!=true) $('#third').fadeIn() }, 10000 );
	setInterval( function(){ make_bird(); },20000);

	$('.vote_link').click(function(){ google_analytics("vote_click_" + clicks ) });
	$('.sophie_link').click(function(){ google_analytics("sophie_click") });
	$('.jonah_link').click(function(){ google_analytics("jonah_click") });
	$('.jonah_twitter_link').click(function(){ google_analytics("jonah_twitter_click") });


	function attach_social_buttons(){
		
	var fb = '<script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script><a href="http://www.rifatozkan.com.tr/gizemli61/" class="facebook_btn"></a>';
		$('<div class="social_buttons">' + twt + fb +'</div>').appendTo('#wrapper');
	}		


			
	function drop_bottle(){
		bottle1.css({'rotate':'50deg'})
				.animate({'left':center_x},{'duration':700,'easing':'linear','queue':false})
				.animate({'top':win.height()},{'duration':700,'easing':'easeInQuad', 'complete':function(){ bottle1.css({'rotate':'0deg'}); splash(center_x+bottle1.width()/2,300) } })
				.animate({'top':win.height()-bottle1.height()*0.9+'px'},3000,'easeOutElastic')
				.click( function(e){
							e.preventDefault();
							google_analytics( "bottle_"+clicks );
							clicks+=1;
							bottle1.data('beenClicked',true);
							$('h2').fadeOut();
							bottle1.css('rotate', Math.random()*40+"deg");
							var t = 750
							if (cur_msg>-1){
								msgs.eq(cur_msg).stop().fadeOut( t, function(){  } )
							}
							if ( ++cur_msg == msgs.length-1 ){
								bottle1.css('rotate',"20deg").animate({'top':win.height()+"px"},1000,'easeInQuad',
									function(){  
										$("#waves_1, #waves_2").stop().animate({'bottom':win.height()},3000,'easeInOutQuad');
										$("#underwater").css('height',0).show().animate({'height':win.height()+20},3000,'easeInOutQuad')
									}
								);
							} else {
								var bottle_pos = bottle1.position();
								var new_msg = msgs.eq(cur_msg);
								new_msg.stop().css({'top':bottle_pos.top-30-new_msg.outerHeight()+'px', 'left':bottle_pos.left+'px', 'display':'block'})
													.animate( {'opacity':1}, t );
							}
						});
	};				
					
			
			
	$(window).resize( function(){
		$("#underwater").css({'width':win.width(),'height':win.height()});
	});

			
	function splash( x, h ){
		var x = x || win/2;
		var h = Math.max( h, 20 ) || 100;
		var drops = Math.ceil(h/50);
		for (i=0; i<drops; i++){
			var dp = $('<div class="drop"></div>');
			var dp_ht = h + Math.random()*60-30;
			var dp_scl = 100;//Math.round(Math.random()*40+60);
			var dp_dir = Math.round(Math.random())? 1 : -1;
			var dp_deg = dp_dir * Math.round(Math.random()*120-60);
			var dp_t = 700;
			dp.css({ 'rotate':dp_deg+"deg", 'left':x+(dp_dir*50)+'px', 'bottom':'30px' })
				.appendTo( $('#content') )
				.animate( { 'bottom':dp_ht+'px' }, dp_t/2, 'easeOutQuad' )
					.animate( { 'bottom':'30px' },dp_t/2,'easeInQuad',function(){ $(this).remove() } )
				.animate({'left':x+dp_deg*5},{'duration':dp_t,'easing':'linear','queue':false});
				
		}
	};

	function next_message(){
		
	};
	
	function lucky_num(){
		return Math.ceil(Math.random()*99);
	}


	function make_bird(){
		var flap = false;
		var ht = win.height();
		var w = win.width();
		var bird = $('<div class="bird"></div>').appendTo('#content')
			.css({'top':Math.round(ht/9 + ht/6*Math.random()), 'left':w } );
		bird.animate({'left':-bird.width()+'px'}, Math.round(w*8) , 'linear',
											function(){
												var b = $(this);
												clearInterval(b.data('flapInt'));
												b.remove();
											});
		function birdFlap(){
			if (flap){
				flap=false;
				bird.removeClass('flap');
			} else {
				flap=true;
				bird.addClass('flap');
			}
		}
		bird.data( 'flapInt', setInterval( birdFlap, 200 ));
		bird.click(
			function(e){
				e.preventDefault();
				var b = $(this);
				var pos = b.position();
				$('<div class="points_msg">+5</div>').appendTo('#content')
					.css({'left':pos.left+'px', 'top':pos.top-20+'px'})
					.animate({'top':pos.top-50+'px', 'opacity':0}, 2500, 'easeOutQuad', function(){$(this).remove();});
				clearInterval( b.data( 'flapInt') );
				b.removeClass('flap').addClass('dead')
					.animate({ 'top':win.height()-b.height()+'px'},
								{'duration':1000,'easing':'easeInQuad','queue':false,
								 	complete: 	function(){ 
													splash( pos.left, 200 );
													b.remove();
												}
								});
			}
		);
	}


		
	only_double_bg = true;
	
	//		set base values for waves
	$("#waves_1").data('dir',true).css('backgroundPosition','0px 0px');
	$("#waves_2").data('dir',false).css('backgroundPosition','0px 0px');
	
	function tide() {
		var $wv = $("#waves_1");
		$wv.data('dir',!$wv.data('dir'));
		var dir = $wv.data('dir');
		var to_num = (dir)? Math.round(Math.random()*15+15) : Math.round(Math.random()*4) ; 
		if (only_double_bg){
			var cur = $wv.css('backgroundPosition');
			cur = cur.split(" ");
			var xval = parseInt(cur[0].replace('px',''));
			xval += Math.round(Math.random()*30-15);
			var to_str = "( "+xval+'px '+to_num+'px )';
			$wv.animate({backgroundPosition: to_str},{'duration':2000,'easing':'easeInOutQuad','complete':tide});	
		}
	}
	
	function tide2() {
		var $wv = $("#waves_2");
		$wv.data('dir',!$wv.data('dir'));
		var dir = $wv.data('dir');
		var to_num = (dir)? Math.round(Math.random()*5+5) : Math.round(Math.random()*2) ; 
		if (only_double_bg){
			var cur = $wv.css('backgroundPosition').split(" ");
			var xval = parseInt(cur[0].replace('px',''));
			var to_str = "( "+xval+'px '+to_num+'px )';
			$wv.animate({backgroundPosition: to_str},{'duration':2000,'easing':'easeInOutQuad','complete':tide2});	
		}
	}
		
	
	tide();		//	get the waves moving
	tide2();	

	$(window).resize( function(){
		var h = $(this).height();
		$('#content').css('height',h-35+"px");
	});
	$(window).resize();

	touchInit();


	$('#countdown').countdown({ 
	    				until: $.countdown.UTCDate(0, 2011, 10 - 1, 1),
						format: 'DHMS',
	});
	

});




function google_analytics ( url_event ) {
    var href = '/ahoy/'+url_event;
    if(typeof(_gaq) !== 'undefined')    _gaq.push(['_trackPageview', href ]);
}




// Touch events for Safari iOS
function touchHandler(event) {
    var touches = event.changedTouches,
        first = touches[0],
        type = '';          
    switch(event.type) {
        case 'touchstart':
            type = 'mousedown';
            break;            
        case 'touchmove':
            type='mousemove';        
            event.preventDefault();
            break;            
        case 'touchend':
            type='mouseup';
            break;            
        default:
            return;
    }
    var simulatedEvent = document.createEvent('MouseEvent');    
    simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0, null);                                                                            
    first.target.dispatchEvent(simulatedEvent);
}

function touchInit() {
    /*if (stamp.addEventListener) {
        stamp.addEventListener('touchstart', touchHandler, false);
        stamp.addEventListener('touchmove', touchHandler, false);
        stamp.addEventListener('touchend', touchHandler, false);
        stamp.addEventListener('touchcancel', touchHandler, false);
    }*/
}


