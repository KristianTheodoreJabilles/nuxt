<template>
  <section class="container">
    <div>
      <h1 class="title">{{name}}</h1>
      <Button text="Get Started" />
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Button from '~/components/Button.vue'

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
    AppLogo,
    Button
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
