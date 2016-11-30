<template>
  <div id="app">
    <div class="nav">
      <se-button :plain="true" @click.native="navicate">icon</se-button>
      <se-button :plain="true" @click.native="navicate">button</se-button>
      <se-button :plain="true" @click.native="navicate">grid</se-button>
      <se-button :plain="true" @click.native="navicate">input</se-button>
      <se-button :plain="true" @click.native="navicate">tag</se-button>
      <se-button :plain="true" @click.native="navicate">divider</se-button>
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
  margin-top: 60px;
}
body {
  background: #f8f8f8
}
h1,h2,h3,h4,h5,h6,p,span {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif;
  color: #555;
}
</style>
