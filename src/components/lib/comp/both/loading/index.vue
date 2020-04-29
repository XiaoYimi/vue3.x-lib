<template>
  <ul
    :class="['loading', data.anim_type ? data.ul_class : '']"
    :style="data.ul_styles">
    <li
      v-for="(item, index) of data.count"
      :key="index"
      :class="['loading-item', data.anim_type ? data.li_class : '']"
      :style="item.styles"></li>
  </ul>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'Loading-Default',
  props: {
    boxR: { type: Number, default: 16 },
    dotR: { type: Number, default: 6 }, // 6
    count: { type: Number, default: 8 },
    color: { type: String, default: 'pink' },
    // 圆点大小
    size: { type: Number, default: 16 },
    type: { type: String, default: 'rorating-waving' },
    duration: { type: Number, default: 5 }
  },
  setup (props) {
    const data = reactive({
      ul_styles: '',
      ul_class: '',
      li_class: '',
      anim_type: computed(() => {
        // 动画类型
        const anims = ['-opaciting', '-widthing', '-waving', 'rorating-pendulum', 'rorating-opaciting', 'rorating-widthing', 'rorating-waving']
        let types = 'rorating-waving'
        types = props.type === undefined ? types : props.type
        types = (anims.filter(item => item === types)[0]) ? types : 'rorating-waving'
        types = types.split('-')
        data.ul_class = types[0]
        data.li_class = types[1]
        return props.type
      }),
      count: computed(() => {
        // 数学知识 1 rad = Math.PI / 180, 1° = 180 / Math.PI.
        // 坐标 x = Math.cos(rad_value) * boxR, y = Math.sin(rad_value) * boxR
        const res = []
        const boxR = props.boxR
        const dotR = props.dotR
        const sigleDeg = 360 / props.count
        const sigleRad = Math.PI * sigleDeg / 180
        for (let i = 0; i < props.count; i++) {
          res[i] = {
            oDeg: sigleDeg * i,
            oRad: sigleRad * i,
            ox: Math.cos(sigleRad * i) * boxR,
            oy: Math.sin(sigleRad * i) * boxR,
            // 由中心平移到原点(0,0) => (boxR + boxR / 4), 圆点的偏移量 => (dotR / 2)
            realX: Math.cos(sigleRad * i) * boxR + (boxR + boxR / 4) - (dotR / 2),
            realY: Math.sin(sigleRad * i) * boxR + (boxR + boxR / 4) - (dotR / 2)
          }
          // res[i].styles = 'transform: translate(' + (Math.cos(sigleRad * i) * boxR - dotR / 2) + 'px,' + (Math.sin(sigleRad * i) * boxR - dotR / 2) + 'px);font-size:' + dotR + 'px;background-color:' + props.color + ';'
          // 考虑到动画会用到 transform 属性,故 只能通过定位设置偏移量, 避免 transform: translate 被 transform: scale 覆盖
          res[i].styles = 'font-size:' + dotR + 'px;background-color:' + props.color + ';'
          res[i].styles += 'left:' + res[i].realX + 'px;top:' + res[i].realY + 'px;'

          // 动画配置
          if (data.li_class === 'waving') {
            res[i].styles += 'animation-delay:' + (0.1 * i - props.count / 10).toFixed(1) + 's;'
          } else if (data.li_class === 'pendulum') {
            if (i !== 0) {
              res[i].styles += 'transform: scale(' + (1 / dotR * i) + ')'
            }
          }
        }
        data.ul_styles = 'font-size:' + boxR + 'px;' + 'animation-duration:' + props.duration + 's;'
        return res
      })
    })
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
// ul 动画
@keyframes rorating {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

// li 动画
@keyframes opaciting {
  0%, 100% { opacity: 1; }
  40% {opacity: 0; }
}
@keyframes widthing {
  0%, 100% { transform: scale(.5); }
  50% { transform: scale(1); }
}
@keyframes waving {
  0%, 100% { transform: scale(.5); }
  50% { transform: scale(1); }
}
@keyframes pendulum {}

.loading {
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 2.5em;
  height: 2.5em;
  list-style: none;

  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  .loading-item {
    font-size: 14px;
    background-color: yellow;

    box-sizing: border-box;
    position: absolute;
    border-radius: .5em;
    width: 1em;
    height: 1em;

    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .opaciting { animation-name: opaciting; }
  .widthing { animation-name: widthing; }
  .waving { animation-name: waving; }
  .pendulum { animation-name: pendulum; }
}

.rorating { animation-name: rorating; }
</style>
