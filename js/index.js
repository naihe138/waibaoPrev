$(function(){$("#all-shop").on("mouseenter",function(){$("#second-nav").show()});$("#all-shop").on("mouseleave",function(){$("#second-nav").hide()});banner("#top-banner",2000);banner("#content-banner",3000)});function banner(f,d){var c=$(f);var i=c.find("ul");var a=i.find("li");var e=c.find(".prev-btn");var g=c.find(".next-btn");var h=0;var b=null;c.on("mouseenter",function(){clearInterval(b)});c.on("mouseleave",function(){b=setInterval(j,d)});g.on("click",function(){j()});e.on("click",function(){var k=h;h--;if(h<0){h=a.length-1}a.eq(k).fadeOut(800);a.eq(h).fadeIn(800)});function j(){var k=h;h++;if(h>a.length-1){h=0}a.eq(k).fadeOut(800);a.eq(h).fadeIn(800)}b=setInterval(function(){clearInterval(b);j()},d)};