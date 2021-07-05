<template>
  <div id="forget">
    <for-get-box/>
  </div>
</template>

<script>
  import ForGetBox from "./childComps/ForGetBox";

  export default {
    name: "Forget",
    components: {
      ForGetBox
    }
  }
</script>

<style scoped>
  #forget {
    height: 100vh;
  }
</style>