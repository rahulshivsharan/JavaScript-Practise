var fn46 = function(){
	
		var Employee = (function(){
			
			var fn = function(employeeName){
				// private attributes
				var name = undefined;
				
				// privileged method (privileged means it can access private member variables and methods)
				this.setName = function(employeeName){
					name = employeeName;
				};
				
				// privileged method (privileged means it can access private member variables and methods)
				this.getName = function(){
					return name;
				}
				
				// contructor call
				this.setName(employeeName);
			};
			
			// Private static attribute
			var FIRM = "";
			
			// Privileged static method 
			fn.setFIRM = function(firmName){
				FIRM = firmName;
			};
			
			// Privileged static method
			fn.getFIRM = function(){
				return FIRM;
			};
			
			return fn;
			
		})();
		
		//Public non-privileged method
		Employee.prototype.display = function(){
			return "Employee "+this.getName()+" works in "+Employee.getFIRM();		
		};
	
		var empArray = [	new Employee("Sudarshan Thakur"), 
							new Employee("Pritesh Shah")
						];
		
		Employee.setFIRM("DropBox Inc.");
	
		for(var x=0; x < empArray.length; x++){
			print(empArray[x].display());
		}

		Employee.setFIRM("Yahoo Inc.");
		
		for(var x=0; x < empArray.length; x++){
			print(empArray[x].display());
		}	
	};
	
	fn46();
	
	/* output is as follows
	Employee Sudarshan Thakur works in DropBox Inc.
  Employee Pritesh Shah works in DropBox Inc.
  Employee Sudarshan Thakur works in Yahoo Inc.
  Employee Pritesh Shah works in Yahoo Inc.
	*/
