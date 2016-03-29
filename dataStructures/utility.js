
// get total number of keys in Object
var fn104 = function(){
		var obj = new Object();
		obj["name"] = "Rahul Shivsharan";
		obj["age"] = 34;
		obj["nativePlace"] = "Mumbai";
		
		print(" KEYS "+Object.keys(obj));
		print(" TOTAL - KEYS "+Object.keys(obj).length);
}
	
fn104();

// check whether a number is present in 
// an array
var fn105 = function(){
		Array.prototype.isPresent = function(num){
			var myArray = this;
			return myArray.indexOf(num) > 0;
		}
		var myArray = [12,34,56,78,90];
		print("200 "+ myArray.isPresent(200)); // false
		print("34 "+ myArray.isPresent(34)); // true
}
	
fn105();
