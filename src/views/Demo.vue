<template>
  <div>
    <lib-v-navbar
      @tabchange="tabchange1">
      {{ data.vNavbarContent }}
    </lib-v-navbar>
    <div class="demo">
      <lib-navbar navbar-color="#ffffff" navbar-bg :space="12" tab-icon-color="red" @tabchange="tabChange"></lib-navbar>
    </div>
    <div class="demo">
      <lib-search bg="yellow" type="fillet" @search="searchWhat"></lib-search>
    </div>
    <div class="demo">
      <loading-default></loading-default>
      <loading-wave></loading-wave>
    </div>
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
import LoadingDefault from '../components/lib/comp/both/loading/index'
import LoadingWave from '../components/lib/comp/both/loading/wave'
import LibSearch from '../components/lib/comp/h5/search/index'
import LibNavbar from '../components/lib/comp/h5/navbar/index'
import LibVNavbar from '../components/lib/comp/h5/navbar/vnavbar'

export default {
  name: 'Demo',
  components: {
    LibSwitch,
    LibStepper,
    LoadingDefault,
    LoadingWave,
    LibSearch,
    LibNavbar,
    LibVNavbar
  },
  setup () {
    const data = reactive({
      switchState: false,
      stepperCount: 4,
      vNavbarContent: 'demo'
    })

    function toggleSwitch (state) {
      console.log(state)
      data.switchState = state
    }

    function steperChange (count) {
      console.log(count)
      data.stepperCount = count
    }

    function tabChange (item) {
      console.log(item)
    }

    function tabchange1 (item) {
      console.log(item)
      data.vNavbarContent = item.name
    }

    function searchWhat (word) {
      console.log(word)
    }

    return {
      data,
      toggleSwitch,
      steperChange,
      tabChange,
      tabchange1,
      searchWhat
    }
  }
}
</script>

<style lang="scss" scoped>
.demo { padding: 30px 0; }
</style>
