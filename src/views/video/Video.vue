<template>
  <div>
    <classi-fication/>
    <div class="video-text">
      <span>推荐动漫</span>
    </div>
    <class-video :videoimg="videoimg"/>
  </div>
</template>

<script>
  import ClassiFication from "./childComps/ClassiFication";
  import ClassVideo from "./childComps/ClassVideo";

  import {getVideoMultidata} from "network/video"
  export default {
    name: "Video",
    components: {
      ClassiFication,
      ClassVideo
    },
    data() {
      return {
        videoimg: []
      }
    },
    created() {
      this.getVideoMultidata()
    },
    methods: {
      getVideoMultidata() {
        getVideoMultidata().then(res => {
          this.videoimg = res.data.riben
        })
      }
    }
  }
</script>

<style scoped>
  .video-text {
    width: 1000px;
    height: 40px;
    line-height: 40px;

    margin: 0 auto;

    font-weight: bold;
    font-size: 20px;
    color: rgba(255,100,100,1);
    background: rgba(0,0,0,0.9);
  }
  .video-text span{
    margin-left: 20px;
  }
</style>