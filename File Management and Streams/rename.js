const fs = require("fs");

fs.renameSync("./list.js", "./listFiles.js");
console.log("renamed successfully");

fs.rename("./javascript.md", "./your_files_here/javascript.md", (err) => {
	if (err) throw err;
	console.log("javascript.md moved");
});

fs.unlinkSync("./your_files_here/dummy.md");
console.log("dummy.md deleted");
