<template>
  <button class="ui button" :class="classes">
    <i class="icon" :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    plain: {
      type: Boolean,
      default: false
    },
    size: String,
    icon: String,
    loading: false
  },
  computed: {
    classes() {
      return [
        this.type ? this.type : '',
        this.size ? this.size : '',
        this.icon ? 'icon' : '',
        this.loading ? 'loading' : '',
        {
          'basic': this.plain
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
