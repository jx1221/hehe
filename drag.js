var box = document.querySelector('.box');
alert(box);
alert(1);
box.addEventListener('mousedown',down);
function down(event){

	var disX = event.clientX - this.offsetLeft;
	var disY = event.clientY - this.offsetTop;
	document.addEventListener('mousemove',move);
	function move(event){
		box.style.left = event.clientX -disX + 'px';
		box.style.top = event.clientY -disY + 'px';
	}

	document.addEventListener('mouseup',up);
	function up(){
		document.removeEventListener('mousemove',move);
		document.removeEventListener('mouseup',up);
	}

}