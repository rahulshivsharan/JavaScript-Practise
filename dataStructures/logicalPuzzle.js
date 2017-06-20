

// converts a number
// to an number array
// i.e. 13452 = [1,3,4,5,2]
var convertToNumArray =  function(num){
	
	var numList = [], 
		flag = true,
		n = 0;
	
	do{
		n = num % 10; // get the remainder value
		numList.push(n);
		num = parseInt(num/10); // get the quotient value in division

		if(num <= 0){
			flag = false;	
		}

	}while(flag === true);

	numList = numList.reverse();

	return numList;
}


// gets the next value
function getNext(num){
	var numArray = convertToNumArray(num), // gets the number array; example [1,3,4,5,2]
		totalLength = numArray.length - 1, 
		nextIndex = 0,
		leastIndex = 0,
		prevDiff = 0, 
		diff = 0, 
		swapIndex = 0, 
		temp = 0,
		str = "";
		
	// iterate from right most number to find out the 
	// number which is less than previous one.
	// for [1,3,4,5,2] the number is 4. 	
	for(var index = totalLength; index >= 1; index--){
		nextIndex = (index - 1);
		
		if(numArray[nextIndex] < numArray[index]){
			leastIndex = nextIndex;
			break;
		}else{
			continue;
		}
	}
	
	// iterate from right to check the number which is closest
	// and greater then the number we found from above loop.
	// so in our case 5 is the closes to 4	
	for(index = totalLength; index > leastIndex; index--){
		diff = numArray[index] - numArray[leastIndex];

		if(index === totalLength){			
			prevDiff = (diff  < 0) ? 9999 : diff;
			closestNum = numArray[index];
			swapIndex = index;	
		}else{
			if(diff >= 0 && diff < prevDiff){				
				prevDiff = diff;
				swapIndex = index;
			}
		}

	}
    // as 5 is the closest to 4. Replace them
    // so the conversion will be from [1,3,4,5,2] to [1,3,5,4,2]
	temp = numArray[swapIndex];
	numArray[swapIndex] = numArray[leastIndex];
	numArray[leastIndex] = temp;

	
	/*
		Now sort the sub array i.e. the numbers falling right 
		to the replaced position.
		i.e. [1,3,5,4,2] so the sub array is [4,2].
		so sort in ascending order hence [2,4]
		so the complete number is 
		[1,3,5,2,4].
	*/

	// bubble sort on sub array
	do{	
		
		for(index = leastIndex + 1; index < totalLength; index++){
			nextIndex = index + 1;
			if(numArray[index] > numArray[nextIndex]){
				temp = numArray[index];
				numArray[index] = numArray[nextIndex];
				numArray[nextIndex] = temp;  
			}
		}
		totalLength--; 
	}while(totalLength > (leastIndex + 1));

	for(index = 0; index < numArray.length; index++){
		str += numArray[index];
	} 

	return parseInt(str);

}// end of getNext 


var nr = undefined;

// capturing from commandline
// example : node logic.js 12345
(function(){
	process.argv.forEach(function (val, index, array) {
		if(index === 2)
  			nr = array[index];
	});
})();


console.log(nr+" => "+getNext(nr));


