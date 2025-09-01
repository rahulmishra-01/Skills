//Requireing path module 
const path = require('path');

// console.log(path.sep) //for windows its \(backslash) and for linux its /(forward slash)
// console.log(path.sep)

// console.log(__dirname) which return the current directory path ex. D:\NodeJS\path_module
//ex for linux its /home/rahul/NodeJS/path_module
const currentPath = __dirname
// console.log(currentPath)

// console.log(__filename) which return the current file path ex. D:\NodeJS\path_module\script.js
//ex for linux its /home/rahul/NodeJS/path_module/script.js
const currentFile = __filename
// console.log(currentFile) 


//console.log(path.join(__dirname, 'content', 'subfolder', 'test.txt')) which return the file path ex. D:\NodeJS\path_module\content\subfolder\test.txt
const filePath = path.join(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(filePath)

//console.log(path.parse(filePath)) which return the file path ex. { root: 'D:\\', dir: 'D:\\NodeJS\\path_module\\content\\subfolder', base: 'test.txt', ext: '.txt', name: 'test' }

//ex for linux its { root: '/', dir: '/home/rahul/NodeJS/path_module/content/subfolder', base: 'test.txt', ext: '.txt', name: 'test' }
const parseData = path.parse(filePath);
// console.log(parseData)

//console.log(path.resolve(__dirname, 'content', 'subfolder', 'test.txt')) which return the file path ex. D:\NodeJS\path_module\content\subfolder\test.txt

//difference between join and resolve is that join return a relative path but resolve return a absolute path
const resolvedPath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(resolvedPath)


//path.extname which return the file extension ex. .txt
const extname = path.extname(currentFile);
// console.log(extname)


//basename which return the file name ex. script
const basename = path.basename(currentFile);
// console.log(basename)


//dirname which return the directory path ex. D:\NodeJS\path_module
//ex for linux its /home/rahul/NodeJS/path_module
const dirname = path.dirname(currentFile);
// console.log(dirname)

