var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser')


var home = require('./home')
var video = require('./video')
var music = require('./music')
var comics = require('./comics')
var columnWrite = require('./column')
var user = require('./user')
var videocomment = require('./videocomment')
var musiccomment = require('./musiccomment')
var columncomment = require('./columncomment')
var admin = require('./admin')

var app = express();  //express对象

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//设置跨域请求
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


app.use(session({
  secret: 'billy',
  resave: false,
  saveUninitialized: false,
}));

app.get('/home', function(req, res) {

  home.find(function (err, ret) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send(ret[0])
  })
})

app.get('/video', function(req, res) {

  video.find(function (err, ret) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send(ret[0])
    // console.log(ret);
  })
})

app.get('/video/videoshow', function(req, res) {

  // res.send(req.query.id)
  var id = req.query.id
  var videoclass = req.query.videoclass

  var dongmandata = {}

  video.find(function (err, ret) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }

    var riben = ret[0].data.riben

   dongmandata = riben.find((item) => (item.id == id))

    videocomment.find({class: videoclass}, function (err, ret) {
      if (err) {
        return res.status(500).send('服务器出现问题啦')
      }
      var comment = ret

      var videodata = {
        data: dongmandata,
        videocomment: comment
      }
      res.send(videodata)
    })
  })

})

app.post('/video/videoshow', function(req, res) {

  new videocomment(req.body).save(function (err) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }
  })
  res.send('1')
  // res.redirect('http://localhost:8080/video/videoshow?id=' + req.query.id)
})


app.get('/music', function(req, res) {

  music.find(function (err, ret) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send(ret[0])
    // console.log(ret[0]);
  })
})
app.get('/music/musicshow', function(req, res) {


  var musicclass = req.query.musicclass

  musiccomment.find({class: musicclass},function (err, ret) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send(ret)
    // console.log(ret[0]);
  })
})
app.post('/music/musicshow', function(req, res) {
  var commentdata = req.body
  console.log(req.body);

  new musiccomment(req.body).save(function (err) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send('1')
  })
})


app.get('/comics', function(req, res) {

  comics.find(function (err, ret) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send(ret)
  })
})

app.get('/comics/comicsshow', function(req, res) {

  var id = req.query.id.replace(/"/g,'')
  comics.findById(id,function (err, ret) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send(ret)
    // console.log(ret);
  })
})

app.get('/column', function(req, res) {

  columnWrite.find(function (err, ret) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send(ret)
  })
})

// app.get('/column', function(req, res) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Method:POST,GET')
//   columnWrite.findById(id,function (err, ret) {
//     if (err) {
//       return res.status(500).send('服务器出现问题啦')
//     }
//     res.send('你好我是你得')
//   })
// })


app.post('/column/contribution', function(req, res) {

  new columnWrite(req.body).save(function (err) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.redirect('http://localhost:8080/column')
  })
})

app.get('/column/columnshow', function(req, res) {


  var id = req.query.id

  var username = req.query.username

  columnWrite.findById(id,function (err,ret) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }

    columncomment.find({class: username}, function (err, comment) {
      if (err) {
        return res.status(500).send('服务器出现问题啦')
      }
      var data = {
        detail: ret,
        comment: comment
      }
      res.send(data)
    })
  })
})

app.post('/column/columnshow', function(req, res) {

  new columncomment(req.body).save(function (err) {
    if (err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send("1")
  })
})

app.post('/login', function(req, res) {


  var body = JSON.stringify(req.body)
    body = JSON.parse(body)

  user.findOne({
    username: body.username,
    password: body.password
  }, function (err, ret) {
    if (err) {
      return res.status(500).json({
        err_code: 500,
        message: err.message
      })
    }

    var user = {
      zhuangtai: 0,
      information: ret
    }

    if (!ret) {
      //登录失败，用户名或者密码错误
      user.zhuangtai = -1
      res.send(user)
    } else if(ret.state === 0) {
      user.zhuangtai = 1
      res.send(user)
    } else {
      //登录成功
      user.zhuangtai = 0
      res.send(user)
    }
  })
})

app.post('/registered', function(req, res) {
  var body = req.body
  // console.log(body);
  user.findOne({
    //这里使用或方法，用来检测其中有一个符合
    $or: [
      {
        username: body.username
      },
      {
        mailbox: body.mailbox
      }
    ]
  },function (err, data) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
    // console.log(data);
    if(data&&data.username === body.username) {
      //用户名已经存在
      // console.log(data);
      res.send("-1")
    } else if(data&&data.mailbox === body.mailbox) {
      //邮箱已存在
      res.send("0")
    } else {
      res.send("1")
    }
  })
})
app.post('/registered/ok', function (req, res) {
  var body = req.body
  new user(body).save( function(err) {
        if(err) {
          return res.status(500).send('服务器出现问题啦')
        }
        res.send('1')
      })
})

