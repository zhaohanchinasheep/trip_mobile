<template>
  <!-- 首页轮播图（仅首页，第1块内容） -->
  <div class="home-banner-box">
    <!-- 轮播图组件：来自vant -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id"
        ><img :src="item.img_url" alt=""
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>


<script>
// 解构赋值，只要ajax这个异步实例
import {ajax} from '@/utils/ajax'
import {SystemApis} from '@/utils/apis'

export default {
  data() {
    return {
      //轮播图列表，导入页面时，将数据放入此列表中
      bannerList: [],
    };
  },
  methods: {
    getDataList(){
      ajax.get(SystemApis.sliderListUrl).then(res=>{
        console.log('res:',res)
        this.bannerList=res.data.objects
      })
    }

  },
  created() {
    this.getDataList()
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