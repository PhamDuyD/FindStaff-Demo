var Employee = require(	'./Employee');
var Company1 = require('./Company1');
var Company2 = require('./Company2');
var fs = require('fs');
const readLineSync = require('readline-sync');



var staff1 = new Employee(1,'John',22,'front-end',500);
var staff2 = new Employee(2,'Alex',28,'front-end',750);
var staff3 = new Employee(1,'Lily',25,'front-end',600);
var staff4 = new Employee(1,'Rebeca',28,'front-end',750);
var staff5 = new Employee(1,'Lucas',25,'front-end',600);
var staff6 = new Employee(2,'Ben',30,'front-end',750);
var staff7 = new Employee(2,'Bob',22,'front-end',600);
var staff8 = new Employee(1,'Thomas',26,'front-end',600);
var staff9 = new Employee(2,'Jane',22,'front-end',600);
var staff10 = new Employee(1,'Clover',28,'front-end',750);
var staff11 = new Employee(2,'Angela',26,'front-end',500);
var staff12 = new Employee(1,'Arian',25,'front-end',600);
var staff13 = new Employee(2,'Ash',28,'front-end',750);
var staff14 = new Employee(2,'Bella',30,'front-end',750);
var staff15 = new Employee(2,'Caryln',25,'front-end',600);
var staff16 = new Employee(1,'Freya',26,'front-end',500);
var staff17 = new Employee(1,'Ken',25,'front-end',600);
var staff18 = new Employee(1,'Dan',30,'front-end',750);
var staff19 = new Employee(2,'Zac',26,'front-end',600);
var staff20 = new Employee(1,'Alan',28,'front-end',750);

var staffs = [
	staff1,staff2,staff3,staff4,staff5,staff6,staff7,staff8,
	staff9,staff10,staff11,staff12,staff13,staff14,
	staff15,staff16,staff17,staff18,staff19,staff20
];
var company1 = new Company1(1,);
var company2 = new Company2(2,);
company1.filterStaff(staffs);
company2.filterStaff(staffs);
console.log(company1);
console.log(company2);

