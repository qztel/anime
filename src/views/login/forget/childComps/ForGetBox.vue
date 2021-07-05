<template>
  <div class="logbox">
    <div class="log">找回密码</div><hr>

    <div v-show="forgetText">
      <div class="logtext">
        用户名：<input type="text" placeholder="请输入用户名" ref="username"><br>
      </div>
      <div class="logbtn">
        <input type="button" value="下一步" @click="xybu()">
      </div>
    </div>

    <div v-show="forgetState">
      <div class="logtext">
        <div>父亲的姓名： <input type="text" id="fathername" placeholder="请输入姓名" required autocomplete="off" ref="fathername"></div>
        <div>母亲的姓名： <input type="text" id="mothername" placeholder="请输入姓名" required autocomplete="off" ref="mothername"></div>
      </div>
      <div class="logbtn">
        <input type="button" value="下一步" @click="xybu2()">
      </div>
    </div>

    <div v-show="newpassword">
      <div class="logtext">
        <div>重置密码： <input type="password" id="newpassword" placeholder="请输入重置后的密码" required autocomplete="off" ref="newpassword"></div>
      </div>
      <div class="logbtn">
        <input type="button" value="下一步" @click="xybu3()">
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "LoginBox",
    data() {
      return{
      username: null,
        forgetState: false,
        forgetText: true,
        fathername: null,
        mothername: null,
        newpassword: false
      }
    },
    methods: {
      xybu() {
        this.username = this.$refs.username.value
        if(this.username) {
          this.$axios.post('/forget',{username: this.username}).then(res => {
            switch(res.data){
              case 1:
                alert("用户名正确");
                this.forgetState = !this.forgetState
                  this.forgetText = !this.forgetText
                break;
              case 0:
                alert("用户名不存在！");
                break;
            }
          })
        } else {
          alert('请输入用户名')
        }
      },

      xybu2() {
        this.fathername = this.$refs.fathername.value
        this.fathername = this.$refs.fathername.value

        var data = {
          username: this.username,
          fathername: this.fathername,
          mothername: this.mothername
        }
        if(this.fathername||this.mothername) {
          this.$axios.post('/forget/protection',data).then(res => {
            switch(res.data){
              case 1:
                alert("密保输入正确！");
                this.newpassword = !this.newpassword
                this.forgetState = false
                  this.forgetText = false
                break;
              case 0:
                alert("密保输入错误！");
                break;
            }
          })
        } else {
          alert('请输入密保问题')
        }
      },

      xybu3() {
        this.newpassword = this.$refs.newpassword.value
        var data = {
          username: this.username,
          password: this.newpassword
        }
        if(this.newpassword) {
          this.$axios.post('/forget/newpassword',data).then(res => {
            switch(res.data){
              case 1:
                alert("密码重置成功！");
                this.$router.push('/login')
                break;
            }
          })
        } else {
          alert('请输入重置后的密码')
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
    /*height: 280px;*/
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
    margin: 25px auto 25px auto;
    text-align: center;
  }
  .logbtn input{
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