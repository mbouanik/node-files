const fs = require("fs");
const axios = require("axios");
const { get } = require("http");
const file = process.argv[2];

if (file.match("http")) {
  const res = axios.get(file).then((res) => {
    console.log(res.data);
  });
} else {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      console.log(`Error reading ${err.path}:`);
      console.log(`   Error: ${err.message}`);
      process.exit(1);
    }
    console.log(data);
  });
}
