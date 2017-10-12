var box = document.querySelector('.box');
box.addEventListener('mousedown','down');
function down(event){
	var disX = event.clientX - this.offsetLeft;
	var disY = event.clientY - this.offsetTop;
}