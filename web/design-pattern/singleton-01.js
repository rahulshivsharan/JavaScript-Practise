var fn70 = function(){
		var Student = (function(){
			var obj = undefined;
			
			return {
				getInstance : function(){
					if(obj == undefined){
						obj = {
							name : "Rahul",
							age : 23
						};
					}
					
					return obj;
				}
			};
		})();
		
		var stu1 = Student.getInstance();
		print("Name "+stu1.name+",\nAge "+stu1.age);
		
		stu1.name = "Santosh";
		var stu2 = Student.getInstance();
		
		print("\nName "+stu1.name+",\nAge "+stu1.age);
		print("\nName "+stu2.name+",\nAge "+stu2.age);
	};
	
	fn70();
