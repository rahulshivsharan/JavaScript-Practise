//Even Fibonacci numbers
// My Solution

var fn09 = function(){
		var total = 0;
		var fibo = function(prev,num){
			var temp = 0
			if((num == 1 || num == 2) || (num <= 4000000)){
				total = (num == 1 || num == 2) ? 2 : (((num % 2) == 0) ? (num + total) : total);
				if (prev == 0 || prev == 1){
					prev = num;
					num++;
				}else{
					temp = num;
					num = prev + num;
					prev = temp;
				}
				
				return fibo(prev,num);
			}else{
				return total;
			}
		}
		
		print(fibo(0,1))
	}
	
	fn09();
