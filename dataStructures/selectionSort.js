// the explanation of selection sort algorithm was taken from
// http://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm


function selectionSort(inputArray){
	var swapElementIndex = 0;
	var shouldSwap = false;
	var temp = 0;	
	var minNum = 0;
	for(var i = 0;i < (inputArray.length - 1);i++){
		minNum = 0;
		for(var currentIndex = (i+1); currentIndex < inputArray.length; currentIndex++){
			
			if(inputArray[i] > inputArray[currentIndex]){
				if(minNum === 0){ // when first minimum element is found
					swapElementIndex = currentIndex;
					shouldSwap = true;
					minNum = inputArray[swapElementIndex];
				}else{// when we have an minimum element 
					
					/* further check whether min element is less than the new found [min] element,
					   if yes set it as min element. */
					   
					if(minNum > inputArray[currentIndex]){
						minNum = inputArray[currentIndex];
						swapElementIndex = currentIndex;
						shouldSwap = true;
						minNum = inputArray[swapElementIndex];
					}
				}								
			}
		}
		
		if(shouldSwap === true){
			temp = inputArray[i];
			inputArray[i] = inputArray[swapElementIndex];
			inputArray[swapElementIndex] = temp;
			shouldSwap = false;			
		}
	}
	
	return inputArray;
}

//console.log(selectionSort([1,31,26,4,3,12]));
//console.log(selectionSort([5,6,1,2,3,4]));

// Improved Selection Sort
// the improved version of code is based on code review of the above written code which
// I got from url as follows,
// http://codereview.stackexchange.com/questions/135937/selection-sort-algorithm-examination
function selectionSort01(inputArray){
	var minNum = 0;
	var temp = 0;
	var swapElementIndex = 0;
	for(var i = 0; i < inputArray.length; i++){
		minNum = inputArray[i];
		for(var currentIndex = (i+1); currentIndex < inputArray.length; currentIndex++){
			if(inputArray[currentIndex] < minNum){
				minNum = inputArray[currentIndex];
				swapElementIndex = currentIndex;
			}
		}
		
		if(minNum !== inputArray[i]){
			// swapping the Numbers
			temp = inputArray[i];
			inputArray[i] = minNum;
			inputArray[swapElementIndex] = temp;
		}		
		
	}
	
	return inputArray;	
}

console.log(selectionSort01([1,31,26,4,3,12]));
console.log(selectionSort01([5,6,1,2,3,4]));
