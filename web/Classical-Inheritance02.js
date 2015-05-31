	var fn55 = function(){
	
		var Employee = function(name){
		
			var name = name;
			
			this.getName = function(){
				return name;
			};

			this.setName = function(empName){
				name = empName;
			};	
		};
		
		var ContractEmp = function(name,sal){
			var salary = sal;
			
			this.getSalary = function(){
				return salary;
			}
			//calling super constructor
			Employee.apply(this,[name]);			
		};
		ContractEmp.prototype = new Employee();
		ContractEmp.prototype.constructor = ContractEmp;

		
		var emp1 = new ContractEmp("Jack",3000);
		var emp2 = new ContractEmp("John",4000);
		print(emp1.getName());
		print(emp2.getName());
		print(emp1.getName());
		
		Employee.prototype.getInfo = function(){
			return "Emp Name \""+this.getName()+"\" Salary "+this.getSalary();
		}
		
		print(emp1.getInfo());
	};
	
	fn55();
