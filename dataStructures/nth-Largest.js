var fn50 = function(){
		var reverseSort = function(myArray,highest){
			var x = 0,
				y = 0,
				z = 0,
				temp = 0,
				totalNum = myArray.length, // total numbers in array
				flag = false, // is the numbers sorted in reverse while iteration
				isAchieved = false; // whether we achieved the nth highest
			
			while(x < totalNum){
				y = x + 1; // start comparing 'yth' number which is next to 'xth' number.
				
				if(y < totalNum){
					// start comparing 'xth' with the next number, and if 'xth' number less than its next position number, just swipe them
					for(z = y; z < totalNum; z++){
						
						if(myArray[x] < myArray[z]){
							temp = myArray[z];
							myArray[z] = myArray[x];
							myArray[x] = temp;
							flag = true; // if number swiping done ?
						}else{
							continue;
						}	
					}					
				}
				
				if(flag){
					flag = false;
				}else{
					x++; // x holds the max number in series, now move to next position to find next highest number 
					if(x === highest){ // if x is what the desired max number which we want flag it and break the loop to escape further iteration.
						isAchieved = true;
					}	
				}
				if(isAchieved){
					break;
				}
			}

			print(myArray[(highest - 1)]);	
		};
		
		reverseSort([13,67,25,100,456],3); // passing the unsorted array of number's, and finding the 4th highest number
	};
	
	fn50();
