<template>
  <div class="my">
   <!--首页头部-->
    <HeaderTop title="我的"></HeaderTop>
    <FooterGuide selected="my"></FooterGuide>
    <!-- <my-btn>anniu</my-btn> -->
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import FooterGuide from "../../components/FooterGuide/FooterGuide";
export default {
  name: "my",
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
