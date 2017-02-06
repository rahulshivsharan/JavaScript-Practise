var numArray = [];


// takes the space separated numbers from commanline
// and inserts in array numArray.
process.argv.forEach(function(val, index, array){
	if(index > 1){
		numArray.push(parseInt(val));
	}	
});

(findMaxOccurredNum02)(numArray);

/*
 * First Try
 * */
function findMaxOccurredNum01(nums){
	var currentCount = 0,
		prevCount = 0, 
		currentNum = 0,
		prevNum = 0;	

	for(var i = 0; i < nums.length; i++){		
		if(i === 0){	
			currentNum = nums[i];
			currentCount++;	
		}else if(nums[i] === currentNum){
			currentCount++;
		}else {
			if(prevCount < currentCount){
				prevNum = currentNum;
				prevCount = currentCount;
				currentNum = nums[i];	
				currentCount = 1;
			}else{
				currentNum = nums[i];	
				currentCount = 1;
			}
			
		}
	}

	if(prevCount < currentCount){
		console.log("NUM "+currentNum+" occurred "+currentCount+" times");
	}else{
		console.log("NUM "+prevNum+" occurred "+prevCount+" times");
	}
}

/*
 * New Improvised version
 * */
function findMaxOccurredNum02(nums){
	var count = 0, value = 0; 
	var result = {
		count : 0,
		value : 0
	}

	for(var i = 0; i < nums.length; i++){
		if(i === 0){
			result.value = nums[i];
			result.count = 1;
			count++;
			value = nums[i];		
		}else if(value !== nums[i]){
			count = 1;
			value = nums[i];			
		}else{
			count++;
		}

		if(count > result.count){
			result.value = value;
			result.count = count;
		}	
	}	
	
	console.log("NUM "+result.value+" occurred "+result.count+" times");
}


