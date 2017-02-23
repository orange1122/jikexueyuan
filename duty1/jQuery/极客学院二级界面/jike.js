// 导航栏
$(".header-nav li").hover(function(){
	$(this).find("div").css("display","block");
	$(this).css("color","#35B558");
	$(this).find("i").eq(0).removeClass("arrow-icon");
	$(this).find("i").eq(0).addClass("rotate-icon");
},function(){
	$(this).find("div").css("display","none");
	$(this).find("i").eq(0).removeClass("rotate-icon");
	$(this).find("i").eq(0).addClass("arrow-icon");
	$(this).css("color","#000");
});
$(".header-nav li div a").hover(function(){
	$(this).css("color","#35B558");
},function(){
	$(this).css("color","#666");
});
$(".app-icon").hover(function(){
	$(this).find("div").css("display","block");
},function(){
	$(this).find("div").css("display","none");
});
$(".login-icon").hover(function(){
	$(this).find("dl").css("display","block");
},function(){
	$(this).find("dl").css("display","none");
});
$(".login-icon dl dd a").hover(function(){
	$(this).css("color","#35B558");
},function(){
	$(this).css("color","#666");
});
$(".search-icon").click(function(){
	$("nav").css("display","none");
	$(".icon-box").css("display","none");
	$(".search").css("display","block")
});
$("i.i2").click(function(){
	$(".search").css("display","none");
	$("nav").css("display","block");
	$(".icon-box").css("display","block");
	
});

// 左侧导航栏
$(".kck-div").find("li").hover(function(){
	$(this).css("color","#35B558");
},function(){
	$(this).css("color","#666");
});
$(".kck li.li").hover(function(){
	if($(this).index()==0){
		$(".ydkf").css("display","block");
	}
	if($(this).index()==1){
		$(".qdkf").css("display","block");
	}
	if($(this).index()==2){
		$(".hdkf").css("display","block");
	}
	if($(this).index()==3){
		$(".jczs").css("display","block");
	}
	if($(this).index()==4){
		$(".yjsdsj").css("display","block");
	}
	if($(this).index()==5){
		$(".znyj").css("display","block");
	}
	if($(this).index()==6){
		$(".sjk").css("display","block");
	}
	if($(this).index()==7){
		$(".rzks").css("display","block");
	}
	if($(this).index()==8){
		$(".qyit").css("display","block");
	}
	if($(this).index()==9){
		$(".sjcp").css("display","block");
	}
},function(){
	if($(this).index()==0){
		$(".ydkf").css("display","none");
	}
	if($(this).index()==1){
		$(".qdkf").css("display","none");
	}
	if($(this).index()==2){
		$(".hdkf").css("display","none");
	}
	if($(this).index()==3){
		$(".jczs").css("display","none");
	}
	if($(this).index()==4){
		$(".yjsdsj").css("display","none");
	}
	if($(this).index()==5){
		$(".znyj").css("display","none");
	}
	if($(this).index()==6){
		$(".sjk").css("display","none");
	}
	if($(this).index()==7){
		$(".rzks").css("display","none");
	}
	if($(this).index()==8){
		$(".qyit").css("display","none");
	}
	if($(this).index()==9){
		$(".sjcp").css("display","none");
	}
});
$(".left-nav li.leftli").hover(function(){
	$(this).css("color","#35B558");
},function(){
	$(this).css("color","#666");
});
$(".left-nav .kck li.li").hover(function(){
	$(this).css("color","#35B558");
},function(){
	$(this).css("color","#666");
});
// 右侧导航栏
$(".right-nav ul li").hover(function(){
	$(this).find("div").css("display","block");
	$(this).find("div ul li").hover(function(){
		$(this).css("color","#35B558");
	},function(){
		$(this).css("color","#666");
	});
},function(){
	$(this).find("div").css("display","none");
});
$(".qhone").click(function(){
	$(".rowone").css("display","none");
	$(".rowtwo").css("display","block");
});
$(".qhtwo").click(function(){
	$(".rowone").css("display","block");
	$(".rowtwo").css("display","none");
});
// 右侧主要内容
$(".right-main ul li").hover(function(){
	$(this).find("div.img").css("z-index","0");
	$(this).find("div.date").css("display","none");
	$(this).find("div.js").stop().slideDown(500);//阻止冒泡
},function(){
	$(this).find("div.img").css("z-index","-1");
	$(this).find("div.date").css("display","block");
	$(this).find("div.js").stop().slideUp(500);
});

$(".right-main .rowtwo ul li").hover(function(){
	$(this).find("span").first().css("color","#35B558");
},function(){
	$(this).find("span").first().css("color","#666");
});

// 底部
$(".jk-app").hover(function(){
	$(this).find("div").css("display","block");
},function(){
	$(this).find("div").css("display","none");
});
$(".jk-down div").hover(function(){
	$(this).find("img").css("display","block");
},function(){
	$(this).find("img").css("display","none");
});
// 回到顶部
$("span.top").click(function(){
	$(window).scrollTop(0);
});
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$("span.top").fadeIn(1000)
		}else if($(window).scrollTop()==0){
			$("span.top").fadeOut(1000)
		}
	});

});