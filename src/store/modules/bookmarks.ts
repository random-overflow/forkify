import recipesApi from "../../api/recipesApi";

// initial state
const state = () => ({
  showBookmarks: false,
});

// getters
const getters = {};

// actions
const actions = {
  async toggleBookmarks({ commit, state }, value) {
    commit("setShowBookmarks", value);
  },
};

// mutations
const mutations = {
  setShowBookmarks(state: any, value: boolean) {
    state.showBookmarks = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
