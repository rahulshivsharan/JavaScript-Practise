function bubbleSort(myArray){
	var temp = undefined,isSwap = false;
	
	for(var x = 0; x < myArray.length; x++){
		console.log(myArray);
		if(((x+1) <= (myArray.length - 1)) && myArray[x] > myArray[x+1]){
			temp = myArray[x];
			myArray[x] = myArray[x+1];
			myArray[x+1] = temp;
			isSwap = true;			 
		}else if(isSwap === true && x === (myArray.length - 1)){
			x = -1;
			isSwap = false;
		}else{
			continue;
		}		
	}
	return myArray;
}

//Below Improved programme after code review form above code.
function bubbleSort02(myArray){
	var temp = undefined;
	var hasSwap = false;
	var totalElements = myArray.length;
	var nextIndex = 0;
	var currentIndex = 0;
	do{
		hasSwap = false;

		for(var x = 0; x < totalElements; x++){
			currentIndex = x;
			nextIndex = x + 1;		
			if((nextIndex <= (totalElements - 1)) && (myArray[currentIndex] > myArray[nextIndex])){
				temp = myArray[currentIndex];
				myArray[currentIndex] = myArray[nextIndex];
				myArray[nextIndex] = temp;
				hasSwap = true;			 
			}		
		}

	}while(hasSwap);
	
	return myArray;
}	


//console.log(bubbleSort([5,1,2,4,3]));

//console.log(bubbleSort([5,1,6,2,0]));

//console.log(bubbleSort([1,2,7,6,4,12]));

console.log(bubbleSort02([5,1,2,4,3]));

console.log(bubbleSort02([5,1,6,2,0]));

console.log(bubbleSort02([1,2,7,6,4,12]));
