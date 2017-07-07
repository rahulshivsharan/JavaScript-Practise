var myArray = [], 
	searchNum = undefined;

// below function is used to capture the 
// commandline parameters for array and the
// number to be searched
(function(){
	process.argv.forEach(function (val, index, array) {
		var idx = 0, ar = undefined;

		try{
			
			// get the commandline argument for 
			// array values 
			if(index === 2){
  				myArray = myArray.concat(val.split(",").map(function(num){
  					return parseInt(num);
  				}));	
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

console.log(binary_search(myArray,searchNum,0,myArray.length));

function binary_search(numberArray, numberToSearch, lowIndex, maxIndex){
	var totalLength = maxIndex - lowIndex;
	
	var midIndex = parseInt(totalLength/2),
		str = "";

	/*
		If Lower Index is equal to Higher Index,
		that means number is not found and hence there is 
		a collision in pointers and hence return 
		as 'Can't be found'
	*/	
	if(lowIndex === maxIndex){
		return "can't be found";
	}	

	/*
		setting the actual middle index 
		by adding the computed middle index with lower index.
	*/
	midIndex = lowIndex + midIndex;

	// if number found
	if(numberArray[midIndex] === numberToSearch){
		
		str = " Number "+numberToSearch+" found at position "+midIndex;
		
		return str;

	// if number in middle index is less than the number to be searched
	// set the lower Index to new value i.e. a index position next higher to 
	// middle Index	
	}else if(numberArray[midIndex] < numberToSearch){
		
		lowIndex = midIndex + 1;
		

	// number to be searched is less than the number present at middle Index
	// set new maxIndex value i.e. index which is previous position to the
	// middle index 	
	}else if(numberArray[midIndex] > numberToSearch){
		
		maxIndex = midIndex;
		
	}else{
		
		return "can't be found";
	
	}

	return binary_search_2(numberArray, numberToSearch, lowIndex, maxIndex);
} // end of method binary_search_2
