import recipesApi from "../../api/recipesApi";

// initial state
const state = () => ({
  recipe: null,
  isSearching: false,
});

// getters
const getters = {
  recipe(state: any) {
    return state.recipe;
  },
};

// actions
const actions = {
  async getRecipe({ commit }, id: string) {
    commit("setSearching", true);
    const recipe = await recipesApi.getRecipe(id);
    commit("setRecipe", recipe);
    commit("setSearching", false);
  },
};

// mutations
const mutations = {
  setRecipe(state: any, recipe: any) {
    state.recipe = recipe;
  },
  setSearching(state: any, value: boolean) {
    state.isSearching = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
