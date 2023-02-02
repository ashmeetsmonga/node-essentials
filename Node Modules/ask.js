const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("How do you like node?", (ans) => {
	console.log("Your ans is :", ans);
});
