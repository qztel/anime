<template>
  <div id="write">
    <div class="title">专栏发表</div>
    <div class="user-img"><img src="" alt=""></div>
    <form action="http://127.0.0.1:3000/column/contribution" method="post">
      <div>
        <div><input type="text" name="username" :value="name" autocomplete="off" hidden></div>
        <div class="write-title"><input type="text" name="title" autocomplete="off" required="required" placeholder="请输入标题"></div>
        <div class="write-content"><textarea name="content" id="" autocomplete="off" placeholder="请输入正文（限制在100~2000字）" required="required"></textarea></div>
        <div><input type="text" name="writetime"  :value="mytime" hidden></div>
        <div><input type="text" name="like" value="0" hidden></div>
        <div class="write-submit"><input type="submit" @click="tijiao()"></div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Write",
    data() {
      return{
      mytime: null,
      }
    },
    methods: {
      tijiao() {
        var con

        con = confirm('确定要发表吗？')

        if(con) {
          var time = new Date()
          this.mytime = time.toLocaleString()
        }
      }
    },
    computed: {
      name() {
        return this.$store.state.userinformation.name
      }
    }
  }
</script>

<style scoped>
  #write {
  width: 1000px;
  /*height: 800px;*/
  background: rgba(255,255,255,0.3);
  border: 1px solid #5c6b77;
  margin: 0 auto;
}
  .title {
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    text-align: center;
    background: #777777;
  }

  .user-img {
    width: 200px;
    height: 200px;
    text-align: center;
    margin: 10px auto;
    border-radius: 300px;
    background: white;
    border: 1px solid black;
  }
  .user-img img {
    /*!*width: 200px;*!*/
    /*height: 300px;*/
  }

  form {
    width: 900px;
    /*height: 750px;*/
    /*background: red;*/
    margin:  0 auto;
  }
  .write-title input {
  width: 100%;
  height: 80px;
  margin: 0px auto 0 auto;
    border: none;
    /*font-size: 40px;*/
    font: normal small-caps normal 40px '黑体';
    background: rgba(0,0,0,0);
}

  .write-content textarea{
    width: 100%;
    height: 500px;
    font: normal small-caps normal 30px '黑体';

    border: none;
    border-top: 3px solid #5c6b77;

    background: rgba(0,0,0,0);
  }

  .write-submit {
    /*background: red;*/
    text-align: center;
  }
  .write-submit input {
    width: 150px;
    height: 50px;
    font-size: 26px;
    font-weight: bold;
    background: rgba(0,0,0,0.8);
    border: none;
    border-radius: 2px;
    color: white;
    margin: 20px;
  }

</style>