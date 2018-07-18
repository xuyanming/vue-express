<template>
  <div class="app-wrapper" >
    <div class="ant-layout ant-layout-has-sider">
        <div class="sider___g53Yu ant-layout-sider ant-layout-sider-dark" :style="isCollapse ? 'max-width: 64px; min-width: 64px; width: 64px;': 'max-width: 256px; min-width: 256px; width: 256px;'" >
            <div class="logo___2J9hf" >
                <a href="#/">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDcuMSAoNDU0MjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDI4IENvcHkgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjIuMTAyMzI3MyUiIHkxPSIwJSIgeDI9IjEwOC4xOTcxOCUiIHkyPSIzNy44NjM1NzY0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDI4NUVCIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRUM3RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI1NC4wNDI4OTc1JSIgeTI9IjEwOC40NTY3MTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyOUNERkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE0OEVGRiIgb2Zmc2V0PSIzNy44NjAwNjg3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEE2MEZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjkuNjkwODE2NSUiIHkxPSItMTIuOTc0MzU4NyUiIHgyPSIxNi43MjI4OTgxJSIgeTI9IjExNy4zOTEyNDglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQTgxNkUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y3NEE1QyIgb2Zmc2V0PSI0MS40NzI2MDYlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgLTIwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjgtQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI3LUNvcHktMyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTEuNTg4MDg2Myw0LjE3NjUyODIzIEw0LjE3OTk2NTQ0LDkxLjUxMjc3MjggQy0wLjUxOTI0MDYwNSw5Ni4yMDgxMTQ2IC0wLjUxOTI0MDYwNSwxMDMuNzkxODg1IDQuMTc5OTY1NDQsMTA4LjQ4NzIyNyBMOTEuNTg4MDg2MywxOTUuODIzNDcyIEM5Ni4yODcyOTIzLDIwMC41MTg4MTQgMTAzLjg3NzMwNCwyMDAuNTE4ODE0IDEwOC41NzY1MSwxOTUuODIzNDcyIEwxNDUuMjI1NDg3LDE1OS4yMDQ2MzIgQzE0OS40MzM5NjksMTU0Ljk5OTYxMSAxNDkuNDMzOTY5LDE0OC4xODE5MjQgMTQ1LjIyNTQ4NywxNDMuOTc2OTAzIEMxNDEuMDE3MDA1LDEzOS43NzE4ODEgMTM0LjE5MzcwNywxMzkuNzcxODgxIDEyOS45ODUyMjUsMTQzLjk3NjkwMyBMMTAyLjIwMTkzLDE3MS43MzczNTIgQzEwMS4wMzIzMDUsMTcyLjkwNjAxNSA5OS4yNTcxNjA5LDE3Mi45MDYwMTUgOTguMDg3NTM1OSwxNzEuNzM3MzUyIEwyOC4yODU5MDgsMTAxLjk5MzEyMiBDMjcuMTE2MjgzMSwxMDAuODI0NDU5IDI3LjExNjI4MzEsOTkuMDUwNzc1IDI4LjI4NTkwOCw5Ny44ODIxMTE4IEw5OC4wODc1MzU5LDI4LjEzNzg4MjMgQzk5LjI1NzE2MDksMjYuOTY5MjE5MSAxMDEuMDMyMzA1LDI2Ljk2OTIxOTEgMTAyLjIwMTkzLDI4LjEzNzg4MjMgTDEyOS45ODUyMjUsNTUuODk4MzMxNCBDMTM0LjE5MzcwNyw2MC4xMDMzNTI4IDE0MS4wMTcwMDUsNjAuMTAzMzUyOCAxNDUuMjI1NDg3LDU1Ljg5ODMzMTQgQzE0OS40MzM5NjksNTEuNjkzMzEgMTQ5LjQzMzk2OSw0NC44NzU2MjMyIDE0NS4yMjU0ODcsNDAuNjcwNjAxOCBMMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05MS41ODgwODYzLDQuMTc2NTI4MjMgTDQuMTc5OTY1NDQsOTEuNTEyNzcyOCBDLTAuNTE5MjQwNjA1LDk2LjIwODExNDYgLTAuNTE5MjQwNjA1LDEwMy43OTE4ODUgNC4xNzk5NjU0NCwxMDguNDg3MjI3IEw5MS41ODgwODYzLDE5NS44MjM0NzIgQzk2LjI4NzI5MjMsMjAwLjUxODgxNCAxMDMuODc3MzA0LDIwMC41MTg4MTQgMTA4LjU3NjUxLDE5NS44MjM0NzIgTDE0NS4yMjU0ODcsMTU5LjIwNDYzMiBDMTQ5LjQzMzk2OSwxNTQuOTk5NjExIDE0OS40MzM5NjksMTQ4LjE4MTkyNCAxNDUuMjI1NDg3LDE0My45NzY5MDMgQzE0MS4wMTcwMDUsMTM5Ljc3MTg4MSAxMzQuMTkzNzA3LDEzOS43NzE4ODEgMTI5Ljk4NTIyNSwxNDMuOTc2OTAzIEwxMDIuMjAxOTMsMTcxLjczNzM1MiBDMTAxLjAzMjMwNSwxNzIuOTA2MDE1IDk5LjI1NzE2MDksMTcyLjkwNjAxNSA5OC4wODc1MzU5LDE3MS43MzczNTIgTDI4LjI4NTkwOCwxMDEuOTkzMTIyIEMyNy4xMTYyODMxLDEwMC44MjQ0NTkgMjcuMTE2MjgzMSw5OS4wNTA3NzUgMjguMjg1OTA4LDk3Ljg4MjExMTggTDk4LjA4NzUzNTksMjguMTM3ODgyMyBDMTAwLjk5OTg2NCwyNS42MjcxODM2IDEwNS43NTE2NDIsMjAuNTQxODI0IDExMi43Mjk2NTIsMTkuMzUyNDQ4NyBDMTE3LjkxNTU4NSwxOC40Njg1MjYxIDEyMy41ODUyMTksMjAuNDE0MDIzOSAxMjkuNzM4NTU0LDI1LjE4ODk0MjQgQzEyNS42MjQ2NjMsMjEuMDc4NDI5MiAxMTguNTcxOTk1LDE0LjAzNDAzMDQgMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjY4NTYzMywxMzUuODU0NTc5IEMxNTcuODk0MTE1LDE0MC4wNTk2IDE2NC43MTc0MTIsMTQwLjA1OTYgMTY4LjkyNTg5NCwxMzUuODU0NTc5IEwxOTUuOTU5OTc3LDEwOC44NDI3MjYgQzIwMC42NTkxODMsMTA0LjE0NzM4NCAyMDAuNjU5MTgzLDk2LjU2MzYxMzMgMTk1Ljk2MDUyNyw5MS44Njg4MTk0IEwxNjguNjkwNzc3LDY0LjcxODExNTkgQzE2NC40NzIzMzIsNjAuNTE4MDg1OCAxNTcuNjQ2ODY4LDYwLjUyNDE0MjUgMTUzLjQzNTg5NSw2NC43MzE2NTI2IEMxNDkuMjI3NDEzLDY4LjkzNjY3NCAxNDkuMjI3NDEzLDc1Ljc1NDM2MDcgMTUzLjQzNTg5NSw3OS45NTkzODIxIEwxNzEuODU0MDM1LDk4LjM2MjM3NjUgQzE3My4wMjM2Niw5OS41MzEwMzk2IDE3My4wMjM2NiwxMDEuMzA0NzI0IDE3MS44NTQwMzUsMTAyLjQ3MzM4NyBMMTUzLjY4NTYzMywxMjAuNjI2ODQ5IEMxNDkuNDc3MTUsMTI0LjgzMTg3IDE0OS40NzcxNSwxMzEuNjQ5NTU3IDE1My42ODU2MzMsMTM1Ljg1NDU3OSBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiBjeD0iMTAwLjUxOTMzOSIgY3k9IjEwMC40MzY2ODEiIHJ4PSIyMy42MDAxOTI2IiByeT0iMjMuNTgwNzg2Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="logo">
                <h1 v-if="!isCollapse" style="color:#fff">vue-express</h1>
                </a>
            </div>
            <el-scrollbar tag="ul"  style="width: 256px;position: fixed;top: 0; bottom: 0; margin-top: 64px;transition: padding-top .3s;"  wrap-class="el-select-dropdown__wraps" view-class="el-select-dropdown__list"  >
                <el-menu :collapse-transition="false" mode="vertical" router :default-active="$route.path" :collapse="isCollapse" >
                    <node-content :node="item"  v-for="(item,index) in routerz" :key="index"  v-if="item.hidden ? false : true "></node-content>
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="ant-layout">
            <div class="ant-layout-header" style="padding: 0px;">
                <el-row type="flex" class="row-bg" justify="space-between" style="height: 64px;">
                    <el-col :span="2">
                        <div style="padding-left: 10px; margin-top: 10px; display: inline-block;">
                            <span @click="collapse" style="    display: inline-block;height: 32px;">
                               <svg :class="isCollapse ? 'hamburger' : 'active'"  t="1492500959545" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1691" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" ><path xmlns="http://www.w3.org/2000/svg" d="M950.857143 768l0 73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-804.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143l804.571429 0q14.857143 0 25.714286 10.857143t10.857143 25.714286zm0-292.571429l0 73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-804.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143l804.571429 0q14.857143 0 25.714286 10.857143t10.857143 25.714286zm0-292.571429l0 73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-804.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143l804.571429 0q14.857143 0 25.714286 10.857143t10.857143 25.714286z" p-id="1442" fill="#657180"/></svg>
                            </span>
                             </div>
                        </el-col>  
                    <el-col :span="22">
                        <div class="right header clearfix">
                            <div class="header___1L3tU">
                                <el-dropdown placement="bottom">
                                    <span class="el-dropdown-link">
                                        {{user}}<i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item disabled ><div  style="margin:0 10px;"><i class="el-icon-edit"></i><span style="margin-left:10px;">个人中心</span></div></el-dropdown-item>
                                        <el-dropdown-item  divided ><div  style="margin:0 10px;"><i class="el-icon-back"></i><span style="margin-left:10px;" >退出登录</span></div></el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>
                        <div class="right clearfix" >
                            <el-badge :value="12" >
                                <div style="font-size: 16px;height:24px;line-height:24px;">
                                    <i class="el-icon-message"></i>
                                </div>
                            </el-badge>
                        </div>
                        <div class="right clearfix">
                            <div class="el-navtop-search">
                                <i @click="iconchange" class="el-icon-search"></i>
                                <div :style=" iconflag ? 'width:210px;' : 'width:0px;'" class="el-search-input">
                                    <el-input @blur="blurfocus" ref="search-input" v-model="search" autofocus placeholder="请输入内容"></el-input>
                                </div>
                            </div>
                        </div>    
                        
                        
                    </el-col>
                </el-row>
            </div>
            <Tags-view :pageTagsList="pageTagsList" :routers="routers"></Tags-view>
            <section class="ant-layout-content">
                <transition name="fade" mode="out-in">
                    <div style=" margin: 10px;">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </div>
                
                </transition>
            </section>
        </div>
    </div>
    
  </div>
