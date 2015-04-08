var fn45 = function(){
		var x=0;
		var Student = (function(){
		
			// Private static Attribute
			var studentCount = 0;
			
			// Private static method
			var isEmail = function(email){ 
				return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
			};
			
			// return constructor
			return function(studentName,studentEmailId){
			
				// private attributes
				var name = undefined,emailId = undefined;
				
				// Public privileged method [privileged because it can access private members also] 
				this.setEmailId = function(studentEmailId){
					if(!isEmail(studentEmailId)){
						throw new Error("Invalid emailId provided");
					}
					emailId = studentEmailId;
				};
				
				// Public privileged method [privileged because it can access private members also]
				this.getEmailId = function(){
					return emailId;
				};
				
				// Public privileged method [privileged because it can access private members also]
				this.setName = function(studentName){
					name = studentName;
				};
				
				// Public privileged method [privileged because it can access private members also]
				this.getName = function(){
					return name;
				};
				
				// Contructor Call
				this.setEmailId(studentEmailId);
				this.setName(studentName);
				studentCount++; 
				
				// Only allow maximum 4 objects of students to be created
				if(studentCount > 4){
					throw new Error("Only four student Objects are allowed");
				}
			};
			
		})();
		
		var students = new Array();
		students[0] = new Student("Sunil Pal","sunil.pal@ril.com");
		students[1]= new Student("Mukesh Nath","mukesh.nath@ril.com");
		students[2] = new Student("Parul Shah","parul.shah@ril.com");
		students[3] = new Student("Jeevan Kumar","jeevan.kumar@ril.com");		
		//students[4] = new Student("Ganesh Jain","ganesh.jain@ril.com"); // this line throws an error as no more than 4 student objects
		
		// Public Non-privileged method
		Student.prototype.display = function(){
			return "Student name is "+this.getName()+", having emailId as "+this.getEmailId();
		};
		
		for(x=0; x < students.length; x++){
			print(students[x].display());
		}
	};
	
	fn45();
