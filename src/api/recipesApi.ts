import axios from "axios";

const baseURL: string = "https://forkify-api.herokuapp.com/api";

export interface RecipeResult {
  publisher?: string;
  title?: string;
  source_url?: string;
  recipe_id?: string;
  image_url?: string;
  social_rank?: number;
  publisher_url?: string;
  isUserRecipe?: boolean;
}

export interface Recipe extends RecipeResult {
  ingredients: string[];
  prep_time?: number;
}

export default {
  async getRecipeResults(query: string): Promise<RecipeResult[]> {
    let result: RecipeResult[] = [];
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

  async getRecipe(id: string): Promise<Recipe[]> {
    let result: Recipe[] = [];
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
