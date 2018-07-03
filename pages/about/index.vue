<template>
  <section class="container">
    <div>
      <h1 class="title animated pulse">
        about
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  head () {
    return {
      title: 'nuxt-test | about',
      meta: [
        {
          hid: `about description`,
          name: 'description',
          content: 'about content'
        },
        {
          hid: `about keywords`,
          name: 'keywords',
          keywords: 'about keywords'
        }
      ]
    }
  },
  components: {
    AppLogo
  }
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>
