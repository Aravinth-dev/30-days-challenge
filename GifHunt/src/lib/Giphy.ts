
export const fetchGifs = async (query: string, page = 0) => {
  const apikey = import.meta.env.VITE_GIPHY_API_KEY;
  const limit = 30;
  const offset = page * limit;
  const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apikey}&limit=${limit}&offset=${offset}`;
  
  const response = await fetch(url);
  const data = await response.json();
  return data;
};