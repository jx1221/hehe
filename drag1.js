var box = document.querySelector('.box');

	document.addEventListener('mousemove',move);
	function move(event){
		box.style.left = event.clientX -disX + 'px';
		box.style.top = event.clientY -disY + 'px';
	}

	
