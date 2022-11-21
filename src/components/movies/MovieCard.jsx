import { motion, AnimatePresence } from "framer-motion";

import mapIdsToGenre from "../../utils/mapGenre.utils";

const cardVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const MovieCard = ({ movie }) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        key={movie.id}
        className="filter-card"
        variants={cardVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.9,
          ease: "backInOut",
          layout: { duration: 0.5 },
        }}
      >
        <img
          src={`${import.meta.env.VITE_MOVIE_DB_IMAGE_URL}/${
            movie?.backdrop_path
          }`}
          alt="movie-thumbnail"
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
  );
};

export default MovieCard;
