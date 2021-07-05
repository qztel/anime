<template>
  <div id="music-class">
    <span v-for="(item, index) in musicClass" @click="classClick(index)">{{item}}</span>
  </div>
</template>

<script>

  export default {
    name: "MusicClass",
    data() {
      return {
        musicClass: ['日语歌曲','中文歌曲','英文歌曲','韩文歌曲']
      }
    },
    methods: {
      classClick(index) {
        if(index === 0){
          this.$store.state.musicdata1 = true
          this.$store.state.musicdata2 = false
          this.$store.state.musicdata3 = false
        } else if(index === 1) {
          this.$store.state.musicdata2 = true
          this.$store.state.musicdata1 = false
          this.$store.state.musicdata3 = false
        } else if(index === 2) {
          this.$store.state.musicdata3 = true
          this.$store.state.musicdata2 = false
          this.$store.state.musicdata1 = false
        }
        // console.log(index);
      }
    }
  }
</script>

<style scoped>
  #music-class {
    height: 60px;
    width: 800px;
    background: white;
    margin: 20px auto 0px auto;
    line-height: 60px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
  }
  #music-class span {
    /*background: red;*/
    border-top: 5px solid pink;
    margin: 0 auto;
  }
  #music-class span:hover {
    background: #aaaaaa;
  }
</style>