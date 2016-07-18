function addNumOne(nums){	
	return (nums.length > 1) ? (nums[0]  + addNumRecursively(nums.slice(1))) : nums[0];  
}

//console.log(addNumOne([1,5,4]));

function addNumTwo(nums){
	var fn = function(total,n){
		total += n;
		return total;
	}
	return nums.reduce(fn);
}

console.log(addNumTwo([4,1,2,3,3]));
