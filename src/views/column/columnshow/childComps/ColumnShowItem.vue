<template>
  <div id="column-show-item">
    <div class="column-title">
      <span>{{columndata.title}}</span>
    </div>
    <div class="column-information">
      <span>{{columndata.username}}</span>
      <span>{{columndata.writetime}}</span>
      <span>喜欢数：{{columndata.like}}</span>
    </div>
    <div class="column-content">
      <span>{{columndata.content}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ColumnShowItem",
    props: {
      columndata: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  #column-show-item {
    width: 1000px;
    /*height: 1000px;*/
    background: rgba(255,255,255,0.9);
    border: 2px solid #777777;
    margin: 0 auto;
  }
  .column-title {
    background: white;
    font-size: 40px;
    font-weight: bold;
    padding: 30px;
  }
  .column-title span {
    margin-left: 20px;
  }

  .column-information {
    width: 400px;
    /*background: blue;*/
    font-size: 16px;
    display: flex;
    justify-content: space-around;
  }

  .column-content {
    width: 950px;
    /*background: pink;*/
    white-space: pre-wrap;
    font-size: 20px;
    /*text-indent: 2em;*/
    margin: 20px auto;
    line-height: 40px;

  }
</style>