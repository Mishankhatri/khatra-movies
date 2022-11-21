import { useEffect, useState } from "react";
import getAllMoviesApi from "../services/getMovies.api";

const useMovies = (selectedPage=1) => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(500);

  const getAllMovies = async () => {
    const data = await getAllMoviesApi(selectedPage);
    setMovies(data?.results);
    setTotalPages(data?.total_pages > 500 ? 500 : data?.totalPages);
  };

  useEffect(() => {
    getAllMovies();
  }, [selectedPage]);

  return { movies, totalPages };
};

export default useMovies;
