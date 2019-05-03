<template>
  <div class="hello">
    <h1 @mouseover="getHoveredOver">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getHoveredOver(){
      this.$emit('incValEvent')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

