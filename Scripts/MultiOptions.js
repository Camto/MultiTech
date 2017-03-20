class MultiOptions {
	
	constructor() {
		
		for(var count = 0; count < arguments.length; count++) {
			
			this[arguments[count]] = false;
			
		}
		
	}
	
}