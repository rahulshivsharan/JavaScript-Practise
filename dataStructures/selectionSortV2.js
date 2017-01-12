var numArray = [], MIN = 0;

process.argv.forEach(function(val, index, array){
	if(index > 1){
		numArray.push(parseInt(val));
	}	
});



(selectionSort)();


function selectionSort(){
	
	var totalNum = numArray.length,
		temp = 0,
		next_position = 0
	
	for(var i = 0; i < totalNum; i++){
		MIN = numArray[i];
		
		next_position = i + 1;
		for(var j = next_position; j < totalNum; j++){
				
			if(numArray[j] < MIN){
				temp = MIN;
				MIN = numArray[j];
				numArray[j] = temp;
			}
		}
		
		numArray[i] = MIN;		
	}
	
	console.log(numArray);
}

// referred,
// http://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm
