const fs = require("fs");
const path = require("path");


/**
 * @description 读取utf8文件
 */
module.exports = (filepath, cb) => {
    fs.readFile(path.resolve(__dirname, filepath), {
        encoding: 'utf8'
    }, cb);
}