app.post('/forget', function (req, res) {
  var body = req.body
  user.findOne({username: body.username}, function (err, ret) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }

    if(ret) {
      res.send("1")
    } else {
      res.send("0")
    }
  })
})
app.post('/forget/protection', function (req, res) {
  var body = req.body
  user.findOne({username: body.username}, function (err, ret) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }

    if(ret.fathername !== body.fathername&&ret.mothername !== body.mothername) {
      res.send("0")
    } else {
      res.send("1")
    }
  })
})
app.post('/forget/newpassword', function (req, res) {
  var body = req.body
  user.updateOne({username: body.username}, {password: body.password}, function (err) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send("1")
  })
})



app.post('/administrator', function(req, res) {
  var body = JSON.stringify(req.body)
  body = JSON.parse(body)

  admin.findOne({admin: body.admin,
  password: body.password},function(err, ret) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
    if(!ret) {
      res.send('-1')
    } else {
      res.send('0')
    }
  })
})

app.get('/adminuser', function(req, res) {

  user.find(function(err, ret) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send(ret)
  })
})
app.post('/admin/ban/user', function(req, res) {

  var iid = req.body._id.replace(/"/g,'')
  user.updateOne({_id: iid}, {state: 0}, function (err) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send('封禁成功')
  })
})

app.post('/admin/unblock/user', function(req, res) {

  var iid = req.body._id.replace(/"/g,'')
  user.updateOne({_id: iid}, {state: 1}, function (err) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send('解封成功')
  })
})

app.post('/admin/delete/user', function(req, res) {

  var iid = req.body._id.replace(/"/g,'')
  user.remove({_id: iid}, function (err) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send('删除成功')
  })
})

app.get('/admincomment', function(req, res) {

  videocomment.find().then(function (videodata) {
    var video = videodata

    musiccomment.find().then(musicdata => {
      var music = musicdata

      columncomment.find().then(columndata => {
        var column = columndata
        var data = {
          videocomment: video,
          musiccomment: music,
          columncomment: column
        }
        res.send(data)
      })
    })
  })
})
app.post('/admin/delete/videocomment', function(req, res) {

  var iid = req.body._id.replace(/"/g,'')
  videocomment.remove({_id: iid}, function (err) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send('删除成功')
  })
})
app.post('/admin/delete/musiccomment', function(req, res) {

  var iid = req.body._id.replace(/"/g,'')
  musiccomment.remove({_id: iid}, function (err) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send('删除成功')
  })
})
app.post('/admin/delete/columncomment', function(req, res) {

  var iid = req.body._id.replace(/"/g,'')
  columncomment.remove({_id: iid}, function (err) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send('删除成功')
  })
})

app.get('/admincolumn', function(req, res) {

  columnWrite.find(function(err, ret) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send(ret)
  })
})
app.post('/admin/delete/column', function(req, res) {

  var iid = req.body._id.replace(/"/g,'')
  columnWrite.remove({_id: iid}, function (err) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
    res.send('删除成功')
  })
})

app.post('/personalcenter', function(req, res) {
  var body = req.body
  console.log(body);
  user.updateOne({username: body.username},
      {
        name: body.name,
        mailbox: body.email,
        age: body.age,
        content: body.content,
        date: body.date,
        gender: body.gender
      },
      function (err) {
    if(err) {
      return res.status(500).send('服务器出现问题啦')
    }
        user.find({username: body.username}, function (err, ret) {
          res.send(ret)
        })
  })
})

app.listen(3000, function(){  //服务端口监听
  console.log('server now listening at port 3000');
});