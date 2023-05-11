//assigmnent question: read a pdf file with fs module asynchronously an return it as a string

const fs = require("fs");
// I had to install the "pdf-parse" package in other to convert pdf to text
const pdf = require("pdf-parse");

databuffer = fs.readFileSync("./sample.pdf");

pdf(databuffer)
  .then((data) => {
    console.log(data.text);
  })
  .catch((e) => {
    console.log(e);
  });
