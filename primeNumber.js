const primeNumber = num => {
	if (num == 2) {
		return "2 is a prime number";
	}

	if (num % 2 === 0) {
		return `${num} is not a prime number`;
	} else {
		return `${num} is a prime number`;
	}
};

const result = primeNumber(3);

console.log(result);
