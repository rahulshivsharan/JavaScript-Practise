var fn86 = function(){
		var Student = {};
		
		(function(){
			var obj = new Object();
			
			this.getInstance = function(){
				return obj;
			};
			
		}).apply(Student);
		
		var obj1 = Student.getInstance();
		obj1.name = "Rahul Shivsharan";
		
		var obj2 = Student.getInstance();
		
		print("obj1.name "+obj1.name); // obj1.name Rahul Shivsharan
		print("obj2.name "+obj2.name); // obj2.name Rahul Shivsharan
		obj2.name = "Ninad Kulkarni";  
		print("obj1.name "+obj1.name); // obj1.name Ninad Kulkarni
		
		var obj3 = Student.getInstance();
		print("obj3.name "+obj1.name); // obj3.name Ninad Kulkarni
};

//fn86();


// Below is the more imporved singleton
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
