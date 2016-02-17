$(document).ready(function () {

	$(".main-content p").prev().mouseover(function(){
		$(this).css("opacity", "1");
	});
	$(".main-content p").mouseover(function(){
		$(this).prev().css("opacity", "1");
	});
	$(".main-content p").mouseleave(function(){
		if(!$(this).prev().hasClass("marked")&&$(this).prev().hasClass("bookmark")){
			$(this).prev().css("opacity", "0");
		}
	});
	$(".main-content p a").click(function(){
		if($(window).width >= 1200){
			$(".main-content .outer-link").css("opacity", 1);
		}else {
			//open new tab
		}
	});
	$(".main-content .outer-link").css("top", function(){
		return $(this).prev().offset().top;
	});
	$(".main-content .outer-link a").click(function(){
		//open new tab
	});
	$(".bookmark").click(function(){
		if($(this).hasClass("marked")){
			var thisMark = $(this);
			$("#myScrollspy li>a").each(function(){
				if($(this).attr("href") == "#"+thisMark.next().attr("id")){
					$(this).removeClass("marked");
				}
			});
		}else{
			var thisMark = $(this);
			$("#myScrollspy li>a").each(function(){
				if($(this).attr("href") == "#"+thisMark.next().attr("id")){
					$(this).addClass("marked");
				}
			});
		}
	});
//	$("#myScrollspy li.active").siblings().removeClass("affected");
    $(window).scroll(function() {
        $("#myScrollspy ul li.active").siblings().removeClass("affected");
        $("#myScrollspy ul li.active").prev().addClass("affected");
    });
    
	$("a.inline-link").click(function(e){
		e.preventDefault();
		var ad = $(this).parent().next();
		if(ad.hasClass("show-link")) {
			ad.removeClass("show-link").addClass("hide-link");
			setTimeout(function(){
				ad.css("display", "none");
			}, 500);
		} else {
		ad.css("display", "block");
			ad.removeClass("hide-link").addClass("show-link");
		}
	});
	
	$(".not-selected").click(function(){
		$(this).css("display", "none");
		$(this).next().css("display", "inline");
		$(this).next().next().html(Number($(this).next().next().html())+1);
	}); 
	$(".is-selected").click(function(){
		$(this).css("display", "none");
		$(this).prev().css("display", "inline");
		$(this).next().html(Number($(this).next().html())-1);
	}); 
	$(".bookmark").click(function(){
		$(this).toggleClass("marked");
	}); 
});
