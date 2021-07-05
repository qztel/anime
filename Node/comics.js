var mongoose = require('mongoose')

//拿到他的结构
var Schema = mongoose.Schema


mongoose.connect('mongodb://localhost/anime')


var ComicsCateGory = new Schema({
  imgurl: Object,
  text: Object,
  comicsurl: Array
})


var comics = mongoose.model('comics',ComicsCateGory)

//4.当我们有了模型构造函数之后，就可以使用这个构造函数，对users集合为所欲为
var comicsdata = new comics(
    {
      imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/%E6%BC%AB%E7%94%BB/manhua/162_cover_glhxiyir.jpg',
      text: '一拳超人',
      comicsurl: [
          {imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/%E6%BC%AB%E7%94%BB/%E4%B8%80%E6%8B%B3%E8%B6%85%E4%BA%BA/1_jcoaykis.jpg'},
          {imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/%E6%BC%AB%E7%94%BB/%E4%B8%80%E6%8B%B3%E8%B6%85%E4%BA%BA/2_goaryqxz.jpg'}
          ]
    }
)

// comicsdata.save(function (err, ret) {
//   if (err) {
//     console.log('保存失败');
//   }else {
//     console.log('保存成功');
//     console.log(ret);
//   }
// })

// rebo.find(function (err, ret) {
//   if (err) {
//     console.log('查询失败');
//   }
//   console.log(ret);
// })

module.exports = mongoose.model('comics',ComicsCateGory)