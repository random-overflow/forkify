import axios from "axios";

const baseURL: string = "https://forkify-api.herokuapp.com/api";

export default {
  async getRecipeResults(query: string) {
    let result = null;
    await axios
      .get("/search", {
        baseURL: baseURL,
        params: {
          q: query,
        },
      })
      .then((response: any) => {
        result = response.data.recipes;
      })
      .catch((error: any) => {
        console.log(error);
      });
    return result;
  },

  async getRecipe(id: string) {
    let result = null;
    await axios
      .get("/get", {
        baseURL: baseURL,
        params: {
          rId: id,
        },
      })
      .then((response: any) => {
        result = response.data.recipe;
      })
      .catch((error: any) => {
        console.log(error);
      });
    return result;
  },
};
