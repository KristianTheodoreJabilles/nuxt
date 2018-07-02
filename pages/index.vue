<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{name}}
      </h1>
      <!-- this component will only be rendered on client-side -->
      <!-- <no-ssr placeholder="Loading...">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </no-ssr> -->
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  head () {
    return {
      title: 'home',
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
