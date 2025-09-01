const fs = require("fs");


//fs.writeFileSync which create a file and write data in it on same folder if file is already present it will overwrite
const writeFile = fs.writeFileSync("demo.txt", "This is my first fs code", "utf-8");
// console.log(writeFile);


//fs.readFileSync which read data from a file
const readFile = fs.readFileSync("demo.txt", "utf-8");
// console.log(readFile);

//fs.appendFileSync which update data in a file
const appendFile = fs.appendFileSync("demo.txt", "\nThis is my second fs code", "utf-8");
// console.log(appendFile);


//fs.unlinkSync which delete a file
const deleteFile = fs.unlinkSync("demo.txt");
// console.log(deleteFile);