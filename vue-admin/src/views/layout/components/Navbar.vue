<template>
  <div class="ant-layout-header" style="padding: 0px;">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
            <div style="padding-left: 10px; padding-top: 10px;">
                <svg :class="falg ? 'hamburger' : 'active'"  t="1492500959545" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1691" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" ><path xmlns="http://www.w3.org/2000/svg" d="M950.857143 768l0 73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-804.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143l804.571429 0q14.857143 0 25.714286 10.857143t10.857143 25.714286zm0-292.571429l0 73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-804.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143l804.571429 0q14.857143 0 25.714286 10.857143t10.857143 25.714286zm0-292.571429l0 73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-804.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143l804.571429 0q14.857143 0 25.714286 10.857143t10.857143 25.714286z" p-id="1442" fill="#657180"/></svg>
            </div>
            </el-col>  
        <el-col :span="6">
            <el-col     :span="16">
                <div class="el-navtop-search">
                    <i @click="iconchange" class="el-icon-search"></i>
                    <div :style=" iconflag ? 'width:210px;' : 'width:0px;'" class="el-search-input">
                        <el-input @blur="blurfocus" ref="search-input" v-model="search" autofocus placeholder="请输入内容"></el-input>
                    </div>
                </div>
            </el-col>    
            <el-col  :span="2">
                <el-badge :value="12" class="item">
                    <div style="font-size: 16px;height:24px;line-height:24px;">
                        <i class="el-icon-message"></i>
                    </div>
                </el-badge>
            </el-col>
            <el-col :span="6">
                <div class="header___1L3tU">
                    <el-dropdown placement="bottom">
                        <span class="el-dropdown-link">
                            胥艳明<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item disabled ><div  style="margin:0 10px;"><i class="el-icon-edit"></i><span style="margin-left:10px;">个人中心</span></div></el-dropdown-item>
                            <el-dropdown-item  divided ><div  style="margin:0 10px;"><i class="el-icon-back"></i><span style="margin-left:10px;" >退出登录</span></div></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>
        </el-col>
        
       </el-row>
      
   </div>
</template>

<script>

export default {
  data() {
    return {
      search: '',
      falg:false,
      iconflag:false
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
      iconchange(){
          this.iconflag=!this.iconflag
          if(this.iconflag){
              console.log(this.$refs['search-input'].focus())
          }
          
      },
      blurfocus(){
          this.iconflag=false;
      }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.hamburger{
    cursor: pointer;
    transform: rotate(90deg);
    transition: .38s;
    transform-origin: 50% 50%;
}
.active{
    cursor: pointer;
    transform: rotate(0deg);
    transition: .38s;
    transform-origin: 50% 50%;
}
.ant-layout-header {
    flex: 0 0 auto;
    background: #fff;
    padding: 0 50px;
    height: 64px;
    line-height: 64px;
}
.el-navtop-search {
    float: right;
    cursor: pointer;
    padding: 0 12px;
    display: inline-block;
    -webkit-transition: all .3s;
    transition: all .3s;
    height: 100%;
}
.el-navtop-search > i {
    
    font-size: 16px;
    vertical-align: middle;
    color: rgba(0, 0, 0, 0.65);
}
.el-search-input{
    transition: width 0.3s, margin-left 0.3s;
    width: 0;
    background: transparent;
    border-radius: 0;
    display:inline-block;
}
</style>
<style>
.el-navtop-search .el-input__inner {
    border-radius: 0; 
    padding: 0;
    height: 30px;
    border:none;
    border-bottom: 1px solid #F0F0F0;
  }
</style>

