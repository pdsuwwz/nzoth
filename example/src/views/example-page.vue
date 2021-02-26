<template>
  <div class="example-page-container">
    <h1>{{ title }}</h1>
    <MyComponent />
  </div>
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
  padding: 20px;
}
</style>
