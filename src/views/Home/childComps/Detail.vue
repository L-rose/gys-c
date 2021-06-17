<!--
 * @Author: your name
 * @Date: 2021-06-10 09:56:05
 * @LastEditTime: 2021-06-15 19:38:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gsy-client\src\views\Detail.vue
-->
<template>
  <div>
    <h1>我是详情界面</h1>
    <button @click="sendGetClick">测试发送get数据</button>
    <div class="div"></div>
    <button @click="sendPostClick">测试发送post数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    sendGetClick() {
      console.log("1111");
      this.$axios({
        method: "get",
        url: "http://127.0.0.1:3000/api/getUserName",
        params: {
          username: "wxy",
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendPostClick() {
      console.log("2222");
      this.$axios({
        method: "post",
        url: "http://127.0.0.1:3000/api/getUserName",
        data: {
            username: "wxy",
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>