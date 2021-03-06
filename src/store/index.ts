import Vue from "vue";
import searchResults from "./modules/searchResults";
import recipe from "./modules/recipe";
import bookmarks from "./modules/bookmarks";
import userRecipes from "./modules/userRecipes";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    userRecipes,
    searchResults,
    recipe,
    bookmarks,
  },
});

export default store;
