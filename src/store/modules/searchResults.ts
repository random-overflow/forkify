import recipesApi from "../../api/recipesApi";

// initial state
const state = () => ({
  results: [],
  isSearching: false,
});

// getters
const getters = {
  results(state) {
    return (state.results as [])?.map((result: any) => {
      return {
        image_url: result.image_url,
        id: result.recipe_id,
        title: result.title,
        publisher: result.publisher,
      };
    });
  },
};

// actions
const actions = {
  async getRecipesResults({ commit }, query) {
    commit("setSearching", true);
    const recipes = await recipesApi.getRecipes(query);
    commit("setResults", recipes);
    commit("setSearching", false);
  },
};

// mutations
const mutations = {
  setResults(state, recipes) {
    state.results = recipes;
  },
  setSearching(state, value) {
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
