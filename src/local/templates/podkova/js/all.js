jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(1-Math.pow(2,-10*e/a))+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(2-Math.pow(2,-10*--e))+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin((e*a-r)*(2*Math.PI)/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=a*(.3*1.5)),s<Math.abs(u)){s=u;r=i/4}else r=i/(2*Math.PI)*Math.asin(u/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*-.5+t:s*Math.pow(2,-10*(e-=1))*Math.sin((e*a-r)*(2*Math.PI)/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?u/2*(e*e*((1+(r*=1.525))*e-r))+t:u/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?u*(7.5625*e*e)+t:e<2/2.75?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return e<a/2?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}});

(function(a){var b={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click",buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},c=!1;a(window).bind("load.jcarousel",function(){c=!0}),a.jcarousel=function(e,f){this.options=a.extend({},b,f||{}),this.locked=!1,this.autoStopped=!1,this.container=null,this.clip=null,this.list=null,this.buttonNext=null,this.buttonPrev=null,this.buttonNextState=null,this.buttonPrevState=null,f&&void 0!==f.rtl||(this.options.rtl="rtl"==(a(e).attr("dir")||a("html").attr("dir")||"").toLowerCase()),this.wh=this.options.vertical?"height":"width",this.lt=this.options.vertical?"top":this.options.rtl?"right":"left";for(var g="",h=e.className.split(" "),i=0;h.length>i;i++)if(-1!=h[i].indexOf("carousel")){a(e).removeClass(h[i]),g=h[i];break}"UL"==e.nodeName.toUpperCase()||"OL"==e.nodeName.toUpperCase()?(this.list=a(e),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=a(e),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip")),0===this.clip.size()&&(this.clip=this.list.wrap("<div></div>").parent()),0===this.container.size()&&(this.container=this.clip.wrap("<div></div>").parent()),""!==g&&-1==this.container.parent()[0].className.indexOf("carousel")&&this.container.wrap('<div class=" '+g+'"></div>'),this.buttonPrev=a(".jcarousel-prev",this.container),0===this.buttonPrev.size()&&null!==this.options.buttonPrevHTML&&(this.buttonPrev=a(this.options.buttonPrevHTML).appendTo(this.container)),this.buttonPrev.addClass(this.className("jcarousel-prev")),this.buttonNext=a(".jcarousel-next",this.container),0===this.buttonNext.size()&&null!==this.options.buttonNextHTML&&(this.buttonNext=a(this.options.buttonNextHTML).appendTo(this.container)),this.buttonNext.addClass(this.className("jcarousel-next")),this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"}),this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0),this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}),!this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=null!==this.options.visible?Math.ceil(this.clipping()/this.options.visible):null,k=this.list.children("li"),l=this;if(k.size()>0){var m=0,n=this.options.offset;k.each(function(){l.format(this,n++),m+=l.dimension(this,j)}),this.list.css(this.wh,m+100+"px"),f&&void 0!==f.size||(this.options.size=k.size())}this.container.css("display","block"),this.buttonNext.css("display","block"),this.buttonPrev.css("display","block"),this.funcNext=function(){return l.next(),!1},this.funcPrev=function(){return l.prev(),!1},this.funcResize=function(){l.resizeTimer&&clearTimeout(l.resizeTimer),l.resizeTimer=setTimeout(function(){l.reload()},100)},null!==this.options.initCallback&&this.options.initCallback(this,"init"),!c&&d.isSafari()?(this.buttons(!1,!1),a(window).bind("load.jcarousel",function(){l.setup()})):this.setup()};var d=a.jcarousel;d.fn=d.prototype={jcarousel:"0.2.9"},d.fn.extend=d.extend=a.extend,d.fn.extend({setup:function(){if(this.first=null,this.last=null,this.prevFirst=null,this.prevLast=null,this.animating=!1,this.timer=null,this.resizeTimer=null,this.tail=null,this.inTail=!1,!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var b=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null,this.animate(b,!1),a(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize),null!==this.options.setupCallback&&this.options.setupCallback(this)}},reset:function(){this.list.empty(),this.list.css(this.lt,"0px"),this.list.css(this.wh,"10px"),null!==this.options.initCallback&&this.options.initCallback(this,"reset"),this.setup()},reload:function(){if(null!==this.tail&&this.inTail&&this.list.css(this.lt,d.intval(this.list.css(this.lt))+this.tail),this.tail=null,this.inTail=!1,null!==this.options.reloadCallback&&this.options.reloadCallback(this),null!==this.options.visible){var a=this,b=Math.ceil(this.clipping()/this.options.visible),c=0,e=0;this.list.children("li").each(function(d){c+=a.dimension(this,b),a.first>d+1&&(e=c)}),this.list.css(this.wh,c+"px"),this.list.css(this.lt,-e+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0,this.buttons()},unlock:function(){this.locked=!1,this.buttons()},size:function(a){return void 0!==a&&(this.options.size=a,this.locked||this.buttons()),this.options.size},has:function(a,b){void 0!==b&&b||(b=a),null!==this.options.size&&b>this.options.size&&(b=this.options.size);for(var c=a;b>=c;c++){var d=this.get(c);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0},get:function(b){return a(">.jcarousel-item-"+b,this.list)},add:function(b,c){var e=this.get(b),f=0,g=a(c);if(0===e.length){var h,i=d.intval(b);for(e=this.create(b);;)if(h=this.get(--i),0>=i||h.length){0>=i?this.list.prepend(e):h.after(e);break}}else f=this.dimension(e);"LI"==g.get(0).nodeName.toUpperCase()?(e.replaceWith(g),e=g):e.empty().append(c),this.format(e.removeClass(this.className("jcarousel-item-placeholder")),b);var j=null!==this.options.visible?Math.ceil(this.clipping()/this.options.visible):null,k=this.dimension(e,j)-f;return b>0&&this.first>b&&this.list.css(this.lt,d.intval(this.list.css(this.lt))-k+"px"),this.list.css(this.wh,d.intval(this.list.css(this.wh))+k+"px"),e},remove:function(a){var b=this.get(a);if(b.length&&!(a>=this.first&&this.last>=a)){var c=this.dimension(b);this.first>a&&this.list.css(this.lt,d.intval(this.list.css(this.lt))+c+"px"),b.remove(),this.list.css(this.wh,d.intval(this.list.css(this.wh))-c+"px")}},next:function(){null===this.tail||this.inTail?this.scroll("both"!=this.options.wrap&&"last"!=this.options.wrap||null===this.options.size||this.last!=this.options.size?this.first+this.options.scroll:1):this.scrollTail(!1)},prev:function(){null!==this.tail&&this.inTail?this.scrollTail(!0):this.scroll("both"!=this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||1!=this.first?this.first-this.options.scroll:this.options.size)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var b=d.intval(this.list.css(this.lt));b=a?b+this.tail:b-this.tail,this.inTail=!a,this.prevFirst=this.first,this.prevLast=this.last,this.animate(b)}},scroll:function(a,b){this.locked||this.animating||(this.pauseAuto(),this.animate(this.pos(a),b))},pos:function(a,b){var c=d.intval(this.list.css(this.lt));if(this.locked||this.animating)return c;"circular"!=this.options.wrap&&(a=1>a?1:this.options.size&&a>this.options.size?this.options.size:a);for(var m,e=this.first>a,f="circular"!=this.options.wrap&&1>=this.first?1:this.first,g=e?this.get(f):this.get(this.last),h=e?f:f-1,i=null,j=0,k=!1,l=0;e?--h>=a:a>++h;)i=this.get(h),k=!i.length,0===i.length&&(i=this.create(h).addClass(this.className("jcarousel-item-placeholder")),g[e?"before":"after"](i),null!==this.first&&"circular"==this.options.wrap&&null!==this.options.size&&(0>=h||h>this.options.size)&&(m=this.get(this.index(h)),m.length&&(i=this.add(h,m.clone(!0))))),g=i,l=this.dimension(i),k&&(j+=l),null!==this.first&&("circular"==this.options.wrap||h>=1&&(null===this.options.size||this.options.size>=h))&&(c=e?c+l:c-l);var n=this.clipping(),o=[],p=0,q=0;for(g=this.get(a-1),h=a;++p;){if(i=this.get(h),k=!i.length,0===i.length&&(i=this.create(h).addClass(this.className("jcarousel-item-placeholder")),0===g.length?this.list.prepend(i):g[e?"before":"after"](i),null!==this.first&&"circular"==this.options.wrap&&null!==this.options.size&&(0>=h||h>this.options.size)&&(m=this.get(this.index(h)),m.length&&(i=this.add(h,m.clone(!0))))),g=i,l=this.dimension(i),0===l)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");if("circular"!=this.options.wrap&&null!==this.options.size&&h>this.options.size?o.push(i):k&&(j+=l),q+=l,q>=n)break;h++}for(var r=0;o.length>r;r++)o[r].remove();j>0&&(this.list.css(this.wh,this.dimension(this.list)+j+"px"),e&&(c-=j,this.list.css(this.lt,d.intval(this.list.css(this.lt))-j+"px")));var s=a+p-1;if("circular"!=this.options.wrap&&this.options.size&&s>this.options.size&&(s=this.options.size),h>s)for(p=0,h=s,q=0;++p&&(i=this.get(h--),i.length)&&(q+=this.dimension(i),!(q>=n)););var t=s-p+1;if("circular"!=this.options.wrap&&1>t&&(t=1),this.inTail&&e&&(c+=this.tail,this.inTail=!1),this.tail=null,"circular"!=this.options.wrap&&s==this.options.size&&s-p+1>=1){var u=d.intval(this.get(s).css(this.options.vertical?"marginBottom":"marginRight"));q-u>n&&(this.tail=q-n-u)}for(b&&a===this.options.size&&this.tail&&(c-=this.tail,this.inTail=!0);a-->t;)c+=this.dimension(this.get(a));return this.prevFirst=this.first,this.prevLast=this.last,this.first=t,this.last=s,c},animate:function(b,c){if(!this.locked&&!this.animating){this.animating=!0;var d=this,e=function(){if(d.animating=!1,0===b&&d.list.css(d.lt,0),!d.autoStopped&&("circular"==d.options.wrap||"both"==d.options.wrap||"last"==d.options.wrap||null===d.options.size||d.last<d.options.size||d.last==d.options.size&&null!==d.tail&&!d.inTail)&&d.startAuto(),d.buttons(),d.notify("onAfterAnimation"),"circular"==d.options.wrap&&null!==d.options.size)for(var a=d.prevFirst;d.prevLast>=a;a++)null===a||a>=d.first&&d.last>=a||!(1>a||a>d.options.size)||d.remove(a)};if(this.notify("onBeforeAnimation"),this.options.animation&&c!==!1){var f=this.options.vertical?{top:b}:this.options.rtl?{right:b}:{left:b},g={duration:this.options.animation,easing:this.options.easing,complete:e};a.isFunction(this.options.animationStepCallback)&&(g.step=this.options.animationStepCallback),this.list.animate(f,g)}else this.list.css(this.lt,b+"px"),e()}},startAuto:function(a){if(void 0!==a&&(this.options.auto=a),0===this.options.auto)return this.stopAuto();if(null===this.timer){this.autoStopped=!1;var b=this;this.timer=window.setTimeout(function(){b.next()},1e3*this.options.auto)}},stopAuto:function(){this.pauseAuto(),this.autoStopped=!0},pauseAuto:function(){null!==this.timer&&(window.clearTimeout(this.timer),this.timer=null)},buttons:function(a,b){null==a&&(a=!this.locked&&0!==this.options.size&&(this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||this.last<this.options.size),this.locked||this.options.wrap&&"first"!=this.options.wrap||null===this.options.size||!(this.last>=this.options.size)||(a=null!==this.tail&&!this.inTail)),null==b&&(b=!this.locked&&0!==this.options.size&&(this.options.wrap&&"last"!=this.options.wrap||this.first>1),this.locked||this.options.wrap&&"last"!=this.options.wrap||null===this.options.size||1!=this.first||(b=null!==this.tail&&this.inTail));var c=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext),this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),null!==this.options.buttonNextCallback&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){c.options.buttonNextCallback(c,this,a)}).data("jcarouselstate",a)):null!==this.options.buttonNextCallback&&this.buttonNextState!=a&&this.options.buttonNextCallback(c,null,a),this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),b&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[b?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",b?!1:!0),null!==this.options.buttonPrevCallback&&this.buttonPrev.data("jcarouselstate")!=b&&this.buttonPrev.each(function(){c.options.buttonPrevCallback(c,this,b)}).data("jcarouselstate",b)):null!==this.options.buttonPrevCallback&&this.buttonPrevState!=b&&this.options.buttonPrevCallback(c,null,b),this.buttonNextState=a,this.buttonPrevState=b},notify:function(a){var b=null===this.prevFirst?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,b),this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,b,this.first),this.callback("itemFirstOutCallback",a,b,this.prevFirst)),this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,b,this.last),this.callback("itemLastOutCallback",a,b,this.prevLast)),this.callback("itemVisibleInCallback",a,b,this.first,this.last,this.prevFirst,this.prevLast),this.callback("itemVisibleOutCallback",a,b,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(b,c,d,e,f,g,h){if(null!=this.options[b]&&("object"==typeof this.options[b]||"onAfterAnimation"==c)){var i="object"==typeof this.options[b]?this.options[b][c]:this.options[b];if(a.isFunction(i)){var j=this;if(void 0===e)i(j,d,c);else if(void 0===f)this.get(e).each(function(){i(j,this,e,d,c)});else for(var k=function(a){j.get(a).each(function(){i(j,this,a,d,c)})},l=e;f>=l;l++)null===l||l>=g&&h>=l||k(l)}}},create:function(a){return this.format("<li></li>",a)},format:function(b,c){b=a(b);for(var d=b.get(0).className.split(" "),e=0;d.length>e;e++)-1!=d[e].indexOf("jcarousel-")&&b.removeClass(d[e]);return b.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c),b},className:function(a){return a+" "+a+(this.options.vertical?"-vertical":"-horizontal")},dimension:function(b,c){var e=a(b);if(null==c)return this.options.vertical?e.innerHeight()+d.intval(e.css("margin-top"))+d.intval(e.css("margin-bottom"))+d.intval(e.css("border-top-width"))+d.intval(e.css("border-bottom-width"))||d.intval(this.options.itemFallbackDimension):e.innerWidth()+d.intval(e.css("margin-left"))+d.intval(e.css("margin-right"))+d.intval(e.css("border-left-width"))+d.intval(e.css("border-right-width"))||d.intval(this.options.itemFallbackDimension);var f=this.options.vertical?c-d.intval(e.css("marginTop"))-d.intval(e.css("marginBottom")):c-d.intval(e.css("marginLeft"))-d.intval(e.css("marginRight"));return a(e).css(this.wh,f+"px"),this.dimension(e)},clipping:function(){return this.options.vertical?this.clip[0].offsetHeight-d.intval(this.clip.css("borderTopWidth"))-d.intval(this.clip.css("borderBottomWidth")):this.clip[0].offsetWidth-d.intval(this.clip.css("borderLeftWidth"))-d.intval(this.clip.css("borderRightWidth"))},index:function(a,b){return null==b&&(b=this.options.size),Math.round(((a-1)/b-Math.floor((a-1)/b))*b)+1}}),d.extend({defaults:function(c){return a.extend(b,c||{})},intval:function(a){return a=parseInt(a,10),isNaN(a)?0:a},windowLoaded:function(){c=!0},isSafari:function(){var a=navigator.userAgent.toLowerCase(),b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||[],c=b[1]||"";return"webkit"===c}}),a.fn.jcarousel=function(b){if("string"==typeof b){var c=a(this).data("jcarousel"),e=Array.prototype.slice.call(arguments,1);return c[b].apply(c,e)}return this.each(function(){var c=a(this).data("jcarousel");c?(b&&a.extend(c.options,b),c.reload()):a(this).data("jcarousel",new d(this,b))})}})(jQuery);

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.0";var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},h=e.split(".")[0];e=e.split(".")[1];var l=h+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[h]=t[h]||{},n=t[h][e],o=t[h][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:h,widgetName:e,widgetFullName:l}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;r>a;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&&void 0!==n&&(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),h=this;return a?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(h=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),h}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,c=h[2];c?n.on(l,c,r):i.on(l,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var s=!1;t(document).on("mouseup",function(){s=!1}),t.widget("ui.mouse",{version:"1.12.0",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!s){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,n=1===e.which,o="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return n&&!o&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),s=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,s=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.widget("ui.slider",t.ui.mouse,{version:"1.12.0",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}})});
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.fn.jScrollPane=function(b){function c(b,c){function d(c){var f,h,j,k,l,o,p=!1,q=!1;if(N=c,void 0===O)l=b.scrollTop(),o=b.scrollLeft(),b.css({overflow:"hidden",padding:0}),P=b.innerWidth()+rb,Q=b.innerHeight(),b.width(P),O=a('<div class="jspPane" />').css("padding",qb).append(b.children()),R=a('<div class="jspContainer" />').css({width:P+"px",height:Q+"px"}).append(O).appendTo(b);else{if(b.css("width",""),p=N.stickToBottom&&A(),q=N.stickToRight&&B(),k=b.innerWidth()+rb!=P||b.outerHeight()!=Q,k&&(P=b.innerWidth()+rb,Q=b.innerHeight(),R.css({width:P+"px",height:Q+"px"})),!k&&sb==S&&O.outerHeight()==T)return void b.width(P);sb=S,O.css("width",""),b.width(P),R.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}O.css("overflow","auto"),S=c.contentWidth?c.contentWidth:O[0].scrollWidth,T=O[0].scrollHeight,O.css("overflow",""),U=S/P,V=T/Q,W=V>1,X=U>1,X||W?(b.addClass("jspScrollable"),f=N.maintainPosition&&($||bb),f&&(h=y(),j=z()),e(),g(),i(),f&&(w(q?S-P:h,!1),v(p?T-Q:j,!1)),F(),C(),L(),N.enableKeyboardNavigation&&H(),N.clickOnTrack&&m(),J(),N.hijackInternalLinks&&K()):(b.removeClass("jspScrollable"),O.css({top:0,left:0,width:R.width()-rb}),D(),G(),I(),n()),N.autoReinitialise&&!pb?pb=setInterval(function(){d(N)},N.autoReinitialiseDelay):!N.autoReinitialise&&pb&&clearInterval(pb),l&&b.scrollTop(0)&&v(l,!1),o&&b.scrollLeft(0)&&w(o,!1),b.trigger("jsp-initialised",[X||W])}function e(){W&&(R.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'),a('<div class="jspDragBottom" />'))),a('<div class="jspCap jspCapBottom" />'))),cb=R.find(">.jspVerticalBar"),db=cb.find(">.jspTrack"),Y=db.find(">.jspDrag"),N.showArrows&&(hb=a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",k(0,-1)).bind("click.jsp",E),ib=a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",k(0,1)).bind("click.jsp",E),N.arrowScrollOnHover&&(hb.bind("mouseover.jsp",k(0,-1,hb)),ib.bind("mouseover.jsp",k(0,1,ib))),j(db,N.verticalArrowPositions,hb,ib)),fb=Q,R.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){fb-=a(this).outerHeight()}),Y.hover(function(){Y.addClass("jspHover")},function(){Y.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",E),Y.addClass("jspActive");var c=b.pageY-Y.position().top;return a("html").bind("mousemove.jsp",function(a){p(a.pageY-c,!1)}).bind("mouseup.jsp mouseleave.jsp",o),!1}),f())}function f(){db.height(fb+"px"),$=0,eb=N.verticalGutter+db.outerWidth(),O.width(P-eb-rb);try{0===cb.position().left&&O.css("margin-left",eb+"px")}catch(a){}}function g(){X&&(R.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'),a('<div class="jspDragRight" />'))),a('<div class="jspCap jspCapRight" />'))),jb=R.find(">.jspHorizontalBar"),kb=jb.find(">.jspTrack"),_=kb.find(">.jspDrag"),N.showArrows&&(nb=a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",k(-1,0)).bind("click.jsp",E),ob=a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",k(1,0)).bind("click.jsp",E),N.arrowScrollOnHover&&(nb.bind("mouseover.jsp",k(-1,0,nb)),ob.bind("mouseover.jsp",k(1,0,ob))),j(kb,N.horizontalArrowPositions,nb,ob)),_.hover(function(){_.addClass("jspHover")},function(){_.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",E),_.addClass("jspActive");var c=b.pageX-_.position().left;return a("html").bind("mousemove.jsp",function(a){r(a.pageX-c,!1)}).bind("mouseup.jsp mouseleave.jsp",o),!1}),lb=R.innerWidth(),h())}function h(){R.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){lb-=a(this).outerWidth()}),kb.width(lb+"px"),bb=0}function i(){if(X&&W){var b=kb.outerHeight(),c=db.outerWidth();fb-=b,a(jb).find(">.jspCap:visible,>.jspArrow").each(function(){lb+=a(this).outerWidth()}),lb-=c,Q-=c,P-=b,kb.parent().append(a('<div class="jspCorner" />').css("width",b+"px")),f(),h()}X&&O.width(R.outerWidth()-rb+"px"),T=O.outerHeight(),V=T/Q,X&&(mb=Math.ceil(1/U*lb),mb>N.horizontalDragMaxWidth?mb=N.horizontalDragMaxWidth:mb<N.horizontalDragMinWidth&&(mb=N.horizontalDragMinWidth),_.width(mb+"px"),ab=lb-mb,s(bb)),W&&(gb=Math.ceil(1/V*fb),gb>N.verticalDragMaxHeight?gb=N.verticalDragMaxHeight:gb<N.verticalDragMinHeight&&(gb=N.verticalDragMinHeight),Y.height(gb+"px"),Z=fb-gb,q($))}function j(a,b,c,d){var e,f="before",g="after";"os"==b&&(b=/Mac/.test(navigator.platform)?"after":"split"),b==f?g=b:b==g&&(f=b,e=c,c=d,d=e),a[f](c)[g](d)}function k(a,b,c){return function(){return l(a,b,this,c),this.blur(),!1}}function l(b,c,d,e){d=a(d).addClass("jspActive");var f,g,h=!0,i=function(){0!==b&&tb.scrollByX(b*N.arrowButtonSpeed),0!==c&&tb.scrollByY(c*N.arrowButtonSpeed),g=setTimeout(i,h?N.initialDelay:N.arrowRepeatFreq),h=!1};i(),f=e?"mouseout.jsp":"mouseup.jsp",e=e||a("html"),e.bind(f,function(){d.removeClass("jspActive"),g&&clearTimeout(g),g=null,e.unbind(f)})}function m(){n(),W&&db.bind("mousedown.jsp",function(b){if(void 0===b.originalTarget||b.originalTarget==b.currentTarget){var c,d=a(this),e=d.offset(),f=b.pageY-e.top-$,g=!0,h=function(){var a=d.offset(),e=b.pageY-a.top-gb/2,j=Q*N.scrollPagePercent,k=Z*j/(T-Q);if(0>f)$-k>e?tb.scrollByY(-j):p(e);else{if(!(f>0))return void i();e>$+k?tb.scrollByY(j):p(e)}c=setTimeout(h,g?N.initialDelay:N.trackClickRepeatFreq),g=!1},i=function(){c&&clearTimeout(c),c=null,a(document).unbind("mouseup.jsp",i)};return h(),a(document).bind("mouseup.jsp",i),!1}}),X&&kb.bind("mousedown.jsp",function(b){if(void 0===b.originalTarget||b.originalTarget==b.currentTarget){var c,d=a(this),e=d.offset(),f=b.pageX-e.left-bb,g=!0,h=function(){var a=d.offset(),e=b.pageX-a.left-mb/2,j=P*N.scrollPagePercent,k=ab*j/(S-P);if(0>f)bb-k>e?tb.scrollByX(-j):r(e);else{if(!(f>0))return void i();e>bb+k?tb.scrollByX(j):r(e)}c=setTimeout(h,g?N.initialDelay:N.trackClickRepeatFreq),g=!1},i=function(){c&&clearTimeout(c),c=null,a(document).unbind("mouseup.jsp",i)};return h(),a(document).bind("mouseup.jsp",i),!1}})}function n(){kb&&kb.unbind("mousedown.jsp"),db&&db.unbind("mousedown.jsp")}function o(){a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),Y&&Y.removeClass("jspActive"),_&&_.removeClass("jspActive")}function p(c,d){if(W){0>c?c=0:c>Z&&(c=Z);var e=new a.Event("jsp-will-scroll-y");if(b.trigger(e,[c]),!e.isDefaultPrevented()){var f=c||0,g=0===f,h=f==Z,i=c/Z,j=-i*(T-Q);void 0===d&&(d=N.animateScroll),d?tb.animate(Y,"top",c,q,function(){b.trigger("jsp-user-scroll-y",[-j,g,h])}):(Y.css("top",c),q(c),b.trigger("jsp-user-scroll-y",[-j,g,h]))}}}function q(a){void 0===a&&(a=Y.position().top),R.scrollTop(0),$=a||0;var c=0===$,d=$==Z,e=a/Z,f=-e*(T-Q);(ub!=c||wb!=d)&&(ub=c,wb=d,b.trigger("jsp-arrow-change",[ub,wb,vb,xb])),t(c,d),O.css("top",f),b.trigger("jsp-scroll-y",[-f,c,d]).trigger("scroll")}function r(c,d){if(X){0>c?c=0:c>ab&&(c=ab);var e=new a.Event("jsp-will-scroll-x");if(b.trigger(e,[c]),!e.isDefaultPrevented()){var f=c||0,g=0===f,h=f==ab,i=c/ab,j=-i*(S-P);void 0===d&&(d=N.animateScroll),d?tb.animate(_,"left",c,s,function(){b.trigger("jsp-user-scroll-x",[-j,g,h])}):(_.css("left",c),s(c),b.trigger("jsp-user-scroll-x",[-j,g,h]))}}}function s(a){void 0===a&&(a=_.position().left),R.scrollTop(0),bb=a||0;var c=0===bb,d=bb==ab,e=a/ab,f=-e*(S-P);(vb!=c||xb!=d)&&(vb=c,xb=d,b.trigger("jsp-arrow-change",[ub,wb,vb,xb])),u(c,d),O.css("left",f),b.trigger("jsp-scroll-x",[-f,c,d]).trigger("scroll")}function t(a,b){N.showArrows&&(hb[a?"addClass":"removeClass"]("jspDisabled"),ib[b?"addClass":"removeClass"]("jspDisabled"))}function u(a,b){N.showArrows&&(nb[a?"addClass":"removeClass"]("jspDisabled"),ob[b?"addClass":"removeClass"]("jspDisabled"))}function v(a,b){var c=a/(T-Q);p(c*Z,b)}function w(a,b){var c=a/(S-P);r(c*ab,b)}function x(b,c,d){var e,f,g,h,i,j,k,l,m,n=0,o=0;try{e=a(b)}catch(p){return}for(f=e.outerHeight(),g=e.outerWidth(),R.scrollTop(0),R.scrollLeft(0);!e.is(".jspPane");)if(n+=e.position().top,o+=e.position().left,e=e.offsetParent(),/^body|html$/i.test(e[0].nodeName))return;h=z(),j=h+Q,h>n||c?l=n-N.horizontalGutter:n+f>j&&(l=n-Q+f+N.horizontalGutter),isNaN(l)||v(l,d),i=y(),k=i+P,i>o||c?m=o-N.horizontalGutter:o+g>k&&(m=o-P+g+N.horizontalGutter),isNaN(m)||w(m,d)}function y(){return-O.position().left}function z(){return-O.position().top}function A(){var a=T-Q;return a>20&&a-z()<10}function B(){var a=S-P;return a>20&&a-y()<10}function C(){R.unbind(zb).bind(zb,function(a,b,c,d){bb||(bb=0),$||($=0);var e=bb,f=$,g=a.deltaFactor||N.mouseWheelSpeed;return tb.scrollBy(c*g,-d*g,!1),e==bb&&f==$})}function D(){R.unbind(zb)}function E(){return!1}function F(){O.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(a){x(a.target,!1)})}function G(){O.find(":input,a").unbind("focus.jsp")}function H(){function c(){var a=bb,b=$;switch(d){case 40:tb.scrollByY(N.keyboardSpeed,!1);break;case 38:tb.scrollByY(-N.keyboardSpeed,!1);break;case 34:case 32:tb.scrollByY(Q*N.scrollPagePercent,!1);break;case 33:tb.scrollByY(-Q*N.scrollPagePercent,!1);break;case 39:tb.scrollByX(N.keyboardSpeed,!1);break;case 37:tb.scrollByX(-N.keyboardSpeed,!1)}return e=a!=bb||b!=$}var d,e,f=[];X&&f.push(jb[0]),W&&f.push(cb[0]),O.bind("focus.jsp",function(){b.focus()}),b.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(b){if(b.target===this||f.length&&a(b.target).closest(f).length){var g=bb,h=$;switch(b.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:d=b.keyCode,c();break;case 35:v(T-Q),d=null;break;case 36:v(0),d=null}return e=b.keyCode==d&&g!=bb||h!=$,!e}}).bind("keypress.jsp",function(b){return b.keyCode==d&&c(),b.target===this||f.length&&a(b.target).closest(f).length?!e:void 0}),N.hideFocus?(b.css("outline","none"),"hideFocus"in R[0]&&b.attr("hideFocus",!0)):(b.css("outline",""),"hideFocus"in R[0]&&b.attr("hideFocus",!1))}function I(){b.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"),O.unbind(".jsp")}function J(){if(location.hash&&location.hash.length>1){var b,c,d=escape(location.hash.substr(1));try{b=a("#"+d+', a[name="'+d+'"]')}catch(e){return}b.length&&O.find(d)&&(0===R.scrollTop()?c=setInterval(function(){R.scrollTop()>0&&(x(b,!0),a(document).scrollTop(R.position().top),clearInterval(c))},50):(x(b,!0),a(document).scrollTop(R.position().top)))}}function K(){a(document.body).data("jspHijack")||(a(document.body).data("jspHijack",!0),a(document.body).delegate('a[href*="#"]',"click",function(b){var c,d,e,f,g,h,i=this.href.substr(0,this.href.indexOf("#")),j=location.href;if(-1!==location.href.indexOf("#")&&(j=location.href.substr(0,location.href.indexOf("#"))),i===j){c=escape(this.href.substr(this.href.indexOf("#")+1));try{d=a("#"+c+', a[name="'+c+'"]')}catch(k){return}d.length&&(e=d.closest(".jspScrollable"),f=e.data("jsp"),f.scrollToElement(d,!0),e[0].scrollIntoView&&(g=a(window).scrollTop(),h=d.offset().top,(g>h||h>g+a(window).height())&&e[0].scrollIntoView()),b.preventDefault())}}))}function L(){var a,b,c,d,e,f=!1;R.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(g){var h=g.originalEvent.touches[0];a=y(),b=z(),c=h.pageX,d=h.pageY,e=!1,f=!0}).bind("touchmove.jsp",function(g){if(f){var h=g.originalEvent.touches[0],i=bb,j=$;return tb.scrollTo(a+c-h.pageX,b+d-h.pageY),e=e||Math.abs(c-h.pageX)>5||Math.abs(d-h.pageY)>5,i==bb&&j==$}}).bind("touchend.jsp",function(){f=!1}).bind("click.jsp-touchclick",function(){return e?(e=!1,!1):void 0})}function M(){var a=z(),c=y();b.removeClass("jspScrollable").unbind(".jsp"),O.unbind(".jsp"),b.replaceWith(yb.append(O.children())),yb.scrollTop(a),yb.scrollLeft(c),pb&&clearInterval(pb)}var N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb=this,ub=!0,vb=!0,wb=!1,xb=!1,yb=b.clone(!1,!1).empty(),zb=a.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";"border-box"===b.css("box-sizing")?(qb=0,rb=0):(qb=b.css("paddingTop")+" "+b.css("paddingRight")+" "+b.css("paddingBottom")+" "+b.css("paddingLeft"),rb=(parseInt(b.css("paddingLeft"),10)||0)+(parseInt(b.css("paddingRight"),10)||0)),a.extend(tb,{reinitialise:function(b){b=a.extend({},N,b),d(b)},scrollToElement:function(a,b,c){x(a,b,c)},scrollTo:function(a,b,c){w(a,c),v(b,c)},scrollToX:function(a,b){w(a,b)},scrollToY:function(a,b){v(a,b)},scrollToPercentX:function(a,b){w(a*(S-P),b)},scrollToPercentY:function(a,b){v(a*(T-Q),b)},scrollBy:function(a,b,c){tb.scrollByX(a,c),tb.scrollByY(b,c)},scrollByX:function(a,b){var c=y()+Math[0>a?"floor":"ceil"](a),d=c/(S-P);r(d*ab,b)},scrollByY:function(a,b){var c=z()+Math[0>a?"floor":"ceil"](a),d=c/(T-Q);p(d*Z,b)},positionDragX:function(a,b){r(a,b)},positionDragY:function(a,b){p(a,b)},animate:function(a,b,c,d,e){var f={};f[b]=c,a.animate(f,{duration:N.animateDuration,easing:N.animateEase,queue:!1,step:d,complete:e})},getContentPositionX:function(){return y()},getContentPositionY:function(){return z()},getContentWidth:function(){return S},getContentHeight:function(){return T},getPercentScrolledX:function(){return y()/(S-P)},getPercentScrolledY:function(){return z()/(T-Q)},getIsScrollableH:function(){return X},getIsScrollableV:function(){return W},getContentPane:function(){return O},scrollToBottom:function(a){p(Z,a)},hijackInternalLinks:a.noop,destroy:function(){M()}}),d(c)}return b=a.extend({},a.fn.jScrollPane.defaults,b),a.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){b[this]=b[this]||b.speed}),this.each(function(){var d=a(this),e=d.data("jsp");e?e.reinitialise(b):(a("script",d).filter('[type="text/javascript"],:not([type])').remove(),e=new c(d,b),d.data("jsp",e))})},a.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:void 0,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}});

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,E=a.borderTopWidth+a.borderBottomWidth,z=d&&s,b=t(r.width);b!==!1&&(a.width=b+(z?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(z?0:g+E)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+E),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),r=Math.min.apply(Math,o),s=o.indexOf(r),a={x:this.columnWidth*s,y:r},h=r+t.size.outerHeight,u=this.cols+1-o.length,d=0;u>d;d++)this.colYs[s+d]=h;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var s=t||window.event,a=h.call(arguments,1),r=0,f=0,d=0,c=0,m=0,g=0;if(t=e.event.fix(s),t.type="mousewheel","detail"in s&&(d=-1*s.detail),"wheelDelta"in s&&(d=s.wheelDelta),"wheelDeltaY"in s&&(d=s.wheelDeltaY),"wheelDeltaX"in s&&(f=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(f=-1*d,d=0),r=0===d?f:d,"deltaY"in s&&(r=d=-1*s.deltaY),"deltaX"in s&&(f=s.deltaX,0===d&&(r=-1*f)),0!==d||0!==f){if(1===s.deltaMode){var w=e.data(this,"mousewheel-line-height");r*=w,d*=w,f*=w}else if(2===s.deltaMode){var v=e.data(this,"mousewheel-page-height");r*=v,d*=v,f*=v}if(c=Math.max(Math.abs(d),Math.abs(f)),(!l||c<l)&&(l=c,n(s,c)&&(l/=40)),n(s,c)&&(r/=40,f/=40,d/=40),r=Math[r>=1?"floor":"ceil"](r/l),f=Math[f>=1?"floor":"ceil"](f/l),d=Math[d>=1?"floor":"ceil"](d/l),u.settings.normalizeOffset&&this.getBoundingClientRect){var p=this.getBoundingClientRect();m=t.clientX-p.left,g=t.clientY-p.top}return t.deltaX=f,t.deltaY=d,t.deltaFactor=l,t.offsetX=m,t.offsetY=g,t.deltaMode=0,a.unshift(t,r,f,d),o&&clearTimeout(o),o=setTimeout(i,200),(e.event.dispatch||e.event.handle).apply(this,a)}}function i(){l=null}function n(e,t){return u.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}var o,l,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],h=Array.prototype.slice;if(e.event.fixHooks)for(var r=s.length;r;)e.event.fixHooks[s[--r]]=e.event.mouseHooks;var u=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var i=a.length;i;)this.addEventListener(a[--i],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",u.getLineHeight(this)),e.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var i=a.length;i;)this.removeEventListener(a[--i],t,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height"),e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var i=e(t),n=i["offsetParent"in e.fn?"offsetParent":"parent"]();return n.length||(n=e("body")),parseInt(n.css("fontSize"),10)||parseInt(i.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
!function(e){e.fn.slides=function(n){return n=e.extend({},e.fn.slides.option,n),this.each(function(){function a(a,i,t){if(!r&&s){switch(r=!0,n.animationStart(S+1),a){case"next":I=S,l=2*g,a=2*-g,S=C=u===(C=S+1)?0:C;break;case"prev":I=S,l=0,a=0,S=C=-1===(C=S-1)?u-1:C;break;case"pagination":C=parseInt(t,10),I=e("."+n.paginationClass+" li."+n.currentClass+" a",p).attr("href").match("[^#/]+$"),C>I?(l=2*g,a=2*-g):(l=0,a=0),S=C}"fade"===i?n.crossfade?h.children(":eq("+C+")",p).css({zIndex:10}).fadeIn(n.fadeSpeed,n.fadeEasing,function(){n.autoHeight?h.animate({height:h.children(":eq("+C+")",p).outerHeight()},n.autoHeightSpeed,function(){h.children(":eq("+I+")",p).css({display:"none",zIndex:0}),h.children(":eq("+C+")",p).css({zIndex:0}),n.animationComplete(C+1),r=!1}):(h.children(":eq("+I+")",p).css({display:"none",zIndex:0}),h.children(":eq("+C+")",p).css({zIndex:0}),n.animationComplete(C+1),r=!1)}):h.children(":eq("+I+")",p).fadeOut(n.fadeSpeed,n.fadeEasing,function(){n.autoHeight?h.animate({height:h.children(":eq("+C+")",p).outerHeight()},n.autoHeightSpeed,function(){h.children(":eq("+C+")",p).fadeIn(n.fadeSpeed,n.fadeEasing)}):h.children(":eq("+C+")",p).fadeIn(n.fadeSpeed,n.fadeEasing,function(){}),n.animationComplete(C+1),r=!1}):(h.children(":eq("+C+")").css({left:l,display:"block"}),n.autoHeight?h.animate({left:a,height:h.children(":eq("+C+")").outerHeight()},n.slideSpeed,n.slideEasing,function(){h.css({left:-g}),h.children(":eq("+C+")").css({left:g,zIndex:5}),h.children(":eq("+I+")").css({left:g,display:"none",zIndex:0}),n.animationComplete(C+1),r=!1}):h.animate({left:a},n.slideSpeed,n.slideEasing,function(){h.css({left:-g}),h.children(":eq("+C+")").css({left:g,zIndex:5}),h.children(":eq("+I+")").css({left:g,display:"none",zIndex:0}),n.animationComplete(C+1),r=!1})),n.pagination&&(e("."+n.paginationClass+" li."+n.currentClass,p).removeClass(n.currentClass),e("."+n.paginationClass+" li:eq("+C+")",p).addClass(n.currentClass))}}function i(){clearInterval(p.data("interval"))}function t(){n.pause?(clearTimeout(p.data("pause")),clearInterval(p.data("interval")),c=setTimeout(function(){clearTimeout(p.data("pause")),f=setInterval(function(){a("next",q)},n.play),p.data("interval",f)},n.pause),p.data("pause",c)):i()}e("."+n.container,e(this)).children().wrapAll('<div class="slides_control"/>');var s,r,o,l,d,c,f,p=e(this),h=e(".slides_control",p),u=h.children().size(),g=h.children().outerWidth(),m=h.children().outerHeight(),v=n.start-1,q=n.effect.indexOf(",")<0?n.effect:n.effect.replace(" ","").split(",")[0],x=n.effect.indexOf(",")<0?q:n.effect.replace(" ","").split(",")[1],C=0,I=0,y=0,S=0;if(u<2)return e("."+n.container,e(this)).fadeIn(n.fadeSpeed,n.fadeEasing,function(){s=!0,n.slidesLoaded()}),e("."+n.next+", ."+n.prev).fadeOut(0),!1;if(!(u<2)){if(v<0&&(v=0),v>u&&(v=u-1),n.start&&(S=v),n.randomize&&h.randomize(),e("."+n.container,p).css({overflow:"hidden",position:"relative"}),h.children().css({position:"absolute",top:0,left:h.children().outerWidth(),zIndex:0,display:"none"}),h.css({position:"relative",width:3*g,height:m,left:-g}),e("."+n.container,p).css({display:"block"}),n.autoHeight&&(h.children().css({height:"auto"}),h.animate({height:h.children(":eq("+v+")").outerHeight()},n.autoHeightSpeed)),n.preload&&h.find("img:eq("+v+")").length){e("."+n.container,p).css({background:"url("+n.preloadImage+") no-repeat 50% 50%"});var z=h.find("img:eq("+v+")").attr("src")+"?"+(new Date).getTime();d="slides_control"!=e("img",p).parent().attr("class")?h.children(":eq(0)")[0].tagName.toLowerCase():h.find("img:eq("+v+")"),h.find("img:eq("+v+")").attr("src",z).load(function(){h.find(d+":eq("+v+")").fadeIn(n.fadeSpeed,n.fadeEasing,function(){e(this).css({zIndex:5}),e("."+n.container,p).css({background:""}),s=!0,n.slidesLoaded()})})}else h.children(":eq("+v+")").fadeIn(n.fadeSpeed,n.fadeEasing,function(){s=!0,n.slidesLoaded()});n.bigTarget&&(h.children().css({cursor:"pointer"}),h.children().on("click",function(){return a("next",q),!1})),n.hoverPause&&n.play&&(h.bind("mouseover",function(){i()}),h.bind("mouseleave",function(){t()})),n.generateNextPrev&&(e("."+n.container,p).after('<a href="#" class="'+n.prev+'"></a>'),e("."+n.prev,p).after('<a href="#" class="'+n.next+'"></a>')),e("."+n.next,p).on("click",function(e){e.preventDefault(),n.play&&t(),a("next",q)}),e("."+n.prev,p).on("click",function(e){e.preventDefault(),n.play&&t(),a("prev",q)}),n.generatePagination?(n.prependPagination?p.prepend("<ul class="+n.paginationClass+"></ul>"):p.append("<ul class="+n.paginationClass+"></ul>"),h.children().each(function(){e("."+n.paginationClass,p).append('<li><a href="#'+y+'"></a></li>'),y++})):e("."+n.paginationClass+" li a",p).each(function(){e(this).attr("href","#"+y),y++}),e("."+n.paginationClass+" li:eq("+v+")",p).addClass(n.currentClass),e("."+n.paginationClass+" li a",p).on("click",function(){return n.play&&t(),o=e(this).attr("href").match("[^#/]+$"),S!=o&&a("pagination",x,o),!1}),e("a.link",p).on("click",function(){return n.play&&t(),o=e(this).attr("href").match("[^#/]+$")-1,S!=o&&a("pagination",x,o),!1}),n.play&&(f=setInterval(function(){a("next",q)},n.play),p.data("interval",f))}})},e.fn.slides.option={preload:!1,preloadImage:"/img/loading.gif",container:"slides_container",generateNextPrev:!1,next:"next",prev:"prev",pagination:!0,generatePagination:!0,prependPagination:!1,paginationClass:"pagination",currentClass:"current",fadeSpeed:350,fadeEasing:"",slideSpeed:350,slideEasing:"",start:1,effect:"slide",crossfade:!1,randomize:!1,play:0,pause:0,hoverPause:!1,autoHeight:!1,autoHeightSpeed:350,bigTarget:!1,animationStart:function(){},animationComplete:function(){},slidesLoaded:function(){}},e.fn.randomize=function(n){function a(){return Math.round(Math.random())-.5}return e(this).each(function(){var t=e(this),s=t.children(),r=s.length;if(r>1){s.hide();var o=[];for(i=0;i<r;i++)o[o.length]=i;o=o.sort(a),e.each(o,function(e,a){var i=s.eq(a),r=i.clone(!0);r.show().appendTo(t),void 0!==n&&n(i,r),i.remove()})}})}}(jQuery);
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<span type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></span>',nextArrow:'<span type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></span>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" data-role="none" role="button" aria-required="false" tabindex="0" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}var t=0;return e}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots&&o.slideCount>o.options.slidesToShow){for(t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var a=document.createElement("div");for(e=0;e<l.options.rows;e++){var d=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var p=i*r+(e*l.options.slidesPerRow+t);n.get(p)&&d.appendChild(n.get(p))}a.appendChild(d)}o.appendChild(a)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,a=r.$slider.width(),d=window.innerWidth||i(window).width();if("window"===r.respondTo?n=d:"slider"===r.respondTo?n=a:"min"===r.respondTo&&(n=Math.min(d,a)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.target);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var a=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(a),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide)),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).off("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else for(t=i.slideCount%i.options.slidesToShow==0?t:t+1;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;return o-1},e.prototype.getLeft=function(i){var e,t,o,s=this,n=0;return s.slideOffset=0,t=s.$slides.first().outerHeight(!0),!0===s.options.infinite?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,n=t*s.options.slidesToShow*-1),s.slideCount%s.options.slidesToScroll!=0&&i+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(i>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(i-s.slideCount))*s.slideWidth*-1,n=(s.options.slidesToShow-(i-s.slideCount))*t*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,n=s.slideCount%s.options.slidesToScroll*t*-1))):i+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(i+s.options.slidesToShow-s.slideCount)*s.slideWidth,n=(i+s.options.slidesToShow-s.slideCount)*t),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,n=0),!0===s.options.centerMode&&!0===s.options.infinite?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:!0===s.options.centerMode&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),e=!1===s.options.vertical?i*s.slideWidth*-1+s.slideOffset:i*t*-1+n,!0===s.options.variableWidth&&(o=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow),e=!0===s.options.rtl?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===s.options.centerMode&&(o=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow+1),e=!0===s.options.rtl?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(s.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this;e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),e.$slideTrack.attr("role","listbox"),e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){i(this).attr({role:"option","aria-describedby":"slick-slide"+e.instanceUid+t})}),null!==e.$dots&&e.$dots.attr("role","tablist").find("li").each(function(t){i(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+e.instanceUid+t,id:"slick-slide"+e.instanceUid+t})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.on("click.slick",{message:"next"},i.changeSlide))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).on("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=document.createElement("img");o.onload=function(){e.animate({opacity:0},100,function(){e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy").removeClass("slick-loading")})})},o.src=t})}var t,o,s=this;!0===s.options.centerMode?!0===s.options.infinite?o=(t=s.currentSlide+(s.options.slidesToShow/2+1))+s.options.slidesToShow+2:(t=Math.max(0,s.currentSlide-(s.options.slidesToShow/2+1)),o=s.options.slidesToShow/2+1+2+s.currentSlide):(o=(t=s.options.infinite?s.options.slidesToShow+s.currentSlide:s.currentSlide)+s.options.slidesToShow,!0===s.options.fade&&(t>0&&t--,o<=s.slideCount&&o++)),e(s.$slider.find(".slick-slide").slice(t,o)),s.slideCount<=s.options.slidesToShow?e(s.$slider.find(".slick-slide")):s.currentSlide>=s.slideCount-s.options.slidesToShow?e(s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow)):0===s.currentSlide&&e(s.$slider.find(".slick-cloned").slice(-1*s.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(i){var e=this;e.unslicked||(e.$slider.trigger("afterChange",[e,i]),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay&&e.autoPlay(),!0===e.options.accessibility&&e.initADA())},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(){var e,t=this;i("img[data-lazy]",t.$slider).length>0&&((e=i("img[data-lazy]",t.$slider).first()).attr("src",null),e.attr("src",e.attr("data-lazy")).removeClass("slick-loading").load(function(){e.removeAttr("data-lazy"),t.progressiveLazyLoad(),!0===t.options.adaptiveHeight&&t.setPosition()}).error(function(){e.removeAttr("data-lazy"),t.progressiveLazyLoad()}))},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,t=n[e].breakpoint,n.hasOwnProperty(e)){for(;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=e.prototype.setOptions=e.prototype.slickSetOptions=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(s)?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode?(e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")):i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===n.options.lazyLoad&&n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));if(s||(s=0),t.slideCount<=t.options.slidesToShow)return t.setSlideClasses(s),void t.asNavFor(s);t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,a=null,d=this;if(e=e||!1,(!0!==d.animating||!0!==d.options.waitForAnimate)&&!(!0===d.options.fade&&d.currentSlide===i||d.slideCount<=d.options.slidesToShow))if(!1===e&&d.asNavFor(i),o=i,a=d.getLeft(o),r=d.getLeft(d.currentSlide),d.currentLeft=null===d.swipeLeft?r:d.swipeLeft,!1===d.options.infinite&&!1===d.options.centerMode&&(i<0||i>d.getDotCount()*d.options.slidesToScroll))!1===d.options.fade&&(o=d.currentSlide,!0!==t?d.animateSlide(r,function(){d.postSlide(o)}):d.postSlide(o));else if(!1===d.options.infinite&&!0===d.options.centerMode&&(i<0||i>d.slideCount-d.options.slidesToScroll))!1===d.options.fade&&(o=d.currentSlide,!0!==t?d.animateSlide(r,function(){d.postSlide(o)}):d.postSlide(o));else{if(d.options.autoplay&&clearInterval(d.autoPlayTimer),s=o<0?d.slideCount%d.options.slidesToScroll!=0?d.slideCount-d.slideCount%d.options.slidesToScroll:d.slideCount+o:o>=d.slideCount?d.slideCount%d.options.slidesToScroll!=0?0:o-d.slideCount:o,d.animating=!0,d.$slider.trigger("beforeChange",[d,d.currentSlide,s]),n=d.currentSlide,d.currentSlide=s,d.setSlideClasses(d.currentSlide),d.options.asNavFor&&(l=(l=d.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(d.currentSlide),d.updateDots(),d.updateArrows(),!0===d.options.fade)return!0!==t?(d.fadeSlideOut(n),d.fadeSlide(s,function(){d.postSlide(s)})):d.postSlide(s),void d.animateHeight();!0!==t?d.animateSlide(a,function(){d.postSlide(s)}):d.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"left":"right":"vertical"},e.prototype.swipeEnd=function(i){var e,t=this;if(t.dragging=!1,t.interrupted=!1,t.shouldClick=!(t.touchObject.swipeLength>10),void 0===t.touchObject.curX)return!1;if(!0===t.touchObject.edgeHit&&t.$slider.trigger("edge",[t,t.swipeDirection()]),t.touchObject.swipeLength>=t.touchObject.minSwipe)switch(t.swipeDirection()){case"left":e=t.options.swipeToSlide?t.checkNavigable(t.currentSlide+t.getSlideCount()):t.currentSlide+t.getSlideCount(),t.slideHandler(e),t.currentDirection=0,t.touchObject={},t.$slider.trigger("swipe",[t,"left"]);break;case"right":e=t.options.swipeToSlide?t.checkNavigable(t.currentSlide-t.getSlideCount()):t.currentSlide-t.getSlideCount(),t.slideHandler(e),t.currentDirection=1,t.touchObject={},t.$slider.trigger("swipe",[t,"right"])}else t.touchObject.startX!==t.touchObject.curX&&(t.slideHandler(t.currentSlide),t.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!r.dragging||n&&1!==n.length)&&(e=r.getLeft(r.currentSlide),r.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,r.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curX-r.touchObject.startX,2))),!0===r.options.verticalSwiping&&(r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curY-r.touchObject.startY,2)))),"vertical"!==(t=r.swipeDirection())?(void 0!==i.originalEvent&&r.touchObject.swipeLength>4&&i.preventDefault(),s=(!1===r.options.rtl?1:-1)*(r.touchObject.curX>r.touchObject.startX?1:-1),!0===r.options.verticalSwiping&&(s=r.touchObject.curY>r.touchObject.startY?1:-1),o=r.touchObject.swipeLength,r.touchObject.edgeHit=!1,!1===r.options.infinite&&(0===r.currentSlide&&"right"===t||r.currentSlide>=r.getDotCount()&&"left"===t)&&(o=r.touchObject.swipeLength*r.options.edgeFriction,r.touchObject.edgeHit=!0),!1===r.options.vertical?r.swipeLeft=e+o*s:r.swipeLeft=e+o*(r.$list.height()/r.listWidth)*s,!0===r.options.verticalSwiping&&(r.swipeLeft=e+o*s),!0!==r.options.fade&&!1!==r.options.touchMove&&(!0===r.animating?(r.swipeLeft=null,!1):void r.setCSS(r.swipeLeft))):void 0)},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
!function(e,t,n){"use strict";function s(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function a(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function r(e,t,n){a(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function l(e,t,n){n?e.addClass(t):e.removeClass(t)}function u(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),l(e,n.checkedClass,a)}function o(e,t,n){l(e,n.disabledClass,t.is(":disabled"))}function c(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function d(e,n,a){var r,i,l;return a||(a={}),a=t.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),r=t("<div />"),i=t("<span />"),n.autoHide&&e.is(":hidden")&&"none"===e.css("display")&&r.hide(),a.divClass&&r.addClass(a.divClass),n.wrapperClass&&r.addClass(n.wrapperClass),a.spanClass&&i.addClass(a.spanClass),l=s(e,"id"),n.useID&&l&&s(r,"id",n.idPrefix+"-"+l),a.spanHtml&&i.html(a.spanHtml),r=c(e,r,a.divWrap),i=c(e,i,a.spanWrap),o(r,e,n),{div:r,span:i}}function f(e,n){var s;return n.wrapperClass?(s=t("<span />").addClass(n.wrapperClass),s=c(e,s,"wrap")):null}function p(){var n,s,a,r;return r="rgb(120,2,153)",s=t('<div style="width:0;height:0;color:'+r+'">'),t("body").append(s),a=s.get(0),n=e.getComputedStyle?e.getComputedStyle(a,"").color:(a.currentStyle||a.style||{}).color,s.remove(),n.replace(/ /g,"")!==r}function m(e){return e?t("<span />").text(e).html():""}function v(){return navigator.cpuClass&&!navigator.product}function h(){return void 0!==e.XMLHttpRequest}function C(e){var t;return e[0].multiple?!0:(t=s(e,"size"),!(!t||1>=t))}function b(e,t){var n="none";a(e,t,{"selectstart dragstart mousedown":returnFalse}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function y(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function w(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function g(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),w(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function k(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var x=!0,H=!1,A=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(t,n){var l,u,c,f,p;return u=n.submitDefaultHtml,t.is(":reset")&&(u=n.resetDefaultHtml),f=t.is("a, button")?function(){return t.html()||u}:function(){return m(s(t,"value"))||u},c=d(t,n,{divClass:n.buttonClass,spanHtml:f()}),l=c.div,r(t,l,n),p=!1,a(l,n,{"click touchend":function(){var n,a,r,i;p||t.is(":disabled")||(p=!0,t[0].dispatchEvent?(n=document.createEvent("MouseEvents"),n.initEvent("click",!0,!0),a=t[0].dispatchEvent(n),t.is("a")&&a&&(r=s(t,"target"),i=s(t,"href"),r&&"_self"!==r?e.open(i,r):document.location.href=i)):t.click(),p=!1)}}),b(l,n),{remove:function(){return l.after(t),l.remove(),t.unbind(n.eventNamespace),t},update:function(){i(l,n),o(l,t,n),t.detach(),c.span.html(f()).append(t)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,s,l;return n=d(e,t,{divClass:t.checkboxClass}),s=n.div,l=n.span,r(e,s,t),a(e,t,{"click touchend":function(){u(l,e,t)}}),u(l,e,t),{remove:k(e,t),update:function(){i(s,t),l.removeClass(t.checkedClass),u(l,e,t),o(s,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(e,n){function l(){y(e,p,n)}var u,f,p,m;return u=d(e,n,{divClass:n.fileClass,spanClass:n.fileButtonClass,spanHtml:n.fileButtonHtml,spanWrap:"after"}),f=u.div,m=u.span,p=t("<span />").html(n.fileDefaultHtml),p.addClass(n.filenameClass),p=c(e,p,"after"),s(e,"size")||s(e,"size",f.width()/10),r(e,f,n),l(),v()?a(e,n,{click:function(){e.trigger("change"),setTimeout(l,0)}}):a(e,n,{change:l}),b(p,n),b(m,n),{remove:function(){return p.remove(),m.remove(),e.unwrap().unbind(n.eventNamespace)},update:function(){i(f,n),y(e,p,n),o(f,e,n)}}}},{match:function(e){if(e.is("input")){var t=(" "+s(e,"type")+" ").toLowerCase(),n=" color date datetime datetime-local email month number password search tel text time url week ";return n.indexOf(t)>=0}return!1},apply:function(e,t){var n,a;return n=s(e,"type"),e.addClass(t.inputClass),a=f(e,t),r(e,e,t),t.inputAddTypeAsClass&&e.addClass(n),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(n),a&&e.unwrap()},update:!1}}},{match:function(e){return e.is(":radio")},apply:function(e,n){var l,c,f;return l=d(e,n,{divClass:n.radioClass}),c=l.div,f=l.span,r(e,c,n),a(e,n,{"click touchend":function(){t.uniform.update(t(':radio[name="'+s(e,"name")+'"]'))}}),u(f,e,n),{remove:k(e,n),update:function(){i(c,n),u(f,e,n),o(c,e,n)}}}},{match:function(e){return!(!e.is("select")||C(e))},apply:function(e,n){var s,l,u,c;return n.selectAutoWidth&&g(e,function(){c=e.width()}),s=d(e,n,{divClass:n.selectClass,spanHtml:(e.find(":selected:first")||e.find("option:first")).html(),spanWrap:"before"}),l=s.div,u=s.span,n.selectAutoWidth?g(e,function(){w(t([u[0],l[0]]),{display:"block"},function(){var e;e=u.outerWidth()-u.width(),l.width(c+e),u.width(c)})}):l.addClass("fixedWidth"),r(e,l,n),a(e,n,{change:function(){u.html(e.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var t=e.find(":selected").html();u.html()!==t&&e.trigger("change")},keyup:function(){u.html(e.find(":selected").html())}}),b(u,n),{remove:function(){return u.remove(),e.unwrap().unbind(n.eventNamespace),e},update:function(){n.selectAutoWidth?(t.uniform.restore(e),e.uniform(n)):(i(l,n),e[0].selectedIndex=e[0].selectedIndex,u.html(e.find(":selected").html()),o(l,e,n))}}}},{match:function(e){return!(!e.is("select")||!C(e))},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=f(e,t),r(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:!1}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=f(e,t),r(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:!1}}}];v()&&!h()&&(x=!1),t.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},t.fn.uniform=function(n){var s=this;return n=t.extend({},t.uniform.defaults,n),H||(H=!0,p()&&(x=!1)),x?(n.resetSelector&&t(n.resetSelector).mouseup(function(){e.setTimeout(function(){t.uniform.update(s)},10)}),this.each(function(){var e,s,a,r=t(this);if(r.data("uniformed"))return void t.uniform.update(r);for(e=0;e<A.length;e+=1)if(s=A[e],s.match(r,n))return a=s.apply(r,n),r.data("uniformed",a),void t.uniform.elements.push(r.get(0))})):this},t.uniform.restore=t.fn.uniform.restore=function(e){e===n&&(e=t.uniform.elements),t(e).each(function(){var e,n,s=t(this);n=s.data("uniformed"),n&&(n.remove(),e=t.inArray(this,t.uniform.elements),e>=0&&t.uniform.elements.splice(e,1),s.removeData("uniformed"))})},t.uniform.update=t.fn.uniform.update=function(e){e===n&&(e=t.uniform.elements),t(e).each(function(){var e,n=t(this);e=n.data("uniformed"),e&&e.update(n,e.options)})}}(this,jQuery);
!function(e){void 0==e.fn.inputmask&&(e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:e.noop,onKeyDown:e.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,radixPoint:"",definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-zА-яЁё]",cardinality:1},"*":{validator:"[A-Za-zА-яЁё0-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(e,t,n,i,a){var r=e.length;return!t&&n>1&&(r+=e.length*(n-1)),r}},val:e.fn.val,escapeRegex:function(e){var t=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];return e.replace(new RegExp("(\\"+t.join("|\\")+")","gim"),"\\$1")}},e.fn.inputmask=function(t,n){function i(t,n){var a=w.aliases[t];return!!a&&(a.alias&&i(a.alias),e.extend(!0,w,a),e.extend(!0,w,n),!0)}function a(t){var n=!1,i=0,a=w.greedy,r=w.repeat;1==t.length&&0==a&&(w.placeholder="");for(var s=e.map(t.split(""),function(e,t){var a=[];if(e==w.escapeChar)n=!0;else if(e!=w.optionalmarker.start&&e!=w.optionalmarker.end||n){var r=w.definitions[e];if(r&&!n)for(var s=0;s<r.cardinality;s++)a.push(v(i+s));else a.push(e),n=!1;return i+=a.length,a}}),o=s.slice(),u=1;u<r&&a;u++)o=o.concat(s.slice());return{mask:o,repeat:r,greedy:a}}function r(t){var n=!1,i=!1,a=!1;return e.map(t.split(""),function(e,t){var r=[];if(e==w.escapeChar)i=!0;else if(e!=w.optionalmarker.start||i){if(e!=w.optionalmarker.end||i){var s=w.definitions[e];if(s&&!i){for(var o=s.prevalidator,u=o?o.length:0,l=1;l<s.cardinality;l++){var c=u>=l?o[l-1]:[],f=c.validator,d=c.cardinality;r.push({fn:f?"string"==typeof f?new RegExp(f):new function(){this.test=f}:new RegExp("."),cardinality:d||1,optionality:n,newBlockMarker:1==n&&a,offset:0,casing:s.casing,def:e}),1==n&&(a=!1)}r.push({fn:s.validator?"string"==typeof s.validator?new RegExp(s.validator):new function(){this.test=s.validator}:new RegExp("."),cardinality:s.cardinality,optionality:n,newBlockMarker:a,offset:0,casing:s.casing,def:e})}else r.push({fn:null,cardinality:0,optionality:n,newBlockMarker:a,offset:0,casing:null,def:e}),i=!1;return a=!1,r}n=!1,a=!0}else n=!0,a=!0})}function s(){function e(e){return w.optionalmarker.start+e+w.optionalmarker.end}function t(i,s){var o,u,l=s.split(w.optionalmarker.end,2),c=l[0].split(w.optionalmarker.start);c.length>1?(u=a(o=i+c[0]+e(c[1])+(l.length>1?l[1]:"")),n.push({_buffer:u.mask,tests:r(o),lastValidPosition:0,greedy:u.greedy,repeat:u.repeat}),u=a(o=i+c[0]+(l.length>1?l[1]:"")),n.push({_buffer:u.mask,tests:r(o),lastValidPosition:0,greedy:u.greedy,repeat:u.repeat}),l.length>1&&l[1].split(w.optionalmarker.start).length>1&&(t(i+c[0]+e(c[1]),l[1]),t(i+c[0],l[1]))):(u=a(o=i+l),n.push({_buffer:u.mask,tests:r(o),lastValidPosition:0,greedy:u.greedy,repeat:u.repeat}))}var n=[];return t("",w.mask.toString()),n}function o(){return U[K]}function u(){return o().tests}function l(){return o()._buffer}function c(t,n,i,a,r){function s(e,t){for(var r=p(e),s=n?1:0,o="",u=t.tests[r].cardinality;u>s;u--)o+=_(i,r-(u-1));return n&&(o+=n),null!=t.tests[r].fn&&t.tests[r].fn.test(o,i,e,a,w)}if(a)return s(t,o());var u=[],l=!1,c=K;return e.each(U,function(e,a){var o=this,l=t;if(c!=(K=e)&&!d(t)){if(n==o._buffer[l]||n==w.skipOptionalPartCharacter)return u[e]={refresh:!0},o.lastValidPosition=l,!1;l=r?m(i,t):k(i,t)}(r||w.numericInput?o.lastValidPosition<=w.numericInput?h(i):k(i,l):o.lastValidPosition>=m(i,l))&&l>=0&&l<h(i)&&(u[e]=s(l,o),!1!==u[e]?(!0===u[e]&&(u[e]={pos:l}),o.lastValidPosition=u[e].pos||l):o.lastValidPosition=r?k(i,t):m(i,t))}),K=c,f(i,t,c,r),l=u[K]||l,setTimeout(function(){w.onKeyValidation.call(this,l,w)},0),l}function f(t,n,i,a){e.each(U,function(e,r){var s=this;if(a||w.numericInput?s.lastValidPosition<=n:s.lastValidPosition>=n){if((K=e)!=i){var o=h(t),u=l();(a||w.numericInput)&&(t.reverse(),u.reverse()),t.length=n;for(var c=n;c<o;c++){var f=p(c);g(t,c,_(u,f))}a&&t.reverse()}return!1}})}function d(e){var t=p(e),n=u()[t];return void 0!=n&&n.fn}function p(e){return e%u().length}function v(e){return w.placeholder.charAt(e%w.placeholder.length)}function h(e){return w.getMaskLength(l(),o().greedy,o().repeat,e,w)}function k(e,t){var n=h(e);if(t>=n)return n;for(var i=t;++i<n&&!d(i););return i}function m(e,t){var n=t;if(n<=0)return 0;for(;--n>0&&!d(n););return n}function g(e,t,n){var i=u()[p(t)],a=n;if(void 0!=a)switch(i.casing){case"upper":a=n.toUpperCase();break;case"lower":a=n.toLowerCase()}e[t]=a}function _(e,t,n){return n&&(t=y(e,t)),e[t]}function y(e,t,n){var i;if(n)for(;t<0&&e.length<h(e);)for(i=l().length-1,t=l().length;void 0!==l()[i];)e.unshift(l()[i--]);else for(;void 0==e[t]&&e.length<h(e);)for(i=0;void 0!==l()[i];)e.push(l()[i++]);return t}function b(e,t,n){e._valueSet(t.join("")),void 0!=n&&(j?setTimeout(function(){O(e,n)},100):O(e,n))}function P(e,t,n){for(var i=t,a=h(e);i<n&&i<a;i++)g(e,i,_(l().slice(),i))}function M(e,t){var n=p(t);g(e,t,_(l(),n))}function C(t,n,i,a){var r=e(t).data("inputmask").isRTL,s=x(t._valueGet(),r).split(""),f=h(n);if(r){var m=s.reverse();m.length=f;for(S=0;S<f;S++){var y=p(f-(S+1));null==u()[y].fn&&m[S]!=_(l(),y)?(m.splice(S,0,_(l(),y)),m.length=f):m[S]=m[S]||_(l(),y)}s=m.reverse()}P(n,0,n.length),n.length=l().length;for(var C,E=-1,G=-1,A=s.length,O=0==A?f:-1,S=0;S<A;S++)for(var I=G+1;I<f;I++){if(d(I)){var T=s[S];!1!==(C=c(I,T,n,!i,r))?(!0!==C&&(I=void 0!=C.pos?C.pos:I,T=void 0!=C.c?C.c:T),g(n,I,T),E=G=I):(M(n,I),T==v(I)&&(G=I,O=I));break}if(M(n,I),E==G&&(E=I),G=I,s[S]==_(n,I))break}if(0==o().greedy)for(var D=x(n.join(""),r).split("");n.length!=D.length;)r?n.shift():n.pop();return i&&b(t,n),r?w.numericInput?""!=w.radixPoint&&-1!=e.inArray(w.radixPoint,n)&&!0!==a?e.inArray(w.radixPoint,n):k(n,f):k(n,O):k(n,E)}function E(t){return e.inputmask.escapeRegex.call(this,t)}function x(e,t){return t?e.replace(new RegExp("^("+E(l().join(""))+")*"),""):e.replace(new RegExp("("+E(l().join(""))+")*$"),"")}function G(t,n){C(t,n,!1);var i=n.slice();if(e(t).data("inputmask").isRTL)for(a=0;a<=i.length-1;a++){r=p(a);if(!u()[r].optionality)break;if(d(a)&&c(a,n[a],n,!0))break;i.splice(0,1)}else for(var a=i.length-1;a>=0;a--){var r=p(a);if(!u()[r].optionality)break;if(d(a)&&c(a,n[a],n,!0))break;i.pop()}b(t,i)}function A(t,n){var i=t[0];if(!u()||!0!==n&&t.hasClass("hasDatepicker"))return i._valueGet();var a=l().slice();return C(i,a),e.map(a,function(e,t){return d(t)&&c(t,e,a,!0)?e:null}).join("")}function O(t,n,i){var a=t.jquery&&t.length>0?t[0]:t;if("number"!=typeof n){if(!e(t).is(":visible"))return{begin:0,end:0};var r=j?s:null,s=null;if(null==r){if(a.setSelectionRange)n=a.selectionStart,i=a.selectionEnd;else if(document.selection&&document.selection.createRange){var o=document.selection.createRange();i=(n=0-o.duplicate().moveStart("character",-1e5))+o.text.length}r={begin:n,end:i}}return r}e(t).is(":visible")&&(i="number"==typeof i?i:n,0==w.insertMode&&n==i&&i++,a.setSelectionRange?i==n?(a.focus(),a.setSelectionRange(n,i)):(a.select(),a.selectionStart=n,a.selectionEnd=T?n:i):a.createTextRange&&((o=a.createTextRange()).collapse(!0),o.moveEnd("character",i),o.moveStart("character",n),o.select()),a.focus(),j&&i!=a.selectionEnd&&(s={begin:n,end:i}))}function S(t){var n=!1;return currentActiveMasksetIndex=K,highestValidPosition=0,e.each(U,function(e,i){K=e;var a=h(t);if(i.lastValidPosition>=highestValidPosition&&i.lastValidPosition==a-1){for(var r=!0,s=0;s<a;s++){var o=d(s);if(o&&t[s]==v(s)||!o&&t[s]!=l()[s]){r=!1;break}}if(n=n||r)return!1}highestValidPosition=i.lastValidPosition}),K=currentActiveMasksetIndex,n}function I(t){function n(e,t){if(w.numericInput&&""!=w.radixPoint){var n=e._valueGet().indexOf(w.radixPoint);B=t.begin<=n||t.end<=n||-1==n}}function i(e,t,n){for(;!d(e)&&e-1>=0;)e--;for(var i=e;i<t&&i<h(T);i++)if(d(i)){M(T,i);var a=k(T,i),r=_(T,a);if(r!=v(a)){if(a<h(T)&&!1!==c(i,r,T,!0,B)&&u()[p(i)].def==u()[p(a)].def)g(T,i,_(T,a)),M(T,a);else if(d(i))break}else if(void 0==n)break}else M(T,i);return void 0!=n&&g(T,B?t:m(T,t),n),0==(T=x(T.join(""),B).split("")).length&&(T=l().slice()),e}function a(e,t,n,i){for(var a=e;a<=t&&a<h(T);a++)if(d(a)){var r=_(T,a);if(g(T,a,n),r!=v(a)){var s=k(T,a);if(!(s<h(T)))break;if(!1!==c(s,r,T,!0,B)&&u()[p(a)].def==u()[p(s)].def)n=r;else{if(d(s))break;n=r}}else if(!0!==i)break}else M(T,a);var o=T.length;return 0==(T=x(T.join(""),B).split("")).length&&(T=l().slice()),t-(o-T.length)}function r(t){N=!1;var r=this,s=t.keyCode,o=O(r);if(n(r,o),s==w.keyCode.BACKSPACE||s==w.keyCode.DELETE||R&&127==s){var u=h(T);if(0==o.begin&&o.end==u)K=0,T=l().slice(),b(r,T),O(r,C(r,T,!1));else if(o.end-o.begin>1||o.end-o.begin==1&&w.insertMode)P(T,o.begin,o.end),f(T,o.begin,K),b(r,T,B?C(r,T,!1):o.begin);else{var c=o.begin;s==w.keyCode.DELETE?(c<F&&(c=F),c<u&&(w.numericInput&&""!=w.radixPoint&&T[c]==w.radixPoint?c=i(c=T.length-1==c?c:k(T,c),u):B?(c=a(F,c,v(c),!0),c=k(T,c)):c=i(c,u),f(T,c,K),b(r,T,c))):s==w.keyCode.BACKSPACE&&c>F&&(c-=1,w.numericInput&&""!=w.radixPoint&&T[c]==w.radixPoint?(c=a(F,T.length-1==c?c:c-1,v(c),!0),c++):B?(c=a(F,c,v(c),!0),c=T[c+1]==w.radixPoint?c+1:k(T,c)):c=i(c,u),f(T,c,K),b(r,T,c))}r._valueGet()==l().join("")&&e(r).trigger("cleared"),t.preventDefault()}else if(s==w.keyCode.END||s==w.keyCode.PAGE_DOWN)setTimeout(function(){var e=C(r,T,!1,!0);w.insertMode||e!=h(T)||t.shiftKey||e--,O(r,t.shiftKey?o.begin:e,e)},0);else if(s==w.keyCode.HOME||s==w.keyCode.PAGE_UP)O(r,0,t.shiftKey?o.begin:0);else if(s==w.keyCode.ESCAPE)r._valueSet(L),O(r,0,C(r,T));else if(s==w.keyCode.INSERT)w.insertMode=!w.insertMode,O(r,w.insertMode||o.begin!=h(T)?o.begin:o.begin-1);else if(t.ctrlKey&&88==s)setTimeout(function(){O(r,C(r,T,!0))},0);else if(!w.insertMode)if(s==w.keyCode.RIGHT)d=(d=o.begin==o.end?o.end+1:o.end)<h(T)?d:o.end,O(r,t.shiftKey?o.begin:d,t.shiftKey?d+1:d);else if(s==w.keyCode.LEFT){var d=o.begin-1;O(r,d=d>0?d:0,t.shiftKey?o.end:d)}w.onKeyDown.call(this,t,T,w),V=-1!=e.inArray(s,w.ignorables)}function s(t){if(N)return!1;N=!0;var n=this,r=e(n),s=(t=t||window.event).which||t.charCode||t.keyCode,u=String.fromCharCode(s);if(w.numericInput&&u==w.radixPoint){var l=n._valueGet().indexOf(w.radixPoint);O(n,k(T,-1!=l?l:h(T)))}if(t.ctrlKey||t.altKey||t.metaKey||V)return!0;if(s){r.trigger("input");var f=O(n),d=h(T),p=!0;if(P(T,f.begin,f.end),B){if(!1!==(E=c((x=m(T,f.end))==d||_(T,x)==w.radixPoint?m(T,x):x,u,T,!1,B))){G=!1;if(!0!==E&&(G=E.refresh,x=void 0!=E.pos?E.pos:x,u=void 0!=E.c?E.c:u),!0!==G){d=h(T);var M=F;if(1==w.insertMode){if(1==o().greedy)for(I=T.slice();_(I,M,!0)!=v(M)&&M<=x;)M=M==d?d+1:k(T,M);if(M<=x&&(o().greedy||T.length<d)){if(T[F]!=v(F)&&T.length<d){var C=y(T,-1,B);0!=f.end&&(x+=C),d=T.length}i(M,x,u)}else p=!1}else g(T,x,u)}p&&(b(n,T,w.numericInput?x+1:x),setTimeout(function(){S(T)&&r.trigger("complete")},0))}else j&&b(n,T,f.begin)}else{var E,x=k(T,f.begin-1);if(y(T,x,B),!1!==(E=c(x,u,T,!1,B))){var G=!1;if(!0!==E&&(G=E.refresh,x=void 0!=E.pos?E.pos:x,u=void 0!=E.c?E.c:u),!0!==G)if(1==w.insertMode){for(var A=h(T),I=T.slice();_(I,A,!0)!=v(A)&&A>=x;)A=0==A?-1:m(T,A);A>=x?a(x,T.length,u):p=!1}else g(T,x,u);if(p){var D=k(T,x);b(n,T,D),setTimeout(function(){S(T)&&r.trigger("complete")},0)}}else j&&b(n,T,f.begin)}t.preventDefault()}}function E(t){var n=e(this),i=this,a=t.keyCode;w.onKeyUp.call(this,t,T,w),a==w.keyCode.TAB&&n.hasClass("focus.inputmask")&&0==i._valueGet().length&&w.showMaskOnFocus&&(b(i,T=l().slice()),B||O(i,0),L=i._valueGet())}var A=e(t);if(A.is(":input")){T=l().slice();o().greedy=o().greedy?o().greedy:0==o().repeat;var I=A.prop("maxLength");h(T)>I&&I>-1&&(I<l().length&&(l().length=I),0==o().greedy&&(o().repeat=Math.round(I/l().length)),A.prop("maxLength",2*h(T))),A.data("inputmask",{masksets:U,activeMasksetIndex:K,autoUnmask:w.autoUnmask,definitions:w.definitions,isRTL:!1}),function(t){var n;Object.getOwnPropertyDescriptor&&(n=Object.getOwnPropertyDescriptor(t,"value")),n&&n.get?t._valueGet||(t._valueGet=n.get,t._valueSet=n.set,Object.defineProperty(t,"value",{get:function(){var t=e(this),n=e(this).data("inputmask"),i=n.masksets,a=n.activeMasksetIndex;return n&&n.autoUnmask?t.inputmask("unmaskedvalue"):this._valueGet()!=i[a]._buffer.join("")?this._valueGet():""},set:function(t){this._valueSet(t),e(this).triggerHandler("setvalue.inputmask")}})):document.__lookupGetter__&&t.__lookupGetter__("value")?t._valueGet||(t._valueGet=t.__lookupGetter__("value"),t._valueSet=t.__lookupSetter__("value"),t.__defineGetter__("value",function(){var t=e(this),n=e(this).data("inputmask"),i=n.masksets,a=n.activeMasksetIndex;return n&&n.autoUnmask?t.inputmask("unmaskedvalue"):this._valueGet()!=i[a]._buffer.join("")?this._valueGet():""}),t.__defineSetter__("value",function(t){this._valueSet(t),e(this).triggerHandler("setvalue.inputmask")})):(t._valueGet||(t._valueGet=function(){return this.value},t._valueSet=function(e){this.value=e}),1!=e.fn.val.inputmaskpatch&&(e.fn.val=function(){if(0==arguments.length){var t=e(this);if(t.data("inputmask")){if(t.data("inputmask").autoUnmask)return t.inputmask("unmaskedvalue");var n=e.inputmask.val.apply(t),i=e(this).data("inputmask");return n!=i.masksets[i.activeMasksetIndex]._buffer.join("")?n:""}return e.inputmask.val.apply(t)}var a=arguments;return this.each(function(){var t=e(this),n=e.inputmask.val.apply(t,a);return t.data("inputmask")&&t.triggerHandler("setvalue.inputmask"),n})},e.extend(e.fn.val,{inputmaskpatch:!0})))}(t);var T=l().slice(),L=t._valueGet(),N=!1,V=!1,H=-1,F=k(T,-1),B=(m(T,h(T)),!1);if("rtl"==t.dir||w.numericInput){t.dir="ltr",A.css("text-align","right"),A.removeAttr("dir");var W=A.data("inputmask");W.isRTL=!0,A.data("inputmask",W),B=!0}A.unbind(".inputmask"),A.removeClass("focus.inputmask"),A.bind("mouseenter.inputmask",function(){var t=this;if(!e(this).hasClass("focus.inputmask")&&w.showMaskOnHover){var n=t._valueGet().length;n<T.length&&(0==n&&(T=l().slice()),b(t,T))}}).bind("blur.inputmask",function(){var t=e(this),n=this,i=n._valueGet();t.removeClass("focus.inputmask"),i!=L&&t.change(),w.clearMaskOnLostFocus&&""!=i&&(i==l().join("")?n._valueSet(""):G(n,T)),S(T)||(t.trigger("incomplete"),w.clearIncomplete&&(w.clearMaskOnLostFocus?n._valueSet(""):b(n,T=l().slice())))}).bind("focus.inputmask",function(){var t=e(this),n=this,i=n._valueGet();if(w.showMaskOnFocus&&!t.hasClass("focus.inputmask")&&(!w.showMaskOnHover||w.showMaskOnHover&&""==i)){var a=i.length;a<T.length&&(0==a&&(T=l().slice()),O(n,C(n,T,!0)))}t.addClass("focus.inputmask"),L=n._valueGet()}).bind("mouseleave.inputmask",function(){var t=e(this),n=this;w.clearMaskOnLostFocus&&(t.hasClass("focus.inputmask")||(n._valueGet()==l().join("")||""==n._valueGet()?n._valueSet(""):G(n,T)))}).bind("click.inputmask",function(){var e=this;setTimeout(function(){var t=O(e);if(t.begin==t.end){var i=t.begin;H=C(e,T,!1),n(e,t),B?O(e,i>H&&(!1!==c(i,T[i],T,!0,B)||!d(i))?i:H):O(e,i<H&&(!1!==c(i,T[i],T,!0,B)||!d(i))?i:H)}},0)}).bind("dblclick.inputmask",function(){var e=this;setTimeout(function(){O(e,0,H)},0)}).bind("keydown.inputmask",r).bind("keypress.inputmask",s).bind("keyup.inputmask",E).bind(D+".inputmask dragdrop.inputmask drop.inputmask",function(){var e=this;setTimeout(function(){O(e,C(e,T,!0)),S(T)&&A.trigger("complete")},0)}).bind("setvalue.inputmask",function(){var e=this;L=e._valueGet(),C(e,T,!0),e._valueGet()==l().join("")&&e._valueSet("")}).bind("complete.inputmask",w.oncomplete).bind("incomplete.inputmask",w.onincomplete).bind("cleared.inputmask",w.oncleared),H=C(t,T,!0);var z;try{z=document.activeElement}catch(e){}z===t?(A.addClass("focus.inputmask"),O(t,H)):w.clearMaskOnLostFocus&&(t._valueGet()==l().join("")?t._valueSet(""):G(t,T)),function(t){var n=e._data(t).events;e.each(n,function(t,n){e.each(n,function(e,t){if("inputmask"==t.namespace){var n=t.handler;t.handler=function(){return!this.readOnly&&!this.disabled&&n.apply(this,arguments)}}})})}(t)}}var T,w=e.extend(!0,{},e.inputmask.defaults,n),D=function(e){var t=document.createElement("input"),n=(e="on"+e)in t;return n||(t.setAttribute(e,"return;"),n="function"==typeof t[e]),t=null,n}("paste")?"paste":"input",R=null!=navigator.userAgent.match(/iphone/i),j=null!=navigator.userAgent.match(/android.*safari.*/i);if(j){var L=navigator.userAgent.match(/safari.*/i),N=parseInt(new RegExp(/[0-9]+/).exec(L));j=N<=533,T=533<N<=534}var U,K=0;if("string"==typeof t)switch(t){case"mask":return i(w.alias,n),U=s(),this.each(function(){I(this)});case"unmaskedvalue":return U=this.data("inputmask").masksets,K=this.data("inputmask").activeMasksetIndex,w.definitions=this.data("inputmask").definitions,A(this);case"remove":return this.each(function(){var t=e(this),n=this;setTimeout(function(){if(t.data("inputmask")){U=t.data("inputmask").masksets,K=t.data("inputmask").activeMasksetIndex,w.definitions=t.data("inputmask").definitions,n._valueSet(A(t,!0)),t.removeData("inputmask"),t.unbind(".inputmask"),t.removeClass("focus.inputmask");var e;Object.getOwnPropertyDescriptor&&(e=Object.getOwnPropertyDescriptor(n,"value")),e&&e.get?n._valueGet&&Object.defineProperty(n,"value",{get:n._valueGet,set:n._valueSet}):document.__lookupGetter__&&n.__lookupGetter__("value")&&n._valueGet&&(n.__defineGetter__("value",n._valueGet),n.__defineSetter__("value",n._valueSet)),delete n._valueGet,delete n._valueSet}},0)});case"getemptymask":return this.data("inputmask")?(U=this.data("inputmask").masksets,K=this.data("inputmask").activeMasksetIndex,U[K]._buffer.join("")):"";case"hasMaskedValue":return!!this.data("inputmask")&&!this.data("inputmask").autoUnmask;case"isComplete":return U=this.data("inputmask").masksets,K=this.data("inputmask").activeMasksetIndex,w.definitions=this.data("inputmask").definitions,S(this[0].split(""));default:return i(t,n)||(w.mask=t),U=s(),this.each(function(){I(this)})}else{if("object"==typeof t)return w=e.extend(!0,{},e.inputmask.defaults,t),i(w.alias,t),U=s(),this.each(function(){I(this)});if(void 0==t)return this.each(function(){var t=e(this).attr("data-inputmask");if(t&&""!=t)try{t=t.replace(new RegExp("'","g"),'"');var n=e.parseJSON("{"+t+"}");i((w=e.extend(!0,{},e.inputmask.defaults,n)).alias,n),w.alias=void 0,e(this).inputmask(w)}catch(e){}})}return this})}(jQuery);

(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);

(function($) {
    $.fn.getCursorPosition = function() {
        try {
            var input = this.get(0);
            if (!input) return; // No (input) element found
            if ('selectionStart' in input) {
                // Standard-compliant browsers
                return input.selectionStart;
            } else if (document.selection) {
                // IE
                input.focus();
                var sel = document.selection.createRange();
                var selLen = document.selection.createRange().text.length;
                sel.moveStart('character', -input.value.length);
                return sel.text.length - selLen;
            }
        } catch (e){
            return null;
        }

    };
    $.fn.setCursorPosition = function(pos) {
        try {
            var el = $(this).get(0);
            if (el.setSelectionRange) {
                el.setSelectionRange(pos, pos);
            } else if (el.createTextRange) {
                var range = el.createTextRange();
                range.collapse(true);
                if(pos < 0) {
                    pos = $(this).val().length + pos;
                }
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        } catch (e){
            return false;
        }
    }
})(jQuery);

(function($){

    $.fn.inputGroup = function(){
        var elements = $(this);
        elements.each(function(index,item){
            var $this = $(item);
            if ($this.data('inputGroup_processed')) return;

            var size = $(item).attr('maxlength');
            if (!size) {
                console.error(item);
                throw 'attribute "maxlength" not provided at group input';
            }

            var next = elements[index+1];
            var prev = elements[index-1];
            $this.on('input.inputGroup',function(e){
                var cursorPos = $this.getCursorPosition();
                var isCursorOnEndPos = cursorPos==$this.val().length;
                if ($this.val().length>size) {
                    $this.val($this.val().substr(0,size));
                }
                if ((cursorPos===null || isCursorOnEndPos) && $this.val().length==size) {
                    next && $(next).focus();
                }
            });
            $this.on('keyup.inputGroup',function(e){
                var cursorPos = $this.getCursorPosition();
                var isCursorOnEndPos = cursorPos==$this.val().length;

                if ((e.keyCode==8) && !$this.data('lastVal')) { // backspace or left
                    prev && $(prev).focus();
                }

                if (e.keyCode==39) { // right
                    if ((cursorPos===null || isCursorOnEndPos)) {
                        next && $(next).focus();
                    }
                }

                if (e.keyCode==37) { // left
                    if ((cursorPos===0 || $this.val().length==0)) {
                        prev && $(prev).focus();
                    }
                }

                $this.data('lastVal',$this.val());
            });
            $this.data('inputGroup_processed','1');
        });
    };


    $.fn.inputUngroup = function(){
        $(this).off('keyup.inputGroup input.inputGroup');
    };



})(jQuery);

(function($){

    var defaultTranslations = {
        '9':/[0-9]/
    };

    var testTranslation = function(compiledPattern,patternTester,value){
        if (patternTester instanceof RegExp) return patternTester.test(value);
        else if (typeof patternTester === 'string' || typeof patternTester === 'number') return patternTester===value;
        else if (patternTester.call) {
            var args = [];
            compiledPattern.arr.forEach(function(p){
                if (p.type=='special') {
                    args.push(p.userValue);
                }
            });
            var result = patternTester(args);
            if (result==undefined) throw "pattern function must return one of value supported";
            return testTranslation(
                compiledPattern,
                result,
                value
            );
        }
        else {
            console.error(patternTester);
            throw (typeof patternTester) + ' type not supported in translation object';
        }
    };

    var compilePattern = function(pattern,translations){
        var compiled = {arr:[],translations:translations};
        var translationKeys = Object.keys(translations);
        pattern.split('').forEach(function(char){
            compiled.arr.push({
                type:translationKeys.indexOf(char)>-1?'special':'raw',
                value:char
            });
        });
        return compiled;
    };


    var setValueByPattern = function(value,compiledPattern){
        var valIndex = 0;
        var patternIndex = 0;
        var length = value.length;
        var result = '';
        if (value.length==1) {
            var firstSpecialPatternName = compiledPattern.arr.filter(function(p){return p.type=='special'})[0];
            var ptrn = compiledPattern.translations[firstSpecialPatternName.value];
            if (
                ptrn &&
                !testTranslation(compiledPattern,ptrn,value)
            ) return '';
        }
        while (valIndex<length){
            var patternItem = compiledPattern.arr[patternIndex];
            if (!patternItem) break;
            if (value[valIndex]==undefined) break;
            if (patternItem.type=='special') {
                if (testTranslation(
                        compiledPattern,
                        compiledPattern.translations[patternItem.value],
                        value[valIndex])
                ) {
                    result+=value[valIndex];
                    patternItem.userValue = value[valIndex];
                    patternIndex++;
                }
                valIndex++;
            } else {
                if (patternItem.value==value[valIndex]) {
                    result+=patternItem.value;
                    valIndex++;
                    patternIndex++;
                } else {
                    result+=patternItem.value;
                    patternIndex++;
                }

            }
        }
        return result;
    };

    var rawValue = function(val,compiledPattern){
        var res = '';
        compiledPattern.arr.forEach(function(patternItem,index){
            if (patternItem.type=='special'){
                if (val[index]) res+=patternItem.userValue;
            }
        });
        return res;
    };

    $.fn.inputMask = function(maskPattern,maskTranslations){
        if (!maskTranslations) maskTranslations = {};
        $.extend(maskTranslations,defaultTranslations);
        var elements = $(this);
        maskPattern = compilePattern(maskPattern,maskTranslations);
        elements.each(function(index,item){
            var $this = $(item);
            if ($this.data('inputMask_processed')) return;

            if (!$this.attr('maxlength')) {
                $this.attr('maxlength',maskPattern.arr.length);
            }

            $this.on('input.inputMask',function(e){
                var caretPos = $this.getCursorPosition();
                if (caretPos==$this.val().length) caretPos = -1;
                var newVal = setValueByPattern(
                    $this.val(),
                    maskPattern
                );

                $this.val(newVal);
                if (caretPos!=-1) $this.setCursorPosition(caretPos);
                else {
                    // to fix android cursor bug
                    var size = $this.attr('maxlength');
                    if (size && size==newVal.length) return;
                    setTimeout(function(){
                        var v = $this.val();
                        $this.val('');
                        $this.val(v).trigger('change');
                        $this.focus();
                    },1);
                }
            });
            $this.data('inputMask_processed','1');
        });
    };

    $.fn.inputUnmask = function(){
        $(this).off('input.inputMask');
    }

})(jQuery);

function clickAutoDisk() {
    $li = $("#filterMarkaD[data-auto]").find('[type="checkbox"]:checked').last().closest('li');
    filterMarka($li.find("input").attr("name"), "", "disk", "", $li.closest('ul'), true);
}



function getCookie(e) {
    var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return t ? decodeURIComponent(t[1]) : void 0
}
function ajaxslider() {
    $.ajax({
        url: "/include/slider.php?more=y",
        success: function(s) {
            $(document).find('.slider .temp').append(s);
            $(".slider .temp > div").each(function() {
                var e = $(this).children("img").attr("src");
                $(this).css({background: 'url("' + e + '") no-repeat center center'});
            });
            $(".slider .prev, .slider .next, .slider .pagination").remove();
            $(".slider .container").html($(".slider .temp").html()), $(".slider, .slider .container, .slider .container > div").width($(".wrapper").width()), $(".slider").slides({
                generatePagination: !0,
                generateNextPrev: !0,
                container: "container",
                effect: "slide",
                slideSpeed: 500,
                slideEasing: "easeInOutQuad",
                play: 5000,
                pause: 2500,
                autoHeight: !0,
                slidesLoaded: function() {
                    var e = $(".slider .pagination li.current").index();
                    $(".nav-index li").eq(e).addClass("active").siblings().removeClass("active")
                },
                animationComplete: function() {
                    var e = $(".slider .pagination li.current").index();
                    $(".nav-index li").eq($(".slider .slides_control>div:not(:hidden)").index()).addClass("active").siblings().removeClass("active"), setTimeout(function() {
                        $(".nav-index .slick-slider").slick("slickGoTo", Math.round(e / 4))
                    }, 600)
                }
            });
        }
    })
}
function slider() {
    if($(document).find('.mini_slider').length>0) {
        $(".slider .temp > div").each(function() {
            var e = $(this).children("img").attr("src");
            $(this).css({
                background: 'url("' + e + '") no-repeat center center'
            })
        });
        $(".slider .container").html($(".slider .temp").html());
        $(document).find('.mini_slider').removeClass('mini_slider');
        
        setTimeout(function() {
                    ajaxslider();
                }, 1500);
    }
    else {
        $(".slider .temp > div").each(function() {
            var e = $(this).children("img").attr("src");
            $(this).css({
                background: 'url("' + e + '") no-repeat center center'
            })
        }), $(".slider .container").empty(), $(".slider .prev, .slider .next, .slider .pagination").remove(), $(".slider .container").html($(".slider .temp").html()), $(".slider, .slider .container, .slider .container > div").width($(".wrapper").width()), $(".slider").slides({
            generatePagination: !0,
            generateNextPrev: !0,
            container: "container",
            effect: "slide",
            slideSpeed: 500,
            slideEasing: "easeInOutQuad",
            play: 5000,
            pause: 2500,
            autoHeight: !0,
            slidesLoaded: function() {
                var e = $(".slider .pagination li.current").index();
                $(".nav-index li").eq(e).addClass("active").siblings().removeClass("active")
            },
            animationComplete: function() {
                var e = $(".slider .pagination li.current").index();
                $(".nav-index li").eq($(".slider .slides_control>div:not(:hidden)").index()).addClass("active").siblings().removeClass("active"), setTimeout(function() {
                    $(".nav-index .slick-slider").slick("slickGoTo", Math.round(e / 4))
                }, 600)
            }
        })
    }
}

function getBasketHTML(e) {
    return txt = e.split("<!--start-->"), txt = txt[1], txt = txt.split("<!--end-->"), txt[0]
}

function IntersecArrays(e, t) {
    for (var a = e.length, i = t.length, n = 0, s = [], l = 0; l < a; l++) {
        for (var r = 0, o = 0; t[r] !== e[l] && r < i;) r++;
        for (; s[o] !== e[l] && o < n;) o++;
        r != i && o == n && (s[n++] = e[l])
    }
    return s
}

function formatMoney(e) {
    if (-1 == (e = e.toString()).indexOf(".")) var t = e,
        a = "";
    else var i = e.split("."),
        t = i[0],
        a = "." + i[1];
    var n = t.split(""),
        s = "";
    if (n.length > 3) {
        for (var l = n.length - 1, r = 1; l >= 0; l--, r++) s = n[l] + s, r % 3 == 0 && (s = " " + s);
        return s + a + " руб."
    }
    return t + a + " руб."
}

function myFilter(e) {
    
    

    $("form:not(.smartfilter)").has(".multiply").each(function(t, a) {
        var dopFilter ='';      
        if($(a).find('[name="auto_type_nav"]').length > 0) {            
            if($(a).find('[name="auto_type_nav"][value="1858"]').prop("checked")) {
                dopFilter='.spec_mult';
                $(a).find(".multiply:not(.filter_auto):not(.spec_mult) ul li").removeClass("active").find("input").prop("checked", false);
            }
            else {
                dopFilter=':not(.spec_mult)';
                $(a).find(".multiply:not(.filter_auto).spec_mult ul li").removeClass("active").find("input").prop("checked", false);
            }
        }
        if($(a).find('[name="auto_type_nav"]').length > 0) {
            if($(a).find('[name="auto_type_nav"][value="1855"]').prop("checked")) {
                $(a).find('[data-class="81"]').closest('form').find(".multiply:not(.spec_mult)").show();
                $(a).find('[data-class="81"]').closest('form').find(".multiply.spec_mult").hide();
                $(a).find('[data-class="81"]').closest(".multiply:not(.spec_mult)").hide();
            }
            else {
                if($(a).find('[name="auto_type_nav"][value="1858"]').prop("checked")) {
                    $(a).find('[data-class="81"]').closest('form').find(".multiply:not(.spec_mult)").hide();
                    $(a).find('[data-class="81"]').closest('form').find(".multiply.spec_mult").show();
                }
                else {
                    $(a).find('[data-class="81"]').closest('form').find(".multiply:not(.spec_mult)").show();
                    $(a).find('[data-class="81"]').closest('form').find(".multiply.spec_mult").hide();
                }
            }
        }

        function i(e, t) {
            if (e < o.length) {
                for (var a = new Array, n = 0; n <= (0 == s[o[e]].length ? 0 : s[o[e]].length - 1); n++) {
                    var l = new Array;
                    if (e + 1 == o.length) r = s[o[e]][n] ? s[o[e]][n] : "";
                    else var r = s[o[e]][n] ? s[o[e]][n] + "," : ",";
                    if (l.push(t + r), e + 1 == o.length && c.push(t + r), e + 1 < o.length)
                        for (var d = 0; d < l.length; d++) a.push(i(e + 1, l[d]));
                    else a.push(l)
                }
                return a
            }
        }
        var n = !1,
            s = new Array;

            
        if ($all = 0, $(a).find("ul.auto-type-nav").length > 0 && $(a).find("ul.auto-type-nav").find("input:checked").length > 0) {
            var l = new Array;
            l.push($(a).find("ul.auto-type-nav").find("input:checked").val()), s[$(a).find("ul.auto-type-nav").data("id")] = l, $all++;            
        }
        if($(a).find('ul.season').length>0) {
            var strn=$(a).find('.auto-type-nav .active').find('span p').text();
            if(!strn) strn=$(a).find('.auto-type-nav .active').find('span span').text();           
            if(!strn) strn=$(a).find('.auto-type-nav :checked').closest('li').find('span p').text();
            if(!strn) strn=$(a).find('.auto-type-nav :checked').closest('li').find('span span').text();               
            var patternmyn = new RegExp("Лег");
            $checking=true;
            if(!patternmyn.test(strn) && strn!='') {
                var r = new Array;
                s[84] = r;
            }
            else {
                if ($(a).find("ul.season").length > 0 && $(a).find("ul.season").find("input:checked").length > 0) {
                    n = "" + $(a).find("ul.season").find("input:checked").closest("label").data("seasonradio");
                    var r = new Array;
                    r.push(n), s[84] = r
                }
            }
        }
        //:not(.spec_mult)

        //$('.author').append($(a).find("ul.auto-type-nav").find("input:checked").val());



        $(a).find(".multiply:not(.filter_auto)"+dopFilter+" ul").each(function(e, t) {
            var i = $(t).data("class");
            submassive = new Array, $(t).find("li.active [type=checkbox]").each(function(e, t) {
                if ($(a).find("ul.season").length > 0 && $(a).find("ul.season").find("input:checked").length > 0) {
                    var i = $(t).data("season");
                    (i = "" + i).split(",").indexOf(n) >= 0 || !n ? ($all++, submassive.push($(t).data("val").toString())) : $(t).prop("checked", !1).closest("li").removeClass("active")
                } else $all++, submassive.push($(t).data("val").toString())
            }), s[i] = submassive
        });      
        /*if($(a).find("ul.auto-type-nav").data("id")==166) {
            var strGET = window.location.search.replace( '?', ''); 
            if(strGET=='d=d') {
                console.log(s);
                $('.filter-general').append(typeof(s[81])+'<br>');
                $('.filter-general').append(typeof(s[84])+'<br>');
                $('.filter-general').append(typeof(s[92])+'<br>');
                $('.filter-general').append(typeof(s[93])+'<br>');
                $('.filter-general').append(typeof(s[98])+'<br>');
                $('.filter-general').append(typeof(s[99])+'<br>');
                $('.filter-general').append(typeof(s[166])+'<br>');
                $('.filter-general').append('+');
                
                //alert(s);
            }            
        }*/
        var o = new Array;
        if ($(a).find(".multiply:not(.filter_auto)"+dopFilter+" ul").each(function(e, t) {
                o.push($(t).data("class"))
            }), (n || ($(a).find("ul.season").length > 0 && $(a).find("ul.season").find("input:checked").length > 0) || ($(a).find("ul.season:not(:visible)").length>0)) && o.push(84), $(a).find("ul.auto-type-nav").length > 0 && $(a).find("ul.auto-type-nav").find("input:checked").length > 0 && o.push($(a).find("ul.auto-type-nav").data("id")), o = o.sort(function(e, t) {
                return e - t
            }), $all > 0) {           
            for (var c = new Array, d = 0; d <= (0 == s[o[0]].length ? 0 : s[o[0]].length - 1); d++) {                
                var p = d,
                    h = s[o[0]][p] ? s[o[0]][p] + "," : ",";
                new Array;
                i(1, h);
            }

            
            $(a).find("ul.auto-type-nav").length > 0 && $(a).find("ul.auto-type-nav").find("input:checked").length, $(a).find(".multiply:not(.filter_auto)"+dopFilter+" ul li").each(function(t, i) {         
                if (!$(i).is(".active")) {
                    var strGET = '';
                    if($(i).closest("ul").data("class")==98) {
                        strGET = window.location.search.replace( '?', '');                                   
                    }                    
                    for (var s = $(i).find("input").data("m").split("|").length - 2; s >= 0; s--) {
                        var l = !1,
                            r = $(i).find("input").data("m").split("|");
                        if(/*strGET=='d=d' && */($(i).find("input").data('val')==1037 || $(i).find("input").data('val')==1026)) {    
                            /*$.ajax({
                                data: {
                                    data: c,
                                    data2: $(i).text(),
                                    
                                },
                                type: "POST",
                                url:  '/include/credit.php',
                                success: function(s) {}});*/
                        }
                        r = (r = r[s]).split(",");                          
                        for (var d = c.length - 1; d >= 0; d--) {
                            for (var p = c[d].split(","), h = 0, u = p.length - 1; u >= 0; u--) "" != p[u] && p[u] != r[u] || h++;
                                //if($(i).find('input').attr('data-val')==1027) {$('.author a').text(h +'/'+ o.length+'/'+c[d]+'/'+r);}    
                            if(/*strGET=='d=d' && */($(i).find("input").data('val')==1037 || $(i).find("input").data('val')==1026)) {    
                            
                           /* $.ajax({
                                data: {
                                    datasr: h +'/'+ o.length+'/'+c[d]+'/'+r,
                                },
                                type: "POST",
                                url:  '/include/credit.php',
                                success: function(s) {}});*/
                        }
                            if (h == o.length) {
                                l = !0;
                                break
                            }
                        }
                        if(/*strGET=='d=d' && */($(i).find("input").data('val')==1037 || $(i).find("input").data('val')==1026)) {    
                            
                            /*$.ajax({
                                data: {
                                    data: '+++',
                                    dataS: $(i).find("input").data("m"),
                                },
                                type: "POST",
                                url:  '/include/credit.php',
                                success: function(s) {}});*/
                        }
                        if (1 == l) break
                    }
                    if (l) {
                        if ($(a).find("ul.season").length > 0 && $(a).find("ul.season").find("input:checked").length > 0) {
                            var f = $(i).find("input").data("season");
                            ((f = "" + f).split(",").indexOf("" + n) >= 0 || !n) && $(i).show();
                            
                        } else {
                            $(i).show();
                            
                        }
                    }
                    else  {
                        
                        $(i).closest("ul").data("class") != e && $(i).hide();
                    }
                }
            })
       
        } else $(a).find(".multiply:not(.filter_auto)"+dopFilter+" ul li").each(function(e, t) {
            if ($(a).find("ul.season").length > 0 && $(a).find("ul.season").find("input:checked").length > 0) {
                var i = $(t).find("input").data("season");
                (i = "" + i).split(",").indexOf(n) >= 0 || !n ? $(t).show() : $(t).hide().removeClass("active").find("input").prop("checked", !1)
            } else $(t).show()
        })
    })
}

function isValidEmailAddress(e) {
    return new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e)
}

function recalcBasket() {
    $sum = parseFloat($("#allSum_FORMATED").data("val")), $(".bonus-count em").html(Math.round(.03 * $sum)), $(".count_montazh").each(function(e, t) {
        $all = $("#QUANTITY_INPUT_" + $(t).data("id")).val(), $(t).val(($all - $all % 4) / 4)
    }), $(".montazh:checked").each(function(e, t) {
        $thissum = parseFloat($("[name=type_auto_" + $(t).val() + "] option:checked").data("val")) * $("[name=QUANTITYS_" + $(t).val() + "]").val(), $sum += $thissum, $(".montazh_price_format#price" + $(t).val()).html(formatMoney($thissum)), $(".montazh_price_format_min[data-id=" + $(t).val() + "]").html("от " + formatMoney(parseFloat($("[name=type_auto_" + $(t).val() + "] option:checked").data("val"))))
    }), $(".saving:checked").each(function(e, t) {
        $thissum = parseFloat($(t).data("val")) * $(".count_montazh[data-id=" + $(t).data("id") + "]").val(), $sum += $thissum, $(".save_price_format#" + $(t).data("id") + "priceS").html(formatMoney($thissum))
    }), $("h3.highlight>strong").html(formatMoney($sum))
}

function filterMarka(e, t, a, i, n, next) {
    $form = n.parents("form");

    $.ajax({
        data: {
            type: e,
            vendor: "index" != t ? $("input:checked[name=vendor]").data("val") : "index" == t && "disk" != a ? $("#filterMarka input:checked[name=vendor]").data("val") : $("#filterMarkaD input:checked[name=vendor]").data("val"),
            model: "index" != t ? $("input:checked[name=model]").data("val") : "index" == t && "disk" != a ? $("#filterMarka input:checked[name=model]").data("val") : $("#filterMarkaD input:checked[name=model]").data("val"),
            year: "index" != t ? $("input:checked[name=year]").data("val") : "index" == t && "disk" != a ? $("#filterMarka input:checked[name=year]").data("val") : $("#filterMarkaD input:checked[name=year]").data("val"),
            modification: "index" != t ? $("input:checked[name=modification]").data("val") : "index" == t && "disk" != a ? $("#filterMarka input:checked[name=modification]").data("val") : $("#filterMarkaD input:checked[name=modification]").data("val")
        },
        type: "POST",
        url:  (
            $("#filterMarkaD[data-auto]").length>0?'/include/ajaxFilterMarkaWheelAuto.php':
            ($("[data-disk]").length > 0 && "index" != t || "index" == t && "disk" == a ? "/include/ajaxFilterMarkaWheel.php" : "/include/ajaxFilterMarka.php")
            ),
        success: function(s) {
            "vendor" == e && ("index" != t ? $(".model, .modification, .year").html("") : "index" == t && "disk" != a ? $("#filterMarka .model, #filterMarka .modification, #filterMarka  .year").html("") : $("#filterMarkaD .model, #filterMarkaD .modification, #filterMarkaD .year").html(""), "index" != t ? $(".model, .modification, .year").closest(".multiply").addClass("none") : "index" == t && "disk" != a ? $("#filterMarka .model, #filterMarka .modification, #filterMarka .year").closest(".multiply").addClass("none") : $("#filterMarkaD .model, #filterMarkaD .modification, #filterMarkaD .year").closest(".multiply").addClass("none"), "index" != t ? $(".model").html("" + s) : "index" == t && "disk" != a ? $("#filterMarka .model").html("" + s) : $("#filterMarkaD .model").html("" + s), "index" != t ? $(".model").closest(".multiply").removeClass("none") : "index" == t && "disk" != a ? $("#filterMarka .model").closest(".multiply").removeClass("none") : $("#filterMarkaD .model").closest(".multiply").removeClass("none"), "index" != t ? $("#tt").html("") : "index" == t && "disk" != a ? $("#tt").html("") : $("#tt2").html("")), "model" == e && ("index" != t ? $(".modification, .year").html("") : "index" == t && "disk" != a ? $("#filterMarka .modification, #filterMarka .year").html("") : $("#filterMarkaD .modification, #filterMarkaD .year").html(""), "index" != t ? $(".modification, .year").closest(".multiply").addClass("none") : "index" == t && "disk" != a ? $("#filterMarka .modification, #filterMarka .year").closest(".multiply").addClass("none") : $("#filterMarkaD .modification, #filterMarkaD  .year").closest(".multiply").addClass("none"), "index" != t ? $(".year").html("" + s) : "index" == t && "disk" != a ? $("#filterMarka .year").html("" + s) : $("#filterMarkaD .year").html("" + s), "index" != t ? $(".year").closest(".multiply").removeClass("none") : "index" == t && "disk" != a ? $("#filterMarka .year").closest(".multiply").removeClass("none") : $("#filterMarkaD .year").closest(".multiply").removeClass("none"), "index" != t ? $("#tt").html("") : "index" == t && "disk" != a ? $("#filterMarka #tt").html("") : $("#filterMarkaD #tt2").html("")), "year" == e && ("index" != t ? $(".modification").html("" + s) : "index" == t && "disk" != a ? $("#filterMarka .modification").html("" + s) : $("#filterMarkaD .modification").html("" + s), "index" != t ? $(".modification").closest(".multiply").removeClass("none") : "index" == t && "disk" != a ? $("#filterMarka .modification").closest(".multiply").removeClass("none") : $("#filterMarkaD .modification").closest(".multiply").removeClass("none"), "index" != t ? $("#tt").html("") : "index" == t && "disk" != a ? $("#filterMarka #tt").html("") : $("#filterMarkaD #tt2").html("")), "modification" == e && ("index" != t ? $("#tt").html("" + s) : "index" == t && "disk" != a ? $("#filterMarka #tt").html("" + s) : $("#filterMarkaD #tt2").html("" + s));
            var l = n,
                r = i;
            l.parents(".multiply").find("h6") && (l.find(".active").length > 0 ? (l.find(".active").each(function() {
                r = r + $(this).text() + ", "
            }), r = r.slice(0, -2)) : r = "Выберите", l.parents(".multiply").find("h6 span").text(r), l.parents(".multiply").siblings("#tt").find(".list.list_left").each(function(e, t) {
                $(t).detach().insertAfter(l.parents(".multiply").siblings("#tt").find(".title:eq(" + e + ")"))
            }), l.parents(".multiply").find("h6").trigger("click"))

            if(next) {
                if($form.find('.filter_auto.type_year+div li').eq($form.attr('data-request-mm')).find('input').length>0 && $form.attr('data-request-mm')) {
                    if(!$form.find('.filter_auto.type_year+div li').eq($form.attr('data-request-mm')).find('input').prop('checked')) {
                        $form.find('.filter_auto.type_year+div li').eq($form.attr('data-request-mm')).find('input').prop('checked', true).closest('li').addClass('active');
                        clickAutoDisk();
                    }
                }
                else if($form.find('.filter_auto.type_year li').eq($form.attr('data-request-y')).find('input').length>0 && $form.attr('data-request-y')) {
                    $form.find('.filter_auto.type_year li').eq($form.attr('data-request-y')).find('input').prop('checked');
                    if(!$form.find('.filter_auto.type_year li').eq($form.attr('data-request-y')).find('input').prop('checked')) {
                        $form.find('.filter_auto.type_year li').eq($form.attr('data-request-y')).find('input').prop('checked', true).closest('li').addClass('active');
                        clickAutoDisk();
                    }
                }
                else if($form.attr('data-request-m')) {
                    $form.find('.filter_auto.type_model li').eq($form.attr('data-request-m')).find('input').prop('checked');
                    if(!$form.find('.filter_auto.type_model li').eq($form.attr('data-request-m')).find('input').prop('checked')) {
                        $form.find('.filter_auto.type_model li').eq($form.attr('data-request-m')).find('input').prop('checked', true).closest('li').addClass('active');
                        clickAutoDisk();
                    }
                }
                //clickAutoDisk();
            }
        }
    })
}

function scale(e) {
    if (e.scrollWidth > $(e).width()) {
        var t = parseFloat($(e).css("font-size"), 10) - .1;
        t >= 10 && ($(e).css("font-size", t), $(e).css("line-height", "1.5em"), scale(e))
    }
}

function sp_f(e) {
    (e = $("#calculator").get(0)).Sp1.value = Math.round(Math.round(e.Wdn.options[e.Wdn.selectedIndex].value * e.Hdn.options[e.Hdn.selectedIndex].value * 2 + 25.4 * e.Rdn.options[e.Rdn.selectedIndex].value) / Math.round(e.Wd.options[e.Wd.selectedIndex].value * e.Hd.options[e.Hd.selectedIndex].value * 2 + 25.4 * e.Rd.options[e.Rd.selectedIndex].value) * e.Sp.value * 100) / 100, e.Sp2.value = Math.round(100 * (e.Sp1.value - e.Sp.value)) / 100
}

function t_calc(e) {
    (e = $("#calculator").get(0)).Tw.value = e.Wd.options[e.Wd.selectedIndex].value, e.Tw1.value = e.Wdn.options[e.Wdn.selectedIndex].value, e.Tw2.value = e.Wdn.options[e.Wdn.selectedIndex].value - e.Wd.options[e.Wd.selectedIndex].value, e.Tr.value = Math.round(e.Rd.options[e.Rd.selectedIndex].value), e.Tr1.value = Math.round(e.Rdn.options[e.Rdn.selectedIndex].value), e.Tr2.value = Math.round(e.Rdn.options[e.Rdn.selectedIndex].value) - Math.round(e.Rd.options[e.Rd.selectedIndex].value), e.dTr1.value = Math.round(e.Rdn.options[e.Rdn.selectedIndex].value), e.Th.value = Math.round(e.Wd.options[e.Wd.selectedIndex].value * e.Hd.options[e.Hd.selectedIndex].value * 2 + 25.4 * e.Rd.options[e.Rd.selectedIndex].value), e.Th1.value = Math.round(e.Wdn.options[e.Wdn.selectedIndex].value * e.Hdn.options[e.Hdn.selectedIndex].value * 2 + 25.4 * e.Rdn.options[e.Rdn.selectedIndex].value), e.Th2.value = Math.round(e.Wdn.options[e.Wdn.selectedIndex].value * e.Hdn.options[e.Hdn.selectedIndex].value * 2 + 25.4 * e.Rdn.options[e.Rdn.selectedIndex].value) - Math.round(e.Wd.options[e.Wd.selectedIndex].value * e.Hd.options[e.Hd.selectedIndex].value * 2 + 25.4 * e.Rd.options[e.Rd.selectedIndex].value), e.Kl.value = (Math.round(e.Wdn.options[e.Wdn.selectedIndex].value * e.Hdn.options[e.Hdn.selectedIndex].value * 2 + 25.4 * e.Rdn.options[e.Rdn.selectedIndex].value) - Math.round(e.Wd.options[e.Wd.selectedIndex].value * e.Hd.options[e.Hd.selectedIndex].value * 2 + 25.4 * e.Rd.options[e.Rd.selectedIndex].value)) / 2, e.Sp1.value = Math.round(Math.round(e.Wdn.options[e.Wdn.selectedIndex].value * e.Hdn.options[e.Hdn.selectedIndex].value * 2 + 25.4 * e.Rdn.options[e.Rdn.selectedIndex].value) / Math.round(e.Wd.options[e.Wd.selectedIndex].value * e.Hd.options[e.Hd.selectedIndex].value * 2 + 25.4 * e.Rd.options[e.Rd.selectedIndex].value) * e.Sp.value * 100) / 100, e.Sp2.value = Math.round(100 * (e.Sp1.value - e.Sp.value)) / 100, e.Sp4.value = Math.round((1 - .28 * e.Hdn.options[e.Hdn.selectedIndex].value) * e.Wdn.options[e.Wdn.selectedIndex].value / 12.7) / 2
}
window.onload = function() {
    getCookie("city") || $.ajax({
        type: "POST",
        url: "/include/city.php",
        success: function(e) {
            $modal = $('[data-target="city"]'), e = JSON.parse(e), $modal.find("h4").text(e.text), $modal.find("#ipcity").text(e.city), 
            "Барнаул" != e.city && $modal.find("#ipcity").closest("ul").siblings("ul").prepend('<li><a href="//www.podkova22.ru'+$modal.find('#ipcity+a').attr('href')+'">Барнаул</a></li>'),
            $modal.find("#ipcity+a").attr("href", "//" + e.code + ".podkova22.ru"+$modal.find('#ipcity+a').attr('href')),
              $('[data-open="city"]').click()
        }
    })
}, $(function() {
$('[data-url]').on('click', function() {
    //document.location.href = $(this).data('url');
    window.open($(this).data('url'));
});


$(".podbor_carousel ul").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            adaptiveHeight: !0,
            infinite: !0,
            arrows: true,
            draggable: !0
        });

$('.filter_search>span').on('click', function() {
    $(this).find('[type=radio]').prop('checked', true).closest('div').closest('span').addClass('filter_where').siblings('span').removeClass('filter_where').find('[type=radio]').prop('checked', false).closest('form').submit();    
});
$("form[name=oneclickbasketcredit]").on("submit", function() {
    var e = 0;
    if("" == $(this).find("[name=name]").val()) {
        e++;
        $(this).parent("p").addClass("error");
    }
    else $(this).parent("p").removeClass("error");
    if("" == $(this).find("[name=phone]").val()) {
        e++;
        $(this).parent("p").addClass("error");
    }
    else $(this).parent("p").removeClass("error");
    if($(this).find(".rules_1").prop("checked"))
        $(this).find(".rules_1").closest("p").css("font-weight", "");
    else {
        $(this).find(".rules_1").closest("p").css("font-weight", "bold");
        e++;
    }

    if ( 0 == e) 
    {
        $this = $(this);
        $.ajax({
            data: $(this).serialize(),
            type: "POST",
            url: "/include/credit.php",
            success: function(e) {
                /*$("#sub-success").remove();
                $("form[name=oneclickbasketcredit]").find(".form_confidential").after('<p id="sub-success" style="position: relative;">' + e + "</p>");
                $("form[name=oneclickbasketcredit]").find("[name=email], [name=name], [name=phone]").val("");
                setTimeout(function() {
                    $(".fade").trigger("click")
                }, 5);*/
            }
        });
    }
    return false;
});



 $(".banner-mini p, .banner-bg p, .contacts-b .address .nav ul li div").each(function() {
                $(this).css({
                    "margin-top": -$(this).outerHeight() / 2 + "px",
                    opacity: "1"
                });
                if($(this).closest('li').outerHeight()-16<$(this).outerHeight()) {
                    $(this).closest('li').css('height', $(this).outerHeight()+18);
                }
            });


    if($('[name=target_zakaz]').length>0) {
        if(Ya) {
                var yacounter=Ya.Metrika.counters()[0].id;
                window["yaCounter" + yacounter].reachGoal('ZakazKorzina');

            }
            else yaCounter17471596.reachGoal('ZakazKorzina');
    }
    $("a.more_action").on("click", function(e) {
        $(this).next('a').fadeIn(700);
        $(this).remove();
    });

    $("select.city").on("change", function(e) {
        e.preventDefault();
        var t = new Date;
        t.setMonth(t.getMonth() + 10), $select = $(this).find("option:selected"), console.log($select.data("code")), console.log($select.data("href")), console.log($select), document.cookie = "city=" + $select.data("code") + ";  expires=" + t.toGMTString() + "; path=/;domain=podkova22.ru", document.cookie = "city=" + $select.data("code") + ";  expires=" + t.toGMTString() + "; path=/;domain=.podkova22.ru", location.href = $select.data("href")
    }), $('[data-target="city"]').on("click", "a, .close", function(e) {
        e.preventDefault();
        var t = new Date;
        t.setMonth(t.getMonth() + 10), document.cookie = "city=" + $(this).attr("href") + ";  expires=" + t.toGMTString() + "; path=/;domain=podkova22.ru", document.cookie = "city=" + $(this).attr("href") + ";  expires=" + t.toGMTString() + "; path=/;domain=.podkova22.ru", location.href = $(this).attr("href")
    })
}), $(function() {
    slider();

    if($("#filterMarkaD[data-auto]").length>0) {
        
        clickAutoDisk();
    }
    $('.best-l.autoplay ul').on('init', function(event, slick){       
        var slideHeight = $(event.target ).height();
        $(event.target ).find('li').height( slideHeight-40);
    }).slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        infinite: true,
        arrows: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.best-l:not(.autoplay) ul').on('init', function(event, slick){       
        var slideHeight = $(event.target ).height();
        $(event.target ).find('li').height( slideHeight-40);
    }).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        arrows: true,
        draggable: true
    });


    
    
    function priceform() {
        $(".price-range").each(function() {
            var t = $(this),
                thisMin = eval(t.find(".slide").attr("data-min")),
                thisMax = eval(t.find(".slide").attr("data-max")),
                start = eval(t.find(".slide").attr("data-start")),
                end = eval(t.find(".slide").attr("data-end")),
                step = eval(t.find(".slide").attr("data-step"));
            $(this).find(".slide").slider({
                value: 2e4,
                range: !0,
                min: thisMin,
                max: thisMax,
                step: step,
                values: [start, end],
                slide: function(e, a) {
                    t.find(".input .from").val(a.values[0]), t.find(".input .to").val(a.values[1])
                }
            }), !t.is(".notprice") && thisMin < thisMax && t.find(".min-max .from").text(thisMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб."), !t.is(".notprice") && thisMin < thisMax && t.find(".min-max .to").text(thisMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб."), t.is(".notprice") && thisMin < thisMax && t.find(".min-max .from").text(thisMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")), t.is(".notprice") && thisMin < thisMax && t.find(".min-max .to").text(thisMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")), t.find(".input .from").val(start), t.find(".input .to").val(end), t.find(".input .from").keyup(function() {
                t.find(".slide").slider("values", 0, $(this).val())
            }), t.find(".input .to").keyup(function() {
                t.find(".slide").slider("values", 1, $(this).val())
            }), t.find(".input .from").change(function() {
                $(this).val() < thisMin && $(this).val(thisMin), $(this).val() > $(this).siblings(".to").val() && $(this).val($(this).siblings(".to").val()), t.find(".slide").slider("values", 0, $(this).val())
            }), t.find(".input .to").change(function() {
                $(this).val() > thisMax && $(this).val(thisMax), $(this).val() < $(this).siblings(".from").val() && $(this).val($(this).siblings(".from").val()), t.find(".slide").slider("values", 1, $(this).val())
            })
        })
    }

    function loader() {
        if ($(".rc .pages-e").length > 0 && $(".rc .pages-e").find(".next").length > 0) {
            var e = $(".rc .pages-e").find(".next > a").attr("href");
            e.split("/");
            $(".pages-e").remove(), $(".cost-order").closest(".rc").append('<img id="load" src="/include/load.gif" style="display: block;margin: 100px auto 100px;">'), $.ajax({
                type: "GET",
                url: e,
                success: function(e) {
                    $("#load").remove(), $(".cost-order").closest(".rc").append("" + getBasketHTML(e)), $('input[type="checkbox"]').uniform()
                }
            })
        }
    }

    function scrolling() {
        if ($(".cost-order").closest(".rc").length > 0) {
            $(".cost-order").closest(".rc").height();
            $(document).scrollTop() >= $(".catalog-b").next("div").offset().top - $(window).height() - 20 && $(".rc .pages-e").length > 0 && $(".rc .pages-e").find(".next").length > 0 && loader()
        }
    }

    function infoPosition() {
        $(".custom-page-benefits .core .info").each(function() {
            $(this).css({
                "margin-top": -$(this).outerHeight() / 2 + "px",
                opacity: "1"
            })
        })
    }

    function entryService() {
        executed = !0;
        var e = -1,
            t = $(".sign-i li");
        t.each(function() {
            $(this).find("p span").eq(0).show().addClass("active")
        }), setInterval(function() {
            (e += 1) >= t.size() && (e = 0);
            var a = t.eq(e).find("p span.active").next("span");
            0 == a.length && (a = t.eq(e).find("p span").eq(0)), a.siblings().stop().fadeOut(300).removeClass("active"), setTimeout(function() {
                a.stop().fadeIn(300).addClass("active")
            }, 300)
        }, 2e3)
    }

    function detectDevice() {
        var e = isMobile;
        if (isMobile = $(window).width() < 640, justSwitched = e != isMobile, isMobile) $("#subscribe-float").hide(150);
        else if (getCookie("subscribe"));
        else {
            var t = new Date;
            t.setMonth(t.getMonth() + 2), document.cookie = "subscribe=2;  expires=" + t.toGMTString() + "; path=/;", setTimeout(function() {
                $("#subscribe-float").show(150)
            }, 500)
        }
    }
    setTimeout(function() {
                    $.ajax({
        type: "POST",
        url: "/include/ajax_counter.php?footer=y",
        success: function(e) {
            $(".copy").append(e)
        }
    });
                }, 1500);
    $(".quantity-i input, [name=quantity]").on("change", function(e) {
        var t = e.target,
            a = +$(t).attr("max");
        $(t).val() < 1 ? $(t).val(1) : $(t).val() > a && $(t).val(a)
    });
    var footerHeight = $("footer").height(),
        footerContactsHeight = $("footer .contacts-b .address").height();
    if ($(".calculate-pressure .result > button").on("click", function(e) {
            $(this).siblings(".result-info").is(":visible") ? $(this).siblings(".result-info").fadeOut(25) : $(this).siblings(".result-info").fadeIn(50)
        }), $("footer .map-link a[href='#']").on("click", function(e) {
            e.preventDefault(), detectDevice(), $(this).hasClass("active") ? ($("footer").stop().animate({
                height: footerHeight + "px",
                "margin-top": -footerHeight + "px"
            }, 500), $("div.clear").stop().animate({
                height: footerHeight + "px"
            }, 500), $("footer .contacts-b").stop().animate({
                height: "0"
            }, 500), $("footer .contacts-b .address").stop().animate({
                "margin-top": -footerContactsHeight / 2 + "px"
            }, 500), $(this).removeClass("active"), isMobile && $("footer").removeClass("inmobile")) : ($("footer").stop().animate({
                height: footerHeight + footerContactsHeight + "px",
                "margin-top": -footerHeight - footerContactsHeight + "px"
            }, 500), $("div.clear").stop().animate({
                height: footerHeight + footerContactsHeight + "px"
            }, 500), $("footer .contacts-b").stop().animate({
                height: footerContactsHeight + "px"
            }, 500), $("footer .contacts-b .address").stop().animate({
                "margin-top": "0"
            }, 500), $(this).addClass("active"), isMobile && $("footer").addClass("inmobile"))
        }), $(".filter_new_detail").on("click", "a", function(e) {
            e.preventDefault(), $(this).next("form").trigger("submit")
        }), $(".to-catalog").click(function(e) {
            "/about/certificates/" != $(this).attr("href") && (e.preventDefault(), $(this).prev("ul").find(".hide_brand").removeClass("hide_brand"), $(this).remove())
        }), $(".count>ul").length > 0) var timerId = setInterval(function() {
        $.ajax({
            type: "POST",
            url: "/include/ajax_counter.php",
            success: function(e) {
                $(".count").html("" + getBasketHTML(e))
            }
        })
    }, 6e4);
    if ($(".prod-tabs-one").each(function() {
            $(this).find("a").filter(":eq(0)").click()
        }),  
        setTimeout(function() {
            myFilter(-1);
                }, 1000),
         $(".card-b .tabs .more").on("click", function(e) {
            e.preventDefault();
            var t = $(this).data("more");
            $(this).closest("div").html(t)
        }), $(".slider").bind("swipeleft", function() {
            $(".slider .next").trigger("click")
        }), $(".slider").bind("swiperight", function() {
            $(".slider .prev").trigger("click")
        }), $(window).on("resize", function() {
            slider()
        }), $(".nav-index a").on("click", function(e) {
            e.preventDefault(), $(".slider .pagination li").eq($(this).parent().index()).find("a").trigger("click")
        }), $(".img-bg").each(function() {
            $(this).parent().css({
                background: 'url("' + $(this).attr("src") + '") no-repeat center center',
                "background-size": "cover"
            })
        }), $(window).load(function() {
            $(".nav-index em").each(function() {
                $(this).css({
                    "margin-top": (38 - $(this).outerHeight()) / 2 + "px",
                    opacity: "1"
                })
            }), $(".nav-index ul").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                infinite: !1,
                variableWidth: !0
            });
            var allSlides = $(".nav-index .slick-slide");
            $(".nav-index .slick-slide").on("click", function() {
                var e = $(".nav-index .slick-slide.active")[0],
                    t = $(this)[0],
                    a = ($(e).attr("data-slick-index"), $(t).attr("data-slick-index")),
                    i = Math.round(a / 4);
                $(".nav-index .slick-slider").slick("slickGoTo", i)
            }), $(".slider .prev, .slider .next").on("click", function() {
                setTimeout(function() {
                    var e = $(".slick-slide.active")[0];
                    $(e).trigger("click"), console.log(e)
                }, 550)
            }), $(".sign-i h4 span").each(function() {
                $(this).css({
                    "margin-top": (46 - $(this).outerHeight()) / 2 + "px",
                    opacity: "1"
                })
            }), $(".sign-i").each(function() {
                for (var cols = 4, lines = Math.ceil($(this).find("ul li").size() / cols), i = 0; i <= lines; i++) {
                    for (var max = 0, j = 1; j <= cols; j++) $(this).find("li:nth-of-type(" + eval(i * cols + j) + ")").each(function() {
                        var e = $(this).outerHeight();
                        max = e > max ? e : max
                    });
                    for (var j = 1; j <= cols; j++) $(this).find("li:nth-of-type(" + eval(i * cols + j) + ")").outerHeight(max)
                }
            }), $(".leader-b .group ul li h4 span").each(function() {
                $(this).css({
                    "margin-top": (44 - $(this).outerHeight()) / 2 + "px",
                    opacity: "1"
                })
            }), $(".leader-b .group ul li p span").each(function() {
                $(this).outerHeight() < $(this).parent().outerHeight() && $(this).css({
                    "margin-bottom": $(this).parent().outerHeight() - $(this).outerHeight() - 3 + "px",
                    opacity: "1"
                })
            }), $(".options-add > ul li label, .options-add > ul li p").each(function() {
                $(this).css({
                    "margin-top": (72 - $(this).outerHeight()) / 2 + "px",
                    opacity: "1"
                })
            })
        }), $(".auto-type-nav a").on("click", function(e) {
            e.preventDefault();
            $(this).parent().addClass("active").find("input").prop("checked", !0).closest("li").siblings().removeClass("active").find("input").prop("checked", !1);
           
            if($(this).closest('#filterShiny').length>0) {
                var strn=$(this).find('span p').text();
                if(!strn) strn=$(this).find('span span').text();
                var patternmyn = new RegExp("Лег");
                $checking=true;
                if(!patternmyn.test(strn) ) {
                    $('#filterShiny .season').hide();
                    $('#filterShiny').find('[data-seasonradio] :checked').prop('checked', false); 
                    myFilter(-1);
                }
                else if($('#filterShiny').find('ul.season input:checked').length==0) {
                        $('#filterShiny .season').show();
                        $('#filterShiny').find('.multiply:not(.filter_auto) ul li input:checked').each(function(ind, elem) {
                            $(elem).prop('checked', false).closest('li').removeClass('active');
                        });
                        //console.log($(this).find('input').data('seasons').split(',')[1]);
                        //console.log($(this).find('input').data('seasons').split(',')[0]=='');
                        //console.log('[data-seasonradio="'+$(this).find('input').data('seasons').split(',')[0]==''?$(this).find('input').data('seasons').split(',')[1]:$(this).find('input').data('seasons').split(',')[0]+'"]');
                        $('#filterShiny').find('ul.season li:visible label[data-seasonradio="'+($(this).find('input').data('seasons').split(',')[0]==''?$(this).find('input').data('seasons').split(',')[1]:$(this).find('input').data('seasons').split(',')[0])+'"] [type=radio]').trigger('click').parent('span').addClass('checked');     
                        myFilter(-1);          
                }
                else myFilter(-1);
            }
            
            
        }), $('input[type="checkbox"], input[type="radio"]').uniform(), $('.filter-general .season input[type="radio"]').change(function() {
            1 == $(this).prop("checked") && $(this).parents("li").addClass("active").siblings().removeClass("active"), myFilter(-1)
        }), $('.selection-i .list li input[type="checkbox"]').change(function(e) {
            e.preventDefault(), 1 == $(this).prop("checked") ? $(this).parents("li").addClass("active") : $(this).parents("li").removeClass("active")
        }), $(".selection-i").on("change", '.list li input[type="checkbox"]', function(e) {}), $(".selection-i .type li a").on("click", function(e) {
            e.preventDefault(), $("#" + $(this).parent("li").data("id")).addClass("active").siblings().removeClass("active"), $("form[name=filter]#" + $(this).parent("li").siblings().data("id")).hide(), $("#" + $(this).parent("li").data("id")).show()
        }), $(".selection-i .multiply:not(.filter_auto) li:not(.disabled)").on("click", function(e) {
            e.preventDefault(), $(this).find("input").prop("checked") ? $(this).find("input").prop("checked", !1) : ($(this).closest(".scroll").is(".only") && $(this).closest("li").siblings("li").removeClass("active").find("input").prop("checked", !1), $(this).find("input").prop("checked", !0)), $(this).toggleClass("active"), $class = $(this).closest("ul").data("class"), myFilter($class)
        }), $(".selection-i .multiply.filter_auto ul").on("click", "li", function(e) {
            e.preventDefault(), $(this).find("input").prop("checked") ? $(this).find("input").prop("checked", !1) : ($(this).closest("li").siblings("li").removeClass("active").find("input").prop("checked", !1), $(this).find("input").prop("checked", !0)), $(this).toggleClass("active");
            var t = $(this).parent();
            filterMarka($(this).find("input").attr("name"), $("[data-disk]").length > 0 && $("#filterShiny").length > 0 ? "index" : "", $(this).closest("form#filterMarkaD").length > 0 ? "disk" : "", "", t, false)
        }), $(".selection-i .multiply:not(.filter_auto) li:not(.disabled)").on("clear", function(e) {
            e.preventDefault(), $(this).find("input").prop("checked") ? $(this).find("input").prop("checked", !1) : ($(this).closest(".scroll").is(".only") && $(this).closest("li").siblings("li").removeClass("active").find("input").prop("checked", !1), $(this).find("input").prop("checked", !0)), $(this).toggleClass("active")
        }), $(".scroll").jScrollPane({
            contentWidth: "0px",
            autoReinitialise: !0,
            showArrows: !0,
            mouseWhellSpeed: 10,
            animateScroll: !0,
            animateDuration: 600,
            arrowScrollOnHover: !0
        }), $(".multiply").on("touchmove", function(e) {
            $(this).find(".scroll").hasClass("dropped") && (e.preventDefault(), e.stopPropagation())
        }), priceform(), $(window).on("scroll load", function() {
            $(document).scrollTop() > $("header").height() ? ($("nav").addClass("fixed"), $("header").css({
                "margin-bottom": "70px"
            }), $("#ajaxsearch").siblings(".ajax_search").stop().fadeOut(100)) : ($("nav").removeClass("fixed"), $("header").css({
                "margin-bottom": "0"
            })), scrolling()
        }), $("nav .search").hover(function() {
            var e = $(this);
            setTimeout(function() {
                e.addClass("opened")
            }, 300)
        }, function() {
            var e = $(this);
            "" == $(".nav [type=text]").val() && setTimeout(function() {
                e.removeClass("opened")
            }, 500)
        }), $("nav .search .button").on("click", function() {
            "" != $(this).closest("form").find("[name=q]").val() && $(this).closest("form").submit()
        }), $("nav > ul > li > div").siblings("a").click(function(e) {
            e.preventDefault();
            var t = $(this).parent("li");
            if (detectDevice(), t.is(".current")) setTimeout(function() {
                t.children("div").stop().slideUp(50), $(".sub-nav-bg").stop().fadeOut(50), t.removeClass("current")
            }, 0);
            else if (isMobile) {
                if ($(this).closest("li").find(".scroll").length > 0) {
                    var a = [];
                    a.push($(this).closest("li").find(".scroll").jScrollPane().data().jsp), a.length && $.each(a, function(e) {
                        this.destroy()
                    })
                }
            } else {
                $(this).find(".scroll").jScrollPane({
                    showArrows: !0,
                    autoReinitialise: !0
                }), t.siblings(".current").length > 0 && (t.siblings(".current").children("div").stop().slideUp(0), t.siblings(".current").removeClass("current")), t.children("div").stop().delay(300).slideDown(400, function() {
                    t.addClass("current")
                }), $(".sub-nav-bg").stop().delay(300).fadeIn(400), $(".tip-message").hide(), $(".tip-icon").removeClass("opened"), t.find(".mega-menu>ul>div>div>li:first-child").addClass("sub-active"), $this = t.find(".mega-menu>ul>div>div>li:first-child");
                var i = $this.children("ul");
                i.show().css("top", -1 * parseInt(i.closest(".jspPane").css("top"))), $(".bg").width(532);
                var n = i.outerHeight();
                n < 454 && (n = 454);
                var s = $this.closest("ul"),
                    l = $this.children("ul");
                s.css({
                    "min-height": n + "px"
                }), l.css({
                    "min-height": n + "px"
                }), $this.closest(".jspContainer").addClass("visible_all"), $this.closest(".scroll").addClass("visible_all"), $this.find(".jspContainer").addClass("visible_all"), $this.find(".scroll").addClass("visible_all")
            }
        }), $(".mega-menu .jspContainer").css("height", "455px"), $(document).on("click", "[data-open]", function(e) {
            if (e.preventDefault(), !$(this).hasClass("disabled") > 0) {
                $(".lk-drop").stop().slideUp(250), $(".lk-open").removeClass("opened");
                var t = $('.modal[data-target="' + $(this).attr("data-open") + '"]');
                $(".fade").stop(!0, !0).fadeIn(500);
                var a = $(window).scrollTop() + ($(window).height() - t.outerHeight()) / 2;
                a < $(window).scrollTop() && (a = $(window).scrollTop()), t.css({
                    top: a + "px"
                }).stop(!0, !0).fadeIn(500)
            }
            $(this).is("[data-id]") && ($('[name="oneclickbasket"] [name="realid"], [name="oneclickbasket2"] [name="realid"], [name="oneclickbasket3"] [name="realid"]').remove(), $(this).is('[data-open="one-click2"]') ? $('[name="oneclickbasket2"]').prepend('<input type="hidden" name="realid" value="' + $(this).data("id") + '">') : $(this).is('[data-open="one-click3"]') ? $('[name="oneclickbasket3"]').prepend('<input type="hidden" name="realid" value="' + $(this).data("id") + '">') : $('[name="oneclickbasket"]').prepend('<input type="hidden" name="realid" value="' + $(this).data("id") + '">')), $(this).is("[data-card]") && ($('[name="oneclickbasket"] [name="cardid"]').remove(), $('[name="oneclickbasket"]').prepend('<input type="hidden" name="cardid" value="' + $(this).data("card") + '">')), $(this).is("[data-service]") && $(".zapisservice").find("[name=service]").val($(this).data("service"))
        }), $(".fade, .modal .close").on("click", function(e) {
            e.preventDefault(), $(".fade, .modal").stop(!0, !0).fadeOut(500)
        }), $(".modal .back-link").on("click", function(e) {
            e.preventDefault(), $(this).parents(".modal").find(".close").trigger("click")
        }), $(document).on("click", '[data-open="add-to-basket"]', function(e) {
            if(Ya) {
                var yacounter=Ya.Metrika.counters()[0].id;
                window["yaCounter" + yacounter].reachGoal('AddBasket');
            }
            else yaCounter17471596.reachGoal('AddBasket');
            if (window.dataLayer = window.dataLayer || [], $(this).is(".element-add")) {
                $('[data-target="add-to-basket"] .pic img').attr("src", $(".slides_control [data-preview]:first-child").data("preview")), $("h1").is("shina") ? $('[data-target="add-to-basket"] .pic +p').html("<em>" + $("#rr").html() + "</em> " + $("#mf").html() + " " + $("#ser").html()) : $('[data-target="add-to-basket"] .pic +p').html($("h1").html());
                a = (t = $(this).closest("div").prev("div").prev("ul").children("div").attr("id")).split("_");
                dataLayer.push({
                    ecommerce: {
                        add: {
                            products: [{
                                id: a[2],
                                name: $("h1").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
                                price: $(this).closest("div").prev("div").prev("ul").children("div").html().replace(" руб.", "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, ""),
                                brand: $("#mf").html(),
                                category: $("#ser").is("[type=hidden]") ? $("#ser").val() : $("#ser").html(),
                                quantity: $(this).closest("div").prev("div").find("[name=quantity]").val()
                            }]
                        }
                    }
                }), ga("ec:addProduct", {
                    id: a[2],
                    name: $("h1").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
                    category: $("#ser").is("[type=hidden]") ? $("#ser").val() : $("#ser").html(),
                    brand: $("#mf").html(),
                    price: $(this).closest("div").prev("div").prev("ul").children("div").html().replace(" руб.", "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, ""),
                    quantity: $(this).closest("div").prev("div").find("[name=quantity]").val()
                }), ga("ec:setAction", "add"), ga("send", "event", "Pokupka", "AddBasket", $("h1").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "))
            } else if (e.preventDefault(), $(this).closest(".carousel-e").length > 0) {
                $('[data-target="add-to-basket"] .product-item>a').attr("href", $(this).closest(".item-e").find("h4>a").attr("href")), $('[data-target="add-to-basket"] .pic img').attr("src", $(this).closest(".item-e").find(".pic img").attr("src")), $('[data-target="add-to-basket"] .pic +p').html($(this).closest(".item-e").find("h4>a").html());
                var t = $(this).attr("id");
                if ($(this).is("[href]")) $.ajax({
                    type: "POST",
                    url: $(this).attr("href"),
                    success: function(e) {
                        BX.onCustomEvent("OnBasketChange")
                    }
                }), dataLayer.push({
                    ecommerce: {
                        add: {
                            products: [{
                                id: t,
                                name: $(this).closest(".item-e").find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
                                price: $.trim($(this).prev("p").html().replace('<em class="rouble-icon">r</em>', "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "").replace(/\t{2,}/g, "").replace(" ", "")),
                                quantity: 1,
                                category: $(this).data("category"),
                                brand: $(this).data("brand")
                            }]
                        }
                    }
                }), ga("ec:addProduct", {
                    id: t,
                    name: $(this).closest(".item-e").find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
                    price: $.trim($(this).prev("p").html().replace('<em class="rouble-icon">r</em>', "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "").replace(/\t{2,}/g, "").replace(" ", "")),
                    quantity: 1,
                    category: $(this).data("category"),
                    brand: $(this).data("brand")
                }), ga("ec:setAction", "add"), ga("send", "event", "Pokupka", "AddBasket", $("h1").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "));
                else if ($(this).is(".sametovar")) {
                    a = t.split("_");
                    dataLayer.push({
                        ecommerce: {
                            add: {
                                products: [{
                                    id: a[2],
                                    name: $(this).closest(".item-e").find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
                                    price: $.trim($(this).closest(".item-e").find("p.price").html().replace('<em class="rouble-icon">r</em>', "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "")),
                                    quantity: 1,
                                    category: $(this).data("category"),
                                    brand: $(this).data("brand")
                                }]
                            }
                        }
                    }), ga("ec:addProduct", {
                        id: a[2],
                        name: $(this).closest(".item-e").find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
                        price: $.trim($(this).closest(".item-e").find("p.price").html().replace('<em class="rouble-icon">r</em>', "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "")),
                        quantity: 1,
                        category: $(this).data("category"),
                        brand: $(this).data("brand")
                    }), ga("ec:setAction", "add"), ga("send", "event", "Pokupka", "AddBasket", $("h1").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "))
                } else {
                    a = t.split("_");
                    dataLayer.push({
                        ecommerce: {
                            add: {
                                products: [{
                                    id: a[2],
                                    name: $(this).closest(".item-e").find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
                                    price: $(this).prev("p").html().replace('<em class="rouble-icon">r</em>', "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, ""),
                                    quantity: 1
                                }]
                            }
                        }
                    }), ga("ec:addProduct", {
                        id: a[2],
                        name: $(this).closest(".item-e").find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
                        price: $(this).prev("p").html().replace('<em class="rouble-icon">r</em>', "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, ""),
                        quantity: 1
                    }), ga("ec:setAction", "add"), ga("send", "event", "Pokupka", "AddBasket", $("h1").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "))
                }
            } else {
                $('[data-target="add-to-basket"] .product-item>a').attr("href", $(this).closest("li").find("h4>a").attr("href")), $('[data-target="add-to-basket"] .pic img').attr("src", $(this).closest("li").find(".pic img").attr("src")), $(".list-e").is("shiny") ? $('[data-target="add-to-basket"] .pic +p').html("<em>" + $(this).closest("li").find(".text>p").html() + "</em> " + $(this).parent().find("h4>a").html()) : $('[data-target="add-to-basket"] .pic +p').html($(this).closest("li").find("h4>a").html());
                var a = (t = $(this).attr("id")).split("_");
                dataLayer.push({
                    ecommerce: {
                        add: {
                            products: [{
                                id: a[2],
                                name: $(this).closest("li").find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " ").replace(/[\r\n]/m, ""),
                                price: $.trim($(this).closest("div").prev("p").html().replace('<em class="rouble-icon">r</em>', "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "")),
                                quantity: $(this).prev("[name=quantity]").val() ? $(this).prev("[name=quantity]").val() : 1,
                                brand: $(this).data("brand"),
                                category: $(this).data("category")
                            }]
                        }
                    }
                }), ga("ec:addProduct", {
                    id: a[2],
                    name: $(this).closest("li").find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " ").replace(/[\r\n]/m, ""),
                    price: $.trim($(this).closest("div").prev("p").html().replace('<em class="rouble-icon">r</em>', "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "")),
                    quantity: $(this).prev("[name=quantity]").val() ? $(this).prev("[name=quantity]").val() : 1,
                    brand: $(this).data("brand"),
                    category: $(this).data("category")
                }), ga("ec:setAction", "add"), ga("send", "event", "Pokupka", "AddBasket", $(this).closest("li").find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "))
            }
            $(this).hasClass("disabled") ? e.stopPropagation() : ($(this).addClass("disabled"), $(this).text("В корзине"), $(this).removeAttr("data-open"), $(this).removeClass("contrast"))
        }), $("form.standart input, form.standart textarea").each(function() {
            $(this).val().length > 0 && $(this).parent().addClass("complete").removeClass("focus"), $(this).focusin(function() {
                $(this).parent().addClass("focus")
            }), $(this).focusout(function() {
                $(this).val().length > 0 ? $(this).parent().addClass("complete").removeClass("focus") : $(this).parent().removeClass("focus complete")
            })
        }), $("form.standart").on("click", " p > span", function(e) {
            e.preventDefault(), $(this).siblings("input, textarea").focus()
        }), $("input, textarea").each(function() {
            $(this).data("holder", $(this).attr("placeholder")), $(this).focusin(function() {
                $(this).attr("placeholder", "")
            }), $(this).focusout(function() {
                $(this).attr("placeholder", $(this).data("holder"))
            })
        }), $(".rating-e").each(function() {
            for (var i = 1; i <= 5; i++) $(this).append("<span></span>");
            for (var j = 1; j <= eval($(this).attr("data-current")); j++) $(this).find("span:nth-child(" + j + ")").addClass("active")
        }), $(".price-buttons .quantity").each(function() {
            for (var i = 1; i <= 5; i++) $(this).append("<em></em>");
            for (var j = 1; j <= eval($(this).attr("data-current")); j++) $(this).find("em:nth-child(" + j + ")").addClass("active")
        }), $(".card-b .gallery, .new-e .gallery").each(function() {
            var t = $(this);
            t.slides({
                generatePagination: !0,
                generateNextPrev: !0,
                container: "container",
                effect: "slide",
                slideSpeed: 500,
                slideEasing: "easeInOutQuad",
                play: 1e4,
                pause: 2500
            }), t.find(".pagination li a").each(function() {
                var src = t.find(".container > div > div:nth-child(" + eval($(this).parent().index() + 1) + ")").attr("data-preview");
                $(this).append('<img src="' + src + '" alt="">')
            })
        }), $(".carousel-e .core").slick({
            slidesToShow: 4,
            adaptiveHeight: true,
            slidesToScroll: 1,
            adaptiveHeight: !0,
            infinite: !0,
            arrows: !0,
            draggable: !0
        }), $(".tip-icon").on("click", function(e) {
            e.preventDefault(), $(this).hasClass("opened") ? ($(".tip-message").hide(), $(this).removeClass("opened")) : ($(".tip-message").html($(this).attr("data-html")).css({
                left: $(this).offset().left + "px",
                top: $(this).offset().top - $(".tip-message").outerHeight() + "px"
            }).show(), $(".tip-icon").removeClass("opened"), $(this).addClass("opened")), $(".lk-drop").hide()
        }), $("html").click(function(e) {
            $(".tip-message, .lk-drop").hide(), $(".tip-icon").removeClass("opened");
            var t = $(".ajax_search"),
                a = $("#ajaxsearch");
            t.is(e.target) || 0 !== t.has(e.target).length || a.is(e.target) || 0 !== a.has(e.target).length || $(".ajax_search").stop().fadeOut(100);
            var i = $(".lk-drop-ul");
            i.is(e.target) || 0 !== i.has(e.target).length || $(".lk-drop-ul").is(":visible") && ($(".lk-drop-ul").stop().slideToggle(250), $(".lk").toggleClass("opened"));
            var n = $(".mega-menu:visible");
            !n.is(e.target) && 0 === n.has(e.target).length && $("nav li.current").length > 0 && ($("nav li.current").children("div").stop().slideUp(50), $(".sub-nav-bg").stop().fadeOut(50), $("nav li.current").removeClass("current"));
            var s = $(".calculate-pressure .result-info:visible"),
                l = $(".calculate-pressure .result > button");
            !l.is(e.target) && 0 === l.has(e.target).length && !s.is(e.target) && 0 === s.has(e.target).length && $(".calculate-pressure .result-info").length > 0 && $(".calculate-pressure .result-info").stop().fadeOut(30)
        }), $(".tip-icon, .tip-message, .lk-drop, header .lk").on("click", function(e) {
            e.stopPropagation()
        }), $(".contacts-b .address .nav ul li").on("click", function(e) {
            $(this).addClass("active").siblings().removeClass("active")
        }), $(".page-custom-map .core ul li").on("click", function(e) {
            $(this).addClass("active").siblings().removeClass("active")
        }), $(".quantity-i em.minus").click(function(e) {
            e.preventDefault();
            var t = $(this).parent().find("input"),
                a = parseInt(t.val()) - 1;
            a = a < 1 ? 1 : a, t.val(a), t.change()
        }), $(".quantity-i em.plus").click(function(e) {
            e.preventDefault();
            var t = $(this).parent().find("input"),
                a = parseInt(t.attr("max"));
            $(this).parent().find(".err_step").remove(), a >= parseInt(t.val()) + 1 ? (t.val(parseInt(t.val()) + 1), t.change()) : $(this).parent().prepend('<em class="err_step">доступное количество товара - ' + a + "</em>")
        }), $("header .lk a").on("click", function(e) {
            e.preventDefault(), $(".lk-drop").is(":hidden") ? $(".lk-drop").stop().slideDown(0) : $(".lk-drop").stop().slideUp(0), $(".tip-message").hide()
        }), $(".custom-page-benefits .nav p span").each(function() {
            $(this).css({
                "margin-top": (46 - $(this).outerHeight()) / 2 + "px"
            })
        }), $(".custom-page-benefits .nav li a").on("click", function(e) {
            e.preventDefault(), $(".custom-page-benefits .pagination li").eq(eval($(this).parent().index())).find("a").trigger("click")
        }), $(".custom-page-benefits .core").slides({
            generatePagination: !0,
            generateNextPrev: !0,
            container: "container",
            effect: "slide",
            slideSpeed: 500,
            slideEasing: "easeInOutQuad",
            play: 1e4,
            pause: 2500,
            slidesLoaded: function() {
                infoPosition();
                var e = $(".custom-page-benefits .pagination li.current").index();
                $(".custom-page-benefits .nav li").eq(e).addClass("active").siblings().removeClass("active")
            },
            animationStart: function() {
                $(".custom-page-benefits .core .info").css({
                    opacity: "0"
                })
            },
            animationComplete: function() {
                infoPosition();
                var e = $(".custom-page-benefits .pagination li.current").index();
                $(".custom-page-benefits .nav li").eq(e).addClass("active").siblings().removeClass("active")
            }
        }), $(".custom-page-benefits .core").bind("swipeleft", function() {
            $(".custom-page-benefits .core .next").trigger("click")
        }), $(".custom-page-benefits .core").bind("swiperight", function() {
            $(".custom-page-benefits .core .prev").trigger("click")
        }), $(".custom-service .gallery > div").length > 0 && $(".custom-service .gallery > div").masonry({
            columnWidth: 235,
            gutter: 5,
            itemSelector: ".item"
        }), $(function() {
            var e = 0;
            $(".custom-catalog .list li").each(function() {
                var t = $(this).height();
                e = t > e ? t : e
            }), $(".custom-catalog .list li").height(e)
        }), ($(".list-content .item-s-slider ul").length > 0 || $(".list-content .banner-s ul").length > 0) && $(".list-content .item-s-slider ul, .list-content .banner-s ul").jcarousel({
            scroll: 1,
            animation: 500,
            slideEasing: "easeInOutQuad",
            wrap: "circular"
        }), $(function() {
            $(".mega-menu li > ul").each(function() {
                $(this).siblings("a").append('<span class="arrow"></span>')
            });
            $(".mega-menu .bg");
            var e = 0,
                t = 0;
            $(".mega-menu > ul > li > ul, .mega-menu > ul >div>div > li > ul").parent().on("mouseenter", function() {
                $(this).siblings().removeClass("sub-active");
                var t = $(this).children("ul");
                console.log(t.closest(".jspPane").css("top")), t.show().css("top", -1 * parseInt(t.closest(".jspPane").css("top"))), $(".bg").width(532), (e = t.outerHeight()) < 454 && (e = 454);
                var a = $(this).closest("ul"),
                    i = $(this).children("ul");
                a.css({
                    "min-height": e + "px"
                }), i.css({
                    "min-height": e + "px"
                }), $(this).closest(".jspContainer").addClass("visible_all").find(".jspContainer").addClass("visible_all"), $(this).closest(".scroll").addClass("visible_all").find(".scroll").addClass("visible_all")
            }), $(".mega-menu > ul > li > ul, .mega-menu > ul >div>div > li > ul").parent().on("mouseleave", function() {
                $(this).children("ul").hide().css("top", 0), $(".bg").width(859);
                var e = $(this).closest("ul"),
                    t = $(this).children("ul");
                e.css({
                    "min-height": "454px"
                }), t.css({
                    "min-height": "0"
                })
            }), $(".mega-menu > ul > li > ul > li > ul, .mega-menu > ul >div>div > li > ul >div>div > li > ul").parent().on("mouseenter", function() {
                var a = $(this).children("ul");
                console.log(a.closest(".jspPane").css("top")), a.show().css("top", -1 * parseInt(a.closest(".jspPane").css("top"))), $(".bg").width(0), (t = a.outerHeight()) < e && (t = e);
                var i = $(this).closest("ul").closest("ul"),
                    n = $(this).closest("ul"),
                    s = $(this).children("ul");
                $(this).closest(".jspContainer").addClass("visible_all").closest(".jspContainer").addClass("visible_all"), $(this).closest(".scroll").addClass("visible_all").closest(".scroll").addClass("visible_all"), i.css({
                    "min-height": t + "px"
                }), n.css({
                    "min-height": t + "px"
                }), s.css({
                    "min-height": t + "px"
                })
            }), $(".mega-menu > ul > li > ul > li > ul, .mega-menu > ul >div>div > li > ul >div>div > li > ul").parent().on("mouseleave", function() {
                $(this).children("ul").hide().css("top", 0), $(".bg").width(532);
                var t = $(this).closest("ul").closest("ul"),
                    a = $(this).closest("ul"),
                    i = $(this).children("ul");
                t.css({
                    "min-height": e + "px"
                }), a.css({
                    "min-height": e + "px"
                }), i.css({
                    "min-height": "0"
                })
            })
        }), $(".about-b").length > 0 && $(".about-b .bigtire").length>0 && ($(window).bind("scroll", function() {
            var e, t = $(".about-b .bigtire"),
                a = t.find(".bg").attr("height") - t.outerHeight(),
                i = t.find(".big").attr("height");
            e = $(document).scrollTop() < t.offset().top - $(window).height() ? 0 : $(document).scrollTop() >= t.offset().top - $(window).height() && $(document).scrollTop() <= t.offset().top + t.height() - 71 - $(window).height() / 2 ? ($(document).scrollTop() - t.offset().top + $(window).height()) / (t.height() - 71 + $(window).height() / 2) : 1, t.find(".bg").css({
                top: -e * a + "px"
            }), t.find(".big").css({
                "margin-top": -e * i + "px"
            })
        }), $(window).trigger("scroll"), $(".about-b .benefits ul li h5 span").each(function() {
            $(this).outerHeight() < 36 && $(this).css({
                "padding-top": (36 - $(this).outerHeight()) / 2 + "px"
            })
        })), $(".about-b .goals .core .nav li a").on("click", function(e) {
            e.preventDefault(), $(this).parent().addClass("active").siblings().removeClass("active")
        }), $(".sign-i").length > 0) {
        var executed = !1;
        $(window).on("scroll", function() {
           if($(".sign-i p").length>0) $(document).scrollTop() > $(".sign-i p").offset().top - $(window).height() && 0 == executed && entryService()
        }), $(window).trigger("scroll")
    }
    $(".about-b .goals .core .nav li a").on("click", function(e) {
        e.preventDefault(), $(this).parents(".nav").siblings('[data-tab="' + $(this).attr("href") + '"]').show().siblings("[data-tab]").hide(), $(this).parent().addClass("active").siblings().removeClass("active")
    }).filter(":first").click();
    var isMobile = !1,
        justSwitched = !1;
    $(window).on("resize load", function() {
        detectDevice(), justSwitched && (isMobile ? ($(".nav.prod-tabs-one a").each(function() {
            "Аккумуляторы" == $(this).text() && $(this).text("АКБ")
        }), $("header > div").append('<span class="logo-m"><a href="/"></a></span>'), $("header > div").append('<span class="menu-open"></span>'), $(".selection-i").detach().insertAfter("nav"), $(".selection-i .title").detach().insertBefore(".selection-i .nav"), $(".auto-type-nav").each(function(e, t) {
            $(t).before('<p class="auto-type-nav-select"><span>Выберите тип ТС</span></p>')
        }), $(".auto-type-nav-select").on("click", function() {
            $(this).toggleClass("active").next().toggleClass("dropped")
        }), $(".auto-type-nav a").on("click", function() {
            $(this).parents("ul").removeClass("dropped").prev().removeClass("active").find("span").text($(this).text())
        }), $(".selection-i .multiply").each(function() {
            $(this).append("<h6><span>Выберите</span></h6>")
        }),
        $(".selection-i .multiply").each(function() {
            var r ='';
            $(this).find(".active").each(function() {
                r = r + $(this).text() + ", "
            });
            if(r) {
                r = r.slice(0, -2);    
                $(this).find("h6 span").text(r);
            }
        }),
        $(".selection-i .multiply h6").on("click", function() {
            if ($(this).hasClass("active")) e = !0;
            else var e = !1;
            $(".selection-i .multiply h6").removeClass("active"), $(".selection-i .multiply .scroll").removeClass("dropped"), e || $(this).toggleClass("active").siblings(".scroll").addClass("dropped")
        }), $(".selection-i .multiply ul li").on("click", function() {
            var e = "",
                t = $(this).parent();
            t.find(".active").length > 0 ? (t.find(".active").each(function() {
                e = e + $(this).text() + ", "
            }), e = e.slice(0, -2)) : e = "Выберите", t.parents(".multiply").find("h6 span").text(e)
        }), $("body, html").click(function() {
            $(".selection-i .multiply h6").removeClass("active"), $(".selection-i .multiply .scroll").removeClass("dropped")
        }), $(".selection-i .multiply h6, .selection-i .multiply .scroll").click(function(e) {
            e.stopPropagation()
        }), $(".price-range:not(.notprice)").after('<h6 class="more"><span>Еще</span></h6>'), $(".selection-i .clear").each(function(e, t) {
            $pr = $(t).closest(".controls").find("button"), $(t).detach().insertAfter($pr)
        }), $(".selection-i h6.more").on("click", function() {
            $(this).hide().siblings(".list").addClass("dropped")
        }), $(".leader-n .recommend").detach().insertAfter(".leader-n .count"), $(".description-b.minify").append('<h6 class="more"><span>Еще</span></h6>'), $(".description-b.minify .more").on("click", function() {
            $(this).hide().siblings("div").addClass("dropped")
        }), $(".sign-i h4").on("click", function() {
            $(this).siblings("button").trigger("click")
        }), $("footer").append('<span class="go-up"></span>'), $(".go-up").on("click", function() {
            $("html, body").stop().animate({
                scrollTop: 0
            }, 1e3)
        }), $(".mega-menu > ul > li > a, .mega-menu > ul >div>div > li > a").on("click", function(e) {
            if ($(this).children(".arrow").length) {
                e.preventDefault(), $(this).parent().toggleClass("dropped");
                var t = [];
                t.push($(this).closest("li").find(".scroll").jScrollPane().data().jsp), t.length && $.each(t, function(e) {
                    this.destroy()
                })
            }
        }), $("nav > ul > li").each(function() {
            $(this).children("div").length && $(this).addClass("has-sub")
        }), $("nav > ul > li.has-sub > a").on("click", function(e) {
            e.preventDefault(), $(this).parent().toggleClass("dropped")
        }), $("header .nav").on("click", function() {
            $copy = $(this).clone(), $(this).closest("header").addClass("hideHnav"), $copy.addClass("copy_nav").insertBefore("header")
        }), $("header .menu-open").on("click", function() {
            $(this).hasClass("active") ? ($(".wrapper > *, footer").show(), $("nav").hide(), $("header").removeClass("dark")) : ($(".wrapper > *").hide().siblings("header, nav").show(), $("footer").hide(), $("header").addClass("dark")), $(this).toggleClass("active")
        }), $(".lk-nav").prepend('<h6 class="drop"><span>' + $(".lk-nav").find("li.active").text() + "</span></h6>"), $(".lk-nav h6").on("click", function() {
            $(this).siblings("ul").toggleClass("dropped"), $(this).toggleClass("active")
        }), $(".order-table table th[data-mob], .order-table table th[data-mob]").each(function() {
            var e = $(this).text();
            $(this).parents("table").find("td").eq($(this).index()).each(function() {
                $(this).prepend("<label>" + e + ":</label> ")
            })
        }), $(".nav-inner .type, .nav-inner .sort").each(function() {
            $(this).before('<h6 class="drop"><span>' + $(this).find(".active").text() + "</span></h6>")
        }), $(".card-b .lc .group").detach().insertAfter(".card-b .tabs"), $(".card-b .price-buttons").detach().insertBefore(".card-b .core .desc"), $(".card-b .tabs .nav").before('<h6 class="drop"><span>' + $(".card-b .tabs .nav .active").text() + "</span></h6>"), $(".nav-inner .drop, .card-b .tabs h6.drop").on("click", function() {
            $(this).next().toggleClass("dropped"), $(this).toggleClass("active")
        }), $(".custom-catalog .list li h3").on("click", function(e) {
            e.preventDefault(), $(this).closest("li").toggleClass("active")
        }), $(".calculator-intro table td:nth-child(2), .calculator-intro table td:nth-child(3)").each(function() {
            $(this).prepend("<strong>" + $(this).parents("table").find("th").eq($(this).index()).text() + "</strong>")
        }), $(".calc-result table td:nth-child(2), .calc-result table td:nth-child(3), .calc-result table td:nth-child(4)").each(function() {
            $(this).find("input").length ? $(this).prepend("<strong>" + $(this).parents("table").find("th").eq($(this).index()).text() + "</strong>") : $(this).hide()
        })) : ($(".nav.prod-tabs-one a").each(function() {
            "АКБ" == $(this).text() && $(this).text("Аккумуляторы")
        }), $(".menu-open, header .logo-m, .auto-type-nav-select, .multiply h6, .selection-i .more, .description-b .more, footer .go-up, .lk-nav .drop, .order-table table td label, .order-table table label, .card-b .tabs h6.drop, .calculator-intro table td strong, .calc-result table td strong").remove(), $(".selection-i").detach().insertAfter(".sign-i"), $(".selection-i .title").detach().insertAfter(".selection-i .nav"), $(".selection-i .clear").detach().insertBefore(".selection-i .controls button"), $(".leader-n .recommend").detach().insertBefore(".leader-n .count"), $(".card-b .lc .group").detach().insertAfter(".card-b .gallery"), $(".card-b .price-buttons").detach().appendTo(".price-buttons__wrapper")))
    }), $(window).trigger("resize"), $(".wholesale-b .programs .brands").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: !0,
        arrows: !0,
        draggable: !0
    })
}), $("form[name=writeservice]").on("submit", function() {
    var e = 0;
    
    	
    
    return $(this).find("[type=text], textarea").each(function(t, a) {
        //"" == $(a).val() ? ($(a).parent("p").addClass("error"), e++) : $(a).parent("p").removeClass("error")
        if($(a).attr('name')=='email') {
            !isValidEmailAddress($(a).val()) ? ($(a).parent("p").addClass("error"), e++) : $(a).parent("p").removeClass("error");
        }
        else {
        	if($(a).attr('name')=='phone') {
        		var str=$(a).val();
				var i=str.length-str.replace(/\d/gm,'').length; 
				i<11 ? ($(a).parent("p").addClass("error"), e++) : $(a).parent("p").removeClass("error");
        	}
         else "" == $(a).val() ? ($(a).parent("p").addClass("error"), e++) : $(a).parent("p").removeClass("error")   
        }
    }), $(this).find(".rules_1").length > 0 && ($(this).find(".rules_1").prop("checked") ? $(this).find(".rules_1").closest("p").css("font-weight", "") : ($(this).find(".rules_1").closest("p").css("font-weight", "bold"), e++)), 

    0 == e && $.ajax({
        data: {
            local: $(this).find("[name=local]").val(),
            email: $(this).find("[name=email]").val(),
            phone: $(this).find("[name=phone]").val(),
            name: $(this).find("[name=name]").val(),
            web: $(this).find("[name=web]").val(),
            service: $(this).find("[name=service]").val(),
            label: "service"
        },
        type: "POST",
        url: "/include/ajax.php",
        success: function(e) {
            yaCounter17471596.reachGoal('Servis');
            $("form[name=writeservice]").prev("p").remove(), $("form[name=writeservice]").find("[type=text], textarea").each(function(e, t) {
                $(t).val("")
            }), $("form[name=writeservice]").parent("div").find("h4").after("<p>" + e + "</p>"), setTimeout(function() {
                $("form[name=writeservice]").parent("div").find("h4").next("p").remove()
            }, 3e3)
        }
    }), !1
}), $("form[name=callme]").on("submit", function() {
    var e = 0;
    return $(this).find("[type=text]").each(function(t, a) {
        if($(a).attr('name')=='email') {
            !isValidEmailAddress($(a).val()) ? ($(a).parent("p").addClass("error"), e++) : $(a).parent("p").removeClass("error");
        }
        else {

        	if($(a).attr('name')=='phone') {
        		var str=$(a).val();
				var i=str.length-str.replace(/\d/gm,'').length; 
				i<11 ? ($(a).parent("p").addClass("error"), e++) : $(a).parent("p").removeClass("error");
        	}
         else
         	"" == $(a).val() ? ($(a).parent("p").addClass("error"), e++) : $(a).parent("p").removeClass("error")
     }
    }), $(this).find(".rules_1").length > 0 && ($(this).find(".rules_1").prop("checked") ? $(this).find(".rules_1").closest("p").css("font-weight", "") : ($(this).find(".rules_1").closest("p").css("font-weight", "bold"), e++)), 0 == e && $.ajax({
        data: {
            email: $(this).find("[name=email]").val(),
            phone: $(this).find("[name=phone]").val(),
            name: $(this).find("[name=name]").val(),
            label: "callme"
        },
        type: "POST",
        url: "/include/ajax.php",
        success: function(e) {
            if(Ya) {
                var yacounter=Ya.Metrika.counters()[0].id;
                window["yaCounter" + yacounter].reachGoal('callback');
            }
            else yaCounter17471596.reachGoal('callback');
            $("form[name=callme]").prev("p").remove(), $("form[name=callme]").remove(), $("[data-target=call-me] h4").after("<p>" + e + "</p>"), $(this).find("[type=text]").each(function(e, t) {
                $(t).val("")
            })
        }
    }), !1
}), $("form[name=subscribe]").on("submit", function() {
    var e = 0;
    return "" == $(this).find("[name=email]").val() && e++, $(this).find(".rules_1").length > 0 && ($(this).find(".rules_1").prop("checked") ? $(this).find(".rules_1").closest("p").css("font-weight", "") : ($(this).find(".rules_1").closest("p").css("font-weight", "bold"), e++)), 0 == e && $.ajax({
        data: {
            email: $(this).find("[name=email]").val(),
            label: "subscribe"
        },
        type: "POST",
        url: "/include/ajax.php",
        success: function(e) {
            if(Ya) {
                var yacounter=Ya.Metrika.counters()[0].id;
                window["yaCounter" + yacounter].reachGoal('Akzii');

            }
            else yaCounter17471596.reachGoal('Akzii');
            $("#sub-success").remove(), $("form[name=subscribe]").find("[name=email]").before('<p id="sub-success">' + e + "</p>"), $("form[name=subscribe]").find("[name=email]").val("")
        }
    }), !1
}), $("form[name=corporate]").on("submit", function() {
    $("#re").remove();
    var e = 0;
    			var str=$(this).find("[name=phone]").val();
				var i=str.length-str.replace(/\d/gm,'').length; 
				if(i<11) e++;
    return "" != $(this).find("[name=email]").val() && "" != $(this).find("[name=phone]").val() || e++, "" == $(this).find("[name=name]").val() && e++, $(this).find(".rules_1").length > 0 && ($(this).find(".rules_1").prop("checked") ? $(this).find(".rules_1").closest("p").css("font-weight", "") : ($(this).find(".rules_1").closest("p").css("font-weight", "bold"), e++)), 0 == e ? $.ajax({
        data: {
            email: $(this).find("[name=email]").val(),
            phone: $(this).find("[name=phone]").val(),
            name: $(this).find("[name=name]").val(),
            label: "corporate"
        },
        type: "POST",
        url: "/include/ajax.php",
        success: function(e) {
            $("form[name=corporate]").find("[name=email]").after('<p id="re">' + e + "</p>"), $("form[name=corporate]").find("[type=text]").val("")
        }
    }) : $("form[name=corporate]").find("[name=email]").after('<p id="re">Заполнены не все поля</p>'), !1
}), $("form[name=oneclickbasket]").on("submit", function() {
    var e = 0;
    var str=$(this).find("[name=phone]").val();
	var iphone=str.length-str.replace(/\d/gm,'').length; 
				

    if ("" == $(this).find("[name=name]").val() ? (e++, $(this).find("[name=name]").parent("p").addClass("error")) : $(this).find("[name=name]").parent("p").removeClass("error"), iphone<11 ? (e++, $(this).find("[name=phone]").parent("p").addClass("error")) : $(this).find("[name=phone]").parent("p").removeClass("error"), !isValidEmailAddress( $(this).find("[name=email]").val() )? (e++, $(this).find("[name=email]").parent("p").addClass("error")) : $(this).find("[name=email]").parent("p").removeClass("error"), $(this).find(".rules_1").length > 0 && ($(this).find(".rules_1").prop("checked") ? $(this).find(".rules_1").closest("p").css("font-weight", "") : ($(this).find(".rules_1").closest("p").css("font-weight", "bold"), e++)), 0 == e) {
        window.dataLayer = window.dataLayer || [], window.products = [];
        var t = new Date;
        if ($(this).find('[name="cardid"]').length > 0) a = (a = "<b>Товар для заказа:</b><br>") + $("h1").html() + " - " + $(".rc .price").html() + "<br><br>", ga("ec:addProduct", {
            id: $(this).find('[name="cardid"]').val(),
            name: $("h1").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " ").replace(/[\r\n]/m, ""),
            price: $.trim($(".rc .price").html().replace(" руб.", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "").replace("r", "").replace(" ", "")),
            quantity: 1,
            brand: $("#mf").html(),
            category: $("#ser").is("[type=hidden]") ? $("#ser").val() : $("#ser").html()
        }), products.push({
            id: $(this).find('[name="cardid"]').val(),
            name: $("h1").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " ").replace(/[\r\n]/m, ""),
            price: $.trim($(".rc .price").html().replace(" руб.", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "").replace("r", "").replace(" ", "")),
            quantity: 1,
            brand: $("#mf").html(),
            category: $("#ser").is("[type=hidden]") ? $("#ser").val() : $("#ser").html()
        });
        else if (0 == $(this).find('[name="realid"]').length) {
            var a = "<b>Товары для заказа:</b><br>";
            
            if ($(".card-b").length > 0 && $(".card-b").parent().is(':not(.compare_add)')) {
                a = a + $("h1").html() + " - " + $(".price").parent().next("div").html() + "<br><br>";
                var i = (n = $(".card-b").find(".controls").find('[type="hidden"]').attr("id")).split("_");
                ga("ec:addProduct", {
                    id: i[2],
                    name: $("h1").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
                    price: $(".price").parent().next("div").html().replace(" руб.", "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "")
                }), products.push({
                    id: i[2],
                    name: $("h1").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
                    price: $(".price").parent().next("div").html().replace(" руб.", "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "")
                })
            } else $(".order-table table tbody tr").each(function(e, t) {
                a = a + (e + 1) + ") " + $(t).find("td[data-id=name] h3 a").html() + ": " + $(t).find('[id=basket_quantity_control] [type="text"]').val() + " шт. (по цене " + $(t).find("td#current_price_" + $(t).attr("id")).html() + " за шт)<br><br>", ga("ec:addProduct", {
                    id: $(t).find(".remove a").data("id"),
                    name: $(t).find("td[data-id=name] h3 a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
                    price: $(t).find("td#current_price_" + $(t).attr("id")).html().replace(" руб.", "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, ""),
                    quantity: $(t).find('[id=basket_quantity_control] [type="text"]').val(),
                    brand: $(t).find("[data-id=name]").find("h3").find("[data-brand]").data("brand"),
                    category: $(t).find("[data-id=name]").find("h3").find("[data-category]").data("category")
                }), products.push({
                    id: $(t).find(".remove a").data("id"),
                    name: $(t).find("td[data-id=name] h3 a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
                    price: $(t).find("td#current_price_" + $(t).attr("id")).html().replace(" руб.", "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, ""),
                    quantity: $(t).find('[id=basket_quantity_control] [type="text"]').val(),
                    brand: $(t).find("[data-id=name]").find("h3").find("[data-brand]").data("brand"),
                    category: $(t).find("[data-id=name]").find("h3").find("[data-category]").data("category")
                })
            }), a = a + "<b>ИТОГО:</b> " + $("#allSum_FORMATED").html()
        } else {
            var n = $(this).find('[name="realid"]').val(),
                s = n.split("_");
            a = (a = "<b>Товар для заказа:</b><br>") + $("li#" + $(this).find('[name="realid"]').val()).find("h4>a").html() + " - " + $("li#" + $(this).find('[name="realid"]').val()).find(".price").html() + "<br><br>", ga("ec:addProduct", {
                id: s[2],
                name: $("li#" + $(this).find('[name="realid"]').val()).find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " ").replace(/[\r\n]/m, ""),
                price: $.trim($("li#" + $(this).find('[name="realid"]').val()).find(".price").html().replace(" руб.", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "").replace("r", "").replace(" ", "")),
                quantity: 1,
                brand: $("li#" + $(this).find('[name="realid"]').val()).find("button").data("brand"),
                category: $("li#" + $(this).find('[name="realid"]').val()).find("button").data("category")
            }), products.push({
                id: s[2],
                name: $("li#" + $(this).find('[name="realid"]').val()).find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " ").replace(/[\r\n]/m, ""),
                price: $.trim($("li#" + $(this).find('[name="realid"]').val()).find(".price").html().replace(" руб.", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "").replace("r", "").replace(" ", "")),
                quantity: 1,
                brand: $("li#" + $(this).find('[name="realid"]').val()).find("button").data("brand"),
                category: $("li#" + $(this).find('[name="realid"]').val()).find("button").data("category")
            })
        }
        
        if(Ya) {
                var yacounter=Ya.Metrika.counters()[0].id;
                window["yaCounter" + yacounter].reachGoal('post-fastbuy');
            }
            else yaCounter17471596.reachGoal('post-fastbuy');

        ga("ec:setAction", "purchase", {
            id: "live-" + t.toLocaleDateString() + "-" + t.toLocaleTimeString(),
            affiliation: "PODKOVA22.RU"
        }), ga("send", "event", "Pokupka", "v1click", "Заказ товаров в 1 клик"), dataLayer.push({
            ecommerce: {
                purchase: {
                    actionField: {
                        id: "live-" + t.toLocaleDateString() + "-" + t.toLocaleTimeString()
                    },
                    products: products
                }
            }
        }), $.ajax({
            data: {
                str: a,
                phone: $(this).find("[name=phone]").val(),
                email: $(this).find("[name=email]").val(),
                name: $(this).find("[name=name]").val(),
                label: "oneclickbasket"
            },
            type: "POST",
            url: "/include/ajax.php",
            success: function(e) {
                $("#sub-success").remove(), $("form[name=oneclickbasket]").find(".one-click-benefits").before('<p id="sub-success" style="position: relative;">' + e + "</p>"), $("form[name=oneclickbasket]").find("[name=email], [name=name], [name=phone]").val(""), setTimeout(function() {
                    $(".fade").trigger("click")
                }, 3e3)
            }
        })
    }
    return !1
}), $("form[name=oneclickbasket2]").on("submit", function() {
    var e = 0;
    var str=$(this).find("[name=phone]").val();
	var iphone=str.length-str.replace(/\d/gm,'').length; 

    if ("" == $(this).find("[name=name]").val() ? (e++, $(this).parent("p").addClass("error")) : $(this).parent("p").removeClass("error"),
     iphone<11 ? (e++, $(this).parent("p").addClass("error")) : $(this).parent("p").removeClass("error"),
      !isValidEmailAddress($(this).find("[name=email]").val()) ? (e++, $(this).parent("p").addClass("error")) : $(this).parent("p").removeClass("error"), 0 == e) {
        var t = new Date;
        window.products = [], window.dataLayer = window.dataLayer || [];
        if(Ya) {
                var yacounter=Ya.Metrika.counters()[0].id;
                window["yaCounter" + yacounter].reachGoal('post-fastbuy');
            }
            else yaCounter17471596.reachGoal('post-fastbuy');
        var a = "<b>Товар для заказа:</b><br>";
        a = a + $("[data-lid=" + $(this).find('[name="realid"]').val() + "]").html() + " - " + $("[data-lid=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find(".price").html() + "<br><br>", ga("ec:addProduct", {
            id: $(this).find('[name="realid"]').val(),
            name: $("[data-lid=" + $(this).find('[name="realid"]').val() + "]").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
            price: $.trim($("[data-lid=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find(".price").html().replace(" руб.", "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "").replace("r", "")),
            quantity: 1,
            brand: $("[data-lid=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find("button").data("brand"),
            category: $("[data-lid=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find("button").data("category")
        }), products.push({
            id: $(this).find('[name="realid"]').val(),
            name: $("[data-lid=" + $(this).find('[name="realid"]').val() + "]").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
            price: $.trim($("[data-lid=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find(".price").html().replace(" руб.", "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "").replace("r", "")),
            quantity: 1,
            brand: $("[data-lid=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find("button").data("brand"),
            category: $("[data-lid=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find("button").data("category")
        }), ga("ec:setAction", "purchase", {
            id: "livelive-" + t.toLocaleDateString() + "-" + t.toLocaleTimeString(),
            affiliation: "PODKOVA22.RU"
        }), ga("send", "event", "Pokupka", "v1click", "Заказ товаров в 1 клик"), dataLayer.push({
            ecommerce: {
                purchase: {
                    actionField: {
                        id: "live-" + t.toLocaleDateString() + "-" + t.toLocaleTimeString()
                    },
                    products: products
                }
            }
        }), $.ajax({
            data: {
                str: a,
                phone: $(this).find("[name=phone]").val(),
                email: $(this).find("[name=email]").val(),
                name: $(this).find("[name=name]").val(),
                label: "oneclickbasket"
            },
            type: "POST",
            url: "/include/ajax.php",
            success: function(e) {
                $("#sub-success").remove(), $("form[name=oneclickbasket2]").find(".one-click-benefits").before('<p id="sub-success" style="position: relative;">' + e + "</p>"), $("form[name=oneclickbasket2]").find("[name=email], [name=name], [name=phone]").val(""), setTimeout(function() {
                    $(".fade").trigger("click")
                }, 3e3)
            }
        })
    }
    return !1
}),
$(document).on('click', '#want_buy_send', function() {
    $this=$(this).closest('.list-e');
    var err=0;
    if($this.find('#unavailable').prop('checked'))
        $this.find('[for=unavailable]').css('font-weight', '');
    else {
        err++;
        $this.find('[for=unavailable]').css('font-weight', 'bold');
    }
    var stroka='';
    $this.find('input').each(function() {
        stroka=$(this).val()+'';

        if(!($(this).val()!=''&&!/^\s+$/.test(stroka)) || ( !isValidEmailAddress($(this).val()) && $(this).attr('name')=='email')) {
            err++;
            $(this).css('border-color','red');
        }
        else {
            $(this).css('border-color', '');
        }
    });
    if(err==0) {
            $.ajax({
                data: {label:'unavailable', fio:$this.find('[name=FIO]').val(), phone:$this.find('[name=PHONE]').val(), email:$this.find('[name=email]').val(), comment:$this.find('[name=comment]').val()},
                type: "POST",
                url: '/include/ajax.php', 
                success: function(data) { 
                    $this.find('[type=text]:not([readonly]), textarea').each(function() {$(this).val('');});
                    $this.find('.order_un').html(data);
                }
            });
        }
}),$("form[name=oneclickbasket3]").on("submit", function() {
    if(Ya) {
                var yacounter=Ya.Metrika.counters()[0].id;
                window["yaCounter" + yacounter].reachGoal('post-fastbuy');
            }
            else yaCounter17471596.reachGoal('post-fastbuy');
    var e = 0;
    var str=$(this).find("[name=phone]").val();
	var iphone=str.length-str.replace(/\d/gm,'').length; 
    if ("" == $(this).find("[name=name]").val() ? (e++, $(this).parent("p").addClass("error")) : $(this).parent("p").removeClass("error"),
     iphone<11 ? (e++, $(this).parent("p").addClass("error")) : $(this).parent("p").removeClass("error"),
     !isValidEmailAddress( $(this).find("[name=email]").val() )? (e++, $(this).parent("p").addClass("error")) : $(this).parent("p").removeClass("error"), 0 == e) {
        var t = new Date;
        window.products = [], window.dataLayer = window.dataLayer || [];
        var a = $(this).find('[name="realid"]').val().split("_"),
            i = "<b>Товар для заказа:</b><br>";
        i = i + $("[data-id=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find("h4>a").html() + " - " + $("[data-id=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find(".price").html() + "<br><br>", ga("ec:addProduct", {
            id: a[2],
            name: $("[data-id=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
            price: $.trim($("[data-id=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find(".price").html().replace(" руб.", "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "").replace("r", "")),
            quantity: 1,
            brand: $("[data-id=" + $(this).find('[name="realid"]').val() + "]").data("brand"),
            category: $("[data-id=" + $(this).find('[name="realid"]').val() + "]").data("category")
        }), products.push({
            id: a[2],
            name: $("[data-id=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find("h4>a").html().replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, " "),
            price: $.trim($("[data-id=" + $(this).find('[name="realid"]').val() + "]").closest(".item-e").find(".price").html().replace(" руб.", "").replace(" ", "").replace(/\t{2,}/g, "").replace(/<\/?[^>]+>/g, "").replace(/[\r\n]/m, "").replace("r", "")),
            quantity: 1,
            brand: $("[data-id=" + $(this).find('[name="realid"]').val() + "]").data("brand"),
            category: $("[data-id=" + $(this).find('[name="realid"]').val() + "]").data("category")
        }), ga("ec:setAction", "purchase", {
            id: "livelive-" + t.toLocaleDateString() + "-" + t.toLocaleTimeString(),
            affiliation: "PODKOVA22.RU"
        }), ga("send", "event", "Pokupka", "v1click", "Заказ товаров в 1 клик"), dataLayer.push({
            ecommerce: {
                purchase: {
                    actionField: {
                        id: "live-" + t.toLocaleDateString() + "-" + t.toLocaleTimeString()
                    },
                    products: products
                }
            }
        }), $.ajax({
            data: {
                str: i,
                phone: $(this).find("[name=phone]").val(),
                email: $(this).find("[name=email]").val(),
                name: $(this).find("[name=name]").val(),
                label: "oneclickbasket"
            },
            type: "POST",
            url: "/include/ajax.php",
            success: function(e) {
                $("#sub-success").remove(), $("form[name=oneclickbasket3]").find(".one-click-benefits").before('<p id="sub-success" style="position: relative;">' + e + "</p>"), $("form[name=oneclickbasket3]").find("[name=email], [name=name], [name=phone]").val(""), setTimeout(function() {
                    $(".fade").trigger("click")
                }, 3e3)
            }
        })
    }
    return !1
}), $(".cost-order a").click(function(e) {
    e.preventDefault();
    for (var t = location.href, a = location.search, i = (a = a.substr(1)).split("&"), n = i.length - 1; n >= 0; n--) i[n].indexOf("arr=") + 1 ? i.splice(n, 1) : i[n].indexOf("PAGEN_") + 1 && i.splice(n, 1);
    var s = i.join("&");
    s = "?" + s + "&arr=" + $(this).data("href"), t = t.replace(location.search, s), window.history.pushState("1", "Title", s), $.ajax({
        type: "GET",
        url: t,
        beforeSend: function() {
            $(".pages-e").remove(), $(".list-e").next("script").remove(), $(".list-e").remove(), $(".left_from_filter").next("script").remove(), $(".left_from_filter").remove(), $("#load").remove(), $(".cost-order").after('<img id="load" src="/include/load.gif" style="display: block;margin: 100px auto 100px;">')
        },
        success: function(e) {
            $(".pages-e").remove(), $(".list-e").next("script").remove(), $(".list-e").remove(), $(".left_from_filter").next("script").remove(), $(".left_from_filter").remove(), $("#load").remove(), $(".cost-order").after("" + getBasketHTML(e)), $('input[type="checkbox"]').uniform()
        }
    })
}), /*$("[name=PHONE], [name=phone], [name=ORDER_PROP_1], [name=PERSONAL_MOBILE]").inputmask("+7 (999) 999-99-99"), */

$("[name=PHONE], [name=phone], [name=ORDER_PROP_1], [name=PERSONAL_MOBILE]").inputMask('+X (999) 999-99-99',{
        X: /[78]/
    }),

$("[name=findEmail]").on("click", function() {
    var e = 0;
    if (isValidEmailAddress($(this).prev("p").find("[name=email]").val()) && "" != $(this).prev("p").find("[name=email]").val()) {
        $(this).prev("p").find("[name=email]").removeClass("err-input");
        var t = $(this).prev("p").find("[name=email]").val();
        $.ajax({
            data: {
                email: t,
                label: "findEmail",
                path: $("[name=serverroot]").val()
            },
            type: "POST",
            url: "/include/ajax.php",
            success: function(e) {
                $(".profile-b .continue").remove(), $.ajax({
                    data: {
                        name: e,
                        continue: "true",
                        login: t
                    },
                    type: "POST",
                    url: $('[name="serverroot"]').val(),
                    success: function(e) {
                        $(".delimetr").after("" + getBasketHTML(e)), $(".delimetr").remove(), $('input[type="checkbox"], input[type="radio"]').uniform(), $("[name=phone], [name=ORDER_PROP_1]").inputmask("+7 (999) 999-99-99"), $("form.standart input, form.standart textarea").each(function() {
                            $(this).val().length > 0 && $(this).parent().addClass("complete").removeClass("focus"), $(this).focusin(function() {
                                $(this).parent().addClass("focus")
                            }), $(this).focusout(function() {
                                $(this).val().length > 0 ? $(this).parent().addClass("complete").removeClass("focus") : $(this).parent().removeClass("focus complete")
                            })
                        })
                    }
                })
            }
        })
    } else e++, $(this).prev("p").find("[name=email]").addClass("err-input");
    return !1
}), $(document).on("change", ".order-list.deliver_list li [type=radio]", function() {
    $(this).is(":checked") && $(this).closest("ul").is(".order-list") && ($(this).closest(".order-list").find(".selected").removeClass("selected"), $(this).closest("label").addClass("selected"), 2 == $(this).val() ? $("#adres").hide(0) : $("#adres").show(0))
}), $(document).on("change", ".order-list ul [type=radio]", function() {
    $(this).is(":checked") && ($(this).closest("ul").find(".active").removeClass("active"), $(this).closest("label").addClass("active"))
}), $(document).on("submit", "form#ORDER_FORM", function(e) {
    var t = 0;
    if ($("input").is("#USER_PASSWORD") && !$("input").is("[name='truepass']") ? ($("#relogin").remove(), "" == $("#USER_PASSWORD").val() ? (t++, $("#USER_PASSWORD").addClass("err-input")) : (e.preventDefault(), $("#USER_PASSWORD").removeClass("err-input"), $.ajax({
            data: {
                login: $("#ORDER_PROP_3").val(),
                pass: $("#USER_PASSWORD").val(),
                label: "findpass"
            },
            type: "POST",
            url: "/include/ajax.php",
            success: function(e) {
                "no" == e ? ($("#USER_PASSWORD").addClass("err-input"), $("#USER_PASSWORD").closest("p").after('<p id="relogin">Восстановить пароль</p>')) : ($("#USER_PASSWORD").attr("readonly", !0), $("#USER_PASSWORD").after("<input type='hidden' name='truepass'>"), $("form#ORDER_FORM").trigger("submit"))
            }
        }))) : ($("#ORDER_PROP_2, #ORDER_PROP_1, #ORDER_PROP_3").each(function(e, a) {
            "" == $(a).val() ? (t++, $(a).addClass("err-input")) : $(a).removeClass("err-input")
        }), 2 == $("#DELIVERY_ID").val() && ("" == $("#ORDER_PROP_4").val() ? (t++, $("#ORDER_PROP_4").addClass("err-input")) : $("#ORDER_PROP_4").removeClass("err-input")), $(this).find("#order").is(":checked") ? $(this).find("#order").closest("label").css("color", "inherit") : ($(this).find("#order").closest("label").css("color", "red"), t++)), t > 0) return !1
}), $("[name=PERSONAL_BIRTHDAY]").inputmask("99.99.9999"), $("[name=UF_AUTO_YEAR]").inputmask("9999"), $("form[name=form1]").on("submit", function() {
    var e = 0;
    if ($(this).find("[name=rule]").is(":checked") || (e++, $(this).find(".agreement").css("color", "red")), e > 0) return !1
}), $(".prod-tabs-one a").bind("click", function(e) {
    if (e.preventDefault(), $(this).parents("ul").siblings('[data-tab="' + $(this).data("href") + '"]').show().siblings("[data-tab]").hide(), $(this).parent().addClass("active").siblings().removeClass(), $(".scroll:not(.scroll-mega)").jScrollPane({
            contentWidth: "0px",
            autoReinitialise: !0,
            showArrows: !0
        }), $(this).closest("ul").prev().is("h6.drop") && ($(this).closest("ul").prev().find("span").html($(this).closest("ul").find(".active>a").html()), $(this).closest("ul").prev().trigger("click")), $(".custom-catalog .list li").length > 0) {
        var t = 0;
        $(".custom-catalog .list").each(function() {
            t = 0, $(this).find("li").each(function() {
                $(this).height("auto");
                var e = $(this).height();
                t = e > t ? e : t
            }), $(this).find("li").height(t)
        })
    }
}), $(".fancybox-media").fancybox({
    openEffect: "none",
    closeEffect: "none",
    helpers: {
        media: {}
    }
}), $(".cart-submit").on("click", function(e) {
    e.preventDefault(), $(this).closest("form").trigger("submit")
}), $("[name=saving], [name=montazh], [name=type_auto]").on("change", function() {
    recalcBasket()
}), $(".saving, .montazh, .type_auto").on("change", function() {
    recalcBasket()
}), $("form").on("click", ".clear:not(.clear_auto)", function(e) {
    function clear($form) {
        $form.find("[type=checkbox]:checked").closest(".checker").each(function(e, t) {
            $obj = $(t).parent(), $obj.is("li") && $obj.trigger("clear"), $obj.is("label") && $obj.find("input").trigger("click")
        }), $form.find("[type=radio]:checked").each(function(e, t) {
            $(t).prop("checked", !1).closest("span").removeClass("checked")
        }), myFilter(-1), $form.find(".price-range").each(function(ind, elem) {
            var s = $(elem).find(".slide");
            s.slider("option", "values", [eval(s.attr("data-min")), eval(s.attr("data-max"))]), s.prev(".input").find(".from").val(s.attr("data-min")), s.prev(".input").find(".to").val(s.attr("data-max"))
        })
    }
    e.preventDefault(), $form = $(this).closest("form"), $("body").animate({
        scrollTop: $form.offset().top - $("nav.fixed").height() - 15
    }, 700, clear($form)), $form.find(".multiply").each(function(e, t) {
        $(t).find("h6").html("<span>Выберите</span>")
    })
}), Share = {
    vkontakte: function(e, t, a) {
        url = "http://vkontakte.ru/share.php?", url += "url=" + encodeURIComponent(e), url += "&title=" + encodeURIComponent(t), url += "&description=" + encodeURIComponent(a), url += "&noparse=true", Share.popup(url)
    },
    odnoklassniki: function(e, t, a) {
        url = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1", url += "&st.comments=" + encodeURIComponent(a), url += "&title=" + encodeURIComponent(t), url += "&st._surl=" + encodeURIComponent(e), Share.popup(url)
    },
    facebook: function(e, t, a) {
        url = "http://www.facebook.com/sharer.php?s=100", url += "&p[title]=" + encodeURIComponent(t), url += "&p[summary]=" + encodeURIComponent(a), url += "&p[url]=" + encodeURIComponent(e), Share.popup(url)
    },
    twitter: function(e, t, a) {
        url = "http://twitter.com/share?", url += "text=" + encodeURIComponent(t), url += "&url=" + encodeURIComponent(e), url += "&counturl=" + encodeURIComponent(e), url += "&description=" + encodeURIComponent(a), Share.popup(url)
    },
    popup: function(e) {
        window.open(e, "_blank", "toolbar=0,status=0,width=626,height=436")
    }
}, $("form[name=contacts]").on("submit", function() {
    var e = 0;
    return "" == $(this).find("[name=text]").val() ? (e++, $(this).find("[name=text]").parent("p").addClass("error")) : $(this).find("[name=text]").parent("p").removeClass("error"), 
    $(this).find("[type=text]").each(function(t, a) {
    	if($(a).attr('name')=='email') {
            !isValidEmailAddress($(a).val()) ? ($(a).parent("p").addClass("error"), e++) : $(a).parent("p").removeClass("error");
        }
        else {
        	if($(a).attr('name')=='phone') {
        		var str=$(a).val();
				var i=str.length-str.replace(/\d/gm,'').length; 
				i<11 ? ($(a).parent("p").addClass("error"), e++) : $(a).parent("p").removeClass("error");
        	}
         else
        	"" == $(a).val() ? (e++, $(a).parent("p").addClass("error")) : $(a).parent("p").removeClass("error")
       }
    }), $(this).find(".rules_1").length > 0 && ($(this).find(".rules_1").prop("checked") ? $(this).find(".rules_1").closest("p").css("font-weight", "") : ($(this).find(".rules_1").closest("p").css("font-weight", "bold"), e++)), 0 == e && $.ajax({
        data: {
            label: "contacts",
            phone: $(this).find("[name=phone]").val(),
            name: $(this).find("[name=name]").val(),
            email: $(this).find("[name=email]").val(),
            theme: $(this).find("[name=theme]").val(),
            text: $(this).find("[name=text]").val()
        },
        type: "POST",
        url: "/include/ajax.php",
        success: function(e) {
            $("form[name=contacts]").prev("p").remove(), $("form[name=contacts]").before("<p>" + e + "</p>"), $("form[name=contacts]").find("[type=text], textarea").each(function(e, t) {
                $(t).val("")
            })
        }
    }), !1
}), $(".lk").on("click", function(e) {
    e.preventDefault(), $(this).hasClass("opened") ? $(this).removeClass("opened") : $(this).addClass("opened"), $(this).siblings(".lk-drop-ul").stop().slideToggle(250)
}), $(document).on("click", ".ajax_all", function() {
    $(this).closest(".ajax_search").siblings("[type=submit]").trigger("click")
});
var xhr;
$("#ajaxsearch").on("keyup", function(e) {
    e.preventDefault(), $ajax_send = $(this).val(), $ajax_send.length > 1 ? (xhr && "0" != xhr && xhr.abort(), xhr = $.ajax({
        data: {
            q: $ajax_send
        },
        type: "GET",
        url: "/include/search.php",
        beforeSend: function() {
            $("#ajaxsearch").closest(".search").css("overflow", "hidden")
        },
        success: function(e) {
            xhr = "0", "<p></p>" != getBasketHTML(e) ? ($("#ajaxsearch").closest(".search").css("overflow", "visible"), $("#ajaxsearch").siblings(".ajax_search").stop().fadeIn(100), $(document).find("#ajaxsearch").siblings(".ajax_search").html("" + getBasketHTML(e)), $(document).find("#ajaxsearch").siblings(".ajax_search").find(".search_scroll").jScrollPane({
                autoReinitialise: !0,
                verticalGutter: -27
            })) : ($("#ajaxsearch").closest(".search").css("overflow", "hidden"), $("#ajaxsearch").siblings(".ajax_search").stop().fadeOut(100).html(""))
        }
    })) : ($("#ajaxsearch").closest(".search").css("overflow", "hidden"), $("#ajaxsearch").siblings(".ajax_search").stop().fadeOut(100).html(""))
}), $("#ajaxsearch, #ajaxsearch2").on("click", function(e) {
    $(this).trigger("keyup")
}), $("#ajaxsearch2").on("keyup", function(e) {
    e.preventDefault(), $ajax_send = $(this).val(), $ajax_send.length > 1 ? (xhr && "0" != xhr && xhr.abort(), xhr = $.ajax({
        data: {
            q: $ajax_send
        },
        type: "GET",
        url: "/include/search.php",
        beforeSend: function() {
            $("#ajaxsearch2").closest(".search").css("overflow", "hidden")
        },
        success: function(e) {
            xhr = "0", "<p></p>" != getBasketHTML(e) ? ($("#ajaxsearch2").closest(".search").css("overflow", "visible"), $("#ajaxsearch2").siblings(".ajax_search").stop().fadeIn(100), $(document).find("#ajaxsearch2").siblings(".ajax_search").html("" + getBasketHTML(e)), $(document).find("#ajaxsearch2").siblings(".ajax_search").find(".search_scroll").jScrollPane({
                autoReinitialise: !0,
                verticalGutter: -27
            })) : ($("#ajaxsearch2").closest(".search").css("overflow", "hidden"), $("#ajaxsearch2").siblings(".ajax_search").stop().fadeOut(100).html(""))
        }
    })) : ($("#ajaxsearch2").closest(".search").css("overflow", "hidden"), $("#ajaxsearch2").siblings(".ajax_search").stop().fadeOut(100).html(""))
}), $(document).on("click", "#forgot_pass_order", function() {
    $(".modal #forgot_form").is(":visible") || ($(".modal #forgot_form").show(), $(".modal #auth_form").hide()), $("[data-open=enter]").trigger("click"), $(".frgpsswd [name=USER_EMAIL]").val($("[name=ORDER_FORM] #ORDER_PROP_3").val()).closest("p").addClass("complete")
}), $(".clear_auto").on("click", function(e) {
    e.preventDefault(), $(this).closest("form").find(".model, .modification, .year").html(""), $(this).closest("form").find(".vendor").find("li.active").toggleClass("active").find("input").prop("checked", !1), $(this).closest("form").find(".multiply").each(function(e, t) {
        $(t).find("h6").html("<span>Выберите</span>")
    })
}), jQuery(function(e) {
    var t = e("#calculator").get(0),
        a = e("[id^=speed]", t),
        i = (e("#Sp_natural", t), e("#Sp_real", t), e("[name=Hd]", t)),
        n = e("[name=Wd]", t),
        s = e("[name=Rd]", t),
        l = e("[name=Hdn]", t),
        r = e("[name=Wdn]", t),
        o = e("[name=Rdn]", t);
    a.each(function(t) {
        var a = e(this).attr("id"),
            i = parseInt(String(a).match(/speed(\d+)/i)[1]);
        e.data(this, "idNum", i)
    }), calculateSpeedCoefficient = function() {
        var e = Math.round(n.val() * i.val() * 2 + 25.4 * s.val());
        return Math.round(r.val() * l.val() * 2 + 25.4 * o.val()) / e
    };
    var c = function(t) {
            a.each(function() {
                var a = e(this),
                    i = e.data(this, "idNum"),
                    n = Math.round(i * t * 10) / 10;
                a.html(n)
            })
        },
        d = function() {
            var t = Math.round(n.val() * i.val() * 2 + 25.4 * s.val()),
                a = Math.round(r.val() * l.val() * 2 + 25.4 * o.val()),
                c = Math.round(25.4 * s.val()),
                d = Math.round(25.4 * o.val()),
                p = Math.round((t - c) / 2),
                h = Math.round((a - d) / 2);
            e("#oldH").val(p), e("#newH").val(h), e("#deltaH").val(h - p)
        };
    e(".inBox_select").change(function() {
        t_calc(t);
        var e = calculateSpeedCoefficient();
        c(e), d()
    }).first().change()
}), $("#subscribe-float .close").click(function() {
    $("#subscribe-float").hide(150)
}), $("#subscribe-float .open").click(function() {
    $(this).parent().hide(200).siblings("form, .close").show(200)
}), $(".file").click(function() {
    document.getElementById($(this).data("name")).click()
}), $("[type=file]").change(function() {
    $str = $(this).val(), $str = $str.replace("fakepath", ""), $str = $str.replace("C:", ""), $str = $str.replace("\\", ""), $str = $str.replace("\\", ""), $(this).siblings("span").html($str)
}), $("form[name=vacancy]").on("submit", function(e) {
    $("#error_vacancy").html("");
    var t = 0;
    if ($error_txt = "", $(this).find("[type=text]").each(function(e, a) {
            "" == $(a).val() ? ($(a).parent("p").addClass("error"), t++) : $(a).parent("p").removeClass("error")
        }), "" != $(this).find("[type=file]").val()) {
        var a = document.getElementById("file_vacancy").files[0],
            i = a.name.split("."),
            n = i[i.length - 1];
        i.length > 1 && i.pop(), a.size > 10485760 && (t++, $error_txt = "Размер файла не больше 10 МБ<br>"), 0 != (n = n.search(/(?:doc|docx|txt|odf|pdf|odt|rtf)\s*$/gi)) && (t++, $error_txt += "Недопустимый формат файла")
    }
    if ($(this).find(".rules_1").length > 0 && ($(this).find(".rules_1").prop("checked") ? $(this).find(".rules_1").closest("p").css("font-weight", "") : ($(this).find(".rules_1").closest("p").css("font-weight", "bold"), t++)), $("#error_vacancy").html($error_txt), "" != $error_txt ? $("#file_vacancy").closest("p").addClass("error") : $("#file_vacancy").closest("p").removeClass("error"), t > 0) return !1
}), $("#to_call_manager").click(function() {
    $("html, body").stop().animate({
        scrollTop: $("[name=to_call_manager]").closest(".personal-p").offset().top - $("nav.fixed").height()
    }, 500)
}), $("form[name=to_call_manager]").on("submit", function() {
    var e = 0;
    return $("form[name=to_call_manager]").prev("p#result_form").remove(), $this = $(this), $(this).find("[type=text]").each(function(t, a) {
    	if($(a).attr('name')=='email') {
            !isValidEmailAddress($(a).val()) ? ($(a).parent("p").addClass("error"), e++) : $(a).parent("p").removeClass("error");
        }
        else {
        	if($(a).attr('name')=='phone') {
        		var str=$(a).val();
				var i=str.length-str.replace(/\d/gm,'').length; 
				i<11 ? ($(a).parent("p").addClass("error"), e++) : $(a).parent("p").removeClass("error");
        	}
         	else
        		"" == $(a).val() && e++
        }
    }), $(this).find(".rules_1").length > 0 && ($(this).find(".rules_1").prop("checked") ? $(this).find(".rules_1").closest("p").css("font-weight", "") : ($(this).find(".rules_1").closest("p").css("font-weight", "bold"), e++)), 0 == e ? $.ajax({
        data: {
            label: $this.find("[name=label]").val() ? $this.find("[name=label]").val() : "opt",
            email: $this.find("[name=email]").val(),
            phone: $this.find("[name=phone]").val(),
            name: $this.find("[name=name]").val()
        },
        type: "POST",
        url: "/include/ajax.php",
        success: function(e) {
            $this.find("[type=text], textarea").each(function(e, t) {
                $(t).val("")
            }), $this.before('<p id="result_form">' + e + "</p>")
        }
    }) : $this.before('<p id="result_form">Не все поля заполнены</p>'), !1
}), $(".vacancy-slide").click(function(e) {
    e.preventDefault(), $(this).closest("h3").siblings(".hiden").stop().slideToggle(250)
}), $(".parents>a").on("click", function(e) {
    e.preventDefault(), $(this).parent().children("ul").is(":visible") ? $(this).parent().removeClass("active_parent") : $(this).parent().addClass("active_parent")
}), $(function() {
    $("#pressure").change(function() {
        var e = 33.34 * ($("#pressure").val() - 6.5).toFixed(1) * 2.65;
        e > 130 && e < 155 ? e -= 1.2 : e > 155 && e < 250 ? e -= 1.5 : e > 250 && (e += .8), $(".monometr-arrow").css("transform", "rotate(" + e + "deg)")
    }), $(".economy-slider").slick({
        infinite: !1,
        dots: !0,
        arrows: !0
    })


    // 05.03.2018
    $('.multiply li').on('click', function() {
        $(this).closest('.scroll').attr('class', 'scroll');
        $(this).closest('.multiply').find('h6.active').removeClass('active');
    })

    if($('#YMapsID2').length>0) {
        mapFooter();
    }
    if($('#YMapsID').length>0) {
        contactMap();
    }
    $(document).on('click', '.compare_add .close', function(e) {
        $('.compare_add').hide();
    });
    $(document).on('click', '[data-fn=add_compare]', function(e) {
        e.preventDefault();
        BX.showWait();
            $this= $(this);
            $.ajax({
                    url: "/include/compare.php?action=ADD_TO_COMPARE_LIST&id="+$(this).data('id'),
                    success: function(s) {
                        
                        if(!$this.is('a')) {
                            $this.text('В сравнении');
                            $img = $('.slides_control img').eq(0).attr('src');
                            $name = $('h1').html();
                        }
                        else {
                            $this.text('Перейти в сравнение').attr('data-fn', '').attr('href', '/compare/');   
                            $li = $this.closest('.desc').closest('li');
                            $img = $li.find('.pic img').attr('src');
                            $name = $li.find('h4 a').text();
                        }
                        $('.compare_add img').attr('src', $img);
                        $('.compare_add h6').html( $name+' <em>добавлена в сравнение</em>');
                        $('.compare_add').show();
                        BX.closeWait();
                    }
                });
    });
});

$(function () {  
    $('nav p.phone').html($('h3.phone').html());
    $('#filterShiny').on('submit', function(){
        if($(this).find('.auto-type-nav').length>0) {
            $(this).attr('action', $(this).find('.auto-type-nav :checked').attr('data-url'));
        }
    });


    $("form[name=moneycare]").on("submit", function() {
    	
    var e = 0;
    if("" == $(this).find("[name=name]").val()) {
        e++;
        
        $(this).find("[name=name]").parent("p").addClass("error");
    }
    else $(this).find("[name=name]").parent("p").removeClass("error");
    if("" == $(this).find("[name=phone]").val()) {
        e++;
        $(this).find("[name=phone]").parent("p").addClass("error");
    }
    else $(this).find("[name=phone]").parent("p").removeClass("error");
    if($(this).find(".rules_1").prop("checked"))
        $(this).find(".rules_1").closest("p").css("font-weight", "");
    else {
        $(this).find(".rules_1").closest("p").css("font-weight", "bold");
        e++;
    }

    if ( 0 == e) 
    {
        $this = $(this);
        $.ajax({
            data: $(this).serialize(),
            type: "POST",
            url: "/include/credit.php",
            success: function(e) {
            	if(e=='error')
            		$this.html('<p>Сервер временно недоступен. Попробуйте отправить заявку позднее</p>');
            	else 
            		$this.html('<p>Заявка получена! Мы скоро свяжемся с вами</p>');
            }
        });
    }
    return false;
});

    function getRevs(e) {
    	return txt = e.split("<!--startRev-->"), txt = txt[1], txt = txt.split("<!--endRev-->"), txt[0]
	}

    $(document).on('click', '.ajax-e a[href]', function() {
    	BX.showWait();
    	$.ajax({
            type: "POST",
            url: $(this).attr('href'),
            success: function(e) {
            	$('#reviews_content').find('div.pages-e').eq(0).siblings('div').remove();
            	$('#reviews_content').find('div.pages-e').eq(0).after(getRevs(e));
            	$('#reviews_content').find('div.pages-e').eq(0).remove();
            	BX.closeWait();
            }
        });
    	return false;
    });

    $('[data-open="moneycare"]').on('click', function() {
    	var price, name, group;
    	if($(this).closest('.controls').length>0) {
    		price = $(this).closest('.rc').find('.price').text();
    		name = $('h1').text();
    	}
    	else {
    		name = $(this).closest('li').find('h4 a').text();	
    		price = $(this).closest('li').find('.price').text();
    	}
    	$('[name=moneycare]').find('[name=prod]').val(name);
    	$('[name=moneycare]').find('[name=prod-p]').val(price);
    });

    $('.js-quantity-plus').on('click', function() {
        $(this).parent().siblings('.js-quantity-input')[0].stepUp();
    });
    $('.js-quantity-minus').on('click', function() {
        $(this).parent().siblings('.js-quantity-input')[0].stepDown();
    });
});