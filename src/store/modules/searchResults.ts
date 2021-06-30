import recipesApi from "../../api/recipesApi";

// initial state
const state = () => ({
  results: [],
  isSearching: false,
});

// getters
const getters = {
  results(state: any) {
    return state.results;
  },
};

// actions
const actions = {
  async getRecipesResults({ commit }, query: string) {
    commit("setSearching", true);
    const recipes = await recipesApi.getRecipeResults(query);
    commit("setResults", recipes);
    commit("setSearching", false);
  },
};

// mutations
const mutations = {
  setResults(state: any, recipes: []) {
    state.results = recipes;
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
