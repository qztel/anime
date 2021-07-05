<template>
  <div id="admin-center">
    <div class="admin-text">
      <ul>
        <li @click="userClick()" :class="{active: usershow}">用户信息</li>
        <li
            @mouseover="mouseevent()"
            @mouseout="outevent()">
          <div :class="{active: commentshow}">评论管理</div>
          <div class="comment-button" v-show="buttonshow">
            <div @click="commentClick()">视频评论</div>
            <div @click="commentClick2()">音乐评论</div>
            <hr>
            <div @click="commentClick3()">专栏评论</div>
          </div>
        </li>
        <li @click="columnClick()" :class="{active: columnshow}">专栏文章</li>
      </ul>

    </div>


    <div class="management" v-show="usershow">
      <div>
        <span>用户名</span>
        <span>邮箱</span>
        <span>昵称</span>
        <span>性别</span>
        <span>状态</span>
        <span></span>
      </div>
      <div class="xinxi">
        <ul>
          <li v-for="item in user">
           <span>{{item.username}}</span>
            <span>{{item.mailbox}}</span>
            <span>{{item.name}}</span>
            <span>{{item.gender}}</span>
            <span>{{item.state}}</span>
            <span class="user-button">
              <button @click="fengjin(item._id)">封禁</button>
              <button @click="jiefeng(item._id)">解封</button>
              <button @click="shanchu(item._id)">删除</button>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="management" v-show="columnshow">
      <div>
        <span>文章名</span>
        <span>发表人</span>
        <span>发表时间</span>
        <span>喜欢数</span>
        <span></span>
      </div>
      <div class="xinxi2">
        <ul>
          <li v-for="item in column">
            <span>{{item.title}}</span>
            <span>{{item.username}}</span>
            <span>{{item.writetime}}</span>
            <span>{{item.like}}</span>
            <span class="user-button">
              <button @click="deleteColumn(item._id)">删除</button>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="management" v-show="commentshow">
      <div>
        <span>评论人</span>
        <span>评论信息</span>
        <span>评论时间</span>
        <span></span>
      </div>
      <div class="xinxi3">
        <ul>
          <li v-for="item in comment.videocomment">
            <span>{{item.name}}</span>
            <span>{{item.content}}</span>
            <span>{{item.time}}</span>
            <span class="user-button">
              <button @click="deleteVideo(item._id)">删除</button>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="management" v-show="commentshow2">
      <div>
        <span>评论人</span>
        <span>评论信息</span>
        <span>评论时间</span>
        <span></span>
      </div>
      <div class="xinxi3">
        <ul>
          <li v-for="item in comment.musiccomment">
            <span>{{item.name}}</span>
            <span>{{item.content}}</span>
            <span>{{item.time}}</span>
            <span class="user-button">
              <button @click="deleteMusic(item._id)">删除</button>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="management" v-show="commentshow3">
      <div>
        <span>评论人</span>
        <span>评论信息</span>
        <span>评论时间</span>
        <span></span>
      </div>
      <div class="xinxi3">
        <ul>
          <li v-for="item in comment.columncomment">
            <span>{{item.name}}</span>
            <span>{{item.content}}</span>
            <span>{{item.time}}</span>
            <span class="user-button">
              <button @click="deleteColumncomment(item._id)">删除</button>
            </span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ErrorCenter",
    props: {
      user: {
        type: Array,
        default() {
          return []
        }
      },
      column: {
        type: Array,
        default() {
          return[]
        }
      },
      comment: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        usershow: true,
        columnshow: false,
        commentshow: false,
        yincang: false,
        buttonshow: false,
        commentshow2: false,
        commentshow3: false,
        sks: true
      }
    },
    methods: {
      userClick() {
        this.usershow = true
        this.columnshow = false
        this.commentshow = false
        this.commentshow2 = false
        this.commentshow3 = false
      },
      columnClick() {
        this.usershow = false
        this.columnshow = true
        this.commentshow = false
        this.commentshow2 = false
        this.commentshow3 = false
      },
      commentClick() {
        this.usershow = false
        this.columnshow = false
        this.commentshow = true
        this.commentshow2 = false
        this.commentshow3 = false
      },
      commentClick2() {
        this.usershow = false
        this.columnshow = false
        this.commentshow = false
        this.commentshow2 = true
        this.commentshow3 = false
      },
      commentClick3() {
        this.usershow = false
        this.columnshow = false
        this.commentshow = false
        this.commentshow2 = false
        this.commentshow3 = true
      },

      mouseevent() {
          this.buttonshow = true

      },
      outevent() {
          this.buttonshow = false
      },

      //网络请求相关
      fengjin(id) {
        var con
        con = confirm('确定要封禁吗？')
        if(con) {
          this.$axios.post('/admin/ban/user',{_id: id})
              .then(res=>{
                alert(res.data)
                location.reload()
              })
        }
      },
      jiefeng(id) {
        var con
        con = confirm('确定要解封吗？')
        if(con) {
          this.$axios.post('/admin/unblock/user',{_id: id})
              .then(res=>{
                alert(res.data)
                location.reload()
              })
        }
      },
      shanchu(id) {
        var con
        con = confirm('确定要删除用户以及其数据吗？')
        if(con) {
          this.$axios.post('/admin/delete/user',{_id: id})
              .then(res=>{
                alert(res.data)
                location.reload()
              })
        }
      },
      deleteVideo(id) {
        var con
        con = confirm('确定要删除评论数据吗？')
        if(con) {
          this.$axios.post('/admin/delete/videocomment',{_id: id})
              .then(res=>{
                alert(res.data)
                location.reload()
              })
        }
      },
      deleteMusic(id) {
        var con
        con = confirm('确定要删除评论数据吗？')
        if(con) {
          this.$axios.post('/admin/delete/musiccomment',{_id: id})
              .then(res=>{
                alert(res.data)
                location.reload()
              })
        }
      },
      deleteColumn(id) {
        var con
        con = confirm('确定要删除该文章吗？')
        if(con) {
          this.$axios.post('/admin/delete/column',{_id: id})
              .then(res=>{
                alert(res.data)
                location.reload()
              })
        }
      },
      deleteColumncomment(id) {
        var con
        con = confirm('确定要删除评论数据吗？')
        if(con) {
          this.$axios.post('/admin/delete/columncomment',{_id: id})
              .then(res=>{
                alert(res.data)
                location.reload()
              })
        }
      }
    }
  }
