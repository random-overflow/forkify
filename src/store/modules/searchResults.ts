import recipesApi from "../../api/recipesApi";

// initial state
const state = () => ({
  results: [],
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
    const recipes = await recipesApi.getRecipes(query);
    commit("setResults", recipes);
  },
};

// mutations
const mutations = {
  setResults(state, recipes) {
    state.results = recipes;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
