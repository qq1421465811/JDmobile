var buyCar=document.querySelector(".section_list");
var shopItems=buyCar.querySelectorAll(".section_item");
var rselectzt = document.querySelectorAll(".ridao_selsect");
var more = document.querySelector(".more-nav");
var re = document.querySelector(".return-view");

// console.log(rselectzt);
// var qx=buyCar.querySelector(".item_connect>.ridao_selsect");
// console.log(qx);

var selectBoxs=[];
var index = 0;
var all=document.querySelector(".price_num");
var r_price= buyCar.querySelectorAll(".em_price");
var snum = buyCar.querySelectorAll(".num_text");
var jianshu = document.querySelector(".jianshu");

var  all2 = 0;
var del =  buyCar.querySelectorAll(".m_action_item"); 
// console.log(del);
jianshu.innerText = "("+shopItems.length+")";

more.onclick = function(){
	if(more.children[1].style.display=="none"){
		more.children[1].style.display="block";
	}else{
		more.children[1].style.display="none";
	}
}
re.onclick =function(){
	var re = document.querySelector(".nav_bottom_box");
	var panel = document.querySelectorAll(".panel");
	re.children[0].className = "active";
	panel[1].style.display = "none";
	
	re.children[1].className = "";
	panel[0].style.display = "block";
}
for (var i = 0; i < shopItems.length; i++) {
		(function(i) {
			rselectzt[i].addEventListener("click", function() {
				rselectzt[index].className = "";
				rselectzt[index].style.display = "none";
				index = i;
				 console.log(index);
				rselectzt[index].className = "active";
				rselectzt[index].style.display = "block";
			}, false)
		})(i);
	}

for(var i=0;i<3;i++){
		all2 += parseInt(snum[i].children[0].value*r_price[i].innerText);
}
all.innerText = all2;

for(var i=0;i<shopItems.length;i++){
	var selectBox=shopItems[i].querySelectorAll(".item_connect>.ridao_selsect");
	selectBoxs.push(selectBox);
	(function(i){

		shopItems[i].addEventListener("click",function(e){
			// console.log(shopItems[i]);
			var target=e.target;
			if(target.className=="ridao_selsect active"){
				console.log(selectBoxs[i]);	
				selectBoxs[i].style.display = "none";
				console.log(selectBoxs[i]);	
// var bef = window.getComputedStyle(selectBoxs[i],"::before").getPropertyValue("display");
				//SingleSelect(index);
			}
			
			if(target.className=="add" || target.className=="jian"){
				Ateol(i,target);
			}
			
			if(target.className=="m_action_item"){
				Del(i,target);
			}
		},false);	
		
	})(i);

}

function Jian(i,target){
	var nextSib=target.nextElementSibling;
	// console.log(nextSib.children[0].value);
	var num=parseInt(nextSib.children[0].value);
	if(num>1){
		num--;
		nextSib.children[0].value=num;
		if(num==1){
			target.className="jian disable";
		}
	}
}

function Add(i,target){
	var prevSib=target.previousElementSibling;
	var sPrevSib=prevSib.previousElementSibling;
	// console.log(prevSib,sPrevSib);
	if(sPrevSib.className=="jian disable"){
		sPrevSib.className="jian";
	}
	var num=parseInt(prevSib.children[0].value);
	num++;
	prevSib.children[0].value=num;
}

function Ateol(i,target){
		if(target.className.substr(0,4)=="jian"){
			Jian(i,target);
			all2 -= parseInt(r_price[i].innerText);
			all.innerText =  all2;
		}else if(target.className=="add"){
			Add(i,target);
			all2 += parseInt(r_price[i].innerText);
			all.innerText =  all2;
			console.log(snum[0].children[0].value);
		}
}
function Del(i,target){
	shopItems[i].parentNode.removeChild(shopItems[i]);
	// shopItems[i].className="";
	del[1].addEventListener("click", function(){
		jianshu.innerText = "("+shopItems.length+")";
	},false);


	
	// console.log(shopItems.length-1);
}
