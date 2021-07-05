<template>
  <div id="tab-bar">
    <div class="title">
      <img src="~assets/img/homeimg/1.png" alt="" >
      <span>流逝漫年</span>
    </div>

    <slot></slot>

    <span class="tuichu" @click="dianji()" v-show="tuichu">退出登录</span>
  </div>
</template>

<script>
  export default {
    name: "Tabbar",
    computed: {
      tuichu() {
        return this.$store.state.tuichu
      }
    },
    methods: {
      dianji() {
        var con

        con = confirm('确定要退出吗？')

        if(con) {
          this.$router.push('/home')
          this.$store.state.tuichu = false
          this.$store.commit('add')
        }
      }
    }
  }
</script>

<style scoped>

  #tab-bar {
    width: 100%;
    display: flex;
    /*background-color: rgba(220,220,220,0.8);*/
    background: #333333;
    box-shadow: 0px 1px 1px rgba(100,100,100,2);
    z-index: 1;
    color: white;
  }

  .title{
    display: flex;
    width: 20%;
    height: 64px;
    line-height: 64px;
    font-size: 35px;
    /*background-color: red;*/
  }
  .title img {
    width: 64px;
  }
  .title span {
    font-style: italic;
    margin-left: 20px;
  }

  .tuichu {
    position: relative;
    top: 24px;
    right: 25px;
  }

</style>