</script>

<style scoped>
  .active {
    background: black;
    color: white;
  }

 #admin-center {
   border-radius: 50px;
 }
  .admin-text {
    width: 400px;
    height: 100vh;
    position: fixed;
    top: 80px;
    border: 3px solid #777777;
  }
 .admin-text ul {
   height: 800px;
 }
 .admin-text ul li{
   /*background: green;*/
   height: 100px;
   line-height: 100px;
   margin-top: 120px;
   font-size: 30px;
    text-align: center;
 }
 .management {

   margin-left: 405px;
 }
  .management div:first-child{
    margin-top: 15px;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #777777;
  }
 .management div:first-child span {
   display: inline-block;
   width: 150px;
   text-align: center;
 }

  .xinxi ul li{
    /*background: red;*/
    display: flex;
    justify-content: space-around;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    border-bottom: 1px solid #999999;
  }
 .xinxi ul li span {
   display: inline-block;
   width: 250px;
   text-align: center;
 }

 .xinxi2 ul li{
   /*background: red;*/
   display: flex;
   justify-content: space-around;
   /*height: 150px;*/
   line-height: 40px;
   padding: 10px;
   font-size: 18px;
   border-bottom: 1px solid #999999;
 }
 .xinxi2 ul li span {
   display: inline-block;
   width: 200px;
   text-align: center;
 }

  .xinxi3 ul li{
    /*background: red;*/
    display: flex;
    justify-content: space-around;
    /*height: 150px;*/
    line-height: 40px;
    padding: 10px;
    font-size: 18px;
    border-bottom: 1px solid #999999;
  }
  .xinxi3 ul li span {
    display: inline-block;
    width: 400px;
    text-align: center;
  }

 .user-button button {
   width: 60px;
   height: 30px;
   flex: 1;
   font-size: 18px;
   font-weight: bold;
   margin: 5px;
 }


  .comment-button {
    width: 200px;
    /*height: 200px;*/
    background: white;
    border: 2px solid #999999;
    border-radius: 20px;
    position: fixed;
    top: 370px;
    left: 405px;
  }
  .comment-button div{
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 24px;
  }
  .comment-button div:first-child{
    border-bottom: 2px solid #999999;
  }

</style>