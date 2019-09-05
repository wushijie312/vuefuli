import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import store  from  './store'
// mint-ui 引入想要的模块 start
import {Button,Header,Tabbar, TabItem} from 'mint-ui';
// 注册模块
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
//修改主题色
import './common/css/my-mint.scss';
// mint-ui end
import './common/css/reset.css';

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
