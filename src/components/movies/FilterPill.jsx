import { motion } from 'framer-motion';

const FilterPill = ({ filterPill,filterId,setFilterId }) => {
  return (
    <div
      className={`filter-pill`}
      onClick={() => setFilterId(filterPill?.id)}
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
  );
};

export default FilterPill;
