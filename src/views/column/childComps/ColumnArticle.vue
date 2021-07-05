<template>
  <div id="column-article">
    <div class="column-text">
      <span>推荐文章</span>
      <span class="yincang" v-show="!zhuangtai">登录以后才可以投稿哦</span>
      <button @click="Contribution()" v-show="zhuangtai">投稿</button>
    </div>

      <div>
        <hr>

          <div class="column-details" v-for="item in columndata">
            <div @click="columnClick(item._id, item.username)" class="title">{{item.title}}</div>
            <div class="content">{{item.content}}</div>
            <div class="user-details">
              <span style="font-size: 17px">{{item.username}}</span>
              <span style="color: hotpink" @click="like(item._id)">❤喜欢：{{item.like}}</span>
              <span>发表时间：{{item.writetime}}</span>
            </div>
          </div>

      </div>
      <hr>
  </div>
</template>

<script>
  import {getColumnLikeMultidata} from "../../../network/column";

  export default {
    name: "ColumnArticle",
    props: {
      columndata: {
        type: Array,
        default() {
          return[]
        }
      }
    },
    methods: {
      columnClick(id, username) {
        this.$router.push({ path: '/column/columnshow', query: {id: id, username: username}})
      },
      Contribution() {
        this.$router.push('/column/contribution')
      }
    },
    computed: {
      zhuangtai() {
        return this.$store.state.zhuangtai
      }
    }
  }
</script>

<style scoped>
  a {
    color: black;
  }

  #column-article {
    width: 900px;
    background: white;
    /*height: 800px;*/
    margin: 0 auto;
    /*display: flex;*/
  }
  .column-text {
    height: 60px;
    /*background: blue;*/
    font-size: 24px;
    font-weight: bold;
    line-height: 60px;
    position: relative;
  }

  .yincang {
    font-size: 17px;
    position: absolute;
    right: 10px;
  }

  .column-details {
    /*background: green;*/
    padding: 20px;
    font-size: 13px;
    border-bottom: 1px solid black;

  }
  .column-details div{
    margin-top: 10px;
  }
  .column-details div:first-child {
    font-size: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .column-details div:first-child:hover {
    color: #6495ED;
  }
  .column-text button{
    width: 100px;
    height: 35px;
    border-radius: 10px;
    font-size: 22px;
    position: absolute;
    right: 30px;
    top: 15px;
    background: deeppink;
    color: white;

  }

  .user-details {
    display: flex;
    /*width: 500px;*/
    /*background: yellow;*/
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
  }
  .user-details span {
    /*flex: 1;*/
  }

  .column-img {
    width: 150px;
    height: 112px;
    border-radius: 10px;
    background: black;
    position: absolute;
    right: 30px;
  }

  .content {
    height: 50px;
    line-height: 50px;
    font-size: 17px;
    /*background: red;*/
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 20px;
  }




</style>