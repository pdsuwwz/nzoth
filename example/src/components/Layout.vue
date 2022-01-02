<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout'
})
</script>
