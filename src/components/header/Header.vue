<template>
  <div class="head">
    <div @click="goHome" class="img-container">
      <img src="../../assets/img/logo.png" alt />
    </div>
    <div class="avatar-container">
      <Avatar></Avatar>
    </div>
    <div class="menu-container">
      <el-menu
        :default-active="activeIndex"
        active-text-color="#1989fa"
        text-color="#8CC4FD"
        class="el-menu-demo pad"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">钢琴谱</el-menu-item>
        <el-menu-item index="2">吉他谱</el-menu-item>
        <el-menu-item index="3">ukulele谱</el-menu-item>
        <el-menu-item index="4">管理中心</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import Avatar from "../avatar/Avatar";
export default {
  name: "Header",
  components: {
    Avatar,
  },
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key) {
      switch (key) {
        case "1":
          this.$router.push({ path: "/main/home" });
          break;
        case "2":
          this.$router.push({ path: "/main/home" });
          break;
        case "3":
          this.$router.push({ path: "/main/home" });
          break;
        case "4":
          this.$router.push({ path: "/main/option" });
          break;
        default:
          break;
      }
    },
    goHome() {
      this.$router.push({ path: "/main/home" });
    },
  },
};
</script>

<style>
.pad {
  padding-left: 500px !important;
}

.head {
  position: relative;
  display: flex;
  width: 1140px;
  height: 80px;
  margin: 0 auto;
}

.img-container {
  position: absolute;
  left: 30px;
  z-index: 50;
  cursor: pointer;
}

.avatar-container {
  position: absolute;
  left: 500px;
  top: 10px;
  z-index: 50;
}

.img-container img {
  height: 60px;
  object-fit: contain;
  margin-top: 14px;
}

.menu-container {
  width: 100%;
}

.el-menu-item {
  height: 80px !important;
  line-height: 80px !important;
  font-size: 18px !important;
}

.is-disabled {
  opacity: 1;
}
</style>