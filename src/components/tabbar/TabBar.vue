<template>
  <div class="tab-bar">
    <tab-bar-item path='/home'>
      <template v-slot:icon><img src="../../assets/img/tabbar/home.svg" alt=""></template>
      <template v-slot:icon-active><img src="../../assets/img/tabbar/home_active.svg" alt=""></template>
      <template v-slot:text><div>首页</div></template>
    </tab-bar-item>
    <tab-bar-item path='/category'>
      <template v-slot:icon><img src="../../assets/img/tabbar/category.svg" alt=""></template>
      <template v-slot:icon-active><img src="../../assets/img/tabbar/category_active.svg" alt=""></template>
      <template v-slot:text><div>分类</div></template>
    </tab-bar-item>
    <tab-bar-item path='/shopcart'>
      <template v-slot:icon><img src="../../assets/img/tabbar/shopcart.svg" alt=""></template>
      <template v-slot:icon-active><img src="../../assets/img/tabbar/shopcart_active.svg" alt=""></template>
      <template v-slot:text><div>购物车</div></template>
    </tab-bar-item>
    <tab-bar-item path='/profile'>
      <template v-slot:icon><img src="../../assets/img/tabbar/profile.svg" alt=""></template>
      <template v-slot:icon-active><img src="../../assets/img/tabbar/profile_active.svg" alt=""></template>
      <template v-slot:text><div>我的</div></template>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem.vue'
export default {
  components: {
    TabBarItem
  }
}
</script>

<style scoped>
   .tab-bar {
    height: 49px;
    background-color: #eee;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
  }
  
</style>