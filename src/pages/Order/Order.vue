<template>
  <div class="order">
   <!--首页头部-->
    <HeaderTop title="订单列表"></HeaderTop>
    <FooterGuide selected="order"></FooterGuide>
    <!-- <my-btn>anniu</my-btn> -->
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import FooterGuide from "../../components/FooterGuide/FooterGuide";
export default {
  name: "order",
  data(){
    return {
    }
  },
  components: {
    HeaderTop,
    FooterGuide,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
