const fs = require("fs");

//fs.writeFile which create a file and write data in it on same folder if file is already present it will overwrite fs async version has 4 parameters 1st is file name 2nd is data 3rd is encoding and 4th is callback
// const writeFile = fs.writeFile("demo.txt", "This is my first fs async code", "utf-8", (err) => {
//     if(err){
//         console.error(err);
//     }else{
//         console.log("File created successfully");
//     }
// })


//fs.readFileSync which read data from a file
// fs.readFile("demo.txt","utf-8",(err,data) => {
//     if(err){
//         console.error(err);
//     }else{
//         console.log(data);
//     }
// })


// fs.appendFile("demo.txt","\nThis is my second fs async line code","utf-8",(err) => {
//     if(err){
//         console.error(err);
//     }else{
//         console.log("file updated successfully");
//     }
// })


// fs.unlink("demo.txt",(err) => {
//     if(err){
//         console.error(err);
//     }else{
//         console.log("File deleted successfully");
//     }
// })



// fs.writeFile("demo.txt","This is first line of codeing of creating nesting fs crud operation","utf-8",(err) => {
//     if(err){
//         console.error(err);
//     }else{
//         console.log("File created successfully");
//         fs.readFile("demo.txt","utf-8",(err,data) => {
//             if(err){
//                 console.error(err);
//             }else{
//                 console.log("Reading file data....")
//                 console.log(data)
//                 fs.appendFile("demo.txt","\nThis is second line of code of creating nesting fs crud operation","utf-8",(err) => {
//                     if(err){
//                         console.error(err);
//                     }else{
//                         console.log("file updated successfully");
//                         fs.readFile("demo.txt","utf-8",(err,data) =>{
//                             if(err){
//                                 console.error(err);
//                             }else{
//                                 console.log("Reading updated file data....")
//                                 console.log(data)
//                                 fs.unlink("demo.txt",(err) => {
//                                     if(err){
//                                         console.error(err);
//                                     }else{
//                                         console.log("File deleted successfully");
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })