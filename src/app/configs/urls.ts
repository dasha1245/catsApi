import {environment} from "../../environments/environment";

const {API} = environment;

const urls = {
  cats: `${API}/images/search`,
  categories: `${API}/categories`
};

export {
  urls
}
