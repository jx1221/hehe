var box = document.querySelector('.box');


	document.addEventListener('mouseup',up);
	function up(){
		document.removeEventListener('mousemove',move);
		document.removeEventListener('mouseup',up);
	}

