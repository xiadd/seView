import Button from 'components/button'

const seView = {
  SeButton: Button
}

const install = function (Vue) {
  Object.keys(seView).forEach((key) => {
      Vue.component(key, seView[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

module.exports = Object.assign(seView, {install})