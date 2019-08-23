function Employee(id,name,age,task,salary){
	this.id  = id;
	this.name = name;
	this.age = age;
	this.task = task;
	this.salary = salary;
}
Employee.prototype.reward = function (percent){
	let total = this.salary + (this.salary*percent) ;
	return total;
}

module.exports = Employee;