for (let i = 1; i <= 100 ; i++) {
	if (i % 3 === 0 && i % 5 === 0)
		console.log("FizzBuzz");
	else if (i % 3 === 0 && i % 5 !== 0)
		console.log("Fizz");
	else if (i % 3 !== 0 && i % 5 === 0)
		console.log("Buzz");
	else
		console.log(String(i));
}

// this is step up fizzbuzz ↓↓↓
// for (let i = 1; i <= 100 ; i++) {
// 	if (i % 3 === 0 && i % 5 === 0)
// 		process.stdout.write("FizzBuzz");
// 	else if (i % 3 === 0 && i % 5 !== 0)
// 		process.stdout.write("Fizz");
// 	else if (i % 3 !== 0 && i % 5 === 0)
// 		process.stdout.write("Buzz");
// 	else
// 		process.stdout.write(String(i));
// 	process.stdout.write(" ");
// }

