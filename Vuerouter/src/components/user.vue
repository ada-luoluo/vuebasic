<template>
<div>
 <h1>用户界面</h1>
<!-- 这是app.vue传递过来的数据 -->
 <h2>{{userId}}</h2>
 <h2>{{$route.params.userId}}</h2>


<!--  直接拿-->
</div>
</template>

<script>
export default {
  name: "user",
  computed: {
     userId() {
       return this.$route.params.userId
       //$route 谁处于活跃就是谁  活跃就是有当前状态
       //router 是整个大的vue对象 不要搞混
     }
  }
}
</script>

<style scoped>

</style>
