var arr = new Array("a","x","b","d","m","a","k","m","p","j","a");
var count=new Array();//储存重复计数
var add={};//储存字符地址
document.write("原数组"+arr+"<br/>");
arr.forEach(function(value,index){
	if(count[value]){//判断是否相同
		count[value]++;//相同后增加
		add[value]+=" "+index;//记录位置并付给当前字符
	}else{
		count[value]=1;
		add[value]=index;
	}
});
//打印函数
function writeObj(obj){
	var description="";
	for(var i in obj){
		var property =obj[i];
		description +=i+"="+property+"||";
	}
	document.write(description+"<br/>");
}
writeObj(count);
writeObj(add);
var max=0;
var letter;
for(var d in count){
	if(count[d]>max){
		max=count[d];//把最大的count[i]字符计数付给max
		letter =d;//记录count的位置
	}
}
document.write("最多的是"+letter+"共"+max+"个");
document.write ("位置分布"+add[letter]);
