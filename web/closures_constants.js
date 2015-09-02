var fn73 = function(){   // Demonstration of Constants using closures 
		var Constants = (function(){
			var constant_obj = {
				SUBJECT_NAME : "Mechanical Engineering",
				TEACHER_NAME : "Sir JJ Brams"
			} 
			
			return {
				get : function(propName){
					return constant_obj[propName];
				}
			}
		})();
		
		var mySubject = Constants.get("SUBJECT_NAME"); 
		print("Subject : "+mySubject); // Subject : Mechanical Engineering
		mySubject = "Bachelor in Commerce";
		print("Subject : "+mySubject); // Subject : Bachelor in Commerce
		print("Subject : "+Constants.get("SUBJECT_NAME")); // Subject : Mechanical Engineering
		print("Professor : "+Constants.get("TEACHER_NAME")); // Professor : Sir JJ Brams
	};
	
fn73();
