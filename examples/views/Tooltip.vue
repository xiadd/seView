<template>
  <div class="ui container">
    <h4>基本Tooltip</h4>
    <p>tooltip包含三个属性，conten,postion以及theme</p>
    <se-tooltip content="basic tooltip">
      <se-button>basic</se-button>
    </se-tooltip>
    <h4>place不同的tooltip</h4>
    <se-tooltip content="basic tooltip" position="top left">
      <se-button>top left</se-button>
    </se-tooltip>
    <se-tooltip content="basic tooltip" position="top center">
      <se-button>top center</se-button>
    </se-tooltip>
    <se-tooltip content="basic tooltip" position="top right">
      <se-button>top right</se-button>
    </se-tooltip>
    <se-tooltip content="basic tooltip" position="bottom left">
      <se-button>bottom left</se-button>
    </se-tooltip>
    <se-tooltip content="basic tooltip" position="bottom center">
      <se-button>bottom center</se-button>
    </se-tooltip>
    <se-tooltip content="basic tooltip" position="bottom right">
      <se-button>bottom right</se-button>
    </se-tooltip>
    <se-tooltip content="basic tooltip" position="right center">
      <se-button>right center</se-button>
    </se-tooltip>
    <se-tooltip content="basic tooltip" position="left center">
      <se-button>left center</se-button>
    </se-tooltip>
    <h4>不同主题的tooltip</h4>
    <p>theme属性设置tooltip的值，只能是dark或者light</p>
    <se-tooltip content="light tooltip" position="top center">
      <se-button>light(default)</se-button>
    </se-tooltip>
    <se-tooltip content="dark tooltip" position="top center" theme="dark">
      <se-button type="black">dark</se-button>
    </se-tooltip>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
