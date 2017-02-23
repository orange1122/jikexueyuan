$(function(){
	imgLocation();
	//模拟加载数据
	var dataImg ={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}]};
	window.onscroll=function(){//监听滚动条滚动
		if(scrollside()){
			$.each(dataImg.data,function(index,value){
				var box  = $("<div>").addClass("box").appendTo($("#container"));
				var  content =$("<div>").addClass("content").appendTo(box);
			// console.info("img/"+$(value).attr("src"));
			$("<img>").attr("src","img/"+$(value).attr("src")).appendTo(content);
		});
			imgLocation();
		}
	};
//监听窗口改变
	$(window).resize(function(){
		imgLocation();
	});
	
});
//鼠标滚动加载图片
function scrollside(){
	var box = $(".box");
	//最后一个图片中间位置距离容器顶部距离
	var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	// console.info(lastboxHeight);
	var documentHeight =$(window).height();//获取容器高度
	var scrollHeight =$(window).scrollTop();
	return lastboxHeight<scrollHeight+documentHeight;

}

function imgLocation(){
	var box = $(".box");//盒子对象
	var boxWidth = box.eq(0).width();//盒子宽度
	var num =Math.floor($(window).width()/boxWidth);//浏览器窗口可以加载盒子数量
	var boxArr=[];//储存盒子高度
	box.each(function(index,value){//遍历盒子对象
		value.style.cssText='';//初始化盒子
		//console.log(index+"--"+value)
		var boxHeight=box.eq(index).height();//获取盒子高度
		if(index<num){//取出第一排盒子
			boxArr[index]=boxHeight;//储存高度到数组里
		}else{
			var minboxHeight = Math.min.apply(null,boxArr);//取出最小高度
			//console.info(minboxHeight);
			var minboxIndex = $.inArray(minboxHeight,boxArr);//获取最小高度的下标
			//console.info(minboxInde);
			$(value).css({
				"position": "absolute",
				"top":minboxHeight,
				"left":box.eq(minboxIndex).position().left
			});
			boxArr[minboxIndex] +=box.eq(index).height();//重新计算图片高度
		}
	});

}

