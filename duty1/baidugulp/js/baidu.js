//更多产品实现
$(function(){
	$("#productor").hover(function(){
		$(".productor").show();
		$(this).css("background-color","#eee");
	},function(){
		$(".productor").hide();
		$(this).css("background-color","#398BFB");
	});
	// console.info($(".productor li").find("a"));
	$(".productor li").find("a").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});
	// 紫荆乐园 设置
	$("#sz").hover(function(){
		$(".sz").show();
	},function(){
		$(".sz").hide();
	});
	$("#zjly").hover(function(){
		$(".zjly").show();
	},function(){
		$(".zjly").hide();
	});
	$(".sz").find("li").hover(function(){
		$(this).css("background-color","#398BFB");
	},function(){
		$(this).css("background-color","#fff");
	});
	$(".zjly").find("li").hover(function(){
		$(this).css("background-color","#398BFB");
	},function(){
		$(this).css("background-color","#fff");
	});
	
	// 换肤
	console.info($("#navthree"));
	$("#navthree").click(function(){
		$(".changeskin").slideDown(1000);
	});
	$(".skin-nav li").hover(function(){
		$(this).css("background-color","#0079F5");
	},function(){
		$(this).css("background-color","#F2F1F3");
	});
	$(".skin-mainnav li").hover(function(){
		$(this).css("color","#0079F5");
	},function(){
		$(this).css("color","#666");
	});
	//收起
	$(".displayskin").click(function(){
		$(".changeskin").slideUp(1000);
	});
	
	//单例模式
	var getSingle = function( fn ){
	var result;
	return function(){
	return result || ( result = fn .apply(this, arguments ) );
		}
	};
	var bindEvent = getSingle(function(){
	//使用皮肤
	if(localStorage.getItem("skin0")=="skin0.png"){
		$(".container").addClass("skin0");
		skin0();

	}
	if(localStorage.getItem("skin0")=="skin1.png"){
		$(".container").addClass("skin1");
		skin0();

	}
	if(localStorage.getItem("skin0")=="skin2.png"){
		$(".container").addClass("skin2");
		skin0();

	}
	if(localStorage.getItem("skin0")=="skin3.png"){
		$(".container").addClass("skin3");
		skin0();

	}
	if(localStorage.getItem("skin0")=="skin4.png"){
		$(".container").addClass("skin4");
		skin0();

	}
		var skin;
		$(".skin li").click(function(){
		skin = $(this).find("img").attr("src");
		if(skin=="img/skin0.png"){
			clearskin();
			$(".container").addClass("skin0");
			localStorage.setItem("skin0","skin0.png");
			skin0();
		}
		if(skin=="img/skin1.png"){
			clearskin();
			$(".container").addClass("skin1");
			localStorage.setItem("skin0","skin1.png");
			skin0();
		}
		if(skin=="img/skin2.png"){
			clearskin();
			$(".container").addClass("skin2");
			localStorage.setItem("skin0","skin2.png");
			skin0();
		}
		if(skin=="img/skin3.png"){
			clearskin();
			$(".container").addClass("skin3");
			localStorage.setItem("skin0","skin3.png");
			skin0();
		}
		if(skin=="img/skin4.png"){
			clearskin();
			$(".container").addClass("skin4");
			localStorage.setItem("skin0","skin4.png");
			skin0();
		}
		
		
	});
	//不使用皮肤
	$(".noskin").click(function(){
		noskin();		
	});

	return true;
	});
	var render = function(){
	bindEvent();
	};
	render();
	
	function skin0(){
		$(".left-nav li").css("color","#fff");
		$(".left-nav li a").css("color","#fff");
		$(".productor").css("background-color","#F2F1F3");
		$(".productor ul li:first").css("background-color","#F2F1F3");
		$(".sz").css("background-color","#fff");
		$(".zjly").css("background-color","#fff");
		$(".sz").css("color","#333");
		$(".zjly").css("color","#333");
		$(".right-nav").css("color","#fff");
		$(".footer").css("color","#fff");
		$(".footer").find("a").css("color","#fff");
		$(".right-nav #productor").siblings().find("a").css("color","#fff");
		$(".nav").css("border-bottom","none");
		$(".main div").removeClass("img");
		$(".main div").addClass("bgimg");
		// localStorage.setItem("skin1","#fff");
		// localStorage.setItem("skin2","#F2F1F3");
		// localStorage.setItem("skin3","#333");

	}
	//换肤之前清除之前保留的皮肤样式
	function clearskin(){
		$(".container").removeClass("skin0");
		$(".container").removeClass("skin1");
		$(".container").removeClass("skin2");
		$(".container").removeClass("skin3");
		$(".container").removeClass("skin4");
		$(".main div").removeClass("img");
		
	}
	function noskin(){	
		$(".left-nav li").css("color","#333");
		$(".left-nav li a").css("color","#333");
		$("#productor").css("background-color","#398BFB");
		$(".productor").css("background-color","#fff");
		$(".productor ul li:first").css("background-color","#fff");
		$(".sz").css("background-color","#fff");
		$(".zjly").css("background-color","#fff");
		$(".sz").css("color","#333");
		$(".zjly").css("color","#333");
		$(".right-nav").css("color","#333");
		$(".footer").css("color","#333");
		$(".footer").find("a").css("color","#333");
		$(".right-nav #productor").siblings().find("a").css("color","#333");
		$(".nav").css("border-bottom","#EBEBEB");
		localStorage.clear();
		$(".container").removeClass("skin0");
		$(".container").removeClass("skin1");
		$(".container").removeClass("skin2");
		$(".container").removeClass("skin3");
		$(".container").removeClass("skin4");
		$(".main div").removeClass("bgimg");
		$(".main div").addClass("img");
	}
