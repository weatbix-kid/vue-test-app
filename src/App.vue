<template>
  <div id='app'>
    <div id='nav'>
      <router-link to='/'>Home</router-link> |
      <router-link to='/about'>About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang='sass'>
@import './assets/scss/style.scss'
</style>

<script>
export default {
  // Move assets back to src and remove assets from path it constinues to be shit
}
</script>



