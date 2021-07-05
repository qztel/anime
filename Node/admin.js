var mongoose = require('mongoose')

//拿到他的结构
var Schema = mongoose.Schema


mongoose.connect('mongodb://localhost/anime')


var Admin = new Schema({
  admin: String,
  password: String
})


var admin = mongoose.model('admin',Admin)

//4.当我们有了模型构造函数之后，就可以使用这个构造函数，对users集合为所欲为
var adminwhite = new admin({
  admin: 'admin',
  password: 'jwlgtk66'
    }
)
//
// adminwhite.save(function (err, ret) {
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

module.exports = mongoose.model('admin', Admin)