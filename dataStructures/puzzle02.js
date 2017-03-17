puzzle06([3,6,-1,11,15,-1,23,34,-1,42],[1,12,28]);
puzzle06([3,6,-1,11,15,-1,23,34,-1,42],[7,19,38]);
puzzle06([3,6,11,15,32,34,42,-1,-1,-1,-1],[1,10,17,56]);
puzzle06([-1,-1,-1,-1,3,6,11,15,32,34,42],[1,10,17,56]);
puzzle06([-1,-1,-1,-1,3,6,11,15,32,34,42],[56,78,90,100]);
puzzle06([12,34,65,-1,71,85,90,-1,101,120,-1,200],[24,37,94]);
puzzle06([3,6,-1,11,15,-1,32,34,-1,42,-1],[1,10,17,56]);
puzzle06([-1,-1,-1,56,78,90,112],[1,4,5]);
puzzle06([-1,-1,-1,-1,56,78,90,112],[1,4,5,1000]);
puzzle06([-1,-1,-1,-1,56,78,90,1200],[1,4,5,1000]);


function puzzle06(array1,array2){
	var array1Counter = 0,
		array2Counter = 0,
		outputArray = [];

	while(array1Counter < array1.length || array2Counter < array2.length){

		if(array1[array1Counter] !== undefined && (array2[array2Counter] === undefined || array1[array1Counter] < array2[array2Counter])){
			
			if(array1[array1Counter] !== -1){				
				outputArray.push(array1[array1Counter]);
			}
			
			array1Counter++;
		}

		if(array2[array2Counter] !== undefined && (array1[array1Counter] === undefined || array2[array2Counter] < array1[array1Counter])){
			outputArray.push(array2[array2Counter]);
			array2Counter++;
		}


	}// end of while

	console.log("finished ",outputArray);
}// end of puzzle06
