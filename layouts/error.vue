<template>
  <section class="container">
    <div v-if="error.statusCode === 404">
      <h1 class="animated pulse"> {{error.statusCode}}</h1>
      <p class="subtitle">{{message}}</p>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  props: ['error'],
  data() {
    return {
      message: 'Oops, This page has gone off the grid.'
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background-image: url("~/assets/HL_did-you-know.svg");
    background-repeat: no-repeat;
    background-size: 33%;
    background-position: right bottom;
  }

  .subtitle {
    font-size: 30px;
  }
</style>
