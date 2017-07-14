module.exports = {
  entry:'./main.js',
  output:{
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        //这里需要说明的是limit ，它的左右是如果图片的大小，小于8192bytes就以Data URL的形式引入图片，大于就用图片地址引用。
        test:/\.(png|jpg)$/,loader:'url-loader?limit=5192'
      }
    ]
  }
}