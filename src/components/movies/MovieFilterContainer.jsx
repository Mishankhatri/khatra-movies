import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import getAllMoviesApi from "./../../services/getMovies.api";
import FilterBar from "./FilterBar";
import MoviesGrid from "./MoviesGrid";
import Fade from "../animated/Fade";

const MovieFilterContainer = () => {
  const [movies, setMovies] = useState([]);
  const [filterId, setFilterId] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageClick = (e) => {
    setSelectedPage(e.selected + 1);
    setFilterId(0);
    window.scrollTo(0, 0);
  };

  const getAllMovies = async () => {
    const data = await getAllMoviesApi(selectedPage);
    setMovies(data?.results);
    setFilteredMovies(data?.results);
    setTotalPages(data?.total_pages > 500 ? 500 : data?.totalPages);
  };

  useEffect(() => {
    getAllMovies();
  }, [selectedPage]);

  useEffect(() => {
    if (filterId === 0) {
      setFilteredMovies(movies);
    } else {
      const selectedMovies = movies?.filter((movie) =>
        movie?.genre_ids.includes(filterId)
      );
      setFilteredMovies(selectedMovies);
    }
  }, [filterId]);

  return (
    <div>
      <Fade>
        <h1><span className="khatra-header">Khatra</span> movies</h1>
      </Fade>
      <FilterBar filterId={filterId} setFilterId={setFilterId} />
      <MoviesGrid movies={filteredMovies} />
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageClick}
        ReactPaginate
        nextLabel="next >"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel="< previous"
        pageClassName="number-pill"
        pageLinkClassName="page-link"
        previousClassName="number-pill"
        previousLinkClassName="page-link"
        nextClassName="number-pill"
        nextLinkClassName="page-link"
        breakLabel="..."
        containerClassName="pagination-container"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default MovieFilterContainer;
