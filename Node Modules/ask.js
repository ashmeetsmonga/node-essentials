const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// rl.question("How do you like node?", (ans) => {
// 	console.log("Your ans is :", ans);
// });

const questions = ["What is your name?", "Where do you live?", "What is your age?"];

function collectAnswers(questions, done) {
	const answers = [];

	function questionAnswered(answer) {
		answers.push(answer);
		if (answers.length < questions.length) {
			rl.question(questions[answers.length], questionAnswered);
		} else return done(answers);
	}
	rl.question(questions[0], questionAnswered);
}

collectAnswers(questions, (answers) => console.log(answers));
