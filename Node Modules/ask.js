// rl.question("How do you like node?", (ans) => {
// 	console.log("Your ans is :", ans);
// });

const collectAnswers = require("./lib/collecAnswers");

const questions = ["What is your name?", "Where do you live?", "What is your age?"];

collectAnswers(questions, (answers) => {
	console.log(answers);
	process.exit();
});
