<template>
  <div class="popover">
    <div
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
      <slot></slot>
    </div>
    <div
    class="ui flowing popup transition popover-content visible"
    :class="classes"
    ref="pop">
      {{content}}
    </div>
  </div>
</template>

<script>

function verticalCenterItem (targetEl, sourceEl, pos) {
  if (pos.indexOf('top') !== -1 || pos.indexOf('bottom') !== -1) {
    var t_w = targetEl.clientWidth
    var s_w = sourceEl.clientWidth
  }
  if (pos.indexOf('left') !== -1 || pos.indexOf('right') !== -1) {
    var t_w = targetEl.clientHeight
    var s_w = sourceEl.clientHeight
  }



  let temp = (s_w - t_w)/2

  return -temp
}


export default {
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    content: String,
    position: {
      type: String,
      default: 'top center'
    }
  },
  data() {
    return {
      showPopover: false
    }
  },
  methods: {
    togglePopover(e) {

    },
    handleMouseEnter(e) {
      let center = verticalCenterItem(e.target, this.$refs.pop, this.position)
      this.$refs.pop.style.left = center + 'px'
      this.showPopover = true
    },
    handleMouseLeave(e) {
      console.log(1);
      this.showPopover = false
    },
  },
  computed: {
    classes() {
      let classPrefix = this.position.split(' ').join('-')
      return [
        this.showPopover ? 'show-popover' : 'hide-popover',
        this.position,
        `popover-content-${classPrefix}`
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.popover {
  display: inline-block;
}
.show-popover {
  opacity: 1
}

.hide-popover {
  opacity: 0
}
.popover {
  position: relative;
  display: inline-block;
}
.popover-content {
  top: inherit;
  bottom: inherit;
  right: inherit;
  bottom: inherit;
}

.popover-content-top-center {
  left: 0;
  bottom: 100%;
}

.popover-content-top-left {
  left: 0;
  bottom: 100%;
}
.popover-content-top-right {
  right: 0;
  bottom: 100%;
}
.popover-content-left-center {
  right: 0;
  bottom: 100%;
}
</style>
