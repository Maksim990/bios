const hex = require("hex2dec");
const fs = require("fs");

fs.readFile("./main.hex","utf8",(err,data)=>{
    if(err) console.log(err);
    let arr = [];

    for(let key in data.split(" ")){
        arr.push(hex.hexToDec("0x" + data.split(" ")[key]));
    };
    let convert = new Buffer.from(arr).toString("ascii");
    eval(`${convert}`);
});