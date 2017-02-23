window.onload= function(){
	//清除对象
	var clear = document.getElementById("clear");
	//显示结果
	var result = document.getElementById("result");
	var plus = document.getElementById("plus");//+
	var minus = document.getElementById("minus");//-
	var time = document.getElementById("time");//*
	var divide = document.getElementById("divide");// /
	var point = document.getElementById("point");// .
	var sin = document.getElementById("sin");// sin
	var cos  = document.getElementById("cos");// cos
	var minus_sign = document.getElementById("minus_sign");//为数字添加或者去掉负号
	var equals =document.getElementById("equals");// =
	//取出0-9数字
	var numzero = document.getElementById("numzero");
	var numone = document.getElementById("numone");
	var numtwo = document.getElementById("numtwo");
	var numthree = document.getElementById("numthree");
	var numfore = document.getElementById("numfore");
	var numfive= document.getElementById("numfive");
	var numsix =document.getElementById("numsix");
	var numseven=document.getElementById("numseven");
	var numeight = document.getElementById("numeight");
	var numnine = document.getElementById("numnine");



	var temp="";//储存运算的变量
	var temp1="";//控制显示的变量
	if(numzero.addEventListener){//适配大多数浏览器
		//清除
		clear.addEventListener("click",clearEvent,false);
		
		//输入数字绑定单机事件
		numzero.addEventListener("click",zeroEvent,false);
		numone.addEventListener("click",oneEvent,false);
		numtwo.addEventListener("click",twoEvent,false);
		numthree.addEventListener("click",threeEvent,false);
		numfore.addEventListener("click",foreEvent,false);
		numfive.addEventListener("click",fiveEvent,false);
		numsix.addEventListener("click",sixEvent,false);
		numseven.addEventListener("click",sevenEvent,false);
		numeight.addEventListener("click",eightEvent,false);
		numnine.addEventListener("click",nineEvent,false);
		//运算符号绑定单击事件
		plus.addEventListener("click",plusEvent,false);
		minus.addEventListener("click",minusEvent,false);
		time.addEventListener("click",timeEvent,false);
		divide.addEventListener("click",divideEvent,false);
		point.addEventListener("click",pointEvent,false);
		sin.addEventListener("click",sinEvent,false);
		cos.addEventListener("click",cosEvent,false);
		minus_sign.addEventListener("click",minus_signEvent,false);
		equals.addEventListener("click",equalsEvent,false);
	}else{//兼容IE8
		numzero.attachEvent("onclick",zeroEvent);
		numone.attachEvent("onclick",oneEvent);
		numtwo.attachEvent("onclick",twoEvent);
		numthree.attachEvent("onclick",threeEvent);
		numfore.attachEvent("onclick",foreEvent);
		numfive.attachEvent("onclick",fiveEvent);
		numsix.attachEvent("onclick",sixEvent);
		numseven.attachEvent("onclick",sevenEvent);
		numeight.attachEvent("onclick",eightEvent);
		numnine.attachEvent("onclick",nineEvent);
		plus.attachEvent("onclick",plusEvent);
		minus.attachEvent("onclick",minusEvent);
		time.attachEvent("onclick",timeEvent);
		divide.attachEvent("onclick",divideEvent);
		point.attachEvent("onclick",pointEvent);
		sin.attachEvent("onclick",sinEvent);
		cos.attachEvent("onclick",cosEvent);
		minus_sign.attachEvent("onclick",minus_signEvent);
		equals.attachEvent("onclick",equalsEvent);
		//清除
		clear.attachEvent("onclick",clearEvent);
		
	}
	//输入0方法
	function zeroEvent(){
		var regex =/^[+/*]+$/gi;//校验用户先输入运算符的情况
		var regex1 =/^[-]{2,}$/gi;//校验用户先输入运算符的情况
		if(regex.test(temp)||regex1.test(temp)){
			// console.info("NaN");
			result.innerHTML="NaN";
		}else{
			temp +=0;
			temp1 +=0;
			result.innerHTML=temp1;
		}
		// result.innerHTML=eval(temp);
		console.info(temp);
	}
	//输入1方法
	function oneEvent(){
		var regex =/^[+/*]+$/gi;
		var regex1 =/^[-]{2,}$/gi;

		if(regex.test(temp)||regex1.test(temp)){
			// console.info("NaN");
			result.innerHTML="NaN";
		}else{
			temp +=1;
			temp1 +=1;
			result.innerHTML=temp1;
		// result.innerHTML=temp;
		console.info(temp);
		}
	}
	//输入2方法
	function twoEvent(){
		var regex =/^[+/*]+$/gi;
		var regex1 =/^[-]{2,}$/gi;
		if(regex.test(temp)||regex1.test(temp)){
			// console.info("NaN");
			result.innerHTML="NaN";
		}else{
			temp +=2;
			temp1 +=2;
			result.innerHTML=temp1;
		// result.innerHTML=temp;
		console.info(temp);
		}
	}
	//输入3方法
	function threeEvent(){
		var regex =/^[+/*]+$/gi;
		var regex1 =/^[-]{2,}$/gi;
		if(regex.test(temp)||regex1.test(temp)){
			// console.info("NaN");
			result.innerHTML="NaN";
		}else{
			temp +=3;
			temp1 +=3;
			result.innerHTML=temp1;
		// result.innerHTML=temp;
		console.info(temp);
		}
	}
	//输入4方法
	function foreEvent(){
		var regex =/^[+/*]+$/gi;
		var regex1 =/^[-]{2,}$/gi;
		if(regex.test(temp)||regex1.test(temp)){
			// console.info("NaN");
			result.innerHTML="NaN";
		}else{
			temp +=4;
			temp1 +=4;
			result.innerHTML=temp1;
		// result.innerHTML=temp;
		console.info(temp);
		}
	}
	//输入5方法
	function fiveEvent() {
		var regex =/^[+/*]+$/gi;
		var regex1 =/^[-]{2,}$/gi;
		if(regex.test(temp)||regex1.test(temp)){
			// console.info("NaN");
			result.innerHTML="NaN";
		}else{
			temp +=5;
			temp1 +=5;
			result.innerHTML=temp1;
		// result.innerHTML=temp;
		console.info(temp);
		}
	}
	//输入6方法
	function sixEvent(){
		var regex =/^[+/*]+$/gi;
		var regex1 =/^[-]{2,}$/gi;
		if(regex.test(temp)||regex1.test(temp)){
			// console.info("NaN");
			result.innerHTML="NaN";
		}else{
			temp +=6;
			temp1 +=6;
			result.innerHTML=temp1;
		// result.innerHTML=temp;
		console.info(temp);
		}
	}
	//输入7方法
	function sevenEvent(){
		var regex =/^[+/*]+$/gi;
		var regex1 =/^[-]{2,}$/gi;
		if(regex.test(temp)||regex1.test(temp)){
			// console.info("NaN");
			result.innerHTML="NaN";
		}else{
			temp +=7;
			temp1 +=7;
			result.innerHTML=temp1;
		// result.innerHTML=temp;
		console.info(temp);
		}
	}
	//输入8方法
	function eightEvent(){
		var regex =/^[+/*]+$/gi;
		var regex1 =/^[-]{2,}$/gi;
		if(regex.test(temp)||regex1.test(temp)){
			// console.info("NaN");
			result.innerHTML="NaN";
		}else{
			temp +=8;
			temp1 +=8;
			result.innerHTML=temp1;
		// result.innerHTML=temp;
		console.info(temp);
		}
	}
	//输入9方法
	function nineEvent(){
		var regex =/^[+/*]+$/gi;
		var regex1 =/^[-]{2,}$/gi;
		if(regex.test(temp)||regex1.test(temp)){
			// console.info("NaN");
			result.innerHTML="NaN";
		}else{
			temp +=9;
			temp1 +=9;
			result.innerHTML=temp1;
		// result.innerHTML=temp;
		console.info(temp);
		}
	}

	//加法方法
	function plusEvent(){
		// result.innerHTML="+";
		var reg=/[+]{1,}$/gi;//校验输入过多加号情况
		if(reg.test(temp)){
			temp +="";
			temp1 +="";
		}else{
			temp +="+"
			temp1="";//输入符号之前清空之前输入的数字	
		}
	}

	//减法方法
	function minusEvent(){
		// result.innerHTML="-";		 
		var reg=/[-]{1,}$/gi;//校验输入过多减号情况
		if(reg.test(temp)){
			temp +="";
			temp1 +="";
		}else{
			temp +="-"
			temp1="";//输入符号之前清空之前输入的数字	
		}
	}
	
	//乘法方法
	function timeEvent(){
		// result.innerHTML="*";
		var reg=/[*]{1,}$/gi;//校验输入过多乘号情况
		if(reg.test(temp)){
			temp +="";
			temp1 +="";
		}else{
			temp +="*"
			temp1="";//输入符号之前清空之前输入的数字	
		}
	}

	//除法方法
	function divideEvent(){
		// result.innerHTML="/";
		var reg=/[/]{1,}$/gi;//校验输入过多除号情况
		if(reg.test(temp)){
			temp +="";
			temp1 +="";
		}else{
			temp +="/"
			temp1="";//输入符号之前清空之前输入的数字	
		}
	}

	//sin方法
	function sinEvent(){
		console.info(Math.sin(temp));
		temp=Math.sin(temp);
		result.innerHTML=temp;
		// temp1="";
	}

	//cos方法
	function cosEvent(){
		console.info(Math.cos(temp));
		temp=Math.cos(temp);
		result.innerHTML=temp;
		// temp1="";
	}
	
	//小数点添加方法
	function pointEvent(){
		// result.innerHTML=".";
		
		var reg1=/[.]{1,}$/gi;//对于多输入小数点情况验证
		if(reg1.test(temp1)){
			temp +="";
			temp1 +="";
		}else {
			temp +=".";
			temp1=temp1+".";
			result.innerHTML=temp1;	
		}
	}

	//添加取消负号方法
	var index=0;
	function minus_signEvent() {
		index++;
		// console.info(index);
		if(index%2==0){
			temp1 =Math.abs(temp);
			if(isNaN(temp1)){
				temp1="";
			}
			temp=temp1;
			// console.info("偶数次"+temp);
			result.innerHTML=temp1;	
		}else{	
			// temp +="-";
			temp1 ="-"+temp1;
			temp=temp1;
			// console.info("奇数次"+temp);
			result.innerHTML=temp1;
		}
	}
	
	//等于方法
	function equalsEvent(){
			var reg =/\/0/gi;//验证0为除数的情况
		if(reg.test(temp)){
			result.innerHTML="NaN";	
		}else{
			result.innerHTML=parseFloat(eval(temp).toFixed(1)) ;
			temp1=eval(temp);
			console.info(eval(temp1));	
		}
		//当计算完一组运算之后，清除之前保留的运算结果
		temp="";
		temp1="";
	}
	
	//清除方法
	function clearEvent(){
		result.innerHTML=0;
		temp="";
		temp1="";
	}
}



