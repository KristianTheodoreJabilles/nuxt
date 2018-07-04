<template lang="pug">
  div
    include ../node_modules/rocketship/src/_components/atoms/button/button
    +button({
      "modifierScss": "primary",
      "label": "Normal Button",
      "id": "",
      "text": "Get Started",
      "type": "button",
      "link": "/link/to/content",
      "isPressed": "false"
    })
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      spec: {
        "modifierScss": "primary",
        "label": "Normal Button",
        "id": "",
        "text": this.text,
        "type": "button",
        "link": "/link/to/content",
        "isPressed": "false"
      }
    }
  }
}
</script>
