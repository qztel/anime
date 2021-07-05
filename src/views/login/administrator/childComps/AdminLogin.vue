<template>
  <div class="admin-loin">
    <div class="log">管理员登录</div>
    <hr>

      <div class="logtext">
        管理员账号：<input type="text" placeholder="请输入管理员账号" required ref="admin"><br>
        管理员密码：<input type="password" placeholder="请输入管理员密码" required ref="password">
      </div>

      <div class="logbtn">
        <button @click="adminlogin()">登录</button>
      </div>

  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "LoginBox",
    methods: {
      adminlogin() {
        var data = {
          admin: this.$refs.admin.value,
          password: this.$refs.password.value
        }
        this.$axios.post('/administrator',data)
            .then(res=>{
              switch(res.data){
                case 0:
                  alert("登陆成功！");
                  this.$store.state.guanli = true
                    this.$router.push('/admin')
                  break;
                case -1:
                  alert("登录失败，管理员账号或密码错误")
                  break;
              }
            })
      }
    }
  }
</script>

<style scoped>
  a:hover{
    color: pink;
  }
  .admin-loin {
    height: 450px;
    width: 500px;
    background: rgba(255,255,255,0.5);
    margin: 200px auto;
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
    width: 400px;
    margin: 50px auto 0px auto;
    text-align: center;
  }
  .logtext input{
    width: 250px;
    height: 25px;
    margin: 45px auto;
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
    margin-top: 20px;
  }
  .registered span{
    margin: auto 70px;
    color: darkslateblue;
  }
  .registered span:hover {
    color: dodgerblue;
  }
</style>