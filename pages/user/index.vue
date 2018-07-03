<template>
  <section class="container">
    <div>
      <h1 class="title animated pulse">
        users
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  head () {
    return {
      title: 'nuxt-test | users',
      meta: [
        {
          hid: `user description`,
          name: 'description',
          content: 'about content'
        },
        {
          hid: `user keywords`,
          name: 'keywords',
          keywords: 'user keywords'
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
