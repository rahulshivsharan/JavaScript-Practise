var fn17 = function(){
		var getInput = function(options, fn){
			fn(options);
		};
		
		var processFn = function(obj){
			var i=0;
			if(typeof obj === "string" || typeof obj === "number"){
				print("value passed is "+obj);
			}else if(typeof obj === "object"){
				if("index" in obj){
					for(i=0;i < obj.length; i++){
						print("array["+i+"] = "+obj[i]);
					}
				}else{
					for(i in obj){
						print("obj["+i+"] = "+obj[i]);
					}
				}			
			}else{
				print(" value invalid ");
			}								
		};
		
		getInput(12,processFn);
		getInput("Rahul Shivsharan",processFn);
		getInput([234,"Ninad","Amit"],processFn);
		getInput({
			name : "Jignesh Patel",
			occupation : "Sale Tax Inspector",
			origin : "Gujurath"			
		},processFn);
	};
	
	fn17();
