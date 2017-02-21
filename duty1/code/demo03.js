window.onload = function(){
	var mybut = document.getElementById("mybut")
	mybut.addEventListener("mouseover",a
		//document.getElementById("myp").innerHTML="Hello javascript";
	,false);

	document.getElementById("mybut").addEventListener("mouseout",function(){
		document.getElementById("myp").innerHTML="";
	},false);
}

function a(){
	document.getElementById("myp").innerHTML="Hello javascript";
}