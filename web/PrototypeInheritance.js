function Dummy(){}

function Employee(name){
	var name = name;
	var income = undefined;

	this.getName = function(){
		return name;
	}

	this.setName = function(_name){
		name = _name;
	}

	this.getIncome = function(){
		return income;
	}

	this.setIncome = function(_income){
		income = _income;
	}

}

function PartTimeEmployee(){

	Employee.call(this);
	
	this.setHourlyWages = function(_wages){
		this.setIncome(_wages);
	}

	this.toString = function(){
		var str = "";
		str += 	"Name : "+this.getName()+
				"\nIncome : "+this.getIncome();
		return str;
	}
}

Dummy.prototype = Employee.prototype;
PartTimeEmployee.prototype = new Dummy();
PartTimeEmployee.prototype.constructor = PartTimeEmployee;

var emp1 = new PartTimeEmployee();

emp1.setName("Vinod Khanna");
emp1.setHourlyWages(350);

console.log(emp1.toString());
