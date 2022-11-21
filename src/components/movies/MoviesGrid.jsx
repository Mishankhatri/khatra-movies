import MovieCard from "./MovieCard";

const MoviesGrid = ({ movies }) => {
  return (
    <div className="filter-card-grid">
      {movies && movies.length > 0 ? (
        movies.map((movie) => <MovieCard movie={movie} key={movie?.id} />)
      ) : (
        <div className="no-movies">No movies to show.</div>
      )}
    </div>
  );
};

export default MoviesGrid;
