import Vue from "vue";
import searchResults from "./modules/searchResults";
import recipe from "./modules/recipe";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    searchResults,
    recipe,
  },
});

export default store;
