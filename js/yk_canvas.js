function myCanvas(obj,cobj){
	this.obj 		 = obj;
	this.cobj 		 = cobj;
	this.lineWidth   = 3; 				// 线条宽带	
	this.fillStyle   = '#abcdef';		// 填充颜色
	this.bordercolor = '#abcdef';  		// 边框颜色
	this.strokeStyle =  'red'; 			// 线条颜色
	this.data        = [];  
}
myCanvas.prototype={

	init: function(){
		var that = this;
		that.cobj.fillStyle   = that.fillStyle;
		that.cobj.lineWidth   = that.lineWidth;
		that.cobj.bordercolor = that.bordercolor;
		that.cobj.strokeStyle = that.strokeStyle;
	},
	draw: function(){
		var that        = this;		
		var path        = [];
		var start       = {};
		var end         = {};  
		that.obj.addEventListener('touchstart',function(e){
			that.init()
			e.preventDefault();
			start.x = e.touches[0].clientX*2;
			start.y = e.touches[0].clientY*2;			
			that.cobj.beginPath();
			that.cobj.moveTo(start.x,start.y);

			path    = [];
		});

		that.obj.addEventListener('touchmove',function(e){
			e.preventDefault();			
			end.x    = e.touches[0].clientX*2;
			end.y    = e.touches[0].clientY*2;
			that.cobj.quadraticCurveTo(start.x,start.y,(start.x+end.x)/2,(start.y+end.y)/2);
			that.cobj.stroke();
			start.x  = end.x;
			start.y  = end.y;

			var copy = {
				x:start.x,
				y:start.y
			};
			path.push(copy)

		})

		that.obj.addEventListener('touchend',function(e){
			that.data.push(path);
			console.log(that.data)

			//转化为字符串 存储在本地
			localStorage.dataCavans = JSON.stringify(that.data);
			window.location.href =	"draw.html"; 

		});	
	},

	// 重绘
	copy:function(){

		var that = this;
		that.init();

		var start = {}
		var end   = {}
		var path = JSON.parse(localStorage.dataCavans);  
		var len  = path.length;

		var x = 0, y = 0, pp = path[y][x];
		var int = setInterval (function () {
			if (!path[y]) return clearInterval(int);
			var p = path[y][x];
			if (!p) {
				(y++) & (x = 0) & (pp = path[y] ? path[y][x] : {});
				that.cobj.beginPath() & that.cobj.moveTo(pp.x,pp.y);
				return;
			}
			that.cobj.quadraticCurveTo(pp.x,pp.y,(pp.x+p.x)/2,((pp.y+p.y)/2));
			that.cobj.stroke();
			pp = p;
			x++;
		}, 20);

	}

}



