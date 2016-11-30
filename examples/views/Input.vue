<template>
  <div class="ui container">
    <h4>基础input（inline-block）</h4>
    <p>通过placeholder属性设置placeholder</p>
    <se-input placeholder="search"></se-input>
    <h4>基础input（block）</h4>
    <p>设置block属性来确认是否为block</p>
    <se-input placeholder="search" :block="true"></se-input>
    <h4>禁止输入</h4>
    <p>disabled属性控制是否可以输入</p>
    <se-input placeholder="search" :disabled="true"></se-input>
    <p>block input 设置为disabled</p>
    <se-input placeholder="search" :block="true" :disabled="true"></se-input>
    <h4>带icon的input</h4>
    <p>通过icon设置图标，iconPosition 设置图标位置，默认为right 还有一个值为left</p>
    <se-input placeholder="search" icon="mail" icon-position="left"></se-input>
    <se-input placeholder="search" icon="mail"></se-input>
    <h4>不同尺寸的input</h4>
    <p>size的属性分别可为mini,small,large,big,huge,massive</p>
    <se-input size="mini" placeholder="mini"></se-input>
    <br>
    <br>
    <se-input size="small" placeholder="small"></se-input>
    <br>
    <br>
    <se-input size="large" placeholder="large"></se-input>
    <br>
    <br>
    <se-input size="big" placeholder="big"></se-input>
    <br>
    <br>
    <se-input size="huge" placeholder="huge"></se-input>
    <br>
    <br>
    <se-input size="massive" placeholder="massive"></se-input>
    <h4>带label的input</h4>
    <p>通过label属性设置是否带label，slot确认label的位置，有左边或者右边</p>
    <se-input placeholder="search" :label="true">
      <template slot="prepend">https://</template>
    </se-input>
    <se-input placeholder="search" :label="true" v-model="input">
      <template slot="append">{{input}}</template>
    </se-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang="css">
</style>
