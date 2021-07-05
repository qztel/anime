<template>
  <div id="class-video">

    <class-video-item v-for="item in videoimg" :video-item="item"/>
  </div>
</template>

<script>
  import ClassVideoItem from "./ClassVideoItem";

  export default {
    name: "ClassVideo",
    props: {
      videoimg: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      ClassVideoItem
    }
  }
</script>

<style scoped>
  #class-video {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    /*padding:3px;*/
    margin: 0 auto;
  }




</style>