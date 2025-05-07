// favoriteStorage.js

const STORAGE_KEY = "favoriteProducts";

export const getFavorites = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addFavorite = (product) => {
  const favorites = getFavorites();
  const exists = favorites.find((p) => p.title.trim().toLowerCase() === product.title.trim().toLowerCase());
  if (!exists) {
    favorites.push(product);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }
};

export const removeFavorite = (product) => {
  const favorites = getFavorites().filter((p) => p.title.trim().toLowerCase() !== product.title.trim().toLowerCase());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
};

export const isFavorite = (product) => {
  const favorites = getFavorites();
  return favorites.some((p) => p.title.trim().toLowerCase()=== product.title.trim().toLowerCase());
};

export const clearFavorites = () => {
  localStorage.removeItem(STORAGE_KEY);
};
