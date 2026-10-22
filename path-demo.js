// const path = require("path");
import path from "node:path";

const filePath = "/Users/karandhanwani/Desktop/nn_tutorials/FS_JAVA/React/node/my-first-app/readme.txt";



console.log(path.basename(filePath))
console.log(path.dirname(filePath))
console.log(path.extname(filePath))
console.log(path.parse(filePath))
console.log(path.join("home", "user", "index.js"))
console.log(path.resolve("index.js"))
console.log(path.isAbsolute(filePath))