<template>
  <div id="error">
    发生错误啦，您没有权限进入
  </div>
</template>

<script>
  export default {
    name: "Error",
    mounted() {
      this.home()
    },
    methods: {
      home() {
        setTimeout(() => {
          this.$router.push('/home')
        },4000)
      }
    }
  }
</script>

<style scoped>
  #error {
    width: 100%;
    height: 100vh;
    line-height: 100vh;
    text-align: center;
    font-size: 50px;
  }
</style>