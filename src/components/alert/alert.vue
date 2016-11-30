<template>
  <div class="ui message" :class="classes" v-if="close">
    <i class="notched circle icon" v-if="!!this.icon" :class="icon"></i>
    <i class="close icon" v-if="closeable" @click="closeAlert"></i>
    <div class="content">
      <div class="header" v-if="title">
        {{title}}
      </div>
      <p v-if="content">{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeable: {
      type: Boolean,
      default: false
    },
    icon: String,
    type: String,
    title: String,
    content: String
  },
  data() {
    return {
      close: true
    }
  },
  computed: {
    classes() {
      return [
        !!this.icon ? 'icon' : '',
        !!this.type ? this.type : ''
      ]
    }
  },
  methods: {
    closeAlert(e) {
      this.close = false
      this.$emit('close', e)
    }
  }
}
</script>
