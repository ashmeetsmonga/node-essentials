const fs = require("fs");

fs.readFile("./readme.md", "UTF-8", (err, ipsum) => {
	if (err) throw err;
	console.log(ipsum);
});

console.log("reading file...");
