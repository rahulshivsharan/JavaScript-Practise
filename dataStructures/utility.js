
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

var fn106 = function(){
		var studentList = [ {age : 34, name : "Vipul Chaudhari"},
							{age : 14, name : "Hemant Kubal"},
							{age : 23, name : "Dinesh Joshi"},
							{age : 10, name : "Saurabh Nikam"},
							{age : 26, name : "Aslam Shaikh"}];
		
		for(var x = 0; x < studentList.length; x++){
			print((x+1)+"> Name : "+studentList[x].name+", age : "+studentList[x].age);
		}
		
		function sortByAge(student1,student2){
			return student1.age - student2.age;
		}
		
		function sortByName(student1,student2){
			return (student1.name > student2.name) ? 1 : (student1.name < student2.name) ? -1 : 0;
		}
		
		studentList.sort(sortByAge);
		
		print("\n\n ");
		for(var x = 0; x < studentList.length; x++){
			print((x+1)+"> Name : "+studentList[x].name+", age : "+studentList[x].age);
		}
		
		studentList.sort(sortByName);
		
		print("\n\n ");
		for(var x = 0; x < studentList.length; x++){
			print((x+1)+"> Name : "+studentList[x].name+", age : "+studentList[x].age);
		}
}
	
fn106();
