import axios from "axios";

const baseURL: string = "https://forkify-api.herokuapp.com/api";

export default {
  async getRecipes(query: string) {
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
};
