$(function(){
	var $newstable = $("#newstable tbody");
	refreshNews();
//添加新闻
$("#btnsubmit").click(function(e){
	e.preventDefault();
//输入判断
if($("#newtitle").val()===""||$("#newimg").val()===""||$("#newtime").val()===""||$("#newsrc").val()===""){
	if($("#newtitle").val()===""){
		$("#newtitle").parent().addClass("has-error");
	}else{
		$("#newtitle").parent().removeClass("has-error");
	}
	if($("#newimg").val()===""){
		$("#newimg").parent().addClass("has-error");
	}else{
		$("#newimg").parent().removeClass("has-error");
	}
	if($("#newsrc").val()===""){
		$("#newsrc").parent().addClass("has-error");
	}else{
		$("#newsrc").parent().removeClass("has-error");
	}
	if($("#newtime").val()===""){
		$("#newtime").parent().addClass("has-error");
	}else{
		$("#newtime").parent().removeClass("has-error");
	}

}else{
	//提交数据
	var jsonNews={
		newtitle:$("#newtitle").val(),
		newtype:$("#newtype").val(),
		newimg:$("#newimg").val(),
		newtime:$("#newtime").val(),
		newsrc:$("#newsrc").val(),
	}

	$.ajax({
		url:"server/insert.php",
		type:"post",
		data:jsonNews,
		datatype:"json",
		success:function(data){
			console.log(data);
			refreshNews();
			$("#newtitle").val("");//清空之前输入的内容
			$("#newtype").val("");
			$("#newimg").val("");
			$("#newtime").val("");
			$("#newsrc").val("");
		}
	});
}
});

//删除新闻
var deleteId = null;
$newstable.on("click",".btn-danger",function(){
	$("#deleteModal").modal("show");
	deleteId = $(this).parent().prevAll().eq(5).html();
});
$("#deleteModal #confirmDelete").click(function(){
	$("#deleteModal").modal("hide");
	if(deleteId){
		$.ajax({
			url:"server/delete.php",
			type:'post',
			data:{newid:deleteId},
			success:function(data){

				console.log("删除成功");
				refreshNews();
			}
		});
	}
})
//修改新闻
var updateId = null;//全局变量
$newstable.on("click",".btn-success",function(){
	$("#updateModal").modal("show");
	updateId = $(this).parent().prevAll().eq(5).html();
	$.ajax({
		url:"server/curnews.php",
		type:"post",
		data:{newid:updateId},
		success:function(data){
			console.log(data[0].newtitle);
			console.log(data[0]);

			$("#unewtitle").val(data[0].newtitle);
			$("#unewtype").val(data[0].newtype);
			$("#unewimg").val(data[0].newimg);
			$("#unewsrc").val(data[0].newsrc);
			var utime = data[0].newtime;
			console.log(data[0].newtime.split(' '));
			$("#unewtime").val(utime);
		}
	});
});
$("#updateModal #confirmUpdate").click(function(){
	$.ajax({
		url:"server/update.php",
		type:"post",
		data:{
			newtitle:$("#unewtitle").val(),
			newtype:$("#unewtype").val(),
			newimg:$("#unewimg").val(),
			newtime:$("#unewtime").val(),
			newsrc:$("#unewsrc").val(),
			id:updateId
		},
		success:function(data){
			$("#updateModal").modal("hide");
			refreshNews();
		}
	});
})






function refreshNews(){
	$newstable.empty();
	$.ajax({
		type:"get",
		url:"server/getnews.php",
		datatype:"json",
		success:function(data){
				// console.log(data);
				data.forEach(function(item,index,array){
					var $tdid=$("<td>").html(item.id);
					var $tdtype=$("<td>").html(item.newtype);
					var $tdtitle=$("<td>").html(item.newtitle);
					var $tdimg=$("<td>").html(item.newimg);
					var $tdsrc=$("<td>").html(item.newsrc);
					var $tdtime=$("<td>").html(item.newtime); 
					var $btnupdate=$("<button>").addClass("btn btn-success btn-xs").html("编辑");
					var $btndelete=$("<button>").addClass("btn btn-danger  btn-xs").html("删除");
					var $tdctrl=$("<td>");
					$tdctrl.append($btnupdate,$btndelete);
					var $trow=$("<tr>");
					$trow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdsrc,$tdtime,$tdctrl);
					$newstable.append($trow);

				});
			}
		});
}

});


