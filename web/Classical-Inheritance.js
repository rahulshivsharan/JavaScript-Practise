var fn21 = function(){
		var Shape = function(){
			this.x = 0;
			this.y = 0;
		};
		
		// superclass method
		Shape.prototype.move = function(x,y){
			this.x += x;
			this.y += y;
			print(" shape is moved to ("+this.x+","+this.y+") \n");
		};
		
		
		// calling super construtor
		var Rectangle = function(){
			Shape.call(this);
		};
		
		// subclass extends superclass
		Rectangle.prototype = Object.create(Shape.prototype);
		Rectangle.prototype.constructor = Rectangle;
		
		var rect = new Rectangle();
		
		print("Is rect an instance of Rectangle ? "+(rect instanceof Rectangle)+" \n");
		print("Is rect an instance of Shape ? "+(rect instanceof Shape)+" \n");
	};
	
	fn21();
