<template>
  <div class="page-search">
    <!-- 标题 -->
    <van-nav-bar title="搜索景点" />
    <!-- 搜索框 -->
    <van-search
      v-model="sightName"
      show-action
      label="景点"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <!-- 景点列表 -->
    <div class="sight-list">
      <SightItem v-for="item in dataList" :key="item.id" :item="item" />
    </div>
    <!-- 分页 -->
    <van-pagination
      v-model="currentPage"
      :total-items="totalItems"
      :items-per-page="perPages"
    />
    <!-- 底部导航 -->
    <TripFooter />
  </div>
</template>

<script>
//导入景点列表
import SightItem from "@/components/common/ListSight.vue";
import TripFooter from "@/components/common/footer";

export default {
  data() {
    return {
      sightName: "",
      dataList: [],
      currentPage: 1,
      totalItems: 10,
      perPages: 5,
    };
  },
  methods: {
    onSearch() {
      console.log("onSearch");
    },
  },
  components: {
    //注册景点列表
    SightItem,
    //注册底部导航
    TripFooter,
  },
};
</script>