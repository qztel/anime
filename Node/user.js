var mongoose = require('mongoose')

//拿到他的结构
var Schema = mongoose.Schema


mongoose.connect('mongodb://localhost/anime')


var User = new Schema({
  username: String,
  password: String,
  mailbox: String,
  gender: String,
  date: String,
  age: Number,
  content: String,
  name: String,
  state: Number,
  fathername: String,
  mothername: String
})


var user = mongoose.model('user',User)

//4.当我们有了模型构造函数之后，就可以使用这个构造函数，对users集合为所欲为
var userwrite = new user(
    {
      username: '1309657634',
      password: 'jwlgtk66',
      mailbox: '1309657634@qq.com'
    }
)
//
// userwrite.save(function (err, ret) {
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

module.exports = mongoose.model('user', User)