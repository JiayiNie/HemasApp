<template>
<Layout>
    <template v-slot:header>HOME</template>
    <template v-slot:body>
          
    <el-carousel :interval="5000" arrow="always" @click.native="navigation">
        
        <el-carousel-item>
            <img :src="require('@/assets/logo_white.jpg')" style="width: 100px; height: 100px"/>
        </el-carousel-item>
        <el-carousel-item>
        nihao1
        </el-carousel-item>
        <el-carousel-item>
        nihao2
        </el-carousel-item>
    </el-carousel>

        
        <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple" @click="navigation1">课程学习</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">语录图文</div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">展览资讯</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">月展作品</div></el-col>
        </el-row>
    </template>
</Layout>
</template>


<script>
import Layout from '../components/Layout'

export default {
  name: 'index',
  components: {
    Layout
  },
  methods: {
    navigation() {
      this.$router.push({ path: `/production` })
    },
    navigation1() {
      this.$router.push({ path: `/course` })
    }
  }


}
</script>

<style>
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
  .el-carousel
  {
    height: 20vh;
  }
  .el-carousel__item {
    color: #475669;
    margin: 0;
    height: 20vh;
  }
  
</style>
