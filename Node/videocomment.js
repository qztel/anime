var mongoose = require('mongoose')

//拿到他的结构
var Schema = mongoose.Schema


mongoose.connect('mongodb://localhost/anime')


var Videocomment = new Schema({
  name: String,
  content: String,
  time: String,
  class: String
})


var videocomment = mongoose.model('videocomment',Videocomment)

//4.当我们有了模型构造函数之后，就可以使用这个构造函数，对users集合为所欲为
var commentwrite = new videocomment(
    {
      name: '千正tel',
      content: '这个动漫很久以前就喜欢了，嘿嘿嘿',
      time: '2020-04-20-15:53:14',
      class: 'alma'
    }
)
//

// commentwrite.save(function (err, ret) {
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

module.exports = mongoose.model('videocomment', Videocomment)