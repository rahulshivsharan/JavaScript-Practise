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
	
	fn32();
