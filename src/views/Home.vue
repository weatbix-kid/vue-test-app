<template>
  <div class='home'>
    <div v-if="!loading">
      {{ info.USD }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      info: '',
      loading: '',
      errored: ''
    }
  },
  methods: {
    // Methods
  },
  computed: {
    // Computed
  },
  mounted() {
    console.log('Hola ma mia');
    
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>
