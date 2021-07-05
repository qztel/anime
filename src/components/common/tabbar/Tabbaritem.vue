<template>
    <div class="tab-bar-item" @click="tabbarClick">
      <div class="item-text"><slot name="item-text"></slot></div>
      <div class="log-in"><slot name="item-right"></slot></div>
      <div class="log-button"><slot name="item-button"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "Tabbaritem",
    props: {
      path: String,
      default: {}
    },
    methods: {
      tabbarClick() {
        if (this.$route.path == this.path){
          return 0
        }else this.$router.push(this.path)   //点击后,将点击插槽对应的path传入,完成页面的跳转
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 64px;  /*常用高度*/
    line-height: 64px;
    font-size: 20px;
  }

  .log-in {
    font-size: 15px;
  }

  .item-text:hover{
    color: hotpink;
  }

  .log-button {
    background: white;
  }

</style>