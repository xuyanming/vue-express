<template>
  <section >
    <transition name="fade" mode="out-in">
        <div style="    margin: 10px;">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
      
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppView',
  computed: {
  }
}
</script>
