var fn37 = function(){
		var Student = function(studentName,studentDept){
			var name = "", dept = "";
			
			this.setName = function(studentName){
				if((studentName !== undefined) && typeof studentName !== 'string')
				  throw new Error("Student name shoud be of type string");
				name = studentName;
			};
			
			this.setDept = function(studentDept){
				if((studentDept !== undefined) && typeof studentDept !== 'string')
				  throw new Error("Student dept shoud be of type string");
				dept = studentDept;
			};
			
			this.getName = function(){
				return name;
			};
			
			this.getDept = function(){
				return dept;
			};
			
			//contructor
			this.setName(studentName);
			this.setDept(studentDept);
		};
		
		Student.prototype = {
			display : function(){
				return "Student "+this.getName()+" studies "+this.getDept();
			}
		}
		
		var stdOne = new Student("Rahul Shivshran","Engineering in Computer Science");
		var stdTwo = new Student();
		
		stdTwo.setName("Jeevankumar Singh");
		stdTwo.setDept("Mechanical Engineering");
		
		print(stdOne.display());
		print(stdTwo.display());
	}; //fn37
	
	fn37();
