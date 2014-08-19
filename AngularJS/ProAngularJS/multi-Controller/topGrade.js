angular.module("TopCollege",[]).filter("isAGrade",function(){
	return function(students,isA_Grade){
		var topStudents =  [];
		
		angular.forEach(students,function(student){			
			if(isA_Grade == true){
				if(student.Grade == "A"){
					topStudents.push(student);
				}				
			}else{
				topStudents.push(student);
			}
		});
		
		return topStudents;
	}
});
