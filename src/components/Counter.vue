<template>
  <div id="counter">
    <span class="count">{{ count }}</span>
    <button @click="countUp">カウントアップ</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    countUp() {
      this.count += 1;
    }
  }
}
</script>

<style scoped>
</style>
