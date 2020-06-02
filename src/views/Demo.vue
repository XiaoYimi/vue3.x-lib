<template>
  <div>
    <comp-slot>
      <template v-slot:head>123</template>
      <template v-slot:main>456</template>
      <template v-slot:foot>789</template>
    </comp-slot>
  </div>
</template>

<script>
import { reactive } from 'vue'
import compSlot from './slot'

export default {
  name: 'Demo',
  components: { compSlot },
  setup () {
    const data = reactive({
    })

    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
