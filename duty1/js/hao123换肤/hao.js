var skin = document.getElementById("change");
var skindiv = document.getElementById("skindiv");
var cancelEvent = document.getElementById("cancel");//取消
var clearskin = document.getElementById("clearskin");//不使用皮肤
var saveskin = document.getElementById("saveskin");//保存
var bodyEvent = document.getElementById("body");
var coll = document.getElementById("collapseOne");
var li = coll.getElementsByTagName('li');
var hao123head = document.getElementById("hao123_head");
var hao123head1 = document.getElementById("hao123_head1");
var leftTop = document.getElementById("left-top");
var leftMain = document.getElementById("left-main");
var rightMain0 = document.getElementById("right-main0");
var rightMain1 = document.getElementById("right-main1");
var nav = document.getElementById("nav");
var navli = document.getElementById("nav").getElementsByTagName('li');
var searchtopli = document.getElementById("search-top").getElementsByTagName('li');
var imgbd = document.getElementById("imgbd");

//先判断localStorage是否有值
if(localStorage.getItem("skin")!=""){
	bodyEvent.style.backgroundColor=localStorage.getItem("skin");
	hao123head.style.backgroundColor=localStorage.getItem("skin0");
	hao123head1.style.backgroundColor=localStorage.getItem("skin0");
	leftMain.style.backgroundColor=localStorage.getItem("skin0");
	rightMain0.style.backgroundColor=localStorage.getItem("skin0");
	rightMain1.style.backgroundColor=localStorage.getItem("skin0");
	nav.style.borderColor=localStorage.getItem("skin");

	for(var i=0;i<navli.length;i++){
		navli[i].style.color=localStorage.getItem("skin0");
	}
	for(var i=0;i<searchtopli.length;i++){
		searchtopli[i].style.color=localStorage.getItem("skin0");
	}
}

	
	skin.addEventListener("click",displaySkin,false);//换肤操作
	cancelEvent.addEventListener("click",displaySkin,false);//取消操作
	clearskin.addEventListener("click",clearSkin,false);//不使用皮肤操作
	//保存操作
	saveskin.addEventListener("click",saveSkin,false);
	saveskin.addEventListener("click",displaySkin,false);
	//换肤
	li[0].addEventListener("click",changeSkin0,false);
	li[1].addEventListener("click",changeSkin1,false);
	li[2].addEventListener("click",changeSkin2,false);
	li[3].addEventListener("click",changeSkin3,false);
	li[4].addEventListener("click",changeSkin4,false);
	li[5].addEventListener("click",changeSkin5,false);
	
//显示隐藏皮肤栏
function displaySkin(){	
	if(skindiv.style.display=="block"){
		skindiv.style.display="none";
	}else{
		skindiv.style.display="block";
	}
}
//清楚皮肤效果
function clearSkin(){
	localStorage.clear();//清楚保存的颜色值
	bodyEvent.style.backgroundColor="#fff";
	nav.style.borderColor="#FCFCFC";
	for(var i=0;i<navli.length;i++){
		navli[i].style.color="#333";
	}
	for(var i=0;i<searchtopli.length;i++){
		searchtopli[i].style.color="#333";
	}
}
//改变皮肤效果
function changeSkin0(){
	bodyEvent.style.backgroundColor="#F8C977";
	hao123head.style.backgroundColor="#fff";
	hao123head1.style.backgroundColor="#fff";
	leftMain.style.backgroundColor="#fff";
	rightMain0.style.backgroundColor="#fff";
	rightMain1.style.backgroundColor="#fff";
	nav.style.borderColor="#F8C977";

	for(var i=0;i<navli.length;i++){
		navli[i].style.color="#fff";
	}
	for(var i=0;i<searchtopli.length;i++){
		searchtopli[i].style.color="#fff";
	}
	imgbd.className="imgbd";
	localStorage.setItem("skin","#F8C977");//储存颜色值到storage
}
//皮肤
function changeSkin1(){
	bodyEvent.style.backgroundColor="#9EBFB8";
	hao123head.style.backgroundColor="#fff";
	hao123head1.style.backgroundColor="#fff";
	leftMain.style.backgroundColor="#fff";
	rightMain0.style.backgroundColor="#fff";
	rightMain1.style.backgroundColor="#fff";
	nav.style.borderColor="#9EBFB8";

	for(var i=0;i<navli.length;i++){
		navli[i].style.color="#fff";
	}
	for(var i=0;i<searchtopli.length;i++){
		searchtopli[i].style.color="#fff";
	}
	imgbd.className="imgbd";
	localStorage.setItem("skin","#9EBFB8");
}
//皮肤
function changeSkin2(){
	bodyEvent.style.backgroundColor="#8AD8DA";
	hao123head.style.backgroundColor="#fff";
	hao123head1.style.backgroundColor="#fff";
	leftMain.style.backgroundColor="#fff";
	rightMain0.style.backgroundColor="#fff";
	rightMain1.style.backgroundColor="#fff";
	nav.style.borderColor="#8AD8DA";

	for(var i=0;i<navli.length;i++){
		navli[i].style.color="#fff";
	}
	for(var i=0;i<searchtopli.length;i++){
		searchtopli[i].style.color="#fff";
	}
	imgbd.className="imgbd";
	localStorage.setItem("skin","#8AD8DA");
}
//皮肤
function changeSkin3(){
	bodyEvent.style.backgroundColor="#EB9D87";
	hao123head.style.backgroundColor="#fff";
	hao123head1.style.backgroundColor="#fff";
	leftMain.style.backgroundColor="#fff";
	rightMain0.style.backgroundColor="#fff";
	rightMain1.style.backgroundColor="#fff";
	nav.style.borderColor="#EB9D87";

	for(var i=0;i<navli.length;i++){
		navli[i].style.color="#fff";
	}
	for(var i=0;i<searchtopli.length;i++){
		searchtopli[i].style.color="#fff";
	}
	imgbd.className="imgbd";
	localStorage.setItem("skin","#EB9D87");
}
//皮肤
function changeSkin4(){
	bodyEvent.style.backgroundColor="#FBCC56";
	hao123head.style.backgroundColor="#fff";
	hao123head1.style.backgroundColor="#fff";
	leftMain.style.backgroundColor="#fff";
	rightMain0.style.backgroundColor="#fff";
	rightMain1.style.backgroundColor="#fff";
	nav.style.borderColor="#FBCC56";

	for(var i=0;i<navli.length;i++){
		navli[i].style.color="#fff";
	}
	for(var i=0;i<searchtopli.length;i++){
		searchtopli[i].style.color="#fff";
	}
	imgbd.className="imgbd";
	localStorage.setItem("skin","#FBCC56");
}
//皮肤
function changeSkin5(){
	bodyEvent.style.backgroundColor="#F8CDC4";
	hao123head.style.backgroundColor="#fff";
	hao123head1.style.backgroundColor="#fff";
	leftMain.style.backgroundColor="#fff";
	rightMain0.style.backgroundColor="#fff";
	rightMain1.style.backgroundColor="#fff";
	nav.style.borderColor="#F8CDC4";

	for(var i=0;i<navli.length;i++){
		navli[i].style.color="#fff";
	}
	for(var i=0;i<searchtopli.length;i++){
		searchtopli[i].style.color="#fff";
	}
	imgbd.className="imgbd";
	localStorage.setItem("skin","#F8CDC4");
}
//保存皮肤效果
function saveSkin(){
	localStorage.setItem("skin0","#fff");//储存相同的颜色值

}