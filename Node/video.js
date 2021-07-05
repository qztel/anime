var mongoose = require('mongoose')

//拿到他的结构
var Schema = mongoose.Schema


mongoose.connect('mongodb://localhost/anime')


var VideoCateGory = new Schema({
  data: Object
})


var video = mongoose.model('video',VideoCateGory)

//4.当我们有了模型构造函数之后，就可以使用这个构造函数，对users集合为所欲为
var videoimg = new video(
    {
      data: {
        guochan: [
          {
            id: 100,
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E4%BA%94%E7%AD%89%E5%88%86/1.jpg',
            text: '五等分的新娘',
            videourl1: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E4%BA%94%E7%AD%89%E5%88%86/1.mp4',
            videourl2: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E4%BA%94%E7%AD%89%E5%88%86/2.mp4'
          },
          {
            id: 101,
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E5%9F%83%E7%BD%97%E8%8A%92%E9%98%BF/1.jpg',
            text: '埃罗芒阿老师',
            videourl1: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E5%9F%83%E7%BD%97%E8%8A%92%E9%98%BF/1.mp4',
            videourl2: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E5%9F%83%E7%BD%97%E8%8A%92%E9%98%BF/2.mp4'
          },
          {
            id: 102,
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E5%B0%8F%E6%9E%97%E5%AE%B6%E7%9A%84%E9%BE%99%E5%A5%B3%E4%BB%86/1.jpg',
            text: '小林家的龙女仆',
            videourl1: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E5%B0%8F%E6%9E%97%E5%AE%B6%E7%9A%84%E9%BE%99%E5%A5%B3%E4%BB%86/1.mp4',
            videourl2: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E5%B0%8F%E6%9E%97%E5%AE%B6%E7%9A%84%E9%BE%99%E5%A5%B3%E4%BB%86/2.mp4'
          },
          {
            id: 103,
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E5%B7%A5%E4%BD%9C%E7%BB%86%E8%83%9E/1.jpg',
            text: '工作细胞',
            videourl1: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E5%B7%A5%E4%BD%9C%E7%BB%86%E8%83%9E/1.mp4',
            videourl2: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E5%B7%A5%E4%BD%9C%E7%BB%86%E8%83%9E/2.mp4'
          },
          {
            id: 104,
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E5%B9%B2%E7%89%A9%E5%A6%B9%E5%B0%8F%E5%9F%8B/1.jpg',
            text: '干物妹小埋',
            videourl1: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E5%B9%B2%E7%89%A9%E5%A6%B9%E5%B0%8F%E5%9F%8B/%E5%B9%B2%E7%89%A9%E5%A6%B9%21%20%E5%B0%8F%E5%9F%8B/1.mp4',
            videourl2: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E5%B9%B2%E7%89%A9%E5%A6%B9%E5%B0%8F%E5%9F%8B/%E5%B9%B2%E7%89%A9%E5%A6%B9%21%20%E5%B0%8F%E5%9F%8B/2.mp4'
          },
          {
            id: 105,
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E6%80%BB%E4%B9%8B%E5%BE%88%E5%8F%AF%E7%88%B1/1.jpg',
            text: '总之就是非常可爱',
            videourl1: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E6%80%BB%E4%B9%8B%E5%BE%88%E5%8F%AF%E7%88%B1/1.mp4',
            videourl2: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E6%80%BB%E4%B9%8B%E5%BE%88%E5%8F%AF%E7%88%B1/2.mp4'
          },
          {
            id: 106,
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/%E6%9C%80%E6%96%B0%E6%9B%B4%E6%96%B0/21.jpg',
            text: '烧窑也要马克杯',
            videourl1: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E7%83%A7%E7%AA%91%E4%B9%9F%E8%A6%81%E9%A9%AC%E5%85%8B%E6%9D%AF/1.mp4',
            videourl2: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E7%83%A7%E7%AA%91%E4%B9%9F%E8%A6%81%E9%A9%AC%E5%85%8B%E6%9D%AF/2.mp4'
          },
          {
            id: 107,
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E8%BD%AC%E7%94%9F%E6%88%90%E8%9C%98%E8%9B%9B/1.jpg',
            text: '转生成蜘蛛又怎样',
            videourl1: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E8%BD%AC%E7%94%9F%E6%88%90%E8%9C%98%E8%9B%9B/1.mp4',
            videourl2: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E8%BD%AC%E7%94%9F%E6%88%90%E8%9C%98%E8%9B%9B/2.mp4'
          },
          {
            id: 108,
            imgurl: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E8%BE%89%E5%A4%9C%E5%A4%A7%E5%B0%8F%E5%A7%90/1.jpg',
            text: '辉夜大小姐第二季',
            videourl1: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E8%BE%89%E5%A4%9C%E5%A4%A7%E5%B0%8F%E5%A7%90/1.mp4',
            videourl2: 'https://qztel.oss-cn-beijing.aliyuncs.com/video-img/video/%E8%BE%89%E5%A4%9C%E5%A4%A7%E5%B0%8F%E5%A7%90/2.mp4'
          }
        ]
      }
    }
)

// videoimg.save(function (err, ret) {
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

module.exports = mongoose.model('video', VideoCateGory)