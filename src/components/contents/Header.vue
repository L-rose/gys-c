<template>
  <div class="home-nav">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <el-menu
      :default-active="current"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="0">首页</el-menu-item>
      <el-menu-item index="1">我的收藏</el-menu-item>
      <el-menu-item index="2">我的关注</el-menu-item>
      <el-menu-item index="3">供应商库</el-menu-item>
    </el-menu>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
const paths = ["/home", "/favorable", "/att", "/gysk"];
export default {
  name: "Header",
  computed: {
    current() {
      let index;
      for (index = 0; index < paths.length; index++) {
        const path = paths[index];
        let reg = new RegExp("^" + path);
        if (this.$route.path.match(reg)) {
          break;
        }
      }
      console.log(index + "");
      return index + "";
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      let path = paths[key];
      if (this.$route.path !== path) {
        this.$router.push({ path: path });
      }
    },
    sendUrl() {}
  }
};
</script>
<style scoped>
.home-nav {
  position: relative;
  width: 1400px;
  height: 55px;
  font-size: 32px;
}

.el-menu-demo {
  justify-content: center;
  display: flex;
}

.home-nav .left {
  position: absolute;
  top: 16px;
  left: 0px;
  font-weight: 700;
  z-index: 1;
}
</style>
