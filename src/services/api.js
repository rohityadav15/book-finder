import axios from "axios";

const api = axios.create({
  baseURL: "https://openlibrary.org/",
});

export const searchBooks = async (query) => {
  const response = await api.get(`/search.json?title=${query}`);
  return response.data;
};
