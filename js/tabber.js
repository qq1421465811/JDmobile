function Panel(panels,tabList) {
	this.panels = document.querySelectorAll(panels);
	this.tabList = document.querySelectorAll(tabList);

	// console.log(this.panels);
	// console.log(this.tabList);
	
    this.index = 0;
	this.init();
	
}
Panel.prototype.init=function(){
	  var self= this;
	for (var i = 0; i < self.tabList.length; i++) {
		(function(i) {
			self.tabList[i].addEventListener("click", function() {
				self.tabList[self.index].className = "";
				self.panels[self.index].style.display = "none";
				// self.panels[self.index].className = "commodity_list"
				self.index = i;
				// console.log(self.index);

				self.tabList[self.index].className = "active";
				self.panels[self.index].style.display = "block";
				// self.panels[self.index].className = "commodity_list panel_selsect"
			}, false)
		})(i);
	}
	
}

	

// var tab_box = document.querySelector(".nav_bottom");
// var tabList = tab_box.querySelectorAll("a");

// var index = 0;
// var panels = document.querySelectorAll(".panel");

// 列表遍历
// tabList.forEach(function(item,i){
// 	tabList[i].addEventListener("click", function(){
// 		tabList[index].className = "";
// 		panels[index].style.display = "none";
// 		index=i;
// 		console.log(index);
// 		tabList[index].className = "active";
// 		panels[index].style.display = "block";
// 	},false)
// })

//自调用函数


