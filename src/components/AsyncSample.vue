<template>
  <div>
    <button @click="fetchResults">fetchResults</button>
    {{ value }}
  </div>
</template>

<script>
import myAsync from '../async'

export default {
  name: 'AsyncSample',
  props: {
  },
  data () {
    return {
      value: null
    }
  },
  methods: {
    async fetchResults() {
      const response = await myAsync.get()
      this.value = response.data
    }
  }
}
</script>

<style scoped>
</style>
