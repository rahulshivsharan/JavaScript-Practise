	var fn62 = function(){
		var clone = function(obj){
			var F = function(){};
			F.prototype = obj;
			return new F();
		};
		
		var Person = function(studentName){
			var name = undefined;
			this.setName = function(studentName){
				name = studentName;
			};
			this.getName = function(){
				return name;
			};
		};

		var Department = function(deptName,deptId){
			var name = undefined,id = null;
			this.setName = function(deptName){
				name = deptName;
			};
			this.getName = function(){
				return name;
			};
			this.setId = function(deptId){
				id = deptId;
			};
			this.getId = function(){
				return id;
			}
			
			//calling contructor
			this.setName(deptName);
			this.setId(deptId);
		};

		var Address = function(block,street,area,region){
			var _block = undefined,
				_street = undefined,
				_area = undefined,
				_region = undefined;
				
			this.setBlock = function(block){
				_block = block;
			};

			this.getBlock = function(){
				return _block;
			};

			this.setStreet = function(street){
				_street = street;
			};

			this.getStreet = function(){
				return _street;
			}

			this.setArea = function(area){
				_area = area;
			};

			this.getArea = function(){
				return _area;
			};

			this.setRegion = function(region){
				_region = region;
			};

			this.getRegion = function(){
				return _region;
			};

			this.setBlock(block);
			this.setRegion(region);
			this.setArea(area);
			this.setRegion(region);	
		};
		
		var personObj = new Person("Default-Name");
		var deptObj = new Department("Default",0);
		var addressObj = new Address("default","default","default","default");
		
		var mulundAddress = clone(addressObj);
		mulundAddress.setBlock("406/B1, Lok-Everest");
		mulundAddress.setStreet("Jatashankar Dosa Road");
		mulundAddress.setArea("Mulund West");
		mulundAddress.setRegion("Mumbai 400080");
		
		var Student = clone(personObj);		
		Student.createChildObject = function(){
			var x = 0,
				prop = undefined,
				obj = new Object();
					
			if(typeof arguments[0] === "object"){
				for(prop in arguments[0]){						
					obj[prop] = arguments[0][prop];	
				}					
			}
					
			return obj;
		};
		
		var rahulStudent = clone(Student);
		rahulStudent.setName("Rahul Shivsharan");
		var computerDept = clone(deptObj);
		computerDept.setName("Engineering in Computer science");
		computerDept.setId("CMP213");
		
		rahulStudent.getDepartment = function(){
			return rahulStudent.createChildObject(computerDept);
		}
			
		rahulStudent.getAddress = function(){
			return rahulStudent.createChildObject(mulundAddress); 
		}
		
		rahulStudent.getInfo = function(){
			var output = "";
			output += 	" Name "+this.getName()+ "\n" +
						" Department Info "+ this.getDepartment().getName() + "\n"+
						" Address Info "+	this.getAddress().getBlock()+", "+
											this.getAddress().getStreet()+", "+
											this.getAddress().getArea()+", "+
											this.getAddress().getRegion();
			return output;										
		};
		
		print(rahulStudent.getInfo());
	};
	
	fn62();
