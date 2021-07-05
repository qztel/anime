<template>
  <div id="Administrator">
    <admin-login/>
  </div>
</template>

<script>
import AdminLogin from "./childComps/AdminLogin";

  export default {
    name: "Administrator",
    components: {
      AdminLogin
    }
  }
</script>

<style scoped>
  #Administrator {
    width: 100%;
    height: 100vh
  }
</style>