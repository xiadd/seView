<template>
  <div class="ui tooltip" :data-tooltip="content" :data-position="position" ref="tooltip">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    let el = this.$refs.tooltip
    if (this.theme && this.theme === 'dark') {
      el.dataset.inverted = ''
    }
  },
  props: {
    content: String,
    position: String,
    theme: String //dark light
  }
}
</script>

<style lang="css" scoped>
.tooltip {
  display: inline-block;
}
</style>
