//module is external code is like library for use
//module has function
//module are available in official website
const fs = require("fs");
let text = fs.readFileSync("nodejs-1.js","utf-8");
text = text.replace("means","prit");

console.log(text);
fs.writeFileSync("rohan.txt",text);