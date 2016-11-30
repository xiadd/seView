<template>
  <div class="ui container">
    <h4>默认divider</h4>
    <se-divider></se-divider>
    <h4>带简介的divider</h4>
    <p>通过设置intro来确认是否带内容</p>
    <p>注意：如果设置intro为true那么必须在divider里加上内容，否则divider不生效</p>
    <se-divider :intro="true">OR</se-divider>
    <h4>带icon的divider</h4>
    <se-divider :intro="true">
      <i class="bar chart icon"></i>
    </se-divider>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
