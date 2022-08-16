const path =require("path")
const { output } = require("../01-webpack起步 copy/webpack.config")

module.exports ={
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
}