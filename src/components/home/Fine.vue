<template>
  <!-- 精选景点（仅首页，第三块内容） -->
  <div class="home-fine-box">
    <!-- 顶上导航 -->
    <van-cell
      title="精选景点"
      value="更多"
      icon="location-o"
      is-link
      title-style="text-align:left"
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
  methods: {},
  created() {
    this.dataList = [
      { id: 1, name: "景点名称", score: 4.5, price: 107 },
      { id: 2, name: "景点名称", score: 5, price: 98 },
      { id: 3, name: "景点名称景点名称", score: 4, price: 66 },
      { id: 4, name: "景点名称景点名称景点名称", score: 5, price: 98 },
      { id: 5, name: "景点名称景点名称", score: 4.5, price: 98 },
      { id: 6, name: "景点名称景点名称景点名称", score: 5, price: 98 },
      { id: 7, name: "景点名称景点名称", score: 4, price: 98 },
    ];
  },
};
</script>

<style lang="less">
.home-fine-box {
  padding: 0 10px;
  .van-cell {
    padding: 10px 0;
  }
  // 景点列表
}
</style>