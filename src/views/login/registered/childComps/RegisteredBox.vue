<template>
  <div class="logbox">
    <div v-show="!zcstate">
      <div class="log">注册账号</div>
      <hr>
      <div class="logtext">
        <div>姓  名 ：<input type="text" id="name" placeholder="请输入您的昵称" required autocomplete="off"></div>
        <div>用户名：<input type="text" id="username" placeholder="请输入用户名" required autocomplete="off"></div>
        <div>密  码 ： <input type="password" id="password" placeholder="请输入密码" required autocomplete="off"></div>
        <div>邮  箱 ： <input type="email" id="mailbox" placeholder="请输入您的邮箱账号" required autocomplete="off"></div>
      </div>

      <div class="logbtn">
        <button @click="tijiao()">下一步</button>
      </div>
    </div>



    <div v-show="zcstate">
      <div class="log">设置密保问题</div><hr>
      <div class="logtext" >
        <div>父亲的姓名： <input type="text" id="fathername" placeholder="请输入姓名" required autocomplete="off" ref="fathername"></div>
        <div>母亲的姓名： <input type="text" id="mothername" placeholder="请输入姓名" required autocomplete="off" ref="mothername"></div>
      </div>

      <div class="logbtn">
        <button @click="zhuce()">注册</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "LoginBox",
    data() {
      return {
        name: null,
        username:null,
        password: null,
        mailbox: null,
        zcstate:false,
        fathername: null,
        mothername: null
      }
    },
    methods: {
      forGetClick() {
        this.$router.push('/forget')
      },
      registeredClick() {
        this.$router.push('/registered')
      },

      tijiao() {
        this.name = document.getElementById('name').value
        this.username = document.getElementById('username').value
        this.password = document.getElementById('password').value
        this.mailbox = document.getElementById('mailbox').value
        var data = {name: this.name,username: this.username, password: this.password, mailbox: this.mailbox, state: 1}

        if(this.name||this.username||this.password||this.mailbox) {
          this.$axios.post('/registered',data).then(res => {
            switch(res.data){
              case 1:
                alert("该账号可以注册！");
                this.zcstate = !this.zcstate
                break;
              case 0:
                alert("注册失败，邮箱已存在")
                break;
              case -1:
                alert("注册失败，用户名已存在")
                break;
            }
          })
        } else {
          alert('请填写完全部内容')
        }
      },

      zhuce() {
        this.fathername = this.$refs.fathername.value
        this.mothername = this.$refs.mothername.value
        var data = {name: this.name,
          username: this.username,
          password: this.password,
          mailbox: this.mailbox,
          state: 1,
          fathername: this.fathername,
          mothername: this.mothername}

        if(this.fathername||this.mothername) {
          this.$axios.post('/registered/ok',data).then(res => {
            switch(res.data){
              case 1:
                alert("注册成功");
                this.$router.push("/login")
                break;
            }
          })
        } else {
          alert('请填写完全部内容')
        }
      }
    }
  }
</script>

<style scoped>
  a:hover{
    color: pink;
  }
  .logbox {
    /*height: 400px;*/
    width: 600px;
    background: rgba(255,255,255,0.8);
    margin: 100px auto;
    border-radius: 25px;
    border:2px solid black;
  }
  .log {
    font-size: 24px;
    text-align: center;
    margin: 10px 0px;
  }

  .logtext {
    font-size: 18px;
    /*background: red;*/
    /*width: 350px;*/
    margin: 50px auto 0px auto;
    text-align: center;
  }
  .logtext input{
    width: 280px;
    height: 25px;
    margin: 25px auto;
    background: rgba(255,255,255,0.5);
    font-size: 18px;
    /*margin: 0 auto;*/
  }

  .logbtn {
    width: 300px;
    margin: 25px auto 0px auto;
    text-align: center;
  }
  .logbtn button{
    font-size: 18px;
    margin-bottom: 35px;
    width: 85px;
    height: 40px;
    border-radius: 5px;
    background: rgba(255,255,255,0.6);
    font-weight: bold;
  }

</style>