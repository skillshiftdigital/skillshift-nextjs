const fs = require('fs');
const path = require('path');

const directoryPath = '.';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory: ' + err);
  }

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    if (fs.statSync(filePath).isFile()) { // Only process if it's a file
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(`Unable to read file: ${file}`);
          return;
        }

        const filenameWithoutExtension = path.parse(file).name;
        const updatedData = data.replace(/replace/g, filenameWithoutExtension);

        fs.writeFile(filePath, updatedData, 'utf8', (err) => {
          if (err) {
            console.error(`Unable to write to file: ${file}`);
          }
        });
      });
    }
  });
});