function puzzle02(arrayOne,arrayTwo){	
	var	array1Counter = 0,
		array2Counter = 0,		 
		hasMinusOneOccurred = false;

	console.log(" array-1 ",arrayOne);
	console.log(" array-2 ",arrayTwo);	

	
	while(array2Counter < arrayTwo.length){ // iterate through array2
			
		do{
			if(arrayOne[array1Counter] === -1){ // if -1 occurred in array1
				hasMinusOneOccurred = true;

				// swaping numbers at current position of array1
				// with current position of array2 
				swap(arrayOne,arrayTwo,array1Counter,array2Counter);
				
				// recheck if the current value is greater than other values
				// of array1
				if(recheckAndSort(arrayOne,array1Counter) === true){
					array1Counter = -1;// recheck array1 from start
				}else{
					// recheck the current array1 counter, for doing so go 1 count back
					// so that even if the counter is incremented it points to current
					// number itself 
					array1Counter--; 
				}

			}else if(arrayOne[array1Counter] > arrayTwo[array2Counter]){
				swap(arrayOne,arrayTwo,array1Counter,array2Counter);
			}else{
				array1Counter++;
				continue;	
			}

			array1Counter++;			
		}while(hasMinusOneOccurred === false); // end of do-while
		
		array2Counter++;
		hasMinusOneOccurred = false;
		
	}//end of while

	console.log(" Sorted array ",arrayOne);

	function swap(arr1,arr2,arr1Index,arr2Index){
		var temp = arr2[arr2Index];
		arr2[arr2Index] = arr1[arr1Index];
		arr1[arr1Index] = temp;
	}// end of swap	

	// this method is call if -1 occures in array1
	function recheckAndSort(arrayOne,array1Counter){
		var isGreaterVal = true,
			prevCounter = 0,
			nextCounter = 0,
			temp = 0,
			recheckFromStart = false;


		if(array1Counter === 0){ // if -1 occurred at first position of array1.

			// flag to check if -1 occurrec at first position
			// if yes, iterate array1 from start
			recheckFromStart = true; 

			// iterate forward to check wether any numbers are less than current position,
			// if yes than move forward
			for(var j = 0; isGreaterVal; j++){
				nextCounter = j + 1;
				
				if(arrayOne[nextCounter] === -1){
					// swaping numbers of array1 between next to current					
					swap(arrayOne,arrayOne,nextCounter,j);
					isGreaterVal = true; 
					
				}else if(arrayOne[nextCounter] < arrayOne[j]){
					// swaping numbers of array1 between next to current
					swap(arrayOne,arrayOne,nextCounter,j);
					isGreaterVal = true;
					
				}else{
					isGreaterVal = false;
				}
				
			}//end of for

		}else{// if -1 occurred in the middle position of array1 and is been swaped then
			// iterate backwards to check if any number less then current position exists,
			// if yes than shift backwards.
			for(var i = array1Counter; isGreaterVal; i--){
				prevCounter = i - 1;
				
				if(arrayOne[prevCounter] > arrayOne[i]){

					// swaping numbers of array1 between previous to current					
					swap(arrayOne,arrayOne,prevCounter,i);
					isGreaterVal = true; 
				}else{
					isGreaterVal = false;
				}
				
			}// end of for	
		}

		return recheckFromStart;		
	}// end of recheckAndSort
} // end of puzzle02

//puzzle02([3,6,-1,11,15,-1,23,34,-1,42],[1,12,28]);
//puzzle02([3,6,-1,11,15,-1,23,34,-1,42],[7,19,38]);
//puzzle02([3,6,11,15,32,34,42,-1,-1,-1,-1],[1,10,17,56]);
//puzzle02([-1,-1,-1,-1,3,6,11,15,32,34,42],[1,10,17,56]);
//puzzle02([-1,-1,-1,-1,3,6,11,15,32,34,42],[56,78,90,100]);
puzzle02([12,34,65,-1,71,85,90,-1,101,120,-1,200],[24,37,94]);

/*
Output of above code will be

array-1  [ 12, 34, 65, -1, 71, 85, 90, -1, 101, 120, -1, 200 ]
array-2  [ 24, 37, 94 ]
Sorted array  [ 12, 24, 34, 37, 65, 71, 85, 90, 94, 101, 120, 200 ]
*/
