<template>
  <div>
    <section>
      <p>头部</p>
      <slot name="head"/>
    </section>
    <section>
      <p>内容</p>
      <slot name="main"/>
    </section>
    <section>
      <p>底部</p>
      <slot name="foot"/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Slot'
}
</script>

<style lang="scss" scoped>
</style>
