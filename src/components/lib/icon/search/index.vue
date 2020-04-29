<template>
  <svg viewBox="0 0 40 40" class="search"
    :style="'font-size:' + props.size + 'px;stroke:' + props.color + ';'">
    <circle cx="16" cy="16" r="14" />
    <line x1="26" y1="26" x2="38" y2="38" />
  </svg>
</template>

<script>
export default {
  name: 'Icon-Search',
  props: {
    size: { type: Number, default: 20 },
    color: { type: String, default: '#cfcfcf' }
  },
  setup (props) {
    return { props }
  }
}
</script>

<style lang="scss" scoped>
.search {
  width: 1em;
  height: 1em;
  font-size: inherit;
  stroke: #cfcfcf;
  fill: transparent;
  stroke-width: 2;
}
</style>
