<template>
  <div id="app">
    <div class="nav">
      <b>basic:</b>
      <se-button :plain="true" @click.native="navicate">icon</se-button>
      <se-button :plain="true" @click.native="navicate">button</se-button>
    </div>
    <div class="nav">
      <b>layout:</b>
      <se-button :plain="true" @click.native="navicate">grid</se-button>
    </div>
    <div class="nav">
      <b>data:</b>
      <se-button :plain="true" @click.native="navicate">input</se-button>
      <se-button :plain="true" @click.native="navicate">tag</se-button>
    </div>
    <div class="nav">
      <b>view:</b>
      <se-button :plain="true" @click.native="navicate">divider</se-button>
      <se-button :plain="true" @click.native="navicate">alert</se-button>
      <se-button :plain="true" @click.native="navicate">message</se-button>
      <se-button :plain="true" @click.native="navicate">notice</se-button>
      <se-button :plain="true" @click.native="navicate">tooltip</se-button>
      <se-button :plain="true" @click.native="navicate">popover</se-button>
    </div>
    <h1>{{$route.path.slice(1)}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    navicate (e) {
      this.$router.push({path: '/' + e.target.innerText})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 20px;
}
body {
  background: #f8f8f8;
  padding-top: 60px;
}
h1,h2,h3,h4,h5,h6,p,span, div {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif!important;
  color: #555;
}
.nav {
  padding: 10px;
  margin: 0 auto
}
</style>
