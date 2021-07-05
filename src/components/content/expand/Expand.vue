<template>
  <div id="expand">
    <div class="csm">
      <div>传送门</div>
    </div>

        <hr>
        <div class="website">
          <ul class="websiteul">
            <li><a href="https://www.bilibili.com/">哔哩哔哩</a></li>
            <li><a href="https://www.acfun.cn/">AcFun弹幕视频网</a></li>
            <li><a href="http://www.dilidili8.com/">嘀哩嘀哩</a></li>
          </ul>
          <ul class="websiteul">
            <li><a href="https://ac.qq.com/">腾讯动漫</a></li>
            <li><a href="https://www.iqiyi.com/dongman/">爱奇艺动画</a></li>
            <li><a href="https://m.qiqidongman.com/">奇奇动漫网</a></li>
          </ul>
          <ul class="websiteul">
            <li><a href="https://www.mandao.tv/">动漫岛</a></li>
            <li><a href="http://www.imomoe.ai/">樱花动漫</a></li>
          </ul>
        </div>

        <div class="contact">
            <p>本网站由千正tel自主制作，请勿抄袭</p>
            <p>联系QQ：1309657634</p>
            <p>联系微信：myssone</p>
        </div>
  </div>
</template>

<script>
  export default {
    name: "HomeExpand"
  }
</script>

<style scoped>
  #expand {
    margin-top: 0px;
    width: 100%;
    height: 300px;
    background:#999999;
  }
  .csm{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 22px;
    background: rgba(255,255,255,0.6);
  }
  .csm div{
    text-align: center;
    margin: 0 auto;
    font-weight: bold;
  }

  .website {
    width: 800px;
    height: 150px;
    margin: 0 auto;
    font-size: 18px;
  }
  .website a{
    color: pink;
  }
  .websiteul{
    display: flex;
    margin-top: 20px;
  }
  .websiteul li {
    margin: 0 auto;
  }

  .contact{
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    background: rgba(255,255,255,0.5);
  }




</style>