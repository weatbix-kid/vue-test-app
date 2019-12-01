<template>
  <div class='home'>
    <!-- <img alt='Vue logo' src='../assets/logo.png'> -->
    <HelloWorld @incValEvent='incrementCount' msg='Hover me boi!'/>
    <div>{{ currentCount }}</div>
    <div class='ui-block-lg default' style="text-align:center;">
      <input v-model='phrase' type='text' placeholder='Type here'/>
      <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-around;">
        <button class='ui-button-sm red' @click="incrementCount">Yee haaw brother</button>
        <button class='ui-button-sm blue' @click="incrementCount">Yee haaw brother</button>
        <button class='ui-button-sm green' @click="incrementCount">Yee haaw brother</button>
        <button class='ui-button-sm yellow' @click="incrementCount">Yee haaw brother</button>
        <button class='ui-button-sm default' @click="incrementCount">Yee haaw brother</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      phrase: 'Yeee haww',
      counter: 0,
    }
  },
  methods: {
    incrementCount(){
      this.counter++
    }
  },
  computed: {
    currentCount() {
      return `${this.phrase} we at ${this.counter} yee haws`
    } 
  },
  mounted() {
    console.log(`HELLO:${process.env.VUE_APP_HELLO} SECRET:${process.env.VUE_APP_SECRET}`)
  }
}
</script>
