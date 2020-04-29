<template>
  <div class="search-bg"
    :style="'background-color:' + data.bg + ';'">
    <div :class="['search-wrap', data.radius_class]">
      <icon-search class="icon-search"></icon-search>
      <input
        type="text"
        v-model="data.word"
        :placeholder="data.tip"
        @focus="focus"
        @blur="blur"
        @keyup.enter="search"
        class="search-input">
      <icon-cancel @click="clear" v-show="data.cancel_state" class="icon-cancel"></icon-cancel>
    </div>
  </div>
</template>

<script>
import IconSearch from '../../../icon/search/index'
import IconCancel from '../../../icon/cancel/index'
import { reactive, onMounted, computed } from 'vue'
export default {
  name: 'H5-Search',
  components: {
    IconSearch,
    IconCancel
  },
  props: {
    value: { type: String, default: '' },
    placeholder: { String, default: '请输入关键词' },
    bg: { type: String, default: 'pink' },
    type: { type: String, default: '' }
  },
  setup (props, { emit }) {
    const data = reactive({
      tip: '请输入关键词',
      bg: '',
      word: '',
      radius_class: computed(() => {
        let types = ['fillet', 'radius']
        types = (types.filter(item => item === props.type)[0]) ? props.type : ''
        return types
      }),
      cancel_state: false
    })

    function search () { emit('search', data.word) }

    function clear () { data.word = '' }

    function focus () { data.cancel_state = true }

    function blur () { setTimeout(() => { data.cancel_state = false }, 300) }

    onMounted(() => {
      data.tip = props.placeholder
      data.bg = props.bg
    })

    return {
      data,
      search,
      clear,
      focus,
      blur
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bg {
  background-color: pink;
  padding: .5em .625em;

  .search-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .25em;
    height: 1.625em;
    font-size: 16px;
    background-color: #ffffff;

    .icon-search { margin-left: .25em; }

    .search-input {
      box-sizing: border-box;
      flex: 1;
      border: 0 solid transparent;
      padding: 0 .25em;
      height: inherit;
      font-size: 14px;
      outline: none;
    }
    .search-input::-webkit-input-placeholder {
      font-size: 12px;
      color: rgba(207, 207, 207, .7);
    }

    .icon-cancel { margin-right: .25em; }
  }

  .fillet { border-radius: .5em; }
  .radius { border-radius: 1.0625em; }
}
</style>
