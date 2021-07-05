<template>
  <div id="registered">
      <registered-box/>
  </div>
</template>

<script>
  import RegisteredBox from "./childComps/RegisteredBox";

  export default {
    name: "Registered",
    components: {
      RegisteredBox
    }
  }
</script>

<style scoped>
  #registered {
    height: 100vh;
  }
</style>