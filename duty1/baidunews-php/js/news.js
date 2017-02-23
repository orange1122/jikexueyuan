$(function(){
	refreshNews("精选");
	$("nav a").click(function(e){
		e.preventDefault();
		var type = $(this).text();
		refreshNews(type);
	});
	

});

function refreshNews(type){
	var $lists = $("article ul");
	$lists.empty();
	$.ajax({
		url:"server/getnews.php",
		type:"get",
		datatype:"json",
		data:{newtype:type},
		success:function(data){
				data.forEach(function(item,index,array){
				var $list = $("<li></li>").addClass("news-list").prependTo($lists);
				var $newimg =$("<div></div>").addClass('newimg').appendTo($list);
				var $img =$("<img>").attr('src',item.newimg).appendTo($newimg);
				var $newcontent =$("<div></div>").addClass('newcontent').appendTo($list);
				var $h1 =$("<h1></h1>").html(item.newtitle).appendTo($newcontent);
				var $p =$("<p></p>").appendTo($newcontent);
				var $newtime =$("<span></span>").html(item.newtime).addClass('newtime').appendTo($p);
				var $newsrc =$("<span></span>").html(item.newsrc).addClass('newsrc').appendTo($p);
			});		
			console.log(data);
		}

	});
	
}