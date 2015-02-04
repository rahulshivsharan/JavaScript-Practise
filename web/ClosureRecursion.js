var fn19 = function(){
		
		var addNum = function(num){
			
			var fn = function(num2){
				fn.sum += num2;				
				return fn;
			};
			
			fn.sum = num;	
			return fn;
		};

		print("1> addNum(3)(4)(3)(10) ==>  "+addNum(3)(4)(3)(10).sum);	
};

fn19();	
