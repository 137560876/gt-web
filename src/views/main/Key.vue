<template>
  <div class="main">
    <el-container style="height: 100%">
      <el-header height="80px">
        <Head></Head>
      </el-header>
      <el-main class="main-body">
        <vue-scroll :ops="ops">
          <div class="page">
            <router-view></router-view>
            
          </div>
        </vue-scroll>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Head from "../../components/header/KeyHead";
import Home from "../page/home/Home";

export default {
  name: "v-key",
  components: {
    Head,
    Home,
  },
  data() {
    return {
      ops: {
        rail: {
          gutterOfSide: "5px",
          gutterOfEnds: null,
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
.page {
  width: 1140px;
  margin: 0 auto;
}

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
