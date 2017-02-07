window.onload = function (){

	// canvas 宽高
	var box       = document.getElementsByClassName('yk_box')[0];
	var canvas    = document.getElementById('yk_canvas');
	var cobj	  = canvas.getContext("2d");	
	canvas.width  = box.offsetWidth*2;
	canvas.height = box.offsetHeight*2;

	// 实列化 画布
	var createCanvas = new myCanvas(canvas,cobj);
	createCanvas.draw();
}



