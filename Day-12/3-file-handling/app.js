const fs = require("fs");

// fs.writeFile("new.txt", "Hey look here!!!", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File written");
// });

// fs.appendFile("new.txt", ". I'm a bot", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File updated");
// });

// fs.readFile("new.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

fs.unlink("new.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File Deleted");
});
