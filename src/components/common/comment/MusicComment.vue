<template>
  <div id="video-comment">
    <div><span>评论</span></div>
    <div class="comment">
      <ul class="content">
        <li v-for="item in musiccomment">
          <div>
            <span class="user-name">{{item.name}}</span>
          </div>
          <div>
            {{item.content}}
          </div>
          <div>
            <span class="time">{{item.time}}</span>
            <span class="reply-go">▼查看更多回复▼</span>
            <span class="reply">回复</span>
          </div>

        </li>
      </ul>
    </div>

      <div v-show="zhuangtai">
        <div class="title-text">
          发表评论
        </div>

        <div class="content-text">
          <div><input type="text" name="name" autocomplete="off" :value="name" ref="name" hidden></div>
          <div><input type="text" name="class" :value="musicdetail.text" hidden ref="class"></div>
          <div><textarea name="content" id="" autocomplete="off" placeholder="请输入评论内容" required="required" ref="content"></textarea></div>
          <input type="text" hidden name="time" :value="mytime" ref="time">
        </div>

        <div class="tijiao"><input type="submit" @click="tijiao()"></div>
      </div>
  </div>
</template>

<script>
  import {postMusicShow} from "../../../network/music";


  export default {
    name: "VideoComment",
    props: {
      musiccomment: {
        type: Array,
        default() {
          return []
        }
      },
      musicdetail: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        mytime: null
      }
    },
    methods: {
      tijiao() {
        var time = new Date()
        this.mytime = time.toLocaleString()

        var data = {
          name: this.$refs.name.value,
          content: this.$refs.content.value,
          time: this.mytime,
          class: this.$refs.class.value
        }
        this.$axios.post('/music/musicshow',data).then(res => {
          switch(res.data){
            case 1:
              alert("评论成功!");
              location.reload()
              break;
            case 0:
              alert("评论失败")
              break;
          }
        })
        window.scrollTo(0,0)

      }
    },
    computed: {
      name() {
        return this.$store.state.userinformation.name
      },

      zhuangtai() {
        return this.$store.state.zhuangtai
      }
    }
  }
</script>

<style scoped>
  #video-comment {
    width: 1000px;
    margin: 20px auto;
    border: 5px solid #5c6b77;
    white-space: pre-wrap;
    position: relative;
  }
  #video-comment>div:first-child{
    font-size: 30px;
    font-weight: bold;
    background: black;
    color: white;
    padding: 10px;
    /*margin: 20px;*/
  }

  .comment {
    height: 100%;
  }

  .content {
    background: white;
    height: 100%;
  }
  .content li{

    font-size: 19px;
    border-bottom: 4px solid #999999;
  }
  .content li div{
    margin: 0px 20px 20px 10px;
    /*background: red;*/
    /*width: 500px;*/
  }

  .user-name{
    color: hotpink;
  }
  .time {
    /*margin-left: 40px;*/
    font-size: 15px;
  }
  .reply {
    position: absolute;
    right: 50px;
    color: hotpink;
  }
  .reply-go {
    position: absolute;
    left: 450px;
    margin-top: 10px;
    font-size: 14px;
  }

  .title-text {
    height: 40px;
    font-size: 24px;
    line-height: 40px;
    font-weight: bold;
    background: black;
    color: white;
  }

  .content-text {
    /*height: 300px;*/
  }
  .content-text textarea{
    height: 250px;
    width: 100%;
    font-size: 20px;
  }

  .tijiao {
    background: black;
    margin-top: -5px;
    text-align: center;
  }
  .tijiao input{
    width: 80px;
    height: 50px;
    font-size: 20px;
    border-radius: 10px;

  }
</style>