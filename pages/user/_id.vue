<template>
  <section class="container">
    <div>
      <h1 class="title animated pulse">
        user {{$route.params.id}}
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  head () {
    return {
      title: 'nuxt-test | user info',
      meta: [
        {
          hid: `user info description`,
          name: 'description',
          content: 'about content'
        },
        {
          hid: `user info keywords`,
          name: 'keywords',
          keywords: 'user info keywords'
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
