<template>
    <div>
        <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
  
</template>

<script>
  export default {
    created() {
    	
    },
    methods: {
      
    },
    created() {
    },
    mounted() {
    },
    data() {
      return {
      }
    }
  }
</script>