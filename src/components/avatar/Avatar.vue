<template>
  <div class="avatar-container">
    <div class="block">
      <el-avatar :src="circleUrl"></el-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
};
</script>

<style>
</style>