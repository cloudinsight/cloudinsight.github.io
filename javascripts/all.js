function setCookie(e,o,t){var i=new Date;i.setTime(i.getTime()+24*t*60*60*1e3);document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));document.cookie=e+"="+escape(o)+";expires="+i.toGMTString()+";path=/"}function getCookie(e){var o=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=o?unescape(o[2]):void 0}function delCookie(e){var o=new Date;o.setTime(o.getTime()-1);var t=getCookie(e);null!=t&&(document.cookie=e+"="+t+";expires="+o.toGMTString())}function out(){"yes"!=getCookie("out")&&"/"!==window.location.pathname&&(setCookie("out","yes",1),setTimeout(function(){function e(){var e=$(".flag-right").height();$(".flag-left").css("height",e+"px")}window.onresize=function(){e()},$(".flagInfo").addClass("flagshow"),$(".cl").click(function(){$(".flagInfo").removeClass("flagshow")})},300))}$(function(){var e=window.location.pathname;$(".page-sidebar a[href='"+e+"']").addClass("active")}),Array.prototype.shuffle=function(){for(var e=this,o=e.length-1;o>=0;o--){var t=Math.floor(Math.random()*(o+1)),i=e[t];e[t]=e[o],e[o]=i}return e},$(document).ready(function(){function e(){$("#img1").css("display","none"),$("#img2").css("display","block")}function o(){$("#img1").css("display","block"),$("#img2").css("display","none")}var t={videoId:null,beforescroll:0,stateOfVideo:1,browser:function(){var e=navigator.userAgent;navigator.appVersion;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),mqq:e.indexOf("MQQ")>-1}}()},i=new Date;$("#cr-end-time").text(i.getFullYear()),t.browser.trident&&$("html").addClass("gt-ie11"),$(".scroll-down").click(function(){$(".hero-block").height();$("body,html").animate({scrollTop:"100vh"},600)}),$("#anchor").click(function(){return $("html,body").animate({scrollTop:$($(this).attr("href")).offset().top+"px"},{duration:1e3,easing:"swing"}),!1}),$(".burger-wrapper").click(function(){console.log(1),$(".main-navblock").hasClass("navOpen")?($("body").removeClass("homeShow"),$(".main-navblock").removeClass("navOpen"),$(".burger").removeClass("active-burger")):($("body").addClass("homeShow"),$(".main-navblock").addClass("navOpen"),$(".burger").addClass("active-burger"))}),$(".play-btn").click(function(){$(this).hide();var e=$(this).parent().find("video");e[0].play(),e.attr("controls","controls")}),$(".type-shadow").mouseover(function(){$(this).addClass("shadow");const e=$(".type-pic").eq(7)[0].clientWidth;$(".masking").css("left",e/2-102+"px")}),$(".type-shadow").mouseleave(function(){$(this).removeClass("shadow")}),$(".reover").click(function(){var e=$(this).parent().find("video");e[0].load(),e[0].play()}),$(".modal.modal-video button.close").click(function(){var e=$(t.videoId);e[0].pause(),e.closest(".modal-dialog").removeClass("active"),setTimeout(function(){$(".modal-backdrop").trigger("click")},800)}),$("#video-btn").click(function(){var e=$(this).attr("data-source");t.videoId=e;var o=$(e);o[0].play(),setTimeout(function(){o.closest(".modal-dialog").addClass("active")},100)}),setInterval(function(){e(),setTimeout(function(){o()},2e3)},4e3),document.body.addEventListener("touchstart",function(){}),$("#platform-btn").click(function(){var e=$(this);$(".platform-both").each(function(){"block"==$(this).css("display")?($(this).hide(),e.text("\u663e\u793a\u5168\u90e8")):"none"==$(this).css("display")&&($(this).show(),e.text("\u663e\u793a\u90e8\u5206"))})})}),out(),window.onbeforeunload=delCookie("out"),setTimeout(function(){$(".panel").click(function(e){"a"!==e.target.nodeName&&($(this).toggleClass("active"),$(this).siblings("div").map(function(){$(this).removeClass("active")}))}),$(document).scroll(function(){$(window).scrollTop()>100?$(".return").addClass("open"):$(".return").removeClass("open")}),$(".page-body").scroll(function(){$(this).scrollTop()>800?$(".return").addClass("open"):$(".return").removeClass("open")}),$(".return").click(function(){$(".page-body").animate({scrollTop:0},500),$("html,body").animate({scrollTop:0},500)});var e=$(window).height(),o=$(window).width(),t=$(".page-sidebar").width()+1,i=$(".notesContent").innerHeight();$(".notesHead").css("height",i+"px"),$(".page-sidebar").css("height",e-96+"px"),$(".page-body").css("height",e-96+"px"),976>o?$(".page-body").css("width",o-t+60+"px"):1184>(o>=976)&&$(".page-body").css("width",o-t+30+"px"),o>1184&&$(".page-body").css("width",o-t+16+"px"),window.onresize=function(){var e=$(window).height(),o=$(window).width(),t=$(".page-sidebar").width()+1;976>o?$(".page-body").css("width",o-t+60+"px"):1184>(o>=976)&&$(".page-body").css("width",o-t+30+"px"),o>1184&&$(".page-body").css("width",o-t+16+"px"),$(".page-sidebar").css("height",e-96+"px"),$(".page-body").css("height",e-96+"px")}},100);