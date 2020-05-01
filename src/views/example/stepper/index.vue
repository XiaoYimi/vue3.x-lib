<template>
  <div class="page">
    <div class="page-title">组件 Stepper</div>

    <section class="demo">
      <p class="demo-title">默认</p>
      <div class="demo-item">
        <lib-stepper></lib-stepper>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">设置初始值 25</p>
      <div class="demo-item">
        <lib-stepper :count="25"></lib-stepper>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">设置步长 3</p>
      <div class="demo-item">
        <lib-stepper :step="3"></lib-stepper>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">形状大小设置</p>
      <div class="demo-item">
        <p class="demo-desc">sm</p>
        <lib-stepper type="sm"></lib-stepper>
      </div>
      <div class="demo-item">
        <p class="demo-desc">md</p>
        <lib-stepper type="md"></lib-stepper>
      </div>
      <div class="demo-item">
        <p class="demo-desc">md</p>
        <lib-stepper type="lg"></lib-stepper>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">设置区间极值 -5 &lt; 值 &lt; 5</p>
      <div class="demo-item">
        <lib-stepper :min="-5" :max="5"></lib-stepper>
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
import LibStepper from '@/components/lib/comp/both/stepper/index'
import { reactive } from 'vue'
export default {
  name: 'Demo-Stepper',
  components: { LibStepper },
  setup (props) {
    const data = reactive({
      attrs: [{
        name: 'comp stepper',
        list: [
          { name: 'count', type: 'number', default: 0, region: '', desc: '自定义初始值' },
          { name: 'step', type: 'number', default: 1, region: '', desc: '步长' },
          { name: 'min', type: 'number', default: -999999999999999, region: '', desc: '极小值' },
          { name: 'max', type: 'number', default: 999999999999999, region: '', desc: '极大值' },
          { name: 'type', type: 'string', default: 'md', region: 'sm|md|lg', desc: '形状类型' }
        ]
      }]
    })

    return { data }
  }
}
</script>

<style lang="scss" scoped>
</style>
