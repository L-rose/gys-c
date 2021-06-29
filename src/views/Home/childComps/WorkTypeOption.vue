<template>
  <div class="workType">
    <p class="work-title">作品类型：</p>
    <el-checkbox-group class="check-option" v-model="checkedType" :min="1">
      <el-checkbox
        class="check-item"
        v-for="item in workTypes"
        :label="item"
        :key="item"
        >{{ item }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>
<script>
const typeOption = [
  "全部",
  "网媒",
  "平面",
  "UI",
  "绘画",
  "3D模型",
  "音频类",
  "视频类",
  "空间",
  "其他"
];
export default {
  name: "Demo",
  data() {
    return {
      checkedType: ["全部"],
      workTypes: typeOption
    };
  }
};
</script>
<style scoped>
.workType {
  text-align: left;

}
.workType .work-title {
  
  display: inline-block;
  font-size: 14px;
  margin-left: 33px;
}
.check-option {
  display: inline-block;
}
.check-option .check-item {
  margin-left: 10px;
}
</style>
