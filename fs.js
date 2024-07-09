const { readFileSync, writeFileSync, write } = require("fs");

const filename = readFileSync("./content/first.txt", "utf8");
const filename2 = readFileSync("./content/second.txt", "utf8");

console.log("start");

console.log(filename, filename2);
writeFileSync(
  "./content/filesynced.txt",
  `here is the result ${filename} ${filename2}`,
  { flag: "a" }
);

console.log("done with this task...");
console.log("next task..");
