// 'fs-extra' simply adds some more methods to the base 'fs' as well as adds promise support to the fs methods

const fs = require("fs-extra"); // allows access to module

// the copy method was added with 'fs-extra' and can copy a file from one loaction to another

fs.copy(
  "/tmp/myfile" /* original file location, TYPE EXISTING FILENAME HERE */,
  "/tmp/mynewfile" /* new file location */,
  (err) => {
    if (err) return console.error(err); // if error is thrown, logs the error
    console.log("success!");
  }
);
