const os = require("os");

const userInofo = os.userInfo();
console.log(userInofo);

const currentOS = {
  osName: os.type(),
  release: os.release(),
  totalVolume: os.totalmem(),
};

console.log(currentOS);
