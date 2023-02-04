const fs = require("fs");

if (fs.existsSync("your_files_here")) {
	console.log("Dir already exists");
} else {
	fs.mkdir("your_files_here", (err) => {
		if (err) console.log("ERROR :", err);
		else console.log("your_files_here created");
	});
}
