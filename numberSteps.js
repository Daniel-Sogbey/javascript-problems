const numberSteps = (max, step) => {
	let seq = [];

	for (let i = step; i <= max; i = i + step) {
		seq.push(i);
	}
	return seq;
};

const results = numberSteps(2, 0.5);
console.log(results);
