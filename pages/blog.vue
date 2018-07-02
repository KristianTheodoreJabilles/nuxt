<template>
  <section class="container">
    <div>
      <h1 class="title animated pulse">
        blog
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  head () {
    return {
      title: 'blog',
      meta: [
        {
          hid: `blog description`,
          name: 'description',
          content: 'blog content'
        },
        {
          hid: `blog keywords`,
          name: 'keywords',
          keywords: 'blog keywords'
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
