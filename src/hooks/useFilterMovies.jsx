import { useEffect, useState } from "react";

const useFilterMovies = (movies = []) => {
  const [filterId, setFilterId] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    if (filterId === 0) {
      setFilteredMovies(movies);
    } else {
      const selectedMovies = movies?.filter((movie) =>
        movie?.genre_ids.includes(filterId)
      );
      
      setFilteredMovies(selectedMovies);
    }
  }, [filterId,movies]);

  return { filterId, setFilterId, filteredMovies };
};

export default useFilterMovies;
