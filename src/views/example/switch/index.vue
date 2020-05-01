<template>
  <div class="page">
    <div class="page-title">组件 Switch</div>

    <section class="demo">
      <p class="demo-title">默认</p>
      <div class="demo-item">
        <p class="demo-desc">comp switch </p>
        <lib-switch :state="data.defState" @change="defStateChange"></lib-switch>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">switch 设置 state: true </p>
      <div class="demo-item">
        <lib-switch :state="data.staState" @change="staStateChange"></lib-switch>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">switch 设置 size: 48</p>
      <div class="demo-item">
        <lib-switch :state="data.sizState" :size="48" @change="sizStateChange"></lib-switch>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">switch 设置 color: blueviolet</p>
      <div class="demo-item">
        <lib-switch :state="data.colState" @change="colStateChange" color="blueviolet"></lib-switch>
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
import LibSwitch from '@/components/lib/comp/both/switch/index'
import { reactive } from 'vue'
export default {
  name: 'Demo-Switch',
  components: { LibSwitch },
  setup (props) {
    const data = reactive({
      defState: false,
      staState: true,
      sizState: false,
      colState: false,
      attrs: [{
        name: 'comp loading default',
        list: [
          { name: 'state', type: 'boolean', default: 16, region: '', desc: 'switch 自定义初始状态' },
          { name: 'size', type: 'number', default: 32, region: '', desc: 'switch 宽度, 盒子宽度 = 2 * 设置值 + 2' },
          { name: 'color', type: 'string', default: 'pink', region: '', desc: 'switch 颜色' }
        ]
      }]
    })

    function defStateChange (state) { data.defState = state }

    function staStateChange (state) { data.staState = state }

    function sizStateChange (state) { data.sizState = state }

    function colStateChange (state) { data.colState = state }

    return {
      data,
      defStateChange,
      staStateChange,
      sizStateChange,
      colStateChange
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
