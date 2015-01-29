	var fn06 = function(){
		var magicIngredient = function(ingredient){
			return function(filling){
				return "> This sandwitch is made up of \""+ingredient+"\" and \""+filling+"\" filling.";
			};
		}

		var f = magicIngredient("lard");
		print(f("ham"));
		print(f("cheese"));		
	} 

	fn06();
	
/*
> This sandwitch is made up of "lard" and "ham" filling.
> This sandwitch is made up of "lard" and "cheese" filling.
*/
