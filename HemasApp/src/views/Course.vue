<template>
<Layout>
    <template v-slot:header>
     <el-row :gutter="20">
      <div class = "head">
        <el-button @click="$router.go(-1)">默认按钮</el-button>
        <img :src="require('@/assets/1.jpg')" style="width: 100px; height: 100px"/>
      </div>
     </el-row>
    </template>
    <template v-slot:body>
        
        kecheng
        
    </template>
</Layout>
</template>

<script>
import Layout from '../components/Layout'

export default {
  name: 'course',
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
  .el-row{
    height: 20vh;
  }
</style>