<template>
  <svg viewBox="0 0 40 40" class="icon-cancel"
    :style="'font-size:' + props.size + 'px;'">
    <circle cx="20" cy="20" r="18" />
    <line x1="15" y1="15" x2="25" y2="25"></line>
    <line x1="25" y1="15" x2="15" y2="25"></line>
  </svg>
</template>

<script>
export default {
  name: 'Icon-Cancel',
  props: {
    size: { type: Number, default: 20 }
  },
  setup (props) {
    return { props }
  }
}
</script>

<style lang="scss" scoped>
.icon-cancel {
  width: 1em;
  height: 1em;
  font-size: inherit;
  cursor: pointer;
  circle {
    stroke: transparent;
    stroke-width: 0;
    fill: #cfcfcf;
  }
  line {
    stroke: #333333;
    stroke-width: 2;
    fill: transparent;
    stroke-linecap: round;
  }
}
</style>
