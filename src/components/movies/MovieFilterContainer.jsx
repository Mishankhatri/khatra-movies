import { useState } from "react";
import ReactPaginate from "react-paginate";

import FilterBar from "./FilterBar";
import MoviesGrid from "./MoviesGrid";
import Fade from "../animated/Fade";
import useMovies from "./../../hooks/useMovies";
import useFilterMovies from "./../../hooks/useFilterMovies";

const MovieFilterContainer = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const { movies, totalPages } = useMovies(selectedPage);
  const { filterId, setFilterId, filteredMovies } = useFilterMovies(movies);

  const handlePageClick = (e) => {
    setSelectedPage(e.selected + 1);
    setFilterId(0);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Fade>
        <h1>
          <span className="khatra-header">Khatra</span> movies
        </h1>
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
