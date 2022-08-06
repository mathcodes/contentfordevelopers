function expression(num, op){
	if(!op)
		return num;
	return op(num);
}

function zero(op) { return expression(0, op); }
function one(op) { return expression(1, op); }
function two(op) { return expression(2, op); }
function three(op) { return expression(3, op); }
function four(op) { return expression(4, op); }
function five(op) { return expression(5, op); }
function six(op) { return expression(6, op); }
function seven(op) { return expression(7, op); }
function eight(op) { return expression(8, op); }
function nine(op) { return expression(9, op); }

function plus(x) {
	return function(y) {
		return y + x;
	}
}
function minus(x) {
	return function(y) {
		return y - x;
	}
}
function times(x) {
	return function(y) {
		return y * x;
	}
}
function dividedBy(x) {
	return function(y) {
		return Math.floor(y / x);
	}
}