// console.log("this is john smilga, node js");
const num = 88;

if (num < 5) {
  console.log(num);
} else {
  console.log("not num");
}

const name1 = "samir";
const name2 = "shaikh";
// console.log(name1);
// console.log(name2);
// console.log(module);'
console.log(name1);

module.exports = { name1, name2 };

const man = {
  name: "Sandman",
};

const items = ["apple", "samsung"];

module.exports.itemstobesend = items;
module.exports.singleman = man;
