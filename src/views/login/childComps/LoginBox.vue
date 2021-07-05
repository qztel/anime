<template>
  <div class="logbox">
      <div class="log">登录</div>
    <hr>

      <form>
        <div class="logtext">
          用户名：<input type="text" placeholder="请输入用户名" required ref="username"><br>
          密  码 ： <input type="password" placeholder="请输入密码" required ref="password">
        </div>
      </form>

      <div class="logbtn">
        <button @click="denglu()">登录</button>
      </div>

    <div class="registered">
      <span @click="forGetClick()">忘记密码？</span>
      <span @click="adminLogin()">管理员登录</span>
      <span @click="registeredClick()">注册</span>
    </div>
  </div>
</template>

<script>
  import axios from"axios"

  export default {
    name: "LoginBox",
    data() {
      return {
      }
    },
    methods: {
      forGetClick() {
        this.$router.push('/forget')
      },
      registeredClick() {
        this.$router.push('/registered')
      },
      adminLogin() {
        this.$router.push('/administrator')
      },

      denglu() {
        var data = {
          username: this.$refs.username.value,
          password: this.$refs.password.value
        }
        if((data.username||data.password) == '') {
          alert('请输入用户名和密码')
        } else {
          axios.post('/login',data)
              .then(res=>{
                switch(res.data.zhuangtai){
                  case 0:
                    alert("登陆成功！");
                    this.$router.push('/home')
                    this.$store.state.zhuangtai = true
                    this.$store.state.userinformation = res.data.information
                    this.$store.state.tuichu = true
                    break;
                  case -1:
                    alert("登录失败，用户名或密码错误")
                    break;
                  case 1:
                    alert("此账号已被封禁！请联系管理人员解封")
                    break;
                }
              })
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
    height: 400px;
    width: 400px;
    background: rgba(255,255,255,0.5);
    position: absolute;
    right: 150px;
    top: 200px;
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
    width: 350px;
    margin: 40px auto 0px auto;
    text-align: center;
  }
  .logtext input{
    width: 250px;
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
    width: 85px;
    height: 40px;
    border-radius: 5px;
    background: rgba(255,255,255,0.6);
    font-weight: bold;
  }

  .registered {
    text-align: center;
    font-size: 16px;
    /*background: red;*/
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  .registered span{
    /*margin: auto 30px;*/
    color: darkslateblue;
  }
  .registered span:hover {
    color: dodgerblue;
  }
</style>