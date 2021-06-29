import recipesApi from "../../api/recipesApi";

// initial state
const state = () => ({
  showBookmarks: false,
  recipes: [], // ids
});

// getters
const getters = {
  isBookmarked(state: any, getters: any, rootState: any): boolean {
    return state.recipes.includes(rootState.recipe.recipe.recipe_id);
  },
};

// actions
const actions = {
  toggleBookmarks({ commit }, value: boolean): void {
    commit("setShowBookmarks", value);
  },
  addBookmark({ commit }, value: string): void {
    commit("addBookmark", value);
  },
  removeBookmark({ commit }, value: string): void {
    commit("removeBookmark", value);
  },
};

// mutations
const mutations = {
  setShowBookmarks(state: any, value: boolean) {
    state.showBookmarks = value;
  },
  addBookmark(state: any, value: string) {
    state.recipes.push(value);
  },
  removeBookmark(state: any, value: string) {
    const index = (state.recipes as []).indexOf(value);
    if (index != -1) {
      state.recipes.splice(index);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
