import recipesApi from "../../api/recipesApi";

// initial state
const state = () => ({
  showBookmarks: false,
  recipes: [], // ids
  recipes_details: [],
});

// getters
const getters = {
  isBookmarked(state: any, getters: any, rootState: any): boolean {
    return state.recipes.includes(rootState.recipe.recipe.recipe_id);
  },
  isEmpty(state: any): boolean {
    return state.recipes.length == 0;
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
  async addBookmark(state: any, value: string) {
    state.recipes.push(value);
    state.recipes_details.push(await recipesApi.getRecipe(value));
  },
  removeBookmark(state: any, value: string) {
    const index = state.recipes.indexOf(value);
    if (index != -1) {
      state.recipes.splice(index);
      state.recipes_details.splice(index);
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
