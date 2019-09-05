<template>
  <div class="footer_guide">
    <mt-tabbar fixed v-model="message">
      <mt-tab-item id="mai">
        <img slot="icon" v-show="!(message=== 'mai')" src="./img/a1.png">
        <img slot="icon" v-show="message=== 'mai'" src="./img/a2.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" v-show="!(message=== 'order')" src="./img/b1.png">
        <img slot="icon" v-show="message=== 'order'" src="./img/b2.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="find">
        <img slot="icon" v-show="!(message=== 'find')" src="./img/c1.png">
        <img slot="icon" v-show="message=== 'find'" src="./img/c2.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" v-show="!(message=== 'my')" src="./img/d1.png">
        <img slot="icon" v-show="message=== 'my'" src="./img/d2.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //选中的tabbar值message为外面页面传入的值selected
      message: this.selected
    };
  },
  props: {
    selected: String
  },
  watch: {
    message: function(val) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case "mai":
          this.$router.replace("/");
          break;
        case "find":
          this.$router.replace("/find");
          break;
        case "order":
          this.$router.replace("/order");
          break;
        case "my":
          this.$router.replace("/my");
          break;
      }
    }
  }
};
</script>

<style lang="scss">
//   @import "../../common/footer.scss"
// .footer_guide {
//   position: fixed;
//   z-index: 100;
//   left: 0;
//   right: 0;
//   bottom: 0;
// }
</style>