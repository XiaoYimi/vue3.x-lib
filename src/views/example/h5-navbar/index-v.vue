<template>
  <div class="page">
    <div class="page-title">组件 navbar v(垂直方向)</div>

    <section class="demo">
      <p class="demo-title">默认</p>
      <div class="demo-item">
        <p class="demo-desc">comp navbar v(垂直方向)</p>
        <lib-navbar></lib-navbar>
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
import LibNavbar from '@/components/lib/comp/h5/navbar/vnavbar'
import { reactive } from 'vue'
export default {
  name: 'Demo-H5-Navbar-H',
  components: { LibNavbar },
  setup (props) {
    const data = reactive({
      attrs: [{
        name: 'comp loading default',
        list: [
          { name: 'tabsBg', type: 'string', default: '#ffffff', region: '', desc: '背景颜色' },
          { name: 'color', type: 'string', default: '#333333', region: '', desc: '字体颜色' },
          { name: 'space', type: 'number', default: 12, region: '', desc: '选项间隔' },
          { name: 'navbarSize', type: 'number', default: 16, region: '', desc: '字体大小' },
          { name: 'list', type: 'array', default: 'pink', region: '', desc: '选项数据,必须有字段 name' },
          { name: 'index', type: 'number', default: 0, region: '', desc: '游标索引' },
          { name: 'activeColor', type: 'string', default: 'pink', region: '', desc: '游标索引响应颜色(选中)' },
          { name: 'titleBarHeight', type: 'number', default: 0, region: '', desc: '可减去 title 栏的高度' },
          { name: 'TabbarHeight', type: 'number', default: 0, region: '', desc: '可减去 tabbar 栏的高度' }
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
