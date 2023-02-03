const { inc, dec, getCount } = require("./myModule");

console.log(getCount());
inc();
inc();
inc();
console.log(getCount());
dec();
dec();
console.log(getCount());
