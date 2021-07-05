<template>
  <div>
    <home-cate-gory></home-cate-gory>
    <swiper :rebo="rebo"/>

    <home-recommend :gengxin="gengxin"></home-recommend>

  </div>
</template>

<script>
  import HomeCateGory from "./childComps/HomeCateGory";
  import HomeRecommend from "./childComps/HomeRecommend";
  import Swiper from "../../components/common/swiper/Swiper";

  import {getLoginMultidata} from "network/home"
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      Swiper,
      HomeCateGory,
      HomeRecommend,
    },
    data() {
      return {
        rebo: [],
        gengxin: []
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.rebo = res.data.rebo
          this.gengxin = res.data.gengxin
        })
      }
    }
  }
</script>

<style scoped>
button{
  width: 500px;
  height: 500px;
}
</style>