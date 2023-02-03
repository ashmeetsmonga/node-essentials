// rl.question("How do you like node?", (ans) => {
// 	console.log("Your ans is :", ans);
// });

const collectAnswers = require("./lib/collecAnswers");

const questions = ["What is your name?", "Where do you live?", "What is your age?"];

const emitter = collectAnswers(questions, (answers) => {
	console.log(answers);
	process.exit();
});

emitter.on("answer", (answer) => console.log("You entered :", answer));
