<template>
  <!-- 精选景点（仅首页，第三块内容） -->
  <div class="home-fine-box">
    <!-- 顶上导航 -->
    <!-- 点击'更多‘跳转到景点列表，并把精选景点以查询字段的方法传给景点列表页面 -->
    <van-cell
      title="精选景点"
      value="更多"
      icon="location-o"
      is-link
      title-style="text-align:left"
      :to="{name:'SightList',query:{
        name:'精选景点'
      }}"
    />
    <!-- //顶上导航 -->
    <!-- 景点列表 -->
    <div class="box-main">
      <!-- 父组件绑定item给子组件传递数据 -->
      <SightItem v-for="item in dataList" :key="item.id" :item="item" />
    </div>
    <!-- //景点列表 -->
  </div>
</template>

<script>
import { ajax } from "@/utils/ajax";
import { SightApis } from "@/utils/apis";
import SightItem from "@/components/common/ListSight";
export default {
  components: {
    // 景点组件
    SightItem,
  },
  data() {
    return {
      dataList: [],
    };
  },
  methods: {
    getDataList(){
      ajax.get(SightApis.sightListUrl,{
        params:{
          is_top:1
        }
      }).then(({data})=>{
        this.dataList=data.objects
      })
    }
  },
  created() {
    this.getDataList()
  },
};
</script>

<style lang="less">
.home-fine-box {
  .box-main{
    padding-bottom:50px;
  }
  padding: 0 10px;
  .van-cell {
    padding: 10px 0;
  }
  // 景点列表
}
</style>