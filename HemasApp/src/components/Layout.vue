<template>


  <el-container>
    
    <el-header>
    <slot name="header">Header</slot>
    </el-header>
  
    <el-main>
     <slot name = "body">Main</slot>
    </el-main>
  </el-container>

</template>
