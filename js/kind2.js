var rightList = document.querySelector(".category_body_right_list_box")
var lists = document.querySelectorAll(".commodity_list");
var leftlist = document.querySelector(".category>ul");
var startTop = 0;
var tTop = 0;
var endPos;
var cz;
var Index = 0;
var offsetTop = 1904 - window.innerHeight;
var i = 0;

rightList.addEventListener("touchstart", function(e) {
	startTop = e.targetTouches[0].pageY;
	// console.log("开始位置"+startTop);
}, false)
	rightList.addEventListener("touchmove", function(e) {
				endPos = e.targetTouches[0].pageY;
				cz = startTop - endPos;
				// tTop=list.offsetTop;
				// console.log("offsetTop："+offsetTop);
			
				if (cz > 0 && tTop > -350) {
					tTop -= Math.abs(cz) * 0.05;
					// list.style.top=tTop+"px";
					lists[0].style.transform = "translateY(" + tTop + "px)";
					// console.log("tTop:"+tTop);
			
				} else {
					if (cz < 0 && tTop < 200) {
						tTop += Math.abs(cz) * 0.05;
						// console.log("tTop:"+tTop);
						lists[0].style.transform = "translateY(" + tTop + "px)";
						lists[0].style.transition = "transform 0.4s";
					}
				}
			
			
			}, false)
	rightList.addEventListener("touchend", function(e) {
				if (cz > 0) {
					if (tTop < 0) {
						tTop += window.innerHeight * 0.1;
						// console.log("tTop:" + tTop);
						// console.log("offsetTop：" + -offsetTop);
						lists[0].style.transform = "translateY(" + tTop + "px)";
						lists[0].style.transition = "transform 0.4s";
					}
				}
				if (cz < 0) {
					if (tTop > 0) {
						// console.log("22222："+offsetTop);
						tTop -=tTop;
						// console.log("tTop111:"+tTop);
						lists[0].style.transform = "translateY(" + tTop + "px)";
						lists[0].style.transition = "transform 0.4s";
						// tTop =0;
					}
			
				}
				// console.log("差值2:" + cz);
			}, false)
			
for (i = 0; i < lists.length; i++) {
	(function(i) {
		leftlist.children[i].addEventListener("click", function() {
			console.log(i);
			lists[Index].className = "commodity_list";
			Index = i;
			lists[Index].className = "commodity_list panel_selsect";
			rightList.addEventListener("touchmove", function(e) {
				endPos = e.targetTouches[0].pageY;
				cz = startTop - endPos;
				// tTop=list.offsetTop;
				// console.log("offsetTop："+offsetTop);
			
				if (cz > 0 && tTop > -350) {
					tTop -= Math.abs(cz) * 0.05;
					// list.style.top=tTop+"px";
					lists[i].style.transform = "translateY(" + tTop + "px)";
					// console.log("tTop:"+tTop);
			
				} else {
					if (cz < 0 && tTop < 200) {
						tTop += Math.abs(cz) * 0.05;
						// console.log("tTop:"+tTop);
						lists[i].style.transform = "translateY(" + tTop + "px)";
						lists[i].style.transition = "transform 0.4s";
					}
				}
			
			
			}, false)
			rightList.addEventListener("touchend", function(e) {
				if (cz > 0) {
					if (tTop < 0) {
						tTop += window.innerHeight * 0.1;
						console.log("tTop:" + tTop);
						console.log("offsetTop：" + -offsetTop);
						lists[i].style.transform = "translateY(" + tTop + "px)";
						lists[i].style.transition = "transform 0.4s";
					}
				}
				// console.log("tTop111:"+tTop);
				if (cz < 0) {
					// console.log("tTop111:"+tTop);
					if (tTop >= 0) {
						tTop =0;
						lists[i].style.transform = "translateY(" + tTop + "px)";
						lists[i].style.transition = "transform 0.4s";
					}
				}
				// console.log("差值2:" + cz);
			}, false)
		}, false);
	})(i)

}
