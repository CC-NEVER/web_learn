const path=require('path')

module.exports ={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),//动态获取路径
    filename:'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责加载
        //style-loader负责将样式添加到dom
        //使用多个loader，是从右向左
        use: ['style-loader','css-loader' ]
      }
    ]
  }
}