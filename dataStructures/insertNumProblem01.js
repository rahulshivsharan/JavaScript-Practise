var myArray = [], 
	theNum = undefined;

// below function is used to capture the 
// commandline parameters for array and the
// number to be inserted
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
				theNum = parseInt(val)
			}

		}catch(e){
			console.log(e)
		}
		
	});
})();

console.log(" INSERT NUMBER ",theNum," in array ",myArray);
insertNum();

// main method to start
function insertNum(){
	// binary search the index position where the number can be inserted
	var index = binarySearch(myArray,0,myArray.length);
	
	console.log("Insert Number in position ",index);

	// insert new number at the searched index 
	// and move the following numbers to the immediate
	// next index position. Its a recursive call 
	doInsertion(index,theNum);

	console.log(" Array after new number insertion ",myArray);
} // end of insertNum


// binary search for index position,
// where the new number be inserted
function binarySearch(array,lowIndex,highIndex){
	console.log("LOW INDEX ",lowIndex," HIGH INDEX ",highIndex);
	var totalLenght = highIndex - lowIndex;
	var midIndex = parseInt(totalLenght/2);

	midIndex += lowIndex;

	if(lowIndex === highIndex){
		return lowIndex;
	}

	if(array[midIndex] === theNum){
		return midIndex;
	}else if(array[midIndex] < theNum){
		lowIndex = midIndex + 1;
	}else{
		highIndex = midIndex;
	}

	return binarySearch(array,lowIndex,highIndex);
}// end of binary Search	


// insert new number at the searched index 
// and move the following numbers to the immediate
// next index position. Its a recursive call
function doInsertion(index,numToInsert){
	var temp = (index >= myArray.length) ? numToInsert : myArray[index];		
	
	// once index position is more or equal to total array length, 
	// insert as new number in last position
	if(index >= myArray.length){ 
		myArray.push(temp);
	}else{			
		myArray[index] = numToInsert;
		index++;

		// move the numbers ahead to next position
		// as if pushing to next position
		doInsertion(index,temp);	
	}
		
} // end of doInsertion
