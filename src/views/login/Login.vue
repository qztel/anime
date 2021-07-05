<template>
  <div class="login">
    <login-box/>

  </div>
</template>

<script>
  import LoginBox from "./childComps/LoginBox";

  export default {
    name: "Login",
    components: {
      LoginBox
    }
  }
</script>

<style scoped>
  .login {
    height: 100vh;
    /*background: red;*/
  }
</style>