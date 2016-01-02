	var fn08 = function(){
		var Student = (function(){
			var total = 0; // Privileged Private variable
			
			var fn = function(_name){
				var name = _name; // Private variable
				total++;
				
				// Public Methods
				this.getName = function(){
					return name;
				};
				
				this.getTotalInstance = function(){
					return total;
				};
			};
			
			return fn;
		})();
		
		var studentObj1 = new Student("Rahul");		
		print(studentObj1.getName());
		print(studentObj1.getTotalInstance());
		
		var studentObj2 = new Student("Mehul");
		print(studentObj2.getName());
		print(studentObj2.getTotalInstance());
		
		var studentObj3 = new Student("Sohail");
		print(studentObj3.getName());
		print(studentObj3.getTotalInstance());
		
		var studentObj4 = new Student("Nihal");
		print(studentObj4.getName());
		print(studentObj4.getTotalInstance());		
		
	};
	
	fn08();
