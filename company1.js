function Company1(id,){
	this.id = id;
	this.employment = [];
}
Company1.prototype.filterStaff = function(staff){
	var id = this.id;
	const total = staff.filter((x)=>{
		return x.id === id;
	});
	// return this.employment.push(total);
	return total.map((item) => {
		return this.employment.push(item);
	})
}
module.exports = Company1;	