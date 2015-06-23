var fn67 = function(){
		try{
			var Interface = function(name,methodArray){
				if(arguments.length !== 2){
					throw new Error("Interface constructor called with "+arguments.length+" arguments, but it expects exactly 2.");
				}
				
				this.name = name;
				this.methods = new Array();	
				
				for(var x=0; x < methodArray.length; x++){
					if(typeof methodArray[x] !== 'string'){
						throw new Error("Interface constructor expects methods to be passed as string.");
					}
					this.methods.push(methodArray[x]);
				}
			};
			
			Interface.ensureImplements = function(obj){
				var x=0,
					j=0,
					methodName = undefined,
					_interface = undefined;
					
				if(arguments.length < 2){
					throw new Error("Function Interface.ensureImplements called with "+arguments.lenght+" arguments, but expected atleast 2 arguments.");
				}
				
				for(x=1; x < arguments.length; x++){
					_interface = arguments[x];
					// to check whether the instance implements Interface
					if(_interface.constructor !== Interface){ 
						throw new Error("Function Interface.ensureImplements expects atleast two aruments and above to be the instance of interface.");
					}
					
					for(j=0; j < _interface.methods.length; j++){
						methodName = _interface.methods[j];						
						if( !(methodName in obj) || (typeof obj[methodName] !== 'function')){
							throw new Error("Function Interface.ensureImplements: object does not implement "+_interface.name+". Method "+methodName+" was not found");
						}
					}
				}
			};		
			
			var Customer = new Interface("Customer",["getName","setName","getEmail","setEmail","display"]); //Created Customer Interface
			
			var addCustomer = function(customerInstance){	
				Interface.ensureImplements(customerInstance,Customer);
			};
			
			
			var Lead = function(name,email){
				var _customerName = undefined,
					_email = undefined;
				
				var checkEmail = function(email){
					return /(^[a-zA-Z0-9]+[\._-]{0,1})+([a-zA-Z0-9]+[_]{0,1})*@([a-zA-Z0-9]+[-]{0,1})+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,3})$/.test(email);
				};
				
				this.setName = function(name){
					_customerName = name;	
				};
				
				this.getName = function(){
					return _customerName;
				};
				
				this.setEmail = function(email){
					if(!checkEmail(email)){
						throw new Error("Invalid Email format");	
					}					 
					_email = email;
				};
				
				this.getEmail = function(){
					return _email; 
				};

				//Custructor call
				this.setName(name);
				this.setEmail(email);	
			};
			
			var ActualCustomer = function(name,email){
				var _customerName = undefined,
					_email = undefined;
				
				var checkEmail = function(email){
					return /(^[a-zA-Z0-9]+[\._-]{0,1})+([a-zA-Z0-9]+[_]{0,1})*@([a-zA-Z0-9]+[-]{0,1})+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,3})$/.test(email);
				};
				
				this.setName = function(name){
					_customerName = name;	
				};
				
				this.getName = function(){
					return _customerName;
				};
				
				this.setEmail = function(email){
					if(!checkEmail(email)){
						throw new Error("Invalid Email format");	
					}					 
					_email = email;
				};
				
				this.getEmail = function(){
					return _email; 
				};

				//Custructor call
				this.setName(name);
				this.setEmail(email);	
			};
			
			Lead.prototype.display = function(){
				var str = 	"The Customer \"" + this.getName() + "\"" +
							" showed interest, his email Id is " + this.getEmail();
				return str;			
			};
			
			ActualCustomer.prototype.display = function(){
				var str = "The customer \"" + this.getName() + "\"" +
							" is using our services, his email Id is "+this.getEmail();							
				return str;			
			};
			
			var dany = new Lead("Dany Simmons","dany.simmons@xyz.com");
			var victor = new ActualCustomer("Victor Abagnale","victor.abagnale@xty.com");
			
			addCustomer(dany); // object 'dany' of Lead implements Interface Customer
			addCustomer(victor); // object 'victor' of ActualCustomer implements Interface Customer			
		
			print(dany.display());
			print("\n"+victor.display());
			
		}catch(e){
			print(e);
		}
	};
	
	fn67();
