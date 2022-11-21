import axios from "axios";

const getAllMoviesApi = async (page) => {
  const response = await axios.get(
    `${import.meta.env.VITE_MOVIE_DB_URL}?api_key=${
      import.meta.env.VITE_MOVIE_DB_API_KEY
    }&page=${page}`
  );
  const data = await response.data;
  return data;
};

export default getAllMoviesApi;
