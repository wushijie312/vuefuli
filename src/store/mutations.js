/*
直接更新state的多个方法的对象
 */
import {
  POST_REGISTER,
 
} from './mutation-types'

export default {
  [POST_REGISTER] (state, {user}) {
    state.userInfo = user
  },
}