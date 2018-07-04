
<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            {{data.question}}
          </p>
        </div>
      </div>
    </article>
    <br/>
    <div class="field is-grouped">
      <p class="control" v-for="button in data.buttons" :key="button">
        <a class="button is-primary" @click="next">{{button}}</a>
      </p>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  props: ['data'],
  methods: {
    next() {
      this.$parent.$parent.$parent.$refs['form-wizard'].nextTab();
    }
  },
  mounted(){
    console.log(this)
  }
}
</script>

<style lang="scss">
  .box {
    margin-top: 20px;
  }
</style>
