var fn80 = function(){
		var App = {}, x = 0;
		App.id = 0;
		
		App.next = function(){
			return ++App.id;
		};
		
		App.reset = function(){
			App.id=0;
		};
		
		for(x = 1; x <= 10; x++){
			if((x%3) === 0){
				App.reset();
			}else{
				print(x+"> NEXT "+App.next());
			}
		}
	};
	
	//fn80();
	
	var fn81 = function(){
		var App = {}, x = 0;
		
		App.id = 0;		
		App.next = function(){
			return ++this.id;
		};		
		App.reset = function(){
			this.id=0;
		};
		
		for(x = 1; x <= 10; x++){
			if((x%3) === 0){
				App.reset();
			}else{
				print(x+"> NEXT "+App.next());
			}
		}
	};
	
	//fn81();
	
	var fn82 = function(){
		var App = {
			id : 0,
			next : function(){
				return ++this.id;
			},
			reset : function(){
				return this.id = 0;
			}			
		}, x = 0;
		
		for(x = 1; x <= 10; x++){
			if((x%3) === 0){
				App.reset();
			}else{
				print(x+"> NEXT "+App.next());
			}
		}
	};
	
	//fn82();
	
	var fn83 = function(){
		
		var App = (function(){
			var id = 0;
			
			return {			
				next : function(){
					return ++id;
				},
				reset : function(){
					return id = 0;
				}			
			} 
		})();
		
		var x = 0;
		
		for(x = 1; x <= 10; x++){
			if((x%3) === 0){
				App.reset();
			}else{
				print(x+"> NEXT "+App.next());
			}
		}
	};
	
	//fn83();
	
	var fn84 = function(){
		
		var App = {};
		
		(function(context){
			var id = 0;
						
			context.next = function(){
					return ++id;
			};
			
			context.reset = function(){
				return id = 0;
			};			
			 
		})(App);
		
		var x = 0;
		
		for(x = 1; x <= 10; x++){
			if((x%3) === 0){
				App.reset();
			}else{
				print(x+"> NEXT "+App.next());
			}
		}
	};
	
	//fn84();
	
	
	var fn85 = function(){
		
		var App = {};
		
		(function(context){
			var id = 0;
						
			this.next = function(){
					return ++id;
			};
			
			this.reset = function(){
				return id = 0;
			};			
			 
		}).apply(App);
		
		var x = 0;
		
		for(x = 1; x <= 10; x++){
			if((x%3) === 0){
				App.reset();
			}else{
				print(x+"> NEXT "+App.next());
			}
		}
	};
	
	fn85();
