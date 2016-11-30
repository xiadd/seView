<template>
  <div class="ui container">
    <h4>默认alert</h4>
    <p>包括三个属性：title，content和type</p>
    <se-alert
      title="测试alert"
      content="Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet">
    </se-alert>
    <h4>alert type</h4>
    <p>alert的属性有四大类：warning,info,error,success</p>
    <se-alert
      type="warning"
      title="warning"
      content="Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet">
    </se-alert>
    <se-alert
      type="success"
      title="success"
      content="Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet">
    </se-alert>
    <se-alert
      type="error"
      title="error"
      content="Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet">
    </se-alert>
    <se-alert
      type="info"
      title="info"
      content="Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet">
    </se-alert>
    <h4>除了上面四大类之外，还有颜色操控</h4>
    <se-alert
      type="red"
      title="red"
      content="Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet">
    </se-alert>
    <se-alert
      type="blue"
      title="blue"
      content="Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet">
    </se-alert>
    <p>....</p>
    <se-alert
      type="purple"
      title="purple"
      content="Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet">
    </se-alert>
    <h4>只包含title的alert</h4>
    <se-alert
      title="只包括title">
    </se-alert>
    <h4>只包含content的alert</h4>
    <se-alert
      content="只包括content">
    </se-alert>
    <h4>带icon的alert</h4>
    <se-alert
      icon="loading"
      title="title"
      content="Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet">
    </se-alert>
    <h4>可以关闭的alert</h4>
    <p>可以关闭的alert，提供了close的句柄</p>
    <se-alert
      :closeable="true"
      title="title"
      @close="close"
      content="Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet，Lorem ipsum dolor sit amet">
    </se-alert>
  </div>
</template>

<script>
export default {
  methods: {
    close(e) {
      console.log(e)
      alert('close')
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  text-align: left;
}
h4, p {
  text-align: center;
}
</style>
