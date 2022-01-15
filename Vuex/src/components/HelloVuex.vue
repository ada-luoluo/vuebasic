<template>
<div>
  <h2>{{$store.state.counter}}</h2>
  <h2>{{$store.getters.powerCounter}}</h2>
  <h2>{{$store.getters.overAge}}</h2>
  <h2>超过20岁学生的人数: {{$store.getters.overageLength}}</h2>
  <h2>传入age,这里传入的是24,返回age大于24的学生: {{$store.getters.overAgaStu(24)}}</h2>

</div>
</template>

<script>
export default {
  name: "HelloVuex"
}
</script>

<style scoped>

</style>
