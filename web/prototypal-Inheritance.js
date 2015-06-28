var fn62 = function(){
		var clone = function(obj){
			var F = function(){};
			F.prototype = obj;
			return new F();
		};
		
		var Person = function(studentName){
			var name = undefined;
			this.setName = function(studentName){
				name = studentName;
			};
			this.getName = function(){
				return name;
			};
		};

		var Department = function(deptName,deptId){
			var name = undefined,id = null;
			this.setName = function(deptName){
				name = deptName;
			};
			this.getName = function(){
				return name;
			};
			this.setId = function(deptId){
				id = deptId;
			};
			this.getId = function(){
				return id;
			}
			
			//calling contructor
			this.setName(deptName);
			this.setId(deptId);
		};

		var Address = function(block,street,area,region){
			var _block = undefined,
				_street = undefined,
				_area = undefined,
				_region = undefined;
				
			this.setBlock = function(block){
				_block = block;
			};

			this.getBlock = function(){
				return _block;
			};

			this.setStreet = function(street){
				_street = street;
			};

			this.getStreet = function(){
				return _street;
			}

			this.setArea = function(area){
				_area = area;
			};

			this.getArea = function(){
				return _area;
			};

			this.setRegion = function(region){
				_region = region;
			};

			this.getRegion = function(){
				return _region;
			};

			this.setBlock(block);
			this.setRegion(region);
			this.setArea(area);
			this.setRegion(region);	
		};
		
		var personObj = new Person("Default-Name");
		var deptObj = new Department("Default",0);
		var addressObj = new Address("default","default","default","default");
		
		var mulundAddress = clone(addressObj);
		mulundAddress.setBlock("406/B1, Lok-Everest");
		mulundAddress.setStreet("Jatashankar Dosa Road");
		mulundAddress.setArea("Mulund West");
		mulundAddress.setRegion("Mumbai 400080");
		
		var Student = clone(personObj);		
		Student.createChildObject = function(){
			var x = 0,
				prop = undefined,
				obj = new Object();
					
			if(typeof arguments[0] === "object"){
				for(prop in arguments[0]){						
					obj[prop] = arguments[0][prop];	
				}					
			}
					
			return obj;
		};
		
		var rahulStudent = clone(Student);
		rahulStudent.setName("Rahul Shivsharan");
		var computerDept = clone(deptObj);
		computerDept.setName("Engineering in Computer science");
		computerDept.setId("CMP213");
		
		rahulStudent.getDepartment = function(){
			return rahulStudent.createChildObject(computerDept);
		}
			
		rahulStudent.getAddress = function(){
			return rahulStudent.createChildObject(mulundAddress); 
		}
		
		rahulStudent.getInfo = function(){
			var output = "";
			output += 	" Name "+this.getName()+ "\n" +
						" Department Info "+ this.getDepartment().getName() + "\n"+
						" Address Info "+	this.getAddress().getBlock()+", "+
											this.getAddress().getStreet()+", "+
											this.getAddress().getArea()+", "+
											this.getAddress().getRegion();
			return output;										
		};
		
		print(rahulStudent.getInfo());
	};
	
/*********************************************** NEXT EXAMPLE *******************************************************/
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
				
		var managerObj = clone(DummyPerson);
		managerObj.setName("Ninad Parte");
		
		DummyPerson.getInfo = function(){
			return "The name of the person is \""+this.getName()+"\"";
		};
		
		var salesPerson = clone(DummyPerson);
		salesPerson.setName("Milan Gandhi");
		
		print("Manager : "+managerObj.getInfo());
		print("Sales : "+salesPerson.getInfo());
		
		
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
	
	/*********************************************** NEXT EXAMPLE *******************************************************/
	
var fn68 = function(){
		
		var clone = function(object){
			var F = function(){};
			F.prototype = object;
			return new F();
		};
		
		var Author_Object = {
			name : "default_Name",			
			createBook : function(bookName){
				return {
					title : bookName
				};
			}			
		};
		
		var authors = new Array();
		authors[0] = clone(Author_Object);		
		authors[0].name = "J.K Rowling";
		authors[0].books = new Array();
		authors[0].books[0] = authors[0].createBook("Harry Potter and the Philosopher's Stone");
		authors[0].books[1] = authors[0].createBook("Harry Potter and the Chamber of Secrets");
		authors[0].books[2] = authors[0].createBook("Harry Potter and the Prisoner of Azkaban");
		authors[0].books[3] = authors[0].createBook("Harry Potter and the Goblet of Fire");
		authors[0].books[4] = authors[0].createBook("Harry Potter and the Order of the Phoenix");
		authors[0].books[5] = authors[0].createBook("Harry Potter and the Half-Blood Prince");
		authors[0].books[6] = authors[0].createBook("Harry Potter and the Deathly Hallows");
		
		authors[1] = clone(Author_Object);
		authors[1].books = new Array();		
		authors[1].name = "John Grisham";
		
		
		authors[1].books[0] = authors[1].createBook("A Time To Kill");
		authors[1].books[1] = authors[1].createBook("The Firm");
		authors[1].books[2] = authors[1].createBook("The Client");
		authors[1].books[3] = authors[1].createBook("The Rainmaker");
		
		for(var x=0; x < authors.length; x++){
			var auth = authors[x],bookList = authors[x].books;
			print((x+1)+"> "+auth.name+", has written "+bookList.length+" books");
			
			for(var y=0; y < bookList.length; y++){
				print("... "+bookList[y].title);
			}
			print("\n");
		}
		
};
	
	fn68();
})();
