<!--
 * @Author: your name
 * @Date: 2021-06-07 10:16:00
 * @LastEditTime: 2021-06-15 11:22:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gsy-client\src\views\Home.vue
-->
<template>
  <div class="home">
    <!-- <img src="../assets/logo.png" alt="Vue log" class="logo" /> -->
    <router-link to="/" class="logo" />
    <el-menu
      :default-active="current"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="0">首页</el-menu-item>
      <el-menu-item index="1" @click="handleJumpToFav">我的收藏</el-menu-item>
      <el-menu-item index="2">我的关注</el-menu-item>
      <el-menu-item index="3">供应商库</el-menu-item>
    </el-menu>
    <detail/>
  </div>
</template>
<script>
import Detail from './childComps/Detail.vue'
const paths = ["/", "/fav", "/att", "/gysk"];
export default {
  name: "Home",
  data: () => ({}),
  components: {
    Detail
  },
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
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      let path = paths[key];
      if (this.$route.path !== path) {
        this.$router.push({ path: path });
      }
    },
    sendUrl() {

    },
    handleJumpToFav() {
      this.$router.push('/favorable');
    }
  },
};
</script>

<style scoped>
.logo {
  width: 100%;
  height: 40px;
  display: inline-block;
  background: url("../../assets/logo.png") center center no-repeat;
  background-size: contain;
}
.el-menu-demo {
  justify-content: center;
  display: flex;
}
</style>