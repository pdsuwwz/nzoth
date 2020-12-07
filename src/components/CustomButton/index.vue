<template>
  <div
    class="custom-button-container"
    :class="getType"
    @click="handleClick()"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    getType () {
      const list = ['primary']
      return list.includes(this.type)
        ? this.type
        : ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-button-container {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &+& {
    margin-left: 10px;
  }
  &.primary {
    color: #fff;
    border-color: #409eff;
    background-color: #409eff;
    &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
</style>
