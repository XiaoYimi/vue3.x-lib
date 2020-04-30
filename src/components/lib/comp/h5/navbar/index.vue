<template>
  <div id="navbar" class="navbar-wrap" :style="data.wrap_styles">
    <div id="tab-list" class="navbar">
      <div
        v-for="(item, nid) of data.list"
        :key="nid"
        :data-id="nid"
        @click="handTabClick"
        :style="data.item_styles"
        class="navbar-item">{{ item.name }}</div>
    </div>
    <div id="tab-icon" class="tab-active" :style="data.icon_styles"></div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
export default {
  name: 'Lib-Navbar',
  props: {
    size: { type: Number, default: 16 }, // 字体大小
    navbarBg: { type: String, default: 'pink' },
    navbarColor: { type: String, default: '#333333' },
    space: { type: Number, default: 10 }, // px
    tabIconWidth: { type: Number, default: 25 }, // px
    tabIconColor: { type: String, default: 'blueviolet' },
    // 数据格式: { name: '' }
    list: { type: Array, default: () => [{ id: 1, name: '菜单1' }, { id: 2, name: '菜单2' }, { id: 3, name: '菜单3' }] }
  },
  setup (props, { emit }) {
    const data = reactive({
      wrap_styles: '',
      item_styles: '',
      icon_styles: '',
      list: computed(() => props.list)
    })

    function funcTabIconChange (domClicked) {
      const domTabIcon = document.querySelector('#tab-icon')
      const domNavbar = document.querySelector('#navbar')
      const offsetX = domClicked.offsetLeft + domClicked.offsetWidth / 2 - domTabIcon.offsetWidth / 2
      domTabIcon.style.left = offsetX + 'px'
      if (offsetX < (window.screen.width)) { domNavbar.scrollLeft = domClicked.offsetLeft + 'px' }
    }

    function handTabClick (e) {
      const dom = e.target
      funcTabIconChange(dom)
      emit('tabchange', data.list[e.target.dataset.id])
    }

    onMounted(() => {
      console.log(props)
      const wrapStyles = {
        backgroundColor: props.navbarBg,
        fontSize: props.size + 'px',
        color: props.navbarColor
      }
      const itemStyles = { padding: '0 ' + props.space + 'px' }
      const iconStyles = {
        width: props.tabIconWidth + 'px',
        backgroundColor: props.tabIconColor
      }
      data.wrap_styles = wrapStyles
      data.item_styles = itemStyles
      data.icon_styles = iconStyles
      const domTabList = document.querySelector('#tab-list')
      funcTabIconChange(domTabList.children[0])
    })

    return {
      data,
      funcTabIconChange,
      handTabClick
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-wrap {
  position: relative;
  padding: .85em 0;
  width: 100%;
  background-color: pink;
  overflow-x: scroll;
  white-space: nowrap;

  .navbar {
    display: flex;
    align-items: center;
    width: inherit;
    height: inherit;

    .navbar-item {
      padding: 0 10px;
    }
  }

  .tab-active {
    width: 1.25em;
    background-color: blueviolet;
    position: absolute;
    bottom: 0;
    height: 4px;
    transition: left .3s;
  }
}

.navbar-wrap::-webkit-scrollbar {
  height: 0;
}
</style>
