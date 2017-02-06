function myCanvas(obj,cobj){
	this.obj 		 = obj;
	this.cobj 		 = cobj;
	this.lineWidth = 5; 		// 线条宽带	
	this.fillStyle   = 'red';	// 填充颜色
	this.bordercolor = '#000';  // 边框颜色 
	this.init();
	this.start();
}
myCanvas.prototype={

	init: function(){
		var that = this;
		that.cobj.fillStyle = that.fillStyle;
		that.cobj.lineWidth = that.lineWidth;
	},
	start: function(){
		var that = this;
		var startX,startY,endX,endY;
		that.obj.addEventListener('touchstart',function(e){
			e.preventDefault();
			startX = e.touches[0].clientX*2;
			startY = e.touches[0].clientY*2;
			that.cobj.beginPath();
			that.cobj.moveTo(startX,startY);

		});

		that.obj.addEventListener('touchmove',function(e){
			e.preventDefault();
			endX  = e.touches[0].clientX*2;
			endY  = e.touches[0].clientY*2;
			that.cobj.quadraticCurveTo(startX,startY,(startX+endX)/2,(startY+endY)/2);
			that.cobj.stroke();
			startX = endX;
			startY = endY;
		})

		that.obj.addEventListener('touchend',function(e){
			
		});	
	}

}



