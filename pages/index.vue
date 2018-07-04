<template>
  <section class="container">
    <div>
      <h1 class="title">{{name}}</h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  head () {
    return {
      title: 'nuxt-test | home',
      meta: [
        {
          hid: `home content`,
          name: 'description',
          content: 'home content'
        },
        {
          hid: `home keywords`,
          name: 'keywords',
          keywords: 'home keywords'
        }
      ]
    }
  },
  components: {
    AppLogo
  },
  data () {
    return {
      name: '<moneysmart />'
    }
  }
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>
