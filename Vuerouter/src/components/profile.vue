<template>
 <div>
   <h1>这是档案组件</h1>
<!--   这是APP.vue传过来的数据,使用了query-->
   <h2>姓名:{{$route.query.name}}</h2>
   <h2>年龄:{{$route.query.age}}</h2>

 </div>
</template>

<script>
export default {
  name: "profile"
}
</script>

<style scoped>

</style>
