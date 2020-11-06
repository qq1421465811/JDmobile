function ReturnT(boxname, imgList) {
	this.box = document.querySelector(boxname);
	this.imgList = this.box.querySelector(imgList);
	// console.log(this.box);
	// console.log(this.imgList);
	this.startY = 0;
	this.endY = 0;
	this.index = 0;
	this.offset = this.box.offsetHeight;
	// console.log(this.offset);
	this.top = 0;
	this.init();
}

ReturnT.prototype.init = function() {
	var self = this;
	this.box.addEventListener("touchstart", function(e) {
		self.startY = e.targetTouches[0].pageY;
	}, false)
	this.box.addEventListener("touchmove", function(e) {
		self.endY = e.targetTouches[0].pageY;
		var cz = self.startY - self.endY;
		if(self.endY>self.offset/3){
			self.imgList.style.display ="block";
			
			self.imgList.addEventListener("click" ,function(){
			self.imgList.style.display ="none";
			
			// self.box.style.transform = "translateY(" + self.endY + "px)";
			// self.box.style.top = 0+"px";
			console.log(self.endY);
			},false);
		}else{
			self.imgList.style.display ="none";
		}	 
	}, false)

 }
