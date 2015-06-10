var fn64 = function(){
		/*		
		var DAO = function(){
			function add(obj);
			function update(obj);
			function _delete(obj);
			function get(obj);
		};
		*/
		
		var CustomerDAO = function(){
			this.addCustomer = function(customer){
				this.add(customer);
			};
			
			this.deleteCustomer = function(customer){
				this._delete(customer);
			};
			
			this.updateCustomer = function(customer){
				this.update(customer);
			};
			
			this.getCustomer = function(){
				
			};
		};
		
		CustomerDAO.prototype.add = function(customer){	
			print("Adding new Customer "+customer.name);
		};
		CustomerDAO.prototype.update = function(customer){	
			print("Updating Customer "+customer.name);
		};
		
		CustomerDAO.prototype._delete = function(customer){	
			print("deleting Customer "+customer.name);
		};
		
		CustomerDAO.prototype.get = function(customer){	
			print("Get Customer "+customer.name);
		};
		
		var myCustomerDao = new CustomerDAO();
		myCustomerDao.addCustomer({ 
			"name" : "Rahul Shivsharan"
		});
	};
	fn64();
