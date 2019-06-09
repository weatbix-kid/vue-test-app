<template>
  <div class='home'>
    <div v-if="!loading">
      {{ info.USD }}

      HELLO: {{ hello }}
      SECRET: {{ secret }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { log } from 'util';

export default {
  name: 'home',
  data() {
    return {
      info: '',
      loading: '',
      errored: '',
      hello: '',
      secret: ''
    }
  },
  methods: {
    // Methods
  },
  computed: {
    // Computed
  },
  mounted() {
    this.hello = process.env.VUE_APP_HELLO
    this.secret = process.env.VUE_APP_SECRET
    console.log(`ID:${process.env.VUE_APP_OD_API_ID} KEY:${process.env.VUE_APP_OD_API_KEY}`);
    
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
