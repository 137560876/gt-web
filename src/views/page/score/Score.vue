<template>
  <div class="score">
    <a-page-header style="border: 1px solid rgb(235, 237, 240); margin-bottom: 60px" title="乐谱" @back="goback">
      <div class="score-img">
        <img src="../../../assets/img/wull.png" alt="">
      </div>
    </a-page-header>
  </div>
</template>

<script>
export default {
  name: "Score",
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.go(-1); //返回上层
    },
  },
};
</script>

<style lang="less" scoped>
.score {
  width: 1140px;
  height: 100%;
  margin: 0 auto;
  padding-top: 20px;
}

.score-img {
  width: 800px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}

img {
  width: 100%;
  object-fit: contain;
}
</style>