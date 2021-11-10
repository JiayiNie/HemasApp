<template>
<Layout>
    <template v-slot:header><el-button @click="$router.go(-1)">默认按钮</el-button></div></template>
    <template v-slot:body>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">类别分类</span>
            </template>
            <el-submenu index="1-4">
                <span slot="title">绘画</span>
                <el-menu-item>油画</el-menu-item>
                <el-menu-item>油画</el-menu-item>
                <el-menu-item>油画</el-menu-item>
                <el-menu-item>油画</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-3">摄影1</el-menu-item>
            <el-menu-item index="1-3">摄影2</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">时间分类</span>
        </el-menu-item>
        
        </el-menu>

        <div>q</div>
        <div>q</div>
        <div>q</div>
        <div>q</div>
</template>
</Layout>
</template>

<script>
import Layout from '../components/Layout'

export default {
  name: 'production',
  components: {
    Layout
  },
  data() {
      return {
        isCollapse: true
      };
    },
    methods: {
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
        console.log(key, keyPath);
        }
    }
}

</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-row {
    margin-bottom: 2.5vh;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    height :25vh;
    border-radius: 5px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
  }
  .grid-content1 {
    border-radius: 4px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>