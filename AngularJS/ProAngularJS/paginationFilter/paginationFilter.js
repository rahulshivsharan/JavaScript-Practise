angular.module("PaginationModule",[])
		.filter("paginationFilter",function($filter){
			return function(students,firstIndex,blocksize){
				var newList = [];
				var x=0;
				var totalStudents = students.length;
				var total = ((firstIndex + blocksize) <= totalStudents) ? (firstIndex + blocksize) : totalStudents;
				
				for(x = firstIndex; x < total; x++){
					newList.push(students[x]);
				}
				
				return newList;
			};
});
