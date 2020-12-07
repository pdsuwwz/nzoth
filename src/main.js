import CustomButton from '@/components/CustomButton'

const install = function (Vue, options = {}) {
  Vue.component(CustomButton.name, CustomButton)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  install,
  CustomButton
}