//tab切换
$(".middle-header").find("li").hover(
	function(){
		$(this).css("background-color","#AABDD3");

	},function(){
		$(this).css("background-color","#E6ECF3");
	});
$(".middle-header").find("li").click(
	function(){
		if($(this).index()==0){
			$(".mygz").css("display","block");
			$(".advise").css("display","none");
			$(".mydh").css("display","none");
			$(".video").css("display","none");
			$(".shop").css("display","none");

		}
		if($(this).index()==1){
			$(".mygz").css("display","none");
			$(".advise").css("display","block");
			$(".mydh").css("display","none");
			$(".video").css("display","none");
			$(".shop").css("display","none");

		}
		if($(this).index()==2){
			$(".mygz").css("display","none");
			$(".advise").css("display","none");
			$(".mydh").css("display","block");
			$(".video").css("display","none");
			$(".shop").css("display","none");

		}
		if($(this).index()==3){
			$(".mygz").css("display","none");
			$(".advise").css("display","none");
			$(".mydh").css("display","none");
			$(".video").css("display","block");
			$(".shop").css("display","none");

		}
		if($(this).index()==4){
			$(".mygz").css("display","none");
			$(".advise").css("display","none");
			$(".mydh").css("display","none");
			$(".video").css("display","none");
			$(".shop").css("display","block");

		}
	});
	// 我的关注
	$(".mygz").find("li").hover(function(){
		$(this).css("background-color","#fff");
	},function(){
		$(this).css("background-color","#E6ECF3");
	});
	$(".middlenav").hover(function(){
		$(this).find("ul").show();
	},function(){
		$(this).find("ul").hide();
	});
	//推荐
	$("span.title a").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","#398BFB");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","#333");
	});
	$(".advisermain").find("a").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","#398BFB");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","#333");
	});
	//导航
	$(".mydh ul li").hover(function(){
		$(this).find("div").show();
	},function(){
		$(this).find("div").hide();
	});
	//视频
	$(".video a").hover(function(){
		$(this).css("text-decoration","underline");
		$(this).css("color","#398BFB");
	},function(){
		$(this).css("text-decoration","none");
		$(this).css("color","#333");
	});
	// 购物模块
	$("#flsc").find("li").hover(function(){
		$(this).find("a").css("text-decoration","underline");
	},function(){
		$(this).find("a").css("text-decoration","none");
	});

});