import filterPillData from "../../services/filterPillData";
import FilterPill from "./FilterPill";

const FilterBar = ({ filterId, setFilterId }) => {
  return (
    <div className="filter-container">
      {filterPillData.map((filterPill) => (
        <FilterPill
          filterPill={filterPill}
          filterId={filterId}
          setFilterId={setFilterId}
          key={filterPill.id}
        />
      ))}
    </div>
  );
};

export default FilterBar;
