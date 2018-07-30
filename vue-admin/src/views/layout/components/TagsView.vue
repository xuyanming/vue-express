<template>
 <div class="tags-view">
     <div class="tags-view-container">
         <div class="close-all-tag-con">
             <el-dropdown placement="bottom" :hide-on-click="false">
                <span class="el-dropdown-link">
                    标签选项<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>关闭所有</el-dropdown-item>
                    <el-dropdown-item>关闭其他</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
         </div>
         <div class="tags-inner-scroll-body">
             <el-tag
        :key="tag"
        type="info"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag}}
        </el-tag>
         </div>
    </div>
 </div>
  
</template>

<script>

export default {
  components: {  },
  data() {
    return {
        dynamicTags: ['标签一', '标签二', '标签三'],
    }
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods: {
   handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
  }
  
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tags-view{
    background: #f0f0f0;
    box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
    flex: 0 0 auto;
    height: 40px;
    overflow: hidden;
    background: #f0f0f0;
    .tags-view-container {
        position: relative;
        box-sizing: border-box;
        padding-right: 120px;
        width: 100%;
        height: 100%;
        .tags-inner-scroll-body{
            position: absolute;
            padding: 4px 10px;
            overflow: visible;
            white-space: nowrap;
            transition: left .3s ease;
        }
        .close-all-tag-con{
            position: absolute;
            right: 0;
            top: 0;
            box-sizing: border-box;
            padding-top: 8px;
            text-align: center;
            width: 110px;
            height: 100%;
            background: white;
            box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
            z-index: 10;
        }  
    }
}

.el-tag + .el-tag {
  margin-left: 10px;
}
</style>
