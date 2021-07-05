<template>
  <div id="comics-show">
    <comics-show-item :comicsdata="comicsdata" :length="length"/>
  </div>
</template>

<script>
  import ComicsShowItem from "./childComps/ComicsShowItem";

  import {getComicsShowMultidata} from "../../../network/comics";

  export default {
    name: "ComicsShow",
    components: {
      ComicsShowItem
    },
    data() {
      return {
        id: null,
        comicsdata: {},
        length: null
      }
    },
    created() {
        //1.拿到route中的id,并进行保存
        this.id = this.$route.query.id

      getComicsShowMultidata(this.id).then(res => {
          this.comicsdata = res
        this.length = res.comicsurl.length
      })
    }
  }
</script>

<style scoped>
  #comics-show {

  }
</style>