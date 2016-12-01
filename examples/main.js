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
import Input from 'views/Input.vue'
import Tag from 'views/Tag.vue'
import Divider from 'views/Divider.vue'

import Alert from 'views/Alert.vue'
import Tooltip from 'views/Tooltip.vue'
import Popover from 'views/Popover.vue'

let routes = [
  { path: '/button', component: Button },
  { path: '/icon', component: Icon },
  { path: '/grid', component: Grid },
  { path: '/input', component: Input },
  { path: '/tag', component: Tag },
  { path: '/divider', component: Divider },
  { path: '/alert', component: Alert },
  { path: '/tooltip', component: Tooltip },
  { path: '/popover', component: Popover }
]

let router = new VueRouter({
    routes: routes
})

new Vue(Vue.util.extend({router}, App)).$mount('#app')
