<template>
  <div id='app'>
    <div id='nav'>
      <router-link to='/'>Home</router-link> |
      <router-link to='/copy'>Copy of Home</router-link> |
      <router-link to='/about'>About</router-link> |
      <router-link to='/test/parameterName1'>Random 1</router-link> |
      <router-link to='/test/parameterName2'>Random 2</router-link> |
      <router-link to='/flex-box-playground'>Flexbox</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang='sass'>
@import './scss/style.scss'
</style>

<script>
export default {
  
}
</script>



