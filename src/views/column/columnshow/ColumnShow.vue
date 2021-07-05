<template>
  <div id="column-show">
    <column-show-item :columndata="columndata"/>
    <column-comment :columncomment="columncomment" :columnclass="columnclass"/>
  </div>

</template>

<script>
  import ColumnShowItem from "./childComps/ColumnShowItem";
  import ColumnComment from "../../../components/common/comment/ColumnComment";

  import {getColumnShowMultidata} from "../../../network/column";

  export default {
    name: "ColumnShow",
    components: {
      ColumnShowItem,
      ColumnComment
    },
    data(){
      return {
      columndata: {},
        id: null,
        userame: null,
        columncomment: [],
        columnclass: null
      }
    },
    created() {
      //1.拿到route中的id,并进行保存
      this.id = this.$route.query.id
      this.username = this.$route.query.username

      getColumnShowMultidata(this.id, this.username).then(res => {
        this.columndata = res.detail
        this.columncomment = res.comment.reverse()
        this.columnclass = res.detail.username
      })
    }
  }
</script>

<style scoped>


</style>