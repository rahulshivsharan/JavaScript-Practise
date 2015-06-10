	var fn66 = function(){
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
					// to check wether the instance implements Interface
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
					
			var BaseDAO = new Interface("BaseDAO",["add","update","_delete","get"]);
			
			var addDAO = function(daoInstance){
				Interface.ensureImplements(daoInstance,BaseDAO);
			}
			
			var CustomerDAO = function(){
				
				this.addCustomer = function(customer){
					this.add(customer);
				}
				
				this.deleteCustomer = function(customer){
					//this._delete(customer);
				};
					
				this.updateCustomer = function(customer){
					this.update(customer);
				};
					
				this.getCustomer = function(){
					this.add();	
				};
			};
			
			CustomerDAO.prototype.add = function(customer){	
				print("Adding new Customer "+customer.name);
			};
			CustomerDAO.prototype.update = function(customer){	
				print("Updating Customer "+customer.name);
			};
			/*
			CustomerDAO.prototype._delete = function(customer){	
				print("deleting Customer "+customer.name);
			};
			*/
			CustomerDAO.prototype.get = function(){	
				print("Get Customer ");
			};
			
			var myCustDao = new CustomerDAO();
			addDAO(myCustDao);
		
			myCustDao.updateCustomer({
				"name" : "Rahul Chaturthi"
			});
	    }catch(e){
			print("EXCEPTION ::: "+e);
		}	
	};
	
	fn66();
