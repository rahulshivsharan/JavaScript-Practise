angular.module("myApp").controller("myCtrlOne",myCtrlOne);

function myCtrlOne($scope,StudentFactory){
	$scope.students = StudentFactory.getStudents();
};
