<template>
  <div class="main">
    <el-container style="height: 100%">
      <el-header height="80px">
        <Header></Header>
      </el-header>
      <el-main class="main-body">
        <Home></Home>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from '../../components/header/Header';
import Home from '../page/home/Home';

export default {
  name: "v-main",
  components: {
    Header, Home
  }
};

</script>

<style lang="less" scoped>
.main {
  height: 100%;
}

.main-body {
  overflow-y: auto;
}

</style>