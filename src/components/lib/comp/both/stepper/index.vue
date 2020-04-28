<template>
  <div :class="['stepper-wrap', data.type_class]">
    <button @click="dec" :id="'step-dec-' + data.salt" class="stepper-btn"></button>
    <input type="text" v-model="data.count" @change="inp" class="stepper-input">
    <button @click="inc" :id="'step-inc-' + data.salt" class="stepper-btn"></button>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
export default {
  name: 'Lib-Stepper',
  props: {
    count: { type: Number, default: 0 },
    step: { type: Number, default: 1 },
    min: { type: Number, default: -999999999999999 },
    max: { type: Number, default: 999999999999999 },
    type: { type: String, default: 'md' }
  },
  setup (props, { emit }) {
    const data = reactive({
      count: 0,
      type_class: computed(() => {
        console.log(props.type)
        return props.type === undefined ? 'stepper-md' : props.type === 'sm' ? 'stepper-sm' : props.type === 'lg' ? 'stepper-lg' : 'stepper-md'
      }),
      salt: Math.random().toString().slice(2, 8)
    })

    function dec () { dealCount(data.count -= props.step) }
    function inp () { dealCount(data.count) }
    function inc () { dealCount(data.count += props.step) }

    function dealCount (val) {
      let count = Number(val)
      count = isNaN(count) ? 0 : parseFloat(count.toFixed(2))
      let type = ''
      if (count <= props.min) {
        count = props.min
        type = 'min'
      } else if (count >= props.max) {
        count = props.max
        type = 'max'
      }
      data.count = count
      emit('change', data.count)
      dealBtnState(type)
    }

    function dealBtnState (type = '') {
      const decBtn = document.querySelector('#step-dec-' + data.salt)
      const incBtn = document.querySelector('#step-inc-' + data.salt)
      // 极值外禁用按钮操作
      if (type === 'min') {
        decBtn.setAttribute('disabled', true)
        decBtn.style.cursor = 'not-allowed'
      } else if (type === 'max') {
        incBtn.setAttribute('disabled', true)
        incBtn.style.cursor = 'not-allowed'
      } else if (type === '') {
        if (decBtn.getAttribute('disabled')) {
          decBtn.removeAttribute('disabled')
          decBtn.style.cursor = 'pointer'
        }
        if (incBtn.getAttribute('disabled')) {
          incBtn.removeAttribute('disabled')
          incBtn.style.cursor = 'pointer'
        }
      }
    }

    onMounted(() => {
      data.count = props.count
      dealCount(data.count)
    })

    return {
      data,
      dealCount,
      dealBtnState,
      dec,
      inp,
      inc
    }
  }
}
</script>

<style lang="scss" scoped>
.stepper-wrap {
  display: inline-flex;
  justify-content: center;

  .stepper-btn {
    box-sizing: border-box;
    position: relative;
    border: 1px solid #cecece;
    width: 1em;
    height: 1em;
    font-size: inherit;
    background-color: #eaeaea;
    outline: none;

    &:first-child, &:last-child {
      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: .4em;
        height: .05em;
        font-size: inherit;
        content: '';
        background-color: #333333;
        transform: translate(-.2em, -.025em);
      }
    }

    &:last-child {
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        width: .05em;
        height: .4em;
        font-size: inherit;
        content: '';
        background-color: #333333;
        transform: translate(-.025em, -.2em);
      }
    }

    &:active { background-color: #e0e0e0; }
  }

  .stepper-input {
    box-sizing: border-box;
    font-size: inherit;
    width: 5em;
    text-align: center;
  }
}

.stepper-sm {
  font-size: 24px;
  .stepper-input {
    height: 1.6;
    font-size: 15px;
  }
}
.stepper-md {
  font-size: 30px;
  .stepper-input {
    height: 1.875em;
    font-size: 16px;
  }
}
.stepper-lg {
  font-size: 36px;
  .stepper-input {
    height: 2em;
    font-size: 18px;
  }
}
</style>
