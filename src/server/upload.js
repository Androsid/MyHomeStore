const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');
const path = require('path');

module.exports = function upload(req, res) {
    var form = new IncomingForm();
    let readStream;
    form.on('file', (field, file) => {
        // Do something with the file
        // e.g. save it to the database
        // you can access it using file.path

        fs.writeFile(file.path, file.name, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved in temporary folder!");
        });
        console.log('file', file.name);
        readStream = fs.createReadStream(file.path);
        console.log('file path temp ', file.path);

        //var src = 'C:/Users/Andro/AppData/Local/Temp/1450553215137237227.jpg';
        var src = file.path + '.jpg';
        var destDir = 'C:/Users/Andro/test';

//let src = path.join(__dirname, filename);
//let destDir = path.join(__dirname, 'test');

fs.access(destDir, (err) => {
  if(err)
    fs.mkdirSync(destDir);

  //copyFile(src, path.join(destDir, filename));
  copyFile(src, path.join(destDir, file.name));
});


function copyFile(src, dest) {

  let readStream = fs.createReadStream(src);
  readStream.once('error', (err) => {
    console.log(err);
  });
  readStream.once('end', () => {
    console.log('done copying');
  });
  readStream.pipe(fs.createWriteStream(dest));
}
/*         fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        }); */
    });
    form.on('end', () => {
        res.json();
    });
    form.parse(req);
};

//C:\tmp\test