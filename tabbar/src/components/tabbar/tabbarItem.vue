<template>
<!--插槽的外层都包装一层div, 以防被替换,属性都最好写在div-->
   <div class="tab-bar-item" @click="itemClick">
     <div v-if="!isActive">
       <slot name="item-icon"></slot>
     </div>
     <div v-else>
       <slot name="item-icon-active"></slot>
     </div>
    <div :style="avtiveStyle" class="item-name">
      <slot name="item-text"></slot>
    </div>

   </div>
</template>

<script>

export default {
  name: "tabbarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'blue'
    }
  },
  data() {
    return{
     // isActive: true
    }
  },
  computed: {
    //动态决定当前状态
    isActive() {
       //home => item1(/home) = ture
       //category => item1(/category) = false  以此类推
       return this.$route.path.indexOf(this.path) !== -1
     },
    //动态绑定style
    avtiveStyle() {
      return this.isActive ? {
        color:this. activeColor
      } : { }
    }
  },
  methods: {
    //拿路由
    itemClick() {
       this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
  }
  .item-name{
    font-size: 14px;
  }
</style>
