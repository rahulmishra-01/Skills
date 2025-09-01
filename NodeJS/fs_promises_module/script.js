const fs = require("fs");

// fs.promises
//   .readdir("./")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

fs.promises
  .writeFile("demoPromise.txt", "Demo Text", "utf-8")
  .then((data) => {
    console.log("File created successfully");
  })
  .catch((err) => {
    console.error(err);
  });