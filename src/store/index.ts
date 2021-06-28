import Vue from "vue";
import searchResults from "./modules/searchResults";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    searchResults,
  },
});

export default store;
