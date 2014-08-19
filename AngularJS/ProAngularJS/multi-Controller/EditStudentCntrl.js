angular.module("StudentListApp").controller("EditStudentCntrl",function($scope,$filter){
		
		$scope.editStudent = function(selectedStudent){
			$scope.isEdit = true;
			$scope.selectedStudent = selectedStudent;	
		};
		
		$scope.saveEdit = function(){			
			$scope.isEdit = false;
		};
});
