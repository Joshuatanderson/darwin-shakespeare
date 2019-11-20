const TARGET = "to be or not to be"
const POP_SIZE = 200;
let iterationCount = 0;

let populationArray = [];

// a million monkeys typing, etc... lol.
class Monkey {
	constructor(textLength) {
		this.length = textLength
	}
	createRandString = function(textLength) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789!.,-+~';
		let charactersLength = characters.length;
		for (var i = 0; i < textLength; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	this.text = createRandString(this.textLength)
}

const createMonkeys = (count) => {
	for (let i = 0; i < count; i++) {
		populationArray.push(new Monkey())
	}
}

createMonkeys(POP_SIZE);
console.log(populationArray)

// steps to setup:
	// create n elements with random DNA

// steps to evolve:
	// evaluate fitness (often best done as a probability)
	// create a mating pool (often best done with a probability of survival)
	// crossover (creating a child from the two parents)
	// mutation (a low chance of mutation for each gene)

// repeat evolution steps with children