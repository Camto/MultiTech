function toggle_option(option) {
	
	options[option] = !options[option]
	
}

function loop() {
	
	if(options.font) {
		
		document.body.style.fontFamily = "courier";
		document.body.style.fontWeight = "normal";
	
	} else {
		
		document.body.style.fontFamily = "Actors";
		document.body.style.fontWeight = "900";
		
	}
	
	if(options.fontsize) {
		
		main_div.style.fontSize = "30px";
		
	} else {
		
		main_div.style.fontSize = "40px";
		
	}
	
	if(options.color) {
		
		main_div.style.backgroundColor = "#30E030";
		main_div.style.boxShadow = "0 0 20px 20px #30E030";
		
	} else {
		
		main_div.style.backgroundColor = "#30C0FF";
		main_div.style.boxShadow = "0 0 20px 20px #30C0FF";
		
	}
	
	window.requestAnimationFrame(loop);
	
}

function init() {
	
	main_div = document.getElementById("main");
	options = new MultiOptions("localStorage", "color");
	
}

function begin() {
	
	init();
	window.requestAnimationFrame(loop);
	
}

begin();