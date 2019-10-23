<template>
  <div id="app">
    <div>
      <!-- <Home></Home> -->
      <router-view/>

    </div>
  </div>
</template>

<script>
import Home from '@/components/home'
import rem from './rem'
export default {
  name: 'App',
  components:{ Home }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
</style>
