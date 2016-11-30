<template>
  <div class="ui divider" :class="{'horizontal': intro}">
    <slot v-if="intro"></slot>
  </div>
</template>

<script>
export default {
  props: {
    intro: Boolean
  }
}
</script>

<style lang="css">
</style>
