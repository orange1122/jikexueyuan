window.onload=function(){
	var box = document.getElementById("box");
	var ul = document.getElementById("myul");
	var li = ul.getElementsByTagName('li');
	console.info(li)
	var div = box.getElementsByTagName("div")
	console.info(div)
	var up = document.getElementById("up");
	var next = document.getElementById("next");
	var inow =0;
	for(var i=0;i<li.length;i++){
		li[i].id=i;

		li[i].addEventListener("mouseover",function(){
			for(var i=0;i<li.length;i++){
				li[i].className="";
				div[i].style.display="none";
				
			}
			this.className="active";
			div[this.id].style.display="block"
			inow =this.id;
			
			
		},false);
		
	}

	up.addEventListener("click",function(){
	
		inow--;
		if(inow==-1){
			inow=2;
		}
		changeimg();
	li[inow].className="active"	
	},false);

	next.addEventListener("click",function(){
		inow++;
		if(inow==3){
			inow=0;
		}
		changeimg();
		
	},false);

function changeimg(){
	for(var i=0;i<li.length;i++){
		li[i].className='';
		div[i].style.display='none';
	}
	li[inow].className="active";
	div[inow].style.display='block';
}

}