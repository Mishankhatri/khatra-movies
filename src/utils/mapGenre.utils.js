import filterPillData from "../services/filterPillData";

const mapIdsToGenre = (genreIds = []) => {
  return genreIds.map(
    (genreId) => filterPillData.find((genre) => genre.id === genreId).name
  );
};

export default mapIdsToGenre