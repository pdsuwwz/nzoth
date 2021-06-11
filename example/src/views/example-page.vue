<template>
  <div class="example-page-container">
    <h1>{{ title }}</h1>
    <MyComponent />
  </div>
  <fm-button
    type="primary"
    class="git"
    size="lg"
    icon="fm-icon-eye"
    round
    plain
  >
    Watch
  </fm-button>
</template>

<script>
import MyComponent from 'example/components/MyComponent'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ExamplePage',
  components: {
    MyComponent
  },
  setup () {
    const title = ref('测试自定义组件')
    return {
      title
    }
  }
})
</script>
<style lang="scss" scoped>
.example-page-container {
  --color: 250, 0, 0;
  padding: 20px;
  color: rgb(var(--color), 0.4)
}
</style>
