function mycal(){
	var num1 =parseFloat(document.getElementById("num1").value);
	var num2 =parseFloat(document.getElementById("num2").value);
	var select =document.getElementById("select").value;
	var result=0;
	
	if(select=="/"&&num2==0){
		alert("0不能做除数");
		return false;
	}
	// 空验证
	if(!document.getElementById("num1").value||!document.getElementById("num2").value){
		alert("请输入数字");
		document.getElementById("result").value=parseFloat("0").toFixed(1);
		return false;
	}
	if(select=="+"){
		result = parseFloat((num1+num2).toFixed(2));
	}
	if(select=="-"){
		result = parseFloat((num1-num2).toFixed(2));
	}
	if(select=="*"){
		result = parseFloat((num1*num2).toFixed(2));
	}
	if(select=="/"){
		result = parseFloat((num1/num2).toFixed(2));
	}
	document.getElementById("result").value=result;
}