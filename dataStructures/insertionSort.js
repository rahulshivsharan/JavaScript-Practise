
function insertionSort(inputArray){	
	var totalElements = inputArray.length - 1;
	var temp = 0;
	var lastIndex = 0;
	var prevIndex = 0;
	for(var i = 0; i <= totalElements; i++){
		for(var currentIndex = i; currentIndex > lastIndex; currentIndex--){
			prevIndex = currentIndex - 1;							
			if(inputArray[currentIndex] < inputArray[prevIndex]){
				temp = inputArray[currentIndex];
				inputArray[currentIndex] = inputArray[prevIndex];
				inputArray[prevIndex] = temp;								 
			}else{
				break;
			}
		}

	}

	return inputArray;
}


//console.log(insertionSort([1,31,26,4,3,12]));
//console.log(insertionSort([5,6,1,2,3,4]));

// IMPROVED INSERTION SORT
function insertionSort01(inputArray){	
	var temp = 0;
	
	for(var x = 1;x < inputArray.length; x++){
		
		for(var currentIndex = x;currentIndex > 0; currentIndex--){
						
			if(inputArray[currentIndex - 1] > inputArray[currentIndex]){
				temp = inputArray[currentIndex];
				inputArray[currentIndex] = inputArray[currentIndex - 1];
				inputArray[currentIndex - 1] = temp;
			}else{
				break;
			}
		}
	}
	
	return inputArray;
}

console.log(insertionSort01([1,31,26,4,3,12]));
console.log(insertionSort01([5,6,1,2,3,4]));
