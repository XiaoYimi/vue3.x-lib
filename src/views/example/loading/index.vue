<template>
  <div class="page">
    <div class="page-title">组件 Loading</div>

    <section class="demo">
      <p class="demo-title">默认</p>
      <div class="demo-item">
        <p class="demo-desc">comp loading-default </p>
        <lib-loading-default></lib-loading-default>
      </div>
      <div class="demo-item">
        <p class="demo-desc">comp loading-wave </p>
        <lib-loading-wave></lib-loading-wave>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-default 设置 boxR: 10, dotR: 4; 实际宽度为 boxR * 2.5 </p>
      <div class="demo-item">
        <lib-loading-default :boxR="10" :dotR="4"></lib-loading-default>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-default 设置 count: 10</p>
      <div class="demo-item">
        <lib-loading-default :count="10"></lib-loading-default>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-default 设置 color: blueviolet</p>
      <div class="demo-item">
        <lib-loading-default color="blueviolet"></lib-loading-default>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-default 设置 type: -opaciting</p>
      <div class="demo-item">
        <lib-loading-default type="-opaciting"></lib-loading-default>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-default 设置 type: -widthing</p>
      <div class="demo-item">
        <lib-loading-default type="-widthing"></lib-loading-default>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-default 设置 type: -waving</p>
      <div class="demo-item">
        <lib-loading-default type="-waving"></lib-loading-default>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-default 设置 type: rorating-pendulum</p>
      <div class="demo-item">
        <lib-loading-default type="rorating-pendulum"></lib-loading-default>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-default 设置 type: rorating-opaciting</p>
      <div class="demo-item">
        <lib-loading-default type="rorating-opaciting"></lib-loading-default>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-default 设置 type: rorating-widthing</p>
      <div class="demo-item">
        <lib-loading-default type="rorating-widthing"></lib-loading-default>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-default 设置 type: rorating-waving</p>
      <div class="demo-item">
        <lib-loading-default type="rorating-waving"></lib-loading-default>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-default 设置 duration: 1</p>
      <div class="demo-item">
        <lib-loading-default :duration="1"></lib-loading-default>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-wave 设置 count: 8</p>
      <div class="demo-item">
        <lib-loading-wave :count="8"></lib-loading-wave>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-wave 设置 color: blueviolet</p>
      <div class="demo-item">
        <lib-loading-wave color="blueviolet"></lib-loading-wave>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-wave 设置 size: 8</p>
      <div class="demo-item">
        <lib-loading-wave :size="8"></lib-loading-wave>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-wave 设置 size: 3</p>
      <div class="demo-item">
        <lib-loading-wave :space="3"></lib-loading-wave>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">loading-wave 设置 duration: 2</p>
      <div class="demo-item">
        <lib-loading-wave :duration="2"></lib-loading-wave>
      </div>
    </section>

    <section
      v-for="(item, aid) of data.attrs"
      :key="aid" class="config">
      <p class="config-title">{{ item.name }}</p>
      <table class="config-table">
        <tr>
          <th>参数名</th>
          <th>类型</th>
          <th>值</th>
          <th>区间</th>
          <th>描述</th>
        </tr>
        <tr v-for="(item, lid) of item.list" :key="lid">
          <td>{{ item.name }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.default }}</td>
          <td>{{ item.region }}</td>
          <td>{{ item.desc }}</td>
        </tr>
      </table>
    </section>

  </div>
</template>

<script>
import LibLoadingDefault from '@/components/lib/comp/both/loading/index'
import LibLoadingWave from '@/components/lib/comp/both/loading/wave'
import { reactive } from 'vue'
export default {
  name: 'Demo-Loading',
  components: { LibLoadingDefault, LibLoadingWave },
  setup (props) {
    const data = reactive({
      attrs: [{
        name: 'comp loading default',
        list: [
          { name: 'boxR', type: 'number', default: 16, region: '', desc: '盒子大小 = 设置值 * 2.5;(建议和 dotR 配合使用)' },
          { name: 'dotR', type: 'number', default: 6, region: '', desc: '圆点半径' },
          { name: 'count', type: 'number', default: 8, region: '', desc: '圆点个数' },
          { name: 'color', type: 'string', default: 'pink', region: '', desc: '圆点颜色' },
          { name: 'type', type: 'string', default: 'rorating-waving', region: '-opaciting|-widthing|-waving|rorating-pendulum|rorating-opaciting|rorating-widthing|rorating-waving', desc: 'loading 类型' },
          { name: 'duration', type: 'number', default: 5, region: '', desc: '动画转速' }
        ]
      }, {
        name: 'comp loading wave',
        list: [
          { name: 'count', type: 'number', default: 5, region: '', desc: '矩形个数' },
          { name: 'color', type: 'string', default: 'pink', region: '', desc: '圆点颜色' },
          { name: 'size', type: 'number', default: 24, region: '', desc: '矩形宽度' },
          { name: 'space', type: 'number', default: 2, region: '', desc: '矩形间的间距' },
          { name: 'duration', type: 'number', default: 1, region: '', desc: '动画转速' }
        ]
      }]
    })

    return { data }
  }
}
</script>

<style lang="scss" scoped>
</style>
