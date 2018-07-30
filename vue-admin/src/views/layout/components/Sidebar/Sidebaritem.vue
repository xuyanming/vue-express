<template>
  <div class="menu-wrapper">
      
  </div>
</template>

<script>
import { generateTitle } from '@/utils/i18n'

export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasOneShowingChildren(children) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    },
    generateTitle
  },
  created(){
    console.log(this.routes)
  }
}
</script>

