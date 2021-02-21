const path = require("path");

// 常规配置
module.exports = {
    entry: path.resolve(__dirname, "../src/index.ts"),
    resolve: {
        extensions: [".ts", ".js", ".json"] // 配置默认补充扩展名
    },
    module: {
        rules: [
            // .ts的文件都会被awesome-typescript-loader解析
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // .js文件都会被source-map-loader解析
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
}