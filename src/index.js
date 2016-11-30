import { Button, ButtonGroup } from 'components/button'
import { Row, Col } from 'components/layout'

const seView = {
  SeButton: Button,
  ButtonGroup,
  Row,
  SeCol: Col
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
