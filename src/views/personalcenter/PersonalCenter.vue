<template>
  <div id="personal-center">
    <user-information/>
  </div>
</template>

<script>
  import UserInformation from "./childComps/UserInformation";

  export default {
    name: "PersonalCenter",
    components: {
      UserInformation
    }
  }
</script>

<style scoped>

</style>