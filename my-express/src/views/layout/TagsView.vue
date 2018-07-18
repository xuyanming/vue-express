<template>
 <div class="tags-view">
    <div class="tags-view-container" ref="scrollCon" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll">
        <div class="close-all-tag-con">
            <el-dropdown placement="bottom"  @command="handleCommand">
                <span class="el-dropdown-link">
                    标签选项<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="clearAllTags">关闭所有</el-dropdown-item>
                    <el-dropdown-item command="clearOtherTags">关闭其他</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div ref="scrollBody" class="tags-inner-scroll-body" :style="{left: tagBodyLeft + 'px'}" >
            <el-tag style="cursor: pointer;"
            @click.native="routerpath(tag)"
            :key="index"
            :type="routers.name == tag.name ? '' : 'info'"
            v-for="(tag,index) in pageTagsList"
            :closable="tag.name !== 'homeindex'"
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag.meta.title}}
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
        tagBodyLeft: 0,
    }
  },
  props: {
        pageTagsList: Array,
        routers:{}
    },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    routerpath(val){
        this.$router.push(val.path)
    },
    handleCommand(val){
        if (val === 'clearAllTags') {
            this.$store.commit('clearAllTags');
            this.$router.push('/');
        } else {
            this.$store.commit('clearOtherTags', this);
        }
        this.tagBodyLeft = 0;
    },
   handleClose(tag) {
        this.$store.commit('removeTag',{tag:tag.name,_this:this});
    },
    handlescroll (e) {
            var type = e.type;
            let delta = 0;
            if (type === 'DOMMouseScroll' || type === 'mousewheel') {
                delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40;
            }
            let left = 0;
            if (delta > 0) {
                left = Math.min(0, this.tagBodyLeft + delta);
            } else {
                if (this.$refs.scrollCon.offsetWidth - 100 < this.$refs.scrollBody.offsetWidth) {
                    if (this.tagBodyLeft < -(this.$refs.scrollBody.offsetWidth - this.$refs.scrollCon.offsetWidth + 100)) {
                        left = this.tagBodyLeft;
                    } else {
                        left = Math.max(this.tagBodyLeft + delta, this.$refs.scrollCon.offsetWidth - this.$refs.scrollBody.offsetWidth - 100);
                    }
                } else {
                    this.tagBodyLeft = 0;
                }
            }
            this.tagBodyLeft = left;
        },
  }
  
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tags-view{
    background: #f0f0f0;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    z-index: 5;
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
            width: 100px;
            height: 100%;

            font-size: 12px;
            background: white;
            box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
            z-index: 10;
        }  
    }
}
.tags-inner-scroll-body .el-tag:hover{
    border: 1px solid #409EFF;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
</style>
