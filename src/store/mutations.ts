export default {
  increment: (state) => {
    const obj = state
    obj.count += 1
  },
  decrement: (state) => {
    const obj = state
    obj.count -= 1
  },
  /**
   * 更新用户信息
   * @param state 
   * @param user 
   */
  updateUserInfo(state, user) {
    state.userInfo = user
  }
}