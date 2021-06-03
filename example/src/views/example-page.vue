<template>
  <div class="example-page-container">
    <h1>测试自定义组件</h1>
    <MyComponent />
  </div>
</template>

<script>
import MyComponent from 'example/components/MyComponent'

export default {
  name: 'ExamplePage',
  components: {
    MyComponent
  }
}
</script>
<style lang="scss" scoped>
.example-page-container {
  --color: 255, 0, 0;
  padding: 20px;
  color: rgb(var(--color), 0.4)
}
</style>
