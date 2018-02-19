var download = require('download-file');
const unzip = require("unzip-crx");
var url = "https://nav1010.herokuapp.com/api/admin/extensions/editor/letznav_editor.crx"

var options = {
    directory: "D:\\Default Folder",
    filename: "letznav_editor.crx"
}
download(url, options, function(err) {
    if (err)
        console.log("err")
})


const crxFile = "D:\\Default Folder\\letznav_editor.crx";
unzip(crxFile).then(() => {
    console.log("Successfully unzipped your crx file..");
});