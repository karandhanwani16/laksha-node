// const fs = require("node:fs");
import fs from "node:fs";

export function readFile(){
    // console.log("start")
    // const data = fs.readFileSync("./readme.txt", "utf-8");
    // console.log("data came")
    // console.log(data)
    console.log("start")
    // console.log("end")
    fs.readFile("./readme.txt", "utf-8", (err,data)=>{
        if(err){
            console.error(err)
            return;
        }
        console.log(data)
    });
    console.log("end")
}

readFile();

// module.exports = {
//     readFile
// }