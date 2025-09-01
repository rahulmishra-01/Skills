const fs = require("fs");

const writeFile = async () => {
    try {
      const res =  await fs.promises.writeFile("demo.txt","demo text", "utf-8")
      console.log(res)
      console.log("File created successfully");
    } catch (error) {
        console.error(error);
    }
}

const readFile = async () => {
    try {
        const res = await fs.promises.readFile("demo.txt","utf-8")
        console.log(res)
    } catch (error) {
        console.error(error);
    }
}

const updateFile = async () => {
    try {
        const res = await fs.promises.appendFile("demo.txt","\ndemo text Updated", "utf-8")
        console.log("File updated successfully");
    } catch (error) {
        console.error(error);
    }
}

const deleteFile = async () => {
    try {
        const res = await fs.promises.unlink("demo.txt");
        console.log("File deleted successfully");
    } catch (error) {
        console.error(error);
    }
}

// writeFile()
// updateFile()
readFile()
deleteFile()
