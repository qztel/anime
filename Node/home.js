var mongoose = require('mongoose')

//拿到他的结构
var Schema = mongoose.Schema


mongoose.connect('mongodb://localhost/anime')


var homeCateGory = new Schema({
    data: Object
})


var home = mongoose.model('home',homeCateGory)

//4.当我们有了模型构造函数之后，就可以使用这个构造函数，对users集合为所欲为
var homeimg = new home(
    {
      data: {
        rebo: [
          {
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/%E4%BB%8A%E6%97%A5%E7%83%AD%E6%92%AD/1.png',
            id: 1
          },
          {
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/%E4%BB%8A%E6%97%A5%E7%83%AD%E6%92%AD/2.png',
            id: 2
          },
          {
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/%E4%BB%8A%E6%97%A5%E7%83%AD%E6%92%AD/3.png',
            id: 3
          },
          {
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/%E4%BB%8A%E6%97%A5%E7%83%AD%E6%92%AD/4.jpg',
            id: 4
          },
          {
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/%E4%BB%8A%E6%97%A5%E7%83%AD%E6%92%AD/4.jpg',
            id: 5
          },
          {
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/%E4%BB%8A%E6%97%A5%E7%83%AD%E6%92%AD/4.jpg',
            id: 6
          },
          {
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/%E4%BB%8A%E6%97%A5%E7%83%AD%E6%92%AD/4.jpg',
            id: 7
          },
          {
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/%E4%BB%8A%E6%97%A5%E7%83%AD%E6%92%AD/4.jpg',
            id: 8
          }
        ],
        gengxin: [
          {
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/%E6%9C%80%E6%96%B0%E6%9B%B4%E6%96%B0/1.jpg',
            text: '这爱情有点奇怪',
            id: 9
          }
        ]
      }
    }
)

// homeimg.save(function (err, ret) {
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

module.exports = mongoose.model('home', homeCateGory)