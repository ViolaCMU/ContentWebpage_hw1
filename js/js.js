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
		//$(this).css("color", "rgb(105, 196, 214)");
		$(this).toggleClass("marked");
	}); 
});