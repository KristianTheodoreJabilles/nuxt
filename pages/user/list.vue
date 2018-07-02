<template>
  <section class="container">
    <div>
      <h1 class="title animated pulse">
        user list
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  head () {
    return {
      title: 'user list',
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: 'about content'
        },
        {
          hid: `keywords`,
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
