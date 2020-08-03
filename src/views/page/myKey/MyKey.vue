<template>
  <div class="my-key">
    <div class="radio-container">
      <a-row>
        <a-col :span="12">
          <div class="radio-item">蓬莱</div>
        </a-col>
        <a-col :span="12">
          <div class="radio-item">冰心</div>
          <input type="file" id="files">
        </a-col>
      </a-row>
    </div>
    <div class="divider" />
    <div class="list">
      <a-list item-layout="horizontal" bordered :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta description="这是个冰心键位">
            <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-list-item-meta>
        </a-list-item>
        <div slot="header">键位列表</div>
      </a-list>
    </div>
  </div>
</template>

<script>
const data = [
  {
    title: "冰心键位1",
  },
  {
    title: "冰心键位2",
  },
  {
    title: "冰心键位3",
  },
  {
    title: "冰心键位4",
  },
];

export default {
  data() {
    return {
      data,
    };
  },
};
</script>

<style lang="less" scoped>
.my-key {
  display: flex;
}
.radio-container {
  width: 240px;
}

.radio-item {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  font-size: 18px;
  width: 120px;
  height: 120px;
}

.radio-item:hover {
  background: rgba(0, 0, 0, 0.3);
}


.list {
  width: 800px;
  margin-left: 30px;
  margin-top: 30px;
}

.divider {
  width: 1px;
  background: #000000;
  opacity: 0.2;
}
</style>