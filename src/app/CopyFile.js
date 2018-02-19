var download = require('download-file');
const unzip = require("unzip-crx");
var url = "https://nav1010.herokuapp.com/api/admin/extensions/editor/letznav_editor.crx"
var fs = require('fs');
function a() {
    var options = {
        directory: "D:\\Default Folder",
        filename: "letznav_editor.crx"
    }
    download(url, options, function(err) {
        if (err)
            console.log("err")
    })
    setTimeout(() => {         
        if (fs.existsSync('D:\\Default Folder\\letznav_editor.crx')) {
            console.log('Found file');
            b();
        }
    }, 20000);
}
function b() {
    const crxFile = "D:\\Default Folder\\letznav_editor.crx";
    unzip(crxFile).then(() => {
        console.log("Successfully unzipped your crx file..");
    });
}
a();