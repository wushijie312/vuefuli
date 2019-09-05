<template>
  <div class="find">
   <!--首页头部-->
    <HeaderTop title="搜索"></HeaderTop>
    <FooterGuide selected="find"></FooterGuide>
    <!-- <my-btn>anniu</my-btn> -->
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import FooterGuide from "../../components/FooterGuide/FooterGuide";
export default {
  name: "find",
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
