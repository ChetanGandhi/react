var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var moduleName = "todo.list";
var dest = path.join(__dirname, "../dist/modules", moduleName);

module.exports = {
    entry: {
        index: "./core/index.js"
    },
    output: {
        path: dest,
        filename: "[name].pack.js"
    },
    resolve: {
        extensions: [".js", ".tpl.html", ".json", ".css", ".jsx"]
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["babel-preset-env", "babel-preset-react"]
                    }
                },
                exclude: /node_modules/,
                test: /\.js$/
            }
        ]
    },
    plugins: [new CopyWebpackPlugin([{ from: path.join(__dirname, "./index.html") }])]
};
