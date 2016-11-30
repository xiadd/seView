<template>
  <a class="ui label" :class="type" v-if="!close">
    <i class="icon" v-if="icon" :class="icon"></i>
    <slot></slot>
    <i class="delete icon" v-if="closeable" @click="closeTag"></i>
  </a>
</template>

<script>
export default {
  props: {
    closeable: {
      type: Boolean,
      default: false
    },
    icon: String,
    type: String //theme
  },
  data() {
    return {
      close: false
    }
  },
  methods: {
    closeTag(e) {
      this.close ? this.close = false : this.close = true
      this.$emit('close', e)
    }
  }
}
</script>

<style lang="css">
</style>
