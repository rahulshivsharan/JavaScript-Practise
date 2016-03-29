var fn100 = function(){
		var original = [10,80,30,100,160];
		var edited = [80,120,140,70,160,30];
		var newlyAdded = [];
		var dropped = [];
		var isFound = false;
		var x = 0, y = 0;
		
		//for added
		for(x = 0; x < edited.length; x++){
			
			isFound = false;
			
			for(y = 0; y < original.length; y++){
				if(edited[x] === original[y]){
					isFound = true;
					break;
				}
			}
			
			if(isFound === false){
				newlyAdded.push(edited[x]);
			}
		}//for added

		//for dropped
		for(x = 0; x < original.length; x++){
			isFound = false;
			for(y = 0; y < edited.length; y++){
				if(original[x] === edited[y]){
					isFound = true;
					break;
				}
			}
			
			if(isFound === false){
				dropped.push(original[x]);	
			}
		}// for dropped

		print("Added Elements "+newlyAdded);
		print("Deleted Elements "+dropped);	
	}
	
	//fn100();
	
	var fn101 = function(){
	    var original = [10,80,30,100,160];
		var edited = [80,120,140,70,160,30];
		var added = edited.slice(0);		
		var deleted = [];
		var isFound = false, target = undefined, x = 0, y = 0;
		
		for(x = 0; x < original.length; x++){
			target = original[x];			
			isFound = false;
			
			for(y = 0; y < added.length; y++){
				
				if(target === added[y]){
					added.splice(y,1);					
					y--;
					isFound = true;
				}
			}
			
			if(isFound === false){
				deleted.push(target);
			}
		}
		
		print("Original "+original);
		print("Edited "+edited);
		print("Added "+added);
		print("Deleted "+deleted);
	}
	//fn101();

    var fn102 = function(){
		
		Array.prototype.diff = function(a){
			return this.filter(function(num){
				return (a.indexOf(num) < 0);
			});
		}
		
		var original = [10,80,30,100,160];
		var edited = [80,120,140,70,160,30];
		
		print("Original "+original);
		print("Edited "+edited);
		print("Added "+edited.diff(original));
		print("Dropped "+original.diff(edited));
	}
	fn102();
