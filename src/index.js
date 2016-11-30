import { Button, ButtonGroup } from 'components/button'
import { Row, Col } from 'components/layout'
import Tag from 'components/tag'
import Divider from 'components/divider'
import Input from 'components/input'
import Alert from 'components/alert'

const seView = {
  SeButton: Button,
  ButtonGroup,
  Row,
  SeCol: Col,
  SeTag: Tag,
  SeDivider: Divider,
  SeInput: Input,
  SeAlert: Alert
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
