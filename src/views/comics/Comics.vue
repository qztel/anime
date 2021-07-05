<template>
  <div>
    <comics-swiper/>
    <comics-class/>
    <comics-list :comics="comics"/>
  </div>
</template>

<script>
  import ComicsSwiper from "./childComps/ComicsSwiper";
  import ComicsClass from "./childComps/ComicsClass";
  import ComicsList from "./childComps/ComicsList";

  import {getComicsMultidata} from "../../network/comics";

  export default {
    name: "Comics",
    components: {
      ComicsSwiper,
      ComicsClass,
      ComicsList
    },
    data() {
      return {
      comics: []
      }
    },
    created() {
      getComicsMultidata().then(res => {
        this.comics = res
      })
    }
  }
</script>

<style scoped>

</style>