<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <div :class="{'active':isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive:false
    }
  },
  props: {
    path:String
  },
  computed: {
    isActive() {
      return this.path === this.$route.path
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  },
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }
  .active {
    color: red;
  }
</style>