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
    <Header><div slot="left">供应商作品</div></Header>
    <!-- <detail /> -->
    <search />
    <WorkType></WorkType>
    <div class="work-list">
      <Presentation></Presentation>
    </div>
    <Pagination></Pagination>
  </div>
</template>
<script>
import Header from "../../components/contents/Header.vue";
import Detail from "./childComps/Detail.vue";
import Search from "../../components/common/Search.vue";
import WorkType from "./childComps/WorkTypeOption.vue";
import Presentation from "./childComps/Presentation.vue";
import Pagination from "../../components/common/Pagination.vue"
export default {
  name: "Home",
  data: () => ({}),
  components: {
    Header,
    Detail,
    Search,
    WorkType,
    Presentation,
    Pagination
  }
};
</script>

<style scoped>
.work-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
