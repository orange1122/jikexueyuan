function myFunction(){
	var input = parseInt(document.getElementById("text").value);
	if(!input||input>100||input<0||isNaN(input)){
		alert("请输入0~100之间的数字");
	}else if(input>=90&&input<=100){
		alert("1等生");
	}else if(input>=80){
		alert("2等生");
	}else if(input>=70){
		alert("3等生");
	}else if(input>=60){
		alert("4等生");
	}else if(input>=50){
		alert("5等生");
	}else if(input>=40){
		alert("6等生");
	}else if(input>=30){
		alert("7等生");
	}else if(input>=20){
		alert("8等生");
	}else if(input>=10){
		alert("9等生");
	}else if(input>=0){
		alert("10等生");
	}

}