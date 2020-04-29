<template>
  <ul class="wave">
    <li
      v-for="(item, index) of data.count"
      :key="index"
      class="wave-item"
      :style="item.styles"></li>
  </ul>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'Loading-Wave',
  props: {
    count: { type: Number, default: 5 },
    color: { type: String, default: 'pink' },
    size: { type: Number, default: 24 },
    duration: { type: Number, default: 1 },
    space: { type: Number, default: 2 }
  },
  setup (props) {
    const data = reactive({
      count: computed(() => {
        const res = []
        for (let i = 0; i < props.count; i++) {
          res[i] = { styles: 'background-color:' + props.color + ';' }
          const animsing = i === 0 ? 'animation-duration:' + props.duration + 's;animation-delay:' + (props.duration) + 's;' : 'animation-duration:' + props.duration + 's;animation-delay:' + (0.1 * i - props.duration) + 's;'
          res[i].styles += animsing
        }
        return res
      })
    })

    return { data }
  }
}
</script>

<style lang="scss" scoped>
@keyframes waving {
  0%, 40%, 100% { transform: scaleY(0.4) }
  20% { transform: scaleY(1); }
}

.wave {
  font-size: 16px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  .wave-item {
    margin: 0 0.1em;
    width: .35em;
    height: 1.5em;
    background-color: pink;
    animation: waving 1s infinite;
    animation-timing-function: linear;
  }
}
</style>
