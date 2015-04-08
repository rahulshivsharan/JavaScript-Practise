var fn30 = function(){
		var Animate = function(){};
		Animate.prototype.start = function(){
			print("Animation started ");
		};
		
		Animate.prototype.stop = function(){
			print("Animation stopped ");
		};

		var animObj = new Animate();
		
		for(var prop in animObj){
			animObj[prop]();
		}	
	};
	
	//fn30();
	
	var fn31 = function(){
		var Animate = function(){};
		
		Animate.prototype = {
			start : function(){
				print("Animation started ==> ");
			},
			stop : 	function(){
				print("Animation stopped ==> ");
			}	
		}
		
		var animObj = new Animate();
		
		for(var prop in animObj){
			animObj[prop]();
		}

		Animate.prototype.next = function(){
				print("Animation next ==> ");
		}	
		
		
		for(var prop in animObj){
			animObj[prop]();
		}
	};
	
	//fn31();
	
	var fn32 = function(){
		var prop = undefined;
		Function.prototype.method = function(name,callbackFn){
			this.prototype[name] = callbackFn;
		};
		
		var Animate = function(){};
		
		Animate.method("start",function(){
			print("Animation started.....");
		});
		
		
		Animate.method("stop",function(){
			print("Animation stopped.....");
		});
		
		var anim = new Animate();
		
		for(prop in anim){
			anim[prop]();
		}
	};
	
	//fn32();
	
	var fn33 = function(){
		var prop = undefined;
		
		Function.prototype.method = function(methodName,callbackFn){
			this.prototype[methodName] = callbackFn;			
			return this;
		};
		
		var Student = function(){}
		Student.method("add",function(){
			return "new Student Added ";
		}).method("update",function(){
			return "Updated student";
		}).method("delete",function(){
			return "Student deleted";
		});
		
		var studentObj = new Student();
		
		for(prop in studentObj){
			print(prop+" "+studentObj[prop]());			
		}
	};
	
	fn33();
	
	var fn34 = function(){
		var Person = function(name,age){
			this.name = name;
			this.age = age;
		};
		
		Person.prototype = {
			getName : function(){
				return this.name;
			},
			getAge : function(){
				return this.age;
			}
		}
		
		var alice = new Person("Alice Valkyr",23);
		var steven = new Person("Steven Shindler",43);
		
		Person.prototype.getInfo = function(){
			return "Hi "+this.getName()+" aging "+this.getAge()+" !!!";
		};
		
		print(alice.getInfo());
		print(steven.getInfo());
	};
	
	fn34();

	var fn41 = function(){
		
		var Student = function(){
			var name = "";
			this.setName = function(firstName){
				name = firstName;
			};
			
			this.getName = function(){
				return name;
			};
		};
		
		var studentObj = new Student();
		studentObj.setName("Rahul");
		
		/*
		Student.prototype = {
			setLastName : function(lastName){
				var fullName = this.getName() + " "+lastName;
				this.setName(fullName);
			}
		}
		// we are overriding the prototype object and hence we get an error when we try to do studentObj.setLastName, method 'setLastName' we are not able to find 
		*/
		
		
		Student.prototype.setLastName = function(lastName){
				var fullName = this.getName() + " "+lastName;
				this.setName(fullName);
		}
		
		
		studentObj.setLastName("Shivsharan");
		
		print(studentObj.getName());
	};
	
	fn41();
	
	var fn42 = function(){
		var MyClass = function(val){
			this.propOne = val;
		};
		
		var myObj_1 = new MyClass("ABC");
		
		MyClass.prototype.getPropOne = function(){
			return this.propOne;
		};		
		var myObj_2 = new MyClass("DEF");
		print(myObj_1.getPropOne());
		print(myObj_2.getPropOne());
		
		myObj_1.__proto__.getPropNew = function(){
			return "This is new Method "+this.getPropOne();
		}
		// The above code add method getPropNew to prototype chain for function MyClass so it is available in both object
		print(myObj_1.getPropNew());
		print(myObj_2.getPropNew());
		
	};
	
	//fn42();
	
	var fn43 = function(){
		
		var Student = function(){
			var name = "";
			this.setName = function(firstName){
				name = firstName;
			};
			
			this.getName = function(){
				return name;
			};
		};
		
		var studentObj_1 = new Student();
		studentObj_1.setName("Rahul");
		
		
		Student.prototype = {
			setLastName : function(lastName){
				var fullName = this.getName() + " "+lastName;
				this.setName(fullName);
			}
		}
		
		var studentObj_2 = new Student();
		studentObj_2.setName("Narayan");
		studentObj_2.setLastName("Natarajan");
		
		studentObj_1.__proto__.setLastName = function(lastName){
				var fullName = this.getName() + " --> "+lastName;
				this.setName(fullName);
		}
		studentObj_1.setLastName("Shivsharan");
		
		print(studentObj_1.getName()); // output is "Rahul --> Shivsharan"
		print(studentObj_2.getName()); // output is "Narayan Natarajan"
	};
	
	fn43();
	
