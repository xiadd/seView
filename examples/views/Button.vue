<template>
  <div class="">
    <div class="show-button">
      <h4>基本按钮：</h4>
      <p>通过plain属性设置default或者basic按钮</p>
      <se-button>default</se-button>
      <se-button :plain="true">basic</se-button>
    </div>
    <div class="show-button">
      <h4>带颜色的basic按钮</h4>
      <p>通过type设置按钮颜色</p>
      <se-button type="red" :plain="true">red</se-button>
      <se-button type="orange" :plain="true">orange</se-button>
      <se-button type="yellow" :plain="true">yellow</se-button>
      <se-button type="olive" :plain="true">olive</se-button>
      <se-button type="green" :plain="true">green</se-button>
      <se-button type="teal" :plain="true">teal</se-button>
      <se-button type="blue" :plain="true">blue</se-button>
      <se-button type="violet" :plain="true">violet</se-button>
      <se-button type="purple" :plain="true">purple</se-button>
      <se-button type="pink" :plain="true">pink</se-button>
      <se-button type="brown" :plain="true">brown</se-button>
      <se-button type="grew" :plain="true">grew</se-button>
      <se-button type="black" :plain="true">black</se-button>
      <h4>带颜色的default按钮</h4>
      <se-button type="red">red</se-button>
      <se-button type="orange">orange</se-button>
      <se-button type="yellow">yellow</se-button>
      <se-button type="olive">olive</se-button>
      <se-button type="green">green</se-button>
      <se-button type="teal">teal</se-button>
      <se-button type="blue">blue</se-button>
      <se-button type="violet">violet</se-button>
      <se-button type="purple">purple</se-button>
      <se-button type="pink">pink</se-button>
      <se-button type="brown">brown</se-button>
      <se-button type="grew">grew</se-button>
      <se-button type="black">black</se-button>
    </div>
    <div class="show-button">
      <h4>不同尺寸的按钮：</h4>
      <p>通过size设置按钮尺寸</p>
      <se-button size="mini">mini</se-button>
      <se-button size="tiny">tiny</se-button>
      <se-button size="small">small</se-button>
      <se-button size="medium">medium</se-button>
      <se-button size="large">large</se-button>
      <se-button size="big">big</se-button>
      <se-button size="huge">huge</se-button>
      <se-button size="massive" type="pink">massive</se-button>
    </div>
    <div class="show-button">
      <h4>图标按钮：</h4>
      <se-button icon="cloud"></se-button>
      <se-button type="blue" icon="cloud">cloud</se-button>
    </div>
    <div class="show-button">
      <h4>加载中的按钮：</h4>
      <se-button type="blue" icon="cloud" :loading="true">cloud</se-button>
    </div>
    <div class="show-button">
      <h4>按钮组</h4>
      <button-group>
        <se-button icon="cloud" type="blue"></se-button>
        <se-button>2</se-button>
        <se-button>3</se-button>
      </button-group>
      <button-group>
        <se-button icon="left arrow">prev</se-button>
        <se-button>next <i class="right arrow icon"></i></se-button>
      </button-group>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
.show-button {
  margin-top: 10px;
}
</style>
