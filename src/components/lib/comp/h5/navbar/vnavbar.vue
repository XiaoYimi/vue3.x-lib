<template>
  <div class="navbar-wrap" :style="data.navbar_styles">
    <div class="tabs" :style="data.tabs_styles">
      <div
        v-for="(item, tid) of data.tabs"
        :key="tid"
        :data-id="tid"
        @click="handTabClick"
        :style="[data.item_styles, tid === data.tid ? data.active_styles : '']"
        class="tabs-item">{{ item.name }}</div>
    </div>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
export default {
  name: 'Lib-VNavbar',
  props: {
    tabs: {
      type: Array,
      default: () => [{ name: '菜单一' }, { name: '菜单吧二' }, { name: '菜单三' }, { name: '菜单一' }, { name: '菜单二' }, { name: '菜单三' }, { name: '菜单一' }, { name: '菜单二' }, { name: '菜单三' }, { name: '菜单一' }, { name: '菜单二' }, { name: '菜单三' }, { name: '菜单一' }, { name: '菜单二' }, { name: '菜单三' }, { name: '菜单一' }, { name: '菜单二' }, { name: '菜单三' }, { name: '菜单一' }, { name: '菜单二' }, { name: '菜单三' }, { name: '菜单一' }, { name: '菜单二' }, { name: '菜单三' }, { name: '菜单一' }, { name: '菜单二' }, { name: '菜单三' }, { name: '菜单一' }, { name: '菜单二' }, { name: '菜单三' }, { name: '菜单一' }, { name: '菜单二' }, { name: '菜单三' }, { name: '菜单一' }, { name: '菜单二' }, { name: '菜单三' }, { name: '菜单一' }, { name: '菜单二' }, { name: '菜单三' }]
    },
    index: { type: Number, default: 0 },
    navbarSize: Number,
    tabsBg: String,
    color: String,
    space: Number,
    activeColor: { type: String, default: 'pink' },
    titleBarHeight: { type: Number, default: 0 },
    TabbarHeight: { type: Number, default: 0 }
  },
  setup (props, { emit, slots }) {
    console.log(slots)
    const data = reactive({
      tabs: computed(() => props.tabs),
      tid: 0,
      navbar_styles: '',
      tabs_styles: '',
      item_styles: '',
      active_styles: computed(() => {
        return { color: props.activeColor }
      })
    })

    function handTabClick (e) {
      data.tid = parseInt(e.target.dataset.id)
      emit('tabchange', data.tabs[e.target.dataset.id])
    }

    onMounted(() => {
      const winHeight = window.screen.height
      const navbarStyles = {
        height: winHeight - (props.titleBarHeight ? props.titleBarHeight : 0) - (props.TabbarHeight ? props.TabbarHeight : 0) + 'px',
        fontSize: props.navbarSize + 'px'
      }
      const tabsStyles = {
        color: props.color,
        backgroundColor: props.tabsBg
      }
      const itemStyles = {
        padding: props.space ? props.space + 'px 0' : false
      }
      data.navbar_styles = navbarStyles
      data.tabs_styles = tabsStyles
      data.item_styles = itemStyles
    })

    return {
      data,
      handTabClick
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-wrap {
  display: flex;
  box-sizing: border-box;
  height: 100vh;
  font-size: 16px;

  .tabs {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #f0f0f0;
    width: 6em;
    max-width: 25%;
    height: inherit;
    color: #333333;
    background-color: #ffffff;
    text-align: center;
    overflow-y: scroll;
    .tabs-item {
      padding: .75em 0;
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: inherit;
    overflow-y: scroll;
  }
  .tabs::-webkit-scrollbar, content::-webkit-scrollbar {
    width: 0;
  }
}
</style>
