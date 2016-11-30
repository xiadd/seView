<template>
  <div class="ui container">
    <h4>基础tag</h4>
    <p>配置颜色主题type，颜色参考下面</p>
    <se-tag>default</se-tag>
    <se-tag type="red">red</se-tag>
    <se-tag type="orange">orange</se-tag>
    <se-tag type="yellow">yellow </se-tag>
    <se-tag type="olive">olive</se-tag>
    <se-tag type="green">green</se-tag>
    <se-tag type="teal">teal</se-tag>
    <se-tag type="blue">blue</se-tag>
    <se-tag type="violet">violet</se-tag>
    <se-tag type="purple">purple</se-tag>
    <se-tag type="pink">pink</se-tag>
    <se-tag type="brown">brown</se-tag>
    <se-tag type="grey">grey</se-tag>
    <se-tag type="black">black</se-tag>
    <h4>带icon的tag</h4>
    <p>传入icon属性进行配置，icon可参考icon页</p>
    <se-tag icon="cloud">cloud</se-tag>
    <se-tag icon="mail" type="red">mail</se-tag>
    <se-tag icon="facebook" type="blue">facebook</se-tag>
    <h4>可关闭的tag</h4>
    <p>可以直接关闭，但是也给了回调函数close</p>
    <se-tag :closeable="true">closeable</se-tag>
    <se-tag :closeable="true" type="blue" @close="onClose">closeable</se-tag>
  </div>

</template>

<script>
export default {
  methods: {
    onClose() {
      alert('closed')
    }
  }
}
</script>

<style lang="css">
</style>
