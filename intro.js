// console.log("this is john smilga, node js");
// const num = 88;

// if (num < 5) {
//   console.log(num);
// } else {
//   console.log("not num");
// }

// require - function to use modules (CommonJS)
// module - info

// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(process);

const sayHi = (name) => {
  console.log(`hello there, `, name);
};

module.exports = sayHi;
