var myArray = [], 
	searchNum = undefined;

// below function is used to capture the 
// commandline parameters for array and the
// number to be searched
(function(){
	process.argv.forEach(function (val, index, array) {
		var idx = 0, ar = undefined;

		try{
			
			if(index === 2){
  				
  				ar = val.split(",");

  				// convert the numbers present as string values is array
  				// to array of numbers
  				for(idx = 0; idx < ar.length; idx++){
  					myArray.push(parseInt(ar[idx]));
  				}
			}

			// third index is the number to be searched.
			if(index === 3){
				searchNum = parseInt(val)
			}

		}catch(e){
			console.log(e)
		}
		
	});
})();

console.log(" SEARCH NUMBER ",searchNum," in array ",myArray);
console.log(" Number ",searchNum," "+binarySearch(myArray,searchNum));

// binary-Search implementation
function binarySearch(myArray,numberToSearch){
	var arrayLength = myArray.length,
		midIndex = parseInt(arrayLength/2), 
		subArray = undefined,
		lowerIndex = 0,
		higherIndex = 0; 
	
	if(myArray[midIndex] === numberToSearch){
		return "is Found";

	// search the number in left side if array
	// i.e. number is found to the left of the 
	// middle Index	
	}else if(midIndex !== 0 && myArray[midIndex] > numberToSearch){ 
		lowerIndex = 0;
		higherIndex = midIndex;
		subArray = myArray.slice(lowerIndex,higherIndex); // create the sub-array
		return binarySearch(subArray,numberToSearch); // search the number in the subarray

	// search the number in right side if array
	// i.e. number is found to the right of the 
	// middle Index	
	}else if(midIndex !== 0 && myArray[midIndex] < numberToSearch){ // search the number in right side if array
		lowerIndex = midIndex + 1;
		higherIndex = arrayLength;
		subArray = myArray.slice(lowerIndex,higherIndex); // create the sub-array
		return binarySearch(subArray,numberToSearch); // search the number in the subarray
	}else{
		return "can't be found";
	}	
}

