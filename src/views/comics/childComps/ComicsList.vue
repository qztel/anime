<template>
  <div id="comics-show">
  <ComicsItem v-for="item in comics" :comics-item="item"/>
  </div>
</template>

<script>
  import ComicsItem from "./ComicsItem";

  export default {
    name: "ComicsShow",
    props: {
      comics: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      ComicsItem
    }
  }
</script>

<style scoped>
  #comics-show {
    width: 1200px;
    /*height: 1000px;*/
    background: rgba(255,255,255,0.5);
    border: 2px solid black;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding:3px;

  }

</style>