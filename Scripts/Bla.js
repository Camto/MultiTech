function Bla() {
	
	var blas = document.getElementsByTagName("bla");
	
	for(var count1 = 0; count1 < blas.length; count1++) {
		
		blas[count1].innerHTML = "";
		
		for(var count2 = 0; count2 < parseInt(blas[count1].getAttribute("length")); count2++) {
			
			blas[count1].innerHTML += String.fromCharCode(Math.round(Math.random() * 93) + 33);
			
		}
		
	}
	
	window.requestAnimationFrame(Bla);
	
}

window.requestAnimationFrame(Bla);