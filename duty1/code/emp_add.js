window.onload = function(){

	var objTr = eleAll("empTr");
	
	for(var i=0;i<objTr.length;i++){
		
		objTr[i].addEventListener("mouseover",function(){
			this.className="blue";
		},false);
		objTr[i].addEventListener("mouseout",function(){
			this.className="";
		},false);
			}
	var input = document.getElementById("empno").value;
	if(input!=""){
	console.log(input);
	}
}