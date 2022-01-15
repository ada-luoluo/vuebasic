<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<!--tabbar组件只管理tabbar自己,做插槽-->
<script>
export default {
  name: "tabbar"
}
</script>

<style scoped>
#tabbar{
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px #dddddd54;
}

</style>
