import { AnimatePresence, motion } from "framer-motion";
import mapIdsToGenre from "../../utils/mapGenre.utils";

const cardVariant = {
  initial: {
    opacity: 0,
  },
  animte: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const MoviesGrid = ({ movies }) => {
  return (
    <div className="filter-card-grid">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <AnimatePresence key={movie?.id}>
            <motion.div
              layout
              key={movie.id}
              className="filter-card"
              variants={cardVariant}
              initial="intial"
              animate="animate"
              exit="exit"
            >
              <img
                src={`${import.meta.env.VITE_MOVIE_DB_IMAGE_URL}/${
                  movie?.backdrop_path
                }`}
                alt=""
              />
              <div className="description">
                <h4>{movie.title}</h4>
                <p>{movie.vote_average} ⭐</p>
                <p>{movie.release_date}</p>
                <p>
                  {mapIdsToGenre(movie.genre_ids)
                    .slice(0, 3)
                    .map((genre, index, arr) => {
                      if (index + 1 === arr.length) {
                        return genre;
                      } else {
                        return genre + " • ";
                      }
                    })}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        ))
      ) : (
        <div className="no-movies">No movies to show.</div>
      )}
    </div>
  );
};

export default MoviesGrid;
