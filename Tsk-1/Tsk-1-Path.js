const path = require("path"); // this is needed to basically "import" the module

const filePath = path.parse(__filename); // here you simply use the the parse method on the current file name and assign it to a const
console.log(filePath); // here is is logged to the console
