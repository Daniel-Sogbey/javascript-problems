const fibonacci = num => {
	if (num < 2) {
		return num;
	} else {
		return fibonacci(num - 1) + fibonacci(num - 2);
	}
};

let result = fibonacci(4);
console.log(result);

for (let i = 0; i < 10; i++) {
	console.log(fibonacci(i));
}
