<template>
  <!-- 首页轮播图（仅首页，第1块内容） -->
  <div class="home-banner-box">
    <!-- 轮播图组件：来自vant -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id"
        ><img :src="item.img" alt=""
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>


<script>
export default {
  data() {
    return {
      //轮播图列表，导入页面时，将数据放入此列表中
      bannerList: [],
    };
  },
  methods: {},
  created() {
    this.bannerList = [
      { id: 1, img: "/static/home/banner/banner1.jpg" },
      { id: 2, img: "/static/home/banner/banner2.jpg" },
      { id: 3, img: "/static/home/banner/banner3.jpg" },
    ];
  },
};
</script>

<style lang="less">
.home-banner-box{
  img{
    width:100%;
    height:auto;
  }
}
</style>