function Banners(classname, listType) {
	this.classEl = document.querySelector(classname);
	this.imgList = this.classEl.querySelector(listType);
	// console.log(this.classEl);
	this.imgList_dian = this.classEl.querySelectorAll(".small_dian_box>span");
	this.imgList_btn_box = this.classEl.querySelectorAll(".small_btn_box>span");
	// console.log(this.imgList_btn_box);
	// console.log(this.imgList_btn_box.length);

	 // console.log(this.imgList.children);
	this.startX = 0;
	this.endX = 0;
	this.index = 0;
	this.offset = this.classEl.offsetWidth;
	this.left = -this.offset;
	// console.log(this.left);
	this.init();
	this.isTouchMove = false;
	

}

Banners.prototype.init = function() {
	var self = this;
	this.classEl.addEventListener("touchstart", function(e) {
		self.startX = e.targetTouches[0].pageX;
		clearInterval(self.timer);
	}, false)

	this.classEl.addEventListener("touchmove", function(e) {
		self.endX = e.targetTouches[0].pageX;
		self.isTouchMove = true;
	}, false)

	this.classEl.addEventListener("touchend", function(e) {
		// self.AutoSwiperSwitch();
		if (self.isTouchMove == false) {
			return;
		}
		var cz = self.startX - self.endX;
		if (Math.abs(cz) > 15) {
			if (self.imgList.className == "banner1") {
				if (self.left == -(self.imgList.children.length - 2) * self.offset || self.left == -self.offset) {
					// console.log(self.left,-self.offset)
					self.imgList.style.transition = "transform 0.3s";
				}
				if (cz > 0) {
					self.SwiperSwitchImg();
				} else {
					self.left += self.offset;
					if (self.left == 0) {
						setTimeout(function() {
							self.left = -(self.imgList.children.length - 2) * self.offset
							self.imgList.style.transition = "none";
							self.imgList.style.transform = "translateX(" + self.left + "px)";
						}, 300);
					}
					
				}
				self.imgList.style.transform = "translateX(" + self.left + "px)";

			} else {
				self.left = 0;
				if (cz > 0) {
					self.SwiperSwitchImg();
				} else {
					self.imgList_dian[0].className = "small_dian_active";
					self.left += 0;
					self.imgList.style.transform = "translateX(" + self.left + "px)"
					self.imgList_dian[1].className = "";
				}
			}
		}
		self.isTouchMove = false;
	}, false)

	this.AutoSwiperSwitch();
	// this.Smalldian();
}

Banners.prototype.AutoSwiperSwitch = function() {
	var self = this;
	timer = setInterval(function() {
		if (self.imgList.className == "banner1") {
			if (self.left == -self.offset) {
				self.imgList.style.transition = "transform 0.3s";
			}
			self.SwiperSwitchImg();
			// self.Smalldian();
			self.imgList.style.transform = "translateX(" + self.left + "px)";
		}
	}, 2000)
}

// this.imgList_btn_box.length
// Banners.prototype.Smalldian = function(){
// 			var self=this;
// 			for(var i=0;i<self.imgList_btn_box.length;i++){
// 				(function(i){
// 						self.imgList_btn_box[i].addEventListener("click", function(){
// 						self.imgList_btn_box[self.index].className="";
// 						self.index=i;
// 						console.log(self.index);
// 						self.SwiperSwitchImg();
// 						self.imgList_btn_box[self.index].className="small_btn_active";
// 					},false)
// 				})(i)
// 		}
// }
           


Banners.prototype.SwiperSwitchImg = function(i) {
	var self = this;
	if (self.imgList.className == "banner1") {
		self.left -= self.offset;
		if (self.left == -(self.imgList.children.length - 1) * self.offset) {
			setTimeout(function() {
						i++;
						self.left = -self.offset;
						self.imgList.style.transition = "none";
						self.imgList.style.transform = "translateX(" + self.left + "px)";
						// console.log(i);
			}, 300);
		}
	} else {
			self.imgList_dian[0].className = "";
			self.left = -self.offset + 20;
			self.imgList.style.transform = "translateX(" + self.left + "px)";
			self.imgList_dian[1].className = "small_dian_active";
	}
}
