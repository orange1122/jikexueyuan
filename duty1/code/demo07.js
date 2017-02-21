window.onload=function(){
	var div = document.getElementsByTagName('div');
	console.info(div[2])
	var input= div[2].getElementsByTagName('input')
	console.info(input)
	for(var i=0;i<input.length;i++){
		input[i].addEventListener("click",function(){
			for(var i=0;i<input.length;i++){
				input[i].checked="";
			}
			this.checked="checked";
		},false);
	}
}