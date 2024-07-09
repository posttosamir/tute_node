const path = require("path");

const fullpath = path.join("./content", "subcontent", "text.text");
console.log(fullpath);

const base = path.basename(fullpath);
console.log(base);

const fullPathName = path.resolve(__dirname, "content", "subcontent", "text");

console.log(fullPathName);
