var fn95 = function(){
		var Student = (function(){
			var INSTANCE = undefined
			
			if(!INSTANCE){
				INSTANCE = new Object();				
			}
			
			return {
				getInstance : function(){
					return INSTANCE;
				}
			}
		})();
		
		var obj1 = Student.getInstance();
		obj1.name = "Rahul Shivsharan";
		var obj2 = Student.getInstance();
		print(" obj1.name "+obj1.name);
		print(" obj2.name "+obj2.name);
};

//fn95();

var fn97 = function(){
		
		var Student = function(){
			
			if(typeof Student.instance === 'object'){				
				return Student.instance;
			}
			
			Student.instance = this;
		};
		
		var obj1 = new Student();
		obj1.name = "Rahul Shivsharan";
		var obj2 = new Student();
		obj2.name = "Vishal Gor";
		
		print("obj1.name "+obj1.name);
		print("obj2.name "+obj2.name);
		
};
	
fn97();


