<template>
  <div id="class-video-item" @click="videoClick()">
    <div>
      <img :src="videoItem.imgurl" alt=""><br>
      <div class="video-text">{{videoItem.text}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ClassVideo",
    props: {
      videoItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      videoClick() {
        //点击路由,进行跳转到详情页,并将商品的ID传入进去
        //因此需要拿到goodsItem对象的iid
          this.$router.push({ path: '/video/videoshow', query: {id: this.videoItem.id, videoclass: this.videoItem.class}})

      }
    },
    created() {
    }
  }
</script>

<style scoped>

img {
  width: 200px;
  height: 250px;
  margin: 5px;
}
.video-text{
  text-align: center;
    color: hotpink;
  font-size: 18px;
    font-weight: bold;
  background: white;
  width: 200px;
  }

</style>