//Text
const text = "Hello World"
const textWithSpace = "    Hello World      "
const longText = "Hello World! My name is Rahul Mishra."
const last4Digit = "3837"

//ToUpperCase and ToLowerCase
const textUpperCase = text.toUpperCase();
const textLowerCase = text.toLowerCase();

//Length
const textLength = text.length;

//Trim Methods
const textTrimStart = textWithSpace.trimStart()
const textTrimEnd = textWithSpace.trimEnd()
const textTrimBothSide = textWithSpace.trim()

//includes Methods
const isTextIncludeWorld = text.includes("World");
const isTextIncludeHello = text.includes("Hello");
const isTextIncludeW = text.includes("W");
const isTextIncludeA = text.includes("A");

//indexOf Methods
const indexOfR = text.indexOf("r");

//replace and replaceAll Methods
const replaceHelloToHi = text.replace("Hello","Hi!")
const replaceAllAToW = longText.replaceAll("a","W")

//concat Methods
const concatTextandLongText = text.concat(longText)

//pad Methods
const pad14DigitBankNumber = last4Digit.padStart(14,"*")
const padEnd14DigitNumber = last4Digit.padEnd(14,"*")

//charAt Methods
const charAt16 = longText.charAt(16);  

//charCodeAt Methods
const charCodeAt13 = longText.charCodeAt(13);  

//split Methods 
const splitText = text.split(" ")

console.log(splitText)
