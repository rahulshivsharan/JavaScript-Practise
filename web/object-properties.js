
	var fn38 = function(){
		var obj = new Object();
		obj.name = "Rahul";
		obj.setName = function(newName){
			this.name = newName;
		}
		obj.setName("Vishal");		
		print(obj.name); // output is "Vishal"
		
		var obj_1 = new obj.setName("Samuel");
		print(" obj_1 "+obj_1.name); // output is "obj_1 Samuel"
		print(" obj "+obj.name); // output is "obj Vishal"
	};

	fn38();	
