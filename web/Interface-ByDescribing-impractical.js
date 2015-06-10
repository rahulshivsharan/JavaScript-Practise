var fn65 = function(){
	/*		
		var BaseDAO = function(){
			function add(obj);
			function update(obj);
			function _delete(obj);
			function get(obj);
		};
	*/
		
		var _implements = function(obj){
			var x=0,
				j=0,
				interfaceName = undefined,
				interfaceFound = false;
				
			for(var x = 1; x < arguments.length; x++){
				interfaceName = arguments[x];
				interfaceFound = false;
				
				for(j=0;j < obj.implementsInterface.length; j++){
					if(obj.implementsInterface[j] === interfaceName){
						interfaceFound = true;
						break;
					}
				}
				
				if(!interfaceFound){
					return false;
				}
				
				return true;
			};		
		}
		
		var CutomerDAO = function(){
			this.implementsInterface = ['BaseDAO'];
		}
		
		var addDAO = function(daoInstance){
			if(!_implements(daoInstance,'BaseDAO')){
				throw new Error("Object does not implements required Interface");
			}
		}
		
		var myCustDAO = new CustomerDAO();
		myCustDAO.implementsInterface = ['NewDAO'];
		addDAO(myCustDAO);
};
	
fn65();
