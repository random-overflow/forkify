import recipesApi, { Recipe } from "../../api/recipesApi";

// initial state
const state = () => ({
  recipe: null as Recipe | null,
  isSearching: false,
});

// getters
const getters = {
  recipe(state: any): Recipe {
    return state.recipe;
  },
};

// actions
const actions = {
  async getRecipe({ commit, rootState }, { id, isUserRecipe }) {
    let recipe: Recipe | null;
    commit("setSearching", true);
    recipe = isUserRecipe
      ? rootState.userRecipes.recipes.find(
          (recipe: Recipe) => recipe.recipe_id == id
        )
      : await recipesApi.getRecipe(id);
    commit("setRecipe", recipe);
    commit("setSearching", false);
  },
};

// mutations
const mutations = {
  setRecipe(state: any, recipe: Recipe[]) {
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
