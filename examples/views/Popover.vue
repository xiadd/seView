<template>
  <div class="ui container">
    <h4>不同位置的popover</h4>
    <se-popover
    content="popover"
    position="top left">
      <se-button :plain="false" type="blue">popover</se-button>
    </se-popover>
    <se-popover
    content="popover"
    position="top center">
      <se-button :plain="false" type="blue">popover</se-button>
    </se-popover>
    <se-popover
    content="popover"
    position="top right">
      <se-button :plain="false" type="blue">popover</se-button>
    </se-popover>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
