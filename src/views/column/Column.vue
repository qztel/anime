<template>
  <div>
    <column-swiper/>
    <column-article :columndata="columndata"/>
  </div>
</template>

<script>
  import ColumnSwiper from "./childComps/ColumnSwiper";
  import ColumnArticle from "./childComps/ColumnArticle";

  import {getColumnMultidata} from "network/column"

  export default {
    name: "Column",
    components: {
      ColumnSwiper,
      ColumnArticle
    },
    data() {
      return {
        columndata: null
      }
    },
    created() {
      getColumnMultidata().then(res => {
        this.columndata = res.reverse()
      })
    }
  }
</script>

<style scoped>

</style>