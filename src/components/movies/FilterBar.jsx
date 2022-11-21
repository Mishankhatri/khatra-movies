import { motion } from "framer-motion";

import filterPillData from '../../services/filterPillData';

const FilterBar = ({ filterId, setFilterId }) => {
  return (
    <div className="filter-container">
      {filterPillData.map((filterPill) => (
        <div
          className={`filter-pill`}
          onClick={() => setFilterId(filterPill?.id)}
          key={filterPill?.id}
        >
          <span>{filterPill?.name}</span>
          {filterId === filterPill?.id ? (
            <motion.span
              className="active-bar"
              layoutId="active-bar"
              key={filterPill.id}
              transition={{
                layout: { duration: 0.2 },
              }}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
