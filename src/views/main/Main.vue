<template>
  <div class="main">
    <el-container style="height: 100%">
      <el-header height="80px">
        <Header></Header>
      </el-header>
      <el-main class="main-body">
        <vue-scroll :ops="ops">
          <Home></Home>
        </vue-scroll>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "../../components/header/Header";
import Home from "../page/home/Home";

export default {
  name: "v-main",
  components: {
    Header,
    Home,
  },
  data() {
    return {
      ops: {
        rail: {
          gutterOfSide: "5px",
        },
        bar: {
          keepShow: true,
          background: "rgba(144,147,153,.5)",
        },
        vuescroll: {
          wheelScrollDuration: 1,
          wheelDirectionReverse: true,
        },
      },
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}

.main-body {
  overflow-y: auto;
}

.main-body::-webkit-scrollbar {
  width: 0px;
}

.el-main {
  padding: 0;
}
</style>