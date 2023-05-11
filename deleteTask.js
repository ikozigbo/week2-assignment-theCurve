const fs = require("fs");

fs.unlink("./sampleDelete.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("file deleted");
  }
});

// deleting with promises
const filesystem = require("fs").promises;

filesystem
  .unlink("./sampleDelete.txt")
  .then(() => {
    console.log("file deleted");
  })
  .catch((error) => {
    console.log(error);
  });
