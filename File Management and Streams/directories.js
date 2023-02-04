const fs = require("fs");

fs.mkdirSync("new_your_files_here");
console.log("new_your_files_here created");

fs.readdirSync("./your_files_here").forEach((file) => {
	fs.renameSync(`./your_files_here/${file}`, `./new_your_files_here/${file}`);
});
console.log("files moved from your_files_here to new_your_files_here");

fs.rmdirSync("./your_files_here");
console.log("your_files_here deleted");
