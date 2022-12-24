export const Converter = (path) => {
  var fs = require('fs');
  var file = fs.readFileSync(`/Users/jonchristie/Desktop/WEB_DEV_DOCS/contentfordevelopers/src/assets/${path}`, 'utf8');
  var newFile = file.replace(/\n/g, '\n');
  newFile = newFile.replace(/\s/g, ' ');
  console.log(newFile);

  return newFile
}
