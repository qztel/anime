<template>
  <div id="user-information">
      <div class="user-header">
        <div class="user-img"><img src="" alt=""></div>
          <div class="user-text"><input type="text" :value="name" :placeholder="name" ref="name"></div>
<!--        <div class="user-text"><span>{{name}}</span></div>-->
      </div>

      <div class="user-center">
        <div class="user-detail">
            <div>
              <div>
                <span>用户名:</span>
                <span style="margin-left: 30px">{{username}}</span>
              </div>
              <div>
                <span>邮箱:</span>
                <span><input type="email"
                             class="email"
                             :value="email"
                             ref="email"></span>
              </div>
              <div class="signature">
                <span>个性签名:</span>
                <textarea autocomplete="off"
                          placeholder="请设置您的签名o(*￣▽￣*)o"
                          required="required" :value="content"
                          ref="content"></textarea>
              </div>
              <div ref="gender">
                <span>性别:</span>
                <label class="radio-inline">
                  <input type="radio"
                         id="inlineRadio1"
                         name="gender"
                         value="0"
                         :checked="man" @click="manClick()">男
                </label>
                <label class="radio-inline">
                  <input type="radio"
                         id="inlineRadio2"
                         name="gender"
                         value="1"
                         :checked="woman" @click="womanClick()">女
                </label>
              </div>
              <div>
                <span>年龄:</span>
                <input type="text"
                       class="gender"
                       :value="age"
                        ref="age">
              </div>
              <div>
                <span>出生日期:</span>
                <input type="date"
                       ref="date"
                       class="time-date"
                       :value="date">
              </div>
              <div class="modify">
                <button @click="datasub()">保存修改</button>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "UserInformation",
    data() {
      return {
        checkedValue: '',
        gender: 0
      }
    },
    methods: {
      datasub() {
        var data = {
          name: this.$refs.name.value,
          username: this.$store.state.userinformation.username,
          email: this.$refs.email.value,
          content: this.$refs.content.value,
          gender: this.gender,
          age: this.$refs.age.value,
          date: this.$refs.date.value,
        }
        if(this.name&&this.email&&this.content&&this.gender&&this.age&&this.date) {
          this.$axios.post('/personalcenter',data).then(res => {
                alert("修改成功！");
              this.$store.state.userinformation = res.data[0]
          })
        } else {
          alert('请填写完全部内容')
        }
      },

      manClick() {
        this.gender = '0'
      },
      womanClick() {
        this.gender = '1'
      }
    },
    computed: {
      name() {
        return this.$store.state.userinformation.name
      },
      username() {
        return this.$store.state.userinformation.username
      },
      email() {
        return this.$store.state.userinformation.mailbox
      },
      content() {
        return this.$store.state.userinformation.content
      },

      age() {
        return this.$store.state.userinformation.age
      },

      man() {
        if(this.$store.state.userinformation.gender == 0) {
          return true
        }else {
          return false
        }
      },
      woman() {
        if(this.$store.state.userinformation.gender == 1) {
          return true
        }else {
          return false
        }
      },

      date() {
        return this.$store.state.userinformation.date
      }
    }
  }
</script>

<style scoped>
  #user-information {
    width: 1000px;
    /*height: 1000px;*/
    margin: 50px auto;
  }

  .user-img {
    width: 200px;
    height: 200px;
    /*background: pink;*/
    margin: 0 auto;
    border-radius: 100px;
  }

  .user-text {
    margin: 0 auto;
    /*background: black;*/
    text-align: center;
  }
  .user-text input{
    width: 200px;
    text-align: center;
    margin: 15px auto;
    font-size: 50px;
    border: none;
    background: none;
  }

  .user-center {
    margin-top: 40px;
  }

  .user-detail {
    width: 900px;
    height: 900px;
    margin: 0 auto;
    background: rgba(255,255,255,0.8);
    border-radius: 50px;
    position: relative;
  }
  .user-detail>div:first-child {
    width: 800px;
    /*background: red;*/
    position: absolute;
    top: 50px;
    left: 5%;
  }
  .user-detail div:first-child div{
    margin-top: 50px;
    font-size: 24px;
  }
  .user-detail div:first-child div span:first-child{
    display: inline-block;
    width: 150px;
    text-align: right;
  }
  .user-detail div:first-child input{

    margin-left: 30px;

    background: rgba(255,255,255,0.5);

  }

  .signature {
    /*height: 200px;*/
  }
  .signature span{
    position: relative;
    top: -130px;
  }
  .signature textarea{
    width: 500px;
    height: 150px;
    resize: none;
    margin-left: 30px;
    background: rgba(255,255,255,0.5);
    border: 1px solid #777777;
    font-size: 24px;
    border-radius: 6px;
  }

  .time-date {
    width: 200px;
    height: 45px;
    font-size: 20px;
    border: 1px solid #777777;
  }

  .modify {
    text-align: center;
  }
  .modify button{
    width: 120px;
    height: 70px;
    border-radius: 10px;
    background: white;
    font-size: 20px;
    border: 1px solid #777777;
  }

  .email {
    width: 230px;
    height: 40px;
    background: none;
    border: none;
    border-bottom: 1px solid #777777;
    font-size: 24px;
  }

  .gender {
    width: 60px;
    text-align: center;
    height: 40px;
    background: none;
    border: none;
    border-bottom: 1px solid #777777;
    font-size: 24px;
  }
</style>