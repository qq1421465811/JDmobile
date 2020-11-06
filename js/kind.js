function Kind(boxname, list,lists) {
	this.leftList = document.querySelector(boxname);
	this.list = this.leftList.querySelector(list);
	this.lists = this.leftList.querySelectorAll(lists);
	this.startTop=0;
	this.tTop=0;
	this.endPos;
	this.cz;
	this.flIndex=0;
	this.offsetTop=1904-window.innerHeight;
	this.init();
}

Kind.prototype.init = function() {
	 var self = this;
	this.leftList.addEventListener("touchstart", function(e) {
			self.startTop=e.targetTouches[0].pageY;	
			// console.log("开始位置"+startTop);
		}, false)
	this.leftList.addEventListener("touchmove", function(e) {
			// self.tabList.style.transition="none";
			 self.endPos = e.targetTouches[0].pageY;
			 self.cz=self.startTop-self.endPos;
			 // tTop=tabList.offsetTop;
			// console.log("offsetTop："+offsetTop);
		
				 if(self.cz>0 && self.tTop>-self.offsetTop-200){
					 
				 	 self.tTop-=Math.abs(self.cz)*0.05;
					 // tabList.style.top=tTop+"px";
					 self.list.style.transform = "translateY(" + self.tTop + "px)";
					 // console.log("tTop:"+tTop);
				
				 }else{
					 if (self.cz < 0 && self.tTop < 200) {
						 self.tTop+=Math.abs(self.cz)*0.05;
						 // console.log("tTop:"+tTop);
						 self.list.style.transform = "translateY(" + self.tTop + "px)";
					}
					 
				 }
				 
				 
	
	}, false)
	this.leftList.addEventListener("touchend", function(e){
		
		if(self.cz>0){
			if(self.tTop<-self.offsetTop){
				self.tTop += window.innerHeight*0.1;
				// console.log("tTop:"+self.tTop);
				// console.log("offsetTop："+-self.offsetTop);
				self.list.style.transform = "translateY(" + self.tTop + "px)";
				self.list.style.transition="transform 0.4s";
			}
		
		}
		if(self.cz<0){
			if(self.tTop>0){
			// console.log("22222："+offsetTop);
			// console.log("tTop111:"+tTop);
				self.tTop -=self.tTop;
				self.list.style.transform = "translateY(" + self.tTop + "px)";
				self.list.style.transition="transform 0.4s";
			}
	
		}		
	
		// console.log("差值2:"+self.cz);
		
	}, false) 
}

