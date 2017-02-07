window.onload = function(){
	var data;

	/*字符串转化为 数组*/ 
	//eval('data =' + localStorage.dataCavans);	
	//console.log(JSON.parse(localStorage.dataCavans));

	/*  */
	var box           = document.getElementsByClassName('yk_box')[0];
	var copyCanvas    = document.getElementById('draw_canvas');
	copyCanvas.width  = box.offsetWidth*2;
	copyCanvas.height = box.offsetHeight*2;	
	var copyCxt       = copyCanvas.getContext("2d");
	var copyC         = new myCanvas(copyCanvas,copyCxt);
	copyC.copy()
}