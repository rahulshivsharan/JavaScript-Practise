angular.module("StudentListApp")
		.constant("elementsPerPage","3")
		.constant("startIndex","0")	
		.controller("StudentListCntrl",function($scope,elementsPerPage,startIndex){
	$scope.data = [
		{
			id : 123,
			name : "John Grisham",
			major : "Computer Graphics",
			College : "Texas University",
			Grade : "A"
		},
		{
			id : 124,
			name : "Suzane Abignale",
			major : "Sociology",
			College : "Kellogs University",
			Grade : "B"
		},
		{
			id : 125,
			name : "Timothy Simsons",
			major : "Anthropology",
			College : "Nixxon Trust of Education",
			Grade : "B"
		},
		{
			id : 126,
			name : "Rick Sullivan",
			major : "Software Engineering",
			College : "Masachussate Institute of Technology",
			Grade : "A"
		},
		{
			id : 127,
			name : "Nathan Gonzales",
			major : "International Business",
			College : "Cambridge University",
			Grade : "A"
		},
		{
			id : 128,
			name : "Ridley Scott",
			major : "Computer Animation",
			College : "Masachussate Institute of Technology",
			Grade : "A"
		},
		{
			id : 129,
			name : "Jack Nicholson",
			major : "Market Grading and Statistics",
			College : "Cambridge University",
			Grade : "A"
		},
		{
			id : 130,
			name : "Jimmy Carlson",
			major : "Aironautics",
			College : "Prince of Walles University",
			Grade : "A"
		},
		{
			id : 131,
			name : "Jimmy Carlson",
			major : "Aironautics",
			College : "Prince of Walles University",
			Grade : "A"
		},
		{
			id : 132,
			name : "Garry Karlson",
			major : "Wealth Managment",
			College : "Keshav University",
			Grade : "C"
		}
	];
	
	$scope.studentsPerPage = parseInt(elementsPerPage);
	$scope.studentFirstIndex = parseInt(startIndex);
	$scope.isPrev = true;
	
	$scope.getNextBatch = function(){
		var totalStudents = $scope.data.length;
		var firstIndex = $scope.studentFirstIndex + $scope.studentsPerPage;
		
		
		if((firstIndex + $scope.studentsPerPage) >= totalStudents){
			$scope.isNext = true;
		}else{
			$scope.isNext = false;
		}
		
		if(firstIndex >= $scope.studentsPerPage){
			$scope.isPrev = false;
		}else{
			$scope.isPrev = true;
		}
		
		$scope.studentFirstIndex  = firstIndex;
	}
	
	$scope.getPrevBatch = function(){
		var totalStudents = $scope.data.length;
		var firstIndex = $scope.studentFirstIndex - $scope.studentsPerPage;
		
		if(firstIndex <= 0){
			firstIndex = 0;
			$scope.isPrev = true;
		}else{
			$scope.isPrev = false;
		}
		
		if(firstIndex <= (totalStudents - $scope.studentsPerPage)){
			$scope.isNext = false;
		}else{
			$scope.isNext = true;
		}
		
		$scope.studentFirstIndex = firstIndex;
	}
});	
