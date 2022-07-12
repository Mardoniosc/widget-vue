<!-- eslint-disable vue/multi-word-component-names -->
<template lang="">
  <component :is="name" v-bind="$props"></component>
</template>
<script>

import Loading from './Loading.vue'
import Copy from './Copy.vue'
import ChevronDown from './ChevronDown.vue'
import Close from './Close.vue'
import Chat from './Chat.vue'
import ArrowRight from './ArrowRight.vue'

export default {

  components: {
    Loading,
    Copy,
    ChevronDown,
    Close,
    Chat,
    ArrowRight
  },
  props: {
    name: { type: String, required: true }
  }
}
</script>
