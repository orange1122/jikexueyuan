/// window.alert("hello")
// document.write("<h1>hello world</h1>")
// temp =1;
// A="2";
// alert(temp+A);


// document.write("<table border='1'>");
// for (var i = 1; i <=9 ; i++) {
// 	document.write("<tr>");
// 	for(var y=1;y<=i;y++){
// 		document.write("<td>");
// 		document.write(i+"*"+y+"="+i*y);
// 		document.write("</td>");
// 	}
// 	document.write("</tr>");
// }


// document.write("</table>");



// var data = new Array(3);
// data[0]=10;


// for(var i =0;i <data.length;i++){
// 	data[i]=10*(i+1);

// 	document.write(data[i]+"&nbsp");
	
// }

// function add(x,y) {
// 	if(add.arguments.length == 2){
// 		return(x+y);
// 	}else if (add.arguments.length == 1){
// 		return(x);
// 	}
	
// }


// document.write(add(20))

// function persion(name,age){
// 	this.name=name;
// 	this.age=age;
// 	this.toString=function(){
// 		return "姓名："+this.name+"&nbsp年龄："+this.age 
// 	}
// }

// document.write(new persion("张三","10")) 


function loadfun(){
	alert("huanyingni");

}
function unloadfun(){
	alert("bie zou");
}


function onclick(){
	alert("你好");
}

function mousedown(){
	alert("niho");

}

var i=1;
function clickimg(){
	
		document.getElementById("img").src = i+".jpg";	
		
	
	
}


window.onload = function(){
	// var obj = document.getElementById("but");
	// alert(obj);
	// document.getElementById("but").addEventListener("click",function(){
	// 	onclick();
	// },false);

	document.getElementById("button").addEventListener("click",function(){
		
		if(i>1){
			i--;
			
		}
		clickimg();

		
	},false);
	document.getElementById("button1").addEventListener("click",function(){

		if(i<3){
			i++;
			
		}
		clickimg();

	},false);

}