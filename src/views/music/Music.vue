<template>
  <div>
    <music-class/>
    <music-item :musicdata="musicdata"/>
  </div>
</template>

<script>
  import MusicItem from "./childComps/MusicItem";
  import MusicClass from "./childComps/MusicClass";

  import {getMusicMultidata} from "network/music"

  export default {
    name: "Music",
    components: {
      MusicItem,
      MusicClass
    },
    data() {
      return {
      musicdata: {}
      }
    },
    created() {
      this.getMusicMultidata()
    },
    methods: {
      getMusicMultidata() {
        getMusicMultidata().then(res => {
            this.musicdata = res.data
        })
      }
    }
  }
</script>

<style scoped>

</style>