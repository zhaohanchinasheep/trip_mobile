<template>
  <a href="#" class="sight-item" >
    <!-- 左边布局 -->
    <img src="/static/home/hot/h1.jpg" alt="" />
    <!-- //左边布局 -->
    <!-- 右边布局 -->
    <div class="right">
      <h5>{{ item.name }}</h5>
      <van-rate v-model="item.score" readonly />
      <div class="tips">4人点评｜100%满意</div>
      <div class="tips light">广东省-广州市</div>
      <div class="line-price">¥{{ item.price }}元起</div>
    </div>
    <!-- //右边布局 -->
  </a>
</template>

<script>
export default {
	props:['item']
}
</script>


<style lang='less'>
.box-main {
  .sight-item {
    display: flex;
    border-bottom: 1px solid #f6f6f6;
    img {
      width: 100px;
      height: 100px;
    }
    .right {
      text-align: left;
      //子元素扩展充满父元素
      flex-grow: 1;
      padding-left: 5px;
      justify-content: left;
      position: relative;
    }
    h5 {
      color: #212121;
      font-size: 14px;
      padding: 5px 0;
      margin: 0;
    }
    .line-price {
      position: absolute;
      right: 10px;
      top: 20px;
      display: inline-block;
      color: #ff5500;
      font-size: 16px;
      font-weight: bold;
    }
    .tips {
      font-size: 12px;
      color: #666;
      & .light {
        color: #999;
      }
    }
  }
}
</style>