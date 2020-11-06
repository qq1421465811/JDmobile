function Banners(boxname, imgList, imgList_dian) {
	this.box = document.querySelector(boxname);
	this.imgList = this.box.querySelector(imgList);
	this.imgList_dian = this.box.querySelectorAll(imgList_dian);
	this.startX = 0;
	this.endX = 0;
	this.index = 0;
	this.offset = this.box.offsetWidth;
	this.left = -this.offset;
	this.leftX = 0;
	this.a = 0;
	this.listimgoffset = [];
	this.init();
	this.isTouchMove = false;
}

Banners.prototype.init = function() {
	var self = this;
	this.box.addEventListener("touchstart", function(e) {
		self.startX = e.targetTouches[0].pageX;
		clearInterval(self.timer);
	}, false)
	this.box.addEventListener("touchmove", function(e) {
		self.endX = e.targetTouches[0].pageX;
		self.isTouchMove=true;
		// console.log(e.isTouchMove)
		var cz = self.startX - self.endX;
	
		if(cz>0){
			if (self.imgList.className == "banner3" &&self.leftX>=-457.62){
				// console.log(cz);
				self.leftX -=Math.abs(cz)*0.03;
				self.imgList.style.transform = "translateX(" + self.leftX + "px)";
			 	// console.log("向左滑动"+self.leftX);
			 }	
		}else{
			
			if (self.imgList.className == "banner3" &&self.leftX<0){
				self.leftX +=Math.abs(cz)*0.03;
				self.imgList.style.transform = "translateX(" + self.leftX + "px)";
			 }	
		}

				 
	}, false)
	this.box.addEventListener("touchend", function(e) {
		var cz = self.startX - self.endX;
		if(self.isTouchMove==false){
		return;
		}
		if(Math.abs(cz) >15) {
			if (self.left == -(self.imgList.children.length - 2) * self.offset || self.left == -self.offset) {
				self.imgList.style.transition = "transform 0.3s";
			}
			if(cz>0){
				self.SwiperSwitchImg();
			}else{
			if (self.imgList.className == "banner1") {
						
						self.left +=self.offset;
						self.imgList.style.transform = "translateX(" + self.left + "px)";
						// console.log("向右滑动"+self.left);
						// self.numprev();
						if (self.left == 0) {
							setTimeout(function() {
								self.left = -(self.imgList.children.length - 2) * self.offset;
								self.imgList.style.transition = "none";
								self.imgList.style.transform = "translateX(" + self.left + "px)";
							}, 300);
						}
					}
			if (self.imgList.className == "banner2"){
				self.left=0;
				self.imgList_dian[1].className = "";
				self.imgList_dian[0].className = "small_btn_active";
				self.imgList.style.transform = "translateX(" + self.left + "px)";
			 	// console.log("向右滑动"+self.left);
			 }	
 		 
			}
			self.numnext();
		 }
		self.isTouchMove=false;
		}, false) 
		self.AutoSwiperSwitch();
}

Banners.prototype.numnext = function(){
		var self = this;
		cz = self.startX - self.endX;
		if(cz<0){
			if(self.imgList.className == "banner1"){
				// self.a += 1;
				// 	self.imgList_dian[self.a].className = "";
				// 	self.imgList_dian[self.a+1].className = "small_btn_active";
				// 	if(parseInt(self.a) == 6){
				// 		self.imgList_dian[self.a].className = "small_btn_active";
				// 		self.imgList_dian[self.a].className = "";
				// 		self.a=1;
				// 		self.imgList_dian[self.a].className = "small_btn_active";
				// 		self.a=0;
				// 	}
				
				 if(parseInt(self.a) == 0){
				 	self.imgList_dian[self.a].className = "small_btn_active";
				 	self.imgList_dian[self.a+1].className = "";
				 	self.a=6;
				 	self.imgList_dian[self.a].className = "small_btn_active";
				 } 
					self.a -= 1;
					self.imgList_dian[self.a+2].className = "";
					self.imgList_dian[self.a+1].className = "small_btn_active";
				

					
			}
			
		}else{
			if(self.imgList.className == "banner1"){
				self.a += 1;
					self.imgList_dian[self.a].className = "";
					self.imgList_dian[self.a+1].className = "small_btn_active";
					if(parseInt(self.a) == 6){
						self.imgList_dian[self.a].className = "small_btn_active";
						self.imgList_dian[self.a].className = "";
						self.a=1;
						self.imgList_dian[self.a].className = "small_btn_active";
						self.a=0;
					}
				}	
			
			}

	}
Banners.prototype.SwiperSwitchImg = function() {
			var self = this;
			var cz = self.startX - self.endX;
		if (self.imgList.className == "banner1") {
			self.left -=self.offset;
			self.imgList.style.transform = "translateX(" + self.left + "px)";
			 // self.numnext();
			// console.log("向左滑动"+self.left);
			if (self.left == -(self.imgList.children.length - 1) * self.offset) {
				setTimeout(function() {
							self.left = -self.offset;
							self.imgList.style.transition = "none";
							self.imgList.style.transform = "translateX(" + self.left + "px)";
							// console.log(i);
				}, 300);
			}
		}
		if (self.imgList.className == "banner2"){
			self.left =20;
			self.left -=self.offset;
			self.imgList.style.transform = "translateX(" + self.left + "px)";
			self.imgList_dian[0].className = "";
			self.imgList_dian[1].className = "small_btn_active";
			// console.log("向左滑动"+self.left);
		}	
	
}
Banners.prototype.AutoSwiperSwitch = function() {
	var self = this;
	timer = setInterval(function() {
		if (self.imgList.className == "banner1") {
			if (self.left == -self.offset) {
				self.imgList.style.transition = "transform 0.3s";
			}
			self.SwiperSwitchImg();
			self.numnext();
			self.imgList.style.transform = "translateX(" + self.left + "px)";
		}
	}, 2000)
}
