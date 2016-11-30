<template>
  <div class="ui grid" :class="classes">
    <div class="row">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        this.center ? 'centered' : ''
      ]
    }
  }
}
</script>
