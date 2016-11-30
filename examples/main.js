import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import seView from '../src/index'

Vue.use(VueRouter)
Vue.use(seView)

//引入视图文件
import Button from 'views/Button.vue'
import Icon from 'views/Icon.vue'
import Grid from 'views/Grid.vue'

let routes = [
  { path: '/button', component: Button },
  { path: '/icon', component: Icon },
  { path: '/grid', component: Grid }
]

let router = new VueRouter({
    routes: routes
})

new Vue(Vue.util.extend({router}, App)).$mount('#app')
