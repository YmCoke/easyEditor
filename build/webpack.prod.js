const config = require("./webpack.common.js");
const path = require("path");

module.exports = {
    mode: "production",
    output: {
        filename: "easyeditor.js",
        path: path.resolve(__dirname, "../dist")
    },
    devtool: "source-map", // 配置source-map文件
    ...config
}