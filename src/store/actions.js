/*
通过mutation间接更新state的多个方法的对象
 */
import {
  POST_REGISTER,
} from './mutation-types'
import {
  reqRegister,
} from '../api'

export default {
  // 异步获取地址
  async getRegister({commit, state},userinfo) {
    // 发送异步ajax请求
   
    const result = await reqRegister(userinfo)
    // 提交一个mutation
    if (result.code === 0) {
      const data = result.data
      commit(POST_REGISTER, {data})
    }
  }
}
