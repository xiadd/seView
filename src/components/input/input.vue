<template>
  <div class="ui input" :class="classes">
    <div class="ui label" v-if="label&&$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <i class="icon" :class="icon" v-if="icon"></i>
    <input type="text" :placeholder="placeholder" :value="value">
    <div class="ui label" v-if="label&&$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: String,
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String,
    iconPosition: String,
    size: String,
    label: Boolean,
  },
  computed: {
    classes() {
      return [
        this.size ? this.size : '',
        this.block ? 'fluid' : '',
        this.disabled ? 'disabled' : '',
        this.iconPosition && this.icon ? this.iconPosition : '',
        this.icon ? 'icon' : '',
        this.$slots.append ? 'right' : '',
        this.label ? 'labeled' : ''
      ]
    }
  }
}
</script>
