import recipesApi, { Recipe } from "../../api/recipesApi";

// initial state
const state = () => ({
  recipes: [] as Recipe[],
  showModal: false,
});

// getters
const getters = {
  recipe(state: any): Recipe[] {
    return state.recipes;
  },
};

// actions
const actions = {
  toggleModal({ commit }) {
    commit("toggleModal");
  },
  addRecipe({ commit }, recipe: Recipe) {
    commit("addRecipe", Object.assign({}, recipe));
  },
};

// mutations
const mutations = {
  toggleModal(state: any) {
    state.showModal = !state.showModal;
  },
  addRecipe(state: any, recipe: Recipe) {
    recipe.isUserRecipe = true;
    recipe.recipe_id = state.recipes.length.toString();
    recipe.ingredients = recipe.ingredients.filter(
      (ingredient) => ingredient != ""
    );
    (state.recipes as Recipe[]).push(recipe);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
