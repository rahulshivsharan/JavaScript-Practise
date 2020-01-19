(function(){	
	var ex01 = ex01;
	var ex02 = ex02;
	

	//ex01();
	//ex02();
	

	function ex01(){
		var fn = fn;
		var n = 3;
		console.log("INITIAL-NUM "+n);			

		fn(3).then(fn).then(fn).then(function(num){
			console.log("FINAL-NUM "+num);			
		});

		async function fn(num){
			num += num;
			console.log("NUM "+num);			
			return num;
		}
	};	


	function ex02(){
		var fn = fn;
		var n = 5;

		console.log("INITIAL-NUM "+n);

		fn(n).then(fn).then(fn).then(function(num){
			console.log("FINAL-NUM "+num);			
		});			

		async function fn(num){
			num += num;
			console.log("NUM "+num);			
			return Promise.resolve(num);
		}
	};


})();