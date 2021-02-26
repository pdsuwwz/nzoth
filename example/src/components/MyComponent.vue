<template>
  <div class="my-component-container">
    <CustomButton
      @click="handleClick('Button 1')"
    >
      Button 1
    </CustomButton>
    <CustomButton
      type="primary"
      @click="handleClick('Button 2')"
    >
      Button 2
    </CustomButton>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  methods: {
    handleClick (button) {
      alert(`自定义组件 ${button}`)
    }
  }
})
</script>

<style lang="scss" scoped>
.my-component-container {

}
</style>
