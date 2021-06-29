import Vue from "vue";
import searchResults from "./modules/searchResults";
import recipe from "./modules/recipe";
import bookmarks from "./modules/bookmarks";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    searchResults,
    recipe,
    bookmarks,
  },
});

export default store;
