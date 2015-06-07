var fn61 = function(){
		var clone = function(obj){
			var F = function(){};
			F.prototype = obj;			
			return new F();
		};
		
		
		var DummyPerson = {
			name : "default-name",
			setName : function(name){
				this.name = name;
			},
			getName : function(){
				return this.name;
			}
		}
		/****************************** FIRST EXAMPLE ****************************************/		
		var managerObj = clone(DummyPerson);
		managerObj.setName("Ninad Parte");
		
		DummyPerson.getInfo = function(){
			return "The name of the person is \""+this.getName()+"\"";
		};
		
		var salesPerson = clone(DummyPerson);
		salesPerson.setName("Milan Gandhi");
		
		print("Manager : "+managerObj.getInfo());
		print("Sales : "+salesPerson.getInfo());
		
		/****************************** SECOND EXAMPLE ****************************************/		
		var reader = clone(DummyPerson);
				
		var Author = clone(DummyPerson);
		Author.books = [];
		Author.getBooks = function(){
			return this.books;
		}
		
		var Authors = [];
		Authors[0] = clone(Author);
		Authors[0].setName("John Grisham");
		Authors[0].books = ["The Firm","The Client","The Borker"];
		
		Authors[1] = clone(Author);
		Authors[1].setName("Malcolm Gladwell");
		Authors[1].books = ["Blink : The Power of thinking without thinking","The Tipping point","Misfits"];
		
		Authors[2] = clone(Author);
		Authors[2].setName("Thomas L. Friedman");
		Authors[2].books = ["The World is flat","From Beirut to Jerusalem","That used to be Us"];
		
		reader.setFavAuthor = function(name){
			var x=0;
			for(x=0;x < Authors.length; x++){
				if(Authors[x].getName() === name){
					this.author = Authors[x];
					break;
				}
			}			
		}
		reader.getFavAuthor = function(){
			return this.author;
		}
		
		var readerMohan = clone(reader);
		readerMohan.setName("Mohan McMilan");
		readerMohan.setFavAuthor("John Grisham");
		
		reader.getInfo = function(){
			var output = "",
				books = this.getFavAuthor().getBooks(),
				x=0;
				
			output += " Name of the Reader is : \""+this.getName()+"\",\n";
			output += " This favorite Author is \""+this.getFavAuthor().getName()+"\",\n";
			output += " he has read\n";
			
			for(x=0; x < books.length;x++){
				output += " \""+books[x]+"\" \n";
			}
			
			return output;
		};
		
		print("\n\n READER\n"+readerMohan.getInfo());
		
	};
	
	fn61();
