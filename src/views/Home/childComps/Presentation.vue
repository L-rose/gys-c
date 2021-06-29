<template>
  <div class="img-present">
    <div class="block" v-for="fit in fits" :key="fit">
      <!-- <span class="demonstration">{{ fit }}</span> -->
      <el-image
        class="image"
        :src="require('../../../assets/images/bgt.png')"
        :fit="fit"
      >
      </el-image>
      <div class="image-bgc">
        <p class="work-title"><span>作品标题</span></p>
        <p class="work-fav">
          <span>❤ 146</span>
          <span>⊙9999</span>
        </p>
        <p class="supp-title"><span>供应商名</span></p>
        <el-button
        class="work-att btn1" 
        type="primary" 
        round
        v-if="value_attr"
        @click="handleAttr"
        >关注</el-button>
        <el-button 
        class="work-att btn2" 
        type="primary" 
        round
        v-else
        @click="handleAttr"
        >已关注</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fits: [
        "fill",
        "fill2",
        "fill3",
        "fill4",
        "fill5",
        "contain",
        "cover",
        "none",
        "scale-down"
      ],
      value_attr: true,
      // url: '../../../assets/images/bgt.png'
    };
  },
  methods: {
    handleAttr() {
      console.log(this.value_attr);
      this.value_attr = false;
    }
  }
};
</script>

<style scoped>
.img-present {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 50px 0 33px;
}
.block {
  width: 240px;
  height: 135px;
  margin: 50px 0;
}
/* 最后一行是四个 */
.block:last-child:nth-child(5n-1) {
  margin-right: calc(19.3% + 5% / 4);
}
/* 最后一行是三个 */
.block:last-child:nth-child(5n-2) {
  margin-right: calc(38.6% + 9.8% / 4);
}
/* 最后一行是两个 */
.block:last-child:nth-child(5n-3) {
  margin-right: calc(57.8% + 15.1% / 4);
}

.image-bgc {
  background-image: url("../../../assets/images/u1.png");
  width: 240px;
  height: 80px;
  font-size: 14px;
  margin-top: -3px;
  padding: 10px 0 0 16px;
}

.image-bgc .work-title {
  width: 60px;
  height: 20px;
}

.image-bgc .work-fav span {
  width: 50px;
  height: 20px;
}
.image-bgc .supp-title {
  width: 60px;
  height: 20px;
}
.work-att {
  width: 50px;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -23px 0 0 100px;
}
.btn2 {
  color: black;
  background-color: #ccc;
  border: none;
}
</style>
