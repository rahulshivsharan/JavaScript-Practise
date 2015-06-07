var fn60 = function(){
	
		var extends = function(subClass,superClass){
			var F = function(){};
			F.prototype = superClass.prototype;
			subClass.prototype = new F();
			subClass.prototype.constructor = subClass;
		};
		
		var Person = function(personName){
			var name = null;
			this.setName = function(personName){
				name = personName;
			};
			
			this.getName = function(){
				return name;
			};
			
			this.setName(personName);
			
		};
		
		var Employee = function(name,empOccupation){
			var occupation = null;
			Person.call(this,name);
			this.setOccupation = function(occ){
				occupation = occ;
			}
			
			this.getOccupation = function(){
				return occupation;
			}
			
			this.setOccupation(empOccupation);
		};
		
		extends(Employee,Person);
		
		var empObjOne = new Employee("Rahul Shivsharan","Software Engineer");
		
		Employee.prototype.getInfo = function(){
			return " Name "+this.getName()+"\n Occupation "+this.getOccupation();
		};
		
		
		
		print(empObjOne.getInfo());
	};
	
	fn60();
