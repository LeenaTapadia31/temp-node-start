const os = require("os");
// info about user
const user = os.userInfo();
console.log(user);
// the method returns system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
  type: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
