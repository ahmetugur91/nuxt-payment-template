export const state = () => ({
  tc: ''
})

export const mutations = {
  async setTc(state, tc) {
    state.tc = tc;
  }
}

export const actions = {
  async updateTc({ commit }, tc) {
    commit('setTc', tc);
  }
}
