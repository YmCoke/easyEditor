const config = require("./webpack.common.js");

console.log("dev");

module.exports = {
    mode: "development",
    devServer: {
        open: true
    },
    ...config
}