<template>
  <div class="ui container">
    <h4>栅格布局</h4>
    <p>row代表行，col代表列， span是列的宽度，16格布局，每个列之间有padding</p>
    <row>
      <se-col :span="1">1</se-col>
      <se-col :span="2">2</se-col>
      <se-col :span="3">3</se-col>
      <se-col :span="4">4</se-col>
      <se-col :span="5">5</se-col>
      <se-col :span="1">1</se-col>
    </row>
    <h4>col居中</h4>
    <p>center属性，默认为false，改为true则col居中</p>
    <row :center="true">
      <se-col :span="2"></se-col>
    </row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.grid {
  position: relative;
}
.grid:before {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #FAFAFA;
  content: '';
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  box-shadow: 0px 0px 0px 1px #DDDDDD inset;
}
.column:not(.row):not(.grid):after {
  background-color: rgba(86, 61, 124, .1);
  -webkit-box-shadow: 0px 0px 0px 1px rgba(86, 61, 124, 0.2) inset;
  box-shadow: 0px 0px 0px 1px rgba(86, 61, 124, 0.2) inset;
  content: "";
  display: block;
  min-height: 50px;
}
</style>
