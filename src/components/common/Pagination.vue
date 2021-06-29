<template>
  <div class="pagination">
    <el-pagination
      class="el-pag"
      background
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.pagination {
   position: relative;
}
.el-pag {
    position: absolute;
    left: 25%;
    top: 100px;
}

</style>
