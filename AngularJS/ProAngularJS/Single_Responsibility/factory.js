angular.module("myApp").factory("StudentFactory",StudentFactory);

function StudentFactory(){
	return {
		getStudents : function(){
			return [{
				"name" : "Rahul Shivsharan",
				"stream" : "Computer Science"
			},{
				"name" : "Vishal Chaturvedi",
				"stream" : "Computer Science"
			},{
				"name" : "Nikhil Nagotkar",
				"stream" : "Mechanical Engineering"
			},{
				"name" : "Swapnil Shingare",
				"stream" : "Instrumentation Engineering"
			}];
		}
	}
}
