<template>
  <div @click="toggleSwitch"
    :class="['switch-wrap', data.state ? 'switch-on' : '']"
    :style="data.switchStyles" >
    <div class="switch-btn"></div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'Lib-Switch',
  props: {
    state: { type: Boolean, default: false },
    size: { type: Number, default: 32 },
    color: { type: String, default: 'pink' }
  },
  setup (props, { emit }) {
    const data = reactive({
      state: computed(() => props.state),
      switchStyles: computed(() => {
        let res = props.state ? 'background-color:' + props.color + ';' : ''
        res += props.size ? 'font-size:' + props.size + 'px;' : ''
        return res
      })
    })
    function toggleSwitch () { emit('change', !props.state) }
    return {
      data,
      toggleSwitch
    }
  }
}
</script>

<style lang="scss" scoped>
.switch-wrap {
  border: 1px solid #e0dede;
  border-radius: .5em;
  width: 2em;
  height: 1em;
  transition: background-color .3s;
  cursor: pointer;

  .switch-btn {
    box-sizing: border-box;
    border: 1px solid #e0dede;
    border-radius: .5em;
    width: 1em;
    height: 1em;
    font-size: inherit;
    background-color: #ffffff;
    transition: transform .3s;
    z-index: 2;
  }
}

.switch-on {
  .switch-btn { transform: translateX(1em); }
}
</style>
