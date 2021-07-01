import recipesApi from "../../api/recipesApi";

// initial state
const state = () => ({
  results: [],
  isSearching: false,
  page: 1,
  maxResPerPage: 10,
});

// getters
const getters = {
  results(state: any, getters: any, rootState: any): any {
    return rootState.userRecipes.recipes.concat(
      (state.results as []).slice(
        state.page * state.maxResPerPage - state.maxResPerPage,
        state.page * state.maxResPerPage
      )
    );
  },
  existNextPage(state: any): boolean {
    return state.page * state.maxResPerPage < state.results.length;
  },
  existPrevPage(state: any): boolean {
    return state.page * state.maxResPerPage > state.maxResPerPage;
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
  nextPage({ commit }) {
    commit("nextPage");
  },
  prevPage({ commit }) {
    commit("prevPage");
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
  nextPage(state: any) {
    state.page++;
  },
  prevPage(state: any) {
    state.page--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
