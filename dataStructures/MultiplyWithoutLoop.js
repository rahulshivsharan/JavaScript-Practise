
// multiply two numbers without using multiplication.

// the code below does the work if both multiplicant and mulitplier are positive numbers,
// but fails if either of those are negative
function multiply(num,toNum){
	var product = 0;
	for(var i = 1; i <= toNum; i++){
		product += num;
	}
	
	return product;
}

// the code below works for positive or negative muliplier or multiplicant.
// The code below uses recursion
function multiply01(num,toNum){
	var product = num;
	if(toNum < 0){
		return -product + multiply01(product,++toNum);
	}else if(toNum >= 1){
		return product + multiply01(product,--toNum);
	}else{
		return 0;
	}
}

console.log(multiply01(15,-5));
console.log(multiply(15,-5));
