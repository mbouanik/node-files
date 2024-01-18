const fs = require("fs");
const axios = require("axios");
const { get } = require("http");
const file = process.argv[2];

async function get_website(file) {
  return await axios.get(file);
}

function read_file(file) {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      console.log(`Error reading ${err.path}:`);
      console.log(`   Error: ${err.message}`);
      process.exit(1);
    }
    console.log(data);
  });
}

// async function write_web_to_file(file) {
//   const res = await get_website(file);
// }

async function read_webpage(file) {
  return await get_website(file);
  // console.log(res.data);
}

if (file == "--out") {
  const filename = process.argv[3];
  const arg = process.argv[4];
  console.log(arg);
  let content = "";
  if (arg.match("http")) {
    const res = read_webpage(arg);
    res.then(async (res) => {
      fs.writeFile(filename, res.data, "utf8", function (err) {
        if (err) {
          console.log(err);
        }
      });
    });
  } else {
    fs.readFile(arg, "utf8", function (err, data) {
      if (err) {
        console.log(`Error reading ${err.path}:`);
        console.log(`   Error: ${err.message}`);
        process.exit(1);
      }

      fs.writeFile(filename, data, "utf8", function (err) {
        if (err) {
          console.log(err);
        }
      });
    });
  }
} else if (file.match("http")) {
  const res = read_webpage(file);
  res.then((res) => {
    console.log(res.data);
  });
} else {
  read_file(file);
}
