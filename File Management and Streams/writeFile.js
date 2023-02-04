const fs = require("fs");

const md = `
This is a test of writeFile method of fs
========================================

* Javascript is cool
* Node.js is cool
* React is supercool
`;

fs.writeFile("javascript.md", md.trim(), (err) => {
	if (err) throw err;
	fs.appendFileSync("javascript.md", "\n\nThis text is appended synchronously");
	console.log("javascript.md created");
});
