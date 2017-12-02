const path = require("path");

module.exports = {

    entry: {
        tra_backend: "./src/index.ts"
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js"]
    },

    output: {
        filename: "[name].js",
        path: path.resolve("./www/js/"),
        publicPath: "/js"        
    },
        
    devServer: {
        contentBase: "./www",
        compress: true,
        hot: true,
        port: 5000
    }

};
