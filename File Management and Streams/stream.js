const fs = require("fs");

const stream = fs.createReadStream("./data.md", "UTF-8");
let data = 0;
stream.once("data", (chunk) => {
	console.log("Reading once data");
	console.log("=============");
	console.log(chunk);
});

stream.on("data", (chunk) => {
	console.log("Chunk length", chunk.length);
	data += chunk.length;
});

stream.on("end", () => {
	console.log("data is :", data);
});
