<template>
  <section class="wizard-container">
    <form-wizard
    ref="form-wizard"
    stepSize="xs"
    color="#8dc63f"
    title=""
    subtitle="">
      <tab-content v-for="(question, index) in questions" :key="index">
        <Card :data="question"/>
      </tab-content>
    </form-wizard>
  </section>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  head () {
    return {
      title: 'nuxt-test | wizard',
      meta: [
        {
          hid: `wizard description`,
          name: 'description',
          content: 'wizard content'
        },
        {
          hid: `wizard keywords`,
          name: 'keywords',
          keywords: 'wizard keywords'
        }
      ]
    }
  },
  components: {
    Card
  },
  methods: {
    next() {
      this.$refs['form-wizard'].nextTab();
    }
  },
  data () {
    return {
      questions: [
        {
          question: 'What can we help you with today?',
          buttons: ['Purchase', 'Refinancing']
        },
        {
          question: 'We need to know you much better.',
          buttons: ['Agent', 'Home Buyer']
        },
        {
          question: 'How much do you know about home loans?',
          buttons: ['Expert', 'Beginner']
        },
        {
          question: 'What do you want to buy',
          buttons: ['Condo', 'HDB', 'Landed Property']
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .wizard-container {
    padding: 200px;

    .wizard-icon-circle {
      display: none;
    }

    .wizard-progress-with-circle {
      margin-left: 10%;
    }
  }

  // .wizard-header,
  .wizard-card-footer {
    display: none;
  }
</style>
