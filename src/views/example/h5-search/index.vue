<template>
  <div class="page">
    <div class="page-title">组件 search</div>

    <section class="demo">
      <p class="demo-title">默认</p>
      <div class="demo-item">
        <p class="demo-desc">comp switch </p>
        <lib-search></lib-search>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">search 设置 placehodler: 想输入点什么 </p>
      <div class="demo-item">
        <lib-search placeholder="想输入点什么"></lib-search>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">search 设置 color: blueviolet</p>
      <div class="demo-item">
        <lib-search color="blueviolet"></lib-search>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">search 设置 type: fillet</p>
      <div class="demo-item">
        <lib-search type="fillet"></lib-search>
      </div>
    </section>

    <section class="demo">
      <p class="demo-title">search 设置 type: radius</p>
      <div class="demo-item">
        <lib-search type="radius"></lib-search>
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
import LibSearch from '@/components/lib/comp/h5/search/index'
import { reactive } from 'vue'
export default {
  name: 'Demo-H5-Search',
  components: { LibSearch },
  setup (props) {
    const data = reactive({
      attrs: [{
        name: 'comp loading default',
        list: [
          { name: 'value', type: 'string', default: '', region: '', desc: 'input 自定义初始状态' },
          { name: 'placeholder', type: 'string', default: '请输入关键词', region: '', desc: 'input 输入提示' },
          { name: 'bg', type: 'string', default: 'pink', region: '', desc: 'search 背景颜色' },
          { name: 'type', type: 'string', default: 'fillet|radius', region: '', desc: 'search 圆角类型' }
        ]
      }]
    })

    return { data }
  }
}
</script>

<style lang="scss" scoped>
.demo { padding: 10px 0 20px; }
</style>