</template>

<script>
import TagsView from './TagsView'
import {getusername} from '@/utils/auth'
export default {
  name: 'layout',
  data() {
    return {
      search: '',
      falg:false,
      iconflag:false,
      isCollapse:false,
      routerz:[],
      routers:{},
      
    }
  },

  components: {
    TagsView,
    NodeContent: {
        props: {
          node:null
        },

        render(h) {
          const datas = this.node;
          const loop = (data) => data.map((item,index) => {
            if (item.children && item.children.length) {
                return (<el-submenu index={item.path} >
                <template slot="title">
                    <i class={item.meta.icon}></i>
                    <span>{item.meta.title}</span>
                </template>
                {loop(item.children)}
            </el-submenu>)
            }else{
                return (<el-menu-item index={item.path} >
                <i class={item.meta.icon}></i>
                <span slot="title">{item.meta.title}</span>
              </el-menu-item>)
            }
          });
          return (datas.name !== 'home' ? <el-submenu index={datas.path } >
              <template slot="title">
                <i class={datas.meta.icon}></i>
                <span>{datas.meta.title}</span>
              </template>
              { datas.children  ? loop(datas.children) :''}
            </el-submenu> :
            <el-menu-item index={datas.children[0].path} >
                <i class={datas.children[0].meta.icon}></i>
                <span slot="title">{datas.children[0].meta.title}</span>
              </el-menu-item>);
        }
      }
  },
  created() {
    this.$store.commit('setOpenedList');
    this.routerz = this.$router.options.routes;
    this.routers=this.$route;
    let openedPageLen = this.pageTagsList.length;
    let i = 0;
    let tagHasOpened = false;
    while (i < openedPageLen) {
        if (this.routers.name === this.pageTagsList[i].name) { // 页面已经打开
            tagHasOpened = true;
            break;
        }
        i++;
    }
    if(!tagHasOpened){
        let tag={
            meta: this.routers.meta,
            path: this.routers.path,
            name: this.routers.name
        }
        this.$store.commit('increateTag', tag)
    }
  },
  mounted () {

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
      },
    collapse(){
        this.isCollapse=!this.isCollapse
    }
  },
  computed: {
    pageTagsList () {
        return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
    },
    user(){
        return getusername()
    }
  },
  watch:{
    '$route' (to) {
        this.routers=to
        let openedPageLen = this.pageTagsList.length;
        let i = 0;
        let tagHasOpened = false;
        while (i < openedPageLen) {
            if (to.name === this.pageTagsList[i].name) { // 页面已经打开
                tagHasOpened = true;
                break;
            }
            i++;
        }
        if(!tagHasOpened){
            let tag={
                meta: to.meta,
                path: to.path,
                name: to.name
            }
            this.$store.commit('increateTag', tag)
        }
        
    },
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .ant-layout {
    min-height: 100vh;
    overflow-x: hidden;
    }
    .ant-layout, .ant-layout * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .ant-layout {
        display: flex;
        flex-direction: column;
        flex: auto;
        background: #f0f2f5;
    }
    .ant-layout.ant-layout-has-sider {
        -ms-flex-direction: row;
        flex-direction: row;
    }
    .ant-layout {
        height: 100%;
    }
    *, :after, :before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .sider___g53Yu {
        min-height: 100vh;
        box-shadow: 2px 0 6px rgba(0,21,41,.35);
        position: relative;
        z-index: 10;
    }
    .ant-layout-sider {
        position: relative;
        min-width: 0;
    }
    .ant-layout-content {
        flex: auto;
        overflow: auto;
        background-color: #F0F0F0;
    }
.logo___2J9hf {
    height: 64px;
    position: relative;
    line-height: 64px;
    padding-left: 16px;
    -webkit-transition: all .3s;
    transition: all .3s;
    background: #002140;
    overflow: hidden;
}
.logo___2J9hf h1, .logo___2J9hf img {
    display: inline-block;
    vertical-align: middle;
}
.logo___2J9hf img {
    height: 32px;
}
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
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    z-index: 6;
    .header{
        padding: 0 20px;
    }
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
.app-wrapper .el-select-dropdown__wraps {

  padding-bottom: 17px;
}
.app-wrapper .el-select-dropdown__list{
    padding: 0 !important;
}

.app-wrapper .el-navtop-search .el-input__inner {
    border-radius: 0; 
    padding: 0;
    height: 30px;
    border:none;
    border-bottom: 1px solid #F0F0F0;
  }
</style>
