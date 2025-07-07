<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar class="tabbar"/>
  </div>
</template>

<script>
//author: 陈一鸣
import Tabbar from './components/tabbar.vue';
export default {
  name: 'App',
  components: {
    Tabbar
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.tabbar{
  position: fixed;
  bottom: 0px;
}
</style>
