<template>
  <!-- 首页热门推荐（仅首页，第2块内容） -->
  <div class="home-hot-box">
    <!-- 顶上导航 -->
    <!-- 点击“全部榜单”，跳转到景点列表，并把title传给景点列表页面 -->
    <van-cell
      title="热门推荐"
      value="全部榜单"
      icon="static/home/hot/fire.png"
      is-link
      title-style="text-align:left"
      :to="{name:'SightList',query:{
        name:'热门推荐'
      }}"
    />
    <!-- //顶上导航 -->

    <!-- 景点列表 -->
    <!-- 点击景点列表项后，跳转到景点详情页面 -->
    <div class="box-main">
      <router-link
        class="hot-item"
        v-for="item in dataList"
        :key="item.id"
        :to="{
          name: 'SightDetail',
          params: {
            id: item.id,
          },
        }"
      >
        <div class="img">
          <span></span>
          <img :src="item.main_img" />
        </div>
        <h5 class="van-ellipsis">{{ item.name }}</h5>
        <div class="line-price">
          <span>¥{{ item.min_price }}</span
          >起
        </div>
      </router-link>
    </div>
    <!--// 景点列表 -->
  </div>
</template>

<script>
//导入异步实例和景点列表接口
import { ajax } from "@/utils/ajax";
import { SightApis } from "@/utils/apis";
export default {
  data() {
    return {
      dataList: [],
    };
  },

  methods: {
    // 获取景点列表热门景点的数据
    getDataList() {
      ajax
        .get(SightApis.sightListUrl, {
          params: {
            is_hot: 1,
          },
          //解构赋值，拿到res中的data
        })
        .then(({ data }) => {
          this.dataList = data.objects;
        });
    },
  },
  created() {
    this.getDataList();
  },
};
</script>

<style lang='less'>
.home-hot-box {
  padding: 0 10px;
  .van-cell {
    padding: 10px 0;
  }
  .box-main {
    width: 100%;
    display: flex;
    padding-top: 10px;
    overflow: scroll;

    .hot-item {
      display: flex;
      flex-direction: column;
      width: 100px;
      margin-right: 10px;
      padding-bottom: 10px;
      .img {
        position: relative;
        span {
          position: absolute;
          left: 0px;
          top: 0px;
          display: inline-block;
          width: 42px;
          height: 20px;
          z-index: 10;
        }
        img {
          width: 100px;
          height: 100px;
        }
      }
      h5 {
        color: #212121;
        padding: 2px 0;
        font-size: 12px;
        margin: 0;
      }
      .line-price {
        color: #212121;
        font-size: 12px;
        span {
          color: #f50;
          font-size: 13px;
          margin-right: 2px;
          font-weight: bold;
        }
      }
      &:nth-child(1) .img span {
        background: url(/statci/home/hot/top1.png) norepeat;
        background-size: 100% auto;
      }
      &:nth-child(2) .img span {
        background: url(/statci/home/hot/top2.png) norepeat;
        background-size: 100% auto;
      }
      &:nth-child(3) .img span {
        background: url(/statci/home/hot/top3.png) norepeat;
        background-size: 100% auto;
      }
    }
  }
}
</style>