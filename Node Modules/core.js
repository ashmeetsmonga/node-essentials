const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log(path.basename(__filename));

const dirUploads = path.join(__dirname, "www", "play");
console.log(dirUploads);

util.log(path.basename(__dirname));
util.log(path.join(__dirname));

util.log(v8.getHeapStatistics());
