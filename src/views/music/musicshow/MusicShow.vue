<template>
  <div id="music-show">
    <music-tab/>
    <music-detail :musicdetail="musicdetail"/>
    <music-comment :musiccomment="musiccomment" :musicdetail="musicdetail"/>
  </div>
</template>

<script>
  import MusicTab from "./childComps/MusicTab";
  import MusicDetail from "./childComps/MusicDetail";
  import MusicComment from "../../../components/common/comment/MusicComment";

  import {getMusicShow} from "network/music"

  export default {
    name: "MusicShow",
    components: {
      MusicTab,
      MusicDetail,
      MusicComment
    },
    data() {
      return {
        musiccomment: [],
      }
    },
    computed: {
      musicdetail() {
        return this.$store.state.musicdetail
      }
    },
    created() {
      getMusicShow(this.$store.state.musicdetail.text).then(res => {
        this.musiccomment = res.reverse()
      })
    }

  }
</script>

<style scoped>

</style>