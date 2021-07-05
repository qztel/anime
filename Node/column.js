var mongoose = require('mongoose')

//拿到他的结构
var Schema = mongoose.Schema


mongoose.connect('mongodb://localhost/anime')


var Contribution = new Schema({
  username: Object,
  title: Object,
  content: Object,
  writetime: Object,
  like: Number
})


var columnWrite = mongoose.model('columnWrite',Contribution)

//4.当我们有了模型构造函数之后，就可以使用这个构造函数，对users集合为所欲为
var columnwrite = new columnWrite({
  username: '永远的神',
  title: '关于动漫宣传问题',
  content: '一、早期的日本动画作品，创作灵感基本上都来源于欧美的动画，大多数的动画内容都改编自民间的传说故事，以及一些传说中的妖怪故事。\n' +
      '\n' +
      '二、动漫大作《攻壳机动队》影响极其巨大，《黑客帝国》等著名的电影也借鉴了攻壳机动队的一些灵感。据说很多欧美的著名导演都是这部作品的粉丝。\n' +
      '\n' +
      '三、大多数的动画作品都是由漫画改编而来，日本的动画产业链十分的成熟，一部漫画作品在有一定的人气之后，就有很大的就会被改编为动画。\n' +
      '\n' +
      '四、在日本，用来印刷漫画消耗的纸张十分巨大，比厕纸的消耗量还要高',
  writetime: '2021/4/20下午12:47:34'
    }
)

// columnwrite.save(function (err, ret) {
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

module.exports = mongoose.model('columnWrite', Contribution)