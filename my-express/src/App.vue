<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
html,body{
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: #F5F5F5;
    font-size: 14px;
}
 #app {
  font-family: "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  height:100%;
}

body, div, span, header, footer, nav, section, aside, article,ol, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select{
    font-family: "Microsoft Yahei", sans-serif;
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
}
textarea { -webkit-appearance: none;}   

.clear:after{
    content: '';
    display: block;
    clear: both;
}
.clear{
    zoom:1;
}
.clearfix:after{
    content: '';
    display: block;
    clear: both;
}
.clearfix{
    zoom:1;
}
.left{
  float:left;
}
.right{
  float:right;
}
.display-none{
  display:none;
}
.add-button{
    cursor: pointer;
    margin-right:10px;
    color:#208af5;
    font-size: 14px;
    display: inline-block;
    line-height: 20px;
}
.el-dialog__header {
  background-color: #e2f0fe;
  border-radius: inherit;
}
.log-magess .el-tabs__nav-wrap::after {
    background-color: #fff;
}
.demo-table-expand {
font-size: 0;
}
.demo-table-expand label {
width: 90px;
color: #99a9bf;
}
.demo-table-expand .el-form-item {
margin-right: 0;
margin-bottom: 0;
width: 25%;
}
.el-cascader{
    width: 100%;
}
</style>
