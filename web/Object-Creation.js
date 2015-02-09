var fn20 = function(){
		var myobj = {
			init : function(x,y){
				this.x = x;
				this.y = y;
			},			
			transform : function(a,b){
				this.x += a;
				this.y += b;
			}				
		}
		
		myobj.init(5,6);
		print(" value myobj.x => "+myobj.x+"\n value myobj.y => "+myobj.y);
		
		myobj.transform(2,3);
		print(" value myobj.x+2 => "+myobj.x+"\n value myobj.y+3 => "+myobj.y);
		
		var myobj3d = Object.create(myobj);
		
		myobj3d.init = function(x,y,z){
			myobj.init.call(this,x,y);
			this.z = z;							
		};
		
		myobj3d.transform = function(x,y,z){
			myobj.transform.call(this,x,y);
			this.z += z;			
		};
		
		myobj3d.init(10,20,30);
		print("\n value myobj3d.x => "+myobj3d.x+"\n value myobj3d.y => "+myobj3d.y+"\n value myobj3d.z => "+myobj3d.z);
		
		myobj3d.transform(2,3,4);
		print("\n value myobj3d.x+2 => "+myobj3d.x+"\n value myobj3d.y+3 => "+myobj3d.y+"\n value myobj3d.z+4 => "+myobj3d.z);

	};
	
	fn20();
