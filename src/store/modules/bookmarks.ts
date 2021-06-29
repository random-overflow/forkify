import recipesApi from "../../api/recipesApi";

// initial state
const state = () => ({
  showBookmarks: false,
  recipes: [],
});

// getters
const getters = {
  isBookmarked(state: any, getters: any, rootState: any): boolean {
    return (state.recipes as []).some(
      (recipe: any) => recipe.recipe_id == rootState.recipe.recipe.recipe_id
    );
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
  addBookmark({ commit, rootState }): void {
    commit("addBookmark", rootState.recipe.recipe);
  },
  removeBookmark({ commit, rootState }): void {
    commit("removeBookmark", rootState.recipe.recipe);
  },
};

// mutations
const mutations = {
  setShowBookmarks(state: any, value: boolean) {
    state.showBookmarks = value;
  },
  addBookmark(state: any, recipe: any) {
    state.recipes.push(recipe);
  },
  removeBookmark(state: any, recipe: any) {
    state.recipes = state.recipes.filter((_recipe: any) => {
      return _recipe.recipe_id != recipe.recipe_id;
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
