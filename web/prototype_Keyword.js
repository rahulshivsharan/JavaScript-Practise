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
