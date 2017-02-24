window.onload=function(){
	
// 导航栏
 	var header = document.getElementById("header-nav");
 	var li =  header.getElementsByTagName('li');
 	for(var i=1;i<li.length;i++){
 		li[i].addEventListener("mouseover",function(){
 			this.getElementsByTagName('div')[0].style.display='block';
 			var a = this.getElementsByTagName('a');
 			for(var i=0;i<a.length;i++){
 				a[i].addEventListener("mouseover",function(){
 					for(var i=0;i<a.length;i++){
 						a[i].style.color='#000'
 					}
 					this.style.color='rgb(53,181,88)';
 				},false)
 			}
 			
 		},false);
 		li[i].addEventListener("mouseout",function(){
 		
 			this.getElementsByTagName('div')[0].style.display='none';
 			
 		},false);

 	}

 	var appbtn = document.getElementById("app-btn");
 	console.info(appbtn);
 	var appbtndiv = appbtn.getElementsByTagName('div')[0];
 	console.info(appbtndiv);
 	appbtn.addEventListener("mouseover",function(){
 		if(appbtndiv.style.display=='none'){
 			appbtndiv.style.display='block';
 		}

 	},false);
 	appbtn.addEventListener("mouseout",function(){
 			appbtndiv.style.display="none";
 	},false);

 	var loginbtn = document.getElementById("login-btn");
 	var loginbtndiv = loginbtn.getElementsByTagName('dl')[0];
 	var logina = loginbtndiv.getElementsByTagName('a');

 	loginbtn.addEventListener("mouseover",function(){
 		if(loginbtndiv.style.display=='none'){
 			loginbtndiv.style.display='block';
 		}
 		
 	},false);
 	loginbtn.addEventListener("mouseout",function(){
 			loginbtndiv.style.display="none";
 	},false);

 	for(var i=0;i<logina.length;i++){
 			logina[i].addEventListener("mouseover",function(){
 				for(var i=0;i<logina.length;i++){
 					logina[i].style.color="#000";	
 				}
 				this.style.color="rgb(53,181,88)";	
 			},false);
 		}
// 底部动画
	var ios =document.getElementById("downios");
	var and =document.getElementById("downand");
	var iosimg = document.getElementById("downiosimg");
	var andimg = document.getElementById("downandimg"); 
	ios.addEventListener("mouseover",function(){
		if (iosimg.style.display=='none') {
			iosimg.style.display='block';	
		}else{
			iosimg.style.display='none';	
		}

	ios.addEventListener("mouseout",function(){
		iosimg.style.display='none';
	})
	},false)

	and.addEventListener("mouseover",function(){
		if (andimg.style.display=='none') {
			andimg.style.display='block';	
		}else{
			andimg.style.display='none';	
		}

	and.addEventListener("mouseout",function(){
		andimg.style.display='none';
	})
	},false)

	var jkapp = document.getElementById("jk-app");
	var top = document.getElementById("top");
	jkapp.addEventListener("mouseover",function(){
		jkapp.getElementsByTagName('div')[0].style.display='block';
	},false);
	jkapp.addEventListener("mouseout",function(){
		jkapp.getElementsByTagName('div')[0].style.display='none';
	},false);
	top.addEventListener("click",function(){
		top.style.display='none';
	},false);

}


