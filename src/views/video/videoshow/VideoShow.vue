<template>
  <div id="video-show">
    <videoplay :videourl="videourl"/>
    <video-comment :id="id" :videourl="videourl" :videoclass="videoclass" :videocomment="videocomment"/>
  </div>
</template>

<script>
  import Videoplay from "./childcomps/Videoplay";
  import VideoComment from "../../../components/common/comment/VideoComment";

  import {getVideoShow} from "network/video"

  export default {
    name: "VideoShow",
    components: {
      Videoplay,
      VideoComment
    },
    data() {
      return {
        id: null,
        videourl: {},
        videoclass: {},
        videocomment: []
      }
    },
    created() {
      //1.拿到route中的iid,并进行保存
      this.id = this.$route.query.id
      this.videoclass = this.$route.query.videoclass
      getVideoShow(this.id, this.videoclass).then(res => {
        this.videourl = res.data
        this.videocomment = res.videocomment.reverse()
      })
    }
  }
</script>

<style scoped>

</style>