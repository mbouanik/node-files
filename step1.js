const fs = require("fs");
const file = process.argv[2];

fs.readFile(file, "utf8", function (err, data) {
  if (err) {
    console.log(`Error reading ${err.path}:`);
    console.log(`   Error: ${err.message}`);
    process.exit(1);
  }
  console.log(data);
});
