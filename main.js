const fs = require('fs');
const directoryPath = './posts';

// TODO: valid directory

const listFileName = fs.readdirSync(directoryPath)

const getDateOfFileName = (fileName) => {
  return fileName.slice(0, 10)
}

const getTitleOfFileName = (fileName) => {
  return fileName
    .slice(11, -3)
    .replace(/-/g, ' ')
}

const getDescriptionOfFileName = (fileName) => getTitleOfFileName(fileName)

const convertFileNameToFrontmatter = (fileName) => {
  return `---
title: ${getTitleOfFileName(fileName)}
description: ${getDescriptionOfFileName(fileName)}
pubDate: ${getDateOfFileName(fileName)}
---

`;
}

const addFrontmatterToFile = (fileName, path = '.') => {
  fs.readFile(path + "/" + fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    if (path != '.') {
      fs.mkdir('_' + path, { recursive: true }, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("New directory successfully created.");
        }
      });
    }

    const newText = convertFileNameToFrontmatter(fileName);
    const updatedContent = newText + data;
    const newPath = '_' + path
    fs.writeFile(newPath + '/' + fileName, updatedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log(`Frontmatter added into: ${fileName}`);
      }
    });
  });
}

listFileName.forEach(fileName => {
  addFrontmatterToFile(fileName, 'posts')
});