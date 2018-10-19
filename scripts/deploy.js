const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

fetch("http://screen.waxy.org/screenshots/")
  .then(res => res.text())
  .then(text => {
    fs.writeFileSync(path.join(__dirname, "../src/data.html"), text);
  })
  .catch(err => {
    console.error("Error: something went wrong.", err);
  });
