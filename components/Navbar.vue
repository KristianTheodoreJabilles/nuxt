
<template>
  <header class="site-header">
    <nuxt-link to="/"><img class="logo" src="~/assets/logo_sg.svg"></nuxt-link>
    
    <nav class="site-nav">
      <ul>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link to="/user">Users</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
  .site-header {
    background: #34495e;
    color: white;
    display: flex;
    align-items: center;
    
    .logo {
      width: 180px;
    }
    padding: 20px 150px;
  }

  .site-nav {
    margin-left: 50px;
    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
      color: #CDD0D0;
      display: inline-block;
      margin-left: 20px;
    }
  }

  .dropdown {
    ul {
      display: none;
    }

  }
  .dropdown:hover
  {
    ul {
      list-style: none;
      display: block;
      li a{
        text-decoration: none;
        padding: 20px;
      }
    }
  }
</style>
