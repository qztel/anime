var mongoose = require('mongoose')

//拿到他的结构
var Schema = mongoose.Schema


mongoose.connect('mongodb://localhost/anime')


var MusicCateGory = new Schema({
  data: Object
})


var music = mongoose.model('music',MusicCateGory)

//4.当我们有了模型构造函数之后，就可以使用这个构造函数，对users集合为所欲为
var musicdata = new music(
    {
      data: {
        riyu:[
          {
            id: 1,
            musicurl:'https://qztel.oss-cn-beijing.aliyuncs.com/music/%E6%97%A5%E8%AF%AD/Alchemy%2B%20-%20Time%20will%20shine.mp3',
            text: 'Alchemy+ - Time will shine'
          },
          {
            id:2,
            musicurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/music/%E6%97%A5%E8%AF%AD/ELISA%20-%20Real%20Force.mp3',
            text: 'ELISA - Real Force'
          }
        ],
        guoyu: [
          {
            id:3,
            musicurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/music/%E5%9B%BD%E8%AF%AD/Akino%20with%20bless4%20-%20Irreplaceable%C2%A0%28EN%C2%A0Ver.%29.mp3',
            text: 'Akino with bless4 - Irreplaceable (EN Ver.)'
          },
          {
            id:4,
            musicurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/music/%E5%9B%BD%E8%AF%AD/Kinoko%E8%98%91%E8%8F%87%2CMr.mo%20-%20%E5%9B%B4%E5%9F%8E.mp3',
            text: 'Kinoko蘑菇,Mr.mo - 围城'
          }
        ],
        yingyu: [
          {
            id: 5,
            musicurl:'https://qztel.oss-cn-beijing.aliyuncs.com/music/%E8%8B%B1%E8%AF%AD/Aimee%20Blackschleger%20-%20Release%20My%20Soul.mp3',
            text: 'Aimee Blackschleger - Release My Soul'
          },
          {
            id: 6,
            musicurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/music/%E8%8B%B1%E8%AF%AD/Akeboshi%20-%20Wind.mp3'
          }
        ]
      }

    }
)

// musicdata.save(function (err, ret) {
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

module.exports = mongoose.model('music', MusicCateGory)