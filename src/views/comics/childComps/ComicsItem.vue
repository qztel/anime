<template>
  <div id="comics-item" @click="itemClick()">
    <img :src="comicsItem.imgurl" alt="">
    <p>{{comicsItem.text}}</p>
  </div>
</template>

<script>
  export default {
    name: "ComicsItem",
    props: {
      comicsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      itemClick() {
        //点击路由,进行跳转到详情页,并将商品的ID传入进去
        //因此需要拿到goodsItem对象的iid
        this.$router.push({ path: '/comics/comicsshow', query: {id: this.comicsItem._id}})
      }
    }
  }
</script>

<style scoped>
  #comics-item{
  width: 20%;
  /*height: 100%;*/
  margin: 5px;
}
  #comics-item img{
    width: 100%;
    height: 336px;
    border-radius: 5px;
  }
  #comics-item p{
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    background: white;
    color: hotpink;
  }
</style>