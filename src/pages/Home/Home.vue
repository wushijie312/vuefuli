<template>
  <div class="home">
   <!--首页头部-->
    <HeaderTop title="外卖">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont iconsousuo" style="font-size: 18px; color:#fff;"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo ? '/userinfo': '/login'">
        <span class="header_login_text" v-if="!userInfo">
          登录|注册
        </span>
        <span class="header_login_text" v-else>
           <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>
    <FooterGuide selected="mai"></FooterGuide>
    <!-- <my-btn>anniu</my-btn> -->
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import FooterGuide from "../../components/FooterGuide/FooterGuide";
import {reqRegister} from '../../api'
export default {
  name: "home",

  data(){
    return {
      userInfo:''
    }
  },
  mounted() {
    // const result= await reqRegister({username:'wu5',password:'12',password1:'12',type:'dashen'});
     const userinfo = {username:'wushi2',password:'11',password1:'11',type:'dashen'};
     this.$store.dispatch('getRegister',userinfo)
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
