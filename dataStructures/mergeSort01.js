var myGlobalArray = undefined;

myGlobalArray = [8,4,17,2,1,32];
example01(myGlobalArray);

myGlobalArray = [48,14,17,2,11,132];
example01(myGlobalArray);

myGlobalArray = [45,14,5,2,1,12];
example01(myGlobalArray);

myGlobalArray = [45,-14,-5,2,1,-12];
example01(myGlobalArray);

myGlobalArray = [38,27,43,3,9,82,10];
example01(myGlobalArray);

myGlobalArray = [34,45,1,23,19,12,10];
example01(myGlobalArray);


function example01(myArray){
	var mainArray = [];

  // divide
	createSubArray(myArray,0);
	
  // conquer
	mainArray = mergeArrays(mainArray);
	
	console.log(myArray+" => "+mainArray[0]);

	// creates an array which contains n arrays for n numbers present in myarray
	// i.e. if array = [ 34, 1, 27, 3 ] that the below method will return
	// [ [34], [1], [27], [3] ]
	function createSubArray(subArray,index){
			var localArray = [];
			
			if(subArray[index] !== undefined){
				localArray.push(subArray[index]);
				mainArray.push(localArray);
				createSubArray(subArray,++index); // dividing recursively	
			}		
	}//createSubArray

	
	// merge the arrays present i.e. 
	// if gblArray = [ [2,5], [1,7] ] 
	// then the below method will return
 	// an merged array [ [1, 2, 5, 7] ]
	function mergeArrays(gblArray){
			var mergedArrays = [],
				main_array = gblArray,
				arr = [], 
				left_array = undefined, 
				right_array = undefined, 
				counter = 0, 
				nextCounter = 0;
			
			do{
				
				while(counter < main_array.length){
					nextCounter = counter + 1;

					if(main_array[nextCounter] !== undefined){
						
						left_array = main_array[counter];
						right_array = main_array[nextCounter];
						
						// merge left and right arrays and sort it						
						arr = mergeAndSort(left_array,right_array); 	
						
						mergedArrays.push(arr);
					}else{
						mergedArrays.push(main_array[counter]);
					}
					counter = nextCounter + 1;
				}
				
				main_array = mergedArrays;				
				mergedArrays = [];	
				counter = 0;
				nextCounter = 0;

			}while(main_array.length > 1);

			return main_array;
	}//mergeArrays


	// merges two array and sorts i.e.
	// if array1 = [1,23] and array2 = [4,12] than
	// the below method returns [1,4,12,23]
	function mergeAndSort(array1,array2){
			var array2Counter = 0, 
				array1Counter = 0, 
				mergedArray = [];
			
			while(array2Counter < array2.length && array1Counter < array1.length){

				if(array2[array2Counter] < array1[array1Counter]){
					mergedArray.push(array2[array2Counter]);
					array2Counter++;
				}else{
					mergedArray.push(array1[array1Counter]);
					array1Counter++;
				}
			}

			while(array1Counter < array1.length){
				mergedArray.push(array1[array1Counter]);
				array1Counter++;
			}

			while(array2Counter < array2.length){
				mergedArray.push(array2[array2Counter]);
				array2Counter++;
			}

			return mergedArray;
	} //mergeAndSort



}//example01


/*
Running the above code the output is

rahul@rahul:~/myPractise/Algo$ node mergeSort.js 
8,4,17,2,1,32 => 1,2,4,8,17,32
48,14,17,2,11,132 => 2,11,14,17,48,132
45,14,5,2,1,12 => 1,2,5,12,14,45
45,-14,-5,2,1,-12 => -14,-12,-5,1,2,45
38,27,43,3,9,82,10 => 3,9,10,27,38,43,82
34,45,1,23,19,12,10 => 1,10,12,19,23,34,45
rahul@rahul:~/myPractise/Algo$ 

*/
