import { version } from 'root/package.json'

import CustomButton from '@/components/CustomButton'

const install = function (Vue, options = {}) {
  Vue.component(CustomButton.name, CustomButton)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  install,
  CustomButton
}
