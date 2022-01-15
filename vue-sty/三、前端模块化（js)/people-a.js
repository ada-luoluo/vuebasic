const name = 'ming'
const age = 18
const flag = true


function sum(num1, num2) {
	return num1 + num2
}

if (flag) {
	console.log(sum(20, 30))
	console.log('this is ming')
}


export {
	flag, sum
}
