import axios from "axios";
import {
  CART_URL,
  PRODUCTS_URL,
  LOGIN_URL,
  SIGNUP_URL,
  WISHLIST_URL,
  CATEGORIES_URL,
} from "./apiUrls";

export const loginService = (email, password) =>
  axios.post(
    "https://lfleifh5db.execute-api.us-east-1.amazonaws.com/api/login",
    { email, password }
  );

export const signupService = (username, email, password) =>
  axios.post(
    "https://7fxyshvb20.execute-api.us-east-1.amazonaws.com/api/signup",
    { username, email, password }
  );

export const getAllProductsService = () =>
  axios.get(
    "https://gy60l93350.execute-api.us-east-1.amazonaws.com/test/products"
  );

export const getProductByIdService = (productId) =>
  axios.get(`${PRODUCTS_URL}/${productId}`);

export const getCartItemsService = (email) =>
  axios.post(
    "https://3bnbp20cya.execute-api.us-east-1.amazonaws.com/api/fetchCart",
    {
      email,
    }
  );

export const postAddProductToCartService = (product, email) =>
  axios.post(
    "https://u1efzmgsn7.execute-api.us-east-1.amazonaws.com/api/addToCart",
    { product, email }
  );

export const postUpdateProductQtyCartService = (productId, type, token) =>
  axios.post(
    `${CART_URL}/${productId}`,
    {
      action: {
        type,
      },
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteProductFromCartService = (productId, email) =>
  axios.post(
    "https://iwjswakvve.execute-api.us-east-1.amazonaws.com/api/deleteFromCart",
    { productId, email }
  );

export const getWishlistItemsService = (token) =>
  axios.get(WISHLIST_URL, {
    headers: {
      authorization: token,
    },
  });

export const postAddProductToWishlistService = (product, token) =>
  axios.post(
    WISHLIST_URL,
    { product },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteProductFromWishlistService = (productId, token) =>
  axios.delete(`${WISHLIST_URL}/${productId}`, {
    headers: {
      authorization: token,
    },
  });

export const getAllCategoriesService = () => axios.get(CATEGORIES_URL);
