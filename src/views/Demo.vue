<template>
  <div>
    <div class="demo">
      <lib-switch
        :state="data.switchState"
        @change="toggleSwitch"
        ></lib-switch>
    </div>
    <div class="demo">
      <lib-stepper
        type="sm"
        :count="data.stepperCount"
        :step="3"
        @change="steperChange"
        ></lib-stepper>

      <lib-stepper
        type="md"
        :count="data.stepperCount"
        :step="3"
        @change="steperChange"
        ></lib-stepper>

      <lib-stepper
        type="lg"
        :count="data.stepperCount"
        :step="3"
        @change="steperChange"
        ></lib-stepper>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

import LibSwitch from '../components/lib/comp/both/switch/index'
import LibStepper from '../components/lib/comp/both/stepper/index'
export default {
  name: 'Demo',
  components: {
    LibSwitch,
    LibStepper
  },
  setup () {
    const data = reactive({
      switchState: false,
      stepperCount: 4
    })

    function toggleSwitch (state) {
      console.log(state)
      data.switchState = state
    }

    function steperChange (count) {
      console.log(count)
      data.stepperCount = count
    }

    return {
      data,
      toggleSwitch,
      steperChange
    }
  }
}
</script>

<style lang="scss" scoped>
.demo { padding: 30px 0; }
</style>
